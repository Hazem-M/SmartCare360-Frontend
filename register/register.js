// ═══════════════════════════════════════
//  REGISTER PAGE — Translations & Logic
// ═══════════════════════════════════════

// Extend global translations
translations.en = Object.assign(translations.en, {
    "register_title": "Create Account",
    "register_subtitle_form": "Join our community of over 50,000+ healthy users",
    "register_as": "Register As",
    "role_patient": "Patient",
    "role_doctor": "Doctor",
    "ph_name": "Full Name",
    "ph_email": "Email Address",
    "ph_phone": "Phone Number",
    "ph_password": "Password",
    "ph_age": "Age",
    "sel_gender": "Gender",
    "gen_male": "Male",
    "gen_female": "Female",
    "ph_specialization": "Specialty",
    "ph_select_spec": "Select Specialty",
    "ph_experience": "Years Exp.",
    "ph_clinic": "Clinic Address",
    "ph_id_card": "National ID Card",
    "id_card_hint": "Upload a clear photo or scan of your national ID card.",
    "btn_register": "Create Account",
    "have_account": "Already have an account?",
    "login_link": "Sign In",
    "back_home": "Back to Homepage",
    "register_visual_title": "Join the Future of Health",
    "register_visual_subtitle": "Create your secure medical account today and get access to instant AI diagnostics and expert consultations.",
    "reg_v_feat1": "Secure Encryption",
    "reg_v_feat2": "AI Health Analysis",
    "reg_v_feat3": "Verified Specialists",
    "register_success": "Registration successful! You can now login.",
    "register_error": "Registration failed. Please check your data and try again.",
    "password_weak": "Password must be at least 8 characters long."
});

translations.ar = Object.assign(translations.ar, {
    "register_title": "إنشاء حساب",
    "register_subtitle_form": "انضم إلى مجتمعنا الذي يضم أكثر من 50,000 مستخدم",
    "register_as": "التسجيل كـ",
    "role_patient": "مريض",
    "role_doctor": "طبيب",
    "ph_name": "الاسم الكامل",
    "ph_email": "البريد الإلكتروني",
    "ph_phone": "رقم الهاتف",
    "ph_password": "كلمة المرور",
    "ph_age": "العمر",
    "sel_gender": "الجنس",
    "gen_male": "ذكر",
    "gen_female": "أنثى",
    "ph_specialization": "التخصص",
    "ph_select_spec": "اختر التخصص",
    "ph_experience": "سنوات الخبرة",
    "ph_clinic": "عنوان العيادة",
    "ph_id_card": "بطاقة الهوية الوطنية",
    "id_card_hint": "يرجى رفع صورة واضحة أو مسح ضوئي لبطاقة الهوية الوطنية.",
    "btn_register": "إنشاء حساب",
    "have_account": "لديك حساب بالفعل؟",
    "login_link": "تسجيل الدخول",
    "back_home": "العودة للرئيسية",
    "register_visual_title": "انضم لمستقبل الصحة",
    "register_visual_subtitle": "أنشئ حسابك الطبي الآمن اليوم واحصل على تشخيصات فورية بالذكاء الاصطناعي واستشارات الخبراء.",
    "reg_v_feat1": "تشفير آمن",
    "reg_v_feat2": "تحليل صحي بالذكاء الاصطناعي",
    "reg_v_feat3": "متخصصون معتمدون",
    "register_success": "تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.",
    "register_error": "فشل إنشاء الحساب. يرجى التحقق من بياناتك والمحاولة مرة أخرى.",
    "password_weak": "يجب أن تتكون كلمة المرور من 8 أحرف وأرقام على الأقل."
});

// ═══════════════════════
//  Role Toggling Logic
// ═══════════════════════
const patientFields = document.getElementById('patientFields');
const doctorFields = document.getElementById('doctorFields');
const roleInputs = document.querySelectorAll('input[name="role"]');

function updateRoleFields() {
    const selectedRole = document.querySelector('input[name="role"]:checked').value;
    if (selectedRole === 'doctor') {
        patientFields.classList.add('d-none');
        doctorFields.classList.remove('d-none');
        document.getElementById('regAge').required = false;
        document.getElementById('regSpec').required = true;
        document.getElementById('regExp').required = true;
        document.getElementById('regClinic').required = true;
        document.getElementById('regIdCard').required = true;
    } else {
        patientFields.classList.remove('d-none');
        doctorFields.classList.add('d-none');
        document.getElementById('regAge').required = true;
        document.getElementById('regSpec').required = false;
        document.getElementById('regExp').required = false;
        document.getElementById('regClinic').required = false;
        document.getElementById('regIdCard').required = false;
    }
}

roleInputs.forEach(input => input.addEventListener('change', updateRoleFields));

// ═══════════════════════
//  Interactive Elements
// ═══════════════════════

function initRegisterReveal() {
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
//  Registration Logic
// ═══════════════════════

// ID Card file preview
document.getElementById('regIdCard')?.addEventListener('change', function() {
    const preview = document.getElementById('regIdCardPreview');
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = e => { preview.src = e.target.result; preview.classList.remove('d-none'); };
        reader.readAsDataURL(this.files[0]);
    } else {
        preview.classList.add('d-none');
    }
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const password = document.getElementById('regPassword').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner-border');
    const lang = localStorage.getItem('mediai_lang') || 'en';

    // Client-side password length check (min 8 chars)
    if (password.length < 8) {
        showAlert(translations[lang].password_weak, 'warning');
        return;
    }

    const payload = {
        fullName: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        password: password,
        isDoctor: role === 'doctor',
        specialty: role === 'doctor' ? document.getElementById('regSpec').value : null,
        
        // Extended attributes matching the frontend forms
        phoneNumber: document.getElementById('regPhone').value
    };

    if (role === 'patient') {
        payload.age = parseInt(document.getElementById('regAge').value) || 0;
        payload.gender = document.getElementById('regGender').value;
    } else {
        payload.experienceYears = parseInt(document.getElementById('regExp').value) || 0;
        payload.clinicAddress = document.getElementById('regClinic').value;
        payload.gender = document.getElementById('regGenderDoctor').value;
    }

    // UI Loading State
    submitBtn.disabled = true;
    btnText.classList.add('d-none');
    spinner.classList.remove('d-none');

    try {
        const idCardInput = document.getElementById('regIdCard');
        const idCardFile = (role === 'doctor' && idCardInput?.files?.[0]) ? idCardInput.files[0] : null;

        await Api.auth.register(payload, idCardFile);

        showAlert(translations[lang].register_success, 'success');
        setTimeout(() => { window.location.href = '../login/login.html'; }, 1500);

    } catch (error) {
        console.error('Registration error:', error);
        const msg = error.message || translations[lang].register_error;
        showAlert(msg, 'error');
    } finally {
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        spinner.classList.add('d-none');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initRegisterReveal();
    updateRoleFields(); // Initial state
    const savedLang = localStorage.getItem('mediai_lang') || 'en';
    updateLangBtnText(savedLang);
    if (window.setLanguage) setLanguage(savedLang);
});
