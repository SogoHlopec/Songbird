import "./index.html";
import "./assets/style/normalize.css";
import "./index.css";
import "./assets/js/muteAudio.js";
import {
  audio,
  btnAudio,
  selUnmuteBtnAudio,
  selMuteBtnAudio,
  muteAudio,
} from "./assets/js/muteAudio.js";

btnAudio.addEventListener("click", () =>
  muteAudio(selUnmuteBtnAudio, selMuteBtnAudio, btnAudio, audio)
);

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
