/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../assets/barre-hr.png":
/*!******************************!*\
  !*** ../assets/barre-hr.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/ad4eed471eeb8b7c40f6620ba65cec7b.png\";\n\n//# sourceURL=webpack:///../assets/barre-hr.png?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/About/about.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/About/about.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".about-group {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding-top: 2em; }\\n\\n.about-person {\\n  width: 50%;\\n  display: flex;\\n  justify-content: center;\\n  padding: 1vh 4vh; }\\n\\n.about-picture {\\n  width: 100%;\\n  max-width: 100px;\\n  height: 100px;\\n  transition: -webkit-transform .2s;\\n  transition: transform .2s;\\n  transition: transform .2s, -webkit-transform .2s;\\n  border-radius: 50%; }\\n\\n.about-picture:hover {\\n  -webkit-transform: scale(1.3);\\n          transform: scale(1.3); }\\n\\n.about-picturetext {\\n  width: 50%;\\n  margin: auto 10px; }\\n\\n.about-text {\\n  padding: 7vh; }\\n\\n.about-text h1 {\\n  font-family: 'mailart_rubberstampregular', 'Times New Roman', Times, serif;\\n  font-size: 20px;\\n  font-weight: 600; }\\n\\n.about-text p {\\n  margin-top: 3vh; }\\n\\n.about-hoverdiv {\\n  background-color: #002F40;\\n  border: solid 3px solid black;\\n  border-radius: 5px;\\n  padding: 10px;\\n  color: #FEEFD4; }\\n  .about-hoverdiv :nth-child(1) {\\n    font-weight: 700;\\n    font-style: italic; }\\n\\n.about-hoverp {\\n  font-size: 20px; }\\n\\n@media (min-width: 768px) and (max-width: 1224px) {\\n  .about-text {\\n    padding-bottom: 4em; }\\n  .about-text h1 {\\n    font-size: 30px; }\\n  .about-text p {\\n    font-size: 1.5em; }\\n  .about-picturetext {\\n    font-size: 1.5em; } }\\n\\n@media screen and (min-width: 1224px) {\\n  .about-text {\\n    padding: 10vh;\\n    margin: 0 25%;\\n    width: 800px; }\\n  .about-text h1 {\\n    font-size: 30px; }\\n  .about-text p {\\n    font-size: 1.2em;\\n    margin-top: 3vh;\\n    width: auto; }\\n  .about-picturetext {\\n    display: none; }\\n  .about-person {\\n    width: 33%; }\\n  .about-group {\\n    padding-left: 30vh;\\n    padding-right: 30vh; }\\n  .about-group :nth-child(n+4) {\\n    width: 25%; }\\n  .about-picture {\\n    width: 140px;\\n    max-width: 140px;\\n    height: 140px; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/About/about.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/App/app.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/App/app.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#app {\\n  width: 100%;\\n  background-color: #f7f1e3;\\n  color: #002f40; }\\n\\n.special-width {\\n  width: 85%;\\n  margin: 0 auto; }\\n  @media (min-width: 1200px) {\\n    .special-width {\\n      width: 60%; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/App/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Contact/contact.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Contact/contact.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".contact {\\n  width: 70vw;\\n  margin: 0 auto; }\\n  .contact-booking {\\n    padding: 3vh;\\n    text-align: center; }\\n  .contact-bookingTitle {\\n    margin-bottom: 10px; }\\n  .contact-bookingDiv {\\n    margin-top: 40px; }\\n  .contact-bookingType {\\n    margin-bottom: 20px; }\\n  .contact-form {\\n    text-align: center; }\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 3vh;\\n  margin: 0 auto; }\\n\\ninput, select, textarea {\\n  padding: 10px;\\n  margin-bottom: 5px;\\n  margin-top: 5px;\\n  font-size: 1em;\\n  border: 3px solid grey;\\n  border-radius: 5px; }\\n\\n#title-form {\\n  margin-bottom: 10px; }\\n\\n@media screen and (min-width: 850px) {\\n  .contact {\\n    display: flex; }\\n    .contact-booking {\\n      width: 50%; }\\n    .contact-form {\\n      width: 50%; }\\n  form {\\n    width: 500px; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Contact/contact.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Discography/discography.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Discography/discography.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".discoscreen {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 70vw;\\n  margin: 0 auto; }\\n  .discoscreen-section {\\n    margin: 0 auto;\\n    width: 40%;\\n    padding: 2vh 12vh; }\\n  .discoscreen-text {\\n    padding-top: 4vh;\\n    text-align: center;\\n    margin-bottom: 1vh;\\n    font-weight: 700;\\n    font-size: 1.7rem; }\\n\\n.discography {\\n  padding: 7vh; }\\n\\nimg {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0 auto; }\\n\\n.slick-next:before, .slick-prev:before {\\n  color: #002f40; }\\n\\n.discomobile {\\n  height: 35vh; }\\n  .discomobile-text {\\n    font-family: 'mailart_rubberstampregular', 'Times New Roman', Times, serif;\\n    padding-top: 5vh;\\n    text-align: center;\\n    font-weight: 700;\\n    font-size: 1.5rem; }\\n  .discomobile-link {\\n    font-weight: 700;\\n    position: relative;\\n    display: block;\\n    margin-left: 35%;\\n    margin-right: 25%;\\n    width: 40%;\\n    padding-top: 10px; }\\n\\n@media (min-width: 768px) {\\n  .discography {\\n    padding: 7vh 12vh; } }\\n\\n@media screen and (min-width: 1224px) {\\n  .discography {\\n    padding: 7vh 200px; }\\n  .flip {\\n    width: 100%;\\n    height: 300px;\\n    -webkit-perspective: 1000px;\\n            perspective: 1000px; }\\n  .flip-card {\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    transition: 1.2s ease;\\n    -webkit-backface-visibility: hidden;\\n            backface-visibility: hidden; }\\n  .flip-front {\\n    -webkit-transform: rotateY(-180deg);\\n    transform: rotateY(-180deg); }\\n  .flip-back:hover {\\n    -webkit-transform: rotateY(180deg);\\n    transform: rotateY(180deg); }\\n  .flip-back:hover + .flip-front {\\n    -webkit-transform: rotateY(0deg);\\n    transform: rotateY(0deg); } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Discography/discography.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Footer/footer.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Footer/footer.scss ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".footer {\\n  align-items: center;\\n  background-color: #002F3F;\\n  color: #F7F1E3;\\n  display: flex;\\n  height: 8vh;\\n  justify-content: center; }\\n  .footer-content {\\n    font-size: 0.9rem; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Footer/footer.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Gallery/gallery.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Gallery/gallery.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".media-photo img {\\n  width: 100%;\\n  height: 100%; }\\n\\n.media-photo {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  width: 93%;\\n  margin: 10vh auto 0;\\n  padding-bottom: 2em; }\\n  .media-photo-main {\\n    width: 100%; }\\n  .media-photo-small {\\n    width: 48%;\\n    margin: .2em auto 0; }\\n  @media (min-width: 900px) {\\n    .media-photo {\\n      display: grid;\\n      grid-template-columns: 32% 32% 32%;\\n      grid-template-rows: 20vh 20vh 20vh;\\n      grid-column-gap: 1vw;\\n      grid-row-gap: 2vh;\\n      grid-auto-flow: row; }\\n      .media-photo-main {\\n        width: 100%;\\n        grid-column: 1 / 3;\\n        grid-row: 1 / 3; }\\n      .media-photo-small {\\n        width: 100%;\\n        margin: 0; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Gallery/gallery.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Home/home.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Home/home.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".home {\\n  margin-top: 6vh;\\n  height: 94vh;\\n  background-color: #F7F1E3; }\\n  .home-logo {\\n    height: 62vh;\\n    width: 100%; }\\n  .home-flexlogo {\\n    height: 32vh;\\n    display: flex;\\n    padding-bottom: 20vh;\\n    justify-content: center; }\\n  .home-circle {\\n    width: 15%;\\n    margin: 0 2vh; }\\n\\n@media (min-width: 768px) {\\n  .home-logo {\\n    padding: 8vh; } }\\n\\n@media screen and (min-width: 1224px) {\\n  .home-flexlogo {\\n    margin: 0 200px; }\\n  .home-circle {\\n    width: 150px;\\n    padding: 0 2vh;\\n    margin: 0 2vh; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Home/home.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Main/main.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Main/main.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#main {\\n  background-color: #f7f1e3; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Main/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Media/media.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Media/media.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".media {\\n  padding-top: 3vh; }\\n  .media-video-one {\\n    margin: 2rem 0; }\\n    @media screen and (min-width: 1024px) {\\n      .media-video-one {\\n        margin: 2rem 15rem; } }\\n    @media (min-width: 1200px) {\\n      .media-video-one iframe {\\n        height: 500px; } }\\n  .media-video-carousel {\\n    width: 90%;\\n    margin: 5vh auto; }\\n    @media screen and (min-width: 1024px) {\\n      .media-video-carousel {\\n        width: 100%;\\n        margin: 2rem auto; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Media/media.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Nav/nav.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Nav/nav.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".nav {\\n  z-index: 1000;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  background-color: #002f40;\\n  color: #f7f1e3;\\n  height: 9vh;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 1rem;\\n  text-transform: uppercase;\\n  font-size: .8em;\\n  font-weight: 300; }\\n  .nav-nav-link {\\n    padding: 0 .4em;\\n    transition: 0.3s ease;\\n    font-size: 1.3em;\\n    font-weight: 700;\\n    font-family: 'mailart_rubberstampregular', 'Times New Roman', Times, serif; }\\n  .nav-nav-link:hover {\\n    border-bottom: 4px solid #d73b25;\\n    padding-bottom: 5px;\\n    border-top: 4px solid #d73b25;\\n    padding-top: 5px; }\\n\\n@media (max-width: 899px) {\\n  .onglet-audio {\\n    top: 0px !important; } }\\n\\n@media screen and (min-width: 900px) {\\n  .nav {\\n    height: 6vh; } }\\n\\n/* Position and sizing of burger button */\\n.bm-burger-button {\\n  position: fixed;\\n  width: 36px;\\n  height: 30px;\\n  right: 20px;\\n  top: 10px; }\\n\\n/* Color/shape of burger icon bars */\\n.bm-burger-bars {\\n  background: #f7f1e3;\\n  border-radius: 2em; }\\n\\n/* Color/shape of burger icon bars on hover*/\\n.bm-burger-bars-hover {\\n  background: #d73b25; }\\n\\n/* Position and sizing of clickable cross button */\\n.bm-cross-button {\\n  height: 24px;\\n  width: 24px; }\\n\\n/* Color/shape of close button cross */\\n.bm-cross {\\n  background: #f7f1e3; }\\n\\n/*\\nSidebar wrapper styles\\nNote: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases\\n*/\\n.bm-menu-wrap {\\n  position: fixed;\\n  height: 100%;\\n  top: 0px; }\\n\\n/* General sidebar styles */\\n.bm-menu {\\n  background: #002f40;\\n  padding: 2.5em 1.5em 0;\\n  font-size: 1.15em; }\\n\\n/* Morph shape necessary with bubble or elastic */\\n.bm-morph-shape {\\n  fill: #373a47; }\\n\\n/* Wrapper for item list */\\n.bm-item-list {\\n  color: #f7f1e3;\\n  padding: 0.8em; }\\n\\n/* Individual item */\\n.bm-item {\\n  display: inline-block; }\\n\\n/* Styling of overlay */\\n.bm-overlay {\\n  background: rgba(0, 0, 0, 0.3);\\n  top: 0px;\\n  left: 0px; }\\n\\n.audio-player {\\n  width: 100% !important;\\n  position: fixed;\\n  top: 50px;\\n  background-color: #323234;\\n  flex-wrap: wrap;\\n  padding: 2vh;\\n  z-index: 2000;\\n  color: white !important; }\\n  @media screen and (min-width: 899px) {\\n    .audio-player {\\n      width: 50% !important;\\n      position: fixed;\\n      top: 100px;\\n      background-color: #002F3F;\\n      flex-wrap: wrap;\\n      padding: 2vh;\\n      z-index: 2000;\\n      border-top-right-radius: 7px;\\n      border-bottom-right-radius: 7px; } }\\n\\n.player-audio {\\n  display: none; }\\n\\n.onglet-audio:hover .player-audio {\\n  display: block; }\\n\\n.onglet-audio {\\n  top: 100px;\\n  position: fixed;\\n  background-color: #002F3F;\\n  text-align: center;\\n  z-index: 2000;\\n  border-top-right-radius: 50%;\\n  border-bottom-right-radius: 50%; }\\n  @media screen and (min-width: 899px) {\\n    .onglet-audio {\\n      top: 100px;\\n      position: fixed;\\n      background-color: #002F3F;\\n      text-align: center;\\n      z-index: 2000;\\n      border-top-right-radius: 50%;\\n      border-bottom-right-radius: 50%; } }\\n\\n.onglet-audio p {\\n  color: white;\\n  padding: 1.1vh;\\n  padding-right: 1.5vh;\\n  font-size: 1.7em; }\\n  @media screen and (min-width: 899px) {\\n    .onglet-audio p {\\n      color: white;\\n      padding: 1.1vh;\\n      padding-right: 1.5vh;\\n      font-size: 1.7em; } }\\n\\n#play {\\n  width: 2em;\\n  margin-left: 12vh; }\\n  @media screen and (min-width: 899px) {\\n    #play {\\n      width: 2em; } }\\n\\n#play-icon {\\n  height: 2em !important;\\n  padding-right: 10px; }\\n  @media screen and (min-width: 899px) {\\n    #play-icon {\\n      height: 2em !important;\\n      padding-right: 10px; } }\\n\\n#rewind {\\n  width: 2em; }\\n  @media screen and (min-width: 899px) {\\n    #rewind {\\n      width: 2em; } }\\n\\n#rewind-icon {\\n  height: 2em !important;\\n  padding-right: 10px; }\\n  @media screen and (min-width: 899px) {\\n    #rewind-icon {\\n      height: 2em !important;\\n      padding-right: 10px; } }\\n\\n#forward {\\n  width: 2em; }\\n  @media screen and (min-width: 899px) {\\n    #forward {\\n      width: 2em; } }\\n\\n#forward-icon {\\n  height: 2em !important;\\n  padding-right: 10px; }\\n  @media screen and (min-width: 899px) {\\n    #forward-icon {\\n      height: 2em !important;\\n      padding-right: 10px; } }\\n\\n#loop {\\n  width: 2em; }\\n  @media screen and (min-width: 899px) {\\n    #loop {\\n      width: 2em; } }\\n\\n#loop-icon {\\n  height: 2em !important;\\n  padding-right: 10px; }\\n  @media screen and (min-width: 899px) {\\n    #loop-icon {\\n      height: 2em !important;\\n      padding-right: 10px; } }\\n\\n.audio-player-track-name {\\n  width: 100px;\\n  margin-left: 10vh;\\n  margin-right: 10vh; }\\n  @media screen and (min-width: 899px) {\\n    .audio-player-track-name {\\n      width: 50px; } }\\n\\n.marquee {\\n  width: 150px;\\n  font-size: 15px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Nav/nav.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/News/news.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/News/news.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../../assets/barre-hr.png */ \"../assets/barre-hr.png\"));\n\n// Module\nexports.push([module.i, \".news-article-split {\\n  width: 100%;\\n  height: 10px;\\n  margin: 2em 0 1em;\\n  background: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-size: 100% 10px; }\\n  @media (min-width: 600px) {\\n    .news-article-split {\\n      height: 15px;\\n      background-size: 100% 15px;\\n      margin: 3em 0 2em; } }\\n\\n.news-article-header {\\n  font-family: 'mailart_rubberstampregular', serif;\\n  grid-area: header;\\n  margin: 1rem 0;\\n  padding-left: 2rem;\\n  font-size: 1.3em;\\n  font-weight: 700; }\\n  @media (min-width: 600px) {\\n    .news-article-header {\\n      padding-left: 5rem; } }\\n  @media (min-width: 1200px) {\\n    .news-article-header {\\n      font-size: 1.5em;\\n      padding-left: 10rem; } }\\n\\n.news-article-aside {\\n  margin-top: .4em;\\n  padding-left: 2rem;\\n  font-size: .7em;\\n  font-style: italic; }\\n  .news-article-aside-date {\\n    display: inline-block;\\n    margin-right: .4rem; }\\n    @media (min-width: 1200px) {\\n      .news-article-aside-date {\\n        display: block;\\n        font-size: 1.5em; } }\\n  @media (min-width: 600px) {\\n    .news-article-aside {\\n      padding-left: 5rem;\\n      font-size: .8em; } }\\n  @media (min-width: 1200px) {\\n    .news-article-aside {\\n      display: inline-block;\\n      vertical-align: top;\\n      width: 25%;\\n      padding-left: 10rem; } }\\n\\n.news-article-section {\\n  margin-top: .4rem;\\n  padding-left: 2em;\\n  font-size: .9em;\\n  font-family: 'gentium_basicregular', serif; }\\n  .news-article-section p {\\n    margin-top: 1em;\\n    font-family: 'gentium_basicregular', serif; }\\n    @media (min-width: 1200px) {\\n      .news-article-section p {\\n        margin-top: 0; } }\\n  @media (min-width: 600px) {\\n    .news-article-section {\\n      padding-left: 5rem; } }\\n  @media (min-width: 1200px) {\\n    .news-article-section {\\n      display: inline-block;\\n      width: 70%;\\n      font-size: 1.2em;\\n      padding-left: 0; } }\\n\\n.wp-block-image {\\n  margin-top: .7em;\\n  width: 50%; }\\n  .wp-block-image img {\\n    width: 100% !important; }\\n  .wp-block-image figcaption {\\n    margin-top: .2em; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/News/news.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Section/section.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Section/section.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".header-title {\\n  font-family: 'mailart_rubberstampregular', serif;\\n  font-variant: small-caps;\\n  position: absolute;\\n  bottom: .4em;\\n  right: .6em;\\n  font-size: 3em;\\n  font-weight: bold;\\n  color: #f7f1e3;\\n  text-transform: capitalize; }\\n\\n.content {\\n  margin: 1em 0; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Section/section.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Social/social.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Social/social.scss ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".social {\\n  display: flex;\\n  align-items: stretch;\\n  font-size: 1.4em;\\n  color: #f7f1e3; }\\n  .social-link {\\n    padding: 0 .5em; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Social/social.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Tour/tour.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/Tour/tour.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".tour {\\n  padding: 2em 0;\\n  text-align: center;\\n  font-family: 'mailart_rubberstampregular', serif; }\\n  @media (min-width: 1200px) {\\n    .tour {\\n      font-size: 1.5em;\\n      padding: .5em .7em; } }\\n  .tour-date {\\n    margin-top: 1em;\\n    margin-bottom: 1.5em;\\n    padding: 1em 1em;\\n    font-size: .8em;\\n    border: 1px solid #002f40;\\n    display: grid;\\n    grid-template-columns: 20% 30% 30% 10% 10%;\\n    grid-template-areas: \\\"date city venue map ticket\\\";\\n    justify-items: start;\\n    align-items: center; }\\n    .tour-date-date {\\n      grid-area: date;\\n      font-weight: 600;\\n      line-height: 1.3em; }\\n      @media (min-width: 600px) {\\n        .tour-date-date {\\n          padding-left: 2em; } }\\n      .tour-date-date-star {\\n        font-size: .6em;\\n        -webkit-transform: rotate(-25deg);\\n                transform: rotate(-25deg); }\\n      .tour-date-date-year {\\n        padding-left: .2em;\\n        letter-spacing: .15em;\\n        font-weight: 400;\\n        font-style: italic; }\\n    .tour-date-city {\\n      grid-area: city;\\n      font-variant: small-caps;\\n      font-size: 1.4em; }\\n    .tour-date-venue {\\n      grid-area: venue;\\n      font-weight: 100;\\n      text-align: left; }\\n    .tour-date-map {\\n      grid-area: map;\\n      justify-self: center; }\\n    .tour-date-ticket {\\n      grid-area: ticket;\\n      justify-self: center; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Tour/tour.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/VideoSlider/videoSlider.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/components/VideoSlider/videoSlider.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".carousel-video-single {\\n  padding: 0 .5em; }\\n  @media screen and (min-width: 750px) {\\n    .carousel-video-single {\\n      height: 20vh; } }\\n  @media screen and (min-width: 750px) {\\n    .carousel-video-single {\\n      height: 18vh; } }\\n\\n.video-div {\\n  padding: 0 .2em; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/VideoSlider/videoSlider.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!slick-carousel/slick/slick.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/slick-carousel/slick/slick.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!slick-carousel/slick/slick-theme.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/slick-carousel/slick/slick-theme.css\"), \"\");\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts/stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/fonts/stylesheet.css\"), \"\");\n\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote::before, blockquote::after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Reset perso */\\na, del, ins {\\n  text-decoration: none; }\\n\\na {\\n  color: inherit; }\\n\\nlabel, button {\\n  cursor: pointer; }\\n\\nhtml {\\n  box-sizing: border-box; }\\n\\n*, *::before, *::after {\\n  box-sizing: inherit; }\\n\\ninput, button {\\n  outline: 0; }\\n\\nbody {\\n  font-family: 'gentium_basicregular', serif;\\n  color: #002f40;\\n  background-color: #f7f1e3 !important; }\\n\\nhtml {\\n  scroll-behavior: smooth; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts/stylesheet.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/fonts/stylesheet.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./mailartrubberstamp-regular-webfont.woff2 */ \"./src/styles/fonts/mailartrubberstamp-regular-webfont.woff2\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./mailartrubberstamp-regular-webfont.woff */ \"./src/styles/fonts/mailartrubberstamp-regular-webfont.woff\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./genbasb-webfont.woff2 */ \"./src/styles/fonts/genbasb-webfont.woff2\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./genbasb-webfont.woff */ \"./src/styles/fonts/genbasb-webfont.woff\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./genbasbi-webfont.woff2 */ \"./src/styles/fonts/genbasbi-webfont.woff2\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ./genbasbi-webfont.woff */ \"./src/styles/fonts/genbasbi-webfont.woff\"));\nvar ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ./genbasi-webfont.woff2 */ \"./src/styles/fonts/genbasi-webfont.woff2\"));\nvar ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ./genbasi-webfont.woff */ \"./src/styles/fonts/genbasi-webfont.woff\"));\nvar ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ./genbasr-webfont.woff2 */ \"./src/styles/fonts/genbasr-webfont.woff2\"));\nvar ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ./genbasr-webfont.woff */ \"./src/styles/fonts/genbasr-webfont.woff\"));\n\n// Module\nexports.push([module.i, \"/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on April 4, 2019 */\\n\\n\\n\\n@font-face {\\n    font-family: 'mailart_rubberstampregular';\\n    src: url(\" + ___CSS_LOADER_URL___0___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL___1___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n\\n}\\n\\n\\n\\n\\n@font-face {\\n    font-family: 'gentium_basicbold';\\n    src: url(\" + ___CSS_LOADER_URL___2___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL___3___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n\\n}\\n\\n\\n\\n\\n@font-face {\\n    font-family: 'gentium_basicbold_italic';\\n    src: url(\" + ___CSS_LOADER_URL___4___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL___5___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n\\n}\\n\\n\\n\\n\\n@font-face {\\n    font-family: 'gentium_basicitalic';\\n    src: url(\" + ___CSS_LOADER_URL___6___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL___7___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n\\n}\\n\\n\\n\\n\\n@font-face {\\n    font-family: 'gentium_basicregular';\\n    src: url(\" + ___CSS_LOADER_URL___8___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL___9___ + \") format('woff');\\n    font-weight: normal;\\n    font-style: normal;\\n\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/styles/fonts/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/assets/images/Balkan.svg":
/*!**************************************!*\
  !*** ./src/assets/images/Balkan.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/9dbdd5a33a6ae0d41153f645b6f8d4d9.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/Balkan.svg?");

/***/ }),

