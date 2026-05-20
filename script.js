const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgba(0,0,0,0.82)";
  } else {
    header.style.background = "rgba(0,0,0,0.45)";
  }
});
