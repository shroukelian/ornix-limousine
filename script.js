// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
});

// Sticky Navbar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a'); // تحديد كل الروابط

if (menuIcon && navLinks) {
    // لفتح وإغلاق القائمة عند الضغط على الأيقونة
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // لإغلاق القائمة عند الضغط على أي رابط بداخلها (مهم لتجربة المستخدم)
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Scroll Animation
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // يبدأ الأنيميشن عندما يظهر 10% من العنصر
});

scrollElements.forEach(el => {
    observer.observe(el);
});

// (سيتم إضافة كود الأنيميشن عند التمرير هنا في الخطوات القادمة)