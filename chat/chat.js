translations.en = Object.assign(translations.en, {
    "chat_contacts": "Contacts",
    "chat_online": "Online",
    "chat_offline": "Offline",
    "ph_type_msg": "Type your message...",
    "chat_ai_greeting": "Hello! I am your Smart Care 360 Assistant. How can I help you today?",
    "chat_bot_reply": "I am the AI assistant. I've received your query: '{msg}'. Please consult with a doctor for serious concerns.",
    "chat_login_required": "Please login to chat with doctors."
});

translations.ar = Object.assign(translations.ar, {
    "chat_contacts": "جهات الاتصال",
    "chat_online": "متصل",
    "chat_offline": "غير متصل",
    "ph_type_msg": "اكتب رسالتك...",
    "chat_ai_greeting": "مرحباً! أنا المساعد الذكي الخاص بك من سمارت كير 360. كيف يمكنني مساعدتك اليوم؟",
    "chat_bot_reply": "أنا المساعد الذكي. لقد تلقيت استفسارك: '{msg}'. يرجى استشارة طبيب للمخاوف الخطيرة.",
    "chat_login_required": "يرجى تسجيل الدخول للتحدث مع الأطباء."
});

// MediAI Chat Logic
const role = localStorage.getItem('mediai_auth_role');
const botContact = { id: 'bot', name: 'Smart Care 360 Assistant', type: 'bot', online: true };
let contacts = [botContact];
let currentChatId = 'bot';
let connection = null;
let botChatHistory = [];
let botPlatformData = '';

window.sendQuickAction = function(msg) {
    const input = document.getElementById('chatInput');
    if(input) {
        input.value = msg;
        // manually trigger submit
        const form = document.getElementById('chatForm');
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
};

async function startSignalR() {
    const token = localStorage.getItem('mediai_token');
    if (!token) return;

    connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub", {
            accessTokenFactory: () => token
        })
        .withAutomaticReconnect()
        .build();

    connection.on("ReceiveMessage", (data) => {
        console.log("Real-time message received:", data);
        // If the message is from the person we are currently chatting with, append it
        if (currentChatId && String(data.senderId).toLowerCase() === String(currentChatId).toLowerCase()) {
            appendMessage('received', data.content);
        } else {
            // Optionally: highlight the contact in the list if it's from someone else
            const contact = contacts.find(c => String(c.id).toLowerCase() === String(data.senderId).toLowerCase());
            if (contact) {
                showAlert(`${translations[document.documentElement.lang || 'en']['new_msg_from'] || 'New message from'} ${contact.name}`, 'info');
            }
        }
    });

    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.error("SignalR Connection Error:", err);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const role = localStorage.getItem('mediai_auth_role');
    if (!role) {
        window.location.href = '../login/login.html?redirect=../chat/chat.html';
        return;
    }

    // Start SignalR
    startSignalR();

    // Load contacts from API
    try {
        const data = await Api.chat.getContacts();
        const apiContacts = Array.isArray(data) ? data : (data.contacts || []);
        
        const chatLang = localStorage.getItem('mediai_lang') || 'en';
        const mappedContacts = apiContacts.map(c => {
            const isDoc = (c.role || '').toLowerCase() === 'doctor';
            return {
                id: c.id || c._id,
                name: translateDoctorName(c.fullName || c.name || (isDoc ? 'Doctor' : 'Patient'), chatLang),
                type: isDoc ? 'doctor' : 'patient',
                online: c.online ?? false,
                spec: c.specialty || c.specialization || (isDoc ? '' : 'Patient')
            };
        });

        // For doctors, we hide the AI bot entirely as requested ("conversations only")
        if (role === 'doctor') {
            contacts = mappedContacts;
            if (mappedContacts.length > 0) {
                currentChatId = mappedContacts[0].id;
            } else {
                currentChatId = null;
            }
        } else {
            contacts = [botContact, ...mappedContacts];
        }
    } catch (e) {
        console.warn('Could not load contacts:', e);
    }

    renderContacts();
    setupChatFromUrl();
});


function logout() {
    Api.clearSession();
    window.location.href = '../login/login.html';
}

