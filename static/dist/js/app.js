/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_anagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/anagrams */ \"./src/helpers/anagrams.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/helpers */ \"./src/helpers/helpers.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AnagramGame',\n  data() {\n    return {\n      userName: '',\n      score: 0,\n      timeLeft: 60,\n      anagrams: _helpers_anagrams__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      currentWord: \"\",\n      anagramList: [],\n      wordLength: 5,\n      screen: \"start\",\n      correctGuesses: [],\n      userInput: \"\",\n      interval: null\n    };\n  },\n  computed: {\n    guessesLeft() {\n      return this.anagramList.length - this.correctGuesses.length - 1;\n    }\n  },\n  methods: {\n    play() {\n      this.score = 0;\n      this.screen = \"play\";\n      this.newAnagramList();\n      this.interval = setInterval(() => {\n        this.timeLeft -= 1;\n      }, 1000);\n    },\n    checkAnswer() {\n      const input = this.userInput.toLowerCase();\n      if (this.anagramList.includes(input) && !this.correctGuesses.includes(input) && this.currentWord !== input) {\n        this.correctGuesses.push(input);\n        this.userInput = \"\";\n        this.score += 1;\n        if (this.correctGuesses.length == this.anagramList.length - 1) {\n          this.newAnagramList();\n        }\n      }\n    },\n    newAnagramList() {\n      const currentAnagramList = [...this.anagramList];\n      const potentialAnagramLists = this.anagrams[this.wordLength];\n      this.anagramList = [...potentialAnagramLists[(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.getRandomInteger)(0, potentialAnagramLists.length)]];\n      while (this.anagramList[0] === currentAnagramList[0]) {\n        this.anagramList = [...potentialAnagramLists[(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.getRandomInteger)(0, potentialAnagramLists.length)]];\n      }\n      this.currentWord = this.anagramList[(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.getRandomInteger)(0, this.anagramList.length)];\n      this.correctGuesses = [];\n    },\n    async recordScore() {\n      // TODO: when Anagram Hunt finishes, make an Ajax call with axios (this.axios)\n      // to record the score on the backend\n    }\n  },\n  watch: {\n    userInput() {\n      // check answer when user input changes\n      this.checkAnswer();\n    },\n    timeLeft(newValue) {\n      if (newValue == 0) {\n        this.screen = \"end\";\n        this.timeLeft = 60;\n        clearInterval(this.interval);\n        this.recordScore(); // calls recordScore\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUF1RUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT80YmVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIj5cclxuICAgIDwhLS0gU3RhcnQgU2NyZWVuIC0tPlxyXG4gICAgPGRpdiB2LWlmPVwic2NyZWVuPT0nc3RhcnQnXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtLWF1dG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3b3JkLWxlbmd0aFwiIGNsYXNzPVwiZm9ybS1sYWJlbCBjb2xcIj5Xb3JkIExlbmd0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ3b3JkLWxlbmd0aFwiIGNsYXNzPVwiZm9ybS1zZWxlY3QgY29sXCIgdi1tb2RlbD1cIndvcmRMZW5ndGhcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwia2V5IGluIE9iamVjdC5rZXlzKGFuYWdyYW1zKVwiIDprZXk9XCJrZXlcIiA6dmFsdWU9XCJrZXlcIj5cclxuICAgICAgICAgICAgICAgIHt7IGtleSB9fVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtLWF1dG9cIj5cclxuICAgICAgICA8b2w+XHJcbiAgICAgICAgICA8bGk+Q2hvb3NlIFdvcmQgTGVuZ3RoPC9saT5cclxuICAgICAgICAgIDxsaT5QcmVzcyA8c3Ryb25nPlBsYXkhPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgIDxsaT5Ib3cgbWFueSBhbmFncmFtcyBjYW4geW91IG1ha2UgaW4gYSBtaW51dGU/PC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIEBjbGljaz1cInBsYXlcIj5QbGF5ITwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIFBsYXkgU2NyZWVuIC0tPlxyXG4gICAgPGRpdiB2LWVsc2UtaWY9XCJzY3JlZW4gPT0gJ3BsYXknXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3Bhbj5TY29yZToge3sgc2NvcmUgfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5UaW1lIExlZnQ6IHt7IHRpbWVMZWZ0IH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxocj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8b3V0cHV0IGNsYXNzPVwiZGlzcGxheS01IHRleHQtY2VudGVyXCI+e3sgY3VycmVudFdvcmQgfX0gKHt7IGd1ZXNzZXNMZWZ0IH19IGxlZnQpPC9vdXRwdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInVzZXJJbnB1dFwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxvbD5cclxuICAgICAgICAgIDxsaSB2LWZvcj1cImd1ZXNzIGluIGNvcnJlY3RHdWVzc2VzXCIgOmtleT1cImd1ZXNzXCI+e3sgZ3Vlc3MgfX08L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEVuZCBTY3JlZW4gLS0+XHJcbiAgICA8ZGl2IHYtZWxzZS1pZj1cInNjcmVlbiA9PSAnZW5kJ1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5UaW1lJ3MgVXA8L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8cD5Zb3UgZ290PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LTNcIj57eyBzY29yZSB9fTwvZGl2PlxyXG4gICAgICAgIDxwPkFuYWdyYW1zPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInBsYXlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMCBtLTFcIj5QbGF5IEFnYWluPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzY3JlZW4gPSAnc3RhcnQnXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSB3LTEwMCBtLTFcIj5CYWNrIHRvIFN0YXJ0IFNjcmVlbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICBkaXYsIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYW5hZ3JhbXMgZnJvbSBcIkAvaGVscGVycy9hbmFncmFtc1wiO1xyXG5pbXBvcnQge2dldFJhbmRvbUludGVnZXJ9IGZyb20gXCJAL2hlbHBlcnMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdBbmFncmFtR2FtZScsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIHRpbWVMZWZ0OiA2MCxcclxuICAgICAgYW5hZ3JhbXM6IGFuYWdyYW1zLFxyXG4gICAgICBjdXJyZW50V29yZDogXCJcIixcclxuICAgICAgYW5hZ3JhbUxpc3Q6IFtdLFxyXG4gICAgICB3b3JkTGVuZ3RoOiA1LFxyXG4gICAgICBzY3JlZW46IFwic3RhcnRcIixcclxuICAgICAgY29ycmVjdEd1ZXNzZXM6IFtdLFxyXG4gICAgICB1c2VySW5wdXQ6IFwiXCIsXHJcbiAgICAgIGludGVydmFsOiBudWxsLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGd1ZXNzZXNMZWZ0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbmFncmFtTGlzdC5sZW5ndGggLSB0aGlzLmNvcnJlY3RHdWVzc2VzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBwbGF5KCkge1xyXG4gICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgdGhpcy5zY3JlZW4gPSBcInBsYXlcIjtcclxuICAgICAgdGhpcy5uZXdBbmFncmFtTGlzdCgpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRpbWVMZWZ0IC09IDE7XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9LFxyXG4gICAgY2hlY2tBbnN3ZXIoKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy51c2VySW5wdXQudG9Mb3dlckNhc2UoKVxyXG4gICAgICBpZiAodGhpcy5hbmFncmFtTGlzdC5pbmNsdWRlcyhpbnB1dCkgJiYgIXRoaXMuY29ycmVjdEd1ZXNzZXMuaW5jbHVkZXMoaW5wdXQpICYmIHRoaXMuY3VycmVudFdvcmQgIT09IGlucHV0KSB7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0R3Vlc3Nlcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb3JyZWN0R3Vlc3Nlcy5sZW5ndGggPT0gdGhpcy5hbmFncmFtTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICB0aGlzLm5ld0FuYWdyYW1MaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmV3QW5hZ3JhbUxpc3QoKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRBbmFncmFtTGlzdCA9IFsuLi50aGlzLmFuYWdyYW1MaXN0XTtcclxuICAgICAgY29uc3QgcG90ZW50aWFsQW5hZ3JhbUxpc3RzID0gdGhpcy5hbmFncmFtc1t0aGlzLndvcmRMZW5ndGhdO1xyXG4gICAgICB0aGlzLmFuYWdyYW1MaXN0ID0gWy4uLnBvdGVudGlhbEFuYWdyYW1MaXN0c1tnZXRSYW5kb21JbnRlZ2VyKDAsIHBvdGVudGlhbEFuYWdyYW1MaXN0cy5sZW5ndGgpXV07XHJcbiAgICAgIHdoaWxlICh0aGlzLmFuYWdyYW1MaXN0WzBdID09PSBjdXJyZW50QW5hZ3JhbUxpc3RbMF0pIHtcclxuICAgICAgICB0aGlzLmFuYWdyYW1MaXN0ID0gWy4uLnBvdGVudGlhbEFuYWdyYW1MaXN0c1tnZXRSYW5kb21JbnRlZ2VyKDAsIHBvdGVudGlhbEFuYWdyYW1MaXN0cy5sZW5ndGgpXV07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jdXJyZW50V29yZCA9IHRoaXMuYW5hZ3JhbUxpc3RbZ2V0UmFuZG9tSW50ZWdlcigwLCB0aGlzLmFuYWdyYW1MaXN0Lmxlbmd0aCldO1xyXG4gICAgICB0aGlzLmNvcnJlY3RHdWVzc2VzID0gW107XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcmVjb3JkU2NvcmUoKSB7XHJcbiAgICAgIC8vIFRPRE86IHdoZW4gQW5hZ3JhbSBIdW50IGZpbmlzaGVzLCBtYWtlIGFuIEFqYXggY2FsbCB3aXRoIGF4aW9zICh0aGlzLmF4aW9zKVxyXG4gICAgICAvLyB0byByZWNvcmQgdGhlIHNjb3JlIG9uIHRoZSBiYWNrZW5kXHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdXNlcklucHV0KCkge1xyXG4gICAgICAvLyBjaGVjayBhbnN3ZXIgd2hlbiB1c2VyIGlucHV0IGNoYW5nZXNcclxuICAgICAgdGhpcy5jaGVja0Fuc3dlcigpXHJcbiAgICB9LFxyXG4gICAgdGltZUxlZnQobmV3VmFsdWUpIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09IDApIHtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IFwiZW5kXCI7XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDYwO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRTY29yZSgpOyAvLyBjYWxscyByZWNvcmRTY29yZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/helpers */ \"./src/helpers/helpers.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'MathGame',\n  data() {\n    return {\n      score: 0,\n      screen: \"start\",\n      maxNumber: 30,\n      operation: \"+\",\n      operations: {\n        \"Addition\": \"+\",\n        \"Subtraction\": \"-\",\n        \"Multiplication\": \"x\",\n        \"Division\": \"/\"\n      },\n      number1: 0,\n      number2: 0,\n      userInput: \"\",\n      interval: null,\n      timeLeft: 60\n    };\n  },\n  methods: {\n    play() {\n      this.screen = \"play\";\n      this.getNewQuestion();\n      this.interval = setInterval(() => {\n        this.timeLeft--;\n      }, 1000);\n    },\n    getNewQuestion() {\n      let num1 = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, this.maxNumber + 1);\n      let num2 = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, this.maxNumber + 1);\n      if (this.operation == \"-\") {\n        this.number1 = Math.max(num1, num2);\n        this.number2 = Math.min(num1, num2);\n      } else if (this.operation == \"/\") {\n        this.number1 = num1 * num2;\n        this.number2 = num2;\n      } else {\n        this.number1 = num1;\n        this.number2 = num2;\n      }\n    },\n    async recordScore() {\n      // TODO: when Math Facts finishes, make an Ajax call with axios (this.axios)\n      // to record the score on the backend\n    }\n  },\n  computed: {\n    correctAnswer() {\n      if (this.userInput.trim() == \"\") {\n        return false;\n      }\n      const input = parseInt(this.userInput);\n      if (this.operation == \"+\") {\n        return input === this.number1 + this.number2;\n      }\n      if (this.operation == \"-\") {\n        return input === this.number1 - this.number2;\n      }\n      if (this.operation == \"x\") {\n        return input === this.number1 * this.number2;\n      }\n      if (this.operation == \"/\") {\n        return input === this.number1 / this.number2;\n      }\n      return false;\n    }\n  },\n  watch: {\n    userInput() {\n      if (this.correctAnswer) {\n        this.score++;\n        this.getNewQuestion();\n        this.userInput = \"\";\n      }\n    },\n    timeLeft(newTime) {\n      if (newTime === 0) {\n        clearInterval(this.interval);\n        this.timeLeft = 60;\n        this.screen = \"end\";\n        this.recordScore(); // call to record score\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHBzL01hdGhGYWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUFpSEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlPzhjNjYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIndpZHRoOiA1MDBweFwiPlxyXG4gICAgPCEtLSBTdGFydCBTY3JlZW4gLS0+XHJcbiAgICA8ZGl2IHYtaWY9XCJzY3JlZW49PSdzdGFydCdcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwib3BlcmF0aW9uXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGNvbC0zXCI+T3BlcmF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm9wZXJhdGlvblwiIGNsYXNzPVwiZm9ybS1zZWxlY3QgY29sXCIgdi1tb2RlbD1cIm9wZXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJzeW1ib2wsIG9wZXJhdGlvbiBpbiBvcGVyYXRpb25zXCIgOmtleT1cIm9wZXJhdGlvblwiIDp2YWx1ZT1cInN5bWJvbFwiPlxyXG4gICAgICAgICAgICAgICAge3sgb3BlcmF0aW9uIH19XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtbnVtYmVyXCIgY2xhc3M9XCJmb3JtLWxhYmVsIGNvbC0zXCI+TWF4IE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1udW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIG1heD1cIjEwMFwiIHYtbW9kZWw9XCJtYXhOdW1iZXJcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBtLWF1dG9cIj5cclxuICAgICAgICA8b2w+XHJcbiAgICAgICAgICA8bGk+Q2hvb3NlIE9wZXJhdGlvbiBhbmQgTWF4IE51bWJlcjwvbGk+XHJcbiAgICAgICAgICA8bGk+UHJlc3MgPHN0cm9uZz5QbGF5ITwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICA8bGk+SG93IG1hbnkgcXVlc3Rpb25zIGNhbiB5b3UgZ2V0IGluIGEgbWludXRlPzwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBAY2xpY2s9XCJwbGF5XCI+UGxheSE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBQbGF5IFNjcmVlbiAtLT5cclxuICAgIDxkaXYgdi1lbHNlLWlmPVwic2NyZWVuID09ICdwbGF5J1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPHNwYW4+U2NvcmU6IHt7IHNjb3JlIH19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+VGltZSBMZWZ0OiB7eyB0aW1lTGVmdCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPG91dHB1dCBjbGFzcz1cImRpc3BsYXktNSB0ZXh0LWNlbnRlclwiPnt7IG51bWJlcjEgfX0ge3sgb3BlcmF0aW9uIH19IHt7IG51bWJlcjIgfX0gPSA8L291dHB1dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbS1hdXRvXCIgdi1tb2RlbD1cInVzZXJJbnB1dFwiIHN0eWxlPVwid2lkdGg6IDIwMHB4XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG0tYXV0b1wiIHN0eWxlPVwid2lkdGg6IDMwMHB4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBneC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzEnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj4xPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnMidcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ICs9ICczJ1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+MzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBneC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzQnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj40PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnNSdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ICs9ICc2J1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+NjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBneC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzcnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj43PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnOCdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjg8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ICs9ICc5J1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+OTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBneC0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzAnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj4wPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCA9ICcnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEVuZCBTY3JlZW4gLS0+XHJcbiAgICA8ZGl2IHYtZWxzZS1pZj1cInNjcmVlbiA9PSAnZW5kJ1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5UaW1lJ3MgVXA8L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8cD5Zb3UgYW5zd2VyZWQ8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktM1wiPnt7IHNjb3JlIH19PC9kaXY+XHJcbiAgICAgICAgPHA+cXVlc3Rpb25zPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInBsYXlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMCBtLTFcIj5QbGF5IEFnYWluPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzY3JlZW4gPSAnc3RhcnQnXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSB3LTEwMCBtLTFcIj5CYWNrIHRvIFN0YXJ0IFNjcmVlbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICBkaXYsIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBnZXRSYW5kb21JbnRlZ2VyIH0gZnJvbSAnQC9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdNYXRoR2FtZScsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNjb3JlOiAwLFxyXG4gICAgICBzY3JlZW46IFwic3RhcnRcIixcclxuICAgICAgbWF4TnVtYmVyOiAzMCxcclxuICAgICAgb3BlcmF0aW9uOiBcIitcIixcclxuICAgICAgb3BlcmF0aW9uczoge1xyXG4gICAgICAgIFwiQWRkaXRpb25cIjogXCIrXCIsXHJcbiAgICAgICAgXCJTdWJ0cmFjdGlvblwiOiBcIi1cIixcclxuICAgICAgICBcIk11bHRpcGxpY2F0aW9uXCI6IFwieFwiLFxyXG4gICAgICAgIFwiRGl2aXNpb25cIjogXCIvXCJcclxuICAgICAgfSxcclxuICAgICAgbnVtYmVyMTogMCxcclxuICAgICAgbnVtYmVyMjogMCxcclxuICAgICAgdXNlcklucHV0OiBcIlwiLFxyXG4gICAgICBpbnRlcnZhbDogbnVsbCxcclxuICAgICAgdGltZUxlZnQ6IDYwLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcGxheSgpIHtcclxuICAgICAgdGhpcy5zY3JlZW4gPSBcInBsYXlcIjtcclxuICAgICAgdGhpcy5nZXROZXdRdWVzdGlvbigpO1xyXG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGltZUxlZnQtLTtcclxuICAgICAgfSwgMTAwMClcclxuICAgIH0sXHJcbiAgICBnZXROZXdRdWVzdGlvbigpIHtcclxuICAgICAgbGV0IG51bTEgPSBnZXRSYW5kb21JbnRlZ2VyKDAsIHRoaXMubWF4TnVtYmVyICsgMSk7XHJcbiAgICAgIGxldCBudW0yID0gZ2V0UmFuZG9tSW50ZWdlcigwLCB0aGlzLm1heE51bWJlciArIDEpO1xyXG4gICAgICBpZiAodGhpcy5vcGVyYXRpb24gPT0gXCItXCIpIHtcclxuICAgICAgICB0aGlzLm51bWJlcjEgPSBNYXRoLm1heChudW0xLCBudW0yKTtcclxuICAgICAgICB0aGlzLm51bWJlcjIgPSBNYXRoLm1pbihudW0xLCBudW0yKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLm9wZXJhdGlvbiA9PSBcIi9cIikge1xyXG4gICAgICAgIHRoaXMubnVtYmVyMSA9IG51bTEgKiBudW0yO1xyXG4gICAgICAgIHRoaXMubnVtYmVyMiA9IG51bTI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIxID0gbnVtMTtcclxuICAgICAgICB0aGlzLm51bWJlcjIgPSBudW0yO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcmVjb3JkU2NvcmUoKSB7XHJcbiAgICAgIC8vIFRPRE86IHdoZW4gTWF0aCBGYWN0cyBmaW5pc2hlcywgbWFrZSBhbiBBamF4IGNhbGwgd2l0aCBheGlvcyAodGhpcy5heGlvcylcclxuICAgICAgLy8gdG8gcmVjb3JkIHRoZSBzY29yZSBvbiB0aGUgYmFja2VuZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNvcnJlY3RBbnN3ZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXJJbnB1dC50cmltKCkgPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5wdXQgPSBwYXJzZUludCh0aGlzLnVzZXJJbnB1dCk7XHJcbiAgICAgIGlmICh0aGlzLm9wZXJhdGlvbiA9PSBcIitcIikge1xyXG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gdGhpcy5udW1iZXIxICsgdGhpcy5udW1iZXIyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcGVyYXRpb24gPT0gXCItXCIpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQgPT09IHRoaXMubnVtYmVyMSAtIHRoaXMubnVtYmVyMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3BlcmF0aW9uID09IFwieFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSB0aGlzLm51bWJlcjEgKiB0aGlzLm51bWJlcjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wZXJhdGlvbiA9PSBcIi9cIikge1xyXG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gdGhpcy5udW1iZXIxIC8gdGhpcy5udW1iZXIyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHVzZXJJbnB1dCgpIHtcclxuICAgICAgaWYgKHRoaXMuY29ycmVjdEFuc3dlcikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKzsgXHJcbiAgICAgICAgdGhpcy5nZXROZXdRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMudXNlcklucHV0ID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRpbWVMZWZ0KG5ld1RpbWUpIHtcclxuICAgICAgaWYgKG5ld1RpbWUgPT09IDApIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MDtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IFwiZW5kXCI7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRTY29yZSgpOyAvLyBjYWxsIHRvIHJlY29yZCBzY29yZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_view);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWdhbWVzLy4vc3JjL0FwcC52dWU/OTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHJvdXRlci12aWV3Lz5cclxuPC90ZW1wbGF0ZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5ee80f7a\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"container\",\n  style: {\n    \"width\": \"500px\"\n  }\n};\nconst _hoisted_2 = {\n  key: 0,\n  class: \"container\"\n};\nconst _hoisted_3 = {\n  class: \"row m-auto\"\n};\nconst _hoisted_4 = {\n  class: \"col\"\n};\nconst _hoisted_5 = {\n  class: \"row\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"word-length\",\n  class: \"form-label col\"\n}, \"Word Length\", -1 /* HOISTED */));\nconst _hoisted_7 = [\"value\"];\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"row m-auto\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Choose Word Length\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Press \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Play!\")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"How many anagrams can you make in a minute?\")])], -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"container\"\n};\nconst _hoisted_10 = {\n  class: \"row\"\n};\nconst _hoisted_11 = {\n  class: \"col d-flex justify-content-between\"\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */));\nconst _hoisted_13 = {\n  class: \"row\"\n};\nconst _hoisted_14 = {\n  class: \"display-5 text-center\"\n};\nconst _hoisted_15 = {\n  class: \"row\"\n};\nconst _hoisted_16 = {\n  class: \"row text-center\"\n};\nconst _hoisted_17 = {\n  class: \"container\"\n};\nconst _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"row\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", {\n  class: \"display-4 text-center\"\n}, \"Time's Up\")], -1 /* HOISTED */));\nconst _hoisted_19 = {\n  class: \"row d-flex flex-col text-center\"\n};\nconst _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"You got\", -1 /* HOISTED */));\nconst _hoisted_21 = {\n  class: \"display-3\"\n};\nconst _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Anagrams\", -1 /* HOISTED */));\nconst _hoisted_23 = {\n  class: \"row d-flex flex-col text-center\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Start Screen \"), $data.screen == 'start' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    id: \"word-length\",\n    class: \"form-select col\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.wordLength = $event)\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(Object.keys($data.anagrams), key => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n      key: key,\n      value: key\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key), 9 /* TEXT, PROPS */, _hoisted_7);\n  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.wordLength]])])])]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: \"btn btn-primary w-100\",\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.play && $options.play(...args))\n  }, \"Play!\")])) : $data.screen == 'play' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    key: 1\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Play Screen \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, \"Score: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.score), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, \"Time Left: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.timeLeft), 1 /* TEXT */)]), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"output\", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentWord) + \" (\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.guessesLeft) + \" left)\", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    class: \"form-control\",\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $data.userInput = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.userInput]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.correctGuesses, guess => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: guess\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(guess), 1 /* TEXT */);\n  }), 128 /* KEYED_FRAGMENT */))])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : $data.screen == 'end' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    key: 2\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" End Screen \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.score), 1 /* TEXT */), _hoisted_22]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[3] || (_cache[3] = (...args) => $options.play && $options.play(...args)),\n    class: \"btn btn-primary w-100 m-1\"\n  }, \"Play Again\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[4] || (_cache[4] = $event => $data.screen = 'start'),\n    class: \"btn btn-secondary w-100 m-1\"\n  }, \"Back to Start Screen\")])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvYXBwcy9BbmFncmFtSHVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVlODBmN2Emc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FBREE7QUFHQTs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTs7QUFVQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUlBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTs7QUFFQTtBQUFBOztBQUdBO0FBQUE7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBRUE7QUFBQTtBQUNBOztBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUFBOztBQXZEQTtBQU9BO0FBQUE7QUFSQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQWVBO0FBQUE7QUFBQTtBQXZCQTtBQUFBO0FBc0NBO0FBdENBO0FBc0NBO0FBSUE7QUFBQTtBQUFBO0FBS0E7QUEvQ0E7QUFBQTtBQXlEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvYXBwcy9BbmFncmFtSHVudC52dWU/NGJlZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCI+XHJcbiAgICA8IS0tIFN0YXJ0IFNjcmVlbiAtLT5cclxuICAgIDxkaXYgdi1pZj1cInNjcmVlbj09J3N0YXJ0J1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbS1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwid29yZC1sZW5ndGhcIiBjbGFzcz1cImZvcm0tbGFiZWwgY29sXCI+V29yZCBMZW5ndGg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwid29yZC1sZW5ndGhcIiBjbGFzcz1cImZvcm0tc2VsZWN0IGNvbFwiIHYtbW9kZWw9XCJ3b3JkTGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImtleSBpbiBPYmplY3Qua2V5cyhhbmFncmFtcylcIiA6a2V5PVwia2V5XCIgOnZhbHVlPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICB7eyBrZXkgfX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbS1hdXRvXCI+XHJcbiAgICAgICAgPG9sPlxyXG4gICAgICAgICAgPGxpPkNob29zZSBXb3JkIExlbmd0aDwvbGk+XHJcbiAgICAgICAgICA8bGk+UHJlc3MgPHN0cm9uZz5QbGF5ITwvc3Ryb25nPjwvbGk+XHJcbiAgICAgICAgICA8bGk+SG93IG1hbnkgYW5hZ3JhbXMgY2FuIHlvdSBtYWtlIGluIGEgbWludXRlPzwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIiBAY2xpY2s9XCJwbGF5XCI+UGxheSE8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBQbGF5IFNjcmVlbiAtLT5cclxuICAgIDxkaXYgdi1lbHNlLWlmPVwic2NyZWVuID09ICdwbGF5J1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPHNwYW4+U2NvcmU6IHt7IHNjb3JlIH19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+VGltZSBMZWZ0OiB7eyB0aW1lTGVmdCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPG91dHB1dCBjbGFzcz1cImRpc3BsYXktNSB0ZXh0LWNlbnRlclwiPnt7IGN1cnJlbnRXb3JkIH19ICh7eyBndWVzc2VzTGVmdCB9fSBsZWZ0KTwvb3V0cHV0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ1c2VySW5wdXRcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8b2w+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJndWVzcyBpbiBjb3JyZWN0R3Vlc3Nlc1wiIDprZXk9XCJndWVzc1wiPnt7IGd1ZXNzIH19PC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBFbmQgU2NyZWVuIC0tPlxyXG4gICAgPGRpdiB2LWVsc2UtaWY9XCJzY3JlZW4gPT0gJ2VuZCdcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZGlzcGxheS00IHRleHQtY2VudGVyXCI+VGltZSdzIFVwPC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZC1mbGV4IGZsZXgtY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHA+WW91IGdvdDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0zXCI+e3sgc2NvcmUgfX08L2Rpdj5cclxuICAgICAgICA8cD5BbmFncmFtczwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZC1mbGV4IGZsZXgtY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJwbGF5XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDAgbS0xXCI+UGxheSBBZ2FpbjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2NyZWVuID0gJ3N0YXJ0J1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgdy0xMDAgbS0xXCI+QmFjayB0byBTdGFydCBTY3JlZW48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgZGl2LCBsYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGFuYWdyYW1zIGZyb20gXCJAL2hlbHBlcnMvYW5hZ3JhbXNcIjtcclxuaW1wb3J0IHtnZXRSYW5kb21JbnRlZ2VyfSBmcm9tIFwiQC9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQW5hZ3JhbUdhbWUnLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyTmFtZTogJycsXHJcbiAgICAgIHNjb3JlOiAwLFxyXG4gICAgICB0aW1lTGVmdDogNjAsXHJcbiAgICAgIGFuYWdyYW1zOiBhbmFncmFtcyxcclxuICAgICAgY3VycmVudFdvcmQ6IFwiXCIsXHJcbiAgICAgIGFuYWdyYW1MaXN0OiBbXSxcclxuICAgICAgd29yZExlbmd0aDogNSxcclxuICAgICAgc2NyZWVuOiBcInN0YXJ0XCIsXHJcbiAgICAgIGNvcnJlY3RHdWVzc2VzOiBbXSxcclxuICAgICAgdXNlcklucHV0OiBcIlwiLFxyXG4gICAgICBpbnRlcnZhbDogbnVsbCxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBndWVzc2VzTGVmdCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYW5hZ3JhbUxpc3QubGVuZ3RoIC0gdGhpcy5jb3JyZWN0R3Vlc3Nlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcGxheSgpIHtcclxuICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgIHRoaXMuc2NyZWVuID0gXCJwbGF5XCI7XHJcbiAgICAgIHRoaXMubmV3QW5hZ3JhbUxpc3QoKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdCAtPSAxO1xyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSxcclxuICAgIGNoZWNrQW5zd2VyKCkge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMudXNlcklucHV0LnRvTG93ZXJDYXNlKClcclxuICAgICAgaWYgKHRoaXMuYW5hZ3JhbUxpc3QuaW5jbHVkZXMoaW5wdXQpICYmICF0aGlzLmNvcnJlY3RHdWVzc2VzLmluY2x1ZGVzKGlucHV0KSAmJiB0aGlzLmN1cnJlbnRXb3JkICE9PSBpbnB1dCkge1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEd1ZXNzZXMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdEd1ZXNzZXMubGVuZ3RoID09IHRoaXMuYW5hZ3JhbUxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgdGhpcy5uZXdBbmFncmFtTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5ld0FuYWdyYW1MaXN0KCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50QW5hZ3JhbUxpc3QgPSBbLi4udGhpcy5hbmFncmFtTGlzdF07XHJcbiAgICAgIGNvbnN0IHBvdGVudGlhbEFuYWdyYW1MaXN0cyA9IHRoaXMuYW5hZ3JhbXNbdGhpcy53b3JkTGVuZ3RoXTtcclxuICAgICAgdGhpcy5hbmFncmFtTGlzdCA9IFsuLi5wb3RlbnRpYWxBbmFncmFtTGlzdHNbZ2V0UmFuZG9tSW50ZWdlcigwLCBwb3RlbnRpYWxBbmFncmFtTGlzdHMubGVuZ3RoKV1dO1xyXG4gICAgICB3aGlsZSAodGhpcy5hbmFncmFtTGlzdFswXSA9PT0gY3VycmVudEFuYWdyYW1MaXN0WzBdKSB7XHJcbiAgICAgICAgdGhpcy5hbmFncmFtTGlzdCA9IFsuLi5wb3RlbnRpYWxBbmFncmFtTGlzdHNbZ2V0UmFuZG9tSW50ZWdlcigwLCBwb3RlbnRpYWxBbmFncmFtTGlzdHMubGVuZ3RoKV1dO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3VycmVudFdvcmQgPSB0aGlzLmFuYWdyYW1MaXN0W2dldFJhbmRvbUludGVnZXIoMCwgdGhpcy5hbmFncmFtTGlzdC5sZW5ndGgpXTtcclxuICAgICAgdGhpcy5jb3JyZWN0R3Vlc3NlcyA9IFtdO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHJlY29yZFNjb3JlKCkge1xyXG4gICAgICAvLyBUT0RPOiB3aGVuIEFuYWdyYW0gSHVudCBmaW5pc2hlcywgbWFrZSBhbiBBamF4IGNhbGwgd2l0aCBheGlvcyAodGhpcy5heGlvcylcclxuICAgICAgLy8gdG8gcmVjb3JkIHRoZSBzY29yZSBvbiB0aGUgYmFja2VuZFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHVzZXJJbnB1dCgpIHtcclxuICAgICAgLy8gY2hlY2sgYW5zd2VyIHdoZW4gdXNlciBpbnB1dCBjaGFuZ2VzXHJcbiAgICAgIHRoaXMuY2hlY2tBbnN3ZXIoKVxyXG4gICAgfSxcclxuICAgIHRpbWVMZWZ0KG5ld1ZhbHVlKSB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBcImVuZFwiO1xyXG4gICAgICAgIHRoaXMudGltZUxlZnQgPSA2MDtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMucmVjb3JkU2NvcmUoKTsgLy8gY2FsbHMgcmVjb3JkU2NvcmVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-456370fb\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"container\",\n  style: {\n    \"width\": \"500px\"\n  }\n};\nconst _hoisted_2 = {\n  key: 0,\n  class: \"container\"\n};\nconst _hoisted_3 = {\n  class: \"row\"\n};\nconst _hoisted_4 = {\n  class: \"col\"\n};\nconst _hoisted_5 = {\n  class: \"row\"\n};\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"operation\",\n  class: \"form-label col-3\"\n}, \"Operation\", -1 /* HOISTED */));\nconst _hoisted_7 = [\"value\"];\nconst _hoisted_8 = {\n  class: \"row\"\n};\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  for: \"max-number\",\n  class: \"form-label col-3\"\n}, \"Max Number\", -1 /* HOISTED */));\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"row m-auto\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ol\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"Choose Operation and Max Number\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Press \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", null, \"Play!\")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, \"How many questions can you get in a minute?\")])], -1 /* HOISTED */));\nconst _hoisted_11 = {\n  class: \"container\"\n};\nconst _hoisted_12 = {\n  class: \"row\"\n};\nconst _hoisted_13 = {\n  class: \"col d-flex justify-content-between\"\n};\nconst _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */));\nconst _hoisted_15 = {\n  class: \"row\"\n};\nconst _hoisted_16 = {\n  class: \"display-5 text-center\"\n};\nconst _hoisted_17 = {\n  class: \"row\"\n};\nconst _hoisted_18 = {\n  class: \"row m-auto\",\n  style: {\n    \"width\": \"300px\"\n  }\n};\nconst _hoisted_19 = {\n  class: \"row gx-1\"\n};\nconst _hoisted_20 = {\n  class: \"col-4\"\n};\nconst _hoisted_21 = {\n  class: \"col-4\"\n};\nconst _hoisted_22 = {\n  class: \"col-4\"\n};\nconst _hoisted_23 = {\n  class: \"row gx-1\"\n};\nconst _hoisted_24 = {\n  class: \"col-4\"\n};\nconst _hoisted_25 = {\n  class: \"col-4\"\n};\nconst _hoisted_26 = {\n  class: \"col-4\"\n};\nconst _hoisted_27 = {\n  class: \"row gx-1\"\n};\nconst _hoisted_28 = {\n  class: \"col-4\"\n};\nconst _hoisted_29 = {\n  class: \"col-4\"\n};\nconst _hoisted_30 = {\n  class: \"col-4\"\n};\nconst _hoisted_31 = {\n  class: \"row gx-1\"\n};\nconst _hoisted_32 = {\n  class: \"col-4\"\n};\nconst _hoisted_33 = {\n  class: \"col-8\"\n};\nconst _hoisted_34 = {\n  class: \"container\"\n};\nconst _hoisted_35 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"row\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h4\", {\n  class: \"display-4 text-center\"\n}, \"Time's Up\")], -1 /* HOISTED */));\nconst _hoisted_36 = {\n  class: \"row d-flex flex-col text-center\"\n};\nconst _hoisted_37 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"You answered\", -1 /* HOISTED */));\nconst _hoisted_38 = {\n  class: \"display-3\"\n};\nconst _hoisted_39 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"questions\", -1 /* HOISTED */));\nconst _hoisted_40 = {\n  class: \"row d-flex flex-col text-center\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Start Screen \"), $data.screen == 'start' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    id: \"operation\",\n    class: \"form-select col\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.operation = $event)\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.operations, (symbol, operation) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n      key: operation,\n      value: symbol\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(operation), 9 /* TEXT, PROPS */, _hoisted_7);\n  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.operation]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    id: \"max-number\",\n    class: \"form-control col\",\n    type: \"number\",\n    min: \"1\",\n    max: \"100\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.maxNumber = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.maxNumber]])])])]), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: \"btn btn-primary w-100\",\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.play && $options.play(...args))\n  }, \"Play!\")])) : $data.screen == 'play' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    key: 1\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Play Screen \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, \"Score: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.score), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, \"Time Left: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.timeLeft), 1 /* TEXT */)]), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"output\", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.number1) + \" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.operation) + \" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.number2) + \" = \", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    class: \"form-control m-auto\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.userInput = $event),\n    style: {\n      \"width\": \"200px\"\n    }\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.userInput]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[4] || (_cache[4] = $event => $data.userInput += '1'),\n    class: \"btn btn-primary w-100\"\n  }, \"1\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[5] || (_cache[5] = $event => $data.userInput += '2'),\n    class: \"btn btn-primary w-100\"\n  }, \"2\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[6] || (_cache[6] = $event => $data.userInput += '3'),\n    class: \"btn btn-primary w-100\"\n  }, \"3\")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[7] || (_cache[7] = $event => $data.userInput += '4'),\n    class: \"btn btn-primary w-100\"\n  }, \"4\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[8] || (_cache[8] = $event => $data.userInput += '5'),\n    class: \"btn btn-primary w-100\"\n  }, \"5\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[9] || (_cache[9] = $event => $data.userInput += '6'),\n    class: \"btn btn-primary w-100\"\n  }, \"6\")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[10] || (_cache[10] = $event => $data.userInput += '7'),\n    class: \"btn btn-primary w-100\"\n  }, \"7\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[11] || (_cache[11] = $event => $data.userInput += '8'),\n    class: \"btn btn-primary w-100\"\n  }, \"8\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[12] || (_cache[12] = $event => $data.userInput += '9'),\n    class: \"btn btn-primary w-100\"\n  }, \"9\")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[13] || (_cache[13] = $event => $data.userInput += '0'),\n    class: \"btn btn-primary w-100\"\n  }, \"0\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[14] || (_cache[14] = $event => $data.userInput = ''),\n    class: \"btn btn-primary w-100\"\n  }, \"Clear\")])])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : $data.screen == 'end' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    key: 2\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" End Screen \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.score), 1 /* TEXT */), _hoisted_39]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[15] || (_cache[15] = (...args) => $options.play && $options.play(...args)),\n    class: \"btn btn-primary w-100 m-1\"\n  }, \"Play Again\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[16] || (_cache[16] = $event => $data.screen = 'start'),\n    class: \"btn btn-secondary w-100 m-1\"\n  }, \"Back to Start Screen\")])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1NjM3MGZiJnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQURBO0FBR0E7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFQQTs7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7O0FBVUE7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUFBOztBQUNBO0FBQUE7O0FBRUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUdBO0FBQUE7O0FBR0E7QUFBQTs7QUFJQTtBQUFBOztBQUNBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBOztBQUlBO0FBQUE7O0FBQ0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7O0FBSUE7QUFBQTs7QUFDQTtBQUFBOztBQUdBO0FBQUE7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBRUE7QUFBQTtBQUNBOztBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUFBOztBQWpHQTtBQU9BO0FBQUE7QUFSQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQkE7QUFnQkE7QUFXQTtBQUFBO0FBQUE7QUEzQkE7QUFBQTtBQTBDQTtBQTFDQTtBQTBDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQW5GQTtBQUFBO0FBbUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHBzL01hdGhGYWN0cy52dWU/OGM2NiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCI+XHJcbiAgICA8IS0tIFN0YXJ0IFNjcmVlbiAtLT5cclxuICAgIDxkaXYgdi1pZj1cInNjcmVlbj09J3N0YXJ0J1wiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJvcGVyYXRpb25cIiBjbGFzcz1cImZvcm0tbGFiZWwgY29sLTNcIj5PcGVyYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwib3BlcmF0aW9uXCIgY2xhc3M9XCJmb3JtLXNlbGVjdCBjb2xcIiB2LW1vZGVsPVwib3BlcmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInN5bWJvbCwgb3BlcmF0aW9uIGluIG9wZXJhdGlvbnNcIiA6a2V5PVwib3BlcmF0aW9uXCIgOnZhbHVlPVwic3ltYm9sXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBvcGVyYXRpb24gfX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1udW1iZXJcIiBjbGFzcz1cImZvcm0tbGFiZWwgY29sLTNcIj5NYXggTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LW51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNvbFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PVwiMTAwXCIgdi1tb2RlbD1cIm1heE51bWJlclwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG0tYXV0b1wiPlxyXG4gICAgICAgIDxvbD5cclxuICAgICAgICAgIDxsaT5DaG9vc2UgT3BlcmF0aW9uIGFuZCBNYXggTnVtYmVyPC9saT5cclxuICAgICAgICAgIDxsaT5QcmVzcyA8c3Ryb25nPlBsYXkhPC9zdHJvbmc+PC9saT5cclxuICAgICAgICAgIDxsaT5Ib3cgbWFueSBxdWVzdGlvbnMgY2FuIHlvdSBnZXQgaW4gYSBtaW51dGU/PC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIEBjbGljaz1cInBsYXlcIj5QbGF5ITwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIFBsYXkgU2NyZWVuIC0tPlxyXG4gICAgPGRpdiB2LWVsc2UtaWY9XCJzY3JlZW4gPT0gJ3BsYXknXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3Bhbj5TY29yZToge3sgc2NvcmUgfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5UaW1lIExlZnQ6IHt7IHRpbWVMZWZ0IH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxocj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8b3V0cHV0IGNsYXNzPVwiZGlzcGxheS01IHRleHQtY2VudGVyXCI+e3sgbnVtYmVyMSB9fSB7eyBvcGVyYXRpb24gfX0ge3sgbnVtYmVyMiB9fSA9IDwvb3V0cHV0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBtLWF1dG9cIiB2LW1vZGVsPVwidXNlcklucHV0XCIgc3R5bGU9XCJ3aWR0aDogMjAwcHhcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbS1hdXRvXCIgc3R5bGU9XCJ3aWR0aDogMzAwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGd4LTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnMSdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjE8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ICs9ICcyJ1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+MjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzMnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj4zPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGd4LTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnNCdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ICs9ICc1J1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+NTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzYnXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj42PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGd4LTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnNydcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjc8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ICs9ICc4J1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCI+ODwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ1c2VySW5wdXQgKz0gJzknXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj45PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGd4LTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVzZXJJbnB1dCArPSAnMCdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPjA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidXNlcklucHV0ID0gJydcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPkNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gRW5kIFNjcmVlbiAtLT5cclxuICAgIDxkaXYgdi1lbHNlLWlmPVwic2NyZWVuID09ICdlbmQnXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImRpc3BsYXktNCB0ZXh0LWNlbnRlclwiPlRpbWUncyBVcDwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxwPllvdSBhbnN3ZXJlZDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0zXCI+e3sgc2NvcmUgfX08L2Rpdj5cclxuICAgICAgICA8cD5xdWVzdGlvbnM8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwicGxheVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwIG0tMVwiPlBsYXkgQWdhaW48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNjcmVlbiA9ICdzdGFydCdcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IHctMTAwIG0tMVwiPkJhY2sgdG8gU3RhcnQgU2NyZWVuPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIGRpdiwgbGFiZWwge1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGdldFJhbmRvbUludGVnZXIgfSBmcm9tICdAL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01hdGhHYW1lJyxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIHNjcmVlbjogXCJzdGFydFwiLFxyXG4gICAgICBtYXhOdW1iZXI6IDMwLFxyXG4gICAgICBvcGVyYXRpb246IFwiK1wiLFxyXG4gICAgICBvcGVyYXRpb25zOiB7XHJcbiAgICAgICAgXCJBZGRpdGlvblwiOiBcIitcIixcclxuICAgICAgICBcIlN1YnRyYWN0aW9uXCI6IFwiLVwiLFxyXG4gICAgICAgIFwiTXVsdGlwbGljYXRpb25cIjogXCJ4XCIsXHJcbiAgICAgICAgXCJEaXZpc2lvblwiOiBcIi9cIlxyXG4gICAgICB9LFxyXG4gICAgICBudW1iZXIxOiAwLFxyXG4gICAgICBudW1iZXIyOiAwLFxyXG4gICAgICB1c2VySW5wdXQ6IFwiXCIsXHJcbiAgICAgIGludGVydmFsOiBudWxsLFxyXG4gICAgICB0aW1lTGVmdDogNjAsXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBwbGF5KCkge1xyXG4gICAgICB0aGlzLnNjcmVlbiA9IFwicGxheVwiO1xyXG4gICAgICB0aGlzLmdldE5ld1F1ZXN0aW9uKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdC0tO1xyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfSxcclxuICAgIGdldE5ld1F1ZXN0aW9uKCkge1xyXG4gICAgICBsZXQgbnVtMSA9IGdldFJhbmRvbUludGVnZXIoMCwgdGhpcy5tYXhOdW1iZXIgKyAxKTtcclxuICAgICAgbGV0IG51bTIgPSBnZXRSYW5kb21JbnRlZ2VyKDAsIHRoaXMubWF4TnVtYmVyICsgMSk7XHJcbiAgICAgIGlmICh0aGlzLm9wZXJhdGlvbiA9PSBcIi1cIikge1xyXG4gICAgICAgIHRoaXMubnVtYmVyMSA9IE1hdGgubWF4KG51bTEsIG51bTIpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyMiA9IE1hdGgubWluKG51bTEsIG51bTIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMub3BlcmF0aW9uID09IFwiL1wiKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIxID0gbnVtMSAqIG51bTI7XHJcbiAgICAgICAgdGhpcy5udW1iZXIyID0gbnVtMjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLm51bWJlcjEgPSBudW0xO1xyXG4gICAgICAgIHRoaXMubnVtYmVyMiA9IG51bTI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyByZWNvcmRTY29yZSgpIHtcclxuICAgICAgLy8gVE9ETzogd2hlbiBNYXRoIEZhY3RzIGZpbmlzaGVzLCBtYWtlIGFuIEFqYXggY2FsbCB3aXRoIGF4aW9zICh0aGlzLmF4aW9zKVxyXG4gICAgICAvLyB0byByZWNvcmQgdGhlIHNjb3JlIG9uIHRoZSBiYWNrZW5kXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY29ycmVjdEFuc3dlcigpIHtcclxuICAgICAgaWYgKHRoaXMudXNlcklucHV0LnRyaW0oKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpbnB1dCA9IHBhcnNlSW50KHRoaXMudXNlcklucHV0KTtcclxuICAgICAgaWYgKHRoaXMub3BlcmF0aW9uID09IFwiK1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSB0aGlzLm51bWJlcjEgKyB0aGlzLm51bWJlcjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wZXJhdGlvbiA9PSBcIi1cIikge1xyXG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gdGhpcy5udW1iZXIxIC0gdGhpcy5udW1iZXIyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcGVyYXRpb24gPT0gXCJ4XCIpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQgPT09IHRoaXMubnVtYmVyMSAqIHRoaXMubnVtYmVyMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3BlcmF0aW9uID09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSB0aGlzLm51bWJlcjEgLyB0aGlzLm51bWJlcjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdXNlcklucHV0KCkge1xyXG4gICAgICBpZiAodGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSsrOyBcclxuICAgICAgICB0aGlzLmdldE5ld1F1ZXN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGltZUxlZnQobmV3VGltZSkge1xyXG4gICAgICBpZiAobmV3VGltZSA9PT0gMCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdCA9IDYwO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gXCJlbmRcIjtcclxuICAgICAgICB0aGlzLnJlY29yZFNjb3JlKCk7IC8vIGNhbGwgdG8gcmVjb3JkIHNjb3JlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true\n");