/***/ "./src/assets/images/Logo_FAT.svg":
/*!****************************************!*\
  !*** ./src/assets/images/Logo_FAT.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/093c5c6874ac76edff929434f9e1e12c.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/Logo_FAT.svg?");

/***/ }),

/***/ "./src/assets/images/Main.svg":
/*!************************************!*\
  !*** ./src/assets/images/Main.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/1bcf5310cc7eee8831a13762a921365f.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/Main.svg?");

/***/ }),

/***/ "./src/assets/images/Phono.svg":
/*!*************************************!*\
  !*** ./src/assets/images/Phono.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/99de39d7eab9c6227cacff04d937f416.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/Phono.svg?");

/***/ }),

/***/ "./src/assets/images/Tigre.svg":
/*!*************************************!*\
  !*** ./src/assets/images/Tigre.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/5785122209c6bcba514dff66a3c8c24c.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/Tigre.svg?");

/***/ }),

/***/ "./src/booking.js":
/*!************************!*\
  !*** ./src/booking.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  contactType: 'BOOKING',\n  contactTitle: 'ZN Productions',\n  contactName: 'Alexia',\n  contactTel: '+33 1 49 57 38 64',\n  contactMail: 'alexia@znproduction.com'\n}, {\n  contactType: 'MANAGEMENT',\n  contactTitle: 'Atelier Le Pelican',\n  contactName: 'Raphael Forêt-Bruno',\n  contactTel: '+33 6 52 91 57 44',\n  contactMail: 'raf.lepelican@gmail.com'\n}, {\n  contactType: 'PRODUCTION',\n  contactTitle: 'Belka',\n  contactName: 'Alexis',\n  contactTel: '+33 6 64 92 07',\n  contactMail: 'alex.bastardprod@gmail.com'\n}]);\n\n//# sourceURL=webpack:///./src/booking.js?");

/***/ }),

