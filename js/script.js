// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Initialize language selector
function initLanguageSelector() {
    const selectors = document.querySelectorAll('.lang-selector');
    const currentLang = localStorage.getItem('preferredLanguage') || 'uk';
    
    selectors.forEach(selector => {
        selector.value = currentLang;
        selector.addEventListener('change', function() {
            const selectedLang = this.value;
            localStorage.setItem('preferredLanguage', selectedLang);
            // Load translations without page reload
            if (typeof setLanguage !== 'undefined') {
                setLanguage(selectedLang);
            }
        });
    });
}

// Call when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelector();
});

// Toggle contact widget
function toggleContactWidget() {
    const widget = document.querySelector('.contact-widget');
    widget.classList.toggle('active');
}

// Close contact widget when clicking outside
document.addEventListener('click', function(event) {
    const widget = document.querySelector('.contact-widget');
    const toggle = document.querySelector('.contact-toggle');
    
    if (widget && toggle && 
        !widget.contains(event.target) && 
        !toggle.contains(event.target) &&
        widget.classList.contains('active')) {
        widget.classList.remove('active');
    }
});

// Close contact widget on Escape key press
document.addEventListener('keydown', function(event) {
    const widget = document.querySelector('.contact-widget');
    
    if (widget && widget.classList.contains('active') && event.key === 'Escape') {
        widget.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Form submission is handled by FormSubmit.co

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Reset hero animations
document.querySelectorAll('.hero-content > *').forEach(el => {
    el.style.opacity = '';
    el.style.transform = '';
});
