import { indexBird, arrLevelBirds } from "./addRandomSound.js";

const elBirdName = document.querySelector(".puzzle__bird-name");

const addNameBird = () => {
  elBirdName.textContent = `${arrLevelBirds[indexBird].name}`;
};

export { addNameBird, elBirdName };
