(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documentVerification"],{

/***/ "+Uad":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("Yitl");
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

/***/ "6+dN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8ulp");
/* harmony import */ var _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DocumentUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZUeO");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_EditProfileSideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q+EH");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Q7QM");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/documentVerification/DocumentVerification.js";

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








 // Translation

 // Locale



var DocumentVerification = /*#__PURE__*/function (_React$Component) {
  _inherits(DocumentVerification, _React$Component);

  var _super = _createSuper(DocumentVerification);

  function DocumentVerification() {
    _classCallCheck(this, DocumentVerification);

    return _super.apply(this, arguments);
  }

  _createClass(DocumentVerification, [{
    key: "render",
    value: function render() {
      var formatMessage = this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        fluid: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.landingContainer),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 3,
        md: 3,
        lg: 3,
        className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.smPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditProfileSideMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 9,
        md: 9,
        lg: 9,
        className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.smPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: _DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a.infoTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].documentverificaiton, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocumentUpload__WEBPACK_IMPORTED_MODULE_4__["default"], {
        placeholder: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].documentUploadPlaceholder),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      })))));
    }
  }]);

  return DocumentVerification;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(DocumentVerification, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_DocumentVerification_css__WEBPACK_IMPORTED_MODULE_3___default.a)(DocumentVerification)));

/***/ }),

/***/ "8ulp":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("HOIi");
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

/***/ "B6G1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/SiteIcons/pdf_image.png?dfb7987e";

/***/ }),

/***/ "HOIi":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.DocumentVerification-root-2Vq-R {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.DocumentVerification-container-3d-DR {\n  margin: 0 auto;\n  padding-top: 30px;\n  max-width: 1080px;\n  max-width: var(--max-content-width);\n}\n.DocumentVerification-infoTitle-2dD7E {\n    color: #484848;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 0px;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/documentVerification/DocumentVerification.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;CACrC;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;CACnB","file":"DocumentVerification.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.container {\n  margin: 0 auto;\n  padding-top: 30px;\n  max-width: 1080px;\n  max-width: var(--max-content-width);\n}\n.infoTitle {\n    color: #484848;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 0px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "DocumentVerification-root-2Vq-R",
	"container": "DocumentVerification-container-3d-DR",
	"infoTitle": "DocumentVerification-infoTitle-2dD7E"
};

/***/ }),

/***/ "Jcxr":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("T7A/");
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

/***/ "T7A/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "/* Filepicker CSS */\n.filepicker {\n    font-family: inherit;\n}\n\ndiv.filepicker {\n    text-align: center;\n    padding: 5px;\n    background-color: #FFFFFF;\n    border-radius: 5px;\n    min-height: 200px;\n    border: 2px dashed #C7C7C7;\n    margin-bottom: 15px;\n}\n\n/* Icon */\n.filepicker-file-icon\n{\n    position: relative;\n\n    display: inline-block;\n\n    margin: 1.5em 0 2.5em 0;\n    padding-left: 45px;\n\n    color: black;\n}\n.filepicker-file-icon::before\n{\n    position: absolute;\n    top: -7px;\n    left: 0;\n\n    width: 29px;\n    height: 34px;\n\n    content: '';\n\n    border: solid 2px #7F7F7F;\n    border-radius: 2px;\n}\n.filepicker-file-icon::after\n{\n    font-size: 11px;\n    line-height: 1.3;\n\n    position: absolute;\n    top: 9px;\n    left: -4px;\n\n    padding: 0 2px;\n\n    content: 'file';\n    content: attr(data-filetype);\n    text-align: right;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n\n    color: #fff;\n    background-color: #000;\n}\n.filepicker-file-icon .fileCorner\n{\n    position: absolute;\n    top: -7px;\n    left: 22px;\n\n    width: 0;\n    height: 0;\n\n    border-width: 11px 0 0 11px;\n    border-style: solid;\n    border-color: white transparent transparent #920035;\n}\n\n.filepicker .dz-message {\n    margin: 6em auto;\n    color: #767676;\n    font-size: 18px;\n}\n\n.dropzone .dz-preview .dz-image{\n    z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "WkEC":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowDocumentList"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowDocumentList"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fileName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fileType"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":103}};

module.exports = doc;

/***/ }),

