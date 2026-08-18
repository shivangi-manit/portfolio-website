/* Email Copy & Toast Notification Controller */

export function initContactForm() {
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'reachshivangigupta@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('📋 Email copied: reachshivangigupta@gmail.com', 'info');
      }).catch(() => {
        showToast('Email: reachshivangigupta@gmail.com', 'info');
      });
    });
  }
}

export function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
  if (type === 'success') {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  }

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
