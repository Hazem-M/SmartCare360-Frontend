// ═══════════════════════════════════════
//  PROFILE PAGE — Logic & Management
// ═══════════════════════════════════════

// Extend global translations
translations.en = Object.assign(translations.en, {
    "profile_subtitle": "Manage your account settings and personal information",
    "profile_section_personal": "Personal Information",
    "profile_section_security": "Account Security",
    "password_title": "Password",
    "password_desc": "Secure your account with a strong password",
    "account_management": "Account Management",
    "quick_stats": "Quick Stats",
    "profile_completeness": "Profile Accuracy",
    "back_to_dash": "Back to Dashboard",
    "edit_profile_title": "Update Your Account",
    "full_name_label": "Full Name",
    "role_label": "Account Type",
    "created_at_label": "Member Since",
    "email_no_edit": "Email cannot be changed.",
    "save_changes": "Save Changes",
    "delete_account": "Delete Account",
    "profile_updated": "Profile updated successfully!",
    "profile_error": "Could not update profile.",
    // Dashboard additions
    "dash_stat_appt": "Upcoming Appointments",
    "dash_stat_diag": "AI Scans Performed",
    "dash_stat_health": "Current Health Status",
    "status_ready": "Ready",
    "status_stable": "Stable",
    "dash_upcoming": "Upcoming Appointments",
    "btn_book_new": "+ New",
    "dash_no_appts": "No upcoming appointments scheduled.",
    "dash_diagnoses": "Recent AI Analyses",
    "dash_btn_new_diag": "Scan Now",
    "lbl_result": "Result",
    "dash_notifications": "Notifications",
    "quick_actions": "Quick Actions",
    "join_chat": "Join Chat",
    "cancel_appt": "Cancel",
    "dash_notif1_title": "Welcome to Smart Care 360!",
    "dash_notif1_desc": "Your account is now verified and ready.",
    "lbl_upcoming": "Upcoming",
    "reminder_title": "📋 You have an appointment today!",
    "reminder_doctor": "Doctor",
    "reminder_patient": "Patient",
    "reminder_time": "Time",
    "reminder_queue": "Your queue number",
    "reminder_arrive": "Please arrive on time to avoid delays",
    "reminder_done": "✅ Completed",
    "reminder_completed": "Completed"
});

translations.ar = Object.assign(translations.ar, {
    "profile_subtitle": "إدارة إعدادات حسابك ومعلوماتك الشخصية",
    "profile_section_personal": "المعلومات الشخصية",
    "profile_section_security": "أمان الحساب",
    "password_title": "كلمة المرور",
    "password_desc": "قم بتأمين حسابك بكلمة مرور قوية",
    "account_management": "إدارة الحساب",
    "quick_stats": "إحصائيات سريعة",
    "profile_completeness": "دقة الملف الشخصي",
    "back_to_dash": "العودة إلى لوحة التحكم",
    "edit_profile_title": "تحديث حسابك",
    "full_name_label": "الاسم الكامل",
    "role_label": "نوع الحساب",
    "created_at_label": "عضو منذ",
    "email_no_edit": "لا يمكن تغيير البريد الإلكتروني.",
    "save_changes": "حفظ التغييرات",
    "delete_account": "حذف الحساب",
    "profile_updated": "تم تحديث الملف الشخصي بنجاح!",
    "profile_error": "تعذر تحديث الملف الشخصي.",
    // Dashboard additions
    "dash_stat_appt": "المواعيد القادمة",
    "dash_stat_diag": "عمليات فحص الذكاء الاصطناعي",
    "dash_stat_health": "الحالة الصحية الحالية",
    "status_ready": "جاهز",
    "status_stable": "مستقر",
    "dash_upcoming": "المواعيد القادمة",
    "btn_book_new": "+ جديد",
    "dash_no_appts": "لا توجد مواعيد قادمة مجدولة.",
    "dash_diagnoses": "تحليلات الذكاء الاصطناعي الأخيرة",
    "dash_btn_new_diag": "افحص الآن",
    "lbl_result": "النتيجة",
    "dash_notifications": "التنبيهات",
    "quick_actions": "إجراءات سريعة",
    "join_chat": "انضم للمحادثة",
    "cancel_appt": "إلغاء",
    "dash_notif1_title": "مرحباً بك في سمارت كير 360!",
    "dash_notif1_desc": "حسابك الآن موثق وجاهز.",
    "lbl_upcoming": "قادم",
    "reminder_title": "📋 عندك موعد النهارده!",
    "reminder_doctor": "الدكتور",
    "reminder_patient": "المريض",
    "reminder_time": "الوقت",
    "reminder_queue": "رقم دورك",
    "reminder_arrive": "من فضلك تعال في الموعد منعاً للتكدس",
    "reminder_done": "✅ مكتمل",
    "reminder_completed": "مكتمل"
});

