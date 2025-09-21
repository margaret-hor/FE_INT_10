"use strict";

function toggleModal() {
  var navbar = document.getElementById("top_nav");
  var hamburgerWrapper = document.getElementById("hamburger_wrapper");
  var hamburger = document.getElementById("hamburger");
  navbar && navbar.classList.toggle("nav_active");
  hamburgerWrapper && hamburgerWrapper.classList.toggle("hamburger_wrapper_active");
  hamburger && hamburger.classList.toggle("hamburger_active");
}