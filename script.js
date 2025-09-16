// Year in footer
window.addEventListener('DOMContentLoaded', () => {
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
});

// === Random Slideshow ===
window.addEventListener('DOMContentLoaded', () => {
  const DURATION_MS = 5000; // time each slide is shown
  const COUNT = 60;         // how many images

  // Way A: sequential names photo01.jpg ... photo60.jpg inside assets/gallery/
  const PHOTOS = Array.from({length: COUNT}, (_, i) =>
    `assets/gallery/photo${String(i+1).padStart(2,'0')}.jpg`
  );

  /* Way B: Custom filenames
     If you didn't rename files, comment out Way A and list them explicitly:
     const PHOTOS = [
       "assets/gallery/IMG_1234.jpeg",
       "assets/gallery/frame_weld.jpg",
       "assets/gallery/shop_panorama.png",
       // ...all the rest
     ];
  */

  const a = document.getElementById('imgA');
  const b = document.getElementById('imgB');
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const host     = document.getElementById('slideshow');
  if (!a || !b || !host) return;

  let order = shuffle(PHOTOS.slice()); // start randomized
  let index = 0;
  let playing = true;
  let timerId = null;
  let showingA = true;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function preloadAt(i) {
    const pre = new Image();
    pre.src = order[(i + order.length) % order.length];
  }

  function swapTo(src) {
    const nextEl = showingA ? b : a;
    const prevEl = showingA ? a : b;

    nextEl.src = src;
    nextEl.onload = () => {
      prevEl.classList.remove('show');
      nextEl.classList.add('show');
      showingA = !showingA;
    };
  }

  function go(step = 1) {
    index = (index + step + order.length) % order.length;
    if (index === 0 && step === 1) order = shuffle(PHOTOS.slice()); // reshuffle each loop
    swapTo(order[index]);
    preloadAt(index + 1);
  }

  function play() {
    clearInterval(timerId);
    timerId = setInterval(() => go(1), DURATION_MS);
    playing = true;
    pauseBtn.textContent = 'Pause';
  }
  function pause() {
    clearInterval(timerId);
    playing = false;
    pauseBtn.textContent = 'Play';
  }

  pauseBtn.addEventListener('click', () => (playing ? pause() : play()));
  nextBtn.addEventListener('click', () => { go(1); if (playing) play(); });
  prevBtn.addEventListener('click', () => { go(-1); if (playing) play(); });

  // keyboard & swipe
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { go(1); if (playing) play(); }
    if (e.key === 'ArrowLeft')  { go(-1); if (playing) play(); }
    if (e.code === 'Space')     { e.preventDefault(); (playing ? pause() : play()); }
  });
  let touchStartX = null;
  host.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, {passive:true});
  host.addEventListener('touchend', e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? go(1) : go(-1); if (playing) play(); }
    touchStartX = null;
  }, {passive:true});

  // init first image
  a.src = order[0];
  a.classList.add('show');
  preloadAt(1);
  play();
});