/***/ "Yitl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.DocumentList-space1-Qi7aO {\n\tmargin-bottom: 6px !important;\n}\n.DocumentList-space2-c9WsR {\n\tmargin-bottom: 12px !important;\n}\n.DocumentList-space3-3YMOH {\n\tmargin-bottom: 18px !important;\n}\n.DocumentList-space4-1jhs3 {\n\tmargin-bottom: 24px !important;\n}\n.DocumentList-space5-3hMO6 {\n\tmargin-bottom: 30px !important;\n}\n.DocumentList-space6-16Srb {\n\tmargin-bottom: 36px !important;\n}\n.DocumentList-space7-pjgDt {\n\tmargin-bottom: 42px !important;\n}\n.DocumentList-spaceTop8-3-KhG {\n\tmargin-bottom: 48px !important;\n}\n.DocumentList-spaceTop1-3RKRQ {\n\tmargin-top: 6px !important;\n}\n.DocumentList-spaceTop2-KTFqR {\n\tmargin-top: 12px !important;\n}\n.DocumentList-spaceTop3-31qoM {\n\tmargin-top: 18px !important;\n}\n.DocumentList-spaceTop4-2CkJ1 {\n\tmargin-top: 24px !important;\n}\n.DocumentList-spaceTop5-16cYY {\n\tmargin-top: 30px !important;\n}\n.DocumentList-spaceTop6-3KSPg {\n\tmargin-top: 36px !important;\n}\n.DocumentList-spaceTop7-1UB4X {\n\tmargin-top: 42px !important;\n}\n.DocumentList-spaceTop8-3-KhG {\n\tmargin-top: 48px !important;\n}\n.DocumentList-noMargin-2dXnb {\n\tmargin: 0px !important;\n}\n.DocumentList-padding1-2Ejkm {\n\tpadding-bottom: 6px !important;\n}\n.DocumentList-padding2-3TQZ6 {\n\tpadding-bottom: 12px !important;\n}\n.DocumentList-padding3--tyYE {\n\tpadding-bottom: 18px !important;\n}\n.DocumentList-padding4-1jhKZ {\n\tpadding-bottom: 24px !important;\n}\n.DocumentList-padding5-2AjWD {\n\tpadding-bottom: 30px !important;\n}\n.DocumentList-padding6-336a9 {\n\tpadding-bottom: 36px !important;\n}\n.DocumentList-padding7-3rnHy {\n\tpadding-bottom: 42px !important;\n}\n.DocumentList-paddingTop1-3gN9k {\n\tpadding-top: 6px !important;\n}\n.DocumentList-paddingTop2-12VkA {\n\tpadding-top: 12px !important;\n}\n.DocumentList-paddingTop3-Jut_I {\n\tpadding-top: 18px !important;\n}\n.DocumentList-paddingTop4-1DDz- {\n\tpadding-top: 24px !important;\n}\n.DocumentList-paddingTop5-1mQ4x {\n\tpadding-top: 30px !important;\n}\n.DocumentList-paddingTop6-2_KD_ {\n\tpadding-top: 36px !important;\n}\n.DocumentList-paddingTop7-2W0Dz {\n\tpadding-top: 42px !important;\n}\n.DocumentList-noPadding-1X_VX {\n\tpadding: 0px !important;\n}\n.DocumentList-textBold-3iNne {\n\tfont-weight: 500 !important;\n}\n.DocumentList-textBolder-3kpcy {\n\tfont-weight: 700 !important;\n}\n.DocumentList-textNormal-3p6A3 {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.DocumentList-textDarkBlue-OVtvk {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.DocumentList-textLightBlue-3alCj {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.DocumentList-textLightSandleGreen-czewa {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.DocumentList-textLightBrown-3S8ut {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.DocumentList-textMediumMaroon-1o_nM {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.DocumentList-textBrown-NGk3M {\n\tcolor: #B5DC4B !important;\n}\n.DocumentList-textMaroon-25Hd3 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.DocumentList-textDarkBrown-2DWNi {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.DocumentList-textMediumBrown-EqIAz {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.DocumentList-textSkyBlue-Vev4q {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.DocumentList-textGray-1ThkG {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.DocumentList-listPhotoCover-65oJ2 {\n    display: block;\n    height: 185px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: relative;\n    vertical-align: bottom;\n    overflow: hidden;\n    background-color: #bbb;\n    text-align: center;\n    margin-top: 15px;\n}\n.DocumentList-listPhotoMedia-1_GqT {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n}\n.DocumentList-imgResponsive-3pTV7 {\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/DocumentList/DocumentList.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;IACI,eAAe;IACf,cAAc;IACd,oCAAoC;YAC5B,4BAA4B;IACpC,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,QAAQ;IACR,UAAU;IACV,OAAO;CACV;AACD;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;CACnB","file":"DocumentList.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.listPhotoCover {\n    display: block;\n    height: 185px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: relative;\n    vertical-align: bottom;\n    overflow: hidden;\n    background-color: #bbb;\n    text-align: center;\n    margin-top: 15px;\n}\n.listPhotoMedia {\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    top: 0;\n}\n.imgResponsive {\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "DocumentList-space1-Qi7aO",
	"space2": "DocumentList-space2-c9WsR",
	"space3": "DocumentList-space3-3YMOH",
	"space4": "DocumentList-space4-1jhs3",
	"space5": "DocumentList-space5-3hMO6",
	"space6": "DocumentList-space6-16Srb",
	"space7": "DocumentList-space7-pjgDt",
	"spaceTop8": "DocumentList-spaceTop8-3-KhG",
	"spaceTop1": "DocumentList-spaceTop1-3RKRQ",
	"spaceTop2": "DocumentList-spaceTop2-KTFqR",
	"spaceTop3": "DocumentList-spaceTop3-31qoM",
	"spaceTop4": "DocumentList-spaceTop4-2CkJ1",
	"spaceTop5": "DocumentList-spaceTop5-16cYY",
	"spaceTop6": "DocumentList-spaceTop6-3KSPg",
	"spaceTop7": "DocumentList-spaceTop7-1UB4X",
	"noMargin": "DocumentList-noMargin-2dXnb",
	"padding1": "DocumentList-padding1-2Ejkm",
	"padding2": "DocumentList-padding2-3TQZ6",
	"padding3": "DocumentList-padding3--tyYE",
	"padding4": "DocumentList-padding4-1jhKZ",
	"padding5": "DocumentList-padding5-2AjWD",
	"padding6": "DocumentList-padding6-336a9",
	"padding7": "DocumentList-padding7-3rnHy",
	"paddingTop1": "DocumentList-paddingTop1-3gN9k",
	"paddingTop2": "DocumentList-paddingTop2-12VkA",
	"paddingTop3": "DocumentList-paddingTop3-Jut_I",
	"paddingTop4": "DocumentList-paddingTop4-1DDz-",
	"paddingTop5": "DocumentList-paddingTop5-1mQ4x",
	"paddingTop6": "DocumentList-paddingTop6-2_KD_",
	"paddingTop7": "DocumentList-paddingTop7-2W0Dz",
	"noPadding": "DocumentList-noPadding-1X_VX",
	"textBold": "DocumentList-textBold-3iNne",
	"textBolder": "DocumentList-textBolder-3kpcy",
	"textNormal": "DocumentList-textNormal-3p6A3",
	"textDarkBlue": "DocumentList-textDarkBlue-OVtvk",
	"textLightBlue": "DocumentList-textLightBlue-3alCj",
	"textLightSandleGreen": "DocumentList-textLightSandleGreen-czewa",
	"textLightBrown": "DocumentList-textLightBrown-3S8ut",
	"textMediumMaroon": "DocumentList-textMediumMaroon-1o_nM",
	"textBrown": "DocumentList-textBrown-NGk3M",
	"textMaroon": "DocumentList-textMaroon-25Hd3",
	"textDarkBrown": "DocumentList-textDarkBrown-2DWNi",
	"textMediumBrown": "DocumentList-textMediumBrown-EqIAz",
	"textSkyBlue": "DocumentList-textSkyBlue-Vev4q",
	"textGray": "DocumentList-textGray-1ThkG",
	"listPhotoCover": "DocumentList-listPhotoCover-65oJ2",
	"listPhotoMedia": "DocumentList-listPhotoMedia-1_GqT",
	"imgResponsive": "DocumentList-imgResponsive-3pTV7"
};

