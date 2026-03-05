document.addEventListener("DOMContentLoaded", function(){

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

/* ========== UNIVERSAL MODAL ========== */

function openModal(html){
modalContent.innerHTML = html;
overlay.classList.add("active");
modal.classList.add("active");
}

function closeModalFunc(){
overlay.classList.remove("active");
modal.classList.remove("active");
}

overlay.addEventListener("click", closeModalFunc);
closeModal.addEventListener("click", closeModalFunc);

/* ========== FIX EXPLORE BUTTON ========== */

document.getElementById("exploreBtn").addEventListener("click", function(e){
e.preventDefault();
document.getElementById("menu").scrollIntoView({
behavior:"smooth"
});
});

/* ========== INTRO FIX ========== */

window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("intro").style.display="none";
},1500);
});

/* ========== MENU DATA ========== */

const menuData = {

coffee:[
"Espresso","Ristretto","Sanger","Latte","Black Coffee","V60",
"Japanese","Cappuccino","Honey Latte","Coconut Latte",
"Hezelnut Latte","Vanilla Latte","Caramel Latte",
"Tiramisu Mocha Latte","Butterscotch Aren Latte",
"Pistachio Latte","Coffemalatte","Mocha Latte","Spanish Latte"
],

noncoffee:[
"Matcha","Matcha Latte","Matcha Milk Shake","Chocolatte",
"Chocolate Milk Shake","Red Velvet","Ice Shaken Lemon Tea",
"Fresh Lemonade","Hezelnut Coco","Fresh Peach",
"Vanilla Milk Shake","Butterscotch Sea Salt Crumble","Baby Chinno"
],

tea:[
"Lavender Tea","Earl Gray Tea","Kyoto Japanese Tea",
"Black Tea","Papermint Tea","Thai Tea",
"Hezelnut Tea","Peach Tea"
],

snack:[
"Waffle","Sosis","Chicken Nuggets","Mixed Platter",
"Sandwich","French Fries"
]

};

/* ========== CATEGORY CLICK ========== */

document.querySelectorAll(".category-card").forEach(card=>{
card.addEventListener("click",()=>{

const category = card.dataset.category;

let html = `
<h2 style="font-family:Cinzel;margin-bottom:25px;">
${card.innerText}
</h2>
<div class="menu-popup-grid">
`;

menuData[category].forEach(item=>{
html += `
<div class="menu-popup-card" onclick="showDetail('${item}')">
<img src="https://source.unsplash.com/400x300/?${item.replace(/\s/g,'-')},drink">
<h4>${item}</h4>
</div>
`;
});

html += "</div>";

openModal(html);

});
});

html += "</ul>";

openModal(html);
});

/* ========== DETAIL POPUP ========== */

window.showDetail = function(name){

openModal(`
<h2 style="font-family:Cinzel;">${name}</h2>

<img src="https://source.unsplash.com/600x400/?${name.replace(/\s/g,'-')},coffee">

<p style="margin-top:15px;"><strong>Price:</strong> Rp 5.000</p>

<ul style="margin-top:15px;line-height:1.8;">
<li>Premium selected ingredient</li>
<li>Fresh daily preparation</li>
<li>High quality base material</li>
</ul>
`);

};
function openProject(type){

  const modal = document.getElementById("projectModal");
  const content = document.getElementById("projectContent");
  const text = document.getElementById("projectText");

  modal.classList.add("active");

  if(type === "coffee"){
    content.style.backgroundImage = 
    "url(https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200)";
    
    text.innerHTML = `
      <h2>Coffee Concept</h2>
      <p>
      Containè melihat kopi sebagai pengalaman, bukan sekadar minuman.
      Setiap cangkir dirancang menghadirkan aroma, karakter,
      dan suasana yang elegan.
      </p>
    `;
  }

  if(type === "brand"){
    content.style.backgroundImage =
    "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200)";
    
    text.innerHTML = `
      <h2>Brand Identity</h2>
      <p>
      Containè adalah brand kopi premium dengan identitas modern,
      minimalis, dan pengalaman yang tak terlupakan.
      </p>
    `;
  }
}

function closeProject(){
  document.getElementById("projectModal").classList.remove("active");
}

/* ========== WHATSAPP ========== */

document.getElementById("openWA").addEventListener("click",()=>{
openModal(`
<h2 style="font-family:Cinzel;">Contact Us</h2>
<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/qr/Q36BMYAWGK2TF1">
<a href="https://wa.me/qr/Q36BMYAWGK2TF1" target="_blank"
style="display:inline-block;margin-top:15px;padding:10px 20px;
background:#c6a15b;color:black;border-radius:20px;text-decoration:none;">
Open WhatsApp
</a>
`);
});
function closeProject(){
  document.body.classList.remove("blurred");
  document.getElementById("projectModal").classList.remove("show");
}