/***/ }),

/***/ "./src/helpers/anagrams.js":
/*!*********************************!*\
  !*** ./src/helpers/anagrams.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst anagrams = {\n  5: [[\"abets\", \"baste\", \"betas\", \"beast\", \"beats\"], [\"acres\", \"cares\", \"races\", \"scare\"], [\"alert\", \"alter\", \"later\"], [\"angel\", \"angle\", \"glean\"], [\"baker\", \"brake\", \"break\"], [\"bared\", \"beard\", \"bread\", \"debar\"], [\"dater\", \"rated\", \"trade\", \"tread\"], [\"below\", \"bowel\", \"elbow\"], [\"caret\", \"cater\", \"crate\", \"trace\", \"react\"]],\n  6: [[\"arrest\", \"rarest\", \"raster\", \"raters\", \"starer\"], [\"carets\", \"caters\", \"caster\", \"crates\", \"reacts\", \"recast\", \"traces\"], [\"canter\", \"nectar\", \"recant\", \"trance\"], [\"danger\", \"gander\", \"garden\", \"ranged\"], [\"daters\", \"trades\", \"treads\", \"stared\"]],\n  7: [[\"allergy\", \"gallery\", \"largely\", \"regally\"], [\"aspired\", \"despair\", \"diapers\", \"praised\"], [\"claimed\", \"decimal\", \"declaim\", \"medical\"], [\"dearths\", \"hardest\", \"hatreds\", \"threads\", \"trashed\"], [\"detains\", \"instead\", \"sainted\", \"stained\"]],\n  8: [[\"parroted\", \"predator\", \"prorated\", \"teardrop\"], [\"repaints\", \"painters\", \"pantries\", \"pertains\"], [\"restrain\", \"retrains\", \"strainer\", \"terrains\", \"trainers\"], [\"construe\", \"counters\", \"recounts\", \"trounces\"]]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (anagrams);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9hbmFncmFtcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQXNEQTtBQW9DQTtBQWlDQTtBQTJCQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWdhbWVzLy4vc3JjL2hlbHBlcnMvYW5hZ3JhbXMuanM/MWQzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbmFncmFtcyA9IHtcclxuICA1OiBbXHJcbiAgICBbXHJcbiAgICAgIFwiYWJldHNcIixcclxuICAgICAgXCJiYXN0ZVwiLFxyXG4gICAgICBcImJldGFzXCIsXHJcbiAgICAgIFwiYmVhc3RcIixcclxuICAgICAgXCJiZWF0c1wiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImFjcmVzXCIsXHJcbiAgICAgIFwiY2FyZXNcIixcclxuICAgICAgXCJyYWNlc1wiLFxyXG4gICAgICBcInNjYXJlXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiYWxlcnRcIixcclxuICAgICAgXCJhbHRlclwiLFxyXG4gICAgICBcImxhdGVyXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiYW5nZWxcIixcclxuICAgICAgXCJhbmdsZVwiLFxyXG4gICAgICBcImdsZWFuXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiYmFrZXJcIixcclxuICAgICAgXCJicmFrZVwiLFxyXG4gICAgICBcImJyZWFrXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiYmFyZWRcIixcclxuICAgICAgXCJiZWFyZFwiLFxyXG4gICAgICBcImJyZWFkXCIsXHJcbiAgICAgIFwiZGViYXJcIlxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJkYXRlclwiLFxyXG4gICAgICBcInJhdGVkXCIsXHJcbiAgICAgIFwidHJhZGVcIixcclxuICAgICAgXCJ0cmVhZFwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImJlbG93XCIsXHJcbiAgICAgIFwiYm93ZWxcIixcclxuICAgICAgXCJlbGJvd1wiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImNhcmV0XCIsXHJcbiAgICAgIFwiY2F0ZXJcIixcclxuICAgICAgXCJjcmF0ZVwiLFxyXG4gICAgICBcInRyYWNlXCIsXHJcbiAgICAgIFwicmVhY3RcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgNjogW1xyXG4gICAgW1xyXG4gICAgICBcImFycmVzdFwiLFxyXG4gICAgICBcInJhcmVzdFwiLFxyXG4gICAgICBcInJhc3RlclwiLFxyXG4gICAgICBcInJhdGVyc1wiLFxyXG4gICAgICBcInN0YXJlclwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImNhcmV0c1wiLFxyXG4gICAgICBcImNhdGVyc1wiLFxyXG4gICAgICBcImNhc3RlclwiLFxyXG4gICAgICBcImNyYXRlc1wiLFxyXG4gICAgICBcInJlYWN0c1wiLFxyXG4gICAgICBcInJlY2FzdFwiLFxyXG4gICAgICBcInRyYWNlc1wiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImNhbnRlclwiLFxyXG4gICAgICBcIm5lY3RhclwiLFxyXG4gICAgICBcInJlY2FudFwiLFxyXG4gICAgICBcInRyYW5jZVwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImRhbmdlclwiLFxyXG4gICAgICBcImdhbmRlclwiLFxyXG4gICAgICBcImdhcmRlblwiLFxyXG4gICAgICBcInJhbmdlZFwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImRhdGVyc1wiLFxyXG4gICAgICBcInRyYWRlc1wiLFxyXG4gICAgICBcInRyZWFkc1wiLFxyXG4gICAgICBcInN0YXJlZFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICA3OiBbXHJcbiAgICBbXHJcbiAgICAgIFwiYWxsZXJneVwiLFxyXG4gICAgICBcImdhbGxlcnlcIixcclxuICAgICAgXCJsYXJnZWx5XCIsXHJcbiAgICAgIFwicmVnYWxseVwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImFzcGlyZWRcIixcclxuICAgICAgXCJkZXNwYWlyXCIsXHJcbiAgICAgIFwiZGlhcGVyc1wiLFxyXG4gICAgICBcInByYWlzZWRcIlxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJjbGFpbWVkXCIsXHJcbiAgICAgIFwiZGVjaW1hbFwiLFxyXG4gICAgICBcImRlY2xhaW1cIixcclxuICAgICAgXCJtZWRpY2FsXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiZGVhcnRoc1wiLFxyXG4gICAgICBcImhhcmRlc3RcIixcclxuICAgICAgXCJoYXRyZWRzXCIsXHJcbiAgICAgIFwidGhyZWFkc1wiLFxyXG4gICAgICBcInRyYXNoZWRcIlxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJkZXRhaW5zXCIsXHJcbiAgICAgIFwiaW5zdGVhZFwiLFxyXG4gICAgICBcInNhaW50ZWRcIixcclxuICAgICAgXCJzdGFpbmVkXCJcclxuICAgIF1cclxuICBdLFxyXG4gIDg6IFtcclxuICAgIFtcclxuICAgICAgXCJwYXJyb3RlZFwiLFxyXG4gICAgICBcInByZWRhdG9yXCIsXHJcbiAgICAgIFwicHJvcmF0ZWRcIixcclxuICAgICAgXCJ0ZWFyZHJvcFwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcInJlcGFpbnRzXCIsXHJcbiAgICAgIFwicGFpbnRlcnNcIixcclxuICAgICAgXCJwYW50cmllc1wiLFxyXG4gICAgICBcInBlcnRhaW5zXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwicmVzdHJhaW5cIixcclxuICAgICAgXCJyZXRyYWluc1wiLFxyXG4gICAgICBcInN0cmFpbmVyXCIsXHJcbiAgICAgIFwidGVycmFpbnNcIixcclxuICAgICAgXCJ0cmFpbmVyc1wiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcImNvbnN0cnVlXCIsXHJcbiAgICAgIFwiY291bnRlcnNcIixcclxuICAgICAgXCJyZWNvdW50c1wiLFxyXG4gICAgICBcInRyb3VuY2VzXCJcclxuICAgIF1cclxuICBdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbmFncmFtczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/anagrams.js\n");

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomInteger: function() { return /* binding */ getRandomInteger; }\n/* harmony export */ });\nfunction getRandomInteger(min, max) {\n  return Math.floor(Math.random() * (max - min) + min);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvaGVscGVycy9oZWxwZXJzLmpzP2EwM2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludGVnZXIobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/helpers.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.vue\");\n\n\n\n // import our router\n\n\n// set default Django cookies and headers\naxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaults.xsrfCookieName = 'csrftoken';\naxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].defaults.xsrfHeaderName = \"X-CSRFTOKEN\";\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"]); // create our app instance\n\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // tell our app to use our router\n\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"], axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"]); // tell our app to use axios\n\napp.mount(\"#app\"); // mount our app on the div#app element in our template//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWdhbWVzLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgVnVlQXhpb3MgZnJvbSAndnVlLWF4aW9zJztcclxuXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInOyAvLyBpbXBvcnQgb3VyIHJvdXRlclxyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5cclxuLy8gc2V0IGRlZmF1bHQgRGphbmdvIGNvb2tpZXMgYW5kIGhlYWRlcnNcclxuYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJztcclxuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKTsgLy8gY3JlYXRlIG91ciBhcHAgaW5zdGFuY2VcclxuXHJcbmFwcC51c2Uocm91dGVyKTsgLy8gdGVsbCBvdXIgYXBwIHRvIHVzZSBvdXIgcm91dGVyXHJcblxyXG5hcHAudXNlKFZ1ZUF4aW9zLCBheGlvcyk7IC8vIHRlbGwgb3VyIGFwcCB0byB1c2UgYXhpb3NcclxuXHJcbmFwcC5tb3VudChcIiNhcHBcIik7IC8vIG1vdW50IG91ciBhcHAgb24gdGhlIGRpdiNhcHAgZWxlbWVudCBpbiBvdXIgdGVtcGxhdGUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _apps_AnagramHunt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps/AnagramHunt */ \"./src/apps/AnagramHunt.vue\");\n/* harmony import */ var _apps_MathFacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/MathFacts */ \"./src/apps/MathFacts.vue\");\n\n\n\nconst routes = [{\n  path: '/anagram-hunt',\n  component: _apps_AnagramHunt__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/math-facts',\n  component: _apps_MathFacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHistory)(),\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvcm91dGVyLmpzPzRjODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV2ViSGlzdG9yeSwgY3JlYXRlUm91dGVyIH0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBBbmFncmFtSHVudCBmcm9tIFwiLi9hcHBzL0FuYWdyYW1IdW50XCI7XHJcbmltcG9ydCBNYXRoRmFjdHMgZnJvbSBcIi4vYXBwcy9NYXRoRmFjdHNcIjtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnL2FuYWdyYW0taHVudCcsXHJcbiAgICBjb21wb25lbnQ6IEFuYWdyYW1IdW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL21hdGgtZmFjdHMnLFxyXG4gICAgY29tcG9uZW50OiBNYXRoRmFjdHNcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcclxuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksXHJcbiAgcm91dGVzOiByb3V0ZXMsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\ndiv[data-v-5ee80f7a], label[data-v-5ee80f7a] {\\r\\n    padding: 0.2rem;\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZTgwZjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT84ODFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvbm9Tb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXZbZGF0YS12LTVlZTgwZjdhXSwgbGFiZWxbZGF0YS12LTVlZTgwZjdhXSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\ndiv[data-v-456370fb], label[data-v-456370fb] {\\r\\n    padding: 0.2rem;\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHBzL01hdGhGYWN0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NTYzNzBmYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlP2U0YTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9ub1NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdltkYXRhLXYtNDU2MzcwZmJdLCBsYWJlbFtkYXRhLXYtNDU2MzcwZmJdIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css\n");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\nconst script = {}\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(script, [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (true) {\n  __exports__.__hmrId = \"7ba5bd90\"\n  const api = __VUE_HMR_RUNTIME__\n  module.hot.accept()\n  if (!api.createRecord('7ba5bd90', __exports__)) {\n    api.reload('7ba5bd90', __exports__)\n  }\n  \n  module.hot.accept(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n(() => {\n    api.rerender('7ba5bd90', _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render)\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnZ1ZSIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWdhbWVzLy4vc3JjL0FwcC52dWU/N2NjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwXCJcbmNvbnN0IHNjcmlwdCA9IHt9XG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3YmE1YmQ5MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzdiYTViZDkwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnN2JhNWJkOTAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JhNWJkOTBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignN2JhNWJkOTAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.vue\n");

