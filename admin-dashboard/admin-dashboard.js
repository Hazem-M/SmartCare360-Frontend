(function() {
const adminEn = {
    sidebar_brand_subtitle: "Admin Panel", admin: "Admin",
    nav_overview: "Overview", nav_patients: "Patients",
    page_title: "System Overview",
    stat_total_patients: "Total Patients", stat_total_doctors: "Registered Doctors",
    stat_total_scans: "AI Scans", stat_today_appts: "Today's Appointments",
    stat_pending_verif: "Pending Verification", stat_month_appts: "Appts This Month",
    qa_today: "Today's Appointments", qa_add_doc: "Add Doctor", qa_report: "Quick Report",
    chart_growth: "Platform Growth (Patients vs Doctors)",
    chart_scan_dist: "Scan Distribution",     chart_specialty: "Doctors by Specialty",
    chart_gender: "Patient Gender", chart_status: "Appointment Status",
    chart_weekly: "Weekly Appointments",
    activity_title: "Recent System Activity",
    tbl_user: "User", tbl_action: "Action", tbl_status: "Status", tbl_time: "Time",
    patients_title: "Patients Directory", doctors_title: "Doctors Verification",
    appointments_title: "All Appointments",
    spec_all: "All Specialties", spec_cardiology: "Pneumonia",
    spec_orthopedics: "Orthopedics", spec_neurology: "Neurology",
    add_doctor_btn: "Add Doctor",
    appt_all: "All Status", appt_all_doctors: "All Doctors",
    appt_scheduled: "Scheduled", appt_confirmed: "Confirmed",
    appt_completed: "Completed", appt_cancelled: "Cancelled",
    register_doc: "Register New Doctor", doc_full_name: "Doctor Full Name",
    doc_email: "Email Address", doc_password: "Password",
    doc_specialty: "Specialty", doc_exp: "Years of Exp.",
    doc_clinic_address: "Clinic Address", doc_bio: "Short Biography",
    ph_select_spec: "Select Specialty",
    btn_cancel: "Cancel", btn_save: "Save Profile",
    btn_close: "Close", close: "Close",
    patient_profile: "Patient Profile",
    report_title: "Quick System Report", report_loading: "Generating report...",
    no_activity: "No recent activity", no_patients: "No patients found",
    no_doctors: "No doctors matched", no_appointments: "No appointments found",
    loading: "Loading...",
    confirm_delete_title: "Confirm Deletion",
    confirm_delete_msg: "This action cannot be undone. Are you sure?",
    delete: "Delete",
    verify: "Verify", revoke: "Revoke",
    verified: "Verified", pending: "Pending Approval",
    showing: "Showing", to: "to", of: "of",
    exported: "Data exported successfully",
    today: "Today", month: "Month",
    action_confirm: "Confirm", action_complete: "Complete", action_cancel: "Cancel",
    appt_updated: "Appointment status updated",
    appt_update_error: "Failed to update appointment",
    row_scheduled: "Scheduled", row_confirmed: "Confirmed",
    row_completed: "Completed", row_cancelled: "Cancelled",
    specialty: "Specialty", experience_years: "Yrs Exp",
    lbl_notes: "Medical History",
    chart_load_error: "Could not load chart data",
    chart_patients_label: "Patients",
    chart_doctors_label: "Doctors",
    today_activity_title: "Today's Activity",
    today_active_patients: "Active Patients",
    today_active_doctors: "Active Doctors",
    today_total_appts: "Today's Appointments",
    scan_xray_bone: "X-Ray (Bone Fracture)",
    scan_ecg_heart: "ECG (Heart)",
    scan_brain_neurology: "Brain & Neurology",
    day_sun: "Sun", day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri", day_sat: "Sat",
    qa_add_spec: "Add Specialty",
    qa_add_pat: "Add Patient",
    add_specialty_title: "Add New Specialty",
    spec_name_en: "Specialty Name (English)",
    spec_name_ar: "Specialty Name (Arabic)",
    add_patient_title: "Register New Patient",
    pat_full_name: "Full Name",
    pat_email: "Email Address",
    pat_password: "Password",
    pat_age: "Age",
    pat_gender: "Gender",
    pat_phone: "Phone Number",
    pat_medical_history: "Medical History",
    btn_add: "Add",
    doc_review_title: "Review Doctor",
    doc_id_card: "ID Card",
    no_id_card: "No ID card uploaded.",
    btn_approve: "Approve",
    btn_reject: "Reject",
    rejection_reason: "Rejection Reason",
    rejection_reason_required: "Please enter a reason for rejection.",
    no_bio: "No biography provided.",
    logo_alt: "Logo",
    search_placeholder: "Search...",
    search_patients_placeholder: "Search patients...",
    csv_export: "CSV",
    th_patient_info: "Patient Info",
    th_email: "Email",
    th_registered: "Registered",
    th_status: "Status",
    th_actions: "Actions",
    th_doctor_name: "Doctor Name",
    th_specialty: "Specialty",
    th_clinic_address: "Clinic Address",
    th_experience: "Experience",
    th_verification: "Verification",
    th_patient: "Patient",
    th_doctor: "Doctor",
    th_date: "Date",
    th_time: "Time"
};
const adminAr = {
    sidebar_brand_subtitle: "لوحة التحكم", admin: "المشرف",
    nav_overview: "نظرة عامة", nav_patients: "المرضى",
    page_title: "نظرة عامة على النظام",
    stat_total_patients: "إجمالي المرضى", stat_total_doctors: "الأطباء المسجلين",
    stat_total_scans: "فحوصات AI", stat_today_appts: "مواعيد اليوم",
    stat_pending_verif: "في انتظار التوثيق", stat_month_appts: "مواعيد هذا الشهر",
    qa_today: "مواعيد اليوم", qa_add_doc: "إضافة دكتور", qa_report: "تقرير سريع",
    chart_growth: "نمو المنصة (المرضى مقابل الأطباء)",
    chart_scan_dist: "توزيع الفحوصات",     chart_specialty: "الأطباء حسب التخصص",
    chart_gender: "جنس المرضى", chart_status: "حالة المواعيد",
    chart_weekly: "مواعيد الأسبوع",
    activity_title: "أحدث نشاطات النظام",
    tbl_user: "المستخدم", tbl_action: "الإجراء", tbl_status: "الحالة", tbl_time: "الوقت",
    patients_title: "دليل المرضى", doctors_title: "توثيق الأطباء",
    appointments_title: "كل المواعيد",
    spec_all: "كل التخصصات", spec_cardiology: "أشعة الصدر (الالتهاب الرئوي)",
    spec_orthopedics: "عظام", spec_neurology: "مخ وأعصاب",
    add_doctor_btn: "إضافة دكتور",
    appt_all: "كل الحالات", appt_all_doctors: "كل الأطباء",
    appt_scheduled: "مجدول", appt_confirmed: "مؤكد",
    appt_completed: "مكتمل", appt_cancelled: "ملغي",
    register_doc: "تسجيل دكتور جديد", doc_full_name: "الاسم الكامل",
    doc_email: "البريد الإلكتروني", doc_password: "كلمة المرور",
    doc_specialty: "التخصص", doc_exp: "سنوات الخبرة",
    doc_clinic_address: "عنوان العيادة", doc_bio: "نبذة مختصرة",
    ph_select_spec: "اختر التخصص",
    btn_cancel: "إلغاء", btn_save: "حفظ",
    btn_close: "إغلاق", close: "إغلاق",
    patient_profile: "الملف الشخصي للمريض",
    report_title: "تقرير سريع", report_loading: "جاري إنشاء التقرير...",
    no_activity: "لا توجد أنشطة حديثة", no_patients: "لا يوجد مرضى",
    no_doctors: "لا يوجد أطباء مطابقين", no_appointments: "لا توجد مواعيد",
    loading: "جارٍ التحميل...",
    confirm_delete_title: "تأكيد الحذف",
    confirm_delete_msg: "لا يمكن التراجع عن هذا الإجراء. هل أنت متأكد؟",
    delete: "حذف",
    verify: "توثيق", revoke: "إلغاء التوثيق",
    verified: "موثق", pending: "قيد الانتظار",
    showing: "عرض", to: "إلى", of: "من",
    exported: "تم تصدير البيانات بنجاح",
    today: "اليوم", month: "الشهر",
    action_confirm: "تأكيد", action_complete: "إكمال", action_cancel: "إلغاء",
    appt_updated: "تم تحديث حالة الموعد",
    appt_update_error: "فشل تحديث حالة الموعد",
    row_scheduled: "مجدول", row_confirmed: "مؤكد",
    row_completed: "مكتمل", row_cancelled: "ملغي",
    specialty: "التخصص", experience_years: "سنوات الخبرة",
    lbl_notes: "التاريخ الطبي",
    chart_load_error: "تعذر تحميل بيانات الرسوم البيانية",
    chart_patients_label: "المرضى",
    chart_doctors_label: "الأطباء",
    today_activity_title: "نشاط اليوم",
    today_active_patients: "مرضى نشطين",
    today_active_doctors: "أطباء نشطين",
    today_total_appts: "مواعيد اليوم",
    scan_xray_bone: "أشعة سينية (كسور)",
    scan_ecg_heart: "رسم قلب",
    scan_brain_neurology: "مخ وأعصاب",
    day_sun: "الأحد", day_mon: "الإثنين", day_tue: "الثلاثاء", day_wed: "الأربعاء", day_thu: "الخميس", day_fri: "الجمعة", day_sat: "السبت",
    qa_add_spec: "إضافة تخصص",
    qa_add_pat: "إضافة مريض",
    add_specialty_title: "إضافة تخصص جديد",
    spec_name_en: "اسم التخصص (بالإنجليزية)",
    spec_name_ar: "اسم التخصص (بالعربية)",
    add_patient_title: "تسجيل مريض جديد",
    pat_full_name: "الاسم الكامل",
    pat_email: "البريد الإلكتروني",
    pat_password: "كلمة المرور",
    pat_age: "العمر",
    pat_gender: "الجنس",
    pat_phone: "رقم الهاتف",
    pat_medical_history: "التاريخ الطبي",
    btn_add: "إضافة",
    doc_review_title: "مراجعة الطبيب",
    doc_id_card: "بطاقة الهوية",
    no_id_card: "لم يتم رفع بطاقة هوية.",
    btn_approve: "موافقة",
    btn_reject: "رفض",
    rejection_reason: "سبب الرفض",
    rejection_reason_required: "يرجى إدخال سبب الرفض.",
    no_bio: "لا توجد سيرة ذاتية.",
    logo_alt: "الشعار",
    search_placeholder: "بحث...",
    search_patients_placeholder: "بحث عن مرضى...",
    csv_export: "CSV",
    th_patient_info: "معلومات المريض",
    th_email: "البريد الإلكتروني",
    th_registered: "تاريخ التسجيل",
    th_status: "الحالة",
    th_actions: "الإجراءات",
    th_doctor_name: "اسم الطبيب",
    th_specialty: "التخصص",
    th_clinic_address: "عنوان العيادة",
    th_experience: "الخبرة",
    th_verification: "التوثيق",
    th_patient: "المريض",
    th_doctor: "الطبيب",
    th_date: "التاريخ",
    th_time: "الوقت"
};
translations.en = Object.assign(translations.en || {}, adminEn);
translations.ar = Object.assign(translations.ar || {}, adminAr);

function t(key) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    return (translations[lang] && translations[lang][key]) || key;
}

function enforceAdmin() {
    const token = localStorage.getItem('mediai_token');
    const role = localStorage.getItem('mediai_auth_role');
    if (!token || role !== 'admin') { window.location.href = '../login/login.html'; }
}

function logoutAdmin() {
    if (typeof Api !== 'undefined' && Api.clearSession) Api.clearSession();
    else { localStorage.removeItem('mediai_token'); localStorage.removeItem('mediai_auth_role'); }
    window.location.href = '../login/login.html';
}
window.logoutAdmin = logoutAdmin;

function toggleLanguageManual() {
    const current = localStorage.getItem('mediai_lang') || 'en';
    toggleLanguage(current === 'en' ? 'ar' : 'en');
}
window.toggleLanguageManual = toggleLanguageManual;

function translateDoctorName(name, lang) {
    if (!name) return '';
    const l = lang || localStorage.getItem('mediai_lang') || 'en';
    let base = name.replace(/^د\.\s*/u, '').replace(/^Dr\.\s*/i, '').trim();
    return l === 'ar' ? `د. ${base}` : `Dr. ${base}`;
}

function formatDate(d) {
    if (!d) return '—';
    try { return new Date(d).toLocaleDateString([], { year:'numeric', month:'short', day:'numeric' }); }
    catch(e) { return d; }
}

// ─── Confirm Modal ───
let _confirmCallback = null;
function showConfirm(title, message, btnLabel, callback) {
    document.getElementById('confirmTitle').textContent = title || t('confirm_delete_title');
    document.getElementById('confirmMessage').textContent = message || t('confirm_delete_msg');
    const btn = document.getElementById('confirmActionBtn');
    btn.textContent = btnLabel || t('delete');
    _confirmCallback = callback;
    new bootstrap.Modal(document.getElementById('confirmModal')).show();
}
document.getElementById('confirmActionBtn')?.addEventListener('click', function() {
    if (_confirmCallback) _confirmCallback();
    bootstrap.Modal.getInstance(document.getElementById('confirmModal'))?.hide();
    _confirmCallback = null;
});

// ─── Overview Stats ───
async function initOverviewStats() {
    try {
        const stats = await Api.public.getStats();
        document.getElementById('admin-stat-patients').textContent = (stats.totalPatients || 0).toLocaleString();
        document.getElementById('admin-stat-doctors').textContent = (stats.totalDoctors || 0).toLocaleString();
        document.getElementById('admin-stat-scans').textContent = (stats.totalScans || 0).toLocaleString();
        if (stats.todayAppointments !== undefined)
            document.getElementById('admin-stat-today-appts').textContent = stats.todayAppointments;
        if (stats.monthAppointments !== undefined)
            document.getElementById('admin-stat-month').textContent = stats.monthAppointments;
    } catch(e) {
        ['admin-stat-patients','admin-stat-doctors','admin-stat-scans','admin-stat-today-appts','admin-stat-month'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '—';
        });
    }
    try {
        const docs = await Api.admin.getDoctors();
        const pending = docs.filter(d => !(d.isApproved !== undefined ? d.isApproved : d.IsApproved)).length;
        document.getElementById('admin-stat-pending').textContent = pending;
    } catch(e) {
        document.getElementById('admin-stat-pending').textContent = '—';
    }
}

