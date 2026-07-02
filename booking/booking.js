translations.en = Object.assign(translations.en, {
    "book_badge": "Appointment Booking",
    "book_title": "Schedule a Consultation",
    "book_subtitle": "Select a specialist and choose an available time slot.",
    "step_select": "Select",
    "step_details": "Details",
    "step_confirm": "Confirm",
    "book_sec_appointment": "Choose Specialist & Slot",
    "lbl_select_specialty": "FILTER BY SPECIALTY",
    "ph_select_specialty": "Select a category...",
    "lbl_select_doctor": "SELECT SPECIALIST",
    "ph_select_doctor": "Choose a specialist...",
    "lbl_time": "AVAILABLE SLOTS",
    "btn_continue": "Continue",
    "book_sec_patient": "Personal Information",
    "lbl_patient_name": "PATIENT FULL NAME",
    "lbl_patient_phone": "CONTACT PHONE",
    "lbl_notes": "REASON FOR VISIT / MEDICAL NOTES",
    "btn_back": "Back",
    "btn_confirm_booking": "Finalize Booking",
    "modal_success_title": "Appointment Confirmed!",
    "modal_success_desc": "Your appointment has been successfully scheduled. You can view your upcoming appointments in your dashboard.",
    "btn_go_dashboard": "View Dashboard",
    "back_home": "Return to Homepage",
    "error_step1": "Please select a specialty, doctor, and time slot.",
    "error_step2": "Please provide your name and phone number.",
    "select_doc_first": "Select a doctor to see available slots...",
    "loading_slots": "Loading available slots...",
    "no_slots": "No available slots for the selected doctor.",
    "slot_today": "Today",
    "slot_tomorrow": "Tomorrow",
    "confirm_doctor": "Doctor",
    "confirm_date": "Date",
    "confirm_time": "Time"
});

translations.ar = Object.assign(translations.ar, {
    "book_badge": "حجز المواعيد",
    "book_title": "تحديد موعد استشارة",
    "book_subtitle": "اختر طبيباً واختر الوقت المناسب لك.",
    "step_select": "اختر",
    "step_details": "البيانات",
    "step_confirm": "تأكيد",
    "book_sec_appointment": "اختر الطبيب والموعد",
    "lbl_select_specialty": "تصفية حسب التخصص",
    "ph_select_specialty": "اختر تخصصاً...",
    "lbl_select_doctor": "اختر الطبيب",
    "ph_select_doctor": "اختر متخصصاً...",
    "lbl_time": "المواعيد المتاحة",
    "btn_continue": "استمرار",
    "book_sec_patient": "المعلومات الشخصية",
    "lbl_patient_name": "اسم المريض الكامل",
    "lbl_patient_phone": "رقم هاتف التواصل",
    "lbl_notes": "سبب الزيارة / ملاحظات طبية",
    "btn_back": "رجوع",
    "btn_confirm_booking": "تأكيد الحجز النهائي",
    "modal_success_title": "تم تأكيد الموعد!",
    "modal_success_desc": "تم تحديد موعدك بنجاح. يمكنك عرض مواعيدك القادمة في لوحة التحكم الخاصة بك.",
    "btn_go_dashboard": "عرض لوحة التحكم",
    "back_home": "العودة للرئيسية",
    "error_step1": "يرجى اختيار التخصص والطبيب والوقت.",
    "error_step2": "يرجى تقديم اسمك ورقم هاتفك.",
    "select_doc_first": "اختر طبيباً لعرض المواعيد المتاحة...",
    "loading_slots": "جاري تحميل المواعيد المتاحة...",
    "no_slots": "لا توجد مواعيد متاحة للطبيب المختار.",
    "slot_today": "اليوم",
    "slot_tomorrow": "غداً",
    "confirm_doctor": "الطبيب",
    "confirm_date": "التاريخ",
    "confirm_time": "الوقت"
});

let allDoctors = [];
let currentStep = 1;
let _selectedSlot = null;

window.nextStep = function(step) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    if (step === 2) {
        const doc = document.getElementById('doctorSelect').value;
        if (!doc || !_selectedSlot) return showAlert(translations[lang].error_step1, 'warning');
        const role = localStorage.getItem('mediai_auth_role');
        if (!role) {
            window.location.href = `../login/login.html?redirect=../booking/booking.html?doc=${doc}`;
            return;
        }
    }
    if (step === 3) {
        const name = document.getElementById('patientName').value;
        const phone = document.getElementById('patientPhone').value;
        if (!name || !phone) return showAlert(translations[lang].error_step2, 'warning');
        populateSummary();
    }
    currentStep = step;
    updateUI();
};

window.prevStep = function(step) {
    currentStep = step;
    updateUI();
};

