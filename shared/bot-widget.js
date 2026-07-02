(function() {
    // Expose init globally
    window.initBotWidget = function() {
        // Prevent loading on the dedicated chat page
        if (window.location.pathname.toLowerCase().includes('chat.html')) return;
        
        let widgetHistory = [];
        let widgetPlatformData = '';
        
        const botLang = localStorage.getItem('mediai_lang') || 'ar';
        const isEn = botLang === 'en';
        
        const widgetHtml = `
            <!-- Floating Button -->
            <div class="bot-widget-btn" id="botWidgetBtn" onclick="toggleBotWidget()">
                <i class="bi bi-chat-dots-fill"></i>
            </div>
            
            <!-- Widget Container -->
            <div class="bot-widget-container d-none hiding" id="botWidgetContainer">
                <div class="bot-widget-header">
                    <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-robot" style="font-size: 1.3rem;"></i>
                        <h6 class="mb-0">Smart Care 360 Assistant</h6>
                    </div>
                    <button class="bot-widget-close" onclick="toggleBotWidget()">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                
                <div class="bot-widget-body" id="botWidgetBody">
                    <div class="widget-msg received">
                        <p class="mb-0">${isEn ? 'Hello! I am the Smart Care 360 AI Assistant. How can I help you today?' : 'مرحباً! أنا المساعد الذكي لموقع Smart Care 360. كيف يمكنني مساعدتك اليوم؟'}</p>
                        <span class="small text-muted mt-1 px-1 d-block" style="font-size: 0.7rem;">${isEn ? 'Now' : 'الآن'}</span>
                    </div>
                </div>
                
                <div class="bot-widget-footer">
                    <div class="widget-quick-actions" id="widgetQuickActions">
                        <button type="button" class="btn btn-outline-primary" onclick="sendWidgetQuickAction('${isEn ? 'How to upload an X-ray?' : 'كيف أرفع صورة أشعة؟'}')">💡 ${isEn ? 'Upload X-ray?' : 'رفع أشعة؟'}</button>
                        <button type="button" class="btn btn-outline-primary" onclick="sendWidgetQuickAction('${isEn ? 'How to book an appointment?' : 'كيف أحجز موعد؟'}')">💡 ${isEn ? 'Book Appointment?' : 'حجز موعد؟'}</button>
                        <button type="button" class="btn btn-outline-primary" onclick="sendWidgetQuickAction('${isEn ? 'What diseases do you diagnose?' : 'ما الأمراض التي تشخصونها؟'}')">💡 ${isEn ? 'Available Diseases?' : 'الأمراض المتاحة؟'}</button>
                    </div>
                    <form id="botWidgetForm" class="d-flex gap-2">
                        <input type="text" id="botWidgetInput" class="form-control rounded-pill px-3" placeholder="${isEn ? 'Type your question here...' : 'اكتب سؤالك هنا...'}" autocomplete="off" required>
                        <button type="button" class="btn btn-light rounded-circle d-flex align-items-center justify-content-center border" style="width: 40px; height: 40px; flex-shrink: 0;" id="widgetVoiceBtn" onclick="startVoiceRecognition('botWidgetInput', 'widgetVoiceIcon')">
                            <i class="bi bi-mic-fill text-primary" id="widgetVoiceIcon"></i>
                        </button>
                        <button type="submit" class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; flex-shrink: 0;">
                            <i class="bi bi-send-fill" style="margin-left: -2px;"></i>
                        </button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', widgetHtml);
        
        const form = document.getElementById('botWidgetForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = document.getElementById('botWidgetInput');
            const message = input.value.trim();
            if(!message) return;
            
            appendWidgetMsg('sent', message);
            input.value = '';
            
            const role = localStorage.getItem('mediai_auth_role') || 'guest';
            
            if (!widgetPlatformData && window.Api && window.Api.doctors) {
                try {
                    const docs = await Api.doctors.getAll();
                    const docsList = Array.isArray(docs) ? docs : (docs.data || docs.doctors || []);
                    if(docsList.length > 0) {
                        const botLang = localStorage.getItem('mediai_lang') || 'ar';
                        const isEn = botLang === 'en';
                        if (isEn) {
                            widgetPlatformData = "The doctors currently available on the platform are: " + docsList.map(d => `${window.translateDoctorName ? translateDoctorName(d.fullName || d.name, botLang) : (d.fullName || d.name)} (Specialty ${d.specialty || d.specialization || 'General'})`).join(', ');
                        } else {
                            widgetPlatformData = "الأطباء المتاحين في المنصة حالياً هم: " + docsList.map(d => `${window.translateDoctorName ? translateDoctorName(d.fullName || d.name, botLang) : (d.fullName || d.name)} (تخصص ${d.specialty || d.specialization || 'عام'})`).join('، ');
                        }
                    } else {
                        const botLang = localStorage.getItem('mediai_lang') || 'ar';
                        widgetPlatformData = botLang === 'en' ? "There are no registered doctors currently." : "لا يوجد أطباء مسجلين حالياً.";
                    }
                } catch(e) {
                    const botLang = localStorage.getItem('mediai_lang') || 'ar';
                    widgetPlatformData = botLang === 'en' ? "Live data is not available right now." : "البيانات الحية غير متاحة الآن.";
                }
            }

            showWidgetTyping();
            
            try {
                const response = await fetch(`${Api.aiBaseUrl}/chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: message,
                        user_role: role,
                        history: widgetHistory,
                        platform_data: widgetPlatformData,
                        lang: localStorage.getItem('mediai_lang') || 'ar'
                    })
                });
                const data = await response.json();
                removeWidgetTyping();
                
                if (data.success) {
                    widgetHistory.push({ role: 'user', text: message });
                    widgetHistory.push({ role: 'model', text: data.reply });
                    if(widgetHistory.length > 6) widgetHistory = widgetHistory.slice(-6);
                    appendWidgetMsg('received', data.reply, true);
                } else {
                    const isEn = (localStorage.getItem('mediai_lang') || 'ar') === 'en';
                    appendWidgetMsg('received', data.reply || (isEn ? 'A temporary error occurred.' : 'حدث خطأ مؤقت.'));
                }
            } catch (err) {
                removeWidgetTyping();
                const isEn = (localStorage.getItem('mediai_lang') || 'ar') === 'en';
                appendWidgetMsg('received', isEn ? 'Sorry, failed to connect to the AI server.' : 'عذراً، فشل الاتصال بخادم الذكاء الاصطناعي.');
            }
        });
    };

    window.toggleBotWidget = function() {
        const container = document.getElementById('botWidgetContainer');
        const btnIcon = document.querySelector('#botWidgetBtn i');
        if(container.classList.contains('d-none')) {
            container.classList.remove('d-none');
            // Wait for display block to apply before animating opacity
            setTimeout(() => container.classList.remove('hiding'), 10);
            btnIcon.className = 'bi bi-x-lg';
            document.getElementById('botWidgetInput').focus();
        } else {
            container.classList.add('hiding');
            setTimeout(() => container.classList.add('d-none'), 300);
            btnIcon.className = 'bi bi-chat-dots-fill';
        }
    };
    
    window.sendWidgetQuickAction = function(msg) {
        const input = document.getElementById('botWidgetInput');
        input.value = msg;
        document.getElementById('botWidgetForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    };

    function appendWidgetMsg(type, text, isMarkdown = false) {
        const body = document.getElementById('botWidgetBody');
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        const content = (isMarkdown && window.marked) ? marked.parse(text) : `<p class="mb-0">${text}</p>`;
        
        const msgHtml = `
            <div class="widget-msg ${type}">
                ${content}
                <span class="small mt-1 px-1 d-block" style="font-size: 0.7rem; opacity: 0.7; text-align: right;">${time}</span>
            </div>
        `;
        body.insertAdjacentHTML('beforeend', msgHtml);
        body.scrollTop = body.scrollHeight;
    }

    function showWidgetTyping() {
        const body = document.getElementById('botWidgetBody');
        const typingHtml = `
            <div class="widget-msg received widget-typing-container" id="widgetTyping">
                <div class="widget-typing"><span></span><span></span><span></span></div>
            </div>
        `;
        body.insertAdjacentHTML('beforeend', typingHtml);
        body.scrollTop = body.scrollHeight;
    }

    function removeWidgetTyping() {
        const typing = document.getElementById('widgetTyping');
        if(typing) typing.remove();
    }
})();
