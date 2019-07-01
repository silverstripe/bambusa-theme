<<<<<<< HEAD
!function(e){var o={};function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(t,r,function(o){return e[o]}.bind(null,r));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="/",n(n.s=1)}([function(e,o){e.exports=jQuery},function(e,o,n){n(2),n(3),e.exports=n(8)},function(e,o,n){"use strict";n.r(o);var t,r,u,c=n(0),i=n.n(c);t=i()(".carousel"),r=i()("#carousel-pause"),u=i()("#carousel-play"),t.carousel({wrap:!0,interval:1e4}),r.click(function(){t.carousel("pause"),r.hide(),u.show().focus()}),u.click(function(){t.carousel("cycle"),u.hide(),r.show().focus()}),i()(document).off("keydown.bs.dropdown.data-api","[data-toggle=dropdown], [role=menu]",i.a.fn.dropdown.Constructor.prototype.keydown)},function(e,o){},,,,,function(e,o){}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/carousel.js":
/*!***************************************!*\
  !*** ./src/js/components/carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Carousel Documentation: https://paypal.github.io/bootstrap-accessibility-plugin/demo.html#carousel
  var $carousels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.carousel');
  $carousels.each(function () {
    var $carousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var $carouselPause = $carousel.find('.carousel-pause');
    var $carouselPlay = $carousel.find('.carousel-play');
    $carousel.carousel({
      wrap: true,
      interval: 10000
    });
    $carouselPause.click(function () {
      $carousel.carousel('pause');
      $carouselPause.hide();
      $carouselPlay.show().focus();
    });
    $carouselPlay.click(function () {
      $carousel.carousel('cycle');
      $carouselPlay.hide();
      $carouselPause.show().focus();
    });
  });
});

/***/ }),

/***/ "./src/js/components/navigation.js":
/*!*****************************************!*\
  !*** ./src/js/components/navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  /**
   * Unbind the space bar handler that is added in the bootstrap-accessibility plugin,
   * the functionality is recreated in this component.
   *
   * See: bootstrap-accessibility.js, line 130 (ish)
   */
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('keydown.bs.dropdown.data-api', '[data-toggle=dropdown], [role=menu]', jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.dropdown.Constructor.prototype.keydown);
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/carousel */ "./src/js/components/carousel.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation */ "./src/js/components/navigation.js");
// Define local components


Object(_components_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_components_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/scss/editor.scss":
/*!******************************!*\
  !*** ./src/scss/editor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ./src/scss/editor.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/acarlino/Sites/bambusa-demo/themes/bambusa/src/js/main.js */"./src/js/main.js");
__webpack_require__(/*! /Users/acarlino/Sites/bambusa-demo/themes/bambusa/src/scss/main.scss */"./src/scss/main.scss");
module.exports = __webpack_require__(/*! /Users/acarlino/Sites/bambusa-demo/themes/bambusa/src/scss/editor.scss */"./src/scss/editor.scss");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
>>>>>>> Initial commit of Carousel block
