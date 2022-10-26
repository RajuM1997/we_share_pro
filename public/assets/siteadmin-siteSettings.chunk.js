(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["siteadmin-siteSettings"],{

/***/ "+eeS":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("cbdH");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "+tpX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRPe");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MKj");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vPCN");
/* harmony import */ var _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Uploader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Thh8");
/* harmony import */ var _HomeUploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Mn8N");
/* harmony import */ var _EmailLogoUploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("L6gv");
/* harmony import */ var _FavIconUploader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("yVTo");
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("/2k6");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("JidP");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Q7QM");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/SiteSettingsForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Redux form

 // React redux

 // Style





 // Internal component









var SiteSettingsForm = /*#__PURE__*/function (_Component) {
  _inherits(SiteSettingsForm, _Component);

  var _super = _createSuper(SiteSettingsForm);

  function SiteSettingsForm(props) {
    var _this;

    _classCallCheck(this, SiteSettingsForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "renderFormControl", function (_ref) {
      var input = _ref.input,
          label = _ref.label,
          type = _ref.type,
          _ref$meta = _ref.meta,
          touched = _ref$meta.touched,
          error = _ref$meta.error,
          className = _ref.className,
          maxlength = _ref.maxlength;
      var formatMessage = _this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.formGroup,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        type: type,
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.commonControlInput,
        maxlength: maxlength,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 32
        }
      }, formatMessage(error))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFormControlTextArea", function (_ref2) {
      var input = _ref2.input,
          label = _ref2.label,
          _ref2$meta = _ref2.meta,
          touched = _ref2$meta.touched,
          error = _ref2$meta.error,
          children = _ref2.children,
          className = _ref2.className;
      var formatMessage = _this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.formGroup,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }), children)), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFormControlSelect", function (_ref3) {
      var input = _ref3.input,
          label = _ref3.label,
          _ref3$meta = _ref3.meta,
          touched = _ref3$meta.touched,
          error = _ref3$meta.error,
          children = _ref3.children,
          className = _ref3.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.formGroup,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({
        componentClass: "select"
      }, input, {
        className: className,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }), children)));
    });

    _this.state = {
      homePageType: null
    };
    return _this;
  }

  _createClass(SiteSettingsForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var homePageType = this.props.homePageType;

      if (homePageType) {
        this.setState({
          hostTypeState: homePageType
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var homePageType = this.props.homePageType;

      if (homePageType) {
        this.setState({
          hostTypeState: homePageType
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var homePageType = nextProps.homePageType;

      if (homePageType) {
        this.setState({
          hostTypeState: homePageType
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          handleSubmit = _this$props.handleSubmit,
          submitting = _this$props.submitting,
          dispatch = _this$props.dispatch,
          initialValues = _this$props.initialValues,
          appAvailableStatus = _this$props.appAvailableStatus;
      var hostTypeState = this.state.hostTypeState;
      var formatMessage = this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.pagecontentWrapper, 'pagecontentAR'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.headerTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].siteSettings, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 45
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_14__["default"]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 27
        }
      }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.formGroup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].logoLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 58
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Uploader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.formGroup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].HomelogoLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 58
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeUploader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 23
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "logoHeight",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].logoHeightLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "logoWidth",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].logoWidthLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "homeLogoHeight",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homelogoHeight),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "homeLogoWidth",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homelogoWidth),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].EmaillogoLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 56
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmailLogoUploader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].favIconlogoLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 56
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FavIconUploader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "siteName",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].siteName),
        maxlength: 15,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "siteTitle",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].siteTitle),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "metaKeyword",
        type: "text",
        component: this.renderFormControlTextArea,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].metaKeywordLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "metaDescription",
        type: "text",
        component: this.renderFormControlTextArea,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].metaKeywordLabelDesc),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "facebookLink",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].facebookURL),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "twitterLink",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].twitterURL),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "instagramLink",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].instagramURL),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "homePageType",
        type: "text",
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.commonControlSelect, 'commonAdminSelect'),
        component: this.renderFormControlSelect,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homePageLayout),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homePageLayoutDesc)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homePageLayoutDesc1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homePageLayoutDesc2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].homePageLayoutDesc3)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "phoneNumberStatus",
        type: "text",
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.commonControlSelect, 'commonAdminSelect'),
        component: this.renderFormControlSelect,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].phoneNumberFormat),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].twilioSMS)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].normalPhoneNumber)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 4,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "appAvailableStatus",
        type: "text",
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.commonControlSelect, 'commonAdminSelect'),
        component: this.renderFormControlSelect,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].appAvailable),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].enableLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 0,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].disableLabel)))), appAvailableStatus == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 50
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "playStoreUrl",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].playStoreUrl),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 27
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "appStoreUrl",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].appStoreUrl),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 27
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "email",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].emailIdLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "phoneNumber",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].mobileNumberLabel),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "address",
        type: "text",
        component: this.renderFormControlTextArea,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].address),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        Col: true,
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "stripePublishableKey",
        type: "text",
        component: this.renderFormControl,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].stripePublishableKey),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "listingApproval",
        type: "text",
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.commonControlSelect, 'commonAdminSelect'),
        component: this.renderFormControlSelect,
        label: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].listingApproval),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 23
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].optional)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 23
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].require)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a.formGroup,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.textAlignRight, 'textAlignLeftRtl'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnLarge),
        type: "submit",
        disabled: submitting,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_16__["default"].save, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }
      })))))))))));
    }
  }]);

  return SiteSettingsForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(SiteSettingsForm, "propTypes", {
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

SiteSettingsForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'SiteSettingsForm',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_15__["default"]
})(SiteSettingsForm);
var selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["formValueSelector"])('SiteSettingsForm');

var mapState = function mapState(state) {
  return {
    homePageType: selector(state, 'homePageType'),
    appAvailableStatus: selector(state, 'appAvailableStatus')
  };
};

var mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_SiteSettingsForm_css__WEBPACK_IMPORTED_MODULE_8___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(SiteSettingsForm))));

/***/ }),

/***/ "/2k6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("y0DV");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_siteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zkjT");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Fetch Request
 // Toaster




function submit(_x, _x2) {
  return _submit.apply(this, arguments);
}

function _submit() {
  _submit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values, dispatch) {
    var query, logoHeight, logoWidth, homeLogoHeight, homeLogoWidth, variables, resp, _yield$resp$json, data;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            values.appAvailableStatus = Number(values.appAvailableStatus);
            query = "\n  query (\n    $siteName: String,\n    $siteTitle: String,\n    $metaDescription: String,\n    $metaKeyword: String,\n    $logo: String,\n    $facebookLink: String,\n    $twitterLink: String,\n    $instagramLink: String\n    $logoHeight: Int,\n    $logoWidth: Int,\n    $homePageType: Int,\n    $videoLink: String,\n    $phoneNumberStatus: Int,\n    $homeLogo: String,\n    $emailLogo: String,\n    $homeLogoHeight: Int,\n    $homeLogoWidth: Int,\n    $appAvailableStatus: Boolean,\n    $playStoreUrl: String,\n    $appStoreUrl: String,\n    $email: String,\n    $phoneNumber: String,\n    $address: String,\n    $stripePublishableKey: String,\n    $listingApproval: String,\n  ) {\n    updateSiteSettings (\n      siteName: $siteName,\n      siteTitle: $siteTitle,\n      metaDescription: $metaDescription,\n      metaKeyword: $metaKeyword,\n      logo: $logo,\n      facebookLink: $facebookLink,\n      twitterLink: $twitterLink,\n      instagramLink: $instagramLink,\n      logoHeight: $logoHeight,\n      logoWidth: $logoWidth,\n      homePageType: $homePageType,\n      videoLink: $videoLink,\n      phoneNumberStatus: $phoneNumberStatus,\n      homeLogo: $homeLogo,\n      emailLogo: $emailLogo,\n      homeLogoHeight: $homeLogoHeight,\n      homeLogoWidth: $homeLogoWidth,\n      appAvailableStatus: $appAvailableStatus,\n      playStoreUrl: $playStoreUrl,\n      appStoreUrl: $appStoreUrl,\n      email: $email,\n      phoneNumber: $phoneNumber,\n      address: $address,\n      stripePublishableKey: $stripePublishableKey,\n      listingApproval: $listingApproval\n    ) {\n        status\n    }\n  }\n  ";
            logoHeight = values.logoHeight != '' ? values.logoHeight : 0;
            logoWidth = values.logoWidth != '' ? values.logoWidth : 0;
            homeLogoHeight = values.homeLogoHeight != '' ? values.homeLogoHeight : 0;
            homeLogoWidth = values.homeLogoWidth != '' ? values.homeLogoWidth : 0;
            variables = Object.assign({}, values, {
              logoHeight: logoHeight,
              logoWidth: logoWidth,
              homeLogoHeight: homeLogoHeight,
              homeLogoWidth: homeLogoWidth
            });
            _context.next = 9;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/graphql', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              }),
              credentials: 'include'
            });

          case 9:
            resp = _context.sent;
            _context.next = 12;
            return resp.json();

          case 12:
            _yield$resp$json = _context.sent;
            data = _yield$resp$json.data;

            if (data.updateSiteSettings.status === "success") {
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Update Settings", "Changes are updated!");
              dispatch(Object(_actions_siteSettings__WEBPACK_IMPORTED_MODULE_2__["setSiteSettings"])());
            } else {
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update Settings", "Updating Site Settings failed");
            }

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _submit.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "033G":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "1DJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("qdFD");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wa3/");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Q7QM");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/HomeUploader/DropZone.js";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Translation





var Dropzone = /*#__PURE__*/function (_Component) {
  _inherits(Dropzone, _Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props);
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.addedfile = _this.addedfile.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(Dropzone, [{
    key: "success",
    value: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fromServer) {
        var _this$props, doUploadHomeLogo, data, change, fileName, oldPicture, filePath;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, doUploadHomeLogo = _this$props.doUploadHomeLogo, data = _this$props.data, change = _this$props.change;
                fileName = fromServer.file.filename;
                oldPicture = data != null ? data.value : null;
                filePath = fromServer.file.path;
                doUploadHomeLogo(fileName, filePath, oldPicture);
                _context.next = 7;
                return change('SiteSettingsForm', 'homeLogo', fileName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x, _x2) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }, {
    key: "addedfile",
    value: function addedfile(file, fromServer) {
      var _this2 = this;

      var _this$props2 = this.props,
          startHomeLogoUploaderLoader = _this$props2.startHomeLogoUploaderLoader,
          stopHomeLogoUploaderLoader = _this$props2.stopHomeLogoUploaderLoader;
      startHomeLogoUploaderLoader();
      var fileFormates = ['image/svg+xml', 'application/sql', 'application/pdf', 'application/vnd.oasis.opendocument.presentation', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/epub+zip', 'application/zip', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.oasis.opendocument.spreadsheet', 'text/tab-separated-values', 'text/calendar', 'application/json'];

      if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_11__["maxUploadSize"]) {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
        this.dropzone.removeFile(file);
        stopHomeLogoUploaderLoader();
      }

      if (fileFormates.indexOf(file && file.type) > 0) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
        stopHomeLogoUploaderLoader();
      }

      if (file && file.accepted === false) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
        stopHomeLogoUploaderLoader();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var formatMessage = this.props.intl.formatMessage;
      var djsConfig = {
        dictDefaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_10__["default"].clickHeretoUploadLogo),
        addRemoveLinks: false,
        uploadMultiple: false,
        maxFilesize: 10,
        acceptedFiles: 'image/jpeg,image/png',
        dictMaxFilesExceeded: 'Remove the existing image and try upload again',
        previewsContainer: false
      };
      var componentConfig = {
        iconFiletypes: ['.jpg', '.png'],
        postUrl: '/uploadLogo'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this3.dropzone = dz;
        },
        success: this.success,
        addedfile: this.addedfile
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Dropzone, "propTypes", {
  doUploadHomeLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  doRemoveHomeLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(Dropzone, "defaultProps", {
  data: null
});

var mapState = function mapState(state) {
  return {};
};

var mapDispatch = {
  doUploadHomeLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["doUploadHomeLogo"],
  doRemoveHomeLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["doRemoveHomeLogo"],
  startHomeLogoUploaderLoader: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["startHomeLogoUploaderLoader"],
  change: redux_form__WEBPACK_IMPORTED_MODULE_6__["change"],
  stopHomeLogoUploaderLoader: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["stopHomeLogoUploaderLoader"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "1EOP":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("2eXL");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "2eXL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "2m3X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uxpw");
/* harmony import */ var _SiteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6X+7");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WdaF");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/siteSettings/index.js";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var title = 'Site Settings';
function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var store, isAdminAuthenticated, adminPrivileges;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store;
            // From Redux Store
            isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
            adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;

            if (isAdminAuthenticated) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              redirect: '/siteadmin/login'
            });

          case 5:
            if (Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_3__["restrictUrls"])('/siteadmin/settings/site', adminPrivileges)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              redirect: '/siteadmin'
            });

          case 7:
            return _context.abrupt("return", {
              title: title,
              component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 16
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteSettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
                title: title,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 29
                }
              }))
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/***/ }),

/***/ "5K6C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("J8wK");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wa3/");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Q7QM");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/EmailLogoUploader/DropZone.js";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Translation





var Dropzone = /*#__PURE__*/function (_Component) {
  _inherits(Dropzone, _Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props);
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.addedfile = _this.addedfile.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(Dropzone, [{
    key: "success",
    value: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fromServer) {
        var _this$props, doUploadEmailLogo, data, change, fileName, oldPicture, filePath;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, doUploadEmailLogo = _this$props.doUploadEmailLogo, data = _this$props.data, change = _this$props.change;
                fileName = fromServer.file.filename;
                oldPicture = data != null ? data.value : null;
                filePath = fromServer.file.path;
                doUploadEmailLogo(fileName, filePath, oldPicture);
                _context.next = 7;
                return change('SiteSettingsForm', 'emailLogo', fileName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x, _x2) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }, {
    key: "addedfile",
    value: function addedfile(file, fromServer) {
      var _this2 = this;

      var _this$props2 = this.props,
          startEmailLogoUploaderLoader = _this$props2.startEmailLogoUploaderLoader,
          stopEmailLogoUploaderLoader = _this$props2.stopEmailLogoUploaderLoader;
      startEmailLogoUploaderLoader();
      var fileFormates = ['image/svg+xml', 'application/sql', 'application/pdf', 'application/vnd.oasis.opendocument.presentation', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/epub+zip', 'application/zip', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.oasis.opendocument.spreadsheet', 'text/tab-separated-values', 'text/calendar', 'application/json'];

      if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_11__["maxUploadSize"]) {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
        this.dropzone.removeFile(file);
        stopEmailLogoUploaderLoader();
      }

      if (fileFormates.indexOf(file && file.type) > 0) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
        stopEmailLogoUploaderLoader();
      }

      if (file && file.accepted === false) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
        stopEmailLogoUploaderLoader();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var formatMessage = this.props.intl.formatMessage;
      var djsConfig = {
        dictDefaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_10__["default"].clickHeretoUploadLogo),
        addRemoveLinks: false,
        uploadMultiple: false,
        maxFilesize: 10,
        acceptedFiles: 'image/jpeg,image/png',
        dictMaxFilesExceeded: 'Remove the existing image and try upload again',
        previewsContainer: false
      };
      var componentConfig = {
        iconFiletypes: ['.jpg', '.png'],
        postUrl: '/uploadEmailLogo'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this3.dropzone = dz;
        },
        success: this.success,
        addedfile: this.addedfile
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Dropzone, "propTypes", {
  doUploadEmailLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  doRemoveHomeLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  startEmailLogoUploaderLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(Dropzone, "defaultProps", {
  data: null
});

var mapState = function mapState(state) {
  return {};
};

var mapDispatch = {
  doUploadEmailLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["doUploadEmailLogo"],
  doRemoveHomeLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["doRemoveHomeLogo"],
  startEmailLogoUploaderLoader: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["startEmailLogoUploaderLoader"],
  change: redux_form__WEBPACK_IMPORTED_MODULE_5__["change"],
  stopEmailLogoUploaderLoader: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_8__["stopEmailLogoUploaderLoader"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "6X+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SiteSettings_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("u8Ei");
/* harmony import */ var _SiteSettings_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SiteSettings_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_siteadmin_SiteSettingsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+tpX");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3dzz");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/siteSettings/SiteSettings.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style


 // Component




var SiteSettings = /*#__PURE__*/function (_React$Component) {
  _inherits(SiteSettings, _React$Component);

  var _super = _createSuper(SiteSettings);

  function SiteSettings() {
    _classCallCheck(this, SiteSettings);

    return _super.apply(this, arguments);
  }

  _createClass(SiteSettings, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          loading = _this$props$data.loading,
          siteSettings = _this$props$data.siteSettings;
      var settingsCollection = {};

      if (loading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 14
          }
        });
      } else {
        siteSettings.map(function (item, key) {
          settingsCollection[item.name] = item.value;
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_SiteSettingsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
          initialValues: settingsCollection,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 14
          }
        });
      }
    }
  }]);

  return SiteSettings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SiteSettings, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    siteSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
});

_defineProperty(SiteSettings, "defaultProps", {
  data: {
    loading: true
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_SiteSettings_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        {\n          siteSettings {\n            name\n            value\n          }\n        }\n      "]))), {
  options: {
    fetchPolicy: 'network-only'
  }
}))(SiteSettings));

/***/ }),

/***/ "6zm1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.FavIconUploader-space1-10iei {\n\tmargin-bottom: 6px !important;\n}\n.FavIconUploader-space2-1hH60 {\n\tmargin-bottom: 12px !important;\n}\n.FavIconUploader-space3-1DzWI {\n\tmargin-bottom: 18px !important;\n}\n.FavIconUploader-space4-28BPR {\n\tmargin-bottom: 24px !important;\n}\n.FavIconUploader-space5-_YiUi {\n\tmargin-bottom: 30px !important;\n}\n.FavIconUploader-space6-2bKsu {\n\tmargin-bottom: 36px !important;\n}\n.FavIconUploader-space7-2b5yF {\n\tmargin-bottom: 42px !important;\n}\n.FavIconUploader-spaceTop8-6Vpzv {\n\tmargin-bottom: 48px !important;\n}\n.FavIconUploader-spaceTop1-2HMql {\n\tmargin-top: 6px !important;\n}\n.FavIconUploader-spaceTop2-3w-Vi {\n\tmargin-top: 12px !important;\n}\n.FavIconUploader-spaceTop3-1sZL0 {\n\tmargin-top: 18px !important;\n}\n.FavIconUploader-spaceTop4-3xmxV {\n\tmargin-top: 24px !important;\n}\n.FavIconUploader-spaceTop5-C8SHL {\n\tmargin-top: 30px !important;\n}\n.FavIconUploader-spaceTop6-2FZU6 {\n\tmargin-top: 36px !important;\n}\n.FavIconUploader-spaceTop7-34X_y {\n\tmargin-top: 42px !important;\n}\n.FavIconUploader-spaceTop8-6Vpzv {\n\tmargin-top: 48px !important;\n}\n.FavIconUploader-noMargin-2LGZa {\n\tmargin: 0px !important;\n}\n.FavIconUploader-padding1-2VmpY {\n\tpadding-bottom: 6px !important;\n}\n.FavIconUploader-padding2-cv_0D {\n\tpadding-bottom: 12px !important;\n}\n.FavIconUploader-padding3-2SIjL {\n\tpadding-bottom: 18px !important;\n}\n.FavIconUploader-padding4-2FPgF {\n\tpadding-bottom: 24px !important;\n}\n.FavIconUploader-padding5-15mEY {\n\tpadding-bottom: 30px !important;\n}\n.FavIconUploader-padding6-3OOnD {\n\tpadding-bottom: 36px !important;\n}\n.FavIconUploader-padding7-3MRhF {\n\tpadding-bottom: 42px !important;\n}\n.FavIconUploader-paddingTop1-J_e4u {\n\tpadding-top: 6px !important;\n}\n.FavIconUploader-paddingTop2-1BYla {\n\tpadding-top: 12px !important;\n}\n.FavIconUploader-paddingTop3-gwx-B {\n\tpadding-top: 18px !important;\n}\n.FavIconUploader-paddingTop4-2r2Ub {\n\tpadding-top: 24px !important;\n}\n.FavIconUploader-paddingTop5-2QwCn {\n\tpadding-top: 30px !important;\n}\n.FavIconUploader-paddingTop6-22DL9 {\n\tpadding-top: 36px !important;\n}\n.FavIconUploader-paddingTop7-3zy7i {\n\tpadding-top: 42px !important;\n}\n.FavIconUploader-noPadding-1MVTL {\n\tpadding: 0px !important;\n}\n.FavIconUploader-textBold-2iUeO {\n\tfont-weight: 500 !important;\n}\n.FavIconUploader-textBolder-3J46s {\n\tfont-weight: 700 !important;\n}\n.FavIconUploader-textNormal-1d2yJ {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.FavIconUploader-textDarkBlue-ApPMA {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.FavIconUploader-textLightBlue-2dbS3 {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.FavIconUploader-textLightSandleGreen-2quk8 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.FavIconUploader-textLightBrown-2Zal5 {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.FavIconUploader-textMediumMaroon-2kUX1 {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.FavIconUploader-textBrown-3Zxa9 {\n\tcolor: #B5DC4B !important;\n}\n.FavIconUploader-textMaroon-1bjgV {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.FavIconUploader-textDarkBrown-2c_8T {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.FavIconUploader-textMediumBrown-2I_fO {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.FavIconUploader-textSkyBlue-15lg0 {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.FavIconUploader-textGray-3Soj9 {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.FavIconUploader-pngFontSize-lwLUu {\n    font-size: 15px;\n    position: absolute;\n    bottom: -42px;\n    right: 17px;\n}\n.FavIconUploader-positionRelative-WFRa_{\n    position: relative;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/FavIconUploader/FavIconUploader.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,YAAY;CACf;AACD;IACI,mBAAmB;CACtB","file":"FavIconUploader.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.pngFontSize {\n    font-size: 15px;\n    position: absolute;\n    bottom: -42px;\n    right: 17px;\n}\n.positionRelative{\n    position: relative;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "FavIconUploader-space1-10iei",
	"space2": "FavIconUploader-space2-1hH60",
	"space3": "FavIconUploader-space3-1DzWI",
	"space4": "FavIconUploader-space4-28BPR",
	"space5": "FavIconUploader-space5-_YiUi",
	"space6": "FavIconUploader-space6-2bKsu",
	"space7": "FavIconUploader-space7-2b5yF",
	"spaceTop8": "FavIconUploader-spaceTop8-6Vpzv",
	"spaceTop1": "FavIconUploader-spaceTop1-2HMql",
	"spaceTop2": "FavIconUploader-spaceTop2-3w-Vi",
	"spaceTop3": "FavIconUploader-spaceTop3-1sZL0",
	"spaceTop4": "FavIconUploader-spaceTop4-3xmxV",
	"spaceTop5": "FavIconUploader-spaceTop5-C8SHL",
	"spaceTop6": "FavIconUploader-spaceTop6-2FZU6",
	"spaceTop7": "FavIconUploader-spaceTop7-34X_y",
	"noMargin": "FavIconUploader-noMargin-2LGZa",
	"padding1": "FavIconUploader-padding1-2VmpY",
	"padding2": "FavIconUploader-padding2-cv_0D",
	"padding3": "FavIconUploader-padding3-2SIjL",
	"padding4": "FavIconUploader-padding4-2FPgF",
	"padding5": "FavIconUploader-padding5-15mEY",
	"padding6": "FavIconUploader-padding6-3OOnD",
	"padding7": "FavIconUploader-padding7-3MRhF",
	"paddingTop1": "FavIconUploader-paddingTop1-J_e4u",
	"paddingTop2": "FavIconUploader-paddingTop2-1BYla",
	"paddingTop3": "FavIconUploader-paddingTop3-gwx-B",
	"paddingTop4": "FavIconUploader-paddingTop4-2r2Ub",
	"paddingTop5": "FavIconUploader-paddingTop5-2QwCn",
	"paddingTop6": "FavIconUploader-paddingTop6-22DL9",
	"paddingTop7": "FavIconUploader-paddingTop7-3zy7i",
	"noPadding": "FavIconUploader-noPadding-1MVTL",
	"textBold": "FavIconUploader-textBold-2iUeO",
	"textBolder": "FavIconUploader-textBolder-3J46s",
	"textNormal": "FavIconUploader-textNormal-1d2yJ",
	"textDarkBlue": "FavIconUploader-textDarkBlue-ApPMA",
	"textLightBlue": "FavIconUploader-textLightBlue-2dbS3",
	"textLightSandleGreen": "FavIconUploader-textLightSandleGreen-2quk8",
	"textLightBrown": "FavIconUploader-textLightBrown-2Zal5",
	"textMediumMaroon": "FavIconUploader-textMediumMaroon-2kUX1",
	"textBrown": "FavIconUploader-textBrown-3Zxa9",
	"textMaroon": "FavIconUploader-textMaroon-1bjgV",
	"textDarkBrown": "FavIconUploader-textDarkBrown-2c_8T",
	"textMediumBrown": "FavIconUploader-textMediumBrown-2I_fO",
	"textSkyBlue": "FavIconUploader-textSkyBlue-15lg0",
	"textGray": "FavIconUploader-textGray-3Soj9",
	"pngFontSize": "FavIconUploader-pngFontSize-lwLUu",
	"positionRelative": "FavIconUploader-positionRelative-WFRa_"
};

/***/ }),

/***/ "F5o+":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("KxqO");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "J8wK":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("033G");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "JCPO":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("wDuj");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "JidP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Q7QM");


