const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.card, .btn').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    el.style.transform = `translate(${x*0.03}px, ${y*0.03}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});