/***/ "./src/components/About/Description.js":
/*!*********************************************!*\
  !*** ./src/components/About/Description.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.scss */ \"./src/components/About/about.scss\");\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * NPM import\n */\n\n\n\n/**\n * Local import\n */\n// Styles\n\n\n/**\n * Code\n */\n\nvar Description = function Description(_ref) {\n  var aboutdescriptionItems = _ref.aboutdescriptionItems,\n      loaded = _ref.loaded;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"about-description\"\n  }, loaded ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"about-text\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, aboutdescriptionItems.title.rendered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    key: aboutdescriptionItems.id\n  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(aboutdescriptionItems.content.rendered))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"waiting\"));\n};\n\nDescription.propTypes = {\n  loaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  aboutdescriptionItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      rendered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n    }).isRequired,\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      rendered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n    }).isRequired\n  }).isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n//# sourceURL=webpack:///./src/components/About/Description.js?");

/***/ }),

/***/ "./src/components/About/Group.js":
/*!***************************************!*\
  !*** ./src/components/About/Group.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_hover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hover */ \"./node_modules/react-hover/dist/index.js\");\n/* harmony import */ var react_hover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hover__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.scss */ \"./src/components/About/about.scss\");\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * NPM import\n */\n\n\n\n\n/**\n * Local import\n */\n// Styles\n\n\n/**\n * Code\n */\n\nvar Group = function Group(_ref) {\n  var aboutItems = _ref.aboutItems,\n      aboutPictures = _ref.aboutPictures;\n  var optionsCursorTrueWithMargin = {\n    followCursor: true,\n    shiftX: 0,\n    shiftY: 40\n  };\n  var aboutPicture = [];\n  aboutPictures.reverse();\n\n  for (var i = 0; i < aboutPictures.length; i += 1) {\n    if (aboutPictures[i] !== false) {\n      aboutPicture.push(aboutPictures[i]);\n    }\n  }\n\n  var aboutThinks = [];\n\n  for (var x = 0; x < aboutItems.length; x += 1) {\n    if (aboutItems[x] !== aboutItems[7]) {\n      aboutThinks.push(aboutItems[x]);\n    }\n  }\n\n  var newArrayAbout = [];\n\n  for (var index = 0; index < aboutThinks.length; index += 1) {\n    var array = [aboutThinks[index], aboutPicture[index]];\n    newArrayAbout.push(array);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"about-group\"\n  }, newArrayAbout.map(function (about) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", _extends({\n      key: about[0].id,\n      className: \"about-person\"\n    }, about), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hover__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      options: optionsCursorTrueWithMargin\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hover__WEBPACK_IMPORTED_MODULE_0___default.a.Trigger, {\n      type: \"trigger\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      className: \"about-picture\",\n      src: about[1],\n      alt: \"person\"\n    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hover__WEBPACK_IMPORTED_MODULE_0___default.a.Hover, {\n      type: \"hover\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"about-hoverdiv\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"about-picturetext about-hoverp\"\n    }, about[0].custom_fields.first_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"about-hoverp\"\n    }, about[0].custom_fields.last_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"about-hoverp\"\n    }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(about[0].content.rendered)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"about-hoverp\"\n    }, about[0].custom_fields.instruments)))));\n  }));\n};\n\nGroup.propTypes = {\n  aboutItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired).isRequired,\n  aboutPictures: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Group);\n\n//# sourceURL=webpack:///./src/components/About/Group.js?");

/***/ }),

/***/ "./src/components/About/about.scss":
/*!*****************************************!*\
  !*** ./src/components/About/about.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./about.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/About/about.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/About/about.scss?");

/***/ }),

/***/ "./src/components/About/index.js":
/*!***************************************!*\
  !*** ./src/components/About/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_containers_Aboutgroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/containers/Aboutgroup */ \"./src/containers/Aboutgroup.js\");\n/* harmony import */ var src_containers_Aboutdescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/containers/Aboutdescription */ \"./src/containers/Aboutdescription.js\");\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.scss */ \"./src/components/About/about.scss\");\n/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar About = function About() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"about\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Aboutgroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Aboutdescription__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/components/About/index.js?");

/***/ }),

/***/ "./src/components/App/app.scss":
/*!*************************************!*\
  !*** ./src/components/App/app.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/App/app.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/App/app.scss?");

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_containers_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/containers/Player */ \"./src/containers/Player.js\");\n/* harmony import */ var src_containers_Mainsection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/containers/Mainsection */ \"./src/containers/Mainsection.js\");\n/* harmony import */ var src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Footer */ \"./src/components/Footer/index.js\");\n/* harmony import */ var src_components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Home */ \"./src/components/Home/index.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.scss */ \"./src/components/App/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n\n\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"app\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Mainsection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App/index.js?");

/***/ }),

/***/ "./src/components/Contact/ContactBookers.js":
/*!**************************************************!*\
  !*** ./src/components/Contact/ContactBookers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n// Styles\n\n/**\n * Code\n */\n\nvar ContactBookers = function ContactBookers(_ref) {\n  var contactType = _ref.contactType,\n      contactTitle = _ref.contactTitle,\n      contactName = _ref.contactName,\n      contactTel = _ref.contactTel,\n      contactMail = _ref.contactMail;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"contact-bookingDiv\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"contact-globalbooking\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"contact-bookingType\"\n  }, contactType), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, contactTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, contactName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, contactTel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"mailto:\".concat(contactMail)\n  }, contactMail))));\n};\n\nContactBookers.propTypes = {\n  contactType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  contactTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  contactName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  contactTel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  contactMail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactBookers);\n\n//# sourceURL=webpack:///./src/components/Contact/ContactBookers.js?");

/***/ }),

/***/ "./src/components/Contact/ContactBooking.js":
/*!**************************************************!*\
  !*** ./src/components/Contact/ContactBooking.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/booking */ \"./src/booking.js\");\n/* harmony import */ var _ContactBookers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactBookers */ \"./src/components/Contact/ContactBookers.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n\n\n // Styles\n\n/**\n * Code\n */\n\nvar ContactBooking = function ContactBooking() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"contact-booking\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"contact-bookingTitle\"\n  }, \"Ou ici :\"), src_booking__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (booking) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactBookers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      key: booking.contactType\n    }, booking));\n  }));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactBooking);\n\n//# sourceURL=webpack:///./src/components/Contact/ContactBooking.js?");

/***/ }),

/***/ "./src/components/Contact/ContactForm.js":
/*!***********************************************!*\
  !*** ./src/components/Contact/ContactForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable react/no-unused-state */\n\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n// Styles\n\n/**\n * Code\n */\n\nvar ContactForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ContactForm, _React$Component);\n\n  function ContactForm() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, ContactForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContactForm)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      contactSelect: '',\n      inputName: '',\n      inputMail: '',\n      inputSubject: '',\n      inputText: '',\n      newsletterCheck: false,\n      mailSent: false,\n      error: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleFormSubmit\", function (event) {\n      event.preventDefault();\n      axios__WEBPACK_IMPORTED_MODULE_1___default()({\n        method: 'post',\n        url: 'http://92.243.8.90/fat/back/api/contact/index.php',\n        headers: {\n          'content-type': 'application/json'\n        },\n        data: _this.state\n      }).then(function (result) {\n        _this.setState({\n          mailSent: result.data.sent,\n          contactSelect: '',\n          inputName: '',\n          inputMail: '',\n          inputSubject: '',\n          inputText: '',\n          newsletterCheck: ''\n        });\n      }).catch(function (error) {\n        return _this.setState({\n          error: error.message\n        });\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(ContactForm, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"contact-form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: function onSubmit(e) {\n          return _this2.handleFormSubmit(e);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        id: \"title-form\"\n      }, \"Vous pouvez contacter le groupe ici :\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        id: \"name\",\n        placeholder: \"Name\",\n        required: true,\n        value: this.state.inputName,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            inputName: e.target.value\n          });\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"email\",\n        name: \"email\",\n        id: \"email\",\n        placeholder: \"Email\",\n        required: true,\n        value: this.state.inputMail,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            inputMail: e.target.value\n          });\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"subject\",\n        id: \"subject\",\n        placeholder: \"Subject\",\n        value: this.state.inputSubject,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            inputSubject: e.target.value\n          });\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        id: \"form-text\",\n        name: \"form-text\",\n        rows: \"10\",\n        cols: \"33\",\n        placeholder: \"Ecrire ici\",\n        value: this.state.inputText,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            inputText: e.target.value\n          });\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        value: \"Envoyer\"\n      })));\n    }\n  }]);\n\n  return ContactForm;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\n//# sourceURL=webpack:///./src/components/Contact/ContactForm.js?");

/***/ }),

/***/ "./src/components/Contact/contact.scss":
/*!*********************************************!*\
  !*** ./src/components/Contact/contact.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./contact.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Contact/contact.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Contact/contact.scss?");

/***/ }),

/***/ "./src/components/Contact/index.js":
/*!*****************************************!*\
  !*** ./src/components/Contact/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactForm */ \"./src/components/Contact/ContactForm.js\");\n/* harmony import */ var _ContactBooking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactBooking */ \"./src/components/Contact/ContactBooking.js\");\n/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.scss */ \"./src/components/Contact/contact.scss\");\n/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Contact = function Contact() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"contact\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactBooking__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/components/Contact/index.js?");

/***/ }),

/***/ "./src/components/Discography/Discomobile.js":
/*!***************************************************!*\
  !*** ./src/components/Discography/Discomobile.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * NPM import\n */\n\n\n\n\n/**\n * Local import\n */\n// Styles\n\n/**\n * Code\n */\n\nvar Discomobile = function Discomobile(_ref) {\n  var discoImages = _ref.discoImages,\n      discoDatas = _ref.discoDatas;\n  var settings = {\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1\n  };\n  var newArray = [];\n\n  for (var index = 0; index < discoDatas.length; index += 1) {\n    var array = [discoDatas[index], discoImages[index]];\n    newArray.push(array);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, newArray.map(function (disco) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _extends({\n      key: disco[0].id,\n      className: \"discomobile\"\n    }, disco), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"discomobile-pic\",\n      src: disco[1],\n      alt: \"cover-\".concat(disco[0].title.rendered)\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"discomobile-text\"\n    }, disco[0].title.rendered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      className: \"discomobile-link\",\n      href: disco[0].custom_fields.purchase_link\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaCartArrowDown\"], null), \" Acheter\"));\n  }));\n};\n/**\n * Proptypes\n */\n\n\nDiscomobile.propTypes = {\n  discoImages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,\n  discoDatas: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired).isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discomobile);\n\n//# sourceURL=webpack:///./src/components/Discography/Discomobile.js?");

/***/ }),

/***/ "./src/components/Discography/Discoscreen.js":
/*!***************************************************!*\
  !*** ./src/components/Discography/Discoscreen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _discography_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discography.scss */ \"./src/components/Discography/discography.scss\");\n/* harmony import */ var _discography_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_discography_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * NPM import\n */\n\n\n\n/**\n * Local import\n */\n// Styles\n\n\n/**\n * Code\n */\n\nvar Discoscreen = function Discoscreen(_ref) {\n  var discoImages = _ref.discoImages,\n      discoDatas = _ref.discoDatas,\n      loaddiscoImages = _ref.loaddiscoImages,\n      loaddiscoDatas = _ref.loaddiscoDatas,\n      discoVerso = _ref.discoVerso;\n  var newArray = [];\n\n  for (var index = 0; index < discoDatas.length; index += 1) {\n    var array = [discoDatas[index], discoImages[index], discoVerso[index]];\n    newArray.push(array);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loaddiscoDatas && loaddiscoImages && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"discoscreen\"\n  }, newArray.map(function (disco) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: disco[0].id,\n      className: \"discoscreen-section\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"flip\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: disco[1],\n      className: \"flip-back flip-card\",\n      alt: \"cover-\".concat(disco[0].title.rendered)\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: disco[2],\n      className: \"flip-front flip-card\",\n      alt: \"cover-\".concat(disco[0].title.rendered)\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"discoscreen-text\"\n    }, disco[0].title.rendered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      className: \"discoscreen-link\",\n      href: disco[0].custom_fields.purchase_link\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaCartArrowDown\"], null), \" Acheter\"));\n  })) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Waiting\"));\n};\n\nDiscoscreen.propTypes = {\n  discoImages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  discoDatas: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired).isRequired,\n  loaddiscoDatas: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  loaddiscoImages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  discoVerso: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discoscreen);\n\n//# sourceURL=webpack:///./src/components/Discography/Discoscreen.js?");

