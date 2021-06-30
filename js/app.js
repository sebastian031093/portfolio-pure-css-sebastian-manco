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
//TODO:AQUI PUEDES DELEGAR EVENTOS
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove("show-menu");
}

navLink.forEach(elements => elements.addEventListener('click',linkAction))


/////////////////// ACCORDION SKILLS/////////////////////
//TODO:AQUI PUEDES DELEGAR EVENTOS
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    console.log('hola me diste clik');
    console.log(this.parentNode.className);
    let itemClass = this.parentNode.className;

    for (let index = 0; index < skillsContent.length; index++) {
        skillsContent[index].className = "skills__content skills__close";
    }

    if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((elemtn) =>{
    elemtn.addEventListener('click', toggleSkills)
})

///////////////////////////////////////////////////////////////////////QUALIFICATION TABS.

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach( tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        });
        target.classList.add("qualification__active");

        tabs.forEach(tab =>{
            tab.classList.remove("qualification__active");
        });

        tab.classList.add("qualification__active");
    });
});

///////////////////// SERVICES MODAL.

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
});

modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})