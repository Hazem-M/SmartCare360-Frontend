/**
 * MediAI — Central API Service (REAL BACKEND INTEGRATION)
 * Full raw fetch logic explicitly placed.
 */

const Api = {
    // 🔹 عند الرفع على السيرفر (Deployment):
    baseUrl: 'http://hazemmohamedf-001-site1.etempurl.com/api',
    aiBaseUrl: 'https://smartcare360-ai-production.up.railway.app',

    // Helper for fetch with auth
    async request(endpoint, options = {}) {
        const token = this.getToken();
        const headers = {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...options.headers
        };

        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            ...options,
            headers
        });

        if (!response.ok) {
            if ((response.status === 401 || response.status === 403) && !endpoint.includes('auth/login')) {
                Api.clearSession();
                const loginUrl = window.location.protocol === 'file:' ? '../login/login.html' : '/login/login.html';
                window.location.href = loginUrl;
                throw new Error('Session expired');
            }

            // Handle plain text error responses or JSON error objects
            let errorMsg = `Error ${response.status}`;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const error = await response.json().catch(() => ({}));
                errorMsg = error.message || error.title || errorMsg;
            } else {
                const textError = await response.text().catch(() => "");
                if (textError) errorMsg = textError;
            }
            throw new Error(errorMsg);
        }

        return await response.json();
    },

    // Public Info
    public: {
        async getStats() {
            return await Api.request('public/stats');
        }
    },

    // Session handlers
    getToken() {
        return localStorage.getItem('mediai_token');
    },
    saveSession(token, user) {
        localStorage.setItem('mediai_token', token);
        localStorage.setItem('mediai_auth_role', (user.role || '').toLowerCase());
        localStorage.setItem('mediai_user_name', user.name || user.fullName || '');
        localStorage.setItem('mediai_user_email', user.email || '');
        localStorage.setItem('mediai_user_id', user.id || user._id || '');
        localStorage.setItem('mediai_user_phone', user.phone || user.phoneNumber || '');
    },
    clearSession() {
        ['mediai_token','mediai_auth_role','mediai_user_name','mediai_user_email','mediai_user_id','mediai_user_phone'].forEach(k => localStorage.removeItem(k));
    },

    // ─── Auth ────────────────────────────────────────────────
    auth: {
        async register(payload, idCardFile) {
            const formData = new FormData();
            Object.keys(payload).forEach(k => formData.append(k, payload[k]));
            if (idCardFile) {
                formData.append('IdCard', idCardFile);
            }
            const token = Api.getToken();
            const response = await fetch(`${Api.baseUrl}/auth/register`, {
                method: 'POST',
                headers: { ...(token ? { 'Authorization': `Bearer ${token}` } : {}) },
                body: formData
            });
            if (!response.ok) {
                let errorMsg = `Error ${response.status}`;
                try {
                    const ct = response.headers.get('content-type');
                    if (ct && ct.includes('application/json')) {
                        const err = await response.json();
                        errorMsg = err.message || err.title || errorMsg;
                    } else {
                        errorMsg = (await response.text()) || errorMsg;
                    }
                } catch (_) {}
                throw new Error(errorMsg);
            }
            return await response.json();
        },
        async login(payload) {
            return await Api.request('auth/login', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        },
        async updateProfile(payload) {
            return await Api.request('auth/profile', {
                method: 'PUT',
                body: JSON.stringify(payload)
            });
        },
        async getProfile() {
            return await Api.request('auth/profile');
        }
    },

    // ─── Admin ───────────────────────────────────────────────
    admin: {
        async getPatients() {
            return await Api.request('admin/patients');
        },
        async getPatientDetails(id) {
            return await Api.request(`admin/patients/${id}`);
        },
        async getDoctors() {
            return await Api.request('admin/doctors');
        },
        async getRecentActivity() {
            return await Api.request('admin/activity');
        },
        async getDashboardStats() {
            return await Api.request('admin/dashboardStats');
        },
        async getChartData() {
            return await Api.request('admin/charts');
        },
        async deletePatient(id) {
            return await Api.request(`admin/patients/${id}`, { method: 'DELETE' });
        },
        async approveDoctor(id) {
            return await Api.request(`admin/doctors/${id}/approve`, { method: 'PUT' });
        },
        async rejectDoctor(id, reason) {
            return await Api.request(`admin/doctors/${id}/reject`, {
                method: 'PUT',
                body: JSON.stringify({ reason })
            });
        },
        async deleteDoctor(id) {
            return await Api.request(`admin/doctors/${id}`, { method: 'DELETE' });
        },
        async registerDoctor(payload) {
            return await Api.request('admin/doctors/register', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        },
        // ── Appointments Management ──
        async getAppointments(status, range) {
            let q = '';
            if (status || range) {
                const p = [];
                if (status) p.push('status=' + encodeURIComponent(status));
                if (range) p.push('range=' + encodeURIComponent(range));
                q = '?' + p.join('&');
            }
            return await Api.request('admin/appointments' + q);
        },
        async getTodayAppointments() {
            return await Api.request('admin/appointments/today');
        },
        async updateAppointmentStatus(id, status) {
            return await Api.request('admin/appointments/' + id + '/status', {
                method: 'PUT',
                body: JSON.stringify({ status })
            });
        },
        async getSpecialties() {
            return await Api.request('admin/specialties');
        },
        async addSpecialty(payload) {
            return await Api.request('admin/specialties', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        },
        async registerPatient(payload) {
            return await Api.request('admin/patients/register', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        }
    },

    // ─── Doctors ─────────────────────────────────────────────
    doctors: {
        async getAll(params = '') {
            return await Api.request(`doctors${params ? '?' + params : ''}`);
        },
        async getById(id) {
            return await Api.request(`doctors/${id}`);
        },
        async getAvailability(id, date) {
            let url = `doctors/${id}/availability`;
            if (date) url += `?date=${date}`;
            return await Api.request(url);
        },
        async getDashboard() {
            return await Api.request('doctors/dashboard');
        },
        async getPatientDetails(patientId) {
            return await Api.request(`doctors/patients/${patientId}`);
        },
        async resetDb() {
            return await Api.request('doctors/reset-db');
        },
        async updateAvailability(payload) {
            return await Api.request('doctors/availability', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        },
        async getMyProfile() {
            return await Api.request('doctors/profile');
        },
        async updateProfile(payload) {
            return await Api.request('doctors/profile', {
                method: 'PUT',
                body: JSON.stringify(payload)
            });
        }
    },

    // ─── Appointments ─────────────────────────────────────────
    appointments: {
        async book(payload) {
            return await Api.request('appointments', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        },
        async getMy() {
            return await Api.request('appointments/my');
        },
        async getToday() {
            return await Api.request('appointments/today');
        },
        async cancel(id) {
            return await Api.request(`appointments/${id}/cancel`, {
                method: 'PUT'
            });
        },
        async updateStatus(id, status) {
            return await Api.request(`appointments/${id}/status`, {
                method: 'PUT',
                body: JSON.stringify(status)
            });
        }
    },

    // ─── Patient / Diagnosis ──────────────────────────────────
    patient: {
        async getDashboard() {
            return await Api.request('patient/dashboard');
        }
    },
    diagnosis: {
        async analyze(formData) {
            const token = Api.getToken();
            const response = await fetch(`${Api.baseUrl}/diagnosis/analyze`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    Api.clearSession();
                    const loginUrl = window.location.protocol === 'file:' ? '../login/login.html' : '/login/login.html';
                    window.location.href = loginUrl;
                    throw new Error('Session expired');
                }
                let errorMsg = `Error ${response.status}`;
                try {
                    const ct = response.headers.get("content-type");
                    if (ct && ct.includes("application/json")) {
                        const err = await response.json();
                        errorMsg = err.message || err.title || errorMsg;
                    } else {
                        errorMsg = await response.text() || errorMsg;
                    }
                } catch(_) {}
                throw new Error(errorMsg);
            }

            return await response.json();
        },
        async getMy() {
            return await Api.request('diagnosis/my');
        },
        async getById(id) {
            return await Api.request(`diagnosis/${id}`);
        },
        async delete(id) {
            return await Api.request(`diagnosis/${id}`, { method: 'DELETE' });
        }
    },

    // ─── Chat ─────────────────────────────────────────────────
    chat: {
        async getContacts() {
            return await Api.request('chat/contacts');
        },
        async getHistory(contactId) {
            return await Api.request(`chat/history/${contactId}`);
        },
        async send(payload) {
            return await Api.request('chat/send', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        }
    },
    reviews: {
        async submit(payload) {
            return await Api.request('reviews', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
        },
        async getDoctorReviews(doctorId) {
            return await Api.request(`reviews/doctor/${doctorId}`);
        }
    },
    notifications: {
        async getMy() {
            return await Api.request('notifications');
        },
        async markAsRead(id) {
            return await Api.request(`notifications/${id}/read`, {
                method: 'PUT'
            });
        }
    }
};
window.Api = Api;

