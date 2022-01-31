const openToast = document.querySelector('#open-toast');
const toast = document.querySelector('.toast')


const clearToast = (timeout)=>{
  toast.classList.remove('show');
  clearTimeout(timeout)
}
openToast.addEventListener('click',()=>{
  console.log('sike')
  toast.classList.add('show');
  setTimeout(clearToast,3000)
})

