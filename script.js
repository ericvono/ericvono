// Mobile nav (class toggle, accessible)
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open', !expanded);
  });

  // Close menu when a link is clicked (better UX)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });
}

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Respect reduced motion for animated SVG glare (pause by removing animations)
try {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('animate').forEach(a => a.remove());
  }
} catch {}