// ═══════════════════════
//  Interactive Logic
// ═══════════════════════

function updateClock() {
    const timeEl = document.getElementById('currentTime');
    const dateEl = document.getElementById('currentDate');
    if (!timeEl || !dateEl) return;
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    dateEl.textContent = now.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
}

// Intersection Observer for reveal animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

function initReveals() {
    document.querySelectorAll('.reveal-up, .reveal-right, .reveal-left').forEach(el => {
        revealObserver.observe(el);
    });
}

function loadUserData() {
    const email = localStorage.getItem('mediai_user_email');
    const name = localStorage.getItem('mediai_user_name') || 'User';
    const role = localStorage.getItem('mediai_auth_role') || 'patient';
    const lang = localStorage.getItem('mediai_lang') || 'en';
    
    if (!email || !localStorage.getItem('mediai_token')) {
        window.location.href = '../login/login.html';
        return;
    }

    if (role === 'admin') {
        window.location.href = '../admin-dashboard/admin-dashboard.html';
        return;
    }

    // Populate UI
    const displayName = translateDoctorName(name, lang);
    document.getElementById('profileNameDisplay').textContent = displayName;
    document.getElementById('infoName').textContent = displayName;
    document.getElementById('infoEmail').textContent = email;
    document.getElementById('infoRole').textContent = role.charAt(0).toUpperCase() + role.slice(1);
    
    // Avatar Initial
    document.getElementById('profileAvatar').textContent = displayName.charAt(0).toUpperCase();

    // Prepare Modal
    document.getElementById('editName').value = name;
    document.getElementById('editEmail').value = email;

    // Doctor Specific Profile Customizations
    if (role === 'doctor') {
        const userId = localStorage.getItem('mediai_user_id');
        Api.doctors.getById(userId).then(doctor => {
            if (doctor) {
                const docName = translateDoctorName(doctor.fullName || doctor.FullName || name, lang);
                document.getElementById('profileNameDisplay').textContent = docName;
                document.getElementById('infoName').textContent = docName;
                document.getElementById('profileAvatar').textContent = docName.charAt(0).toUpperCase();
                
                const specialty = doctor.specialty || doctor.Specialty || '';
                const bio = doctor.bio || doctor.Bio || '';
                const exp = doctor.experienceYears || doctor.ExperienceYears || 0;
                const rating = doctor.rating || doctor.Rating || 5.0;

                const subtitleEl = document.querySelector('[data-lang="profile_subtitle"]');
                if (subtitleEl) {
                    subtitleEl.textContent = specialty ? (lang === 'ar' ? `استشاري ${specialty}` : `${specialty} Specialist`) : (lang === 'ar' ? 'طبيب معتمد' : 'Verified Doctor');
                }

                // Update Stat card 3: Average Rating
                const healthLabelEl = document.querySelector('[data-lang="dash_stat_health"]');
                if (healthLabelEl) {
                    healthLabelEl.textContent = lang === 'ar' ? 'التقييم العام' : 'Average Rating';
                }
                const healthValEl = healthLabelEl?.previousElementSibling;
                if (healthValEl) {
                    healthValEl.innerHTML = `${rating} <i class="bi bi-star-fill text-warning ms-1" style="font-size: 1.15rem; vertical-align: middle;"></i>`;
                }
                const healthBadge = healthValEl?.previousElementSibling?.querySelector('.badge');
                if (healthBadge) {
                    healthBadge.className = 'badge bg-soft-warning text-warning';
                    healthBadge.textContent = `${exp} ` + (lang === 'ar' ? 'سنة خبرة' : 'Yrs Exp');
                }

                // Replace the patient-only "Recent AI Analyses" card with "Professional Biography"
                const recentScansHeader = document.querySelector('[data-lang="dash_diagnoses"]');
                if (recentScansHeader) {
                    recentScansHeader.textContent = lang === 'ar' ? 'السيرة الذاتية المهنية' : 'Professional Biography';
                    const scanLink = recentScansHeader.nextElementSibling || recentScansHeader.parentElement.querySelector('a');
                    if (scanLink) scanLink.style.display = 'none';
                }

                const diagContainer = document.getElementById('diagnosesTable')?.closest('.glass-card');
                if (diagContainer) {
                    diagContainer.innerHTML = `
                        <div class="p-4">
                            <h6 class="fw-bold mb-3 text-primary"><i class="bi bi-info-circle me-2"></i>${lang === 'ar' ? 'نبذة عن الطبيب' : 'About the Doctor'}</h6>
                            <p class="mb-4 text-secondary leading-relaxed" style="font-size: 0.95rem;">${bio || (lang === 'ar' ? 'لا توجد سيرة ذاتية متوفرة حالياً.' : 'No biography available at this time.')}</p>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="p-3 rounded-3 border bg-light">
                                        <span class="d-block small text-muted text-uppercase fw-bold mb-1">${lang === 'ar' ? 'التخصص الطبي' : 'Medical Specialty'}</span>
                                        <span class="fw-bold text-dark">${specialty || 'General'}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="p-3 rounded-3 border bg-light">
                                        <span class="d-block small text-muted text-uppercase fw-bold mb-1">${lang === 'ar' ? 'سنوات الممارسة' : 'Years of Practice'}</span>
                                        <span class="fw-bold text-dark">${exp} ${lang === 'ar' ? 'سنة' : 'Years'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }
        }).catch(err => console.warn('Doctor details error:', err));
    }
}

// ─── Merged Dashboard Loading ───────────────────────────

async function loadDashboardData() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const role = localStorage.getItem('mediai_auth_role');

    // 1. Stats
    try {
        const stats = role === 'doctor' ? await Api.doctors.getDashboard() : await Api.patient.getDashboard();
        
        if (document.getElementById('stat-appointments')) {
            document.getElementById('stat-appointments').textContent = role === 'doctor' ? (stats.todayAppointmentsCount ?? 0) : (stats.upcomingAppointments ?? 0);
        }
        if (document.getElementById('stat-diagnoses')) {
            // Under doctor role, this displays pending reviews count
            document.getElementById('stat-diagnoses').textContent = role === 'doctor' ? (stats.newReportsCount ?? 0) : (stats.totalScans ?? 0);
            
            const scansLabelEl = document.querySelector('[data-lang="dash_stat_diag"]');
            if (scansLabelEl && role === 'doctor') {
                scansLabelEl.textContent = lang === 'ar' ? 'تقارير معلقة للمراجعة' : 'Pending Reports for Review';
            }
        }
        
        if (role !== 'doctor') {
            const healthEl = document.querySelector('[data-lang="dash_stat_health"]')?.previousElementSibling;
            const healthBadge = healthEl?.previousElementSibling?.querySelector('.badge');
            if (healthEl) healthEl.textContent = stats.healthStatus || 'Stable';
            if (healthBadge) {
                healthBadge.className = `badge bg-soft-${stats.healthColor || 'success'} text-${stats.healthColor || 'success'}`;
                healthBadge.textContent = stats.healthStatus === 'Healthy' ? 'Great' : (stats.healthStatus || 'Stable');
            }
        }
    } catch (e) { console.warn('Stats error:', e); }

    // 2. Notifications
    const notifContainer = document.querySelector('.notification-list');
    if (notifContainer) {
        try {
            const notifications = await Api.notifications.getMy();
            if (notifications.length > 0) {
                notifContainer.innerHTML = '';
                notifications.forEach(n => {
                    const icon = n.type === 'Warning' ? 'exclamation-triangle' : 'info-circle';
                    const colorClass = n.type === 'Warning' ? 'warning' : 'primary';
                    notifContainer.innerHTML += `
                        <div class="notification-item glass-card p-3 mb-3 border-start border-${colorClass} border-4 shadow-sm">
                            <div class="d-flex gap-3">
                                <div class="notif-icon text-${colorClass}"><i class="bi bi-${icon}"></i></div>
                                <div>
                                    <p class="mb-1 small fw-bold">${n.title}</p>
                                    <p class="text-muted extra-small mb-0">${n.message}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        } catch (e) { console.warn('Notifications error:', e); }
    }

    // 3. Appointments
    const apptGrid = document.getElementById('appointmentsGrid');
    const noAppts = document.getElementById('noAppts');
    if (apptGrid) {
        try {
            const data = await Api.appointments.getMy();
            let appointments = Array.isArray(data) ? data : (data.appointments || []);
            
            // For doctor, let's keep all active today/upcoming appointments
            appointments = appointments.filter(app => app.status === 'Scheduled' || app.status === 'Upcoming' || app.status === 'Confirmed');

            if (appointments.length > 0) {
                noAppts.classList.add('d-none');
                apptGrid.innerHTML = '';
                appointments.forEach(app => {
                    const apptId = app.id || app._id;
                    const otherName = role === 'doctor' ? (app.patientName || 'Patient') : (app.doctorName || 'Doctor');
                    const initials = otherName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
                    const dateStr = app.appointmentDate ? app.appointmentDate.split('T')[0] : '';
                    const timeStr = app.timeSlot || app.time || '';
                    
                    apptGrid.innerHTML += `
                        <div class="col-md-6 reveal-up" id="appt-${apptId}">
                            <div class="glass-card p-3 h-100 shadow-sm border">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width:32px; height:32px; font-size:0.7rem;">${initials}</div>
                                        <div>
                                            <p class="fw-bold mb-0 extra-small">${otherName}</p>
                                            <p class="text-muted" style="font-size:0.6rem;">${role === 'doctor' ? (app.reason || 'General Consultation') : (app.specialty || '')}</p>
                                        </div>
                                    </div>
                                    <span class="badge bg-soft-primary text-primary extra-small px-2">${app.status || translations[lang].lbl_upcoming}</span>
                                </div>
                                <div class="mb-2 extra-small text-muted">
                                    <i class="bi bi-calendar me-1"></i> ${dateStr} | <i class="bi bi-clock ms-1 me-1"></i> ${timeStr}
                                </div>
                                <div class="d-flex gap-2 mt-2">
                                    <a href="../chat/chat.html?${role === 'doctor' ? 'patient' : 'doc'}=${role === 'doctor' ? (app.patientId || '') : (app.doctorId || '')}" class="btn btn-primary btn-sm flex-grow-1 extra-small py-1">${translations[lang].join_chat}</a>
                                    <button onclick="cancelAppointment('${apptId}', this)" class="btn btn-outline-danger btn-sm extra-small py-1"><i class="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    `;
                });
            } else {
                noAppts.classList.remove('d-none');
                apptGrid.innerHTML = '';
            }
        } catch (e) { console.warn('Appts error:', e); }
    }

    // 4. Diagnoses (Patient Only)
    const diagTable = document.getElementById('diagnosesTable');
    const noDiag = document.getElementById('noDiagnoses');
    if (role !== 'doctor' && diagTable) {
        try {
            const data = await Api.diagnosis.getMy();
            const diagnoses = Array.isArray(data) ? data : (data.diagnoses || []);
            if (diagnoses.length > 0) {
                if (noDiag) noDiag.classList.add('d-none');
                diagTable.innerHTML = '';
                diagnoses.forEach(diag => {
                    const diagId2 = diag.id || diag._id;
                    diagTable.innerHTML += `
                        <tr>
                            <td class="ps-4 extra-small">${diag.date || diag.createdAt?.split('T')[0] || ''}</td>
                            <td class="extra-small fw-bold">${window.translateScanType(diag.type || diag.scanType || '')}</td>
                            <td><span class="badge bg-soft-success text-success extra-small">${diag.result || diag.condition || ''}</span></td>
                            <td class="text-end pe-4">
                                <a href="../diagnosis/diagnosis.html?id=${diagId2}" class="btn btn-link py-0 text-primary" title="View"><i class="bi bi-eye"></i></a>
                                <button class="btn btn-link py-0 text-danger ms-1" title="Delete" onclick="deleteDiagnosis('${diagId2}', this)"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    `;
                });
            } else if (noDiag) {
                noDiag.classList.remove('d-none');
            }
        } catch (e) { console.warn('Diagnoses error:', e); }
    }

    initReveals();
}

async function cancelAppointment(id, btn) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    if (!confirm(lang === 'ar' ? 'هل أنت متأكد من إلغاء الموعد؟' : 'Are you sure you want to cancel?')) return;
    btn.disabled = true;
    try {
        await Api.appointments.cancel(id);
        document.getElementById(`appt-${id}`)?.remove();
        showAlert(lang === 'ar' ? 'تم الإلغاء.' : 'Cancelled.', 'success');
    } catch (e) {
        btn.disabled = false;
        showAlert(e.message, 'error');
    }
}

// ═══════════════════════
//  Form Handling
// ═══════════════════════

document.getElementById('editProfileBtn')?.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
    modal.show();
});