// ─── Charts ───
let chartInstances = {};
function destroyCharts() {
    Object.values(chartInstances).forEach(c => { if (c) c.destroy(); });
    chartInstances = {};
}

async function initCharts() {
    destroyCharts();
    const isDark = document.body.classList.contains('dark-mode');
    const textColor = isDark ? '#ECFDF5' : '#062016';
    Chart.defaults.color = textColor;
    Chart.defaults.font.family = "'Inter', sans-serif";

    let stats = { growthLabels:['Jan','Feb','Mar','Apr','May','Jun','Jul'], patientGrowth:[0,0,0,0,0,0,0], doctorGrowth:[0,0,0,0,0,0,0], scanLabels:['No Data'], scanValues:[1] };
    try { stats = await Api.admin.getDashboardStats(); } catch(e) { showAlert(t('chart_load_error'), 'warning'); }

    const gLabels = stats.growthLabels || stats.GrowthLabels || ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
    const pData = stats.patientGrowth || stats.PatientGrowth || [0,0,0,0,0,0,0];
    const dData = stats.doctorGrowth || stats.DoctorGrowth || [0,0,0,0,0,0,0];

    // Growth Chart
    const gCtx = document.getElementById('growthChart')?.getContext('2d');
    if (gCtx) {
        const grad = gCtx.createLinearGradient(0, 0, 0, 280);
        grad.addColorStop(0, isDark ? 'rgba(59,130,246,0.2)' : 'rgba(59,130,246,0.15)');
        grad.addColorStop(1, isDark ? 'rgba(59,130,246,0)' : 'rgba(59,130,246,0)');
        chartInstances.growth = new Chart(gCtx, {
            type: 'line',
            data: {
                labels: gLabels,
                datasets: [
                    { label: t('chart_patients_label'), data: pData, borderColor: '#3B82F6', backgroundColor: grad, borderWidth: 3, tension: 0.4, fill: true, pointRadius: 5, pointBackgroundColor: '#3B82F6', pointBorderColor: '#fff', pointBorderWidth: 2 },
                    { label: t('chart_doctors_label'), data: dData, borderColor: '#059669', backgroundColor: 'transparent', borderWidth: 3, tension: 0.4, borderDash: [5,5], pointRadius: 5, pointBackgroundColor: '#059669', pointBorderColor: '#fff', pointBorderWidth: 2 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { usePointStyle: true } } }, scales: { y: { grid: { color: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)' }, beginAtZero: true }, x: { grid: { display: false } } } }
        });
    }

    // Chart Cards (Specialty, Gender, Status, Weekly)
    let chartData = { specLabels:['No Data'], specValues:[1], genderLabels:['No Data'], genderValues:[1], statusLabels:['No Data'], statusValues:[1], weekLabels:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], weekValues:[0,0,0,0,0,0,0] };
    try { chartData = await Api.admin.getChartData(); } catch(e) { showAlert(t('chart_load_error'), 'warning'); }

    const specColors = ['#7C3AED','#F59E0B','#EF4444','#06B6D4','#8B5CF6','#F97316','#10B981'];
    const statusColors = ['#10B981','#F59E0B','#EF4444','#3B82F6'];

    const specL = chartData.specLabels || chartData.SpecLabels || ['No Data'];
    const specV = chartData.specValues || chartData.SpecValues || [1];
    const genL = chartData.genderLabels || chartData.GenderLabels || ['Male','Female'];
    const genV = chartData.genderValues || chartData.GenderValues || [1, 1];
    const statL = chartData.statusLabels || chartData.StatusLabels || ['No Data'];
    const statV = chartData.statusValues || chartData.StatusValues || [1];
    const weekL = (chartData.weekLabels || chartData.WeekLabels || ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']).map(d => t('day_' + d.toLowerCase().slice(0,3)));
    const weekV = chartData.weekValues || chartData.WeekValues || [0,0,0,0,0,0,0];

    // Specialty
    const spCtx = document.getElementById('specChart')?.getContext('2d');
    if (spCtx) {
        const has = specL[0] !== 'No Data';
        const tSpecL = has ? specL.map(s => translateSpecialty(s)) : [t('no_doctors')];
        chartInstances.spec = new Chart(spCtx, {
            type: 'doughnut',
            data: { labels: tSpecL, datasets: [{ data: has ? specV : [1], backgroundColor: specColors.slice(0, Math.max(has ? specV.length : 1, 3)), borderWidth: 2, borderColor: isDark ? '#05281D' : '#fff', hoverOffset: 8 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10 } } } }
        });
    }

    // Gender
    const gdCtx = document.getElementById('genderChart')?.getContext('2d');
    if (gdCtx) {
        const has = genL[0] !== 'No Data';
        const maleLabel = t('gender_male');
        const femaleLabel = t('gender_female');
        const gLabels = has ? genL.map(l => l === 'Male' ? maleLabel : l === 'Female' ? femaleLabel : l) : [maleLabel, femaleLabel];
        const gData = has ? genV : [1, 1];
        chartInstances.gender = new Chart(gdCtx, {
            type: 'doughnut',
            data: { labels: gLabels, datasets: [{ data: gData, backgroundColor: ['#3B82F6','#EC4899'], borderWidth: 2, borderColor: isDark ? '#05281D' : '#fff', hoverOffset: 8 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10 } } } }
        });
    }

    // Status
    const stCtx = document.getElementById('statusChart')?.getContext('2d');
    if (stCtx) {
        const has = statL[0] !== 'No Data';
        const tStatL = has ? statL.map(s => t('row_' + s.toLowerCase())) : [t('no_appointments')];
        chartInstances.status = new Chart(stCtx, {
            type: 'doughnut',
            data: { labels: tStatL, datasets: [{ data: has ? statV : [1], backgroundColor: statusColors.slice(0, Math.max(has ? statV.length : 1, 2)), borderWidth: 2, borderColor: isDark ? '#05281D' : '#fff', hoverOffset: 8 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10 } } } }
        });
    }

    // Weekly Bar
    const wCtx = document.getElementById('weeklyChart')?.getContext('2d');
    if (wCtx) {
        chartInstances.weekly = new Chart(wCtx, {
            type: 'bar',
            data: { labels: weekL, datasets: [{ label: t('appointments_title'), data: weekV, backgroundColor: weekV.map(v => v > 0 ? '#059669' : 'rgba(5,150,105,0.15)'), borderRadius: 6, borderSkipped: false }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, color: textColor }, grid: { color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' } }, x: { ticks: { color: textColor }, grid: { display: false } } } }
        });
    }
}

// ─── Today's Activity ───
async function populateTodayActivity() {
    const body = document.getElementById('todayActivityBody');
    if (!body) return;
    try {
        const data = await Api.admin.getAppointments('', 'today');
        const items = data.items || data || [];
        const uniquePatients = new Set(items.map(a => a.patientId).filter(Boolean)).size;
        const uniqueDoctors = new Set(items.map(a => a.doctorId).filter(Boolean)).size;
        const totalAppts = items.length;
        body.innerHTML = `
            <div class="d-flex flex-column gap-3">
                <div class="d-flex align-items-center gap-3 p-3 rounded-3 border bg-light">
                    <div class="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center" style="width:44px;height:44px;flex-shrink:0;">
                        <i class="bi bi-people-fill text-primary"></i>
                    </div>
                    <div>
                        <div class="fw-bold fs-5">${uniquePatients}</div>
                        <div class="small text-muted">${t('today_active_patients')}</div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3 p-3 rounded-3 border bg-light">
                    <div class="rounded-circle bg-success-subtle d-flex align-items-center justify-content-center" style="width:44px;height:44px;flex-shrink:0;">
                        <i class="bi bi-person-badge text-success"></i>
                    </div>
                    <div>
                        <div class="fw-bold fs-5">${uniqueDoctors}</div>
                        <div class="small text-muted">${t('today_active_doctors')}</div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3 p-3 rounded-3 border bg-light">
                    <div class="rounded-circle bg-warning-subtle d-flex align-items-center justify-content-center" style="width:44px;height:44px;flex-shrink:0;">
                        <i class="bi bi-calendar-check text-warning"></i>
                    </div>
                    <div>
                        <div class="fw-bold fs-5">${totalAppts}</div>
                        <div class="small text-muted">${t('today_total_appts')}</div>
                    </div>
                </div>
            </div>`;
    } catch(e) {
        body.innerHTML = `<div class="text-center py-4 text-muted"><i class="bi bi-exclamation-circle" style="font-size:1.2rem;"></i><br><small>${t('no_appointments')}</small></div>`;
    }
}

// ─── Activity ───
async function populateActivityTable() {
    const tb = document.getElementById('activityTableBody');
    if (!tb) return;
    try {
        const acts = await Api.admin.getRecentActivity();
        tb.innerHTML = acts.length === 0
            ? `<tr><td colspan="4" class="text-center py-3 text-muted">${t('no_activity')}</td></tr>`
            : acts.map(a => `<tr><td><div class="fw-semibold">${a.user}</div></td><td><span class="text-muted">${window.translateAction(a.action)}</span></td><td><span class="badge bg-${a.color}-subtle text-${a.color} px-2 py-1 rounded-pill">${a.status}</span></td><td class="text-muted small">${a.time ? new Date(a.time).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) : '—'}</td></tr>`).join('');
    } catch(e) {
        tb.innerHTML = `<tr><td colspan="4" class="text-center text-danger">Error: ${e.message}</td></tr>`;
    }
}

// ─── Pagination ───
const PAGE_SIZE = 10;
const pageState = { patients: 1, doctors: 1, appointments: 1 };
const sortState = { patients: { key: '', asc: true }, doctors: { key: '', asc: true } };

function renderPagination(containerId, current, total, cb) {
    const c = document.getElementById(containerId);
    if (!c) return;
    if (total <= 1) { c.innerHTML = ''; return; }
    window._paginationCb = window._paginationCb || {};
    window._paginationCb[containerId] = cb;
    let h = `<button class="btn btn-sm btn-outline-secondary page-btn" onclick="paginateGo('${containerId}',${current - 1})" ${current === 1 ? 'disabled' : ''}>&laquo;</button>`;
    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || Math.abs(i - current) <= 1)
            h += `<button class="btn btn-sm ${i === current ? 'btn-primary' : 'btn-outline-secondary'} page-btn" onclick="paginateGo('${containerId}',${i})">${i}</button>`;
    }
    h += `<button class="btn btn-sm btn-outline-secondary page-btn" onclick="paginateGo('${containerId}',${current + 1})" ${current === total ? 'disabled' : ''}>&raquo;</button>`;
    c.innerHTML = h;
}
window.paginateGo = function(containerId, page) {
    const cb = window._paginationCb && window._paginationCb[containerId];
    if (cb) cb(page);
};

