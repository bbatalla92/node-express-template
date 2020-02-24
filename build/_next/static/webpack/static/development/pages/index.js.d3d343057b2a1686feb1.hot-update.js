webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NotificationPopup/NotificationPopup.js":
/*!***********************************************************!*\
  !*** ./components/NotificationPopup/NotificationPopup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Notification/Notification */ "./components/NotificationPopup/Notification/Notification.js");
/* harmony import */ var _NotificationPopup_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NotificationPopup.scss */ "./components/NotificationPopup/NotificationPopup.scss");
/* harmony import */ var _NotificationPopup_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NotificationPopup_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var event_subscription__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! event-subscription */ "./node_modules/event-subscription/index.js");
/* harmony import */ var event_subscription__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(event_subscription__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./constants.js");








var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/NotificationPopup/NotificationPopup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var NotificationPopup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(NotificationPopup, _Component);

  function NotificationPopup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotificationPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NotificationPopup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      notifications: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "noticeSubscription", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addNotification", function (notification) {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NotificationPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.noticeSubscription = Object(event_subscription__WEBPACK_IMPORTED_MODULE_11__["subscribe"])(_constants__WEBPACK_IMPORTED_MODULE_12__["ADD_NOTIFCATION"], this.addNotification);
    }
  }, {
    key: "render",
    value: function render() {
      var notifications = this.state.notifications;
      return __jsx("div", {
        id: "NotificationPopup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, notifications.map(function () {}), __jsx(_Notification_Notification__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Form Submitted!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }]);

  return NotificationPopup;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

function mapStateToProps(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationPopup);

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: APP_NAME, SUBSCRIBE_NAV_DRAWER, SUBSCRIBE_ACTIVE_SECTION, ADD_NOTIFCATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIBE_NAV_DRAWER", function() { return SUBSCRIBE_NAV_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIBE_ACTIVE_SECTION", function() { return SUBSCRIBE_ACTIVE_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NOTIFCATION", function() { return ADD_NOTIFCATION; });
var APP_NAME = "linguartech";
var SUBSCRIBE_NAV_DRAWER = "SUBSCRIBE_NAV_DRAWER";
var SUBSCRIBE_ACTIVE_SECTION = "SUBSCRIBE_ACTIVE_SECTION";
var ADD_NOTIFCATION = "ADD_NOTIFCATION";

/***/ })

})
//# sourceMappingURL=index.js.d3d343057b2a1686feb1.hot-update.js.map