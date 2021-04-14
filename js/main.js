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

/***/ "./js/modules/contact-page-scripts.js":
/*!********************************************!*\
  !*** ./js/modules/contact-page-scripts.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPageScripts)\n/* harmony export */ });\nfunction contactPageScripts() {\n  function isEmployed(bool) {\n    const jobSpan = document.querySelector('.job');\n\n    if (bool) {\n      jobSpan.classList.add('employed');\n      jobSpan.innerHTML = 'Não estou disponível para contratação.';\n    } else {\n      jobSpan.classList.remove('employed');\n      jobSpan.innerHTML = 'Estou disponível para contratação!';\n    }\n  }\n\n  isEmployed(false);\n\n  function modalScripts() {\n    const emailButton = document.querySelector('.email');\n    const modalContainer = document.querySelector('.modal-container');\n    const navBar = document.querySelector('nav');\n    const copyButton = document.querySelector('.button-copy');\n    const active = 'active';\n\n    emailButton.addEventListener('click', (e) => {\n      e.preventDefault();\n      modalContainer.classList.add(active);\n      navBar.style.zIndex = '-1';\n    });\n\n    modalContainer.addEventListener('click', (e) => {\n      if (\n        e.target.classList[0] === 'button-close'\n        || e.target.classList[0] === 'modal-container'\n      ) {\n        modalContainer.classList.remove(active);\n        navBar.style.zIndex = '1';\n      }\n    });\n\n    copyButton.addEventListener('click', () => {\n      if (modalContainer.classList[1] === active) {\n        document.querySelector('#email').select();\n        document.execCommand('copy');\n        copyButton.innerHTML = 'Copiado =D';\n        copyButton.style.background = '#70e000';\n\n        setTimeout(() => {\n          copyButton.style.background = 'var(--text)';\n          copyButton.innerHTML = 'Copiar';\n        }, 2000);\n      }\n    });\n  }\n\n  modalScripts();\n}\n\n\n//# sourceURL=webpack://portfolio/./js/modules/contact-page-scripts.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuMobile() {\n  const btnMobile = document.querySelector('nav button');\n  const menu = document.querySelector('.menu');\n  const links = menu.querySelectorAll('li a');\n\n  links.forEach((link) => {\n    link.addEventListener('click', () => {\n      const pathName = window.location.pathname;\n      if (link.id !== pathName) {\n        btnMobile.classList.remove('active');\n        menu.classList.remove('active');\n      }\n    });\n  });\n\n  function handleClick() {\n    btnMobile.classList.toggle('active');\n    menu.classList.toggle('active');\n  }\n\n  btnMobile.addEventListener('click', handleClick);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuMobile);\n\n\n//# sourceURL=webpack://portfolio/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/projects-page-scripts.js":
/*!*********************************************!*\
  !*** ./js/modules/projects-page-scripts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectsPageScripts)\n/* harmony export */ });\nfunction projectsPageScripts() {\n  const projectItems = document.querySelectorAll('.projects-items li');\n  const projectHighlighted = document.querySelectorAll('.active-item section');\n  const active = 'active';\n\n  projectItems[0].classList.add(active);\n\n  function activeProject(index) {\n    projectHighlighted.forEach((section) => {\n      section.classList.remove(active);\n    });\n    projectHighlighted[index].classList.add(active);\n  }\n\n  if (projectItems.length && projectHighlighted.length) {\n    projectHighlighted[0].classList.add(active);\n\n    projectItems.forEach((item, index) => {\n      item.addEventListener('click', () => {\n        const currentActiveItem = document.querySelector('li.active');\n        if (currentActiveItem.classList.length > 0) {\n          currentActiveItem.classList.remove(active);\n        } item.classList.add(active);\n\n        activeProject(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://portfolio/./js/modules/projects-page-scripts.js?");

/***/ }),

/***/ "./js/modules/toggleTheme.js":
/*!***********************************!*\
  !*** ./js/modules/toggleTheme.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleTheme() {\n  const btnToggleTheme = document.querySelector('.theme-toggle');\n  const iconTheme = document.querySelector('.fa-sun');\n\n  function handleClick() {\n    document.documentElement.classList.toggle('light-mode');\n    if (iconTheme.classList[1] === 'fa-sun') {\n      iconTheme.classList.remove('fa-sun');\n      iconTheme.classList.add('fa-moon');\n    } else {\n      iconTheme.classList.remove('fa-moon');\n      iconTheme.classList.add('fa-sun');\n    }\n  }\n\n  btnToggleTheme.addEventListener('click', handleClick);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTheme);\n\n\n//# sourceURL=webpack://portfolio/./js/modules/toggleTheme.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_toggleTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleTheme.js */ \"./js/modules/toggleTheme.js\");\n/* harmony import */ var _modules_projects_page_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projects-page-scripts.js */ \"./js/modules/projects-page-scripts.js\");\n/* harmony import */ var _modules_contact_page_scripts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact-page-scripts.js */ \"./js/modules/contact-page-scripts.js\");\n\n\n\n\n\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_toggleTheme_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nfunction singlePageApplication() {\n  const links = document.querySelectorAll('ul a');\n\n  function updatePage(newContent) {\n    const oldPage = document.querySelector('#root');\n    const oldTitle = document.querySelector('.title-container');\n\n    const container = document.createElement('div');\n    container.innerHTML = newContent;\n    const newPage = container.querySelector('#root');\n    const newTitle = container.querySelector('.title-container');\n\n    oldPage.innerHTML = newPage.innerHTML;\n    oldTitle.innerHTML = newTitle.innerHTML;\n    document.title = container.querySelector('title').innerText;\n  }\n\n  function activeScripts() {\n    const { pathname } = window.location;\n\n    if (pathname === '/projetos') (0,_modules_projects_page_scripts_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n    else if (pathname === '/contato') (0,_modules_contact_page_scripts_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n  }\n\n  async function fetchPage(url) {\n    const response = await fetch(url);\n    const pageContent = await response.text();\n\n    updatePage(pageContent);\n    activeScripts();\n  }\n\n  function handleClick(e) {\n    let url = e.target.href;\n    if (url.slice(-1) !== '/') url = `pages/${e.target.pathname}.html`;\n\n    fetchPage(url);\n    window.history.pushState(\n      null,\n      null,\n      url.replace('pages/', '').replace('.html', '').replace('index', ''),\n    );\n  }\n\n  window.addEventListener('popstate', () => {\n    let { pathname } = window.location;\n\n    if (\n      pathname === '/sobre'\n      || pathname === '/projetos'\n      || pathname === '/contato'\n    ) {\n      pathname = `/pages${pathname}.html`;\n    }\n\n    fetchPage(pathname);\n  });\n\n  links.forEach((link) => {\n    link.addEventListener('click', (e) => {\n      e.preventDefault();\n      const { pathname } = window.location;\n      if (link.id !== pathname) handleClick(e);\n    });\n  });\n}\n\nsinglePageApplication();\n\n\n//# sourceURL=webpack://portfolio/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;