import "./quiz-page.html";
import "../assets/style/normalize.css";
import "./quiz-page.css";
import "../assets/js/addRandomSound.js";

import { createCustomPlayer } from "../assets/js/player.js";
import { addRandomSound } from "../assets/js/addRandomSound.js";
import { createQuizList } from "../assets/js/createQuizList.js";
import { checkWinOrError } from "../assets/js/checkWinOrError.js";
import {
  birdSound,
  btnBirdSound,
  selPlayBtnBirdSound,
  selPauseBtnBirdSound,
} from "../assets/js//muteAudio.js";
import {
  goToTheNextLevel,
  bntNextLevel,
} from "../assets/js/goToTheNextLevel.js";

const elPuzzlePlayer = document.querySelector(".puzzle__player");
createCustomPlayer(
  elPuzzlePlayer,
  birdSound,
  btnBirdSound,
  selPlayBtnBirdSound,
  selPauseBtnBirdSound
);
addRandomSound();
createQuizList();
checkWinOrError();

bntNextLevel.addEventListener("click", goToTheNextLevel);
console.log(`
Вёрстка, дизайн, UI всех трёх страниц приложения +60
Кастомный аудиоплеер с регулятором громкости звука +30
Верхняя панель страницы викторины +20
Блок с вопросом +20
Блок с вариантами ответов (названия птиц) +60
Блок с описанием птицы: +30
Кнопка перехода к следующему вопросу +30

Итого: 250 баллов из 270
`);
