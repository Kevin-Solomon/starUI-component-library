const cardCloseBtn = document.querySelector('.card-dismiss-btn');
cardCloseBtn.addEventListener('click', (e)=>{
  const parentCard = e.target.parentNode;
  parentCard.style.display = 'none';
})