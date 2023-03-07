
const audio = document.querySelector(".header__audio");
const btnAudio = document.querySelector(".header__btn-audio");
const selUnmuteBtnAudio = "header__btn-audio_unmute";
const selMuteBtnAudio = "header__btn-audio_mute";

const birdSound = document.querySelector(".player__sound");
const btnBirdSound = document.querySelector(".player__btn-sound");
const selPlayBtnBirdSound = "player__btn-sound_play";
const selPauseBtnBirdSound = "player__btn-sound_pause";

const playOrPauseAudio = (selMute, btn, element) => {
  if (btn.classList.contains(selMute)) {
    element.pause();
  } else {
    element.play();
  }
};

const muteAudio = (selUnmute, selMute, btn, element) => {
  btn.classList.toggle(selUnmute);
  btn.classList.toggle(selMute);
  playOrPauseAudio(selMute, btn, element);
};

export {
  audio,
  btnAudio,
  selUnmuteBtnAudio,
  selMuteBtnAudio,
  birdSound,
  btnBirdSound,
  selPlayBtnBirdSound,
  selPauseBtnBirdSound,
  muteAudio,
};
