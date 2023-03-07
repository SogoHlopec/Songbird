/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./songbird/quiz-page/quiz-page.html":
/*!*******************************************!*\
  !*** ./songbird/quiz-page/quiz-page.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./favicon.ico */ "./songbird/quiz-page/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/audio/win.mp3 */ "./songbird/assets/audio/win.mp3"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/audio/error.mp3 */ "./songbird/assets/audio/error.mp3"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n    <title>Викторина</title>\r\n  </head>\r\n  <body class=\"body\">\r\n    <div class=\"wrapper\">\r\n      <header class=\"header\">\r\n        <a href=\"./index.html\" class=\"header__logo\"></a>\r\n        <nav class=\"header__nav\">\r\n          <ul class=\"menu header__menu\">\r\n            <li class=\"menu__item menu__item_active\">\r\n              <a href=\"./index.html\" class=\"menu__link\">Главная страница</a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a href=\"./quiz-page.html\" class=\"menu__link menu__link_active\">Викторина</a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__link menu__link-result\">Результат</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <h4 class=\"score header__score\">\r\n          Score: <span class=\"score__value\">0</span>\r\n        </h4>\r\n      </header>\r\n\r\n      <main class=\"main\">\r\n        <div class=\"main-wrapper\">\r\n          <section class=\"level main__level\">\r\n            <ul class=\"level__nav\">\r\n              <li class=\"level__item level__item_active\">Разминка</li>\r\n              <li class=\"level__item\">Воробьиные</li>\r\n              <li class=\"level__item\">Лесные птицы</li>\r\n              <li class=\"level__item\">Певчие птицы</li>\r\n              <li class=\"level__item\">Хищные птицы</li>\r\n              <li class=\"level__item\">Морские птицы</li>\r\n            </ul>\r\n          </section>\r\n\r\n          <section class=\"puzzle main__puzzle\">\r\n            <div class=\"bird-img puzzle__bird-img\"></div>\r\n\r\n            <div class=\"puzzle__mystery\">\r\n              <h3 class=\"puzzle__bird-name\">******</h3>\r\n\r\n              <div class=\"player puzzle__player\">\r\n                <div class=\"player__wrapper\">\r\n                  <button\r\n                    class=\"player__btn-sound player__btn-sound_play\"\r\n                  ></button>\r\n                  <span class=\"player__time player__current-time\">0:00</span>\r\n                  <input\r\n                    type=\"range\"\r\n                    max=\"100%\"\r\n                    value=\"0\"\r\n                    class=\"player__seek-slider\"\r\n                  />\r\n                  <span class=\"player__time player__duration\">0:00</span>\r\n                </div>\r\n                <input\r\n                  type=\"range\"\r\n                  max=\"100\"\r\n                  value=\"100\"\r\n                  class=\"player__volume\"\r\n                />\r\n                <button\r\n                  class=\"player__btn-volume player__btn-volume_unmute\"\r\n                ></button>\r\n                <audio\r\n                  src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\"\r\n                  preload=\"metadata\"\r\n                  class=\"player__sound\"\r\n                ></audio>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <div class=\"section-wrapper\">\r\n            <section class=\"quiz-list main__quiz-list\">\r\n              <audio\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n                preload=\"auto\"\r\n                class=\"quiz-list__audio-win\"\r\n              ></audio>\r\n              <audio\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n                preload=\"auto\"\r\n                class=\"quiz-list__audio-error\"\r\n              ></audio>\r\n            </section>\r\n            <section class=\"description main__description\">\r\n              <p class=\"description__instruction\">\r\n                Послушайте плеер. Выберите птицу из списка.\r\n              </p>\r\n            </section>\r\n          </div>\r\n\r\n          <button class=\"main__btn-next\">Далее</button>\r\n        </div>\r\n      </main>\r\n\r\n      <footer class=\"footer\">\r\n        <div class=\"footer__wrapper\">\r\n          <p class=\"footer__year\">2022</p>\r\n          <a href=\"https://github.com/SogoHlopec\" class=\"footer__link-github\">\r\n            GitHub: SogoHlopec\r\n          </a>\r\n          <a href=\"https://rs.school/js/\" class=\"footer__rss-logo\"></a>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./songbird/assets/style/normalize.css":
