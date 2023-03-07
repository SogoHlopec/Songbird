import birdsData from "./data-birds.js";

const elQuizList = document.querySelector(".quiz-list");
const arrLevelItems = Array.from(document.querySelectorAll(".level__item"));
const createQuizList = () => {
  let arr;
  for (let i = 0; i < arrLevelItems.length; i++) {
    if (arrLevelItems[i].classList.contains("level__item_active")) {
      arr = birdsData[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const elLi = document.createElement("li");
    const elSpan = document.createElement("span");
    elLi.textContent = arr[i].name;
    elQuizList.append(elLi);
    elLi.prepend(elSpan);
    elLi.classList.add("quiz-list__item");
    elSpan.classList.add("quiz-list__marker");
  }
};

export { createQuizList, elQuizList };
