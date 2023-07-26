/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/pageDetail.js":
/*!**************************************!*\
  !*** ./src/components/pageDetail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar apiKey = \"8090d23394824a678c0c0017f14fc869\";\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(apiKey)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-detail\\\">\\n          <div class=\\\"article\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <p class=\\\"description\\\"></p>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://single_page/./src/components/pageDetail.js?");

/***/ }),

/***/ "./src/components/pageList.js":
/*!************************************!*\
  !*** ./src/components/pageList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar apiKey = \"8090d23394824a678c0c0017f14fc869\";\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        return \"<article class=\\\"cardGame\\\">\\n          <img src=\\\"\".concat(article.background_image, \"\\\">\\n          <h1>\").concat(article.name, \"</h1>\\n          <h2>\").concat(article.released, \"</h2>\\n          <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n        </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n    };\n    var fetchList = function fetchList(url) {\n      var finalURL = \"\".concat(url, \"&search=\").concat(argument);\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n    var today = new Date();\n    var nextMonth = new Date(today);\n    nextMonth.setMonth(nextMonth.getMonth() + 1);\n    var formattedToday = today.toISOString().split('T')[0];\n    var formattedNextMonth = nextMonth.toISOString().split('T')[0];\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(apiKey, \"&dates=\").concat(formattedToday, \",\").concat(formattedNextMonth, \"&ordering=released&page_size=9\"));\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">Loading...</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://single_page/./src/components/pageList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var _components_pageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pageDetail */ \"./src/components/pageDetail.js\");\n/* harmony import */ var _components_pageList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pageList */ \"./src/components/pageList.js\");\n\n\n\n\n\n// console.log(process.env.API_KEY);\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\n\n//# sourceURL=webpack://single_page/./src/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_pageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pageList */ \"./src/components/pageList.js\");\n/* harmony import */ var _components_pageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pageDetail */ \"./src/components/pageDetail.js\");\n\n\nvar routes = {\n  '': _components_pageList__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'pagedetail': _components_pageDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://single_page/./src/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://single_page/./src/style/index.scss?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;