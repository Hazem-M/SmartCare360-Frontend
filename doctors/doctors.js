// ═══════════════════════════════════════
//  DOCTORS PAGE — Translations & Logic
// ═══════════════════════════════════════

// Extend global translations
translations.en = Object.assign(translations.en, {
    "doc_badge": "Medical Network",
    "doc_title": "Find a Specialist",
    "doc_subtitle": "Connect with verified medical professionals across various specialties and book your consultation instantly.",
    "ph_search_doc": "Search by doctor name or specialty...",
    "spec_all": "All Specialties",
    "spec_cardio": "Pneumonia Specialist",
    "spec_ortho": "Orthopedist",
    "spec_neuro": "Neurologist",
    "docs_found": "specialists found",
    "sort_by": "Sort by:",
    "top_rated": "Top Rated",
    "most_exp": "Experience",
    "loading_docs": "Finding best specialists for you...",
    "no_docs_title": "No Doctors Found",
    "no_docs_sub": "Try adjusting your search filters or specialty.",
    "btn_book": "Book Appointment",
    "btn_chat": "Chat Now",
    "lbl_exp": "years experience",
    "available_today": "Available Today",
    "available_tomorrow": "Available Tomorrow",
    "verified": "Verified Specialist",
    "hosp_general": "Smart Care 360 General Hospital",
    "hosp_specialty": "Specialized Medical Center"
});

translations.ar = Object.assign(translations.ar, {
    "doc_badge": "الشبكة الطبية",
    "doc_title": "ابحث عن متخصص",
    "doc_subtitle": "تواصل مع ممارسين طبيين معتمدين عبر مختلف التخصصات واحجز استشارتك فوراً.",
    "ph_search_doc": "ابحث باسم الطبيب أو التخصص...",
    "spec_all": "جميع التخصصات",
    "spec_cardio": "أخصائي صدر",
    "spec_ortho": "طبيب عظام",
    "spec_neuro": "المخ والأعصاب",
    "docs_found": "متخصص تم العثور عليهم",
    "sort_by": "ترتيب حسب:",
    "top_rated": "الأعلى تقييماً",
    "most_exp": "الخبرة",
    "loading_docs": "جارٍ البحث عن أفضل المتخصصين...",
    "no_docs_title": "لم يتم العثور على أطباء",
    "no_docs_sub": "حاول تغيير كلمات البحث أو التخصص.",
    "btn_book": "حجز موعد",
    "btn_chat": "تحدث الآن",
    "lbl_exp": "سنوات خبرة",
    "available_today": "متاح اليوم",
    "available_tomorrow": "متاح غداً",
    "verified": "متخصص معتمد",
    "hosp_general": "مستشفى سمارت كير 360 العام",
    "hosp_specialty": "المركز الطبي التخصصي"
});

// ═══════════════════════
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').slice(1, 3);
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="bi bi-star-fill text-warning me-1"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="bi bi-star-half text-warning me-1"></i>';
        } else {
            stars += '<i class="bi bi-star text-muted me-1"></i>';
        }
    }
    return stars;
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

function initReveals() {
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });
}

