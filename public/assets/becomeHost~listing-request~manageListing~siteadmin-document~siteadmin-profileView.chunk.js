(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["becomeHost~listing-request~manageListing~siteadmin-document~siteadmin-profileView"],{

/***/ "+VAG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ContactSupport.js";

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










var ContactSupport = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactSupport, _React$Component);

  var _super = _createSuper(ContactSupport);

  function ContactSupport() {
    _classCallCheck(this, ContactSupport);

    return _super.apply(this, arguments);
  }

  _createClass(ContactSupport, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var textBold = {
        fontWeight: 'bold'
      };
      var _this$props$content = this.props.content,
          ContactMessage = _this$props$content.ContactMessage,
          email = _this$props$content.email,
          name = _this$props$content.name,
          confirmationCode = _this$props$content.confirmationCode,
          userType = _this$props$content.userType,
          listId = _this$props$content.listId,
          logo = _this$props$content.logo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, "Hi Admin,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }, "A ", userType, " wanted to contact you for the support, regarding resevation #", confirmationCode, " on the property ID ", listId, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: textBold,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }
      }, "Contacter Name:"), " ", name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 77
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: textBold,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }
      }, "Contacter Email:"), " ", email, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 79
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: textBold,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }
      }, "Message:"), ContactMessage && ContactMessage.trim().split("\n").map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 33
          }
        }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 45
          }
        }));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 33
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }));
    }
  }]);

  return ContactSupport;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ContactSupport, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    ContactMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (ContactSupport);

/***/ }),

/***/ "0nSa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingTime", function() { return formattingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInData", function() { return checkInData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIn", function() { return checkIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValue", function() { return checkValue; });
function formattingTime(time) {
  var amPM, updatedTime;

  if (!isNaN(time)) {
    if (time < 11 || time > 23) {
      amPM = "AM";
    } else {
      amPM = "PM";
    }

    if (time < 12) {
      return time + amPM;
    } else {
      if (time > 24) {
        updatedTime = Number(time) - 24;
      } else if (time == 12) {
        updatedTime = 12;
      } else {
        updatedTime = Number(time) - 12;
      }

      return updatedTime + amPM;
    }
  }
}
;
function checkInData(checkDataValue) {
  var checkIn;

  if (checkDataValue === "Flexible") {
    checkIn = "Flexible";
  } else {
    if (checkDataValue != null) {
      checkIn = formattingTime(checkDataValue);
    }
  }

  return checkIn;
}
;
function checkIn(checkInStart, checkInEnd) {
  var checkIn;

  if (checkInStart === "Flexible") {
    checkIn = "Flexible";
  } else {
    if (checkInEnd === "Flexible") {
      checkIn = "From " + formattingTime(checkInStart);
    } else {
      if (checkInStart != null && checkInEnd != null) {
        checkIn = formattingTime(checkInStart) + " - " + formattingTime(checkInEnd);
      }
    }
  }

  return checkIn;
}
;
function checkValue(value, defaultValue) {
  return value !== null ? value : defaultValue;
}
;

/***/ }),

/***/ "1CHt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDates", function() { return getDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return getRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateUsingTimeZone", function() { return getDateUsingTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDateWithTimeZone", function() { return setDateWithTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateRanges", function() { return getDateRanges; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var countries_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IIi8");
/* harmony import */ var countries_db__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(countries_db__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f0Wu");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);



function getDates(startDate, stopDate) {
  var dateArray = [],
      currentDate = new Date(startDate);

  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate.getTime()));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
}
function getRange(dates) {
  var startDate = null,
      endDate = null,
      counter = 0;
  var previousDate = null,
      datesCollection = [];

  if (dates.length > 0) {
    if (dates.length === 1) {
      datesCollection = [{
        startDate: dates[0],
        endDate: dates[0]
      }];
    } else {
      dates.map(function (item) {
        var dateRange = {};
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(item);
        counter++;

        if (previousDate === null) {
          startDate = item;
        }

        if (previousDate != null) {
          var previousDateObject = moment__WEBPACK_IMPORTED_MODULE_0___default()(previousDate);
          var difference = currentDate.diff(previousDateObject, 'days');

          if (difference > 1) {
            endDate = new Date(new Date(previousDate).getTime() + 3600000);
            dateRange = {
              startDate: startDate,
              endDate: endDate
            };
            datesCollection.push(dateRange);
            startDate = item;

            if (counter === dates.length) {
              endDate = item;
              dateRange = {
                startDate: startDate,
                endDate: endDate
              };
              datesCollection.push(dateRange);
            }
          } else {
            if (counter === dates.length) {
              endDate = new Date(new Date(item).getTime() + 3600000);
              dateRange = {
                startDate: startDate,
                endDate: endDate
              };
              datesCollection.push(dateRange);
            }
          }
        }

        previousDate = item;
      });
    }
  }

  return datesCollection;
}
function getDateUsingTimeZone(country, dateFormat) {
  if (!country) return moment__WEBPACK_IMPORTED_MODULE_0___default()();else {
    var convertedDate;
    var timezones = countries_db__WEBPACK_IMPORTED_MODULE_1___default.a && countries_db__WEBPACK_IMPORTED_MODULE_1___default.a.getCountry(country, 'timezones');

    if (timezones && timezones.length > 0) {
      convertedDate = timezones && timezones.length > 0 ? moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(timezones[0]) : null;
    }

    if (convertedDate && convertedDate != null) {
      if (dateFormat) {
        convertedDate = convertedDate.format('YYYY-MM-DD');
      }

      return convertedDate;
    } else {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()();
    }
  }
}
function setDateWithTimeZone(date, country) {
  if (!country || !date) return moment__WEBPACK_IMPORTED_MODULE_0___default()(date);
  var convertedDate;
  var timezones = countries_db__WEBPACK_IMPORTED_MODULE_1___default.a && countries_db__WEBPACK_IMPORTED_MODULE_1___default.a.getCountry(country, 'timezones');

  if (timezones && timezones.length > 0) {
    convertedDate = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(date, timezones[0]);
  }

  return convertedDate || moment__WEBPACK_IMPORTED_MODULE_0___default()(date);
}
function getDateRanges(_ref) {
  var checkIn = _ref.checkIn,
      country = _ref.country,
      checkOut = _ref.checkOut;
  var startDate = setDateWithTimeZone(checkIn, country).startOf('day'),
      endDate = setDateWithTimeZone(checkOut, country).startOf('day'),
      today = getDateUsingTimeZone(country, false).startOf('day');
  return {
    nights: endDate.diff(startDate, 'days'),
    interval: startDate.diff(today, 'days'),
    today: today
  };
}

/***/ }),

/***/ "29fW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ConfirmDocumentVerification.js";

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










var ConfirmDocumentVerification = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmDocumentVerification, _React$Component);

  var _super = _createSuper(ConfirmDocumentVerification);

  function ConfirmDocumentVerification() {
    _classCallCheck(this, ConfirmDocumentVerification);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmDocumentVerification, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          verificationStatus = _this$props$content.verificationStatus,
          name = _this$props$content.name,
          logo = _this$props$content.logo;
      var verificationURL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/user/verification";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }, "Hi ", name, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, "Welcome to ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }, "Your documents have been ", verificationStatus, " in the document verification process."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: buttonStyle,
        href: verificationURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, "Check your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }));
    }
  }]);

  return ConfirmDocumentVerification;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ConfirmDocumentVerification, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    verificationStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (ConfirmDocumentVerification);

/***/ }),

/***/ "45em":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ListPublishRequest.js";

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










var ListPublishRequest = /*#__PURE__*/function (_React$Component) {
  _inherits(ListPublishRequest, _React$Component);

  var _super = _createSuper(ListPublishRequest);

  function ListPublishRequest() {
    _classCallCheck(this, ListPublishRequest);

    return _super.apply(this, arguments);
  }

  _createClass(ListPublishRequest, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          hostName = _this$props$content.hostName,
          listId = _this$props$content.listId,
          listTitle = _this$props$content.listTitle,
          logo = _this$props$content.logo;
      var URL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/become-a-host/".concat(listId, "/home");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }
      }, "Hi Admin,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }
      }, "A new listing ", listTitle, " has been submitted for your approval by the Host ", hostName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: buttonStyle,
        href: URL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, "Click Here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }
      }, "Please review and take necessary action."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 5
        }
      }));
    }
  }]);

  return ListPublishRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ListPublishRequest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userMail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (ListPublishRequest);

/***/ }),

/***/ "4RBu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ConfirmEmail.js";

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










var ConfirmEmail = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmEmail, _React$Component);

  var _super = _createSuper(ConfirmEmail);

  function ConfirmEmail() {
    _classCallCheck(this, ConfirmEmail);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmEmail, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          token = _this$props$content.token,
          email = _this$props$content.email,
          name = _this$props$content.name,
          logo = _this$props$content.logo;
      var verificationURL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/user/verification?confirm=".concat(token, "&email=").concat(email);
      var firstName = name.charAt(0).toUpperCase() + name.slice(1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, "Hi ", firstName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "Welcome to ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], "! In order to get started, you need to confirm your email address."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: buttonStyle,
        href: verificationURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, "Confirm your email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }));
    }
  }]);

  return ConfirmEmail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ConfirmEmail, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (ConfirmEmail);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6MCQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/CompletedReservationGuest.js";

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












var CompletedReservationGuest = /*#__PURE__*/function (_React$Component) {
  _inherits(CompletedReservationGuest, _React$Component);

  var _super = _createSuper(CompletedReservationGuest);

  function CompletedReservationGuest() {
    _classCallCheck(this, CompletedReservationGuest);

    return _super.apply(this, arguments);
  }

  _createClass(CompletedReservationGuest, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '10px',
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var bookingTitle = {
        paddingBottom: '20px',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '25px',
        margin: '0',
        padding: '0',
        textAlign: 'center'
      };
      var profilePic = {
        borderRadius: '999px',
        margin: '0',
        padding: '0',
        lineHeight: '150%',
        borderSpacing: '0',
        width: '125px'
      };
      var userName = {
        color: '#565a5c',
        fontSize: '26px',
        fontWeight: 'bold',
        paddingBottom: '5px'
      };
      var subTitle = {
        color: '#565a5c',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingBottom: '5px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '18px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var space = {
        paddingBottom: '20px'
      };
      var _this$props$content = this.props.content,
          reservationId = _this$props$content.reservationId,
          logo = _this$props$content.logo;
      var _this$props$content2 = this.props.content,
          hostName = _this$props$content2.hostName,
          hostLastName = _this$props$content2.hostLastName,
          hostProfilePic = _this$props$content2.hostProfilePic;
      var messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/review/write/' + reservationId;
      var imageURL;

      if (hostProfilePic) {
        imageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/images/avatar/medium_' + hostProfilePic;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      }, hostProfilePic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: profilePic,
        src: imageURL,
        height: 125,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 41
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: bookingTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 19
        }
      }, "Tell ", hostName, " ", hostLastName, " what you loved ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 67
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }
      }, " and what they can do better")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 19
        }
      }, "You have just checked out, so now is the perfect time to write your review."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 19
        }
      }, "Reviews are an important part of the ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " community. Please take a moment to provide your host with some helpful feedback - it'll only take few minutes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: messageURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }, "Write a Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }));
    }
  }]);

  return CompletedReservationGuest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(CompletedReservationGuest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    hostLastName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    hostProfilePic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CompletedReservationGuest);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9lPf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ReportUserMail.js";

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










var ReportUserMail = /*#__PURE__*/function (_React$Component) {
  _inherits(ReportUserMail, _React$Component);

  var _super = _createSuper(ReportUserMail);

  function ReportUserMail() {
    _classCallCheck(this, ReportUserMail);

    return _super.apply(this, arguments);
  }

  _createClass(ReportUserMail, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          userName = _this$props$content.userName,
          reporterName = _this$props$content.reporterName,
          reportType = _this$props$content.reportType,
          logo = _this$props$content.logo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }
      }, "Hi Admin,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }, "You got a notification for the user violation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }, userName, " is voilating the platform terms and reported by ", reporterName, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 99
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 105
        }
      }), "Violation: ", reportType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 33
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }));
    }
  }]);

  return ReportUserMail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ReportUserMail, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reporterName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reportType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (ReportUserMail);

/***/ }),

/***/ "CsEB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingExpiredHost.js";

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










var BookingExpiredHost = /*#__PURE__*/function (_Component) {
  _inherits(BookingExpiredHost, _Component);

  var _super = _createSuper(BookingExpiredHost);

  function BookingExpiredHost() {
    _classCallCheck(this, BookingExpiredHost);

    return _super.apply(this, arguments);
  }

  _createClass(BookingExpiredHost, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          hostName = _this$props$content.hostName,
          guestName = _this$props$content.guestName,
          listTitle = _this$props$content.listTitle,
          confirmationCode = _this$props$content.confirmationCode,
          logo = _this$props$content.logo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 10
        }
      }, "Hi ", hostName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 10
        }
      }, "Your reservation (", confirmationCode, ") from ", guestName, " at ", listTitle, " has expired.", ' ', guestName, " will be fully refunded."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 10
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }
      }));
    }
  }]);

  return BookingExpiredHost;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(BookingExpiredHost, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BookingExpiredHost);

/***/ }),

/***/ "EALo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/NewInquiry.js";

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












var NewInquiry = /*#__PURE__*/function (_React$Component) {
  _inherits(NewInquiry, _React$Component);

  var _super = _createSuper(NewInquiry);

  function NewInquiry() {
    _classCallCheck(this, NewInquiry);

    return _super.apply(this, arguments);
  }

  _createClass(NewInquiry, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var btnCenter = {
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var _this$props$content = this.props.content,
          receiverName = _this$props$content.receiverName,
          type = _this$props$content.type,
          senderName = _this$props$content.senderName,
          message = _this$props$content.message,
          threadId = _this$props$content.threadId,
          logo = _this$props$content.logo;
      var _this$props$content2 = this.props.content,
          checkIn = _this$props$content2.checkIn,
          checkOut = _this$props$content2.checkOut,
          personCapacity = _this$props$content2.personCapacity;
      var messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/message/' + threadId + '/guest';

      if (type === "host") {
        messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/message/' + threadId + '/host';
      }

      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      var checkOutDate = checkOut != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut).format('ddd, Do MMM, YYYY') : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }
      }, "Hi ", receiverName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 19
        }
      }, "You have a got a new inquiry from ", senderName, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 19
        }
      }, "Check In: ", checkInDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 19
        }
      }, "Check Out: ", checkOutDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 19
        }
      }, "Guests: ", personCapacity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 19
        }
      }, message && message.trim().split("\n").map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 27
          }
        }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 39
          }
        }));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: btnCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: messageURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }, "Respond to ", senderName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 19
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 29
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 9
        }
      }));
    }
  }]);

  return NewInquiry;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(NewInquiry, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    receiverName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    senderName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    personCapacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (NewInquiry);

/***/ }),

/***/ "F8OG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmptySpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("20nU");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/modules/Header.js",
    _this = undefined;







var Header = function Header(props) {
  var style = {
    color: props.color,
    fontWeight: 'bold',
    backgroundColor: '#F7F7F7',
    width: '100%'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    width: "100%",
    style: style,
    color: props.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TD"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TD"], {
    style: {
      color: props.color,
      fontFamily: 'Arial',
      fontSize: '28px',
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmptySpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["Img"], {
    src: _config__WEBPACK_IMPORTED_MODULE_4__["url"] + "/images/logo/" + props.logo,
    width: 150,
    alt: _config__WEBPACK_IMPORTED_MODULE_4__["sitename"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })))))))));
};

Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "FN2N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/modules/EmptySpace.js",
    _this = undefined;

/**
 * EmptySpace:
 * Table-based way to add vertical space. Uses line-height.
 */



var EmptySpace = function EmptySpace(props) {
  var style = {
    lineHeight: "".concat(props.height, "px"),
    fontSize: '1px',
    msoLineHeightRule: 'exactly'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TD"], {
    width: "100%",
    height: "".concat(props.height, "px"),
    style: style,
    dangerouslySetInnerHTML: {
      __html: '&nbsp;'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }))));
};

EmptySpace.defaultProps = {
  height: '16'
};
/* harmony default export */ __webpack_exports__["default"] = (EmptySpace);

/***/ }),

/***/ "Gygm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("FN2N");
/* harmony import */ var _helpers_timeHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("0nSa");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingConfirmationHost.js";

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












