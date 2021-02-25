// import "./styles.css";

const videoWrapper = document.querySelector("#jsVideoWrapper");
const video = document.querySelector("#jsVideo");
const playContainer = document.querySelector("#jsPlayer");
const playBtn = document.querySelector("#jsPlay");
const pauseBtn = document.querySelector("#jsPause");
const progress = document.querySelector("#jsProgress");
const muteBtn = document.querySelector("#jsMute");
const unmuteBtn = document.querySelector("#jsUnmute");
const currentText = document.querySelector("#jsCurrent");
const endText = document.querySelector("#jsEnd");

let timer;

const playVideo = (event) => {
  showPlayerTrigger();
  playBtn.classList.add("invisible");
  pauseBtn.classList.remove("invisible");

  if (video.paused) {
    video.play();
  }
};

const pauseVideo = (evnet) => {
  showPlayerTrigger();
  pauseBtn.classList.add("invisible");
  playBtn.classList.remove("invisible");

  if (!video.paused) {
    video.pause();
  }
};

const muteVideo = () => {
  showPlayerTrigger();
  muteBtn.classList.add("invisible");
  unmuteBtn.classList.remove("invisible");
  if (!video.muted) {
    video.muted = true;
  }
};

const unmuteVideo = () => {
  showPlayerTrigger();
  unmuteBtn.classList.add("invisible");
  muteBtn.classList.remove("invisible");
  if (video.muted) {
    video.muted = false;
  }
};

const setTotalTime = () => {
  endText.innerHTML = formatDate(video.duration);
  video.addEventListener("timeupdate", getCurrentTime);
};

function getCurrentTime() {
  const totalTime = video.duration;
  const currentTime = video.currentTime;

  progress.value = currentTime / totalTime;
  currentText.innerHTML = formatDate(Math.floor(currentTime));
}

const formatDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }

  return hours === "00"
    ? `${minutes}:${totalSeconds}`
    : `${hours}:${minutes}:${totalSeconds}`;
};

const showPlayer = () => {
  clearTimeout(timer);
  playContainer.style.opacity = "1";
  videoWrapper.style.cursor = "default";

  timer = setTimeout(hidePlayer, 1500);
};

const hidePlayer = () => {
  playContainer.style.opacity = "0";
  videoWrapper.style.cursor = "none";
};

const showPlayerTrigger = () => {
  const moveTrigger = new Event("mousemove");
  video.dispatchEvent(moveTrigger);
};

const videoProgress = () => {
  const value = progress.value;
  video.currentTime = value * video.duration;
};

function videoEnded() {
  video.currentTime = 0;
  video.play();
}

const init = () => {
  hidePlayer();
  video.addEventListener("timeupdate", setTotalTime);
  video.addEventListener("ended", videoEnded);
  video.addEventListener("mousemove", showPlayer);
  playBtn.addEventListener("click", playVideo);
  pauseBtn.addEventListener("click", pauseVideo);
  progress.addEventListener("change", videoProgress);
  muteBtn.addEventListener("click", muteVideo);
  unmuteBtn.addEventListener("click", unmuteVideo);

  document.body.onkeyup = (event) => {
    if (event.keyCode === 32) {
      showPlayerTrigger();
      const clickTrigger = new Event("click");

      if (video.paused) {
        playBtn.dispatchEvent(clickTrigger);
      } else {
        pauseBtn.dispatchEvent(clickTrigger);
      }
    }
  };
};

init();
