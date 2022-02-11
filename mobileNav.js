const hamburger = document.querySelector('.hamburger-line')
const bodyCenter = document.querySelector('.body-center')
const mobNav = document.querySelector('.mobile-nav-menu')
const line = document.querySelectorAll('.hamburger-line .line') 
console.log(hamburger)
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('visible')
  console.log(hamburger.classList)
  line.forEach((line)=>{
    line.classList.toggle('open')
  })
  // if()
  // console.log(hamburger.classList.contains('visible'))
  if(hamburger.classList.contains('visible')){
    console.log('sike')
    mobNav.classList.add('open')
    document.querySelector('body').style.overflow = 'hidden'

  }
  else{
    mobNav.classList.remove('open')
    document.querySelector('body').style.overflow = 'auto'
  }
})
