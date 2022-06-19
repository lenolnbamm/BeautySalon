const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  const shadowNavOnScroll = window.scrollY >= navHeight
  
  shadowNavOnScroll
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
})

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 800
}).reveal(`
#home, 
#home img, 
#home .title, 
#home p,
#home .button,
#about,
#about .img,
#about .title,
#about p,
#services,
#services header,
#services header p,
#services .card,
#testemonials,
#testemonials .title,
#testemonials p,
#contact,
#contact .title,
#contact .button`)