/***/ }),

/***/ "./src/components/Discography/discography.scss":
/*!*****************************************************!*\
  !*** ./src/components/Discography/discography.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./discography.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Discography/discography.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Discography/discography.scss?");

/***/ }),

/***/ "./src/components/Discography/index.js":
/*!*********************************************!*\
  !*** ./src/components/Discography/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_containers_Discoscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/containers/Discoscreen */ \"./src/containers/Discoscreen.js\");\n/* harmony import */ var src_containers_Discomobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/containers/Discomobile */ \"./src/containers/Discomobile.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n\n\n // Styles\n\n/**\n * Code\n */\n\nvar Discography = function Discography() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(window.innerWidth),\n      _useState2 = _slicedToArray(_useState, 2),\n      width = _useState2[0],\n      setWidth = _useState2[1];\n\n  var handleResize = function handleResize() {\n    return setWidth(window.innerWidth);\n  };\n\n  window.addEventListener('resize', handleResize);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"disco\",\n    className: \"discography\"\n  }, width >= 1200 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Discoscreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Discomobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discography);\n\n//# sourceURL=webpack:///./src/components/Discography/index.js?");

/***/ }),

/***/ "./src/components/Footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./footer.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Footer/footer.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Footer/footer.scss?");

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ \"./src/components/Footer/footer.scss\");\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n// Styles\n\n\n/**\n * Code\n */\n\nvar Footer = function Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: \"footer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"footer-content\"\n  }, \"\\xA9 2019 THE FAT BASTARD GANGBAND BY TANK\"));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer/index.js?");

/***/ }),

/***/ "./src/components/Gallery/gallery.scss":
/*!*********************************************!*\
  !*** ./src/components/Gallery/gallery.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./gallery.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Gallery/gallery.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Gallery/gallery.scss?");

/***/ }),

/***/ "./src/components/Gallery/index.js":
/*!*****************************************!*\
  !*** ./src/components/Gallery/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gallery_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.scss */ \"./src/components/Gallery/gallery.scss\");\n/* harmony import */ var _gallery_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gallery_scss__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n// Styles\n\n\n/**\n * Code\n */\n\nvar Gallery = function Gallery(_ref) {\n  var gallery = _ref.gallery;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"media-photo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-photo-main\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: gallery[0],\n    alt: \"balkan klub final shoot\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-photo-small\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: gallery[1],\n    alt: \"trumpet solo\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-photo-small\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: gallery[2],\n    alt: \"trumpet solo\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-photo-small\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: gallery[3],\n    alt: \"trumpet solo\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-photo-small\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: gallery[4],\n    alt: \"trumpet solo\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-photo-small\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: gallery[5],\n    alt: \"trumpet solo\"\n  })));\n};\n\nGallery.propTypes = {\n  gallery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\n//# sourceURL=webpack:///./src/components/Gallery/index.js?");

/***/ }),

/***/ "./src/components/Home/home.scss":
/*!***************************************!*\
  !*** ./src/components/Home/home.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./home.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Home/home.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Home/home.scss?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_Balkan_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/Balkan.svg */ \"./src/assets/images/Balkan.svg\");\n/* harmony import */ var _assets_images_Balkan_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Balkan_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_Logo_FAT_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/Logo_FAT.svg */ \"./src/assets/images/Logo_FAT.svg\");\n/* harmony import */ var _assets_images_Logo_FAT_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Logo_FAT_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_Main_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/Main.svg */ \"./src/assets/images/Main.svg\");\n/* harmony import */ var _assets_images_Main_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Main_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_Phono_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/Phono.svg */ \"./src/assets/images/Phono.svg\");\n/* harmony import */ var _assets_images_Phono_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Phono_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_images_Tigre_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/Tigre.svg */ \"./src/assets/images/Tigre.svg\");\n/* harmony import */ var _assets_images_Tigre_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_Tigre_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.scss */ \"./src/components/Home/home.scss\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_6__);\n/**\n * NPM import\n */\n\n/**\n * Local import\n */\n\n\n\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"home\",\n    id: \"home\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"home-logo\",\n    src: _assets_images_Logo_FAT_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    alt: \"banni\\xE8re\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"home-flexlogo\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"home-circle\",\n    src: _assets_images_Main_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"badge\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"home-circle\",\n    src: _assets_images_Balkan_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    alt: \"badge\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"home-circle\",\n    src: _assets_images_Tigre_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    alt: \"badge\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"home-circle\",\n    src: _assets_images_Phono_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n    alt: \"badge\"\n  })));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home/index.js?");

/***/ }),

/***/ "./src/components/Main/index.js":
/*!**************************************!*\
  !*** ./src/components/Main/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Section */ \"./src/components/Section/index.js\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ \"./src/components/Main/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Main = function Main(_ref) {\n  var unitedItems = _ref.unitedItems,\n      titlesLoaded = _ref.titlesLoaded,\n      backgroundLoaded = _ref.backgroundLoaded;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, titlesLoaded && backgroundLoaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"main\"\n  }, unitedItems.map(function (unitedItem) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      key: unitedItem.title\n    }, unitedItem));\n  })) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Waiting\"));\n};\n/**\n * Prop-types\n */\n\n\nMain.propTypes = {\n  unitedItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  titlesLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  backgroundLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/components/Main/index.js?");

/***/ }),

/***/ "./src/components/Main/main.scss":
/*!***************************************!*\
  !*** ./src/components/Main/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Main/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Main/main.scss?");

/***/ }),

/***/ "./src/components/Media/index.js":
/*!***************************************!*\
  !*** ./src/components/Media/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/es/YouTube.js\");\n/* harmony import */ var src_components_VideoSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/VideoSlider */ \"./src/components/VideoSlider/index.js\");\n/* harmony import */ var src_containers_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/containers/Gallery */ \"./src/containers/Gallery.js\");\n/* harmony import */ var _media_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media.scss */ \"./src/components/Media/media.scss\");\n/* harmony import */ var _media_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_media_scss__WEBPACK_IMPORTED_MODULE_5__);\n/**\n * NPM import\n */\n\n\n\n/**\n * Local import\n */\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Media = function Media(_ref) {\n  var _ref$videos = _ref.videos,\n      main = _ref$videos.main,\n      vids = _ref$videos.vids,\n      loaded = _ref.loaded;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media special-width\"\n  }, loaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"media-video\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-video-one\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    videoId: main,\n    opts: {\n      width: '100%',\n      height: '100%',\n      postion: 'absolute',\n      top: '0',\n      left: '0'\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"media-video-carousel\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_VideoSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    videos: vids\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Gallery__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\nMedia.propTypes = {\n  videos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    main: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    vids: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired\n  }).isRequired,\n  loaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Media);\n\n//# sourceURL=webpack:///./src/components/Media/index.js?");

/***/ }),

/***/ "./src/components/Media/media.scss":
/*!*****************************************!*\
  !*** ./src/components/Media/media.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./media.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Media/media.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Media/media.scss?");

/***/ }),

/***/ "./src/components/Nav/Fullscreen.js":
/*!******************************************!*\
  !*** ./src/components/Nav/Fullscreen.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components_Social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Social */ \"./src/components/Social/index.js\");\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n\n // Styles\n\n/**\n * Code\n */\n\nvar Fullscreen = function Fullscreen(_ref) {\n  var menuItems = _ref.menuItems;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"nav-nav\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#home\",\n    className: \"nav-nav-link\"\n  }, \"Accueil\"), menuItems.map(function (link) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      key: link,\n      href: \"#\".concat(link),\n      className: \"nav-nav-link\"\n    }, link);\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Social__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"nav-social\"\n  }));\n};\n/**\n * PropTypes\n */\n\n\nFullscreen.propTypes = {\n  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fullscreen);\n\n//# sourceURL=webpack:///./src/components/Nav/Fullscreen.js?");

/***/ }),

/***/ "./src/components/Nav/Menu.js":
/*!************************************!*\
  !*** ./src/components/Nav/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * NPM import\n */\n\n\n\n/**\n * Local import\n */\n// Styles\n\n/**\n * Code\n */\n\nvar Menu = function Menu(_ref) {\n  var burgerItems = _ref.burgerItems;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__[\"slide\"], {\n    right: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#home\",\n    className: \"nav-nav-link\"\n  }, \"Accueil\"), burgerItems.map(function (link) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      key: link,\n      href: \"#\".concat(link),\n      className: \"nav-nav-link\"\n    }, link);\n  }));\n};\n/**\n * PropTypes\n */\n\n\nMenu.propTypes = {\n  burgerItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired).isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/components/Nav/Menu.js?");

/***/ }),

/***/ "./src/components/Nav/index.js":
/*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modular_audio_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modular-audio-player */ \"./node_modules/react-modular-audio-player/build/index.js\");\n/* harmony import */ var react_modular_audio_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modular_audio_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var src_containers_Fullscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/containers/Fullscreen */ \"./src/containers/Fullscreen.js\");\n/* harmony import */ var src_containers_Navmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/containers/Navmenu */ \"./src/containers/Navmenu.js\");\n/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav.scss */ \"./src/components/Nav/nav.scss\");\n/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nav_scss__WEBPACK_IMPORTED_MODULE_5__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/**\n * NPM import\n */\n\n\n\n/**\n * Local import\n */\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Nav = function Nav() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(window.innerWidth),\n      _useState2 = _slicedToArray(_useState, 2),\n      width = _useState2[0],\n      setWidth = _useState2[1];\n\n  var handleResize = function handleResize() {\n    return setWidth(window.innerWidth);\n  };\n\n  window.addEventListener('resize', handleResize); // const newArrayPlayer = [];\n  // for (let index = 0; index < playerDatas.length; index += 1) {\n  //   const arrayPlayer = [playerDatas[index], playerMusic[index]];\n  //   newArrayPlayer.push(arrayPlayer);\n  // }\n\n  var playlist = [{\n    src: 'src/assets/audios/the-fat-bastard-gang-band-official-all-bastards.mp3',\n    title: 'All Bastards',\n    artist: 'FAT'\n  }, {\n    src: 'src/assets/audios/the-fat-bastard-gangband-official-king-of-the-world.mp3',\n    title: 'King of The World',\n    artist: 'FAT'\n  }]; // {unitedItems.map(unitedItem => (\n  //   <Section key={unitedItem.title} {...unitedItem} />\n  // ))}\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"nav\"\n  }, width > 899 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Fullscreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Navmenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"onglet-audio\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"onglet-title\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdHeadset\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"player-audio\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modular_audio_player__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    audioFiles: playlist,\n    playerWidth: \"10em\",\n    fontSize: \"1.5rem\",\n    iconSize: \"1.5rem\"\n  }))));\n};\n/**\n * Export\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/components/Nav/index.js?");

/***/ }),

/***/ "./src/components/Nav/nav.scss":
/*!*************************************!*\
  !*** ./src/components/Nav/nav.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./nav.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Nav/nav.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Nav/nav.scss?");

/***/ }),

/***/ "./src/components/News/Article.js":
/*!****************************************!*\
  !*** ./src/components/News/Article.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * NPM Import\n */\n\n\n\n/**\n * Code\n */\n\nvar Article = function Article(_ref) {\n  var title = _ref.title,\n      _ref$date = _ref.date,\n      year = _ref$date.year,\n      month = _ref$date.month,\n      day = _ref$date.day,\n      content = _ref.content;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"news-article\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"news-article-split\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"news-article-header\"\n  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n    className: \"news-article-aside\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"news-article-aside-date\"\n  }, day, \"-\", month), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"news-article-aside-date\"\n  }, year)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"news-article-section\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"news-article-section-content\"\n  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(content))));\n};\n\nArticle.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    year: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    month: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  }).isRequired,\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n//# sourceURL=webpack:///./src/components/News/Article.js?");

/***/ }),

/***/ "./src/components/News/index.js":
/*!**************************************!*\
  !*** ./src/components/News/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ \"./src/components/News/Article.js\");\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.scss */ \"./src/components/News/news.scss\");\n/* harmony import */ var _news_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_news_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * NPM Import\n */\n\n\n/**\n * Local Import\n */\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar News = function News(_ref) {\n  var news = _ref.news,\n      loaded = _ref.loaded;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"news special-width\"\n  }, loaded ? news.map(function (article) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      key: article.id\n    }, article));\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"waiting\"));\n};\n\nNews.propTypes = {\n  news: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  loaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./src/components/News/index.js?");

/***/ }),

/***/ "./src/components/News/news.scss":
/*!***************************************!*\
  !*** ./src/components/News/news.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./news.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/News/news.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/News/news.scss?");

/***/ }),

