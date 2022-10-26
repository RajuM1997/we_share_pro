(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation~trips~viewMessage"],{

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

/***/ "E5za":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nlne");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var getAllReservationQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query getAllReservation ($userType: String){\n    getAllReservation(userType: $userType){\n      reservationData {\n        id\n        reservationState\n      }\n    }\n  }\n"])));
function updateReservation(reservationId, actionType, userType, threadId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          mutation updateReservation(\n            $reservationId: Int!, \n            $actionType: String!,\n            $threadId: Int\n          ){\n              updateReservation(\n                reservationId: $reservationId,\n                actionType: $actionType,\n                threadId: $threadId\n              ) {\n                  status\n              }\n          }\n      "])));
              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  reservationId: reservationId,
                  actionType: actionType,
                  threadId: threadId
                },
                refetchQueries: [{
                  query: getAllReservationQuery,
                  variables: {
                    userType: userType
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (data && data.updateReservation && data.updateReservation.status === '200') {
                if (userType == 'host') {
                  _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/reservation/current');
                } else {
                  _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/trips/current');
                }

                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_SUCCESS"]
                });
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_ERROR"],
                payload: {
                  error: _context.t0
                }
              });
              return _context.abrupt("return", false);

            case 15:
              return _context.abrupt("return", true);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "ZCmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageAction", function() { return sendMessageAction; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WlAH");
/* harmony import */ var _Reservation_updateReservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E5za");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ThreadItemsQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nquery getThread($threadType: String, $threadId: Int){\n  getThread(threadType: $threadType, threadId: $threadId) {\n    id\n    listId\n    guest\n    host\n    listData {\n      title\n      city\n      state\n      country\n      listingData {\n        basePrice\n        cleaningPrice\n        currency\n        monthlyDiscount\n        weeklyDiscount\n      }\n    }\n    threadItemForType {\n      id\n      threadId\n      reservationId\n      content\n      sentBy\n      type\n      startDate\n      endDate\n      personCapacity\n      createdAt\n      cancelData {\n        id\n        reservationId\n        cancellationPolicy\n        guestServiceFee\n        hostServiceFee\n        refundToGuest\n        payoutToHost\n        total \n        currency\n      }\n      reservation {\n        id\n        listId\n        hostId\n        guestId\n        checkIn\n        checkOut\n        basePrice\n        cleaningPrice\n        total\n        currency\n        guests\n        confirmationCode\n        guestServiceFee\n        discount\n        discountType\n        createdAt\n        updatedAt\n        hostServiceFee\n        bookingSpecialPricing {\n          id\n          reservationId\n          blockedDates\n          isSpecialPrice\n        }\n      }\n    }\n    threadItems {\n      id\n      threadId\n      reservationId\n      content\n      sentBy\n      type\n      startDate\n      endDate\n      createdAt\n    }\n    threadItemsCount\n    guestProfile {\n      profileId\n      displayName\n      firstName\n      location\n      reviewsCount\n      userVerification {\n        id\n        isEmailConfirmed\n        isFacebookConnected\n        isGoogleConnected\n        isIdVerification\n      }\n    }\n    guestUserData {\n      email\n      userBanStatus\n    }\n    hostProfile {\n      profileId\n      displayName\n      firstName\n      picture\n      location\n      reviewsCount\n      userVerification {\n        id\n        isEmailConfirmed\n        isFacebookConnected\n        isGoogleConnected\n        isIdVerification\n      }\n    }\n    hostUserData {\n      email\n    }\n    status\n  }\n}\n"])));
function sendMessageAction(threadId, threadType, content, type, startDate, endDate, personCapacity, reservationId, receiverName, senderName, receiverType, receiverEmail) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          mutation sendMessage(\n          $threadId: Int!, \n          $content: String, \n          $type: String,\n          $startDate: String,\n          $endDate: String,\n          $personCapacity: Int,\n          $reservationId: Int\n          ) {\n            sendMessage(\n            threadId: $threadId, \n            content: $content, \n            type: $type,\n            startDate: $startDate,\n            endDate: $endDate,\n            personCapacity: $personCapacity,\n            reservationId: $reservationId\n            ){\n              id\n              sentBy\n              content\n              type\n              reservationId\n              startDate\n              endDate\n              personCapacity\n              createdAt\n              status\n            }\n          }\n      "]))); // Send Message

              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  threadId: threadId,
                  content: content,
                  type: type,
                  startDate: startDate,
                  endDate: endDate,
                  personCapacity: personCapacity,
                  reservationId: reservationId
                },
                refetchQueries: [{
                  query: ThreadItemsQuery,
                  variables: {
                    threadId: threadId,
                    threadType: threadType
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (data && data.sendMessage && data.sendMessage.status != 'userbanned') {
                if (reservationId != null && reservationId != undefined) {
                  dispatch(Object(_Reservation_updateReservation__WEBPACK_IMPORTED_MODULE_2__["updateReservation"])(reservationId, type, threadType, threadId));
                }

                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_SUCCESS"]
                });
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_ERROR"],
                payload: {
                  error: _context.t0
                }
              });
              return _context.abrupt("return", false);

            case 15:
              return _context.abrupt("return", true);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25+dHJpcHN+dmlld01lc3NhZ2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9oZWxwZXJzL2RhdGVSYW5nZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL1Jlc2VydmF0aW9uL3VwZGF0ZVJlc2VydmF0aW9uLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvbWVzc2FnZS9zZW5kTWVzc2FnZUFjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY291bnRyaWVzREIgZnJvbSAnY291bnRyaWVzLWRiJ1xuaW1wb3J0IG1vbWVudFRpbWVab25lIGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIHN0b3BEYXRlKSB7XG5cdGxldCBkYXRlQXJyYXkgPSBbXSwgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuXG5cdHdoaWxlIChjdXJyZW50RGF0ZSA8PSBzdG9wRGF0ZSkge1xuXHRcdGRhdGVBcnJheS5wdXNoKG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldFRpbWUoKSkpO1xuXHRcdGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMSk7XG5cdH1cblxuXHRyZXR1cm4gZGF0ZUFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2UoZGF0ZXMpIHtcblx0dmFyIHN0YXJ0RGF0ZSA9IG51bGwsIGVuZERhdGUgPSBudWxsLCBjb3VudGVyID0gMDtcblx0dmFyIHByZXZpb3VzRGF0ZSA9IG51bGwsIGRhdGVzQ29sbGVjdGlvbiA9IFtdO1xuXHRpZiAoZGF0ZXMubGVuZ3RoID4gMCkge1xuXHRcdGlmIChkYXRlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdGRhdGVzQ29sbGVjdGlvbiA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0RGF0ZTogZGF0ZXNbMF0sXG5cdFx0XHRcdFx0ZW5kRGF0ZTogZGF0ZXNbMF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0dmFyIGRhdGVSYW5nZSA9IHt9O1xuXHRcdFx0XHR2YXIgY3VycmVudERhdGUgPSBtb21lbnQoaXRlbSk7XG5cdFx0XHRcdGNvdW50ZXIrKztcblx0XHRcdFx0aWYgKHByZXZpb3VzRGF0ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHN0YXJ0RGF0ZSA9IGl0ZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHByZXZpb3VzRGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dmFyIHByZXZpb3VzRGF0ZU9iamVjdCA9IG1vbWVudChwcmV2aW91c0RhdGUpO1xuXHRcdFx0XHRcdHZhciBkaWZmZXJlbmNlID0gY3VycmVudERhdGUuZGlmZihwcmV2aW91c0RhdGVPYmplY3QsICdkYXlzJyk7XG5cdFx0XHRcdFx0aWYgKGRpZmZlcmVuY2UgPiAxKSB7XG5cdFx0XHRcdFx0XHRlbmREYXRlID0gbmV3IERhdGUobmV3IERhdGUocHJldmlvdXNEYXRlKS5nZXRUaW1lKCkgKyAzNjAwMDAwKTtcblx0XHRcdFx0XHRcdGRhdGVSYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0c3RhcnREYXRlLFxuXHRcdFx0XHRcdFx0XHRlbmREYXRlXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0ZGF0ZXNDb2xsZWN0aW9uLnB1c2goZGF0ZVJhbmdlKTtcblx0XHRcdFx0XHRcdHN0YXJ0RGF0ZSA9IGl0ZW07XG5cdFx0XHRcdFx0XHRpZiAoY291bnRlciA9PT0gZGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdGVuZERhdGUgPSBpdGVtO1xuXHRcdFx0XHRcdFx0XHRkYXRlUmFuZ2UgPSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhcnREYXRlLFxuXHRcdFx0XHRcdFx0XHRcdGVuZERhdGVcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0ZGF0ZXNDb2xsZWN0aW9uLnB1c2goZGF0ZVJhbmdlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGNvdW50ZXIgPT09IGRhdGVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRlbmREYXRlID0gbmV3IERhdGUobmV3IERhdGUoaXRlbSkuZ2V0VGltZSgpICsgMzYwMDAwMCk7XG5cdFx0XHRcdFx0XHRcdGRhdGVSYW5nZSA9IHtcblx0XHRcdFx0XHRcdFx0XHRzdGFydERhdGUsXG5cdFx0XHRcdFx0XHRcdFx0ZW5kRGF0ZVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRkYXRlc0NvbGxlY3Rpb24ucHVzaChkYXRlUmFuZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRwcmV2aW91c0RhdGUgPSBpdGVtO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRlc0NvbGxlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVXNpbmdUaW1lWm9uZShjb3VudHJ5LCBkYXRlRm9ybWF0KSB7XG5cdGlmICghY291bnRyeSkgcmV0dXJuIG1vbWVudCgpO1xuXHRlbHNlIHtcblx0XHRsZXQgY29udmVydGVkRGF0ZTtcblx0XHRjb25zdCB0aW1lem9uZXMgPSBjb3VudHJpZXNEQiAmJiBjb3VudHJpZXNEQi5nZXRDb3VudHJ5KGNvdW50cnksICd0aW1lem9uZXMnKTtcblx0XHRpZiAodGltZXpvbmVzICYmIHRpbWV6b25lcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb252ZXJ0ZWREYXRlID0gKHRpbWV6b25lcyAmJiB0aW1lem9uZXMubGVuZ3RoID4gMCkgPyBtb21lbnRUaW1lWm9uZS50eih0aW1lem9uZXNbMF0pIDogbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydGVkRGF0ZSAmJiBjb252ZXJ0ZWREYXRlICE9IG51bGwpIHtcblx0XHRcdGlmIChkYXRlRm9ybWF0KSB7XG5cdFx0XHRcdGNvbnZlcnRlZERhdGUgPSBjb252ZXJ0ZWREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnZlcnRlZERhdGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtb21lbnQoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGVXaXRoVGltZVpvbmUoZGF0ZSwgY291bnRyeSkge1xuXHRpZiAoIWNvdW50cnkgfHwgIWRhdGUpIHJldHVybiBtb21lbnQoZGF0ZSk7XG5cblx0bGV0IGNvbnZlcnRlZERhdGU7XG5cdGNvbnN0IHRpbWV6b25lcyA9IGNvdW50cmllc0RCICYmIGNvdW50cmllc0RCLmdldENvdW50cnkoY291bnRyeSwgJ3RpbWV6b25lcycpO1xuXHRpZiAodGltZXpvbmVzICYmIHRpbWV6b25lcy5sZW5ndGggPiAwKSB7XG5cdFx0Y29udmVydGVkRGF0ZSA9IG1vbWVudFRpbWVab25lLnR6KGRhdGUsIHRpbWV6b25lc1swXSk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVydGVkRGF0ZSB8fCBtb21lbnQoZGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlUmFuZ2VzKHsgY2hlY2tJbiwgY291bnRyeSwgY2hlY2tPdXQgfSkge1xuXHRsZXQgc3RhcnREYXRlID0gc2V0RGF0ZVdpdGhUaW1lWm9uZShjaGVja0luLCBjb3VudHJ5KS5zdGFydE9mKCdkYXknKSxcblx0XHRlbmREYXRlID0gc2V0RGF0ZVdpdGhUaW1lWm9uZShjaGVja091dCwgY291bnRyeSkuc3RhcnRPZignZGF5JyksXG5cdFx0dG9kYXkgPSBnZXREYXRlVXNpbmdUaW1lWm9uZShjb3VudHJ5LCBmYWxzZSkuc3RhcnRPZignZGF5Jyk7XG5cdHJldHVybiB7XG5cdFx0bmlnaHRzOiBlbmREYXRlLmRpZmYoc3RhcnREYXRlLCAnZGF5cycpLFxuXHRcdGludGVydmFsOiBzdGFydERhdGUuZGlmZih0b2RheSwgJ2RheXMnKSxcblx0XHR0b2RheVxuXHR9O1xufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9jb3JlL2hpc3RvcnknO1xuXG5cbmltcG9ydCB7XG4gIFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9TVEFSVCxcbiAgVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX1NVQ0NFU1MsXG4gIFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9FUlJPUlxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRBbGxSZXNlcnZhdGlvblF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBnZXRBbGxSZXNlcnZhdGlvbiAoJHVzZXJUeXBlOiBTdHJpbmcpe1xuICAgIGdldEFsbFJlc2VydmF0aW9uKHVzZXJUeXBlOiAkdXNlclR5cGUpe1xuICAgICAgcmVzZXJ2YXRpb25EYXRhIHtcbiAgICAgICAgaWRcbiAgICAgICAgcmVzZXJ2YXRpb25TdGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJlc2VydmF0aW9uKHJlc2VydmF0aW9uSWQsIGFjdGlvblR5cGUsIHVzZXJUeXBlLCB0aHJlYWRJZCkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfU1RBUlQsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgbXV0YXRpb24gdXBkYXRlUmVzZXJ2YXRpb24oXG4gICAgICAgICAgICAkcmVzZXJ2YXRpb25JZDogSW50ISwgXG4gICAgICAgICAgICAkYWN0aW9uVHlwZTogU3RyaW5nISxcbiAgICAgICAgICAgICR0aHJlYWRJZDogSW50XG4gICAgICAgICAgKXtcbiAgICAgICAgICAgICAgdXBkYXRlUmVzZXJ2YXRpb24oXG4gICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25JZDogJHJlc2VydmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uVHlwZTogJGFjdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgdGhyZWFkSWQ6ICR0aHJlYWRJZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHJlc2VydmF0aW9uSWQsXG4gICAgICAgICAgYWN0aW9uVHlwZSxcbiAgICAgICAgICB0aHJlYWRJZFxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBnZXRBbGxSZXNlcnZhdGlvblF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIHVzZXJUeXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEudXBkYXRlUmVzZXJ2YXRpb24gJiYgZGF0YS51cGRhdGVSZXNlcnZhdGlvbi5zdGF0dXMgPT09ICcyMDAnKSB7XG5cbiAgICAgICAgaWYodXNlclR5cGUgPT0gJ2hvc3QnKSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvcmVzZXJ2YXRpb24vY3VycmVudCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhpc3RvcnkucHVzaCgnL3RyaXBzL2N1cnJlbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9TVUNDRVNTLFxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7XG4gIFNFTkRfTUVTU0FHRV9TVEFSVCxcbiAgU0VORF9NRVNTQUdFX1NVQ0NFU1MsXG4gIFNFTkRfTUVTU0FHRV9FUlJPUixcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHVwZGF0ZVJlc2VydmF0aW9uIH0gZnJvbSAnLi4vUmVzZXJ2YXRpb24vdXBkYXRlUmVzZXJ2YXRpb24nO1xuXG5jb25zdCBUaHJlYWRJdGVtc1F1ZXJ5ID0gZ3FsYFxucXVlcnkgZ2V0VGhyZWFkKCR0aHJlYWRUeXBlOiBTdHJpbmcsICR0aHJlYWRJZDogSW50KXtcbiAgZ2V0VGhyZWFkKHRocmVhZFR5cGU6ICR0aHJlYWRUeXBlLCB0aHJlYWRJZDogJHRocmVhZElkKSB7XG4gICAgaWRcbiAgICBsaXN0SWRcbiAgICBndWVzdFxuICAgIGhvc3RcbiAgICBsaXN0RGF0YSB7XG4gICAgICB0aXRsZVxuICAgICAgY2l0eVxuICAgICAgc3RhdGVcbiAgICAgIGNvdW50cnlcbiAgICAgIGxpc3RpbmdEYXRhIHtcbiAgICAgICAgYmFzZVByaWNlXG4gICAgICAgIGNsZWFuaW5nUHJpY2VcbiAgICAgICAgY3VycmVuY3lcbiAgICAgICAgbW9udGhseURpc2NvdW50XG4gICAgICAgIHdlZWtseURpc2NvdW50XG4gICAgICB9XG4gICAgfVxuICAgIHRocmVhZEl0ZW1Gb3JUeXBlIHtcbiAgICAgIGlkXG4gICAgICB0aHJlYWRJZFxuICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgY29udGVudFxuICAgICAgc2VudEJ5XG4gICAgICB0eXBlXG4gICAgICBzdGFydERhdGVcbiAgICAgIGVuZERhdGVcbiAgICAgIHBlcnNvbkNhcGFjaXR5XG4gICAgICBjcmVhdGVkQXRcbiAgICAgIGNhbmNlbERhdGEge1xuICAgICAgICBpZFxuICAgICAgICByZXNlcnZhdGlvbklkXG4gICAgICAgIGNhbmNlbGxhdGlvblBvbGljeVxuICAgICAgICBndWVzdFNlcnZpY2VGZWVcbiAgICAgICAgaG9zdFNlcnZpY2VGZWVcbiAgICAgICAgcmVmdW5kVG9HdWVzdFxuICAgICAgICBwYXlvdXRUb0hvc3RcbiAgICAgICAgdG90YWwgXG4gICAgICAgIGN1cnJlbmN5XG4gICAgICB9XG4gICAgICByZXNlcnZhdGlvbiB7XG4gICAgICAgIGlkXG4gICAgICAgIGxpc3RJZFxuICAgICAgICBob3N0SWRcbiAgICAgICAgZ3Vlc3RJZFxuICAgICAgICBjaGVja0luXG4gICAgICAgIGNoZWNrT3V0XG4gICAgICAgIGJhc2VQcmljZVxuICAgICAgICBjbGVhbmluZ1ByaWNlXG4gICAgICAgIHRvdGFsXG4gICAgICAgIGN1cnJlbmN5XG4gICAgICAgIGd1ZXN0c1xuICAgICAgICBjb25maXJtYXRpb25Db2RlXG4gICAgICAgIGd1ZXN0U2VydmljZUZlZVxuICAgICAgICBkaXNjb3VudFxuICAgICAgICBkaXNjb3VudFR5cGVcbiAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICBob3N0U2VydmljZUZlZVxuICAgICAgICBib29raW5nU3BlY2lhbFByaWNpbmcge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICAgIGJsb2NrZWREYXRlc1xuICAgICAgICAgIGlzU3BlY2lhbFByaWNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhyZWFkSXRlbXMge1xuICAgICAgaWRcbiAgICAgIHRocmVhZElkXG4gICAgICByZXNlcnZhdGlvbklkXG4gICAgICBjb250ZW50XG4gICAgICBzZW50QnlcbiAgICAgIHR5cGVcbiAgICAgIHN0YXJ0RGF0ZVxuICAgICAgZW5kRGF0ZVxuICAgICAgY3JlYXRlZEF0XG4gICAgfVxuICAgIHRocmVhZEl0ZW1zQ291bnRcbiAgICBndWVzdFByb2ZpbGUge1xuICAgICAgcHJvZmlsZUlkXG4gICAgICBkaXNwbGF5TmFtZVxuICAgICAgZmlyc3ROYW1lXG4gICAgICBsb2NhdGlvblxuICAgICAgcmV2aWV3c0NvdW50XG4gICAgICB1c2VyVmVyaWZpY2F0aW9uIHtcbiAgICAgICAgaWRcbiAgICAgICAgaXNFbWFpbENvbmZpcm1lZFxuICAgICAgICBpc0ZhY2Vib29rQ29ubmVjdGVkXG4gICAgICAgIGlzR29vZ2xlQ29ubmVjdGVkXG4gICAgICAgIGlzSWRWZXJpZmljYXRpb25cbiAgICAgIH1cbiAgICB9XG4gICAgZ3Vlc3RVc2VyRGF0YSB7XG4gICAgICBlbWFpbFxuICAgICAgdXNlckJhblN0YXR1c1xuICAgIH1cbiAgICBob3N0UHJvZmlsZSB7XG4gICAgICBwcm9maWxlSWRcbiAgICAgIGRpc3BsYXlOYW1lXG4gICAgICBmaXJzdE5hbWVcbiAgICAgIHBpY3R1cmVcbiAgICAgIGxvY2F0aW9uXG4gICAgICByZXZpZXdzQ291bnRcbiAgICAgIHVzZXJWZXJpZmljYXRpb24ge1xuICAgICAgICBpZFxuICAgICAgICBpc0VtYWlsQ29uZmlybWVkXG4gICAgICAgIGlzRmFjZWJvb2tDb25uZWN0ZWRcbiAgICAgICAgaXNHb29nbGVDb25uZWN0ZWRcbiAgICAgICAgaXNJZFZlcmlmaWNhdGlvblxuICAgICAgfVxuICAgIH1cbiAgICBob3N0VXNlckRhdGEge1xuICAgICAgZW1haWxcbiAgICB9XG4gICAgc3RhdHVzXG4gIH1cbn1cbmA7XG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2VBY3Rpb24oXG4gIHRocmVhZElkLFxuICB0aHJlYWRUeXBlLFxuICBjb250ZW50LFxuICB0eXBlLFxuICBzdGFydERhdGUsXG4gIGVuZERhdGUsXG4gIHBlcnNvbkNhcGFjaXR5LFxuICByZXNlcnZhdGlvbklkLFxuICByZWNlaXZlck5hbWUsXG4gIHNlbmRlck5hbWUsXG4gIHJlY2VpdmVyVHlwZSxcbiAgcmVjZWl2ZXJFbWFpbFxuKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0VORF9NRVNTQUdFX1NUQVJULFxuICAgIH0pO1xuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICBtdXRhdGlvbiBzZW5kTWVzc2FnZShcbiAgICAgICAgICAkdGhyZWFkSWQ6IEludCEsIFxuICAgICAgICAgICRjb250ZW50OiBTdHJpbmcsIFxuICAgICAgICAgICR0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgJHN0YXJ0RGF0ZTogU3RyaW5nLFxuICAgICAgICAgICRlbmREYXRlOiBTdHJpbmcsXG4gICAgICAgICAgJHBlcnNvbkNhcGFjaXR5OiBJbnQsXG4gICAgICAgICAgJHJlc2VydmF0aW9uSWQ6IEludFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICB0aHJlYWRJZDogJHRocmVhZElkLCBcbiAgICAgICAgICAgIGNvbnRlbnQ6ICRjb250ZW50LCBcbiAgICAgICAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiAkc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogJGVuZERhdGUsXG4gICAgICAgICAgICBwZXJzb25DYXBhY2l0eTogJHBlcnNvbkNhcGFjaXR5LFxuICAgICAgICAgICAgcmVzZXJ2YXRpb25JZDogJHJlc2VydmF0aW9uSWRcbiAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHNlbnRCeVxuICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICAgICAgICBzdGFydERhdGVcbiAgICAgICAgICAgICAgZW5kRGF0ZVxuICAgICAgICAgICAgICBwZXJzb25DYXBhY2l0eVxuICAgICAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgYDtcbiAgICAgIC8vIFNlbmQgTWVzc2FnZVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBwZXJzb25DYXBhY2l0eSxcbiAgICAgICAgICByZXNlcnZhdGlvbklkXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcXVlcnk6IFRocmVhZEl0ZW1zUXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGhyZWFkSWQsXG4gICAgICAgICAgICAgIHRocmVhZFR5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuc2VuZE1lc3NhZ2UgJiYgZGF0YS5zZW5kTWVzc2FnZS5zdGF0dXMgIT0gJ3VzZXJiYW5uZWQnKSB7XG4gICAgICAgIGlmIChyZXNlcnZhdGlvbklkICE9IG51bGwgJiYgcmVzZXJ2YXRpb25JZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVSZXNlcnZhdGlvbihyZXNlcnZhdGlvbklkLCB0eXBlLCB0aHJlYWRUeXBlLCB0aHJlYWRJZCkpO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTRU5EX01FU1NBR0VfU1VDQ0VTUyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU0VORF9NRVNTQUdFX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUdBO0FBTUE7QUFXQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBUUE7QUFSQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVJBO0FBQ0E7QUF6QkE7QUFBQTtBQXdCQTtBQUNBO0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQXREQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3REE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBeERBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFtRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUtBO0FBRUE7QUF5SEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFQQTtBQUFBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFaQTtBQUNBO0FBeENBO0FBQUE7QUF1Q0E7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXBFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBckVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUErRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==