function updateUI() {
    document.querySelectorAll('.booking-step-content').forEach(el => {
        el.classList.add('d-none');
        el.style.display = 'none';
    });
    const currentEl = document.getElementById(`step-${currentStep}`);
    if (currentEl) {
        currentEl.classList.remove('d-none');
        currentEl.style.display = 'block';
    }
    document.querySelectorAll('.step').forEach((el, idx) => {
        el.classList.remove('active', 'completed');
        if (idx + 1 < currentStep) el.classList.add('completed');
        if (idx + 1 === currentStep) el.classList.add('active');
    });
}

function initReveals() {
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
    });
}

function populateSummary() {
    try {
        const docId = document.getElementById('doctorSelect').value;
        const doc = allDoctors.find(d => (d.id || d._id) == docId);
        const lang = localStorage.getItem('mediai_lang') || 'en';

        document.getElementById('sum-doctor').textContent = doc ? (doc.name || doc.fullName || '') : '-';
        document.getElementById('sum-specialty').textContent = doc ? translateSpecialty(doc.specialty || doc.specialization) : '-';
        const addrSpan = document.querySelector('#sum-address span');
        const addrIcon = document.querySelector('#sum-address');
        if (doc && doc.clinicAddress) {
            addrSpan.innerHTML = window.toMapLink ? window.toMapLink(doc.clinicAddress) : doc.clinicAddress;
            addrIcon.classList.remove('d-none');
        } else {
            addrIcon.classList.add('d-none');
        }

        if (_selectedSlot) {
            const d = new Date(_selectedSlot.date + 'T12:00:00');
            const formatted = d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
            document.getElementById('sum-date').textContent = formatted;
            document.getElementById('sum-time').textContent = _selectedSlot.time.substring(0, 5);
        }
        document.getElementById('sum-name').textContent = document.getElementById('patientName').value || '-';
        document.getElementById('sum-phone').textContent = document.getElementById('patientPhone').value || '-';
    } catch (e) {
        console.error('populateSummary error:', e);
    }
}

function populateDoctorsBySpecialty(specialty) {
    const select = document.getElementById('doctorSelect');
    const lang = localStorage.getItem('mediai_lang') || 'en';
    select.innerHTML = `<option value="" disabled selected>${translations[lang].ph_select_doctor}</option>`;
    if (!specialty) {
        select.disabled = true;
        return;
    }
    const filtered = allDoctors.filter(d => (d.specialty || d.specialization) === specialty);
    filtered.forEach(doc => {
        const id = doc.id || doc._id;
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = doc.name || doc.fullName || 'Unknown Doctor';
        select.appendChild(opt);
    });
    select.disabled = false;
    document.getElementById('selectedDocInfo').classList.add('d-none');
    document.getElementById('timeSlots').innerHTML = `<div class="small text-muted py-2">${translations[lang].select_doc_first}</div>`;
    _selectedSlot = null;
}

document.getElementById('specialtySelect').addEventListener('change', function() {
    populateDoctorsBySpecialty(this.value);
});

