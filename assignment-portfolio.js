"use strict";
gsap.registerPlugin(ScrollTrigger);

document.querySelector(".nav-menu").addEventListener("click", showMenu);

gsap.to("#intro-pic", {
  duration: 3,
  // x: "45vw",
  scale: 4,
  scrollTrigger: {
    start: "top 75%",
    trigger: "#intro-pic",
    end: "bottom 95%",
    toggleActions: "play pause resume reset",
    scrub: true,
  },
});

function showMenu() {
  document.querySelector(".nav-menu").removeEventListener("click", showMenu);
  document.querySelector(".arrow-right").classList.add("hidden");
  document.querySelector(".arrow-down").classList.remove("hidden");
  document.querySelector(".collapsable-menu").classList.remove("hidden");
  console.log("button open clicked");
  document.querySelector(".nav-menu").addEventListener("click", closeMenu);
}

function closeMenu() {
  document.querySelector(".collapsable-menu").classList.add("hidden");
  document.querySelector(".arrow-down").classList.add("hidden");
  document.querySelector(".arrow-right").classList.remove("hidden");
  console.log("button close clicked");
  document.querySelector(".nav-menu").addEventListener("click", showMenu);
}
