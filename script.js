// Footer year
window.addEventListener('DOMContentLoaded', ()=>{
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
});

// Shuffle helper
function _shuffle(arr){
  for (let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

// Main slideshow
window.addEventListener('DOMContentLoaded', ()=>{
  const COUNT = 60;
  const PHOTOS = Array.from({length: COUNT}, (_, i)=>`assets/gallery/photo${String(i+1).padStart(2,'0')}.jpg`);
  const DURATION = 5000;
  const a = document.getElementById('imgA');
  const b = document.getElementById('imgB');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pauseBtn= document.getElementById('pauseBtn');
  if (!a||!b||!pauseBtn) return;

  let order=_shuffle(PHOTOS.slice());
  let idx=0, playing=true, timer=null, showingA=true;

  const preload = (i)=>{ const im=new Image(); im.src = order[(i+order.length)%order.length]; };
  const swap = (src)=>{
    const next=showingA?b:a; const prev=showingA?a:b;
    next.src=src;
    next.onload=()=>{ prev.classList.remove('show'); next.classList.add('show'); showingA=!showingA; }
  };
  const go=(step=1)=>{
    idx=(idx+step+order.length)%order.length;
    if(idx===0 && step===1) order=_shuffle(PHOTOS.slice());
    swap(order[idx]); preload(idx+1);
  };
  const play=()=>{ clearInterval(timer); timer=setInterval(()=>go(1), DURATION); playing=true; pauseBtn.textContent='Pause'; };
  const pause=()=>{ clearInterval(timer); playing=false; pauseBtn.textContent='Play'; };

  pauseBtn.addEventListener('click', ()=> playing? pause(): play());
  nextBtn.addEventListener('click', ()=>{ go(1); if(playing) play(); });
  prevBtn.addEventListener('click', ()=>{ go(-1); if(playing) play(); });

  window.addEventListener('keydown', (e)=>{
    if(e.key==='ArrowRight'){ go(1); if(playing) play(); }
    if(e.key==='ArrowLeft'){  go(-1); if(playing) play(); }
    if(e.code==='Space'){ e.preventDefault(); (playing? pause(): play()); }
  });

  a.src=order[0]; a.classList.add('show'); preload(1); play();
});

// Secondary slideshow
window.addEventListener('DOMContentLoaded', ()=>{
  const COUNT = 60;
  const PHOTOS = Array.from({length: COUNT}, (_, i)=>`assets/gallery/photo${String(i+1).padStart(2,'0')}.jpg`);
  const DURATION = 4200;
  const c=document.getElementById('imgC');
  const d=document.getElementById('imgD');
  const box=document.getElementById('slideshow2');
  if(!c||!d||!box) return;

  let order=_shuffle(PHOTOS.slice());
  let idx=0, showing=true;

  const step=()=>{
    idx=(idx+1)%order.length;
    const next=showing?d:c;
    const prev=showing?c:d;
    next.src=order[idx];
    next.onload=()=>{ prev.classList.remove('show'); next.classList.add('show'); showing=!showing; }
  };
  c.src=order[0]; c.classList.add('show');
  setInterval(step, DURATION);
});
