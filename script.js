// ==============================
// MOBILE MENU TOGGLE
// ==============================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {

toggle.addEventListener("click", () => {

nav.classList.toggle("active");

});

}



// ==============================
// SMOOTH SCROLL NAVIGATION
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

const target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior: "smooth",
block: "start"
});

}

});

});



// ==============================
// NAVBAR GLASS EFFECT ON SCROLL
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(!navbar) return;

if(window.scrollY > 50){

navbar.style.background = "rgba(20,20,20,0.55)";
navbar.style.backdropFilter = "blur(18px)";

}else{

navbar.style.background = "rgba(255,255,255,0.08)";
navbar.style.backdropFilter = "blur(12px)";

}

});



// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
".menu-card, .hero-card, .visit-card, .gallery img"
);

const revealObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("reveal-active");

}

});

},{
threshold:0.15
});

revealElements.forEach(el => {

revealObserver.observe(el);

});



// ==============================
// GALLERY HOVER INTERACTION
// ==============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

img.addEventListener("mouseenter", () => {

img.style.transform = "scale(1.05)";

});

img.addEventListener("mouseleave", () => {

img.style.transform = "scale(1)";

});

});



// ==============================
// HERO BUTTON AUTO SCROLL
// ==============================

const heroBtn = document.querySelector(".hero .glass-btn");

if(heroBtn){

heroBtn.addEventListener("click", () => {

const menu = document.querySelector("#menu");

if(menu){

menu.scrollIntoView({
behavior:"smooth"
});

}

});

}



// ==============================
// BASIC PERFORMANCE SAFETY
// ==============================

// prevent heavy scroll event execution

let ticking = false;

window.addEventListener("scroll", function(){

if(!ticking){

window.requestAnimationFrame(function(){

ticking = false;

});

ticking = true;

}

});
