let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
//console.log(masterPlay);
let myProgresBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "warrior mortals",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//Handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});
//Listen to events
audioElement.addEventListener("timeupdate", () => {
  //console.log("timeupdate");
  //update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgresBar.value = progress;
});
myProgresBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgresBar.value * audioElement.duration) / 100;
});
