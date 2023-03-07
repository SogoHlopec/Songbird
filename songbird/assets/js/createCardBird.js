import { indexClickBird } from "./checkWinOrError.js";
import { arrLevelBirds } from "./addRandomSound.js";
import { createCustomPlayer } from "./player.js";
import {
  selPlayBtnBirdSound,
  selPauseBtnBirdSound,
  muteAudio,
} from "./muteAudio.js";

const elSectionDesc = document.querySelector(".description");
const playerAudio = document.querySelector(".player");

const createElAndAddClass = (el, sel) => {
  const element = document.createElement(el);
  element.classList.add(sel);
  return element;
};

const appendEl = (el, parentEl) => {
  parentEl.append(el);
};

const createCardBird = () => {
  elSectionDesc.querySelector(".description__instruction").style.display = "none";

  const divCard = createElAndAddClass("div", "description__card");
  appendEl(divCard, elSectionDesc);

  const imgCard = createElAndAddClass("div", "bird-img");
  imgCard.classList.add("description__card-img");
  appendEl(imgCard, divCard);

  const divCardBody = createElAndAddClass("div", "description__card-body");
  appendEl(divCardBody, divCard);

  const divCardName = createElAndAddClass("h4", "description__card-name");
  appendEl(divCardName, divCardBody);

  const divCardNameLatin = createElAndAddClass(
    "div",
    "description__card-name-latin"
  );
  appendEl(divCardNameLatin, divCardBody);

  const elInfoBird = createElAndAddClass("p", "description__card-info");
  appendEl(elInfoBird, elSectionDesc);

  divCardName.textContent = arrLevelBirds[indexClickBird].name;
  divCardNameLatin.textContent = arrLevelBirds[indexClickBird].species;
  elInfoBird.textContent = arrLevelBirds[indexClickBird].description;
  imgCard.style.backgroundImage = `url(${arrLevelBirds[indexClickBird].image})`;

  // !player card start
  const playerCard = playerAudio.cloneNode(true);
  playerCard.classList.remove("puzzle__player");
  appendEl(playerCard, divCardBody);
  const audioCard = playerCard.querySelector(".player__sound");
  const audioUrl = arrLevelBirds[indexClickBird].audio;
  audioCard.setAttribute("src", audioUrl);
  const birdSound = divCard.querySelector(".player__sound");
  const btnBirdSound = divCard.querySelector(".player__btn-sound");
  btnBirdSound.classList.remove("player__btn-sound_pause");
  btnBirdSound.classList.add("player__btn-sound_play");
  createCustomPlayer(
    divCard,
    birdSound,
    btnBirdSound,
    selPlayBtnBirdSound,
    selPauseBtnBirdSound
  );
  // !player card end
};

export { createCardBird, elSectionDesc, createElAndAddClass, appendEl };
