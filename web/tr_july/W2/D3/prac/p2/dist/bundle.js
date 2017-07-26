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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {sum, product} from './modules/functions';
// require("!style-loader!css-loader!./style.css");
// document.write(require('./export.js'));
// const a=3;
// const b = 7;

// import {person, personName} from "./base";
// import p from "./base";
// p();
// person.id++;


var Person = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: 'showId',

        // constructor () {
        //     console.log("constr");
        // }
        value: function showId() {
            console.log('9');
        }
    }]);

    return Person;
}();

var Child = function (_Person) {
    _inherits(Child, _Person);

    function Child() {
        _classCallCheck(this, Child);

        var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this));

        console.log("c cons");
        return _this;
    }

    _createClass(Child, [{
        key: 'ji',
        value: function ji() {
            console.log('ji');
        }
    }]);

    return Child;
}(Person);

var person = new Child();

console.log(typeof Person === 'undefined' ? 'undefined' : _typeof(Person));
console.log(person instanceof Person);
person.showId();
console.log(person.showId === Person.prototype.showId);
console.log(person.constructor);
console.log(person.__proto__.constructor);
person.ji();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTczZmMzNGQyYTZhMzk3ODJhN2MiLCJ3ZWJwYWNrOi8vLy4vZW50cnkuanMiXSwibmFtZXMiOlsiUGVyc29uIiwiY29uc29sZSIsImxvZyIsIkNoaWxkIiwicGVyc29uIiwic2hvd0lkIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJfX3Byb3RvX18iLCJqaSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7SUFHTUEsTTs7Ozs7Ozs7QUFDRjtBQUNBO0FBQ0E7aUNBQ1M7QUFDTEMsb0JBQVFDLEdBQVIsQ0FBWSxHQUFaO0FBQ0g7Ozs7OztJQUVDQyxLOzs7QUFDRixxQkFBZTtBQUFBOztBQUFBOztBQUVYRixnQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFGVztBQUdkOzs7OzZCQUNJO0FBQUNELG9CQUFRQyxHQUFSLENBQVksSUFBWjtBQUFrQjs7OztFQUxSRixNOztBQU9wQixJQUFJSSxTQUFTLElBQUlELEtBQUosRUFBYjs7QUFFQUYsUUFBUUMsR0FBUixRQUFtQkYsTUFBbkIseUNBQW1CQSxNQUFuQjtBQUNBQyxRQUFRQyxHQUFSLENBQVlFLGtCQUFrQkosTUFBOUI7QUFDQUksT0FBT0MsTUFBUDtBQUNBSixRQUFRQyxHQUFSLENBQVlFLE9BQU9DLE1BQVAsS0FBa0JMLE9BQU9NLFNBQVAsQ0FBaUJELE1BQS9DO0FBQ0FKLFFBQVFDLEdBQVIsQ0FBWUUsT0FBT0csV0FBbkI7QUFDQU4sUUFBUUMsR0FBUixDQUFZRSxPQUFPSSxTQUFQLENBQWlCRCxXQUE3QjtBQUNBSCxPQUFPSyxFQUFQLEciLCJmaWxlIjoiLi9kaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3M2ZjMzRkMmE2YTM5NzgyYTdjIiwiLy8gaW1wb3J0IHtzdW0sIHByb2R1Y3R9IGZyb20gJy4vbW9kdWxlcy9mdW5jdGlvbnMnO1xyXG4vLyByZXF1aXJlKFwiIXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vc3R5bGUuY3NzXCIpO1xyXG4vLyBkb2N1bWVudC53cml0ZShyZXF1aXJlKCcuL2V4cG9ydC5qcycpKTtcclxuLy8gY29uc3QgYT0zO1xyXG4vLyBjb25zdCBiID0gNztcclxuXHJcbi8vIGltcG9ydCB7cGVyc29uLCBwZXJzb25OYW1lfSBmcm9tIFwiLi9iYXNlXCI7XHJcbi8vIGltcG9ydCBwIGZyb20gXCIuL2Jhc2VcIjtcclxuLy8gcCgpO1xyXG4vLyBwZXJzb24uaWQrKztcclxuXHJcblxyXG5jbGFzcyBQZXJzb24ge1xyXG4gICAgLy8gY29uc3RydWN0b3IgKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY29uc3RyXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgc2hvd0lkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc5Jyk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQ2hpbGQgZXh0ZW5kcyBQZXJzb257XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImMgY29uc1wiKTtcclxuICAgIH1cclxuICAgIGppKCkge2NvbnNvbGUubG9nKCdqaScpfTtcclxufVxyXG5sZXQgcGVyc29uID0gbmV3IENoaWxkKCk7XHJcblxyXG5jb25zb2xlLmxvZyh0eXBlb2YgUGVyc29uKTtcclxuY29uc29sZS5sb2cocGVyc29uIGluc3RhbmNlb2YgUGVyc29uKTtcclxucGVyc29uLnNob3dJZCgpO1xyXG5jb25zb2xlLmxvZyhwZXJzb24uc2hvd0lkID09PSBQZXJzb24ucHJvdG90eXBlLnNob3dJZCk7XHJcbmNvbnNvbGUubG9nKHBlcnNvbi5jb25zdHJ1Y3Rvcik7XHJcbmNvbnNvbGUubG9nKHBlcnNvbi5fX3Byb3RvX18uY29uc3RydWN0b3IpO1xyXG5wZXJzb24uamkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=