function getPaginatedItems(arr, page) {
    const start = (page - 1) * PAGE_SIZE;
    return { items: arr.slice(start, start + PAGE_SIZE), start: start + 1, end: start + arr.slice(start, start + PAGE_SIZE).length, total: arr.length, totalPages: Math.ceil(arr.length / PAGE_SIZE) || 1 };
}

// ─── PATIENTS ───
let allPatientsCache = [];
async function populatePatientsTable() {
    const tb = document.getElementById('patientsTableBody');
    if (!tb) return;
    tb.innerHTML = `<tr><td colspan="5" class="text-center py-4"><span class="spinner-border spinner-border-sm text-primary"></span> ${t('loading')}</td></tr>`;
    try {
        allPatientsCache = await Api.admin.getPatients();
        renderPatientsList();
    } catch(e) {
        tb.innerHTML = `<tr><td colspan="5" class="text-center text-danger">Error: ${e.message}</td></tr>`;
    }
}

function sortPatients(key) {
    const s = sortState.patients;
    if (s.key === key) s.asc = !s.asc;
    else { s.key = key; s.asc = true; }
    pageState.patients = 1;
    renderPatientsList();
}
window.sortPatients = sortPatients;

function renderPatientsList() {
    const tb = document.getElementById('patientsTableBody');
    if (!tb) return;
    const query = (document.getElementById('patientSearchInput')?.value || '').toLowerCase();
    let filtered = allPatientsCache.filter(p => (p.fullName || '').toLowerCase().includes(query) || (p.email || '').toLowerCase().includes(query));
    const s = sortState.patients;
    if (s.key) {
        filtered.sort((a, b) => {
            let va = a[s.key], vb = b[s.key];
            if (typeof va === 'string') va = va.toLowerCase();
            if (typeof vb === 'string') vb = vb.toLowerCase();
            if (va < vb) return s.asc ? -1 : 1;
            if (va > vb) return s.asc ? 1 : -1;
            return 0;
        });
    }
    const pg = getPaginatedItems(filtered, pageState.patients);
    const info = document.getElementById('patients-pagination-info');
    if (info) info.textContent = pg.total > 0 ? `${t('showing')} ${pg.start} ${t('to')} ${pg.end} ${t('of')} ${pg.total}` : '';
    const countLabel = document.getElementById('patients-count-label');
    if (countLabel) countLabel.textContent = `${pg.total} ${t('stat_total_patients')}`;
    if (pg.items.length === 0) {
        tb.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted"><i class="bi bi-people" style="font-size:1.5rem;"></i><br>${t('no_patients')}</td></tr>`;
        renderPagination('patients-pagination', pg.page, pg.totalPages, (np) => { pageState.patients = np; renderPatientsList(); });
        return;
    }
    let html = '';
    pg.items.forEach(p => {
        html += `<tr>
            <td><div class="fw-bold">${p.fullName}</div></td>
            <td class="text-secondary">${p.email}</td>
            <td class="text-secondary">${formatDate(p.createdAt)}</td>
            <td><span class="badge bg-success-subtle text-success px-2 py-1 rounded-pill">Active</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1" onclick="showPatientDetails('${p.id}')" title="View"><i class="bi bi-eye"></i></button>
                <button class="btn btn-sm btn-outline-danger" onclick="deletePatientConfirm('${p.id}','${p.fullName.replace(/'/g,"\\'")}')" title="Delete"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;
    });
    tb.innerHTML = html;
    renderPagination('patients-pagination', pg.page, pg.totalPages, (np) => { pageState.patients = np; renderPatientsList(); });
}

function deletePatientConfirm(id, name) {
    showConfirm(t('confirm_delete_title'), `${t('confirm_delete_msg')}\n${name}`, t('delete'), async () => {
        try {
            await Api.admin.deletePatient(id);
            showAlert('Patient removed', 'success');
            populatePatientsTable();
            initOverviewStats();
        } catch(e) { showAlert(e.message, 'error'); }
    });
}
window.deletePatientConfirm = deletePatientConfirm;

// ─── DOCTORS ───
let allDoctorsCache = [];
async function populateDoctorsTable() {
    const tb = document.getElementById('doctorsTableBody');
    if (!tb) return;
    tb.innerHTML = `<tr><td colspan="6" class="text-center py-4"><span class="spinner-border spinner-border-sm text-primary"></span> ${t('loading')}</td></tr>`;
    try {
        allDoctorsCache = await Api.admin.getDoctors();
        renderDoctorsList();
    } catch(e) {
        tb.innerHTML = `<tr><td colspan="6" class="text-center text-danger">Error: ${e.message}</td></tr>`;
    }
}

function sortDoctors(key) {
    const s = sortState.doctors;
    if (s.key === key) s.asc = !s.asc;
    else { s.key = key; s.asc = true; }
    pageState.doctors = 1;
    renderDoctorsList();
}
window.sortDoctors = sortDoctors;

function renderDoctorsList() {
    const tb = document.getElementById('doctorsTableBody');
    if (!tb) return;
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const query = (document.getElementById('doctorSearchInput')?.value || '').toLowerCase();
    const specFilter = document.getElementById('doctorSpecialtyFilter')?.value || '';
    let filtered = allDoctorsCache.filter(d => {
        const name = (d.name || d.fullName || '').toLowerCase();
        const email = (d.email || '').toLowerCase();
        const spec = (d.specialty || '');
        return (name.includes(query) || email.includes(query)) && (!specFilter || spec === specFilter);
    });
    const s = sortState.doctors;
    if (s.key) {
        const mapKey = { name: 'fullName', specialty: 'specialty', address: 'clinicAddress', exp: 'experienceYears' };
        const k = mapKey[s.key] || 'fullName';
        filtered.sort((a, b) => {
            let va = a[k], vb = b[k];
            if (va == null) va = ''; if (vb == null) vb = '';
            if (typeof va === 'string') va = va.toLowerCase();
            if (typeof vb === 'string') vb = vb.toLowerCase();
            if (va < vb) return s.asc ? -1 : 1;
            if (va > vb) return s.asc ? 1 : -1;
            return 0;
        });
    }
    const pg = getPaginatedItems(filtered, pageState.doctors);
    const info = document.getElementById('doctors-pagination-info');
    if (info) info.textContent = pg.total > 0 ? `${t('showing')} ${pg.start} ${t('to')} ${pg.end} ${t('of')} ${pg.total}` : '';
    const countLabel = document.getElementById('doctors-count-label');
    if (countLabel) countLabel.textContent = `${pg.total} ${t('stat_total_doctors')}`;
    if (pg.items.length === 0) {
        tb.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted"><i class="bi bi-person-badge" style="font-size:1.5rem;"></i><br>${t('no_doctors')}</td></tr>`;
        renderPagination('doctors-pagination', pg.page, pg.totalPages, (np) => { pageState.doctors = np; renderDoctorsList(); });
        return;
    }
    let html = '';
    pg.items.forEach(d => {
        const name = translateDoctorName(d.fullName || d.name, lang);
        const spec = window.translateSpecialty ? window.translateSpecialty(d.specialty) : (d.specialty || 'General');
        const isApproved = d.isApproved !== undefined ? d.isApproved : d.IsApproved;
        const aBadge = isApproved
            ? `<span class="badge bg-success-subtle text-success px-2 py-1 rounded-pill"><i class="bi bi-check-circle me-1"></i>${t('verified')}</span>`
            : `<span class="badge bg-warning-subtle text-warning px-2 py-1 rounded-pill"><i class="bi bi-clock me-1"></i>${t('pending')}</span>`;
        const hasIdCard = d.idCardPath || d.IdCardPath ? `<span class="badge bg-info-subtle text-info px-2 py-1 rounded-pill ms-1"><i class="bi bi-card-image"></i></span>` : '';
        html += `<tr>
            <td><div class="fw-bold">${name}</div><small class="text-muted">${d.email}</small></td>
            <td class="text-secondary">${spec}</td>
            <td class="text-secondary">${window.toMapLink ? window.toMapLink(d.clinicAddress) : (d.clinicAddress || '—')}</td>
            <td class="text-secondary">${d.experienceYears || 0} ${t('experience_years')}</td>
            <td>${aBadge}${hasIdCard}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1" onclick="openDoctorReview('${d.id}')" title="Review"><i class="bi bi-eye"></i></button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteDoctorConfirm('${d.id}','${(d.fullName || d.name || '').replace(/'/g,"\\'")}')" title="Delete"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;
    });
    tb.innerHTML = html;
    renderPagination('doctors-pagination', pg.page, pg.totalPages, (np) => { pageState.doctors = np; renderDoctorsList(); });
}

let _reviewDoctorId = null;

async function openDoctorReview(id) {
    const doc = allDoctorsCache.find(d => (d.id || '').toString() === id.toString());
    if (!doc) { showAlert('Doctor not found', 'error'); return; }
    _reviewDoctorId = id;
    const lang = localStorage.getItem('mediai_lang') || 'en';
    document.getElementById('reviewDocName').textContent = translateDoctorName(doc.fullName || doc.name, lang);
    document.getElementById('reviewDocSpecialty').textContent = doc.specialty || 'General';
    document.getElementById('reviewDocEmail').textContent = doc.email || '—';
    document.getElementById('reviewDocPhone').textContent = doc.phoneNumber || '—';
    const rawGender = doc.gender || '';
    const genderLabel = rawGender
        ? (lang === 'ar' ? (rawGender === 'Male' ? 'ذكر' : rawGender === 'Female' ? 'أنثى' : rawGender) : rawGender)
        : '—';
    document.getElementById('reviewDocGender').textContent = genderLabel;
    document.getElementById('reviewDocExp').textContent = `${doc.experienceYears || 0} ${t('experience_years')}`;
    document.getElementById('reviewDocAddress').textContent = doc.clinicAddress || '—';
    document.getElementById('reviewDocBio').textContent = doc.bio || t('no_bio');
    const idCardPath = doc.idCardPath || doc.IdCardPath;
    const container = document.getElementById('reviewIdCardContainer');
    if (idCardPath) {
        container.innerHTML = `<img src="http://localhost:5000${idCardPath}" class="img-fluid rounded" style="max-height:250px;object-fit:contain;" alt="ID Card">`;
    } else {
        container.innerHTML = `<span class="text-muted">${t('no_id_card')}</span>`;
    }
    document.getElementById('rejectionReasonInput').value = '';
    const isApproved = doc.isApproved !== undefined ? doc.isApproved : doc.IsApproved;
    document.getElementById('approveDoctorBtn').disabled = isApproved;
    document.getElementById('rejectDoctorBtn').disabled = isApproved;
    new bootstrap.Modal(document.getElementById('doctorReviewModal')).show();
}
window.openDoctorReview = openDoctorReview;

async function approveDoctor() {
    if (!_reviewDoctorId) return;
    try {
        const res = await Api.admin.approveDoctor(_reviewDoctorId);
        showAlert(res.message || 'Doctor approved', 'success');
        bootstrap.Modal.getInstance(document.getElementById('doctorReviewModal'))?.hide();
        populateDoctorsTable();
        initOverviewStats();
    } catch(e) { showAlert(e.message, 'error'); }
}
window.approveDoctor = approveDoctor;

async function rejectDoctor() {
    if (!_reviewDoctorId) return;
    const reason = document.getElementById('rejectionReasonInput').value.trim();
    if (!reason) { showAlert(t('rejection_reason_required'), 'warning'); return; }
    try {
        const res = await Api.admin.rejectDoctor(_reviewDoctorId, reason);
        showAlert(res.message || 'Doctor rejected', 'success');
        bootstrap.Modal.getInstance(document.getElementById('doctorReviewModal'))?.hide();
        populateDoctorsTable();
        initOverviewStats();
    } catch(e) { showAlert(e.message, 'error'); }
}
window.rejectDoctor = rejectDoctor;

function deleteDoctorConfirm(id, name) {
    showConfirm(t('confirm_delete_title'), `${t('confirm_delete_msg')}\n${name}`, t('delete'), async () => {
        try {
            await Api.admin.deleteDoctor(id);
            showAlert('Doctor removed', 'success');
            populateDoctorsTable();
            initOverviewStats();
        } catch(e) { showAlert(e.message, 'error'); }
    });
}
window.deleteDoctorConfirm = deleteDoctorConfirm;

// ─── APPOINTMENTS ───
let allAppointmentsCache = [];
let apptPage = 1;
let _apptRange = '';
async function populateAppointmentsTable() {
    const tb = document.getElementById('appointmentsTableBody');
    if (!tb) return;
    tb.innerHTML = `<tr><td colspan="7" class="text-center py-4"><span class="spinner-border spinner-border-sm text-primary"></span> ${t('loading')}</td></tr>`;
    try {
        const range = _apptRange;
        _apptRange = '';
        const data = await Api.admin.getAppointments('', range);
        allAppointmentsCache = data.items || data || [];
        const docFilter = document.getElementById('apptDoctorFilter');
        if (docFilter) {
            const unique = [...new Set(allAppointmentsCache.map(a => a.doctorName).filter(Boolean))];
            const current = docFilter.value;
            docFilter.innerHTML = `<option value="">${t('appt_all_doctors')}</option>` + unique.map(n => `<option value="${n}">${n}</option>`).join('');
            if (current) docFilter.value = current;
        }
        renderAppointmentsList();
    } catch(e) {
        tb.innerHTML = `<tr><td colspan="7" class="text-center text-danger">Error: ${e.message}</td></tr>`;
    }
}

function renderAppointmentsList() {
    const tb = document.getElementById('appointmentsTableBody');
    if (!tb) return;
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const statusFilter = document.getElementById('apptStatusFilter')?.value || '';
    const doctorFilter = document.getElementById('apptDoctorFilter')?.value || '';
    let filtered = allAppointmentsCache.filter(a => {
        const sMatch = !statusFilter || (a.status || '').toLowerCase() === statusFilter.toLowerCase();
        const dMatch = !doctorFilter || (a.doctorName || '') === doctorFilter;
        return sMatch && dMatch;
    });
    const pg = getPaginatedItems(filtered, apptPage);
    const info = document.getElementById('appointments-pagination-info');
    if (info) info.textContent = pg.total > 0 ? `${t('showing')} ${pg.start} ${t('to')} ${pg.end} ${t('of')} ${pg.total}` : '';
    const countLabel = document.getElementById('appointments-count-label');
    if (countLabel) countLabel.textContent = `${pg.total} ${t('appointments_title')}`;
    if (pg.items.length === 0) {
        tb.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted"><i class="bi bi-calendar-check" style="font-size:1.5rem;"></i><br>${t('no_appointments')}</td></tr>`;
        renderPagination('appointments-pagination', pg.page, pg.totalPages, (np) => { apptPage = np; renderAppointmentsList(); });
        return;
    }
    const badgeMap = { 'Scheduled': 'bg-primary-subtle text-primary', 'Confirmed': 'bg-success-subtle text-success', 'Completed': 'bg-info-subtle text-info', 'Cancelled': 'bg-danger-subtle text-danger' };
    const today = new Date(); today.setHours(0,0,0,0);
    let html = '';
    pg.items.forEach(a => {
        const dateStr = a.appointmentDate ? new Date(a.appointmentDate).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday:'short', year:'numeric', month:'short', day:'numeric' }) : '—';
        const apptDate = a.appointmentDate ? new Date(a.appointmentDate) : null;
        if (apptDate) apptDate.setHours(0,0,0,0);
        const isPast = apptDate && apptDate < today;
        const displayStatus = (isPast && (a.status === 'Scheduled' || a.status === 'Confirmed')) ? 'Completed' : a.status;
        const badgeClass = badgeMap[displayStatus] || 'bg-secondary-subtle text-secondary';
        let actions = '';
        if (displayStatus === 'Scheduled')
            actions = `<button class="btn btn-sm btn-outline-success me-1" onclick="updateApptStatus(${a.id},'Confirmed')" title="${t('action_confirm')}"><i class="bi bi-check-lg"></i></button>
                       <button class="btn btn-sm btn-outline-danger" onclick="updateApptStatus(${a.id},'Cancelled')" title="${t('action_cancel')}"><i class="bi bi-x-lg"></i></button>`;
        else if (displayStatus === 'Confirmed')
            actions = `<button class="btn btn-sm btn-outline-secondary me-1" onclick="updateApptStatus(${a.id},'Completed')" title="${t('action_complete')}"><i class="bi bi-check-circle"></i></button>
                       <button class="btn btn-sm btn-outline-danger" onclick="updateApptStatus(${a.id},'Cancelled')" title="${t('action_cancel')}"><i class="bi bi-x-lg"></i></button>`;
        else
            actions = `<span class="text-muted small">—</span>`;
        html += `<tr>
            <td><div class="fw-semibold">${a.patientName}</div></td>
            <td><div class="fw-semibold">${translateDoctorName(a.doctorName, lang)}</div></td>
            <td class="text-secondary">${window.translateSpecialty ? window.translateSpecialty(a.doctorSpecialty) : (a.doctorSpecialty || '—')}</td>
            <td class="text-secondary">${dateStr}</td>
            <td class="text-secondary">${a.timeSlot || '—'}</td>
            <td><span class="badge ${badgeClass} px-2 py-1 rounded-pill fw-bold">${t('row_' + (displayStatus || 'scheduled').toLowerCase())}</span></td>
            <td><div class="d-flex gap-1">${actions}</div></td>
        </tr>`;
    });
    tb.innerHTML = html;
    renderPagination('appointments-pagination', pg.page, pg.totalPages, (np) => { apptPage = np; renderAppointmentsList(); });
}

