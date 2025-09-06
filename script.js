// Mobile menu toggle
const navBtn = document.querySelector('.nav-toggle');
const nav    = document.querySelector('#site-nav');
if (navBtn && nav) {
  navBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