/***/ }),

/***/ "./src/apps/AnagramHunt.vue":
/*!**********************************!*\
  !*** ./src/apps/AnagramHunt.vue ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnagramHunt_vue_vue_type_template_id_5ee80f7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true */ \"./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true\");\n/* harmony import */ var _AnagramHunt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnagramHunt.vue?vue&type=script&lang=js */ \"./src/apps/AnagramHunt.vue?vue&type=script&lang=js\");\n/* harmony import */ var _AnagramHunt_vue_vue_type_style_index_0_id_5ee80f7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css */ \"./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_AnagramHunt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AnagramHunt_vue_vue_type_template_id_5ee80f7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-5ee80f7a\"],['__file',\"src/apps/AnagramHunt.vue\"]])\n/* hot reload */\nif (true) {\n  __exports__.__hmrId = \"5ee80f7a\"\n  const api = __VUE_HMR_RUNTIME__\n  module.hot.accept()\n  if (!api.createRecord('5ee80f7a', __exports__)) {\n    api.reload('5ee80f7a', __exports__)\n  }\n  \n  module.hot.accept(/*! ./AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true */ \"./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AnagramHunt_vue_vue_type_template_id_5ee80f7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true */ \"./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true\");\n(() => {\n    api.rerender('5ee80f7a', _AnagramHunt_vue_vue_type_template_id_5ee80f7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9BbmFncmFtSHVudC52dWUiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWdhbWVzLy4vc3JjL2FwcHMvQW5hZ3JhbUh1bnQudnVlPzgyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQW5hZ3JhbUh1bnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlZTgwZjdhJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQW5hZ3JhbUh1bnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQW5hZ3JhbUh1bnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVlODBmN2Emc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTVlZTgwZjdhXCJdLFsnX19maWxlJyxcInNyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1ZWU4MGY3YVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzVlZTgwZjdhJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNWVlODBmN2EnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWU4MGY3YSZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1ZWU4MGY3YScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/AnagramHunt.vue\n");

