/* Main Entry Point for Swiss Editorial Portfolio */
import { initTheme } from './theme.js';
import { initScrollProgress, initCustomCursor, initScrollReveal } from './animations.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';
import { initSoundEffects } from './sound.js';
import { initSkillModal } from './skillModal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Switcher
  initTheme();

  // 2. Initialize Sweet UI Click Sound Effects
  initSoundEffects();

  // 3. Initialize Top Scroll Progress & Desktop Custom Cursor
  initScrollProgress();
  initCustomCursor();

  // 4. Render Projects Showcase
  initProjects();

  // 5. Initialize Skill Interactive Popups
  initSkillModal();

  // 6. Initialize Contact Form & Email Copy
  initContactForm();

  // 7. Initialize IntersectionObserver Scroll Reveals
  initScrollReveal();

  // 8. Sticky Navbar, Back to Top & Active Section Observer
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('is-visible');
    } else {
      backToTopBtn?.classList.remove('is-visible');
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  const navToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
      });
    });
  }
});
