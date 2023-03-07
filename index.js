/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./songbird/index.html":
/*!*****************************!*\
  !*** ./songbird/index.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./favicon.ico */ "./songbird/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/audio/filin-golos.mp3 */ "./songbird/assets/audio/filin-golos.mp3"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n    <title>Главная страница</title>\r\n  </head>\r\n  <body class=\"body\">\r\n    <div class=\"wrapper\">\r\n      <header class=\"header\">\r\n        <a href=\"./index.html\" class=\"header__logo\"></a>\r\n        <nav class=\"header__nav\">\r\n          <ul class=\"menu header__menu\">\r\n            <li class=\"menu__item menu__item_active\">\r\n              <a href=\"./index.html\" class=\"menu__link menu__link_active\">Главная страница</a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a href=\"./quiz-page.html\" class=\"menu__link\">Викторина</a>\r\n            </li>\r\n            <li class=\"menu__item\">\r\n              <a class=\"menu__link menu__link-result\">Результат</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <button class=\"header__btn-audio header__btn-audio_unmute\"></button>\r\n        <audio\r\n          src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n          autoplay\r\n          loop\r\n          class=\"header__audio\"\r\n        ></audio>\r\n      </header>\r\n\r\n      <main class=\"main\">\r\n        <div class=\"main-wrapper\">\r\n          <h1 class=\"main__title\">Добро пожаловать!</h1>\r\n          <h2 class=\"main__subtitle\">\r\n            Сможешь ли ты узнать всех птиц по их чудным голосам?<br />\r\n            Давай проверим!\r\n          </h2>\r\n          <button class=\"main__btn-start\">\r\n            <a href=\"./quiz-page.html\" class=\"btn-start__link\">Начать игру</a>\r\n          </button>\r\n        </div>\r\n      </main>\r\n\r\n      <footer class=\"footer\">\r\n        <div class=\"footer__wrapper\">\r\n          <p class=\"footer__year\">2022</p>\r\n          <a href=\"https://github.com/SogoHlopec\" class=\"footer__link-github\">\r\n            GitHub: SogoHlopec\r\n          </a>\r\n          <a href=\"https://rs.school/js/\" class=\"footer__rss-logo\"></a>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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

/***/ "./songbird/index.css":
/*!****************************!*\
  !*** ./songbird/index.css ***!
  \****************************/
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

/***/ "./songbird/assets/audio/filin-golos.mp3":
/*!***********************************************!*\
  !*** ./songbird/assets/audio/filin-golos.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f94302aad463e641801.mp3";

/***/ }),

/***/ "./songbird/favicon.ico":
/*!******************************!*\
  !*** ./songbird/favicon.ico ***!
  \******************************/
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
/******/ 			"index": 0
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
/*!***************************!*\
  !*** ./songbird/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./songbird/index.html");
/* harmony import */ var _assets_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style/normalize.css */ "./songbird/assets/style/normalize.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./songbird/index.css");
/* harmony import */ var _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/muteAudio.js */ "./songbird/assets/js/muteAudio.js");






_assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.btnAudio.addEventListener("click", () =>
  (0,_assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.muteAudio)(_assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.selUnmuteBtnAudio, _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.selMuteBtnAudio, _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.btnAudio, _assets_js_muteAudio_js__WEBPACK_IMPORTED_MODULE_3__.audio)
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

})();

/******/ })()
;
//# sourceMappingURL=index.js.map