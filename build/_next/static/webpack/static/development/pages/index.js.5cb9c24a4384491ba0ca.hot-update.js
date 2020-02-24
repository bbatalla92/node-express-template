webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Steps/StepsComponent.js":
/*!********************************************!*\
  !*** ./components/Steps/StepsComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StepsComponent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepsComponent.scss */ "./components/Steps/StepsComponent.scss");
/* harmony import */ var _StepsComponent_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_StepsComponent_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/components/Steps/StepsComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StepsComponent = function StepsComponent(_ref) {
  var _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? [] : _ref$steps;
  return __jsx("div", {
    id: "StepsComponent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "text-align-center font-weight-light color-primary",
    "ling-translate": "HowItWorksSectionTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "How it Works"), __jsx("div", {
    className: "stepsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, steps.map(function (step, id) {
    return __jsx("div", {
      className: "layout",
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "stepContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      className: "stepIcon",
      src: step.icon,
      alt: step.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("h2", {
      "ling-translate": step.translateKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, step.title), __jsx("p", {
      className: "stepDescription",
      "ling-translate": step.translateKey + "Text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, step.description))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StepsComponent);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Toolbar/Toolbar */ "./components/Toolbar/Toolbar.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/index.scss */ "./pages/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/About/About */ "./components/About/About.js");
/* harmony import */ var _components_EnterEmail_EnterEmail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/EnterEmail/EnterEmail */ "./components/EnterEmail/EnterEmail.js");
/* harmony import */ var _components_Team_Team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Team/Team */ "./components/Team/Team.js");
/* harmony import */ var _components_Steps_StepsComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Steps/StepsComponent */ "./components/Steps/StepsComponent.js");
/* harmony import */ var _assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/phone-24px.svg */ "./assets/icons/phone-24px.svg");
/* harmony import */ var _assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/submit-24px.svg */ "./assets/icons/submit-24px.svg");
/* harmony import */ var _assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/people-24px.svg */ "./assets/icons/people-24px.svg");
/* harmony import */ var _assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_people_24px_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/airplane-24px.svg */ "./assets/icons/airplane-24px.svg");
/* harmony import */ var _assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_icons_laptop_24px_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/laptop-24px.svg */ "./assets/icons/laptop-24px.svg");
/* harmony import */ var _assets_icons_laptop_24px_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_laptop_24px_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/search.svg */ "./assets/icons/search.svg");
/* harmony import */ var _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/ContactUs/ContactUs */ "./components/ContactUs/ContactUs.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_Sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/Sidenav/Sidenav */ "./components/Sidenav/Sidenav.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");







