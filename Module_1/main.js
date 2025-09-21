function toggleModal() {
  const navbar = document.getElementById("top_nav");
  const hamburgerWrapper = document.getElementById("hamburger_wrapper");
  const hamburger = document.getElementById("hamburger");

  navbar && navbar.classList.toggle("nav_active");
  hamburgerWrapper && hamburgerWrapper.classList.toggle("hamburger_wrapper_active");
  hamburger && hamburger.classList.toggle("hamburger_active");
}