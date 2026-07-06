// Global translation dictionary
const translations = {
    en: {
        // Global
        "nav_home": "Home",
        "brand_name": "Smart Care 360",
        "nav_diagnosis": "Instant Diagnosis",
        "nav_doctors": "Doctors",
        "nav_appointments": "Appointments",
        "nav_chat": "Chat",
        "footer_about": "Smart Care 360 is an advanced healthcare platform leveraging advanced clinical analysis technology to provide instant medical insights and connect patients with top specialists.",
        "footer_platform": "Platform",
        "footer_resources": "Resources",
        "footer_help": "Help Center",
        "footer_privacy": "Privacy Policy",
        "footer_terms": "Terms of Service",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo, Egypt - Smart Village",
        "footer_phone": "+20 100 000 0000",
        "footer_copyright": "© 2026 Smart Care 360. All rights reserved.",
        "footer_disclaimer": "Notice: This analysis is generated as a preliminary digital check. Always consult a qualified physician.",
        "nav_profile": "Profile",
        "nav_logout": "Logout",
        "btn_switch_lang": "عربي",
        "ph_select_spec": "Select Specialty",
        "spec_all": "All Specialties",
        "spec_cardiology": "Pneumonia",
        "spec_orthopedics": "Orthopedics",
        "spec_neurology": "Neurology",
        "spec_pneumonia": "Pulmonology",
        "filter": "Filter",
        "doc_bot_title": "Medical AI Assistant",
        "doc_bot_greeting": "Hello Doctor, I am your Medical AI Assistant. How can I help you today?",
        "doc_bot_placeholder": "Ask about a medical condition, protocol, or patient...",
        "suggested_docs_title": "Top Specialists for You",
        "doc_btn_book": "Book Now",
        "password_label": "Password",
        "forgot_pass": "Forgot password?",
        "edit_profile_title": "Edit Profile Details",
        "lbl_fullname": "Full Name",
        "lbl_phone": "Phone Number",
        "lbl_age": "Age",
        "lbl_gender": "Gender",
        "gender_male": "Male",
        "gender_female": "Female",
        "lbl_new_password": "New Password (Optional)",
        "password_help": "Leave blank to keep current password",
        "btn_save_changes": "Save Changes",
        "edit_profile_btn": "Edit Profile",
        "scan_xray_bone": "Bone Fracture (X-Ray)",
        "scan_ecg_heart": "Pneumonia (Chest X-Ray)",
        "scan_brain_neurology": "Brain Tumors (MRI)"
    },
    ar: {
        // Global
        "nav_home": "الرئيسية",
        "brand_name": "سمارت كير 360",
        "nav_diagnosis": "التشخيص الذكي",
        "nav_doctors": "الأطباء",
        "nav_appointments": "المواعيد",
        "nav_chat": "المحادثات",
        "footer_about": "سمارت كير 360 هي منصة رعاية صحية متقدمة تعتمد على تقنيات الفحص الفوري لتقديم استشارات طبية فورية وتوصيل المرضى بنخبة من الأطباء المتخصصين.",
        "footer_platform": "المنصة",
        "footer_resources": "الموارد",
        "footer_help": "مركز المساعدة",
        "footer_privacy": "سياسة الخصوصية",
        "footer_terms": "شروط الاستخدام",
        "footer_contact": "تواصل معنا",
        "footer_address": "القرية الذكية - القاهرة، مصر",
        "footer_phone": "+20 100 000 0000",
        "footer_copyright": "© 2026 سمارت كير 360. جميع الحقوق محفوظة.",
        "footer_disclaimer": "تنبيه: هذا الفحص يتم إنشاؤه تلقائياً بواسطة نظام فحص رقمي أولي. يرجى دائماً استشارة طبيب مؤهل.",
        "nav_profile": "الملف الشخصي",
        "nav_logout": "تسجيل الخروج",
        "btn_switch_lang": "English",
        "ph_select_spec": "اختر التخصص",
        "spec_all": "جميع التخصصات",
        "spec_cardiology": "الأمراض الصدرية",
        "spec_orthopedics": "جراحة العظام",
        "spec_neurology": "المخ والأعصاب",
        "spec_pneumonia": "الأمراض الصدرية",
        "filter": "تصفية",
        "doc_bot_title": "المساعد الطبي الذكي",
        "doc_bot_greeting": "مرحباً دكتور، أنا مساعدك الطبي الذكي. كيف يمكنني مساعدتك في مهامك اليومية أو مراجعة الحالات الطبية اليوم؟",
        "doc_bot_placeholder": "اسأل عن حالة طبية، دواء، أو مريض...",
        "suggested_docs_title": "نخبة الأطباء المقترحين لك",
        "doc_btn_book": "احجز الموعد",
        "password_label": "كلمة المرور",
        "forgot_pass": "نسيت كلمة المرور؟",
        "edit_profile_title": "تعديل بيانات الملف الشخصي",
        "lbl_fullname": "الاسم الكامل",
        "lbl_phone": "رقم الهاتف",
        "lbl_age": "العمر",
        "lbl_gender": "الجنس",
        "gender_male": "ذكر",
        "gender_female": "أنثى",
        "lbl_new_password": "كلمة المرور الجديدة (اختياري)",
        "password_help": "اتركها فارغة للاحتفاظ بكلمة المرور الحالية",
        "btn_save_changes": "حفظ التغييرات",
        "edit_profile_btn": "تعديل الملف الشخصي",
        "scan_xray_bone": "كسور العظام (أشعة سينية)",
        "scan_ecg_heart": "الالتهاب الرئوي (أشعة الصدر)",
        "scan_brain_neurology": "أورام المخ (رنين مغناطيسي)"
    }
};

