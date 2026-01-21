
// =======================================
// MOBILE RESPONSIVE (BURGER + OPEN MEGA)
// =======================================
const megaParents = document.querySelectorAll(".has-mega");
megaParents.forEach(parent => {
  parent.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      parent.classList.toggle("open");
    }
  });
});

const menu = document.querySelector(".nav-main-menu");
const burger = document.getElementById("hamburger");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.querySelector(".nav-bottom").classList.toggle("open");
});


const cardex = document.querySelectorAll(".ex-card");
let activeCard = cardex[0]; // first card default

gsap.set(cardex, { width: 70 });
gsap.set(activeCard, { width: 360 });
activeCard.classList.add("active");


cardex.forEach((card) => {
  card.addEventListener("click", () => {
  
    if (card === activeCard) {
      gsap.to(card, {
        width: 70,
        duration: 0.4,
        ease: "power3.out",
      });
      card.classList.remove("active");
      activeCard = null;
      return;
    }

    if (activeCard) {
      gsap.to(activeCard, {
        width: 70,
        duration: 0.4,
        ease: "power3.out",
      });
      activeCard.classList.remove("active");
    }

    gsap.to(card, {
      width: 360,
      duration: 0.6,
      ease: "power4.out",
    });

    card.classList.add("active");
    activeCard = card;
  });
});


// ---

if (window.innerWidth < 768) {
  gsap.set(cardex, { clearProps: "width" });
}
