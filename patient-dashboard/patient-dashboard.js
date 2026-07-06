// ═══════════════════════════════════════
//  DASHBOARD PAGE — Translations & Logic
// ═══════════════════════════════════════

// Extend global translations
translations.en = Object.assign(translations.en, {
    "dash_badge": "Patient Terminal",
    "welcome_back": "Welcome back,",
    "dash_intro": "Manage your medical appointments, AI diagnoses, and health progress from one central place.",
    "dash_stat_appt": "Upcoming Appointments",
    "dash_stat_diag": "AI Scans Performed",
    "dash_stat_health": "Current Health Status",
    "status_ready": "Ready",
    "status_stable": "Stable",
    "dash_upcoming": "My Appointments",
    "btn_book_new": "+ Book New",
    "dash_no_appts": "No appointments found. Book your first one!",
    "dash_diagnoses": "Recent AI Analyses",
    "dash_btn_new_diag": "Scan Now",
    "lbl_result": "Result",
    "dash_notifications": "Notifications",
    "dash_notifications": "Notifications",
    "quick_actions": "Quick Actions",
    "dash_browse_docs": "Browse Doctors",
    "view_all": "View All",
    "join_chat": "Join Chat",
    "cancel_appt": "Cancel",
    "dash_notif1_title": "Welcome to Smart Care 360!",
    "dash_notif1_desc": "Your account is now verified and ready.",
    "dash_notif2_title": "Complete your profile",
    "dash_notif2_desc": "Add your medical history for better AI results.",
    "lbl_upcoming": "Upcoming",
    "lbl_doctor": "Doctor",
    "lbl_completed": "Completed",
    "lbl_expired": "Expired",
    "lbl_pending": "Pending",
    "lbl_cancelled": "Cancelled",
    "lbl_confirmed": "Confirmed",
    "lbl_scheduled": "Scheduled",
    "lbl_appt_ended": "Session ended",
    "lbl_await_confirm": "Awaiting confirmation",
    "dash_section_upcoming": "Upcoming Appointments",
    "dash_section_past": "Past Appointments",
    "diag_type_label": "Test Type",
    "lbl_rate": "Rate Doctor",
    "review_title": "Rate Your Visit",
    "review_comment_placeholder": "Share your experience (optional)",
    "review_submit": "Submit Review",
    "review_success": "Thank you! Your review has been submitted.",
    "review_error": "Failed to submit review",
    "book_modal_title": "Book an Appointment",
    "lbl_select_specialty": "Specialty",
    "ph_select_specialty": "All Specialties",
    "lbl_select_doctor": "Select Doctor",
    "ph_select_doctor": "Choose a doctor...",
    "lbl_select_slot": "Available Slots",
    "no_slots": "No available slots for the selected doctor.",
    "select_doc_first": "Select a doctor to see available slots.",
    "slot_selected": "Selected",
    "btn_confirm_booking": "Confirm Booking",
    "booking_success": "Appointment booked successfully!",
    "confirm_title": "Confirm Appointment",
    "confirm_doctor": "Doctor",
    "confirm_date": "Date",
    "confirm_time": "Time",
    "slot_today": "Today",
    "slot_tomorrow": "Tomorrow",
    "loading_slots": "Loading available slots...",
    "lbl_view_pdf": "View PDF Report",
    "lbl_delete": "Delete",
    "delete_confirm_title": "Confirm Deletion",
    "delete_confirm_msg": "Are you sure you want to delete this report? This action cannot be undone.",
    "cancel": "Cancel"
});

