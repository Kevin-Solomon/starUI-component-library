const navbarBtn = document.querySelector('.navbar-btn');
const collapsableContent = document.querySelector('.collapsable-content');
console.log(collapsableContent)
navbarBtn.addEventListener('click', ()=>{
  if(collapsableContent.style.display === 'none'){
    collapsableContent.style.display = 'block'
  }
  else{
    collapsableContent.style.display = 'none'
  }
})