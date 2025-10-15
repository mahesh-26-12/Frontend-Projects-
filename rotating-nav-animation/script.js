// Get required elements
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const backToTop = document.getElementById('backToTop');

//when hamburger icon is clicked ->  rotate and show nav 
open.addEventListener('click',() => container.classList.add('show-nav'))

//when close(x) icon is clicked ->  rotate back and hide nav 
close.addEventListener('click',() => container.classList.remove('show-nav'))

backToTop.addEventListener('click',()=>{
    window.scrollTo({ top:0, behavior: 'smooth'});
})