translations.ar = Object.assign(translations.ar, {
    "dash_badge": "محطة المريض",
    "welcome_back": "مرحباً بك مجدداً،",
    "dash_intro": "إدارة مواعيدك الطبية، وتشخيصات الذكاء الاصطناعي، وتقدمك الصحي من مكان واحد.",
    "dash_stat_appt": "المواعيد القادمة",
    "dash_stat_diag": "عمليات فحص الذكاء الاصطناعي",
    "dash_stat_health": "الحالة الصحية الحالية",
    "status_ready": "جاهز",
    "status_stable": "مستقر",
    "dash_upcoming": "مواعيدي",
    "btn_book_new": "+ حجز جديد",
    "dash_no_appts": "لا توجد مواعيد. احجز أول موعد لك!",
    "dash_diagnoses": "تحليلات الذكاء الاصطناعي الأخيرة",
    "dash_btn_new_diag": "افحص الآن",
    "lbl_result": "النتيجة",
    "dash_notifications": "التنبيهات",
    "dash_notifications": "التنبيهات",
    "quick_actions": "إجراءات سريعة",
    "dash_browse_docs": "تصفح الأطباء",
    "view_all": "عرض الكل",
    "join_chat": "انضم للمحادثة",
    "cancel_appt": "إلغاء",
    "dash_notif1_title": "مرحباً بك في سمارت كير 360!",
    "dash_notif1_desc": "حسابك الآن موثق وجاهز.",
    "dash_notif2_title": "أكمل ملفك الشخصي",
    "dash_notif2_desc": "أضف تاريخك الطبي للحصول على نتائج ذكاء اصطناعي أفضل.",
    "lbl_upcoming": "قادم",
    "lbl_doctor": "طبيب",
    "lbl_completed": "مكتمل",
    "lbl_expired": "منتهي",
    "lbl_pending": "قيد الانتظار",
    "lbl_cancelled": "ملغي",
    "lbl_confirmed": "مؤكد",
    "lbl_scheduled": "مجدول",
    "lbl_appt_ended": "انتهت الجلسة",
    "lbl_await_confirm": "في انتظار التأكيد",
    "dash_section_upcoming": "المواعيد القادمة",
    "dash_section_past": "المواعيد السابقة",
    "diag_type_label": "نوع الفحص",
    "lbl_rate": "تقييم الطبيب",
    "review_title": "قيّم زيارتك",
    "review_comment_placeholder": "شارك تجربتك (اختياري)",
    "review_submit": "إرسال التقييم",
    "review_success": "شكراً لك! تم إرسال تقييمك.",
    "review_error": "فشل إرسال التقييم",
    "book_modal_title": "حجز موعد",
    "lbl_select_specialty": "التخصص",
    "ph_select_specialty": "جميع التخصصات",
    "lbl_select_doctor": "اختر الطبيب",
    "ph_select_doctor": "اختر طبيباً...",
    "lbl_select_slot": "المواعيد المتاحة",
    "no_slots": "لا توجد مواعيد متاحة للطبيب المختار.",
    "select_doc_first": "اختر طبيباً لعرض المواعيد المتاحة.",
    "slot_selected": "تم الاختيار",
    "btn_confirm_booking": "تأكيد الحجز",
    "booking_success": "تم حجز الموعد بنجاح!",
    "confirm_title": "تأكيد الحجز",
    "confirm_doctor": "الطبيب",
    "confirm_date": "التاريخ",
    "confirm_time": "الوقت",
    "slot_today": "اليوم",
    "slot_tomorrow": "غداً",
    "loading_slots": "جاري تحميل المواعيد المتاحة...",
    "lbl_view_pdf": "عرض التقرير PDF",
    "lbl_delete": "حذف",
    "delete_confirm_title": "تأكيد الحذف",
    "delete_confirm_msg": "هل أنت متأكد من حذف هذا التقرير؟ لا يمكن التراجع عن هذا الإجراء.",
    "cancel": "إلغاء"
});

// ═══════════════════════
//  Helpers
// ═══════════════════════

function updateClock() {
    const timeEl = document.getElementById('currentTime');
    const dateEl = document.getElementById('currentDate');
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    dateEl.textContent = now.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

function initReveals() {
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        revealObserver.observe(el);
    });
}

/**
 * Determines if an appointment's date+time has already passed.
 * @returns {boolean} true if the appointment is in the past
 */
function isAppointmentPast(app) {
    const dateStr = app.appointmentDate ? app.appointmentDate.split('T')[0] : (app.date || '');
    const timeStr = app.timeSlot || app.time || '00:00';
    if (!dateStr) return false;
    const [h, m] = timeStr.split(':').map(Number);
    const apptDateTime = new Date(dateStr);
    apptDateTime.setHours(h || 0, m || 0, 0, 0);
    return apptDateTime < new Date();
}

/**
 * Returns visual config for an appointment based on its status and date.
 */
