// Mobile nav toggle + year
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".navToggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close nav when clicking a link (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