async function updateApptStatus(id, status) {
    try {
        await Api.admin.updateAppointmentStatus(id, status);
        showAlert(t('appt_updated'), 'success');
        populateAppointmentsTable();
        initOverviewStats();
    } catch(e) { showAlert(t('appt_update_error') + ': ' + e.message, 'error'); }
}
window.updateApptStatus = updateApptStatus;

function resetApptFilters() {
    document.getElementById('apptStatusFilter').value = '';
    document.getElementById('apptDoctorFilter').value = '';
    apptPage = 1;
    renderAppointmentsList();
}
window.resetApptFilters = resetApptFilters;

// ─── Doctor Registration ───
async function handleRegisterDoctor(e) {
    e.preventDefault();
    const payload = {
        fullName: document.getElementById('docFormName').value,
        email: document.getElementById('docFormEmail').value,
        password: document.getElementById('docFormPassword').value,
        specialty: document.getElementById('docFormSpecialty').value,
        experienceYears: parseInt(document.getElementById('docFormExp').value),
        bio: document.getElementById('docFormBio').value,
        clinicAddress: document.getElementById('docFormAddress').value
    };
    try {
        const res = await Api.admin.registerDoctor(payload);
        showAlert(res.message || 'Doctor registered!', 'success');
        bootstrap.Modal.getInstance(document.getElementById('addDoctorModal'))?.hide();
        document.getElementById('addDoctorForm').reset();
        populateDoctorsTable();
        initOverviewStats();
    } catch(e) { showAlert(e.message || 'Failed', 'error'); }
}
window.handleRegisterDoctor = handleRegisterDoctor;