var validate = function validate(values) {
  var errors = {};

  if (!values.siteName) {
    errors.siteName = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  if (!values.siteTitle) {
    errors.siteTitle = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  if (values.logoHeight) {
    if (isNaN(values.logoHeight)) {
      errors.logoHeight = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].logoHeight && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].logoHeight;
    }
  }

  if (values.logoWidth) {
    if (isNaN(values.logoWidth)) {
      errors.logoWidth = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].logoWidth && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].logoWidth;
    }
  }

  if (values.metaDescription && values.metaDescription.length > 255) {
    errors.metaDescription = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].metaDescription && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].metaDescription;
  }

  if (values.metaKeyword && values.metaKeyword.length > 255) {
    errors.metaKeyword = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].metaKeyword && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].metaKeyword;
  }

  if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(values.playStoreUrl)) {
    errors.playStoreUrl = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].urlInvalid;
  }

  if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(values.appStoreUrl)) {
    errors.appStoreUrl = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].urlInvalid;
  }

  if (!values.email) {
    errors.email = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.email)) {
    errors.email = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].emailInvalid && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].emailInvalid;
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.phoneNumber && values.phoneNumber.trim() == "") {
    errors.phoneNumber = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.phoneNumber.length > 30) {
    errors.phoneNumber = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].phoneNumberLengthInvalid;
  }

  if (!values.address) {
    errors.address = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  if (!values.stripePublishableKey) {
    errors.stripePublishableKey = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required && _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.stripePublishableKey && values.stripePublishableKey.toString().trim() == "") {
    errors.stripePublishableKey = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "KxqO":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.EmailLogoUploader-space1-dWL4p {\n\tmargin-bottom: 6px !important;\n}\n.EmailLogoUploader-space2-1auto {\n\tmargin-bottom: 12px !important;\n}\n.EmailLogoUploader-space3-1X_sV {\n\tmargin-bottom: 18px !important;\n}\n.EmailLogoUploader-space4-3EAGV {\n\tmargin-bottom: 24px !important;\n}\n.EmailLogoUploader-space5-11hDA {\n\tmargin-bottom: 30px !important;\n}\n.EmailLogoUploader-space6-3toQI {\n\tmargin-bottom: 36px !important;\n}\n.EmailLogoUploader-space7-2pfu0 {\n\tmargin-bottom: 42px !important;\n}\n.EmailLogoUploader-spaceTop8-VKbXu {\n\tmargin-bottom: 48px !important;\n}\n.EmailLogoUploader-spaceTop1-2drqA {\n\tmargin-top: 6px !important;\n}\n.EmailLogoUploader-spaceTop2-1Gwcu {\n\tmargin-top: 12px !important;\n}\n.EmailLogoUploader-spaceTop3-IBrXE {\n\tmargin-top: 18px !important;\n}\n.EmailLogoUploader-spaceTop4-LEK2y {\n\tmargin-top: 24px !important;\n}\n.EmailLogoUploader-spaceTop5-KdGl4 {\n\tmargin-top: 30px !important;\n}\n.EmailLogoUploader-spaceTop6-1BnOe {\n\tmargin-top: 36px !important;\n}\n.EmailLogoUploader-spaceTop7-3meja {\n\tmargin-top: 42px !important;\n}\n.EmailLogoUploader-spaceTop8-VKbXu {\n\tmargin-top: 48px !important;\n}\n.EmailLogoUploader-noMargin-37bLu {\n\tmargin: 0px !important;\n}\n.EmailLogoUploader-padding1-3KYPg {\n\tpadding-bottom: 6px !important;\n}\n.EmailLogoUploader-padding2-22zy0 {\n\tpadding-bottom: 12px !important;\n}\n.EmailLogoUploader-padding3-3byu2 {\n\tpadding-bottom: 18px !important;\n}\n.EmailLogoUploader-padding4-1jaSs {\n\tpadding-bottom: 24px !important;\n}\n.EmailLogoUploader-padding5-3S3C4 {\n\tpadding-bottom: 30px !important;\n}\n.EmailLogoUploader-padding6-3yz61 {\n\tpadding-bottom: 36px !important;\n}\n.EmailLogoUploader-padding7-3Y5js {\n\tpadding-bottom: 42px !important;\n}\n.EmailLogoUploader-paddingTop1-15sZg {\n\tpadding-top: 6px !important;\n}\n.EmailLogoUploader-paddingTop2-2Ah-1 {\n\tpadding-top: 12px !important;\n}\n.EmailLogoUploader-paddingTop3-1015Q {\n\tpadding-top: 18px !important;\n}\n.EmailLogoUploader-paddingTop4-uF3f6 {\n\tpadding-top: 24px !important;\n}\n.EmailLogoUploader-paddingTop5-2O14k {\n\tpadding-top: 30px !important;\n}\n.EmailLogoUploader-paddingTop6-3cBdI {\n\tpadding-top: 36px !important;\n}\n.EmailLogoUploader-paddingTop7-18i_c {\n\tpadding-top: 42px !important;\n}\n.EmailLogoUploader-noPadding-URUYu {\n\tpadding: 0px !important;\n}\n.EmailLogoUploader-textBold-I123L {\n\tfont-weight: 500 !important;\n}\n.EmailLogoUploader-textBolder-3uj1_ {\n\tfont-weight: 700 !important;\n}\n.EmailLogoUploader-textNormal-uebiF {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.EmailLogoUploader-textDarkBlue-LeGJg {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.EmailLogoUploader-textLightBlue-pdXzI {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.EmailLogoUploader-textLightSandleGreen-13ZM9 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.EmailLogoUploader-textLightBrown-rA8ys {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.EmailLogoUploader-textMediumMaroon-ct2oO {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.EmailLogoUploader-textBrown-2912t {\n\tcolor: #B5DC4B !important;\n}\n.EmailLogoUploader-textMaroon-32DmW {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.EmailLogoUploader-textDarkBrown-yXfr7 {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.EmailLogoUploader-textMediumBrown-8NfAu {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.EmailLogoUploader-textSkyBlue-3BCHn {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.EmailLogoUploader-textGray-1R9Gl {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/EmailLogoUploader/EmailLogoUploader.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"EmailLogoUploader.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "EmailLogoUploader-space1-dWL4p",
	"space2": "EmailLogoUploader-space2-1auto",
	"space3": "EmailLogoUploader-space3-1X_sV",
	"space4": "EmailLogoUploader-space4-3EAGV",
	"space5": "EmailLogoUploader-space5-11hDA",
	"space6": "EmailLogoUploader-space6-3toQI",
	"space7": "EmailLogoUploader-space7-2pfu0",
	"spaceTop8": "EmailLogoUploader-spaceTop8-VKbXu",
	"spaceTop1": "EmailLogoUploader-spaceTop1-2drqA",
	"spaceTop2": "EmailLogoUploader-spaceTop2-1Gwcu",
	"spaceTop3": "EmailLogoUploader-spaceTop3-IBrXE",
	"spaceTop4": "EmailLogoUploader-spaceTop4-LEK2y",
	"spaceTop5": "EmailLogoUploader-spaceTop5-KdGl4",
	"spaceTop6": "EmailLogoUploader-spaceTop6-1BnOe",
	"spaceTop7": "EmailLogoUploader-spaceTop7-3meja",
	"noMargin": "EmailLogoUploader-noMargin-37bLu",
	"padding1": "EmailLogoUploader-padding1-3KYPg",
	"padding2": "EmailLogoUploader-padding2-22zy0",
	"padding3": "EmailLogoUploader-padding3-3byu2",
	"padding4": "EmailLogoUploader-padding4-1jaSs",
	"padding5": "EmailLogoUploader-padding5-3S3C4",
	"padding6": "EmailLogoUploader-padding6-3yz61",
	"padding7": "EmailLogoUploader-padding7-3Y5js",
	"paddingTop1": "EmailLogoUploader-paddingTop1-15sZg",
	"paddingTop2": "EmailLogoUploader-paddingTop2-2Ah-1",
	"paddingTop3": "EmailLogoUploader-paddingTop3-1015Q",
	"paddingTop4": "EmailLogoUploader-paddingTop4-uF3f6",
	"paddingTop5": "EmailLogoUploader-paddingTop5-2O14k",
	"paddingTop6": "EmailLogoUploader-paddingTop6-3cBdI",
	"paddingTop7": "EmailLogoUploader-paddingTop7-18i_c",
	"noPadding": "EmailLogoUploader-noPadding-URUYu",
	"textBold": "EmailLogoUploader-textBold-I123L",
	"textBolder": "EmailLogoUploader-textBolder-3uj1_",
	"textNormal": "EmailLogoUploader-textNormal-uebiF",
	"textDarkBlue": "EmailLogoUploader-textDarkBlue-LeGJg",
	"textLightBlue": "EmailLogoUploader-textLightBlue-pdXzI",
	"textLightSandleGreen": "EmailLogoUploader-textLightSandleGreen-13ZM9",
	"textLightBrown": "EmailLogoUploader-textLightBrown-rA8ys",
	"textMediumMaroon": "EmailLogoUploader-textMediumMaroon-ct2oO",
	"textBrown": "EmailLogoUploader-textBrown-2912t",
	"textMaroon": "EmailLogoUploader-textMaroon-32DmW",
	"textDarkBrown": "EmailLogoUploader-textDarkBrown-yXfr7",
	"textMediumBrown": "EmailLogoUploader-textMediumBrown-8NfAu",
	"textSkyBlue": "EmailLogoUploader-textSkyBlue-3BCHn",
	"textGray": "EmailLogoUploader-textGray-1R9Gl"
};

/***/ }),

/***/ "L6gv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("F5o+");
/* harmony import */ var _EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YLCU");
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wa3/");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("5K6C");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3dzz");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Q7QM");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("e8ND");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("TXYE");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/EmailLogoUploader/EmailLogoUploader.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Redux


 // Component


 // Translation


 // Asset




var EmailLogoUploader = /*#__PURE__*/function (_React$Component) {
  _inherits(EmailLogoUploader, _React$Component);

  var _super = _createSuper(EmailLogoUploader);

  function EmailLogoUploader() {
    _classCallCheck(this, EmailLogoUploader);

    return _super.apply(this, arguments);
  }

  _createClass(EmailLogoUploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$getLogoDa = _this$props.getLogoData,
          loading = _this$props$getLogoDa.loading,
          getEmailLogo = _this$props$getLogoDa.getEmailLogo,
          doRemoveEmailLogo = _this$props.doRemoveEmailLogo,
          emailLogoUploaderLoading = _this$props.emailLogoUploaderLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.textAlignCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        show: emailLogoUploaderLoading,
        type: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainerMain,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profilePic,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 32
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].loadingLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 37
        }
      }))), !loading && getEmailLogo && getEmailLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(/images/logo/".concat(getEmailLogo.value, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 71
        }
      }), !loading && getEmailLogo && !getEmailLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 72
        }
      }), !loading && getEmailLogo === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 58
        }
      })), !loading && getEmailLogo && getEmailLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return doRemoveEmailLogo(getEmailLogo.value);
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.trashIconNew, 'trashIconNewRTL'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 69
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "Delete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.space2, _EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.fullWidth, _EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPadding, 'photoUploadBtn'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: getEmailLogo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return EmailLogoUploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(EmailLogoUploader, "propTypes", {
  emailLogoUploaderLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doRemoveEmailLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  getLogoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getEmailLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  })
});

_defineProperty(EmailLogoUploader, "defaultProps", {
  getLogoData: {
    loading: true
  },
  emailLogoUploaderLoading: false
});

var mapState = function mapState(state) {
  return {
    emailLogoUploaderLoading: state.siteSettings.emailLogoUploaderLoading
  };
};

var mapDispatch = {
  doRemoveEmailLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__["doRemoveEmailLogo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_EmailLogoUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      query getEmailLogo{\n        getEmailLogo {\n          id\n          title\n          name\n          value\n          type\n        }\n      }\n    "]))), {
  name: 'getLogoData',
  options: {
    ssr: false
  }
}))(EmailLogoUploader));

/***/ }),

/***/ "LiXe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/SiteImages/defaultPic.png?04ed1861";

/***/ }),

/***/ "Mn8N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HomeUploader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+eeS");
/* harmony import */ var _HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HomeUploader_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YLCU");
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wa3/");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("1DJe");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3dzz");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Q7QM");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("e8ND");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("TXYE");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/HomeUploader/HomeUploader.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Redux


 // Component


 // Translation


 // Asset




var HomeUploader = /*#__PURE__*/function (_React$Component) {
  _inherits(HomeUploader, _React$Component);

  var _super = _createSuper(HomeUploader);

  function HomeUploader() {
    _classCallCheck(this, HomeUploader);

    return _super.apply(this, arguments);
  }

  _createClass(HomeUploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$getLogoDa = _this$props.getLogoData,
          loading = _this$props$getLogoDa.loading,
          getHomeLogo = _this$props$getLogoDa.getHomeLogo,
          doRemoveHomeLogo = _this$props.doRemoveHomeLogo,
          homeLogoUploaderLoading = _this$props.homeLogoUploaderLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.textAlignCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        show: homeLogoUploaderLoading,
        type: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainerMain,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profilePic, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.whiteImg),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 32
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].loadingLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 37
        }
      }))), !loading && getHomeLogo && getHomeLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(/images/logo/".concat(getHomeLogo.value, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 69
        }
      }), !loading && getHomeLogo && !getHomeLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 70
        }
      }), !loading && getHomeLogo === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 57
        }
      })), !loading && getHomeLogo && getHomeLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return doRemoveHomeLogo(getHomeLogo.value);
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.trashIconNew, 'trashIconNewRTL'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 67
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "Delete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.space2, _HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.fullWidth, _HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPadding, 'photoUploadBtn'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: getHomeLogo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return HomeUploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HomeUploader, "propTypes", {
  homeLogoUploaderLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doRemoveHomeLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  getLogoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getHomeLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  })
});

_defineProperty(HomeUploader, "defaultProps", {
  profilePictureData: {
    loading: true
  },
  homeLogoUploaderLoading: false
});

var mapState = function mapState(state) {
  return {
    homeLogoUploaderLoading: state.siteSettings.homeLogoUploaderLoading
  };
};

var mapDispatch = {
  doRemoveHomeLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__["doRemoveHomeLogo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_HomeUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      query getHomeLogo{\n        getHomeLogo {\n          id\n          title\n          name\n          value\n          type\n        }\n      }\n    "]))), {
  name: 'getLogoData',
  options: {
    ssr: false
  }
}))(HomeUploader));

/***/ }),

/***/ "SDP2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "TXYE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/dlt.png?b362cae0";

/***/ }),

/***/ "Thh8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Uploader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JCPO");
/* harmony import */ var _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Uploader_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YLCU");
/* harmony import */ var react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_lib_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wa3/");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Q7QM");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("shnT");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("g8qI");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("3dzz");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("e8ND");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("TXYE");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/Uploader/Uploader.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Redux


 // Translation


 // Component



 // Asset




var Uploader = /*#__PURE__*/function (_React$Component) {
  _inherits(Uploader, _React$Component);

  var _super = _createSuper(Uploader);

  function Uploader() {
    _classCallCheck(this, Uploader);

    return _super.apply(this, arguments);
  }

  _createClass(Uploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$getLogoDa = _this$props.getLogoData,
          loading = _this$props$getLogoDa.loading,
          getLogo = _this$props$getLogoDa.getLogo,
          doRemoveLogo = _this$props.doRemoveLogo,
          logoUploaderLoading = _this$props.logoUploaderLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.textAlignCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_15__["default"], {
        show: logoUploaderLoading,
        type: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainerMain,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profilePic,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 32
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_12__["default"].loadingLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 37
        }
      }))), !loading && getLogo != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(/images/logo/".concat(getLogo.value, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 52
        }
      }), !loading && getLogo === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_16___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 53
        }
      })), !loading && getLogo != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return doRemoveLogo(getLogo.value);
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.trashIconNew, 'trashIconNewRTL'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 50
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_17___default.a,
        alt: "Delete",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.space2, _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.fullWidth, _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPadding, 'photoUploadBtn'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: getLogo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return Uploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Uploader, "propTypes", {
  logoUploaderLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doRemoveLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  getLogoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  })
});

_defineProperty(Uploader, "defaultProps", {
  profilePictureData: {
    loading: true
  },
  logoUploaderLoading: false
});

var mapState = function mapState(state) {
  return {
    logoUploaderLoading: state.siteSettings.logoUploaderLoading
  };
};

var mapDispatch = {
  doRemoveLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__["doRemoveLogo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      query getLogo{\n        getLogo {\n          id\n          title\n          name\n          value\n          type\n        }\n      }\n    "]))), {
  name: 'getLogoData',
  options: {
    ssr: false
  }
}))(Uploader));

/***/ }),

/***/ "UJG8":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("SDP2");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "V6eD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.SiteSettingsForm-rentAllHeaderAdmin-7prW7 {\n  position: fixed !important;\n}\n.SiteSettingsForm-adminLayout-Ug74l {\n  padding-top: 64px !important;\n}\n.SiteSettingsForm-box-14QIU h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.SiteSettingsForm-exportLink-bH4l_ {\n  margin-bottom: -29px;\n}\n.SiteSettingsForm-blockcenter-1ZKAL {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.SiteSettingsForm-panelHeader-2NdII {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.SiteSettingsForm-currencyselect-Wo7Rx {\n  width: 100%;\n  margin-right: 0px;\n}\n.SiteSettingsForm-panelHeader-2NdII {\n  overflow: hidden;\n  position: relative;\n}\n.SiteSettingsForm-mar0-3oyev {\n  margin-left: 0;\n  margin-right: 0;\n}\n.SiteSettingsForm-navbar-3iYyp > .SiteSettingsForm-container-1mAp8 .SiteSettingsForm-navbar-brand-3OhTa,\n.SiteSettingsForm-navbar-3iYyp > .SiteSettingsForm-container-fluid-2sXEA .SiteSettingsForm-navbar-brand-3OhTa {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .SiteSettingsForm-blockcenter-1ZKAL {\n    padding: 0px;\n  }\n  .SiteSettingsForm-panelHeader-2NdII {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.SiteSettingsForm-pagecontentWrapper-1UIQ4 {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.SiteSettingsForm-headerTitle-1Juwy {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.SiteSettingsForm-panelHeader-2NdII {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.SiteSettingsForm-table-2AwgO {\n\tdisplay: table;\n}\n.SiteSettingsForm-tableRow-2gO5z {\n\tdisplay: table-row;\n}\n.SiteSettingsForm-tableCell-3XL_A {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.SiteSettingsForm-formGroup-1f_bg {\n\tmargin-bottom: 6px;\n}\n.SiteSettingsForm-select-2JEzY {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.SiteSettingsForm-noMargin-1-FJJ {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.SiteSettingsForm-exportLink-bH4l_ {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.SiteSettingsForm-labelTextNew-26_wy {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.SiteSettingsForm-displayInline-2m4Kz {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.SiteSettingsForm-btnUPdate-3JVvK {\n\tdisplay: inline-block;\n}\n.SiteSettingsForm-btnModalDelete-PJX5- {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.SiteSettingsForm-radioBtn-1fmY8 {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.SiteSettingsForm-btnUPdate-3JVvK {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.SiteSettingsForm-btnModalDelete-PJX5- {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.SiteSettingsForm-btnWidth-3kfAW {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.SiteSettingsForm-bannerImageBg-2s285 {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.SiteSettingsForm-bannerDelete-3LXBq {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.SiteSettingsForm-modalRoot-3OD8z {\n\tpadding: 32px;\n}\n.SiteSettingsForm-modalBorderBottom-3wIH2 {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.SiteSettingsForm-logInModalBody-1sPMA {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.SiteSettingsForm-exportSection-2Q12Q {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.SiteSettingsForm-exportSectionGridSub-3hrkW {\n\tgrid-template-columns: 50% 49% !important;\n}\n.SiteSettingsForm-exportText-2W5Dy {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.SiteSettingsForm-exportLinkImg-2YgXF {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.SiteSettingsForm-vtrMiddle-2Y3T2 {\n\tvertical-align: middle;\n}\n.SiteSettingsForm-exportImg-25_OS {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.SiteSettingsForm-profileViewlabel-3lfxW {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.SiteSettingsForm-profileViewMainContent-1KrGZ {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.SiteSettingsForm-profileViewMain-2KwWc {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.SiteSettingsForm-profileViewInner-aVqkJ {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.SiteSettingsForm-profileImageSection-F6sVb {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.SiteSettingsForm-lastviewInner-2wm1N {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.SiteSettingsForm-pagecontentWrapper-1UIQ4 {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.SiteSettingsForm-exportSection-2Q12Q {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.SiteSettingsForm-exportText-2W5Dy {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.SiteSettingsForm-exportSectionGridSub-3hrkW {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.SiteSettingsForm-profileViewlabel-3lfxW {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.SiteSettingsForm-profileViewMainContent-1KrGZ {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.SiteSettingsForm-pagecontentWrapper-1UIQ4 {\n\t\tmargin-left: 0;\n\t}\n}\n.SiteSettingsForm-ChangeToUpperCase-9sPq3{\n    text-transform: uppercase\n}\n.SiteSettingsForm-noBorder-_ZLCV {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.SiteSettingsForm-errorMessage-18Wfl {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.SiteSettingsForm-panelHeader-2NdII{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.SiteSettingsForm-formGroup-1f_bg {\n  margin-bottom: 6px;\n}\n.SiteSettingsForm-select-2JEzY {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.SiteSettingsForm-labelText-1Imwk{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.SiteSettingsForm-space1-2-ISM {\n\tmargin-bottom: 6px !important;\n}\n.SiteSettingsForm-space2-ygk7c {\n\tmargin-bottom: 12px !important;\n}\n.SiteSettingsForm-space3-3EVbd {\n\tmargin-bottom: 18px !important;\n}\n.SiteSettingsForm-space4-3I-Gw {\n\tmargin-bottom: 24px !important;\n}\n.SiteSettingsForm-space5-1hull {\n\tmargin-bottom: 30px !important;\n}\n.SiteSettingsForm-space6-1QGK0 {\n\tmargin-bottom: 36px !important;\n}\n.SiteSettingsForm-space7-20has {\n\tmargin-bottom: 42px !important;\n}\n.SiteSettingsForm-spaceTop8-MUgBM {\n\tmargin-bottom: 48px !important;\n}\n.SiteSettingsForm-spaceTop1-2Z4L1 {\n\tmargin-top: 6px !important;\n}\n.SiteSettingsForm-spaceTop2-2IwiO {\n\tmargin-top: 12px !important;\n}\n.SiteSettingsForm-spaceTop3-1vcRY {\n\tmargin-top: 18px !important;\n}\n.SiteSettingsForm-spaceTop4-3hqOA {\n\tmargin-top: 24px !important;\n}\n.SiteSettingsForm-spaceTop5-d-fT3 {\n\tmargin-top: 30px !important;\n}\n.SiteSettingsForm-spaceTop6-3Pz6g {\n\tmargin-top: 36px !important;\n}\n.SiteSettingsForm-spaceTop7-19G6O {\n\tmargin-top: 42px !important;\n}\n.SiteSettingsForm-spaceTop8-MUgBM {\n\tmargin-top: 48px !important;\n}\n.SiteSettingsForm-noMargin-1-FJJ {\n\tmargin: 0px !important;\n}\n.SiteSettingsForm-padding1-1Ll98 {\n\tpadding-bottom: 6px !important;\n}\n.SiteSettingsForm-padding2-eetxu {\n\tpadding-bottom: 12px !important;\n}\n.SiteSettingsForm-padding3-29IAt {\n\tpadding-bottom: 18px !important;\n}\n.SiteSettingsForm-padding4-18CHy {\n\tpadding-bottom: 24px !important;\n}\n.SiteSettingsForm-padding5-3ftdk {\n\tpadding-bottom: 30px !important;\n}\n.SiteSettingsForm-padding6-6toW- {\n\tpadding-bottom: 36px !important;\n}\n.SiteSettingsForm-padding7-qvaoe {\n\tpadding-bottom: 42px !important;\n}\n.SiteSettingsForm-paddingTop1-bpkPr {\n\tpadding-top: 6px !important;\n}\n.SiteSettingsForm-paddingTop2-2eUDB {\n\tpadding-top: 12px !important;\n}\n.SiteSettingsForm-paddingTop3-1nzbZ {\n\tpadding-top: 18px !important;\n}\n.SiteSettingsForm-paddingTop4-NVxDu {\n\tpadding-top: 24px !important;\n}\n.SiteSettingsForm-paddingTop5-3Ugsb {\n\tpadding-top: 30px !important;\n}\n.SiteSettingsForm-paddingTop6-3CXU3 {\n\tpadding-top: 36px !important;\n}\n.SiteSettingsForm-paddingTop7-1WNR5 {\n\tpadding-top: 42px !important;\n}\n.SiteSettingsForm-noPadding-28NYy {\n\tpadding: 0px !important;\n}\n.SiteSettingsForm-textBold-3EKAN {\n\tfont-weight: 500 !important;\n}\n.SiteSettingsForm-textBolder-3_h0N {\n\tfont-weight: 700 !important;\n}\n.SiteSettingsForm-textNormal-1hcEn {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.SiteSettingsForm-textDarkBlue-2QQBK {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.SiteSettingsForm-textLightBlue-13_F_ {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.SiteSettingsForm-textLightSandleGreen-1fgfE {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.SiteSettingsForm-textLightBrown-3Rw2x {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.SiteSettingsForm-textMediumMaroon-2kDX_ {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.SiteSettingsForm-textBrown-349KA {\n\tcolor: #B5DC4B !important;\n}\n.SiteSettingsForm-textMaroon-25lsj {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.SiteSettingsForm-textDarkBrown-2Ysik {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.SiteSettingsForm-textMediumBrown-2gSIb {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.SiteSettingsForm-textSkyBlue-mk-sO {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.SiteSettingsForm-textGray-1iPww {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/SiteSettingsForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;CACC,gBAAgB;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"SiteSettingsForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.panelHeader{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.formGroup {\n  margin-bottom: 6px;\n}\n.select {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.labelText{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "SiteSettingsForm-rentAllHeaderAdmin-7prW7",
	"adminLayout": "SiteSettingsForm-adminLayout-Ug74l",
	"box": "SiteSettingsForm-box-14QIU",
	"exportLink": "SiteSettingsForm-exportLink-bH4l_",
	"blockcenter": "SiteSettingsForm-blockcenter-1ZKAL",
	"panelHeader": "SiteSettingsForm-panelHeader-2NdII",
	"currencyselect": "SiteSettingsForm-currencyselect-Wo7Rx",
	"mar0": "SiteSettingsForm-mar0-3oyev",
	"navbar": "SiteSettingsForm-navbar-3iYyp",
	"container": "SiteSettingsForm-container-1mAp8",
	"navbar-brand": "SiteSettingsForm-navbar-brand-3OhTa",
	"container-fluid": "SiteSettingsForm-container-fluid-2sXEA",
	"pagecontentWrapper": "SiteSettingsForm-pagecontentWrapper-1UIQ4",
	"headerTitle": "SiteSettingsForm-headerTitle-1Juwy",
	"table": "SiteSettingsForm-table-2AwgO",
	"tableRow": "SiteSettingsForm-tableRow-2gO5z",
	"tableCell": "SiteSettingsForm-tableCell-3XL_A",
	"formGroup": "SiteSettingsForm-formGroup-1f_bg",
	"select": "SiteSettingsForm-select-2JEzY",
	"noMargin": "SiteSettingsForm-noMargin-1-FJJ",
	"labelTextNew": "SiteSettingsForm-labelTextNew-26_wy",
	"displayInline": "SiteSettingsForm-displayInline-2m4Kz",
	"btnUPdate": "SiteSettingsForm-btnUPdate-3JVvK",
	"btnModalDelete": "SiteSettingsForm-btnModalDelete-PJX5-",
	"radioBtn": "SiteSettingsForm-radioBtn-1fmY8",
	"btnWidth": "SiteSettingsForm-btnWidth-3kfAW",
	"bannerImageBg": "SiteSettingsForm-bannerImageBg-2s285",
	"bannerDelete": "SiteSettingsForm-bannerDelete-3LXBq",
	"modalRoot": "SiteSettingsForm-modalRoot-3OD8z",
	"modalBorderBottom": "SiteSettingsForm-modalBorderBottom-3wIH2",
	"logInModalBody": "SiteSettingsForm-logInModalBody-1sPMA",
	"exportSection": "SiteSettingsForm-exportSection-2Q12Q",
	"exportSectionGridSub": "SiteSettingsForm-exportSectionGridSub-3hrkW",
	"exportText": "SiteSettingsForm-exportText-2W5Dy",
	"exportLinkImg": "SiteSettingsForm-exportLinkImg-2YgXF",
	"vtrMiddle": "SiteSettingsForm-vtrMiddle-2Y3T2",
	"exportImg": "SiteSettingsForm-exportImg-25_OS",
	"profileViewlabel": "SiteSettingsForm-profileViewlabel-3lfxW",
	"profileViewMainContent": "SiteSettingsForm-profileViewMainContent-1KrGZ",
	"profileViewMain": "SiteSettingsForm-profileViewMain-2KwWc",
	"profileViewInner": "SiteSettingsForm-profileViewInner-aVqkJ",
	"profileImageSection": "SiteSettingsForm-profileImageSection-F6sVb",
	"lastviewInner": "SiteSettingsForm-lastviewInner-2wm1N",
	"ChangeToUpperCase": "SiteSettingsForm-ChangeToUpperCase-9sPq3",
	"noBorder": "SiteSettingsForm-noBorder-_ZLCV",
	"errorMessage": "SiteSettingsForm-errorMessage-18Wfl",
	"labelText": "SiteSettingsForm-labelText-1Imwk",
	"space1": "SiteSettingsForm-space1-2-ISM",
	"space2": "SiteSettingsForm-space2-ygk7c",
	"space3": "SiteSettingsForm-space3-3EVbd",
	"space4": "SiteSettingsForm-space4-3I-Gw",
	"space5": "SiteSettingsForm-space5-1hull",
	"space6": "SiteSettingsForm-space6-1QGK0",
	"space7": "SiteSettingsForm-space7-20has",
	"spaceTop8": "SiteSettingsForm-spaceTop8-MUgBM",
	"spaceTop1": "SiteSettingsForm-spaceTop1-2Z4L1",
	"spaceTop2": "SiteSettingsForm-spaceTop2-2IwiO",
	"spaceTop3": "SiteSettingsForm-spaceTop3-1vcRY",
	"spaceTop4": "SiteSettingsForm-spaceTop4-3hqOA",
	"spaceTop5": "SiteSettingsForm-spaceTop5-d-fT3",
	"spaceTop6": "SiteSettingsForm-spaceTop6-3Pz6g",
	"spaceTop7": "SiteSettingsForm-spaceTop7-19G6O",
	"padding1": "SiteSettingsForm-padding1-1Ll98",
	"padding2": "SiteSettingsForm-padding2-eetxu",
	"padding3": "SiteSettingsForm-padding3-29IAt",
	"padding4": "SiteSettingsForm-padding4-18CHy",
	"padding5": "SiteSettingsForm-padding5-3ftdk",
	"padding6": "SiteSettingsForm-padding6-6toW-",
	"padding7": "SiteSettingsForm-padding7-qvaoe",
	"paddingTop1": "SiteSettingsForm-paddingTop1-bpkPr",
	"paddingTop2": "SiteSettingsForm-paddingTop2-2eUDB",
	"paddingTop3": "SiteSettingsForm-paddingTop3-1nzbZ",
	"paddingTop4": "SiteSettingsForm-paddingTop4-NVxDu",
	"paddingTop5": "SiteSettingsForm-paddingTop5-3Ugsb",
	"paddingTop6": "SiteSettingsForm-paddingTop6-3CXU3",
	"paddingTop7": "SiteSettingsForm-paddingTop7-1WNR5",
	"noPadding": "SiteSettingsForm-noPadding-28NYy",
	"textBold": "SiteSettingsForm-textBold-3EKAN",
	"textBolder": "SiteSettingsForm-textBolder-3_h0N",
	"textNormal": "SiteSettingsForm-textNormal-1hcEn",
	"textDarkBlue": "SiteSettingsForm-textDarkBlue-2QQBK",
	"textLightBlue": "SiteSettingsForm-textLightBlue-13_F_",
	"textLightSandleGreen": "SiteSettingsForm-textLightSandleGreen-1fgfE",
	"textLightBrown": "SiteSettingsForm-textLightBrown-3Rw2x",
	"textMediumMaroon": "SiteSettingsForm-textMediumMaroon-2kDX_",
	"textBrown": "SiteSettingsForm-textBrown-349KA",
	"textMaroon": "SiteSettingsForm-textMaroon-25lsj",
	"textDarkBrown": "SiteSettingsForm-textDarkBrown-2Ysik",
	"textMediumBrown": "SiteSettingsForm-textMediumBrown-2gSIb",
	"textSkyBlue": "SiteSettingsForm-textSkyBlue-mk-sO",
	"textGray": "SiteSettingsForm-textGray-1iPww"
};

/***/ }),

