import { indexBird } from "./addRandomSound.js";
import { addScore } from "./addScore.js";
import {
  birdSound,
  btnBirdSound,
  selPlayBtnBirdSound,
  selPauseBtnBirdSound,
  muteAudio,
} from "./muteAudio.js";
import { addNameBird } from "./addNameBird.js";
import { addImageBird } from "./addImageBird.js";
import { createCardBird, elSectionDesc } from "./createCardBird.js";

const elBtnNext = document.querySelector(".main__btn-next");
const soundWin = document.querySelector(".quiz-list__audio-win");
const soundError = document.querySelector(".quiz-list__audio-error");
let counterErr = 0;
let indexClickBird;

const checkWinOrError = () => {
  const list = document.querySelector(".quiz-list");
  list.addEventListener("click", (e) => {
    const listItem = Array.from(list.querySelectorAll(".quiz-list__item"));
    indexClickBird = listItem.indexOf(e.target);
    if (elSectionDesc.querySelector(".description__card")) {
      elSectionDesc.removeChild(
        elSectionDesc.querySelector(".description__card")
      );
      elSectionDesc.removeChild(
        elSectionDesc.querySelector(".description__card-info")
      );
    }
    createCardBird();

    if (e.target === listItem[indexBird]) {
      const elMarker = e.target.querySelector(".quiz-list__marker");
      if (!elMarker.classList.contains("quiz-list__marker_win")) {
        new Audio(`${soundWin.src}`).play();
        elMarker.classList.add("quiz-list__marker_win");
        elBtnNext.classList.add("main__btn-next_active");
        addScore();
        addNameBird();
        addImageBird();
        counterErr = 0;
        if (btnBirdSound.classList.contains("player__btn-sound_pause")) {
          muteAudio(
            selPauseBtnBirdSound,
            selPlayBtnBirdSound,
            btnBirdSound,
            birdSound
          );
        }
      }
    } else if (!list.querySelector(".quiz-list__marker_win")) {
      const elMarker = e.target.querySelector(".quiz-list__marker");
      if (!elMarker.classList.contains("quiz-list__marker_error")) {
        new Audio(`${soundError.src}`).play();
        elMarker.classList.add("quiz-list__marker_error");
        counterErr += 1;
      }
    }
  });
};

export { checkWinOrError, counterErr, indexClickBird, elBtnNext };
