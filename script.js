/* ===================================
SLIDER AUTOMATICO
=================================== */

let slides = document.querySelectorAll(".slide");

let index = 0;

function cambiarSlide(){

slides.forEach(slide => {
slide.classList.remove("active");
});

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(cambiarSlide,4000);



/* ===================================
BUSCADOR DE DOCUMENTOS
=================================== */

let documentos = [

"Monografía de Carhuamayo",
"Expediente Civil del Pueblo",
"Electrificación de Carhuamayo",
"Historia del Distrito",
"Festividades Tradicionales"

];

let inputBusqueda = document.getElementById("searchInput");
let resultados = document.getElementById("results");

if(inputBusqueda){

inputBusqueda.addEventListener("keyup",function(){

let filtro = inputBusqueda.value.toLowerCase();

resultados.innerHTML = "";

documentos.forEach(function(doc){

if(doc.toLowerCase().includes(filtro)){

let item = document.createElement("p");

item.textContent = doc;

resultados.appendChild(item);

}

});

});

}



/* ===================================
VISOR DE PDF
=================================== */

function verPDF(ruta){

let visor = document.getElementById("visorPDF");

let frame = document.getElementById("pdfFrame");

visor.style.display = "flex";

frame.src = ruta;

}

function cerrarPDF(){

let visor = document.getElementById("visorPDF");

visor.style.display = "none";

}



/* ===================================
ANIMACIONES AL HACER SCROLL
=================================== */

let elementos = document.querySelectorAll(".section, .card, .community");

function animarScroll(){

let alturaPantalla = window.innerHeight;

elementos.forEach(function(el){

let posicion = el.getBoundingClientRect().top;

if(posicion < alturaPantalla - 100){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

}

window.addEventListener("scroll",animarScroll);



/* ===================================
MAPA INTERACTIVO
=================================== */

function initMap(){

let carhuamayo = {

lat: -10.916,
lng: -76.06

};

let mapa = new google.maps.Map(document.getElementById("map"),{

zoom:12,
center:carhuamayo

});

let marcador = new google.maps.Marker({

position:carhuamayo,
map:mapa,
title:"Distrito de Carhuamayo"

});

}



/* ===================================
EFECTO SUAVE AL HACER CLICK EN MENU
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});