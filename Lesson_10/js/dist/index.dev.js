"use strict";

var animationPaused = false;

function toggleBg() {
  var bodyAnime = document.getElementById("body");
  var toggleBgBtn = document.querySelector("#toggle-bg");

  if (animationPaused) {
    bodyAnime.style.animationPlayState = "running";
    toggleBgBtn.textContent = "disable motion";
    toggleBgBtn.style.filter = "brightness(1.4)";
    toggleBgBtn.style.border = "2px solid transparent";
    animationPaused = false;
  } else {
    bodyAnime.style.animationPlayState = "paused";
    toggleBgBtn.textContent = "enable motion";
    toggleBgBtn.style.filter = "brightness(1)";
    toggleBgBtn.style.border = "2px solid #000";
    animationPaused = true;
  }
}