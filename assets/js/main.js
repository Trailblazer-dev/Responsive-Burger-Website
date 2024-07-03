/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
/*show menu */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*hide menu */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader =()=>{
    const header = document.getElementById('header');
    //Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >=50 ? header.classList.add('shadow-header'): header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const showscroll = ()=>{
    const scrollUp =document.getElementById('scroll-up');
    this.scrollY >=50 ?scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', showscroll);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = ()=>{
    const scrollDown =window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+']');

        if(scrollDown >sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');
        }
        else{
            sectionClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,//animation repeat
}
)
sr.reveal('.home__data,.footer')
sr.reveal('.home__dish',{delay:500,distance:'500px',origin:'bottom'})
sr.reveal('.home__burger',{delay:1200,distance:'500px',duration:1500})
sr.reveal('.home__ingredient',{delay:1600,interval:100})
sr.reveal('.recipe__img,.delivery__img,.contact__img',{origin:'left'})
sr.reveal('.recipe__data,.delivery__data,.contact__data',{origin:'right'})
sr.reveal('.popular__card',{interval:100})