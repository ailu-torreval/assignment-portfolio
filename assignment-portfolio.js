"use strict";

document.querySelector(".nav-menu").addEventListener("click", showMenu);

function showMenu() {
    document.querySelector(".nav-menu").removeEventListener("click", showMenu);
  document.querySelector(".collapsable-menu").classList.remove("hidden");
  console.log("button open clicked");
  document.querySelector(".nav-menu").addEventListener("click", closeMenu);
}

function closeMenu() {
  document.querySelector(".collapsable-menu").classList.add("hidden");
  console.log("button close clicked");
  document.querySelector(".nav-menu").addEventListener("click", showMenu);
}
