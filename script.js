document.addEventListener("DOMContentLoaded", () => {

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

};


// ELEMENT
const menuGrid = document.querySelector("#menu-grid")
const popup = document.querySelector(".menu-detail")
const closeBtn = document.querySelector(".close-detail")

let currentMenu = null


// LOAD MENU
function loadMenu(category){

if(!menuGrid) return

menuGrid.innerHTML = ""

menuData[category].forEach(menu=>{

const item = document.createElement("div")
item.className = "menu-item glass"

item.innerHTML = `
<img src="https://source.unsplash.com/400x300/?${menu.img}">
<h4>${menu.name}</h4>
<p>Rp ${menu.price}</p>
`

item.addEventListener("click",()=>{
openDetail(menu)
})

menuGrid.appendChild(item)

})

}


// OPEN DETAIL POPUP
function openDetail(menu){

if(!popup) return

const img = document.querySelector("#detail-img")
const title = document.querySelector("#detail-name")
const desc = document.querySelector("#detail-desc")
const price = document.querySelector("#detail-price")

if(!img) return

title.textContent = menu.name
desc.textContent = "Signature drink with balanced sweetness"
price.textContent = "Rp " + menu.price

img.src = `https://source.unsplash.com/600x400/?${menu.img}`

popup.classList.remove("hidden")

currentMenu = menu

}


// CLOSE POPUP
if(closeBtn){

closeBtn.addEventListener("click",()=>{

popup.classList.add("hidden")

})

}


// CATEGORY BUTTON
const categoryButtons = document.querySelectorAll("[data-category]")

categoryButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

const category = btn.dataset.category

loadMenu(category)

})

})


// DEFAULT MENU
loadMenu("coffee")

})