var BookingConfirmationHost = /*#__PURE__*/function (_React$Component) {
  _inherits(BookingConfirmationHost, _React$Component);

  var _super = _createSuper(BookingConfirmationHost);

  function BookingConfirmationHost() {
    _classCallCheck(this, BookingConfirmationHost);

    return _super.apply(this, arguments);
  }

  _createClass(BookingConfirmationHost, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '10px',
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var bookingTitle = {
        paddingBottom: '25px',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '48px',
        margin: '0',
        padding: '0',
        textAlign: 'center'
      };
      var profilePic = {
        borderRadius: '999px',
        margin: '0',
        padding: '0',
        lineHeight: '150%',
        borderSpacing: '0',
        width: '125px'
      };
      var userName = {
        color: '#565a5c',
        fontSize: '26px',
        fontWeight: 'bold',
        paddingBottom: '5px'
      };
      var subTitle = {
        color: '#565a5c',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingBottom: '5px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '18px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var space = {
        paddingBottom: '20px'
      };
      var _this$props$content = this.props.content,
          reservationId = _this$props$content.reservationId,
          threadId = _this$props$content.threadId,
          logo = _this$props$content.logo;
      var _this$props$content2 = this.props.content,
          guestName = _this$props$content2.guestName,
          guestLastName = _this$props$content2.guestLastName,
          guestLocation = _this$props$content2.guestLocation,
          guestProfilePic = _this$props$content2.guestProfilePic,
          guestJoinedDate = _this$props$content2.guestJoinedDate;
      var _this$props$content3 = this.props.content,
          checkIn = _this$props$content3.checkIn,
          checkOut = _this$props$content3.checkOut,
          guests = _this$props$content3.guests,
          allowedCheckInTime = _this$props$content3.allowedCheckInTime,
          allowedCheckOutTime = _this$props$content3.allowedCheckOutTime,
          confirmationCode = _this$props$content3.confirmationCode;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      var checkOutDate = checkOut != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut).format('ddd, Do MMM, YYYY') : '';
      var checkInDateShort = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('Do MMMM') : '';
      var guestJoinedYear = guestJoinedDate != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(guestJoinedDate).format('YYYY') : '';
      var itineraryURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/users/trips/itinerary/' + reservationId;
      var messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/message/' + threadId + '/host';
      var imageURL;

      if (guestProfilePic) {
        imageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/images/avatar/medium_' + guestProfilePic;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: bookingTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 19
        }
      }, "New booking confirmed! ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 44
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }, guestName, " arrives"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 54
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, checkInDateShort)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 19
        }
      }, "Send a message to confirm check-in details or welcome ", guestName, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }
      }, guestProfilePic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: profilePic,
        src: imageURL,
        height: 125,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 42
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: userName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }
      }, guestName, " ", guestLastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 78
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, guestLocation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 49
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }
      }, _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " member since ", guestJoinedYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: messageURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }
      }, "Contact Guest")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 19
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: space,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: subTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, "Check In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 57
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 19
        }
      }, checkInDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 45
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 19
        }
      }, Object(_helpers_timeHelper__WEBPACK_IMPORTED_MODULE_8__["checkInData"])(allowedCheckInTime))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: space,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 35
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: space,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: subTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 19
        }
      }, "Check Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 58
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 19
        }
      }, checkOutDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 46
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 19
        }
      }, Object(_helpers_timeHelper__WEBPACK_IMPORTED_MODULE_8__["checkInData"])(allowedCheckOutTime)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: subTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }
      }, "Guests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 57
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }
      }, guests))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: subTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }, "Confirmation Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 68
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }
      }, confirmationCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: itineraryURL,
        style: linkText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }, " View Itinerary")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }
      }));
    }
  }]);

  return BookingConfirmationHost;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BookingConfirmationHost, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestLastName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestLocation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestProfilePic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestJoinedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    allowedCheckInTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    allowedCheckOutTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BookingConfirmationHost);

/***/ }),

/***/ "KBfW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingExpiredGuest.js";

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











var BookingExpiredGuest = /*#__PURE__*/function (_Component) {
  _inherits(BookingExpiredGuest, _Component);

  var _super = _createSuper(BookingExpiredGuest);

  function BookingExpiredGuest() {
    _classCallCheck(this, BookingExpiredGuest);

    return _super.apply(this, arguments);
  }

  _createClass(BookingExpiredGuest, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          listTitle = _this$props$content.listTitle,
          confirmationCode = _this$props$content.confirmationCode,
          checkIn = _this$props$content.checkIn,
          logo = _this$props$content.logo;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 12
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 12
        }
      }, "Hi ", guestName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 12
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 12
        }
      }, "We regret to inform you that your request at ", listTitle, ' ', confirmationCode, " starting on ", checkInDate, " has expired. You will be fully refunded and notified."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 12
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 12
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 22
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_8__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 8
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }));
    }
  }]);

  return BookingExpiredGuest;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(BookingExpiredGuest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BookingExpiredGuest);

/***/ }),

/***/ "KKMN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BanStatusServiceStatusUnBanned.js";

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










var BanStatusServiceStatusUnBanned = /*#__PURE__*/function (_React$Component) {
  _inherits(BanStatusServiceStatusUnBanned, _React$Component);

  var _super = _createSuper(BanStatusServiceStatusUnBanned);

  function BanStatusServiceStatusUnBanned() {
    _classCallCheck(this, BanStatusServiceStatusUnBanned);

    return _super.apply(this, arguments);
  }

  _createClass(BanStatusServiceStatusUnBanned, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          userName = _this$props$content.userName,
          userMail = _this$props$content.userMail,
          adminMail = _this$props$content.adminMail,
          logo = _this$props$content.logo;
      var mailTo = 'mailto:' + adminMail;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }
      }, "Dear ", userName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }
      }, "We have been activated your account and please login with your account. We did disable your account for violating our terms."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }
      }, "Please get in touch with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: mailTo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 32
        }
      }, "us"), ", if you have any questions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 5
        }
      }));
    }
  }]);

  return BanStatusServiceStatusUnBanned;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BanStatusServiceStatusUnBanned, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userMail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BanStatusServiceStatusUnBanned);

/***/ }),

/***/ "KNRk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/AdminListDecline.js";

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










var AdminListDecline = /*#__PURE__*/function (_React$Component) {
  _inherits(AdminListDecline, _React$Component);

  var _super = _createSuper(AdminListDecline);

  function AdminListDecline() {
    _classCallCheck(this, AdminListDecline);

    return _super.apply(this, arguments);
  }

  _createClass(AdminListDecline, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          hostName = _this$props$content.hostName,
          listId = _this$props$content.listId,
          listTitle = _this$props$content.listTitle,
          logo = _this$props$content.logo,
          reason = _this$props$content.reason;
      var URL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/become-a-host/".concat(listId, "/home");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }
      }, "Hi ", hostName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }
      }, "Admin has declined your listing request for the ", listTitle, " due to the reason of  ", reason, ". Kindly update the listing information and submit for the list approval."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: buttonStyle,
        href: URL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }
      }, "Update Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 5
        }
      }));
    }
  }]);

  return AdminListDecline;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(AdminListDecline, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userMail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (AdminListDecline);

/***/ }),

/***/ "OmRg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/NewMessage.js";

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












var NewMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(NewMessage, _React$Component);

  var _super = _createSuper(NewMessage);

  function NewMessage() {
    _classCallCheck(this, NewMessage);

    return _super.apply(this, arguments);
  }

  _createClass(NewMessage, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var btnCenter = {
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var _this$props$content = this.props.content,
          receiverName = _this$props$content.receiverName,
          type = _this$props$content.type,
          senderName = _this$props$content.senderName,
          message = _this$props$content.message,
          threadId = _this$props$content.threadId,
          logo = _this$props$content.logo;
      var messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/message/' + threadId + '/guest';

      if (type === "host") {
        messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/message/' + threadId + '/host';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 19
        }
      }, "Hi ", receiverName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 19
        }
      }, "You have a got a new message from ", senderName, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }
      }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }, message && message.trim().split("\n").map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 27
          }
        }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 39
          }
        }));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: btnCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: messageURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "Respond to ", senderName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 29
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }));
    }
  }]);

  return NewMessage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(NewMessage, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    receiverName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    senderName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (NewMessage);

/***/ }),

/***/ "Q9cp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JRPe");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FN2N");
/* harmony import */ var _modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nxU3");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingRequestHost.js";

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














var BookingRequestHost = /*#__PURE__*/function (_React$Component) {
  _inherits(BookingRequestHost, _React$Component);

  var _super = _createSuper(BookingRequestHost);

  function BookingRequestHost() {
    _classCallCheck(this, BookingRequestHost);

    return _super.apply(this, arguments);
  }

  _createClass(BookingRequestHost, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var btnCenter = {
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var _this$props$content = this.props.content,
          reservationId = _this$props$content.reservationId,
          confirmationCode = _this$props$content.confirmationCode,
          hostName = _this$props$content.hostName,
          guestName = _this$props$content.guestName,
          checkIn = _this$props$content.checkIn,
          checkOut = _this$props$content.checkOut,
          threadId = _this$props$content.threadId,
          logo = _this$props$content.logo;
      var _this$props$content2 = this.props.content,
          listTitle = _this$props$content2.listTitle,
          basePrice = _this$props$content2.basePrice,
          total = _this$props$content2.total,
          hostServiceFee = _this$props$content2.hostServiceFee,
          currency = _this$props$content2.currency;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      var checkOutDate = checkOut != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut).format('ddd, Do MMM, YYYY') : ''; // let actionURL = url + '/reservation/current'; 

      var actionURL = _config__WEBPACK_IMPORTED_MODULE_11__["url"] + '/message/' + threadId + '/host';
      var subtotal = total - hostServiceFee;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_4__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_4__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_4__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_4__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }, "Hi ", hostName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 19
        }
      }, "Great News! You have a new reservation(", confirmationCode, ") from ", guestName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 19
        }
      }, guestName, " would stay in the ", listTitle, " from ", checkInDate, " to ", checkOutDate, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 19
        }
      }, "Based on price of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        amount: basePrice,
        currency: currency,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 39
        }
      }), ' ', "per night with the associated cost, your estimated payment for this booking is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        amount: subtotal,
        currency: currency,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 105
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: btnCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: actionURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      }, "Accept or Decline")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 19
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 29
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_11__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_9__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }
      }));
    }
  }]);

  return BookingRequestHost;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BookingRequestHost, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    basePrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(BookingRequestHost));

/***/ }),

/***/ "TOKq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/FeedbackMail.js";

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











var FeedbackMail = /*#__PURE__*/function (_React$Component) {
  _inherits(FeedbackMail, _React$Component);

  var _super = _createSuper(FeedbackMail);

  function FeedbackMail() {
    _classCallCheck(this, FeedbackMail);

    return _super.apply(this, arguments);
  }

  _createClass(FeedbackMail, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var textBold = {
        fontWeight: 'bold'
      };
      var _this$props$content = this.props.content,
          message = _this$props$content.message,
          type = _this$props$content.type,
          name = _this$props$content.name,
          logo = _this$props$content.logo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_5__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, "Hi Admin,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, name, " has sent you a ", type, " that ", message, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 33
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_8__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }));
    }
  }]);

  return FeedbackMail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(FeedbackMail, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (FeedbackMail);

/***/ }),

/***/ "TQ3w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingPreApproval.js";

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










var BookingPreApproval = /*#__PURE__*/function (_React$Component) {
  _inherits(BookingPreApproval, _React$Component);

  var _super = _createSuper(BookingPreApproval);

  function BookingPreApproval() {
    _classCallCheck(this, BookingPreApproval);

    return _super.apply(this, arguments);
  }

  _createClass(BookingPreApproval, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          hostName = _this$props$content.hostName,
          threadId = _this$props$content.threadId,
          listTitle = _this$props$content.listTitle,
          logo = _this$props$content.logo;
      var contactURL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + '/message/' + threadId + '/guest';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, "Hi ", guestName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, hostName, " has pre-approved your request for ", listTitle, ". You can go ahead and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkText,
        href: contactURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 46
        }
      }, "book"), " the pre-approved dates now."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 33
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }));
    }
  }]);

  return BookingPreApproval;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BookingPreApproval, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (BookingPreApproval);

/***/ }),

/***/ "UHRD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
/* harmony import */ var _modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nxU3");
/* harmony import */ var _helpers_dateRange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("1CHt");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/CancelledByGuest.js";

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











 //Helper



var CancelledByGuest = /*#__PURE__*/function (_Component) {
  _inherits(CancelledByGuest, _Component);

  var _super = _createSuper(CancelledByGuest);

  function CancelledByGuest() {
    _classCallCheck(this, CancelledByGuest);

    return _super.apply(this, arguments);
  }

  _createClass(CancelledByGuest, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          hostName = _this$props$content.hostName,
          confirmationCode = _this$props$content.confirmationCode,
          checkIn = _this$props$content.checkIn,
          listTitle = _this$props$content.listTitle,
          payoutToHost = _this$props$content.payoutToHost,
          currency = _this$props$content.currency,
          logo = _this$props$content.logo,
          country = _this$props$content.country;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      var momentStartDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).startOf('day');
      var today = Object(_helpers_dateRange__WEBPACK_IMPORTED_MODULE_11__["getDateUsingTimeZone"])(country, false);
      var interval = momentStartDate.diff(today, 'days');
      var isPastDay = false;

      if (interval < 0) {
        isPastDay = true;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 10
        }
      }, "Hi ", hostName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 10
        }
      }, "We regret to inform you that your guest ", guestName, " has cancelled reservation", ' ', confirmationCode, " at ", listTitle, " ", isPastDay ? 'started' : 'starting', " on ", checkInDate, ".", payoutToHost > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 32
        }
      }, " As per the cancellation policy, your payout will be updated to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        amount: payoutToHost,
        currency: currency,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 30
        }
      }), "."), payoutToHost === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 34
        }
      }, " As per the cancellation policy, you will not receive any payouts for this reservation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }, "Your calendar has also been updated to show that the previously booked dates are now available.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 10
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 19
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }
      }));
    }
  }]);

  return CancelledByGuest;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CancelledByGuest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    payoutToHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CancelledByGuest);

/***/ }),

/***/ "bJol":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ContactEmail.js";

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










var ContactEmail = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactEmail, _React$Component);

  var _super = _createSuper(ContactEmail);

  function ContactEmail() {
    _classCallCheck(this, ContactEmail);

    return _super.apply(this, arguments);
  }

  _createClass(ContactEmail, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          ContactMessage = _this$props$content.ContactMessage,
          email = _this$props$content.email,
          name = _this$props$content.name,
          phoneNumber = _this$props$content.phoneNumber,
          logo = _this$props$content.logo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, "Hi Admin,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, "You got a message from the platform's customer support section, here is the information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, "Name: ", name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 37
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 43
        }
      }), "Email: ", email, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 39
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 45
        }
      }), "Contact Number: ", phoneNumber, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 54
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 60
        }
      }), "Message:", ContactMessage && ContactMessage.trim().split("\n").map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 33
          }
        }, item, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 57
          }
        }));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 33
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }
      }));
    }
  }]);

  return ContactEmail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ContactEmail, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    ContactMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    phoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (ContactEmail);

/***/ }),

/***/ "cD7h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/CompletedReservationHost.js";

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












var CompletedReservationHost = /*#__PURE__*/function (_React$Component) {
  _inherits(CompletedReservationHost, _React$Component);

  var _super = _createSuper(CompletedReservationHost);

  function CompletedReservationHost() {
    _classCallCheck(this, CompletedReservationHost);

    return _super.apply(this, arguments);
  }

  _createClass(CompletedReservationHost, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '10px',
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var bookingTitle = {
        paddingBottom: '20px',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '25px',
        margin: '0',
        padding: '0',
        textAlign: 'center'
      };
      var profilePic = {
        borderRadius: '999px',
        margin: '0',
        padding: '0',
        lineHeight: '150%',
        borderSpacing: '0',
        width: '125px'
      };
      var userName = {
        color: '#565a5c',
        fontSize: '26px',
        fontWeight: 'bold',
        paddingBottom: '5px'
      };
      var subTitle = {
        color: '#565a5c',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingBottom: '5px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '18px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var space = {
        paddingBottom: '20px'
      };
      var _this$props$content = this.props.content,
          reservationId = _this$props$content.reservationId,
          logo = _this$props$content.logo;
      var _this$props$content2 = this.props.content,
          guestName = _this$props$content2.guestName,
          guestLastName = _this$props$content2.guestLastName,
          guestProfilePic = _this$props$content2.guestProfilePic;
      var messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/review/write/' + reservationId;
      var imageURL;

      if (guestProfilePic) {
        imageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/images/avatar/medium_' + guestProfilePic;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      }, guestProfilePic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: profilePic,
        src: imageURL,
        height: 125,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 42
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: bookingTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 19
        }
      }, "Tell ", guestName, " ", guestLastName, " what you loved ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 69
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }
      }, " and what they can do better")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 19
        }
      }, guestName, " just checked out, so now is the perfect time to write your review."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 19
        }
      }, "Reviews are an important part of the ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " community. Please take a moment to provide your guest with some helpful feedback - it'll only take few minutes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: messageURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }, "Write a Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }));
    }
  }]);

  return CompletedReservationHost;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(CompletedReservationHost, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestLastName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestProfilePic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CompletedReservationHost);

/***/ }),

/***/ "cbHD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingRequestGuest.js";

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












var BookingRequestGuest = /*#__PURE__*/function (_React$Component) {
  _inherits(BookingRequestGuest, _React$Component);

  var _super = _createSuper(BookingRequestGuest);

  function BookingRequestGuest() {
    _classCallCheck(this, BookingRequestGuest);

    return _super.apply(this, arguments);
  }

  _createClass(BookingRequestGuest, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var btnCenter = {
        textAlign: 'center'
      };
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          listTitle = _this$props$content.listTitle,
          hostName = _this$props$content.hostName,
          checkIn = _this$props$content.checkIn,
          threadId = _this$props$content.threadId,
          confirmationCode = _this$props$content.confirmationCode,
          logo = _this$props$content.logo;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      var messageURL = _config__WEBPACK_IMPORTED_MODULE_9__["url"] + '/message/' + threadId + '/guest';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }
      }, "Hi ", guestName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }, "Your booking request(", confirmationCode, ") at ", listTitle, " starting on ", checkInDate, " sent to your host ", hostName, ". You will hear from them within 24 hours."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: btnCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: messageURL,
        style: buttonStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }
      }, "Message ", hostName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 19
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 19
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }));
    }
  }]);

  return BookingRequestGuest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BookingRequestGuest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BookingRequestGuest);

/***/ }),

/***/ "ct5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("20nU");
/* harmony import */ var _modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nxU3");
/* harmony import */ var _helpers_dateRange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("1CHt");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/CancelledByHost.js";

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











 //Helper



var CancelledByHost = /*#__PURE__*/function (_Component) {
  _inherits(CancelledByHost, _Component);

  var _super = _createSuper(CancelledByHost);

  function CancelledByHost() {
    _classCallCheck(this, CancelledByHost);

    return _super.apply(this, arguments);
  }

  _createClass(CancelledByHost, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          hostName = _this$props$content.hostName,
          confirmationCode = _this$props$content.confirmationCode,
          checkIn = _this$props$content.checkIn,
          listTitle = _this$props$content.listTitle,
          refundToGuest = _this$props$content.refundToGuest,
          currency = _this$props$content.currency,
          logo = _this$props$content.logo,
          country = _this$props$content.country;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      var momentStartDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).startOf('day');
      var today = Object(_helpers_dateRange__WEBPACK_IMPORTED_MODULE_11__["getDateUsingTimeZone"])(country, false);
      var interval = momentStartDate.diff(today, 'days');
      var isPastDay = false;

      if (interval < 0) {
        isPastDay = true;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 10
        }
      }, "Hi ", guestName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 10
        }
      }, "We regret to inform you that your host ", hostName, " has cancelled your reservation", ' ', confirmationCode, " at ", listTitle, " ", isPastDay ? 'started' : 'starting', " on ", checkInDate, ".", refundToGuest > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 33
        }
      }, ' ', "As per the cancellation policy you will be refunded ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_CurrencyView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        amount: refundToGuest,
        currency: currency,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 70
        }
      }), " and notified.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 10
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_9__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 5
        }
      }));
    }
  }]);

  return CancelledByHost;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(CancelledByHost, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    refundToGuest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

_defineProperty(CancelledByHost, "defaultProps", {
  content: {
    refundToGuest: 0
  }
});

/* harmony default export */ __webpack_exports__["default"] = (CancelledByHost);

/***/ }),

