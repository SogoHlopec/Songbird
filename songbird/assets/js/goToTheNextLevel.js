import { addRandomSound, arrLevelItems } from "./addRandomSound.js";
import { elBirdName } from "./addNameBird.js";
import { elImageBird } from "./addImageBird.js";
import { createQuizList, elQuizList } from "./createQuizList.js";
import { elSectionDesc } from "./createCardBird.js";
import { elBtnNext } from "./checkWinOrError.js";
import {
  birdSound,
  btnBirdSound,
  selPlayBtnBirdSound,
  selPauseBtnBirdSound,
  muteAudio,
} from "./muteAudio.js";
import { goToTheResults } from "./goToTheResults.js";

const bntNextLevel = document.querySelector(".main__btn-next");

const goToTheNextLevel = () => {
  if (bntNextLevel.classList.contains("main__btn-next_active")) {
    if (
      arrLevelItems[arrLevelItems.length - 1].classList.contains(
        "level__item_active"
      )
    ) {
      goToTheResults();
    } else {
      for (let i = 0; i < arrLevelItems.length; i++) {
        if (arrLevelItems[i].classList.contains("level__item_active")) {
          const nextIndex = i + 1;
          arrLevelItems[i].classList.remove("level__item_active");
          arrLevelItems[nextIndex].classList.add("level__item_active");
          break;
        }
      }
      if (btnBirdSound.classList.contains("player__btn-sound_pause")) {
        muteAudio(
          selPlayBtnBirdSound,
          selPauseBtnBirdSound,
          btnBirdSound,
          birdSound
        );
      }
      elBirdName.textContent = "******";
      elImageBird.style.backgroundImage = "";
      addRandomSound();
      while (elQuizList.firstChild) {
        elQuizList.removeChild(elQuizList.firstChild);
      }
      createQuizList();
      elSectionDesc.removeChild(
        elSectionDesc.querySelector(".description__card")
      );
      elSectionDesc.removeChild(
        elSectionDesc.querySelector(".description__card-info")
      );
      elBtnNext.classList.remove("main__btn-next_active");
      elSectionDesc.querySelector(".description__instruction").style.display =
        "block";
    }
  }
};

export { goToTheNextLevel, bntNextLevel };