async function loadDoctors() {
    const grid = document.getElementById('doctorsGrid');
    const loading = document.getElementById('loadingDoctors');
    const noResults = document.getElementById('noResults');
    const countEl = document.getElementById('resultsCount');
    
    const searchTerm = document.getElementById('docSearch').value.toLowerCase();
    const filter = document.getElementById('specFilter').value;
    const lang = localStorage.getItem('mediai_lang') || 'en';

    grid.innerHTML = '';
    loading.classList.remove('d-none');
    noResults.classList.add('d-none');

    let allDoctors = [];
    try {
        // Build query params for search & filter
        const params = [];
        if (searchTerm) params.push(`search=${encodeURIComponent(searchTerm)}`);
        if (filter && filter !== 'all') params.push(`specialty=${encodeURIComponent(filter)}`);
        const data = await Api.doctors.getAll(params.join('&'));
        // Backend may return array directly or { doctors: [...] }
        allDoctors = Array.isArray(data) ? data : (data.doctors || []);
    } catch (err) {
        console.error('Failed to load doctors:', err);
        showAlert(lang === 'ar' ? 'تعذّر تحميل الأطباء.' : 'Could not load doctors.', 'error');
    }

    loading.classList.add('d-none');
    countEl.textContent = allDoctors.length;

    if (allDoctors.length === 0) {
        noResults.classList.remove('d-none');
        return;
    }

    allDoctors.forEach(doc => {
        const rawName = doc.fullName || doc.name;
        const translatedName = translateDoctorName(rawName, lang);
        doc.fullName = translatedName;
        doc.name = translatedName;
        const name = translatedName || 'Dr. Unknown';
        const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        const specialty = doc.specialty || doc.specialization || '';
        const rating = doc.rating || 0;
        const exp = doc.experienceYears || doc.experience || 0;
        const hospital = doc.clinicAddress || doc.hospital || '';
        const color = doc.color || '#4D96FF';
        const verified = !!doc.isVerified || !!doc.verified;
        const available = doc.available || 'today';

        const specMap = {
            "Pneumonia Specialist": "spec_cardiology",
            "Pneumonia": "spec_cardiology",
            "Orthopedist": "spec_orthopedics",
            "Orthopedics": "spec_orthopedics",
            "Neurologist": "spec_neurology",
            "Neurology": "spec_neurology"
        };
        const specKey = specMap[specialty] || `spec_${specialty.toLowerCase().replace(/\s+/g, '_')}`;
        const translatedSpec = (translations[lang] && translations[lang][specKey]) ? translations[lang][specKey] : specialty;
        const availKey = 'available_' + available;
        const availText = translations[lang][availKey] || available;

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 reveal-up';
        card.innerHTML = `
            <div class="card h-100 doctor-card border-0 shadow-sm bg-white p-3">
                <div class="card-body text-center">
    <div class="doctor-avatar-box mb-3 ${verified ? 'verified' : ''}" style="background-color: ${color}">
                <i class="bi bi-person-badge text-white fs-2"></i>
</div>
                    
                    <span class="availability-badge bg-soft-${available === 'today' ? 'success text-success' : 'warning text-warning'} mb-3">
                        ${availText}
                    </span>
                    
                    <h5 class="fw-bold mb-1">${name}</h5>
                    <p class="text-primary fw-semibold small mb-3">${translatedSpec}</p>
                    
                    <div class="rating-stars mb-4">
                        ${renderStars(rating)}
                        <span class="text-muted small ms-1">(${rating})</span>
                    </div>

                    <div class="doctor-meta mb-4">
                        <div class="doctor-meta-item">
                            <i class="bi bi-briefcase"></i>
                            <span>${exp} ${translations[lang].lbl_exp}</span>
                        </div>
                        <div class="doctor-meta-item">
                            <i class="bi bi-geo-alt"></i>
                            <span class="text-truncate">${window.toMapLink ? window.toMapLink(hospital) : hospital}</span>
                        </div>
                    </div>

                    <div class="d-grid gap-2">
                        <a href="../booking/booking.html?doc=${doc.id || doc._id}" class="btn btn-primary rounded-pill py-2 fw-bold small">${translations[lang].btn_book}</a>
                        <a href="../chat/chat.html?doc=${doc.id || doc._id}" class="btn btn-outline-light text-dark border-0 bg-light rounded-pill py-2 fw-bold small">${translations[lang].btn_chat}</a>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    initReveals();
}

// ═══════════════════════
//  Event Listeners
// ═══════════════════════

document.getElementById('docSearch').addEventListener('input', () => {
    // Debounce search
    clearTimeout(window.searchTimer);
    window.searchTimer = setTimeout(loadDoctors, 300);
});

document.getElementById('specFilter').addEventListener('change', loadDoctors);
document.getElementById('filterBtn').addEventListener('click', loadDoctors);

// Auth Guard Check
document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('mediai_auth_role');
    if (!role) {
        window.location.href = '../login/login.html?redirect=../doctors/doctors.html';
    }
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Check for specialty deep-link from diagnosis results
    const urlParams = new URLSearchParams(window.location.search);
    const specialtyParam = urlParams.get('specialty');
    
    if (specialtyParam) {
        const filterEl = document.getElementById('specFilter');
        // Handle both exact match and 'Cardiologist' vs 'Cardiology' variations
        for (let option of filterEl.options) {
            if (option.value.toLowerCase().includes(specialtyParam.toLowerCase()) || 
                specialtyParam.toLowerCase().includes(option.value.toLowerCase())) {
                filterEl.value = option.value;
                break;
            }
        }
    }

    loadDoctors();
    initReveals();
});