/***/ "dZ27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingConfirmationGuest.js";

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










var BookingConfirmationGuest = /*#__PURE__*/function (_Component) {
  _inherits(BookingConfirmationGuest, _Component);

  var _super = _createSuper(BookingConfirmationGuest);

  function BookingConfirmationGuest() {
    _classCallCheck(this, BookingConfirmationGuest);

    return _super.apply(this, arguments);
  }

  _createClass(BookingConfirmationGuest, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          hostName = _this$props$content.hostName,
          listTitle = _this$props$content.listTitle,
          listCity = _this$props$content.listCity,
          threadId = _this$props$content.threadId,
          logo = _this$props$content.logo;
      var contactURL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + '/message/' + threadId + '/guest';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_2__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 10
        }
      }, "Hi ", guestName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 10
        }
      }, "Pack your bags - you are going to ", listCity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 10
        }
      }, hostName, " has confirmed your request at ", listTitle, ". Please review details of your trip and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkText,
        href: contactURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, "contact host"), ' ', " to coordinate check-in time and key exchange."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 10
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 5
        }
      }));
    }
  }]);

  return BookingConfirmationGuest;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(BookingConfirmationGuest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    listCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BookingConfirmationGuest);

/***/ }),

/***/ "fHvc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/ForgotPasswordEmail.js";

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










var ForgotPasswordEmail = /*#__PURE__*/function (_React$Component) {
  _inherits(ForgotPasswordEmail, _React$Component);

  var _super = _createSuper(ForgotPasswordEmail);

  function ForgotPasswordEmail() {
    _classCallCheck(this, ForgotPasswordEmail);

    return _super.apply(this, arguments);
  }

  _createClass(ForgotPasswordEmail, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          token = _this$props$content.token,
          email = _this$props$content.email,
          name = _this$props$content.name,
          logo = _this$props$content.logo;
      var verificationURL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/password/verification?token=".concat(token, "&email=").concat(email);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, "Hi ", name, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, "You have received a request to reset your password."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, "If you didn\u2019t make the request, just ignore this message. Otherwise, you can reset your password using this link:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: buttonStyle,
        href: verificationURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, "Click here to reset your password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 30,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }));
    }
  }]);

  return ForgotPasswordEmail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ForgotPasswordEmail, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (ForgotPasswordEmail);

/***/ }),

/***/ "hYiS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubject", function() { return getSubject; });
function getSubject(type) {
  var subject, previewText;

  if (type === 'welcomeEmail' || type === 'confirmEmail') {
    subject = 'Please confirm your e-mail address';
    previewText = 'Action Required! Confirm your email';
  }

  if (type === 'bookingRequest') {
    subject = 'You have a new reservation';
    previewText = 'Great News! You have a new reservation';
  }

  if (type === 'bookingRequestGuest') {
    subject = 'Your reservation request sent to your host';
    previewText = 'Great News! Your reservation is shared with host';
  }

  if (type === 'bookingConfirmedToHost') {
    subject = 'You have confirmed a reservation';
    previewText = 'Confirmed Reservation Details';
  }

  if (type === 'bookingConfirmedToGuest') {
    subject = 'Your reservation is confirmed by your host';
    previewText = 'Pack your bag, you are ready for your trip!';
  }

  if (type === 'bookingDeclinedToGuest') {
    subject = 'Your reservation request is declined by your host';
    previewText = 'We are sorry, your request is declined';
  }

  if (type === 'bookingExpiredGuest') {
    subject = 'Your reservation request is expired';
    previewText = 'We are sorry, your request is expired';
  }

  if (type === 'bookingExpiredHost') {
    subject = 'Your reservation is expired';
    previewText = 'Your reservation is expired';
  }

  if (type === 'cancelledByHost') {
    subject = 'Your reservation is cancelled by host';
    previewText = 'Your reservation is cancelled';
  }

  if (type === 'cancelledByGuest') {
    subject = 'Your reservation is cancelled by guest';
    previewText = 'Your reservation is cancelled';
  }

  if (type === 'completedGuest') {
    subject = 'Please write a review for your host';
    previewText = 'Action Required! Write a Review';
  }

  if (type === 'completedHost') {
    subject = 'Please write a review for your guest';
    previewText = 'Action Required! Write a Review';
  }

  if (type === 'forgotPasswordLink') {
    subject = 'Reset your Password';
    previewText = 'Action Required! Reset your Password';
  }

  if (type === 'message') {
    subject = 'You have got a new message';
    previewText = 'Someone sent you a new message!';
  }

  if (type === 'inquiry') {
    subject = 'You have got a new inquiry';
    previewText = 'Someone sent you an inquiry from contact form!';
  }

  if (type === 'documentVerification') {
    subject = 'Documents verification status';
    previewText = 'Documents verification status';
  }

  if (type === 'contact') {
    subject = 'You got a customer support notification';
    previewText = 'You got a customer support notification';
  }

  if (type === 'reportUser') {
    subject = 'You got a notification for user violation';
    previewText = 'You got a notification for user violation. Reporting by someone.';
  }

  if (type === 'bookingPreApproval') {
    subject = 'Host pre-approved your request';
    previewText = 'Booking pre-approved';
  }

  if (type === 'banStatusServiceStatusBanned') {
    subject = 'Your account has been disabled';
    previewText = 'Your account has been disabled!';
  }

  if (type === 'banStatusServiceStatusUnBanned') {
    subject = 'Your account has been enabled';
    previewText = 'Your account has been enabled!';
  }

  if (type === 'contactSupport') {
    subject = 'Customer Support';
    previewText = 'Customer Support';
  }

  if (type === 'userFeedback') {
    subject = 'Customer Feedback';
    previewText = 'Customer Feedback';
  }

  if (type === 'listPublishRequest') {
    subject = 'You have New Listing submission for Approval';
    previewText = 'You have New Listing submission for Approval';
  }

  if (type == 'adminListApprove') {
    subject = 'Your Listing submission is Approved';
    previewText = 'Your Listing submission is Approved';
  }

  if (type == 'adminListReject') {
    subject = 'Your Listing submission is Rejected';
    previewText = 'Your Listing submission is Rejected';
  }

  return {
    subject: subject,
    previewText: previewText
  };
}

/***/ }),

/***/ "htcM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/AdminListApprove.js";

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










var AdminListApprove = /*#__PURE__*/function (_React$Component) {
  _inherits(AdminListApprove, _React$Component);

  var _super = _createSuper(AdminListApprove);

  function AdminListApprove() {
    _classCallCheck(this, AdminListApprove);

    return _super.apply(this, arguments);
  }

  _createClass(AdminListApprove, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '18px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var _this$props$content = this.props.content,
          hostName = _this$props$content.hostName,
          listId = _this$props$content.listId,
          listTitle = _this$props$content.listTitle,
          logo = _this$props$content.logo;
      var URL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/become-a-host/".concat(listId, "/home");
      var listURL = _config__WEBPACK_IMPORTED_MODULE_7__["url"] + "/rooms/".concat(listId, "/preview");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }
      }, "Hi ", hostName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }
      }, "The Admin has verified your listing  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: listURL,
        style: linkText,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 44
        }
      }, " ", listTitle, " "), ". Please publish your listing to get reservations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: buttonStyle,
        href: URL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }
      }, "Publish")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 5
        }
      }));
    }
  }]);

  return AdminListApprove;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(AdminListApprove, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userMail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (AdminListApprove);

/***/ }),

/***/ "j+d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("20nU");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/modules/Footer.js",
    _this = undefined;





var Footer = function Footer(props) {
  var style = {
    backgroundColor: '#f7f7f7'
  };
  var spaceStyle = {
    paddingBottom: '25px',
    paddingLeft: '5px',
    color: '#9ca299',
    fontSize: '14px',
    textAlign: 'center'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    width: "100%",
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TD"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: spaceStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Sent with \u2764 from ", _config__WEBPACK_IMPORTED_MODULE_2__["sitename"])))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "ls4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/layouts/Layout.js",
    _this = undefined;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    width: "100%",
    style: {
      WebkitTextSizeAdjust: '100%',
      msTextSizeAdjust: '100%',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      borderCollapse: 'collapse',
      margin: '0px auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TD"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    style: {
      WebkitTextSizeAdjust: '100%',
      msTextSizeAdjust: '100%',
      msoTableLspace: '0pt',
      msoTableRspace: '0pt',
      borderCollapse: 'collapse',
      margin: '0px auto',
      backgroundColor: '#F7F7F7',
      width: '100%',
      maxWidth: '650px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TD"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, props.children))))))));
});

/***/ }),

/***/ "nxU3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/modules/CurrencyView.js";

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



 //import { injectIntl } from 'react-intl';

var CurrencyView = /*#__PURE__*/function (_Component) {
  _inherits(CurrencyView, _Component);

  var _super = _createSuper(CurrencyView);

  function CurrencyView() {
    _classCallCheck(this, CurrencyView);

    return _super.apply(this, arguments);
  }

  _createClass(CurrencyView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          amount = _this$props.amount,
          currency = _this$props.currency; //const { formatNumber } = this.props.intl;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, amount.toLocaleString(_config__WEBPACK_IMPORTED_MODULE_2__["locales"][0], {
        style: 'currency',
        currency: currency
      }));
    }
  }]);

  return CurrencyView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //export default injectIntl(CurrencyView);


_defineProperty(CurrencyView, "propTypes", {
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (CurrencyView);

/***/ }),

/***/ "pnYW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EmptySpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FN2N");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/modules/Body.js",
    _this = undefined;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TR"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_1__["TD"], {
    style: props.textStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, props.children))));
});

/***/ }),

/***/ "rKAv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pnYW");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BanStatusServiceStatusBanned.js";

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










var BanStatusServiceStatusBanned = /*#__PURE__*/function (_React$Component) {
  _inherits(BanStatusServiceStatusBanned, _React$Component);

  var _super = _createSuper(BanStatusServiceStatusBanned);

  function BanStatusServiceStatusBanned() {
    _classCallCheck(this, BanStatusServiceStatusBanned);

    return _super.apply(this, arguments);
  }

  _createClass(BanStatusServiceStatusBanned, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: 0,
        fontFamily: 'Arial',
        padding: '10px 16px',
        textDecoration: 'none',
        borderRadius: '2px',
        border: '1px solid',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'normal',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        background: '#ffffff',
        borderColor: '#F7A31B',
        backgroundColor: '#F7A31B',
        color: '#ffffff',
        borderTopWidth: '1px'
      };
      var linkText = {
        color: '#F7A31B',
        fontSize: '16px',
        textDecoration: 'none',
        cursor: 'pointer'
      };
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          userName = _this$props$content.userName,
          userMail = _this$props$content.userMail,
          adminMail = _this$props$content.adminMail,
          logo = _this$props$content.logo;
      var mailTo = 'mailto:' + adminMail;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Body__WEBPACK_IMPORTED_MODULE_4__["default"], {
        textStyle: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, "Dear ", userName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, "We have been disabled your account for violating our terms."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, "Please get in touch with our ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: mailTo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 54
        }
      }, "support team"), ", if you have any questions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 33
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_7__["sitename"], " Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_6__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }));
    }
  }]);

  return BanStatusServiceStatusBanned;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BanStatusServiceStatusBanned, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    userMail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BanStatusServiceStatusBanned);

/***/ }),

/***/ "xEyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return sendEmail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRPe");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y0DV");
/* harmony import */ var _template_EmailTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xPpS");
/* harmony import */ var _template_subjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hYiS");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/sendEmail.js";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function sendEmail(_x, _x2, _x3) {
  return _sendEmail.apply(this, arguments);
}

function _sendEmail() {
  _sendEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(to, type, content) {
    var html, subject, previewText, subjectData, emailContent, query, logoResp, _yield$logoResp$json, data, mailOptions, resp, _yield$resp$json, status, response;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            subjectData = Object(_template_subjects__WEBPACK_IMPORTED_MODULE_5__["getSubject"])(type), emailContent = content;
            query = "query getEmailLogo {\n        getEmailLogo { \n          name\n          value\n        }\n      }";

            if (!(content && !content.logo)) {
              _context.next = 11;
              break;
            }

            _context.next = 5;
            return Object(_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])('/graphql', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query
              }),
              credentials: 'include'
            });

          case 5:
            logoResp = _context.sent;
            _context.next = 8;
            return logoResp.json();

          case 8:
            _yield$logoResp$json = _context.sent;
            data = _yield$logoResp$json.data;
            emailContent.logo = data && data.getEmailLogo && data.getEmailLogo.value;

          case 11:
            html = oy_vey__WEBPACK_IMPORTED_MODULE_1___default.a.renderTemplate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
              locale: "en",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 9
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_template_EmailTemplate__WEBPACK_IMPORTED_MODULE_4__["default"], {
              type: type,
              content: emailContent,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 13
              }
            })), {
              title: subjectData.subject,
              previewText: subjectData.previewText
            });
            mailOptions = {
              to: to,
              // list of receivers
              subject: subjectData.subject,
              // Subject line
              //text: textMessage, // plain text body
              html: html
            };
            _context.next = 15;
            return Object(_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])('/sendEmail', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                mailOptions: mailOptions
              }),
              credentials: 'include'
            });

          case 15:
            resp = _context.sent;
            _context.next = 18;
            return resp.json();

          case 18:
            _yield$resp$json = _context.sent;
            status = _yield$resp$json.status;
            response = _yield$resp$json.response;
            return _context.abrupt("return", {
              status: status,
              response: response
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _sendEmail.apply(this, arguments);
}

/***/ }),

/***/ "xPpS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfirmEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4RBu");
/* harmony import */ var _BookingRequestHost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Q9cp");
/* harmony import */ var _BookingConfirmationHost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Gygm");
/* harmony import */ var _BookingConfirmationGuest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dZ27");
/* harmony import */ var _BookingDeclinedGuest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zMi7");
/* harmony import */ var _BookingRequestGuest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cbHD");
/* harmony import */ var _BookingExpiredGuest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("KBfW");
/* harmony import */ var _BookingExpiredHost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("CsEB");
/* harmony import */ var _CancelledByHost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ct5q");
/* harmony import */ var _CancelledByGuest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("UHRD");
/* harmony import */ var _CompletedReservationGuest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("6MCQ");
/* harmony import */ var _CompletedReservationHost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("cD7h");
/* harmony import */ var _ForgotPasswordEmail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("fHvc");
/* harmony import */ var _NewMessage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("OmRg");
/* harmony import */ var _NewInquiry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("EALo");
/* harmony import */ var _ConfirmDocumentVerification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("29fW");
/* harmony import */ var _ContactEmail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("bJol");
/* harmony import */ var _ReportUserMail__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("9lPf");
/* harmony import */ var _BookingPreApproval__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("TQ3w");
/* harmony import */ var _BanStatusServiceStatusBanned__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("rKAv");
/* harmony import */ var _BanStatusServiceStatusUnBanned__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("KKMN");
/* harmony import */ var _ContactSupport__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("+VAG");
/* harmony import */ var _FeedbackMail__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("TOKq");
/* harmony import */ var _ListPublishRequest__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("45em");
/* harmony import */ var _AdminListApprove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("htcM");
/* harmony import */ var _AdminListDecline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("KNRk");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/EmailTemplate.js";

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






























var EmailTemplate = /*#__PURE__*/function (_Component) {
  _inherits(EmailTemplate, _Component);

  var _super = _createSuper(EmailTemplate);

  function EmailTemplate() {
    _classCallCheck(this, EmailTemplate);

    return _super.apply(this, arguments);
  }

  _createClass(EmailTemplate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          content = _this$props.content;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, type === 'welcomeEmail' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmEmail__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 48
        }
      }), type === 'confirmEmail' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmEmail__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 48
        }
      }), type === 'bookingRequest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingRequestHost__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 50
        }
      }), type === 'bookingRequestGuest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingRequestGuest__WEBPACK_IMPORTED_MODULE_7__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 55
        }
      }), type === 'bookingConfirmedToHost' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingConfirmationHost__WEBPACK_IMPORTED_MODULE_4__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 58
        }
      }), type === 'bookingConfirmedToGuest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingConfirmationGuest__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 59
        }
      }), type === 'bookingDeclinedToGuest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingDeclinedGuest__WEBPACK_IMPORTED_MODULE_6__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 58
        }
      }), type === 'bookingExpiredGuest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingExpiredGuest__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 55
        }
      }), type === 'bookingExpiredHost' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingExpiredHost__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 54
        }
      }), type === 'cancelledByHost' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CancelledByHost__WEBPACK_IMPORTED_MODULE_10__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 51
        }
      }), type === 'cancelledByGuest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CancelledByGuest__WEBPACK_IMPORTED_MODULE_11__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 52
        }
      }), type === 'completedGuest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CompletedReservationGuest__WEBPACK_IMPORTED_MODULE_12__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 50
        }
      }), type === 'completedHost' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CompletedReservationHost__WEBPACK_IMPORTED_MODULE_13__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 49
        }
      }), type === 'forgotPasswordLink' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForgotPasswordEmail__WEBPACK_IMPORTED_MODULE_14__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 54
        }
      }), type === 'message' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewMessage__WEBPACK_IMPORTED_MODULE_15__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 43
        }
      }), type === 'inquiry' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewInquiry__WEBPACK_IMPORTED_MODULE_16__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 43
        }
      }), type === 'documentVerification' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmDocumentVerification__WEBPACK_IMPORTED_MODULE_17__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 56
        }
      }), type === 'contact' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactEmail__WEBPACK_IMPORTED_MODULE_18__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 43
        }
      }), type === 'reportUser' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReportUserMail__WEBPACK_IMPORTED_MODULE_19__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 46
        }
      }), type === 'bookingPreApproval' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingPreApproval__WEBPACK_IMPORTED_MODULE_20__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 54
        }
      }), type === 'banStatusServiceStatusBanned' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BanStatusServiceStatusBanned__WEBPACK_IMPORTED_MODULE_21__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 64
        }
      }), type === 'banStatusServiceStatusUnBanned' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BanStatusServiceStatusUnBanned__WEBPACK_IMPORTED_MODULE_22__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 66
        }
      }), type === 'contactSupport' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactSupport__WEBPACK_IMPORTED_MODULE_23__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 50
        }
      }), type === 'userFeedback' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeedbackMail__WEBPACK_IMPORTED_MODULE_24__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 48
        }
      }), type === 'listPublishRequest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListPublishRequest__WEBPACK_IMPORTED_MODULE_25__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 54
        }
      }), type === 'adminListApprove' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminListApprove__WEBPACK_IMPORTED_MODULE_26__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 52
        }
      }), type === 'adminListReject' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminListDecline__WEBPACK_IMPORTED_MODULE_27__["default"], {
        content: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 51
        }
      }));
    }
  }]);

  return EmailTemplate;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(EmailTemplate, "propTypes", {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (EmailTemplate);

/***/ }),

