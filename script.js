/* ===============================
ELEMENT SELECTOR
=============================== */

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const exploreBtn = document.getElementById("exploreBtn");
const intro = document.getElementById("intro");


/* ===============================
INTRO LOADING
=============================== */

window.addEventListener("load",()=>{

setTimeout(()=>{
if(intro) intro.style.display="none";
},1500)

})


/* ===============================
MODAL SYSTEM
=============================== */

function openModal(html){

if(!modal || !overlay || !modalContent) return;

modalContent.innerHTML = html

overlay.classList.add("active")
modal.classList.add("active")

document.body.classList.add("modal-open")

}

function closeModalFunc(){

overlay.classList.remove("active")
modal.classList.remove("active")

document.body.classList.remove("modal-open")

}

if(overlay) overlay.addEventListener("click", closeModalFunc)
if(closeModal) closeModal.addEventListener("click", closeModalFunc)



/* ===============================
EXPLORE BUTTON
=============================== */

if(exploreBtn){

exploreBtn.addEventListener("click", function(e){

e.preventDefault()

document.getElementById("menu")
.scrollIntoView({behavior:"smooth"})

})

}


/* ===============================
MENU DATA
=============================== */

const menuData = {

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
]

}


/* ===============================
CATEGORY CLICK
=============================== */

document.querySelectorAll(".category-card").forEach(card=>{

card.addEventListener("click",()=>{

const category = card.dataset.category
const title = card.querySelector("h3").innerText

let html = `<h2>${title}</h2>`

menuData[category].forEach(item=>{

html += `
<div class="menu-popup-card" data-item="${item}">
<img src="https://source.unsplash.com/400x300/?${item},drink">
<h4>${item}</h4>
</div>
`

})

openModal(html)

})

})


/* ===============================
DETAIL POPUP
=============================== */

function showDetail(name){

openModal(`

<h2>${name}</h2>

<img src="https://source.unsplash.com/600x400/?${name},coffee">

<p>Price : Rp 25.000</p>

<ul>
<li>Premium selected ingredient</li>
<li>Fresh daily preparation</li>
<li>High quality base material</li>
</ul>

`)

}


/* ===============================
PROJECT MODAL
=============================== */

const projects = document.querySelectorAll(".project-trigger")
const projectModal = document.getElementById("projectModal")
const projectText = document.getElementById("projectText")
const closeProjectBtn = document.getElementById("closeProjectBtn")

projects.forEach(card => {

card.addEventListener("click", () => {

const type = card.dataset.project

if(type === "coffee"){

projectText.innerHTML = `
<h2>Coffee Concept</h2>
<p>Eksperimen konsep kopi modern dari Containè.</p>
`

}

if(type === "brand"){

projectText.innerHTML = `
<h2>Brand Identity</h2>
<p>Eksplorasi desain visual brand Containè.</p>
`

}

projectModal.classList.add("active")

})

})

if(closeProjectBtn){
closeProjectBtn.onclick = () =>{
projectModal.classList.remove("active")
}
}



/* ===============================
WHATSAPP POPUP
=============================== */

const openWA = document.getElementById("openWA")

if(openWA){

openWA.addEventListener("click", ()=>{

openModal(`
<h2>Contact Us</h2>
<a href="https://wa.me/" target="_blank">Open WhatsApp</a>
`)

})

}