/***/ }),

/***/ "./src/apps/MathFacts.vue":
/*!********************************!*\
  !*** ./src/apps/MathFacts.vue ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MathFacts_vue_vue_type_template_id_456370fb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathFacts.vue?vue&type=template&id=456370fb&scoped=true */ \"./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true\");\n/* harmony import */ var _MathFacts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MathFacts.vue?vue&type=script&lang=js */ \"./src/apps/MathFacts.vue?vue&type=script&lang=js\");\n/* harmony import */ var _MathFacts_vue_vue_type_style_index_0_id_456370fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css */ \"./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_MathFacts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_MathFacts_vue_vue_type_template_id_456370fb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-456370fb\"],['__file',\"src/apps/MathFacts.vue\"]])\n/* hot reload */\nif (true) {\n  __exports__.__hmrId = \"456370fb\"\n  const api = __VUE_HMR_RUNTIME__\n  module.hot.accept()\n  if (!api.createRecord('456370fb', __exports__)) {\n    api.reload('456370fb', __exports__)\n  }\n  \n  module.hot.accept(/*! ./MathFacts.vue?vue&type=template&id=456370fb&scoped=true */ \"./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MathFacts_vue_vue_type_template_id_456370fb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathFacts.vue?vue&type=template&id=456370fb&scoped=true */ \"./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true\");\n(() => {\n    api.rerender('456370fb', _MathFacts_vue_vue_type_template_id_456370fb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHBzL01hdGhGYWN0cy52dWU/YTU5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1NjM3MGZiJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWF0aEZhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDU2MzcwZmImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTQ1NjM3MGZiXCJdLFsnX19maWxlJyxcInNyYy9hcHBzL01hdGhGYWN0cy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDU2MzcwZmJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0NTYzNzBmYicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzQ1NjM3MGZiJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1NjM3MGZiJnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzQ1NjM3MGZiJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/MathFacts.vue\n");

