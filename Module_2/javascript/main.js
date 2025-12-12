// hero carousel
$(document).ready(function(){
  $('.hero_text').slick({
    vertical: true,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 770
  });
});

// hero scroll down
document.querySelector('#scroll-btn').addEventListener('click', function() {
  const currentPosition = window.pageYOffset; 
  const viewportHeight = window.innerHeight;

  window.scrollTo({
    top: currentPosition + viewportHeight - 100,
    behavior: 'smooth'
  });
});

// toggle hero menu
function toggleModal() {
  const navbar = document.querySelector(".header_nav_wrapper");
  const hamburgerWrapper = document.getElementById("hamburger_wrapper");
  const hamburger = document.getElementById("hamburger");

  navbar && navbar.classList.toggle("nav--active");
  hamburgerWrapper && hamburgerWrapper.classList.toggle("hamburger_wrapper--active");
  hamburger && hamburger.classList.toggle("hamburger--active");
}