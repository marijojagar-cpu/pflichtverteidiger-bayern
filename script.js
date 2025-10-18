document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent='2025';
  const btn=document.querySelector('.menu-toggle');
  const nav=document.getElementById('nav');
  if(btn && nav) btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('show');
    btn.setAttribute('aria-expanded',String(open));
  });
});
