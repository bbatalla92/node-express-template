webpackHotUpdate("static/development/pages/index.js",{

/***/ "./translate.js":
/*!**********************!*\
  !*** ./translate.js ***!
  \**********************/
/*! exports provided: setElementKey, translateContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementKey", function() { return setElementKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateContent", function() { return translateContent; });
/* harmony import */ var _translatedContent_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translatedContent.json */ "./translatedContent.json");
var _translatedContent_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translatedContent.json */ "./translatedContent.json", 1);

var attribute = null;
var setElementKey = function setElementKey(key) {
  attribute = key;
};
var translateContent = function translateContent(code) {
  var elements = document.querySelectorAll("[".concat(attribute, "]"));

  if (!elements.length) {
    return;
  }

  elements.forEach(function (element) {
    console.log(element);
    var contentKey = element.getAttribute(attribute);

    if (["input", "select", "textarea"].includes(element.tagName.toLowerCase())) {} else if (["button"].includes(element.tagName.toLowerCase())) {} else {}
  });
};

/***/ })

})
//# sourceMappingURL=index.js.5bf39e84d585508316d8.hot-update.js.map