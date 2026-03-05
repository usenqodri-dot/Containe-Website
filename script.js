document.addEventListener("DOMContentLoaded",function(){

const intro=document.getElementById("intro");
window.addEventListener("load",()=>{
setTimeout(()=>{
intro.style.opacity="0";
setTimeout(()=>intro.style.display="none",800);
},1200);
});

document.getElementById("exploreBtn").addEventListener("click",e=>{
e.preventDefault();
document.getElementById("menu").scrollIntoView({behavior:"smooth"});
});

const overlay=document.getElementById("overlay");
const modal=document.getElementById("modal");
const modalContent=document.getElementById("modalContent");
const closeModal=document.getElementById("closeModal");

function openModal(html){
modalContent.innerHTML=html;
overlay.classList.add("active");
modal.classList.add("active");
document.body.classList.add("modal-lock");
}
function closeModalFunc(){
overlay.classList.remove("active");
modal.classList.remove("active");
document.body.classList.remove("modal-lock");
}

overlay.addEventListener("click",closeModalFunc);
closeModal.addEventListener("click",closeModalFunc);

const menuData={
coffee:["Espresso","Latte","Cappuccino","V60","Spanish Latte"],
noncoffee:["Matcha Latte","Chocolatte","Red Velvet"],
tea:["Earl Grey","Thai Tea","Peach Tea"],
snack:["Waffle","Sandwich","French Fries"]
};

document.querySelectorAll(".category-card").forEach(card=>{
card.addEventListener("click",()=>{
const category=card.dataset.category;
let html=`<h2>${card.querySelector("h3").innerText}</h2><ul style="margin-top:20px;line-height:2">`;
menuData[category].forEach(item=>{
html+=`<li>${item} - Rp 25.000</li>`;
});
html+="</ul>";
openModal(html);
});
});

});
