import "../styles/style.scss"

const mobileMenu = document.querySelector('.mobileMenu');
const wrapper = document.querySelector('.wrapper')
const mobileMenuOpenButton = document.querySelector('.header__mobileMenu-button')
const mobileMenuCloseButton = document.querySelector('.mobileMenu__buttonClose')


mobileMenuOpenButton.addEventListener('click', (e) =>{
    e.preventDefault()
    wrapper.style.display = 'none';
    mobileMenu.style.display = 'flex';
})

mobileMenuCloseButton.addEventListener('click', (e) => {
    e.preventDefault()
    wrapper.style.display = 'block';
    mobileMenu.style.display = 'none';
})