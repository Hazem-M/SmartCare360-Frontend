/**
 * MediAI Dark Mode Manager
 * Load this script ONCE per page in <head>.
 * Applies saved preference immediately (no flash).
 */
(function () {
    const isDark = localStorage.getItem('mediAI_darkMode') === 'true';
    
    function init() {
        if (isDark) {
            document.body.classList.add('dark-mode');
        }
        _setDarkModeIcon(isDark);
        updateLogoSources(isDark);
    }

    if (isDark) {
        document.documentElement.classList.add('dark-mode-early');
        // Apply immediately to avoid flash of light components
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

function updateLogoSources(isDark) {
    const logoFilename = isDark ? 'logo-dark.png' : 'logo-light.png';
    document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && (src.includes('logo.png') || src.includes('logo-light.png') || src.includes('logo-dark.png'))) {
            const lastSlash = src.lastIndexOf('/');
            const baseDir = lastSlash !== -1 ? src.substring(0, lastSlash + 1) : '';
            img.setAttribute('src', baseDir + logoFilename);
        }
    });
}

// Make it global so dynamic components can call it after injection
window.updateLogoSources = updateLogoSources;

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('mediAI_darkMode', isDark);
    _setDarkModeIcon(isDark);
    updateLogoSources(isDark);
    document.dispatchEvent(new CustomEvent('darkModeChanged', { detail: { isDark } }));
}

function _setDarkModeIcon(isDark) {
    // Update all dark mode buttons on the page
    document.querySelectorAll('.dark-mode-btn, #darkModeBtn').forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
            icon.style.fontSize = '0.95rem';
        } else {
            btn.innerHTML = isDark
                ? `<i class="bi bi-sun-fill" style="font-size:0.95rem;"></i>`
                : `<i class="bi bi-moon-fill" style="font-size:0.95rem;"></i>`;
        }
        btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
}
