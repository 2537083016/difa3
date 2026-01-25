// --- DATASET AWAL (Dijalankan sekali untuk setup LocalStorage) ---
const defaultData = {
    appItems: [
        { name: 'Home', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>' },
        { name: 'Profil', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
        { name: 'Pesan', icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
        { name: 'Cloud', icon: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>' },
        { name: 'Setelan', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>' },
        { name: 'Cari', icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' }
    ],
    hero: {
        title: 'Visi Digital Tanpa Batas.',
        desc: 'Gabungan antara kedalaman visual paralaks dan fungsionalitas cerdas dalam satu antarmuka yang bersih.'
    },
    features: [
        { title: '3-Layer Motion', desc: 'Efek kedalaman yang memanjakan mata tanpa memberatkan sistem.', style: '' },
        { title: 'Ultra Fast', desc: 'Optimasi kode murni menjamin kecepatan akses kilat di semua perangkat.', style: 'background: var(--primary); color: white;' },
        { title: 'Adaptive UX', desc: 'Komponen yang menyesuaikan kebutuhan pengguna secara otomatis.', style: '' }
    ],
    pricing: [
        { title: 'Starter', cost: 'Gratis', features: ['1 Proyek Aktif', '3-Layer Parallax', 'Komunitas Support'], btnText: 'Coba Gratis', featured: false },
        { title: 'Professional', cost: 'Rp 149k', period: '/bln', features: ['Unlimited Proyek', 'Custom SVG Animation', 'Prioritas Support 24/7', 'Analytics Dashboard'], btnText: 'Pilih Pro', featured: true },
        { title: 'Enterprise', cost: 'Custom', features: ['Akses API Penuh', 'White Label Branding', 'Dedicated Manager'], btnText: 'Hubungi Kami', featured: false }
    ],
    faqs: [
        { q: 'Bagaimana cara implementasi Parallax?', a: 'Kami menggunakan JavaScript untuk menghitung posisi scroll dan menerapkannya pada atribut transform SVG secara real-time.' },
        { q: 'Apakah bisa kustomisasi ikon?', a: 'Tentu, semua ikon berbasis SVG sehingga Anda bisa mengubah warna dan bentuk langsung di dalam kode HTML.' }
    ]
};

// --- INISIALISASI STORAGE ---
if (!localStorage.getItem('vista_dataset')) {
    localStorage.setItem('vista_dataset', JSON.stringify(defaultData));
}

const appData = JSON.parse(localStorage.getItem('vista_dataset'));

// --- RENDER ENGINE ---
function renderPage() {
    // Render App Panel
    const appGrid = document.getElementById('appGridContainer');
    appGrid.innerHTML = appData.appItems.map(item => `
        <a class="app-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${item.icon}</svg>
            <span>${item.name}</span>
        </a>
    `).join('');

    // Render Hero
    document.getElementById('heroContent').innerHTML = `
        <h1>${appData.hero.title}</h1>
        <p>${appData.hero.desc}</p>
        <div style="margin-top: 30px;"><a href="#pricing" class="btn">Mulai Sekarang</a></div>
    `;

    // Render Features
    document.getElementById('featuresGrid').innerHTML = appData.features.map(f => `
        <div class="bento-card" style="${f.style}">
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
        </div>
    `).join('');

    // Render Pricing
    document.getElementById('pricingGrid').innerHTML = appData.pricing.map(p => `
        <div class="price-card ${p.featured ? 'featured' : ''}">
            <h3>${p.title}</h3>
            <div class="cost">${p.cost}${p.period ? `<span style="font-size: 1rem; font-weight: 400;">${p.period}</span>` : ''}</div>
            <ul>
                ${p.features.map(feat => `<li><span class="check-icon">✓</span> ${feat}</li>`).join('')}
            </ul>
            <a href="#" class="btn ${p.featured ? '' : 'btn-outline'}">${p.btnText}</a>
        </div>
    `).join('');

    // Render FAQ
    document.getElementById('faqContainer').innerHTML = appData.faqs.map(faq => `
        <div class="faq-item">
            <button class="faq-btn">${faq.q} <span>+</span></button>
            <div class="faq-content"><p>${faq.a}</p></div>
        </div>
    `).join('');
}

// Jalankan Render
renderPage();

// --- LOGIKA INTERAKSI (Tetap sama) ---
const profileToggle = document.getElementById('profileToggle');
const appPanel = document.getElementById('app-panel');
profileToggle.onclick = (e) => { e.stopPropagation(); appPanel.classList.toggle('show'); };
document.onclick = () => appPanel.classList.remove('show');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.onclick = () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
        btn.querySelector('span').innerText = item.classList.contains('active') ? '-' : '+';
    };
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.bento-card, .price-card, .faq-item').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    observer.observe(el);
});
