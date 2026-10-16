
document.addEventListener('DOMContentLoaded',()=>{
 const search=document.querySelector('#project-search');
 const category=document.querySelector('#project-category');
 const cards=[...document.querySelectorAll('[data-project-card]')];
 function filter(){
  const q=(search?.value||'').toLowerCase().trim();
  const c=category?.value||'';
  cards.forEach(card=>{
   const matchesText=(card.dataset.search||'').includes(q);
   const matchesCategory=!c||card.dataset.category===c;
   card.hidden=!(matchesText&&matchesCategory);
  });
 }
 search?.addEventListener('input',filter);
 category?.addEventListener('change',filter);
});