/***/ "./src/components/Section/Content.js":
/*!*******************************************!*\
  !*** ./src/components/Section/Content.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_containers_News__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/containers/News */ \"./src/containers/News.js\");\n/* harmony import */ var src_containers_Tour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/containers/Tour */ \"./src/containers/Tour.js\");\n/* harmony import */ var src_components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Contact */ \"./src/components/Contact/index.js\");\n/* harmony import */ var src_containers_Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/containers/Media */ \"./src/containers/Media.js\");\n/* harmony import */ var src_components_Discography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Discography */ \"./src/components/Discography/index.js\");\n/* harmony import */ var src_components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/About */ \"./src/components/About/index.js\");\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n\n\n\n\n\n\n // Styles\n\n/**\n * Code\n */\n\nvar Content = function Content(_ref) {\n  var id = _ref.id;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content\"\n  }, id === 'news' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_News__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), id === 'tour' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Tour__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), id === 'media' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_containers_Media__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), id === 'discographie' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Discography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), id === 'à propos' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_About__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), id === 'contact' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n};\n\nContent.propTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/components/Section/Content.js?");

/***/ }),

/***/ "./src/components/Section/Header.js":
/*!******************************************!*\
  !*** ./src/components/Section/Header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/cjs/index.js\");\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * NPM import\n */\n\n\n\n/**\n * Local import\n */\n// Styles\n\n/**\n * Code\n */\n\nvar Header = function Header(_ref) {\n  var name = _ref.name,\n      title = _ref.title,\n      bgp = _ref.bgp;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__[\"ParallaxProvider\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__[\"ParallaxBanner\"], {\n    id: name,\n    layers: [{\n      image: \"\".concat(bgp),\n      amount: 0.7\n    }]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"header-title\"\n  }, title)))));\n}; // Props validation\n\n\nHeader.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  bgp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Section/Header.js?");

/***/ }),

/***/ "./src/components/Section/index.js":
/*!*****************************************!*\
  !*** ./src/components/Section/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Section/Header.js\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ \"./src/components/Section/Content.js\");\n/* harmony import */ var _section_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section.scss */ \"./src/components/Section/section.scss\");\n/* harmony import */ var _section_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_section_scss__WEBPACK_IMPORTED_MODULE_4__);\n/**\n * NPM import\n */\n\n\n/**\n * Local import\n */\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Section = function Section(_ref) {\n  var title = _ref.title,\n      background = _ref.background;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: title,\n    className: \"section\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: title,\n    bgp: background,\n    name: title\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    id: title\n  }));\n}; // Props validation\n\n\nSection.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  background: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./src/components/Section/index.js?");

/***/ }),

/***/ "./src/components/Section/section.scss":
/*!*********************************************!*\
  !*** ./src/components/Section/section.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./section.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Section/section.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Section/section.scss?");

/***/ }),

/***/ "./src/components/Social/index.js":
/*!****************************************!*\
  !*** ./src/components/Social/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.scss */ \"./src/components/Social/social.scss\");\n/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_social_scss__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * NPM Import\n */\n\n\n/**\n * Local Import\n */\n// Styles\n\n\n/**\n  * Code\n  */\n\nvar Social = function Social() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"social\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"social-link\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaEnvelopeSquare\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://fr-fr.facebook.com/fat.bastard.gb/\",\n    className: \"social-link\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaFacebookSquare\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.youtube.com/channel/UC52mTFRAtoccXaSzCjcOXyA\",\n    className: \"social-link\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaYoutubeSquare\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://www.instagram.com/thefatbastardgangband/\",\n    className: \"social-link\",\n    target: \"_blank\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaInstagram\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\n\n//# sourceURL=webpack:///./src/components/Social/index.js?");

/***/ }),

/***/ "./src/components/Social/social.scss":
/*!*******************************************!*\
  !*** ./src/components/Social/social.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./social.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Social/social.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Social/social.scss?");

/***/ }),

/***/ "./src/components/Tour/Date.js":
/*!*************************************!*\
  !*** ./src/components/Tour/Date.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n/**\n * NPM Import\n */\n\n\n\n\n/**\n * Local Import\n */\n\n/**\n * Code\n */\n\nvar Date = function Date(_ref) {\n  var date = _ref.date,\n      city = _ref.city,\n      venue = _ref.venue,\n      tickets = _ref.tickets,\n      map = _ref.map;\n  var splitDate = date.split('-');\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tour-date\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tour-date-date\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, splitDate[2], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdStar\"], {\n    className: \"tour-date-date-star\"\n  }), splitDate[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"tour-date-date-year\"\n  }, splitDate[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tour-date-city\"\n  }, city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tour-date-venue\"\n  }, venue), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: map,\n    className: \"tour-date-map\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdPinDrop\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: tickets,\n    className: \"tour-date-ticket\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaTicketAlt\"], null)));\n};\n\nDate.propTypes = {\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  venue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  map: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  tickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nDate.defaultProps = {\n  tickets: '#',\n  map: '#'\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Date);\n\n//# sourceURL=webpack:///./src/components/Tour/Date.js?");

/***/ }),

/***/ "./src/components/Tour/index.js":
/*!**************************************!*\
  !*** ./src/components/Tour/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_utils_tourCleaner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/tourCleaner */ \"./src/utils/tourCleaner.js\");\n/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ \"./src/components/Tour/Date.js\");\n/* harmony import */ var _tour_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tour.scss */ \"./src/components/Tour/tour.scss\");\n/* harmony import */ var _tour_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tour_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * NPM Import\n */\n\n\n/**\n * Local Import\n */\n\n\n // Styles\n\n\n/**\n * Code\n */\n\nvar Tour = function Tour(_ref) {\n  var dates = _ref.dates,\n      loaded = _ref.loaded;\n\n  if (loaded) {\n    var shows = dates.filter(function (date) {\n      return Object(src_utils_tourCleaner__WEBPACK_IMPORTED_MODULE_2__[\"upCommingShow\"])(date.date);\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"tour special-width\"\n    }, shows.map(function (date) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Date__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n        key: date.id\n      }, date));\n    }));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"loading\");\n};\n\nTour.propTypes = {\n  dates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired).isRequired,\n  loaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tour);\n\n//# sourceURL=webpack:///./src/components/Tour/index.js?");

/***/ }),

/***/ "./src/components/Tour/tour.scss":
/*!***************************************!*\
  !*** ./src/components/Tour/tour.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./tour.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/Tour/tour.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Tour/tour.scss?");

/***/ }),

/***/ "./src/components/VideoSlider/index.js":
/*!*********************************************!*\
  !*** ./src/components/VideoSlider/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/es/YouTube.js\");\n/* harmony import */ var _videoSlider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videoSlider.scss */ \"./src/components/VideoSlider/videoSlider.scss\");\n/* harmony import */ var _videoSlider_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_videoSlider_scss__WEBPACK_IMPORTED_MODULE_4__);\n/**\n * NPM import\n */\n\n\n\n\n/**\n * Local import\n */\n// Styles\n\n\n/**\n * Code\n */\n\nvar VideoSlider = function VideoSlider(_ref) {\n  var videos = _ref.videos;\n  var settings = {\n    infinite: true,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    swipeToSlide: true,\n    responsive: [{\n      breakpoint: 850,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        infinite: true\n      }\n    }, {\n      breakpoint: 600,\n      settings: {\n        slidesToShow: 1,\n        slidesToScroll: 1\n      }\n    }]\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, videos.map(function (video) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"video-div\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: video,\n      videoId: video,\n      opts: {\n        width: '100%',\n        height: '100%',\n        postion: 'absolute',\n        top: '0',\n        left: '0'\n      }\n    }));\n  }));\n};\n\nVideoSlider.propTypes = {\n  videos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired).isRequired\n};\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoSlider);\n\n//# sourceURL=webpack:///./src/components/VideoSlider/index.js?");

/***/ }),

/***/ "./src/components/VideoSlider/videoSlider.scss":
/*!*****************************************************!*\
  !*** ./src/components/VideoSlider/videoSlider.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/lib/loader.js!./videoSlider.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/VideoSlider/videoSlider.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/VideoSlider/videoSlider.scss?");

/***/ }),

/***/ "./src/containers/Aboutdescription.js":
/*!********************************************!*\
  !*** ./src/containers/Aboutdescription.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_About_Description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/About/Description */ \"./src/components/About/Description.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    aboutdescriptionItems: state.sectionAboutDescription,\n    loaded: state.aboutLoaded\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar AboutContainerDescription = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_About_Description__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutContainerDescription);\n\n//# sourceURL=webpack:///./src/containers/Aboutdescription.js?");

/***/ }),

/***/ "./src/containers/Aboutgroup.js":
/*!**************************************!*\
  !*** ./src/containers/Aboutgroup.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_About_Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/About/Group */ \"./src/components/About/Group.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    aboutItems: state.sectionAbout,\n    aboutPictures: state.aboutPics,\n    loadaboutItems: state.loadaboutItems,\n    loadaboutPictures: state.loadaboutPictures\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar AboutContainerGroup = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_About_Group__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutContainerGroup);\n\n//# sourceURL=webpack:///./src/containers/Aboutgroup.js?");

/***/ }),

/***/ "./src/containers/Discomobile.js":
/*!***************************************!*\
  !*** ./src/containers/Discomobile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Discography_Discomobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Discography/Discomobile */ \"./src/components/Discography/Discomobile.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    discoImages: state.discoPics,\n    discoDatas: state.sectionDisco\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar DiscoContainerMobile = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Discography_Discomobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscoContainerMobile);\n\n//# sourceURL=webpack:///./src/containers/Discomobile.js?");

/***/ }),

/***/ "./src/containers/Discoscreen.js":
/*!***************************************!*\
  !*** ./src/containers/Discoscreen.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Discography_Discoscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Discography/Discoscreen */ \"./src/components/Discography/Discoscreen.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n// const mapStateToProps = (state) => {\n//   const {\n//     sectionDisco,\n//     discoPics,\n//   } = state;\n//   const unitedDiscos = [];\n//   let i = 0;\n//   for (i = 0; i < sectionDisco.length; i += 1) {\n//     const unitedDisco = {\n//       Discodata: sectionDisco[i],\n//       Discopics: discoPics[i],\n//     };\n//     unitedDiscos.push(unitedDisco);\n//   }\n//   return ({\n//     unitedDiscos,\n//   });\n// };\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    discoImages: state.discoPics,\n    discoDatas: state.sectionDisco,\n    loaddiscoImages: state.loaddiscoPics,\n    loaddiscoDatas: state.loadDisco,\n    discoVerso: state.discoVerso,\n    laoddiscoVerso: state.loadVerso\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar DiscoContainerScreen = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Discography_Discoscreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscoContainerScreen);\n\n//# sourceURL=webpack:///./src/containers/Discoscreen.js?");

/***/ }),

/***/ "./src/containers/Fullscreen.js":
/*!**************************************!*\
  !*** ./src/containers/Fullscreen.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Nav_Fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Nav/Fullscreen */ \"./src/components/Nav/Fullscreen.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    menuItems: state.sectionTitles\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar FullscreenContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Nav_Fullscreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullscreenContainer);\n\n//# sourceURL=webpack:///./src/containers/Fullscreen.js?");

/***/ }),

/***/ "./src/containers/Gallery.js":
/*!***********************************!*\
  !*** ./src/containers/Gallery.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Gallery */ \"./src/components/Gallery/index.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    gallery: state.gallery\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar GalleryContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryContainer);\n\n//# sourceURL=webpack:///./src/containers/Gallery.js?");

/***/ }),

/***/ "./src/containers/Mainsection.js":
/*!***************************************!*\
  !*** ./src/containers/Mainsection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Main */ \"./src/components/Main/index.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var titlesLoaded = state.titlesLoaded,\n      backgroundLoaded = state.backgroundLoaded,\n      sectionTitles = state.sectionTitles,\n      sectionBackground = state.sectionBackground;\n  var unitedItems = [];\n  var i = 0;\n\n  if (sectionBackground.length !== 0 && sectionTitles.length !== 0) {\n    for (i = 0; i < sectionBackground.length; i += 1) {\n      var unitedItem = {\n        title: sectionTitles[i],\n        background: sectionBackground[i]\n      };\n      unitedItems.push(unitedItem);\n    }\n  }\n\n  return {\n    unitedItems: unitedItems,\n    titlesLoaded: titlesLoaded,\n    backgroundLoaded: backgroundLoaded\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar Mainsection = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mainsection);\n\n//# sourceURL=webpack:///./src/containers/Mainsection.js?");

/***/ }),

/***/ "./src/containers/Media.js":
/*!*********************************!*\
  !*** ./src/containers/Media.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Media */ \"./src/components/Media/index.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    videos: state.videos,\n    loaded: state.loadedData.vidLoaded\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar MediaContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Media__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaContainer);\n\n//# sourceURL=webpack:///./src/containers/Media.js?");

/***/ }),

