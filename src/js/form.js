/* Form Handler with Web3Forms & Mailto Delivery to reachshivangigupta@gmail.com */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const messageInput = document.getElementById('form-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill in all fields', 'warning');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending...`;

      try {
        // Send email via Web3Forms API to reachshivangigupta@gmail.com
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: '1a086b66-0ab0-40e9-a417-380d0d8fb45a', // Web3Forms Public Key
            name: name,
            email: email,
            message: message,
            subject: `Portfolio Message from ${name}`,
            from_name: `${name} (shivangiguptaa.me)`,
            to_email: 'reachshivangigupta@gmail.com'
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();
          showToast('✉️ Message sent successfully to reachshivangigupta@gmail.com!', 'success');
        } else {
          // Fallback to mailto if API key is unactivated
          triggerMailtoFallback(name, email, message);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();
          showToast('📧 Opening email client to send message to reachshivangigupta@gmail.com...', 'info');
        }
      } catch (err) {
        // Network fallback
        triggerMailtoFallback(name, email, message);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        showToast('📧 Message ready! Opening email client for reachshivangigupta@gmail.com...', 'info');
      }
    });
  }

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

function triggerMailtoFallback(name, email, message) {
  const mailtoUrl = `mailto:reachshivangigupta@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
  window.location.href = mailtoUrl;
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
