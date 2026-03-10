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
],

signature:[
"Containe Signature",
"Concat Signature",
"House Blend Signature"
]

};



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

    menuData[category].forEach(menu => {

      const item = document.createElement("div");

      item.className = "menu-item glass";

      item.textContent = menu;

      item.addEventListener("click", () => {
        openDetail(menu);
      });

      menuGrid.appendChild(item);

    });

    popup.classList.remove("hidden");

  });

});



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

const detailPopup = document.querySelector(".menu-detail");

function openDetail(name) {

  const img = document.querySelector("#detail-img");
  const title = document.querySelector("#detail-name");
  const desc = document.querySelector("#detail-desc");
  const price = document.querySelector("#detail-price");

  title.textContent = name;

  desc.textContent =
    "Rich coffee flavor with smooth texture and balanced sweetness.";

  price.textContent = "Price : Rp25.000";

  img.src = "https://source.unsplash.com/600x400/?coffee";

  detailPopup.classList.remove("hidden");

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