function renderContacts() {
    const list = document.getElementById('contactsList');
    if (!list) return; // Guard for non-chat pages if shared
    list.innerHTML = '';
    
    if (contacts.length === 0) {
        list.innerHTML = `
            <div class="text-center p-5 text-muted">
                <i class="bi bi-chat-left-dots fs-1 d-block mb-3 opacity-25"></i>
                <p data-lang="no_chats">${translations[document.documentElement.lang || 'en']['no_chats'] || 'No active conversations'}</p>
            </div>
        `;
        return;
    }
    
    contacts.forEach(c => {
        const isActive = String(c.id).toLowerCase() === String(currentChatId).toLowerCase();
        const onlineClass = c.online ? 'bg-success' : 'bg-secondary';
        const docSpec = c.spec ? `<small class="text-muted d-block">${c.spec}</small>` : '';
        
        let icon = '🤖';
        if (c.type === 'doctor') icon = '👨‍⚕️';
        if (c.type === 'patient') icon = '👤';

        list.innerHTML += `
            <a href="#" class="list-group-item py-3 px-3 d-flex align-items-center gap-3 ${isActive ? 'bg-light border-start border-primary border-4' : 'border-0'}" onclick="switchChat('${c.id}')">
                <div class="position-relative">
                    <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; font-size: 1.2rem;">
                        ${icon}
                    </div>
                    <span class="position-absolute bottom-0 end-0 p-1 ${onlineClass} border border-white rounded-circle"></span>
                </div>
                <div>
                    <h6 class="mb-0 fw-bold text-dark">${c.name}</h6>
                    ${docSpec}
                </div>
            </a>
        `;
    });
}

function setupChatFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('doc');
    const isBot = urlParams.get('bot');
    
    if (docId) switchChat(docId);
    else if (isBot) switchChat('bot');
    else if (currentChatId) switchChat(currentChatId);
}

