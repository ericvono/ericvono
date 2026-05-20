const buttons = document.querySelectorAll(".btn, .big-link");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.querySelector(".background").style.transform =
    `scale(1.04) translateY(${scrolled * -0.03}px)`;
});
