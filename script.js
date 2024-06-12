const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "F vs J Intro",
    name: "Fabolous & Jadakiss",
    source:
      "./assets/music/F vs J Intro.mp3",
  },
  {
    title: "Footsteps in the Dark Pts. 1 & 2",
    name: "SIR",
    source:
      "./assets/music/Footsteps in the Dark Pts. 1 & 2.mp3",
  },
  {
    title: "Model Walk",
    name: "Lowkey V",
    source:
      "./assets/music/Model Walk.mp3",
  },
  {
    title: "I Can't Make It Home",
    name: "Devin The Dude ft. LC",
    source:
      "./assets/music/I Can't Make It Home.mp3",
  },
  {
    title: "December",
    name: "IDK",
    source:
      "./assets/music/December.mp3",
  },

  {
    title: "On Sight",
    name: "Free Nationals ft. J.I.D Kadhja Bonet & MIKNNA",
    source:
      "./assets/music/On Sight.mp3",
  },
  {
    title: "A.D.H.D.",
    name: "Kendrick Lamar",
    source:
      "./assets/music/ADHD.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});