document.addEventListener("DOMContentLoaded",()=>{


const menuData = {

coffee:[
{name:"Espresso",price:18000,img:"espresso"},
{name:"Latte",price:25000,img:"latte"},
{name:"Cappuccino",price:25000,img:"cappuccino"}
],

noncoffee:[
{name:"Matcha Latte",price:26000,img:"matcha latte"},
{name:"Chocolate",price:26000,img:"chocolate drink"}
],

tea:[
{name:"Thai Tea",price:22000,img:"thai tea"},
{name:"Peach Tea",price:22000,img:"peach tea"}
],

snack:[
{name:"Waffle",price:25000,img:"waffle"},
{name:"Fries",price:20000,img:"french fries"}
],

signature:[
{name:"Containe Signature",price:30000,img:"special coffee"}
]

}


const menuGrid = document.querySelector("#menu-grid")
const detailPopup = document.querySelector(".menu-detail")

let currentMenu=null
let cart=[]


function loadMenu(category){

if(!menuGrid) return

menuGrid.innerHTML=""

menuData[category].forEach(menu=>{

const item=document.createElement("div")
item.className="menu-item glass"

item.innerHTML=`

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


function openDetail(menu){

const img=document.querySelector("#detail-img")
const title=document.querySelector("#detail-name")
const desc=document.querySelector("#detail-desc")
const price=document.querySelector("#detail-price")

if(!img) return

title.innerText=menu.name
desc.innerText="Signature drink with balanced sweetness"
price.innerText="Rp "+menu.price

img.src=`https://source.unsplash.com/600x400/?${menu.img}`

detailPopup.classList.remove("hidden")

currentMenu=menu

}


const closeBtn=document.querySelector(".close-detail")

if(closeBtn){

closeBtn.addEventListener("click",()=>{

detailPopup.classList.add("hidden")

})

}


const addCartBtn=document.querySelector(".add-cart")
const cartCount=document.querySelector("#cart-count")

if(addCartBtn){

addCartBtn.addEventListener("click",()=>{

if(!currentMenu) return

cart.push(currentMenu)

if(cartCount){
cartCount.innerText=cart.length
}

})

}


const categoryButtons=document.querySelectorAll(".menu-category button")

categoryButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

const category=btn.dataset.category

loadMenu(category)

})

})


const waBtn=document.querySelector("#whatsapp-order")

if(waBtn){

waBtn.addEventListener("click",()=>{

if(cart.length===0){

alert("Cart kosong")

return

}

let message="Halo saya ingin order:%0A"

cart.forEach(item=>{

message+=`- ${item.name} Rp${item.price}%0A`

})

const phone="6281234567890"

window.open(`https://wa.me/${phone}?text=${message}`)

})

}


loadMenu("coffee")

})
