import { counterErr } from "./checkWinOrError.js";

const elScore = document.querySelector(".score__value");
let score = 0;
let pointsPerLevel = 5;
const addScore = () => {
  score = score + (pointsPerLevel - counterErr);
  elScore.textContent = score;
};

export { addScore, score };
