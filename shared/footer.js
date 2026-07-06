// ═══════════════════════════════════════
//  SHARED FOOTER COMPONENT
// ═══════════════════════════════════════

(function() {
    const DICT = {
        en: {
            about: "Smart Care 360 is an advanced healthcare platform leveraging advanced clinical technology to provide instant medical insights and connect patients with top specialists.",
            platform: "Platform",
            resources: "Resources",
            contact: "Contact Us",
            address: "Beni Suef, Egypt",
            phone: "+201228595509",
            copyright: "© 2026 Smart Care 360. All rights reserved.",
            disclaimer: "Notice: Preliminary digital scan analysis only. Always consult a doctor.",
            brand: "Smart Care 360",
            home: "Home",
            diag: "Instant Diagnosis",
            docs: "Doctors",
            appts: "Appointments",
            help: "Help Center",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        ar: {
            about: "سمارت كير 360 هي منصة رعاية صحية متقدمة تعتمد على تقنيات الفحص الفوري لتقديم استشارات طبية دقيقة وتوصيل المرضى بنخبة من أفضل الأطباء المتخصصين.",
            platform: "المنصة",
            resources: "المصادر",
            contact: "تواصل معنا",
            address: "بني سويف، مصر",
            phone: "+201228595509",
            copyright: "© 2026 سمارت كير 360. جميع الحقوق محفوظة.",
            disclaimer: "ملاحظة: هذا فحص رقمي أولي فقط. يُرجى دائماً استشارة طبيب.",
            brand: "سمارت كير 360",
            home: "الرئيسية",
            diag: "التشخيص الفوري",
            docs: "الأطباء",
            appts: "المواعيد",
            help: "مركز المساعدة",
            privacy: "سياسة الخصوصية",
            terms: "شروط الاستخدام"
        }
    };

    function getLang() {
        return localStorage.getItem('mediai_lang') || 'en';
    }

    function buildFooter() {
        const lang = getLang();
        const d = DICT[lang] || DICT.en;

        return `
    <footer class="site-footer mt-auto">
        <div class="container">
            <div class="row g-4 mb-3">
                <div class="col-lg-4 pe-lg-5">
                    <div class="footer-brand mb-3 d-flex align-items-center gap-2">
                        <img src="../assets/img/logo-light.png" alt="Smart Care 360 Logo" style="height: 45px; width: auto; object-fit: contain;">
                        <span class="fs-4 fw-bold">${d.brand}</span>
                    </div>
                    <p class="footer-tagline mb-4">
                        ${d.about}
                    </p>
                    <div class="social-links d-flex gap-2">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-twitter-x"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                
                <div class="col-6 col-lg-2">
                    <h6 class="fw-bold mb-3">${d.platform}</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="../home/home.html">${d.home}</a></li>
                        <li><a href="../diagnosis/diagnosis.html">${d.diag}</a></li>
                        <li><a href="../doctors/doctors.html">${d.docs}</a></li>
                        <li><a href="../booking/booking.html">${d.appts}</a></li>
                    </ul>
                </div>
                
                <div class="col-6 col-lg-2">
                    <h6 class="fw-bold mb-3">${d.resources}</h6>
                    <ul class="list-unstyled footer-links">
                        <li><a href="#">${d.help}</a></li>
                        <li><a href="#">${d.privacy}</a></li>
                        <li><a href="#">${d.terms}</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-4">
                    <h6 class="fw-bold mb-3">${d.contact}</h6>
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="text-primary"><i class="bi bi-geo-alt-fill fs-5"></i></div>
                        <p class="mb-0 text-white-50 small">${d.address}</p>
                    </div>
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="text-primary"><i class="bi bi-envelope-paper-fill fs-5"></i></div>
                        <p class="mb-0 text-white-50 small">mohamedhazem174@gmail.com</p>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <div class="text-primary"><i class="bi bi-telephone-fill fs-5"></i></div>
                        <p class="mb-0 text-white-50 small">${d.phone}</p>
                    </div>
                </div>
            </div>
            
            <hr class="footer-divider opacity-10 my-4">
            
            <div class="row align-items-center footer-bottom pb-4">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <p class="mb-0 small">${d.copyright}</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="mb-0 small"><i class="bi bi-shield-check text-success me-1"></i> ${d.disclaimer}</p>
                </div>
            </div>
        </div>
    </footer>
    `;
    }

    function injectFooter() {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = buildFooter();
        }
        if (window.updateLogoSources) {
            window.updateLogoSources(localStorage.getItem('mediAI_darkMode') === 'true');
        }
    }

    // Listens for the custom event from lang.js
    document.addEventListener('languageChanged', injectFooter);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFooter);
    } else {
        injectFooter();
    }
})();
