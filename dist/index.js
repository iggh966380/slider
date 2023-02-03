/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var previous = document.querySelector('.front');\r\nvar next = document.querySelector('.back');\r\nvar box = document.querySelector('.box');\r\nvar wrapper = document.querySelector('.wrapper');\r\nvar elementArray = getAllSliderElement();\r\npreviousSlider(previous);\r\nnextSlider(next);\r\nfor (var i = 0; i < elementArray.length; i++) {\r\n    elementArray[i].style.left = \"\".concat(i * 100, \"px\");\r\n}\r\nfunction addLastElement(array) {\r\n    var clonedElement = array[0].cloneNode(true);\r\n    clonedElement.style.left = '300px';\r\n    wrapper.appendChild(clonedElement);\r\n}\r\nfunction addFirstElement(array) {\r\n    var clonedElement = array[2].cloneNode(true);\r\n    clonedElement.style.left = '-100px';\r\n    wrapper.insertBefore(clonedElement, getAllSliderElement()[0]);\r\n}\r\nfunction getAllSliderElement() {\r\n    return Array.from(document.querySelectorAll('[data-target=\"slider\"]'));\r\n}\r\nfunction nextSlider(element) {\r\n    element.addEventListener('click', function () {\r\n        addLastElement(getAllSliderElement());\r\n        setTimeout(function () {\r\n            for (var i = 0; i < getAllSliderElement().length; i++) {\r\n                getAllSliderElement()[i].style.left = \"\".concat(i * 100 - 100, \"px\");\r\n            }\r\n        });\r\n        setTimeout(function () {\r\n            wrapper.removeChild(getAllSliderElement()[0]);\r\n        }, 300);\r\n    });\r\n}\r\nfunction previousSlider(element) {\r\n    element.addEventListener('click', function () {\r\n        addFirstElement(getAllSliderElement());\r\n        setTimeout(function () {\r\n            for (var i = 0; i < getAllSliderElement().length; i++) {\r\n                getAllSliderElement()[i].style.left = \"\".concat(parseInt(getAllSliderElement()[i].style.left.split('px')[0]) + 100, \"px\");\r\n            }\r\n        });\r\n        setTimeout(function () {\r\n            wrapper.removeChild(getAllSliderElement()[3]);\r\n        }, 300);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://slider/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;