// ======================================
// GSAP + SCROLLTRIGGER SETUP
// ======================================
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

/* ================= BURGER ================= */
      const burger = document.getElementById("hamburger");
      const navMenu = document.querySelector(".nav-main-menu");

      burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });

      /* ================= MOBILE MEGA MENU CLICK ================= */
      document.querySelectorAll(".has-mega").forEach((menu) => {
        menu.addEventListener("click", (e) => {
          if (window.innerWidth <= 767) {
            e.stopPropagation();
            menu.classList.toggle("open");
          }
        });
      });

      /* ================= UNIQUE → COL3 (MOBILE ONLY) ================= */
      document.getElementById("unique").addEventListener("click", (e) => {
        if (window.innerWidth <= 767) {
          e.stopPropagation();
          const col3 = document.getElementById("col3");
          col3.style.display =
            col3.style.display === "block" ? "none" : "block";
        }
      });

      const uniqueItem = document.getElementById("unique");
      const col3 = document.getElementById("col3");

      uniqueItem.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        col3.classList.toggle("active");
      });

      /* Optional: close when clicking outside mega menu */
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".mega-menu")) {
          col3.classList.remove("active");
        }
      });


// ======================================
// HERO SECTION (ON LOAD)
// ======================================
gsap.from(".hero-title", {
  y: 40,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".hero-subtitle", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.15,
  ease: "power3.out",
});

gsap.from(".hero-description", {
  y: 25,
  opacity: 0,
  duration: 0.7,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".hero-line", {
  scaleX: 0,
  transformOrigin: "left",
  duration: 0.6,
  delay: 0.45,
  ease: "power2.out",
});

gsap.from(".hero-image", {
  x: 60,
  opacity: 0,
  duration: 1,
  delay: 0.25,
  ease: "power3.out",
});

// ======================================
// SCROLL PIN CARDS
// ======================================
const cards = gsap.utils.toArray(".card");

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3",
    start: "top 0px",
    end: "+=2000",
    scrub: true,
    pin: true,
  },
})
  .to(cards[0], { opacity: 1, y: 0, scale: 1, duration: 4 })
  .to(cards[1], { opacity: 1, y: -20, scale: 1, duration: 4 })
  .to(cards[2], { opacity: 1, y: -40, scale: 1, duration: 4 });

// ======================================
// SECTION 1 SCROLL REVEAL
// ======================================
gsap.from(".section-left img", {
  scrollTrigger: {
    trigger: ".section1",
    start: "top 85%",
    end: "top 30%",
    scrub: true,
  },
  x: -60,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".section-right h2, .section-right p", {
  scrollTrigger: {
    trigger: ".section1",
    start: "top 85%",
    end: "top 30%",
    scrub: true,
  },
  y: 30,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});

// ======================================
// EXPAND CARDS
// ======================================
const cardex = document.querySelectorAll(".ex-card");
let activeCard = cardex[0];

gsap.set(cardex, { width: 70 });
gsap.set(activeCard, { width: 360 });
activeCard.classList.add("active");

cardex.forEach((card) => {
  card.addEventListener("click", () => {
    if (card === activeCard) {
      gsap.to(card, { width: 70, duration: 0.4, ease: "power3.out" });
      card.classList.remove("active");
      activeCard = null;
      return;
    }

    if (activeCard) {
      gsap.to(activeCard, { width: 70, duration: 0.4, ease: "power3.out" });
      activeCard.classList.remove("active");
    }

    gsap.to(card, { width: 360, duration: 0.6, ease: "power4.out" });
    card.classList.add("active");
    activeCard = card;
  });
});

// ----------  xenograft -------
