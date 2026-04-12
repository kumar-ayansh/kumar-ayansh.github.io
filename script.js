// script.js

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Animate Progress Bars on Scroll
const progressBars = document.querySelectorAll('.progress-bar');
const skillSection = document.getElementById('skills');

function animateProgress() {
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
        // Add percentage text dynamically
        const parent = bar.closest('.skill');
        if (parent && !parent.querySelector('.percentage')) {
            const percentSpan = document.createElement('span');
            percentSpan.className = 'percentage';
            percentSpan.textContent = progress + '%';
            parent.querySelector('p').appendChild(percentSpan);
        }
    });
}

// Intersection Observer for skills
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillSection) {
    observer.observe(skillSection);
}

// Back to Top Button
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for anchor links (fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});