/*!*********************************************!*\
  !*** ./songbird/assets/style/normalize.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./songbird/quiz-page/quiz-page.css":
/*!******************************************!*\
  !*** ./songbird/quiz-page/quiz-page.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./songbird/assets/js/addImageBird.js":
/*!********************************************!*\
  !*** ./songbird/assets/js/addImageBird.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addImageBird": () => (/* binding */ addImageBird),
/* harmony export */   "elImageBird": () => (/* binding */ elImageBird)
/* harmony export */ });
/* harmony import */ var _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRandomSound.js */ "./songbird/assets/js/addRandomSound.js");


const elImageBird = document.querySelector(".puzzle__bird-img");
const addImageBird = () => {
  elImageBird.style.backgroundImage = `url(${_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelBirds[_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.indexBird].image})`;
};



/***/ }),

/***/ "./songbird/assets/js/addNameBird.js":
/*!*******************************************!*\
  !*** ./songbird/assets/js/addNameBird.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNameBird": () => (/* binding */ addNameBird),
/* harmony export */   "elBirdName": () => (/* binding */ elBirdName)
/* harmony export */ });
/* harmony import */ var _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRandomSound.js */ "./songbird/assets/js/addRandomSound.js");


const elBirdName = document.querySelector(".puzzle__bird-name");

const addNameBird = () => {
  elBirdName.textContent = `${_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelBirds[_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.indexBird].name}`;
};




/***/ }),

/***/ "./songbird/assets/js/addRandomSound.js":
/*!**********************************************!*\
  !*** ./songbird/assets/js/addRandomSound.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRandomSound": () => (/* binding */ addRandomSound),
/* harmony export */   "arrLevelBirds": () => (/* binding */ arrLevelBirds),
/* harmony export */   "arrLevelItems": () => (/* binding */ arrLevelItems),
/* harmony export */   "indexBird": () => (/* binding */ indexBird)
/* harmony export */ });
/* harmony import */ var _muteAudio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muteAudio.js */ "./songbird/assets/js/muteAudio.js");
/* harmony import */ var _data_birds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-birds.js */ "./songbird/assets/js/data-birds.js");



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
      arrLevelBirds = _data_birds_js__WEBPACK_IMPORTED_MODULE_1__["default"][i];
      indexBird = getRandomNum(0, arrLevelBirds.length - 1);
    }
  }
  _muteAudio_js__WEBPACK_IMPORTED_MODULE_0__.birdSound.src = `${arrLevelBirds[indexBird].audio}`;
};




/***/ }),

/***/ "./songbird/assets/js/addScore.js":
/*!****************************************!*\
  !*** ./songbird/assets/js/addScore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScore": () => (/* binding */ addScore),
/* harmony export */   "score": () => (/* binding */ score)
/* harmony export */ });
/* harmony import */ var _checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWinOrError.js */ "./songbird/assets/js/checkWinOrError.js");


const elScore = document.querySelector(".score__value");
let score = 0;
let pointsPerLevel = 5;
const addScore = () => {
  score = score + (pointsPerLevel - _checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__.counterErr);
  elScore.textContent = score;
};




/***/ }),

/***/ "./songbird/assets/js/checkWinOrError.js":
/*!***********************************************!*\
  !*** ./songbird/assets/js/checkWinOrError.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWinOrError": () => (/* binding */ checkWinOrError),
/* harmony export */   "counterErr": () => (/* binding */ counterErr),
/* harmony export */   "elBtnNext": () => (/* binding */ elBtnNext),
/* harmony export */   "indexClickBird": () => (/* binding */ indexClickBird)
/* harmony export */ });
/* harmony import */ var _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRandomSound.js */ "./songbird/assets/js/addRandomSound.js");
/* harmony import */ var _addScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addScore.js */ "./songbird/assets/js/addScore.js");
/* harmony import */ var _muteAudio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./muteAudio.js */ "./songbird/assets/js/muteAudio.js");
/* harmony import */ var _addNameBird_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addNameBird.js */ "./songbird/assets/js/addNameBird.js");
/* harmony import */ var _addImageBird_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addImageBird.js */ "./songbird/assets/js/addImageBird.js");
/* harmony import */ var _createCardBird_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createCardBird.js */ "./songbird/assets/js/createCardBird.js");







const elBtnNext = document.querySelector(".main__btn-next");
const soundWin = document.querySelector(".quiz-list__audio-win");
const soundError = document.querySelector(".quiz-list__audio-error");
let counterErr = 0;
let indexClickBird;