/***/ }),

/***/ "ZUeO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/MKj");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Jcxr");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DocumentList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hZVu");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/DocumentUpload/DocumentUpload.js",
    _templateObject,
    _templateObject2;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







 // Style

 // Component

 //compose


var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["query ShowDocumentList {\n    ShowDocumentList {\n        id\n        userId,\n        fileName,\n        fileType\n    }\n  }"])));

var DocumentUpload = /*#__PURE__*/function (_Component) {
  _inherits(DocumentUpload, _Component);

  var _super = _createSuper(DocumentUpload);

  function DocumentUpload(props) {
    var _this;

    _classCallCheck(this, DocumentUpload);

    _this = _super.call(this, props);
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.complete = _this.complete.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(DocumentUpload, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isBrowser = typeof window !== 'undefined';
      var isDocument = (typeof document === "undefined" ? "undefined" : _typeof(document)) !== undefined;

      if (isBrowser && isDocument) {
        document.querySelector(".dz-hidden-input").style.visibility = 'visible';
        document.querySelector(".dz-hidden-input").style.opacity = '0';
        document.querySelector(".dz-hidden-input").style.height = '100%';
        document.querySelector(".dz-hidden-input").style.width = '100%';
        document.querySelector(".dz-hidden-input").style.cursor = 'pointer';
      }
    }
  }, {
    key: "success",
    value: function success(file, fromServer) {
      /*const { listId, createListPhotos } = this.props;
      const { files } = fromServer;
      let fileName = files[0].filename;
      let fileType = files[0].mimetype;
      // Calling Redux action to create a record for uploaded file
      if(listId != undefined) {
        createListPhotos(listId, fileName, fileType);
      }*/
    }
  }, {
    key: "complete",
    value: function () {
      var _complete = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        var mutate, variables, _JSON$parse, files, fileName, fileType, _yield$mutate, data;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mutate = this.props.mutate;
                variables = {};

                if (!(file && file.xhr)) {
                  _context.next = 12;
                  break;
                }

                _JSON$parse = JSON.parse(file.xhr.response), files = _JSON$parse.files;
                fileName = files[0].filename;
                fileType = files[0].mimetype;
                variables = {
                  fileName: fileName,
                  fileType: fileType
                };
                _context.next = 9;
                return mutate({
                  variables: variables,
                  refetchQueries: [{
                    query: query
                  }]
                });

              case 9:
                _yield$mutate = _context.sent;
                data = _yield$mutate.data;

                if (data && data.uploadDocument) {
                  if (data.uploadDocument.status === 'success') {
                    react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].success("Success!", "Your document has been uploaded successfully!");
                  } else {
                    react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error("Error!", "Something went wrong!");
                  }
                }

              case 12:
                this.dropzone.removeFile(file);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function complete(_x) {
        return _complete.apply(this, arguments);
      }

      return complete;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          listId = _this$props.listId;
      var djsConfig = {
        dictDefaultMessage: placeholder,
        addRemoveLinks: false,
        maxFilesize: 10,
        maxFiles: 10,
        acceptedFiles: 'image/*,application/pdf',
        hiddenInputContainer: '.dzInputContainer'
      };
      var componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.pdf'],
        postUrl: '/documents'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this2.dropzone = dz;
        },
        success: this.success,
        complete: this.complete
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('listPhotoContainer'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('dzInputContainer'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DocumentList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }));
    }
  }]);

  return DocumentUpload;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(DocumentUpload, "propTypes", {});

var mapState = function mapState(state) {
  return {};
};

var mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_9__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["mutation uploadDocument($fileName: String,$fileType: String,){\n     uploadDocument(\n       fileName: $fileName,\n       fileType: $fileType\n     ) {    \n         fileName\n         fileType\n         status        \n        }\n }"])))), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch))(DocumentUpload));

/***/ }),

/***/ "gEcB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yBb5");
/* harmony import */ var _components_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kJvh");
/* harmony import */ var _DocumentVerification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6+dN");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/documentVerification/index.js";




var title = 'DocumentVerification';
function action(_ref) {
  var store = _ref.store;
  // From Redux Store
  var isAuthenticated = store.getState().runtime.isAuthenticated;

  if (!isAuthenticated) {
    return {
      redirect: '/login'
    };
  }

  var account = store.getState().account;

  if (account) {
    var document = account.data.verification.isIdVerification;

    if (document == true) {
      return {
        redirect: '/user/verification'
      };
    }
  }

  return {
    title: title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_UserLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DocumentVerification__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 28
      }
    }))
  };
}

/***/ }),

/***/ "hZVu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DocumentList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+Uad");
/* harmony import */ var _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DocumentList_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JRPe");
/* harmony import */ var _public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("B6G1");
/* harmony import */ var _public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("WkEC");
/* harmony import */ var _ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tkYu");
/* harmony import */ var _RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Q7QM");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/DocumentList/DocumentList.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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



 // Style




 //pdf image

 //GraphGL


 //toastr

 // Locale



