const openToast = document.querySelector('#open-toast');
const toast = document.querySelector('.toast')
const clearToast = ()=>{
  toast.classList.remove('show');
}
openToast.addEventListener('click',()=>{
  toast.classList.add('show');
  setTimeout(clearToast,3000)
})

