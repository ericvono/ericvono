const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(5, 3, 10, 0.82)";
  } else {
    header.style.background = "rgba(5, 3, 10, 0.45)";
  }
});