var DocumentList = /*#__PURE__*/function (_Component) {
  _inherits(DocumentList, _Component);

  var _super = _createSuper(DocumentList);

  function DocumentList(props) {
    var _this;

    _classCallCheck(this, DocumentList);

    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DocumentList, [{
    key: "handleClick",
    value: function () {
      var _handleClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, fileName) {
        var mutate, _yield$mutate, data, resp, _yield$resp$json, status;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mutate = this.props.mutate;
                _context.next = 3;
                return mutate({
                  RemoveDocumentList: _RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9___default.a,
                  variables: {
                    id: id
                  },
                  refetchQueries: [{
                    query: _ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8___default.a
                  }]
                });

              case 3:
                _yield$mutate = _context.sent;
                data = _yield$mutate.data;

                if (!(data && data.RemoveDocumentList && data.RemoveDocumentList.status == "success")) {
                  _context.next = 14;
                  break;
                }

                _context.next = 8;
                return fetch('/deleteDocuments', {
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

              case 8:
                resp = _context.sent;
                _context.next = 11;
                return resp.json();

              case 11:
                _yield$resp$json = _context.sent;
                status = _yield$resp$json.status;
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_10__["toastr"].success("Success!", "Document has been removed successfully!");

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleClick(_x, _x2) {
        return _handleClick.apply(this, arguments);
      }

      return handleClick;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ShowDocumentList = _this$props.data.ShowDocumentList,
          data = _this$props.data;
      var path = "/images/document/";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('row', _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.space2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }
      }, ShowDocumentList && ShowDocumentList.map(function (item, key) {
        var icon = item.fileType == 'application/pdf' ? _public_SiteIcons_pdf_image_png__WEBPACK_IMPORTED_MODULE_7___default.a : path + item.fileName;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center'),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: path + item.fileName,
          target: "_blank",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.listPhotoCover,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 19
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.listPhotoMedia,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: _DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a.imgResponsive,
          src: icon,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 23
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "javascript:void(0);",
          onClick: function onClick() {
            return _this2.handleClick(item.id, item.fileName);
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_11__["default"].removeFile, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 19
          }
        }))));
      }));
    }
  }]);

  return DocumentList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(DocumentList, "defaultProps", {
  data: {
    loading: true,
    showDocumentList: []
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_DocumentList_css__WEBPACK_IMPORTED_MODULE_5___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_ShowListDocument_graphql__WEBPACK_IMPORTED_MODULE_8___default.a, {
  options: {
    fetchPolicy: 'network-only'
  }
}), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(_RemoveDocumentList_graphql__WEBPACK_IMPORTED_MODULE_9___default.a, {
  options: {
    fetchPolicy: 'network-only'
  }
}))(DocumentList));

/***/ }),

/***/ "tkYu":
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RemoveDocumentList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"photosCount"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":86}};