// ─── Specialty Dropdown (populate from API) ───
async function populateSpecialtiesDropdown() {
    const selects = ['docFormSpecialty', 'doctorSpecialtyFilter'];
    const lang = localStorage.getItem('mediai_lang') || 'en';
    let specs;
    try {
        specs = await Api.admin.getSpecialties();
    } catch(e) {
        specs = [
            { name: 'Pneumonia' },
            { name: 'Orthopedics' },
            { name: 'Neurology' }
        ];
    }
    selects.forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        const isFilter = id === 'doctorSpecialtyFilter';
        sel.innerHTML = isFilter
            ? '<option value="" data-lang="spec_all">' + t('spec_all') + '</option>'
            : '<option value="" disabled selected>' + t('ph_select_spec') + '</option>';
        specs.forEach(s => {
            const opt = document.createElement('option');
            opt.value = s.name;
            // Use the global translate helper, but fallback to nameAr if no translation exists
            const translated = window.translateSpecialty ? window.translateSpecialty(s.name) : s.name;
            opt.textContent = (translated !== s.name) ? translated : (lang === 'ar' && s.nameAr ? s.nameAr : s.name);
            sel.appendChild(opt);
        });
    });
}

// ─── Add Specialty ───
async function handleAddSpecialty(e) {
    e.preventDefault();
    const payload = {
        name: document.getElementById('specFormName').value.trim(),
        nameAr: document.getElementById('specFormNameAr').value.trim()
    };
    try {
        const res = await Api.admin.addSpecialty(payload);
        showAlert(res.message || 'Specialty added!', 'success');
        bootstrap.Modal.getInstance(document.getElementById('addSpecialtyModal'))?.hide();
        document.getElementById('addSpecialtyForm').reset();
        populateSpecialtiesDropdown();
    } catch(e) { showAlert(e.message || 'Failed', 'error'); }
}
window.handleAddSpecialty = handleAddSpecialty;

