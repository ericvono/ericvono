// script.js
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(5, 6, 10, 0.86)";
  } else {
    header.style.background = "rgba(5, 6, 10, 0.52)";
  }
});