module.exports = doc;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRWZXJpZmljYXRpb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Eb2N1bWVudExpc3QvRG9jdW1lbnRMaXN0LmNzcz9hMjZlIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9kb2N1bWVudFZlcmlmaWNhdGlvbi9Eb2N1bWVudFZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RvY3VtZW50VmVyaWZpY2F0aW9uL0RvY3VtZW50VmVyaWZpY2F0aW9uLmNzcz9kNzk2IiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL1NpdGVJY29ucy9wZGZfaW1hZ2UucG5nIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9kb2N1bWVudFZlcmlmaWNhdGlvbi9Eb2N1bWVudFZlcmlmaWNhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRVcGxvYWQvZmlsZXBpY2tlci5jc3M/NjI5YSIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50VXBsb2FkL2ZpbGVwaWNrZXIuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0L1Nob3dMaXN0RG9jdW1lbnQuZ3JhcGhxbCIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50TGlzdC9Eb2N1bWVudExpc3QuY3NzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRVcGxvYWQvRG9jdW1lbnRVcGxvYWQuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL2RvY3VtZW50VmVyaWZpY2F0aW9uL2luZGV4LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0L0RvY3VtZW50TGlzdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50TGlzdC9SZW1vdmVEb2N1bWVudExpc3QuZ3JhcGhxbCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50TGlzdC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vRG9jdW1lbnRMaXN0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50TGlzdC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0RvY3VtZW50VmVyaWZpY2F0aW9uLmNzcyc7XG5cbmltcG9ydCBEb2N1bWVudFVwbG9hZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RvY3VtZW50VXBsb2FkJztcblxuaW1wb3J0IHtcbiAgR3JpZCxcbiAgUm93LFxuICBDb2xcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgRWRpdFByb2ZpbGVTaWRlTWVudSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VkaXRQcm9maWxlU2lkZU1lbnUnO1xuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IGluamVjdEludGwsIEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNsYXNzIERvY3VtZW50VmVyaWZpY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICA8R3JpZCBmbHVpZD5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT17Y3gocy5sYW5kaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezN9IG1kPXszfSBsZz17M30gY2xhc3NOYW1lPXtzLnNtUGFkZGluZ30+XG4gICAgICAgICAgICAgIDxFZGl0UHJvZmlsZVNpZGVNZW51IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17OX0gbWQ9ezl9IGxnPXs5fSBjbGFzc05hbWU9e3Muc21QYWRkaW5nfT5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17cy5pbmZvVGl0bGV9PlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5kb2N1bWVudHZlcmlmaWNhaXRvbn0gLz5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPERvY3VtZW50VXBsb2FkIHBsYWNlaG9sZGVyPXtmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmRvY3VtZW50VXBsb2FkUGxhY2Vob2xkZXIpfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bCh3aXRoU3R5bGVzKHMpKERvY3VtZW50VmVyaWZpY2F0aW9uKSk7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0RvY3VtZW50VmVyaWZpY2F0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Eb2N1bWVudFZlcmlmaWNhdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Eb2N1bWVudFZlcmlmaWNhdGlvbi5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL1NpdGVJY29ucy9wZGZfaW1hZ2UucG5nP2RmYjc5ODdlXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5Eb2N1bWVudFZlcmlmaWNhdGlvbi1yb290LTJWcS1SIHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbi5Eb2N1bWVudFZlcmlmaWNhdGlvbi1jb250YWluZXItM2QtRFIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIG1heC13aWR0aDogMTA4MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcbi5Eb2N1bWVudFZlcmlmaWNhdGlvbi1pbmZvVGl0bGUtMmREN0Uge1xcbiAgICBjb2xvcjogIzQ4NDg0ODtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL2RvY3VtZW50VmVyaWZpY2F0aW9uL0RvY3VtZW50VmVyaWZpY2F0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0NBQW9DO0NBQ3JDO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkJcIixcImZpbGVcIjpcIkRvY3VtZW50VmVyaWZpY2F0aW9uLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4ucm9vdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBtYXgtd2lkdGg6IDEwODBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG4uaW5mb1RpdGxlIHtcXG4gICAgY29sb3I6ICM0ODQ4NDg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkRvY3VtZW50VmVyaWZpY2F0aW9uLXJvb3QtMlZxLVJcIixcblx0XCJjb250YWluZXJcIjogXCJEb2N1bWVudFZlcmlmaWNhdGlvbi1jb250YWluZXItM2QtRFJcIixcblx0XCJpbmZvVGl0bGVcIjogXCJEb2N1bWVudFZlcmlmaWNhdGlvbi1pbmZvVGl0bGUtMmREN0VcIlxufTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGaWxlcGlja2VyIENTUyAqL1xcbi5maWxlcGlja2VyIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmRpdi5maWxlcGlja2VyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQzdDN0M3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4vKiBJY29uICovXFxuLmZpbGVwaWNrZXItZmlsZS1pY29uXFxue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgbWFyZ2luOiAxLjVlbSAwIDIuNWVtIDA7XFxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcXG5cXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZmlsZXBpY2tlci1maWxlLWljb246OmJlZm9yZVxcbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHdpZHRoOiAyOXB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuXFxuICAgIGNvbnRlbnQ6ICcnO1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjN0Y3RjdGO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5maWxlcGlja2VyLWZpbGUtaWNvbjo6YWZ0ZXJcXG57XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDlweDtcXG4gICAgbGVmdDogLTRweDtcXG5cXG4gICAgcGFkZGluZzogMCAycHg7XFxuXFxuICAgIGNvbnRlbnQ6ICdmaWxlJztcXG4gICAgY29udGVudDogYXR0cihkYXRhLWZpbGV0eXBlKTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4uZmlsZXBpY2tlci1maWxlLWljb24gLmZpbGVDb3JuZXJcXG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICBsZWZ0OiAyMnB4O1xcblxcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcblxcbiAgICBib3JkZXItd2lkdGg6IDExcHggMCAwIDExcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzkyMDAzNTtcXG59XFxuXFxuLmZpbGVwaWNrZXIgLmR6LW1lc3NhZ2Uge1xcbiAgICBtYXJnaW46IDZlbSBhdXRvO1xcbiAgICBjb2xvcjogIzc2NzY3NjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZHJvcHpvbmUgLmR6LXByZXZpZXcgLmR6LWltYWdle1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0RvY3VtZW50TGlzdFwifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93RG9jdW1lbnRMaXN0XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidXNlcklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpbGVOYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpbGVUeXBlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEwM319O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYzsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLkRvY3VtZW50TGlzdC1zcGFjZTEtUWk3YU8ge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlMi1jOVdzUiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlMy0zWU1PSCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlNC0xamhzMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlNS0zaE1PNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlNi0xNlNyYiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlNy1wamdEdCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wOC0zLUtoRyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXNwYWNlVG9wMS0zUktSUSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3AyLUtURnFSIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3AzLTMxcW9NIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3A0LTJDa0oxIHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3A1LTE2Y1lZIHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3A2LTNLU1BnIHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3A3LTFVQjRYIHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtc3BhY2VUb3A4LTMtS2hHIHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3Qtbm9NYXJnaW4tMmRYbmIge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtcGFkZGluZzEtMkVqa20ge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nMi0zVFFaNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nMy0tdHlZRSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nNC0xamhLWiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nNS0yQWpXRCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nNi0zMzZhOSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nNy0zcm5IeSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wMS0zZ045ayB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3AyLTEyVmtBIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3AzLUp1dF9JIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3A0LTFERHotIHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3A1LTFtUTR4IHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3A2LTJfS0RfIHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3A3LTJXMER6IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LW5vUGFkZGluZy0xWF9WWCB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dEJvbGQtM2lObmUge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0Qm9sZGVyLTNrcGN5IHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dE5vcm1hbC0zcDZBMyB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4uRG9jdW1lbnRMaXN0LXRleHREYXJrQmx1ZS1PVnR2ayB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRMaWdodEJsdWUtM2FsQ2oge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dExpZ2h0U2FuZGxlR3JlZW4tY3pld2Ege1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0TGlnaHRCcm93bi0zUzh1dCB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0TWVkaXVtTWFyb29uLTFvX25NIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dEJyb3duLU5HazNNIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRNYXJvb24tMjVIZDMge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dERhcmtCcm93bi0yRFdOaSB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4uRG9jdW1lbnRMaXN0LXRleHRNZWRpdW1Ccm93bi1FcUlBeiB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC10ZXh0U2t5Qmx1ZS1WZXY0cSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5Eb2N1bWVudExpc3QtdGV4dEdyYXktMVRoa0cge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkRvY3VtZW50TGlzdC1saXN0UGhvdG9Db3Zlci02NW9KMiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDE4NXB4O1xcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uRG9jdW1lbnRMaXN0LWxpc3RQaG90b01lZGlhLTFfR3FUIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0b3A6IDA7XFxufVxcbi5Eb2N1bWVudExpc3QtaW1nUmVzcG9uc2l2ZS0zcFRWNyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0RvY3VtZW50TGlzdC9Eb2N1bWVudExpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNELDJCQUEyQjtBQUMzQjtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG9DQUFvQztZQUM1Qiw0QkFBNEI7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0NBQ1Y7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CXCIsXCJmaWxlXCI6XCJEb2N1bWVudExpc3QuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLmxpc3RQaG90b0NvdmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTg1cHg7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5saXN0UGhvdG9NZWRpYSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiAwO1xcbn1cXG4uaW1nUmVzcG9uc2l2ZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNwYWNlMVwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZTEtUWk3YU9cIixcblx0XCJzcGFjZTJcIjogXCJEb2N1bWVudExpc3Qtc3BhY2UyLWM5V3NSXCIsXG5cdFwic3BhY2UzXCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlMy0zWU1PSFwiLFxuXHRcInNwYWNlNFwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZTQtMWpoczNcIixcblx0XCJzcGFjZTVcIjogXCJEb2N1bWVudExpc3Qtc3BhY2U1LTNoTU82XCIsXG5cdFwic3BhY2U2XCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlNi0xNlNyYlwiLFxuXHRcInNwYWNlN1wiOiBcIkRvY3VtZW50TGlzdC1zcGFjZTctcGpnRHRcIixcblx0XCJzcGFjZVRvcDhcIjogXCJEb2N1bWVudExpc3Qtc3BhY2VUb3A4LTMtS2hHXCIsXG5cdFwic3BhY2VUb3AxXCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlVG9wMS0zUktSUVwiLFxuXHRcInNwYWNlVG9wMlwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZVRvcDItS1RGcVJcIixcblx0XCJzcGFjZVRvcDNcIjogXCJEb2N1bWVudExpc3Qtc3BhY2VUb3AzLTMxcW9NXCIsXG5cdFwic3BhY2VUb3A0XCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlVG9wNC0yQ2tKMVwiLFxuXHRcInNwYWNlVG9wNVwiOiBcIkRvY3VtZW50TGlzdC1zcGFjZVRvcDUtMTZjWVlcIixcblx0XCJzcGFjZVRvcDZcIjogXCJEb2N1bWVudExpc3Qtc3BhY2VUb3A2LTNLU1BnXCIsXG5cdFwic3BhY2VUb3A3XCI6IFwiRG9jdW1lbnRMaXN0LXNwYWNlVG9wNy0xVUI0WFwiLFxuXHRcIm5vTWFyZ2luXCI6IFwiRG9jdW1lbnRMaXN0LW5vTWFyZ2luLTJkWG5iXCIsXG5cdFwicGFkZGluZzFcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZzEtMkVqa21cIixcblx0XCJwYWRkaW5nMlwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nMi0zVFFaNlwiLFxuXHRcInBhZGRpbmczXCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmczLS10eVlFXCIsXG5cdFwicGFkZGluZzRcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZzQtMWpoS1pcIixcblx0XCJwYWRkaW5nNVwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nNS0yQWpXRFwiLFxuXHRcInBhZGRpbmc2XCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmc2LTMzNmE5XCIsXG5cdFwicGFkZGluZzdcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZzctM3JuSHlcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wMS0zZ045a1wiLFxuXHRcInBhZGRpbmdUb3AyXCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3AyLTEyVmtBXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZ1RvcDMtSnV0X0lcIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNC0xRER6LVwiLFxuXHRcInBhZGRpbmdUb3A1XCI6IFwiRG9jdW1lbnRMaXN0LXBhZGRpbmdUb3A1LTFtUTR4XCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJEb2N1bWVudExpc3QtcGFkZGluZ1RvcDYtMl9LRF9cIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIkRvY3VtZW50TGlzdC1wYWRkaW5nVG9wNy0yVzBEelwiLFxuXHRcIm5vUGFkZGluZ1wiOiBcIkRvY3VtZW50TGlzdC1ub1BhZGRpbmctMVhfVlhcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIkRvY3VtZW50TGlzdC10ZXh0Qm9sZC0zaU5uZVwiLFxuXHRcInRleHRCb2xkZXJcIjogXCJEb2N1bWVudExpc3QtdGV4dEJvbGRlci0za3BjeVwiLFxuXHRcInRleHROb3JtYWxcIjogXCJEb2N1bWVudExpc3QtdGV4dE5vcm1hbC0zcDZBM1wiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIkRvY3VtZW50TGlzdC10ZXh0RGFya0JsdWUtT1Z0dmtcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiRG9jdW1lbnRMaXN0LXRleHRMaWdodEJsdWUtM2FsQ2pcIixcblx0XCJ0ZXh0TGlnaHRTYW5kbGVHcmVlblwiOiBcIkRvY3VtZW50TGlzdC10ZXh0TGlnaHRTYW5kbGVHcmVlbi1jemV3YVwiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiRG9jdW1lbnRMaXN0LXRleHRMaWdodEJyb3duLTNTOHV0XCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIkRvY3VtZW50TGlzdC10ZXh0TWVkaXVtTWFyb29uLTFvX25NXCIsXG5cdFwidGV4dEJyb3duXCI6IFwiRG9jdW1lbnRMaXN0LXRleHRCcm93bi1OR2szTVwiLFxuXHRcInRleHRNYXJvb25cIjogXCJEb2N1bWVudExpc3QtdGV4dE1hcm9vbi0yNUhkM1wiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJEb2N1bWVudExpc3QtdGV4dERhcmtCcm93bi0yRFdOaVwiLFxuXHRcInRleHRNZWRpdW1Ccm93blwiOiBcIkRvY3VtZW50TGlzdC10ZXh0TWVkaXVtQnJvd24tRXFJQXpcIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIkRvY3VtZW50TGlzdC10ZXh0U2t5Qmx1ZS1WZXY0cVwiLFxuXHRcInRleHRHcmF5XCI6IFwiRG9jdW1lbnRMaXN0LXRleHRHcmF5LTFUaGtHXCIsXG5cdFwibGlzdFBob3RvQ292ZXJcIjogXCJEb2N1bWVudExpc3QtbGlzdFBob3RvQ292ZXItNjVvSjJcIixcblx0XCJsaXN0UGhvdG9NZWRpYVwiOiBcIkRvY3VtZW50TGlzdC1saXN0UGhvdG9NZWRpYS0xX0dxVFwiLFxuXHRcImltZ1Jlc3BvbnNpdmVcIjogXCJEb2N1bWVudExpc3QtaW1nUmVzcG9uc2l2ZS0zcFRWN1wiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBEcm9wem9uZUNvbXBvbmVudCBmcm9tICdyZWFjdC1kcm9wem9uZS1jb21wb25lbnQnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHMgZnJvbSAnIWlzb21vcnBoaWMtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9maWxlcGlja2VyLmNzcyc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IERvY3VtZW50TGlzdCBmcm9tICcuLi9Eb2N1bWVudExpc3QnO1xuXG4vL2NvbXBvc2VcbmltcG9ydCB7IGdyYXBocWwsIGdxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYHF1ZXJ5IFNob3dEb2N1bWVudExpc3Qge1xuICAgIFNob3dEb2N1bWVudExpc3Qge1xuICAgICAgICBpZFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIGZpbGVOYW1lLFxuICAgICAgICBmaWxlVHlwZVxuICAgIH1cbiAgfWA7XG5cbmNsYXNzIERvY3VtZW50VXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuc3VjY2Vzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29tcGxldGUgPSB0aGlzLmNvbXBsZXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICBjb25zdCBpc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBpc0RvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR6LWhpZGRlbi1pbnB1dFwiKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1oaWRkZW4taW5wdXRcIikuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHotaGlkZGVuLWlucHV0XCIpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kei1oaWRkZW4taW5wdXRcIikuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIH1cbiAgfVxuXG4gIHN1Y2Nlc3MoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgIC8qY29uc3QgeyBsaXN0SWQsIGNyZWF0ZUxpc3RQaG90b3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBmaWxlcyB9ID0gZnJvbVNlcnZlcjtcbiAgICBsZXQgZmlsZU5hbWUgPSBmaWxlc1swXS5maWxlbmFtZTtcbiAgICBsZXQgZmlsZVR5cGUgPSBmaWxlc1swXS5taW1ldHlwZTtcbiAgICAvLyBDYWxsaW5nIFJlZHV4IGFjdGlvbiB0byBjcmVhdGUgYSByZWNvcmQgZm9yIHVwbG9hZGVkIGZpbGVcbiAgICBpZihsaXN0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBjcmVhdGVMaXN0UGhvdG9zKGxpc3RJZCwgZmlsZU5hbWUsIGZpbGVUeXBlKTtcbiAgICB9Ki9cbiAgfVxuXG4gIGFzeW5jIGNvbXBsZXRlKGZpbGUpIHtcbiAgICBjb25zdCB7IG11dGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdmFyaWFibGVzID0ge307XG4gICAgaWYgKGZpbGUgJiYgZmlsZS54aHIpIHtcbiAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IEpTT04ucGFyc2UoZmlsZS54aHIucmVzcG9uc2UpO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZXNbMF0uZmlsZW5hbWU7XG4gICAgICBsZXQgZmlsZVR5cGUgPSBmaWxlc1swXS5taW1ldHlwZTtcbiAgICAgIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgIGZpbGVUeXBlXG4gICAgICB9O1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBtdXRhdGUoe1xuICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEudXBsb2FkRG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGRhdGEudXBsb2FkRG9jdW1lbnQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiWW91ciBkb2N1bWVudCBoYXMgYmVlbiB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkVycm9yIVwiLCBcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZmlsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwbGFjZWhvbGRlciwgbGlzdElkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRqc0NvbmZpZyA9IHtcbiAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogcGxhY2Vob2xkZXIsXG4gICAgICBhZGRSZW1vdmVMaW5rczogZmFsc2UsXG4gICAgICBtYXhGaWxlc2l6ZTogMTAsXG4gICAgICBtYXhGaWxlczogMTAsXG4gICAgICBhY2NlcHRlZEZpbGVzOiAnaW1hZ2UvKixhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgaGlkZGVuSW5wdXRDb250YWluZXI6ICcuZHpJbnB1dENvbnRhaW5lcidcbiAgICB9O1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHtcbiAgICAgIGljb25GaWxldHlwZXM6IFsnLmpwZycsICcucG5nJywgJy5wZGYnXSxcbiAgICAgIHBvc3RVcmw6ICcvZG9jdW1lbnRzJ1xuICAgIH07XG4gICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHtcbiAgICAgIGluaXQ6IGR6ID0+IHRoaXMuZHJvcHpvbmUgPSBkeixcbiAgICAgIHN1Y2Nlc3M6IHRoaXMuc3VjY2VzcyxcbiAgICAgIGNvbXBsZXRlOiB0aGlzLmNvbXBsZXRlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdsaXN0UGhvdG9Db250YWluZXInKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZHpJbnB1dENvbnRhaW5lcicpfT5cbiAgICAgICAgICA8RHJvcHpvbmVDb21wb25lbnRcbiAgICAgICAgICAgIGNvbmZpZz17Y29tcG9uZW50Q29uZmlnfVxuICAgICAgICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAgICAgICAgIGRqc0NvbmZpZz17ZGpzQ29uZmlnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RG9jdW1lbnRMaXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7fSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aFN0eWxlcyhzKSxcblxuICBncmFwaHFsKGdxbGBtdXRhdGlvbiB1cGxvYWREb2N1bWVudCgkZmlsZU5hbWU6IFN0cmluZywkZmlsZVR5cGU6IFN0cmluZywpe1xuICAgICB1cGxvYWREb2N1bWVudChcbiAgICAgICBmaWxlTmFtZTogJGZpbGVOYW1lLFxuICAgICAgIGZpbGVUeXBlOiAkZmlsZVR5cGVcbiAgICAgKSB7ICAgIFxuICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgIGZpbGVUeXBlXG4gICAgICAgICBzdGF0dXMgICAgICAgIFxuICAgICAgICB9XG4gfWBcbiAgKSxcbiAgKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKSkpXG4gIChEb2N1bWVudFVwbG9hZCk7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuaW1wb3J0IFVzZXJMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvVXNlckxheW91dCc7XG5cbmltcG9ydCBEb2N1bWVudFZlcmlmaWNhdGlvbiBmcm9tICcuL0RvY3VtZW50VmVyaWZpY2F0aW9uJztcblxuY29uc3QgdGl0bGUgPSAnRG9jdW1lbnRWZXJpZmljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3Rpb24oeyBzdG9yZSB9KSB7XG5cbiAgLy8gRnJvbSBSZWR1eCBTdG9yZVxuICBsZXQgaXNBdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQXV0aGVudGljYXRlZDtcblxuXG4gIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvbG9naW4nIH07XG4gIH1cblxuXG4gIGxldCBhY2NvdW50ID0gc3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50O1xuXG4gIGlmIChhY2NvdW50KSB7XG4gICAgbGV0IGRvY3VtZW50ID0gYWNjb3VudC5kYXRhLnZlcmlmaWNhdGlvbi5pc0lkVmVyaWZpY2F0aW9uO1xuICAgIGlmIChkb2N1bWVudCA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4geyByZWRpcmVjdDogJy91c2VyL3ZlcmlmaWNhdGlvbicgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogPFVzZXJMYXlvdXQ+PERvY3VtZW50VmVyaWZpY2F0aW9uIHRpdGxlPXt0aXRsZX0gLz48L1VzZXJMYXlvdXQ+LFxuICB9O1xufVxuXG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ3JhcGhxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbi8vIFN0eWxlXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0RvY3VtZW50TGlzdC5jc3MnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vL3BkZiBpbWFnZVxuaW1wb3J0IHBkZkljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL1NpdGVJY29ucy9wZGZfaW1hZ2UucG5nJztcblxuLy9HcmFwaEdMXG5pbXBvcnQgU2hvd0RvY3VtZW50TGlzdFF1ZXJ5IGZyb20gJy4vU2hvd0xpc3REb2N1bWVudC5ncmFwaHFsJztcbmltcG9ydCBSZW1vdmVEb2N1bWVudExpc3QgZnJvbSAnLi9SZW1vdmVEb2N1bWVudExpc3QuZ3JhcGhxbCc7XG5cbi8vdG9hc3RyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBMb2NhbGVcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG5jbGFzcyBEb2N1bWVudExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHNob3dEb2N1bWVudExpc3Q6IFtdXG4gICAgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlQ2xpY2soaWQsIGZpbGVOYW1lKSB7XG4gICAgY29uc3QgeyBtdXRhdGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IG11dGF0ZSh7XG4gICAgICBSZW1vdmVEb2N1bWVudExpc3QsXG4gICAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogU2hvd0RvY3VtZW50TGlzdFF1ZXJ5IH1dXG4gICAgfSk7XG5cblxuICAgIGlmIChkYXRhICYmIGRhdGEuUmVtb3ZlRG9jdW1lbnRMaXN0ICYmIGRhdGEuUmVtb3ZlRG9jdW1lbnRMaXN0LnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZGVsZXRlRG9jdW1lbnRzJywge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZU5hbWUgfSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2VzcyFcIiwgXCJEb2N1bWVudCBoYXMgYmVlbiByZW1vdmVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhOiB7IFNob3dEb2N1bWVudExpc3QgfSwgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgcGF0aCA9IFwiL2ltYWdlcy9kb2N1bWVudC9cIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3JvdycsIHMuc3BhY2UyKX0+XG4gICAgICAgIHtcbiAgICAgICAgICBTaG93RG9jdW1lbnRMaXN0ICYmIFNob3dEb2N1bWVudExpc3QubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBpY29uID0gaXRlbS5maWxlVHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJyA/IHBkZkljb24gOiAocGF0aCArIGl0ZW0uZmlsZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtjeCgnY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyIHRleHQtY2VudGVyJyl9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BhdGggKyBpdGVtLmZpbGVOYW1lfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmxpc3RQaG90b0NvdmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubGlzdFBob3RvTWVkaWF9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzLmltZ1Jlc3BvbnNpdmV9IHNyYz17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGl0ZW0uaWQsIGl0ZW0uZmlsZU5hbWUpfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5yZW1vdmVGaWxlfSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFN0eWxlcyhzKSxcbiAgZ3JhcGhxbChTaG93RG9jdW1lbnRMaXN0UXVlcnksIHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICB9XG4gIH0pLFxuICBncmFwaHFsKFJlbW92ZURvY3VtZW50TGlzdCwge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgIH1cbiAgfSksXG4pKERvY3VtZW50TGlzdCk7XG5cblxuXG5cblxuIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcIm11dGF0aW9uXCIsXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkludFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJSZW1vdmVEb2N1bWVudExpc3RcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInN0YXR1c1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwaG90b3NDb3VudFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo4Nn19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYzsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7OztBQXpCQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUEwQkE7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7O0FDN0JBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBUUE7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQUFBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBWkE7QUFBQTtBQVdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBd0JBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBMEJBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQTlGQTtBQUNBO0FBREE7QUFDQTtBQWlHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQVNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFKQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQVpBO0FBV0E7QUFYQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBb0JBO0FBQ0E7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7QUF5QkE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUlBOzs7O0FBbkVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQW1FQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBREE7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=