/* Micro-Interactions, Scroll Progress & Custom Cursor */

// 1. Top Scroll Progress Indicator Bar
export function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  });
}

// 2. Desktop Custom Cursor Follower
export function initCustomCursor() {
  // Only enable on desktop pointer devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }

  renderCursor();

  // Hover scale effect on interactive elements
  const interactiveEls = document.querySelectorAll('a, button, input, textarea, .panel-row, .editorial-tag');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
      ring.style.borderColor = 'var(--accent-primary)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

// 3. Scroll Reveal Observer
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}
