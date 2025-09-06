/* ========== Theme ========== */
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0e1013; --panel:#151a1e; --ink:#e9eef2; --muted:#a6b0b7;
  --brand:#f28a31; --line:rgba(255,255,255,.08); --blood:#6a1b1b;
}
html,body{height:100%}
body{
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  background:
    radial-gradient(1200px 600px at 20% 12%, rgba(242,138,49,.10), transparent),
    radial-gradient(900px 500px at 80% 0%, rgba(106,27,27,.10), transparent),
    var(--bg);
  color:var(--ink); line-height:1.6;
}
.container{width:min(1120px,92vw); margin:0 auto; padding:18px 0}

/* ========== Header / Nav ========== */
.site-header{position:sticky; top:0; z-index:50; background:linear-gradient(180deg, rgba(18,20,24,.92), rgba(18,20,24,.75)); backdrop-filter:blur(6px); border-bottom:1px solid var(--line)}
.navwrap{display:flex; align-items:center; justify-content:space-between; gap:16px}
.brand{display:flex; align-items:center; gap:10px; text-decoration:none}
.brand-mark{display:inline-grid; place-items:center; width:28px; height:28px; border-radius:6px; background:linear-gradient(180deg,#2a2f34,#161a1e); color:#fff; font-weight:900}
.brand-text{font-weight:900; letter-spacing:1px; font-size:18px; color:var(--ink)}
.nav-toggle{display:none; font-size:22px; background:none; border:0; color:var(--ink)}
.site-nav a{color:var(--muted); text-decoration:none; font-weight:700; padding:8px 10px; border-radius:10px}
.site-nav a:hover{color:var(--ink)}
.btn{display:inline-block; padding:8px 12px; margin:8px 0; background:var(--panel); color:var(--ink); border:1px solid var(--line); border-radius:12px; text-decoration:none; font-weight:800}
.btn.primary{background:linear-gradient(180deg,#f28a31,#f4a557); color:#111}

/* ========== Hero ========== */
.hero{position:relative; overflow:hidden; border-bottom:1px solid var(--line); padding:56px 0 32px}
.hero .grit{
  position:absolute; inset:-10% -10% auto -10%; height:60%;
  background:
    radial-gradient(600px 300px at 15% 60%, rgba(106,27,27,.18), transparent),
    radial-gradient(900px 300px at 85% 40%, rgba(242,138,49,.16), transparent),
    repeating-linear-gradient(110deg, #23262a, #23262a 6px, #1b1e22 12px);
  filter:contrast(115%); opacity:.6; pointer-events:none;
}
.hero .sparks{
  position:absolute; inset:auto -10% -6% -10%; height:180px;
  background:
    radial-gradient(200px 80px at 22% 40%, rgba(255,170,90,.35), transparent),
    radial-gradient(140px 60px at 40% 70%, rgba(255,120,40,.25), transparent);
  mix-blend-mode:screen; pointer-events:none;
}
.hero-inner{display:grid; place-items:center; gap:14px}
.hero-logo{display:block; width:min(840px,96%); height:auto; border-radius:12px; border:1px solid var(--line); box-shadow:0 25px 60px rgba(0,0,0,.45)}
.tagline{color:var(--muted); max-width:740px; text-align:center}
.cta-row{display:flex; gap:12px; flex-wrap:wrap; justify-content:center}

/* ========== Sections ========== */
.section{padding:56px 0}
.section.alt{background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.0))}
h2{font-size:clamp(28px,3vw,40px); margin-bottom:12px}

/* Podcast */
.podcast-grid{display:grid; gap:16px; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); align-items:start}
.tile{background:var(--panel); border:1px solid var(--line); border-radius:16px; overflow:hidden}
.tile img{width:100%; height:auto; display:block}
.tile figcaption{padding:10px; color:var(--muted)}
.player-card{background:var(--panel); border:1px solid var(--line); border-radius:16px; padding:10px}
.subscribe-row{margin-top:10px}
.pill{display:inline-block; padding:8px 12px; margin:8px 8px 0 0; border:1px solid var(--line); border-radius:999px; color:var(--ink); text-decoration:none}

/* Builds */
.grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:16px; margin-top:16px}
.card{background:var(--panel); border:1px solid var(--line); border-radius:16px; padding:16px}
.ph{height:160px; border:1px solid var(--line); border-radius:10px; margin-bottom:10px}
.ph.steel{
  background:
    radial-gradient(280px 120px at 10% 0%, rgba(255,255,255,.06), transparent),
    repeating-linear-gradient(110deg, #2b2f34, #2b2f34 6px, #1b1e22 12px);
}
.ph.mesh{
  background:
    linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,0)),
    repeating-linear-gradient(0deg, #23262a 0 2px, #1b1e22 2px 4px);
}
.ph.sparks{
  background:
    radial-gradient(240px 100px at 30% 60%, rgba(242,138,49,.4), transparent),
    radial-gradient(120px 60px at 70% 30%, rgba(106,27,27,.28), transparent),
    #202428;
}

/* Contact */
#contact-form{margin-top:10px}
#contact-form .row{display:grid; grid-template-columns:1fr 1fr; gap:10px}
#contact-form input,#contact-form textarea{background:#0f1418; border:1px solid rgba(255,255,255,.14); color:var(--ink); padding:12px; border-radius:10px; font:inherit}
#contact-form button{margin-top:10px}
.form-note{font-size:12px; color:var(--muted); margin-top:6px}

/* Footer */
.site-footer{border-top:1px solid var(--line); padding:24px 0; background:#0c0f12}
.footer-grid{display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap}
.socials a{color:var(--muted); text-decoration:none; margin-left:12px}
.socials a:hover{color:var(--ink)}

/* Responsive */
@media (max-width:820px){
  .site-nav{display:none}
  .site-nav.open{display:flex; flex-direction:column; align-items:flex-start; padding:12px 0}
  .nav-toggle{display:block}
  #contact-form .row{grid-template-columns:1fr}
}
