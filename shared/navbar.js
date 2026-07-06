/**
 * MediAI Shared Navbar — injects into <div id="navbar-placeholder">
 * Handles: active link detection, role-based profile URL, logout
 */
(function () {
    // 1. GLOBAL DOCTOR RESTRICTION
    const role = localStorage.getItem('mediai_auth_role');
    const currentPath = window.location.pathname.toLowerCase();
    const isInsidePortal = currentPath.includes('doctor-dashboard') || 
                           currentPath.includes('chat') || 
                           currentPath.includes('diagnosis') || 
                           currentPath.includes('profile') ||
                           currentPath.includes('login');
    
    if (role === 'doctor' && !isInsidePortal) {
        if (window.location.protocol === 'file:') {
            window.location.replace('../doctor-dashboard/doctor-dashboard.html');
        } else {
            window.location.replace('/doctor-dashboard/doctor-dashboard.html');
        }
        return; 
    }

    // 2. GLOBAL ADMIN RESTRICTION
    if (role === 'admin') {
        if (window.location.protocol === 'file:') {
            window.location.replace('../admin-dashboard/admin-dashboard.html');
        } else {
            window.location.replace('/admin-dashboard/admin-dashboard.html');
        }
        return;
    }

    const PAGES = [
        { key: 'home',      href: '/home/home.html',                    label_en: 'Home',               label_ar: 'الرئيسية' },
        { key: 'diagnosis', href: '/diagnosis/diagnosis.html',           label_en: 'AI Diagnosis',       label_ar: 'التشخيص الذكي' },
        { key: 'doctors',   href: '/doctors/doctors.html',               label_en: 'Doctors',            label_ar: 'الأطباء' },
        { key: 'booking',   href: '/booking/booking.html',               label_en: 'Appointments',       label_ar: 'المواعيد' },
        { key: 'chat',      href: '/chat/chat.html',                     label_en: 'Chat',               label_ar: 'المحادثات' }
    ];

    function getRelativePath(targetHref) {
        // If we're running locally from file:///, we can't use root-relative paths
        if (window.location.protocol === 'file:') {
            return '../' + (targetHref.startsWith('/') ? targetHref.substring(1) : targetHref);
        }
        // Since we are served at root by the .NET API, we can use root-relative paths
        return targetHref.startsWith('/') ? targetHref : '/' + targetHref;
    }

    function getCurrentPage() {
        const path = window.location.pathname.toLowerCase();
        for (const p of PAGES) {
            if (path.includes(p.key)) return p.key;
        }
        return '';
    }

    function getDashboardHref() {
        const role = localStorage.getItem('mediai_auth_role') || 'patient';
        return getRelativePath(role === 'doctor' ? '/doctor-dashboard/doctor-dashboard.html' : '/patient-dashboard/patient-dashboard.html');
    }

    function getLang() {
        return localStorage.getItem('mediai_lang') || 'en';
    }

    function getProfileHref() {
        const role = localStorage.getItem('mediai_auth_role') || 'patient';
        return getRelativePath(role === 'doctor' ? '/doctor-dashboard/doctor-dashboard.html' : '/patient-dashboard/patient-dashboard.html');
    }

    function buildNavbar() {
        const lang     = getLang();
        const isAr     = lang === 'ar';
        const current  = getCurrentPage();
        const dash     = getDashboardHref();
        const role     = localStorage.getItem('mediai_auth_role');
        const isGuest  = !role;

        const navLinks = PAGES
            .filter(p => {
                if (role === 'doctor') {
                    // Show ONLY Chat for doctors as requested ("Conversations only")
                    return p.key === 'chat';
                }
                return true;
            })
            .map(p => {
                const href  = getRelativePath(p.href);
                const label = isAr ? p.label_ar : p.label_en;
                const active = current === p.key ? ' active' : '';
                return `<li class="nav-item"><a class="nav-link${active}" href="${href}" data-nav-key="${p.key}">${label}</a></li>`;
            }).join('\n');

        const profileLabel = isAr ? 'الملف الشخصي' : 'Profile';
        const logoutLabel  = isAr ? 'تسجيل الخروج' : 'Logout';
        const loginLabel   = isAr ? 'تسجيل الدخول' : 'Login';
        const registerLabel = isAr ? 'إنشاء حساب' : 'Register';
        const langLabel    = isAr ? 'EN' : 'عربي';
        const homeHref     = getRelativePath('home/home.html');
        const loginHref    = getRelativePath('login/login.html');
        const registerHref = getRelativePath('register/register.html');

        let authButtons = '';
        if (isGuest) {
            authButtons = `
                <a href="${loginHref}" class="btn btn-outline-primary rounded-pill px-4" style="font-size:0.88rem;">${loginLabel}</a>
                <a href="${registerHref}" class="btn btn-primary rounded-pill px-4" style="font-size:0.88rem;">${registerLabel}</a>
            `;
        } else {
            const profileHref = getProfileHref();
            authButtons = `
                <a href="${profileHref}" class="nav-link fw-semibold px-2" id="navProfileBtn">
                    <i class="bi bi-person-circle me-1"></i>${profileLabel}
                </a>
                <button class="btn btn-primary rounded-pill px-4" style="font-size:0.88rem;" onclick="logout()" id="navLogoutBtn">${logoutLabel}</button>
            `;
        }

        return `
<nav class="navbar navbar-expand-lg sticky-top" id="mainNavbar">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="${homeHref}">
      <img src="${getRelativePath('assets/img/logo.png')}" alt="Smart Care 360 Logo" style="height: 55px; width: auto; object-fit: contain;">
      ${isAr ? 'سمارت كير 360' : 'Smart Care 360'}
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-1 mt-3 mt-lg-0">
        ${navLinks}
      </ul>
      <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0 pb-3 pb-lg-0 flex-wrap flex-lg-nowrap">
        <button class="dark-mode-btn" onclick="toggleDarkMode()" title="Toggle Dark Mode" id="darkModeBtn">
          <i class="bi bi-moon-fill" style="font-size:0.95rem;"></i>
        </button>
        <div class="dropdown">
          <button class="lang-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-globe2"></i>
            <span id="langBtnLabel">${langLabel}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2">
            <li><a class="dropdown-item fw-medium py-2" href="#" onclick="toggleLanguage('en'); return false;">English</a></li>
            <li><a class="dropdown-item fw-medium py-2" href="#" onclick="toggleLanguage('ar'); return false;">العربية</a></li>
          </ul>
        </div>
        ${authButtons}
      </div>
    </div>
  </div>
</nav>`;
    }

    function inject() {
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = buildNavbar();
        }
        if (window.updateLogoSources) {
            window.updateLogoSources(localStorage.getItem('mediAI_darkMode') === 'true');
        }

        // Preloader Injection - hides immediately
        if (!document.getElementById('site-preloader') && window.location.pathname.toLowerCase().indexOf('index.html') === -1) {
            const logoSrc = getRelativePath('assets/img/logo.png');
            const preloaderHtml = `
            <div id="site-preloader" style="opacity:0;pointer-events:none;transition:none;">
                <div class="preloader-content">
                    <img src="${logoSrc}" alt="Loading...">
                    <div class="spinner-border text-primary spinner-border-sm mt-2" role="status"></div>
                </div>
            </div>`;
            document.body.insertAdjacentHTML('afterbegin', preloaderHtml);
            const preloader = document.getElementById('site-preloader');
            if(preloader) setTimeout(() => preloader.remove(), 100);
        }

        // Inject floating chatbot widget (except on the main chat page)
        if (!document.getElementById('botWidgetScript') && !window.location.pathname.toLowerCase().includes('chat.html')) {
            const markedScript = document.createElement('script');
            markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
            document.head.appendChild(markedScript);

            const botScript = document.createElement('script');
            botScript.id = 'botWidgetScript';
            botScript.src = getRelativePath('shared/bot-widget.js');
            botScript.onload = () => {
                if(window.initBotWidget) window.initBotWidget();
            };
            document.body.appendChild(botScript);
        }
    }

    // Public helpers expected by every page
    window.logout = function () {
        localStorage.removeItem('mediai_auth_role');
        localStorage.removeItem('mediai_user');
        const loginPath = getRelativePath('/login/login.html');
        window.location.href = loginPath;
    };

    // Re-render navbar labels when language changes
    document.addEventListener('languageChanged', function () {
        inject();
    });

    // Global Voice Recognition
    window.startVoiceRecognition = function(inputId, iconId) {
        const input = document.getElementById(inputId);
        const icon = document.getElementById(iconId);
        
        if (input.recognition) {
            input.recognition.stop();
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("متصفحك لا يدعم خاصية الإدخال الصوتي.");
            return;
        }

        const recognition = new SpeechRecognition();
        // Default to Arabic since the user is speaking Arabic, fallback to lang if needed.
        recognition.lang = 'ar-EG';
        recognition.interimResults = true;
        recognition.continuous = true; // Keep listening even if user pauses

        let originalText = input.value || '';
        if(originalText && !originalText.endsWith(' ')) originalText += ' ';

        recognition.onstart = function() {
            if(icon) {
                icon.classList.remove('bi-mic-fill', 'text-primary');
                icon.classList.add('bi-mic-mute-fill', 'text-danger', 'pulse-anim');
            }
            input.placeholder = "المايك يعمل... تحدث الآن (اضغط للإيقاف)";
        };

        recognition.onresult = function(event) {
            let interim = '';
            let finalStr = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalStr += event.results[i][0].transcript;
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            input.value = originalText + finalStr + interim;
            if (finalStr) {
                originalText += finalStr;
            }
        };

        const resetUI = function() {
            if(icon) {
                icon.classList.remove('bi-mic-mute-fill', 'text-danger', 'pulse-anim');
                icon.classList.add('bi-mic-fill', 'text-primary');
            }
            input.placeholder = "اكتب سؤالك هنا...";
            input.recognition = null;
        };

        recognition.onend = resetUI;

        recognition.onerror = function(event) {
            console.warn("Speech recognition error:", event.error);
            if (event.error === 'not-allowed' || event.error === 'audio-capture') {
                alert("المتصفح لا يستطيع الوصول للميكروفون، يرجى التأكد من الإعدادات.");
            } else if (event.error !== 'no-speech') {
                alert("حدث خطأ في المايك: " + event.error);
            }
            resetUI();
        };

        input.recognition = recognition;
        try {
            recognition.start();
        } catch(e) {
            console.error("Failed to start:", e);
            resetUI();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
