let animationPaused = false;

function toggleBg() {
  const bodyAnime = document.getElementById("body");
  const toggleBgBtn = document.getElementById("toggle-bg");
  
  if (animationPaused) {
    bodyAnime.classList.remove("toggle-bg-off");
    toggleBgBtn.classList.remove("bg-btn-off");
    toggleBgBtn.textContent = "disable motion";
    animationPaused = false;
  } else {
    bodyAnime.classList.add("toggle-bg-off");
    toggleBgBtn.classList.add("bg-btn-off");
    toggleBgBtn.textContent = "enable motion";
    animationPaused = true;
  }
}