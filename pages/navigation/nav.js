const navbarBtn = document.querySelector('.navbar-btn');
const collapsableContent = document.querySelector('.collapsable-content');
//explicitly stated this display of collapsableContent to be none 
//So that javascipt does not return an empty string on the first call
collapsableContent.style.display = 'none'
navbarBtn.addEventListener('click', (e)=>{
  collapsableContent.style.display === 'none' ? collapsableContent.style.display = 'block' : collapsableContent.style.display = 'none';
})