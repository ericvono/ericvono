const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(8, 5, 12, 0.86)";
  } else {
    header.style.background = "rgba(8, 5, 12, 0.38)";
  }
});