async function switchChat(id) {
    currentChatId = id;
    renderContacts();
    
    const contact = contacts.find(c => String(c.id).toLowerCase() === String(id).toLowerCase());
    const chatBox = document.getElementById('chatBox');
    const quickActions = document.getElementById('quickActions');
    if (!chatBox) return;

    if (contact) {
        document.getElementById('chatHeaderName').textContent = contact.name;
        
        const headerIcon = document.getElementById('chatHeaderIcon');
        if (contact.type === 'bot') {
            const btnSummarize = document.getElementById('btnSummarize');
            if(btnSummarize) btnSummarize.classList.add('d-none');
            
            headerIcon.innerHTML = '<i class="bi bi-robot" style="font-size:1.4rem;"></i>';
        } else if (contact.type === 'doctor') {
            headerIcon.innerHTML = '<i class="bi bi-person-badge" style="font-size:1.4rem;"></i>';
        } else {
            headerIcon.innerHTML = '<i class="bi bi-person-fill" style="font-size:1.4rem;"></i>';
        }

        const statusLangKey = contact.online ? 'chat_online' : 'chat_offline';
        document.getElementById('chatHeaderStatus').setAttribute('data-lang', statusLangKey);
        document.getElementById('chatHeaderStatus').textContent = (translations[document.documentElement.lang || 'en'] || {})[statusLangKey] || statusLangKey;
        
        document.getElementById('onlineStatusIndicator').className =
            `position-absolute bottom-0 end-0 p-1 border border-light rounded-circle ${contact.online ? 'bg-success' : 'bg-secondary'}`;

        chatBox.innerHTML = '';
        
        if (contact.type === 'bot') {
            if(quickActions) {
                quickActions.classList.remove('d-none');
                const isEn = (localStorage.getItem('mediai_lang') || 'ar') === 'en';
                quickActions.innerHTML = `
                    <button type="button" class="btn btn-sm btn-outline-primary rounded-pill text-nowrap" onclick="sendQuickAction('${isEn ? 'How to upload an X-ray?' : 'كيف أرفع صورة أشعة؟'}')">💡 ${isEn ? 'Upload X-ray?' : 'كيف أرفع صورة أشعة؟'}</button>
                    <button type="button" class="btn btn-sm btn-outline-primary rounded-pill text-nowrap" onclick="sendQuickAction('${isEn ? 'How to book an appointment?' : 'كيف أحجز موعد مع طبيب؟'}')">💡 ${isEn ? 'Book Appointment?' : 'كيف أحجز موعد؟'}</button>
                    <button type="button" class="btn btn-sm btn-outline-primary rounded-pill text-nowrap" onclick="sendQuickAction('${isEn ? 'What diseases do you diagnose?' : 'ما هي الأمراض التي تشخصها المنصة؟'}')">💡 ${isEn ? 'Available Diseases?' : 'ما الأمراض التي تشخصها المنصة؟'}</button>
                `;
            }
            chatBox.innerHTML = `
            <div class="chat-message received mb-3 d-flex flex-column align-items-start">
                <div class="message-bubble bg-white border text-dark p-3 rounded-4 shadow-sm" style="max-width: 75%;">
                    <p class="mb-0" data-lang="chat_ai_greeting">${translations[document.documentElement.lang || 'en']['chat_ai_greeting']}</p>
                </div>
                <span class="small text-muted mt-1 px-1">Just now</span>
            </div>`;
        } else {
            const role = localStorage.getItem('mediai_auth_role');
            const btnSummarize = document.getElementById('btnSummarize');
            if(btnSummarize) {
                if(role === 'doctor') {
                    btnSummarize.classList.remove('d-none');
                } else {
                    btnSummarize.classList.add('d-none');
                }
            }

            if(quickActions) quickActions.classList.add('d-none');
            try {
                const data = await Api.chat.getHistory(id);
                const msgs = Array.isArray(data) ? data : (data.messages || []);
                const myId = localStorage.getItem('mediai_user_id');
                msgs.forEach(m => {
                    const isSent = String(m.senderId).toLowerCase() === String(myId).toLowerCase();
                    appendMessage(isSent ? 'sent' : 'received', m.content || m.message || m.text || '');
                });
            } catch (e) {
                console.warn('Could not load chat history:', e);
            }
        }
    } else {
        // Contact not in list yet — try to fetch from API (e.g. clicking "Chat Now" on a new doctor)
        try {
            const userRole = localStorage.getItem('mediai_auth_role');
            let userData;
            if (userRole === 'patient' || userRole === 'Patient') {
                userData = await Api.doctors.getById(id);
            } else if (userRole === 'doctor' || userRole === 'Doctor') {
                throw new Error('Patient fetch not available for doctors');
            }
            if (userData) {
                const chatLang = localStorage.getItem('mediai_lang') || 'en';
                const newContact = {
                    id: userData.id || userData._id,
                    name: translateDoctorName(userData.fullName || userData.name, chatLang),
                    type: userRole === 'patient' ? 'doctor' : 'patient',
                    online: userData.online ?? false,
                    spec: userData.specialty || userData.specialization || ''
                };
                contacts.push(newContact);
                renderContacts();
                switchChat(id);
                return;
            }
        } catch (e) {
            console.warn('Could not fetch unknown contact:', e);
        }
        document.getElementById('chatHeaderName').textContent = 'Select a conversation';
        chatBox.innerHTML = '<div class="h-100 d-flex align-items-center justify-content-center text-muted">Please select a contact to start chatting</div>';
    }
}

