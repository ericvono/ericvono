const bg = document.querySelector(".bg-image");

window.addEventListener("scroll", () => {
  const y = window.scrollY * -0.04;
  bg.style.transform = `scale(1.06) translateY(${y}px)`;
});
