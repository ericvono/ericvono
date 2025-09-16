/* ---- variables & base ---- */
:root{
  --bg-0:#0b0f16;
  --panel:#0f1522;
  --text:#e9eef7;
  --muted:#a2b3c8;
  --accent:#a8ff2a;
  --radius:16px;
  --shadow:0 10px 30px rgba(0,0,0,.35);
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0; color:var(--text);
  font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  background:
    radial-gradient(1200px 600px at 20% -10%, rgba(168,255,42,.06), transparent 60%),
    radial-gradient(900px 500px at 80% -20%, rgba(216,58,58,.08), transparent 60%),
    repeating-linear-gradient(90deg, #0b0f16 0 2px, #0c1119 2px 4px),
    linear-gradient(180deg,#0a0f16 0%, #0a0e14 50%, #090d13 100%);
  background-attachment: fixed;
}
a{color:inherit;text-decoration:none}

/* ---- header ---- */
.hdr{ position:sticky; top:0; z-index:40;
  background:linear-gradient(to bottom, rgba(9,13,19,.9), rgba(9,13,19,.55));
  backdrop-filter:saturate(1.2) blur(6px);
  border-bottom:1px solid rgba(255,255,255,.06);
}
.nav{ max-width:1200px; margin:0 auto; padding:12px 18px;
  display:flex; align-items:center; justify-content:space-between; gap:18px;
}
.brand{ display:flex; align-items:center; gap:12px }
.logo{ width:36px;height:36px;border-radius:8px;
  background:conic-gradient(from 220deg, #202428 0 35%, #3a424a 0 70%, #202428 0);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08), inset 0 -1px 0 rgba(0,0,0,.45), 0 6px 18px rgba(0,0,0,.45);
  position:relative; overflow:hidden;
}
.logo::after{content:"";position:absolute;inset:-40% -40% auto auto;width:120%;height:120%;
  transform: rotate(35deg);
  background:linear-gradient(to right, transparent, rgba(255,255,255,.15), transparent);
  filter: blur(2px); animation:shine 4s linear infinite;
}
@keyframes shine{0%{left:-130%}100%{left:130%}}
.title{ font:700 19px Orbitron; letter-spacing:.6px }
.menu{ display:flex; gap:16px; align-items:center }
.menu a{ padding:8px 12px; color:var(--muted) }
.menu a:hover{ color:var(--text) }

.socials{ display:flex; gap:10px; align-items:center }
.icon-btn{ width:34px;height:34px; display:grid; place-items:center;
  border-radius:10px; background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.06); box-shadow: var(--shadow);
}
.icon-btn:hover{ outline:1px solid rgba(168,255,42,.4) }
.icon-pulse{ box-shadow:0 0 0 0 rgba(168,255,42,.45); animation:pulse 2.6s ease-in-out infinite }
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(168,255,42,.35)}60%{box-shadow:0 0 20px 10px rgba(168,255,42,0)}100%{box-shadow:0 0 0 0 rgba(168,255,42,0)}}

/* ---- main layout ---- */
main{ max-width:1200px; margin:0 auto; padding:24px 18px 60px }

/* ---- hero ---- */
.hero{ display:grid; grid-template-columns:1.05fr .95fr; gap:24px; align-items:center; margin:28px 0 10px }
.panel{ background:linear-gradient(180deg, rgba(255,255,255,.05), transparent 45%), var(--panel);
  border:1px solid rgba(255,255,255,.08); border-radius:var(--radius); padding:24px; box-shadow:var(--shadow)
}
.kicker{ color:var(--accent); font:600 12px/1 Inter; letter-spacing:.2em; text-transform:uppercase }
h1{ font:700 clamp(28px, 4.2vw, 56px) Orbitron; margin:.25rem 0 .6rem }
.sub{ color:var(--muted); font-size:clamp(14px,1.2vw,18px) }

