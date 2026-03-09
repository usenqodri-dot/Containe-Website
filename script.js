/* ===============================
   ELEMENT SELECTOR
================================ */

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const exploreBtn = document.getElementById("exploreBtn");
const intro = document.getElementById("intro");

const projectModal = document.getElementById("projectModal");
const projectText = document.getElementById("projectText");
const projectContent = document.querySelector(".project-box");
const closeProjectBtn = document.getElementById("closeProjectBtn");

/* ===============================
   INTRO LOADING
================================ */

window.addEventListener("load", () => {
setTimeout(() => {
intro.style.display = "none";
}, 1500);
});

/* ===============================
   UNIVERSAL MODAL
================================ */

function openModal(html){

modalContent.innerHTML = html;

overlay.classList.add("active");
modal.classList.add("active");

document.body.classList.add("modal-open");

}

function closeModalFunc(){

overlay.classList.remove("active");
modal.classList.remove("active");

document.body.classList.remove("modal-open");

}

overlay.addEventListener("click", closeModalFunc);
closeModal.addEventListener("click", closeModalFunc);

/* ===============================
   EXPLORE BUTTON
================================ */

exploreBtn.addEventListener("click", function(e){

e.preventDefault();

document.getElementById("menu").scrollIntoView({
behavior:"smooth",
block:"start"
});

});

/* ===============================
   MENU DATA
================================ */

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

};

/* ===============================
   CATEGORY CLICK
================================ */

document.querySelectorAll(".category-card").forEach(card=>{

card.addEventListener("click",()=>{

const category = card.dataset.category;
const title = card.querySelector("h3").innerText;

let html = `
<h2 style="font-family:Cinzel;margin-bottom:25px;">${title}</h2>
<div class="menu-popup-grid">
`;

menuData[category].forEach(item=>{

html += `
<div class="menu-popup-card" data-item="${item}">
<img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"
onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'">
<h4>${item}</h4>
</div>
`;

});

html += `</div>`;

openModal(html);

/* MENU ITEM CLICK */

document.querySelectorAll(".menu-popup-card").forEach(card=>{

card.addEventListener("click", ()=>{

showDetail(card.dataset.item);

});

});

});

});

/* ===============================
   DETAIL POPUP
================================ */

function showDetail(name){

openModal(`

<h2 style="font-family:Cinzel;">${name}</h2>

<img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
onerror="this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80'">

<p style="margin-top:15px;"><strong>Price:</strong> Rp 25.000</p>

<ul style="margin-top:15px;line-height:1.8;">
<li>Premium selected ingredient</li>
<li>Fresh daily preparation</li>
<li>High quality base material</li>
</ul>

`);

}

/* ===============================
   PROJECT MODAL
================================ */

document.querySelectorAll(".project-trigger").forEach(card=>{

card.addEventListener("click", ()=>{

const type = card.dataset.project;

projectModal.classList.add("active");

if(type === "coffee"){

projectContent.style.backgroundImage =
"url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80')";

projectText.innerHTML = `
<h2>Coffee Concept</h2>
<p>
Containè melihat kopi sebagai pengalaman,
bukan sekadar minuman. Setiap cangkir
dirancang menghadirkan aroma, karakter,
dan suasana elegan.
</p>
`;

}

if(type === "brand"){

projectContent.style.backgroundImage =
"url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80')";

projectText.innerHTML = `
<h2>Brand Identity</h2>
<p>
Containè adalah brand kopi premium
dengan identitas modern dan minimalis
yang menciptakan pengalaman tak terlupakan.
</p>
`;

}

document.body.classList.add("blurred");

});

});

/* CLOSE PROJECT MODAL */

closeProjectBtn.addEventListener("click", ()=>{

projectModal.classList.remove("active");
document.body.classList.remove("blurred");

});

/* ===============================
   WHATSAPP POPUP
================================ */

document.getElementById("openWA").addEventListener("click", ()=>{

openModal(`

<div class="wa-popup">

<h2 class="wa-title">Contact Us</h2>

<div class="qr-box">
<img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://wa.me/qr/Q36BMYAWGK2TF1">
</div>

<a href="https://wa.me/qr/Q36BMYAWGK2TF1"
target="_blank"
class="wa-btn">
Open WhatsApp
</a>

</div>

`);

});
