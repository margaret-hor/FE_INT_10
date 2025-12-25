//==================================
//task 1
//==================================
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

const trackList = document.querySelector('#track_list');
playList.forEach(track => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span class="track_author">${track.author}</span>
    <span class="track_song">--- ${track.song}</span>
  `;
  trackList.appendChild(listItem);
});

//==================================
//task 2
//==================================
const openModalBtn = document.querySelector('#open_modal_btn');
const closeModalBtn = document.querySelector('#close_modal_btn');
const modalOverlay = document.querySelector('#modal_overlay');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('modal_active');
});
closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('modal_active');
});

//==================================
//task 3
//==================================
const redLight = document.querySelector('#red_light');
const yellowLight = document.querySelector('#yellow_light');
const greenLight = document.querySelector('#green_light');
const switchBtn = document.querySelector('#switch_light_btn');

let currentLight = 0;

function switchLight() {
  redLight.classList.remove('active');
  yellowLight.classList.remove('active');
  greenLight.classList.remove('active');

  currentLight = (currentLight + 1) % 3;

  if (currentLight === 0) {
    redLight.classList.add('active');
  } else if (currentLight === 1) {
    yellowLight.classList.add('active');
  } else {
    greenLight.classList.add('active');
  }
}

switchBtn.addEventListener('click', switchLight);