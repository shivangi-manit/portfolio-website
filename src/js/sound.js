/* Web Audio API - Sweet UI Click Sound Generator */

let audioCtx = null;
let soundEnabled = true;

// Initialize Web Audio Context on first user interaction
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Sweet short click sound (pleasant soft chime pop)
export function playSweetClickSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sweet double-tone subtle chime pitch
    const now = ctx.currentTime;
    osc.type = 'sine';
    
    // Frequency sweep from 880Hz (A5) up to 1320Hz (E6) quickly for a crisp sweet pop
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.04);

    // Very soft volume envelope fading out fast (0.05 seconds duration)
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  } catch (err) {
    // Ignore audio autoplay restrictions safely
  }
}

// Attach sound triggers to all click events on interactive UI elements
export function initSoundEffects() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a, input[type="submit"], .panel-row, .editorial-tag, .theme-toggle-btn, .social-icon-btn, .achievement-row');
    if (target) {
      playSweetClickSound();
    }
  });

  // Sound Mute/Unmute Toggle Controller
  const soundToggleBtn = document.getElementById('sound-toggle');
  const iconSoundOn = document.getElementById('icon-sound-on');
  const iconSoundOff = document.getElementById('icon-sound-off');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        iconSoundOn.style.display = 'block';
        iconSoundOff.style.display = 'none';
        playSweetClickSound();
      } else {
        iconSoundOn.style.display = 'none';
        iconSoundOff.style.display = 'block';
      }
    });
  }
}