// ─── Add Patient ───
async function handleAddPatient(e) {
    e.preventDefault();
    const payload = {
        fullName: document.getElementById('patFormName').value.trim(),
        email: document.getElementById('patFormEmail').value.trim(),
        password: document.getElementById('patFormPassword').value,
        age: parseInt(document.getElementById('patFormAge').value),
        gender: document.getElementById('patFormGender').value,
        phone: document.getElementById('patFormPhone').value.trim(),
        medicalHistory: document.getElementById('patFormHistory').value.trim()
    };
    try {
        const res = await Api.admin.registerPatient(payload);
        showAlert(res.message || 'Patient registered!', 'success');
        bootstrap.Modal.getInstance(document.getElementById('addPatientModal'))?.hide();
        document.getElementById('addPatientForm').reset();
    } catch(e) { showAlert(e.message || 'Failed', 'error'); }
}
window.handleAddPatient = handleAddPatient;

// ─── Patient Details ───
async function showPatientDetails(id) {
    try {
        const p = await Api.admin.getPatientDetails(id);
        document.getElementById('p-detail-name').innerText = p.fullName || 'Unknown';
        const lang = localStorage.getItem('mediai_lang') || 'en';
        const genderLabel = p.gender ? (lang === 'ar' ? (p.gender === 'Male' ? 'ذكر' : 'أنثى') : p.gender) : '';
        document.getElementById('p-detail-gender-age').innerText = `${genderLabel}, ${p.age || 0} Yrs`;
        document.getElementById('p-detail-email').innerText = p.email || 'N/A';
        document.getElementById('p-detail-phone').innerText = p.phoneNumber || 'N/A';
        document.getElementById('p-detail-history').innerText = p.medicalHistory || 'No medical history.';
        new bootstrap.Modal(document.getElementById('patientDetailsModal')).show();
    } catch(e) { showAlert(e.message, 'error'); }
}
window.showPatientDetails = showPatientDetails;

