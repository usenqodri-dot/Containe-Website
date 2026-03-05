document.addEventListener("DOMContentLoaded", function(){

/* ===============================
   ELEMENT
================================ */

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const exploreBtn = document.getElementById("exploreBtn");
const intro = document.getElementById("intro");

/* ===============================
   INTRO
================================ */

window.addEventListener("load", () => {
    setTimeout(() => {
        intro.style.opacity = "0";
        setTimeout(()=> intro.style.display = "none", 800);
    }, 1200);
});

/* ===============================
   MODAL SYSTEM
================================ */

function openModal(html){
    modalContent.innerHTML = html;

    overlay.classList.add("active");
    modal.classList.add("active");
    document.body.classList.add("modal-lock");

    modalContent.style.opacity = "0";
    modalContent.style.transform = "translateY(20px)";

    setTimeout(()=>{
        modalContent.style.transition = "0.3s ease";
        modalContent.style.opacity = "1";
        modalContent.style.transform = "translateY(0)";
    },10);
}

function closeModalFunc(){

    modalContent.style.opacity = "0";
    modalContent.style.transform = "translateY(10px)";

    setTimeout(()=>{
        overlay.classList.remove("active");
        modal.classList.remove("active");
        document.body.classList.remove("modal-lock");
    },200);
}

overlay.addEventListener("click", closeModalFunc);
closeModal.addEventListener("click", closeModalFunc);

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeModalFunc();
    }
});

/* ===============================
   EXPLORE BUTTON
================================ */

exploreBtn.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("menu").scrollIntoView({
        behavior:"smooth"
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
   CATEGORY CLICK (FIXED)
================================ */

document.querySelectorAll(".category-card").forEach(card=>{
    card.addEventListener("click", ()=>{

        const category = card.dataset.category;
        const title = card.querySelector("h3").innerText;

        let html = `
            <h2 style="font-family:Cinzel;margin-bottom:25px;">${title}</h2>
            <div class="menu-popup-grid">
        `;

        menuData[category].forEach(item=>{
            html += `
                <div class="menu-popup-card" data-item="${item}">
                    <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80">
                    <h4>${item}</h4>
                </div>
            `;
        });

        html += `</div>`;

        openModal(html);

        /* Add detail click */
        document.querySelectorAll(".menu-popup-card").forEach(menuCard=>{
            menuCard.addEventListener("click", ()=>{
                showDetail(menuCard.dataset.item);
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

        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80">

        <p style="margin-top:15px;"><strong>Price:</strong> Rp 25.000</p>

        <ul style="margin-top:15px;line-height:1.8;">
            <li>Premium selected ingredient</li>
            <li>Fresh daily preparation</li>
            <li>High quality base material</li>
        </ul>
    `);
}

});