function getApptConfig(app, lang) {
    const t = translations[lang];
    const status = (app.status || '').toLowerCase();
    const past   = isAppointmentPast(app);

    // Cancelled always wins
    if (status === 'cancelled') {
        return {
            badgeClass: 'badge-status-cancelled',
            badgeText:  t.lbl_cancelled,
            avatarClass: 'avatar-cancelled',
            cardClass:  'appt-card-cancelled',
            isPast: true,
            showChat: false,
            showCancel: false,
            footerHtml: `<span class="past-label"><i class="bi bi-x-circle me-1"></i>${t.lbl_cancelled}</span>`
        };
    }

    // Confirmed/Completed but date passed → Completed
    if (past && (status === 'confirmed' || status === 'completed' || status === 'scheduled')) {
        return {
            badgeClass: 'badge-status-completed',
            badgeText:  t.lbl_completed,
            avatarClass: 'avatar-completed',
            cardClass:  'appt-card-past',
            isPast: true,
            showChat: false,
            showCancel: false,
            showReview: true,
            footerHtml: `<span class="past-label"><i class="bi bi-check-circle me-1"></i>${t.lbl_appt_ended}</span>`
        };
    }

    // Confirmed upcoming → active, show chat
    if (status === 'confirmed') {
        return {
            badgeClass: 'badge-status-confirmed',
            badgeText:  t.lbl_confirmed,
            avatarClass: 'avatar-confirmed',
            cardClass:  '',
            isPast: false,
            showChat: true,
            showCancel: true,
            footerHtml: null
        };
    }

    // Scheduled/Pending → awaiting confirmation
    if (status === 'scheduled' || status === 'pending') {
        return {
            badgeClass: 'badge-status-pending',
            badgeText:  t.lbl_pending,
            avatarClass: 'avatar-pending',
            cardClass:  '',
            isPast: false,
            showChat: false,
            showCancel: true,
            footerHtml: null,
            pendingNote: t.lbl_await_confirm
        };
    }

    // Fallback: upcoming
    return {
        badgeClass: 'badge-status-upcoming',
        badgeText:  t.lbl_upcoming,
        avatarClass: '',
        cardClass:  '',
        isPast: past,
        showChat: !past,
        showCancel: !past,
        showReview: past,
        footerHtml: past ? `<span class="past-label"><i class="bi bi-check-circle me-1"></i>${t.lbl_appt_ended}</span>` : null
    };
}

// ═══════════════════════
//  Main Dashboard Loader
// ═══════════════════════