function formatTimeLabel(timeStr) {
    const [h, m] = timeStr.split(':');
    const hour = parseInt(h, 10);
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const display = `${hour}:${m}`;
    if (lang === 'ar') return display;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${m} ${ampm}`;
}

function renderSlots(allSlots) {
    const container = document.getElementById('timeSlots');
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];

    if (allSlots.length === 0) {
        container.innerHTML = `<div class="small text-danger py-2"><i class="bi bi-exclamation-circle me-1"></i> ${t.no_slots}</div>`;
        return;
    }

    let html = '';
    allSlots.forEach(group => {
        const d = new Date(group.date + 'T12:00:00');
        const dayName = d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'long' });
        const dateDisplay = d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric' });

        let dayLabel = dateDisplay;
        if (group.dayIndex === 0) dayLabel = t.slot_today + ' - ' + dateDisplay;
        else if (group.dayIndex === 1) dayLabel = t.slot_tomorrow + ' - ' + dateDisplay;

        html += `
            <div class="slot-day-group mb-3" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                <div style="background:#ECFDF5;padding:0.6rem 1rem;font-weight:700;font-size:0.85rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e5e7eb;">
                    <span>${dayName}</span>
                    <span style="color:#527869;font-weight:400;font-size:0.75rem;">${dayLabel}</span>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:0.4rem;padding:0.75rem 1rem;">
                    ${group.slots.map(s => `
                        <button type="button" class="slot-btn" data-date="${group.date}" data-time="${s.time}" onclick="selectSlot('${group.date}', '${s.time}', this)">
                            ${formatTimeLabel(s.time)}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function selectSlot(date, time, btn) {
    document.querySelectorAll('.slot-btn.selected').forEach(el => el.classList.remove('selected'));
    btn.classList.add('selected');
    _selectedSlot = { date, time };
}

document.getElementById('doctorSelect').addEventListener('change', async function() {
    const docId = this.value;
    const doc = allDoctors.find(d => (d.id || d._id) == docId);
    const infoBox = document.getElementById('selectedDocInfo');
    const avatar = document.getElementById('docMiniAvatar');
    const name = document.getElementById('docMiniName');
    const spec = document.getElementById('docMiniSpec');
    const timeSlotsContainer = document.getElementById('timeSlots');
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];

    _selectedSlot = null;

    if (doc) {
        infoBox.classList.remove('d-none');
        avatar.style.backgroundColor = doc.color || '#4D96FF';
        avatar.textContent = (doc.name || doc.fullName || '').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        name.textContent = doc.name || doc.fullName || '';
        spec.textContent = translateSpecialty(doc.specialty || doc.specialization);

        const addrBox = document.getElementById('docMiniAddress').querySelector('span');
        if (doc.clinicAddress) {
            document.getElementById('docMiniAddress').classList.remove('d-none');
            addrBox.innerHTML = window.toMapLink ? window.toMapLink(doc.clinicAddress) : doc.clinicAddress;
        } else {
            document.getElementById('docMiniAddress').classList.add('d-none');
        }

        timeSlotsContainer.innerHTML = `<div class="text-center py-4"><div class="spinner-border text-primary" role="status"></div><p class="text-muted small mt-2">${t.loading_slots}</p></div>`;

        // Fetch slots for next 7 days
        const today = new Date();
        let allSlots = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];
            try {
                const slots = await Api.doctors.getAvailability(docId, dateStr);
                const avail = (Array.isArray(slots) ? slots : []).filter(s => s.available);
                if (avail.length > 0) {
                    allSlots.push({ date: dateStr, dayIndex: i, slots: avail });
                }
            } catch (e) { /* skip */ }
        }
        renderSlots(allSlots);

    }
});

document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('confirmBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner-border');
    const lang = localStorage.getItem('mediai_lang') || 'en';

    submitBtn.disabled = true;
    btnText.classList.add('d-none');
    spinner.classList.remove('d-none');

    try {
        const docId = document.getElementById('doctorSelect').value;

        const payload = {
            doctorId: docId,
            appointmentDate: _selectedSlot.date + 'T00:00:00',
            timeSlot: _selectedSlot.time,
            notes: document.getElementById('medicalNotes')?.value || ''
        };

        await Api.appointments.book(payload);
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    } catch (error) {
        console.error('Booking failed', error);
        const msg = error.message || (lang === 'ar' ? 'حدث خطأ أثناء الحجز.' : 'Booking error occurred.');
        showAlert(msg, 'error');
    } finally {
        submitBtn.disabled = false;
        btnText.classList.remove('d-none');
        spinner.classList.add('d-none');
    }
});

function autofillPatientData() {
    const name = localStorage.getItem('mediai_user_name');
    const phone = localStorage.getItem('mediai_user_phone') || '';
    if (name) {
        const nameInput = document.getElementById('patientName');
        if (nameInput) nameInput.value = name;
    }
    if (phone) {
        const phoneInput = document.getElementById('patientPhone');
        if (phoneInput) phoneInput.value = phone;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const role = localStorage.getItem('mediai_auth_role');
    if (!role) {
        window.location.href = '../login/login.html?redirect=../booking/booking.html';
        return;
    }

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('visible');
        el.style.opacity = '1';
    });
    initReveals();
    updateUI();
    autofillPatientData();

    const specSelect = document.getElementById('specialtySelect');
    const docSelect = document.getElementById('doctorSelect');
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedDocId = urlParams.get('doc');

    try {
        const data = await Api.doctors.getAll();
        allDoctors = Array.isArray(data) ? data : (data.doctors || []);

        const currentLang = localStorage.getItem('mediai_lang') || 'en';
        allDoctors.forEach(d => {
            const raw = d.fullName || d.name;
            const t = translateDoctorName(raw, currentLang);
            d.fullName = t;
            d.name = t;
        });

        const specs = [...new Set(allDoctors.map(d => d.specialty || d.specialization))].filter(Boolean).sort();
        specs.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s;
            opt.textContent = translateSpecialty(s);
            specSelect.appendChild(opt);
        });

        if (preselectedDocId) {
            const targetDoc = allDoctors.find(d => (d.id || d._id) == preselectedDocId);
            if (targetDoc) {
                const targetSpec = targetDoc.specialty || targetDoc.specialization;
                specSelect.value = targetSpec;
                populateDoctorsBySpecialty(targetSpec);
                docSelect.value = preselectedDocId;
                docSelect.dispatchEvent(new Event('change'));
            }
        }
    } catch (e) {
        console.warn('Could not fetch doctors from API:', e);
    }

    if (window.setLanguage) {
        const lang = localStorage.getItem('mediai_lang') || 'en';
        setLanguage(lang);
    }
});