const checkWinOrError = () => {
  const list = document.querySelector(".quiz-list");
  list.addEventListener("click", (e) => {
    const listItem = Array.from(list.querySelectorAll(".quiz-list__item"));
    indexClickBird = listItem.indexOf(e.target);
    if (_createCardBird_js__WEBPACK_IMPORTED_MODULE_5__.elSectionDesc.querySelector(".description__card")) {
      _createCardBird_js__WEBPACK_IMPORTED_MODULE_5__.elSectionDesc.removeChild(
        _createCardBird_js__WEBPACK_IMPORTED_MODULE_5__.elSectionDesc.querySelector(".description__card")
      );
      _createCardBird_js__WEBPACK_IMPORTED_MODULE_5__.elSectionDesc.removeChild(
        _createCardBird_js__WEBPACK_IMPORTED_MODULE_5__.elSectionDesc.querySelector(".description__card-info")
      );
    }
    (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_5__.createCardBird)();

    if (e.target === listItem[_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.indexBird]) {
      const elMarker = e.target.querySelector(".quiz-list__marker");
      if (!elMarker.classList.contains("quiz-list__marker_win")) {
        new Audio(`${soundWin.src}`).play();
        elMarker.classList.add("quiz-list__marker_win");
        elBtnNext.classList.add("main__btn-next_active");
        (0,_addScore_js__WEBPACK_IMPORTED_MODULE_1__.addScore)();
        (0,_addNameBird_js__WEBPACK_IMPORTED_MODULE_3__.addNameBird)();
        (0,_addImageBird_js__WEBPACK_IMPORTED_MODULE_4__.addImageBird)();
        counterErr = 0;
        if (_muteAudio_js__WEBPACK_IMPORTED_MODULE_2__.btnBirdSound.classList.contains("player__btn-sound_pause")) {
          (0,_muteAudio_js__WEBPACK_IMPORTED_MODULE_2__.muteAudio)(
            _muteAudio_js__WEBPACK_IMPORTED_MODULE_2__.selPauseBtnBirdSound,
            _muteAudio_js__WEBPACK_IMPORTED_MODULE_2__.selPlayBtnBirdSound,
            _muteAudio_js__WEBPACK_IMPORTED_MODULE_2__.btnBirdSound,
            _muteAudio_js__WEBPACK_IMPORTED_MODULE_2__.birdSound
          );
        }
      }
    } else if (!list.querySelector(".quiz-list__marker_win")) {
      const elMarker = e.target.querySelector(".quiz-list__marker");
      if (!elMarker.classList.contains("quiz-list__marker_error")) {
        new Audio(`${soundError.src}`).play();
        elMarker.classList.add("quiz-list__marker_error");
        counterErr += 1;
      }
    }
  });
};




/***/ }),

/***/ "./songbird/assets/js/createCardBird.js":
/*!**********************************************!*\
  !*** ./songbird/assets/js/createCardBird.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendEl": () => (/* binding */ appendEl),
/* harmony export */   "createCardBird": () => (/* binding */ createCardBird),
/* harmony export */   "createElAndAddClass": () => (/* binding */ createElAndAddClass),
/* harmony export */   "elSectionDesc": () => (/* binding */ elSectionDesc)
/* harmony export */ });
/* harmony import */ var _checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWinOrError.js */ "./songbird/assets/js/checkWinOrError.js");
/* harmony import */ var _addRandomSound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRandomSound.js */ "./songbird/assets/js/addRandomSound.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./songbird/assets/js/player.js");
/* harmony import */ var _muteAudio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./muteAudio.js */ "./songbird/assets/js/muteAudio.js");





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

  divCardName.textContent = _addRandomSound_js__WEBPACK_IMPORTED_MODULE_1__.arrLevelBirds[_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__.indexClickBird].name;
  divCardNameLatin.textContent = _addRandomSound_js__WEBPACK_IMPORTED_MODULE_1__.arrLevelBirds[_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__.indexClickBird].species;
  elInfoBird.textContent = _addRandomSound_js__WEBPACK_IMPORTED_MODULE_1__.arrLevelBirds[_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__.indexClickBird].description;
  imgCard.style.backgroundImage = `url(${_addRandomSound_js__WEBPACK_IMPORTED_MODULE_1__.arrLevelBirds[_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__.indexClickBird].image})`;

  // !player card start
  const playerCard = playerAudio.cloneNode(true);
  playerCard.classList.remove("puzzle__player");
  appendEl(playerCard, divCardBody);
  const audioCard = playerCard.querySelector(".player__sound");
  const audioUrl = _addRandomSound_js__WEBPACK_IMPORTED_MODULE_1__.arrLevelBirds[_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_0__.indexClickBird].audio;
  audioCard.setAttribute("src", audioUrl);
  const birdSound = divCard.querySelector(".player__sound");
  const btnBirdSound = divCard.querySelector(".player__btn-sound");
  btnBirdSound.classList.remove("player__btn-sound_pause");
  btnBirdSound.classList.add("player__btn-sound_play");
  (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.createCustomPlayer)(
    divCard,
    birdSound,
    btnBirdSound,
    _muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.selPlayBtnBirdSound,
    _muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.selPauseBtnBirdSound
  );
  // !player card end
};