function setLanguage(lang) {
    localStorage.setItem('mediai_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update bootstrap RTL vs LTR
    const bsLink = document.getElementById('bootstrap-css');
    if (bsLink) {
        if (lang === 'ar') {
            bsLink.href = '../assets/vendor/bootstrap/css/bootstrap.rtl.min.css';
        } else {
            bsLink.href = '../assets/vendor/bootstrap/css/bootstrap.min.css';
        }
    }

    // Translate specific elements including language toggle text 
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'IMG') {
                el.alt = translations[lang][key];
            } else {
                el.innerText = translations[lang][key]; // innerText to replace safely
            }
        }
    });

    // Fire event for local scripts to hook into if needed
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Dictionary for magical demo name translations
const demoNameTranslations = {
    "Hazem Mohamed": "حازم محمد",
    "hazem mohamed": "حازم محمد",
    // Can add more names here if needed
};

window.localizeName = function(name) {
    if (!name) return name;
    const lang = localStorage.getItem('mediai_lang') || 'en';
    
    if (lang === 'ar') {
        // Find if name matches ignoring case
        for (const [enName, arName] of Object.entries(demoNameTranslations)) {
            if (name.toLowerCase() === enName.toLowerCase()) {
                return arName;
            }
        }
    } else {
        // If English, translate back if it's stored in Arabic
        for (const [enName, arName] of Object.entries(demoNameTranslations)) {
            if (name === arName) {
                return enName; // Assuming original casing is fine
            }
        }
    }
    return name;
};

function initLanguage() {
    const savedLang = localStorage.getItem('mediai_lang') || 'en';
    setLanguage(savedLang);
}

// Ensure toggle language logic just swaps and saves
function toggleLanguage(newLang) {
    if(!newLang) {
        // Fallback toggle if no explicit lang passed
        const currentLang = localStorage.getItem('mediai_lang') || 'en';
        newLang = currentLang === 'en' ? 'ar' : 'en';
    }
    setLanguage(newLang);
    window.location.reload();
}

// Helper to translate specialty from English key
function translateSpecialty(specialty) {
    if (!specialty) return '';
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const key = `spec_${specialty.toLowerCase().replace(/\s+/g, '_')}`;
    return (translations[lang] && translations[lang][key]) ? translations[lang][key] : specialty;
}

// Helper to translate scan type (xray_bone → "X-Ray (Bone Fracture)")
function translateScanType(scanType) {
    if (!scanType) return '';
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const key = `scan_${scanType}`;
    return (translations[lang] && translations[lang][key]) ? translations[lang][key] : scanType;
}

// Helper to translate activity action strings (e.g. "Uploaded xray_bone")
function translateAction(action) {
    if (!action) return '';
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const match = action.match(/^Uploaded (.+)$/i);
    if (match) {
        const scanType = match[1];
        const translated = translateScanType(scanType);
        return lang === 'ar' ? `رفع ${translated}` : `Uploaded ${translated}`;
    }
    return action;
}

// Doctor name Arabic ↔ English mapping
const doctorNameMap = {
    "أحمد منصور": "Ahmed Mansour",
    "فاطمة حسن": "Fatma Hassan",
    "محمود سليم": "Mahmoud Selim",
    "عمرو خالد": "Amr Khaled",
    "كريم فهمي": "Karim Fahmy",
    "نهى إدريس": "Noha Idris",
    "أسامة النجار": "Osama Elnaggar",
    "سارة عبد الرحمن": "Sara Abdelrahman",
    "محمد عادل": "Mohamed Adel",
    "هدى سعيد": "Hoda Saeed",
    "محمد صلاح": "Mohamed Salah"
};

function translateDoctorName(name, lang) {
    if (!name) return '';
    
    // First check our global demo names mapping
    if (window.localizeName) {
        const localized = window.localizeName(name);
        if (localized !== name) return localized;
    }
    
    if (lang === 'ar') return name;
    const stripped = name.replace(/^د\.\s*/u, '').replace(/^Dr\.\s*/i, '').trim();
    const translated = doctorNameMap[stripped];
    if (translated) return `Dr. ${translated}`;
    if (doctorNameMap[name]) return `Dr. ${doctorNameMap[name]}`;
    return name;
}

// Get current location via Geolocation API + reverse geocode (used by register & doctor profile)
function getCurrentLocation(textareaId) {
    const el = document.getElementById(textareaId);
    if (!el) return;
    if (!navigator.geolocation) {
        if (window.showAlert) showAlert('Geolocation is not supported by your browser.', 'warning');
        return;
    }
    el.placeholder = 'Detecting location...';
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`);
            const data = await res.json();
            el.value = data.display_name || `${latitude}, ${longitude}`;
        } catch {
            el.value = `${latitude}, ${longitude}`;
        }
    }, () => {
        if (window.showAlert) showAlert('Could not determine your location. Please type it manually.', 'warning');
    });
}

// Helper to convert an address to a clickable Google Maps link
function toMapLink(address) {
    if (!address) return '—';
    const encoded = encodeURIComponent(address);
    return `<a href="https://maps.google.com/?q=${encoded}" target="_blank" rel="noopener noreferrer" class="text-decoration-none" title="Open in Google Maps"><i class="bi bi-geo-alt-fill text-primary me-1"></i>${address}</a>`;
}

// Export globally
window.setLanguage = setLanguage;
window.initLanguage = initLanguage;
window.toggleLanguage = toggleLanguage;
window.translateSpecialty = translateSpecialty;
window.translateScanType = translateScanType;
window.translateAction = translateAction;
window.translateDoctorName = translateDoctorName;
window.toMapLink = toMapLink;
window.getCurrentLocation = getCurrentLocation;

// Automatically init language on load
document.addEventListener('DOMContentLoaded', initLanguage);
