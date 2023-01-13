const navbarMenu = document.querySelector('.navbar__menu')

document.addEventListener('click',(e) => {
   console.log(e)

 if (e.target.closest('.navbar__toggle')) {
  navbarMenu.classList.toggle('show--menu')
   console.log(e.target)
 }
 if (e.target.closest('.navbar__close')) {
  navbarMenu.classList.remove('show--menu')
   console.log(e.target)
 }
})