.cta-row{ display:flex; gap:14px; align-items:center; margin-top:16px }
.btn{ display:inline-flex; gap:10px; align-items:center; padding:12px 16px;
  border-radius:14px; background:linear-gradient(180deg, #1a2436, #0f1624);
  border:1px solid rgba(255,255,255,.08); color:#fff; font-weight:600; letter-spacing:.3px;
}
.btn:hover{ transform:translateY(-1px) }
.btn-lime{ background:linear-gradient(180deg, #b6ff3c, #82d118); color:#0b0f16;
  border-color:#b6ff3c; box-shadow:0 0 18px rgba(168,255,42,.18)
}
.btn .bolt{ filter: drop-shadow(0 0 8px rgba(168,255,42,.35)); animation: bolt 1.1s infinite steps(2,end) }
@keyframes bolt{0%,100%{opacity:1}50%{opacity:.35}}

/* ---- slideshow ---- */
.slab{ margin:28px 0; padding:16px; border-radius:var(--radius);
  border:1px solid rgba(255,255,255,.08);
  background:linear-gradient(180deg, rgba(255,255,255,.04), transparent 40%), var(--panel);
  box-shadow:var(--shadow)
}
.slideshow{ position:relative; width:100%; aspect-ratio:16/9;
  border-radius:14px; overflow:hidden; background:#0b1220;
}
.slideshow img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  opacity:0; transition:opacity 800ms ease-in-out;
}
.slideshow img.show{ opacity:1 }
.slide-controls{ position:absolute; inset:0; display:flex; align-items:center;
  justify-content:space-between; padding:0 8px; pointer-events:none
}
.slide-controls button{ pointer-events:auto; border:none; color:#fff;
  background:rgba(10,15,25,.55); padding:.45rem .7rem; border-radius:10px
}
.slide-controls .pause{ position:absolute; left:50%; bottom:10px; transform:translateX(-50%) }

/* ---- other sections ---- */
section{ margin:34px 0 }
h2{ font:700 26px Orbitron; letter-spacing:.5px; margin:0 0 .5rem }
h3{ font:700 18px Inter; color:#fff; margin:.2rem 0 .2rem }
.muted{ color:var(--muted) }
.cols{ display:grid; grid-template-columns:repeat(3, 1fr); gap:16px }
.col{ border:1px solid rgba(255,255,255,.08); border-radius:var(--radius); padding:16px;
  background:linear-gradient(180deg, rgba(255,255,255,.03), transparent 40%), var(--panel)
}

.methods{ display:grid; grid-template-columns:repeat(3, 1fr); gap:16px }
.card{ display:block; padding:14px; border-radius:14px; border:1px solid rgba(255,255,255,.1);
  background:linear-gradient(180deg, rgba(255,255,255,.06), transparent 40%), #131a2a;
  box-shadow:var(--shadow)
}
.card:hover{ outline:1px solid rgba(168,255,42,.45) }

.embed-shell{ border:1px solid rgba(255,255,255,.08); border-radius:14px;
  overflow:hidden; background:var(--panel); box-shadow:var(--shadow)
}

.contact .grid{ display:grid; grid-template-columns:1fr 1fr; gap:12px }
label{ display:block; color:#dbe6f7; font-weight:600; margin:.25rem 0 }
input, textarea{ width:100%; margin-top:.35rem; border-radius:10px; padding:10px 12px;
  border:1px solid rgba(255,255,255,.12); background:#0c1320; color:#e9eef7
}
input:focus, textarea:focus{ outline:1px solid rgba(168,255,42,.55) }

footer{ margin-top:40px; padding:18px 0 40px; border-top:1px solid rgba(255,255,255,.08);
  color:var(--muted)
}
.foot-inner{ max-width:1200px; margin:0 auto; padding:0 18px }

@media (max-width:1000px){
  .hero{ grid-template-columns:1fr }
  .cols{ grid-template-columns:1fr }
  .methods{ grid-template-columns:1fr }
  .contact .grid{ grid-template-columns:1fr }
}
