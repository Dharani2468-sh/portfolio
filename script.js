const cursor=document.getElementById('cursor');
  const ring=document.getElementById('cursor-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    cursor.style.left=mx+'px';cursor.style.top=my+'px';
  });
  (function tick(){
    rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    requestAnimationFrame(tick);
  })();
  window.addEventListener('scroll',()=>{
    document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60);
  });
  const reveals=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}
    });
  },{threshold:0.05,rootMargin:'0px 0px -30px 0px'});
  reveals.forEach(el=>io.observe(el));
  setTimeout(()=>reveals.forEach(el=>el.classList.add('visible')),1500);
