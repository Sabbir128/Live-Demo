// script.js

// Typing Animation Effect for Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector('.typing');
    const typingText = "CyberShield Security - Leading the Digital Protection Revolution";
    let index = 0;

    function typeText() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const attachment = document.getElementById('attachment').files.length;

    // Simple Validation for Empty Fields
    if (!name || !email || !message) {
        event.preventDefault();
        alert("All fields except Attachment are required.");
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }

    // Optional: File Attachment Size Check (if you want to restrict file size)
    if (attachment > 0) {
        const fileSize = document.getElementById('attachment').files[0].size;
        if (fileSize > 5 * 1024 * 1024) { // 5MB limit
            event.preventDefault();
            alert("File size exceeds 5MB. Please choose a smaller file.");
        }
    }
});

// Scroll Event to Add Sticky Navigation on Scroll
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.footer-nav a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Highlight the active section link in the navigation menu
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            navLinks.forEach(link => {
                if (link.hash === `#${section.id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});

// Check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Toggle Mobile Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

// Handle Scroll Down Button Visibility
const scrollDownButton = document.querySelector('.scroll-down');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollDownButton.classList.add('hide');
    } else {
        scrollDownButton.classList.remove('hide');
    }
});
