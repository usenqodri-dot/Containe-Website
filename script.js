document.addEventListener("DOMContentLoaded", function () {

  /* ================= INTRO LOADING ================= */
  const intro = document.getElementById("intro");

  window.addEventListener("load", function () {
    setTimeout(() => {
      if (intro) {
        intro.style.opacity = "0";
        setTimeout(() => {
          intro.style.display = "none";
        }, 600);
      }
    }, 1000);
  });


  /* ================= EXPLORE BUTTON ================= */
  const exploreBtn = document.getElementById("exploreBtn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
      });
    });
  }


  /* ================= UNIVERSAL MODAL ================= */
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  function openModal(html) {
    if (!modal || !overlay) return;

    modalContent.innerHTML = html;

    overlay.classList.add("active");
    modal.classList.add("active");

    document.body.classList.add("modal-lock");
  }

  function closeModalFunc() {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    document.body.classList.remove("modal-lock");
  }

  if (overlay) overlay.addEventListener("click", closeModalFunc);
  if (closeModal) closeModal.addEventListener("click", closeModalFunc);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModalFunc();
  });


  /* ================= MENU DATA ================= */
  const menuData = {
    coffee: [
      { name: "Espresso", price: "25.000" },
      { name: "Latte", price: "28.000" },
      { name: "Cappuccino", price: "28.000" },
      { name: "V60", price: "30.000" },
      { name: "Spanish Latte", price: "30.000" }
    ],
    noncoffee: [
      { name: "Matcha Latte", price: "28.000" },
      { name: "Chocolatte", price: "27.000" },
      { name: "Red Velvet", price: "27.000" }
    ],
    tea: [
      { name: "Earl Grey", price: "23.000" },
      { name: "Thai Tea", price: "23.000" },
      { name: "Peach Tea", price: "23.000" }
    ],
    snack: [
      { name: "Waffle", price: "25.000" },
      { name: "Sandwich", price: "27.000" },
      { name: "French Fries", price: "22.000" }
    ]
  };


  /* ================= CATEGORY CLICK ================= */
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach(card => {
    card.addEventListener("click", function () {

      const category = this.dataset.category;
      if (!menuData[category]) return;

      let html = `<h2>${this.querySelector("h3").innerText}</h2>`;
      html += `<div class="menu-popup-grid">`;

      menuData[category].forEach(item => {
        html += `
          <div class="menu-popup-card" 
               data-name="${item.name}" 
               data-price="${item.price}">
            <h4>${item.name}</h4>
            <p>Rp ${item.price}</p>
          </div>
        `;
      });

      html += `</div>`;

      openModal(html);

      attachDetailListener();
    });
  });


  /* ================= DETAIL POPUP ================= */
  function attachDetailListener() {
    const popupCards = document.querySelectorAll(".menu-popup-card");

    popupCards.forEach(card => {
      card.addEventListener("click", function () {

        const name = this.dataset.name;
        const price = this.dataset.price;

        openModal(`
          <h2>${name}</h2>
          <p><strong>Price:</strong> Rp ${price}</p>
          <ul>
            <li>Premium Ingredients</li>
            <li>Fresh Brewed Daily</li>
            <li>Signature Containè Recipe</li>
          </ul>
        `);

      });
    });
  }


  /* ================= PROJECT MODAL ================= */
  const projectTriggers = document.querySelectorAll(".project-trigger");
  const projectModal = document.getElementById("projectModal");
  const projectText = document.getElementById("projectText");
  const closeProjectBtn = document.getElementById("closeProjectBtn");

  const projectData = {
    coffee: "Containè Coffee Concept focuses on modern minimalism with strong identity and premium beans.",
    brand: "Brand Identity project builds visual language around container philosophy and movement."
  };

  projectTriggers.forEach(trigger => {
    trigger.addEventListener("click", function () {
      const project = this.dataset.project;

      if (!projectData[project]) return;

      projectText.innerHTML = `<h2>${this.querySelector("h3").innerText}</h2>
                               <p>${projectData[project]}</p>`;

      projectModal.classList.add("active");
      document.body.classList.add("modal-lock");
    });
  });

  function closeProjectModal() {
    projectModal.classList.remove("active");
    document.body.classList.remove("modal-lock");
  }

  if (closeProjectBtn) closeProjectBtn.addEventListener("click", closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener("click", function (e) {
      if (e.target === projectModal) closeProjectModal();
    });
  }

});
