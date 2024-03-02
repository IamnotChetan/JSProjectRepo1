let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
//console.log(masterPlay);
let myProgresBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "warrior mortals",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "warrior mortals One",
    filePath: "2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "warrior mortals Two",
    filePath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "warrior mortals Three",
    filePath: "4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "warrior mortals Four",
    filePath: "5.mp3",
    coverPath: "5.jpg",
  },
  {
    songName: "warrior mortals Five",
    filePath: "6.mp3",
    coverPath: "6.jpg",
  },
  {
    songName: "warrior mortals Six",
    filePath: "7.mp3",
    coverPath: "7.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
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

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-circle-play");
      element.classList.remove("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterSongName.innerText = songs[songIndex].songName;
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