// ─── Quick Report ───
async function showQuickReport() {
    const modal = new bootstrap.Modal(document.getElementById('quickReportModal'));
    modal.show();
    const body = document.getElementById('quickReportBody');
    body.innerHTML = `<div class="text-center py-4"><div class="spinner-border text-primary"></div><p class="mt-2 text-muted">${t('report_loading')}</p></div>`;
    try {
        const [stats, docs, apps] = await Promise.all([
            Api.public.getStats().catch(() => ({})),
            Api.admin.getDoctors().catch(() => []),
            Api.admin.getAppointments().catch(() => ({ items: [] }))
        ]);
        const totalDocs = stats.totalDoctors || docs.length || 0;
        const verifiedDocs = docs.filter(d => d.isApproved !== undefined ? d.isApproved : d.IsApproved).length;
        const apptItems = apps.items || apps || [];
        const confirmedAppts = apptItems.filter(a => a.status === 'Confirmed').length;
        const completedAppts = apptItems.filter(a => a.status === 'Completed').length;
        const cancelledAppts = apptItems.filter(a => a.status === 'Cancelled').length;
        const scheduledAppts = apptItems.filter(a => a.status === 'Scheduled').length;
        const lang = localStorage.getItem('mediai_lang') || 'en';
        body.innerHTML = `
            <div class="row g-3">
                <div class="col-6"><div class="p-3 rounded-3 border text-center bg-light"><div class="fs-4 fw-bold text-primary">${stats.totalPatients || '—'}</div><small class="text-muted">${t('stat_total_patients')}</small></div></div>
                <div class="col-6"><div class="p-3 rounded-3 border text-center bg-light"><div class="fs-4 fw-bold text-primary">${totalDocs}</div><small class="text-muted">${t('stat_total_doctors')}</small></div></div>
                <div class="col-6"><div class="p-3 rounded-3 border text-center bg-light"><div class="fs-4 fw-bold text-primary">${scheduledAppts + confirmedAppts}</div><small class="text-muted">${t('appointments_title')}</small></div></div>
                <div class="col-6"><div class="p-3 rounded-3 border text-center bg-light"><div class="fs-4 fw-bold text-success">${completedAppts}</div><small class="text-muted">${t('row_completed')}</small></div></div>
                <div class="col-6"><div class="p-3 rounded-3 border text-center bg-light"><div class="fs-4 fw-bold" style="color:#1D4ED8">${scheduledAppts}</div><small class="text-muted">${t('row_scheduled')}</small></div></div>
                <div class="col-6"><div class="p-3 rounded-3 border text-center bg-light"><div class="fs-4 fw-bold text-danger">${cancelledAppts}</div><small class="text-muted">${t('row_cancelled')}</small></div></div>
            </div>
            <div class="mt-3 text-muted small text-center">${t('report_title')} — ${new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</div>`;
    } catch(e) {
        body.innerHTML = `<div class="text-center py-4 text-danger">Error: ${e.message}</div>`;
    }
}
window.showQuickReport = showQuickReport;

