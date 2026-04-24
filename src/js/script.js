// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', block: 'start'
            });
        }
    });
});

// Hide mobile nav on desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = 'block';
    }
});