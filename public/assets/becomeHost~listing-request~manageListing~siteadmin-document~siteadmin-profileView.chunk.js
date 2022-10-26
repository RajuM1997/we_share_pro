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
function checkValue(value, defaultValue) {
  return value !== null ? value : defaultValue;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVjb21lSG9zdH5saXN0aW5nLXJlcXVlc3R+bWFuYWdlTGlzdGluZ35zaXRlYWRtaW4tZG9jdW1lbnR+c2l0ZWFkbWluLXByb2ZpbGVWaWV3LmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db250YWN0U3VwcG9ydC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9oZWxwZXJzL3RpbWVIZWxwZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvaGVscGVycy9kYXRlUmFuZ2UuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db25maXJtRG9jdW1lbnRWZXJpZmljYXRpb24uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9MaXN0UHVibGlzaFJlcXVlc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db25maXJtRW1haWwuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9pZ25vcmVkIC9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliIHV0aWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Db21wbGV0ZWRSZXNlcnZhdGlvbkd1ZXN0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvaWdub3JlZCAvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zIHV0aWwiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9SZXBvcnRVc2VyTWFpbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0Jvb2tpbmdFeHBpcmVkSG9zdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL05ld0lucXVpcnkuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC9tb2R1bGVzL0hlYWRlci5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL21vZHVsZXMvRW1wdHlTcGFjZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0Jvb2tpbmdDb25maXJtYXRpb25Ib3N0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQm9va2luZ0V4cGlyZWRHdWVzdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0JhblN0YXR1c1NlcnZpY2VTdGF0dXNVbkJhbm5lZC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0FkbWluTGlzdERlY2xpbmUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9OZXdNZXNzYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQm9va2luZ1JlcXVlc3RIb3N0LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvRmVlZGJhY2tNYWlsLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQm9va2luZ1ByZUFwcHJvdmFsLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQ2FuY2VsbGVkQnlHdWVzdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0NvbnRhY3RFbWFpbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0NvbXBsZXRlZFJlc2VydmF0aW9uSG9zdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0Jvb2tpbmdSZXF1ZXN0R3Vlc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9DYW5jZWxsZWRCeUhvc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Cb29raW5nQ29uZmlybWF0aW9uR3Vlc3QuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Gb3Jnb3RQYXNzd29yZEVtYWlsLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvc3ViamVjdHMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9BZG1pbkxpc3RBcHByb3ZlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvbW9kdWxlcy9Gb290ZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC9sYXlvdXRzL0xheW91dC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL21vZHVsZXMvQ3VycmVuY3lWaWV3LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvbW9kdWxlcy9Cb2R5LmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvcmUvZW1haWwvdGVtcGxhdGUvQmFuU3RhdHVzU2VydmljZVN0YXR1c0Jhbm5lZC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3NlbmRFbWFpbC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb3JlL2VtYWlsL3RlbXBsYXRlL0VtYWlsVGVtcGxhdGUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9lbWFpbC90ZW1wbGF0ZS9Cb29raW5nRGVjbGluZWRHdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIENvbnRhY3RTdXBwb3J0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBDb250YWN0TWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBsaXN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgICAgIH07XG4gICAgICAgIGxldCB0ZXh0Qm9sZCA9IHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY29udGVudDogeyBDb250YWN0TWVzc2FnZSwgZW1haWwsIG5hbWUsIGNvbmZpcm1hdGlvbkNvZGUsIHVzZXJUeXBlLCBsaXN0SWQsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhpIEFkbWluLFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEEge3VzZXJUeXBlfSB3YW50ZWQgdG8gY29udGFjdCB5b3UgZm9yIHRoZSBzdXBwb3J0LCByZWdhcmRpbmcgcmVzZXZhdGlvbiAje2NvbmZpcm1hdGlvbkNvZGV9IG9uIHRoZSBwcm9wZXJ0eSBJRCB7bGlzdElkfS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17dGV4dEJvbGR9PkNvbnRhY3RlciBOYW1lOjwvc3Bhbj4ge25hbWV9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17dGV4dEJvbGR9PkNvbnRhY3RlciBFbWFpbDo8L3NwYW4+IHtlbWFpbH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt0ZXh0Qm9sZH0+TWVzc2FnZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdE1lc3NhZ2UgJiYgKENvbnRhY3RNZXNzYWdlLnRyaW0oKSkuc3BsaXQoXCJcXG5cIikubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08YnIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RTdXBwb3J0OyIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXR0aW5nVGltZSh0aW1lKSB7XG4gIGxldCBhbVBNLCB1cGRhdGVkVGltZTtcbiAgaWYgKCFpc05hTih0aW1lKSkge1xuICAgIGlmICh0aW1lIDwgMTEgfHwgdGltZSA+IDIzKSB7XG4gICAgICBhbVBNID0gXCJBTVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbVBNID0gXCJQTVwiO1xuICAgIH1cbiAgICBpZiAodGltZSA8IDEyKSB7XG4gICAgICByZXR1cm4gdGltZSArIGFtUE07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aW1lID4gMjQpIHtcbiAgICAgICAgdXBkYXRlZFRpbWUgPSBOdW1iZXIodGltZSkgLSAyNDtcbiAgICAgIH0gZWxzZSBpZiAodGltZSA9PSAxMikge1xuICAgICAgICB1cGRhdGVkVGltZSA9IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlZFRpbWUgPSBOdW1iZXIodGltZSkgLSAxMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cGRhdGVkVGltZSArIGFtUE07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luRGF0YShjaGVja0RhdGFWYWx1ZSkge1xuICBsZXQgY2hlY2tJbjtcbiAgaWYgKGNoZWNrRGF0YVZhbHVlID09PSBcIkZsZXhpYmxlXCIpIHtcbiAgICBjaGVja0luID0gXCJGbGV4aWJsZVwiO1xuICB9IGVsc2Uge1xuICAgIGlmIChjaGVja0RhdGFWYWx1ZSAhPSBudWxsKSB7XG4gICAgICBjaGVja0luID0gZm9ybWF0dGluZ1RpbWUoY2hlY2tEYXRhVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGVja0luO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbihjaGVja0luU3RhcnQsIGNoZWNrSW5FbmQpIHtcbiAgbGV0IGNoZWNrSW47XG4gIGlmIChjaGVja0luU3RhcnQgPT09IFwiRmxleGlibGVcIikge1xuICAgIGNoZWNrSW4gPSBcIkZsZXhpYmxlXCI7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNoZWNrSW5FbmQgPT09IFwiRmxleGlibGVcIikge1xuICAgICAgY2hlY2tJbiA9IFwiRnJvbSBcIiArIGZvcm1hdHRpbmdUaW1lKGNoZWNrSW5TdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjaGVja0luU3RhcnQgIT0gbnVsbCAmJiBjaGVja0luRW5kICE9IG51bGwpIHtcbiAgICAgICAgY2hlY2tJbiA9IGZvcm1hdHRpbmdUaW1lKGNoZWNrSW5TdGFydCkgKyBcIiAtIFwiICsgZm9ybWF0dGluZ1RpbWUoY2hlY2tJbkVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoZWNrSW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZhbHVlKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY291bnRyaWVzREIgZnJvbSAnY291bnRyaWVzLWRiJ1xuaW1wb3J0IG1vbWVudFRpbWVab25lIGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIHN0b3BEYXRlKSB7XG5cdGxldCBkYXRlQXJyYXkgPSBbXSwgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuXG5cdHdoaWxlIChjdXJyZW50RGF0ZSA8PSBzdG9wRGF0ZSkge1xuXHRcdGRhdGVBcnJheS5wdXNoKG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldFRpbWUoKSkpO1xuXHRcdGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7XG5cdH1cblxuXHRyZXR1cm4gZGF0ZUFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2UoZGF0ZXMpIHtcblx0dmFyIHN0YXJ0RGF0ZSA9IG51bGwsIGVuZERhdGUgPSBudWxsLCBjb3VudGVyID0gMDtcblx0dmFyIHByZXZpb3VzRGF0ZSA9IG51bGwsIGRhdGVzQ29sbGVjdGlvbiA9IFtdO1xuXHRpZiAoZGF0ZXMubGVuZ3RoID4gMCkge1xuXHRcdGlmIChkYXRlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdGRhdGVzQ29sbGVjdGlvbiA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogZGF0ZXNbMF0sXG5cdFx0XHRcdFx0ZW5kRGF0ZTogZGF0ZXNbMF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0dmFyIGRhdGVSYW5nZSA9IHt9O1xuXHRcdFx0XHR2YXIgY3VycmVudERhdGUgPSBtb21lbnQoaXRlbSk7XG5cdFx0XHRcdGNvdW50ZXIrKztcblx0XHRcdFx0aWYgKHByZXZpb3VzRGF0ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHN0YXJ0RGF0ZSA9IGl0ZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHByZXZpb3VzRGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dmFyIHByZXZpb3VzRGF0ZU9iamVjdCA9IG1vbWVudChwcmV2aW91c0RhdGUpO1xuXHRcdFx0XHRcdHZhciBkaWZmZXJlbmNlID0gY3VycmVudERhdGUuZGlmZihwcmV2aW91c0RhdGVPYmplY3QsICdkYXlzJyk7XG5cdFx0XHRcdFx0aWYgKGRpZmZlcmVuY2UgPiAxKSB7XG5cdFx0XHRcdFx0XHRlbmREYXRlID0gbmV3IERhdGUobmV3IERhdGUocHJldmlvdXNEYXRlKS5nZXRUaW1lKCkgKyAzNjAwMDAwKTtcblx0XHRcdFx0XHRcdGRhdGVSYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0c3RhcnREYXRlLFxuXHRcdFx0XHRcdFx0XHRlbmREYXRlXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0ZGF0ZXNDb2xsZWN0aW9uLnB1c2goZGF0ZVJhbmdlKTtcblx0XHRcdFx0XHRcdHN0YXJ0RGF0ZSA9IGl0ZW07XG5cdFx0XHRcdFx0XHRpZiAoY291bnRlciA9PT0gZGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdGVuZERhdGUgPSBpdGVtO1xuXHRcdFx0XHRcdFx0XHRkYXRlUmFuZ2UgPSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhcnREYXRlLFxuXHRcdFx0XHRcdFx0XHRcdGVuZERhdGVcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0ZGF0ZXNDb2xsZWN0aW9uLnB1c2goZGF0ZVJhbmdlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGNvdW50ZXIgPT09IGRhdGVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRlbmREYXRlID0gbmV3IERhdGUobmV3IERhdGUoaXRlbSkuZ2V0VGltZSgpICsgMzYwMDAwMCk7XG5cdFx0XHRcdFx0XHRcdGRhdGVSYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRzdGFydERhdGUsXG5cdFx0XHRcdFx0XHRcdFx0ZW5kRGF0ZVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRkYXRlc0NvbGxlY3Rpb24ucHVzaChkYXRlUmFuZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwcmV2aW91c0RhdGUgPSBpdGVtO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRlc0NvbGxlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVXNpbmdUaW1lWm9uZShjb3VudHJ5LCBkYXRlRm9ybWF0KSB7XG5cdGlmICghY291bnRyeSkgcmV0dXJuIG1vbWVudCgpO1xuXHRlbHNlIHtcblx0XHRsZXQgY29udmVydGVkRGF0ZTtcblx0XHRjb25zdCB0aW1lem9uZXMgPSBjb3VudHJpZXNEQiAmJiBjb3VudHJpZXNEQi5nZXRDb3VudHJ5KGNvdW50cnksICd0aW1lem9uZXMnKTtcblx0XHRpZiAodGltZXpvbmVzICYmIHRpbWV6b25lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb252ZXJ0ZWREYXRlID0gKHRpbWV6b25lcyAmJiB0aW1lem9uZXMubGVuZ3RoID4gMCkgPyBtb21lbnRUaW1lWm9uZS50eih0aW1lem9uZXNbMF0pIDogbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydGVkRGF0ZSAmJiBjb252ZXJ0ZWREYXRlICE9IG51bGwpIHtcblx0XHRcdGlmIChkYXRlRm9ybWF0KSB7XG5cdFx0XHRcdGNvbnZlcnRlZERhdGUgPSBjb252ZXJ0ZWREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnZlcnRlZERhdGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtb21lbnQoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGVXaXRoVGltZVpvbmUoZGF0ZSwgY291bnRyeSkge1xuXHRpZiAoIWNvdW50cnkgfHwgIWRhdGUpIHJldHVybiBtb21lbnQoZGF0ZSk7XG5cblx0bGV0IGNvbnZlcnRlZERhdGU7XG5cdGNvbnN0IHRpbWV6b25lcyA9IGNvdW50cmllc0RCICYmIGNvdW50cmllc0RCLmdldENvdW50cnkoY291bnRyeSwgJ3RpbWV6b25lcycpO1xuXHRpZiAodGltZXpvbmVzICYmIHRpbWV6b25lcy5sZW5ndGggPiAwKSB7XG5cdFx0Y29udmVydGVkRGF0ZSA9IG1vbWVudFRpbWVab25lLnR6KGRhdGUsIHRpbWV6b25lc1swXSk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVydGVkRGF0ZSB8fCBtb21lbnQoZGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlUmFuZ2VzKHsgY2hlY2tJbiwgY291bnRyeSwgY2hlY2tPdXQgfSkge1xuXHRsZXQgc3RhcnREYXRlID0gc2V0RGF0ZVdpdGhUaW1lWm9uZShjaGVja0luLCBjb3VudHJ5KS5zdGFydE9mKCdkYXknKSxcblx0XHRlbmREYXRlID0gc2V0RGF0ZVdpdGhUaW1lWm9uZShjaGVja091dCwgY291bnRyeSkuc3RhcnRPZignZGF5JyksXG5cdFx0dG9kYXkgPSBnZXREYXRlVXNpbmdUaW1lWm9uZShjb3VudHJ5LCBmYWxzZSkuc3RhcnRPZignZGF5Jyk7XG5cdHJldHVybiB7XG5cdFx0bmlnaHRzOiBlbmREYXRlLmRpZmYoc3RhcnREYXRlLCAnZGF5cycpLFxuXHRcdGludGVydmFsOiBzdGFydERhdGUuZGlmZih0b2RheSwgJ2RheXMnKSxcblx0XHR0b2RheVxuXHR9O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQ29uZmlybURvY3VtZW50VmVyaWZpY2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB2ZXJpZmljYXRpb25TdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuICAgIH07XG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4J1xuICAgIH07XG4gICAgY29uc3QgeyBjb250ZW50OiB7IHZlcmlmaWNhdGlvblN0YXR1cywgbmFtZSwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB2ZXJpZmljYXRpb25VUkwgPSB1cmwgKyBgL3VzZXIvdmVyaWZpY2F0aW9uYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEhpIHtuYW1lfSxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBXZWxjb21lIHRvIHtzaXRlbmFtZX0hXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgWW91ciBkb2N1bWVudHMgaGF2ZSBiZWVuIHt2ZXJpZmljYXRpb25TdGF0dXN9IGluIHRoZSBkb2N1bWVudCB2ZXJpZmljYXRpb24gcHJvY2Vzcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBzdHlsZT17YnV0dG9uU3R5bGV9IGhyZWY9e3ZlcmlmaWNhdGlvblVSTH0+Q2hlY2sgeW91ciBwcm9maWxlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MzB9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm9keT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1Eb2N1bWVudFZlcmlmaWNhdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIExpc3RQdWJsaXNoUmVxdWVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0dXNlck1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luOiAwLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGJvcmRlclJhZGl1czogJzJweCcsXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQnLFxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0Zm9udFdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxuXHRcdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG5cdFx0XHRib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRjb2xvcjogJyNmZmZmZmYnLFxuXHRcdFx0Ym9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXHRcdH07XG5cblx0XHRjb25zdCBsaW5rVGV4dCA9IHtcblx0XHRcdGNvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdH1cblxuXHRcdGNvbnN0IHRleHRTdHlsZSA9IHtcblx0XHRcdGNvbG9yOiAnIzQ4NDg0OCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3Jyxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRmb250U2l6ZTogJzE2cHgnLFxuXHRcdFx0cGFkZGluZzogJzM1cHgnXG5cdFx0fTtcblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgaG9zdE5hbWUsIGxpc3RJZCwgbGlzdFRpdGxlLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IFVSTCA9IHVybCArIGAvYmVjb21lLWEtaG9zdC8ke2xpc3RJZH0vaG9tZWA7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0PEJvZHkgdGV4dFN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRIaSBBZG1pbixcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0QSBuZXcgbGlzdGluZyB7bGlzdFRpdGxlfSBoYXMgYmVlbiBzdWJtaXR0ZWQgZm9yIHlvdXIgYXBwcm92YWwgYnkgdGhlIEhvc3Qge2hvc3ROYW1lfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxhIHN0eWxlPXtidXR0b25TdHlsZX0gaHJlZj17VVJMfT5DbGljayBIZXJlPC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFBsZWFzZSByZXZpZXcgYW5kIHRha2UgbmVjZXNzYXJ5IGFjdGlvbi5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRUaGFua3MsIDxiciAvPlxuXHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0JvZHk+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0UHVibGlzaFJlcXVlc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBDb25maXJtRW1haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHRva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgfTtcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgdG9rZW4sIGVtYWlsLCBuYW1lLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHZlcmlmaWNhdGlvblVSTCA9IHVybCArIGAvdXNlci92ZXJpZmljYXRpb24/Y29uZmlybT0ke3Rva2VufSZlbWFpbD0ke2VtYWlsfWA7XG4gICAgbGV0IGZpcnN0TmFtZSA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG4gICAgICAgIDxCb2R5IHRleHRTdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSGkge2ZpcnN0TmFtZX0sXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgV2VsY29tZSB0byB7c2l0ZW5hbWV9ISBJbiBvcmRlciB0byBnZXQgc3RhcnRlZCwgeW91IG5lZWQgdG8gY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgc3R5bGU9e2J1dHRvblN0eWxlfSBocmVmPXt2ZXJpZmljYXRpb25VUkx9PkNvbmZpcm0geW91ciBlbWFpbDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezMwfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0JvZHk+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtRW1haWw7IiwiLyogKGlnbm9yZWQpICovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBDb21wbGV0ZWRSZXNlcnZhdGlvbkd1ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgaG9zdExhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBob3N0UHJvZmlsZVBpYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfTtcblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcblxuICAgIH1cblxuICAgIGNvbnN0IGJvb2tpbmdUaXRsZSA9IHtcbiAgICAgIHBhZGRpbmdCb3R0b206ICcyMHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcblxuICAgIH1cblxuICAgIGNvbnN0IHByb2ZpbGVQaWMgPSB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6ICcwJyxcbiAgICAgIHdpZHRoOiAnMTI1cHgnXG4gICAgfVxuXG4gICAgY29uc3QgdXNlck5hbWUgPSB7XG4gICAgICBjb2xvcjogJyM1NjVhNWMnLFxuICAgICAgZm9udFNpemU6ICcyNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1cHgnLFxuICAgIH1cblxuICAgIGNvbnN0IHN1YlRpdGxlID0ge1xuICAgICAgY29sb3I6ICcjNTY1YTVjJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNXB4JyxcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rVGV4dCA9IHtcbiAgICAgIGNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH1cblxuICAgIGNvbnN0IHNwYWNlID0ge1xuICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxuICAgIH1cbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgcmVzZXJ2YXRpb25JZCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGVudDogeyBob3N0TmFtZSwgaG9zdExhc3ROYW1lLCBob3N0UHJvZmlsZVBpYyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZXNzYWdlVVJMID0gdXJsICsgJy9yZXZpZXcvd3JpdGUvJyArIHJlc2VydmF0aW9uSWQ7XG4gICAgbGV0IGltYWdlVVJMO1xuICAgIGlmIChob3N0UHJvZmlsZVBpYykge1xuICAgICAgaW1hZ2VVUkwgPSB1cmwgKyAnL2ltYWdlcy9hdmF0YXIvbWVkaXVtXycgKyBob3N0UHJvZmlsZVBpYztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBob3N0UHJvZmlsZVBpYyAmJiA8aW1nIHN0eWxlPXtwcm9maWxlUGljfSBzcmM9e2ltYWdlVVJMfSBoZWlnaHQ9ezEyNX0gLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtib29raW5nVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICBUZWxsIHtob3N0TmFtZX0ge2hvc3RMYXN0TmFtZX0gd2hhdCB5b3UgbG92ZWQgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBhbmQgd2hhdCB0aGV5IGNhbiBkbyBiZXR0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIGp1c3QgY2hlY2tlZCBvdXQsIHNvIG5vdyBpcyB0aGUgcGVyZmVjdCB0aW1lIHRvIHdyaXRlIHlvdXIgcmV2aWV3LlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBSZXZpZXdzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiB0aGUge3NpdGVuYW1lfSBjb21tdW5pdHkuIFBsZWFzZSB0YWtlIGEgbW9tZW50IHRvIHByb3ZpZGUgeW91ciBob3N0IHdpdGggc29tZSBoZWxwZnVsIGZlZWRiYWNrIC1cbiAgICAgICAgICAgICAgICAgICAgaXQnbGwgb25seSB0YWtlIGZldyBtaW51dGVzLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NTB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttZXNzYWdlVVJMfSBzdHlsZT17YnV0dG9uU3R5bGV9PldyaXRlIGEgUmV2aWV3PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0ZWRSZXNlcnZhdGlvbkd1ZXN0OyIsIi8qIChpZ25vcmVkKSAqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgUmVwb3J0VXNlck1haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICByZXBvcnRlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHJlcG9ydFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgY29udGVudDogeyB1c2VyTmFtZSwgcmVwb3J0ZXJOYW1lLCByZXBvcnRUeXBlLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBIaSBBZG1pbixcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgZ290IGEgbm90aWZpY2F0aW9uIGZvciB0aGUgdXNlciB2aW9sYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJOYW1lfSBpcyB2b2lsYXRpbmcgdGhlIHBsYXRmb3JtIHRlcm1zIGFuZCByZXBvcnRlZCBieSB7cmVwb3J0ZXJOYW1lfSA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpb2xhdGlvbjoge3JlcG9ydFR5cGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFVzZXJNYWlsOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQm9va2luZ0V4cGlyZWRIb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0Z3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0bGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0fSkuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgeyBjb250ZW50OiB7IGhvc3ROYW1lLCBndWVzdE5hbWUsIGxpc3RUaXRsZSwgY29uZmlybWF0aW9uQ29kZSwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG5cdFx0XHRcdFx0XHQ8VEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxUUj5cblx0XHRcdFx0XHRcdFx0XHQ8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SGkge2hvc3ROYW1lfSxcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRZb3VyIHJlc2VydmF0aW9uICh7Y29uZmlybWF0aW9uQ29kZX0pIGZyb20ge2d1ZXN0TmFtZX0gYXQge2xpc3RUaXRsZX0gaGFzIGV4cGlyZWQuXG5cdFx0XHRcdFx0XHRcdFx0XHR7JyAnfXtndWVzdE5hbWV9IHdpbGwgYmUgZnVsbHkgcmVmdW5kZWQuXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0VGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvVEQ+XG5cdFx0XHRcdFx0XHRcdDwvVFI+XG5cdFx0XHRcdFx0XHQ8L1RCb2R5PlxuXHRcdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ0V4cGlyZWRIb3N0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBOZXdJbnF1aXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByZWNlaXZlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzZW5kZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tvdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHBlcnNvbkNhcGFjaXR5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICB9O1xuXG4gICAgY29uc3QgYnRuQ2VudGVyID0ge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcblxuICAgIH1cblxuXG4gICAgY29uc3QgeyBjb250ZW50OiB7IHJlY2VpdmVyTmFtZSwgdHlwZSwgc2VuZGVyTmFtZSwgbWVzc2FnZSwgdGhyZWFkSWQsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgY2hlY2tJbiwgY2hlY2tPdXQsIHBlcnNvbkNhcGFjaXR5IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lc3NhZ2VVUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ndWVzdCc7XG4gICAgaWYgKHR5cGUgPT09IFwiaG9zdFwiKSB7XG4gICAgICBtZXNzYWdlVVJMID0gdXJsICsgJy9tZXNzYWdlLycgKyB0aHJlYWRJZCArICcvaG9zdCc7XG4gICAgfVxuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICBsZXQgY2hlY2tPdXREYXRlID0gY2hlY2tPdXQgIT0gbnVsbCA/IG1vbWVudChjaGVja091dCkuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEhpIHtyZWNlaXZlck5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBZb3UgaGF2ZSBhIGdvdCBhIG5ldyBpbnF1aXJ5IGZyb20ge3NlbmRlck5hbWV9LlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBDaGVjayBJbjoge2NoZWNrSW5EYXRlfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgQ2hlY2sgT3V0OiB7Y2hlY2tPdXREYXRlfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgR3Vlc3RzOiB7cGVyc29uQ2FwYWNpdHl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSAmJiAobWVzc2FnZS50cmltKCkpLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTxiciAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtidG5DZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttZXNzYWdlVVJMfSBzdHlsZT17YnV0dG9uU3R5bGV9PlJlc3BvbmQgdG8ge3NlbmRlck5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICA8L1RSPlxuICAgICAgICAgICAgPC9UQm9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3SW5xdWlyeTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVEQsIFRSLCBJbWcgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICB3aWR0aDogJzEwMCUnXG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZVxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNvbG9yPXtwcm9wcy5jb2xvcn0+XG4gICAgICA8VEJvZHk+XG4gICAgICAgIDxUUj5cbiAgICAgICAgICA8VEQ+XG4gICAgICAgICAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDxUQm9keT5cbiAgICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgICA8VERcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHByb3BzLmNvbG9yLCBmb250RmFtaWx5OiAnQXJpYWwnLCBmb250U2l6ZTogJzI4cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17dXJsICsgXCIvaW1hZ2VzL2xvZ28vXCIgKyBwcm9wcy5sb2dvfSB3aWR0aD17MTUwfSBhbHQ9e3NpdGVuYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgICA8L1RSPlxuICAgICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L1REPlxuICAgICAgICA8L1RSPlxuICAgICAgPC9UQm9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyoqXG4gKiBFbXB0eVNwYWNlOlxuICogVGFibGUtYmFzZWQgd2F5IHRvIGFkZCB2ZXJ0aWNhbCBzcGFjZS4gVXNlcyBsaW5lLWhlaWdodC5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuXG5cbmNvbnN0IEVtcHR5U3BhY2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbGluZUhlaWdodDogYCR7cHJvcHMuaGVpZ2h0fXB4YCxcbiAgICBmb250U2l6ZTogJzFweCcsXG4gICAgbXNvTGluZUhlaWdodFJ1bGU6ICdleGFjdGx5J1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgPFRCb2R5PlxuICAgICAgICA8VFI+XG4gICAgICAgICAgPFREXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PXtgJHtwcm9wcy5oZWlnaHR9cHhgfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnJm5ic3A7JyB9fSAvPlxuICAgICAgICA8L1RSPlxuICAgICAgPC9UQm9keT5cbiAgICA8L1RhYmxlPlxuICApO1xufTtcblxuRW1wdHlTcGFjZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogJzE2J1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBFbXB0eVNwYWNlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgY2hlY2tJbkRhdGEgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3RpbWVIZWxwZXInO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJvb2tpbmdDb25maXJtYXRpb25Ib3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgY29uZmlybWF0aW9uQ29kZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdExhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdExvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdFByb2ZpbGVQaWM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0Sm9pbmVkRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tPdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgYWxsb3dlZENoZWNrSW5UaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBhbGxvd2VkQ2hlY2tPdXRUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXG4gICAgfVxuXG4gICAgY29uc3QgYm9va2luZ1RpdGxlID0ge1xuICAgICAgcGFkZGluZ0JvdHRvbTogJzI1cHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICc0MHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuXG4gICAgfVxuXG4gICAgY29uc3QgcHJvZmlsZVBpYyA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzk5OXB4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgbGluZUhlaWdodDogJzE1MCUnLFxuICAgICAgYm9yZGVyU3BhY2luZzogJzAnLFxuICAgICAgd2lkdGg6ICcxMjVweCdcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IHtcbiAgICAgIGNvbG9yOiAnIzU2NWE1YycsXG4gICAgICBmb250U2l6ZTogJzI2cHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzVweCcsXG4gICAgfVxuXG4gICAgY29uc3Qgc3ViVGl0bGUgPSB7XG4gICAgICBjb2xvcjogJyM1NjVhNWMnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1cHgnLFxuICAgIH1cblxuICAgIGNvbnN0IGxpbmtUZXh0ID0ge1xuICAgICAgY29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfVxuXG4gICAgY29uc3Qgc3BhY2UgPSB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXG4gICAgfVxuICAgIGNvbnN0IHsgY29udGVudDogeyByZXNlcnZhdGlvbklkLCB0aHJlYWRJZCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGVudDogeyBndWVzdE5hbWUsIGd1ZXN0TGFzdE5hbWUsIGd1ZXN0TG9jYXRpb24sIGd1ZXN0UHJvZmlsZVBpYywgZ3Vlc3RKb2luZWREYXRlIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb250ZW50OiB7IGNoZWNrSW4sIGNoZWNrT3V0LCBndWVzdHMsIGFsbG93ZWRDaGVja0luVGltZSwgYWxsb3dlZENoZWNrT3V0VGltZSwgY29uZmlybWF0aW9uQ29kZSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICBsZXQgY2hlY2tPdXREYXRlID0gY2hlY2tPdXQgIT0gbnVsbCA/IG1vbWVudChjaGVja091dCkuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG4gICAgbGV0IGNoZWNrSW5EYXRlU2hvcnQgPSBjaGVja0luICE9IG51bGwgPyBtb21lbnQoY2hlY2tJbikuZm9ybWF0KCdEbyBNTU1NJykgOiAnJztcbiAgICBsZXQgZ3Vlc3RKb2luZWRZZWFyID0gZ3Vlc3RKb2luZWREYXRlICE9IG51bGwgPyBtb21lbnQoZ3Vlc3RKb2luZWREYXRlKS5mb3JtYXQoJ1lZWVknKSA6ICcnO1xuICAgIGxldCBpdGluZXJhcnlVUkwgPSB1cmwgKyAnL3VzZXJzL3RyaXBzL2l0aW5lcmFyeS8nICsgcmVzZXJ2YXRpb25JZDtcbiAgICBsZXQgbWVzc2FnZVVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2hvc3QnO1xuICAgIGxldCBpbWFnZVVSTDtcbiAgICBpZiAoZ3Vlc3RQcm9maWxlUGljKSB7XG4gICAgICBpbWFnZVVSTCA9IHVybCArICcvaW1hZ2VzL2F2YXRhci9tZWRpdW1fJyArIGd1ZXN0UHJvZmlsZVBpYztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17Ym9va2luZ1RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgTmV3IGJvb2tpbmcgY29uZmlybWVkISA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2d1ZXN0TmFtZX0gYXJyaXZlczwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjaGVja0luRGF0ZVNob3J0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgU2VuZCBhIG1lc3NhZ2UgdG8gY29uZmlybSBjaGVjay1pbiBkZXRhaWxzIG9yIHdlbGNvbWUge2d1ZXN0TmFtZX0uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBndWVzdFByb2ZpbGVQaWMgJiYgPGltZyBzdHlsZT17cHJvZmlsZVBpY30gc3JjPXtpbWFnZVVSTH0gaGVpZ2h0PXsxMjV9IC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt1c2VyTmFtZX0+e2d1ZXN0TmFtZX0ge2d1ZXN0TGFzdE5hbWV9PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntndWVzdExvY2F0aW9ufTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs1fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2l0ZW5hbWV9IG1lbWJlciBzaW5jZSB7Z3Vlc3RKb2luZWRZZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXszMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lc3NhZ2VVUkx9IHN0eWxlPXtidXR0b25TdHlsZX0+Q29udGFjdCBHdWVzdDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICA8L1RSPlxuICAgICAgICAgICAgPC9UQm9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxUQm9keT5cbiAgICAgICAgICAgICAgPFRSIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxURCBzdHlsZT17c3BhY2V9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N1YlRpdGxlfT5DaGVjayBJbjwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hlY2tJbkRhdGV9PC9zcGFuPjxiciAvPlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja0luRGF0YShhbGxvd2VkQ2hlY2tJblRpbWUpXG4gICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXtzcGFjZX0+PEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz48L1REPlxuICAgICAgICAgICAgICAgIDxURCBzdHlsZT17c3BhY2V9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N1YlRpdGxlfT5DaGVjayBPdXQ8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NoZWNrT3V0RGF0ZX08L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezF9IC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrSW5EYXRhKGFsbG93ZWRDaGVja091dFRpbWUpXG4gICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICAgIDxUUiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8VEQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3ViVGl0bGV9Pkd1ZXN0czwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2d1ZXN0c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICAgIDxURD48RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPjwvVEQ+XG4gICAgICAgICAgICAgICAgPFREPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N1YlRpdGxlfT5Db25maXJtYXRpb24gQ29kZTwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbmZpcm1hdGlvbkNvZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cblxuICAgICAgICAgICAgICA8VFIgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPFREPjxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+PC9URD5cbiAgICAgICAgICAgICAgICA8VEQ+PEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz48L1REPlxuICAgICAgICAgICAgICAgIDxURD5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0aW5lcmFyeVVSTH0gc3R5bGU9e2xpbmtUZXh0fT4gVmlldyBJdGluZXJhcnk8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICA8L1RSPlxuXG4gICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uSG9zdDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VGFibGUsIFRCb2R5LCBUUiwgVER9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgc2l0ZW5hbWV9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJvb2tpbmdFeHBpcmVkR3Vlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdGxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0Z3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0fSkuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgXHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdCAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG5cdCAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuXHQgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuXHQgICAgICBmb250U2l6ZTogJzE2cHgnLFxuXHQgICAgICBwYWRkaW5nOiAnMzVweCcsXG5cdCAgICB9O1xuXG5cblx0ICAgIGNvbnN0IHsgY29udGVudDoge2d1ZXN0TmFtZSwgbGlzdFRpdGxlLCBjb25maXJtYXRpb25Db2RlLCBjaGVja0luLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cdCAgICBsZXQgY2hlY2tJbkRhdGUgPSBjaGVja0luICE9IG51bGwgPyBtb21lbnQoY2hlY2tJbikuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG4gICAgICAgIHJldHVybiAoXG5cdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxUQm9keT5cblx0XHRcdFx0XHRcdFx0XHRcdDxUUj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEhpIHtndWVzdE5hbWV9LFxuXHRcdFx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgeW91ciByZXF1ZXN0IGF0IHtsaXN0VGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7JyAnfXtjb25maXJtYXRpb25Db2RlfSBzdGFydGluZyBvbiB7Y2hlY2tJbkRhdGV9IGhhcyBleHBpcmVkLiBZb3Ugd2lsbCBiZSBmdWxseSByZWZ1bmRlZCBhbmQgbm90aWZpZWQuXG5cdFx0XHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgVGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdFx0XHQgICAgICAgIFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9URD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvVFI+XG5cdFx0XHRcdFx0XHRcdFx0PC9UQm9keT5cblx0XHRcdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHQ8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdFeHBpcmVkR3Vlc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdHVzZXJNYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0fSkuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBidXR0b25TdHlsZSA9IHtcblx0XHRcdG1hcmdpbjogMCxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRwYWRkaW5nOiAnMTBweCAxNnB4Jyxcblx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG5cdFx0XHRib3JkZXJSYWRpdXM6ICcycHgnLFxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkJyxcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxOHB4Jyxcblx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHRcdFx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0Y29sb3I6ICcjZmZmZmZmJyxcblx0XHRcdGJvcmRlclRvcFdpZHRoOiAnMXB4Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgbGlua1RleHQgPSB7XG5cdFx0XHRjb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHR9XG5cblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4J1xuXHRcdH07XG5cdFx0Y29uc3QgeyBjb250ZW50OiB7IHVzZXJOYW1lLCB1c2VyTWFpbCwgYWRtaW5NYWlsLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IG1haWxUbyA9ICdtYWlsdG86JyArIGFkbWluTWFpbDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdERlYXIge3VzZXJOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0V2UgaGF2ZSBiZWVuIGFjdGl2YXRlZCB5b3VyIGFjY291bnQgYW5kIHBsZWFzZSBsb2dpbiB3aXRoIHlvdXIgYWNjb3VudC4gV2UgZGlkIGRpc2FibGUgeW91ciBhY2NvdW50IGZvciB2aW9sYXRpbmcgb3VyIHRlcm1zLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRQbGVhc2UgZ2V0IGluIHRvdWNoIHdpdGggPGEgaHJlZj17bWFpbFRvfT51czwvYT4sIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Cb2R5PlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFuU3RhdHVzU2VydmljZVN0YXR1c1VuQmFubmVkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQWRtaW5MaXN0RGVjbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0dXNlck1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuXHRcdFx0bWFyZ2luOiAwLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuXHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdGJvcmRlclJhZGl1czogJzJweCcsXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQnLFxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRcdHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuXHRcdFx0Zm9udFdlaWdodDogJ25vcm1hbCcsXG5cdFx0XHRmb250U2l6ZTogJzE4cHgnLFxuXHRcdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG5cdFx0XHRib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG5cdFx0XHRjb2xvcjogJyNmZmZmZmYnLFxuXHRcdFx0Ym9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuXHRcdH07XG5cblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4J1xuXHRcdH07XG5cdFx0Y29uc3QgeyBjb250ZW50OiB7IGhvc3ROYW1lLCBsaXN0SWQsIGxpc3RUaXRsZSwgbG9nbywgcmVhc29uIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0bGV0IFVSTCA9IHVybCArIGAvYmVjb21lLWEtaG9zdC8ke2xpc3RJZH0vaG9tZWA7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0PEJvZHkgdGV4dFN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRIaSB7aG9zdE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRBZG1pbiBoYXMgZGVjbGluZWQgeW91ciBsaXN0aW5nIHJlcXVlc3QgZm9yIHRoZSB7bGlzdFRpdGxlfSBkdWUgdG8gdGhlIHJlYXNvbiBvZiAge3JlYXNvbn0uIEtpbmRseSB1cGRhdGUgdGhlIGxpc3RpbmcgaW5mb3JtYXRpb24gYW5kIHN1Ym1pdCBmb3IgdGhlIGxpc3QgYXBwcm92YWwuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxhIHN0eWxlPXtidXR0b25TdHlsZX0gaHJlZj17VVJMfT5VcGRhdGUgTm93PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFRoYW5rcywgPGJyIC8+XG5cdFx0XHRcdFx0XHRUaGUge3NpdGVuYW1lfSBUZWFtXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQm9keT5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluTGlzdERlY2xpbmU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBOZXdNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByZWNlaXZlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzZW5kZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGJ0bkNlbnRlciA9IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG5cbiAgICB9XG5cblxuICAgIGNvbnN0IHsgY29udGVudDogeyByZWNlaXZlck5hbWUsIHR5cGUsIHNlbmRlck5hbWUsIG1lc3NhZ2UsIHRocmVhZElkLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1lc3NhZ2VVUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ndWVzdCc7XG4gICAgaWYgKHR5cGUgPT09IFwiaG9zdFwiKSB7XG4gICAgICBtZXNzYWdlVVJMID0gdXJsICsgJy9tZXNzYWdlLycgKyB0aHJlYWRJZCArICcvaG9zdCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cbiAgICAgICAgICAgIDxUQm9keT5cbiAgICAgICAgICAgICAgPFRSPlxuICAgICAgICAgICAgICAgIDxURCBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBIaSB7cmVjZWl2ZXJOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgYSBnb3QgYSBuZXcgbWVzc2FnZSBmcm9tIHtzZW5kZXJOYW1lfS5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgJiYgKG1lc3NhZ2UudHJpbSgpKS5zcGxpdChcIlxcblwiKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08YnIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YnRuQ2VudGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWVzc2FnZVVSTH0gc3R5bGU9e2J1dHRvblN0eWxlfT5SZXNwb25kIHRvIHtzZW5kZXJOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lc3NhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCBDdXJyZW5jeVZpZXcgZnJvbSAnLi4vbW9kdWxlcy9DdXJyZW5jeVZpZXcnO1xuXG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQm9va2luZ1JlcXVlc3RIb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBjaGVja091dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGlzdFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBiYXNlUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkXG5cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGJ0bkNlbnRlciA9IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG5cbiAgICB9XG5cblxuICAgIGNvbnN0IHsgY29udGVudDogeyByZXNlcnZhdGlvbklkLCBjb25maXJtYXRpb25Db2RlLCBob3N0TmFtZSwgZ3Vlc3ROYW1lLCBjaGVja0luLCBjaGVja091dCwgdGhyZWFkSWQsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgbGlzdFRpdGxlLCBiYXNlUHJpY2UsIHRvdGFsLCBob3N0U2VydmljZUZlZSwgY3VycmVuY3kgfSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICBsZXQgY2hlY2tPdXREYXRlID0gY2hlY2tPdXQgIT0gbnVsbCA/IG1vbWVudChjaGVja091dCkuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG4gICAgLy8gbGV0IGFjdGlvblVSTCA9IHVybCArICcvcmVzZXJ2YXRpb24vY3VycmVudCc7IFxuICAgIGxldCBhY3Rpb25VUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ob3N0JztcbiAgICBsZXQgc3VidG90YWwgPSB0b3RhbCAtIGhvc3RTZXJ2aWNlRmVlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG4gICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgSGkge2hvc3ROYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgR3JlYXQgTmV3cyEgWW91IGhhdmUgYSBuZXcgcmVzZXJ2YXRpb24oe2NvbmZpcm1hdGlvbkNvZGV9KSBmcm9tIHtndWVzdE5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MTB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Z3Vlc3ROYW1lfSB3b3VsZCBzdGF5IGluIHRoZSB7bGlzdFRpdGxlfSBmcm9tIHtjaGVja0luRGF0ZX0gdG8ge2NoZWNrT3V0RGF0ZX0uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEJhc2VkIG9uIHByaWNlIG9mIDxDdXJyZW5jeVZpZXcgYW1vdW50PXtiYXNlUHJpY2V9IGN1cnJlbmN5PXtjdXJyZW5jeX0gLz5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31wZXIgbmlnaHQgd2l0aCB0aGUgYXNzb2NpYXRlZCBjb3N0LCB5b3VyIGVzdGltYXRlZCBwYXltZW50IGZvciB0aGlzIGJvb2tpbmcgaXMgPEN1cnJlbmN5VmlldyBhbW91bnQ9e3N1YnRvdGFsfSBjdXJyZW5jeT17Y3VycmVuY3l9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtidG5DZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXthY3Rpb25VUkx9IHN0eWxlPXtidXR0b25TdHlsZX0+QWNjZXB0IG9yIERlY2xpbmU8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKEJvb2tpbmdSZXF1ZXN0SG9zdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBGZWVkYmFja01haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICczNXB4J1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRCb2xkID0ge1xuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgeyBjb250ZW50OiB7IG1lc3NhZ2UsIHR5cGUsIG5hbWUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBIaSBBZG1pbixcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfSBoYXMgc2VudCB5b3UgYSB7dHlwZX0gdGhhdCB7bWVzc2FnZX0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MzB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja01haWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCb29raW5nUHJlQXBwcm92YWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGd1ZXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgaG9zdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHRocmVhZElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBsaXN0VGl0bGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBsaW5rVGV4dCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMzVweCdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBjb250ZW50OiB7IGd1ZXN0TmFtZSwgaG9zdE5hbWUsIHRocmVhZElkLCBsaXN0VGl0bGUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNvbnRhY3RVUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ndWVzdCc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBIaSB7Z3Vlc3ROYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aG9zdE5hbWV9IGhhcyBwcmUtYXBwcm92ZWQgeW91ciByZXF1ZXN0IGZvciB7bGlzdFRpdGxlfS5cbiAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZ28gYWhlYWQgYW5kIDxhIHN0eWxlPXtsaW5rVGV4dH0gaHJlZj17Y29udGFjdFVSTH0+Ym9vazwvYT4gdGhlIHByZS1hcHByb3ZlZCBkYXRlcyBub3cuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdQcmVBcHByb3ZhbDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgQ3VycmVuY3lWaWV3IGZyb20gJy4uL21vZHVsZXMvQ3VycmVuY3lWaWV3Jztcbi8vSGVscGVyXG5pbXBvcnQgeyBnZXREYXRlVXNpbmdUaW1lWm9uZSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZGF0ZVJhbmdlJztcbmNsYXNzIENhbmNlbGxlZEJ5R3Vlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0Z3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0XHRsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdHBheW91dFRvSG9zdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdFx0Y3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgdGV4dFN0eWxlID0ge1xuXHRcdFx0Y29sb3I6ICcjNDg0ODQ4Jyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXG5cdFx0XHRwYWRkaW5nOiAnMzVweCcsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHsgY29udGVudDogeyBndWVzdE5hbWUsIGhvc3ROYW1lLCBjb25maXJtYXRpb25Db2RlLCBjaGVja0luLCBsaXN0VGl0bGUsIHBheW91dFRvSG9zdCwgY3VycmVuY3ksIGxvZ28sIGNvdW50cnkgfSB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgY2hlY2tJbkRhdGUgPSBjaGVja0luICE9IG51bGwgPyBtb21lbnQoY2hlY2tJbikuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG5cdFx0bGV0IG1vbWVudFN0YXJ0RGF0ZSA9IG1vbWVudChjaGVja0luKS5zdGFydE9mKCdkYXknKTtcblx0XHRsZXQgdG9kYXkgPSBnZXREYXRlVXNpbmdUaW1lWm9uZShjb3VudHJ5LCBmYWxzZSk7XG5cdFx0bGV0IGludGVydmFsID0gbW9tZW50U3RhcnREYXRlLmRpZmYodG9kYXksICdkYXlzJyk7XG5cdFx0bGV0IGlzUGFzdERheSA9IGZhbHNlO1xuXHRcdGlmIChpbnRlcnZhbCA8IDApIHtcblx0XHRcdGlzUGFzdERheSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cblx0XHRcdFx0XHRcdDxUQm9keT5cblx0XHRcdFx0XHRcdFx0PFRSPlxuXHRcdFx0XHRcdFx0XHRcdDxURCBzdHlsZT17dGV4dFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRIaSB7aG9zdE5hbWV9LFxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgeW91ciBndWVzdCB7Z3Vlc3ROYW1lfSBoYXMgY2FuY2VsbGVkIHJlc2VydmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICB7JyAnfXtjb25maXJtYXRpb25Db2RlfSBhdCB7bGlzdFRpdGxlfSB7aXNQYXN0RGF5ID8gJ3N0YXJ0ZWQnIDogJ3N0YXJ0aW5nJ30gb24ge2NoZWNrSW5EYXRlfS5cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXlvdXRUb0hvc3QgPiAwICYmIDxzcGFuPiBBcyBwZXIgdGhlIGNhbmNlbGxhdGlvbiBwb2xpY3ksIHlvdXIgcGF5b3V0IHdpbGwgYmVcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFx0XHR1cGRhdGVkIHRvIDxDdXJyZW5jeVZpZXcgYW1vdW50PXtwYXlvdXRUb0hvc3R9IGN1cnJlbmN5PXtjdXJyZW5jeX0gLz4uXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF5b3V0VG9Ib3N0ID09PSAwICYmIDxzcGFuPiBBcyBwZXIgdGhlIGNhbmNlbGxhdGlvbiBwb2xpY3ksIHlvdSB3aWxsIG5vdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlY2VpdmUgYW55IHBheW91dHMgZm9yIHRoaXMgcmVzZXJ2YXRpb24uXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezEwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Zb3VyIGNhbGVuZGFyIGhhcyBhbHNvIGJlZW4gdXBkYXRlZCB0byBzaG93IHRoYXQgdGhlIHByZXZpb3VzbHkgYm9va2VkIGRhdGVzIGFyZSBub3cgYXZhaWxhYmxlLjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoYW5rcywgPGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L1REPlxuXHRcdFx0XHRcdFx0XHQ8L1RSPlxuXHRcdFx0XHRcdFx0PC9UQm9keT5cblx0XHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGxlZEJ5R3Vlc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIENvbnRhY3RFbWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgQ29udGFjdE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgY29udGVudDogeyBDb250YWN0TWVzc2FnZSwgZW1haWwsIG5hbWUsIHBob25lTnVtYmVyLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgICAgICAgICA8Qm9keSB0ZXh0U3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBIaSBBZG1pbixcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgZ290IGEgbWVzc2FnZSBmcm9tIHRoZSBwbGF0Zm9ybSdzIGN1c3RvbWVyIHN1cHBvcnQgc2VjdGlvbiwgaGVyZSBpcyB0aGUgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZToge25hbWV9PGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDoge2VtYWlsfTxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBOdW1iZXI6IHtwaG9uZU51bWJlcn08YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2U6IFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RNZXNzYWdlICYmIChDb250YWN0TWVzc2FnZS50cmltKCkpLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+e2l0ZW19PGJyIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXszMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUge3NpdGVuYW1lfSBUZWFtXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEVtYWlsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL21vZHVsZXMvQm9keSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQ29tcGxldGVkUmVzZXJ2YXRpb25Ib3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0TGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0UHJvZmlsZVBpYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfTtcblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAnMXB4JyxcblxuICAgIH1cblxuICAgIGNvbnN0IGJvb2tpbmdUaXRsZSA9IHtcbiAgICAgIHBhZGRpbmdCb3R0b206ICcyMHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcblxuICAgIH1cblxuICAgIGNvbnN0IHByb2ZpbGVQaWMgPSB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc5OTlweCcsXG4gICAgICBtYXJnaW46ICcwJyxcbiAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxNTAlJyxcbiAgICAgIGJvcmRlclNwYWNpbmc6ICcwJyxcbiAgICAgIHdpZHRoOiAnMTI1cHgnXG4gICAgfVxuXG4gICAgY29uc3QgdXNlck5hbWUgPSB7XG4gICAgICBjb2xvcjogJyM1NjVhNWMnLFxuICAgICAgZm9udFNpemU6ICcyNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICc1cHgnLFxuICAgIH1cblxuICAgIGNvbnN0IHN1YlRpdGxlID0ge1xuICAgICAgY29sb3I6ICcjNTY1YTVjJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNXB4JyxcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rVGV4dCA9IHtcbiAgICAgIGNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH1cblxuICAgIGNvbnN0IHNwYWNlID0ge1xuICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxuICAgIH1cbiAgICBjb25zdCB7IGNvbnRlbnQ6IHsgcmVzZXJ2YXRpb25JZCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGVudDogeyBndWVzdE5hbWUsIGd1ZXN0TGFzdE5hbWUsIGd1ZXN0UHJvZmlsZVBpYyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtZXNzYWdlVVJMID0gdXJsICsgJy9yZXZpZXcvd3JpdGUvJyArIHJlc2VydmF0aW9uSWQ7XG4gICAgbGV0IGltYWdlVVJMO1xuICAgIGlmIChndWVzdFByb2ZpbGVQaWMpIHtcbiAgICAgIGltYWdlVVJMID0gdXJsICsgJy9pbWFnZXMvYXZhdGFyL21lZGl1bV8nICsgZ3Vlc3RQcm9maWxlUGljO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG4gICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgIDxUUj5cbiAgICAgICAgICAgICAgICA8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGd1ZXN0UHJvZmlsZVBpYyAmJiA8aW1nIHN0eWxlPXtwcm9maWxlUGljfSBzcmM9e2ltYWdlVVJMfSBoZWlnaHQ9ezEyNX0gLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXtib29raW5nVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICBUZWxsIHtndWVzdE5hbWV9IHtndWVzdExhc3ROYW1lfSB3aGF0IHlvdSBsb3ZlZCA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IGFuZCB3aGF0IHRoZXkgY2FuIGRvIGJldHRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2d1ZXN0TmFtZX0ganVzdCBjaGVja2VkIG91dCwgc28gbm93IGlzIHRoZSBwZXJmZWN0IHRpbWUgdG8gd3JpdGUgeW91ciByZXZpZXcuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFJldmlld3MgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIHRoZSB7c2l0ZW5hbWV9IGNvbW11bml0eS4gUGxlYXNlIHRha2UgYSBtb21lbnQgdG8gcHJvdmlkZSB5b3VyIGd1ZXN0IHdpdGggc29tZSBoZWxwZnVsIGZlZWRiYWNrIC1cbiAgICAgICAgICAgICAgICAgICAgaXQnbGwgb25seSB0YWtlIGZldyBtaW51dGVzLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NTB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttZXNzYWdlVVJMfSBzdHlsZT17YnV0dG9uU3R5bGV9PldyaXRlIGEgUmV2aWV3PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICAgICAgICAgIDwvVEQ+XG4gICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICA8L1RCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs1MH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0ZWRSZXNlcnZhdGlvbkhvc3Q7XG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEJvb2tpbmdSZXF1ZXN0R3Vlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNvbmZpcm1hdGlvbkNvZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGhvc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBndWVzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxpc3RUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkXG5cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6ICcjNDg0ODQ4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGJ0bkNlbnRlciA9IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG5cbiAgICB9XG5cblxuXG4gICAgY29uc3QgeyBjb250ZW50OiB7IGd1ZXN0TmFtZSwgbGlzdFRpdGxlLCBob3N0TmFtZSwgY2hlY2tJbiwgdGhyZWFkSWQsIGNvbmZpcm1hdGlvbkNvZGUsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY2hlY2tJbkRhdGUgPSBjaGVja0luICE9IG51bGwgPyBtb21lbnQoY2hlY2tJbikuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG4gICAgbGV0IG1lc3NhZ2VVUkwgPSB1cmwgKyAnL21lc3NhZ2UvJyArIHRocmVhZElkICsgJy9ndWVzdCc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgPFRCb2R5PlxuICAgICAgICAgICAgICA8VFI+XG4gICAgICAgICAgICAgICAgPFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEhpIHtndWVzdE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBZb3VyIGJvb2tpbmcgcmVxdWVzdCh7Y29uZmlybWF0aW9uQ29kZX0pIGF0IHtsaXN0VGl0bGV9IHN0YXJ0aW5nIG9uIHtjaGVja0luRGF0ZX0gc2VudCB0byB5b3VyIGhvc3Qge2hvc3ROYW1lfS4gWW91IHdpbGxcbiAgICAgICAgICAgICAgICAgICAgaGVhciBmcm9tIHRoZW0gd2l0aGluIDI0IGhvdXJzLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtidG5DZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttZXNzYWdlVVJMfSBzdHlsZT17YnV0dG9uU3R5bGV9Pk1lc3NhZ2Uge2hvc3ROYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFRoYW5rcywgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9URD5cbiAgICAgICAgICAgICAgPC9UUj5cbiAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdSZXF1ZXN0R3Vlc3Q7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuaW1wb3J0IEN1cnJlbmN5VmlldyBmcm9tICcuLi9tb2R1bGVzL0N1cnJlbmN5Vmlldyc7XG4vL0hlbHBlclxuaW1wb3J0IHsgZ2V0RGF0ZVVzaW5nVGltZVpvbmUgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2RhdGVSYW5nZSc7XG5jbGFzcyBDYW5jZWxsZWRCeUhvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0Z3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0XHRsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdHJlZnVuZFRvR3Vlc3Q6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0XHRcdGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcblx0XHR9KS5pc1JlcXVpcmVkXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjb250ZW50OiB7XG5cdFx0XHRyZWZ1bmRUb0d1ZXN0OiAwXG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgeyBjb250ZW50OiB7IGd1ZXN0TmFtZSwgaG9zdE5hbWUsIGNvbmZpcm1hdGlvbkNvZGUsIGNoZWNrSW4sIGxpc3RUaXRsZSwgcmVmdW5kVG9HdWVzdCwgY3VycmVuY3ksIGxvZ28sIGNvdW50cnkgfSB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgY2hlY2tJbkRhdGUgPSBjaGVja0luICE9IG51bGwgPyBtb21lbnQoY2hlY2tJbikuZm9ybWF0KCdkZGQsIERvIE1NTSwgWVlZWScpIDogJyc7XG5cdFx0bGV0IG1vbWVudFN0YXJ0RGF0ZSA9IG1vbWVudChjaGVja0luKS5zdGFydE9mKCdkYXknKTtcblx0XHRsZXQgdG9kYXkgPSAgZ2V0RGF0ZVVzaW5nVGltZVpvbmUoY291bnRyeSwgZmFsc2UpO1xuXHRcdGxldCBpbnRlcnZhbCA9IG1vbWVudFN0YXJ0RGF0ZS5kaWZmKHRvZGF5LCAnZGF5cycpO1xuXHRcdGxldCBpc1Bhc3REYXkgPSBmYWxzZTtcblx0XHRpZiAoaW50ZXJ2YWwgPCAwKSB7XG5cdFx0XHRpc1Bhc3REYXkgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuXHRcdFx0XHRcdFx0PFRCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8VFI+XG5cdFx0XHRcdFx0XHRcdFx0PFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEhpIHtndWVzdE5hbWV9LFxuXHRcdFx0ICAgICAgICBcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgeW91ciBob3N0IHtob3N0TmFtZX0gaGFzIGNhbmNlbGxlZCB5b3VyIHJlc2VydmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICB7JyAnfXtjb25maXJtYXRpb25Db2RlfSBhdCB7bGlzdFRpdGxlfSB7aXNQYXN0RGF5ID8gJ3N0YXJ0ZWQnIDogJ3N0YXJ0aW5nJ30gb24ge2NoZWNrSW5EYXRlfS5cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWZ1bmRUb0d1ZXN0ID4gMCAmJiA8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsnICd9QXMgcGVyIHRoZSBjYW5jZWxsYXRpb24gcG9saWN5IHlvdSB3aWxsIGJlIHJlZnVuZGVkIDxDdXJyZW5jeVZpZXcgYW1vdW50PXtyZWZ1bmRUb0d1ZXN0fSBjdXJyZW5jeT17Y3VycmVuY3l9IC8+IGFuZCBub3RpZmllZC5cblx0XHRcdFx0XHRcdFx0XHQgICAgICAgIFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoYW5rcywgPGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdCAgICAgICAgXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L1REPlxuXHRcdFx0XHRcdFx0XHQ8L1RSPlxuXHRcdFx0XHRcdFx0PC9UQm9keT5cblx0XHRcdFx0XHQ8L1RhYmxlPlxuXHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGxlZEJ5SG9zdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL21vZHVsZXMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uR3Vlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0Z3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRsaXN0VGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGxpc3RDaXR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHR0aHJlYWRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRcdH0pLmlzUmVxdWlyZWRcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgdGV4dFN0eWxlID0ge1xuXHRcdFx0Y29sb3I6ICcjNDg0ODQ4Jyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXG5cdFx0XHRwYWRkaW5nOiAnMzVweCcsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGxpbmtUZXh0ID0ge1xuXHRcdFx0Y29sb3I6ICcjRjdBMzFCJyxcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0fVxuXG5cblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgZ3Vlc3ROYW1lLCBob3N0TmFtZSwgbGlzdFRpdGxlLCBsaXN0Q2l0eSwgdGhyZWFkSWQsIGxvZ28gfSB9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgY29udGFjdFVSTCA9IHVybCArICcvbWVzc2FnZS8nICsgdGhyZWFkSWQgKyAnL2d1ZXN0JztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZGVyIGNvbG9yPVwiI0Y3QTMxQlwiIGJhY2tncm91bmRDb2xvcj1cIiNGN0Y3RjdcIiBsb2dvPXtsb2dvfSAvPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxUYWJsZSB3aWR0aD1cIjEwMCVcIiA+XG5cdFx0XHRcdFx0XHQ8VEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxUUj5cblx0XHRcdFx0XHRcdFx0XHQ8VEQgc3R5bGU9e3RleHRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SGkge2d1ZXN0TmFtZX0sXG5cdFx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQYWNrIHlvdXIgYmFncyAtIHlvdSBhcmUgZ29pbmcgdG8ge2xpc3RDaXR5fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2hvc3ROYW1lfSBoYXMgY29uZmlybWVkIHlvdXIgcmVxdWVzdCBhdCB7bGlzdFRpdGxlfS4gUGxlYXNlIHJldmlldyBkZXRhaWxzIG9mIHlvdXIgdHJpcCBhbmRcblx0XHRcdFx0XHQgICAgICAgICAgeycgJ308YSBzdHlsZT17bGlua1RleHR9IGhyZWY9e2NvbnRhY3RVUkx9PmNvbnRhY3QgaG9zdDwvYT57JyAnfSB0byBjb29yZGluYXRlIGNoZWNrLWluIHRpbWUgYW5kIGtleSBleGNoYW5nZS5cblx0XHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoYW5rcywgPGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvVEQ+XG5cdFx0XHRcdFx0XHRcdDwvVFI+XG5cdFx0XHRcdFx0XHQ8L1RCb2R5PlxuXHRcdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ0NvbmZpcm1hdGlvbkd1ZXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTGF5b3V0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbW9kdWxlcy9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vbW9kdWxlcy9Cb2R5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbW9kdWxlcy9Gb290ZXInO1xuaW1wb3J0IEVtcHR5U3BhY2UgZnJvbSAnLi4vbW9kdWxlcy9FbXB0eVNwYWNlJztcbmltcG9ydCB7IHVybCwgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBGb3Jnb3RQYXNzd29yZEVtYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJyNGN0EzMUInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3QTMxQicsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6ICcxcHgnLFxuICAgIH07XG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogJyM0ODQ4NDgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4J1xuICAgIH07XG4gICAgY29uc3QgeyBjb250ZW50OiB7IHRva2VuLCBlbWFpbCwgbmFtZSwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB2ZXJpZmljYXRpb25VUkwgPSB1cmwgKyBgL3Bhc3N3b3JkL3ZlcmlmaWNhdGlvbj90b2tlbj0ke3Rva2VufSZlbWFpbD0ke2VtYWlsfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cbiAgICAgICAgPEJvZHkgdGV4dFN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBIaSB7bmFtZX0sXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgWW91IGhhdmUgcmVjZWl2ZWQgYSByZXF1ZXN0IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSWYgeW91IGRpZG7igJl0IG1ha2UgdGhlIHJlcXVlc3QsIGp1c3QgaWdub3JlIHRoaXMgbWVzc2FnZS4gT3RoZXJ3aXNlLCB5b3UgY2FuIHJlc2V0IHlvdXIgcGFzc3dvcmQgdXNpbmcgdGhpcyBsaW5rOlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtidXR0b25TdHlsZX0gaHJlZj17dmVyaWZpY2F0aW9uVVJMfT5DbGljayBoZXJlIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQ8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXszMH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVGhhbmtzLCA8YnIgLz5cbiAgICAgICAgICAgIFRoZSB7c2l0ZW5hbWV9IFRlYW1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRFbWFpbDsiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3ViamVjdCh0eXBlKSB7XG5cdGxldCBzdWJqZWN0LCBwcmV2aWV3VGV4dDtcblxuXHRpZiAodHlwZSA9PT0gJ3dlbGNvbWVFbWFpbCcgfHwgdHlwZSA9PT0gJ2NvbmZpcm1FbWFpbCcpIHtcblx0XHRzdWJqZWN0ID0gJ1BsZWFzZSBjb25maXJtIHlvdXIgZS1tYWlsIGFkZHJlc3MnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0FjdGlvbiBSZXF1aXJlZCEgQ29uZmlybSB5b3VyIGVtYWlsJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdSZXF1ZXN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91IGhhdmUgYSBuZXcgcmVzZXJ2YXRpb24nO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0dyZWF0IE5ld3MhIFlvdSBoYXZlIGEgbmV3IHJlc2VydmF0aW9uJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdSZXF1ZXN0R3Vlc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIHJlc2VydmF0aW9uIHJlcXVlc3Qgc2VudCB0byB5b3VyIGhvc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0dyZWF0IE5ld3MhIFlvdXIgcmVzZXJ2YXRpb24gaXMgc2hhcmVkIHdpdGggaG9zdCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdib29raW5nQ29uZmlybWVkVG9Ib3N0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91IGhhdmUgY29uZmlybWVkIGEgcmVzZXJ2YXRpb24nO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0NvbmZpcm1lZCBSZXNlcnZhdGlvbiBEZXRhaWxzJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdDb25maXJtZWRUb0d1ZXN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91ciByZXNlcnZhdGlvbiBpcyBjb25maXJtZWQgYnkgeW91ciBob3N0Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdQYWNrIHlvdXIgYmFnLCB5b3UgYXJlIHJlYWR5IGZvciB5b3VyIHRyaXAhJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Jvb2tpbmdEZWNsaW5lZFRvR3Vlc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIHJlc2VydmF0aW9uIHJlcXVlc3QgaXMgZGVjbGluZWQgYnkgeW91ciBob3N0Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdXZSBhcmUgc29ycnksIHlvdXIgcmVxdWVzdCBpcyBkZWNsaW5lZCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdib29raW5nRXhwaXJlZEd1ZXN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91ciByZXNlcnZhdGlvbiByZXF1ZXN0IGlzIGV4cGlyZWQnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1dlIGFyZSBzb3JyeSwgeW91ciByZXF1ZXN0IGlzIGV4cGlyZWQnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnYm9va2luZ0V4cGlyZWRIb3N0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91ciByZXNlcnZhdGlvbiBpcyBleHBpcmVkJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIHJlc2VydmF0aW9uIGlzIGV4cGlyZWQnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnY2FuY2VsbGVkQnlIb3N0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91ciByZXNlcnZhdGlvbiBpcyBjYW5jZWxsZWQgYnkgaG9zdCc7XG5cdFx0cHJldmlld1RleHQgPSAnWW91ciByZXNlcnZhdGlvbiBpcyBjYW5jZWxsZWQnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnY2FuY2VsbGVkQnlHdWVzdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgcmVzZXJ2YXRpb24gaXMgY2FuY2VsbGVkIGJ5IGd1ZXN0Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIHJlc2VydmF0aW9uIGlzIGNhbmNlbGxlZCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdjb21wbGV0ZWRHdWVzdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1BsZWFzZSB3cml0ZSBhIHJldmlldyBmb3IgeW91ciBob3N0Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdBY3Rpb24gUmVxdWlyZWQhIFdyaXRlIGEgUmV2aWV3Jztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2NvbXBsZXRlZEhvc3QnKSB7XG5cdFx0c3ViamVjdCA9ICdQbGVhc2Ugd3JpdGUgYSByZXZpZXcgZm9yIHlvdXIgZ3Vlc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0FjdGlvbiBSZXF1aXJlZCEgV3JpdGUgYSBSZXZpZXcnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnZm9yZ290UGFzc3dvcmRMaW5rJykge1xuXHRcdHN1YmplY3QgPSAnUmVzZXQgeW91ciBQYXNzd29yZCc7XG5cdFx0cHJldmlld1RleHQgPSAnQWN0aW9uIFJlcXVpcmVkISBSZXNldCB5b3VyIFBhc3N3b3JkJztcblx0fVxuXG5cdGlmICh0eXBlID09PSAnbWVzc2FnZScpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdSBoYXZlIGdvdCBhIG5ldyBtZXNzYWdlJztcblx0XHRwcmV2aWV3VGV4dCA9ICdTb21lb25lIHNlbnQgeW91IGEgbmV3IG1lc3NhZ2UhJztcblx0fVxuXG5cdGlmICh0eXBlID09PSAnaW5xdWlyeScpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdSBoYXZlIGdvdCBhIG5ldyBpbnF1aXJ5Jztcblx0XHRwcmV2aWV3VGV4dCA9ICdTb21lb25lIHNlbnQgeW91IGFuIGlucXVpcnkgZnJvbSBjb250YWN0IGZvcm0hJztcblx0fVxuXG5cdGlmICh0eXBlID09PSAnZG9jdW1lbnRWZXJpZmljYXRpb24nKSB7XG5cdFx0c3ViamVjdCA9ICdEb2N1bWVudHMgdmVyaWZpY2F0aW9uIHN0YXR1cyc7XG5cdFx0cHJldmlld1RleHQgPSAnRG9jdW1lbnRzIHZlcmlmaWNhdGlvbiBzdGF0dXMnO1xuXHR9XG5cdGlmICh0eXBlID09PSAnY29udGFjdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdSBnb3QgYSBjdXN0b21lciBzdXBwb3J0IG5vdGlmaWNhdGlvbic7XG5cdFx0cHJldmlld1RleHQgPSAnWW91IGdvdCBhIGN1c3RvbWVyIHN1cHBvcnQgbm90aWZpY2F0aW9uJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ3JlcG9ydFVzZXInKSB7XG5cdFx0c3ViamVjdCA9ICdZb3UgZ290IGEgbm90aWZpY2F0aW9uIGZvciB1c2VyIHZpb2xhdGlvbic7XG5cdFx0cHJldmlld1RleHQgPSAnWW91IGdvdCBhIG5vdGlmaWNhdGlvbiBmb3IgdXNlciB2aW9sYXRpb24uIFJlcG9ydGluZyBieSBzb21lb25lLic7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdib29raW5nUHJlQXBwcm92YWwnKSB7XG5cdFx0c3ViamVjdCA9ICdIb3N0IHByZS1hcHByb3ZlZCB5b3VyIHJlcXVlc3QnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ0Jvb2tpbmcgcHJlLWFwcHJvdmVkJztcblx0fVxuXG5cdGlmICh0eXBlID09PSAnYmFuU3RhdHVzU2VydmljZVN0YXR1c0Jhbm5lZCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBkaXNhYmxlZCc7XG5cdFx0cHJldmlld1RleHQgPSAnWW91ciBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkISc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdiYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQnKSB7XG5cdFx0c3ViamVjdCA9ICdZb3VyIGFjY291bnQgaGFzIGJlZW4gZW5hYmxlZCc7XG5cdFx0cHJldmlld1RleHQgPSAnWW91ciBhY2NvdW50IGhhcyBiZWVuIGVuYWJsZWQhJztcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2NvbnRhY3RTdXBwb3J0Jykge1xuXHRcdHN1YmplY3QgPSAnQ3VzdG9tZXIgU3VwcG9ydCc7XG5cdFx0cHJldmlld1RleHQgPSAnQ3VzdG9tZXIgU3VwcG9ydCc7XG5cdH1cblx0aWYgKHR5cGUgPT09ICd1c2VyRmVlZGJhY2snKSB7XG5cdFx0c3ViamVjdCA9ICdDdXN0b21lciBGZWVkYmFjayc7XG5cdFx0cHJldmlld1RleHQgPSAnQ3VzdG9tZXIgRmVlZGJhY2snO1xuXHR9XG5cdGlmICh0eXBlID09PSAnbGlzdFB1Ymxpc2hSZXF1ZXN0Jykge1xuXHRcdHN1YmplY3QgPSAnWW91IGhhdmUgTmV3IExpc3Rpbmcgc3VibWlzc2lvbiBmb3IgQXBwcm92YWwnO1xuXHRcdHByZXZpZXdUZXh0ID0gJ1lvdSBoYXZlIE5ldyBMaXN0aW5nIHN1Ym1pc3Npb24gZm9yIEFwcHJvdmFsJztcblx0fVxuXHRpZiAodHlwZSA9PSAnYWRtaW5MaXN0QXBwcm92ZScpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgTGlzdGluZyBzdWJtaXNzaW9uIGlzIEFwcHJvdmVkJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIExpc3Rpbmcgc3VibWlzc2lvbiBpcyBBcHByb3ZlZCc7XG5cdH1cblx0aWYgKHR5cGUgPT0gJ2FkbWluTGlzdFJlamVjdCcpIHtcblx0XHRzdWJqZWN0ID0gJ1lvdXIgTGlzdGluZyBzdWJtaXNzaW9uIGlzIFJlamVjdGVkJztcblx0XHRwcmV2aWV3VGV4dCA9ICdZb3VyIExpc3Rpbmcgc3VibWlzc2lvbiBpcyBSZWplY3RlZCc7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN1YmplY3QsXG5cdFx0cHJldmlld1RleHRcblx0fTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgdXJsLCBzaXRlbmFtZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIEFkbWluTGlzdEFwcHJvdmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y29udGVudDogUHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdHVzZXJNYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0fSkuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBidXR0b25TdHlsZSA9IHtcblx0XHRcdG1hcmdpbjogMCxcblx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCcsXG5cdFx0XHRwYWRkaW5nOiAnMTBweCAxNnB4Jyxcblx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG5cdFx0XHRib3JkZXJSYWRpdXM6ICcycHgnLFxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkJyxcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0XHRcdGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxOHB4Jyxcblx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHRcdFx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxuXHRcdFx0Ym9yZGVyQ29sb3I6ICcjRjdBMzFCJyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0Y29sb3I6ICcjZmZmZmZmJyxcblx0XHRcdGJvcmRlclRvcFdpZHRoOiAnMXB4Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgdGV4dFN0eWxlID0ge1xuXHRcdFx0Y29sb3I6ICcjNDg0ODQ4Jyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuXHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsJyxcblx0XHRcdGZvbnRTaXplOiAnMTZweCcsXG5cdFx0XHRwYWRkaW5nOiAnMzVweCdcblx0XHR9O1xuXG5cdFx0Y29uc3QgbGlua1RleHQgPSB7XG5cdFx0XHRjb2xvcjogJyNGN0EzMUInLFxuXHRcdFx0Zm9udFNpemU6ICcxOHB4Jyxcblx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHR9XG5cblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgaG9zdE5hbWUsIGxpc3RJZCwgbGlzdFRpdGxlLCBsb2dvIH0gfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgVVJMID0gdXJsICsgYC9iZWNvbWUtYS1ob3N0LyR7bGlzdElkfS9ob21lYDtcblx0XHRjb25zdCBsaXN0VVJMID0gdXJsICsgYC9yb29tcy8ke2xpc3RJZH0vcHJldmlld2A7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0PEJvZHkgdGV4dFN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRIaSB7aG9zdE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRUaGUgQWRtaW4gaGFzIHZlcmlmaWVkIHlvdXIgbGlzdGluZyAgPGEgaHJlZj17bGlzdFVSTH0gc3R5bGU9e2xpbmtUZXh0fT4ge2xpc3RUaXRsZX0gPC9hPi4gUGxlYXNlIHB1Ymxpc2ggeW91ciBsaXN0aW5nIHRvIGdldCByZXNlcnZhdGlvbnMuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGEgc3R5bGU9e2J1dHRvblN0eWxlfSBocmVmPXtVUkx9PlB1Ymxpc2g8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXs0MH0gLz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0VGhhbmtzLCA8YnIgLz5cblx0XHRcdFx0XHRcdFRoZSB7c2l0ZW5hbWV9IFRlYW1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Cb2R5PlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHRcdDxFbXB0eVNwYWNlIGhlaWdodD17MjB9IC8+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5MaXN0QXBwcm92ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIFRCb2R5LCBUUiwgVEQsIEEgfSBmcm9tICdveS12ZXknO1xuaW1wb3J0IHsgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y3ZjdmNycsXG4gIH07XG5cbiAgY29uc3Qgc3BhY2VTdHlsZSA9IHtcbiAgICBwYWRkaW5nQm90dG9tOiAnMjVweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICc1cHgnLFxuICAgIGNvbG9yOiAnIzljYTI5OScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiIHN0eWxlPXtzdHlsZX0+XG4gICAgICA8VEJvZHk+XG4gICAgICAgIDxUUj5cbiAgICAgICAgICA8VEQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzcGFjZVN0eWxlfT5TZW50IHdpdGggJiMxMDA4NDsgZnJvbSB7c2l0ZW5hbWV9PC9kaXY+XG4gICAgICAgICAgPC9URD5cbiAgICAgICAgPC9UUj5cbiAgICAgIDwvVEJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRhYmxlIHdpZHRoPScxMDAlJ1xuICAgICAgc3R5bGU9e3sgV2Via2l0VGV4dFNpemVBZGp1c3Q6ICcxMDAlJywgbXNUZXh0U2l6ZUFkanVzdDogJzEwMCUnLCBtc29UYWJsZUxzcGFjZTogJzBwdCcsIG1zb1RhYmxlUnNwYWNlOiAnMHB0JywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIG1hcmdpbjogJzBweCBhdXRvJyB9fT5cbiAgICAgIDxUQm9keT5cbiAgICAgICAgPFRSPlxuICAgICAgICAgIDxURD5cbiAgICAgICAgICAgIHsvKiBDZW50ZXJlZCBjb2x1bW4gKi99XG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgc3R5bGU9e3sgV2Via2l0VGV4dFNpemVBZGp1c3Q6ICcxMDAlJywgbXNUZXh0U2l6ZUFkanVzdDogJzEwMCUnLCBtc29UYWJsZUxzcGFjZTogJzBwdCcsIG1zb1RhYmxlUnNwYWNlOiAnMHB0JywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIG1hcmdpbjogJzBweCBhdXRvJywgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNjUwcHgnIH19PlxuICAgICAgICAgICAgICA8VEJvZHk+XG4gICAgICAgICAgICAgICAgPFRSPlxuICAgICAgICAgICAgICAgICAgPFREPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICA8L1REPlxuICAgICAgICAgICAgICAgIDwvVFI+XG4gICAgICAgICAgICAgIDwvVEJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuXG4gICAgICAgICAgPC9URD5cbiAgICAgICAgPC9UUj5cbiAgICAgIDwvVEJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnOyBcbi8vaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jbGFzcyBDdXJyZW5jeVZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFtb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhbW91bnQsIGN1cnJlbmN5IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvL2NvbnN0IHsgZm9ybWF0TnVtYmVyIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7Lyoge2Zvcm1hdE51bWJlcihhbW91bnQudG9GaXhlZCgyKSwgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3kgfSl9ICovfVxuICAgICAgICAgICAgICAgIHthbW91bnQudG9Mb2NhbGVTdHJpbmcobG9jYWxlc1swXSwgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3kgfSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vL2V4cG9ydCBkZWZhdWx0IGluamVjdEludGwoQ3VycmVuY3lWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5VmlldztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgVEJvZHksIFRSLCBURCB9IGZyb20gJ295LXZleSc7XG5cbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4vRW1wdHlTcGFjZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRhYmxlIHdpZHRoPVwiMTAwJVwiID5cbiAgICAgIDxUQm9keT5cbiAgICAgICAgPFRSPlxuICAgICAgICAgIDxURFxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnRleHRTdHlsZX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9URD5cbiAgICAgICAgPC9UUj5cbiAgICAgIDwvVEJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9tb2R1bGVzL0JvZHknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL0Zvb3Rlcic7XG5pbXBvcnQgRW1wdHlTcGFjZSBmcm9tICcuLi9tb2R1bGVzL0VtcHR5U3BhY2UnO1xuaW1wb3J0IHsgc2l0ZW5hbWUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5jbGFzcyBCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzQmFubmVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICB1c2VyTWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB9KS5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0Y3QTMxQicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdBMzFCJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICBib3JkZXJUb3BXaWR0aDogJzFweCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbGlua1RleHQgPSB7XG4gICAgICAgICAgICBjb2xvcjogJyNGN0EzMUInLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzQ4NDg0OCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzM1cHgnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgY29udGVudDogeyB1c2VyTmFtZSwgdXNlck1haWwsIGFkbWluTWFpbCwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgbWFpbFRvID0gJ21haWx0bzonICsgYWRtaW5NYWlsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgY29sb3I9XCIjRjdBMzFCXCIgYmFja2dyb3VuZENvbG9yPVwiI0Y3RjdGN1wiIGxvZ289e2xvZ299IC8+XG4gICAgICAgICAgICAgICAgPEJvZHkgdGV4dFN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVhciB7dXNlck5hbWV9LFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhhdmUgYmVlbiBkaXNhYmxlZCB5b3VyIGFjY291bnQgZm9yIHZpb2xhdGluZyBvdXIgdGVybXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGdldCBpbiB0b3VjaCB3aXRoIG91ciA8YSBocmVmPXttYWlsVG99PnN1cHBvcnQgdGVhbTwvYT4sIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMuXG5cdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVNwYWNlIGhlaWdodD17NDB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGFua3MsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHtzaXRlbmFtZX0gVGVhbVxuXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzQmFubmVkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3kgZnJvbSAnb3ktdmV5JztcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uL2ZldGNoJztcbmltcG9ydCBFbWFpbFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUvRW1haWxUZW1wbGF0ZSc7XG5pbXBvcnQgeyBnZXRTdWJqZWN0IH0gZnJvbSAnLi90ZW1wbGF0ZS9zdWJqZWN0cyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWwodG8sIHR5cGUsIGNvbnRlbnQpIHtcbiAgICBcbiAgICBsZXQgaHRtbCwgc3ViamVjdCwgcHJldmlld1RleHQ7XG4gICAgbGV0IHN1YmplY3REYXRhID0gZ2V0U3ViamVjdCh0eXBlKSwgZW1haWxDb250ZW50ID0gY29udGVudDtcblxuICAgIGxldCBxdWVyeSA9IGBxdWVyeSBnZXRFbWFpbExvZ28ge1xuICAgICAgICBnZXRFbWFpbExvZ28geyBcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgICAgfWA7XG5cbiAgICBpZiAoY29udGVudCAmJiAhY29udGVudC5sb2dvKSB7XG4gICAgICAgIGNvbnN0IGxvZ29SZXNwID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBsb2dvUmVzcC5qc29uKCk7XG4gICAgICAgIGVtYWlsQ29udGVudC5sb2dvID0gZGF0YSAmJiBkYXRhLmdldEVtYWlsTG9nbyAmJiBkYXRhLmdldEVtYWlsTG9nby52YWx1ZTtcbiAgICB9XG5cbiAgICBodG1sID0gT3kucmVuZGVyVGVtcGxhdGUoXG4gICAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtcImVuXCJ9PlxuICAgICAgICAgICAgPEVtYWlsVGVtcGxhdGUgdHlwZT17dHlwZX0gY29udGVudD17ZW1haWxDb250ZW50fSAvPlxuICAgICAgICA8L0ludGxQcm92aWRlcj4sIHtcbiAgICAgICAgICAgIHRpdGxlOiBzdWJqZWN0RGF0YS5zdWJqZWN0LFxuICAgICAgICAgICAgcHJldmlld1RleHQ6IHN1YmplY3REYXRhLnByZXZpZXdUZXh0XG4gICAgICAgIH0pO1xuXG4gICAgbGV0IG1haWxPcHRpb25zID0ge1xuICAgICAgICB0bywgLy8gbGlzdCBvZiByZWNlaXZlcnNcbiAgICAgICAgc3ViamVjdDogc3ViamVjdERhdGEuc3ViamVjdCwgLy8gU3ViamVjdCBsaW5lXG4gICAgICAgIC8vdGV4dDogdGV4dE1lc3NhZ2UsIC8vIHBsYWluIHRleHQgYm9keVxuICAgICAgICBodG1sXG4gICAgfTtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9zZW5kRW1haWwnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtYWlsT3B0aW9ucyB9KSxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0pO1xuICAgIGNvbnN0IHsgc3RhdHVzLCByZXNwb25zZSB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgcmV0dXJuIHsgc3RhdHVzLCByZXNwb25zZSB9O1xufSBcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uZmlybUVtYWlsIGZyb20gJy4vQ29uZmlybUVtYWlsJztcbmltcG9ydCBCb29raW5nUmVxdWVzdEhvc3QgZnJvbSAnLi9Cb29raW5nUmVxdWVzdEhvc3QnO1xuaW1wb3J0IEJvb2tpbmdDb25maXJtYXRpb25Ib3N0IGZyb20gJy4vQm9va2luZ0NvbmZpcm1hdGlvbkhvc3QnO1xuaW1wb3J0IEJvb2tpbmdDb25maXJtYXRpb25HdWVzdCBmcm9tICcuL0Jvb2tpbmdDb25maXJtYXRpb25HdWVzdCc7XG5pbXBvcnQgQm9va2luZ0RlY2xpbmVkR3Vlc3QgZnJvbSAnLi9Cb29raW5nRGVjbGluZWRHdWVzdCc7XG5pbXBvcnQgQm9va2luZ1JlcXVlc3RHdWVzdCBmcm9tICcuL0Jvb2tpbmdSZXF1ZXN0R3Vlc3QnO1xuaW1wb3J0IEJvb2tpbmdFeHBpcmVkR3Vlc3QgZnJvbSAnLi9Cb29raW5nRXhwaXJlZEd1ZXN0JztcbmltcG9ydCBCb29raW5nRXhwaXJlZEhvc3QgZnJvbSAnLi9Cb29raW5nRXhwaXJlZEhvc3QnO1xuaW1wb3J0IENhbmNlbGxlZEJ5SG9zdCBmcm9tICcuL0NhbmNlbGxlZEJ5SG9zdCc7XG5pbXBvcnQgQ2FuY2VsbGVkQnlHdWVzdCBmcm9tICcuL0NhbmNlbGxlZEJ5R3Vlc3QnO1xuaW1wb3J0IENvbXBsZXRlZFJlc2VydmF0aW9uR3Vlc3QgZnJvbSAnLi9Db21wbGV0ZWRSZXNlcnZhdGlvbkd1ZXN0JztcbmltcG9ydCBDb21wbGV0ZWRSZXNlcnZhdGlvbkhvc3QgZnJvbSAnLi9Db21wbGV0ZWRSZXNlcnZhdGlvbkhvc3QnO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkRW1haWwgZnJvbSAnLi9Gb3Jnb3RQYXNzd29yZEVtYWlsJztcbmltcG9ydCBOZXdNZXNzYWdlIGZyb20gJy4vTmV3TWVzc2FnZSc7XG5pbXBvcnQgTmV3SW5xdWlyeSBmcm9tICcuL05ld0lucXVpcnknO1xuaW1wb3J0IENvbmZpcm1Eb2N1bWVudFZlcmlmaWNhdGlvbiBmcm9tICcuL0NvbmZpcm1Eb2N1bWVudFZlcmlmaWNhdGlvbic7XG5pbXBvcnQgQ29udGFjdEVtYWlsIGZyb20gJy4vQ29udGFjdEVtYWlsJztcbmltcG9ydCBSZXBvcnRVc2VyTWFpbCBmcm9tICcuL1JlcG9ydFVzZXJNYWlsJztcbmltcG9ydCBCb29raW5nUHJlQXBwcm92YWwgZnJvbSAnLi9Cb29raW5nUHJlQXBwcm92YWwnO1xuaW1wb3J0IEJhblN0YXR1c1NlcnZpY2VTdGF0dXNCYW5uZWQgZnJvbSAnLi9CYW5TdGF0dXNTZXJ2aWNlU3RhdHVzQmFubmVkJztcbmltcG9ydCBCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQgZnJvbSAnLi9CYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQnO1xuaW1wb3J0IENvbnRhY3RTdXBwb3J0IGZyb20gJy4vQ29udGFjdFN1cHBvcnQnO1xuaW1wb3J0IEZlZWRiYWNrTWFpbCBmcm9tICcuL0ZlZWRiYWNrTWFpbCc7XG5pbXBvcnQgTGlzdFB1Ymxpc2hSZXF1ZXN0IGZyb20gJy4vTGlzdFB1Ymxpc2hSZXF1ZXN0JztcbmltcG9ydCBBZG1pbkxpc3RBcHByb3ZlIGZyb20gJy4vQWRtaW5MaXN0QXBwcm92ZSc7XG5pbXBvcnQgQWRtaW5MaXN0RGVjbGluZSBmcm9tICcuL0FkbWluTGlzdERlY2xpbmUnO1xuXG5jbGFzcyBFbWFpbFRlbXBsYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICd3ZWxjb21lRW1haWwnICYmIDxDb25maXJtRW1haWwgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnY29uZmlybUVtYWlsJyAmJiA8Q29uZmlybUVtYWlsIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2Jvb2tpbmdSZXF1ZXN0JyAmJiA8Qm9va2luZ1JlcXVlc3RIb3N0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2Jvb2tpbmdSZXF1ZXN0R3Vlc3QnICYmIDxCb29raW5nUmVxdWVzdEd1ZXN0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2Jvb2tpbmdDb25maXJtZWRUb0hvc3QnICYmIDxCb29raW5nQ29uZmlybWF0aW9uSG9zdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdib29raW5nQ29uZmlybWVkVG9HdWVzdCcgJiYgPEJvb2tpbmdDb25maXJtYXRpb25HdWVzdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdib29raW5nRGVjbGluZWRUb0d1ZXN0JyAmJiA8Qm9va2luZ0RlY2xpbmVkR3Vlc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYm9va2luZ0V4cGlyZWRHdWVzdCcgJiYgPEJvb2tpbmdFeHBpcmVkR3Vlc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnYm9va2luZ0V4cGlyZWRIb3N0JyAmJiA8Qm9va2luZ0V4cGlyZWRIb3N0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2NhbmNlbGxlZEJ5SG9zdCcgJiYgPENhbmNlbGxlZEJ5SG9zdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdjYW5jZWxsZWRCeUd1ZXN0JyAmJiA8Q2FuY2VsbGVkQnlHdWVzdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdjb21wbGV0ZWRHdWVzdCcgJiYgPENvbXBsZXRlZFJlc2VydmF0aW9uR3Vlc3QgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnY29tcGxldGVkSG9zdCcgJiYgPENvbXBsZXRlZFJlc2VydmF0aW9uSG9zdCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdmb3Jnb3RQYXNzd29yZExpbmsnICYmIDxGb3Jnb3RQYXNzd29yZEVtYWlsIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ21lc3NhZ2UnICYmIDxOZXdNZXNzYWdlIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2lucXVpcnknICYmIDxOZXdJbnF1aXJ5IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2RvY3VtZW50VmVyaWZpY2F0aW9uJyAmJiA8Q29uZmlybURvY3VtZW50VmVyaWZpY2F0aW9uIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2NvbnRhY3QnICYmIDxDb250YWN0RW1haWwgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncmVwb3J0VXNlcicgJiYgPFJlcG9ydFVzZXJNYWlsIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2Jvb2tpbmdQcmVBcHByb3ZhbCcgJiYgPEJvb2tpbmdQcmVBcHByb3ZhbCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdiYW5TdGF0dXNTZXJ2aWNlU3RhdHVzQmFubmVkJyAmJiA8QmFuU3RhdHVzU2VydmljZVN0YXR1c0Jhbm5lZCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdiYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQnICYmIDxCYW5TdGF0dXNTZXJ2aWNlU3RhdHVzVW5CYW5uZWQgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnY29udGFjdFN1cHBvcnQnICYmIDxDb250YWN0U3VwcG9ydCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICd1c2VyRmVlZGJhY2snICYmIDxGZWVkYmFja01haWwgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnbGlzdFB1Ymxpc2hSZXF1ZXN0JyAmJiA8TGlzdFB1Ymxpc2hSZXF1ZXN0IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2FkbWluTGlzdEFwcHJvdmUnICYmIDxBZG1pbkxpc3RBcHByb3ZlIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2FkbWluTGlzdFJlamVjdCcgJiYgPEFkbWluTGlzdERlY2xpbmUgY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsVGVtcGxhdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRhYmxlLCBUQm9keSwgVFIsIFREIH0gZnJvbSAnb3ktdmV5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9MYXlvdXQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9tb2R1bGVzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL21vZHVsZXMvRm9vdGVyJztcbmltcG9ydCBFbXB0eVNwYWNlIGZyb20gJy4uL21vZHVsZXMvRW1wdHlTcGFjZSc7XG5pbXBvcnQgeyB1cmwsIHNpdGVuYW1lIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgQm9va2luZ0RlY2xpbmVkR3Vlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNvbnRlbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRob3N0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0Z3Vlc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjaGVja0luOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0XHRjb25maXJtYXRpb25Db2RlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0fSkuaXNSZXF1aXJlZFxuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRjb2xvcjogJyM0ODQ4NDgnLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXG5cdFx0XHRmb250RmFtaWx5OiAnQXJpYWwnLFxuXHRcdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRcdHBhZGRpbmc6ICczNXB4Jyxcblx0XHR9O1xuXG5cblx0XHRjb25zdCB7IGNvbnRlbnQ6IHsgZ3Vlc3ROYW1lLCBob3N0TmFtZSwgY29uZmlybWF0aW9uQ29kZSwgY2hlY2tJbiwgbG9nbyB9IH0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gIT0gbnVsbCA/IG1vbWVudChjaGVja0luKS5mb3JtYXQoJ2RkZCwgRG8gTU1NLCBZWVlZJykgOiAnJztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PEhlYWRlciBjb2xvcj1cIiNGN0EzMUJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRjdGN0Y3XCIgbG9nbz17bG9nb30gLz5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8VGFibGUgd2lkdGg9XCIxMDAlXCIgPlxuXHRcdFx0XHRcdFx0PFRCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8VFI+XG5cdFx0XHRcdFx0XHRcdFx0PFREIHN0eWxlPXt0ZXh0U3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEhpIHtndWVzdE5hbWV9LFxuXHRcdFx0XHRcdCAgICAgICAgXHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEVtcHR5U3BhY2UgaGVpZ2h0PXsyMH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFdlIHJlZ3JldCB0byBpbmZvcm0geW91IHRoYXQgeW91ciBob3N0IHtob3N0TmFtZX0gZGVjbGluZWQgeW91ciByZXF1ZXN0XG5cdFx0XHRcdFx0ICAgICAgICAgIHsnICd9e2NvbmZpcm1hdGlvbkNvZGV9IHN0YXJ0aW5nIG9uIHtjaGVja0luRGF0ZX0uIEFzIHBlciB0aGUgY2FuY2VsbGF0aW9uIHBvbGljeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5b3Ugd2lsbCBiZSByZWZ1bmRlZCBhbmQgbm90aWZpZWQuXG5cdFx0XHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICBUaGFua3MsIDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUaGUge3NpdGVuYW1lfSBUZWFtXG5cdFx0XHRcdFx0ICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9URD5cblx0XHRcdFx0XHRcdFx0PC9UUj5cblx0XHRcdFx0XHRcdDwvVEJvZHk+XG5cdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezQwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0XHQ8RW1wdHlTcGFjZSBoZWlnaHQ9ezIwfSAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nRGVjbGluZWRHdWVzdDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE5REE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBQ0E7QUErREE7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBcEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQXFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQTFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBMkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFsRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFtRUE7Ozs7Ozs7QUMvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF4SUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTtBQXlJQTs7Ozs7OztBQ3ZKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFqRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFrRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXBEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUNBO0FBcURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF2SEE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQUNBO0FBd0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFqTkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBREE7QUFDQTtBQWtOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdERBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQS9EQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBZ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFyR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQUNBO0FBc0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBekdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBREE7QUFDQTtBQTBHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBaEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBaUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF0RUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTtBQXVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE1RUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFDQTtBQTZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQTVFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUNBO0FBNEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQXhJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUNBO0FBeUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBekZBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQUNBO0FBMEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBM0VBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBQ0E7QUFGQTtBQWNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFnRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFuRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQUNBO0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7O0FBckVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBc0VBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF4RUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQXlFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTs7OztBQWZBO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF0RUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQXVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFUQTtBQUNBO0FBZEE7QUFhQTtBQWJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF5QkE7QUFDQTtBQUNBO0FBM0JBO0FBNkJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUFBQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQUNBO0FBNUNBO0FBMkNBO0FBM0NBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFvREE7QUFBQTtBQXBEQTtBQXFEQTtBQUFBO0FBQUE7QUFDQTtBQXREQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBOUZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBK0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUF2REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFDQTtBQXdEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9