// ─── CSV Export ───
function exportTableCSV(type) {
    const data = type === 'patients' ? allPatientsCache : allDoctorsCache;
    if (!data || data.length === 0) { showAlert('No data to export', 'warning'); return; }
    let csv = '';
    if (type === 'patients') {
        csv = 'Full Name,Email,Registered Date,Status\n';
        data.forEach(p => { csv += `"${p.fullName}","${p.email}","${formatDate(p.createdAt)}",Active\n`; });
    } else {
        csv = 'Full Name,Email,Specialty,Experience Years,Clinic Address,Approved\n';
        data.forEach(d => {
            const v = d.isApproved !== undefined ? d.isApproved : d.IsApproved;
            csv += `"${d.fullName || d.name}","${d.email}","${d.specialty}",${d.experienceYears || 0},"${d.clinicAddress || ''}",${v ? 'Yes' : 'No'}\n`;
        });
    }
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${type}_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    showAlert(t('exported'), 'success');
}
window.exportTableCSV = exportTableCSV;

// ─── View Switch ───
function switchToView(viewId) {
    const link = document.querySelector(`.sidebar-nav-link[data-view="${viewId}"]`);
    if (link) link.click();
}
window.switchToView = switchToView;

function switchToViewAppointmentsToday() {
    _apptRange = 'today';
    switchToView('view-appointments');
}
window.switchToViewAppointmentsToday = switchToViewAppointmentsToday;

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
    enforceAdmin();
    const lang = localStorage.getItem('mediai_lang') || 'en';
    if (window.setLanguage) setLanguage(lang);
    document.getElementById('langText').textContent = lang === 'ar' ? 'EN' : 'AR';
    document.getElementById('currentDateDisplay').textContent = new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

    initOverviewStats();
    populateTodayActivity();
    populateActivityTable();
    populateSpecialtiesDropdown();
    document.getElementById('addDoctorModal')?.addEventListener('shown.bs.modal', populateSpecialtiesDropdown);
    setTimeout(initCharts, 100);
    document.addEventListener('darkModeChanged', () => { destroyCharts(); setTimeout(initCharts, 50); });
    setInterval(() => { initOverviewStats(); populateTodayActivity(); populateActivityTable(); }, 30000);

    // Search and Filter Events
    document.getElementById('patientSearchInput')?.addEventListener('input', () => { pageState.patients = 1; renderPatientsList(); });
    document.getElementById('doctorSearchInput')?.addEventListener('input', () => { pageState.doctors = 1; renderDoctorsList(); });
    document.getElementById('doctorSpecialtyFilter')?.addEventListener('change', () => { pageState.doctors = 1; renderDoctorsList(); });
    document.getElementById('apptStatusFilter')?.addEventListener('change', () => { apptPage = 1; renderAppointmentsList(); });
    document.getElementById('apptDoctorFilter')?.addEventListener('change', () => { apptPage = 1; renderAppointmentsList(); });

    // Mobile toggle
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => sidebar.classList.toggle('show'));
    }

    // SPA routing
    document.querySelectorAll('.sidebar-nav-link[data-view]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar-nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('data-view');
            document.querySelectorAll('.admin-view').forEach(v => {
                v.classList.toggle('d-none', v.id !== targetId);
                v.classList.toggle('active', v.id === targetId);
            });
            if (targetId === 'view-doctors') populateDoctorsTable();
            if (targetId === 'view-patients') populatePatientsTable();
            if (targetId === 'view-appointments') populateAppointmentsTable();
            if (window.innerWidth < 992 && sidebar) sidebar.classList.remove('show');
        });
    });
});
})();