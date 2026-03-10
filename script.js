document.addEventListener("DOMContentLoaded", function(){

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar")

if(navbar){

window.addEventListener("scroll", ()=>{

if(window.scrollY > 50){
navbar.classList.add("scrolled")
}else{
navbar.classList.remove("scrolled")
}

})

}


// ===============================
// MENU DATA
// ===============================

const menuData = {

coffee:[
{name:"Espresso",price:18000,img:"espresso"},
{name:"Latte",price:25000,img:"latte"},
{name:"Cappuccino",price:25000,img:"cappuccino"},
{name:"Americano",price:22000,img:"americano"},
{name:"V60",price:28000,img:"pour over coffee"}
],

noncoffee:[
{name:"Matcha Latte",price:26000,img:"matcha latte"},
{name:"Chocolate",price:26000,img:"chocolate drink"},
{name:"Red Velvet",price:26000,img:"red velvet latte"}
],

tea:[
{name:"Thai Tea",price:22000,img:"thai tea"},
{name:"Peach Tea",price:22000,img:"peach tea"},
{name:"Earl Grey",price:22000,img:"earl grey tea"}
],

snack:[
{name:"French Fries",price:20000,img:"french fries"},
{name:"Waffle",price:25000,img:"waffle"},
{name:"Nuggets",price:22000,img:"chicken nuggets"}
],

signature:[
{name:"Containe Signature",price:30000,img:"special coffee"},
{name:"Concat Signature",price:30000,img:"coffee latte"}
]

}


// ===============================
// MENU GRID
// ===============================

const menuGrid = document.querySelector("#menu-grid")

function loadMenu(category){

if(!menuGrid) return

menuGrid.innerHTML=""

menuData[category].forEach(menu=>{

const item = document.createElement("div")
item.className="menu-item glass"

const img = document.createElement("img")
img.src=`https://source.unsplash.com/400x300/?${menu.img}`

const name = document.createElement("h4")
name.innerText=menu.name

const price = document.createElement("p")
price.innerText="Rp "+menu.price

item.appendChild(img)
item.appendChild(name)
item.appendChild(price)

item.addEventListener("click",()=>{

openDetail(menu)

})

menuGrid.appendChild(item)

})

}


// ===============================
// CATEGORY BUTTON
// ===============================

const categoryButtons = document.querySelectorAll(".menu-category button")

if(categoryButtons){

categoryButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

const category = btn.dataset.category

loadMenu(category)

})

})

}


// ===============================
// MENU DETAIL POPUP
// ===============================

const detailPopup = document.querySelector(".menu-detail")

let currentMenu = null

function openDetail(menu){

const img = document.querySelector("#detail-img")
const title = document.querySelector("#detail-name")
const desc = document.querySelector("#detail-desc")
const price = document.querySelector("#detail-price")

if(!img || !title || !desc || !price) return

title.innerText = menu.name

desc.innerText =
"Signature drink with balanced sweetness and smooth texture."

price.innerText = "Rp "+menu.price

img.src=`https://source.unsplash.com/600x400/?${menu.img}`

if(detailPopup){
detailPopup.classList.remove("hidden")
}

currentMenu = menu

}


// ===============================
// CLOSE POPUP
// ===============================

const closeBtn = document.querySelector(".close-detail")

if(closeBtn){

closeBtn.addEventListener("click",()=>{

if(detailPopup){
detailPopup.classList.add("hidden")
}

})

}


// ===============================
// SHOPPING CART
// ===============================

let cart = []

const cartCount = document.querySelector("#cart-count")

const addCartBtn = document.querySelector(".add-cart")

if(addCartBtn){

addCartBtn.addEventListener("click",()=>{

if(!currentMenu) return

cart.push(currentMenu)

if(cartCount){
cartCount.innerText = cart.length
}

})

}


// ===============================
// WHATSAPP ORDER
// ===============================

const waBtn = document.querySelector("#whatsapp-order")

if(waBtn){

waBtn.addEventListener("click",()=>{

if(cart.length === 0){

alert("Cart kosong")

return

}

let message = "Halo saya ingin order:%0A"

cart.forEach(item=>{

message += `- ${item.name} Rp${item.price}%0A`

})

const phone = "6281234567890"

window.open(`https://wa.me/${phone}?text=${message}`)

})

}


// ===============================
// DEFAULT MENU
// ===============================

loadMenu("coffee")

})
