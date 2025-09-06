// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const navBtn = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");
navBtn?.addEventListener("click", () => nav.classList.toggle("open"));

// Contact (demo only)
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get("name");
  alert(`Thanks, ${name}! I’ll get back to you soon.`);
  e.target.reset();
});
