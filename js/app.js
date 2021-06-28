// MENU SHOW Y HIDDEN

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// MENU SHOW
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        console.log('Hola');
        navMenu.classList.add('show-menu')
    })
}

//MANU HIDDEN
// validate if constat exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu");
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove("show-menu");
}

navLink.forEach(elements => elements.addEventListener('click',linkAction))