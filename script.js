// mobile nav
const $toggle = document.querySelector('.nav-toggle');
const $nav = document.querySelector('#site-nav');
if ($toggle && $nav) {
  $toggle.addEventListener('click', () => {
    const open = $nav.classList.toggle('open');
    $toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
