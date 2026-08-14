// ============================================================
// MOBILE MENU TOGGLE
// ============================================================
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const icon = toggle.querySelector('i');
        if (menu.classList.contains('open')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            const icon = toggle.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
}

// ============================================================
// HEADER SCROLL SHADOW
// ============================================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 30) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
});

// ============================================================
// BOTTOM NAV ACTIVE STATE
// ============================================================
document.querySelectorAll('.bottom-nav a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.bottom-nav a').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});