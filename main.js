window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
}

/*=======================  TOGGLE NAVIGATION  =======================*/

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

/*=======================  SCROLL EFFECT  =======================*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  const shadowNavOnScroll = window.scrollY >= navHeight

  shadowNavOnScroll
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
})
/*=======================  SWIPER TESTIMONIALS  =======================*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*=======================  SCROLL REVEAL  =======================*/

ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 800,
  reset: true
}).reveal(`
#home, #home img, #home .title, #home p, #home .button,
#about, #about .img, #about .title, #about p,
#services, #services header, #services header p, #services .card,
#testimonials header, #testimonials .testimonials,
#contact, #contact .text, #contact .button, #contact .links`)

/*=======================  BUTTON SCROLL TO TOP  =======================*/
function showBackToTopButtonOnScroll() {
  const backToTopButton = document.getElementById('backToTopButton')

  scrollY > 0
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show')
}