document.getElementById('chatForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message || !currentChatId) return;

    appendMessage('sent', message);
    input.value = '';

    if (currentChatId === 'bot') {
        if (!botPlatformData && window.Api && window.Api.doctors) {
            try {
                const docs = await Api.doctors.getAll();
                const docsList = Array.isArray(docs) ? docs : (docs.data || docs.doctors || []);
                if(docsList.length > 0) {
                    botPlatformData = "الأطباء المتاحين في المنصة حالياً هم: " + docsList.map(d => `${d.fullName || d.name} (تخصص ${d.specialty || d.specialization || 'عام'})`).join('، ');
                } else {
                    botPlatformData = "لا يوجد أطباء مسجلين حالياً.";
                }
            } catch(e) {
                botPlatformData = "البيانات الحية غير متاحة الآن.";
            }
        }
        
        showTyping();
        try {
            const response = await fetch(`${Api.aiBaseUrl}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: message,
                    user_role: role || 'guest',
                    history: botChatHistory,
                    platform_data: botPlatformData,
                    lang: localStorage.getItem('mediai_lang') || 'ar'
                })
            });
            const data = await response.json();
            removeTyping();
            if (data.success) {
                botChatHistory.push({ role: 'user', text: message });
                botChatHistory.push({ role: 'model', text: data.reply });
                if (botChatHistory.length > 8) botChatHistory = botChatHistory.slice(-8); // Keep last 8 interactions
                appendMessage('received', data.reply, true);
            } else {
                appendMessage('received', data.reply || 'Sorry, an error occurred.');
            }
        } catch (err) {
            console.error('Bot Error:', err);
            removeTyping();
            appendMessage('received', 'Failed to connect to AI server.');
        }
    } else {
        try {
            await Api.chat.send({ receiverId: currentChatId, content: message });
        } catch (err) {
            console.warn('Failed to send message:', err);
        }
    }
});

window.summarizeChat = async function() {
    const btn = document.getElementById('btnSummarize');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> جاري التلخيص...';
    btn.disabled = true;

    try {
        const data = await Api.chat.getHistory(currentChatId);
        const msgs = Array.isArray(data) ? data : (data.messages || []);
        
        let conversationStr = msgs.map(m => {
            const sender = String(m.senderId).toLowerCase() === String(localStorage.getItem('mediai_user_id')).toLowerCase() ? 'الطبيب' : 'المريض';
            return `${sender}: ${m.content || m.message || m.text}`;
        }).join('\n');

        if(!conversationStr || conversationStr.trim() === '') conversationStr = "لا توجد محادثة مسجلة.";

        const response = await fetch(`${Api.aiBaseUrl}/summarize`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ conversation: conversationStr })
        });
        
        const result = await response.json();
        
        document.getElementById('summaryModalBody').innerHTML = window.marked ? marked.parse(result.reply) : `<p>${result.reply}</p>`;
        const summaryModal = new bootstrap.Modal(document.getElementById('summaryModal'));
        summaryModal.show();
        
    } catch(err) {
        console.error(err);
        alert("عذراً، حدث خطأ تقني: " + err.message);
        if(window.showAlert) showAlert("فشل التلخيص الذكي. قد يكون السيرفر مغلقاً.", "danger");
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
};

function appendMessage(type, text, isMarkdown = false) {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) return;
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    const alignClass = type === 'sent' ? 'align-items-end' : 'align-items-start';
    const bgClass = type === 'sent' ? 'bg-primary text-white' : 'bg-white border text-dark';
    const marginClass = type === 'sent' ? 'ms-auto' : 'me-auto';
    
    const content = (isMarkdown && window.marked) ? marked.parse(text) : `<p class="mb-0">${text}</p>`;
    
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${type} mb-3 d-flex flex-column ${alignClass} ${marginClass}`;
    msgDiv.innerHTML = `
        <div class="message-bubble ${bgClass} p-3 rounded-4 shadow-sm" style="max-width: 75%;">
            ${content}
        </div>
        <span class="small text-muted mt-1 px-1">${time}</span>
    `;
    chatBox.appendChild(msgDiv);
    scrollToBottom();
}

function showTyping() {
    const chatBox = document.getElementById('chatBox');
    if (!chatBox) return;
    const div = document.createElement('div');
    div.id = 'typingIndicatorBox';
    div.className = 'chat-message received typing-indicator-container mb-3 d-flex flex-column align-items-start';
    div.innerHTML = `
        <div class="message-bubble bg-white border text-dark p-3 rounded-4 shadow-sm">
            <div class="typing-indicator"><span></span><span></span><span></span></div>
        </div>
    `;
    chatBox.appendChild(div);
    scrollToBottom();
}

function removeTyping() {
    const typingBox = document.getElementById('typingIndicatorBox');
    if(typingBox) typingBox.remove();
}

function scrollToBottom() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
}