/***/ "cbdH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.HomeUploader-space1-2L4pz {\n\tmargin-bottom: 6px !important;\n}\n.HomeUploader-space2-2Di0H {\n\tmargin-bottom: 12px !important;\n}\n.HomeUploader-space3-2y9Cu {\n\tmargin-bottom: 18px !important;\n}\n.HomeUploader-space4-2VbzO {\n\tmargin-bottom: 24px !important;\n}\n.HomeUploader-space5-RuoqD {\n\tmargin-bottom: 30px !important;\n}\n.HomeUploader-space6-1IFhd {\n\tmargin-bottom: 36px !important;\n}\n.HomeUploader-space7-2AvZ0 {\n\tmargin-bottom: 42px !important;\n}\n.HomeUploader-spaceTop8-v3_0M {\n\tmargin-bottom: 48px !important;\n}\n.HomeUploader-spaceTop1-2iN_S {\n\tmargin-top: 6px !important;\n}\n.HomeUploader-spaceTop2-rgoPG {\n\tmargin-top: 12px !important;\n}\n.HomeUploader-spaceTop3-ONfZO {\n\tmargin-top: 18px !important;\n}\n.HomeUploader-spaceTop4-REmPo {\n\tmargin-top: 24px !important;\n}\n.HomeUploader-spaceTop5-Sch_z {\n\tmargin-top: 30px !important;\n}\n.HomeUploader-spaceTop6-K6VQ6 {\n\tmargin-top: 36px !important;\n}\n.HomeUploader-spaceTop7-2nc0Y {\n\tmargin-top: 42px !important;\n}\n.HomeUploader-spaceTop8-v3_0M {\n\tmargin-top: 48px !important;\n}\n.HomeUploader-noMargin-1kt7f {\n\tmargin: 0px !important;\n}\n.HomeUploader-padding1-3XuJd {\n\tpadding-bottom: 6px !important;\n}\n.HomeUploader-padding2-L-T2d {\n\tpadding-bottom: 12px !important;\n}\n.HomeUploader-padding3-2V058 {\n\tpadding-bottom: 18px !important;\n}\n.HomeUploader-padding4-qorKo {\n\tpadding-bottom: 24px !important;\n}\n.HomeUploader-padding5-xifGU {\n\tpadding-bottom: 30px !important;\n}\n.HomeUploader-padding6-3sY6F {\n\tpadding-bottom: 36px !important;\n}\n.HomeUploader-padding7-30M0B {\n\tpadding-bottom: 42px !important;\n}\n.HomeUploader-paddingTop1-2c0-L {\n\tpadding-top: 6px !important;\n}\n.HomeUploader-paddingTop2-2ShY- {\n\tpadding-top: 12px !important;\n}\n.HomeUploader-paddingTop3-2t3MA {\n\tpadding-top: 18px !important;\n}\n.HomeUploader-paddingTop4-1FYdp {\n\tpadding-top: 24px !important;\n}\n.HomeUploader-paddingTop5-1IwWB {\n\tpadding-top: 30px !important;\n}\n.HomeUploader-paddingTop6-38Q3Y {\n\tpadding-top: 36px !important;\n}\n.HomeUploader-paddingTop7-3CVXl {\n\tpadding-top: 42px !important;\n}\n.HomeUploader-noPadding-1T_8k {\n\tpadding: 0px !important;\n}\n.HomeUploader-textBold-RralS {\n\tfont-weight: 500 !important;\n}\n.HomeUploader-textBolder-MNiM4 {\n\tfont-weight: 700 !important;\n}\n.HomeUploader-textNormal-CzIPn {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.HomeUploader-textDarkBlue-1rEG1 {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.HomeUploader-textLightBlue-1KKoT {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.HomeUploader-textLightSandleGreen-3QTk0 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.HomeUploader-textLightBrown-1bbcO {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.HomeUploader-textMediumMaroon-PM-Wf {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.HomeUploader-textBrown-W0aGF {\n\tcolor: #B5DC4B !important;\n}\n.HomeUploader-textMaroon-1ge2W {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.HomeUploader-textDarkBrown-1bT2t {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.HomeUploader-textMediumBrown-2wd3w {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.HomeUploader-textSkyBlue-2VJFr {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.HomeUploader-textGray-COu67 {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/HomeUploader/HomeUploader.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"HomeUploader.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "HomeUploader-space1-2L4pz",
	"space2": "HomeUploader-space2-2Di0H",
	"space3": "HomeUploader-space3-2y9Cu",
	"space4": "HomeUploader-space4-2VbzO",
	"space5": "HomeUploader-space5-RuoqD",
	"space6": "HomeUploader-space6-1IFhd",
	"space7": "HomeUploader-space7-2AvZ0",
	"spaceTop8": "HomeUploader-spaceTop8-v3_0M",
	"spaceTop1": "HomeUploader-spaceTop1-2iN_S",
	"spaceTop2": "HomeUploader-spaceTop2-rgoPG",
	"spaceTop3": "HomeUploader-spaceTop3-ONfZO",
	"spaceTop4": "HomeUploader-spaceTop4-REmPo",
	"spaceTop5": "HomeUploader-spaceTop5-Sch_z",
	"spaceTop6": "HomeUploader-spaceTop6-K6VQ6",
	"spaceTop7": "HomeUploader-spaceTop7-2nc0Y",
	"noMargin": "HomeUploader-noMargin-1kt7f",
	"padding1": "HomeUploader-padding1-3XuJd",
	"padding2": "HomeUploader-padding2-L-T2d",
	"padding3": "HomeUploader-padding3-2V058",
	"padding4": "HomeUploader-padding4-qorKo",
	"padding5": "HomeUploader-padding5-xifGU",
	"padding6": "HomeUploader-padding6-3sY6F",
	"padding7": "HomeUploader-padding7-30M0B",
	"paddingTop1": "HomeUploader-paddingTop1-2c0-L",
	"paddingTop2": "HomeUploader-paddingTop2-2ShY-",
	"paddingTop3": "HomeUploader-paddingTop3-2t3MA",
	"paddingTop4": "HomeUploader-paddingTop4-1FYdp",
	"paddingTop5": "HomeUploader-paddingTop5-1IwWB",
	"paddingTop6": "HomeUploader-paddingTop6-38Q3Y",
	"paddingTop7": "HomeUploader-paddingTop7-3CVXl",
	"noPadding": "HomeUploader-noPadding-1T_8k",
	"textBold": "HomeUploader-textBold-RralS",
	"textBolder": "HomeUploader-textBolder-MNiM4",
	"textNormal": "HomeUploader-textNormal-CzIPn",
	"textDarkBlue": "HomeUploader-textDarkBlue-1rEG1",
	"textLightBlue": "HomeUploader-textLightBlue-1KKoT",
	"textLightSandleGreen": "HomeUploader-textLightSandleGreen-3QTk0",
	"textLightBrown": "HomeUploader-textLightBrown-1bbcO",
	"textMediumMaroon": "HomeUploader-textMediumMaroon-PM-Wf",
	"textBrown": "HomeUploader-textBrown-W0aGF",
	"textMaroon": "HomeUploader-textMaroon-1ge2W",
	"textDarkBrown": "HomeUploader-textDarkBrown-1bT2t",
	"textMediumBrown": "HomeUploader-textMediumBrown-2wd3w",
	"textSkyBlue": "HomeUploader-textSkyBlue-2VJFr",
	"textGray": "HomeUploader-textGray-COu67"
};

/***/ }),

/***/ "e8ND":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ }),

/***/ "iwgK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoaderStart", function() { return setLoaderStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoaderComplete", function() { return setLoaderComplete; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WlAH");

function setLoaderStart(name) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_LOADER_START"],
    payload: {
      name: name,
      status: true
    }
  };
}
function setLoaderComplete(name) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_LOADER_COMPLETE"],
    payload: {
      name: name,
      status: false
    }
  };
}

/***/ }),

/***/ "mCUk":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("6zm1");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "n/9m":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/siteSettings/SiteSettings.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"SiteSettings.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "nMqt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "oUBw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRPe");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/MKj");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wQmL");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1EOP");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_loader_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("iwgK");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wa3/");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Q7QM");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/FavIconUploader/DropZone.js";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // React redux

 // Redux form



 // Redux actions






var Dropzone = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props);
    _this.error = _this.error.bind(_assertThisInitialized(_this));
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.addedfile = _this.addedfile.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(Dropzone, [{
    key: "success",
    value: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fromServer) {
        var _this$props, setLoaderComplete, updateFaviconLogo, oldFaviconLogo;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, setLoaderComplete = _this$props.setLoaderComplete, updateFaviconLogo = _this$props.updateFaviconLogo, oldFaviconLogo = _this$props.oldFaviconLogo;
                _context.next = 3;
                return updateFaviconLogo('Favicon Logo', 'faviconLogo', fromServer.file.filename, oldFaviconLogo);

              case 3:
                _context.next = 5;
                return setLoaderComplete('favIconLoader');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x, _x2) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }, {
    key: "error",
    value: function () {
      var _error = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(file, message) {
        var setLoaderComplete;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setLoaderComplete = this.props.setLoaderComplete;
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error('Error!', message);
                _context2.next = 4;
                return setLoaderComplete('favIconLoader');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function error(_x3, _x4) {
        return _error.apply(this, arguments);
      }

      return error;
    }()
  }, {
    key: "addedfile",
    value: function addedfile(file, fromServer) {
      var setLoaderStart = this.props.setLoaderStart;

      if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_12__["maxUploadSize"]) {
        this.dropzone.removeFile(file);
      } else {
        setLoaderStart('favIconLoader');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formatMessage = this.props.intl.formatMessage;
      var djsConfig = {
        dictDefaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].clickHeretoUploadFavIcon),
        addRemoveLinks: false,
        uploadMultiple: false,
        maxFilesize: 10,
        acceptedFiles: 'image/png',
        dictMaxFilesExceeded: 'Remove the existing image and try upload again',
        previewsContainer: false
      };
      var componentConfig = {
        iconFiletypes: ['.png'],
        postUrl: '/uploadFavIcon'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this2.dropzone = dz;
        },
        success: this.success,
        addedfile: this.addedfile,
        error: this.error
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        clickable: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Dropzone, "propTypes", {
  startLogoUploaderLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(Dropzone, "defaultProps", {
  data: null
});

var mapState = function mapState(state) {
  return {
    change: redux_form__WEBPACK_IMPORTED_MODULE_6__["change"]
  };
};

var mapDispatch = {
  setLoaderStart: _actions_loader_loader__WEBPACK_IMPORTED_MODULE_9__["setLoaderStart"],
  setLoaderComplete: _actions_loader_loader__WEBPACK_IMPORTED_MODULE_9__["setLoaderComplete"],
  updateFaviconLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_10__["updateFaviconLogo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_8___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "qdFD":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("nMqt");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "shnT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UJG8");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wa3/");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wQmL");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Q7QM");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/Uploader/DropZone.js";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Translation





var Dropzone = /*#__PURE__*/function (_Component) {
  _inherits(Dropzone, _Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props);
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.addedfile = _this.addedfile.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(Dropzone, [{
    key: "success",
    value: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fromServer) {
        var _this$props, doUploadLogo, data, change, fileName, oldPicture, filePath;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, doUploadLogo = _this$props.doUploadLogo, data = _this$props.data, change = _this$props.change;
                fileName = fromServer.file.filename;
                oldPicture = data != null ? data.value : null;
                filePath = fromServer.file.path;
                doUploadLogo(fileName, filePath, oldPicture);
                _context.next = 7;
                return change('SiteSettingsForm', 'Logo', fileName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x, _x2) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }, {
    key: "addedfile",
    value: function addedfile(file, fromServer) {
      var _this2 = this;

      var startLogoUploaderLoader = this.props.startLogoUploaderLoader;
      var fileFormates = ['image/svg+xml', 'application/sql', 'application/pdf', 'application/vnd.oasis.opendocument.presentation', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/epub+zip', 'application/zip', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.oasis.opendocument.spreadsheet', 'text/tab-separated-values', 'text/calendar', 'application/json'];

      if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_11__["maxUploadSize"]) {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
        this.dropzone.removeFile(file);
      } else if (fileFormates.indexOf(file && file.type) > 0) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
      } else if (file && file.accepted === false) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_2__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
      } else {
        startLogoUploaderLoader();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var formatMessage = this.props.intl.formatMessage;
      var djsConfig = {
        dictDefaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_10__["default"].clickHeretoUploadLogo),
        addRemoveLinks: false,
        uploadMultiple: false,
        maxFilesize: 10,
        acceptedFiles: 'image/jpeg,image/png',
        dictMaxFilesExceeded: 'Remove the existing image and try upload again',
        previewsContainer: false
      };
      var componentConfig = {
        iconFiletypes: ['.jpg', '.png'],
        postUrl: '/uploadLogo'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this3.dropzone = dz;
        },
        success: this.success,
        addedfile: this.addedfile
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Dropzone, "propTypes", {
  doUploadLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  doRemoveLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  startLogoUploaderLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(Dropzone, "defaultProps", {
  data: null
});

var mapState = function mapState(state) {
  return {
    change: redux_form__WEBPACK_IMPORTED_MODULE_8__["change"]
  };
};

var mapDispatch = {
  doUploadLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_7__["doUploadLogo"],
  doRemoveLogo: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_7__["doRemoveLogo"],
  startLogoUploaderLoader: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_7__["startLogoUploaderLoader"],
  stopLogoUploaderLoader: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_7__["stopLogoUploaderLoader"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_5___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "u8Ei":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("n/9m");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "vPCN":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("V6eD");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "wDuj":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.Uploader-space1-1oY9j {\n\tmargin-bottom: 6px !important;\n}\n.Uploader-space2-8HofB {\n\tmargin-bottom: 12px !important;\n}\n.Uploader-space3-31DOY {\n\tmargin-bottom: 18px !important;\n}\n.Uploader-space4-2uFeW {\n\tmargin-bottom: 24px !important;\n}\n.Uploader-space5-1aePz {\n\tmargin-bottom: 30px !important;\n}\n.Uploader-space6-27TrX {\n\tmargin-bottom: 36px !important;\n}\n.Uploader-space7-2vT46 {\n\tmargin-bottom: 42px !important;\n}\n.Uploader-spaceTop8-3xk53 {\n\tmargin-bottom: 48px !important;\n}\n.Uploader-spaceTop1-2TrdC {\n\tmargin-top: 6px !important;\n}\n.Uploader-spaceTop2-3OJWY {\n\tmargin-top: 12px !important;\n}\n.Uploader-spaceTop3-3IINs {\n\tmargin-top: 18px !important;\n}\n.Uploader-spaceTop4-3GEQj {\n\tmargin-top: 24px !important;\n}\n.Uploader-spaceTop5-P4LSM {\n\tmargin-top: 30px !important;\n}\n.Uploader-spaceTop6-2NvLI {\n\tmargin-top: 36px !important;\n}\n.Uploader-spaceTop7-3ri-S {\n\tmargin-top: 42px !important;\n}\n.Uploader-spaceTop8-3xk53 {\n\tmargin-top: 48px !important;\n}\n.Uploader-noMargin-2wT_Y {\n\tmargin: 0px !important;\n}\n.Uploader-padding1-30f1s {\n\tpadding-bottom: 6px !important;\n}\n.Uploader-padding2-3MFlj {\n\tpadding-bottom: 12px !important;\n}\n.Uploader-padding3-3QuF_ {\n\tpadding-bottom: 18px !important;\n}\n.Uploader-padding4-3tZR2 {\n\tpadding-bottom: 24px !important;\n}\n.Uploader-padding5-2B4Wx {\n\tpadding-bottom: 30px !important;\n}\n.Uploader-padding6-3hY4I {\n\tpadding-bottom: 36px !important;\n}\n.Uploader-padding7-3kLkv {\n\tpadding-bottom: 42px !important;\n}\n.Uploader-paddingTop1-2UPn5 {\n\tpadding-top: 6px !important;\n}\n.Uploader-paddingTop2-b4J2f {\n\tpadding-top: 12px !important;\n}\n.Uploader-paddingTop3-2Z7KN {\n\tpadding-top: 18px !important;\n}\n.Uploader-paddingTop4-1nAsQ {\n\tpadding-top: 24px !important;\n}\n.Uploader-paddingTop5-1YLnD {\n\tpadding-top: 30px !important;\n}\n.Uploader-paddingTop6-3jP0S {\n\tpadding-top: 36px !important;\n}\n.Uploader-paddingTop7-2ngh2 {\n\tpadding-top: 42px !important;\n}\n.Uploader-noPadding-2QYWq {\n\tpadding: 0px !important;\n}\n.Uploader-textBold-1wuSi {\n\tfont-weight: 500 !important;\n}\n.Uploader-textBolder-3ChAO {\n\tfont-weight: 700 !important;\n}\n.Uploader-textNormal-3Jfx2 {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.Uploader-textDarkBlue-3T0FU {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.Uploader-textLightBlue-3PA7T {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.Uploader-textLightSandleGreen-1vWV3 {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.Uploader-textLightBrown-WTtEe {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.Uploader-textMediumMaroon-HpKfo {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.Uploader-textBrown-2WscW {\n\tcolor: #B5DC4B !important;\n}\n.Uploader-textMaroon-jGIWr {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.Uploader-textDarkBrown-2t6n- {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.Uploader-textMediumBrown-1hsrp {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.Uploader-textSkyBlue-21_1- {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.Uploader-textGray-jSfis {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/Uploader/Uploader.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"Uploader.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "Uploader-space1-1oY9j",
	"space2": "Uploader-space2-8HofB",
	"space3": "Uploader-space3-31DOY",
	"space4": "Uploader-space4-2uFeW",
	"space5": "Uploader-space5-1aePz",
	"space6": "Uploader-space6-27TrX",
	"space7": "Uploader-space7-2vT46",
	"spaceTop8": "Uploader-spaceTop8-3xk53",
	"spaceTop1": "Uploader-spaceTop1-2TrdC",
	"spaceTop2": "Uploader-spaceTop2-3OJWY",
	"spaceTop3": "Uploader-spaceTop3-3IINs",
	"spaceTop4": "Uploader-spaceTop4-3GEQj",
	"spaceTop5": "Uploader-spaceTop5-P4LSM",
	"spaceTop6": "Uploader-spaceTop6-2NvLI",
	"spaceTop7": "Uploader-spaceTop7-3ri-S",
	"noMargin": "Uploader-noMargin-2wT_Y",
	"padding1": "Uploader-padding1-30f1s",
	"padding2": "Uploader-padding2-3MFlj",
	"padding3": "Uploader-padding3-3QuF_",
	"padding4": "Uploader-padding4-3tZR2",
	"padding5": "Uploader-padding5-2B4Wx",
	"padding6": "Uploader-padding6-3hY4I",
	"padding7": "Uploader-padding7-3kLkv",
	"paddingTop1": "Uploader-paddingTop1-2UPn5",
	"paddingTop2": "Uploader-paddingTop2-b4J2f",
	"paddingTop3": "Uploader-paddingTop3-2Z7KN",
	"paddingTop4": "Uploader-paddingTop4-1nAsQ",
	"paddingTop5": "Uploader-paddingTop5-1YLnD",
	"paddingTop6": "Uploader-paddingTop6-3jP0S",
	"paddingTop7": "Uploader-paddingTop7-2ngh2",
	"noPadding": "Uploader-noPadding-2QYWq",
	"textBold": "Uploader-textBold-1wuSi",
	"textBolder": "Uploader-textBolder-3ChAO",
	"textNormal": "Uploader-textNormal-3Jfx2",
	"textDarkBlue": "Uploader-textDarkBlue-3T0FU",
	"textLightBlue": "Uploader-textLightBlue-3PA7T",
	"textLightSandleGreen": "Uploader-textLightSandleGreen-1vWV3",
	"textLightBrown": "Uploader-textLightBrown-WTtEe",
	"textMediumMaroon": "Uploader-textMediumMaroon-HpKfo",
	"textBrown": "Uploader-textBrown-2WscW",
	"textMaroon": "Uploader-textMaroon-jGIWr",
	"textDarkBrown": "Uploader-textDarkBrown-2t6n-",
	"textMediumBrown": "Uploader-textMediumBrown-1hsrp",
	"textSkyBlue": "Uploader-textSkyBlue-21_1-",
	"textGray": "Uploader-textGray-jSfis"
};

/***/ }),

/***/ "wa3/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLogoUploaderLoader", function() { return startLogoUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLogoUploaderLoader", function() { return stopLogoUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadLogo", function() { return doUploadLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveLogo", function() { return doRemoveLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHomeLogoUploaderLoader", function() { return startHomeLogoUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHomeLogoUploaderLoader", function() { return stopHomeLogoUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadHomeLogo", function() { return doUploadHomeLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveHomeLogo", function() { return doRemoveHomeLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startEmailLogoUploaderLoader", function() { return startEmailLogoUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopEmailLogoUploaderLoader", function() { return stopEmailLogoUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadEmailLogo", function() { return doUploadEmailLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveEmailLogo", function() { return doRemoveEmailLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFaviconLogo", function() { return removeFaviconLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFaviconLogo", function() { return updateFaviconLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFavIcon", function() { return deleteFavIcon; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wQmL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y0DV");
/* harmony import */ var _siteSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zkjT");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 // Helpers



var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query getLogo{\n    getLogo {\n      id\n      title\n      name\n      value\n      type\n    }\n  }\n"])));
var HomeQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query getHomeLogo{\n    getHomeLogo {\n      id\n      title\n      name\n      value\n      type\n    }\n  }\n"])));
var emailLogoQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  query getEmailLogo{\n    getEmailLogo {\n      id\n      title\n      name\n      value\n      type\n    }\n  }\n"])));
var faviconLogoQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  query getSiteSettingsLogo($title: String!, $name: String!) {\n    getSiteSettingsLogo(title:$title, name: $name) {\n        status\n        errorMessage\n        title\n        name\n        value\n    }\n  }\n"])));
var faviconLogoMutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  mutation updateSiteSettingsLogo($title: String!, $name: String!, $value: String!) {\n    updateSiteSettingsLogo(title:$title, name: $name, value: $value) {\n        status\n        errorMessage\n    }\n  }\n"])));
function startLogoUploaderLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOGO_UPLOAD_LOADER_START"],
      payload: {
        logoUploaderLoading: true
      }
    });
  };
}
function stopLogoUploaderLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOGO_UPLOAD_LOADER_START"],
      payload: {
        logoUploaderLoading: false
      }
    });
  };
}
function doUploadLogo(fileName, filePath, oldPicture) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOGO_UPLOAD_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          mutation uploadLogo($fileName: String, $filePath: String) {\n            uploadLogo (fileName:$fileName, filePath: $filePath) {\n              status\n            }\n          }\n        "]))); // Send Request to create a record for logo

              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  fileName: fileName,
                  filePath: filePath
                },
                refetchQueries: [{
                  query: query
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!data) {
                _context.next = 14;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOGO_UPLOAD_SUCCESS"],
                payload: {
                  logoUploaderLoading: false
                }
              });
              dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());

              if (!(oldPicture != null)) {
                _context.next = 14;
                break;
              }

              _context.next = 14;
              return removeLogoFile(oldPicture);

            case 14:
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOGO_UPLOAD_ERROR"],
                payload: {
                  error: _context.t0,
                  logoUploaderLoading: false
                }
              });
              return _context.abrupt("return", false);

            case 20:
              return _context.abrupt("return", true);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 16]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveLogo(fileName) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref5) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOGO_START"]
              });
              dispatch(startLogoUploaderLoader());
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('SiteSettingsForm', 'Logo', null));
              _context2.prev = 4;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        mutation removeLogo{\n          removeLogo{\n            status\n          }\n        }\n      "]))); // Send Request to create a record for logo

              _context2.next = 8;
              return client.mutate({
                mutation: mutation,
                refetchQueries: [{
                  query: query
                }]
              });

            case 8:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!data) {
                _context2.next = 15;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOGO_SUCCESS"],
                payload: {
                  logoUploaderLoading: false
                }
              });
              dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());
              _context2.next = 15;
              return removeLogoFile(fileName);

            case 15:
              _context2.next = 21;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](4);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOGO_ERROR"],
                payload: {
                  error: _context2.t0,
                  logoUploaderLoading: false
                }
              });
              return _context2.abrupt("return", false);

            case 21:
              return _context2.abrupt("return", true);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 17]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}

function removeLogoFile(_x7) {
  return _removeLogoFile.apply(this, arguments);
}

function _removeLogoFile() {
  _removeLogoFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(fileName) {
    var resp, _yield$resp$json2, status;

    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])('/removeLogoFile', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                fileName: fileName
              }),
              credentials: 'include'
            });

          case 3:
            resp = _context10.sent;
            _context10.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json2 = _context10.sent;
            status = _yield$resp$json2.status;

            if (status) {
              console.log('status from remove logo file', status);
            }

            _context10.next = 15;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](0);
            console.log('error from remove file', _context10.t0);
            return _context10.abrupt("return", false);

          case 15:
            return _context10.abrupt("return", true);

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return _removeLogoFile.apply(this, arguments);
}

function removeEmailLogoFile(_x8) {
  return _removeEmailLogoFile.apply(this, arguments);
}

function _removeEmailLogoFile() {
  _removeEmailLogoFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(fileName) {
    var resp, _yield$resp$json3, status;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])('/removeEmailLogo', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                fileName: fileName
              }),
              credentials: 'include'
            });

          case 3:
            resp = _context11.sent;
            _context11.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json3 = _context11.sent;
            status = _yield$resp$json3.status;

            if (status) {
              console.log('status from remove logo file', status);
            }

            _context11.next = 15;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](0);
            console.log('error from remove file', _context11.t0);
            return _context11.abrupt("return", false);

          case 15:
            return _context11.abrupt("return", true);

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 11]]);
  }));
  return _removeEmailLogoFile.apply(this, arguments);
}

