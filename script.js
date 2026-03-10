document.addEventListener("DOMContentLoaded", function () {


// ===============================
// MOBILE MENU TOGGLE
// ===============================

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}



// ===============================
// SMOOTH SCROLL NAV
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});



// ===============================
// NAVBAR BLUR ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(20,20,20,0.6)";
    navbar.style.backdropFilter = "blur(18px)";

  } else {

    navbar.style.background = "rgba(255,255,255,0.08)";
    navbar.style.backdropFilter = "blur(12px)";

  }

});



// ===============================
// EXPLORE MENU BUTTON
// ===============================

const exploreBtn = document.querySelector(".explore-btn");

if (exploreBtn) {

  exploreBtn.addEventListener("click", () => {

    const menuSection = document.querySelector("#menu");

    if (menuSection) {

      menuSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}



// ===============================
// MENU DATA
// ===============================

const menuData={

coffee:[
{name:"Espresso",price:18000,img:"espresso"},
{name:"Latte",price:25000,img:"latte"},
{name:"Cappuccino",price:25000,img:"cappuccino"},
{name:"V60",price:28000,img:"pour-over"},
{name:"Spanish Latte",price:28000,img:"spanish latte"}
],

noncoffee:[
{name:"Matcha Latte",price:26000,img:"matcha latte"},
{name:"Chocolate Milk Shake",price:27000,img:"chocolate milkshake"},
{name:"Red Velvet",price:26000,img:"red velvet drink"}
],

tea:[
{name:"Earl Grey Tea",price:20000,img:"earl grey tea"},
{name:"Thai Tea",price:22000,img:"thai tea"},
{name:"Peach Tea",price:22000,img:"peach tea"}
],

snack:[
{name:"Waffle",price:25000,img:"waffle"},
{name:"French Fries",price:20000,img:"french fries"},
{name:"Chicken Nuggets",price:22000,img:"nuggets"}
],

signature:[
{name:"Containe Signature",price:30000,img:"special coffee"},
{name:"Concat Signature",price:30000,img:"coffee latte"}
]

}

// ===============================
// POPUP MENU CATEGORY
// ===============================

const popup = document.querySelector(".menu-popup");
const menuGrid = document.querySelector("#menu-grid");
const popupTitle = document.querySelector("#popup-title");

document.querySelectorAll(".category-card").forEach(card => {

  card.addEventListener("click", () => {

    const category = card.dataset.category;

    if (!menuData[category]) return;

    popupTitle.textContent = card.textContent;

    menuGrid.innerHTML = "";

    menuData[category].forEach(menu=>{

const item=document.createElement("div")
item.className="menu-item glass"

const img=document.createElement("img")
img.src=`https://source.unsplash.com/400x300/?${menu.img}`

const name=document.createElement("h4")
name.innerText=menu.name

const price=document.createElement("p")
price.innerText="Rp "+menu.price

item.appendChild(img)
item.appendChild(name)
item.appendChild(price)

item.addEventListener("click",()=>{
openDetail(menu)
})

menuGrid.appendChild(item)

})

// ===============================
// CLOSE POPUP
// ===============================

const closePopup = document.querySelector(".close-popup");

if (closePopup) {

  closePopup.addEventListener("click", () => {

    popup.classList.add("hidden");

  });

}



// ===============================
// MENU DETAIL POPUP
// ===============================

let currentMenu = null;

function openDetail(menu){

const img = document.querySelector("#detail-img")
const title = document.querySelector("#detail-name")
const desc = document.querySelector("#detail-desc")
const price = document.querySelector("#detail-price")

title.innerText = menu.name

desc.innerText =
"Signature drink with balanced sweetness and smooth texture."

price.innerText = "Rp " + menu.price

img.src = `https://source.unsplash.com/600x400/?${menu.img}`

detailPopup.classList.remove("hidden")

currentMenu = menu

}


// ===============================
// CLOSE DETAIL
// ===============================

const closeDetail = document.querySelector(".close-detail");

if (closeDetail) {

  closeDetail.addEventListener("click", () => {

    detailPopup.classList.add("hidden");

  });

}



// ===============================
// GALLERY ZOOM
// ===============================

document.querySelectorAll(".gallery-grid img").forEach(img => {

  img.addEventListener("click", () => {

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "999";

    const big = document.createElement("img");

    big.src = img.src;
    big.style.maxWidth = "80%";
    big.style.borderRadius = "14px";

    overlay.appendChild(big);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);

  });

});


});
  let cart=[]
let currentMenu=null

const cartCount=document.querySelector("#cart-count")

document.querySelector(".detail-content button")
.addEventListener("click",()=>{

if(!currentMenu) return

cart.push(currentMenu)

cartCount.innerText=cart.length

})
  const waBtn=document.querySelector("#whatsapp-order")

waBtn.addEventListener("click",()=>{

if(cart.length===0){

alert("Cart kosong")

return

}

let message="Halo saya ingin order:%0A"

cart.forEach(item=>{
message+=`- ${item.name} Rp${item.price}%0A`
})

const phone="081770732197"

window.open(`https://wa.me/${phone}?text=${message}`)

})

