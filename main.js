// Nav slides away on scroll down and returns on scroll up; the sticky CTA
// appears once the hero is scrolled past.
(() => {
  const nav = document.getElementById('nav');
  const sticky = document.getElementById('sticky-cta');
  let lastY = window.scrollY;
  let hidden = false;
  let shown = false;
  let raf = 0;

  const tick = () => {
    raf = 0;
    const y = window.scrollY;
    const dy = y - lastY;
    if (Math.abs(dy) < 6) return;
    lastY = y;

    const hide = dy > 0 && y > 80;
    if (hide !== hidden) {
      hidden = hide;
      nav.classList.toggle('is-hidden', hide);
    }

    const show = y > 500;
    if (show !== shown) {
      shown = show;
      sticky.classList.toggle('is-visible', show);
      sticky.setAttribute('aria-hidden', String(!show));
      sticky.tabIndex = show ? 0 : -1;
    }
  };

  window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });

  // Keep the nav visible while it has keyboard focus.
  nav.addEventListener('focusin', () => { hidden = false; nav.classList.remove('is-hidden'); });
})();

// Some browsers ignore the autoplay attribute until play() is called explicitly.
(() => {
  const video = document.querySelector('.hero-media video');
  if (!video) return;
  video.muted = true;
  const p = video.play();
  if (p && p.catch) p.catch(() => {});
})();

// Contact form: there is no backend yet, so the request opens a prefilled
// e-mail. To switch to a form service, give the <form> an action/method and
// drop this handler.
(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    if (form.getAttribute('action')) return;
    e.preventDefault();
    const d = new FormData(form);
    const body = [
      `Name: ${d.get('name')}`,
      `Unternehmen: ${d.get('firma') || '–'}`,
      `E-Mail: ${d.get('email')}`,
      `Leistung: ${d.get('leistung')}`,
      '',
      d.get('nachricht') || '',
    ].join('\n');
    const subject = `Projektanfrage – ${d.get('firma') || d.get('name')}`;
    window.location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    button.textContent = 'Danke – wir melden uns';
  });
})();