var _jsxFileName = "/Users/brennanbatalla/Projects/WebApps/linguart/linguartech-company-website/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "steps", [{
      icon: _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
      translateKey: "StepsSearch",
      title: "Find Your Programs",
      description: "We offer many different programs in many different countries. Using our booking platform, you can easily search through them all and find the program that fits your unique needs."
    }, {
      icon: _assets_icons_submit_24px_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      translateKey: "StepsSubmit",
      title: "Submit Applications",
      description: "Using our booking platform, you can easily submit applications for as many programs as you like.  When you submit them, you can rest easily knowing all your personal data is well protected and will only be shared with whom you choose!"
    },
    /*{
    icon: PEOPLE_ICON,
    translateKey: "",
    title: "Interview Preparation",
    description: "After being accepted by the university, you will have one last step before you can attend the program.  In order to receive the Visa for the host country, you must interview. We will help prepare you for this so you do not have to worry!"
    },*/
    {
      icon: _assets_icons_phone_24px_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
      translateKey: "StepsTalk",
      title: "Talk with us",
      description: "Once your applications have been submitted, we will contact you within 48 hours. Our professional team will assist you with the application process, visa application, and all other stages of your study abroad trip."
    }, {
      icon: _assets_icons_airplane_24px_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
      translateKey: "StepsPack",
      title: "Pack your bags",
      description: "The last step is to go abroad! Once you receive the program offer and visa, it’s time to pack! We will be there to help you with every step of the way and to answer any question you may have!"
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "emailOnchange", function (event) {
      _this.setState({
        email: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollTo", function (goTo) {
      var go = goTo;

      if (isNaN(goTo)) {
        var el = document.getElementById(goTo);
        go = el.offsetTop - 100;
      }

      react_scroll__WEBPACK_IMPORTED_MODULE_23__["animateScroll"].scrollTo(go);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_23__["Events"].scrollEvent.register('begin', function (to, element) {});
      react_scroll__WEBPACK_IMPORTED_MODULE_23__["Events"].scrollEvent.register('end', function (to, element) {});
      react_scroll__WEBPACK_IMPORTED_MODULE_23__["scrollSpy"].update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_23__["Events"].scrollEvent.remove('begin');
      react_scroll__WEBPACK_IMPORTED_MODULE_23__["Events"].scrollEvent.remove('end');
    }
  }, {
    key: "render",
    value: function render() {
      var email = this.state.email;
      return __jsx("div", {
        id: "Index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(_components_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        scrollTo: this.scrollTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx(_components_Sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_24__["default"], {
        scrollTo: this.scrollTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        scrollTo: this.scrollTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx(_components_EnterEmail_EnterEmail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: this.emailOnchange,
        value: email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx(_components_About_About__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), __jsx(_components_Team_Team__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx(_components_Steps_StepsComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
        steps: this.steps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(_components_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_22__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_25__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./translatedContent.json":
/*!********************************!*\
  !*** ./translatedContent.json ***!
  \********************************/
/*! exports provided: HeaderTitle, HeaderSubtitle, ContactUsButton, HomeSectionTitle, AboutSectionTitle, OurTeamSectionTitle, HowItWorksSectionTitle, ContactUsSectionTitle, EmailSubscribe, EmailSubscribeButton, EmailSubscribeInput, AboutUsContentText, AboutUsBookingPlatform, AboutUsBookingPlatformText, AboutUsOnlineEducation, AboutUsOnlineEducationText, AboutUsGlobalNetwork, AboutUsGlobalNetworkText, StepsSearch, StepsSearchText, StepsSubmit, StepsSubmitText, StepsTalk, StepsTalkText, StepsPack, StepsPackText, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"HeaderTitle\":{\"zh\":\"学习与探索\",\"en\":\"Learn and Explore\"},\"HeaderSubtitle\":{\"zh\":\"我們相信，要學習，您需要在自己所了解的事物之外進行冒險，並因其許多隱藏的寶藏而體驗世界。在Linguartech，學習和探索可以同時進行！加入Linguartech，現在就開始這個旅程!\",\"en\":\"We believe in order to learn you need to adventure outside what you know and experience the world for its many hidden treasures. At Linguartech, learning and exploring can happen at the same time! Join the Linguartech, let’s start this journey now! \"},\"ContactUsButton\":{\"en\":\"Contact Us\",\"zh\":\"聯繫我們\"},\"HomeSectionTitle\":{\"en\":\"Home\",\"zh\":\"家\"},\"AboutSectionTitle\":{\"en\":\"About Us\",\"zh\":\"關於\"},\"OurTeamSectionTitle\":{\"en\":\"Our Team\",\"zh\":\"我們的隊伍\"},\"HowItWorksSectionTitle\":{\"en\":\"How It Works\",\"zh\":\"怎麼運行的\"},\"ContactUsSectionTitle\":{\"en\":\"Contact Us\",\"zh\":\"聯繫我們\"},\"EmailSubscribe\":{\"en\":\"Subscribe to get alerts on international news, visa updates, discounts and more!\",\"zh\":\"訂閱以獲得有關國際新聞，簽證更新，折扣等的警報!\"},\"EmailSubscribeButton\":{\"en\":\"Subscribe\",\"zh\":\"訂閱\"},\"EmailSubscribeInput\":{\"en\":\"Enter your Email\",\"zh\":\"輸入你的電子郵箱\"},\"AboutUsContentText\":{\"en\":\"Linguartech is an educational booking platform and an online learning center. We connect students to worldwide short-term academic programs by helping them go to the school in person or through an online offering. With Linguartech, you can find Language Learning, Music & Art, and Science & Technology programs. No matter who you are or where you live, you have the same opportunity to reach the best programs in the world.\",\"zh\":\"Linguartech 是一個教育預訂平台和一個在線學習中心。通過幫助學生親自上學或通過在線服務，我們將學生與全球短期學術計劃聯繫起來。使用Linguartech，您可以找到語言學習，音樂與藝術以及科學與技術計劃。無論您是誰，無論身在何處，您都有相同的機會參加世界上最好的課程。\"},\"AboutUsBookingPlatform\":{\"en\":\"Booking Platform\",\"zh\":\"預訂平台\"},\"AboutUsBookingPlatformText\":{\"en\":\"Linguartech is a booking platform!  You can find Language, Music & Art, and Science & Tech programs located in over 10 different countries.  With us, we can guarantee you the best prices out there.\",\"zh\":\"Linguartech是一個預訂平台！您可以在10多個國家/地區找到語言，音樂與藝術和科學與技術課程。與我們合作，我們可以保證為您提供最優惠的價格。\"},\"AboutUsOnlineEducation\":{\"en\":\"Online Education\",\"zh\":\"在線教育\"},\"AboutUsOnlineEducationText\":{\"en\":\"Linguartech’s online learning center focuses on foreign language learning; we work with language experts to provide comprehensive courses designed for the best online experience.\",\"zh\":\"Linguartech的在線學習中心專注於外語學習；我們與語言專家合作，提供旨在獲得最佳在線體驗的綜合課程。\"},\"AboutUsGlobalNetwork\":{\"en\":\"Global Network\",\"zh\":\"全球網絡\"},\"AboutUsGlobalNetworkText\":{\"en\":\"Linguartech has partnered with Colleges and Universities all over the world who are excited to accept new applicants.  Our partners are located in over 10 different countries with programs that fit the needs of any applicant!\",\"zh\":\"Linguartech與世界各地的大學和大學建立了合作夥伴關係，他們很高興接受新的申請者。我們的合作夥伴遍布10多個不同的國家，其課程可滿足任何申請人的需求!\"},\"StepsSearch\":{\"en\":\"Find Your Programs\",\"zh\":\"查找程序\"},\"StepsSearchText\":{\"en\":\"We offer many different programs in many different countries. Using our booking platform, you can easily search through them all and find the program that fits your unique needs.\",\"zh\":\"我們在許多不同的國家提供許多不同的程序。使用我們的預訂平台，您可以輕鬆搜索所有內容，找到適合您獨特需求的程序。\"},\"StepsSubmit\":{\"en\":\"Submit Applications\",\"zh\":\"提交申請\"},\"StepsSubmitText\":{\"en\":\"Using our booking platform, you can easily submit applications for as many programs as you like.  When you submit them, you can rest easily knowing all your personal data is well protected and will only be shared with whom you choose!\",\"zh\":\"使用我們的預訂平台，您可以輕鬆提交任意數量的程序的申請。當您提交它們時，您可以輕鬆知道所有個人數據都受到良好保護，並且只會與您選擇的人共享！\"},\"StepsTalk\":{\"en\":\"Talk with us\",\"zh\":\"與我們交談\"},\"StepsTalkText\":{\"en\":\"Once your applications have been submitted, we will contact you within 48 hours. Our professional team will assist you with the application process, visa application, and all other stages of your study abroad trip.\",\"zh\":\"提交您的申請後，我們將在48小時內與您聯繫。我們的專業團隊將協助您完成申請程序，簽證申請以及您出國學習的所有其他階段。\"},\"StepsPack\":{\"en\":\"Pack Your Bags\",\"zh\":\"收拾行囊\"},\"StepsPackText\":{\"en\":\"The last step is to go abroad! Once you receive the program offer and visa, it’s time to pack! We will be there to help you with every step of the way and to answer any question you may have!\",\"zh\":\"\\n最後一步是出國！收到計劃優惠和簽證後，就可以打包了！我們將在那裡幫助您完成每一步，並回答您可能遇到的任何問題！\"}}");

/***/ })

})
//# sourceMappingURL=index.js.5cb9c24a4384491ba0ca.hot-update.js.map