function startHomeLogoUploaderLoader() {
  return function (dispatch, getState, _ref7) {
    var client = _ref7.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["HOME_LOGO_UPLOAD_LOADER_START"],
      payload: {
        homeLogoUploaderLoading: true
      }
    });
  };
}
function stopHomeLogoUploaderLoader() {
  return function (dispatch, getState, _ref8) {
    var client = _ref8.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["HOME_LOGO_UPLOAD_LOADER_START"],
      payload: {
        homeLogoUploaderLoading: false
      }
    });
  };
}
function doUploadHomeLogo(fileName, filePath, oldPicture) {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch, getState, _ref9) {
      var client, mutation, _yield$client$mutate3, data;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              client = _ref9.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["HOME_LOGO_UPLOAD_START"]
              });
              _context3.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          mutation uploadHomeLogo($fileName: String, $filePath: String) {\n            uploadHomeLogo (fileName:$fileName, filePath: $filePath) {\n              status\n            }\n          }\n        "]))); // Send Request to create a record for logo

              _context3.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  fileName: fileName,
                  filePath: filePath
                },
                refetchQueries: [{
                  query: HomeQuery
                }]
              });

            case 6:
              _yield$client$mutate3 = _context3.sent;
              data = _yield$client$mutate3.data;

              if (!data) {
                _context3.next = 14;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["HOME_LOGO_UPLOAD_SUCCESS"],
                payload: {
                  homeLogoUploaderLoading: false
                }
              });
              dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());

              if (!(oldPicture != null)) {
                _context3.next = 14;
                break;
              }

              _context3.next = 14;
              return removeLogoFile(oldPicture);

            case 14:
              _context3.next = 20;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["HOME_LOGO_UPLOAD_ERROR"],
                payload: {
                  error: _context3.t0,
                  homeLogoUploaderLoading: false
                }
              });
              return _context3.abrupt("return", false);

            case 20:
              return _context3.abrupt("return", true);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 16]]);
    }));

    return function (_x9, _x10, _x11) {
      return _ref10.apply(this, arguments);
    };
  }();
}
function doRemoveHomeLogo(fileName) {
  return /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch, getState, _ref11) {
      var client, mutation, _yield$client$mutate4, data;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              client = _ref11.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_HOME_LOGO_START"]
              });
              dispatch(startHomeLogoUploaderLoader());
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('SiteSettingsForm', 'homeLogo', null));
              _context4.prev = 4;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        mutation removeHomeLogo{\n          removeHomeLogo{\n            status\n          }\n        }\n      "]))); // Send Request to create a record for logo

              _context4.next = 8;
              return client.mutate({
                mutation: mutation,
                refetchQueries: [{
                  query: HomeQuery
                }]
              });

            case 8:
              _yield$client$mutate4 = _context4.sent;
              data = _yield$client$mutate4.data;

              if (!data) {
                _context4.next = 15;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_HOME_LOGO_SUCCESS"],
                payload: {
                  homeLogoUploaderLoading: false
                }
              });
              dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());
              _context4.next = 15;
              return removeLogoFile(fileName);

            case 15:
              _context4.next = 21;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](4);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_HOME_LOGO_ERROR"],
                payload: {
                  error: _context4.t0,
                  homeLogoUploaderLoading: false
                }
              });
              return _context4.abrupt("return", false);

            case 21:
              return _context4.abrupt("return", true);

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 17]]);
    }));

    return function (_x12, _x13, _x14) {
      return _ref12.apply(this, arguments);
    };
  }();
}
function startEmailLogoUploaderLoader() {
  return function (dispatch, getState, _ref13) {
    var client = _ref13.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["EMAIL_LOGO_UPLOAD_LOADER_START"],
      payload: {
        emailLogoUploaderLoading: true
      }
    });
  };
}
function stopEmailLogoUploaderLoader() {
  return function (dispatch, getState, _ref14) {
    var client = _ref14.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["EMAIL_LOGO_UPLOAD_LOADER_START"],
      payload: {
        emailLogoUploaderLoading: false
      }
    });
  };
}
function doUploadEmailLogo(fileName, filePath, oldPicture) {
  return /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch, getState, _ref15) {
      var client, mutation, _yield$client$mutate5, data;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              client = _ref15.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["EMAIL_LOGO_UPLOAD_START"]
              });
              _context5.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          mutation uploadEmailLogo($fileName: String, $filePath: String) {\n            uploadEmailLogo (fileName:$fileName, filePath: $filePath) {\n              status\n            }\n          }\n        "]))); // Send Request to create a record for logo

              _context5.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  fileName: fileName,
                  filePath: filePath
                },
                refetchQueries: [{
                  query: emailLogoQuery
                }]
              });

            case 6:
              _yield$client$mutate5 = _context5.sent;
              data = _yield$client$mutate5.data;

              if (!data) {
                _context5.next = 14;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["EMAIL_LOGO_UPLOAD_SUCCESS"],
                payload: {
                  emailLogoUploaderLoading: false
                }
              });
              dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());

              if (!(oldPicture != null)) {
                _context5.next = 14;
                break;
              }

              _context5.next = 14;
              return removeLogoFile(oldPicture);

            case 14:
              _context5.next = 20;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["EMAIL_LOGO_UPLOAD_ERROR"],
                payload: {
                  error: _context5.t0,
                  emailLogoUploaderLoading: false
                }
              });
              return _context5.abrupt("return", false);

            case 20:
              return _context5.abrupt("return", true);

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 16]]);
    }));

    return function (_x15, _x16, _x17) {
      return _ref16.apply(this, arguments);
    };
  }();
}
function doRemoveEmailLogo(fileName) {
  return /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(dispatch, getState, _ref17) {
      var client, mutation, _yield$client$mutate6, data;

      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              client = _ref17.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EMAIL_LOGO_START"]
              });
              dispatch(startEmailLogoUploaderLoader());
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('SiteSettingsForm', 'emailLogo', null));
              _context6.prev = 4;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        mutation removeEmailLogo{\n          removeEmailLogo{\n            status\n          }\n        }\n      "]))); // Send Request to create a record for logo

              _context6.next = 8;
              return client.mutate({
                mutation: mutation,
                refetchQueries: [{
                  query: emailLogoQuery
                }]
              });

            case 8:
              _yield$client$mutate6 = _context6.sent;
              data = _yield$client$mutate6.data;

              if (!data) {
                _context6.next = 16;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EMAIL_LOGO_SUCCESS"],
                payload: {
                  emailLogoUploaderLoading: false
                }
              });
              _context6.next = 14;
              return dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());

            case 14:
              _context6.next = 16;
              return removeEmailLogoFile(fileName);

            case 16:
              _context6.next = 22;
              break;

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](4);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EMAIL_LOGO_ERROR"],
                payload: {
                  error: _context6.t0,
                  emailLogoUploaderLoading: false
                }
              });
              return _context6.abrupt("return", false);

            case 22:
              return _context6.abrupt("return", true);

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[4, 18]]);
    }));

    return function (_x18, _x19, _x20) {
      return _ref18.apply(this, arguments);
    };
  }();
}
var removeFaviconLogo = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(fileName) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])('/removeFaviconLogoFile', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                file: fileName
              }),
              credentials: 'include'
            });

          case 3:
            resp = _context7.sent;
            _context7.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json = _context7.sent;
            status = _yield$resp$json.status;

            if (status) {
              console.log('status from remove favicon file', status);
            }

            _context7.next = 14;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](0);
            console.log('error from remove favicon file', _context7.t0);

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 11]]);
  }));

  return function removeFaviconLogo(_x21) {
    return _ref19.apply(this, arguments);
  };
}();
var updateFaviconLogo = function updateFaviconLogo(title, name, value, oldValue) {
  return /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(dispatch, getState, _ref20) {
      var client, _yield$client$mutate7, data;

      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              client = _ref20.client;
              _context8.prev = 1;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVICON_LOGO_START"]
              });
              _context8.next = 5;
              return client.mutate({
                mutation: faviconLogoMutation,
                variables: {
                  title: title,
                  name: name,
                  value: value
                },
                refetchQueries: [{
                  query: faviconLogoQuery,
                  variables: {
                    title: title,
                    name: name
                  }
                }]
              });

            case 5:
              _yield$client$mutate7 = _context8.sent;
              data = _yield$client$mutate7.data;
              _context8.next = 9;
              return removeFaviconLogo(oldValue);

            case 9:
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('SiteSettingsForm', 'faviconLogo', value));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVICON_LOGO_SUCCESS"]
              });
              _context8.next = 17;
              break;

            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](1);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVICON_LOGO_ERROR"]
              });
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('SiteSettingsForm', 'faviconLogo', null));

            case 17:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[1, 13]]);
    }));

    return function (_x22, _x23, _x24) {
      return _ref21.apply(this, arguments);
    };
  }();
};
function deleteFavIcon(title, name, fileName) {
  return /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(dispatch, getState, _ref22) {
      var client, mutation, _yield$client$mutate8, data;

      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              client = _ref22.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVICON_LOGO_START"],
                payload: {
                  favIconLoader: true
                }
              });
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('SiteSettingsForm', 'faviconLogo', null));
              _context9.prev = 3;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          mutation removeFavIconLogo{\n            removeFavIconLogo{\n              status\n            }\n          }\n        "]))); // Send Request to create a record for logo

              _context9.next = 7;
              return client.mutate({
                mutation: mutation,
                refetchQueries: [{
                  query: faviconLogoQuery,
                  variables: {
                    title: title,
                    name: name
                  }
                }]
              });

            case 7:
              _yield$client$mutate8 = _context9.sent;
              data = _yield$client$mutate8.data;

              if (!data) {
                _context9.next = 15;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVICON_LOGO_SUCCESS"],
                payload: {
                  favIconLoader: true
                }
              });
              _context9.next = 13;
              return dispatch(Object(_siteSettings__WEBPACK_IMPORTED_MODULE_4__["setSiteSettings"])());

            case 13:
              _context9.next = 15;
              return removeFaviconLogo(fileName);

            case 15:
              _context9.next = 21;
              break;

            case 17:
              _context9.prev = 17;
              _context9.t0 = _context9["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAVICON_LOGO_ERROR"],
                payload: {
                  favIconLoader: true
                }
              });
              return _context9.abrupt("return", false);

            case 21:
              return _context9.abrupt("return", true);

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[3, 17]]);
    }));

    return function (_x25, _x26, _x27) {
      return _ref23.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "yVTo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRPe");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MKj");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mCUk");
/* harmony import */ var _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("TXYE");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("e8ND");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("oUBw");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3dzz");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Q7QM");
/* harmony import */ var _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("wa3/");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/SiteSettingsForm/FavIconUploader/FavIconUploader.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // React Redux








 // Internal Component


 // Locale




