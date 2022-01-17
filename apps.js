const openNav = document.querySelector('.icon1');
const closeNav = document.querySelector('.fermer');
const menu = document.querySelector('.menu');

const  positionMenu = menu.getBoundingClientRect().left;

openNav.addEventListener('click', () => {
    if(positionMenu < 0 ){
        menu.classList.add('watch')
    }
})

closeNav.addEventListener('click', () => {
    if(positionMenu < 0 ){
        menu.classList.remove('watch')
    }
})