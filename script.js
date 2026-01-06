// ======================================
// GSAP + SCROLLTRIGGER SETUP
// ======================================
gsap.registerPlugin(ScrollTrigger);

// Performance tuning
ScrollTrigger.config({
  ignoreMobileResize: true,
});

// ======================================
// HEADER ANIMATION (ON LOAD)
// ======================================
gsap.from(".logo img", {
  y: -20,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
});

gsap.from(".main-menu > li", {
  y: -15,
  opacity: 0,
  duration: 0.6,
  stagger: 0.08,
  delay: 0.2,
  ease: "power3.out",
});

// ======================================
// MEGA MENU (HOVER IN / OUT)
// ======================================
document.querySelectorAll(".has-mega").forEach((menu) => {
  const mega = menu.querySelector(".mega-menu");
  if (!mega) return;

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power2.out" },
  });

  tl.to(mega, {
    opacity: 1,
    y: 0,
    duration: 0.35,
    pointerEvents: "auto",
  }).from(
    mega.querySelectorAll(".mega-column, .mega-images img"),
    {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.06,
    },
    "-=0.2"
  );

  menu.addEventListener("mouseenter", () => {
    tl.play();
  });

  menu.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});

// ======================================
// HERO SECTION (PLAY ONCE)
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

const cards = gsap.utils.toArray(".card");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-3",
      start: "top 0px",
      end: "+=2000",
      scrub: true,
      pin: true,
    },
  })
  .to(cards[0], {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 4,
  })
  .to(cards[1], {
    opacity: 1,
    y: -20,
    scale: 1,
    duration: 4,
  })
  .to(cards[2], {
    opacity: 1,
    y: -40,
    scale: 1,
    duration: 4,
  });

// ======================================
// SECTION 1 (SCROLL UP & DOWN ANIMATION)
// ======================================
gsap.from(".section-left img", {
  scrollTrigger: {
    trigger: ".section1",
    start: "top 85%",
    end: "top 30%",
    scrub: true, // 🔑 smooth both directions
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
    scrub: true, // 🔑 smooth both directions
  },
  y: 30,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
});
//

const cardex = document.querySelectorAll(".ex-card");
let activeCard = cardex[0]; // first card default

// INITIAL STATE (first card expanded)
gsap.set(cardex, { width: 70 });
gsap.set(activeCard, { width: 360 });
activeCard.classList.add("active");

// click logic
cardex.forEach((card) => {
  card.addEventListener("click", () => {
    // 👉 TOGGLE: clicking same card closes it
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

    // 👉 close previous active card
    if (activeCard) {
      gsap.to(activeCard, {
        width: 70,
        duration: 0.4,
        ease: "power3.out",
      });
      activeCard.classList.remove("active");
    }

    // 👉 expand clicked card
    gsap.to(card, {
      width: 360,
      duration: 0.6,
      ease: "power4.out",
    });

    card.classList.add("active");
    activeCard = card;
  });
});

const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const col3 = document.getElementById("col3");
const unique = document.getElementById("unique");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

/* IMAGE MAP */
const imageMap = {
  heritage: ["./assets/imgs/heritage1.jpg", "./assets/imgs/heritage2.jpg"],
  unique: ["./assets/imgs/unique1.jpg", "./assets/imgs/unique2.jpg"],
  custom: ["./assets/imgs/custom1.jpg", "./assets/imgs/custom2.jpg"],
  guided: ["./assets/imgs/guided1.jpg", "./assets/imgs/guided2.jpg"],
  kits: ["./assets/imgs/kits1.jpg", "./assets/imgs/kits2.jpg"],

  "duravit-ev": [
    "./assets/imgs/implants/ev1.jpg",
    "./assets/imgs/implants/ev2.jpg",
  ],
  "duravit-3p": [
    "./assets/imgs/implants/3p1.jpg",
    "./assets/imgs/implants/3p2.jpg",
  ],
  "duravit-wide": [
    "./assets/imgs/implants/wide1.jpg",
    "./assets/imgs/implants/wide2.jpg",
  ],
  "duravit-pterygo": [
    "./assets/imgs/implants/pterygo1.jpg",
    "./assets/imgs/implants/pterygo2.jpg",
  ],
  "duravit-slim": [
    "./assets/imgs/implants/slim1.jpg",
    "./assets/imgs/implants/slim2.jpg",
  ],
};

/* 1️⃣ When hovering Column-1 → show Column-2, hide Column-3 */
col1.addEventListener("mouseenter", () => {
  col2.style.display = "block";
  col3.style.display = "none";
});

/* 2️⃣ When hovering ANY item in Column-2 → hide Column-3 */
col2.querySelectorAll("li").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    col3.style.display = "none";

    const key = item.dataset.img;
    if (imageMap[key]) {
      img1.src = imageMap[key][0];
      img2.src = imageMap[key][1];
    }
  });
});

/* 3️⃣ ONLY Unique Design → show Column-3 */
unique.addEventListener("mouseenter", () => {
  col3.style.display = "block";

  img1.src = imageMap.unique[0];
  img2.src = imageMap.unique[1];
});

/* 4️⃣ Hover implants → change images */
col3.querySelectorAll("li").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const key = item.dataset.img;
    if (imageMap[key]) {
      img1.src = imageMap[key][0];
      img2.src = imageMap[key][1];
    }
  });
});
