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