async function loadDashboard() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];

    // ── Patient name ──────────────────────────────────────────
    const userName = localStorage.getItem('mediai_user_name') || 'Patient';
    document.getElementById('dashPatientName').textContent = userName;

    // ── Stats from API ─────────────────────────────────────────
    try {
        const stats = await Api.patient.getDashboard();
        document.getElementById('stat-appointments').textContent = stats.upcomingAppointments ?? 0;
        document.getElementById('stat-diagnoses').textContent    = stats.totalScans ?? 0;

        const healthEl    = document.querySelector('[data-lang="dash_stat_health"]')?.previousElementSibling;
        const healthBadge = healthEl?.previousElementSibling?.querySelector('.badge');
        
        let healthLabel = stats.healthStatus || 'Stable';
        let badgeLabel = stats.healthStatus === 'Healthy' ? 'Great' : (stats.healthStatus || 'Stable');
        
        if (lang === 'ar') {
            if (healthLabel === 'Healthy') healthLabel = 'ممتازة';
            else if (healthLabel === 'Stable') healthLabel = 'مستقر';
            else if (healthLabel === 'Critical') healthLabel = 'حرج';
            
            if (badgeLabel === 'Great') badgeLabel = 'ممتاز';
            else if (badgeLabel === 'Stable') badgeLabel = 'مستقر';
        }
        
        if (healthEl)    healthEl.textContent  = healthLabel;
        if (healthBadge) {
            healthBadge.className = `badge bg-soft-${stats.healthColor || 'success'} text-${stats.healthColor || 'success'}`;
            healthBadge.textContent = badgeLabel;
        }
    } catch (e) { console.warn('Dashboard stats error:', e); }

    // ── Notifications ──────────────────────────────────────────
    const notifContainer = document.querySelector('.notification-list');
    if (notifContainer) {
        try {
            const notifications = await Api.notifications.getMy();
            if (notifications.length > 0) {
                notifContainer.innerHTML = '';
                notifications.forEach(n => {
                    const icon       = n.type === 'Warning' ? 'exclamation-triangle' : 'info-circle';
                    const colorClass = n.type === 'Warning' ? 'warning' : 'primary';
                    
                    let title = n.title;
                    let message = n.message;
                    if (lang === 'ar') {
                        if (title.includes('Welcome to')) title = 'مرحباً بك في سمارت كير 360!';
                        if (message.includes('verified and ready')) message = 'حسابك الآن موثق وجاهز. ابدأ برفع فحص طبي.';
                    }
                    
                    notifContainer.innerHTML += `
                        <div class="notification-item glass-card p-3 mb-3 border-start border-${colorClass} border-4 ${n.isRead ? 'opacity-75' : ''}">
                            <div class="d-flex gap-3">
                                <div class="notif-icon text-${colorClass}"><i class="bi bi-${icon}"></i></div>
                                <div class="flex-grow-1">
                                    <p class="mb-1 small fw-bold">${title}</p>
                                    <p class="text-muted extra-small mb-0">${message}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        } catch (e) { console.warn('Notifications fetch error:', e); }
    }

    // ── Appointments from API ──────────────────────────────────
    const apptGrid = document.getElementById('appointmentsGrid');
    const noAppts  = document.getElementById('noAppts');
    let appointments = [];

    try {
        const data = await Api.appointments.getMy();
        appointments = Array.isArray(data) ? data : (data.appointments || []);
    } catch (e) { console.warn('Appointments fetch error:', e); }

    // Sort: upcoming first, then past
    appointments.sort((a, b) => {
        const aDate = new Date((a.appointmentDate || a.date || '').split('T')[0]);
        const bDate = new Date((b.appointmentDate || b.date || '').split('T')[0]);
        const aPast = isAppointmentPast(a);
        const bPast = isAppointmentPast(b);
        if (aPast !== bPast) return aPast ? 1 : -1;
        return aDate - bDate;
    });

    // Update stat counter with upcoming count
    const upcomingCount = appointments.filter(a => !isAppointmentPast(a) && (a.status || '').toLowerCase() !== 'cancelled').length;
    const statApptEl = document.getElementById('stat-appointments');
    if (statApptEl) statApptEl.textContent = upcomingCount;

    const apptBadge = document.getElementById('badge-appt-new');
    if (apptBadge) {
        if (upcomingCount > 0) {
            apptBadge.classList.remove('d-none');
            apptBadge.textContent = lang === 'ar' ? `+${upcomingCount} جديد` : `+${upcomingCount} new`;
        } else {
            apptBadge.classList.add('d-none');
        }
    }

    // Today banner
    const todayStr  = new Date().toISOString().split('T')[0];
    const todayAppts = appointments.filter(app => {
        const appDate = (app.appointmentDate || app.date || '').split('T')[0];
        return appDate === todayStr && (app.status || '').toLowerCase() !== 'cancelled';
    });
    if (todayAppts.length > 0) {
        const msgEn = `⚠️ You have ${todayAppts.length} appointment(s) today! Please arrive on time.`;
        const msgAr = `⚠️ لديك ${todayAppts.length} موعد(مواعيد) اليوم! يرجى الحضور في الموعد المحدد.`;
        showAlert(lang === 'ar' ? msgAr : msgEn, 'warning');

        const headerEl = document.querySelector('header.page-header');
        if (headerEl && !document.getElementById('todayAppointmentsBanner')) {
            const banner = document.createElement('div');
            banner.id = 'todayAppointmentsBanner';
            banner.className = 'container mt-4 mb-0';
            banner.innerHTML = `
                <div class="alert alert-warning border-0 shadow-sm rounded-4 p-3 d-flex align-items-center justify-content-between" style="background:rgba(245,158,11,0.15);backdrop-filter:blur(10px);color:#ca8a04;">
                    <div class="d-flex align-items-center gap-3">
                        <div class="p-2 rounded-circle bg-warning text-white d-flex align-items-center justify-content-center" style="width:40px;height:40px;">
                            <i class="bi bi-bell-fill"></i>
                        </div>
                        <div>
                            <h6 class="fw-bold mb-1">${lang === 'ar' ? 'تنبيه موعد اليوم!' : "Today's Appointment Alert!"}</h6>
                            <p class="extra-small mb-0 opacity-90">${lang === 'ar' ? 'لديك موعد اليوم. يرجى مراجعة رقم دورك.' : 'You have an appointment today. Check your queue number.'}</p>
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            headerEl.after(banner);
        }
    }

    // Render appointments
    if (appointments.length > 0) {
        noAppts.classList.add('d-none');
        apptGrid.innerHTML = '';

        appointments.forEach((app, idx) => {
            const apptId   = app.id || app._id;
            const docName  = translateDoctorName(app.doctorName || (app.doctor && app.doctor.name) || 'Doctor', lang);
            const specialty = app.specialty || (app.doctor && app.doctor.specialty) || '';
            const initials = docName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

            const appDate  = (app.appointmentDate || app.date || '').split('T')[0];
            const appTime  = app.timeSlot || app.time || '';
            const queueNum = app.queueNumber ?? app.QueueNumber;
            const cfg      = getApptConfig(app, lang);

            // Format date nicely
            let displayDate = appDate;
            try {
                displayDate = new Date(appDate + 'T12:00:00').toLocaleDateString(
                    lang === 'ar' ? 'ar-EG' : 'en-GB',
                    { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
                );
            } catch (_) { displayDate = appDate; }

            const queueBadge = queueNum
                ? `<span class="badge badge-queue extra-small ms-1">${lang === 'ar' ? 'الدور: ' : 'Turn: '}<span dir="ltr">#${queueNum}</span></span>`
                : '';

            // Build action footer
            let actionFooter = '';
            if (cfg.footerHtml) {
                actionFooter = `<div class="appt-action-footer past-footer">${cfg.footerHtml}</div>`;
            } else {
                const chatBtn   = cfg.showChat
                    ? `<a href="../chat/chat.html" class="btn btn-primary btn-sm rounded-pill flex-grow-1 extra-small fw-bold"><i class="bi bi-chat-dots me-1"></i>${t.join_chat}</a>`
                    : '';
                const pendingNote = cfg.pendingNote
                    ? `<div class="pending-note w-100"><i class="bi bi-hourglass-split me-1"></i>${cfg.pendingNote}</div>`
                    : '';
                const cancelBtn = cfg.showCancel
                    ? `<button class="btn btn-outline-danger btn-sm rounded-pill px-3 extra-small fw-bold" onclick="cancelAppointment('${apptId}', this)"><i class="bi bi-trash3 me-1"></i>${t.cancel_appt}</button>`
                    : '';

                const reviewBtn = cfg.showReview
                    ? `<button class="btn btn-outline-warning btn-sm rounded-pill px-3 extra-small fw-bold" onclick="openReviewModal(this)" data-appt="${apptId}" data-doctor="${app.doctorId || ''}" data-docname="${docName.replace(/"/g, '&quot;')}"><i class="bi bi-star me-1"></i>${t.lbl_rate || 'Rate'}</button>`
                    : '';
                actionFooter = `
                    <div class="appt-action-footer d-flex flex-wrap gap-2 align-items-center">
                        ${pendingNote}
                        ${chatBtn}
                        ${reviewBtn}
                        ${cancelBtn}
                    </div>
                `;
            }

            const card = document.createElement('div');
            card.className = 'col-md-6 reveal-up';
            card.style.transitionDelay = `${idx * 0.05}s`;
            card.id = `appt-${apptId}`;
            card.innerHTML = `
                <div class="glass-card appt-item-card ${cfg.cardClass} h-100 p-0 overflow-hidden">
                    <!-- Card Top Strip -->
                    <div class="appt-card-strip ${cfg.cardClass}"></div>
                    
                    <div class="p-3">
                        <!-- Doctor Row -->
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="d-flex align-items-center gap-2">
                                <div class="appt-doc-avatar ${cfg.avatarClass}">${initials}</div>
                                <div>
                                    <p class="fw-bold mb-0 small">${docName}</p>
                                    <p class="extra-small text-primary mb-0">${translateSpecialty(specialty)}</p>
                                </div>
                            </div>
                            <div class="text-end">
                                <span class="badge ${cfg.badgeClass} extra-small">${cfg.badgeText}</span>
                                ${queueBadge}
                            </div>
                        </div>

                        <!-- Date & Time -->
                        <div class="appt-datetime-row mb-3">
                            <div class="appt-dt-item">
                                <i class="bi bi-calendar3"></i>
                                <span>${displayDate}</span>
                            </div>
                            <div class="appt-dt-item">
                                <i class="bi bi-clock"></i>
                                <span>${appTime}</span>
                            </div>
                        </div>

                        <!-- Action Footer -->
                        ${actionFooter}
                    </div>
                </div>
            `;
            apptGrid.appendChild(card);
        });
    }

    // ── Diagnoses from API ─────────────────────────────────────
    const diagTable = document.getElementById('diagnosesTable');
    const noDiag    = document.getElementById('noDiagnoses');
    diagTable.innerHTML = '';
    let diagnoses = [];

    try {
        const data = await Api.diagnosis.getMy();
        diagnoses = Array.isArray(data) ? data : (data.diagnoses || []);
    } catch (e) { console.warn('Diagnoses fetch error:', e); }

    if (diagnoses.length === 0 && noDiag) {
        noDiag.classList.remove('d-none');
    } else {
        diagnoses.forEach(diag => {
            const diagId = diag.id || diag._id;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="ps-4 small">${diag.date || diag.createdAt?.split('T')[0] || ''}</td>
                <td class="small fw-bold">${window.translateScanType(diag.type || diag.scanType || '')}</td>
                <td><span class="badge bg-soft-success text-success">${diag.result || diag.condition || ''}</span></td>
                <td class="text-end pe-4">
                    <button class="btn btn-link py-0 text-primary" title="${t.lbl_view_pdf}" onclick="viewScanPDF('${diagId}')"><i class="bi bi-eye"></i></button>
                    <button class="btn btn-link py-0 text-danger ms-1" title="${t.lbl_delete}" onclick="deleteDiagnosis('${diagId}', this)"><i class="bi bi-trash"></i></button>
                </td>
            `;
            diagTable.appendChild(row);
        });
    }

    const scansBadge = document.getElementById('badge-scans-status');
    if (scansBadge) {
        if (diagnoses.length > 0) {
            scansBadge.classList.remove('d-none');
            scansBadge.textContent = lang === 'ar' ? 'مكتمل' : 'Completed';
            scansBadge.className = 'badge bg-soft-success text-success';
        } else {
            scansBadge.classList.remove('d-none');
            scansBadge.textContent = lang === 'ar' ? 'جاهز' : 'Ready';
            scansBadge.className = 'badge bg-soft-primary text-primary';
        }
    }

    initReveals();
}

// ── Cancel Appointment ─────────────────────────────────────────
async function cancelAppointment(id, btn) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span>';
    try {
        await Api.appointments.cancel(id);
        const card = document.getElementById(`appt-${id}`);
        if (card) {
            card.style.transition = 'opacity 0.4s, transform 0.4s';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.remove(), 400);
        }
        showAlert(lang === 'ar' ? 'تم إلغاء الموعد بنجاح.' : 'Appointment cancelled successfully.', 'success');
    } catch (e) {
        btn.disabled = false;
        btn.innerHTML = `<i class="bi bi-trash3 me-1"></i>${translations[lang].cancel_appt}`;
        showAlert(e.message || (lang === 'ar' ? 'فشل الإلغاء.' : 'Cancel failed.'), 'error');
    }
}

function logout() {
    Api.clearSession();
    window.location.href = '../login/login.html';
}

// ═══════════════════════════════════════
//  BOOKING MODAL
// ═══════════════════════════════════════

let _allBookDoctors = [];
let _selectedSlot = null;

window.openBookingModal = async function() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];

    // Reset
    _selectedSlot = null;
    document.getElementById('bookDoctorSelect').value = '';
    document.getElementById('bookSpecialtySelect').value = '';
    document.getElementById('bookingSlotsArea').classList.add('d-none');
    document.getElementById('bookingSelectDoctorMsg').classList.remove('d-none');
    document.getElementById('bookingConfirmBox').classList.remove('show');
    document.getElementById('bookingSlotGrid').innerHTML = '';

    // Load doctors first, then extract specialties from them
    const docSelect = document.getElementById('bookDoctorSelect');
    docSelect.innerHTML = '<option value="" disabled selected>' + (lang === 'ar' ? 'اختر طبيباً...' : 'Choose a doctor...') + '</option>';
    docSelect.disabled = true;
    const specSelect = document.getElementById('bookSpecialtySelect');
    specSelect.innerHTML = '<option value="" data-lang="ph_select_specialty">' + (lang === 'ar' ? 'جميع التخصصات' : 'All Specialties') + '</option>';

    try {
        const data = await Api.doctors.getAll();
        _allBookDoctors = Array.isArray(data) ? data : (data.doctors || []);
        docSelect.disabled = false;

        // Extract unique specialties from doctors list
        const specs = [...new Set(_allBookDoctors.map(d => d.specialty).filter(Boolean))];
        specs.forEach(name => {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = translateSpecialty(name);
            specSelect.appendChild(opt);
        });

        renderBookDoctors();
    } catch (e) {
        showAlert(lang === 'ar' ? 'فشل تحميل الأطباء' : 'Failed to load doctors', 'error');
    }

    new bootstrap.Modal(document.getElementById('bookingModal')).show();
};

function renderBookDoctors() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const specVal = document.getElementById('bookSpecialtySelect').value.toLowerCase();
    const docSelect = document.getElementById('bookDoctorSelect');
    docSelect.innerHTML = '<option value="" disabled selected>' + (lang === 'ar' ? 'اختر طبيباً...' : 'Choose a doctor...') + '</option>';

    const filtered = specVal
        ? _allBookDoctors.filter(d => (d.specialty || '').toLowerCase() === specVal)
        : _allBookDoctors;

    filtered.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id || d._id;
        opt.textContent = translateDoctorName(d.fullName || d.name, lang) + ' (' + translateSpecialty(d.specialty) + ')';
        docSelect.appendChild(opt);
    });
}



async function loadAvailableSlots(docId) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];
    const loadingEl = document.getElementById('bookingSlotsLoading');
    const slotsArea = document.getElementById('bookingSlotsArea');
    const selectMsg = document.getElementById('bookingSelectDoctorMsg');
    const slotGrid = document.getElementById('bookingSlotGrid');
    const noSlots = document.getElementById('bookingNoSlots');
    const confirmBox = document.getElementById('bookingConfirmBox');

    _selectedSlot = null;
    confirmBox.classList.remove('show');
    selectMsg.classList.add('d-none');
    slotsArea.classList.remove('d-none');
    loadingEl.classList.remove('d-none');
    slotGrid.innerHTML = '';
    noSlots.classList.add('d-none');

    const today = new Date();
    const daysToFetch = 7;
    let allSlots = [];

    for (let i = 0; i < daysToFetch; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        try {
            const slots = await Api.doctors.getAvailability(docId, dateStr);
            const avail = (Array.isArray(slots) ? slots : []).filter(s => s.available);
            if (avail.length > 0) {
                allSlots.push({ date: dateStr, dayIndex: i, slots: avail });
            }
        } catch (e) { /* skip failed days */ }
    }

    loadingEl.classList.add('d-none');

    if (allSlots.length === 0) {
        noSlots.classList.remove('d-none');
        return;
    }

    // Render grouped slots
    allSlots.forEach(group => {
        const d = new Date(group.date + 'T12:00:00');
        const dayName = d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'long' });
        const dateDisplay = d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric' });

        let dayLabel = dateDisplay;
        if (group.dayIndex === 0) dayLabel = t.slot_today + ' - ' + dateDisplay;
        else if (group.dayIndex === 1) dayLabel = t.slot_tomorrow + ' - ' + dateDisplay;

        const groupDiv = document.createElement('div');
        groupDiv.className = 'slot-day-group';
        groupDiv.innerHTML = `
            <div class="slot-day-header">
                <span>${dayName}</span>
                <span class="day-date">${dayLabel}</span>
            </div>
            <div class="slot-times" data-date="${group.date}">
                ${group.slots.map(s => `
                    <button class="slot-btn" data-time="${s.time}" onclick="selectSlot('${group.date}', '${s.time}', this)">
                        ${s.time.substring(0, 5)}
                    </button>
                `).join('')}
            </div>
        `;
        slotGrid.appendChild(groupDiv);
    });
}

function selectSlot(date, time, btn) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];

    // Deselect all
    document.querySelectorAll('.slot-btn.selected').forEach(el => el.classList.remove('selected'));

    // Select this one
    btn.classList.add('selected');
    _selectedSlot = { date, time };

    // Show confirm box
    const docSelect = document.getElementById('bookDoctorSelect');
    const docId = docSelect.value;
    const doc = _allBookDoctors.find(d => (d.id || d._id) === docId);
    const docName = doc ? translateDoctorName(doc.fullName || doc.name, lang) : '';

    const d = new Date(date + 'T12:00:00');
    const displayDate = d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });

    document.getElementById('bookConfirmDoctor').textContent = docName;
    document.getElementById('bookConfirmDate').textContent = displayDate;
    document.getElementById('bookConfirmTime').textContent = time.substring(0, 5);

    document.getElementById('bookingConfirmBox').classList.add('show');
}

async function confirmBooking() {
    if (!_selectedSlot) return;
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];
    const btn = document.getElementById('bookConfirmBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> ' + (lang === 'ar' ? 'جاري الحجز...' : 'Booking...');

    const docId = document.getElementById('bookDoctorSelect').value;

    try {
        await Api.appointments.book({
            doctorId: docId,
            appointmentDate: _selectedSlot.date + 'T00:00:00',
            timeSlot: _selectedSlot.time,
            notes: ''
        });
        bootstrap.Modal.getInstance(document.getElementById('bookingModal'))?.hide();
        showAlert(t.booking_success, 'success');
        loadDashboard();
    } catch (e) {
        showAlert(e.message || (lang === 'ar' ? 'فشل الحجز' : 'Booking failed'), 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> ' + (lang === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking');
    }
}

// ── Review Doctor ──────────────────────────────────────────
let _selectedRating = 0;

function openReviewModal(btn) {
    const data = btn.dataset;
    document.getElementById('reviewApptId').value = data.appt;
    document.getElementById('reviewDoctorId').value = data.doctor;
    document.getElementById('reviewDoctorName').textContent = data.docname || '';
    document.getElementById('reviewComment').value = '';
    _selectedRating = 0;
    setRating(0);
    new bootstrap.Modal(document.getElementById('reviewModal')).show();
}
window.openReviewModal = openReviewModal;

function setRating(val) {
    _selectedRating = val;
    const stars = document.querySelectorAll('#starRating .star-btn');
    stars.forEach((s, i) => {
        if (val > 0 && i < val) { s.className = 'bi bi-star-fill fs-1 text-warning star-btn'; }
        else { s.className = 'bi bi-star fs-1 text-warning star-btn'; }
    });
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const labels = { 0: 'Select a rating', 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };
    const labelsAr = { 0: 'اختر التقييم', 1: 'سيء', 2: 'مقبول', 3: 'جيد', 4: 'جيد جداً', 5: 'ممتاز' };
    document.getElementById('ratingText').textContent = lang === 'ar' ? (labelsAr[val] || '') : (labels[val] || '');
}
window.setRating = setRating;

async function submitReview() {
    const apptId = document.getElementById('reviewApptId').value;
    const doctorId = document.getElementById('reviewDoctorId').value;
    const comment = document.getElementById('reviewComment').value.trim();
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const t = translations[lang];

    if (_selectedRating < 1) { showAlert(lang === 'ar' ? 'يرجى اختيار تقييم' : 'Please select a rating', 'warning'); return; }

    try {
        await Api.reviews.submit({ appointmentId: parseInt(apptId), rating: _selectedRating, comment });
        bootstrap.Modal.getInstance(document.getElementById('reviewModal'))?.hide();
        showAlert(t.review_success, 'success');
    } catch(e) {
        showAlert(e.message || t.review_error, 'error');
    }
}
window.submitReview = submitReview;

// ── Profile Edit Functions ─────────────────────────────────────
window.openEditProfileModal = async function() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    
    try {
        // Fetch real data from Backend API
        const profile = await Api.auth.getProfile();
        
        // Populate inputs
        document.getElementById('profileName').value = profile.fullName || '';
        document.getElementById('profilePhone').value = profile.phoneNumber || '';
        document.getElementById('profileAge').value = profile.age || '';
        document.getElementById('profileGender').value = profile.gender || 'Male';
        document.getElementById('profilePassword').value = ''; // Reset password field
        
        const modalEl = document.getElementById('editProfileModal');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    } catch (e) {
        showAlert(lang === 'ar' ? 'فشل تحميل بيانات الملف الشخصي.' : 'Failed to load profile details.', 'error');
    }
};

// Intercept click on navbar profile link to open modal instead of reloading
document.addEventListener('click', (e) => {
    const profileBtn = e.target.closest('#navProfileBtn');
    if (profileBtn) {
        e.preventDefault();
        openEditProfileModal();
    }
});

// ── Auth Guard & Init ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('mediai_auth_role');
    if (!role) { window.location.href = '../login/login.html'; return; }
    if (role === 'doctor') { window.location.href = '../doctor-dashboard/doctor-dashboard.html'; return; }

    updateClock();
    setInterval(updateClock, 1000);
    loadDashboard();

    // Booking modal event listeners
    const bookSpecSelect = document.getElementById('bookSpecialtySelect');
    const bookDocSelect = document.getElementById('bookDoctorSelect');
    if (bookSpecSelect) bookSpecSelect.addEventListener('change', renderBookDoctors);
    if (bookDocSelect) bookDocSelect.addEventListener('change', async function() {
        const docId = this.value;
        if (!docId) return;
        await loadAvailableSlots(docId);
    });

    // Handle profile update form submission
    const profileForm = document.getElementById('editProfileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const lang = localStorage.getItem('mediai_lang') || 'en';
            
            const submitBtn = profileForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>' + (lang === 'ar' ? 'جاري الحفظ...' : 'Saving...');
            
            const fullName = document.getElementById('profileName').value;
            const phoneNumber = document.getElementById('profilePhone').value;
            const age = parseInt(document.getElementById('profileAge').value, 10);
            const gender = document.getElementById('profileGender').value;
            const password = document.getElementById('profilePassword').value;
            
            const payload = { fullName, phoneNumber, age, gender };
            if (password) {
                payload.password = password;
            }
            
            try {
                await Api.auth.updateProfile(payload);
                
                // Update local storage so navbar and dashboard header display the new name
                localStorage.setItem('mediai_user_name', fullName);
                localStorage.setItem('mediai_user_phone', phoneNumber);
                
                // Update UI elements immediately
                document.getElementById('dashPatientName').textContent = fullName;
                
                // Close modal
                const modalEl = document.getElementById('editProfileModal');
                const modal = bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
                
                showAlert(lang === 'ar' ? 'تم تحديث الملف الشخصي بنجاح!' : 'Profile updated successfully!', 'success');
            } catch (err) {
                showAlert(err.message || (lang === 'ar' ? 'فشل التحديث.' : 'Update failed.'), 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }
});

// ── View Scan as PDF (popup — no page navigation) ────────────
window.viewScanPDF = function(id) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    // Open a slim popup that auto-prints the report then closes itself
    const popup = window.open(
        `../diagnosis/diagnosis.html?id=${id}&print=1&popup=1`,
        'ScanReportPDF',
        'width=900,height=700,scrollbars=yes,resizable=yes'
    );
    if (!popup) {
        // Fallback if popups are blocked — show a simple alert
        alert(lang === 'ar'
            ? 'يرجى السماح بالنوافذ المنبثقة لعرض التقرير.'
            : 'Please allow popups to view the report.');
    }
};

let _pendingDeleteId = null;
let _pendingDeleteBtn = null;

window.deleteDiagnosis = function(scanId, btn) {
    _pendingDeleteId = scanId;
    _pendingDeleteBtn = btn;
    const modal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    modal.show();
};

window.confirmDelete = async function() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const modalEl = document.getElementById('deleteConfirmModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    if (!_pendingDeleteId) return;
    try {
        await Api.diagnosis.delete(_pendingDeleteId);
        const row = _pendingDeleteBtn ? _pendingDeleteBtn.closest('tr') : null;
        if (row) row.remove();
        showAlert(lang === 'ar' ? 'تم حذف التقرير بنجاح' : 'Report deleted successfully', 'success');
    } catch (e) {
        showAlert(e.message || (lang === 'ar' ? 'فشل حذف التقرير' : 'Failed to delete report'), 'error');
    }
    _pendingDeleteId = null;
    _pendingDeleteBtn = null;
};