/***/ }),

/***/ "./src/apps/AnagramHunt.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/apps/AnagramHunt.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AnagramHunt.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=script&lang=js\");\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9BbmFncmFtSHVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT8zNThiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BbmFncmFtSHVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDAudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQW5hZ3JhbUh1bnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/AnagramHunt.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./src/apps/MathFacts.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/apps/MathFacts.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MathFacts.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=script&lang=js\");\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlP2IyMzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01hdGhGYWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDAudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTWF0aEZhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/MathFacts.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90");


/***/ }),

/***/ "./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true":
/*!****************************************************************************!*\
  !*** ./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_template_id_5ee80f7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_template_id_5ee80f7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=template&id=5ee80f7a&scoped=true");


/***/ }),

/***/ "./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_template_id_456370fb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_template_id_456370fb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MathFacts.vue?vue&type=template&id=456370fb&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=template&id=456370fb&scoped=true");


/***/ }),

/***/ "./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css":
/*!******************************************************************************************!*\
  !*** ./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_style_index_0_id_5ee80f7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_style_index_0_id_5ee80f7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_style_index_0_id_5ee80f7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_style_index_0_id_5ee80f7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AnagramHunt_vue_vue_type_style_index_0_id_5ee80f7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css":
/*!****************************************************************************************!*\
  !*** ./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_style_index_0_id_456370fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_style_index_0_id_456370fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_style_index_0_id_456370fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_style_index_0_id_456370fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MathFacts_vue_vue_type_style_index_0_id_456370fb_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"560299b1\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(true) {\n // When the styles change, update the <style> tags\n if(!content.locals) {\n   module.hot.accept(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css\", function() {\n     var newContent = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css\");\n     if(newContent.__esModule) newContent = newContent.default;\n     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n     update(newContent);\n   });\n }\n // When the module is disposed, remove the <style> tags\n module.hot.dispose(function() { update(); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMF0hLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZTgwZjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1nYW1lcy8uL3NyYy9hcHBzL0FuYWdyYW1IdW50LnZ1ZT84ZWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZTgwZjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU2MDI5OWIxXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9BbmFncmFtSHVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWU4MGY3YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0FuYWdyYW1IdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlZTgwZjdhJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/AnagramHunt.vue?vue&type=style&index=0&id=5ee80f7a&scoped=true&lang=css\n");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"656543a1\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(true) {\n // When the styles change, update the <style> tags\n if(!content.locals) {\n   module.hot.accept(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css\", function() {\n     var newContent = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css\");\n     if(newContent.__esModule) newContent = newContent.default;\n     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n     update(newContent);\n   });\n }\n // When the module is disposed, remove the <style> tags\n module.hot.dispose(function() { update(); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMF0hLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9hcHBzL01hdGhGYWN0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NTYzNzBmYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvYXBwcy9NYXRoRmFjdHMudnVlPzZiYWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTWF0aEZhY3RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1NjM3MGZiJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY1NjU0M2ExXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDU2MzcwZmImc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9NYXRoRmFjdHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDU2MzcwZmImc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/apps/MathFacts.vue?vue&type=style&index=0&id=456370fb&scoped=true&lang=css\n");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "app." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "6cf688ad8dbfbcac"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vue-games:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "http://localhost:8080/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_games"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkvue_games"] = (typeof self !== 'undefined' ? self : this)["webpackChunkvue_games"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./node_modules/whatwg-fetch/fetch.js"); })
/******/ 	__webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws&hostname=192.168.1.149&port=8080&pathname=%2Fws&logging=none&progress=true&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true"); })
/******/ 	__webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./node_modules/webpack/hot/dev-server.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;