import { indexBird, arrLevelBirds } from "./addRandomSound.js";

const elImageBird = document.querySelector(".puzzle__bird-img");
const addImageBird = () => {
  elImageBird.style.backgroundImage = `url(${arrLevelBirds[indexBird].image})`;
};

export { addImageBird, elImageBird };