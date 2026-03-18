document.addEventListener("DOMContentLoaded", function(){

/* ===================================
SLIDER AUTOMATICO
=================================== */
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function cambiarSlide(){
    if(slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex++;
    if(slideIndex >= slides.length) slideIndex = 0;
    slides[slideIndex].classList.add("active");
}
setInterval(cambiarSlide, 5000);

/* ===================================
ANIMACIONES SCROLL
=================================== */
const revealElements = document.querySelectorAll(".section, .communities, .card");

function animarScroll(){
    const triggerBottom = window.innerHeight * 0.85; 
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        
        if(elementTop < triggerBottom){
            el.classList.add("active");
        }
    });
}

revealElements.forEach(el => {
    el.classList.add("reveal");
});

window.addEventListener("scroll", animarScroll);
animarScroll();

/* ===================================
MENU HAMBURGUESA (FIX REAL)
=================================== */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if(toggle && menu){
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

/* ===================================
HEADER SCROLL
=================================== */
const header = document.getElementById("header");

if(header){
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

});
