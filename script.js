// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* --- Simple 10-image slider (no library) ---
   1) Put your 10 images in: /assets/gallery/
   2) Name them however you like and list them here EXACTLY (case-sensitive)
   3) Root-relative paths so it works from /podcast or anywhere
*/
const imageList = [
  "/assets/gallery/IMG_0469.JPG",
  "/assets/gallery/IMG_0519.JPG",
  "/assets/gallery/IMG_0594.JPG",
  "/assets/gallery/IMG_1042.JPG",
  "/assets/gallery/IMG_1660.JPG",
  "/assets/gallery/IMG_7595.JPG",
  "/assets/gallery/h2o-relax-bro.png",
  "/assets/gallery/ph1.jpg",
  "/assets/gallery/ph2.jpg",
  "/assets/gallery/ph3.jpg"
];

// Build slides
const slider = document.getElementById("rb-slider");
const dotsWrap = document.getElementById("rb-dots");
let idx = 0, timer;

const slides = imageList.map((src, i) => {
  const s = document.createElement("div");
  s.className = "slide";
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Gallery image " + (i+1);
  s.appendChild(img);
  slider.appendChild(s);

  const dot = document.createElement("button");
  dot.addEventListener("click", () => go(i));
  dotsWrap.appendChild(dot);
  return s;
});

function render(){
  slides.forEach((s, i) => s.classList.toggle("active", i === idx));
  [...dotsWrap.children].forEach((d, i) => d.classList.toggle("active", i === idx));
}
function next(){ idx = (idx + 1) % slides.length; render(); }
function prev(){ idx = (idx - 1 + slides.length) % slides.length; render(); }
function go(i){ idx = i % slides.length; render(); resetAuto(); }
function resetAuto(){ clearInterval(timer); timer = setInterval(next, 3500); }

document.querySelector(".slider .next").addEventListener("click", () => { next(); resetAuto(); });
document.querySelector(".slider .prev").addEventListener("click", () => { prev(); resetAuto(); });

// Start
render();
resetAuto();