/***/ "./src/containers/Navmenu.js":
/*!***********************************!*\
  !*** ./src/containers/Navmenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Nav_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Nav/Menu */ \"./src/components/Nav/Menu.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    burgerItems: state.sectionTitles\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar NavContainerMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Nav_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavContainerMenu);\n\n//# sourceURL=webpack:///./src/containers/Navmenu.js?");

/***/ }),

/***/ "./src/containers/News.js":
/*!********************************!*\
  !*** ./src/containers/News.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/News */ \"./src/components/News/index.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    news: state.news,\n    loaded: state.loadedData.newsLoaded\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar NewsContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsContainer);\n\n//# sourceURL=webpack:///./src/containers/News.js?");

/***/ }),

/***/ "./src/containers/Player.js":
/*!**********************************!*\
  !*** ./src/containers/Player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Nav */ \"./src/components/Nav/index.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    playerDatas: state.playerDatas,\n    playerMusic: state.playerMusic\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar Player = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/containers/Player.js?");

/***/ }),

/***/ "./src/containers/Tour.js":
/*!********************************!*\
  !*** ./src/containers/Tour.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_Tour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Tour */ \"./src/components/Tour/index.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Action Creators\n\n/* === State (données) ===\n * - mapStateToProps retroune un objet de props pour le composant de présentation\n * - mapStateToProps met à dispo 2 params\n *  - state : le state du store (getState)\n *  - ownProps : les props passées au container\n * Pas de data à transmettre ? const mapStateToProps = null;\n */\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    dates: state.tourDates,\n    loaded: state.loadedData.tourdates\n  };\n};\n/* === Actions ===\n * - mapDispatchToProps retroune un objet de props pour le composant de présentation\n * - mapDispatchToProps met à dispo 2 params\n *  - dispatch : la fonction du store pour dispatcher une action\n *  - ownProps : les props passées au container\n * Pas de disptach à transmettre ? const mapDispatchToProps = {};\n */\n\n\nvar mapDispatchToProps = {}; // Container\n\nvar TourContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(src_components_Tour__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* 2 temps\nconst createContainer = connect(mapStateToProps, mapDispatchToProps);\nconst ExampleContainer = createContainer(Example);\n*/\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TourContainer);\n\n//# sourceURL=webpack:///./src/containers/Tour.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var src_components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/App */ \"./src/components/App/index.js\");\n/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/store */ \"./src/store/index.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/**\n * NPM import\n */\n\n\n\n\n/**\n * Local import\n */\n\n\n\n\n/**\n * Render\n */\n// 1. Le composant racine à rendre (le tronc de l'arbre)\n\nvar rootComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: src_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(src_components_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)); // 2. La cible dans le DOM\n\nvar target = document.getElementById('root'); // rendu de react-dom : react VERS dom\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(rootComponent, target); // Chargement des data\n\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadSectionTitles\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadNews\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadTourDates\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadSectionDisco\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadSectionAbout\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadSectionAboutDescription\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadSectionBackground\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadPictures\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadVideos\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadDiscoPics\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadAboutPics\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadDiscoVerso\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadPlayerV1\"])());\nsrc_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_6__[\"loadPlayerV2\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n/* harmony import */ var _middlewares_sectionMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/sectionMiddleware */ \"./src/store/middlewares/sectionMiddleware.js\");\n/* harmony import */ var _middlewares_newsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/newsMiddleware */ \"./src/store/middlewares/newsMiddleware.js\");\n/* harmony import */ var _middlewares_tourMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/tourMiddleware */ \"./src/store/middlewares/tourMiddleware.js\");\n/* harmony import */ var _middlewares_middlewareDisco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/middlewareDisco */ \"./src/store/middlewares/middlewareDisco.js\");\n/* harmony import */ var _middlewares_videosMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/videosMiddleware */ \"./src/store/middlewares/videosMiddleware.js\");\n/* harmony import */ var _middlewares_middlewareAbout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/middlewareAbout */ \"./src/store/middlewares/middlewareAbout.js\");\n/* harmony import */ var _middlewares_middlewareAboutDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/middlewareAboutDescription */ \"./src/store/middlewares/middlewareAboutDescription.js\");\n/* harmony import */ var _middlewares_middlewareSectionBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/middlewareSectionBackground */ \"./src/store/middlewares/middlewareSectionBackground.js\");\n/* harmony import */ var _middlewares_mediaMiddleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/mediaMiddleware */ \"./src/store/middlewares/mediaMiddleware.js\");\n/* harmony import */ var _middlewares_playerV1Middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/playerV1Middleware */ \"./src/store/middlewares/playerV1Middleware.js\");\n/* harmony import */ var _middlewares_playerV2Middleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./middlewares/playerV2Middleware */ \"./src/store/middlewares/playerV2Middleware.js\");\n/**\n * Npm import\n */\n\n/**\n * Local import\n */\n\n // Middlewares\n\n\n\n\n\n\n\n\n\n\n\n // eslint-disable-next-line no-underscore-dangle\n\nvar composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]; // Composition des enchancers\n\nvar enhancers = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(_middlewares_sectionMiddleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _middlewares_newsMiddleware__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _middlewares_tourMiddleware__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _middlewares_middlewareDisco__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _middlewares_videosMiddleware__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _middlewares_middlewareAbout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _middlewares_middlewareAboutDescription__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _middlewares_middlewareSectionBackground__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _middlewares_mediaMiddleware__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _middlewares_playerV1Middleware__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _middlewares_playerV2Middleware__WEBPACK_IMPORTED_MODULE_12__[\"default\"]));\n/**\n * Store\n */\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], enhancers);\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/middlewares/mediaMiddleware.js":
/*!**************************************************!*\
  !*** ./src/store/middlewares/mediaMiddleware.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// npm\n // Import\n// - - - Importer les actions du reducer\n\n\nvar apiURL = 'http://92.243.8.90/fat/back/wp-json';\n\nvar mediaMiddleware = function mediaMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_PICTURES\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(apiURL, \"/fat/v1/customizer/medias/photos\")).then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedPictures\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mediaMiddleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/mediaMiddleware.js?");

/***/ }),

/***/ "./src/store/middlewares/middlewareAbout.js":
/*!**************************************************!*\
  !*** ./src/store/middlewares/middlewareAbout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// npm\n // Import\n// - - - Importer les actions du reducer\n\n\n\nvar middlewareAbout = function middlewareAbout(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_SECTION_ABOUT\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/wp/v2/group').then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedSectionAbout\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_ABOUT_PICS\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/fat/v1/group/photos').then(function (_ref2) {\n            var data = _ref2.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedAboutPics\"])(data));\n          }).catch(function () {\n            return console.log('Hooooooooo !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middlewareAbout);\n\n//# sourceURL=webpack:///./src/store/middlewares/middlewareAbout.js?");

/***/ }),

/***/ "./src/store/middlewares/middlewareAboutDescription.js":
/*!*************************************************************!*\
  !*** ./src/store/middlewares/middlewareAboutDescription.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// npm\n // Import\n// - - - Importer les actions du reducer\n\n\n\nvar middlewareAboutDescription = function middlewareAboutDescription(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_SECTION_ABOUT_DESCRIPTION\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/wp/v2/group/72').then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedSectionAboutDescription\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo nop !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middlewareAboutDescription);\n\n//# sourceURL=webpack:///./src/store/middlewares/middlewareAboutDescription.js?");

/***/ }),

/***/ "./src/store/middlewares/middlewareDisco.js":
/*!**************************************************!*\
  !*** ./src/store/middlewares/middlewareDisco.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// npm\n // Import\n// - - - Importer les actions du reducer\n\n\n\nvar middlewareDisco = function middlewareDisco(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_SECTION_DISCO\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/wp/v2/discography').then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedSectionDisco\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_DISCO_PICS\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/fat/v1/discography/recto').then(function (_ref2) {\n            var data = _ref2.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedDiscoPics\"])(data));\n          }).catch(function () {\n            return console.log('Ho disco pics !');\n          });\n          break;\n\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_DISCO_VERSO\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/fat/v1/discography/verso').then(function (_ref3) {\n            var data = _ref3.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedDiscoVerso\"])(data));\n          }).catch(function () {\n            return console.log('Ho disco verso !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middlewareDisco);\n\n//# sourceURL=webpack:///./src/store/middlewares/middlewareDisco.js?");

/***/ }),

/***/ "./src/store/middlewares/middlewareSectionBackground.js":
/*!**************************************************************!*\
  !*** ./src/store/middlewares/middlewareSectionBackground.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// npm\n // Import\n// - - - Importer les actions du reducer\n\n\n\nvar middlewareSectionBackground = function middlewareSectionBackground(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_SECTION_BACKGROUND\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/fat/v1/customizer/section/photos').then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedSectionBackground\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middlewareSectionBackground);\n\n//# sourceURL=webpack:///./src/store/middlewares/middlewareSectionBackground.js?");

/***/ }),

/***/ "./src/store/middlewares/newsMiddleware.js":
/*!*************************************************!*\
  !*** ./src/store/middlewares/newsMiddleware.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// NPM\n // Import\n\n\nvar apiURL = 'http://92.243.8.90/fat/back/wp-json';\n\nvar newsMiddleware = function newsMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_NEWS\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(apiURL, \"/wp/v2/posts\")).then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedNews\"])(data));\n          }).catch(function (error) {\n            return console.log(error);\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsMiddleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/newsMiddleware.js?");

/***/ }),

/***/ "./src/store/middlewares/playerV1Middleware.js":
/*!*****************************************************!*\
  !*** ./src/store/middlewares/playerV1Middleware.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// NPM\n // Import\n\n\n\nvar playerV1Middleware = function playerV1Middleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_PLAYER_V1\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/fat/v1/player').then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedPlayerV1\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerV1Middleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/playerV1Middleware.js?");

/***/ }),

/***/ "./src/store/middlewares/playerV2Middleware.js":
/*!*****************************************************!*\
  !*** ./src/store/middlewares/playerV2Middleware.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n // Import\n\n\n\nvar playerV2Middleware = function playerV2Middleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_PLAYER_V2\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://92.243.8.90/fat/back/wp-json/wp/v2/player').then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedPlayerV2\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerV2Middleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/playerV2Middleware.js?");

/***/ }),

/***/ "./src/store/middlewares/sectionMiddleware.js":
/*!****************************************************!*\
  !*** ./src/store/middlewares/sectionMiddleware.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// npm\n // Import\n// - - - Importer les actions du reducer\n\n\nvar apiURL = 'http://92.243.8.90/fat/back/wp-json';\n\nvar sectionMiddleware = function sectionMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_SECTION_TITLES\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(apiURL, \"/fat/v1/customizer/section/titles\")).then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedSectionTitles\"])(data));\n          }).catch(function (error) {\n            return console.log(error);\n          });\n          break;\n\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_SECTION_BG_PICTURES\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(apiURL, \"/fat/v1/customizer/section/photos\")).then(function (_ref2) {\n            var data = _ref2.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedSectionBgPictures\"])(data));\n          }).catch(function (error) {\n            return console.log(error);\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sectionMiddleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/sectionMiddleware.js?");

/***/ }),

/***/ "./src/store/middlewares/tourMiddleware.js":
/*!*************************************************!*\
  !*** ./src/store/middlewares/tourMiddleware.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// NPM\n // Import\n\n\nvar apiURL = 'http://92.243.8.90/fat/back/wp-json';\n\nvar tourMiddleware = function tourMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_TOUR_DATES\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(apiURL, \"/wp/v2/tourdates\")).then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedTourDates\"])(data));\n          }).catch(function (error) {\n            return console.log(error);\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tourMiddleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/tourMiddleware.js?");

/***/ }),

