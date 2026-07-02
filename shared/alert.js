/**
 * ═══════════════════════════════════════
 *  PROFESSIONAL TOAST SYSTEM — Logic
 * ═══════════════════════════════════════
 */

const Toast = {
    container: null,

    init() {
        if (this.container && document.getElementById('toast-container')) return;
        
        this.container = document.getElementById('toast-container');
        if (this.container) return;

        this.container = document.createElement('div');
        this.container.id = 'toast-container';
        this.container.className = 'toast-container position-fixed top-0 end-0 p-3';
        
        if (document.body) {
            document.body.appendChild(this.container);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(this.container);
            });
        }
    },

    /**
     * Show a toast message
     * @param {Object} options - { title, message, type, duration }
     */
    show(options) {
        this.init();

        const {
            title = '',
            message = '',
            type = 'info', // success, error, warning, info
            duration = 4000
        } = options;

        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        
        // Icons based on type (Bootstrap Icons)
        const icons = {
            success: 'bi-check-circle-fill',
            error: 'bi-x-circle-fill',
            warning: 'bi-exclamation-triangle-fill',
            info: 'bi-info-circle-fill'
        };

        const iconClass = icons[type] || icons.info;

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="bi ${iconClass}"></i>
            </div>
            <div class="toast-content">
                ${title ? `<strong class="toast-title">${title}</strong>` : ''}
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <i class="bi bi-x"></i>
            </button>
            <div class="toast-progress">
                <div class="toast-progress-inner"></div>
            </div>
        `;

        this.container.appendChild(toast);

        // Progress bar animation
        const progressInner = toast.querySelector('.toast-progress-inner');
        if (duration > 0) {
            progressInner.style.transition = `width ${duration}ms linear`;
            setTimeout(() => {
                progressInner.style.width = '100%';
            }, 10);
        }

        // Close button
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.hide(toast);
        });

        // Auto hide
        if (duration > 0) {
            setTimeout(() => {
                this.hide(toast);
            }, duration);
        }

        return toast;
    },

    hide(toast) {
        if (!toast || toast.classList.contains('hiding')) return;
        
        toast.classList.add('hiding');
        
        let removed = false;
        const removeFn = () => {
            if (removed) return;
            removed = true;
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        };

        // Listen for animation end
        toast.addEventListener('animationend', removeFn, { once: true });
        
        // Fail-safe: remove after 500ms even if animation fails
        setTimeout(removeFn, 500);
    }
};

/**
 * Global helper function to replace window.alert
 * @param {string} message 
 * @param {string} type 
 */
function showAlert(message, type = 'info') {
    const lang = localStorage.getItem('mediai_lang') || 'en';
    const titles = {
        en: {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Notice'
        },
        ar: {
            success: 'نجاح',
            error: 'خطأ',
            warning: 'تنبيه',
            info: 'ملحوظة'
        }
    };

    Toast.show({
        title: titles[lang][type],
        message: message,
        type: type
    });
}

// Optionally override window.alert (be careful with this)
// window.alert = (msg) => showAlert(msg, 'info');
