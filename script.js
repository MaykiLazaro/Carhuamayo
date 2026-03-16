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
ANIMACIONES AL HACER SCROLL (MEJORADO)
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

window.onload = () => {
    animarScroll();
};

/* ===================================
LOGICA DE NAVEGACION
=================================== */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        const href = this.getAttribute("href");
        if (href && href.includes(".html")) {
            return; 
        }
        if(href && href.startsWith("#") && href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});
