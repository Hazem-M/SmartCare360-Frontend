// ═══════════════════════════════════════
//  LOGIN PAGE — Translations & Logic
// ═══════════════════════════════════════

// Extend global translations
translations.en = Object.assign(translations.en, {
    "login_title": "Welcome Back",
    "login_subtitle_form": "Enter your credentials to access your secure health portal",
    "select_role": "Access Level",
    "role_patient": "Patient",
    "role_doctor": "Doctor",
    "role_admin": "Admin",
    "email_label": "Username",
    "doctor_id_label": "Doctor ID",
    "admin_id_label": "Admin ID",
    "password_label": "Password",
    "forgot_pass": "Forgot password?",
    "login_btn": "Sign In",
    "no_account": "Don't have an account?",
    "register_link": "Create Account",
    "back_home": "Back to Homepage",
    "login_visual_title": "Advanced Medical Intelligence",
    "login_visual_subtitle": "Empowering healthcare with state-of-the-art AI diagnostics and seamless patient-doctor connectivity.",
    "login_error": "Login failed. Please check your credentials and try again.",
    "login_pending": "Your account is pending admin approval. Please wait for admin verification.",
    "login_rejected": "Your account was rejected",
    "btn_switch_lang": "العربية",
    "lang_text": "العربية"
});

translations.ar = Object.assign(translations.ar, {
    "login_title": "مرحباً بعودتك",
    "login_subtitle_form": "أدخل بياناتك للوصول إلى بوابتك الصحية الآمنة",
    "select_role": "مستوى الدخول",
    "role_patient": "مريض",
    "role_doctor": "طبيب",
    "role_admin": "مدير النظام",
    "email_label": "اسم المستخدم",
    "doctor_id_label": "معرف الطبيب",
    "admin_id_label": "معرف المدير",
    "password_label": "كلمة المرور",
    "forgot_pass": "نسيت كلمة المرور؟",
    "login_btn": "تسجيل الدخول",
    "no_account": "ليس لديك حساب؟",
    "register_link": "إنشاء حساب",
    "back_home": "العودة للرئيسية",
    "login_visual_title": "ذكاء طبي متقدم",
    "login_visual_subtitle": "تمكين الرعاية الصحية من خلال تشخيصات الذكاء الاصطناعي الأحدث والتواصل السلس بين المريض والطبيب.",
    "login_error": "فشل تسجيل الدخول. يرجى التحقق من بياناتك والمحاولة مرة أخرى.",
    "login_pending": "حسابك قيد انتظار موافقة المشرف. يرجى انتظار التحقق.",
    "login_rejected": "تم رفض حسابك",
    "btn_switch_lang": "English",
    "lang_text": "English"
});

// ═══════════════════════
//  Interactive Elements
// ═══════════════════════

// Role-based icon & label update
function updateIconForRole(role) {
    const icons = {
        patient: document.getElementById('emailIconPerson'),
        doctor: document.getElementById('emailIconDoctor'),
        admin: document.getElementById('emailIconAdmin')
    };
    const label = document.getElementById('emailLabel');
    const input = document.getElementById('email');
    const lang = localStorage.getItem('mediai_lang') || 'en';

    // Show only the matching icon, hide others
    Object.keys(icons).forEach(key => {
        if (key === role) {
            icons[key].classList.remove('d-none');
        } else {
            icons[key].classList.add('d-none');
        }
    });

    if (role === 'patient') {
        label.dataset.lang = 'email_label';
        label.textContent = translations[lang].email_label;
        input.placeholder = lang === 'ar' ? 'اسم المستخدم' : 'username or email';
    } else if (role === 'doctor') {
        label.dataset.lang = 'doctor_id_label';
        label.textContent = translations[lang].doctor_id_label;
        input.placeholder = lang === 'ar' ? 'اسم المستخدم للطبيب' : 'doctor username';
    } else if (role === 'admin') {
        label.dataset.lang = 'admin_id_label';
        label.textContent = translations[lang].admin_id_label;
        input.placeholder = lang === 'ar' ? 'اسم المستخدم للمدير' : 'admin username';
    }
}

