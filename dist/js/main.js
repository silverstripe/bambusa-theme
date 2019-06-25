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
  var $carousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.carousel');
  var $carouselPause = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#carousel-pause');
  var $carouselPlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#carousel-play');
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

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\n@import \"../../../starter/node_modules/bootstrap/scss/functions\";\n       ^\n      Can't find stylesheet to import.\n  ╷\n2 │ @import \"../../../starter/node_modules/bootstrap/scss/functions\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  stdin 2:9  root stylesheet\n      in /Users/acarlino/Sites/bambusa-theme/src/scss/editor.scss (line 2, column 9)\n    at runLoaders (/Users/acarlino/Sites/bambusa-theme/node_modules/webpack/lib/NormalModule.js:301:20)\n    at /Users/acarlino/Sites/bambusa-theme/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/acarlino/Sites/bambusa-theme/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/acarlino/Sites/bambusa-theme/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/Users/acarlino/Sites/bambusa-theme/node_modules/sass-loader/lib/loader.js:52:13)\n    at Function.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:24354:48)\n    at wO.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:15295:15)\n    at uP.vq (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8447:3)\n    at iM.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8377:25)\n    at iM.cv (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8364:6)\n    at pu.cv (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8154:35)\n    at Object.m (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1383:19)\n    at /Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:5066:51\n    at xe.a (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1394:71)\n    at xe.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8169:23)\n    at vR.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8164:25)\n    at uP.vq (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8447:3)\n    at iM.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8377:25)\n    at iM.cv (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8364:6)\n    at Object.eval (eval at CJ (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:648:15), <anonymous>:3:37)\n    at uP.vq (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8447:3)");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\n@import \"../../../starter/node_modules/bootstrap/scss/functions\";\n       ^\n      Can't find stylesheet to import.\n  ╷\n6 │ @import \"../../../starter/node_modules/bootstrap/scss/functions\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  stdin 6:9  root stylesheet\n      in /Users/acarlino/Sites/bambusa-theme/src/scss/main.scss (line 6, column 9)\n    at runLoaders (/Users/acarlino/Sites/bambusa-theme/node_modules/webpack/lib/NormalModule.js:301:20)\n    at /Users/acarlino/Sites/bambusa-theme/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/acarlino/Sites/bambusa-theme/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/acarlino/Sites/bambusa-theme/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/Users/acarlino/Sites/bambusa-theme/node_modules/sass-loader/lib/loader.js:52:13)\n    at Function.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:24354:48)\n    at wO.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:15295:15)\n    at uP.vq (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8447:3)\n    at iM.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8377:25)\n    at iM.cv (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8364:6)\n    at pu.cv (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8154:35)\n    at Object.m (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1383:19)\n    at /Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:5066:51\n    at xe.a (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1394:71)\n    at xe.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8169:23)\n    at vR.$2 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8164:25)\n    at uP.vq (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8447:3)\n    at iM.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8377:25)\n    at iM.cv (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8364:6)\n    at Object.eval (eval at CJ (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:648:15), <anonymous>:3:37)\n    at uP.vq (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9034:42)\n    at uP.vp (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:9036:32)\n    at iy.uC (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8384:46)\n    at uo.$0 (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8526:7)\n    at Object.eG (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:1512:80)\n    at ad.ba (/Users/acarlino/Sites/bambusa-theme/node_modules/sass/sass.dart.js:8447:3)");

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ./src/scss/editor.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/acarlino/Sites/bambusa-theme/src/js/main.js */"./src/js/main.js");
__webpack_require__(/*! /Users/acarlino/Sites/bambusa-theme/src/scss/main.scss */"./src/scss/main.scss");
module.exports = __webpack_require__(/*! /Users/acarlino/Sites/bambusa-theme/src/scss/editor.scss */"./src/scss/editor.scss");


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