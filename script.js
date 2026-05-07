// ===== PARTICLES =====
(function createParticles(){
  const c=document.getElementById('particles');
  for(let i=0;i<25;i++){
    const p=document.createElement('div');
    p.className='particle';
    p.style.left=Math.random()*100+'%';
    p.style.top=Math.random()*100+'%';
    p.style.width=p.style.height=Math.random()*3+1+'px';
    p.style.animationDuration=Math.random()*8+6+'s';
    p.style.animationDelay=Math.random()*6+'s';
    p.style.opacity=Math.random()*0.4+0.1;
    c.appendChild(p);
  }
})();

// ===== TYPED TAGLINE =====
(function(){
  const el=document.getElementById('typed-text');
  const phrases=[
    'CSE Engineer · AI/ML Specialist',
    'Builder of Intelligent Systems',
    'Full-Stack Developer · Problem Solver',
    'Turning Data into Decisions'
  ];
  let pi=0,ci=0,deleting=false;
  function type(){
    const phrase=phrases[pi];
    if(!deleting){
      el.textContent=phrase.substring(0,ci+1);
      ci++;
      if(ci===phrase.length){deleting=true;setTimeout(type,1800);return;}
      setTimeout(type,60);
    }else{
      el.textContent=phrase.substring(0,ci-1);
      ci--;
      if(ci===0){deleting=false;pi=(pi+1)%phrases.length;setTimeout(type,400);return;}
      setTimeout(type,35);
    }
  }
  type();
})();

// ===== NAVBAR SCROLL =====
const nav=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>50);
});

// ===== MOBILE NAV =====
document.querySelector('.nav-toggle').addEventListener('click',()=>{
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open'));
});

// ===== INTERSECTION OBSERVER =====
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.12});
document.querySelectorAll('section').forEach(s=>obs.observe(s));

// ===== SCROLL PROMPT =====
document.getElementById('scroll-prompt').addEventListener('click',()=>{
  document.getElementById('intro').scrollIntoView({behavior:'smooth'});
});