/***/ "./src/store/middlewares/videosMiddleware.js":
/*!***************************************************!*\
  !*** ./src/store/middlewares/videosMiddleware.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store/reducer */ \"./src/store/reducer.js\");\n// NPM\n // Import\n\n\nvar apiURL = 'http://92.243.8.90/fat/back/wp-json';\n\nvar videosMiddleware = function videosMiddleware(store) {\n  return function (next) {\n    return function (action) {\n      switch (action.type) {\n        case src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_VIDEOS\"]:\n          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"\".concat(apiURL, \"/fat/v1/customizer/medias/videos\")).then(function (_ref) {\n            var data = _ref.data;\n            store.dispatch(Object(src_store_reducer__WEBPACK_IMPORTED_MODULE_1__[\"receivedVideos\"])(data));\n          }).catch(function () {\n            return console.log('Hoooooooooo !');\n          });\n          break;\n\n        default:\n          break;\n      } // Passe à ton voisin\n\n\n      next(action);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (videosMiddleware);\n\n//# sourceURL=webpack:///./src/store/middlewares/videosMiddleware.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: LOAD_SECTION_TITLES, RECEIVED_SECTION_TITLE, LOAD_SECTION_BG_PICTURES, RECEIVED_SECTION_BG_PICTURES, LOAD_NEWS, RECEIVED_NEWS, LOAD_TOUR_DATES, RECEIVED_TOUR_DATES, LOAD_SECTION_DISCO, RECEIVED_SECTION_DISCO, LOAD_DISCO_PICS, RECEIVED_DISCO_PICS, LOAD_DISCO_VERSO, RECEIVED_DISCO_VERSO, LOAD_VIDEOS, RECEIVED_VIDEOS, LOAD_PICTURES, RECEIVED_PICTURES, LOAD_SECTION_ABOUT, RECEIVED_SECTION_ABOUT, LOAD_SECTION_ABOUT_DESCRIPTION, RECEIVED_SECTION_ABOUT_DESCRIPTION, LOAD_SECTION_BACKGROUND, RECEIVED_SECTION_BACKGROUND, LOAD_ABOUT_PICS, RECEIVED_ABOUT_PICS, LOAD_PLAYER_V1, RECEIVED_PLAYER_V1, LOAD_PLAYER_V2, RECEIVED_PLAYER_V2, loadSectionTitles, receivedSectionTitles, loadSectionBgPictures, receivedSectionBgPictures, loadNews, receivedNews, loadTourDates, receivedTourDates, loadSectionDisco, receivedSectionDisco, loadDiscoPics, receivedDiscoPics, loadDiscoVerso, receivedDiscoVerso, loadSectionAbout, receivedSectionAbout, loadSectionAboutDescription, receivedSectionAboutDescription, loadSectionBackground, receivedSectionBackground, loadAboutPics, receivedAboutPics, loadPictures, receivedPictures, loadVideos, receivedVideos, loadPlayerV1, receivedPlayerV1, loadPlayerV2, receivedPlayerV2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SECTION_TITLES\", function() { return LOAD_SECTION_TITLES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_SECTION_TITLE\", function() { return RECEIVED_SECTION_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SECTION_BG_PICTURES\", function() { return LOAD_SECTION_BG_PICTURES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_SECTION_BG_PICTURES\", function() { return RECEIVED_SECTION_BG_PICTURES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_NEWS\", function() { return LOAD_NEWS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_NEWS\", function() { return RECEIVED_NEWS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_TOUR_DATES\", function() { return LOAD_TOUR_DATES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_TOUR_DATES\", function() { return RECEIVED_TOUR_DATES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SECTION_DISCO\", function() { return LOAD_SECTION_DISCO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_SECTION_DISCO\", function() { return RECEIVED_SECTION_DISCO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_DISCO_PICS\", function() { return LOAD_DISCO_PICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_DISCO_PICS\", function() { return RECEIVED_DISCO_PICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_DISCO_VERSO\", function() { return LOAD_DISCO_VERSO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_DISCO_VERSO\", function() { return RECEIVED_DISCO_VERSO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_VIDEOS\", function() { return LOAD_VIDEOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_VIDEOS\", function() { return RECEIVED_VIDEOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_PICTURES\", function() { return LOAD_PICTURES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_PICTURES\", function() { return RECEIVED_PICTURES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SECTION_ABOUT\", function() { return LOAD_SECTION_ABOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_SECTION_ABOUT\", function() { return RECEIVED_SECTION_ABOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SECTION_ABOUT_DESCRIPTION\", function() { return LOAD_SECTION_ABOUT_DESCRIPTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_SECTION_ABOUT_DESCRIPTION\", function() { return RECEIVED_SECTION_ABOUT_DESCRIPTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SECTION_BACKGROUND\", function() { return LOAD_SECTION_BACKGROUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_SECTION_BACKGROUND\", function() { return RECEIVED_SECTION_BACKGROUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_ABOUT_PICS\", function() { return LOAD_ABOUT_PICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_ABOUT_PICS\", function() { return RECEIVED_ABOUT_PICS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_PLAYER_V1\", function() { return LOAD_PLAYER_V1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_PLAYER_V1\", function() { return RECEIVED_PLAYER_V1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_PLAYER_V2\", function() { return LOAD_PLAYER_V2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVED_PLAYER_V2\", function() { return RECEIVED_PLAYER_V2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSectionTitles\", function() { return loadSectionTitles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedSectionTitles\", function() { return receivedSectionTitles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSectionBgPictures\", function() { return loadSectionBgPictures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedSectionBgPictures\", function() { return receivedSectionBgPictures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadNews\", function() { return loadNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedNews\", function() { return receivedNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTourDates\", function() { return loadTourDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedTourDates\", function() { return receivedTourDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSectionDisco\", function() { return loadSectionDisco; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedSectionDisco\", function() { return receivedSectionDisco; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDiscoPics\", function() { return loadDiscoPics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedDiscoPics\", function() { return receivedDiscoPics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDiscoVerso\", function() { return loadDiscoVerso; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedDiscoVerso\", function() { return receivedDiscoVerso; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSectionAbout\", function() { return loadSectionAbout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedSectionAbout\", function() { return receivedSectionAbout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSectionAboutDescription\", function() { return loadSectionAboutDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedSectionAboutDescription\", function() { return receivedSectionAboutDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSectionBackground\", function() { return loadSectionBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedSectionBackground\", function() { return receivedSectionBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadAboutPics\", function() { return loadAboutPics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedAboutPics\", function() { return receivedAboutPics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPictures\", function() { return loadPictures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedPictures\", function() { return receivedPictures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadVideos\", function() { return loadVideos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedVideos\", function() { return receivedVideos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPlayerV1\", function() { return loadPlayerV1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedPlayerV1\", function() { return receivedPlayerV1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadPlayerV2\", function() { return loadPlayerV2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receivedPlayerV2\", function() { return receivedPlayerV2; });\n/* harmony import */ var src_utils_tourCleaner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/tourCleaner */ \"./src/utils/tourCleaner.js\");\n/* harmony import */ var src_utils_videosUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/videosUtil */ \"./src/utils/videosUtil.js\");\n/* harmony import */ var src_utils_newsCleaner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/newsCleaner */ \"./src/utils/newsCleaner.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Local imports\n */\n\n\n\n/**\n * Initial State\n */\n\nvar initialState = {\n  sectionTitles: [],\n  galery: [],\n  news: [],\n  sectionPictures: [],\n  gallery: [],\n  videos: [],\n  tourDates: [],\n  loadedData: {\n    tourdates: false,\n    mediaPictures: false,\n    newsLoaded: false,\n    vidLoaded: false\n  },\n  sectionDisco: [],\n  sectionAbout: [],\n  aboutPics: [],\n  sectionBackground: [],\n  sectionAboutDescription: [],\n  aboutLoaded: false,\n  backgroundLoaded: false,\n  titlesLoaded: false,\n  discoPics: [],\n  loaddiscoPics: false,\n  loadDisco: false,\n  discoVerso: [],\n  loadVerso: false,\n  playerDatas: [],\n  playerMusic: []\n};\n/**\n * Types\n */\n// SECTIONS Export\n\nvar LOAD_SECTION_TITLES = 'LOAD_SECTION_TITLES';\nvar RECEIVED_SECTION_TITLE = 'RECEIVED_SECTION_TITLE';\nvar LOAD_SECTION_BG_PICTURES = 'LOAD_SECTION_BG_PICTURES';\nvar RECEIVED_SECTION_BG_PICTURES = 'RECEIVED_SECTION_BG_PICTURES'; // NEWS Export\n\nvar LOAD_NEWS = 'LOAD_NEWS';\nvar RECEIVED_NEWS = 'RECEIVED_NEWS'; // TOUR Export\n\nvar LOAD_TOUR_DATES = 'LOAD_TOUR_DATES';\nvar RECEIVED_TOUR_DATES = 'RECEIVED_TOUR_DATES'; // DISCO Export\n\nvar LOAD_SECTION_DISCO = 'LOAD_DISCO_NAME';\nvar RECEIVED_SECTION_DISCO = 'RECEIVED_SECTION_DISCO';\nvar LOAD_DISCO_PICS = 'LOAD_DISCO_PICS';\nvar RECEIVED_DISCO_PICS = 'RECEIVED_DISCO_PICS';\nvar LOAD_DISCO_VERSO = 'LOAD_DISCO_VERSO';\nvar RECEIVED_DISCO_VERSO = 'RECEIVEID_DISCO_VERSO'; // Media Import\n\nvar LOAD_VIDEOS = 'LOAD_VIDEOS';\nvar RECEIVED_VIDEOS = 'RECEIVED_VIDEOS';\nvar LOAD_PICTURES = 'LOAD_PICTURES';\nvar RECEIVED_PICTURES = 'RECEIVED_PICTURES'; // ABOUT Export\n\nvar LOAD_SECTION_ABOUT = 'LOAD_SECTION_ABOUT';\nvar RECEIVED_SECTION_ABOUT = 'RECEIVED_SECTION_ABOUT';\nvar LOAD_SECTION_ABOUT_DESCRIPTION = 'LOAD_SECTION_ABOUT_DESCRIPTION';\nvar RECEIVED_SECTION_ABOUT_DESCRIPTION = 'RECEIVED_SECTION_ABOUT_DESCRIPTION';\nvar LOAD_SECTION_BACKGROUND = 'LOAD_SECTION_BACKGROUND';\nvar RECEIVED_SECTION_BACKGROUND = 'RECEIVED_SECTION_BACKGROUND';\nvar LOAD_ABOUT_PICS = 'LOAD_ABOUT_PICS';\nvar RECEIVED_ABOUT_PICS = 'RECEIVED_ABOUT_PICS'; // MUSIC Export\n\nvar LOAD_PLAYER_V1 = 'LOAD_PLAYER_V1';\nvar RECEIVED_PLAYER_V1 = 'RECEIVED_PLAYER_V1';\nvar LOAD_PLAYER_V2 = 'LOAD_PLAYER_V2';\nvar RECEIVED_PLAYER_V2 = 'RECEIVED_PLAYER_V2';\n/**\n * Reducer\n */\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case LOAD_SECTION_TITLES:\n      return _objectSpread({}, state);\n\n    case RECEIVED_SECTION_TITLE:\n      return _objectSpread({}, state, {\n        loadedData: _objectSpread({}, state.loadedData, {\n          sectionTitles: true\n        }),\n        sectionTitles: action.data,\n        titlesLoaded: true\n      });\n    // NEWS SECTION\n\n    case LOAD_NEWS:\n      return _objectSpread({}, state);\n\n    case RECEIVED_NEWS:\n      return _objectSpread({}, state, {\n        loadedData: _objectSpread({}, state.loadedData, {\n          newsLoaded: true\n        }),\n        news: Object(src_utils_newsCleaner__WEBPACK_IMPORTED_MODULE_2__[\"onlyThreeNews\"])(action.data)\n      });\n    // TOUR SECTION\n\n    case LOAD_TOUR_DATES:\n      return _objectSpread({}, state);\n\n    case RECEIVED_TOUR_DATES:\n      return _objectSpread({}, state, {\n        loadedData: _objectSpread({}, state.loadedData, {\n          tourdates: true\n        }),\n        tourDates: Object(src_utils_tourCleaner__WEBPACK_IMPORTED_MODULE_0__[\"cleanTourDates\"])(action.data)\n      });\n    // DISCO SECTION\n\n    case LOAD_SECTION_DISCO:\n      return _objectSpread({}, state);\n\n    case RECEIVED_SECTION_DISCO:\n      return _objectSpread({}, state, {\n        sectionDisco: action.data,\n        loadDisco: true\n      });\n\n    case LOAD_DISCO_PICS:\n      return _objectSpread({}, state);\n\n    case RECEIVED_DISCO_PICS:\n      return _objectSpread({}, state, {\n        discoPics: action.data,\n        loaddiscoPics: true\n      });\n\n    case LOAD_DISCO_VERSO:\n      return _objectSpread({}, state);\n\n    case RECEIVED_DISCO_VERSO:\n      return _objectSpread({}, state, {\n        discoVerso: action.data,\n        loadVerso: true\n      });\n    // ABOUT SECTION\n\n    case LOAD_SECTION_ABOUT:\n      return _objectSpread({}, state);\n\n    case RECEIVED_SECTION_ABOUT:\n      return _objectSpread({}, state, {\n        sectionAbout: action.data,\n        loadaboutItems: true\n      });\n\n    case LOAD_SECTION_ABOUT_DESCRIPTION:\n      return _objectSpread({}, state);\n\n    case RECEIVED_SECTION_ABOUT_DESCRIPTION:\n      return _objectSpread({}, state, {\n        sectionAboutDescription: action.data,\n        aboutLoaded: true\n      });\n\n    case LOAD_ABOUT_PICS:\n      return _objectSpread({}, state);\n\n    case RECEIVED_ABOUT_PICS:\n      return _objectSpread({}, state, {\n        aboutPics: action.data,\n        loadaboutPics: true\n      });\n    // BACKGROUND SECTION PICTURES\n\n    case LOAD_SECTION_BACKGROUND:\n      return _objectSpread({}, state);\n\n    case RECEIVED_SECTION_BACKGROUND:\n      return _objectSpread({}, state, {\n        sectionBackground: action.data,\n        backgroundLoaded: true\n      });\n    // MEDIA PHOTO GALLERY\n\n    case LOAD_PICTURES:\n      return _objectSpread({}, state);\n\n    case RECEIVED_PICTURES:\n      return _objectSpread({}, state, {\n        loadedData: _objectSpread({}, state.loadedData, {\n          mediaPictures: true\n        }),\n        gallery: action.data\n      });\n    // MEDIA VIDEOS GALLERY\n\n    case LOAD_VIDEOS:\n      return _objectSpread({}, state);\n\n    case RECEIVED_VIDEOS:\n      return _objectSpread({}, state, {\n        loadedData: _objectSpread({}, state.loadedData, {\n          vidLoaded: true\n        }),\n        videos: Object(src_utils_videosUtil__WEBPACK_IMPORTED_MODULE_1__[\"videoIds\"])(action.data)\n      });\n    // MUSIC\n\n    case LOAD_PLAYER_V1:\n      return _objectSpread({}, state);\n\n    case RECEIVED_PLAYER_V1:\n      return _objectSpread({}, state, {\n        playerMusic: action.data\n      });\n\n    case LOAD_PLAYER_V2:\n      return _objectSpread({}, state);\n\n    case RECEIVED_PLAYER_V2:\n      return _objectSpread({}, state, {\n        playerDatas: action.data\n      });\n\n    default:\n      return state;\n  }\n};\n/**\n * Action Creators\n */\n// Sections Import\n\n\nvar loadSectionTitles = function loadSectionTitles() {\n  return {\n    type: LOAD_SECTION_TITLES\n  };\n};\nvar receivedSectionTitles = function receivedSectionTitles(data) {\n  return {\n    type: RECEIVED_SECTION_TITLE,\n    data: data\n  };\n};\nvar loadSectionBgPictures = function loadSectionBgPictures() {\n  return {\n    type: LOAD_SECTION_BG_PICTURES\n  };\n};\nvar receivedSectionBgPictures = function receivedSectionBgPictures(data) {\n  return {\n    type: RECEIVED_SECTION_BG_PICTURES,\n    data: data\n  };\n}; // News Import\n\nvar loadNews = function loadNews() {\n  return {\n    type: LOAD_NEWS\n  };\n};\nvar receivedNews = function receivedNews(data) {\n  return {\n    type: RECEIVED_NEWS,\n    data: data\n  };\n}; // Tour Import\n\nvar loadTourDates = function loadTourDates() {\n  return {\n    type: LOAD_TOUR_DATES\n  };\n};\nvar receivedTourDates = function receivedTourDates(data) {\n  return {\n    type: RECEIVED_TOUR_DATES,\n    data: data\n  };\n}; // Disco Import\n\nvar loadSectionDisco = function loadSectionDisco() {\n  return {\n    type: LOAD_SECTION_DISCO\n  };\n};\nvar receivedSectionDisco = function receivedSectionDisco(data) {\n  return {\n    type: RECEIVED_SECTION_DISCO,\n    data: data\n  };\n};\nvar loadDiscoPics = function loadDiscoPics() {\n  return {\n    type: LOAD_DISCO_PICS\n  };\n};\nvar receivedDiscoPics = function receivedDiscoPics(data) {\n  return {\n    type: RECEIVED_DISCO_PICS,\n    data: data\n  };\n};\nvar loadDiscoVerso = function loadDiscoVerso() {\n  return {\n    type: LOAD_DISCO_VERSO\n  };\n};\nvar receivedDiscoVerso = function receivedDiscoVerso(data) {\n  return {\n    type: RECEIVED_DISCO_VERSO,\n    data: data\n  };\n}; // About Import\n\nvar loadSectionAbout = function loadSectionAbout() {\n  return {\n    type: LOAD_SECTION_ABOUT\n  };\n};\nvar receivedSectionAbout = function receivedSectionAbout(data) {\n  return {\n    type: RECEIVED_SECTION_ABOUT,\n    data: data\n  };\n};\nvar loadSectionAboutDescription = function loadSectionAboutDescription() {\n  return {\n    type: LOAD_SECTION_ABOUT_DESCRIPTION\n  };\n};\nvar receivedSectionAboutDescription = function receivedSectionAboutDescription(data) {\n  return {\n    type: RECEIVED_SECTION_ABOUT_DESCRIPTION,\n    data: data\n  };\n};\nvar loadSectionBackground = function loadSectionBackground() {\n  return {\n    type: LOAD_SECTION_BACKGROUND\n  };\n};\nvar receivedSectionBackground = function receivedSectionBackground(data) {\n  return {\n    type: RECEIVED_SECTION_BACKGROUND,\n    data: data\n  };\n};\nvar loadAboutPics = function loadAboutPics() {\n  return {\n    type: LOAD_ABOUT_PICS\n  };\n};\nvar receivedAboutPics = function receivedAboutPics(data) {\n  return {\n    type: RECEIVED_ABOUT_PICS,\n    data: data\n  };\n}; // Media Import\n\nvar loadPictures = function loadPictures() {\n  return {\n    type: LOAD_PICTURES\n  };\n};\nvar receivedPictures = function receivedPictures(data) {\n  return {\n    type: RECEIVED_PICTURES,\n    data: data\n  };\n};\nvar loadVideos = function loadVideos() {\n  return {\n    type: LOAD_VIDEOS\n  };\n};\nvar receivedVideos = function receivedVideos(data) {\n  return {\n    type: RECEIVED_VIDEOS,\n    data: data\n  };\n};\nvar loadPlayerV1 = function loadPlayerV1() {\n  return {\n    type: LOAD_PLAYER_V1\n  };\n};\nvar receivedPlayerV1 = function receivedPlayerV1(data) {\n  return {\n    type: RECEIVED_PLAYER_V1,\n    data: data\n  };\n};\nvar loadPlayerV2 = function loadPlayerV2() {\n  return {\n    type: LOAD_PLAYER_V2\n  };\n};\nvar receivedPlayerV2 = function receivedPlayerV2(data) {\n  return {\n    type: RECEIVED_PLAYER_V2,\n    data: data\n  };\n};\n/**\n * Selectors\n */\n\n/**\n * Export\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/store/reducer.js?");

