// Mobile nav
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (btn){
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Contact form — simple mailto fallback
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const msg = data.get('message');
    const subject = encodeURIComponent('Website Contact — EricVono.com');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:hello@ericvono.com?subject=${subject}&body=${body}`;
  });
}
