 const faq = document.querySelector('.faq__list');
 const listBox = document.querySelectorAll('.faq__list-box');

 faq.addEventListener('click',function(event){
   const clickElem = event.target.closest('h3');
   if(clickElem){
     for(let i=0; i<listBox.length;i++){
       listBox[i].classList.remove('active');
     }
     clickElem.closest('.faq__list-box').classList.toggle('active');
   }
 });

const mobMenu = document.querySelector('.mobile-menu');
const mobList = document.querySelector('.menu__list');

mobMenu.addEventListener('click',function(event){
    mobMenu.classList.toggle('active');
    mobList.classList.toggle('active');
});
  
