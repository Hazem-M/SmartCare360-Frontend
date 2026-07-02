// ═══════════════════════════════════════
//  FORGOT PASSWORD PAGE — Translations & Logic
// ═══════════════════════════════════════

// Extend global translations
translations.en = Object.assign(translations.en, {
    "forgot_pass_title": "Reset Password",
    "forgot_pass_subtitle": "Enter your email address to receive a password reset code.",
    "forgot_pass_btn": "Send Reset Code",
    "forgot_pass_success": "A reset code has been generated.",
    "remembered_pass": "Remembered your password?",
    "back_to_login": "Sign In",
    "email_invalid": "Please enter a valid email address.",
    "email_label": "Email Address",
    "email_ph": "name@example.com",
    "login_visual_title": "Advanced Medical Intelligence",
    "login_visual_subtitle": "Empowering healthcare with state-of-the-art AI diagnostics and seamless patient-doctor connectivity.",
    "trust_accuracy": "Accuracy",
    "trust_patients": "Patients",
    "back_home": "Back to Homepage"
});

translations.ar = Object.assign(translations.ar, {
    "forgot_pass_title": "إعادة تعيين كلمة المرور",
    "forgot_pass_subtitle": "أدخل بريدك الإلكتروني لتلقي كود إعادة التعيين.",
    "forgot_pass_btn": "إرسال الكود",
    "forgot_pass_success": "تم توليد كود إعادة التعيين.",
    "remembered_pass": "تذكرت كلمة المرور؟",
    "back_to_login": "تسجيل الدخول",
    "email_invalid": "يرجى إدخال بريد إلكتروني صحيح.",
    "email_label": "البريد الإلكتروني",
    "email_ph": "name@example.com",
    "login_visual_title": "ذكاء طبي متقدم",
    "login_visual_subtitle": "تمكين الرعاية الصحية من خلال تشخيصات الذكاء الاصطناعي الأحدث والتواصل السلس بين المريض والطبيب.",
    "trust_accuracy": "دقة",
    "trust_patients": "مرضى",
    "back_home": "العودة للرئيسية"
});

// ═══════════════════════
//  Interactive Elements
// ═══════════════════════

function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

function toggleLanguageManual() {
    const currentLang = localStorage.getItem('mediai_lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    toggleLanguage(newLang);
    updateLangBtnText(newLang);
    if (window.setLanguage) setLanguage(newLang);
}

function updateLangBtnText(lang) {
    const btnText = document.getElementById('langText');
    if (btnText) {
        btnText.textContent = lang === 'en' ? 'العربية' : 'English';
    }
}

// ═══════════════════════
//  3-Step OTP Flow State
// ═══════════════════════

let resetEmail = '';
let resetCode = '';
let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.reset-step').forEach(el => el.classList.add('d-none'));
    const el = document.getElementById(`step${step}`);
    if (el) el.classList.remove('d-none');
    currentStep = step;
}

// ── Step 1: Request OTP ──────────────────────────────────────────────────────
document.getElementById('forgotPasswordForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const form = e.target;
    if (!form.checkValidity()) { form.classList.add('was-validated'); return; }

    const email = document.getElementById('email').value.trim();
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner-border');

    submitBtn.disabled = true;
    btnText?.classList.add('d-none');
    spinner?.classList.remove('d-none');

    try {
        const res = await fetch('http://localhost:5000/api/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await res.json();

        if (!res.ok) {
            showAlert(data.message || (lang === 'ar' ? 'البريد غير مسجل.' : 'Email not found.'), 'error');
            return;
        }

        resetEmail = email;
        resetCode = data.code; // Backend returns the code directly

        // Show the code to the user (since no email server)
        const codeDisplay = document.getElementById('otpCodeDisplay');
        if (codeDisplay) codeDisplay.textContent = resetCode;

        showStep(2);

    } catch (err) {
        showAlert(lang === 'ar' ? 'فشل الاتصال بالسيرفر.' : 'Could not connect to server.', 'error');
    } finally {
        submitBtn.disabled = false;
        btnText?.classList.remove('d-none');
        spinner?.classList.add('d-none');
    }
});

// ── Step 2: Verify OTP ───────────────────────────────────────────────────────
document.getElementById('verifyOtpForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const enteredCode = document.getElementById('otpInput').value.trim();

    if (enteredCode !== resetCode) {
        showAlert(lang === 'ar' ? 'الكود غير صحيح.' : 'Incorrect code.', 'error');
        return;
    }
    showStep(3);
});

// ── Step 3: Set New Password ─────────────────────────────────────────────────
document.getElementById('resetPasswordForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        showAlert(lang === 'ar' ? 'كلمتا المرور غير متطابقتين.' : 'Passwords do not match.', 'error');
        return;
    }

    const submitBtn = document.getElementById('resetBtn');
    submitBtn.disabled = true;

    try {
        const res = await fetch('http://localhost:5000/api/auth/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: resetEmail, code: resetCode, newPassword })
        });
        const data = await res.json();

        if (!res.ok) {
            showAlert(data.message || 'Reset failed.', 'error');
            return;
        }

        showAlert(lang === 'ar' ? '✅ تم تغيير كلمة المرور بنجاح!' : '✅ Password reset successfully!', 'success');
        setTimeout(() => { window.location.href = '../login/login.html'; }, 2000);

    } catch (err) {
        showAlert(lang === 'ar' ? 'فشل الاتصال بالسيرفر.' : 'Could not connect to server.', 'error');
    } finally {
        submitBtn.disabled = false;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    const savedLang = localStorage.getItem('mediai_lang') || 'en';
    updateLangBtnText(savedLang);
    if (window.setLanguage) setLanguage(savedLang);
    showStep(1);
});