/***/ }),

/***/ "./songbird/assets/js/createQuizList.js":
/*!**********************************************!*\
  !*** ./songbird/assets/js/createQuizList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQuizList": () => (/* binding */ createQuizList),
/* harmony export */   "elQuizList": () => (/* binding */ elQuizList)
/* harmony export */ });
/* harmony import */ var _data_birds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-birds.js */ "./songbird/assets/js/data-birds.js");


const elQuizList = document.querySelector(".quiz-list");
const arrLevelItems = Array.from(document.querySelectorAll(".level__item"));
const createQuizList = () => {
  let arr;
  for (let i = 0; i < arrLevelItems.length; i++) {
    if (arrLevelItems[i].classList.contains("level__item_active")) {
      arr = _data_birds_js__WEBPACK_IMPORTED_MODULE_0__["default"][i];
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




/***/ }),

/***/ "./songbird/assets/js/data-birds.js":
/*!******************************************!*\
  !*** ./songbird/assets/js/data-birds.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const birdsData = [
  [
    {
      id: 1,
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    },
    {
      id: 2,
      name: 'Журавль',
      species: 'Grus grus',
      description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
    },
    {
      id: 3,
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
    },
    {
      id: 4,
      name: 'Козодой',
      species: 'Caprimulgus europaeus',
      description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
    },
    {
      id: 5,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
    },
    {
      id: 6,
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://i.ibb.co/mqqxpKB/89644134.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
  ]
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);

/***/ }),

/***/ "./songbird/assets/js/goToTheNextLevel.js":
/*!************************************************!*\
  !*** ./songbird/assets/js/goToTheNextLevel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bntNextLevel": () => (/* binding */ bntNextLevel),
/* harmony export */   "goToTheNextLevel": () => (/* binding */ goToTheNextLevel)
/* harmony export */ });
/* harmony import */ var _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRandomSound.js */ "./songbird/assets/js/addRandomSound.js");
/* harmony import */ var _addNameBird_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNameBird.js */ "./songbird/assets/js/addNameBird.js");
/* harmony import */ var _addImageBird_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addImageBird.js */ "./songbird/assets/js/addImageBird.js");
/* harmony import */ var _createQuizList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createQuizList.js */ "./songbird/assets/js/createQuizList.js");
/* harmony import */ var _createCardBird_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createCardBird.js */ "./songbird/assets/js/createCardBird.js");
/* harmony import */ var _checkWinOrError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkWinOrError.js */ "./songbird/assets/js/checkWinOrError.js");
/* harmony import */ var _muteAudio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./muteAudio.js */ "./songbird/assets/js/muteAudio.js");
/* harmony import */ var _goToTheResults_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goToTheResults.js */ "./songbird/assets/js/goToTheResults.js");









const bntNextLevel = document.querySelector(".main__btn-next");

