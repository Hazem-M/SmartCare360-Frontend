/**
 * MediAI Secure Auth Store
 * Mock database using localStorage to persist users
 */
const AuthStore = {
    _STORAGE_KEY: 'mediai_users_db',

    /**
     * Get all users from storage
     */
    getUsers() {
        return JSON.parse(localStorage.getItem(this._STORAGE_KEY) || '[]');
    },

    /**
     * Save a new user
     * @param {Object} userData 
     * @returns {Object} { success: boolean, message: string }
     */
    register(userData) {
        const users = this.getUsers();
        
        // Check if email already exists
        if (users.find(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
            return { success: false, message_en: 'Email already registered', message_ar: 'البريد الإلكتروني مسجل بالفعل' };
        }

        // Add user
        users.push({
            ...userData,
            id: Date.now(),
            createdAt: new Date().toISOString()
        });

        localStorage.setItem(this._STORAGE_KEY, JSON.stringify(users));
        return { success: true };
    },

    /**
     * Validate login credentials
     * @param {string} email 
     * @param {string} password 
     * @param {string} role 
     * @returns {Object} { success: boolean, user: Object, message: string }
     */
    login(email, password, role) {
        const users = this.getUsers();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user) {
            return { success: false, message_en: 'Account not found', message_ar: 'الحساب غير موجود' };
        }

        if (user.password !== password) {
            return { success: false, message_en: 'Incorrect password', message_ar: 'كلمة مرور خاطئة' };
        }

        if (user.role !== role) {
            return { success: false, message_en: 'Role mismatch for this account', message_ar: 'نوع الحساب غير مطابق' };
        }

        return { success: true, user };
    },

    /**
     * Password validation
     * Minimum 8 characters
     */
    validatePassword(password) {
        return password.length >= 8;
    }
};

// Make it globally accessible
window.AuthStore = AuthStore;
