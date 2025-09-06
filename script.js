// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
