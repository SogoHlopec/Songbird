import {
  muteAudio,
} from "./muteAudio.js";

const createCustomPlayer = (
  parentEl,
  objAudio,
  btnObjAudio,
  selectorPlay,
  selectorPause
) => {
  const durationContainer = parentEl.querySelector(".player__duration");
  const seekSlider = parentEl.querySelector(".player__seek-slider");
  const currentTimeContainer = parentEl.querySelector(".player__current-time");
  const volumePlayer = parentEl.querySelector(".player__volume");
  const btnMute = parentEl.querySelector(".player__btn-volume");

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const displayDuration = () => {
    durationContainer.textContent = calculateTime(objAudio.duration);
  };
  const setSliderMax = () => {
    seekSlider.max = Math.floor(objAudio.duration);
  };

  seekSlider.addEventListener("input", () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    objAudio.pause();
    btnObjAudio.classList.remove(selectorPause);
    btnObjAudio.classList.add(selectorPlay);
  });
  seekSlider.addEventListener("change", () => {
    objAudio.currentTime = seekSlider.value;
    objAudio.play();
    btnObjAudio.classList.remove(selectorPlay);
    btnObjAudio.classList.add(selectorPause);
  });

  objAudio.addEventListener("timeupdate", () => {
    seekSlider.value = Math.floor(objAudio.currentTime);
    whilePlaying();
  });

  const whilePlaying = () => {
    seekSlider.value = Math.floor(objAudio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
  };

  volumePlayer.addEventListener("input", (e) => {
    const value = e.target.value;
    objAudio.volume = value / 100;
    if (objAudio.volume === 0) {
      objAudio.muted = true;
      btnMute.classList.remove("player__btn-volume_unmute");
      btnMute.classList.add("player__btn-volume_mute");
    } else {
      objAudio.muted = false;
      btnMute.classList.remove("player__btn-volume_mute");
      btnMute.classList.add("player__btn-volume_unmute");
    }
  });

  btnMute.addEventListener("click", () => {
    if (btnMute.classList.contains("player__btn-volume_unmute")) {
      objAudio.muted = true;
      btnMute.classList.remove("player__btn-volume_unmute");
      btnMute.classList.add("player__btn-volume_mute");
    } else if (objAudio.volume !== 0) {
      objAudio.muted = false;
      btnMute.classList.remove("player__btn-volume_mute");
      btnMute.classList.add("player__btn-volume_unmute");
    }
  });

  btnObjAudio.addEventListener("click", () => {
    muteAudio(selectorPause, selectorPlay, btnObjAudio, objAudio);

    objAudio.addEventListener("ended", () => {
      btnObjAudio.classList.remove(selectorPause);
      btnObjAudio.classList.add(selectorPlay);
    });
  });

  if (objAudio.readyState > 0) {
    displayDuration();
    setSliderMax();
  } else {
    objAudio.addEventListener("loadedmetadata", () => {
      displayDuration();
      setSliderMax();
    });
  }
};
export { createCustomPlayer };