const goToTheNextLevel = () => {
  if (bntNextLevel.classList.contains("main__btn-next_active")) {
    if (
      _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelItems[_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelItems.length - 1].classList.contains(
        "level__item_active"
      )
    ) {
      (0,_goToTheResults_js__WEBPACK_IMPORTED_MODULE_7__.goToTheResults)();
    } else {
      for (let i = 0; i < _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelItems.length; i++) {
        if (_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelItems[i].classList.contains("level__item_active")) {
          const nextIndex = i + 1;
          _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelItems[i].classList.remove("level__item_active");
          _addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.arrLevelItems[nextIndex].classList.add("level__item_active");
          break;
        }
      }
      if (_muteAudio_js__WEBPACK_IMPORTED_MODULE_6__.btnBirdSound.classList.contains("player__btn-sound_pause")) {
        (0,_muteAudio_js__WEBPACK_IMPORTED_MODULE_6__.muteAudio)(
          _muteAudio_js__WEBPACK_IMPORTED_MODULE_6__.selPlayBtnBirdSound,
          _muteAudio_js__WEBPACK_IMPORTED_MODULE_6__.selPauseBtnBirdSound,
          _muteAudio_js__WEBPACK_IMPORTED_MODULE_6__.btnBirdSound,
          _muteAudio_js__WEBPACK_IMPORTED_MODULE_6__.birdSound
        );
      }
      _addNameBird_js__WEBPACK_IMPORTED_MODULE_1__.elBirdName.textContent = "******";
      _addImageBird_js__WEBPACK_IMPORTED_MODULE_2__.elImageBird.style.backgroundImage = "";
      (0,_addRandomSound_js__WEBPACK_IMPORTED_MODULE_0__.addRandomSound)();
      while (_createQuizList_js__WEBPACK_IMPORTED_MODULE_3__.elQuizList.firstChild) {
        _createQuizList_js__WEBPACK_IMPORTED_MODULE_3__.elQuizList.removeChild(_createQuizList_js__WEBPACK_IMPORTED_MODULE_3__.elQuizList.firstChild);
      }
      (0,_createQuizList_js__WEBPACK_IMPORTED_MODULE_3__.createQuizList)();
      _createCardBird_js__WEBPACK_IMPORTED_MODULE_4__.elSectionDesc.removeChild(
        _createCardBird_js__WEBPACK_IMPORTED_MODULE_4__.elSectionDesc.querySelector(".description__card")
      );
      _createCardBird_js__WEBPACK_IMPORTED_MODULE_4__.elSectionDesc.removeChild(
        _createCardBird_js__WEBPACK_IMPORTED_MODULE_4__.elSectionDesc.querySelector(".description__card-info")
      );
      _checkWinOrError_js__WEBPACK_IMPORTED_MODULE_5__.elBtnNext.classList.remove("main__btn-next_active");
      _createCardBird_js__WEBPACK_IMPORTED_MODULE_4__.elSectionDesc.querySelector(".description__instruction").style.display =
        "block";
    }
  }
};




/***/ }),

/***/ "./songbird/assets/js/goToTheResults.js":
/*!**********************************************!*\
  !*** ./songbird/assets/js/goToTheResults.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goToTheResults": () => (/* binding */ goToTheResults)
/* harmony export */ });
/* harmony import */ var _createCardBird_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCardBird.js */ "./songbird/assets/js/createCardBird.js");
/* harmony import */ var _goToTheNextLevel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goToTheNextLevel.js */ "./songbird/assets/js/goToTheNextLevel.js");
/* harmony import */ var _addScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addScore.js */ "./songbird/assets/js/addScore.js");



const elMainWrapper = document.querySelector(".main-wrapper");
const elBtnPageQuiz = document.querySelector(".menu__link_active");
const elBtnPageResult = document.querySelector(".menu__link-result");

const goToTheResults = () => {
  while (elMainWrapper.firstChild) {
    elMainWrapper.removeChild(elMainWrapper.firstChild);
  }

  const elMainResults = (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.createElAndAddClass)("div", "main__results");
  (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.appendEl)(elMainResults, elMainWrapper);

  const elMainTitle = (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.createElAndAddClass)("h1", "main__title");
  (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.appendEl)(elMainTitle, elMainResults);

  const elMainText = (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.createElAndAddClass)("p", "main__text");
  (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.appendEl)(elMainText, elMainResults);

  elBtnPageQuiz.classList.remove("menu__link_active");
  elBtnPageResult.classList.remove("menu__link-result");
  elBtnPageResult.classList.add("menu__link_active");

  if (_addScore_js__WEBPACK_IMPORTED_MODULE_2__.score !== 30) {
    const elBtnNewGame = _goToTheNextLevel_js__WEBPACK_IMPORTED_MODULE_1__.bntNextLevel.cloneNode(true);
    (0,_createCardBird_js__WEBPACK_IMPORTED_MODULE_0__.appendEl)(elBtnNewGame, elMainResults);
    elBtnNewGame.textContent = "Сыграть ещё раз";
    elBtnNewGame.classList.add("main__btn-new-game");
    elBtnNewGame.addEventListener("click", () => {
      location.reload();
    });
  }
  elMainTitle.textContent = "Поздравляем!";
  elMainText.innerHTML = `Вы прошли викторину и набрали ${_addScore_js__WEBPACK_IMPORTED_MODULE_2__.score} из <span class="main__text-span">30</span> возможных баллов`;
};




