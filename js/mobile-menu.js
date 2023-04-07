const menuMobile = document.querySelector('.mobile-menu')
const navList = document.querySelector('header ul')

function openMenu () {
    navList.classList.toggle('active')
    menuMobile.classList.toggle('active')
}

menuMobile.addEventListener('click', () => openMenu())