document.getElementById('editProfileForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const saveBtn = document.getElementById('saveProfileBtn');
    const btnText = saveBtn.querySelector('.btn-text');
    const spinner = saveBtn.querySelector('.spinner-border');
    
    const newName = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const lang = localStorage.getItem('mediai_lang') || 'en';

    saveBtn.disabled = true;
    btnText?.classList.add('d-none');
    spinner?.classList.remove('d-none');

    try {
        // Call Real API
        await Api.auth.updateProfile({ fullName: newName });
        
        // Update Local Session
        localStorage.setItem('mediai_user_name', newName);
        
        loadUserData();
        const modalEl = document.getElementById('editProfileModal');
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
        
        showAlert(translations[lang].profile_updated, 'success');
    } catch (err) {
        console.error('Update error:', err);
        showAlert(translations[lang].profile_error, 'error');
    } finally {
        saveBtn.disabled = false;
        btnText?.classList.remove('d-none');
        spinner?.classList.add('d-none');
    }
});

// ═══════════════════════════════════════
//  Smart Appointment Reminder
// ═══════════════════════════════════════
async function showTodayReminder() {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const role = localStorage.getItem('mediai_auth_role');
    const t = translations[lang];
    try {
        const todayAppts = await Api.appointments.getToday();
        if (!todayAppts || todayAppts.length === 0) return;

        // Remove any existing reminder
        document.getElementById('todayReminderBanner')?.remove();

        const banner = document.createElement('div');
        banner.id = 'todayReminderBanner';
        banner.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff; padding: 0; box-shadow: 0 4px 24px rgba(102,126,234,0.35);
            animation: slideDownReminder 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            font-family: 'Segoe UI', sans-serif;
        `;

        let cardsHtml = '';
        todayAppts.forEach(appt => {
            const otherName = role === 'doctor' ? (appt.patientName || 'Patient') : (appt.doctorName || 'Doctor');
            const labelKey = role === 'doctor' ? 'reminder_patient' : 'reminder_doctor';
            const timeStr = appt.timeSlot || appt.time || '';
            // Build a DateTime for comparison (assume appointmentDate is ISO string)
            const apptDateTime = new Date(`${appt.appointmentDate}T${timeStr}`);
            const now = new Date();
            const isPast = now > apptDateTime;
            const queueNum = appt.queueNumber ?? '—';
            const statusBadge = isPast ? `<span style="background:rgba(0,200,0,0.25);padding:4px 14px;border-radius:20px;font-weight:800;font-size:1.1rem;">${t.reminder_done}</span>` : `<span style="background:rgba(255,255,255,0.25);padding:4px 14px;border-radius:20px;font-weight:800;font-size:1.1rem;">#${queueNum}</span>`;
            cardsHtml += `
                <div style="background:rgba(255,255,255,0.15); backdrop-filter:blur(8px); border-radius:12px; padding:14px 18px; min-width:220px; flex:1;${isPast ? 'opacity:0.6;' : ''}">
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                        <div style="width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;">${otherName.charAt(0).toUpperCase()}</div>
                        <div>
                            <div style="font-weight:700;font-size:0.95rem;">${otherName}</div>
                            <div style="font-size:0.75rem;opacity:0.85;">${t[labelKey]}</div>
                        </div>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
                        <span style="font-size:0.8rem;"><i class="bi bi-clock" style="margin-right:4px;"></i>${t.reminder_time}: <strong>${timeStr}</strong></span>
                        ${statusBadge}
                    </div>
                </div>
            `;
        });

        banner.innerHTML = `
            <div style="max-width:900px;margin:0 auto;padding:16px 24px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                    <div style="font-size:1.1rem;font-weight:700;">${t.reminder_title}</div>
                    <button id="closeReminderBtn" style="background:rgba(255,255,255,0.2);border:none;color:#fff;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.35)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">&times;</button>
                </div>
                <div style="display:flex;gap:12px;flex-wrap:wrap;">${cardsHtml}</div>
                <div style="text-align:center;margin-top:10px;font-size:0.78rem;opacity:0.8;"><i class="bi bi-info-circle" style="margin-right:4px;"></i>${t.reminder_arrive}</div>
            </div>
        `;

        // Add animation keyframes
        if (!document.getElementById('reminderAnimStyle')) {
            const style = document.createElement('style');
            style.id = 'reminderAnimStyle';
            style.textContent = `
                @keyframes slideDownReminder {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideUpReminder {
                    from { transform: translateY(0); opacity: 1; }
                    to { transform: translateY(-100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.prepend(banner);

        // Close button
        document.getElementById('closeReminderBtn').addEventListener('click', () => {
            banner.style.animation = 'slideUpReminder 0.4s ease forwards';
            setTimeout(() => banner.remove(), 400);
        });

        // Auto-hide after 30 seconds
        setTimeout(() => {
            if (document.getElementById('todayReminderBanner')) {
                banner.style.animation = 'slideUpReminder 0.4s ease forwards';
                setTimeout(() => banner.remove(), 400);
            }
        }, 30000);

    } catch (e) {
        console.warn('Today reminder error:', e);
    }
}

// Auth Guard & Init
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    initReveals();
    loadUserData();
    loadDashboardData();
    showTodayReminder();
});

window.deleteDiagnosis = async function(scanId, btn) {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const confirmMsg = lang === 'ar' ? 'هل أنت متأكد من حذف هذا التقرير؟' : 'Are you sure you want to delete this report?';
    if (!confirm(confirmMsg)) return;
    try {
        await Api.diagnosis.delete(scanId);
        const row = btn.closest('tr');
        if (row) row.remove();
        showAlert(lang === 'ar' ? 'تم حذف التقرير بنجاح' : 'Report deleted successfully', 'success');
    } catch (e) {
        showAlert(e.message || (lang === 'ar' ? 'فشل حذف التقرير' : 'Failed to delete report'), 'error');
    }
};

