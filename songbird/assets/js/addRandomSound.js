import { birdSound } from "./muteAudio.js";
import birdsData from "./data-birds.js";

// !random number start
const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// !random number end

const arrLevelItems = Array.from(document.querySelectorAll(".level__item"));
let indexBird;
let arrLevelBirds;

const addRandomSound = () => {
  for (let i = 0; i < arrLevelItems.length; i++) {
    if (arrLevelItems[i].classList.contains("level__item_active")) {
      arrLevelBirds = birdsData[i];
      indexBird = getRandomNum(0, arrLevelBirds.length - 1);
    }
  }
  birdSound.src = `${arrLevelBirds[indexBird].audio}`;
};

export { addRandomSound, indexBird, arrLevelBirds, arrLevelItems };
