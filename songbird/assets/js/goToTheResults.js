import { createElAndAddClass, appendEl } from "./createCardBird.js";
import { bntNextLevel } from "./goToTheNextLevel.js";
import { score } from "./addScore.js";
const elMainWrapper = document.querySelector(".main-wrapper");
const elBtnPageQuiz = document.querySelector(".menu__link_active");
const elBtnPageResult = document.querySelector(".menu__link-result");

const goToTheResults = () => {
  while (elMainWrapper.firstChild) {
    elMainWrapper.removeChild(elMainWrapper.firstChild);
  }

  const elMainResults = createElAndAddClass("div", "main__results");
  appendEl(elMainResults, elMainWrapper);

  const elMainTitle = createElAndAddClass("h1", "main__title");
  appendEl(elMainTitle, elMainResults);

  const elMainText = createElAndAddClass("p", "main__text");
  appendEl(elMainText, elMainResults);

  elBtnPageQuiz.classList.remove("menu__link_active");
  elBtnPageResult.classList.remove("menu__link-result");
  elBtnPageResult.classList.add("menu__link_active");

  if (score !== 30) {
    const elBtnNewGame = bntNextLevel.cloneNode(true);
    appendEl(elBtnNewGame, elMainResults);
    elBtnNewGame.textContent = "Сыграть ещё раз";
    elBtnNewGame.classList.add("main__btn-new-game");
    elBtnNewGame.addEventListener("click", () => {
      location.reload();
    });
  }
  elMainTitle.textContent = "Поздравляем!";
  elMainText.innerHTML = `Вы прошли викторину и набрали ${score} из <span class="main__text-span">30</span> возможных баллов`;
};

export { goToTheResults };
