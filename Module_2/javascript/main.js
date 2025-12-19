// hero carousel
$(document).ready(function () {
  $('.hero_text').slick({
    vertical: true,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 770,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false
        }
      }
    ]
  });
  // news carousel
  $('.news_carousel__slick').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

// hero scroll down
document.querySelector('#scroll-btn').addEventListener('click', function () {
  const currentPosition = window.pageYOffset;
  const viewportHeight = window.innerHeight;

  window.scrollTo({
    top: currentPosition + viewportHeight,
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

//lightGallery
document.addEventListener('DOMContentLoaded', function () {
  lightGallery(document.getElementById('lightgallery'), {
    selector: '.gallery__item',
    speed: 500,
    download: false,
    getCaptionFromTitleOrAlt: true,
    plugins: [lgZoom, lgThumbnail],
    thumbnail: true,
    zoom: true,
    scale: 1,
    mobileSettings: {
      controls: false,
      showCloseIcon: true,
      download: false,
      closeOnTap: true
    }
  });
});

//leaflet map
let map = L.map('map').setView([40.695947, -73.939350], 17);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: ''
}).addTo(map);

let customIcon = L.icon({
  iconUrl: 'assets/icons/map_icon.svg',

  iconSize: [106, 106], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
});

L.marker([40.695947, -73.939350], { icon: customIcon }).addTo(map);