document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', function() {
        const id = this.getAttribute('for');
        const radio = document.getElementById(id);
        if (radio) {
            radio.checked = true;
            updateIconForRole(radio.value);
        }
    });
});

// Set initial icon based on default checked role
const checkedRole = document.querySelector('input[name="role"]:checked');
if (checkedRole) updateIconForRole(checkedRole.value);

// Password Toggle
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.replace('bi-eye-slash', 'bi-eye');
    }
});

// Scroll Reveal for Login
function initLoginReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// Manual Language Toggle (since login doesn't use the shared navbar yet)
function toggleLanguageManual() {
    const currentLang = localStorage.getItem('mediai_lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    toggleLanguage(newLang);
    updateLangBtnText(newLang);
    // Re-apply role icon/label with new language
    const checkedRole = document.querySelector('input[name="role"]:checked');
    if (checkedRole) updateIconForRole(checkedRole.value);
}

function updateLangBtnText(lang) {
    const btnText = document.getElementById('langText');
    if (btnText) {
        btnText.textContent = lang === 'en' ? 'العربية' : 'English';
    }
}

// ═══════════════════════
//  Auth Logic
// ═══════════════════════

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner-border');

    // UI Loading State
    submitBtn.disabled = true;
    btnText.classList.add('d-none');
    spinner.classList.remove('d-none');

    const lang = localStorage.getItem('mediai_lang') || 'en';

    try {
        // Call real API: POST /api/auth/login
        const result = await Api.auth.login({ email, password });

        // Save token + user info from .NET backend response
        Api.saveSession(result.token, {
            email: email,
            role: result.role ? result.role.toLowerCase() : role,
            name: result.fullName,
            id: result.userId,
            phone: result.phoneNumber
        });

        // Redirect based on role or URL redirect param
        const urlParams = new URLSearchParams(window.location.search);
        let redirectParam = urlParams.get('redirect');
        
        if (redirectParam) {
            // Check if there are other parameters appended to the redirect URL
            const rawSearch = window.location.search;
            const redirectIndex = rawSearch.indexOf('?redirect=');
            if (redirectIndex !== -1) {
                redirectParam = rawSearch.substring(redirectIndex + 10);
            }
            window.location.href = redirectParam;
        } else {
            const userRole = result.role ? result.role.toLowerCase() : role;
            if (userRole === 'admin') {
                window.location.href = '../admin-dashboard/admin-dashboard.html';
            } else if (userRole === 'doctor') {
                window.location.href = '../doctor-dashboard/doctor-dashboard.html';
            } else {
                window.location.href = '../patient-dashboard/patient-dashboard.html';
            }
        }

    } catch (error) {
        console.error('Login error:', error);
        const msg = error.message || '';
        let displayMsg;
        if (msg.includes('pending admin approval')) {
            displayMsg = translations[lang].login_pending;
        } else if (msg.includes('was rejected')) {
            const reason = msg.includes(':') ? msg.substring(msg.indexOf(':')) : '';
            displayMsg = translations[lang].login_rejected + reason;
        } else {
            displayMsg = msg || translations[lang].login_error;
        }
        showAlert(displayMsg, 'error');
    } finally {
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        spinner.classList.add('d-none');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Auto-redirect if already logged in
    const token = localStorage.getItem('mediai_token');
    const role = localStorage.getItem('mediai_auth_role');
    if (token && role) {
        if (role === 'admin') {
            window.location.replace('../admin-dashboard/admin-dashboard.html');
            return;
        } else if (role === 'doctor') {
            window.location.replace('../doctor-dashboard/doctor-dashboard.html');
            return;
        } else {
            window.location.replace('../patient-dashboard/patient-dashboard.html');
            return;
        }
    }

    initLoginReveal();

    const savedLang = localStorage.getItem('mediai_lang') || 'en';
    updateLangBtnText(savedLang);
    if (window.setLanguage) setLanguage(savedLang);
});
