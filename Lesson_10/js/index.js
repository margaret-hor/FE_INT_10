let animationPaused = false;

function toggleBg() {
  const bodyAnime = document.getElementById("body");
  const toggleBgBtn = document.querySelector("#toggle-bg");
  
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