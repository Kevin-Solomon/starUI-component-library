const openModal = document.querySelector('#open-modal');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
console.log(modal);
openModal.addEventListener('click', ()=>{
  modalContainer.classList.add('show-container');
  modal.classList.add('show');
})
document.addEventListener('click' , e => {
  if(e.target.id === 'close-modal'){
    modalContainer.classList.remove('show-container');
  }
})