var FavIconUploader = /*#__PURE__*/function (_React$Component) {
  _inherits(FavIconUploader, _React$Component);

  var _super = _createSuper(FavIconUploader);

  function FavIconUploader() {
    _classCallCheck(this, FavIconUploader);

    return _super.apply(this, arguments);
  }

  _createClass(FavIconUploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          favIconLoader = _this$props.favIconLoader,
          _this$props$data = _this$props.data,
          loading = _this$props$data.loading,
          _this$props$data$getS = _this$props$data.getSiteSettingsLogo,
          getSiteSettingsLogo = _this$props$data$getS === void 0 ? {} : _this$props$data$getS,
          faviconLogo = _this$props.faviconLogo,
          deleteFavIcon = _this$props.deleteFavIcon;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.textAlignCenter, _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.positionRelative),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader_Loader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        show: favIconLoader,
        type: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }, !loading && getSiteSettingsLogo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.picContainerMain,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.picContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.profilePic,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // timestamp usage for refresh the image when upload new image
        style: {
          backgroundImage: "url(/".concat(getSiteSettingsLogo.value, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 41
        }
      })))), !loading && getSiteSettingsLogo && !getSiteSettingsLogo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 73
        }
      }), !loading && getSiteSettingsLogo === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_11___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 52
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.pngFontSize,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].pngOnlyLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 50
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.space2, _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.spaceTop2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.fullWidth, _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.button, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a.btnPrimary, _FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a.noPadding, 'photoUploadBtn'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_12__["default"], {
        oldFaviconLogo: getSiteSettingsLogo && getSiteSettingsLogo.value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return FavIconUploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(FavIconUploader, "propTypes", {
  favIconLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

_defineProperty(FavIconUploader, "defaultProps", {
  favIconLoader: false
});

var mapState = function mapState(state) {
  return {
    favIconLoader: state.loader.favIconLoader
  };
};

var mapDispatch = {
  deleteFavIcon: _actions_siteadmin_manageLogo__WEBPACK_IMPORTED_MODULE_15__["deleteFavIcon"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_FavIconUploader_css__WEBPACK_IMPORTED_MODULE_8___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_9___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        query getSiteSettingsLogo($title: String!, $name: String!) {\n            getSiteSettingsLogo(title:$title, name: $name) {\n                status\n                errorMessage\n                title\n                name\n                value\n            }\n        }\n    "]))), {
  options: {
    ssr: true,
    variables: {
      title: 'Favicon Logo',
      name: 'faviconLogo'
    }
  }
}))(FavIconUploader));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZWFkbWluLXNpdGVTZXR0aW5ncy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL0hvbWVVcGxvYWRlci9Ib21lVXBsb2FkZXIuY3NzP2E3MTYiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9TaXRlU2V0dGluZ3NGb3JtLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vc3VibWl0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vRW1haWxMb2dvVXBsb2FkZXIvZmlsZXBpY2tlci5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9Ib21lVXBsb2FkZXIvRHJvcFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vRmF2SWNvblVwbG9hZGVyL2ZpbGVwaWNrZXIuY3NzPzdmMzYiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9GYXZJY29uVXBsb2FkZXIvZmlsZXBpY2tlci5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9zaXRlU2V0dGluZ3MvaW5kZXguanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9FbWFpbExvZ29VcGxvYWRlci9Ecm9wWm9uZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3NpdGVTZXR0aW5ncy9TaXRlU2V0dGluZ3MuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9GYXZJY29uVXBsb2FkZXIvRmF2SWNvblVwbG9hZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9FbWFpbExvZ29VcGxvYWRlci9FbWFpbExvZ29VcGxvYWRlci5jc3M/ZTIxZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9FbWFpbExvZ29VcGxvYWRlci9maWxlcGlja2VyLmNzcz8zZGE1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL1VwbG9hZGVyL1VwbG9hZGVyLmNzcz8wMmFjIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vdmFsaWRhdGUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9FbWFpbExvZ29VcGxvYWRlci9FbWFpbExvZ29VcGxvYWRlci5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9FbWFpbExvZ29VcGxvYWRlci9FbWFpbExvZ29VcGxvYWRlci5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9TaXRlSW1hZ2VzL2RlZmF1bHRQaWMucG5nIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vSG9tZVVwbG9hZGVyL0hvbWVVcGxvYWRlci5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL1VwbG9hZGVyL2ZpbGVwaWNrZXIuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZGx0LnBuZyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL1VwbG9hZGVyL1VwbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL1VwbG9hZGVyL2ZpbGVwaWNrZXIuY3NzP2M5ZDEiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9TaXRlU2V0dGluZ3NGb3JtLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL0hvbWVVcGxvYWRlci9Ib21lVXBsb2FkZXIuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2ZyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vRmF2SWNvblVwbG9hZGVyL0Zhdkljb25VcGxvYWRlci5jc3M/ODZlYiIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3NpdGVTZXR0aW5ncy9TaXRlU2V0dGluZ3MuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vSG9tZVVwbG9hZGVyL2ZpbGVwaWNrZXIuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vRmF2SWNvblVwbG9hZGVyL0Ryb3Bab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TaXRlU2V0dGluZ3NGb3JtL0hvbWVVcGxvYWRlci9maWxlcGlja2VyLmNzcz83NzkwIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vVXBsb2FkZXIvRHJvcFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaXRlYWRtaW4vc2l0ZVNldHRpbmdzL1NpdGVTZXR0aW5ncy5jc3M/MTA1MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9TaXRlU2V0dGluZ3NGb3JtLmNzcz9iNGY5IiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vVXBsb2FkZXIvVXBsb2FkZXIuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUxvZ28uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9GYXZJY29uVXBsb2FkZXIvRmF2SWNvblVwbG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZVVwbG9hZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Ib21lVXBsb2FkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZVVwbG9hZGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gUmVkdXggZm9ybVxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSwgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuLy8gUmVhY3QgcmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIFN0eWxlXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIFJvdyxcbiAgRm9ybUdyb3VwLFxuICBDb2wsXG4gIEZvcm1Db250cm9sLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgcyBmcm9tICcuL1NpdGVTZXR0aW5nc0Zvcm0uY3NzJztcbmltcG9ydCBidCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vblN0eWxlLmNzcyc7XG5cbi8vIEludGVybmFsIGNvbXBvbmVudFxuaW1wb3J0IFVwbG9hZGVyIGZyb20gJy4vVXBsb2FkZXInO1xuaW1wb3J0IEhvbWVVcGxvYWRlciBmcm9tICcuL0hvbWVVcGxvYWRlcic7XG5pbXBvcnQgRW1haWxMb2dvVXBsb2FkZXIgZnJvbSAnLi9FbWFpbExvZ29VcGxvYWRlcic7XG5pbXBvcnQgRmF2SWNvblVwbG9hZGVyIGZyb20gJy4vRmF2SWNvblVwbG9hZGVyJztcblxuaW1wb3J0IHN1Ym1pdCBmcm9tICcuL3N1Ym1pdCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBTaXRlU2V0dGluZ3NGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZVBhZ2VUeXBlOiBudWxsLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGhvbWVQYWdlVHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChob21lUGFnZVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3N0VHlwZVN0YXRlOiBob21lUGFnZVR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBob21lUGFnZVR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaG9tZVBhZ2VUeXBlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaG9zdFR5cGVTdGF0ZTogaG9tZVBhZ2VUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBob21lUGFnZVR5cGUgfSA9IG5leHRQcm9wcztcblxuICAgIGlmIChob21lUGFnZVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3N0VHlwZVN0YXRlOiBob21lUGFnZVR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2wgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2xhc3NOYW1lLCBtYXhsZW5ndGggfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPntsYWJlbH08L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCB7Li4uaW5wdXR9IHR5cGU9e3R5cGV9IGNsYXNzTmFtZT17YnQuY29tbW9uQ29udHJvbElucHV0fSBtYXhsZW5ndGg9e21heGxlbmd0aH0gLz5cbiAgICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3MuZXJyb3JNZXNzYWdlfT57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zcGFuPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYSA9ICh7IGlucHV0LCBsYWJlbCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHsuLi5pbnB1dH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3MuZXJyb3JNZXNzYWdlfT57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zcGFuPn1cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJGb3JtQ29udHJvbFNlbGVjdCA9ICh7IGlucHV0LCBsYWJlbCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9PntsYWJlbH08L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiIHsuLi5pbnB1dH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXJyb3IsIGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZywgZGlzcGF0Y2gsIGluaXRpYWxWYWx1ZXMsIGFwcEF2YWlsYWJsZVN0YXR1cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGhvc3RUeXBlU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLnBhZ2Vjb250ZW50V3JhcHBlciwgJ3BhZ2Vjb250ZW50QVInKX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17cy5oZWFkZXJUaXRsZX0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnNpdGVTZXR0aW5nc30gLz48L2gxPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8c3Ryb25nPntlcnJvcn08L3N0cm9uZz59XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9IGNsYXNzTmFtZT17cy5zcGFjZTR9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fSA+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmxvZ29MYWJlbH0gLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0gY2xhc3NOYW1lPXtzLnNwYWNlNH0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuSG9tZWxvZ29MYWJlbH0gLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxIb21lVXBsb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtzLm5vUGFkZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImxvZ29IZWlnaHRcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMubG9nb0hlaWdodExhYmVsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImxvZ29XaWR0aFwiIHR5cGU9XCJ0ZXh0XCIgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfSBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5sb2dvV2lkdGhMYWJlbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtzLm5vUGFkZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImhvbWVMb2dvSGVpZ2h0XCIgdHlwZT1cInRleHRcIiBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2x9IGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmhvbWVsb2dvSGVpZ2h0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImhvbWVMb2dvV2lkdGhcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG9tZWxvZ29XaWR0aCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2U0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuRW1haWxsb2dvTGFiZWx9IC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEVtYWlsTG9nb1VwbG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9IGNsYXNzTmFtZT17cy5zcGFjZTR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5mYXZJY29ubG9nb0xhYmVsfSAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGYXZJY29uVXBsb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0gY2xhc3NOYW1lPXtzLnNwYWNlMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwic2l0ZU5hbWVcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc2l0ZU5hbWUpfSBtYXhsZW5ndGg9ezE1fSAvPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJzaXRlVGl0bGVcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuc2l0ZVRpdGxlKX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17cy5ub1BhZGRpbmd9PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm1ldGFLZXl3b3JkXCIgdHlwZT1cInRleHRcIiBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMubWV0YUtleXdvcmRMYWJlbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm1ldGFEZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sVGV4dEFyZWF9IGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLm1ldGFLZXl3b3JkTGFiZWxEZXNjKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPXtzLnNwYWNlMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJmYWNlYm9va0xpbmtcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZmFjZWJvb2tVUkwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs0fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInR3aXR0ZXJMaW5rXCIgdHlwZT1cInRleHRcIiBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2x9IGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnR3aXR0ZXJVUkwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs0fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImluc3RhZ3JhbUxpbmtcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaW5zdGFncmFtVVJMKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPXtzLnNwYWNlMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG9tZVBhZ2VUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goYnQuY29tbW9uQ29udHJvbFNlbGVjdCwgJ2NvbW1vbkFkbWluU2VsZWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ob21lUGFnZUxheW91dCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MX0+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG9tZVBhZ2VMYXlvdXREZXNjKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezJ9Pntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmhvbWVQYWdlTGF5b3V0RGVzYzEpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17M30+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG9tZVBhZ2VMYXlvdXREZXNjMil9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs0fT57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ob21lUGFnZUxheW91dERlc2MzKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs0fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZU51bWJlclN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LmNvbW1vbkNvbnRyb2xTZWxlY3QsICdjb21tb25BZG1pblNlbGVjdCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucGhvbmVOdW1iZXJGb3JtYXQpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezF9Pntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnR3aWxpb1NNUyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyfT57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ub3JtYWxQaG9uZU51bWJlcil9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17NH0gY2xhc3NOYW1lPXtzLnNwYWNlMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXBwQXZhaWxhYmxlU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LmNvbW1vbkNvbnRyb2xTZWxlY3QsICdjb21tb25BZG1pblNlbGVjdCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuYXBwQXZhaWxhYmxlKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxfT57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5lbmFibGVMYWJlbCl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXswfT57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5kaXNhYmxlTGFiZWwpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhcHBBdmFpbGFibGVTdGF0dXMgPT0gMSAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwbGF5U3RvcmVVcmxcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMucGxheVN0b3JlVXJsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhcHBTdG9yZVVybFwiIHR5cGU9XCJ0ZXh0XCIgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfSBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5hcHBTdG9yZVVybCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtzLnNwYWNlMn0+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZW1haWxJZExhYmVsKX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs2fSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwaG9uZU51bWJlclwiIHR5cGU9XCJ0ZXh0XCIgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfSBsYWJlbD17Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5tb2JpbGVOdW1iZXJMYWJlbCl9IC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e3Muc3BhY2UyfT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhZGRyZXNzXCIgdHlwZT1cInRleHRcIiBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX0gbGFiZWw9e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuYWRkcmVzcyl9IC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgQ29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17cy5zcGFjZTJ9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInN0cmlwZVB1Ymxpc2hhYmxlS2V5XCIgdHlwZT1cInRleHRcIiBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2x9IGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnN0cmlwZVB1Ymxpc2hhYmxlS2V5KX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17cy5zcGFjZTJ9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGlzdGluZ0FwcHJvdmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goYnQuY29tbW9uQ29udHJvbFNlbGVjdCwgJ2NvbW1vbkFkbWluU2VsZWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmxpc3RpbmdBcHByb3ZhbCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIjBcIn0+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMub3B0aW9uYWwpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiMVwifT57Zm9ybWF0TWVzc2FnZShtZXNzYWdlcy5yZXF1aXJlKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChidC50ZXh0QWxpZ25SaWdodCwgJ3RleHRBbGlnbkxlZnRSdGwnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2N4KGJ0LmJ0blByaW1hcnksIGJ0LmJ0bkxhcmdlKX0gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2F2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuU2l0ZVNldHRpbmdzRm9ybSA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdTaXRlU2V0dGluZ3NGb3JtJywgLy8gYSB1bmlxdWUgbmFtZSBmb3IgdGhpcyBmb3JtXG4gIHZhbGlkYXRlXG59KShTaXRlU2V0dGluZ3NGb3JtKTtcblxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcignU2l0ZVNldHRpbmdzRm9ybScpO1xuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgaG9tZVBhZ2VUeXBlOiBzZWxlY3RvcihzdGF0ZSwgJ2hvbWVQYWdlVHlwZScpLFxuICBhcHBBdmFpbGFibGVTdGF0dXM6IHNlbGVjdG9yKHN0YXRlLCAnYXBwQXZhaWxhYmxlU3RhdHVzJylcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocywgYnQpKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShTaXRlU2V0dGluZ3NGb3JtKSkpOyIsIi8vIEZldGNoIFJlcXVlc3RcbmltcG9ydCBmZXRjaCBmcm9tICcuLi8uLi8uLi9jb3JlL2ZldGNoJztcblxuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcbmltcG9ydCB7IHNldFNpdGVTZXR0aW5ncyB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvc2l0ZVNldHRpbmdzJztcblxuYXN5bmMgZnVuY3Rpb24gc3VibWl0KHZhbHVlcywgZGlzcGF0Y2gpIHtcbiAgXG4gIHZhbHVlcy5hcHBBdmFpbGFibGVTdGF0dXM9IE51bWJlcih2YWx1ZXMuYXBwQXZhaWxhYmxlU3RhdHVzKTtcbiAgXG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICBxdWVyeSAoXG4gICAgJHNpdGVOYW1lOiBTdHJpbmcsXG4gICAgJHNpdGVUaXRsZTogU3RyaW5nLFxuICAgICRtZXRhRGVzY3JpcHRpb246IFN0cmluZyxcbiAgICAkbWV0YUtleXdvcmQ6IFN0cmluZyxcbiAgICAkbG9nbzogU3RyaW5nLFxuICAgICRmYWNlYm9va0xpbms6IFN0cmluZyxcbiAgICAkdHdpdHRlckxpbms6IFN0cmluZyxcbiAgICAkaW5zdGFncmFtTGluazogU3RyaW5nXG4gICAgJGxvZ29IZWlnaHQ6IEludCxcbiAgICAkbG9nb1dpZHRoOiBJbnQsXG4gICAgJGhvbWVQYWdlVHlwZTogSW50LFxuICAgICR2aWRlb0xpbms6IFN0cmluZyxcbiAgICAkcGhvbmVOdW1iZXJTdGF0dXM6IEludCxcbiAgICAkaG9tZUxvZ286IFN0cmluZyxcbiAgICAkZW1haWxMb2dvOiBTdHJpbmcsXG4gICAgJGhvbWVMb2dvSGVpZ2h0OiBJbnQsXG4gICAgJGhvbWVMb2dvV2lkdGg6IEludCxcbiAgICAkYXBwQXZhaWxhYmxlU3RhdHVzOiBCb29sZWFuLFxuICAgICRwbGF5U3RvcmVVcmw6IFN0cmluZyxcbiAgICAkYXBwU3RvcmVVcmw6IFN0cmluZyxcbiAgICAkZW1haWw6IFN0cmluZyxcbiAgICAkcGhvbmVOdW1iZXI6IFN0cmluZyxcbiAgICAkYWRkcmVzczogU3RyaW5nLFxuICAgICRzdHJpcGVQdWJsaXNoYWJsZUtleTogU3RyaW5nLFxuICAgICRsaXN0aW5nQXBwcm92YWw6IFN0cmluZyxcbiAgKSB7XG4gICAgdXBkYXRlU2l0ZVNldHRpbmdzIChcbiAgICAgIHNpdGVOYW1lOiAkc2l0ZU5hbWUsXG4gICAgICBzaXRlVGl0bGU6ICRzaXRlVGl0bGUsXG4gICAgICBtZXRhRGVzY3JpcHRpb246ICRtZXRhRGVzY3JpcHRpb24sXG4gICAgICBtZXRhS2V5d29yZDogJG1ldGFLZXl3b3JkLFxuICAgICAgbG9nbzogJGxvZ28sXG4gICAgICBmYWNlYm9va0xpbms6ICRmYWNlYm9va0xpbmssXG4gICAgICB0d2l0dGVyTGluazogJHR3aXR0ZXJMaW5rLFxuICAgICAgaW5zdGFncmFtTGluazogJGluc3RhZ3JhbUxpbmssXG4gICAgICBsb2dvSGVpZ2h0OiAkbG9nb0hlaWdodCxcbiAgICAgIGxvZ29XaWR0aDogJGxvZ29XaWR0aCxcbiAgICAgIGhvbWVQYWdlVHlwZTogJGhvbWVQYWdlVHlwZSxcbiAgICAgIHZpZGVvTGluazogJHZpZGVvTGluayxcbiAgICAgIHBob25lTnVtYmVyU3RhdHVzOiAkcGhvbmVOdW1iZXJTdGF0dXMsXG4gICAgICBob21lTG9nbzogJGhvbWVMb2dvLFxuICAgICAgZW1haWxMb2dvOiAkZW1haWxMb2dvLFxuICAgICAgaG9tZUxvZ29IZWlnaHQ6ICRob21lTG9nb0hlaWdodCxcbiAgICAgIGhvbWVMb2dvV2lkdGg6ICRob21lTG9nb1dpZHRoLFxuICAgICAgYXBwQXZhaWxhYmxlU3RhdHVzOiAkYXBwQXZhaWxhYmxlU3RhdHVzLFxuICAgICAgcGxheVN0b3JlVXJsOiAkcGxheVN0b3JlVXJsLFxuICAgICAgYXBwU3RvcmVVcmw6ICRhcHBTdG9yZVVybCxcbiAgICAgIGVtYWlsOiAkZW1haWwsXG4gICAgICBwaG9uZU51bWJlcjogJHBob25lTnVtYmVyLFxuICAgICAgYWRkcmVzczogJGFkZHJlc3MsXG4gICAgICBzdHJpcGVQdWJsaXNoYWJsZUtleTogJHN0cmlwZVB1Ymxpc2hhYmxlS2V5LFxuICAgICAgbGlzdGluZ0FwcHJvdmFsOiAkbGlzdGluZ0FwcHJvdmFsXG4gICAgKSB7XG4gICAgICAgIHN0YXR1c1xuICAgIH1cbiAgfVxuICBgO1xuXG4gIGxldCBsb2dvSGVpZ2h0ID0gdmFsdWVzLmxvZ29IZWlnaHQgIT0gJycgPyB2YWx1ZXMubG9nb0hlaWdodCA6IDA7XG4gIGxldCBsb2dvV2lkdGggPSB2YWx1ZXMubG9nb1dpZHRoICE9ICcnID8gdmFsdWVzLmxvZ29XaWR0aCA6IDA7XG4gIGxldCBob21lTG9nb0hlaWdodCA9IHZhbHVlcy5ob21lTG9nb0hlaWdodCAhPSAnJyA/IHZhbHVlcy5ob21lTG9nb0hlaWdodCA6IDA7XG4gIGxldCBob21lTG9nb1dpZHRoID0gdmFsdWVzLmhvbWVMb2dvV2lkdGggIT0gJycgPyB2YWx1ZXMuaG9tZUxvZ29XaWR0aCA6IDA7XG4gIGxldCB2YXJpYWJsZXMgPSBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZXMsIHsgbG9nb0hlaWdodCwgbG9nb1dpZHRoLCBob21lTG9nb0hlaWdodCwgaG9tZUxvZ29XaWR0aCB9KTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgdmFyaWFibGVzXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICBpZiAoZGF0YS51cGRhdGVTaXRlU2V0dGluZ3Muc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgIHRvYXN0ci5zdWNjZXNzKFwiVXBkYXRlIFNldHRpbmdzXCIsIFwiQ2hhbmdlcyBhcmUgdXBkYXRlZCFcIik7XG4gICAgZGlzcGF0Y2goc2V0U2l0ZVNldHRpbmdzKCkpO1xuICB9IGVsc2Uge1xuICAgIHRvYXN0ci5lcnJvcihcIlVwZGF0ZSBTZXR0aW5nc1wiLCBcIlVwZGF0aW5nIFNpdGUgU2V0dGluZ3MgZmFpbGVkXCIpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VibWl0O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7dG9hc3RyfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuaW1wb3J0IERyb3B6b25lQ29tcG9uZW50IGZyb20gJ3JlYWN0LWRyb3B6b25lLWNvbXBvbmVudCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICchaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuL2ZpbGVwaWNrZXIuY3NzJztcbmltcG9ydCB7IGNoYW5nZSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RhcnRIb21lTG9nb1VwbG9hZGVyTG9hZGVyLCBkb1VwbG9hZEhvbWVMb2dvLCBkb1JlbW92ZUhvbWVMb2dvLCBzdG9wSG9tZUxvZ29VcGxvYWRlckxvYWRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUxvZ28nO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHtpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcbmltcG9ydCB7IG1heFVwbG9hZFNpemUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBEcm9wem9uZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb1VwbG9hZEhvbWVMb2dvOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICAgIGRvUmVtb3ZlSG9tZUxvZ286IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkYXRhOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gdGhpcy5zdWNjZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkZWRmaWxlID0gdGhpcy5hZGRlZGZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc3VjY2VzcyhmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgZG9VcGxvYWRIb21lTG9nbywgZGF0YSwgY2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgZmlsZU5hbWUgPSBmcm9tU2VydmVyLmZpbGUuZmlsZW5hbWU7XG4gICAgICAgIGxldCBvbGRQaWN0dXJlID0gZGF0YSAhPSBudWxsID8gZGF0YS52YWx1ZSA6IG51bGw7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IGZyb21TZXJ2ZXIuZmlsZS5wYXRoO1xuICAgICAgICBkb1VwbG9hZEhvbWVMb2dvKGZpbGVOYW1lLCBmaWxlUGF0aCwgb2xkUGljdHVyZSk7XG4gICAgICAgIGF3YWl0IGNoYW5nZSgnU2l0ZVNldHRpbmdzRm9ybScsICdob21lTG9nbycsIGZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICBhZGRlZGZpbGUoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgICAgICBjb25zdCB7IHN0YXJ0SG9tZUxvZ29VcGxvYWRlckxvYWRlciwgc3RvcEhvbWVMb2dvVXBsb2FkZXJMb2FkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHN0YXJ0SG9tZUxvZ29VcGxvYWRlckxvYWRlcigpO1xuXG5cbiAgICAgICAgbGV0IGZpbGVGb3JtYXRlcyA9IFtcbiAgICAgICAgICAgICdpbWFnZS9zdmcreG1sJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9zcWwnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAgICAgICAgICAgJ3RleHQvY3N2JyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ppcCcsXG4gICAgICAgICAgICAndGV4dC9wbGFpbicsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vcnRmJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgICAgICAgICAgICd0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzJyxcbiAgICAgICAgICAgICd0ZXh0L2NhbGVuZGFyJyxcblx0XHRcdCdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgPiAoMTAyNCAqIDEwMjQgKiBtYXhVcGxvYWRTaXplKSkge1xuICAgICAgICAgICAgdG9hc3RyLmVycm9yKCdNYXhpbXVtIHVwbG9hZCBzaXplIEV4Y2VlZGVkISAnLCAnVHJ5IGFnYWluIHdpdGggYSBzbWFsbGVyIHNpemVkIGltYWdlJyk7XG4gICAgICAgICAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZmlsZSk7XG4gICAgICAgICAgICBzdG9wSG9tZUxvZ29VcGxvYWRlckxvYWRlcigpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmIChmaWxlRm9ybWF0ZXMuaW5kZXhPZihmaWxlICYmIGZpbGUudHlwZSkgPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0Vycm9yIScsICdZb3UgYXJlIHRyeWluZyB0byB1cGxvYWQgaW52YWxpZCBpbWFnZSBmaWxlLiBQbGVhc2UgdXBsb2FkIFBORywgSlBHICYgSlBFRyBmb3JtYXQgaW1hZ2UgZmlsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBzdG9wSG9tZUxvZ29VcGxvYWRlckxvYWRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS5hY2NlcHRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignRXJyb3IhJywgJ1lvdSBhcmUgdHJ5aW5nIHRvIHVwbG9hZCBpbnZhbGlkIGltYWdlIGZpbGUuIFBsZWFzZSB1cGxvYWQgUE5HLCBKUEcgJiBKUEVHIGZvcm1hdCBpbWFnZSBmaWxlLicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHN0b3BIb21lTG9nb1VwbG9hZGVyTG9hZGVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgICAgIGNvbnN0IGRqc0NvbmZpZyA9IHtcbiAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jbGlja0hlcmV0b1VwbG9hZExvZ28pLFxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IGZhbHNlLFxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIGRpY3RNYXhGaWxlc0V4Y2VlZGVkOiAnUmVtb3ZlIHRoZSBleGlzdGluZyBpbWFnZSBhbmQgdHJ5IHVwbG9hZCBhZ2FpbicsXG4gICAgICAgICAgICBwcmV2aWV3c0NvbnRhaW5lcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0ge1xuICAgICAgICAgICAgaWNvbkZpbGV0eXBlczogWycuanBnJywgJy5wbmcnXSxcbiAgICAgICAgICAgIHBvc3RVcmw6ICcvdXBsb2FkTG9nbydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGluaXQ6IGR6ID0+IHRoaXMuZHJvcHpvbmUgPSBkeixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc3VjY2VzcyxcbiAgICAgICAgICAgIGFkZGVkZmlsZTogdGhpcy5hZGRlZGZpbGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RHJvcHpvbmVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb21wb25lbnRDb25maWd9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcnM9e2V2ZW50SGFuZGxlcnN9XG4gICAgICAgICAgICAgICAgICAgIGRqc0NvbmZpZz17ZGpzQ29uZmlnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgICBkb1VwbG9hZEhvbWVMb2dvLFxuICAgIGRvUmVtb3ZlSG9tZUxvZ28sXG4gICAgc3RhcnRIb21lTG9nb1VwbG9hZGVyTG9hZGVyLFxuICAgIGNoYW5nZSxcbiAgICBzdG9wSG9tZUxvZ29VcGxvYWRlckxvYWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCAod2l0aFN0eWxlcyhzKShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoRHJvcHpvbmUpKSk7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0FkbWluTGF5b3V0JztcbmltcG9ydCBTaXRlU2V0dGluZ3MgZnJvbSAnLi9TaXRlU2V0dGluZ3MnO1xuaW1wb3J0IHsgcmVzdHJpY3RVcmxzIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hZG1pblByaXZpbGVnZXMnO1xuXG5jb25zdCB0aXRsZSA9ICdTaXRlIFNldHRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgc3RvcmUgfSkge1xuXG4gIC8vIEZyb20gUmVkdXggU3RvcmVcbiAgbGV0IGlzQWRtaW5BdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQWRtaW5BdXRoZW50aWNhdGVkO1xuICBsZXQgYWRtaW5Qcml2aWxlZ2VzID0gc3RvcmUuZ2V0U3RhdGUoKS5hZG1pblByZXZpbGVnZXMucHJpdmlsZWdlcyAmJiBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzLnByaXZpbGVnZXM7XG5cbiAgaWYgKCFpc0FkbWluQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbi9sb2dpbicgfTtcbiAgfVxuXG4gIC8vIEFkbWluIHJlc3RyaWN0aW9uXG4gIGlmICghcmVzdHJpY3RVcmxzKCcvc2l0ZWFkbWluL3NldHRpbmdzL3NpdGUnLCBhZG1pblByaXZpbGVnZXMpKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluJyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IDxBZG1pbkxheW91dD48U2l0ZVNldHRpbmdzIHRpdGxlPXt0aXRsZX0gLz48L0FkbWluTGF5b3V0PixcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERyb3B6b25lQ29tcG9uZW50IGZyb20gJ3JlYWN0LWRyb3B6b25lLWNvbXBvbmVudCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICchaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuL2ZpbGVwaWNrZXIuY3NzJztcbmltcG9ydCB7Y2hhbmdlfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7dG9hc3RyfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RhcnRFbWFpbExvZ29VcGxvYWRlckxvYWRlciwgZG9VcGxvYWRFbWFpbExvZ28sIGRvUmVtb3ZlSG9tZUxvZ28sIHN0b3BFbWFpbExvZ29VcGxvYWRlckxvYWRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUxvZ28nO1xuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7aW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5pbXBvcnQgeyBtYXhVcGxvYWRTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnJztcbmNsYXNzIERyb3B6b25lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRvVXBsb2FkRW1haWxMb2dvOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICAgIGRvUmVtb3ZlSG9tZUxvZ286IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgICAgc3RhcnRFbWFpbExvZ29VcGxvYWRlckxvYWRlcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkYXRhOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gdGhpcy5zdWNjZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkZWRmaWxlID0gdGhpcy5hZGRlZGZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc3VjY2VzcyhmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgZG9VcGxvYWRFbWFpbExvZ28sIGRhdGEsIGNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gZnJvbVNlcnZlci5maWxlLmZpbGVuYW1lO1xuICAgICAgICBsZXQgb2xkUGljdHVyZSA9IGRhdGEgIT0gbnVsbCA/IGRhdGEudmFsdWUgOiBudWxsO1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBmcm9tU2VydmVyLmZpbGUucGF0aDtcbiAgICAgICAgZG9VcGxvYWRFbWFpbExvZ28oZmlsZU5hbWUsIGZpbGVQYXRoLCBvbGRQaWN0dXJlKTtcbiAgICAgICAgYXdhaXQgY2hhbmdlKCdTaXRlU2V0dGluZ3NGb3JtJywgJ2VtYWlsTG9nbycsIGZpbGVOYW1lKTsgICAgICAgXG4gICAgfVxuXG4gICAgYWRkZWRmaWxlKGZpbGUsIGZyb21TZXJ2ZXIpIHtcbiAgICAgICAgY29uc3QgeyBzdGFydEVtYWlsTG9nb1VwbG9hZGVyTG9hZGVyLCBzdG9wRW1haWxMb2dvVXBsb2FkZXJMb2FkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHN0YXJ0RW1haWxMb2dvVXBsb2FkZXJMb2FkZXIoKTtcblxuICAgICAgICBsZXQgZmlsZUZvcm1hdGVzID0gW1xuICAgICAgICAgICAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3NxbCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vcGRmJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICAgICAgICAgICAndGV4dC9jc3YnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAgICAgICAgICd0ZXh0L3BsYWluJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9ydGYnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAgICAgICAgICAgJ3RleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXMnLFxuICAgICAgICAgICAgJ3RleHQvY2FsZW5kYXInLFxuXHRcdFx0J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+ICgxMDI0ICogMTAyNCAqIG1heFVwbG9hZFNpemUpKSB7XG4gICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ01heGltdW0gdXBsb2FkIHNpemUgRXhjZWVkZWQhICcsICdUcnkgYWdhaW4gd2l0aCBhIHNtYWxsZXIgc2l6ZWQgaW1hZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcbiAgICAgICAgICAgIHN0b3BFbWFpbExvZ29VcGxvYWRlckxvYWRlcigpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmIChmaWxlRm9ybWF0ZXMuaW5kZXhPZihmaWxlICYmIGZpbGUudHlwZSkgPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0Vycm9yIScsICdZb3UgYXJlIHRyeWluZyB0byB1cGxvYWQgaW52YWxpZCBpbWFnZSBmaWxlLiBQbGVhc2UgdXBsb2FkIFBORywgSlBHICYgSlBFRyBmb3JtYXQgaW1hZ2UgZmlsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBzdG9wRW1haWxMb2dvVXBsb2FkZXJMb2FkZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoJ0Vycm9yIScsICdZb3UgYXJlIHRyeWluZyB0byB1cGxvYWQgaW52YWxpZCBpbWFnZSBmaWxlLiBQbGVhc2UgdXBsb2FkIFBORywgSlBHICYgSlBFRyBmb3JtYXQgaW1hZ2UgZmlsZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBzdG9wRW1haWxMb2dvVXBsb2FkZXJMb2FkZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICAgICAgY29uc3QgZGpzQ29uZmlnID0ge1xuICAgICAgICAgICAgZGljdERlZmF1bHRNZXNzYWdlOiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNsaWNrSGVyZXRvVXBsb2FkTG9nbyksXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogZmFsc2UsXG4gICAgICAgICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvanBlZyxpbWFnZS9wbmcnLFxuICAgICAgICAgICAgZGljdE1heEZpbGVzRXhjZWVkZWQ6ICdSZW1vdmUgdGhlIGV4aXN0aW5nIGltYWdlIGFuZCB0cnkgdXBsb2FkIGFnYWluJyxcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB7XG4gICAgICAgICAgICBpY29uRmlsZXR5cGVzOiBbJy5qcGcnLCAnLnBuZyddLFxuICAgICAgICAgICAgcG9zdFVybDogJy91cGxvYWRFbWFpbExvZ28nXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBpbml0OiBkeiA9PiB0aGlzLmRyb3B6b25lID0gZHosXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN1Y2Nlc3MsXG4gICAgICAgICAgICBhZGRlZGZpbGU6IHRoaXMuYWRkZWRmaWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERyb3B6b25lQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29tcG9uZW50Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJzPXtldmVudEhhbmRsZXJzfVxuICAgICAgICAgICAgICAgICAgICBkanNDb25maWc9e2Rqc0NvbmZpZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gICAgZG9VcGxvYWRFbWFpbExvZ28sXG4gICAgZG9SZW1vdmVIb21lTG9nbyxcbiAgICBzdGFydEVtYWlsTG9nb1VwbG9hZGVyTG9hZGVyLFxuICAgIGNoYW5nZSxcbiAgICBzdG9wRW1haWxMb2dvVXBsb2FkZXJMb2FkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwgKHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKERyb3B6b25lKSkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2dyYXBocWwsIGdxbCwgY29tcG9zZX0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuLy8gU3R5bGVcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vU2l0ZVNldHRpbmdzLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IFNpdGVTZXR0aW5nc0Zvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyJztcblxuY2xhc3MgU2l0ZVNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2l0ZVNldHRpbmdzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgfSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9XG4gIH07XG5cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0YTogeyBsb2FkaW5nLCBzaXRlU2V0dGluZ3MgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc2V0dGluZ3NDb2xsZWN0aW9uID0ge307XG4gICAgaWYobG9hZGluZyl7XG4gICAgICByZXR1cm4gPExvYWRlciB0eXBlPXtcInRleHRcIn0gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpdGVTZXR0aW5ncy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICBzZXR0aW5nc0NvbGxlY3Rpb25baXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiA8U2l0ZVNldHRpbmdzRm9ybSBpbml0aWFsVmFsdWVzPXtzZXR0aW5nc0NvbGxlY3Rpb259IC8+XG4gICAgfVxuICB9IFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzKSxcbiAgICBncmFwaHFsKGdxbCBgXG4gICAgICAgIHtcbiAgICAgICAgICBzaXRlU2V0dGluZ3Mge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICAgICAgfVxuICAgICAgfSAgICBcbiAgICApLFxuKShTaXRlU2V0dGluZ3MpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItc3BhY2UxLTEwaWVpIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZTItMWhINjAge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZTMtMUR6V0kge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZTQtMjhCUFIge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZTUtX1lpVWkge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZTYtMmJLc3Uge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZTctMmI1eUYge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZVRvcDgtNlZwenYge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1zcGFjZVRvcDEtMkhNcWwge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wMi0zdy1WaSB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wMy0xc1pMMCB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wNC0zeG14ViB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wNS1DOFNITCB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wNi0yRlpVNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wNy0zNFhfeSB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wOC02VnB6diB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLW5vTWFyZ2luLTJMR1phIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXBhZGRpbmcxLTJWbXBZIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZzItY3ZfMEQge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZzMtMlNJakwge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZzQtMkZQZ0Yge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZzUtMTVtRVkge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZzYtM09PbkQge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZzctM01SaEYge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcGFkZGluZ1RvcDEtSl9lNHUge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wMi0xQllsYSB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wMy1nd3gtQiB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wNC0ycjJVYiB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wNS0yUXdDbiB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wNi0yMkRMOSB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wNy0zenk3aSB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci1ub1BhZGRpbmctMU1WVEwge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXRleHRCb2xkLTJpVWVPIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItdGV4dEJvbGRlci0zSjQ2cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXRleHROb3JtYWwtMWQyeUoge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLkZhdkljb25VcGxvYWRlci10ZXh0RGFya0JsdWUtQXBQTUEge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci10ZXh0TGlnaHRCbHVlLTJkYlMzIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXRleHRMaWdodFNhbmRsZUdyZWVuLTJxdWs4IHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItdGV4dExpZ2h0QnJvd24tMlphbDUge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItdGV4dE1lZGl1bU1hcm9vbi0ya1VYMSB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXRleHRCcm93bi0zWnhhOSB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci10ZXh0TWFyb29uLTFiamdWIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXRleHREYXJrQnJvd24tMmNfOFQge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLkZhdkljb25VcGxvYWRlci10ZXh0TWVkaXVtQnJvd24tMklfZk8ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItdGV4dFNreUJsdWUtMTVsZzAge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uRmF2SWNvblVwbG9hZGVyLXRleHRHcmF5LTNTb2o5IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcG5nRm9udFNpemUtbHdMVXUge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNDJweDtcXG4gICAgcmlnaHQ6IDE3cHg7XFxufVxcbi5GYXZJY29uVXBsb2FkZXItcG9zaXRpb25SZWxhdGl2ZS1XRlJhX3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vRmF2SWNvblVwbG9hZGVyL0Zhdkljb25VcGxvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCXCIsXCJmaWxlXCI6XCJGYXZJY29uVXBsb2FkZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnBuZ0ZvbnRTaXplIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTQycHg7XFxuICAgIHJpZ2h0OiAxN3B4O1xcbn1cXG4ucG9zaXRpb25SZWxhdGl2ZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3BhY2UxXCI6IFwiRmF2SWNvblVwbG9hZGVyLXNwYWNlMS0xMGllaVwiLFxuXHRcInNwYWNlMlwiOiBcIkZhdkljb25VcGxvYWRlci1zcGFjZTItMWhINjBcIixcblx0XCJzcGFjZTNcIjogXCJGYXZJY29uVXBsb2FkZXItc3BhY2UzLTFEeldJXCIsXG5cdFwic3BhY2U0XCI6IFwiRmF2SWNvblVwbG9hZGVyLXNwYWNlNC0yOEJQUlwiLFxuXHRcInNwYWNlNVwiOiBcIkZhdkljb25VcGxvYWRlci1zcGFjZTUtX1lpVWlcIixcblx0XCJzcGFjZTZcIjogXCJGYXZJY29uVXBsb2FkZXItc3BhY2U2LTJiS3N1XCIsXG5cdFwic3BhY2U3XCI6IFwiRmF2SWNvblVwbG9hZGVyLXNwYWNlNy0yYjV5RlwiLFxuXHRcInNwYWNlVG9wOFwiOiBcIkZhdkljb25VcGxvYWRlci1zcGFjZVRvcDgtNlZwenZcIixcblx0XCJzcGFjZVRvcDFcIjogXCJGYXZJY29uVXBsb2FkZXItc3BhY2VUb3AxLTJITXFsXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wMi0zdy1WaVwiLFxuXHRcInNwYWNlVG9wM1wiOiBcIkZhdkljb25VcGxvYWRlci1zcGFjZVRvcDMtMXNaTDBcIixcblx0XCJzcGFjZVRvcDRcIjogXCJGYXZJY29uVXBsb2FkZXItc3BhY2VUb3A0LTN4bXhWXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiRmF2SWNvblVwbG9hZGVyLXNwYWNlVG9wNS1DOFNITFwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIkZhdkljb25VcGxvYWRlci1zcGFjZVRvcDYtMkZaVTZcIixcblx0XCJzcGFjZVRvcDdcIjogXCJGYXZJY29uVXBsb2FkZXItc3BhY2VUb3A3LTM0WF95XCIsXG5cdFwibm9NYXJnaW5cIjogXCJGYXZJY29uVXBsb2FkZXItbm9NYXJnaW4tMkxHWmFcIixcblx0XCJwYWRkaW5nMVwiOiBcIkZhdkljb25VcGxvYWRlci1wYWRkaW5nMS0yVm1wWVwiLFxuXHRcInBhZGRpbmcyXCI6IFwiRmF2SWNvblVwbG9hZGVyLXBhZGRpbmcyLWN2XzBEXCIsXG5cdFwicGFkZGluZzNcIjogXCJGYXZJY29uVXBsb2FkZXItcGFkZGluZzMtMlNJakxcIixcblx0XCJwYWRkaW5nNFwiOiBcIkZhdkljb25VcGxvYWRlci1wYWRkaW5nNC0yRlBnRlwiLFxuXHRcInBhZGRpbmc1XCI6IFwiRmF2SWNvblVwbG9hZGVyLXBhZGRpbmc1LTE1bUVZXCIsXG5cdFwicGFkZGluZzZcIjogXCJGYXZJY29uVXBsb2FkZXItcGFkZGluZzYtM09PbkRcIixcblx0XCJwYWRkaW5nN1wiOiBcIkZhdkljb25VcGxvYWRlci1wYWRkaW5nNy0zTVJoRlwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiRmF2SWNvblVwbG9hZGVyLXBhZGRpbmdUb3AxLUpfZTR1XCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJGYXZJY29uVXBsb2FkZXItcGFkZGluZ1RvcDItMUJZbGFcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wMy1nd3gtQlwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiRmF2SWNvblVwbG9hZGVyLXBhZGRpbmdUb3A0LTJyMlViXCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJGYXZJY29uVXBsb2FkZXItcGFkZGluZ1RvcDUtMlF3Q25cIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkZhdkljb25VcGxvYWRlci1wYWRkaW5nVG9wNi0yMkRMOVwiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiRmF2SWNvblVwbG9hZGVyLXBhZGRpbmdUb3A3LTN6eTdpXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiRmF2SWNvblVwbG9hZGVyLW5vUGFkZGluZy0xTVZUTFwiLFxuXHRcInRleHRCb2xkXCI6IFwiRmF2SWNvblVwbG9hZGVyLXRleHRCb2xkLTJpVWVPXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIkZhdkljb25VcGxvYWRlci10ZXh0Qm9sZGVyLTNKNDZzXCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIkZhdkljb25VcGxvYWRlci10ZXh0Tm9ybWFsLTFkMnlKXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiRmF2SWNvblVwbG9hZGVyLXRleHREYXJrQmx1ZS1BcFBNQVwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJGYXZJY29uVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS0yZGJTM1wiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiRmF2SWNvblVwbG9hZGVyLXRleHRMaWdodFNhbmRsZUdyZWVuLTJxdWs4XCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJGYXZJY29uVXBsb2FkZXItdGV4dExpZ2h0QnJvd24tMlphbDVcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiRmF2SWNvblVwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tMmtVWDFcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJGYXZJY29uVXBsb2FkZXItdGV4dEJyb3duLTNaeGE5XCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkZhdkljb25VcGxvYWRlci10ZXh0TWFyb29uLTFiamdWXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIkZhdkljb25VcGxvYWRlci10ZXh0RGFya0Jyb3duLTJjXzhUXCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiRmF2SWNvblVwbG9hZGVyLXRleHRNZWRpdW1Ccm93bi0ySV9mT1wiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiRmF2SWNvblVwbG9hZGVyLXRleHRTa3lCbHVlLTE1bGcwXCIsXG5cdFwidGV4dEdyYXlcIjogXCJGYXZJY29uVXBsb2FkZXItdGV4dEdyYXktM1NvajlcIixcblx0XCJwbmdGb250U2l6ZVwiOiBcIkZhdkljb25VcGxvYWRlci1wbmdGb250U2l6ZS1sd0xVdVwiLFxuXHRcInBvc2l0aW9uUmVsYXRpdmVcIjogXCJGYXZJY29uVXBsb2FkZXItcG9zaXRpb25SZWxhdGl2ZS1XRlJhX1wiXG59OyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRW1haWxMb2dvVXBsb2FkZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0VtYWlsTG9nb1VwbG9hZGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0VtYWlsTG9nb1VwbG9hZGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9VcGxvYWRlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVXBsb2FkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vVXBsb2FkZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XG5cbiAgY29uc3QgZXJyb3JzID0ge31cblxuICBpZiAoIXZhbHVlcy5zaXRlTmFtZSkge1xuICAgIGVycm9ycy5zaXRlTmFtZSA9IG1lc3NhZ2VzLnJlcXVpcmVkICYmIG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuc2l0ZVRpdGxlKSB7XG4gICAgZXJyb3JzLnNpdGVUaXRsZSA9IG1lc3NhZ2VzLnJlcXVpcmVkICYmIG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9XG5cbiAgaWYgKHZhbHVlcy5sb2dvSGVpZ2h0KSB7XG4gICAgaWYgKGlzTmFOKHZhbHVlcy5sb2dvSGVpZ2h0KSkge1xuICAgICAgZXJyb3JzLmxvZ29IZWlnaHQgPSBtZXNzYWdlcy5sb2dvSGVpZ2h0ICYmIG1lc3NhZ2VzLmxvZ29IZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbHVlcy5sb2dvV2lkdGgpIHtcbiAgICBpZiAoaXNOYU4odmFsdWVzLmxvZ29XaWR0aCkpIHtcbiAgICAgIGVycm9ycy5sb2dvV2lkdGggPSBtZXNzYWdlcy5sb2dvV2lkdGggJiYgbWVzc2FnZXMubG9nb1dpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZXMubWV0YURlc2NyaXB0aW9uICYmIHZhbHVlcy5tZXRhRGVzY3JpcHRpb24ubGVuZ3RoID4gMjU1KSB7XG4gICAgZXJyb3JzLm1ldGFEZXNjcmlwdGlvbiA9IG1lc3NhZ2VzLm1ldGFEZXNjcmlwdGlvbiAmJiBtZXNzYWdlcy5tZXRhRGVzY3JpcHRpb25cbiAgfVxuXG4gIGlmICh2YWx1ZXMubWV0YUtleXdvcmQgJiYgdmFsdWVzLm1ldGFLZXl3b3JkLmxlbmd0aCA+IDI1NSkge1xuICAgIGVycm9ycy5tZXRhS2V5d29yZCA9IG1lc3NhZ2VzLm1ldGFLZXl3b3JkICYmIG1lc3NhZ2VzLm1ldGFLZXl3b3JkXG4gIH1cblxuICBpZiAoKCEvXihodHRwOlxcL1xcL3d3d1xcLnxodHRwczpcXC9cXC93d3dcXC58aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvKT9bYS16MC05XSsoW1xcLVxcLl17MX1bYS16MC05XSspKlxcLlthLXpdezIsNX0oOlswLTldezEsNX0pPyhcXC8uKik/JC9pLnRlc3QodmFsdWVzLnBsYXlTdG9yZVVybCkpKSB7XG4gICAgZXJyb3JzLnBsYXlTdG9yZVVybCA9IG1lc3NhZ2VzLnVybEludmFsaWQ7XG4gIH1cblxuICBpZiAoKCEvXihodHRwOlxcL1xcL3d3d1xcLnxodHRwczpcXC9cXC93d3dcXC58aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvKT9bYS16MC05XSsoW1xcLVxcLl17MX1bYS16MC05XSspKlxcLlthLXpdezIsNX0oOlswLTldezEsNX0pPyhcXC8uKik/JC9pLnRlc3QodmFsdWVzLmFwcFN0b3JlVXJsKSkpIHtcbiAgICBlcnJvcnMuYXBwU3RvcmVVcmwgPSBtZXNzYWdlcy51cmxJbnZhbGlkO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICBlcnJvcnMuZW1haWwgPSBtZXNzYWdlcy5yZXF1aXJlZCAmJiBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfSBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNn0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gbWVzc2FnZXMuZW1haWxJbnZhbGlkICYmIG1lc3NhZ2VzLmVtYWlsSW52YWxpZDtcbiAgfVxuXG4gIGlmICghdmFsdWVzLnBob25lTnVtYmVyKSB7XG4gICAgZXJyb3JzLnBob25lTnVtYmVyID0gbWVzc2FnZXMucmVxdWlyZWQgJiYgbWVzc2FnZXMucmVxdWlyZWQ7XG4gIH0gZWxzZSBpZiAodmFsdWVzLnBob25lTnVtYmVyICYmIHZhbHVlcy5waG9uZU51bWJlci50cmltKCkgPT0gXCJcIikge1xuICAgIGVycm9ycy5waG9uZU51bWJlciA9IG1lc3NhZ2VzLnJlcXVpcmVkICYmIG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5waG9uZU51bWJlci5sZW5ndGggPiAzMCkge1xuICAgIGVycm9ycy5waG9uZU51bWJlciA9IG1lc3NhZ2VzLnBob25lTnVtYmVyTGVuZ3RoSW52YWxpZDtcbiAgfVxuXG4gIGlmICghdmFsdWVzLmFkZHJlc3MpIHtcbiAgICBlcnJvcnMuYWRkcmVzcyA9IG1lc3NhZ2VzLnJlcXVpcmVkICYmIG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuc3RyaXBlUHVibGlzaGFibGVLZXkpIHtcbiAgICBlcnJvcnMuc3RyaXBlUHVibGlzaGFibGVLZXkgPSBtZXNzYWdlcy5yZXF1aXJlZCAmJiBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfSBlbHNlIGlmICh2YWx1ZXMuc3RyaXBlUHVibGlzaGFibGVLZXkgJiYgdmFsdWVzLnN0cmlwZVB1Ymxpc2hhYmxlS2V5LnRvU3RyaW5nKCkudHJpbSgpID09IFwiXCIpIHtcbiAgICBlcnJvcnMuc3RyaXBlUHVibGlzaGFibGVLZXkgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXNwYWNlMS1kV0w0cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1zcGFjZTItMWF1dG8ge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXNwYWNlMy0xWF9zViB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItc3BhY2U0LTNFQUdWIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1zcGFjZTUtMTFoREEge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXNwYWNlNi0zdG9RSSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItc3BhY2U3LTJwZnUwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1zcGFjZVRvcDgtVktiWHUge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXNwYWNlVG9wMS0yZHJxQSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1zcGFjZVRvcDItMUd3Y3Uge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXNwYWNlVG9wMy1JQnJYRSB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A0LUxFSzJ5IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1zcGFjZVRvcDUtS2RHbDQge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXNwYWNlVG9wNi0xQm5PZSB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A3LTNtZWphIHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1zcGFjZVRvcDgtVktiWHUge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLW5vTWFyZ2luLTM3Ykx1IHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZzEtM0tZUGcge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmcyLTIyenkwIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZzMtM2J5dTIge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nNC0xamFTcyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmc1LTNTM0M0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZzYtM3l6NjEge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nNy0zWTVqcyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmdUb3AxLTE1c1pnIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nVG9wMi0yQWgtMSB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmdUb3AzLTEwMTVRIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZ1RvcDQtdUYzZjYge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nVG9wNS0yTzE0ayB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmdUb3A2LTNjQmRJIHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZ1RvcDctMThpX2Mge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci1ub1BhZGRpbmctVVJVWXUge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItdGV4dEJvbGQtSTEyM0wge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHRCb2xkZXItM3VqMV8ge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHROb3JtYWwtdWViaUYge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHREYXJrQmx1ZS1MZUdKZyB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4uRW1haWxMb2dvVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS1wZFh6SSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHRMaWdodFNhbmRsZUdyZWVuLTEzWk05IHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci10ZXh0TGlnaHRCcm93bi1yQTh5cyB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tY3Qyb08ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHRCcm93bi0yOTEydCB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLkVtYWlsTG9nb1VwbG9hZGVyLXRleHRNYXJvb24tMzJEbVcge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci10ZXh0RGFya0Jyb3duLXlYZnI3IHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci10ZXh0TWVkaXVtQnJvd24tOE5mQXUge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci10ZXh0U2t5Qmx1ZS0zQkNIbiB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5FbWFpbExvZ29VcGxvYWRlci10ZXh0R3JheS0xUjlHbCB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vRW1haWxMb2dvVXBsb2FkZXIvRW1haWxMb2dvVXBsb2FkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNELDJCQUEyQjtBQUMzQjtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDXCIsXCJmaWxlXCI6XCJFbWFpbExvZ29VcGxvYWRlci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3BhY2UxXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2UxLWRXTDRwXCIsXG5cdFwic3BhY2UyXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2UyLTFhdXRvXCIsXG5cdFwic3BhY2UzXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2UzLTFYX3NWXCIsXG5cdFwic3BhY2U0XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2U0LTNFQUdWXCIsXG5cdFwic3BhY2U1XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2U1LTExaERBXCIsXG5cdFwic3BhY2U2XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2U2LTN0b1FJXCIsXG5cdFwic3BhY2U3XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2U3LTJwZnUwXCIsXG5cdFwic3BhY2VUb3A4XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A4LVZLYlh1XCIsXG5cdFwic3BhY2VUb3AxXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3AxLTJkcnFBXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3AyLTFHd2N1XCIsXG5cdFwic3BhY2VUb3AzXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3AzLUlCclhFXCIsXG5cdFwic3BhY2VUb3A0XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A0LUxFSzJ5XCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A1LUtkR2w0XCIsXG5cdFwic3BhY2VUb3A2XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A2LTFCbk9lXCIsXG5cdFwic3BhY2VUb3A3XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItc3BhY2VUb3A3LTNtZWphXCIsXG5cdFwibm9NYXJnaW5cIjogXCJFbWFpbExvZ29VcGxvYWRlci1ub01hcmdpbi0zN2JMdVwiLFxuXHRcInBhZGRpbmcxXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZzEtM0tZUGdcIixcblx0XCJwYWRkaW5nMlwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmcyLTIyenkwXCIsXG5cdFwicGFkZGluZzNcIjogXCJFbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nMy0zYnl1MlwiLFxuXHRcInBhZGRpbmc0XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZzQtMWphU3NcIixcblx0XCJwYWRkaW5nNVwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmc1LTNTM0M0XCIsXG5cdFwicGFkZGluZzZcIjogXCJFbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nNi0zeXo2MVwiLFxuXHRcInBhZGRpbmc3XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZzctM1k1anNcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmdUb3AxLTE1c1pnXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJFbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nVG9wMi0yQWgtMVwiLFxuXHRcInBhZGRpbmdUb3AzXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZ1RvcDMtMTAxNVFcIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmdUb3A0LXVGM2Y2XCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJFbWFpbExvZ29VcGxvYWRlci1wYWRkaW5nVG9wNS0yTzE0a1wiLFxuXHRcInBhZGRpbmdUb3A2XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItcGFkZGluZ1RvcDYtM2NCZElcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXBhZGRpbmdUb3A3LTE4aV9jXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItbm9QYWRkaW5nLVVSVVl1XCIsXG5cdFwidGV4dEJvbGRcIjogXCJFbWFpbExvZ29VcGxvYWRlci10ZXh0Qm9sZC1JMTIzTFwiLFxuXHRcInRleHRCb2xkZXJcIjogXCJFbWFpbExvZ29VcGxvYWRlci10ZXh0Qm9sZGVyLTN1ajFfXCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXRleHROb3JtYWwtdWViaUZcIixcblx0XCJ0ZXh0RGFya0JsdWVcIjogXCJFbWFpbExvZ29VcGxvYWRlci10ZXh0RGFya0JsdWUtTGVHSmdcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS1wZFh6SVwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItdGV4dExpZ2h0U2FuZGxlR3JlZW4tMTNaTTlcIixcblx0XCJ0ZXh0TGlnaHRCcm93blwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXRleHRMaWdodEJyb3duLXJBOHlzXCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIkVtYWlsTG9nb1VwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tY3Qyb09cIixcblx0XCJ0ZXh0QnJvd25cIjogXCJFbWFpbExvZ29VcGxvYWRlci10ZXh0QnJvd24tMjkxMnRcIixcblx0XCJ0ZXh0TWFyb29uXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItdGV4dE1hcm9vbi0zMkRtV1wiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJFbWFpbExvZ29VcGxvYWRlci10ZXh0RGFya0Jyb3duLXlYZnI3XCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiRW1haWxMb2dvVXBsb2FkZXItdGV4dE1lZGl1bUJyb3duLThOZkF1XCIsXG5cdFwidGV4dFNreUJsdWVcIjogXCJFbWFpbExvZ29VcGxvYWRlci10ZXh0U2t5Qmx1ZS0zQkNIblwiLFxuXHRcInRleHRHcmF5XCI6IFwiRW1haWxMb2dvVXBsb2FkZXItdGV4dEdyYXktMVI5R2xcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdyYXBocWwsIGdxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBSb3csXG4gIENvbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9FbWFpbExvZ29VcGxvYWRlci5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIEZvbnRBd2Vzb21lIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYSc7XG5cbi8vIFJlZHV4XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZG9SZW1vdmVFbWFpbExvZ28gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VMb2dvJztcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgRHJvcFpvbmUgZnJvbSAnLi9Ecm9wWm9uZSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL0xvYWRlcic7XG5cbi8vIFRyYW5zbGF0aW9uXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuXG4vLyBBc3NldFxuaW1wb3J0IGRlZmF1bHRQaWMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9wdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nJztcbmNsYXNzIEVtYWlsTG9nb1VwbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGVtYWlsTG9nb1VwbG9hZGVyTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZG9SZW1vdmVFbWFpbExvZ286IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBnZXRMb2dvRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZ2V0RW1haWxMb2dvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pXG4gICAgfSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGdldExvZ29EYXRhOiB7XG4gICAgICBsb2FkaW5nOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbExvZ29VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0TG9nb0RhdGE6IHsgbG9hZGluZywgZ2V0RW1haWxMb2dvIH0sIGRvUmVtb3ZlRW1haWxMb2dvLCBlbWFpbExvZ29VcGxvYWRlckxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17cy50ZXh0QWxpZ25DZW50ZXJ9PlxuICAgICAgICAgIDxMb2FkZXJcbiAgICAgICAgICAgIHNob3c9e2VtYWlsTG9nb1VwbG9hZGVyTG9hZGluZ31cbiAgICAgICAgICAgIHR5cGU9e1wicGFnZVwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJNYWlufT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnBpY0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnByb2ZpbGVQaWN9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nICYmIDxkaXY+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmxvYWRpbmdMYWJlbH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgZ2V0RW1haWxMb2dvICYmIGdldEVtYWlsTG9nby52YWx1ZSAmJiA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvbG9nby8ke2dldEVtYWlsTG9nby52YWx1ZX0pYCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnQucHJvZmlsZUltYWdlQmd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldEVtYWlsTG9nbyAmJiAhZ2V0RW1haWxMb2dvLnZhbHVlICYmIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGVmYXVsdFBpY30pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LnByb2ZpbGVJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBnZXRFbWFpbExvZ28gPT09IG51bGwgJiYgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkZWZhdWx0UGljfSlgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnQucHJvZmlsZUltYWdlQmd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgZ2V0RW1haWxMb2dvICYmIGdldEVtYWlsTG9nby52YWx1ZSAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IGRvUmVtb3ZlRW1haWxMb2dvKGdldEVtYWlsTG9nby52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LnRyYXNoSWNvbk5ldywgJ3RyYXNoSWNvbk5ld1JUTCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0RlbGV0ZUljb259IGFsdD0nRGVsZXRlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xvYWRlcj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2UyLCBzLnNwYWNlVG9wMil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmZ1bGxXaWR0aCwgcy5idXR0b24sIGJ0LmJ0blByaW1hcnksIHMubm9QYWRkaW5nLCAncGhvdG9VcGxvYWRCdG4nKX0+XG4gICAgICAgICAgICA8RHJvcFpvbmUgZGF0YT17Z2V0RW1haWxMb2dvfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG4gIGVtYWlsTG9nb1VwbG9hZGVyTG9hZGluZzogc3RhdGUuc2l0ZVNldHRpbmdzLmVtYWlsTG9nb1VwbG9hZGVyTG9hZGluZ1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICBkb1JlbW92ZUVtYWlsTG9nb1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFN0eWxlcyhzLCBidCksXG4gIGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKSxcbiAgZ3JhcGhxbChncWxgXG4gICAgICBxdWVyeSBnZXRFbWFpbExvZ297XG4gICAgICAgIGdldEVtYWlsTG9nbyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIHR5cGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsIHtcbiAgICAgIG5hbWU6ICdnZXRMb2dvRGF0YScsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNzcjogZmFsc2VcbiAgICAgIH1cbiAgICB9KSxcbikoRW1haWxMb2dvVXBsb2FkZXIpOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9TaXRlSW1hZ2VzL2RlZmF1bHRQaWMucG5nPzA0ZWQxODYxXCI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHtcbiAgUm93LFxuICBDb2xcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vSG9tZVVwbG9hZGVyLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgRm9udEF3ZXNvbWUgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb1JlbW92ZUhvbWVMb2dvIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlTG9nbyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9Mb2FkZXInO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vIEFzc2V0XG5pbXBvcnQgZGVmYXVsdFBpYyBmcm9tICcuLi8uLi8uLi8uLi8uLi9wdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmcnO1xuY2xhc3MgSG9tZVVwbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhvbWVMb2dvVXBsb2FkZXJMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkb1JlbW92ZUhvbWVMb2dvOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgZ2V0TG9nb0RhdGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGdldEhvbWVMb2dvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pXG4gICAgfSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHByb2ZpbGVQaWN0dXJlRGF0YToge1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgaG9tZUxvZ29VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ2V0TG9nb0RhdGE6IHsgbG9hZGluZywgZ2V0SG9tZUxvZ28gfSwgZG9SZW1vdmVIb21lTG9nbywgaG9tZUxvZ29VcGxvYWRlckxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e3MudGV4dEFsaWduQ2VudGVyfT5cbiAgICAgICAgICA8TG9hZGVyXG4gICAgICAgICAgICBzaG93PXtob21lTG9nb1VwbG9hZGVyTG9hZGluZ31cbiAgICAgICAgICAgIHR5cGU9e1wicGFnZVwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJNYWlufT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnBpY0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KGJ0LnByb2ZpbGVQaWMsIGJ0LndoaXRlSW1nKX0+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgPGRpdj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubG9hZGluZ0xhYmVsfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBnZXRIb21lTG9nbyAmJiBnZXRIb21lTG9nby52YWx1ZSAmJiA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWFnZXMvbG9nby8ke2dldEhvbWVMb2dvLnZhbHVlfSlgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC5wcm9maWxlSW1hZ2VCZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgZ2V0SG9tZUxvZ28gJiYgIWdldEhvbWVMb2dvLnZhbHVlICYmIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkZWZhdWx0UGljfSlgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC5wcm9maWxlSW1hZ2VCZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgZ2V0SG9tZUxvZ28gPT09IG51bGwgJiYgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2RlZmF1bHRQaWN9KWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LnByb2ZpbGVJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldEhvbWVMb2dvICYmIGdldEhvbWVMb2dvLnZhbHVlICYmIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gZG9SZW1vdmVIb21lTG9nbyhnZXRIb21lTG9nby52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LnRyYXNoSWNvbk5ldywgJ3RyYXNoSWNvbk5ld1JUTCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0RlbGV0ZUljb259IGFsdD0nRGVsZXRlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xvYWRlcj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2UyLCBzLnNwYWNlVG9wMil9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzLmZ1bGxXaWR0aCwgcy5idXR0b24sIGJ0LmJ0blByaW1hcnksIHMubm9QYWRkaW5nLCAncGhvdG9VcGxvYWRCdG4nKX0+XG4gICAgICAgICAgICA8RHJvcFpvbmUgZGF0YT17Z2V0SG9tZUxvZ299IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgaG9tZUxvZ29VcGxvYWRlckxvYWRpbmc6IHN0YXRlLnNpdGVTZXR0aW5ncy5ob21lTG9nb1VwbG9hZGVyTG9hZGluZ1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICBkb1JlbW92ZUhvbWVMb2dvXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3R5bGVzKHMsIGJ0KSxcbiAgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpLFxuICBncmFwaHFsKGdxbGBcbiAgICAgIHF1ZXJ5IGdldEhvbWVMb2dve1xuICAgICAgICBnZXRIb21lTG9nbyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIHR5cGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsIHtcbiAgICAgIG5hbWU6ICdnZXRMb2dvRGF0YScsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNzcjogZmFsc2VcbiAgICAgIH1cbiAgICB9KSxcbikoSG9tZVVwbG9hZGVyKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FkbWluSWNvbnMvZGx0LnBuZz9iMzYyY2FlMFwiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7XG4gIFJvdyxcbiAgQ29sXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1VwbG9hZGVyLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0ICogYXMgRm9udEF3ZXNvbWUgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb1JlbW92ZUxvZ28gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VMb2dvJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBEcm9wWm9uZSBmcm9tICcuL0Ryb3Bab25lJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vQXZhdGFyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vTG9hZGVyJztcblxuLy8gQXNzZXRcbmltcG9ydCBkZWZhdWx0UGljIGZyb20gJy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcHVibGljL2FkbWluSWNvbnMvZGx0LnBuZyc7XG5cbmNsYXNzIFVwbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxvZ29VcGxvYWRlckxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGRvUmVtb3ZlTG9nbzogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIGdldExvZ29EYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBnZXRMb2dvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pXG4gICAgfSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHByb2ZpbGVQaWN0dXJlRGF0YToge1xuICAgICAgbG9hZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgbG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBnZXRMb2dvRGF0YTogeyBsb2FkaW5nLCBnZXRMb2dvIH0sIGRvUmVtb3ZlTG9nbywgbG9nb1VwbG9hZGVyTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17cy50ZXh0QWxpZ25DZW50ZXJ9PlxuICAgICAgICAgIDxMb2FkZXJcbiAgICAgICAgICAgIHNob3c9e2xvZ29VcGxvYWRlckxvYWRpbmd9XG4gICAgICAgICAgICB0eXBlPXtcInBhZ2VcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnQucGljQ29udGFpbmVyTWFpbn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5wcm9maWxlUGljfT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyAmJiA8ZGl2PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5sb2FkaW5nTGFiZWx9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldExvZ28gIT0gbnVsbCAmJiA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9sb2dvLyR7Z2V0TG9nby52YWx1ZX0pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LnByb2ZpbGVJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBnZXRMb2dvID09PSBudWxsICYmIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGVmYXVsdFBpY30pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LnByb2ZpbGVJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldExvZ28gIT0gbnVsbCAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IGRvUmVtb3ZlTG9nbyhnZXRMb2dvLnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChidC50cmFzaEljb25OZXcsICd0cmFzaEljb25OZXdSVEwnKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtEZWxldGVJY29ufSBhbHQ9J0RlbGV0ZScgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Mb2FkZXI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChzLnNwYWNlMiwgcy5zcGFjZVRvcDIpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5mdWxsV2lkdGgsIHMuYnV0dG9uLCBidC5idG5QcmltYXJ5LCBzLm5vUGFkZGluZywgJ3Bob3RvVXBsb2FkQnRuJyl9PlxuICAgICAgICAgICAgPERyb3Bab25lIGRhdGE9e2dldExvZ299IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgbG9nb1VwbG9hZGVyTG9hZGluZzogc3RhdGUuc2l0ZVNldHRpbmdzLmxvZ29VcGxvYWRlckxvYWRpbmdcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgZG9SZW1vdmVMb2dvXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3R5bGVzKHMsIGJ0KSxcbiAgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpLFxuICBncmFwaHFsKGdxbGBcbiAgICAgIHF1ZXJ5IGdldExvZ297XG4gICAgICAgIGdldExvZ28ge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgICB0eXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLCB7XG4gICAgICBuYW1lOiAnZ2V0TG9nb0RhdGEnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzc3I6IGZhbHNlXG4gICAgICB9XG4gICAgfSksXG4pKFVwbG9hZGVyKTtcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcmVudEFsbEhlYWRlckFkbWluLTdwclc3IHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1hZG1pbkxheW91dC1VZzc0bCB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1ib3gtMTRRSVUgaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0TGluay1iSDRsXyB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tYmxvY2tjZW50ZXItMVpLQUwge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFuZWxIZWFkZXItMk5kSUkge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tY3VycmVuY3lzZWxlY3QtV283Ungge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFuZWxIZWFkZXItMk5kSUkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbWFyMC0zb3lldiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbmF2YmFyLTNpWXlwID4gLlNpdGVTZXR0aW5nc0Zvcm0tY29udGFpbmVyLTFtQXA4IC5TaXRlU2V0dGluZ3NGb3JtLW5hdmJhci1icmFuZC0zT2hUYSxcXG4uU2l0ZVNldHRpbmdzRm9ybS1uYXZiYXItM2lZeXAgPiAuU2l0ZVNldHRpbmdzRm9ybS1jb250YWluZXItZmx1aWQtMnNYRUEgLlNpdGVTZXR0aW5nc0Zvcm0tbmF2YmFyLWJyYW5kLTNPaFRhIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLlNpdGVTZXR0aW5nc0Zvcm0tYmxvY2tjZW50ZXItMVpLQUwge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAuU2l0ZVNldHRpbmdzRm9ybS1wYW5lbEhlYWRlci0yTmRJSSB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4uU2l0ZVNldHRpbmdzRm9ybS1wYWdlY29udGVudFdyYXBwZXItMVVJUTQge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLWhlYWRlclRpdGxlLTFKdXd5IHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXBhbmVsSGVhZGVyLTJOZElJIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tdGFibGUtMkF3Z08ge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10YWJsZVJvdy0yZ081eiB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10YWJsZUNlbGwtM1hMX0Ege1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLWZvcm1Hcm91cC0xZl9iZyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1zZWxlY3QtMkpFelkge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbm9NYXJnaW4tMS1GSkoge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0TGluay1iSDRsXyB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbGFiZWxUZXh0TmV3LTI2X3d5IHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLWRpc3BsYXlJbmxpbmUtMm00S3oge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uU2l0ZVNldHRpbmdzRm9ybS1idG5VUGRhdGUtM0pWdksge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tYnRuTW9kYWxEZWxldGUtUEpYNS0ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcmFkaW9CdG4tMWZtWTgge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5TaXRlU2V0dGluZ3NGb3JtLWJ0blVQZGF0ZS0zSlZ2SyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LlNpdGVTZXR0aW5nc0Zvcm0tYnRuTW9kYWxEZWxldGUtUEpYNS0ge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5TaXRlU2V0dGluZ3NGb3JtLWJ0bldpZHRoLTNrZkFXIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uU2l0ZVNldHRpbmdzRm9ybS1iYW5uZXJJbWFnZUJnLTJzMjg1IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1iYW5uZXJEZWxldGUtM0xYQnEge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5TaXRlU2V0dGluZ3NGb3JtLW1vZGFsUm9vdC0zT0Q4eiB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbW9kYWxCb3JkZXJCb3R0b20tM3dJSDIge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLWxvZ0luTW9kYWxCb2R5LTFzUE1BIHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0U2VjdGlvbi0yUTEyUSB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItM2hya1cge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1leHBvcnRUZXh0LTJXNUR5IHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLWV4cG9ydExpbmtJbWctMllnWEYge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXZ0ck1pZGRsZS0yWTNUMiB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0SW1nLTI1X09TIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0zbGZ4VyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0xS3JHWiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXByb2ZpbGVWaWV3TWFpbi0yS3dXYyB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXByb2ZpbGVWaWV3SW5uZXItYVZxa0oge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXByb2ZpbGVJbWFnZVNlY3Rpb24tRjZzVmIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbGFzdHZpZXdJbm5lci0yd20xTiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LlNpdGVTZXR0aW5nc0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTFVSVE0IHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuU2l0ZVNldHRpbmdzRm9ybS1leHBvcnRTZWN0aW9uLTJRMTJRIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5TaXRlU2V0dGluZ3NGb3JtLWV4cG9ydFRleHQtMlc1RHkge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5TaXRlU2V0dGluZ3NGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTNocmtXIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LlNpdGVTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0zbGZ4VyB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LlNpdGVTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0xS3JHWiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LlNpdGVTZXR0aW5nc0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTFVSVE0IHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLUNoYW5nZVRvVXBwZXJDYXNlLTlzUHEze1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLW5vQm9yZGVyLV9aTENWIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXFxuLlNpdGVTZXR0aW5nc0Zvcm0tZXJyb3JNZXNzYWdlLTE4V2ZsIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1wYW5lbEhlYWRlci0yTmRJSXtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tZm9ybUdyb3VwLTFmX2JnIHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc2VsZWN0LTJKRXpZIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbGFiZWxUZXh0LTFJbXdre1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzY3Njc2O1xcbiAgbWFyZ2luOiA2cHggMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2UxLTItSVNNIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2UyLXlnazdjIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXNwYWNlMy0zRVZiZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1zcGFjZTQtM0ktR3cge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2U1LTFodWxsIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXNwYWNlNi0xUUdLMCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1zcGFjZTctMjBoYXMge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2VUb3A4LU1VZ0JNIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXNwYWNlVG9wMS0yWjRMMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXNwYWNlVG9wMi0ySXdpTyB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1zcGFjZVRvcDMtMXZjUlkge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2VUb3A0LTNocU9BIHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXNwYWNlVG9wNS1kLWZUMyB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1zcGFjZVRvcDYtM1B6Nmcge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2VUb3A3LTE5RzZPIHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXNwYWNlVG9wOC1NVWdCTSB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1ub01hcmdpbi0xLUZKSiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzEtMUxsOTgge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzItZWV0eHUge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXBhZGRpbmczLTI5SUF0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1wYWRkaW5nNC0xOENIeSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzUtM2Z0ZGsge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXBhZGRpbmc2LTZ0b1ctIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1wYWRkaW5nNy1xdmFvZSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDEtYnBrUHIge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDItMmVVREIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXBhZGRpbmdUb3AzLTFuemJaIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1wYWRkaW5nVG9wNC1OVnhEdSB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDUtM1Vnc2Ige1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXBhZGRpbmdUb3A2LTNDWFUzIHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS1wYWRkaW5nVG9wNy0xV05SNSB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tbm9QYWRkaW5nLTI4Tll5IHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tdGV4dEJvbGQtM0VLQU4ge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tdGV4dEJvbGRlci0zX2gwTiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10ZXh0Tm9ybWFsLTFoY0VuIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5TaXRlU2V0dGluZ3NGb3JtLXRleHREYXJrQmx1ZS0yUVFCSyB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10ZXh0TGlnaHRCbHVlLTEzX0ZfIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0xZmdmRSB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10ZXh0TGlnaHRCcm93bi0zUncyeCB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tdGV4dE1lZGl1bU1hcm9vbi0ya0RYXyB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10ZXh0QnJvd24tMzQ5S0Ege1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXRleHRNYXJvb24tMjVsc2oge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXRleHREYXJrQnJvd24tMllzaWsge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLlNpdGVTZXR0aW5nc0Zvcm0tdGV4dE1lZGl1bUJyb3duLTJnU0liIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uU2l0ZVNldHRpbmdzRm9ybS10ZXh0U2t5Qmx1ZS1tay1zTyB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5TaXRlU2V0dGluZ3NGb3JtLXRleHRHcmF5LTFpUHd3IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9TaXRlU2V0dGluZ3NGb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7QUFDRDs7RUFFRSw4QkFBOEI7Q0FDL0I7QUFDRDtFQUNFO0lBQ0UsYUFBYTtHQUNkO0VBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7Q0FDRjtBQUNELDhCQUE4QjtBQUM5QjtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1o7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7QUFDRDs7Q0FFQyxnQkFBZ0I7Q0FDaEI7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLHNCQUFzQjtDQUN0QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDO0VBQ0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQjtDQUNEO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjtDQUNEO0VBQ0MsWUFBWTtFQUNaO0NBQ0Q7QUFDRCx1RUFBdUU7QUFDdkUsdUVBQXVFO0FBQ3ZFO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxZQUFZO0NBQ1o7QUFDRCw2REFBNkQ7QUFDN0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDLGlDQUFpQztDQUNqQywrQ0FBK0M7Q0FDL0MsK0JBQStCO0NBQy9CLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsYUFBYTtDQUNiO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsbUNBQW1DO0NBQ25DLDBCQUEwQjtLQUN0Qix1QkFBdUI7U0FDbkIsb0JBQW9CO0NBQzVCLGVBQWU7Q0FDZiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLDBCQUEwQjtDQUMxQixpQkFBaUI7Q0FDakI7QUFDRDtDQUNDLDBDQUEwQztDQUMxQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLGlDQUFpQztDQUNqQyxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixVQUFVO0NBQ1Y7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1g7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGNBQWM7Q0FDZCxpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0M7RUFDQyxvQkFBb0I7UUFDZCxjQUFjO1FBQ2QsZUFBZTtFQUNyQjtDQUNEO0FBQ0Q7Q0FDQztFQUNDLDRCQUE0QjtFQUM1QjtDQUNEO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjtDQUNEO0VBQ0MsdUNBQXVDO0VBQ3ZDO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkI7Q0FDRDtFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7Q0FDRDtBQUNELHFFQUFxRTtBQUNyRTtDQUNDO0VBQ0MsZUFBZTtFQUNmO0NBQ0Q7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0QsNEJBQTRCO0FBQzVCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjtBQUNEO0NBQ0MsZ0JBQWdCO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4QjtBQUNEO0NBQ0MsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyx3QkFBd0I7Q0FDeEI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRCwyQkFBMkI7QUFDM0I7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxvQ0FBb0M7Q0FDcEM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQ1wiLFwiZmlsZVwiOlwiU2l0ZVNldHRpbmdzRm9ybS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnJlbnRBbGxIZWFkZXJBZG1pbiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLmFkbWluTGF5b3V0IHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmV4cG9ydExpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5ibG9ja2NlbnRlciB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmN1cnJlbmN5c2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFyMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcXG4ubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmJsb2NrY2VudGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLnBhbmVsSGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGFibGUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udGFibGVSb3cge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLnRhYmxlQ2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLmxhYmVsVGV4dE5ldyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uZGlzcGxheUlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5idG5VUGRhdGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5yYWRpb0J0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmJ0blVQZGF0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuYnRuV2lkdGgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5iYW5uZXJJbWFnZUJnIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYmFubmVyRGVsZXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubW9kYWxSb290IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4ubW9kYWxCb3JkZXJCb3R0b20ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5sb2dJbk1vZGFsQm9keSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5leHBvcnRTZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uZXhwb3J0VGV4dCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhwb3J0TGlua0ltZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnZ0ck1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmV4cG9ydEltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4ucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5wcm9maWxlVmlld01haW4ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucHJvZmlsZVZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLnByb2ZpbGVJbWFnZVNlY3Rpb24ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxhc3R2aWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5leHBvcnRTZWN0aW9uIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5leHBvcnRUZXh0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkNoYW5nZVRvVXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5ub0JvcmRlciB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5lcnJvck1lc3NhZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5wYW5lbEhlYWRlcntcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmZvcm1Hcm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubGFiZWxUZXh0e1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzY3Njc2O1xcbiAgbWFyZ2luOiA2cHggMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicmVudEFsbEhlYWRlckFkbWluXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1yZW50QWxsSGVhZGVyQWRtaW4tN3ByVzdcIixcblx0XCJhZG1pbkxheW91dFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tYWRtaW5MYXlvdXQtVWc3NGxcIixcblx0XCJib3hcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWJveC0xNFFJVVwiLFxuXHRcImV4cG9ydExpbmtcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWV4cG9ydExpbmstYkg0bF9cIixcblx0XCJibG9ja2NlbnRlclwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tYmxvY2tjZW50ZXItMVpLQUxcIixcblx0XCJwYW5lbEhlYWRlclwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFuZWxIZWFkZXItMk5kSUlcIixcblx0XCJjdXJyZW5jeXNlbGVjdFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tY3VycmVuY3lzZWxlY3QtV283UnhcIixcblx0XCJtYXIwXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1tYXIwLTNveWV2XCIsXG5cdFwibmF2YmFyXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1uYXZiYXItM2lZeXBcIixcblx0XCJjb250YWluZXJcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWNvbnRhaW5lci0xbUFwOFwiLFxuXHRcIm5hdmJhci1icmFuZFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tbmF2YmFyLWJyYW5kLTNPaFRhXCIsXG5cdFwiY29udGFpbmVyLWZsdWlkXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1jb250YWluZXItZmx1aWQtMnNYRUFcIixcblx0XCJwYWdlY29udGVudFdyYXBwZXJcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXBhZ2Vjb250ZW50V3JhcHBlci0xVUlRNFwiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1oZWFkZXJUaXRsZS0xSnV3eVwiLFxuXHRcInRhYmxlXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10YWJsZS0yQXdnT1wiLFxuXHRcInRhYmxlUm93XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10YWJsZVJvdy0yZ081elwiLFxuXHRcInRhYmxlQ2VsbFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tdGFibGVDZWxsLTNYTF9BXCIsXG5cdFwiZm9ybUdyb3VwXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1mb3JtR3JvdXAtMWZfYmdcIixcblx0XCJzZWxlY3RcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXNlbGVjdC0ySkV6WVwiLFxuXHRcIm5vTWFyZ2luXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1ub01hcmdpbi0xLUZKSlwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tbGFiZWxUZXh0TmV3LTI2X3d5XCIsXG5cdFwiZGlzcGxheUlubGluZVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tZGlzcGxheUlubGluZS0ybTRLelwiLFxuXHRcImJ0blVQZGF0ZVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tYnRuVVBkYXRlLTNKVnZLXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWJ0bk1vZGFsRGVsZXRlLVBKWDUtXCIsXG5cdFwicmFkaW9CdG5cIjogXCJTaXRlU2V0dGluZ3NGb3JtLXJhZGlvQnRuLTFmbVk4XCIsXG5cdFwiYnRuV2lkdGhcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWJ0bldpZHRoLTNrZkFXXCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tYmFubmVySW1hZ2VCZy0yczI4NVwiLFxuXHRcImJhbm5lckRlbGV0ZVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tYmFubmVyRGVsZXRlLTNMWEJxXCIsXG5cdFwibW9kYWxSb290XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1tb2RhbFJvb3QtM09EOHpcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tbW9kYWxCb3JkZXJCb3R0b20tM3dJSDJcIixcblx0XCJsb2dJbk1vZGFsQm9keVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tbG9nSW5Nb2RhbEJvZHktMXNQTUFcIixcblx0XCJleHBvcnRTZWN0aW9uXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1leHBvcnRTZWN0aW9uLTJRMTJRXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTNocmtXXCIsXG5cdFwiZXhwb3J0VGV4dFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0VGV4dC0yVzVEeVwiLFxuXHRcImV4cG9ydExpbmtJbWdcIjogXCJTaXRlU2V0dGluZ3NGb3JtLWV4cG9ydExpbmtJbWctMllnWEZcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXZ0ck1pZGRsZS0yWTNUMlwiLFxuXHRcImV4cG9ydEltZ1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tZXhwb3J0SW1nLTI1X09TXCIsXG5cdFwicHJvZmlsZVZpZXdsYWJlbFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcHJvZmlsZVZpZXdsYWJlbC0zbGZ4V1wiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMUtyR1pcIixcblx0XCJwcm9maWxlVmlld01haW5cIjogXCJTaXRlU2V0dGluZ3NGb3JtLXByb2ZpbGVWaWV3TWFpbi0yS3dXY1wiLFxuXHRcInByb2ZpbGVWaWV3SW5uZXJcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXByb2ZpbGVWaWV3SW5uZXItYVZxa0pcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1wcm9maWxlSW1hZ2VTZWN0aW9uLUY2c1ZiXCIsXG5cdFwibGFzdHZpZXdJbm5lclwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tbGFzdHZpZXdJbm5lci0yd20xTlwiLFxuXHRcIkNoYW5nZVRvVXBwZXJDYXNlXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1DaGFuZ2VUb1VwcGVyQ2FzZS05c1BxM1wiLFxuXHRcIm5vQm9yZGVyXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1ub0JvcmRlci1fWkxDVlwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tZXJyb3JNZXNzYWdlLTE4V2ZsXCIsXG5cdFwibGFiZWxUZXh0XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1sYWJlbFRleHQtMUltd2tcIixcblx0XCJzcGFjZTFcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXNwYWNlMS0yLUlTTVwiLFxuXHRcInNwYWNlMlwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2UyLXlnazdjXCIsXG5cdFwic3BhY2UzXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1zcGFjZTMtM0VWYmRcIixcblx0XCJzcGFjZTRcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXNwYWNlNC0zSS1Hd1wiLFxuXHRcInNwYWNlNVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2U1LTFodWxsXCIsXG5cdFwic3BhY2U2XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1zcGFjZTYtMVFHSzBcIixcblx0XCJzcGFjZTdcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXNwYWNlNy0yMGhhc1wiLFxuXHRcInNwYWNlVG9wOFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2VUb3A4LU1VZ0JNXCIsXG5cdFwic3BhY2VUb3AxXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1zcGFjZVRvcDEtMlo0TDFcIixcblx0XCJzcGFjZVRvcDJcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXNwYWNlVG9wMi0ySXdpT1wiLFxuXHRcInNwYWNlVG9wM1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2VUb3AzLTF2Y1JZXCIsXG5cdFwic3BhY2VUb3A0XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1zcGFjZVRvcDQtM2hxT0FcIixcblx0XCJzcGFjZVRvcDVcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXNwYWNlVG9wNS1kLWZUM1wiLFxuXHRcInNwYWNlVG9wNlwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tc3BhY2VUb3A2LTNQejZnXCIsXG5cdFwic3BhY2VUb3A3XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS1zcGFjZVRvcDctMTlHNk9cIixcblx0XCJwYWRkaW5nMVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzEtMUxsOThcIixcblx0XCJwYWRkaW5nMlwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzItZWV0eHVcIixcblx0XCJwYWRkaW5nM1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzMtMjlJQXRcIixcblx0XCJwYWRkaW5nNFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzQtMThDSHlcIixcblx0XCJwYWRkaW5nNVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzUtM2Z0ZGtcIixcblx0XCJwYWRkaW5nNlwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzYtNnRvVy1cIixcblx0XCJwYWRkaW5nN1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZzctcXZhb2VcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDEtYnBrUHJcIixcblx0XCJwYWRkaW5nVG9wMlwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDItMmVVREJcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDMtMW56YlpcIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDQtTlZ4RHVcIixcblx0XCJwYWRkaW5nVG9wNVwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDUtM1Vnc2JcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDYtM0NYVTNcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tcGFkZGluZ1RvcDctMVdOUjVcIixcblx0XCJub1BhZGRpbmdcIjogXCJTaXRlU2V0dGluZ3NGb3JtLW5vUGFkZGluZy0yOE5ZeVwiLFxuXHRcInRleHRCb2xkXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10ZXh0Qm9sZC0zRUtBTlwiLFxuXHRcInRleHRCb2xkZXJcIjogXCJTaXRlU2V0dGluZ3NGb3JtLXRleHRCb2xkZXItM19oME5cIixcblx0XCJ0ZXh0Tm9ybWFsXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10ZXh0Tm9ybWFsLTFoY0VuXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10ZXh0RGFya0JsdWUtMlFRQktcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10ZXh0TGlnaHRCbHVlLTEzX0ZfXCIsXG5cdFwidGV4dExpZ2h0U2FuZGxlR3JlZW5cIjogXCJTaXRlU2V0dGluZ3NGb3JtLXRleHRMaWdodFNhbmRsZUdyZWVuLTFmZ2ZFXCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJTaXRlU2V0dGluZ3NGb3JtLXRleHRMaWdodEJyb3duLTNSdzJ4XCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tdGV4dE1lZGl1bU1hcm9vbi0ya0RYX1wiLFxuXHRcInRleHRCcm93blwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tdGV4dEJyb3duLTM0OUtBXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIlNpdGVTZXR0aW5nc0Zvcm0tdGV4dE1hcm9vbi0yNWxzalwiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJTaXRlU2V0dGluZ3NGb3JtLXRleHREYXJrQnJvd24tMllzaWtcIixcblx0XCJ0ZXh0TWVkaXVtQnJvd25cIjogXCJTaXRlU2V0dGluZ3NGb3JtLXRleHRNZWRpdW1Ccm93bi0yZ1NJYlwiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10ZXh0U2t5Qmx1ZS1tay1zT1wiLFxuXHRcInRleHRHcmF5XCI6IFwiU2l0ZVNldHRpbmdzRm9ybS10ZXh0R3JheS0xaVB3d1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXNwYWNlMS0yTDRweiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2UyLTJEaTBIIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2UzLTJ5OUN1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2U0LTJWYnpPIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2U1LVJ1b3FEIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2U2LTFJRmhkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2U3LTJBdlowIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2VUb3A4LXYzXzBNIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItc3BhY2VUb3AxLTJpTl9TIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDItcmdvUEcge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDMtT05mWk8ge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDQtUkVtUG8ge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDUtU2NoX3oge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDYtSzZWUTYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDctMm5jMFkge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1zcGFjZVRvcDgtdjNfME0ge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1ub01hcmdpbi0xa3Q3ZiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci1wYWRkaW5nMS0zWHVKZCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmcyLUwtVDJkIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmczLTJWMDU4IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmc0LXFvcktvIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmc1LXhpZkdVIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmc2LTNzWTZGIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmc3LTMwTTBCIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXBhZGRpbmdUb3AxLTJjMC1MIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItcGFkZGluZ1RvcDItMlNoWS0ge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItcGFkZGluZ1RvcDMtMnQzTUEge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItcGFkZGluZ1RvcDQtMUZZZHAge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItcGFkZGluZ1RvcDUtMUl3V0Ige1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItcGFkZGluZ1RvcDYtMzhRM1kge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItcGFkZGluZ1RvcDctM0NWWGwge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItbm9QYWRkaW5nLTFUXzhrIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci10ZXh0Qm9sZC1ScmFsUyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXRleHRCb2xkZXItTU5pTTQge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci10ZXh0Tm9ybWFsLUN6SVBuIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi5Ib21lVXBsb2FkZXItdGV4dERhcmtCbHVlLTFyRUcxIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS0xS0tvVCB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci10ZXh0TGlnaHRTYW5kbGVHcmVlbi0zUVRrMCB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXRleHRMaWdodEJyb3duLTFiYmNPIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tUE0tV2Yge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci10ZXh0QnJvd24tVzBhR0Yge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItdGV4dE1hcm9vbi0xZ2UyVyB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci10ZXh0RGFya0Jyb3duLTFiVDJ0IHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5Ib21lVXBsb2FkZXItdGV4dE1lZGl1bUJyb3duLTJ3ZDN3IHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4uSG9tZVVwbG9hZGVyLXRleHRTa3lCbHVlLTJWSkZyIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLkhvbWVVcGxvYWRlci10ZXh0R3JheS1DT3U2NyB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1NpdGVTZXR0aW5nc0Zvcm0vSG9tZVVwbG9hZGVyL0hvbWVVcGxvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbENcIixcImZpbGVcIjpcIkhvbWVVcGxvYWRlci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3BhY2UxXCI6IFwiSG9tZVVwbG9hZGVyLXNwYWNlMS0yTDRwelwiLFxuXHRcInNwYWNlMlwiOiBcIkhvbWVVcGxvYWRlci1zcGFjZTItMkRpMEhcIixcblx0XCJzcGFjZTNcIjogXCJIb21lVXBsb2FkZXItc3BhY2UzLTJ5OUN1XCIsXG5cdFwic3BhY2U0XCI6IFwiSG9tZVVwbG9hZGVyLXNwYWNlNC0yVmJ6T1wiLFxuXHRcInNwYWNlNVwiOiBcIkhvbWVVcGxvYWRlci1zcGFjZTUtUnVvcURcIixcblx0XCJzcGFjZTZcIjogXCJIb21lVXBsb2FkZXItc3BhY2U2LTFJRmhkXCIsXG5cdFwic3BhY2U3XCI6IFwiSG9tZVVwbG9hZGVyLXNwYWNlNy0yQXZaMFwiLFxuXHRcInNwYWNlVG9wOFwiOiBcIkhvbWVVcGxvYWRlci1zcGFjZVRvcDgtdjNfME1cIixcblx0XCJzcGFjZVRvcDFcIjogXCJIb21lVXBsb2FkZXItc3BhY2VUb3AxLTJpTl9TXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiSG9tZVVwbG9hZGVyLXNwYWNlVG9wMi1yZ29QR1wiLFxuXHRcInNwYWNlVG9wM1wiOiBcIkhvbWVVcGxvYWRlci1zcGFjZVRvcDMtT05mWk9cIixcblx0XCJzcGFjZVRvcDRcIjogXCJIb21lVXBsb2FkZXItc3BhY2VUb3A0LVJFbVBvXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiSG9tZVVwbG9hZGVyLXNwYWNlVG9wNS1TY2hfelwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIkhvbWVVcGxvYWRlci1zcGFjZVRvcDYtSzZWUTZcIixcblx0XCJzcGFjZVRvcDdcIjogXCJIb21lVXBsb2FkZXItc3BhY2VUb3A3LTJuYzBZXCIsXG5cdFwibm9NYXJnaW5cIjogXCJIb21lVXBsb2FkZXItbm9NYXJnaW4tMWt0N2ZcIixcblx0XCJwYWRkaW5nMVwiOiBcIkhvbWVVcGxvYWRlci1wYWRkaW5nMS0zWHVKZFwiLFxuXHRcInBhZGRpbmcyXCI6IFwiSG9tZVVwbG9hZGVyLXBhZGRpbmcyLUwtVDJkXCIsXG5cdFwicGFkZGluZzNcIjogXCJIb21lVXBsb2FkZXItcGFkZGluZzMtMlYwNThcIixcblx0XCJwYWRkaW5nNFwiOiBcIkhvbWVVcGxvYWRlci1wYWRkaW5nNC1xb3JLb1wiLFxuXHRcInBhZGRpbmc1XCI6IFwiSG9tZVVwbG9hZGVyLXBhZGRpbmc1LXhpZkdVXCIsXG5cdFwicGFkZGluZzZcIjogXCJIb21lVXBsb2FkZXItcGFkZGluZzYtM3NZNkZcIixcblx0XCJwYWRkaW5nN1wiOiBcIkhvbWVVcGxvYWRlci1wYWRkaW5nNy0zME0wQlwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiSG9tZVVwbG9hZGVyLXBhZGRpbmdUb3AxLTJjMC1MXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJIb21lVXBsb2FkZXItcGFkZGluZ1RvcDItMlNoWS1cIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkhvbWVVcGxvYWRlci1wYWRkaW5nVG9wMy0ydDNNQVwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiSG9tZVVwbG9hZGVyLXBhZGRpbmdUb3A0LTFGWWRwXCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJIb21lVXBsb2FkZXItcGFkZGluZ1RvcDUtMUl3V0JcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkhvbWVVcGxvYWRlci1wYWRkaW5nVG9wNi0zOFEzWVwiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiSG9tZVVwbG9hZGVyLXBhZGRpbmdUb3A3LTNDVlhsXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiSG9tZVVwbG9hZGVyLW5vUGFkZGluZy0xVF84a1wiLFxuXHRcInRleHRCb2xkXCI6IFwiSG9tZVVwbG9hZGVyLXRleHRCb2xkLVJyYWxTXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIkhvbWVVcGxvYWRlci10ZXh0Qm9sZGVyLU1OaU00XCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIkhvbWVVcGxvYWRlci10ZXh0Tm9ybWFsLUN6SVBuXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiSG9tZVVwbG9hZGVyLXRleHREYXJrQmx1ZS0xckVHMVwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJIb21lVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS0xS0tvVFwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiSG9tZVVwbG9hZGVyLXRleHRMaWdodFNhbmRsZUdyZWVuLTNRVGswXCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJIb21lVXBsb2FkZXItdGV4dExpZ2h0QnJvd24tMWJiY09cIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiSG9tZVVwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tUE0tV2ZcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJIb21lVXBsb2FkZXItdGV4dEJyb3duLVcwYUdGXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkhvbWVVcGxvYWRlci10ZXh0TWFyb29uLTFnZTJXXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIkhvbWVVcGxvYWRlci10ZXh0RGFya0Jyb3duLTFiVDJ0XCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiSG9tZVVwbG9hZGVyLXRleHRNZWRpdW1Ccm93bi0yd2Qzd1wiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiSG9tZVVwbG9hZGVyLXRleHRTa3lCbHVlLTJWSkZyXCIsXG5cdFwidGV4dEdyYXlcIjogXCJIb21lVXBsb2FkZXItdGV4dEdyYXktQ091NjdcIlxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnPzBjYjY1YWQ2XCI7IiwiaW1wb3J0IHtcbiAgU0VUX0xPQURFUl9TVEFSVCxcbiAgU0VUX0xPQURFUl9DT01QTEVURVxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9hZGVyU3RhcnQobmFtZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MT0FERVJfU1RBUlQsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHN0YXR1czogdHJ1ZVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvYWRlckNvbXBsZXRlKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTE9BREVSX0NPTVBMRVRFLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdGF0dXM6IGZhbHNlXG4gICAgfVxuICB9O1xufSIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRmF2SWNvblVwbG9hZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9GYXZJY29uVXBsb2FkZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRmF2SWNvblVwbG9hZGVyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3NpdGVTZXR0aW5ncy9TaXRlU2V0dGluZ3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DXCIsXCJmaWxlXCI6XCJTaXRlU2V0dGluZ3MuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IERyb3B6b25lQ29tcG9uZW50IGZyb20gJ3JlYWN0LWRyb3B6b25lLWNvbXBvbmVudCc7XG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBSZWFjdCByZWR1eFxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gUmVkdXggZm9ybVxuaW1wb3J0IHsgY2hhbmdlIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJyFpc29tb3JwaGljLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vZmlsZXBpY2tlci5jc3MnO1xuXG4vLyBSZWR1eCBhY3Rpb25zXG5pbXBvcnQgeyBzZXRMb2FkZXJTdGFydCwgc2V0TG9hZGVyQ29tcGxldGUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2xvYWRlci9sb2FkZXInO1xuaW1wb3J0IHsgdXBkYXRlRmF2aWNvbkxvZ28gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VMb2dvJztcblxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmltcG9ydCB7IG1heFVwbG9hZFNpemUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBEcm9wem9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzdGFydExvZ29VcGxvYWRlckxvYWRlcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkYXRhOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gdGhpcy5zdWNjZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkZWRmaWxlID0gdGhpcy5hZGRlZGZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc3VjY2VzcyhmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgc2V0TG9hZGVyQ29tcGxldGUsIHVwZGF0ZUZhdmljb25Mb2dvLCBvbGRGYXZpY29uTG9nbyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgYXdhaXQgdXBkYXRlRmF2aWNvbkxvZ28oJ0Zhdmljb24gTG9nbycsICdmYXZpY29uTG9nbycsIGZyb21TZXJ2ZXIuZmlsZS5maWxlbmFtZSwgb2xkRmF2aWNvbkxvZ28pO1xuICAgICAgICBhd2FpdCBzZXRMb2FkZXJDb21wbGV0ZSgnZmF2SWNvbkxvYWRlcicpO1xuICAgIH1cblxuICAgIGFzeW5jIGVycm9yKGZpbGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgeyBzZXRMb2FkZXJDb21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdG9hc3RyLmVycm9yKCdFcnJvciEnLCBtZXNzYWdlKTtcbiAgICAgICAgYXdhaXQgc2V0TG9hZGVyQ29tcGxldGUoJ2Zhdkljb25Mb2FkZXInKTtcbiAgICB9XG5cbiAgICBhZGRlZGZpbGUoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgICAgICBjb25zdCB7IHNldExvYWRlclN0YXJ0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgPiAoMTAyNCAqIDEwMjQgKiBtYXhVcGxvYWRTaXplKSkge1xuICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TG9hZGVyU3RhcnQoJ2Zhdkljb25Mb2FkZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgICAgIGNvbnN0IGRqc0NvbmZpZyA9IHtcbiAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jbGlja0hlcmV0b1VwbG9hZEZhdkljb24pLFxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IGZhbHNlLFxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBkaWN0TWF4RmlsZXNFeGNlZWRlZDogJ1JlbW92ZSB0aGUgZXhpc3RpbmcgaW1hZ2UgYW5kIHRyeSB1cGxvYWQgYWdhaW4nLFxuICAgICAgICAgICAgcHJldmlld3NDb250YWluZXI6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB7XG4gICAgICAgICAgICBpY29uRmlsZXR5cGVzOiBbJy5wbmcnXSxcbiAgICAgICAgICAgIHBvc3RVcmw6ICcvdXBsb2FkRmF2SWNvbidcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGluaXQ6IGR6ID0+IHRoaXMuZHJvcHpvbmUgPSBkeixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc3VjY2VzcyxcbiAgICAgICAgICAgIGFkZGVkZmlsZTogdGhpcy5hZGRlZGZpbGUsXG4gICAgICAgICAgICBlcnJvcjogdGhpcy5lcnJvcixcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RHJvcHpvbmVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb21wb25lbnRDb25maWd9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcnM9e2V2ZW50SGFuZGxlcnN9XG4gICAgICAgICAgICAgICAgICAgIGRqc0NvbmZpZz17ZGpzQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIGNoYW5nZVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICAgIHNldExvYWRlclN0YXJ0LFxuICAgIHNldExvYWRlckNvbXBsZXRlLFxuICAgIHVwZGF0ZUZhdmljb25Mb2dvXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKERyb3B6b25lKSkpOyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5pbXBvcnQgRHJvcHpvbmVDb21wb25lbnQgZnJvbSAncmVhY3QtZHJvcHpvbmUtY29tcG9uZW50JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJyFpc29tb3JwaGljLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vZmlsZXBpY2tlci5jc3MnO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RhcnRMb2dvVXBsb2FkZXJMb2FkZXIsIGRvVXBsb2FkTG9nbywgZG9SZW1vdmVMb2dvLCBzdG9wTG9nb1VwbG9hZGVyTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlTG9nbyc7XG5pbXBvcnQgeyBjaGFuZ2UgfSBmcm9tICdyZWR1eC1mb3JtJztcbi8vIFRyYW5zbGF0aW9uXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcbmltcG9ydCB7IG1heFVwbG9hZFNpemUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBEcm9wem9uZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb1VwbG9hZExvZ286IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICAgICAgZG9SZW1vdmVMb2dvOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICAgIHN0YXJ0TG9nb1VwbG9hZGVyTG9hZGVyOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRhdGE6IG51bGxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0aGlzLnN1Y2Nlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRlZGZpbGUgPSB0aGlzLmFkZGVkZmlsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3B6b25lID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzdWNjZXNzKGZpbGUsIGZyb21TZXJ2ZXIpIHtcbiAgICAgICAgY29uc3QgeyBkb1VwbG9hZExvZ28sIGRhdGEsIGNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZpbGVOYW1lID0gZnJvbVNlcnZlci5maWxlLmZpbGVuYW1lO1xuICAgICAgICBsZXQgb2xkUGljdHVyZSA9IGRhdGEgIT0gbnVsbCA/IGRhdGEudmFsdWUgOiBudWxsO1xuICAgICAgICBsZXQgZmlsZVBhdGggPSBmcm9tU2VydmVyLmZpbGUucGF0aDtcbiAgICAgICAgZG9VcGxvYWRMb2dvKGZpbGVOYW1lLCBmaWxlUGF0aCwgb2xkUGljdHVyZSk7XG4gICAgICAgIGF3YWl0IGNoYW5nZSgnU2l0ZVNldHRpbmdzRm9ybScsICdMb2dvJywgZmlsZU5hbWUpO1xuICAgIH1cblxuICAgIGFkZGVkZmlsZShmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhcnRMb2dvVXBsb2FkZXJMb2FkZXIgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRsZXQgZmlsZUZvcm1hdGVzID0gW1xuXHRcdFx0J2ltYWdlL3N2Zyt4bWwnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3NxbCcsXG5cdFx0XHQnYXBwbGljYXRpb24vcGRmJyxcblx0XHRcdCdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG5cdFx0XHQndGV4dC9jc3YnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcblx0XHRcdCdhcHBsaWNhdGlvbi9lcHViK3ppcCcsXG5cdFx0XHQnYXBwbGljYXRpb24vemlwJyxcblx0XHRcdCd0ZXh0L3BsYWluJyxcblx0XHRcdCdhcHBsaWNhdGlvbi9ydGYnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCcsXG5cdFx0XHQnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuXHRcdFx0J3RleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXMnLFxuXHRcdFx0J3RleHQvY2FsZW5kYXInLFxuXHRcdFx0J2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdF07XG5cblxuXHRcdGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+ICgxMDI0ICogMTAyNCAqIG1heFVwbG9hZFNpemUpKSB7XG5cdFx0XHR0b2FzdHIuZXJyb3IoJ01heGltdW0gdXBsb2FkIHNpemUgRXhjZWVkZWQhICcsICdUcnkgYWdhaW4gd2l0aCBhIHNtYWxsZXIgc2l6ZWQgaW1hZ2UnKTtcblx0XHRcdHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcblx0XHR9IGVsc2UgaWYgKGZpbGVGb3JtYXRlcy5pbmRleE9mKGZpbGUgJiYgZmlsZS50eXBlKSA+IDApIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcignRXJyb3IhJywgJ1lvdSBhcmUgdHJ5aW5nIHRvIHVwbG9hZCBpbnZhbGlkIGltYWdlIGZpbGUuIFBsZWFzZSB1cGxvYWQgUE5HLCBKUEcgJiBKUEVHIGZvcm1hdCBpbWFnZSBmaWxlLicpO1xuXHRcdFx0XHRcdHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGVsc2UgaWYgKGZpbGUgJiYgZmlsZS5hY2NlcHRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcignRXJyb3IhJywgJ1lvdSBhcmUgdHJ5aW5nIHRvIHVwbG9hZCBpbnZhbGlkIGltYWdlIGZpbGUuIFBsZWFzZSB1cGxvYWQgUE5HLCBKUEcgJiBKUEVHIGZvcm1hdCBpbWFnZSBmaWxlLicpO1xuXHRcdFx0XHRcdHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRMb2dvVXBsb2FkZXJMb2FkZXIoKTtcblx0XHR9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgICAgICBjb25zdCBkanNDb25maWcgPSB7XG4gICAgICAgICAgICBkaWN0RGVmYXVsdE1lc3NhZ2U6IGZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuY2xpY2tIZXJldG9VcGxvYWRMb2dvKSxcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiBmYWxzZSxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIG1heEZpbGVzaXplOiAxMCxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycsXG4gICAgICAgICAgICBkaWN0TWF4RmlsZXNFeGNlZWRlZDogJ1JlbW92ZSB0aGUgZXhpc3RpbmcgaW1hZ2UgYW5kIHRyeSB1cGxvYWQgYWdhaW4nLFxuICAgICAgICAgICAgcHJldmlld3NDb250YWluZXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb25GaWxldHlwZXM6IFsnLmpwZycsICcucG5nJ10sXG4gICAgICAgICAgICBwb3N0VXJsOiAnL3VwbG9hZExvZ28nXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBpbml0OiBkeiA9PiB0aGlzLmRyb3B6b25lID0gZHosXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN1Y2Nlc3MsXG4gICAgICAgICAgICBhZGRlZGZpbGU6IHRoaXMuYWRkZWRmaWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERyb3B6b25lQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29tcG9uZW50Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJzPXtldmVudEhhbmRsZXJzfVxuICAgICAgICAgICAgICAgICAgICBkanNDb25maWc9e2Rqc0NvbmZpZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgICBjaGFuZ2Vcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgICBkb1VwbG9hZExvZ28sXG4gICAgZG9SZW1vdmVMb2dvLFxuICAgIHN0YXJ0TG9nb1VwbG9hZGVyTG9hZGVyLFxuICAgIHN0b3BMb2dvVXBsb2FkZXJMb2FkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzKShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoRHJvcHpvbmUpKSk7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1NpdGVTZXR0aW5ncy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vU2l0ZVNldHRpbmdzLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1NpdGVTZXR0aW5ncy5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9TaXRlU2V0dGluZ3NGb3JtLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9TaXRlU2V0dGluZ3NGb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1NpdGVTZXR0aW5nc0Zvcm0uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uVXBsb2FkZXItc3BhY2UxLTFvWTlqIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlMi04SG9mQiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2UzLTMxRE9ZIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZTQtMnVGZVcge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlNS0xYWVQeiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2U2LTI3VHJYIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZTctMnZUNDYge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wOC0zeGs1MyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2VUb3AxLTJUcmRDIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wMi0zT0pXWSB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2VUb3AzLTNJSU5zIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZVRvcDQtM0dFUWoge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wNS1QNExTTSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2VUb3A2LTJOdkxJIHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZVRvcDctM3JpLVMge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wOC0zeGs1MyB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItbm9NYXJnaW4tMndUX1kge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nMS0zMGYxcyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZzItM01GbGoge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nMy0zUXVGXyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmc0LTN0WlIyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZzUtMkI0V3gge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nNi0zaFk0SSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmc3LTNrTGt2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZ1RvcDEtMlVQbjUge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmdUb3AyLWI0SjJmIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZ1RvcDMtMlo3S04ge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nVG9wNC0xbkFzUSB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmdUb3A1LTFZTG5EIHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZ1RvcDYtM2pQMFMge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nVG9wNy0ybmdoMiB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLW5vUGFkZGluZy0yUVlXcSB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0Qm9sZC0xd3VTaSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dEJvbGRlci0zQ2hBTyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dE5vcm1hbC0zSmZ4MiB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4uVXBsb2FkZXItdGV4dERhcmtCbHVlLTNUMEZVIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0TGlnaHRCbHVlLTNQQTdUIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dExpZ2h0U2FuZGxlR3JlZW4tMXZXVjMge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRMaWdodEJyb3duLVdUdEVlIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dE1lZGl1bU1hcm9vbi1IcEtmbyB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dEJyb3duLTJXc2NXIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dE1hcm9vbi1qR0lXciB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHREYXJrQnJvd24tMnQ2bi0ge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRNZWRpdW1Ccm93bi0xaHNycCB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRTa3lCbHVlLTIxXzEtIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRHcmF5LWpTZmlzIHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU2l0ZVNldHRpbmdzRm9ybS9VcGxvYWRlci9VcGxvYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbENcIixcImZpbGVcIjpcIlVwbG9hZGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uc3BhY2UxIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTQge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U2IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTcge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AxIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMiB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AzIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDQge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A2IHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDcge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzIge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzUge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc3IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDEge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AyIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDMge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNCB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A1IHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDYge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNyB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLm5vUGFkZGluZyB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGRlciB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE5vcm1hbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4udGV4dERhcmtCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0U2FuZGxlR3JlZW4ge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bU1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJyb3duIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLnRleHREYXJrQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1Ccm93biB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRTa3lCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRHcmF5IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzcGFjZTFcIjogXCJVcGxvYWRlci1zcGFjZTEtMW9ZOWpcIixcblx0XCJzcGFjZTJcIjogXCJVcGxvYWRlci1zcGFjZTItOEhvZkJcIixcblx0XCJzcGFjZTNcIjogXCJVcGxvYWRlci1zcGFjZTMtMzFET1lcIixcblx0XCJzcGFjZTRcIjogXCJVcGxvYWRlci1zcGFjZTQtMnVGZVdcIixcblx0XCJzcGFjZTVcIjogXCJVcGxvYWRlci1zcGFjZTUtMWFlUHpcIixcblx0XCJzcGFjZTZcIjogXCJVcGxvYWRlci1zcGFjZTYtMjdUclhcIixcblx0XCJzcGFjZTdcIjogXCJVcGxvYWRlci1zcGFjZTctMnZUNDZcIixcblx0XCJzcGFjZVRvcDhcIjogXCJVcGxvYWRlci1zcGFjZVRvcDgtM3hrNTNcIixcblx0XCJzcGFjZVRvcDFcIjogXCJVcGxvYWRlci1zcGFjZVRvcDEtMlRyZENcIixcblx0XCJzcGFjZVRvcDJcIjogXCJVcGxvYWRlci1zcGFjZVRvcDItM09KV1lcIixcblx0XCJzcGFjZVRvcDNcIjogXCJVcGxvYWRlci1zcGFjZVRvcDMtM0lJTnNcIixcblx0XCJzcGFjZVRvcDRcIjogXCJVcGxvYWRlci1zcGFjZVRvcDQtM0dFUWpcIixcblx0XCJzcGFjZVRvcDVcIjogXCJVcGxvYWRlci1zcGFjZVRvcDUtUDRMU01cIixcblx0XCJzcGFjZVRvcDZcIjogXCJVcGxvYWRlci1zcGFjZVRvcDYtMk52TElcIixcblx0XCJzcGFjZVRvcDdcIjogXCJVcGxvYWRlci1zcGFjZVRvcDctM3JpLVNcIixcblx0XCJub01hcmdpblwiOiBcIlVwbG9hZGVyLW5vTWFyZ2luLTJ3VF9ZXCIsXG5cdFwicGFkZGluZzFcIjogXCJVcGxvYWRlci1wYWRkaW5nMS0zMGYxc1wiLFxuXHRcInBhZGRpbmcyXCI6IFwiVXBsb2FkZXItcGFkZGluZzItM01GbGpcIixcblx0XCJwYWRkaW5nM1wiOiBcIlVwbG9hZGVyLXBhZGRpbmczLTNRdUZfXCIsXG5cdFwicGFkZGluZzRcIjogXCJVcGxvYWRlci1wYWRkaW5nNC0zdFpSMlwiLFxuXHRcInBhZGRpbmc1XCI6IFwiVXBsb2FkZXItcGFkZGluZzUtMkI0V3hcIixcblx0XCJwYWRkaW5nNlwiOiBcIlVwbG9hZGVyLXBhZGRpbmc2LTNoWTRJXCIsXG5cdFwicGFkZGluZzdcIjogXCJVcGxvYWRlci1wYWRkaW5nNy0za0xrdlwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiVXBsb2FkZXItcGFkZGluZ1RvcDEtMlVQbjVcIixcblx0XCJwYWRkaW5nVG9wMlwiOiBcIlVwbG9hZGVyLXBhZGRpbmdUb3AyLWI0SjJmXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJVcGxvYWRlci1wYWRkaW5nVG9wMy0yWjdLTlwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiVXBsb2FkZXItcGFkZGluZ1RvcDQtMW5Bc1FcIixcblx0XCJwYWRkaW5nVG9wNVwiOiBcIlVwbG9hZGVyLXBhZGRpbmdUb3A1LTFZTG5EXCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJVcGxvYWRlci1wYWRkaW5nVG9wNi0zalAwU1wiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiVXBsb2FkZXItcGFkZGluZ1RvcDctMm5naDJcIixcblx0XCJub1BhZGRpbmdcIjogXCJVcGxvYWRlci1ub1BhZGRpbmctMlFZV3FcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIlVwbG9hZGVyLXRleHRCb2xkLTF3dVNpXCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIlVwbG9hZGVyLXRleHRCb2xkZXItM0NoQU9cIixcblx0XCJ0ZXh0Tm9ybWFsXCI6IFwiVXBsb2FkZXItdGV4dE5vcm1hbC0zSmZ4MlwiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIlVwbG9hZGVyLXRleHREYXJrQmx1ZS0zVDBGVVwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJVcGxvYWRlci10ZXh0TGlnaHRCbHVlLTNQQTdUXCIsXG5cdFwidGV4dExpZ2h0U2FuZGxlR3JlZW5cIjogXCJVcGxvYWRlci10ZXh0TGlnaHRTYW5kbGVHcmVlbi0xdldWM1wiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiVXBsb2FkZXItdGV4dExpZ2h0QnJvd24tV1R0RWVcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiVXBsb2FkZXItdGV4dE1lZGl1bU1hcm9vbi1IcEtmb1wiLFxuXHRcInRleHRCcm93blwiOiBcIlVwbG9hZGVyLXRleHRCcm93bi0yV3NjV1wiLFxuXHRcInRleHRNYXJvb25cIjogXCJVcGxvYWRlci10ZXh0TWFyb29uLWpHSVdyXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIlVwbG9hZGVyLXRleHREYXJrQnJvd24tMnQ2bi1cIixcblx0XCJ0ZXh0TWVkaXVtQnJvd25cIjogXCJVcGxvYWRlci10ZXh0TWVkaXVtQnJvd24tMWhzcnBcIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIlVwbG9hZGVyLXRleHRTa3lCbHVlLTIxXzEtXCIsXG5cdFwidGV4dEdyYXlcIjogXCJVcGxvYWRlci10ZXh0R3JheS1qU2Zpc1wiXG59OyIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjaGFuZ2UgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHtcbiAgICBMT0dPX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgTE9HT19VUExPQURfU1RBUlQsXG4gICAgTE9HT19VUExPQURfU1VDQ0VTUyxcbiAgICBMT0dPX1VQTE9BRF9FUlJPUixcbiAgICBSRU1PVkVfTE9HT19TVEFSVCxcbiAgICBSRU1PVkVfTE9HT19TVUNDRVNTLFxuICAgIFJFTU9WRV9MT0dPX0VSUk9SLFxuICAgIEhPTUVfTE9HT19VUExPQURfTE9BREVSX1NUQVJULFxuICAgIEhPTUVfTE9HT19VUExPQURfU1RBUlQsXG4gICAgSE9NRV9MT0dPX1VQTE9BRF9TVUNDRVNTLFxuICAgIEhPTUVfTE9HT19VUExPQURfRVJST1IsXG4gICAgUkVNT1ZFX0hPTUVfTE9HT19TVEFSVCxcbiAgICBSRU1PVkVfSE9NRV9MT0dPX1NVQ0NFU1MsXG4gICAgUkVNT1ZFX0hPTUVfTE9HT19FUlJPUixcbiAgICBFTUFJTF9MT0dPX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgRU1BSUxfTE9HT19VUExPQURfU1RBUlQsXG4gICAgRU1BSUxfTE9HT19VUExPQURfU1VDQ0VTUyxcbiAgICBFTUFJTF9MT0dPX1VQTE9BRF9FUlJPUixcbiAgICBSRU1PVkVfRU1BSUxfTE9HT19TVEFSVCxcbiAgICBSRU1PVkVfRU1BSUxfTE9HT19TVUNDRVNTLFxuICAgIFJFTU9WRV9FTUFJTF9MT0dPX0VSUk9SLFxuICAgIFVQREFURV9GQVZJQ09OX0xPR09fU1RBUlQsXG4gICAgVVBEQVRFX0ZBVklDT05fTE9HT19TVUNDRVNTLFxuICAgIFVQREFURV9GQVZJQ09OX0xPR09fRVJST1Jcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uL2NvcmUvZmV0Y2gnO1xuaW1wb3J0IHsgc2V0U2l0ZVNldHRpbmdzIH0gZnJvbSAnLi4vc2l0ZVNldHRpbmdzJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGdldExvZ297XG4gICAgZ2V0TG9nbyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIG5hbWVcbiAgICAgIHZhbHVlXG4gICAgICB0eXBlXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBIb21lUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGdldEhvbWVMb2dve1xuICAgIGdldEhvbWVMb2dvIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgICAgIHR5cGVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGVtYWlsTG9nb1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBnZXRFbWFpbExvZ297XG4gICAgZ2V0RW1haWxMb2dvIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgICAgIHR5cGVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGZhdmljb25Mb2dvUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGdldFNpdGVTZXR0aW5nc0xvZ28oJHRpdGxlOiBTdHJpbmchLCAkbmFtZTogU3RyaW5nISkge1xuICAgIGdldFNpdGVTZXR0aW5nc0xvZ28odGl0bGU6JHRpdGxlLCBuYW1lOiAkbmFtZSkge1xuICAgICAgICBzdGF0dXNcbiAgICAgICAgZXJyb3JNZXNzYWdlXG4gICAgICAgIHRpdGxlXG4gICAgICAgIG5hbWVcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGZhdmljb25Mb2dvTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVNpdGVTZXR0aW5nc0xvZ28oJHRpdGxlOiBTdHJpbmchLCAkbmFtZTogU3RyaW5nISwgJHZhbHVlOiBTdHJpbmchKSB7XG4gICAgdXBkYXRlU2l0ZVNldHRpbmdzTG9nbyh0aXRsZTokdGl0bGUsIG5hbWU6ICRuYW1lLCB2YWx1ZTogJHZhbHVlKSB7XG4gICAgICAgIHN0YXR1c1xuICAgICAgICBlcnJvck1lc3NhZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydExvZ29VcGxvYWRlckxvYWRlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMT0dPX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgbG9nb1VwbG9hZGVyTG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcExvZ29VcGxvYWRlckxvYWRlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBMT0dPX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgbG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkTG9nbyhmaWxlTmFtZSwgZmlsZVBhdGgsIG9sZFBpY3R1cmUpIHtcblxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dPX1VQTE9BRF9TVEFSVCB9KTtcblxuICAgICAgICB0cnkge1xuXG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiB1cGxvYWRMb2dvKCRmaWxlTmFtZTogU3RyaW5nLCAkZmlsZVBhdGg6IFN0cmluZykge1xuICAgICAgICAgICAgdXBsb2FkTG9nbyAoZmlsZU5hbWU6JGZpbGVOYW1lLCBmaWxlUGF0aDogJGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9nb1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgZmlsZU5hbWUsIGZpbGVQYXRoIH0sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5IH1dXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IExPR09fVVBMT0FEX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ29VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTaXRlU2V0dGluZ3MoKSk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFBpY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVMb2dvRmlsZShvbGRQaWN0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dPX1VQTE9BRF9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBsb2dvVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlTG9nbyhmaWxlTmFtZSkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9MT0dPX1NUQVJUIH0pO1xuICAgICAgICBkaXNwYXRjaChzdGFydExvZ29VcGxvYWRlckxvYWRlcigpKTtcbiAgICAgICAgZGlzcGF0Y2goY2hhbmdlKCdTaXRlU2V0dGluZ3NGb3JtJywgJ0xvZ28nLCBudWxsKSk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiByZW1vdmVMb2dve1xuICAgICAgICAgIHJlbW92ZUxvZ297XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvZ29cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5IH1dXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9MT0dPX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ29VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTaXRlU2V0dGluZ3MoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUoZmlsZU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0xPR09fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgbG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVMb2dvRmlsZShmaWxlTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL3JlbW92ZUxvZ29GaWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgZnJvbSByZW1vdmUgbG9nbyBmaWxlJywgc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gcmVtb3ZlIGZpbGUnLCBlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVFbWFpbExvZ29GaWxlKGZpbGVOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvcmVtb3ZlRW1haWxMb2dvJywge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgZnJvbSByZW1vdmUgbG9nbyBmaWxlJywgc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gcmVtb3ZlIGZpbGUnLCBlcnJvcik7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRIb21lTG9nb1VwbG9hZGVyTG9hZGVyKCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEhPTUVfTE9HT19VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGhvbWVMb2dvVXBsb2FkZXJMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wSG9tZUxvZ29VcGxvYWRlckxvYWRlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBIT01FX0xPR09fVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBob21lTG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkSG9tZUxvZ28oZmlsZU5hbWUsIGZpbGVQYXRoLCBvbGRQaWN0dXJlKSB7XG5cbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogSE9NRV9MT0dPX1VQTE9BRF9TVEFSVCB9KTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgbXV0YXRpb24gdXBsb2FkSG9tZUxvZ28oJGZpbGVOYW1lOiBTdHJpbmcsICRmaWxlUGF0aDogU3RyaW5nKSB7XG4gICAgICAgICAgICB1cGxvYWRIb21lTG9nbyAoZmlsZU5hbWU6JGZpbGVOYW1lLCBmaWxlUGF0aDogJGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9nb1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgZmlsZU5hbWUsIGZpbGVQYXRoIH0sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBIb21lUXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogSE9NRV9MT0dPX1VQTE9BRF9TVUNDRVNTLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob21lTG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFNpdGVTZXR0aW5ncygpKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkUGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlbW92ZUxvZ29GaWxlKG9sZFBpY3R1cmUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEhPTUVfTE9HT19VUExPQURfRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgaG9tZUxvZ29VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlSG9tZUxvZ28oZmlsZU5hbWUpIHtcblxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfSE9NRV9MT0dPX1NUQVJUIH0pO1xuICAgICAgICBkaXNwYXRjaChzdGFydEhvbWVMb2dvVXBsb2FkZXJMb2FkZXIoKSk7XG4gICAgICAgIGRpc3BhdGNoKGNoYW5nZSgnU2l0ZVNldHRpbmdzRm9ybScsICdob21lTG9nbycsIG51bGwpKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHJlbW92ZUhvbWVMb2dve1xuICAgICAgICAgIHJlbW92ZUhvbWVMb2dve1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAgICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2dvXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogSG9tZVF1ZXJ5IH1dXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9IT01FX0xPR09fU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUxvZ29VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTaXRlU2V0dGluZ3MoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUoZmlsZU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0hPTUVfTE9HT19FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBob21lTG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRFbWFpbExvZ29VcGxvYWRlckxvYWRlcigpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBFTUFJTF9MT0dPX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZW1haWxMb2dvVXBsb2FkZXJMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wRW1haWxMb2dvVXBsb2FkZXJMb2FkZXIoKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogRU1BSUxfTE9HT19VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVtYWlsTG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkRW1haWxMb2dvKGZpbGVOYW1lLCBmaWxlUGF0aCwgb2xkUGljdHVyZSkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEVNQUlMX0xPR09fVVBMT0FEX1NUQVJUIH0pO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiB1cGxvYWRFbWFpbExvZ28oJGZpbGVOYW1lOiBTdHJpbmcsICRmaWxlUGF0aDogU3RyaW5nKSB7XG4gICAgICAgICAgICB1cGxvYWRFbWFpbExvZ28gKGZpbGVOYW1lOiRmaWxlTmFtZSwgZmlsZVBhdGg6ICRmaWxlUGF0aCkge1xuICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvZ29cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGZpbGVOYW1lLCBmaWxlUGF0aCB9LFxuICAgICAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogZW1haWxMb2dvUXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRU1BSUxfTE9HT19VUExPQURfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxMb2dvVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2l0ZVNldHRpbmdzKCkpO1xuICAgICAgICAgICAgICAgIGlmIChvbGRQaWN0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogRU1BSUxfTE9HT19VUExPQURfRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgZW1haWxMb2dvVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1JlbW92ZUVtYWlsTG9nbyhmaWxlTmFtZSkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9FTUFJTF9MT0dPX1NUQVJUIH0pO1xuICAgICAgICBkaXNwYXRjaChzdGFydEVtYWlsTG9nb1VwbG9hZGVyTG9hZGVyKCkpO1xuICAgICAgICBkaXNwYXRjaChjaGFuZ2UoJ1NpdGVTZXR0aW5nc0Zvcm0nLCAnZW1haWxMb2dvJywgbnVsbCkpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgbXV0YXRpb24gcmVtb3ZlRW1haWxMb2dve1xuICAgICAgICAgIHJlbW92ZUVtYWlsTG9nb3tcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9nb1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IGVtYWlsTG9nb1F1ZXJ5IH1dXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9FTUFJTF9MT0dPX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsTG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldFNpdGVTZXR0aW5ncygpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVFbWFpbExvZ29GaWxlKGZpbGVOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9FTUFJTF9MT0dPX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsTG9nb1VwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZhdmljb25Mb2dvID0gYXN5bmMgKGZpbGVOYW1lKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvcmVtb3ZlRmF2aWNvbkxvZ29GaWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbGU6IGZpbGVOYW1lIH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgZnJvbSByZW1vdmUgZmF2aWNvbiBmaWxlJywgc3RhdHVzKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBmcm9tIHJlbW92ZSBmYXZpY29uIGZpbGUnLCBlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRmF2aWNvbkxvZ28gPSAodGl0bGUsIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9GQVZJQ09OX0xPR09fU1RBUlQgfSk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbjogZmF2aWNvbkxvZ29NdXRhdGlvbixcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgbmFtZSwgdmFsdWUgfSxcbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogZmF2aWNvbkxvZ29RdWVyeSwgdmFyaWFibGVzOiB7IHRpdGxlLCBuYW1lIH0gfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcmVtb3ZlRmF2aWNvbkxvZ28ob2xkVmFsdWUpO1xuICAgICAgICBkaXNwYXRjaChjaGFuZ2UoJ1NpdGVTZXR0aW5nc0Zvcm0nLCAnZmF2aWNvbkxvZ28nLCB2YWx1ZSkpO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9GQVZJQ09OX0xPR09fU1VDQ0VTUyB9KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX0ZBVklDT05fTE9HT19FUlJPUiB9KTtcbiAgICAgICAgZGlzcGF0Y2goY2hhbmdlKCdTaXRlU2V0dGluZ3NGb3JtJywgJ2Zhdmljb25Mb2dvJywgbnVsbCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZhdkljb24odGl0bGUsIG5hbWUsIGZpbGVOYW1lKSB7XG5cbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFVQREFURV9GQVZJQ09OX0xPR09fU1RBUlQsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZmF2SWNvbkxvYWRlcjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZGlzcGF0Y2goY2hhbmdlKCdTaXRlU2V0dGluZ3NGb3JtJywgJ2Zhdmljb25Mb2dvJywgbnVsbCkpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiByZW1vdmVGYXZJY29uTG9nb3tcbiAgICAgICAgICAgIHJlbW92ZUZhdkljb25Mb2dve1xuICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvZ29cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBmYXZpY29uTG9nb1F1ZXJ5LCB2YXJpYWJsZXM6IHsgdGl0bGUsIG5hbWUgfSB9XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfRkFWSUNPTl9MT0dPX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdkljb25Mb2FkZXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldFNpdGVTZXR0aW5ncygpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVGYXZpY29uTG9nbyhmaWxlTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfRkFWSUNPTl9MT0dPX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZmF2SWNvbkxvYWRlcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuLy8gUmVhY3QgUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gICAgUm93LFxuICAgIENvbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgcyBmcm9tICcuL0Zhdkljb25VcGxvYWRlci5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmcnO1xuaW1wb3J0IGRlZmF1bHRQaWMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2Zyc7XG5cbi8vIEludGVybmFsIENvbXBvbmVudFxuaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9Mb2FkZXIvTG9hZGVyJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcbmltcG9ydCB7IGRlbGV0ZUZhdkljb24gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VMb2dvJztcblxuY2xhc3MgRmF2SWNvblVwbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGZhdkljb25Mb2FkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZhdkljb25Mb2FkZXI6IGZhbHNlXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmYXZJY29uTG9hZGVyLCBkYXRhOiB7IGxvYWRpbmcsIGdldFNpdGVTZXR0aW5nc0xvZ28gPSB7fSB9LCBmYXZpY29uTG9nbywgZGVsZXRlRmF2SWNvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChzLnRleHRBbGlnbkNlbnRlciwgcy5wb3NpdGlvblJlbGF0aXZlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e2Zhdkljb25Mb2FkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInBhZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIGdldFNpdGVTZXR0aW5nc0xvZ28gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnQucGljQ29udGFpbmVyTWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnByb2ZpbGVQaWN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGltZXN0YW1wIHVzYWdlIGZvciByZWZyZXNoIHRoZSBpbWFnZSB3aGVuIHVwbG9hZCBuZXcgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKC8ke2dldFNpdGVTZXR0aW5nc0xvZ28udmFsdWV9KWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC5wcm9maWxlSW1hZ2VCZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdFx0XHQhbG9hZGluZyAmJiBnZXRTaXRlU2V0dGluZ3NMb2dvICYmICFnZXRTaXRlU2V0dGluZ3NMb2dvLnZhbHVlICYmIDxkaXZcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkZWZhdWx0UGljfSlgIH19XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtidC5wcm9maWxlSW1hZ2VCZ31cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0IWxvYWRpbmcgJiYgZ2V0U2l0ZVNldHRpbmdzTG9nbyA9PT0gbnVsbCAmJiA8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGVmYXVsdFBpY30pYCB9fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YnQucHJvZmlsZUltYWdlQmd9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldFNpdGVTZXR0aW5nc0xvZ28gJiYgZ2V0U2l0ZVNldHRpbmdzTG9nby52YWx1ZSAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZhdkljb24oJ0Zhdmljb24gTG9nbycsICdmYXZpY29uTG9nbycsIGdldFNpdGVTZXR0aW5nc0xvZ28udmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LnRyYXNoSWNvbk5ldywgJ3RyYXNoSWNvbk5ld1JUTCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0RlbGV0ZUljb259IGFsdD0nRGVsZXRlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvTG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3MucG5nRm9udFNpemV9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5wbmdPbmx5TGFiZWx9IC8+PC9wPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSBjbGFzc05hbWU9e2N4KHMuc3BhY2UyLCBzLnNwYWNlVG9wMil9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5mdWxsV2lkdGgsIHMuYnV0dG9uLCBidC5idG5QcmltYXJ5LCBzLm5vUGFkZGluZywgJ3Bob3RvVXBsb2FkQnRuJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bab25lIG9sZEZhdmljb25Mb2dvPXtnZXRTaXRlU2V0dGluZ3NMb2dvICYmIGdldFNpdGVTZXR0aW5nc0xvZ28udmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgICBmYXZJY29uTG9hZGVyOiBzdGF0ZS5sb2FkZXIuZmF2SWNvbkxvYWRlclxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICAgIGRlbGV0ZUZhdkljb25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFN0eWxlcyhzLCBidCksXG4gICAgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpLFxuICAgIGdyYXBocWwoZ3FsYFxuICAgICAgICBxdWVyeSBnZXRTaXRlU2V0dGluZ3NMb2dvKCR0aXRsZTogU3RyaW5nISwgJG5hbWU6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIGdldFNpdGVTZXR0aW5nc0xvZ28odGl0bGU6JHRpdGxlLCBuYW1lOiAkbmFtZSkge1xuICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgLCB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNzcjogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmF2aWNvbiBMb2dvJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmF2aWNvbkxvZ28nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSxcbikoRmF2SWNvblVwbG9hZGVyKTsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBK0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUEzQ0E7QUE0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBOURBO0FBK0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBekVBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBZ0RBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7Ozs7QUExUEE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUE0UEE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9TQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQTREQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXBFQTtBQUFBO0FBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFDQTtBQXZFQTtBQXNFQTtBQXRFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBbUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQThGQTs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBN0dBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFGQTtBQUNBO0FBSEE7QUFRQTtBQURBO0FBQ0E7QUF3R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUFBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBQUE7QUFDQTtBQWJBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBN0dBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFIQTtBQVNBO0FBREE7QUFDQTtBQXVHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUE1QkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFIQTtBQVdBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFxQkE7QUFXQTtBQUNBO0FBREE7QUFEQTs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXpFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFIQTtBQUNBO0FBSEE7QUFlQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQ0E7QUE2REE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBSUE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUZBOzs7Ozs7O0FDOUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXhFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFIQTtBQUNBO0FBSEE7QUFlQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQ0E7QUE0REE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBSUE7QUFjQTtBQUNBO0FBQ0E7QUFEQTtBQUZBOzs7Ozs7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUFsRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBSEE7QUFDQTtBQUhBO0FBZUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUNBO0FBc0RBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBY0E7QUFDQTtBQUNBO0FBREE7QUFGQTs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3REQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7QUF2RUE7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUNBO0FBSEE7QUFPQTtBQURBO0FBQ0E7QUFtRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBWUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBeEdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFIQTtBQVNBO0FBREE7QUFDQTtBQWtHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7Ozs7OztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQTJCQTtBQUNBO0FBRUE7QUFZQTtBQVlBO0FBWUE7QUFZQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBaUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBakJBO0FBQUE7QUFnQkE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBcENBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFrREE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQWxCQTtBQUFBO0FBaUJBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQTdCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQWxDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBQ0E7QUFIQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFxQkE7QUFyQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBNkJBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFDQTtBQUhBO0FBRUE7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXFCQTtBQXJCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFoQkE7QUFBQTtBQWVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQW5DQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaURBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQWtCQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFsQkE7QUFBQTtBQWlCQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUE3QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFsQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWdEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFQQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBaEJBO0FBQUE7QUFlQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQTdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFuQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWlEQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFrQkE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBbEJBO0FBQUE7QUFpQkE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQXZCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBbENBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUErQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQUhBO0FBRUE7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU5BO0FBQUE7QUFLQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFiQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBUkE7QUFZQTtBQUNBO0FBYkE7QUFBQTtBQXNCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQXRCQTtBQUFBO0FBcUJBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUEzQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUF0Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWtEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUE5REE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUFIQTtBQVFBO0FBREE7QUFDQTtBQXlEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFJQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==