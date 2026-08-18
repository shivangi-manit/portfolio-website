/* Web Audio API - Robust Sweet UI Click Sound Generator */

let audioCtx = null;
let soundEnabled = true;

function unlockAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Unlock audio on first user touch/click anywhere
if (typeof window !== 'undefined') {
  const unlockEvents = ['click', 'touchstart', 'keydown'];
  const unlockHandler = () => {
    unlockAudioContext();
    unlockEvents.forEach(evt => document.removeEventListener(evt, unlockHandler));
  };
  unlockEvents.forEach(evt => document.addEventListener(evt, unlockHandler));
}

// Crisp sweet click sound (audible soft double chime)
export function playSweetClickSound() {
  if (!soundEnabled) return;
  try {
    const ctx = audioCtx || unlockAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    // Frequency sweep 784Hz (G5) to 1174Hz (D6) for a sweet, clean, audible pop sound
    osc.frequency.setValueAtTime(784, now);
    osc.frequency.exponentialRampToValueAtTime(1174, now + 0.04);

    // Volume level 0.12 (clearly audible, sweet & crisp)
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  } catch (err) {
    // Ignore autoplay restrictions safely
  }
}

export function initSoundEffects() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a, input[type="submit"], .panel-row, .editorial-tag, .theme-toggle-btn, .social-icon-btn, .achievement-row, .about-stat-box, .skill-category-box');
    if (target) {
      playSweetClickSound();
    }
  });

  const soundToggleBtn = document.getElementById('sound-toggle');
  const iconSoundOn = document.getElementById('icon-sound-on');
  const iconSoundOff = document.getElementById('icon-sound-off');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        if (iconSoundOn && iconSoundOff) {
          iconSoundOn.style.display = 'block';
          iconSoundOff.style.display = 'none';
        }
        playSweetClickSound();
      } else {
        if (iconSoundOn && iconSoundOff) {
          iconSoundOn.style.display = 'none';
          iconSoundOff.style.display = 'block';
        }
      }
    });
  }
}
