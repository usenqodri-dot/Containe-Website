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
// explore menu scroll

document.querySelector(".explore-btn")
.addEventListener("click",()=>{

document.querySelector("#menu")
.scrollIntoView({behavior:"smooth"})

})



const menuData={

coffee:[
"Espresso","Ristretto","Sanger","Latte","Black Coffee","V60",
"Japanese","Cappuccino","Honey Latte","Coconut Latte",
"Hazelnut Latte","Vanilla Latte","Caramel Latte",
"Tiramisu Mocha Latte","Butterscotch Aren Latte",
"Pistachio Latte","Coffemalatte","Mocha Latte","Spanish Latte"
],

noncoffee:[
"Matcha","Matcha Latte","Matcha Milk Shake","Chocolatte",
"Chocolate Milk Shake","Red Velvet","Ice Shaken Lemon Tea",
"Fresh Lemonade","Hazelnut Coco","Fresh Peach",
"Vanilla Milk Shake","Butterscotch Sea Salt Crumble","Baby Chinno"
],

tea:[
"Lavender Tea","Earl Grey Tea","Kyoto Japanese Tea",
"Black Tea","Peppermint Tea","Thai Tea",
"Hazelnut Tea","Peach Tea"
],

snack:[
"Waffle","Sosis","Chicken Nuggets","Mixed Platter",
"Sandwich","French Fries"
],

signature:[
"Containe Signature","Concat Signature","Special House Blend"
]

}



const popup=document.querySelector(".menu-popup")
const grid=document.querySelector("#menu-grid")
const title=document.querySelector("#popup-title")



document.querySelectorAll(".category-card")
.forEach(card=>{

card.addEventListener("click",()=>{

let cat=card.dataset.category

title.textContent=card.textContent

grid.innerHTML=""

menuData[cat].forEach(item=>{

let div=document.createElement("div")

div.className="menu-item"

div.textContent=item

div.onclick=()=>openDetail(item)

grid.appendChild(div)

})

popup.classList.remove("hidden")

})

})



document.querySelector(".close-popup")
.onclick=()=>popup.classList.add("hidden")



const detail=document.querySelector(".menu-detail")

function openDetail(name){

document.querySelector("#detail-name").textContent=name

document.querySelector("#detail-desc")
.textContent="Rich flavor with balanced sweetness."

document.querySelector("#detail-price")
.textContent="Price : Rp25.000"

document.querySelector("#detail-img").src=
"https://source.unsplash.com/400x300/?coffee"

detail.classList.remove("hidden")

}



document.querySelector(".close-detail")
.onclick=()=>detail.classList.add("hidden")



// gallery zoom

document.querySelectorAll(".gallery-grid img")
.forEach(img=>{

img.addEventListener("click",()=>{

let overlay=document.createElement("div")

overlay.style.position="fixed"
overlay.style.top="0"
overlay.style.left="0"
overlay.style.width="100%"
overlay.style.height="100%"
overlay.style.background="rgba(0,0,0,0.8)"
overlay.style.display="flex"
overlay.style.justifyContent="center"
overlay.style.alignItems="center"

let big=document.createElement("img")

big.src=img.src
big.style.maxWidth="80%"
big.style.borderRadius="12px"

overlay.appendChild(big)

overlay.onclick=()=>overlay.remove()

document.body.appendChild(overlay)

})

})