/***/ "zMi7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6IjR");
/* harmony import */ var oy_vey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oy_vey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ls4b");
/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F8OG");
/* harmony import */ var _modules_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("j+d7");
/* harmony import */ var _modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("FN2N");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/core/email/template/BookingDeclinedGuest.js";

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











var BookingDeclinedGuest = /*#__PURE__*/function (_Component) {
  _inherits(BookingDeclinedGuest, _Component);

  var _super = _createSuper(BookingDeclinedGuest);

  function BookingDeclinedGuest() {
    _classCallCheck(this, BookingDeclinedGuest);

    return _super.apply(this, arguments);
  }

  _createClass(BookingDeclinedGuest, [{
    key: "render",
    value: function render() {
      var textStyle = {
        color: '#484848',
        backgroundColor: '#F7F7F7',
        fontFamily: 'Arial',
        fontSize: '16px',
        padding: '35px'
      };
      var _this$props$content = this.props.content,
          guestName = _this$props$content.guestName,
          hostName = _this$props$content.hostName,
          confirmationCode = _this$props$content.confirmationCode,
          checkIn = _this$props$content.checkIn,
          logo = _this$props$content.logo;
      var checkInDate = checkIn != null ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('ddd, Do MMM, YYYY') : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 4
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#F7A31B",
        backgroundColor: "#F7F7F7",
        logo: logo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["Table"], {
        width: "100%",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TR"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(oy_vey__WEBPACK_IMPORTED_MODULE_3__["TD"], {
        style: textStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 10
        }
      }, "Hi ", guestName, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 10
        }
      }, "We regret to inform you that your host ", hostName, " declined your request", ' ', confirmationCode, " starting on ", checkInDate, ". As per the cancellation policy you will be refunded and notified."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 10
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 10
        }
      }, "Thanks, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 22
        }
      }), "The ", _config__WEBPACK_IMPORTED_MODULE_8__["sitename"], " Team"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_EmptySpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
        height: 20,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 5
        }
      }));
    }
  }]);

  return BookingDeclinedGuest;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(BookingDeclinedGuest, "propTypes", {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    hostName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    confirmationCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (BookingDeclinedGuest);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVjb21lSG9zdH5saXN0aW5nLXJlcXVlc3R+bWFuYWdlTGlzdGluZ35zaXRlYWRtaW4tZG9jdW1lbnR+c2l0ZWFkbWluLXByb2ZpbGVWaWV3LmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db250YWN0U3VwcG9ydC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9oZWxwZXJzL3RpbWVIZWxwZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvaGVscGVycy9kYXRlUmFuZ2UuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db25maXJtRG9jdW1lbnRWZXJpZmljYXRpb24uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9MaXN0UHVibGlzaFJlcXVlc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db25maXJtRW1haWwuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9pZ25vcmVkIC9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliIHV0aWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db21wbGV0ZWRSZXNlcnZhdGlvbkd1ZXN0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvaWdub3JlZCAvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zIHV0aWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9SZXBvcnRVc2VyTWFpbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0Jvb2tpbmdFeHBpcmVkSG9zdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL05ld0lucXVpcnkuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC9tb2R1bGVzL0hlYWRlci5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL21vZHVsZXMvRW1wdHlTcGFjZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0Jvb2tpbmdDb25maXJtYXRpb25Ib3N0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQm9va2luZ0V4cGlyZWRHdWVzdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0JhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0FkbWluTGlzdERlY2xpbmUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9OZXdNZXNzYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQm9va2luZ1JlcXVlc3RIb3N0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvRmVlZGJhY2tNYWlsLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQm9va2luZ1ByZUFwcHJvdmFsLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQ2FuY2VsbGVkQnlHdWVzdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0NvbnRhY3RFbWFpbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0NvbXBsZXRlZFJlc2VydmF0aW9uSG9zdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0Jvb2tpbmdSZXF1ZXN0R3Vlc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9DYW5jZWxsZWRCeUhvc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Cb29raW5nQ29uZmlybWF0aW9uR3Vlc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Gb3Jnb3RQYXNzd29yZEVtYWlsLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvc3ViamVjdHMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9BZG1pbkxpc3RBcHByb3ZlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvbW9kdWxlcy9Gb290ZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC9sYXlvdXRzL0xheW91dC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL21vZHVsZXMvQ3VycmVuY3lWaWV3LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvbW9kdWxlcy9Cb2R5LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQmFuU3RhdHVzU2VydmljZVN0YXR1c0Jhbm5lZC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3NlbmRFbWFpbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0VtYWlsVGVtcGxhdGUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Cb29raW5nRGVjbGluZWRHdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIENvbnRhY3RTdXBwb3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBDb250YWN0TWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBsaXN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgICAgIH07XG4gICAgICAgIGxldCB0ZXh0Qm9sZCA9IHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY29udGVudDogeyBDb250YWN0TWVzc2FnZSwgZW1haWwsIG5hbWUsIGNvbmZpcm1hdGlvbkNvZGUsIHVzZXJUeXBlLCBsaXN0SWQsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpIEFkbWluLFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEEge3VzZXJUeXBlfSB3YW50ZWQgdG8gY29udGFjdCB5b3UgZm9yIHRoZSBzdXBwb3J0LCByZWdhcmRpbmcgcmVzZXZhdGlvbiAje2NvbmZpcm1hdGlvbkNvZGV9IG9uIHRoZSBwcm9wZXJ0eSBJRCB7bGlzdElkfS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17dGV4dEJvbGR9PkNvbnRhY3RlciBOYW1lOjwvc3Bhbj4ge25hbWV9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17dGV4dEJvbGR9PkNvbnRhY3RlciBFbWFpbDo8L3NwYW4+IHtlbWFpbH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt0ZXh0Qm9sZH0+TWVzc2FnZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdE1lc3NhZ2UgJiYgKENvbnRhY3RNZXNzYWdlLnRyaW0oKSkuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08YnIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RTdXBwb3J0OyIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXR0aW5nVGltZSh0aW1lKSB7XG4gIGxldCBhbVBNLCB1cGRhdGVkVGltZTtcbiAgaWYgKCFpc05hTih0aW1lKSkge1xuICAgIGlmICh0aW1lIDwgMTEgfHwgdGltZSA+IDIzKSB7XG4gICAgICBhbVBNID0gXCJBTVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbVBNID0gXCJQTVwiO1xuICAgIH1cbiAgICBpZiAodGltZSA8IDEyKSB7XG4gICAgICByZXR1cm4gdGltZSArIGFtUE07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aW1lID4gMjQpIHtcbiAgICAgICAgdXBkYXRlZFRpbWUgPSBOdW1iZXIodGltZSkgLSAyNDtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA9PSAxMikge1xuICAgICAgICB1cGRhdGVkVGltZSA9IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZFRpbWUgPSBOdW1iZXIodGltZSkgLSAxMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cGRhdGVkVGltZSArIGFtUE07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbkRhdGEoY2hlY2tEYXRhVmFsdWUpIHtcbiAgbGV0IGNoZWNrSW47XG4gIGlmIChjaGVja0RhdGFWYWx1ZSA9PT0gXCJGbGV4aWJsZVwiKSB7XG4gICAgY2hlY2tJbiA9IFwiRmxleGlibGVcIjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY2hlY2tEYXRhVmFsdWUgIT0gbnVsbCkge1xuICAgICAgY2hlY2tJbiA9IGZvcm1hdHRpbmdUaW1lKGNoZWNrRGF0YVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hlY2tJbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luKGNoZWNrSW5TdGFydCwgY2hlY2tJbkVuZCkge1xuICBsZXQgY2hlY2tJbjtcbiAgaWYgKGNoZWNrSW5TdGFydCA9PT0gXCJGbGV4aWJsZVwiKSB7XG4gICAgY2hlY2tJbiA9IFwiRmxleGlibGVcIjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoY2hlY2tJbkVuZCA9PT0gXCJGbGV4aWJsZVwiKSB7XG4gICAgICBjaGVja0luID0gXCJGcm9tIFwiICsgZm9ybWF0dGluZ1RpbWUoY2hlY2tJblN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNoZWNrSW5TdGFydCAhPSBudWxsICYmIGNoZWNrSW5FbmQgIT0gbnVsbCkge1xuICAgICAgICBjaGVja0luID0gZm9ybWF0dGluZ1RpbWUoY2hlY2tJblN0YXJ0KSArIFwiIC0gXCIgKyBmb3JtYXR0aW5nVGltZShjaGVja0luRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hlY2tJbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZhbHVlKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59OyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBjb3VudHJpZXNEQiBmcm9tICdjb3VudHJpZXMtZGInXG5pbXBvcnQgbW9tZW50VGltZVpvbmUgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVzKHN0YXJ0RGF0ZSwgc3RvcERhdGUpIHtcblx0bGV0IGRhdGVBcnJheSA9IFtdLCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG5cblx0d2hpbGUgKGN1cnJlbnREYXRlIDw9IHN0b3BEYXRlKSB7XG5cdFx0ZGF0ZUFycmF5LnB1c2gobmV3IERhdGUoY3VycmVudERhdGUuZ2V0VGltZSgpKSk7XG5cdFx0Y3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxKTtcblx0fVxuXG5cdHJldHVybiBkYXRlQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZShkYXRlcykge1xuXHR2YXIgc3RhcnREYXRlID0gbnVsbCwgZW5kRGF0ZSA9IG51bGwsIGNvdW50ZXIgPSAwO1xuXHR2YXIgcHJldmlvdXNEYXRlID0gbnVsbCwgZGF0ZXNDb2xsZWN0aW9uID0gW107XG5cdGlmIChkYXRlcy5sZW5ndGggPiAwKSB7XG5cdFx0aWYgKGRhdGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0ZGF0ZXNDb2xsZWN0aW9uID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnREYXRlOiBkYXRlc1swXSxcblx0XHRcdFx0XHRlbmREYXRlOiBkYXRlc1swXVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGVzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHR2YXIgZGF0ZVJhbmdlID0ge307XG5cdFx0XHRcdHZhciBjdXJyZW50RGF0ZSA9IG1vbWVudChpdGVtKTtcblx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0XHRpZiAocHJldmlvdXNEYXRlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0c3RhcnREYXRlID0gaXRlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJldmlvdXNEYXRlICE9IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgcHJldmlvdXNEYXRlT2JqZWN0ID0gbW9tZW50KHByZXZpb3VzRGF0ZSk7XG5cdFx0XHRcdFx0dmFyIGRpZmZlcmVuY2UgPSBjdXJyZW50RGF0ZS5kaWZmKHByZXZpb3VzRGF0ZU9iamVjdCwgJ2RheXMnKTtcblx0XHRcdFx0XHRpZiAoZGlmZmVyZW5jZSA+IDEpIHtcblx0XHRcdFx0XHRcdGVuZERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZShwcmV2aW91c0RhdGUpLmdldFRpbWUoKSArIDM2MDAwMDApO1xuXHRcdFx0XHRcdFx0ZGF0ZVJhbmdlID0ge1xuXHRcdFx0XHRcdFx0XHRzdGFydERhdGUsXG5cdFx0XHRcdFx0XHRcdGVuZERhdGVcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRkYXRlc0NvbGxlY3Rpb24ucHVzaChkYXRlUmFuZ2UpO1xuXHRcdFx0XHRcdFx0c3RhcnREYXRlID0gaXRlbTtcblx0XHRcdFx0XHRcdGlmIChjb3VudGVyID09PSBkYXRlcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0ZW5kRGF0ZSA9IGl0ZW07XG5cdFx0XHRcdFx0XHRcdGRhdGVSYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRzdGFydERhdGUsXG5cdFx0XHRcdFx0XHRcdFx0ZW5kRGF0ZVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRkYXRlc0NvbGxlY3Rpb24ucHVzaChkYXRlUmFuZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoY291bnRlciA9PT0gZGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdGVuZERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZShpdGVtKS5nZXRUaW1lKCkgKyAzNjAwMDAwKTtcblx0XHRcdFx0XHRcdFx0ZGF0ZVJhbmdlID0ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0RGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRlbmREYXRlXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGRhdGVzQ29sbGVjdGlvbi5wdXNoKGRhdGVSYW5nZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHByZXZpb3VzRGF0ZSA9IGl0ZW07XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGVzQ29sbGVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVVc2luZ1RpbWVab25lKGNvdW50cnksIGRhdGVGb3JtYXQpIHtcblx0aWYgKCFjb3VudHJ5KSByZXR1cm4gbW9tZW50KCk7XG5cdGVsc2Uge1xuXHRcdGxldCBjb252ZXJ0ZWREYXRlO1xuXHRcdGNvbnN0IHRpbWV6b25lcyA9IGNvdW50cmllc0RCICYmIGNvdW50cmllc0RCLmdldENvdW50cnkoY291bnRyeSwgJ3RpbWV6b25lcycpO1xuXHRcdGlmICh0aW1lem9uZXMgJiYgdGltZXpvbmVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnZlcnRlZERhdGUgPSAodGltZXpvbmVzICYmIHRpbWV6b25lcy5sZW5ndGggPiAwKSA/IG1vbWVudFRpbWVab25lLnR6KHRpbWV6b25lc1swXSkgOiBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0ZWREYXRlICYmIGNvbnZlcnRlZERhdGUgIT0gbnVsbCkge1xuXHRcdFx0aWYgKGRhdGVGb3JtYXQpIHtcblx0XHRcdFx0Y29udmVydGVkRGF0ZSA9IGNvbnZlcnRlZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udmVydGVkRGF0ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG1vbWVudCgpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0ZVdpdGhUaW1lWm9uZShkYXRlLCBjb3VudHJ5KSB7XG5cdGlmICghY291bnRyeSB8fCAhZGF0ZSkgcmV0dXJuIG1vbWVudChkYXRlKTtcblxuXHRsZXQgY29udmVydGVkRGF0ZTtcblx0Y29uc3QgdGltZXpvbmVzID0gY291bnRyaWVzREIgJiYgY291bnRyaWVzREIuZ2V0Q291bnRyeShjb3VudHJ5LCAndGltZXpvbmVzJyk7XG5cdGlmICh0aW1lem9uZXMgJiYgdGltZXpvbmVzLmxlbmd0aCA+IDApIHtcblx0XHRjb252ZXJ0ZWREYXRlID0gbW9tZW50VGltZVpvbmUudHooZGF0ZSwgdGltZXpvbmVzWzBdKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJ0ZWREYXRlIHx8IG1vbWVudChkYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVSYW5nZXMoeyBjaGVja0luLCBjb3VudHJ5LCBjaGVja091dCB9KSB7XG5cdGxldCBzdGFydERhdGUgPSBzZXREYXRlV2l0aFRpbWVab25lKGNoZWNrSW4sIGNvdW50cnkpLnN0YXJ0T2YoJ2RheScpLFxuXHRcdGVuZERhdGUgPSBzZXREYXRlV2l0aFRpbWVab25lKGNoZWNrT3V0LCBjb3VudHJ5KS5zdGFydE9mKCdkYXknKSxcblx0XHR0b2RheSA9IGdldERhdGVVc2luZ1RpbWVab25lKGNvdW50cnksIGZhbHNlKS5zdGFydE9mKCdkYXknKTtcblx0cmV0dXJuIHtcblx0XHRuaWdodHM6IGVuZERhdGUuZGlmZihzdGFydERhdGUsICdkYXlzJyksXG5cdFx0aW50ZXJ2YWw6IHN0YXJ0RGF0ZS5kaWZmKHRvZGF5LCAnZGF5cycpLFxuXHRcdHRvZGF5XG5cdH07XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBDb25maXJtRG9jdW1lbnRWZXJpZmljYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHZlcmlmaWNhdGlvblN0YXR1czogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgfTtcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgdmVyaWZpY2F0aW9uU3RhdHVzLCBuYW1lLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHZlcmlmaWNhdGlvblVSTCA9IHVybCArIGAvdXNlci92ZXJpZmljYXRpb25gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG4gICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSGkge25hbWV9LFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFdlbGNvbWUgdG8ge3NpdGVuYW1lfSFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBZb3VyIGRvY3VtZW50cyBoYXZlIGJlZW4ge3ZlcmlmaWNhdGlvblN0YXR1c30gaW4gdGhlIGRvY3VtZW50IHZlcmlmaWNhdGlvbiBwcm9jZXNzLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtidXR0b25TdHlsZX0gaHJlZj17dmVyaWZpY2F0aW9uVVJMfT5DaGVjayB5b3VyIHByb2ZpbGU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXszMH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURvY3VtZW50VmVyaWZpY2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgTGlzdFB1Ymxpc2hSZXF1ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHR1c2VyTWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRtYXJnaW46IDAsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0cGFkZGluZzogJzEwcHggMTZweCcsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnMnB4Jyxcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCcsXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRmb250V2VpZ2h0OiAnbm9ybWFsJyxcblx0XHRcdGZvbnRTaXplOiAnMThweCcsXG5cdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRcdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcblx0XHRcdGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcblx0XHRcdGNvbG9yOiAnI2ZmZmZmZicsXG5cdFx0XHRib3JkZXJUb3BXaWR0aDogJzFweCcsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGxpbmtUZXh0ID0ge1xuXHRcdFx0Y29sb3I6ICcjRjdBMzFCJyxcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0fVxuXG5cdFx0Y29uc3QgdGV4dFN0eWxlID0ge1xuXHRcdFx0Y29sb3I6ICcjNDg0ODQ4Jyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXG5cdFx0XHRwYWRkaW5nOiAnMzVweCdcblx0XHR9O1xuXHRcdGNvbnN0IHsgY29udGVudDogeyBob3N0TmFtZSwgbGlzdElkLCBsaXN0VGl0bGUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgVVJMID0gdXJsICsgYC9iZWNvbWUtYS1ob3N0LyR7bGlzdElkfS9ob21lYDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdEhpIEFkbWluLFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRBIG5ldyBsaXN0aW5nIHtsaXN0VGl0bGV9IGhhcyBiZWVuIHN1Ym1pdHRlZCBmb3IgeW91ciBhcHByb3ZhbCBieSB0aGUgSG9zdCB7aG9zdE5hbWV9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGEgc3R5bGU9e2J1dHRvblN0eWxlfSBocmVmPXtVUkx9PkNsaWNrIEhlcmU8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0UGxlYXNlIHJldmlldyBhbmQgdGFrZSBuZWNlc3NhcnkgYWN0aW9uLlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFRoYW5rcywgPGJyIC8+XG5cdFx0XHRcdFx0XHRUaGUge3NpdGVuYW1lfSBUZWFtXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQm9keT5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RQdWJsaXNoUmVxdWVzdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIENvbmZpcm1FbWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdG9rZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcbiAgICB9O1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnMzVweCdcbiAgICB9O1xuICAgIGNvbnN0IHsgY29udGVudDogeyB0b2tlbiwgZW1haWwsIG5hbWUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdmVyaWZpY2F0aW9uVVJMID0gdXJsICsgYC91c2VyL3ZlcmlmaWNhdGlvbj9jb25maXJtPSR7dG9rZW59JmVtYWlsPSR7ZW1haWx9YDtcbiAgICBsZXQgZmlyc3ROYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPEJvZHkgdGV4dFN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBIaSB7Zmlyc3ROYW1lfSxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBXZWxjb21lIHRvIHtzaXRlbmFtZX0hIEluIG9yZGVyIHRvIGdldCBzdGFydGVkLCB5b3UgbmVlZCB0byBjb25maXJtIHlvdXIgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBzdHlsZT17YnV0dG9uU3R5bGV9IGhyZWY9e3ZlcmlmaWNhdGlvblVSTH0+Q29uZmlybSB5b3VyIGVtYWlsPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MzB9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm9keT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1FbWFpbDsiLCIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIENvbXBsZXRlZFJlc2VydmF0aW9uR3Vlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBob3N0TGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGhvc3RQcm9maWxlUGljOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXG4gICAgfVxuXG4gICAgY29uc3QgYm9va2luZ1RpdGxlID0ge1xuICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNXB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuXG4gICAgfVxuXG4gICAgY29uc3QgcHJvZmlsZVBpYyA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgbGluZUhlaWdodDogJzE1MCUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzAnLFxuICAgICAgd2lkdGg6ICcxMjVweCdcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IHtcbiAgICAgIGNvbG9yOiAnIzU2NWE1YycsXG4gICAgICBmb250U2l6ZTogJzI2cHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzVweCcsXG4gICAgfVxuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSB7XG4gICAgICBjb2xvcjogJyM1NjVhNWMnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1cHgnLFxuICAgIH1cblxuICAgIGNvbnN0IGxpbmtUZXh0ID0ge1xuICAgICAgY29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfVxuXG4gICAgY29uc3Qgc3BhY2UgPSB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXG4gICAgfVxuICAgIGNvbnN0IHsgY29udGVudDogeyByZXNlcnZhdGlvbklkLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb250ZW50OiB7IGhvc3ROYW1lLCBob3N0TGFzdE5hbWUsIGhvc3RQcm9maWxlUGljIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lc3NhZ2VVUkwgPSB1cmwgKyAnL3Jldmlldy93cml0ZS8nICsgcmVzZXJ2YXRpb25JZDtcbiAgICBsZXQgaW1hZ2VVUkw7XG4gICAgaWYgKGhvc3RQcm9maWxlUGljKSB7XG4gICAgICBpbWFnZVVSTCA9IHVybCArICcvaW1hZ2VzL2F2YXRhci9tZWRpdW1fJyArIGhvc3RQcm9maWxlUGljO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG4gICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGhvc3RQcm9maWxlUGljICYmIDxpbWcgc3R5bGU9e3Byb2ZpbGVQaWN9IHNyYz17aW1hZ2VVUkx9IGhlaWdodD17MTI1fSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e2Jvb2tpbmdUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgIFRlbGwge2hvc3ROYW1lfSB7aG9zdExhc3ROYW1lfSB3aGF0IHlvdSBsb3ZlZCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IGFuZCB3aGF0IHRoZXkgY2FuIGRvIGJldHRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUganVzdCBjaGVja2VkIG91dCwgc28gbm93IGlzIHRoZSBwZXJmZWN0IHRpbWUgdG8gd3JpdGUgeW91ciByZXZpZXcuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFJldmlld3MgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIHRoZSB7c2l0ZW5hbWV9IGNvbW11bml0eS4gUGxlYXNlIHRha2UgYSBtb21lbnQgdG8gcHJvdmlkZSB5b3VyIGhvc3Qgd2l0aCBzb21lIGhlbHBmdWwgZmVlZGJhY2sgLVxuICAgICAgICAgICAgICAgICAgICBpdCdsbCBvbmx5IHRha2UgZmV3IG1pbnV0ZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs1MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lc3NhZ2VVUkx9IHN0eWxlPXtidXR0b25TdHlsZX0+V3JpdGUgYSBSZXZpZXc8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRlZFJlc2VydmF0aW9uR3Vlc3Q7IiwiLyogKGlnbm9yZWQpICovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBSZXBvcnRVc2VyTWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHJlcG9ydGVyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgcmVwb3J0VHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMzVweCdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBjb250ZW50OiB7IHVzZXJOYW1lLCByZXBvcnRlck5hbWUsIHJlcG9ydFR5cGUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpIEFkbWluLFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBnb3QgYSBub3RpZmljYXRpb24gZm9yIHRoZSB1c2VyIHZpb2xhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlck5hbWV9IGlzIHZvaWxhdGluZyB0aGUgcGxhdGZvcm0gdGVybXMgYW5kIHJlcG9ydGVkIGJ5IHtyZXBvcnRlck5hbWV9IDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmlvbGF0aW9uOiB7cmVwb3J0VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0VXNlck1haWw7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCb29raW5nRXhwaXJlZEhvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0XHRcdGNvbG9yOiAnIzQ4NDg0OCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jyxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0cGFkZGluZzogJzM1cHgnLFxuXHRcdH07XG5cblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgaG9zdE5hbWUsIGd1ZXN0TmFtZSwgbGlzdFRpdGxlLCBjb25maXJtYXRpb25Db2RlLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cblx0XHRcdFx0XHRcdDxUQm9keT5cblx0XHRcdFx0XHRcdFx0PFRSPlxuXHRcdFx0XHRcdFx0XHRcdDxURCBzdHlsZT17dGV4dFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRIaSB7aG9zdE5hbWV9LFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFlvdXIgcmVzZXJ2YXRpb24gKHtjb25maXJtYXRpb25Db2RlfSkgZnJvbSB7Z3Vlc3ROYW1lfSBhdCB7bGlzdFRpdGxlfSBoYXMgZXhwaXJlZC5cblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9e2d1ZXN0TmFtZX0gd2lsbCBiZSBmdWxseSByZWZ1bmRlZC5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUaGFua3MsIDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUaGUge3NpdGVuYW1lfSBUZWFtXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9URD5cblx0XHRcdFx0XHRcdFx0PC9UUj5cblx0XHRcdFx0XHRcdDwvVEJvZHk+XG5cdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nRXhwaXJlZEhvc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIE5ld0lucXVpcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJlY2VpdmVyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNlbmRlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjaGVja291dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgcGVyc29uQ2FwYWNpdHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgIH07XG5cbiAgICBjb25zdCBidG5DZW50ZXIgPSB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXG4gICAgfVxuXG5cbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgcmVjZWl2ZXJOYW1lLCB0eXBlLCBzZW5kZXJOYW1lLCBtZXNzYWdlLCB0aHJlYWRJZCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGVudDogeyBjaGVja0luLCBjaGVja091dCwgcGVyc29uQ2FwYWNpdHkgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbWVzc2FnZVVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2d1ZXN0JztcbiAgICBpZiAodHlwZSA9PT0gXCJob3N0XCIpIHtcbiAgICAgIG1lc3NhZ2VVUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ob3N0JztcbiAgICB9XG4gICAgbGV0IGNoZWNrSW5EYXRlID0gY2hlY2tJbiAhPSBudWxsID8gbW9tZW50KGNoZWNrSW4pLmZvcm1hdCgnZGRkLCBEbyBNTU0sIFlZWVknKSA6ICcnO1xuICAgIGxldCBjaGVja091dERhdGUgPSBjaGVja091dCAhPSBudWxsID8gbW9tZW50KGNoZWNrT3V0KS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG4gICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgSGkge3JlY2VpdmVyTmFtZX0sXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIGEgZ290IGEgbmV3IGlucXVpcnkgZnJvbSB7c2VuZGVyTmFtZX0uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIENoZWNrIEluOiB7Y2hlY2tJbkRhdGV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBDaGVjayBPdXQ6IHtjaGVja091dERhdGV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBHdWVzdHM6IHtwZXJzb25DYXBhY2l0eX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICYmIChtZXNzYWdlLnRyaW0oKSkuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PGJyIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2J0bkNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lc3NhZ2VVUkx9IHN0eWxlPXtidXR0b25TdHlsZX0+UmVzcG9uZCB0byB7c2VuZGVyTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdJbnF1aXJ5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBURCwgVFIsIEltZyB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgIHdpZHRoOiAnMTAwJSdcblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY29sb3I9e3Byb3BzLmNvbG9yfT5cbiAgICAgIDxUQm9keT5cbiAgICAgICAgPFRSPlxuICAgICAgICAgIDxURD5cbiAgICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICAgIDxURFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcHJvcHMuY29sb3IsIGZvbnRGYW1pbHk6ICdBcmlhbCcsIGZvbnRTaXplOiAnMjhweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPXt1cmwgKyBcIi9pbWFnZXMvbG9nby9cIiArIHByb3BzLmxvZ299IHdpZHRoPXsxNTB9IGFsdD17c2l0ZW5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvVEQ+XG4gICAgICAgIDwvVFI+XG4gICAgICA8L1RCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59O1xuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKipcbiAqIEVtcHR5U3BhY2U6XG4gKiBUYWJsZS1iYXNlZCB3YXkgdG8gYWRkIHZlcnRpY2FsIHNwYWNlLiBVc2VzIGxpbmUtaGVpZ2h0LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5cblxuY29uc3QgRW1wdHlTcGFjZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBsaW5lSGVpZ2h0OiBgJHtwcm9wcy5oZWlnaHR9cHhgLFxuICAgIGZvbnRTaXplOiAnMXB4JyxcbiAgICBtc29MaW5lSGVpZ2h0UnVsZTogJ2V4YWN0bHknXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8VEJvZHk+XG4gICAgICAgIDxUUj5cbiAgICAgICAgICA8VERcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9e2Ake3Byb3BzLmhlaWdodH1weGB9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICcmbmJzcDsnIH19IC8+XG4gICAgICAgIDwvVFI+XG4gICAgICA8L1RCb2R5PlxuICAgIDwvVGFibGU+XG4gICk7XG59O1xuXG5FbXB0eVNwYWNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiAnMTYnXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5U3BhY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyBjaGVja0luRGF0YSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvdGltZUhlbHBlcic7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQm9va2luZ0NvbmZpcm1hdGlvbkhvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0TGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0TG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0UHJvZmlsZVBpYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3RKb2luZWREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjaGVja091dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3RzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBhbGxvd2VkQ2hlY2tJblRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGFsbG93ZWRDaGVja091dFRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH07XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG5cbiAgICB9XG5cbiAgICBjb25zdCBib29raW5nVGl0bGUgPSB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAnMjVweCcsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzQ4cHgnLFxuICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG5cbiAgICB9XG5cbiAgICBjb25zdCBwcm9maWxlUGljID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnOTk5cHgnLFxuICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTUwJScsXG4gICAgICBib3JkZXJTcGFjaW5nOiAnMCcsXG4gICAgICB3aWR0aDogJzEyNXB4J1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJOYW1lID0ge1xuICAgICAgY29sb3I6ICcjNTY1YTVjJyxcbiAgICAgIGZvbnRTaXplOiAnMjZweCcsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNXB4JyxcbiAgICB9XG5cbiAgICBjb25zdCBzdWJUaXRsZSA9IHtcbiAgICAgIGNvbG9yOiAnIzU2NWE1YycsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzVweCcsXG4gICAgfVxuXG4gICAgY29uc3QgbGlua1RleHQgPSB7XG4gICAgICBjb2xvcjogJyNGN0EzMUInLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9XG5cbiAgICBjb25zdCBzcGFjZSA9IHtcbiAgICAgIHBhZGRpbmdCb3R0b206ICcyMHB4JyxcbiAgICB9XG4gICAgY29uc3QgeyBjb250ZW50OiB7IHJlc2VydmF0aW9uSWQsIHRocmVhZElkLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb250ZW50OiB7IGd1ZXN0TmFtZSwgZ3Vlc3RMYXN0TmFtZSwgZ3Vlc3RMb2NhdGlvbiwgZ3Vlc3RQcm9maWxlUGljLCBndWVzdEpvaW5lZERhdGUgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgY2hlY2tJbiwgY2hlY2tPdXQsIGd1ZXN0cywgYWxsb3dlZENoZWNrSW5UaW1lLCBhbGxvd2VkQ2hlY2tPdXRUaW1lLCBjb25maXJtYXRpb25Db2RlIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGNoZWNrSW5EYXRlID0gY2hlY2tJbiAhPSBudWxsID8gbW9tZW50KGNoZWNrSW4pLmZvcm1hdCgnZGRkLCBEbyBNTU0sIFlZWVknKSA6ICcnO1xuICAgIGxldCBjaGVja091dERhdGUgPSBjaGVja091dCAhPSBudWxsID8gbW9tZW50KGNoZWNrT3V0KS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICBsZXQgY2hlY2tJbkRhdGVTaG9ydCA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ0RvIE1NTU0nKSA6ICcnO1xuICAgIGxldCBndWVzdEpvaW5lZFllYXIgPSBndWVzdEpvaW5lZERhdGUgIT0gbnVsbCA/IG1vbWVudChndWVzdEpvaW5lZERhdGUpLmZvcm1hdCgnWVlZWScpIDogJyc7XG4gICAgbGV0IGl0aW5lcmFyeVVSTCA9IHVybCArICcvdXNlcnMvdHJpcHMvaXRpbmVyYXJ5LycgKyByZXNlcnZhdGlvbklkO1xuICAgIGxldCBtZXNzYWdlVVJMID0gdXJsICsgJy9tZXNzYWdlLycgKyB0aHJlYWRJZCArICcvaG9zdCc7XG4gICAgbGV0IGltYWdlVVJMO1xuICAgIGlmIChndWVzdFByb2ZpbGVQaWMpIHtcbiAgICAgIGltYWdlVVJMID0gdXJsICsgJy9pbWFnZXMvYXZhdGFyL21lZGl1bV8nICsgZ3Vlc3RQcm9maWxlUGljO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG4gICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtib29raW5nVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICBOZXcgYm9va2luZyBjb25maXJtZWQhIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Z3Vlc3ROYW1lfSBhcnJpdmVzPC9zcGFuPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NoZWNrSW5EYXRlU2hvcnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBTZW5kIGEgbWVzc2FnZSB0byBjb25maXJtIGNoZWNrLWluIGRldGFpbHMgb3Igd2VsY29tZSB7Z3Vlc3ROYW1lfS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGd1ZXN0UHJvZmlsZVBpYyAmJiA8aW1nIHN0eWxlPXtwcm9maWxlUGljfSBzcmM9e2ltYWdlVVJMfSBoZWlnaHQ9ezEyNX0gLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3VzZXJOYW1lfT57Z3Vlc3ROYW1lfSB7Z3Vlc3RMYXN0TmFtZX08L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2d1ZXN0TG9jYXRpb259PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzaXRlbmFtZX0gbWVtYmVyIHNpbmNlIHtndWVzdEpvaW5lZFllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWVzc2FnZVVSTH0gc3R5bGU9e2J1dHRvblN0eWxlfT5Db250YWN0IEd1ZXN0PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICA8VFIgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXtzcGFjZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3ViVGl0bGV9PkNoZWNrIEluPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGVja0luRGF0ZX08L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezF9IC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrSW5EYXRhKGFsbG93ZWRDaGVja0luVGltZSlcbiAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3NwYWNlfT48RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPjwvVEQ+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXtzcGFjZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3ViVGl0bGV9PkNoZWNrIE91dDwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hlY2tPdXREYXRlfTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MX0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJbkRhdGEoYWxsb3dlZENoZWNrT3V0VGltZSlcbiAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgICAgPFRSIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxURD5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdWJUaXRsZX0+R3Vlc3RzPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Z3Vlc3RzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgICAgPFREPjxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+PC9URD5cbiAgICAgICAgICAgICAgICA8VEQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3ViVGl0bGV9PkNvbmZpcm1hdGlvbiBDb2RlPC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29uZmlybWF0aW9uQ29kZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICA8L1RSPlxuXG4gICAgICAgICAgICAgIDxUUiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8VEQ+PEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz48L1REPlxuICAgICAgICAgICAgICAgIDxURD48RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPjwvVEQ+XG4gICAgICAgICAgICAgICAgPFREPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRpbmVyYXJ5VVJMfSBzdHlsZT17bGlua1RleHR9PiBWaWV3IEl0aW5lcmFyeTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG5cbiAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Ib3N0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUYWJsZSwgVEJvZHksIFRSLCBURH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyBzaXRlbmFtZX0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQm9va2luZ0V4cGlyZWRHdWVzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0bGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICBcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0ICAgICAgY29sb3I6ICcjNDg0ODQ4Jyxcblx0ICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdCAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdCAgICAgIGZvbnRTaXplOiAnMTZweCcsXG5cdCAgICAgIHBhZGRpbmc6ICczNXB4Jyxcblx0ICAgIH07XG5cblxuXHQgICAgY29uc3QgeyBjb250ZW50OiB7Z3Vlc3ROYW1lLCBsaXN0VGl0bGUsIGNvbmZpcm1hdGlvbkNvZGUsIGNoZWNrSW4sIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblx0ICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICAgICAgcmV0dXJuIChcblx0XHRcdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PFRCb2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRSPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SGkge2d1ZXN0TmFtZX0sXG5cdFx0XHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0V2UgcmVncmV0IHRvIGluZm9ybSB5b3UgdGhhdCB5b3VyIHJlcXVlc3QgYXQge2xpc3RUaXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsnICd9e2NvbmZpcm1hdGlvbkNvZGV9IHN0YXJ0aW5nIG9uIHtjaGVja0luRGF0ZX0gaGFzIGV4cGlyZWQuIFlvdSB3aWxsIGJlIGZ1bGx5IHJlZnVuZGVkIGFuZCBub3RpZmllZC5cblx0XHRcdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBUaGFua3MsIDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1REPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UUj5cblx0XHRcdFx0XHRcdFx0XHQ8L1RCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ0V4cGlyZWRHdWVzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0dXNlck1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luOiAwLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGJvcmRlclJhZGl1czogJzJweCcsXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQnLFxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0Zm9udFdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxuXHRcdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG5cdFx0XHRib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRjb2xvcjogJyNmZmZmZmYnLFxuXHRcdFx0Ym9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXHRcdH07XG5cblx0XHRjb25zdCBsaW5rVGV4dCA9IHtcblx0XHRcdGNvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdH1cblxuXHRcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0XHRcdGNvbG9yOiAnIzQ4NDg0OCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jyxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0cGFkZGluZzogJzM1cHgnXG5cdFx0fTtcblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgdXNlck5hbWUsIHVzZXJNYWlsLCBhZG1pbk1haWwsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgbWFpbFRvID0gJ21haWx0bzonICsgYWRtaW5NYWlsO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG5cdFx0XHRcdDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0RGVhciB7dXNlck5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRXZSBoYXZlIGJlZW4gYWN0aXZhdGVkIHlvdXIgYWNjb3VudCBhbmQgcGxlYXNlIGxvZ2luIHdpdGggeW91ciBhY2NvdW50LiBXZSBkaWQgZGlzYWJsZSB5b3VyIGFjY291bnQgZm9yIHZpb2xhdGluZyBvdXIgdGVybXMuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFBsZWFzZSBnZXQgaW4gdG91Y2ggd2l0aCA8YSBocmVmPXttYWlsVG99PnVzPC9hPiwgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucy5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRUaGFua3MsIDxiciAvPlxuXHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0JvZHk+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBBZG1pbkxpc3REZWNsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHR1c2VyTWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgYnV0dG9uU3R5bGUgPSB7XG5cdFx0XHRtYXJnaW46IDAsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0cGFkZGluZzogJzEwcHggMTZweCcsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnMnB4Jyxcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCcsXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdFx0XHRmb250V2VpZ2h0OiAnbm9ybWFsJyxcblx0XHRcdGZvbnRTaXplOiAnMThweCcsXG5cdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRcdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcblx0XHRcdGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcblx0XHRcdGNvbG9yOiAnI2ZmZmZmZicsXG5cdFx0XHRib3JkZXJUb3BXaWR0aDogJzFweCcsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0XHRcdGNvbG9yOiAnIzQ4NDg0OCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jyxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0cGFkZGluZzogJzM1cHgnXG5cdFx0fTtcblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgaG9zdE5hbWUsIGxpc3RJZCwgbGlzdFRpdGxlLCBsb2dvLCByZWFzb24gfSB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgVVJMID0gdXJsICsgYC9iZWNvbWUtYS1ob3N0LyR7bGlzdElkfS9ob21lYDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdEhpIHtob3N0TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdEFkbWluIGhhcyBkZWNsaW5lZCB5b3VyIGxpc3RpbmcgcmVxdWVzdCBmb3IgdGhlIHtsaXN0VGl0bGV9IGR1ZSB0byB0aGUgcmVhc29uIG9mICB7cmVhc29ufS4gS2luZGx5IHVwZGF0ZSB0aGUgbGlzdGluZyBpbmZvcm1hdGlvbiBhbmQgc3VibWl0IGZvciB0aGUgbGlzdCBhcHByb3ZhbC5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGEgc3R5bGU9e2J1dHRvblN0eWxlfSBocmVmPXtVUkx9PlVwZGF0ZSBOb3c8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Cb2R5PlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5MaXN0RGVjbGluZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIE5ld01lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJlY2VpdmVyTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdXNlclR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHNlbmRlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuQ2VudGVyID0ge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcblxuICAgIH1cblxuXG4gICAgY29uc3QgeyBjb250ZW50OiB7IHJlY2VpdmVyTmFtZSwgdHlwZSwgc2VuZGVyTmFtZSwgbWVzc2FnZSwgdGhyZWFkSWQsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbWVzc2FnZVVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2d1ZXN0JztcbiAgICBpZiAodHlwZSA9PT0gXCJob3N0XCIpIHtcbiAgICAgIG1lc3NhZ2VVUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ob3N0JztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEhpIHtyZWNlaXZlck5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBhIGdvdCBhIG5ldyBtZXNzYWdlIGZyb20ge3NlbmRlck5hbWV9LlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSAmJiAobWVzc2FnZS50cmltKCkpLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTxiciAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtidG5DZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttZXNzYWdlVVJMfSBzdHlsZT17YnV0dG9uU3R5bGV9PlJlc3BvbmQgdG8ge3NlbmRlck5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICA8L1RSPlxuICAgICAgICAgICAgPC9UQm9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3TWVzc2FnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IEN1cnJlbmN5VmlldyBmcm9tICcuLi9tb2R1bGVzL0N1cnJlbmN5Vmlldyc7XG5cbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCb29raW5nUmVxdWVzdEhvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGNoZWNrT3V0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGJhc2VQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBob3N0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWRcblxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuQ2VudGVyID0ge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcblxuICAgIH1cblxuXG4gICAgY29uc3QgeyBjb250ZW50OiB7IHJlc2VydmF0aW9uSWQsIGNvbmZpcm1hdGlvbkNvZGUsIGhvc3ROYW1lLCBndWVzdE5hbWUsIGNoZWNrSW4sIGNoZWNrT3V0LCB0aHJlYWRJZCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGVudDogeyBsaXN0VGl0bGUsIGJhc2VQcmljZSwgdG90YWwsIGhvc3RTZXJ2aWNlRmVlLCBjdXJyZW5jeSB9IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGNoZWNrSW5EYXRlID0gY2hlY2tJbiAhPSBudWxsID8gbW9tZW50KGNoZWNrSW4pLmZvcm1hdCgnZGRkLCBEbyBNTU0sIFlZWVknKSA6ICcnO1xuICAgIGxldCBjaGVja091dERhdGUgPSBjaGVja091dCAhPSBudWxsID8gbW9tZW50KGNoZWNrT3V0KS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICAvLyBsZXQgYWN0aW9uVVJMID0gdXJsICsgJy9yZXNlcnZhdGlvbi9jdXJyZW50JzsgXG4gICAgbGV0IGFjdGlvblVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2hvc3QnO1xuICAgIGxldCBzdWJ0b3RhbCA9IHRvdGFsIC0gaG9zdFNlcnZpY2VGZWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cbiAgICAgICAgICAgIDxUQm9keT5cbiAgICAgICAgICAgICAgPFRSPlxuICAgICAgICAgICAgICAgIDxURCBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBIaSB7aG9zdE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBHcmVhdCBOZXdzISBZb3UgaGF2ZSBhIG5ldyByZXNlcnZhdGlvbih7Y29uZmlybWF0aW9uQ29kZX0pIGZyb20ge2d1ZXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtndWVzdE5hbWV9IHdvdWxkIHN0YXkgaW4gdGhlIHtsaXN0VGl0bGV9IGZyb20ge2NoZWNrSW5EYXRlfSB0byB7Y2hlY2tPdXREYXRlfS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgQmFzZWQgb24gcHJpY2Ugb2YgPEN1cnJlbmN5VmlldyBhbW91bnQ9e2Jhc2VQcmljZX0gY3VycmVuY3k9e2N1cnJlbmN5fSAvPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfXBlciBuaWdodCB3aXRoIHRoZSBhc3NvY2lhdGVkIGNvc3QsIHlvdXIgZXN0aW1hdGVkIHBheW1lbnQgZm9yIHRoaXMgYm9va2luZyBpcyA8Q3VycmVuY3lWaWV3IGFtb3VudD17c3VidG90YWx9IGN1cnJlbmN5PXtjdXJyZW5jeX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2J0bkNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2FjdGlvblVSTH0gc3R5bGU9e2J1dHRvblN0eWxlfT5BY2NlcHQgb3IgRGVjbGluZTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoQm9va2luZ1JlcXVlc3RIb3N0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEZlZWRiYWNrTWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dEJvbGQgPSB7XG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB7IGNvbnRlbnQ6IHsgbWVzc2FnZSwgdHlwZSwgbmFtZSwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpIEFkbWluLFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9IGhhcyBzZW50IHlvdSBhIHt0eXBlfSB0aGF0IHttZXNzYWdlfS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXszMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrTWFpbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJvb2tpbmdQcmVBcHByb3ZhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgZ3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGxpc3RUaXRsZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGxpbmtUZXh0ID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICczNXB4J1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQ6IHsgZ3Vlc3ROYW1lLCBob3N0TmFtZSwgdGhyZWFkSWQsIGxpc3RUaXRsZSwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY29udGFjdFVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2d1ZXN0JztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpIHtndWVzdE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtob3N0TmFtZX0gaGFzIHByZS1hcHByb3ZlZCB5b3VyIHJlcXVlc3QgZm9yIHtsaXN0VGl0bGV9LlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBnbyBhaGVhZCBhbmQgPGEgc3R5bGU9e2xpbmtUZXh0fSBocmVmPXtjb250YWN0VVJMfT5ib29rPC9hPiB0aGUgcHJlLWFwcHJvdmVkIGRhdGVzIG5vdy5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ1ByZUFwcHJvdmFsOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcbmltcG9ydCBDdXJyZW5jeVZpZXcgZnJvbSAnLi4vbW9kdWxlcy9DdXJyZW5jeVZpZXcnO1xuLy9IZWxwZXJcbmltcG9ydCB7IGdldERhdGVVc2luZ1RpbWVab25lIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9kYXRlUmFuZ2UnO1xuY2xhc3MgQ2FuY2VsbGVkQnlHdWVzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRcdGxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0cGF5b3V0VG9Ib3N0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0XHRjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG5cdFx0fSkuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgeyBjb250ZW50OiB7IGd1ZXN0TmFtZSwgaG9zdE5hbWUsIGNvbmZpcm1hdGlvbkNvZGUsIGNoZWNrSW4sIGxpc3RUaXRsZSwgcGF5b3V0VG9Ib3N0LCBjdXJyZW5jeSwgbG9nbywgY291bnRyeSB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcblx0XHRsZXQgbW9tZW50U3RhcnREYXRlID0gbW9tZW50KGNoZWNrSW4pLnN0YXJ0T2YoJ2RheScpO1xuXHRcdGxldCB0b2RheSA9IGdldERhdGVVc2luZ1RpbWVab25lKGNvdW50cnksIGZhbHNlKTtcblx0XHRsZXQgaW50ZXJ2YWwgPSBtb21lbnRTdGFydERhdGUuZGlmZih0b2RheSwgJ2RheXMnKTtcblx0XHRsZXQgaXNQYXN0RGF5ID0gZmFsc2U7XG5cdFx0aWYgKGludGVydmFsIDwgMCkge1xuXHRcdFx0aXNQYXN0RGF5ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuXHRcdFx0XHRcdFx0PFRCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8VFI+XG5cdFx0XHRcdFx0XHRcdFx0PFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEhpIHtob3N0TmFtZX0sXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0V2UgcmVncmV0IHRvIGluZm9ybSB5b3UgdGhhdCB5b3VyIGd1ZXN0IHtndWVzdE5hbWV9IGhhcyBjYW5jZWxsZWQgcmVzZXJ2YXRpb25cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHsnICd9e2NvbmZpcm1hdGlvbkNvZGV9IGF0IHtsaXN0VGl0bGV9IHtpc1Bhc3REYXkgPyAnc3RhcnRlZCcgOiAnc3RhcnRpbmcnfSBvbiB7Y2hlY2tJbkRhdGV9LlxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBheW91dFRvSG9zdCA+IDAgJiYgPHNwYW4+IEFzIHBlciB0aGUgY2FuY2VsbGF0aW9uIHBvbGljeSwgeW91ciBwYXlvdXQgd2lsbCBiZVxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXHRcdHVwZGF0ZWQgdG8gPEN1cnJlbmN5VmlldyBhbW91bnQ9e3BheW91dFRvSG9zdH0gY3VycmVuY3k9e2N1cnJlbmN5fSAvPi5cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXlvdXRUb0hvc3QgPT09IDAgJiYgPHNwYW4+IEFzIHBlciB0aGUgY2FuY2VsbGF0aW9uIHBvbGljeSwgeW91IHdpbGwgbm90XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVjZWl2ZSBhbnkgcGF5b3V0cyBmb3IgdGhpcyByZXNlcnZhdGlvbi5cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPllvdXIgY2FsZW5kYXIgaGFzIGFsc28gYmVlbiB1cGRhdGVkIHRvIHNob3cgdGhhdCB0aGUgcHJldmlvdXNseSBib29rZWQgZGF0ZXMgYXJlIG5vdyBhdmFpbGFibGUuPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvVEQ+XG5cdFx0XHRcdFx0XHRcdDwvVFI+XG5cdFx0XHRcdFx0XHQ8L1RCb2R5PlxuXHRcdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsbGVkQnlHdWVzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQ29udGFjdEVtYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBDb250YWN0TWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMzVweCdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBjb250ZW50OiB7IENvbnRhY3RNZXNzYWdlLCBlbWFpbCwgbmFtZSwgcGhvbmVOdW1iZXIsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpIEFkbWluLFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBnb3QgYSBtZXNzYWdlIGZyb20gdGhlIHBsYXRmb3JtJ3MgY3VzdG9tZXIgc3VwcG9ydCBzZWN0aW9uLCBoZXJlIGlzIHRoZSBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiB7bmFtZX08YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB7ZW1haWx9PGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IE51bWJlcjoge3Bob25lTnVtYmVyfTxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZTogXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdE1lc3NhZ2UgJiYgKENvbnRhY3RNZXNzYWdlLnRyaW0oKSkuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT57aXRlbX08YnIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0RW1haWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBDb21wbGV0ZWRSZXNlcnZhdGlvbkhvc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHJlc2VydmF0aW9uSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3RMYXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3RQcm9maWxlUGljOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXG4gICAgfVxuXG4gICAgY29uc3QgYm9va2luZ1RpdGxlID0ge1xuICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNXB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuXG4gICAgfVxuXG4gICAgY29uc3QgcHJvZmlsZVBpYyA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgbGluZUhlaWdodDogJzE1MCUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzAnLFxuICAgICAgd2lkdGg6ICcxMjVweCdcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IHtcbiAgICAgIGNvbG9yOiAnIzU2NWE1YycsXG4gICAgICBmb250U2l6ZTogJzI2cHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzVweCcsXG4gICAgfVxuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSB7XG4gICAgICBjb2xvcjogJyM1NjVhNWMnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1cHgnLFxuICAgIH1cblxuICAgIGNvbnN0IGxpbmtUZXh0ID0ge1xuICAgICAgY29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfVxuXG4gICAgY29uc3Qgc3BhY2UgPSB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXG4gICAgfVxuICAgIGNvbnN0IHsgY29udGVudDogeyByZXNlcnZhdGlvbklkLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb250ZW50OiB7IGd1ZXN0TmFtZSwgZ3Vlc3RMYXN0TmFtZSwgZ3Vlc3RQcm9maWxlUGljIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lc3NhZ2VVUkwgPSB1cmwgKyAnL3Jldmlldy93cml0ZS8nICsgcmVzZXJ2YXRpb25JZDtcbiAgICBsZXQgaW1hZ2VVUkw7XG4gICAgaWYgKGd1ZXN0UHJvZmlsZVBpYykge1xuICAgICAgaW1hZ2VVUkwgPSB1cmwgKyAnL2ltYWdlcy9hdmF0YXIvbWVkaXVtXycgKyBndWVzdFByb2ZpbGVQaWM7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cbiAgICAgICAgICAgIDxUQm9keT5cbiAgICAgICAgICAgICAgPFRSPlxuICAgICAgICAgICAgICAgIDxURCBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZ3Vlc3RQcm9maWxlUGljICYmIDxpbWcgc3R5bGU9e3Byb2ZpbGVQaWN9IHNyYz17aW1hZ2VVUkx9IGhlaWdodD17MTI1fSAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e2Jvb2tpbmdUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgIFRlbGwge2d1ZXN0TmFtZX0ge2d1ZXN0TGFzdE5hbWV9IHdoYXQgeW91IGxvdmVkIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gYW5kIHdoYXQgdGhleSBjYW4gZG8gYmV0dGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Z3Vlc3ROYW1lfSBqdXN0IGNoZWNrZWQgb3V0LCBzbyBub3cgaXMgdGhlIHBlcmZlY3QgdGltZSB0byB3cml0ZSB5b3VyIHJldmlldy5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgUmV2aWV3cyBhcmUgYW4gaW1wb3J0YW50IHBhcnQgb2YgdGhlIHtzaXRlbmFtZX0gY29tbXVuaXR5LiBQbGVhc2UgdGFrZSBhIG1vbWVudCB0byBwcm92aWRlIHlvdXIgZ3Vlc3Qgd2l0aCBzb21lIGhlbHBmdWwgZmVlZGJhY2sgLVxuICAgICAgICAgICAgICAgICAgICBpdCdsbCBvbmx5IHRha2UgZmV3IG1pbnV0ZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs1MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lc3NhZ2VVUkx9IHN0eWxlPXtidXR0b25TdHlsZX0+V3JpdGUgYSBSZXZpZXc8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezUwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRlZFJlc2VydmF0aW9uSG9zdDtcblxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQm9va2luZ1JlcXVlc3RHdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29uZmlybWF0aW9uQ29kZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgaG9zdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWRcblxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuQ2VudGVyID0ge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcblxuICAgIH1cblxuXG5cbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgZ3Vlc3ROYW1lLCBsaXN0VGl0bGUsIGhvc3ROYW1lLCBjaGVja0luLCB0aHJlYWRJZCwgY29uZmlybWF0aW9uQ29kZSwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICBsZXQgbWVzc2FnZVVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2d1ZXN0JztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG4gICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgSGkge2d1ZXN0TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFlvdXIgYm9va2luZyByZXF1ZXN0KHtjb25maXJtYXRpb25Db2RlfSkgYXQge2xpc3RUaXRsZX0gc3RhcnRpbmcgb24ge2NoZWNrSW5EYXRlfSBzZW50IHRvIHlvdXIgaG9zdCB7aG9zdE5hbWV9LiBZb3Ugd2lsbFxuICAgICAgICAgICAgICAgICAgICBoZWFyIGZyb20gdGhlbSB3aXRoaW4gMjQgaG91cnMuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2J0bkNlbnRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lc3NhZ2VVUkx9IHN0eWxlPXtidXR0b25TdHlsZX0+TWVzc2FnZSB7aG9zdE5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICA8L1RSPlxuICAgICAgICAgICAgPC9UQm9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ1JlcXVlc3RHdWVzdDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgQ3VycmVuY3lWaWV3IGZyb20gJy4uL21vZHVsZXMvQ3VycmVuY3lWaWV3Jztcbi8vSGVscGVyXG5pbXBvcnQgeyBnZXREYXRlVXNpbmdUaW1lWm9uZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZGF0ZVJhbmdlJztcbmNsYXNzIENhbmNlbGxlZEJ5SG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRcdGxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0cmVmdW5kVG9HdWVzdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHJlZnVuZFRvR3Vlc3Q6IDBcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0XHRcdGNvbG9yOiAnIzQ4NDg0OCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jyxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0cGFkZGluZzogJzM1cHgnLFxuXHRcdH07XG5cblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgZ3Vlc3ROYW1lLCBob3N0TmFtZSwgY29uZmlybWF0aW9uQ29kZSwgY2hlY2tJbiwgbGlzdFRpdGxlLCByZWZ1bmRUb0d1ZXN0LCBjdXJyZW5jeSwgbG9nbywgY291bnRyeSB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcblx0XHRsZXQgbW9tZW50U3RhcnREYXRlID0gbW9tZW50KGNoZWNrSW4pLnN0YXJ0T2YoJ2RheScpO1xuXHRcdGxldCB0b2RheSA9ICBnZXREYXRlVXNpbmdUaW1lWm9uZShjb3VudHJ5LCBmYWxzZSk7XG5cdFx0bGV0IGludGVydmFsID0gbW9tZW50U3RhcnREYXRlLmRpZmYodG9kYXksICdkYXlzJyk7XG5cdFx0bGV0IGlzUGFzdERheSA9IGZhbHNlO1xuXHRcdGlmIChpbnRlcnZhbCA8IDApIHtcblx0XHRcdGlzUGFzdERheSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG5cdFx0XHRcdFx0XHQ8VEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxUUj5cblx0XHRcdFx0XHRcdFx0XHQ8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SGkge2d1ZXN0TmFtZX0sXG5cdFx0XHQgICAgICAgIFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0V2UgcmVncmV0IHRvIGluZm9ybSB5b3UgdGhhdCB5b3VyIGhvc3Qge2hvc3ROYW1lfSBoYXMgY2FuY2VsbGVkIHlvdXIgcmVzZXJ2YXRpb25cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHsnICd9e2NvbmZpcm1hdGlvbkNvZGV9IGF0IHtsaXN0VGl0bGV9IHtpc1Bhc3REYXkgPyAnc3RhcnRlZCcgOiAnc3RhcnRpbmcnfSBvbiB7Y2hlY2tJbkRhdGV9LlxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZnVuZFRvR3Vlc3QgPiAwICYmIDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eycgJ31BcyBwZXIgdGhlIGNhbmNlbGxhdGlvbiBwb2xpY3kgeW91IHdpbGwgYmUgcmVmdW5kZWQgPEN1cnJlbmN5VmlldyBhbW91bnQ9e3JlZnVuZFRvR3Vlc3R9IGN1cnJlbmN5PXtjdXJyZW5jeX0gLz4gYW5kIG5vdGlmaWVkLlxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgXHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvVEQ+XG5cdFx0XHRcdFx0XHRcdDwvVFI+XG5cdFx0XHRcdFx0XHQ8L1RCb2R5PlxuXHRcdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsbGVkQnlIb3N0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJvb2tpbmdDb25maXJtYXRpb25HdWVzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0bGlzdENpdHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0fSkuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgbGlua1RleHQgPSB7XG5cdFx0XHRjb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHR9XG5cblxuXHRcdGNvbnN0IHsgY29udGVudDogeyBndWVzdE5hbWUsIGhvc3ROYW1lLCBsaXN0VGl0bGUsIGxpc3RDaXR5LCB0aHJlYWRJZCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBjb250YWN0VVJMID0gdXJsICsgJy9tZXNzYWdlLycgKyB0aHJlYWRJZCArICcvZ3Vlc3QnO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cblx0XHRcdFx0XHRcdDxUQm9keT5cblx0XHRcdFx0XHRcdFx0PFRSPlxuXHRcdFx0XHRcdFx0XHRcdDxURCBzdHlsZT17dGV4dFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRIaSB7Z3Vlc3ROYW1lfSxcblx0XHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBhY2sgeW91ciBiYWdzIC0geW91IGFyZSBnb2luZyB0byB7bGlzdENpdHl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aG9zdE5hbWV9IGhhcyBjb25maXJtZWQgeW91ciByZXF1ZXN0IGF0IHtsaXN0VGl0bGV9LiBQbGVhc2UgcmV2aWV3IGRldGFpbHMgb2YgeW91ciB0cmlwIGFuZFxuXHRcdFx0XHRcdCAgICAgICAgICB7JyAnfTxhIHN0eWxlPXtsaW5rVGV4dH0gaHJlZj17Y29udGFjdFVSTH0+Y29udGFjdCBob3N0PC9hPnsnICd9IHRvIGNvb3JkaW5hdGUgY2hlY2staW4gdGltZSBhbmQga2V5IGV4Y2hhbmdlLlxuXHRcdFx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9URD5cblx0XHRcdFx0XHRcdFx0PC9UUj5cblx0XHRcdFx0XHRcdDwvVEJvZHk+XG5cdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uR3Vlc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEZvcmdvdFBhc3N3b3JkRW1haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgfTtcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgdG9rZW4sIGVtYWlsLCBuYW1lLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHZlcmlmaWNhdGlvblVSTCA9IHVybCArIGAvcGFzc3dvcmQvdmVyaWZpY2F0aW9uP3Rva2VuPSR7dG9rZW59JmVtYWlsPSR7ZW1haWx9YDtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEhpIHtuYW1lfSxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBZb3UgaGF2ZSByZWNlaXZlZCBhIHJlcXVlc3QgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBJZiB5b3UgZGlkbuKAmXQgbWFrZSB0aGUgcmVxdWVzdCwganVzdCBpZ25vcmUgdGhpcyBtZXNzYWdlLiBPdGhlcndpc2UsIHlvdSBjYW4gcmVzZXQgeW91ciBwYXNzd29yZCB1c2luZyB0aGlzIGxpbms6XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgc3R5bGU9e2J1dHRvblN0eWxlfSBocmVmPXt2ZXJpZmljYXRpb25VUkx9PkNsaWNrIGhlcmUgdG8gcmVzZXQgeW91ciBwYXNzd29yZDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0JvZHk+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3RQYXNzd29yZEVtYWlsOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdWJqZWN0KHR5cGUpIHtcblx0bGV0IHN1YmplY3QsIHByZXZpZXdUZXh0O1xuXG5cdGlmICh0eXBlID09PSAnd2VsY29tZUVtYWlsJyB8fCB0eXBlID09PSAnY29uZmlybUVtYWlsJykge1xuXHRcdHN1YmplY3QgPSAnUGxlYXNlIGNvbmZpcm0geW91ciBlLW1haWwgYWRkcmVzcyc7XG5cdFx0cHJldmlld1RleHQgPSAnQWN0aW9uIFJlcXVpcmVkISBDb25maXJtIHlvdXIgZW1haWwnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnYm9va2luZ1JlcXVlc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3UgaGF2ZSBhIG5ldyByZXNlcnZhdGlvbic7XG5cdFx0cHJldmlld1RleHQgPSAnR3JlYXQgTmV3cyEgWW91IGhhdmUgYSBuZXcgcmVzZXJ2YXRpb24nO1xuXHR9XG5cdGlmICh0eXBlID09PSAnYm9va2luZ1JlcXVlc3RHdWVzdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgcmVzZXJ2YXRpb24gcmVxdWVzdCBzZW50IHRvIHlvdXIgaG9zdCc7XG5cdFx0cHJldmlld1RleHQgPSAnR3JlYXQgTmV3cyEgWW91ciByZXNlcnZhdGlvbiBpcyBzaGFyZWQgd2l0aCBob3N0Jztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdDb25maXJtZWRUb0hvc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3UgaGF2ZSBjb25maXJtZWQgYSByZXNlcnZhdGlvbic7XG5cdFx0cHJldmlld1RleHQgPSAnQ29uZmlybWVkIFJlc2VydmF0aW9uIERldGFpbHMnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnYm9va2luZ0NvbmZpcm1lZFRvR3Vlc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIHJlc2VydmF0aW9uIGlzIGNvbmZpcm1lZCBieSB5b3VyIGhvc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1BhY2sgeW91ciBiYWcsIHlvdSBhcmUgcmVhZHkgZm9yIHlvdXIgdHJpcCEnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnYm9va2luZ0RlY2xpbmVkVG9HdWVzdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgcmVzZXJ2YXRpb24gcmVxdWVzdCBpcyBkZWNsaW5lZCBieSB5b3VyIGhvc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1dlIGFyZSBzb3JyeSwgeW91ciByZXF1ZXN0IGlzIGRlY2xpbmVkJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdFeHBpcmVkR3Vlc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIHJlc2VydmF0aW9uIHJlcXVlc3QgaXMgZXhwaXJlZCc7XG5cdFx0cHJldmlld1RleHQgPSAnV2UgYXJlIHNvcnJ5LCB5b3VyIHJlcXVlc3QgaXMgZXhwaXJlZCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdib29raW5nRXhwaXJlZEhvc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIHJlc2VydmF0aW9uIGlzIGV4cGlyZWQnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1lvdXIgcmVzZXJ2YXRpb24gaXMgZXhwaXJlZCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdjYW5jZWxsZWRCeUhvc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIHJlc2VydmF0aW9uIGlzIGNhbmNlbGxlZCBieSBob3N0Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIHJlc2VydmF0aW9uIGlzIGNhbmNlbGxlZCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdjYW5jZWxsZWRCeUd1ZXN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91ciByZXNlcnZhdGlvbiBpcyBjYW5jZWxsZWQgYnkgZ3Vlc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1lvdXIgcmVzZXJ2YXRpb24gaXMgY2FuY2VsbGVkJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2NvbXBsZXRlZEd1ZXN0Jykge1xuXHRcdHN1YmplY3QgPSAnUGxlYXNlIHdyaXRlIGEgcmV2aWV3IGZvciB5b3VyIGhvc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0FjdGlvbiBSZXF1aXJlZCEgV3JpdGUgYSBSZXZpZXcnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnY29tcGxldGVkSG9zdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1BsZWFzZSB3cml0ZSBhIHJldmlldyBmb3IgeW91ciBndWVzdCc7XG5cdFx0cHJldmlld1RleHQgPSAnQWN0aW9uIFJlcXVpcmVkISBXcml0ZSBhIFJldmlldyc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdmb3Jnb3RQYXNzd29yZExpbmsnKSB7XG5cdFx0c3ViamVjdCA9ICdSZXNldCB5b3VyIFBhc3N3b3JkJztcblx0XHRwcmV2aWV3VGV4dCA9ICdBY3Rpb24gUmVxdWlyZWQhIFJlc2V0IHlvdXIgUGFzc3dvcmQnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdtZXNzYWdlJykge1xuXHRcdHN1YmplY3QgPSAnWW91IGhhdmUgZ290IGEgbmV3IG1lc3NhZ2UnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1NvbWVvbmUgc2VudCB5b3UgYSBuZXcgbWVzc2FnZSEnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdpbnF1aXJ5Jykge1xuXHRcdHN1YmplY3QgPSAnWW91IGhhdmUgZ290IGEgbmV3IGlucXVpcnknO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1NvbWVvbmUgc2VudCB5b3UgYW4gaW5xdWlyeSBmcm9tIGNvbnRhY3QgZm9ybSEnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdkb2N1bWVudFZlcmlmaWNhdGlvbicpIHtcblx0XHRzdWJqZWN0ID0gJ0RvY3VtZW50cyB2ZXJpZmljYXRpb24gc3RhdHVzJztcblx0XHRwcmV2aWV3VGV4dCA9ICdEb2N1bWVudHMgdmVyaWZpY2F0aW9uIHN0YXR1cyc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdjb250YWN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91IGdvdCBhIGN1c3RvbWVyIHN1cHBvcnQgbm90aWZpY2F0aW9uJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3UgZ290IGEgY3VzdG9tZXIgc3VwcG9ydCBub3RpZmljYXRpb24nO1xuXHR9XG5cdGlmICh0eXBlID09PSAncmVwb3J0VXNlcicpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdSBnb3QgYSBub3RpZmljYXRpb24gZm9yIHVzZXIgdmlvbGF0aW9uJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3UgZ290IGEgbm90aWZpY2F0aW9uIGZvciB1c2VyIHZpb2xhdGlvbi4gUmVwb3J0aW5nIGJ5IHNvbWVvbmUuJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdQcmVBcHByb3ZhbCcpIHtcblx0XHRzdWJqZWN0ID0gJ0hvc3QgcHJlLWFwcHJvdmVkIHlvdXIgcmVxdWVzdCc7XG5cdFx0cHJldmlld1RleHQgPSAnQm9va2luZyBwcmUtYXBwcm92ZWQnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdiYW5TdGF0dXNTZXJ2aWNlU3RhdHVzQmFubmVkJykge1xuXHRcdHN1YmplY3QgPSAnWW91ciBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIGFjY291bnQgaGFzIGJlZW4gZGlzYWJsZWQhJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2JhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBlbmFibGVkJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIGFjY291bnQgaGFzIGJlZW4gZW5hYmxlZCEnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnY29udGFjdFN1cHBvcnQnKSB7XG5cdFx0c3ViamVjdCA9ICdDdXN0b21lciBTdXBwb3J0Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdDdXN0b21lciBTdXBwb3J0Jztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ3VzZXJGZWVkYmFjaycpIHtcblx0XHRzdWJqZWN0ID0gJ0N1c3RvbWVyIEZlZWRiYWNrJztcblx0XHRwcmV2aWV3VGV4dCA9ICdDdXN0b21lciBGZWVkYmFjayc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdsaXN0UHVibGlzaFJlcXVlc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3UgaGF2ZSBOZXcgTGlzdGluZyBzdWJtaXNzaW9uIGZvciBBcHByb3ZhbCc7XG5cdFx0cHJldmlld1RleHQgPSAnWW91IGhhdmUgTmV3IExpc3Rpbmcgc3VibWlzc2lvbiBmb3IgQXBwcm92YWwnO1xuXHR9XG5cdGlmICh0eXBlID09ICdhZG1pbkxpc3RBcHByb3ZlJykge1xuXHRcdHN1YmplY3QgPSAnWW91ciBMaXN0aW5nIHN1Ym1pc3Npb24gaXMgQXBwcm92ZWQnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1lvdXIgTGlzdGluZyBzdWJtaXNzaW9uIGlzIEFwcHJvdmVkJztcblx0fVxuXHRpZiAodHlwZSA9PSAnYWRtaW5MaXN0UmVqZWN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91ciBMaXN0aW5nIHN1Ym1pc3Npb24gaXMgUmVqZWN0ZWQnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1lvdXIgTGlzdGluZyBzdWJtaXNzaW9uIGlzIFJlamVjdGVkJztcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c3ViamVjdCxcblx0XHRwcmV2aWV3VGV4dFxuXHR9O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQWRtaW5MaXN0QXBwcm92ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0dXNlck1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luOiAwLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGJvcmRlclJhZGl1czogJzJweCcsXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQnLFxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0Zm9udFdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxuXHRcdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG5cdFx0XHRib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRjb2xvcjogJyNmZmZmZmYnLFxuXHRcdFx0Ym9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXHRcdH07XG5cblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4J1xuXHRcdH07XG5cblx0XHRjb25zdCBsaW5rVGV4dCA9IHtcblx0XHRcdGNvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdH1cblxuXHRcdGNvbnN0IHsgY29udGVudDogeyBob3N0TmFtZSwgbGlzdElkLCBsaXN0VGl0bGUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBVUkwgPSB1cmwgKyBgL2JlY29tZS1hLWhvc3QvJHtsaXN0SWR9L2hvbWVgO1xuXHRcdGNvbnN0IGxpc3RVUkwgPSB1cmwgKyBgL3Jvb21zLyR7bGlzdElkfS9wcmV2aWV3YDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdEhpIHtob3N0TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFRoZSBBZG1pbiBoYXMgdmVyaWZpZWQgeW91ciBsaXN0aW5nICA8YSBocmVmPXtsaXN0VVJMfSBzdHlsZT17bGlua1RleHR9PiB7bGlzdFRpdGxlfSA8L2E+LiBQbGVhc2UgcHVibGlzaCB5b3VyIGxpc3RpbmcgdG8gZ2V0IHJlc2VydmF0aW9ucy5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17YnV0dG9uU3R5bGV9IGhyZWY9e1VSTH0+UHVibGlzaDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRUaGFua3MsIDxiciAvPlxuXHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0JvZHk+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkxpc3RBcHByb3ZlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCwgQSB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgeyBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjdmN2Y3JyxcbiAgfTtcblxuICBjb25zdCBzcGFjZVN0eWxlID0ge1xuICAgIHBhZGRpbmdCb3R0b206ICcyNXB4JyxcbiAgICBwYWRkaW5nTGVmdDogJzVweCcsXG4gICAgY29sb3I6ICcjOWNhMjk5JyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxUQm9keT5cbiAgICAgICAgPFRSPlxuICAgICAgICAgIDxURD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NwYWNlU3R5bGV9PlNlbnQgd2l0aCAmIzEwMDg0OyBmcm9tIHtzaXRlbmFtZX08L2Rpdj5cbiAgICAgICAgICA8L1REPlxuICAgICAgICA8L1RSPlxuICAgICAgPC9UQm9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcblxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGFibGUgd2lkdGg9JzEwMCUnXG4gICAgICBzdHlsZT17eyBXZWJraXRUZXh0U2l6ZUFkanVzdDogJzEwMCUnLCBtc1RleHRTaXplQWRqdXN0OiAnMTAwJScsIG1zb1RhYmxlTHNwYWNlOiAnMHB0JywgbXNvVGFibGVSc3BhY2U6ICcwcHQnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgbWFyZ2luOiAnMHB4IGF1dG8nIH19PlxuICAgICAgPFRCb2R5PlxuICAgICAgICA8VFI+XG4gICAgICAgICAgPFREPlxuICAgICAgICAgICAgey8qIENlbnRlcmVkIGNvbHVtbiAqL31cbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICBzdHlsZT17eyBXZWJraXRUZXh0U2l6ZUFkanVzdDogJzEwMCUnLCBtc1RleHRTaXplQWRqdXN0OiAnMTAwJScsIG1zb1RhYmxlTHNwYWNlOiAnMHB0JywgbXNvVGFibGVSc3BhY2U6ICcwcHQnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgbWFyZ2luOiAnMHB4IGF1dG8nLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jywgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc2NTBweCcgfX0+XG4gICAgICAgICAgICAgIDxUQm9keT5cbiAgICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgICA8VEQ+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgICAgPC9UQm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG5cbiAgICAgICAgICA8L1REPlxuICAgICAgICA8L1RSPlxuICAgICAgPC9UQm9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbG9jYWxlcyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7IFxuLy9pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNsYXNzIEN1cnJlbmN5VmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFtb3VudCwgY3VycmVuY3kgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vY29uc3QgeyBmb3JtYXROdW1iZXIgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHsvKiB7Zm9ybWF0TnVtYmVyKGFtb3VudC50b0ZpeGVkKDIpLCB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeSB9KX0gKi99XG4gICAgICAgICAgICAgICAge2Ftb3VudC50b0xvY2FsZVN0cmluZyhsb2NhbGVzWzBdLCB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeSB9KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChDdXJyZW5jeVZpZXcpO1xuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcblxuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi9FbXB0eVNwYWNlJztcblxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgPFRCb2R5PlxuICAgICAgICA8VFI+XG4gICAgICAgICAgPFREXG4gICAgICAgICAgICBzdHlsZT17cHJvcHMudGV4dFN0eWxlfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1REPlxuICAgICAgICA8L1RSPlxuICAgICAgPC9UQm9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJhblN0YXR1c1NlcnZpY2VTdGF0dXNCYW5uZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIHVzZXJNYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsaW5rVGV4dCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMzVweCdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBjb250ZW50OiB7IHVzZXJOYW1lLCB1c2VyTWFpbCwgYWRtaW5NYWlsLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBtYWlsVG8gPSAnbWFpbHRvOicgKyBhZG1pbk1haWw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWFyIHt1c2VyTmFtZX0sXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgaGF2ZSBiZWVuIGRpc2FibGVkIHlvdXIgYWNjb3VudCBmb3IgdmlvbGF0aW5nIG91ciB0ZXJtcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZ2V0IGluIHRvdWNoIHdpdGggb3VyIDxhIGhyZWY9e21haWxUb30+c3VwcG9ydCB0ZWFtPC9hPiwgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucy5cblx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG5cdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhblN0YXR1c1NlcnZpY2VTdGF0dXNCYW5uZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBPeSBmcm9tICdveS12ZXknO1xuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vZmV0Y2gnO1xuaW1wb3J0IEVtYWlsVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS9FbWFpbFRlbXBsYXRlJztcbmltcG9ydCB7IGdldFN1YmplY3QgfSBmcm9tICcuL3RlbXBsYXRlL3N1YmplY3RzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbCh0bywgdHlwZSwgY29udGVudCkge1xuICAgIFxuICAgIGxldCBodG1sLCBzdWJqZWN0LCBwcmV2aWV3VGV4dDtcbiAgICBsZXQgc3ViamVjdERhdGEgPSBnZXRTdWJqZWN0KHR5cGUpLCBlbWFpbENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgbGV0IHF1ZXJ5ID0gYHF1ZXJ5IGdldEVtYWlsTG9nbyB7XG4gICAgICAgIGdldEVtYWlsTG9nbyB7IFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9YDtcblxuICAgIGlmIChjb250ZW50ICYmICFjb250ZW50LmxvZ28pIHtcbiAgICAgICAgY29uc3QgbG9nb1Jlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGxvZ29SZXNwLmpzb24oKTtcbiAgICAgICAgZW1haWxDb250ZW50LmxvZ28gPSBkYXRhICYmIGRhdGEuZ2V0RW1haWxMb2dvICYmIGRhdGEuZ2V0RW1haWxMb2dvLnZhbHVlO1xuICAgIH1cblxuICAgIGh0bWwgPSBPeS5yZW5kZXJUZW1wbGF0ZShcbiAgICAgICAgPEludGxQcm92aWRlciBsb2NhbGU9e1wiZW5cIn0+XG4gICAgICAgICAgICA8RW1haWxUZW1wbGF0ZSB0eXBlPXt0eXBlfSBjb250ZW50PXtlbWFpbENvbnRlbnR9IC8+XG4gICAgICAgIDwvSW50bFByb3ZpZGVyPiwge1xuICAgICAgICAgICAgdGl0bGU6IHN1YmplY3REYXRhLnN1YmplY3QsXG4gICAgICAgICAgICBwcmV2aWV3VGV4dDogc3ViamVjdERhdGEucHJldmlld1RleHRcbiAgICAgICAgfSk7XG5cbiAgICBsZXQgbWFpbE9wdGlvbnMgPSB7XG4gICAgICAgIHRvLCAvLyBsaXN0IG9mIHJlY2VpdmVyc1xuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0RGF0YS5zdWJqZWN0LCAvLyBTdWJqZWN0IGxpbmVcbiAgICAgICAgLy90ZXh0OiB0ZXh0TWVzc2FnZSwgLy8gcGxhaW4gdGV4dCBib2R5XG4gICAgICAgIGh0bWxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL3NlbmRFbWFpbCcsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1haWxPcHRpb25zIH0pLFxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSk7XG4gICAgY29uc3QgeyBzdGF0dXMsIHJlc3BvbnNlIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICByZXR1cm4geyBzdGF0dXMsIHJlc3BvbnNlIH07XG59IFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25maXJtRW1haWwgZnJvbSAnLi9Db25maXJtRW1haWwnO1xuaW1wb3J0IEJvb2tpbmdSZXF1ZXN0SG9zdCBmcm9tICcuL0Jvb2tpbmdSZXF1ZXN0SG9zdCc7XG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvbkhvc3QgZnJvbSAnLi9Cb29raW5nQ29uZmlybWF0aW9uSG9zdCc7XG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvbkd1ZXN0IGZyb20gJy4vQm9va2luZ0NvbmZpcm1hdGlvbkd1ZXN0JztcbmltcG9ydCBCb29raW5nRGVjbGluZWRHdWVzdCBmcm9tICcuL0Jvb2tpbmdEZWNsaW5lZEd1ZXN0JztcbmltcG9ydCBCb29raW5nUmVxdWVzdEd1ZXN0IGZyb20gJy4vQm9va2luZ1JlcXVlc3RHdWVzdCc7XG5pbXBvcnQgQm9va2luZ0V4cGlyZWRHdWVzdCBmcm9tICcuL0Jvb2tpbmdFeHBpcmVkR3Vlc3QnO1xuaW1wb3J0IEJvb2tpbmdFeHBpcmVkSG9zdCBmcm9tICcuL0Jvb2tpbmdFeHBpcmVkSG9zdCc7XG5pbXBvcnQgQ2FuY2VsbGVkQnlIb3N0IGZyb20gJy4vQ2FuY2VsbGVkQnlIb3N0JztcbmltcG9ydCBDYW5jZWxsZWRCeUd1ZXN0IGZyb20gJy4vQ2FuY2VsbGVkQnlHdWVzdCc7XG5pbXBvcnQgQ29tcGxldGVkUmVzZXJ2YXRpb25HdWVzdCBmcm9tICcuL0NvbXBsZXRlZFJlc2VydmF0aW9uR3Vlc3QnO1xuaW1wb3J0IENvbXBsZXRlZFJlc2VydmF0aW9uSG9zdCBmcm9tICcuL0NvbXBsZXRlZFJlc2VydmF0aW9uSG9zdCc7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmRFbWFpbCBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkRW1haWwnO1xuaW1wb3J0IE5ld01lc3NhZ2UgZnJvbSAnLi9OZXdNZXNzYWdlJztcbmltcG9ydCBOZXdJbnF1aXJ5IGZyb20gJy4vTmV3SW5xdWlyeSc7XG5pbXBvcnQgQ29uZmlybURvY3VtZW50VmVyaWZpY2F0aW9uIGZyb20gJy4vQ29uZmlybURvY3VtZW50VmVyaWZpY2F0aW9uJztcbmltcG9ydCBDb250YWN0RW1haWwgZnJvbSAnLi9Db250YWN0RW1haWwnO1xuaW1wb3J0IFJlcG9ydFVzZXJNYWlsIGZyb20gJy4vUmVwb3J0VXNlck1haWwnO1xuaW1wb3J0IEJvb2tpbmdQcmVBcHByb3ZhbCBmcm9tICcuL0Jvb2tpbmdQcmVBcHByb3ZhbCc7XG5pbXBvcnQgQmFuU3RhdHVzU2VydmljZVN0YXR1c0Jhbm5lZCBmcm9tICcuL0JhblN0YXR1c1NlcnZpY2VTdGF0dXNCYW5uZWQnO1xuaW1wb3J0IEJhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZCBmcm9tICcuL0JhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZCc7XG5pbXBvcnQgQ29udGFjdFN1cHBvcnQgZnJvbSAnLi9Db250YWN0U3VwcG9ydCc7XG5pbXBvcnQgRmVlZGJhY2tNYWlsIGZyb20gJy4vRmVlZGJhY2tNYWlsJztcbmltcG9ydCBMaXN0UHVibGlzaFJlcXVlc3QgZnJvbSAnLi9MaXN0UHVibGlzaFJlcXVlc3QnO1xuaW1wb3J0IEFkbWluTGlzdEFwcHJvdmUgZnJvbSAnLi9BZG1pbkxpc3RBcHByb3ZlJztcbmltcG9ydCBBZG1pbkxpc3REZWNsaW5lIGZyb20gJy4vQWRtaW5MaXN0RGVjbGluZSc7XG5cbmNsYXNzIEVtYWlsVGVtcGxhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3dlbGNvbWVFbWFpbCcgJiYgPENvbmZpcm1FbWFpbCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdjb25maXJtRW1haWwnICYmIDxDb25maXJtRW1haWwgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYm9va2luZ1JlcXVlc3QnICYmIDxCb29raW5nUmVxdWVzdEhvc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYm9va2luZ1JlcXVlc3RHdWVzdCcgJiYgPEJvb2tpbmdSZXF1ZXN0R3Vlc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYm9va2luZ0NvbmZpcm1lZFRvSG9zdCcgJiYgPEJvb2tpbmdDb25maXJtYXRpb25Ib3N0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2Jvb2tpbmdDb25maXJtZWRUb0d1ZXN0JyAmJiA8Qm9va2luZ0NvbmZpcm1hdGlvbkd1ZXN0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2Jvb2tpbmdEZWNsaW5lZFRvR3Vlc3QnICYmIDxCb29raW5nRGVjbGluZWRHdWVzdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdib29raW5nRXhwaXJlZEd1ZXN0JyAmJiA8Qm9va2luZ0V4cGlyZWRHdWVzdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdib29raW5nRXhwaXJlZEhvc3QnICYmIDxCb29raW5nRXhwaXJlZEhvc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnY2FuY2VsbGVkQnlIb3N0JyAmJiA8Q2FuY2VsbGVkQnlIb3N0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2NhbmNlbGxlZEJ5R3Vlc3QnICYmIDxDYW5jZWxsZWRCeUd1ZXN0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2NvbXBsZXRlZEd1ZXN0JyAmJiA8Q29tcGxldGVkUmVzZXJ2YXRpb25HdWVzdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdjb21wbGV0ZWRIb3N0JyAmJiA8Q29tcGxldGVkUmVzZXJ2YXRpb25Ib3N0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2ZvcmdvdFBhc3N3b3JkTGluaycgJiYgPEZvcmdvdFBhc3N3b3JkRW1haWwgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnbWVzc2FnZScgJiYgPE5ld01lc3NhZ2UgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnaW5xdWlyeScgJiYgPE5ld0lucXVpcnkgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnZG9jdW1lbnRWZXJpZmljYXRpb24nICYmIDxDb25maXJtRG9jdW1lbnRWZXJpZmljYXRpb24gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnY29udGFjdCcgJiYgPENvbnRhY3RFbWFpbCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdyZXBvcnRVc2VyJyAmJiA8UmVwb3J0VXNlck1haWwgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYm9va2luZ1ByZUFwcHJvdmFsJyAmJiA8Qm9va2luZ1ByZUFwcHJvdmFsIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2JhblN0YXR1c1NlcnZpY2VTdGF0dXNCYW5uZWQnICYmIDxCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzQmFubmVkIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2JhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZCcgJiYgPEJhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdjb250YWN0U3VwcG9ydCcgJiYgPENvbnRhY3RTdXBwb3J0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3VzZXJGZWVkYmFjaycgJiYgPEZlZWRiYWNrTWFpbCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdsaXN0UHVibGlzaFJlcXVlc3QnICYmIDxMaXN0UHVibGlzaFJlcXVlc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYWRtaW5MaXN0QXBwcm92ZScgJiYgPEFkbWluTGlzdEFwcHJvdmUgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYWRtaW5MaXN0UmVqZWN0JyAmJiA8QWRtaW5MaXN0RGVjbGluZSBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxUZW1wbGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCb29raW5nRGVjbGluZWRHdWVzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0XHRcdGNvbG9yOiAnIzQ4NDg0OCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jyxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0cGFkZGluZzogJzM1cHgnLFxuXHRcdH07XG5cblxuXHRcdGNvbnN0IHsgY29udGVudDogeyBndWVzdE5hbWUsIGhvc3ROYW1lLCBjb25maXJtYXRpb25Db2RlLCBjaGVja0luLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IGNoZWNrSW5EYXRlID0gY2hlY2tJbiAhPSBudWxsID8gbW9tZW50KGNoZWNrSW4pLmZvcm1hdCgnZGRkLCBEbyBNTU0sIFlZWVknKSA6ICcnO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG5cdFx0XHRcdFx0XHQ8VEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxUUj5cblx0XHRcdFx0XHRcdFx0XHQ8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SGkge2d1ZXN0TmFtZX0sXG5cdFx0XHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0V2UgcmVncmV0IHRvIGluZm9ybSB5b3UgdGhhdCB5b3VyIGhvc3Qge2hvc3ROYW1lfSBkZWNsaW5lZCB5b3VyIHJlcXVlc3Rcblx0XHRcdFx0XHQgICAgICAgICAgeycgJ317Y29uZmlybWF0aW9uQ29kZX0gc3RhcnRpbmcgb24ge2NoZWNrSW5EYXRlfS4gQXMgcGVyIHRoZSBjYW5jZWxsYXRpb24gcG9saWN5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHlvdSB3aWxsIGJlIHJlZnVuZGVkIGFuZCBub3RpZmllZC5cblx0XHRcdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIFRoYW5rcywgPGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L1REPlxuXHRcdFx0XHRcdFx0XHQ8L1RSPlxuXHRcdFx0XHRcdFx0PC9UQm9keT5cblx0XHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdEZWNsaW5lZEd1ZXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQTlEQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFDQTtBQStEQTs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXBFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFxRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUExRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQTJFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBbEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBbUVBOzs7Ozs7O0FDL0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBeElBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBQ0E7QUF5SUE7Ozs7Ozs7QUN2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBakVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBa0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFwREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTtBQXFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdkhBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFDQTtBQXdIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBak5BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQURBO0FBQ0E7QUFrTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXREQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUNBO0FBdURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXRFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBdUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUEvREE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQWdFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBckdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFDQTtBQXNHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXpHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQURBO0FBQ0E7QUEwR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQWhFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQWlFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBQ0E7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBNUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBQ0E7QUE2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE1RUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTtBQTRFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF4SUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTtBQXlJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXpGQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFDQTtBQTBGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQTNFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBRkE7QUFjQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBZ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBbkVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFDQTtBQW9FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXJFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQXNFQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBeEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUF5RUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFmQTtBQUNBO0FBQ0E7QUFGQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFDQTtBQWRBO0FBYUE7QUFiQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBckNBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQTVDQTtBQTJDQTtBQTNDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBb0RBO0FBQUE7QUFwREE7QUFxREE7QUFBQTtBQUFBO0FBQ0E7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQTlGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQStGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdkRBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBQ0E7QUF3REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==