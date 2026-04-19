// ==========================================
// Language Dictionary for Dynamic Updates
// ==========================================
const translations = {
    tr: {
        badge: "AI Destekli Arbitraj v2.0 Yayında",
        title: "Global Arbitrajın <br><span class='gradient-text'>Geleceğini Keşfedin</span>",
        subtitle: "Amazon, eBay ve yerel pazaryerleri arasındaki devasa kâr marjlarını yapay zeka ile otomatik yakalayın.",
        ctaHero: "Erken Erişime Katıl <i data-feather='arrow-right'></i>",
        feat1Title: "Anlık Veri Taraması",
        feat1Desc: "Milyonlarca ürünü nanosaniyeler içinde tarayın. Fiyat değişimlerini anında yakalayın.",
        feat2Title: "AI Kâr Analizi",
        feat2Desc: "Kargo, vergi ve komisyon bedellerini hesaplayarak net kâr marjınızı size sunar.",
        feat3Title: "Otomatik İlan Oluşturucu",
        feat3Desc: "Tespit edilen kârlı ürünleri tek tıkla hedef pazar yerinde listeleyin.",
        ctaTitle: "Sınırlı Erken Erişim İçin Bekleme Listesine Katılın",
        ctaSub: "İlk deneyenlerden olmak için hemen yerinizi ayırtın.",
        login: "Giriş Yap"
    },
    en: {
        badge: "AI-Powered Arbitrage v2.0 Live",
        title: "Discover the Future of <br><span class='gradient-text'>Global Arbitrage</span>",
        subtitle: "Automatically capture massive profit margins between Amazon, eBay, and local marketplaces using AI.",
        ctaHero: "Join Early Access <i data-feather='arrow-right'></i>",
        feat1Title: "Real-time Data Scanning",
        feat1Desc: "Scan millions of products in nanoseconds. Catch price changes instantly.",
        feat2Title: "AI Profit Analysis",
        feat2Desc: "Calculates shipping, taxes, and fees to present your exact net profit margin.",
        feat3Title: "Auto Listing Creator",
        feat3Desc: "List profitable products on target marketplaces with a single click.",
        ctaTitle: "Join the Waitlist for Limited Early Access",
        ctaSub: "Reserve your spot now to be among the first to try.",
        login: "Login"
    },
    es: {
        badge: "Arbitraje por IA v2.0 en línea",
        title: "Descubre el Futuro del <br><span class='gradient-text'>Arbitraje Global</span>",
        subtitle: "Captura automáticamente grandes márgenes de beneficio entre Amazon, eBay y mercados locales usando IA.",
        ctaHero: "Únete al Acceso Anticipado <i data-feather='arrow-right'></i>",
        feat1Title: "Escaneo en Tiempo Real",
        feat1Desc: "Escanea millones de productos en nanosegundos.",
        feat2Title: "Análisis de Beneficios IA",
        feat2Desc: "Calcula envíos, impuestos y comisiones para mostrarte el margen neto.",
        feat3Title: "Creador Automático de Listados",
        feat3Desc: "Publica productos rentables con un solo clic.",
        ctaTitle: "Únete a la Lista de Espera",
        ctaSub: "Reserva tu lugar ahora para ser de los primeros.",
        login: "Entrar"
    },
    ar: {
        badge: "المراجحة المدعومة بالذكاء الاصطناعي v2.0",
        title: "اكتشف مستقبل <br><span class='gradient-text'>المراجحة العالمية</span>",
        subtitle: "التقط هوامش الربح الهائلة تلقائيًا بين أسواق أمازون و eBay والأسواق المحلية.",
        ctaHero: "انضم للوصول المبكر <i data-feather='arrow-left'></i>",
        feat1Title: "مسح البيانات في الوقت الفعلي",
        feat1Desc: "مسح ملايين المنتجات في أجزاء من الثانية.",
        feat2Title: "تحليل الأرباح بالذكاء الاصطناعي",
        feat2Desc: "يحسب الشحن والضرائب لتقديم هامش الربح الصافي.",
        feat3Title: "منشئ القوائم التلقائي",
        feat3Desc: "قم بإدراج المنتجات المربحة بنقرة واحدة.",
        ctaTitle: "انضم إلى قائمة الانتظار",
        ctaSub: "احجز مكانك الآن لتكون من الأوائل.",
        login: "تسجيل الدخول"
    }
    // Note: In a real app, all 20 languages would have full mapping.
    // We provide a fallback framework below.
};

// ==========================================
// Language Dropdown Management
// ==========================================
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');
const currentLangText = document.getElementById('current-lang');
const langItems = document.querySelectorAll('.dropdown-menu li');