/***/ }),

/***/ "./songbird/assets/js/muteAudio.js":
/*!*****************************************!*\
  !*** ./songbird/assets/js/muteAudio.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audio": () => (/* binding */ audio),
/* harmony export */   "birdSound": () => (/* binding */ birdSound),
/* harmony export */   "btnAudio": () => (/* binding */ btnAudio),
/* harmony export */   "btnBirdSound": () => (/* binding */ btnBirdSound),
/* harmony export */   "muteAudio": () => (/* binding */ muteAudio),
/* harmony export */   "selMuteBtnAudio": () => (/* binding */ selMuteBtnAudio),
/* harmony export */   "selPauseBtnBirdSound": () => (/* binding */ selPauseBtnBirdSound),
/* harmony export */   "selPlayBtnBirdSound": () => (/* binding */ selPlayBtnBirdSound),
/* harmony export */   "selUnmuteBtnAudio": () => (/* binding */ selUnmuteBtnAudio)
/* harmony export */ });

const audio = document.querySelector(".header__audio");
const btnAudio = document.querySelector(".header__btn-audio");
const selUnmuteBtnAudio = "header__btn-audio_unmute";
const selMuteBtnAudio = "header__btn-audio_mute";

const birdSound = document.querySelector(".player__sound");
const btnBirdSound = document.querySelector(".player__btn-sound");
const selPlayBtnBirdSound = "player__btn-sound_play";
const selPauseBtnBirdSound = "player__btn-sound_pause";

const playOrPauseAudio = (selMute, btn, element) => {
  if (btn.classList.contains(selMute)) {
    element.pause();
  } else {
    element.play();
  }
};

const muteAudio = (selUnmute, selMute, btn, element) => {
  btn.classList.toggle(selUnmute);
  btn.classList.toggle(selMute);
  playOrPauseAudio(selMute, btn, element);
};




/***/ }),

/***/ "./songbird/assets/js/player.js":
/*!**************************************!*\
  !*** ./songbird/assets/js/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCustomPlayer": () => (/* binding */ createCustomPlayer)
/* harmony export */ });
/* harmony import */ var _muteAudio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muteAudio.js */ "./songbird/assets/js/muteAudio.js");


const createCustomPlayer = (
  parentEl,
  objAudio,
  btnObjAudio,
  selectorPlay,
  selectorPause
) => {
  const durationContainer = parentEl.querySelector(".player__duration");
  const seekSlider = parentEl.querySelector(".player__seek-slider");
  const currentTimeContainer = parentEl.querySelector(".player__current-time");
  const volumePlayer = parentEl.querySelector(".player__volume");
  const btnMute = parentEl.querySelector(".player__btn-volume");

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const displayDuration = () => {
    durationContainer.textContent = calculateTime(objAudio.duration);
  };
  const setSliderMax = () => {
    seekSlider.max = Math.floor(objAudio.duration);
  };

  seekSlider.addEventListener("input", () => {
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    objAudio.pause();
    btnObjAudio.classList.remove(selectorPause);
    btnObjAudio.classList.add(selectorPlay);
  });
  seekSlider.addEventListener("change", () => {
    objAudio.currentTime = seekSlider.value;
    objAudio.play();
    btnObjAudio.classList.remove(selectorPlay);
    btnObjAudio.classList.add(selectorPause);
  });

  objAudio.addEventListener("timeupdate", () => {
    seekSlider.value = Math.floor(objAudio.currentTime);
    whilePlaying();
  });

  const whilePlaying = () => {
    seekSlider.value = Math.floor(objAudio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
  };

  volumePlayer.addEventListener("input", (e) => {
    const value = e.target.value;
    objAudio.volume = value / 100;
    if (objAudio.volume === 0) {
      objAudio.muted = true;
      btnMute.classList.remove("player__btn-volume_unmute");
      btnMute.classList.add("player__btn-volume_mute");
    } else {
      objAudio.muted = false;
      btnMute.classList.remove("player__btn-volume_mute");
      btnMute.classList.add("player__btn-volume_unmute");
    }
  });

  btnMute.addEventListener("click", () => {
    if (btnMute.classList.contains("player__btn-volume_unmute")) {
      objAudio.muted = true;
      btnMute.classList.remove("player__btn-volume_unmute");
      btnMute.classList.add("player__btn-volume_mute");
    } else if (objAudio.volume !== 0) {
      objAudio.muted = false;
      btnMute.classList.remove("player__btn-volume_mute");
      btnMute.classList.add("player__btn-volume_unmute");
    }
  });

  btnObjAudio.addEventListener("click", () => {
    (0,_muteAudio_js__WEBPACK_IMPORTED_MODULE_0__.muteAudio)(selectorPause, selectorPlay, btnObjAudio, objAudio);

    objAudio.addEventListener("ended", () => {
      btnObjAudio.classList.remove(selectorPause);
      btnObjAudio.classList.add(selectorPlay);
    });
  });

  if (objAudio.readyState > 0) {
    displayDuration();
    setSliderMax();
  } else {
    objAudio.addEventListener("loadedmetadata", () => {
      displayDuration();
      setSliderMax();
    });
  }
};



/***/ }),

