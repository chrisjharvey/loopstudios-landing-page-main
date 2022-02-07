console.log('hello world')

const navbarToggler = document.querySelector('.navbar-toggler')
const navbarMenu = document.querySelector('#nav-bar ul')
const navLinks = document.querySelectorAll('#nav-bar a')
const nav = document.querySelector('#nav-bar')

navbarToggler.addEventListener('click', navbarTogglerClick)

function navbarTogglerClick() {
  navbarToggler.classList.toggle('open-navbar-toggler')
  navbarMenu.classList.toggle('open')
}

navLinks.forEach((elem) => elem.addEventListener('click', navbarLinkClick))

function navbarLinkClick() {
  if (navbarMenu.classList.contains('open')) {
    navbarToggler.click()
  }
}