// Toggle Dropdown
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
    const isExpanded = langDropdown.classList.contains('open');
    langBtn.setAttribute('aria-expanded', isExpanded);
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
});

// Switch Language
langItems.forEach(item => {
    item.addEventListener('click', () => {
        const langCode = item.getAttribute('data-lang');
        const dir = item.getAttribute('data-dir');
        
        // Update Button text (uppercase)
        currentLangText.textContent = langCode.toUpperCase();
        
        // Change Document Direction and Language
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', langCode);
        
        // Apply Translation (if exists, fallback to english/keep current)
        const content = translations[langCode] || translations['en'];
        
        document.getElementById('hero-badge').innerHTML = content.badge;
        document.getElementById('hero-title').innerHTML = content.title;
        document.getElementById('hero-subtitle').innerHTML = content.subtitle;
        document.getElementById('hero-cta').innerHTML = content.ctaHero;
        
        document.getElementById('feat1-title').innerHTML = content.feat1Title;
        document.getElementById('feat1-desc').innerHTML = content.feat1Desc;
        document.getElementById('feat2-title').innerHTML = content.feat2Title;
        document.getElementById('feat2-desc').innerHTML = content.feat2Desc;
        document.getElementById('feat3-title').innerHTML = content.feat3Title;
        document.getElementById('feat3-desc').innerHTML = content.feat3Desc;
        
        document.getElementById('cta-title').innerHTML = content.ctaTitle;
        document.getElementById('cta-subtitle').innerHTML = content.ctaSub;
        document.getElementById('login-btn').querySelector('span').innerHTML = content.login || "Login";

        // Refresh icons due to innerHTML overrides in buttons
        feather.replace();
    });
});

// ==========================================
// Dynamic Dashboard Mockup Updater
// ==========================================
const sourcePriceEl = document.getElementById('source-price');
const targetPriceEl = document.getElementById('target-price');
const profitMarginEl = document.getElementById('profit-margin');

// Simulate real-time price fluctuations
setInterval(() => {
    // Generate slight random variations
    const sourceBase = 249.00;
    const currentSource = (sourceBase + (Math.random() * 4 - 2)).toFixed(2);
    
    // Simulate currency conversion and markup (USD to TRY roughly)
    const targetBase = parseFloat(currentSource) * 32.5 * 1.15; // 15% markup
    const currentTarget = targetBase.toFixed(2);
    
    // Calculate simulated profit based on a fixed logic
    const netProfitUsd = ((targetBase / 32.5) - parseFloat(currentSource) - 15).toFixed(2); // subtract 15 for simulated shipping/fees

    // Add mild animation
    sourcePriceEl.style.opacity = 0.5;
    targetPriceEl.style.opacity = 0.5;
    
    setTimeout(() => {
        sourcePriceEl.textContent = `$${currentSource}`;
        // Format Turkish Lira nicely
        targetPriceEl.textContent = `₺${new Intl.NumberFormat('tr-TR').format(currentTarget)}`;
        profitMarginEl.textContent = `~$${netProfitUsd}`;
        
        sourcePriceEl.style.opacity = 1;
        targetPriceEl.style.opacity = 1;
    }, 300);

}, 4500);

// ==========================================
// Data Flow Canvas Animation
// ==========================================
const canvas = document.getElementById('data-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedY = (Math.random() * 1) + 0.5;
        // 50% chance neon blue, 50% chance darker color
        this.color = Math.random() > 0.5 ? '#00f0ff' : 'rgba(255,255,255,0.2)';
    }
    update() {
        // Move downwards
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 8000;
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    // Draw connections if close
    connect();
    requestAnimationFrame(animate);
}

function connect() {
    let opacityValue = 1;
    for(let a = 0; a < particlesArray.length; a++) {
        for(let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if(distance < (canvas.width/10) * (canvas.height/10)) {
                opacityValue = 1 - (distance/10000);
                // Subtle matrix lines
                ctx.strokeStyle = `rgba(0, 240, 255, ${opacityValue * 0.1})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

init();
animate();

// ==========================================
// Waitlist Form Submission
// ==========================================
const waitlistForm = document.getElementById('waitlistForm');
const formStatus = document.getElementById('form-status');

waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const btn = document.getElementById('waitlist-btn');
    
    // Simulate API Call
    btn.textContent = 'İşleniyor...';
    btn.style.opacity = 0.8;
    
    setTimeout(() => {
        formStatus.textContent = "Teşekkürler! Erken erişim listesine eklendiniz.";
        btn.textContent = 'Bana Haber Ver';
        btn.style.opacity = 1;
        waitlistForm.reset();
        
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    }, 1500);
});