/***/ "./songbird/assets/audio/error.mp3":
/*!*****************************************!*\
  !*** ./songbird/assets/audio/error.mp3 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d47ea23ba563edeae899.mp3";

/***/ }),

/***/ "./songbird/assets/audio/win.mp3":
/*!***************************************!*\
  !*** ./songbird/assets/audio/win.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5fa61d7951c7e2887a7.mp3";

/***/ }),

/***/ "./songbird/quiz-page/favicon.ico":
/*!****************************************!*\
  !*** ./songbird/quiz-page/favicon.ico ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "763b97e0bec56d702dee.ico";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"quiz-page": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./songbird/quiz-page/quiz-page.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quiz_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-page.html */ "./songbird/quiz-page/quiz-page.html");
/* harmony import */ var _assets_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style/normalize.css */ "./songbird/assets/style/normalize.css");
/* harmony import */ var _quiz_page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-page.css */ "./songbird/quiz-page/quiz-page.css");
/* harmony import */ var _assets_js_addRandomSound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/js/addRandomSound.js */ "./songbird/assets/js/addRandomSound.js");
/* harmony import */ var _assets_js_player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/js/player.js */ "./songbird/assets/js/player.js");
/* harmony import */ var _assets_js_createQuizList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/js/createQuizList.js */ "./songbird/assets/js/createQuizList.js");
/* harmony import */ var _assets_js_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/js/checkWinOrError.js */ "./songbird/assets/js/checkWinOrError.js");
/* harmony import */ var _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/js//muteAudio.js */ "./songbird/assets/js/muteAudio.js");
/* harmony import */ var _assets_js_goToTheNextLevel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/js/goToTheNextLevel.js */ "./songbird/assets/js/goToTheNextLevel.js");












const elPuzzlePlayer = document.querySelector(".puzzle__player");
(0,_assets_js_player_js__WEBPACK_IMPORTED_MODULE_4__.createCustomPlayer)(
  elPuzzlePlayer,
  _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_7__.birdSound,
  _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_7__.btnBirdSound,
  _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_7__.selPlayBtnBirdSound,
  _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_7__.selPauseBtnBirdSound
);
(0,_assets_js_addRandomSound_js__WEBPACK_IMPORTED_MODULE_3__.addRandomSound)();
(0,_assets_js_createQuizList_js__WEBPACK_IMPORTED_MODULE_5__.createQuizList)();
(0,_assets_js_checkWinOrError_js__WEBPACK_IMPORTED_MODULE_6__.checkWinOrError)();

_assets_js_goToTheNextLevel_js__WEBPACK_IMPORTED_MODULE_8__.bntNextLevel.addEventListener("click", _assets_js_goToTheNextLevel_js__WEBPACK_IMPORTED_MODULE_8__.goToTheNextLevel);
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

})();

/******/ })()
;
//# sourceMappingURL=quiz-page.js.map