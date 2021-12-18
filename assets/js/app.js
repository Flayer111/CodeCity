/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

"use strict";
eval("\r\n\r\n// BURGER MENU\r\n\r\nconst headerBurger = document.querySelector('.header-burger')\r\nif (headerBurger) {\r\n    const headerMobile = document.querySelector('.header-mobile');\r\n    headerBurger.addEventListener(\"click\", function (e) {\r\n        document.body.classList.toggle('no-scroll');\r\n        headerBurger.classList.toggle('_active');\r\n        headerMobile.classList.toggle('_active');\r\n    });\r\n}\r\n\r\n// COMMERCE PAGE/ BLOCK1\r\n\r\nconst commerceActive1 = document.getElementById('button_1');\r\n\r\nif (commerceActive1) {\r\n    const commerceClicked = document.getElementById('clicked_1')\r\n    commerceActive1.addEventListener(\"click\", function(e) {\r\n        commerceActive1.classList.toggle('_commerce-active');\r\n        commerceClicked.classList.toggle('_commerce-active');\r\n    });\r\n}\r\n\r\n// COMMERCE PAGE/ BLOCK2\r\n\r\nconst commerceActive2 = document.getElementById('button_2');\r\n\r\nif (commerceActive2) {\r\n    const commerceClicked = document.getElementById('clicked_2')\r\n    commerceActive2.addEventListener(\"click\", function(e) {\r\n        commerceActive2.classList.toggle('_commerce-active');\r\n        commerceClicked.classList.toggle('_commerce-active');\r\n    });\r\n}\r\n\r\n// COMMERCE PAGE/ BLOCK3\r\n\r\nconst commerceActive3 = document.getElementById('button_3');\r\n\r\nif (commerceActive3) {\r\n    const commerceClicked = document.getElementById('clicked_3')\r\n    commerceActive3.addEventListener(\"click\", function(e) {\r\n        commerceActive3.classList.toggle('_commerce-active');\r\n        commerceClicked.classList.toggle('_commerce-active');\r\n    });\r\n}\r\n\r\n// COMMERCE PAGE/ BLOCK4\r\n\r\nconst commerceActive4 = document.getElementById('button_4');\r\n\r\nif (commerceActive4) {\r\n    const commerceClicked = document.getElementById('clicked_4')\r\n    commerceActive4.addEventListener(\"click\", function(e) {\r\n        commerceActive4.classList.toggle('_commerce-active');\r\n        commerceClicked.classList.toggle('_commerce-active');\r\n    });\r\n}\r\n\r\n// MODAL-CONTACT\r\n\r\nif (window.screen.height > 500) {\r\n    const contactUs = document.querySelectorAll('.btn__contact')\r\n    if (contactUs) {\r\n        contactUs.forEach(item => {\r\n            const modal = document.querySelector('.modal-contact')\r\n            item.addEventListener(\"click\", function(e) {\r\n                modal.classList.add('contact-active');\r\n                document.body.classList.add('no-scroll');\r\n            });\r\n            const closeModal = document.querySelector('.modal-contact-close')\r\n            if (closeModal) {\r\n                closeModal.addEventListener(\"click\", function(e) {\r\n                    modal.classList.remove('contact-active');\r\n                    document.body.classList.remove('no-scroll');\r\n                });\r\n            }\r\n        });\r\n    }\r\n} else {\r\n    const contactUs = document.querySelectorAll('.btn__contact')\r\n    if (contactUs) {\r\n        contactUs.forEach(item => {\r\n            item.addEventListener(\"click\", function(e) {\r\n                window.location.href = 'modal-mobile.html';\r\n            });\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;