/***/ }),

/***/ "./src/styles/fonts/genbasb-webfont.woff":
/*!***********************************************!*\
  !*** ./src/styles/fonts/genbasb-webfont.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasb-webfont6a4a64a3b57d3a64671ea2a1d493e4a8.woff\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasb-webfont.woff?");

/***/ }),

/***/ "./src/styles/fonts/genbasb-webfont.woff2":
/*!************************************************!*\
  !*** ./src/styles/fonts/genbasb-webfont.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasb-webfont1115e676feef3be64482f4a95b2fa5e9.woff2\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasb-webfont.woff2?");

/***/ }),

/***/ "./src/styles/fonts/genbasbi-webfont.woff":
/*!************************************************!*\
  !*** ./src/styles/fonts/genbasbi-webfont.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasbi-webfont71e5e35a2b4c39a8bc6cb3b8241913f5.woff\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasbi-webfont.woff?");

/***/ }),

/***/ "./src/styles/fonts/genbasbi-webfont.woff2":
/*!*************************************************!*\
  !*** ./src/styles/fonts/genbasbi-webfont.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasbi-webfonta0465ac454343e4656d8b6f5f52d984d.woff2\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasbi-webfont.woff2?");

/***/ }),

/***/ "./src/styles/fonts/genbasi-webfont.woff":
/*!***********************************************!*\
  !*** ./src/styles/fonts/genbasi-webfont.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasi-webfont21aba89b2fc820b6bd9d8cdbec8021ba.woff\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasi-webfont.woff?");

/***/ }),

/***/ "./src/styles/fonts/genbasi-webfont.woff2":
/*!************************************************!*\
  !*** ./src/styles/fonts/genbasi-webfont.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasi-webfont7e2d73ba6a61d33c8cc58b502f0278a3.woff2\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasi-webfont.woff2?");

/***/ }),

/***/ "./src/styles/fonts/genbasr-webfont.woff":
/*!***********************************************!*\
  !*** ./src/styles/fonts/genbasr-webfont.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasr-webfont938002d1c4c2aff013b89ca41505888d.woff\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasr-webfont.woff?");

/***/ }),

/***/ "./src/styles/fonts/genbasr-webfont.woff2":
/*!************************************************!*\
  !*** ./src/styles/fonts/genbasr-webfont.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/genbasr-webfont01368291ac532e8d473a22c678a3a09a.woff2\";\n\n//# sourceURL=webpack:///./src/styles/fonts/genbasr-webfont.woff2?");

/***/ }),

/***/ "./src/styles/fonts/mailartrubberstamp-regular-webfont.woff":
/*!******************************************************************!*\
  !*** ./src/styles/fonts/mailartrubberstamp-regular-webfont.woff ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/mailartrubberstamp-regular-webfont912a31aca51300dde14dbcc27f442bb3.woff\";\n\n//# sourceURL=webpack:///./src/styles/fonts/mailartrubberstamp-regular-webfont.woff?");

/***/ }),

/***/ "./src/styles/fonts/mailartrubberstamp-regular-webfont.woff2":
/*!*******************************************************************!*\
  !*** ./src/styles/fonts/mailartrubberstamp-regular-webfont.woff2 ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/mailartrubberstamp-regular-webfont24b03efd7a9d1425b58361c254110a80.woff2\";\n\n//# sourceURL=webpack:///./src/styles/fonts/mailartrubberstamp-regular-webfont.woff2?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/lib/loader.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ }),

/***/ "./src/utils/newsCleaner.js":
/*!**********************************!*\
  !*** ./src/utils/newsCleaner.js ***!
  \**********************************/
/*! exports provided: cleanDates, freshNews, onlyThreeNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanDates\", function() { return cleanDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"freshNews\", function() { return freshNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlyThreeNews\", function() { return onlyThreeNews; });\nvar cleanDates = function cleanDates(date) {\n  var newDate = date.slice(0, 10).split('-');\n  var cleanDate = {\n    year: newDate[0],\n    month: newDate[1],\n    day: newDate[2]\n  };\n  return cleanDate;\n};\nvar freshNews = function freshNews(news) {\n  var cleanNews = news.map(function (article) {\n    return {\n      id: article.id,\n      date: cleanDates(article.date),\n      title: article.title.rendered,\n      content: article.content.rendered\n    };\n  });\n  return cleanNews;\n};\nvar onlyThreeNews = function onlyThreeNews(news) {\n  return freshNews(news).slice(0, 3);\n};\n\n//# sourceURL=webpack:///./src/utils/newsCleaner.js?");

/***/ }),

/***/ "./src/utils/tourCleaner.js":
/*!**********************************!*\
  !*** ./src/utils/tourCleaner.js ***!
  \**********************************/
/*! exports provided: cleanTourDates, upCommingShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanTourDates\", function() { return cleanTourDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upCommingShow\", function() { return upCommingShow; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar cleanTourDates = function cleanTourDates(tourDate) {\n  var newDates = tourDate.map(function (date) {\n    return {\n      id: date.id,\n      date: date.custom_fields.date[0],\n      city: date.custom_fields.city[0],\n      venue: date.custom_fields.venue[0],\n      map: date.custom_fields.map[0],\n      tickets: date.custom_fields.tickets[0]\n    };\n  });\n  newDates = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"sortBy\"])(newDates, ['date']);\n  return newDates;\n};\nvar upCommingShow = function upCommingShow(date) {\n  var today = new Date();\n  var show = new Date(date);\n  return show >= today;\n};\n\n//# sourceURL=webpack:///./src/utils/tourCleaner.js?");

/***/ }),

/***/ "./src/utils/videosUtil.js":
/*!*********************************!*\
  !*** ./src/utils/videosUtil.js ***!
  \*********************************/
/*! exports provided: getVideoId, videoIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getVideoId\", function() { return getVideoId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoIds\", function() { return videoIds; });\nvar getVideoId = function getVideoId(url) {\n  var match = url.match(/v=([0-9a-z_-]{1,20})/i);\n  return match ? match['1'] : false;\n};\nvar videoIds = function videoIds(videos) {\n  var vidIds = videos.map(function (video) {\n    return getVideoId(video);\n  });\n  var otherVids = vidIds.splice(1, 5);\n  var splitVids = {\n    main: vidIds[0],\n    vids: otherVids\n  };\n  return splitVids;\n};\n\n//# sourceURL=webpack:///./src/utils/videosUtil.js?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/styles/index.scss ./src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/styles/index.scss */\"./src/styles/index.scss\");\nmodule.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/styles/index.scss_./src/index.js?");

/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///readable-stream_(ignored)?");

/***/ })

/******/ });