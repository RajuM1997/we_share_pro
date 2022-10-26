(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["becomeHost~manageListing"],{

/***/ "/Lyw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingFieldsValues", function() { return getListingFieldsValues; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WlAH");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wQmL");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query($step: String){\n    getListingSettings(step: $step) {\n      id\n      typeName\n      fieldType\n      typeLabel\n      step\n      isEnable\n      isMultiValue\n      listSettings {\n        id\n        typeId\n        itemName\n        otherItemName\n        maximum\n        minimum\n        startValue\n        endValue\n        isEnable\n        image\n      }\n    }\n  }\n"])));
function getListingFieldsValues(step, listId, isOtherPage) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, step1DataIsLoaded, step2DataIsLoaded, step3DataIsLoaded, baseCurrency, _yield$client$query, data, listingFieldsValues, bedType, bedTypeValue, updatedValuesStep2, updatedValuesStep3, updatedValuesStep1;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_START"]
              });
              _context.prev = 2;
              step1DataIsLoaded = getState().location.step1DataIsLoaded;
              step2DataIsLoaded = getState().location.step2DataIsLoaded;
              step3DataIsLoaded = getState().location.step3DataIsLoaded; // Get Base Currency from Redux Store

              baseCurrency = getState().currency.base; // Send Request to get listing data

              _context.next = 9;
              return client.query({
                query: query,
                variables: {
                  step: step
                },
                fetchPolicy: 'network-only'
              });

            case 9:
              _yield$client$query = _context.sent;
              data = _yield$client$query.data;
              listingFieldsValues = {};
              bedType = getState().listingFields.data.bedType;

              if (!data && !data.getListingSettings) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_ERROR"]
                });
              } else {
                data.getListingSettings.map(function (item, key) {
                  if (item.fieldType === "numberType") {
                    listingFieldsValues[item.typeName] = item.listSettings.length > 0 ? item.listSettings[0].startValue : null;
                  } else {
                    if (item.isMultiValue === true) {
                      listingFieldsValues[item.typeName] = [];
                    } else {
                      var unSelectIndex = item.listSettings.length > 0 ? item.listSettings.findIndex(function (o) {
                        return o.isEnable == 1;
                      }) : null;
                      listingFieldsValues[item.typeName] = item.listSettings[unSelectIndex].id;
                    }
                  }
                });

                if (bedType && bedType.length > 0) {
                  bedType.map(function (item, key) {
                    bedTypeValue = bedType.length > 0 ? bedType[0].id : null;
                  });
                } // Reinitialize the form values


                if (step === "2" && !step2DataIsLoaded) {
                  updatedValuesStep2 = Object.assign({}, listingFieldsValues, {
                    id: listId
                  });
                  dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])("ListPlaceStep2", updatedValuesStep2, true));
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_SUCCESS"],
                    initialValuesLoadedStep2: true
                  });
                } else if (step === "3" && !step3DataIsLoaded) {
                  updatedValuesStep3 = Object.assign({}, listingFieldsValues, {
                    id: listId
                  }, {
                    currency: baseCurrency
                  }, {
                    bookingType: 'instant'
                  }, {
                    maxDaysNotice: 'available'
                  });
                  dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])("ListPlaceStep3", updatedValuesStep3, true));
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_SUCCESS"],
                    initialValuesLoadedStep3: true
                  });
                } else {
                  if (!step1DataIsLoaded || isOtherPage) {
                    updatedValuesStep1 = Object.assign({}, listingFieldsValues, {
                      bedTypes: [{
                        bedCount: 1,
                        bedType: bedTypeValue
                      }]
                    }, {
                      residenceType: "1"
                    });
                    dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])("ListPlaceStep1", updatedValuesStep1, true));
                    dispatch({
                      type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_SUCCESS"],
                      initialValuesLoaded: true
                    });
                  }
                }
              }

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_ERROR"],
                payload: {
                  error: _context.t0
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
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "Gfp6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/SiteImages/large_no_image.jpeg?63dc6a2f";

/***/ }),

/***/ "Jyjx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingData", function() { return getListingData; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WlAH");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wQmL");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($listId:String!, $preview: Boolean) {\n    UserListing (listId:$listId, preview: $preview) {\n      id\n      userId\n      country\n      street\n      buildingName\n      city\n      state\n      zipcode\n      lat\n      lng\n      isMapTouched\n      bedrooms\n      residenceType\n      beds\n      personCapacity\n      bathrooms\n      user {\n        id\n        email\n        userBanStatus\n        profile{\n          firstName\n          lastName\n          dateOfBirth\n        }\n      }\n      userAmenities {\n        amenitiesId\n        listsettings{\n          itemName\n          settingsType {\n            typeName\n          }\n        }\n      }\n      userSafetyAmenities {\n        safetyAmenitiesId\n        listsettings{\n          itemName\n          settingsType {\n            typeName\n          }\n        }\n      }\n      userSpaces {\n        spacesId\n        listsettings{\n          itemName\n          settingsType {\n            typeName\n          }\n        }\n      }\n      settingsData {\n        id\n        settingsId\n        listsettings {\n          id\n          itemName\n          settingsType {\n            typeName\n          }\n        }\n      }\n      userBedsTypes{\n        id\n        listId\n        bedCount\n        bedType\n      }\n    }\n  }\n"])));
function getListingData(listId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, _yield$client$query, data, formValues, settingFieldsData, amenities, safetyAmenities, spaces, bedTypes;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_START"]
              });
              _context.prev = 2;
              _context.next = 5;
              return client.query({
                query: query,
                variables: {
                  listId: listId,
                  preview: true
                },
                fetchPolicy: 'network-only'
              });

            case 5:
              _yield$client$query = _context.sent;
              data = _yield$client$query.data;
              formValues = null;
              settingFieldsData = {};
              amenities = [];
              safetyAmenities = [];
              spaces = [];
              bedTypes = [];

              if (data && data.UserListing) {
                // Preparing for list settings data
                data.UserListing.settingsData.map(function (item, value) {
                  settingFieldsData[item.listsettings.settingsType.typeName] = item.settingsId;
                }); // Preparing for user amenities

                if (data.UserListing.userAmenities.length > 0) {
                  data.UserListing.userAmenities.map(function (item, value) {
                    amenities.push(parseInt(item.amenitiesId));
                  });
                  settingFieldsData = Object.assign({}, settingFieldsData, {
                    amenities: amenities
                  });
                } // Preparing for user safety amenities


                if (data.UserListing.userSafetyAmenities.length > 0) {
                  data.UserListing.userSafetyAmenities.map(function (item, value) {
                    safetyAmenities.push(parseInt(item.safetyAmenitiesId));
                  });
                  settingFieldsData = Object.assign({}, settingFieldsData, {
                    safetyAmenities: safetyAmenities
                  });
                } // Preparing for User Spaces


                if (data.UserListing.userSpaces.length > 0) {
                  data.UserListing.userSpaces.map(function (item, value) {
                    spaces.push(parseInt(item.spacesId));
                  });
                  settingFieldsData = Object.assign({}, settingFieldsData, {
                    spaces: spaces
                  });
                }

                bedTypes = data.UserListing.userBedsTypes;
                settingFieldsData = Object.assign({}, settingFieldsData, {
                  bedTypes: bedTypes
                }); // Combining values for initializing the edit form

                formValues = Object.assign({}, data.UserListing, settingFieldsData);

                if (formValues != null) {
                  // Reinitialize the form values
                  dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])('ListPlaceStep1', formValues, true)); // Dispatch a success action

                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_SUCCESS"],
                    step1DataIsLoaded: true,
                    isExistingList: true,
                    initialValuesLoaded: false
                  });
                }
              }

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_ERROR"],
                payload: {
                  error: _context.t0
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
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "Rkgf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingSteps", function() { return getListingSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetListingSteps", function() { return resetListingSteps; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wQmL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var _getListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jyjx");
/* harmony import */ var _getListingDataStep2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SOt8");
/* harmony import */ var _getListPhotos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lup8");
/* harmony import */ var _getListingDataStep3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("q2Ob");
/* harmony import */ var _getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/Lyw");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 // Action
// For Step#1

 // For Step#2





var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($listId:String!) {\n    showListingSteps (listId:$listId) {\n      id\n      listId\n      step1\n      step2\n      step3\n      step4\n      listing {\n        id\n        isReady\n        isPublished\n        listApprovalStatus\n        user {\n          id\n          email\n          userBanStatus\n          userDeletedAt\n        }\n      }\n    }\n  }\n"])));
function getListingSteps(listId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, _yield$client$query, data, initialValuesLoaded, initialValuesLoadedStep2, initialValuesLoadedStep3, step1DataIsLoaded, step2DataIsLoaded, step3DataIsLoaded, steps;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_STEPS_DATA_START"],
                listingSteps: undefined,
                isExistingList: undefined,
                isLocationChosen: undefined,
                step1DataIsLoaded: undefined,
                step2DataIsLoaded: undefined,
                step3DataIsLoaded: undefined,
                initialValuesLoadedStep2: undefined,
                initialValuesLoadedStep3: undefined,
                photosCount: undefined,
                listPhotos: undefined,
                stepsLoading: true
              }); // For Adding new list

              if (!(listId === undefined || listId === null)) {
                _context.next = 5;
                break;
              }

              // Load initial data for step#1
              dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("1"));
              return _context.abrupt("return", true);

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return client.query({
                query: query,
                variables: {
                  listId: listId
                },
                fetchPolicy: 'network-only'
              });

            case 8:
              _yield$client$query = _context.sent;
              data = _yield$client$query.data;
              // Check if initial values already updated to the store
              initialValuesLoaded = getState().location.initialValuesLoaded;
              initialValuesLoadedStep2 = getState().location.initialValuesLoadedStep2;
              initialValuesLoadedStep3 = getState().location.initialValuesLoadedStep3; // Check if list data already updated to the store

              step1DataIsLoaded = getState().location.step1DataIsLoaded;
              step2DataIsLoaded = getState().location.step2DataIsLoaded;
              step3DataIsLoaded = getState().location.step3DataIsLoaded;

              if (data && data.showListingSteps) {
                // Assign steps data to a const
                steps = data.showListingSteps; // Check if Step1Data is already loaded

                if (step1DataIsLoaded != true) {
                  // Load data if Step#1 is either active or completed 
                  if (steps.step1 === "active" || steps.step1 === "completed") {
                    dispatch(Object(_getListing__WEBPACK_IMPORTED_MODULE_3__["getListingData"])(listId)); // Load photos of the listing for step#2

                    dispatch(Object(_getListPhotos__WEBPACK_IMPORTED_MODULE_5__["getListPhotos"])(listId));
                  } else {
                    if (initialValuesLoaded != true) {
                      // Load initial data for step#1
                      dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("1"));
                    }
                  }
                } // Check if Step2Data is already loaded


                if (step2DataIsLoaded != true) {
                  if (steps.step2 === "completed") {
                    dispatch(Object(_getListingDataStep2__WEBPACK_IMPORTED_MODULE_4__["getListingDataStep2"])(listId)); // Load photos of the listing for step#2

                    dispatch(Object(_getListPhotos__WEBPACK_IMPORTED_MODULE_5__["getListPhotos"])(listId));
                  } else {
                    if (initialValuesLoadedStep2 != true) {
                      // Load initial data for step#2
                      dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("2", listId)); // Load photos of the listing for step#2

                      dispatch(Object(_getListPhotos__WEBPACK_IMPORTED_MODULE_5__["getListPhotos"])(listId));
                    }
                  }
                } // Check if Step3Data is already loaded


                if (step3DataIsLoaded != true) {
                  if (steps.step3 === "completed") {
                    dispatch(Object(_getListingDataStep3__WEBPACK_IMPORTED_MODULE_6__["getListingDataStep3"])(listId));
                  } else {
                    if (initialValuesLoadedStep3 != true) {
                      // Load initial data for step#3
                      dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("3", listId));
                    }
                  }
                } // Update List Steps on the store & mark it as existing list


                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_STEPS_DATA_SUCCESS"],
                  listingSteps: data.showListingSteps,
                  isExistingList: true,
                  stepsLoading: false
                });
              }

              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](5);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_STEPS_DATA_ERROR"],
                stepsLoading: false
              });
              return _context.abrupt("return", false);

            case 23:
              return _context.abrupt("return", true);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 19]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function resetListingSteps() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref3) {
      var client;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["RESET_LISTING_STEPS_DATA_START"],
                stepsLoading: false
              });
              _context2.prev = 2;
              _context2.next = 5;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["initialize"])('ListPlaceStep1', {}));

            case 5:
              _context2.next = 7;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["initialize"])('ListPlaceStep2', {}));

            case 7:
              _context2.next = 9;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["initialize"])('ListPlaceStep3', {}));

            case 9:
              _context2.next = 11;
              return dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["RESET_LISTING_STEPS_DATA_SUCCESS"],
                listingSteps: undefined,
                isExistingList: undefined,
                isLocationChosen: undefined,
                step1DataIsLoaded: undefined,
                step2DataIsLoaded: undefined,
                step3DataIsLoaded: undefined,
                initialValuesLoadedStep2: undefined,
                initialValuesLoadedStep3: undefined,
                photosCount: undefined,
                listPhotos: undefined,
                stepsLoading: false
              });

            case 11:
              _context2.next = 18;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              _context2.next = 17;
              return dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["RESET_LISTING_STEPS_DATA_ERROR"],
                stepsLoading: false
              });

            case 17:
              return _context2.abrupt("return", false);

            case 18:
              return _context2.abrupt("return", true);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "SOt8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingDataStep2", function() { return getListingDataStep2; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WlAH");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wQmL");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($listId:String!, $preview: Boolean) {\n    UserListing (listId:$listId, preview: $preview) {\n      id\n      userId\n      title\n      description\n      coverPhoto\n    }\n  }\n"])));
function getListingDataStep2(listId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, _yield$client$query, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_STEP2_START"]
              });
              _context.prev = 2;
              _context.next = 5;
              return client.query({
                query: query,
                variables: {
                  listId: listId,
                  preview: true
                },
                fetchPolicy: 'network-only'
              });

            case 5:
              _yield$client$query = _context.sent;
              data = _yield$client$query.data;

              if (!(data && data.UserListing)) {
                _context.next = 11;
                break;
              }

              _context.next = 10;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])('ListPlaceStep2', data.UserListing, true));

            case 10:
              // Dispatch a success action
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_STEP2_SUCCESS"],
                step2DataIsLoaded: true,
                isExistingList: true
              });

            case 11:
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_STEP2_ERROR"],
                payload: {
                  error: _context.t0
                }
              });
              return _context.abrupt("return", false);

            case 17:
              return _context.abrupt("return", true);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "lup8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListPhotos", function() { return getListPhotos; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WlAH");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query listPhotos($listId:Int!) {\n    ShowListPhotos (listId:$listId) {\n      id\n      listId\n      name\n      type\n      isCover\n    }\n  }\n"])));
function getListPhotos(listId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, id, _yield$client$query, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_START"]
              });
              _context.prev = 2;
              id = Number(listId); // Send Request to get listing data

              _context.next = 6;
              return client.query({
                query: query,
                variables: {
                  listId: id
                },
                fetchPolicy: 'network-only'
              });

            case 6:
              _yield$client$query = _context.sent;
              data = _yield$client$query.data;

              if (data && data.ShowListPhotos) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_SUCCESS"],
                  listPhotos: data.ShowListPhotos,
                  photosCount: data.ShowListPhotos.length
                });
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_ERROR"]
                });
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_ERROR"],
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

/***/ "q2Ob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingDataStep3", function() { return getListingDataStep3; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wQmL");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($listId:String!, $preview: Boolean) {\n    UserListing (listId:$listId, preview: $preview) {\n      id\n      userId\n      bookingType\n      isPublished\n      listApprovalStatus\n      houseRules {\n        houseRulesId\n      }\n      listingData {\n        bookingNoticeTime,\n        checkInStart,\n        checkInEnd,\n        maxDaysNotice,\n        minNight,\n        maxNight,\n        basePrice,\n        cleaningPrice,\n        currency,\n        weeklyDiscount,\n        monthlyDiscount,\n        cancellationPolicy,\n        taxRate\n      }\n      blockedDates {\n        blockedDates\n        reservationId\n        calendarStatus\n        isSpecialPrice\n      }\n      calendars {\n        id\n        name\n        url\n        listId\n        status\n      }\n      listBlockedPrice {\n          listId\n          calendarStatus\n          isSpecialPrice\n          blockedDates\n          calendarId\n          reservationId\n      }\n    }\n  }\n"])));
function getListingDataStep3(listId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, formValues, settingFieldsData, houseRules, updatedBlockedDates, updatedDisabledDates, updatedAvailableDates, updatedAvailableDatesPrices, listData, calendars, _yield$client$query, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_START"]
              });
              _context.prev = 2;
              formValues = null;
              settingFieldsData = {};
              houseRules = [];
              updatedBlockedDates = [];
              updatedDisabledDates = [];
              updatedAvailableDates = [];
              updatedAvailableDatesPrices = [];
              listData = {};
              calendars = {}; // Send Request to get listing data

              _context.next = 14;
              return client.query({
                query: query,
                variables: {
                  listId: listId,
                  preview: true
                },
                fetchPolicy: 'network-only'
              });

            case 14:
              _yield$client$query = _context.sent;
              data = _yield$client$query.data;

              if (!(data && data.UserListing)) {
                _context.next = 42;
                break;
              }

              // Preparing List data
              listData = data.UserListing.listingData;
              calendars = data.UserListing.calendars; // Preparing for house rules

              if (data.UserListing.houseRules.length > 0) {
                data.UserListing.houseRules.map(function (item, value) {
                  houseRules.push(parseInt(item.houseRulesId));
                });
                settingFieldsData = Object.assign({}, listData, {
                  houseRules: houseRules
                });
              } // Preparing for blocked dates


              if (data.UserListing.blockedDates.length > 0) {
                data.UserListing.blockedDates.map(function (item, value) {
                  var date = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.blockedDates);

                  if (item.reservationId != null) {
                    updatedDisabledDates.push(new Date(date));
                  }

                  if (item.calendarStatus && item.calendarStatus === 'available') {
                    if (item.isSpecialPrice) {
                      updatedAvailableDates.push(new Date(date));
                      updatedAvailableDatesPrices.push({
                        date: new Date(date),
                        isSpecialPrice: item.isSpecialPrice
                      });
                    }
                  } else {
                    updatedBlockedDates.push(new Date(date));
                  }
                });
                settingFieldsData = Object.assign({}, listData, settingFieldsData, {
                  disabledDates: updatedDisabledDates,
                  blockedDates: updatedBlockedDates,
                  availableDates: updatedAvailableDates,
                  availableDatesPrices: updatedAvailableDatesPrices
                });
              }

              _context.next = 23;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'calendars', calendars));

            case 23:
              if (!updatedBlockedDates) {
                _context.next = 28;
                break;
              }

              _context.next = 26;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'blockedDates', updatedBlockedDates));

            case 26:
              _context.next = 36;
              break;

            case 28:
              if (!updatedAvailableDates) {
                _context.next = 33;
                break;
              }

              _context.next = 31;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'blockedDates', updatedAvailableDates));

            case 31:
              _context.next = 36;
              break;

            case 33:
              if (!updatedAvailableDatesPrices) {
                _context.next = 36;
                break;
              }

              _context.next = 36;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'blockedDates', updatedAvailableDatesPrices));

            case 36:
              formValues = Object.assign({}, data.UserListing, settingFieldsData, listData, calendars); // Reinitialize the form values

              _context.next = 39;
              return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["initialize"])('ListPlaceStep3', formValues));

            case 39:
              // Dispatch a success action
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_SUCCESS"],
                step3DataIsLoaded: true,
                isExistingList: true,
                calendars: data.UserListing.calendars
              });
              _context.next = 43;
              break;

            case 42:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_ERROR"]
              });

            case 43:
              _context.next = 49;
              break;

            case 45:
              _context.prev = 45;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_ERROR"],
                payload: {
                  error: _context.t0
                }
              });
              return _context.abrupt("return", false);

            case 49:
              return _context.abrupt("return", true);

            case 50:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 45]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVjb21lSG9zdH5tYW5hZ2VMaXN0aW5nLmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9nZXRMaXN0aW5nRmllbGRzVmFsdWVzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL1NpdGVJbWFnZXMvbGFyZ2Vfbm9faW1hZ2UuanBlZyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2dldExpc3RpbmcuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9nZXRMaXN0aW5nU3RlcHMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9nZXRMaXN0aW5nRGF0YVN0ZXAyLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvZ2V0TGlzdFBob3Rvcy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2dldExpc3RpbmdEYXRhU3RlcDMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuaW1wb3J0IHtcbiAgR0VUX0xJU1RJTkdfRklFTERTX0lOVElBTF9WQUxVRVNfU1RBUlQsXG4gIEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX1NVQ0NFU1MsXG4gIEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX0VSUk9SXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5KCRzdGVwOiBTdHJpbmcpe1xuICAgIGdldExpc3RpbmdTZXR0aW5ncyhzdGVwOiAkc3RlcCkge1xuICAgICAgaWRcbiAgICAgIHR5cGVOYW1lXG4gICAgICBmaWVsZFR5cGVcbiAgICAgIHR5cGVMYWJlbFxuICAgICAgc3RlcFxuICAgICAgaXNFbmFibGVcbiAgICAgIGlzTXVsdGlWYWx1ZVxuICAgICAgbGlzdFNldHRpbmdzIHtcbiAgICAgICAgaWRcbiAgICAgICAgdHlwZUlkXG4gICAgICAgIGl0ZW1OYW1lXG4gICAgICAgIG90aGVySXRlbU5hbWVcbiAgICAgICAgbWF4aW11bVxuICAgICAgICBtaW5pbXVtXG4gICAgICAgIHN0YXJ0VmFsdWVcbiAgICAgICAgZW5kVmFsdWVcbiAgICAgICAgaXNFbmFibGVcbiAgICAgICAgaW1hZ2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0aW5nRmllbGRzVmFsdWVzKHN0ZXAsIGxpc3RJZCwgaXNPdGhlclBhZ2UpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0xJU1RJTkdfRklFTERTX0lOVElBTF9WQUxVRVNfU1RBUlQsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuXG4gICAgICBjb25zdCBzdGVwMURhdGFJc0xvYWRlZCA9IGdldFN0YXRlKCkubG9jYXRpb24uc3RlcDFEYXRhSXNMb2FkZWQ7XG4gICAgICBjb25zdCBzdGVwMkRhdGFJc0xvYWRlZCA9IGdldFN0YXRlKCkubG9jYXRpb24uc3RlcDJEYXRhSXNMb2FkZWQ7XG4gICAgICBjb25zdCBzdGVwM0RhdGFJc0xvYWRlZCA9IGdldFN0YXRlKCkubG9jYXRpb24uc3RlcDNEYXRhSXNMb2FkZWQ7XG5cbiAgICAgIC8vIEdldCBCYXNlIEN1cnJlbmN5IGZyb20gUmVkdXggU3RvcmVcbiAgICAgIGNvbnN0IGJhc2VDdXJyZW5jeSA9IGdldFN0YXRlKCkuY3VycmVuY3kuYmFzZTtcbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBnZXQgbGlzdGluZyBkYXRhXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICB2YXJpYWJsZXM6IHsgc3RlcCB9LFxuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgbGlzdGluZ0ZpZWxkc1ZhbHVlcyA9IHt9O1xuICAgICAgbGV0IGJlZFR5cGUgPSBnZXRTdGF0ZSgpLmxpc3RpbmdGaWVsZHMuZGF0YS5iZWRUeXBlO1xuICAgICAgbGV0IGJlZFR5cGVWYWx1ZTtcblxuICAgICAgaWYgKCFkYXRhICYmICFkYXRhLmdldExpc3RpbmdTZXR0aW5ncykge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfRklFTERTX0lOVElBTF9WQUxVRVNfRVJST1IsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBkYXRhLmdldExpc3RpbmdTZXR0aW5ncy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmZpZWxkVHlwZSA9PT0gXCJudW1iZXJUeXBlXCIpIHtcbiAgICAgICAgICAgIGxpc3RpbmdGaWVsZHNWYWx1ZXNbaXRlbS50eXBlTmFtZV0gPSBpdGVtLmxpc3RTZXR0aW5ncy5sZW5ndGggPiAwID8gaXRlbS5saXN0U2V0dGluZ3NbMF0uc3RhcnRWYWx1ZSA6IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlzTXVsdGlWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBsaXN0aW5nRmllbGRzVmFsdWVzW2l0ZW0udHlwZU5hbWVdID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgdW5TZWxlY3RJbmRleCA9IGl0ZW0ubGlzdFNldHRpbmdzLmxlbmd0aCA+IDAgPyBpdGVtLmxpc3RTZXR0aW5ncy5maW5kSW5kZXgobyA9PiAoby5pc0VuYWJsZSA9PSAxKSkgOiBudWxsO1xuICAgICAgICAgICAgICBsaXN0aW5nRmllbGRzVmFsdWVzW2l0ZW0udHlwZU5hbWVdID0gaXRlbS5saXN0U2V0dGluZ3NbdW5TZWxlY3RJbmRleF0uaWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGJlZFR5cGUgJiYgYmVkVHlwZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYmVkVHlwZS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgYmVkVHlwZVZhbHVlID0gYmVkVHlwZS5sZW5ndGggPiAwID8gYmVkVHlwZVswXS5pZCA6IG51bGw7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWluaXRpYWxpemUgdGhlIGZvcm0gdmFsdWVzXG4gICAgICAgIGlmIChzdGVwID09PSBcIjJcIiAmJiAhc3RlcDJEYXRhSXNMb2FkZWQpIHtcbiAgICAgICAgICBsZXQgdXBkYXRlZFZhbHVlc1N0ZXAyID0gT2JqZWN0LmFzc2lnbih7fSwgbGlzdGluZ0ZpZWxkc1ZhbHVlcywgeyBpZDogbGlzdElkIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKGluaXRpYWxpemUoXCJMaXN0UGxhY2VTdGVwMlwiLCB1cGRhdGVkVmFsdWVzU3RlcDIsIHRydWUpKTtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19GSUVMRFNfSU5USUFMX1ZBTFVFU19TVUNDRVNTLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAyOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IFwiM1wiICYmICFzdGVwM0RhdGFJc0xvYWRlZCkge1xuICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWVzU3RlcDMgPSBPYmplY3QuYXNzaWduKHt9LCBsaXN0aW5nRmllbGRzVmFsdWVzLCB7IGlkOiBsaXN0SWQgfSwgeyBjdXJyZW5jeTogYmFzZUN1cnJlbmN5IH0sIHsgYm9va2luZ1R5cGU6ICdpbnN0YW50JyB9LCB7IG1heERheXNOb3RpY2U6ICdhdmFpbGFibGUnIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKGluaXRpYWxpemUoXCJMaXN0UGxhY2VTdGVwM1wiLCB1cGRhdGVkVmFsdWVzU3RlcDMsIHRydWUpKTtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19GSUVMRFNfSU5USUFMX1ZBTFVFU19TVUNDRVNTLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAzOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghc3RlcDFEYXRhSXNMb2FkZWQgfHwgaXNPdGhlclBhZ2UpIHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWVzU3RlcDEgPSBPYmplY3QuYXNzaWduKHt9LCBsaXN0aW5nRmllbGRzVmFsdWVzLCB7IGJlZFR5cGVzOiBbeyBiZWRDb3VudDogMSwgYmVkVHlwZTogYmVkVHlwZVZhbHVlIH1dIH0sIHsgcmVzaWRlbmNlVHlwZTogXCIxXCIgfSk7XG4gICAgICAgICAgICBkaXNwYXRjaChpbml0aWFsaXplKFwiTGlzdFBsYWNlU3RlcDFcIiwgdXBkYXRlZFZhbHVlc1N0ZXAxLCB0cnVlKSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX1NVQ0NFU1MsXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXNMb2FkZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvU2l0ZUltYWdlcy9sYXJnZV9ub19pbWFnZS5qcGVnPzYzZGM2YTJmXCI7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7XG4gIEdFVF9MSVNUSU5HX0RBVEFfU1RBUlQsXG4gIEdFVF9MSVNUSU5HX0RBVEFfU1VDQ0VTUyxcbiAgR0VUX0xJU1RJTkdfREFUQV9FUlJPUlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5ICgkbGlzdElkOlN0cmluZyEsICRwcmV2aWV3OiBCb29sZWFuKSB7XG4gICAgVXNlckxpc3RpbmcgKGxpc3RJZDokbGlzdElkLCBwcmV2aWV3OiAkcHJldmlldykge1xuICAgICAgaWRcbiAgICAgIHVzZXJJZFxuICAgICAgY291bnRyeVxuICAgICAgc3RyZWV0XG4gICAgICBidWlsZGluZ05hbWVcbiAgICAgIGNpdHlcbiAgICAgIHN0YXRlXG4gICAgICB6aXBjb2RlXG4gICAgICBsYXRcbiAgICAgIGxuZ1xuICAgICAgaXNNYXBUb3VjaGVkXG4gICAgICBiZWRyb29tc1xuICAgICAgcmVzaWRlbmNlVHlwZVxuICAgICAgYmVkc1xuICAgICAgcGVyc29uQ2FwYWNpdHlcbiAgICAgIGJhdGhyb29tc1xuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICAgIGVtYWlsXG4gICAgICAgIHVzZXJCYW5TdGF0dXNcbiAgICAgICAgcHJvZmlsZXtcbiAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgICBsYXN0TmFtZVxuICAgICAgICAgIGRhdGVPZkJpcnRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVzZXJBbWVuaXRpZXMge1xuICAgICAgICBhbWVuaXRpZXNJZFxuICAgICAgICBsaXN0c2V0dGluZ3N7XG4gICAgICAgICAgaXRlbU5hbWVcbiAgICAgICAgICBzZXR0aW5nc1R5cGUge1xuICAgICAgICAgICAgdHlwZU5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVzZXJTYWZldHlBbWVuaXRpZXMge1xuICAgICAgICBzYWZldHlBbWVuaXRpZXNJZFxuICAgICAgICBsaXN0c2V0dGluZ3N7XG4gICAgICAgICAgaXRlbU5hbWVcbiAgICAgICAgICBzZXR0aW5nc1R5cGUge1xuICAgICAgICAgICAgdHlwZU5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVzZXJTcGFjZXMge1xuICAgICAgICBzcGFjZXNJZFxuICAgICAgICBsaXN0c2V0dGluZ3N7XG4gICAgICAgICAgaXRlbU5hbWVcbiAgICAgICAgICBzZXR0aW5nc1R5cGUge1xuICAgICAgICAgICAgdHlwZU5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldHRpbmdzRGF0YSB7XG4gICAgICAgIGlkXG4gICAgICAgIHNldHRpbmdzSWRcbiAgICAgICAgbGlzdHNldHRpbmdzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgc2V0dGluZ3NUeXBlIHtcbiAgICAgICAgICAgIHR5cGVOYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1c2VyQmVkc1R5cGVze1xuICAgICAgICBpZFxuICAgICAgICBsaXN0SWRcbiAgICAgICAgYmVkQ291bnRcbiAgICAgICAgYmVkVHlwZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0aW5nRGF0YShsaXN0SWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NUQVJULFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gZ2V0IGxpc3RpbmcgZGF0YVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7IGxpc3RJZCwgcHJldmlldzogdHJ1ZSB9LFxuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgICB9KTtcbiAgICAgIGxldCBmb3JtVmFsdWVzID0gbnVsbDtcbiAgICAgIGxldCBzZXR0aW5nRmllbGRzRGF0YSA9IHt9O1xuICAgICAgY29uc3QgYW1lbml0aWVzID0gW107XG4gICAgICBjb25zdCBzYWZldHlBbWVuaXRpZXMgPSBbXTtcbiAgICAgIGNvbnN0IHNwYWNlcyA9IFtdO1xuXG4gICAgICBsZXQgYmVkVHlwZXMgPSBbXTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuVXNlckxpc3RpbmcpIHtcbiAgICAgICAgLy8gUHJlcGFyaW5nIGZvciBsaXN0IHNldHRpbmdzIGRhdGFcbiAgICAgICAgZGF0YS5Vc2VyTGlzdGluZy5zZXR0aW5nc0RhdGEubWFwKChpdGVtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNldHRpbmdGaWVsZHNEYXRhW2l0ZW0ubGlzdHNldHRpbmdzLnNldHRpbmdzVHlwZS50eXBlTmFtZV0gPSBpdGVtLnNldHRpbmdzSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBQcmVwYXJpbmcgZm9yIHVzZXIgYW1lbml0aWVzXG4gICAgICAgIGlmIChkYXRhLlVzZXJMaXN0aW5nLnVzZXJBbWVuaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGEuVXNlckxpc3RpbmcudXNlckFtZW5pdGllcy5tYXAoKGl0ZW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBhbWVuaXRpZXMucHVzaChwYXJzZUludChpdGVtLmFtZW5pdGllc0lkKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0dGluZ0ZpZWxkc0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5nRmllbGRzRGF0YSwgeyBhbWVuaXRpZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJlcGFyaW5nIGZvciB1c2VyIHNhZmV0eSBhbWVuaXRpZXNcbiAgICAgICAgaWYgKGRhdGEuVXNlckxpc3RpbmcudXNlclNhZmV0eUFtZW5pdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZGF0YS5Vc2VyTGlzdGluZy51c2VyU2FmZXR5QW1lbml0aWVzLm1hcCgoaXRlbSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHNhZmV0eUFtZW5pdGllcy5wdXNoKHBhcnNlSW50KGl0ZW0uc2FmZXR5QW1lbml0aWVzSWQpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXR0aW5nRmllbGRzRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdGaWVsZHNEYXRhLCB7IHNhZmV0eUFtZW5pdGllcyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmVwYXJpbmcgZm9yIFVzZXIgU3BhY2VzXG4gICAgICAgIGlmIChkYXRhLlVzZXJMaXN0aW5nLnVzZXJTcGFjZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGEuVXNlckxpc3RpbmcudXNlclNwYWNlcy5tYXAoKGl0ZW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaChwYXJzZUludChpdGVtLnNwYWNlc0lkKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0dGluZ0ZpZWxkc0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5nRmllbGRzRGF0YSwgeyBzcGFjZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiZWRUeXBlcyA9IGRhdGEuVXNlckxpc3RpbmcudXNlckJlZHNUeXBlcztcbiAgICAgICAgc2V0dGluZ0ZpZWxkc0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5nRmllbGRzRGF0YSwgeyBiZWRUeXBlcyB9KTtcblxuICAgICAgICAvLyBDb21iaW5pbmcgdmFsdWVzIGZvciBpbml0aWFsaXppbmcgdGhlIGVkaXQgZm9ybVxuICAgICAgICBmb3JtVmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YS5Vc2VyTGlzdGluZywgc2V0dGluZ0ZpZWxkc0RhdGEpO1xuICAgICAgICBpZiAoZm9ybVZhbHVlcyAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gUmVpbml0aWFsaXplIHRoZSBmb3JtIHZhbHVlc1xuICAgICAgICAgIGRpc3BhdGNoKGluaXRpYWxpemUoJ0xpc3RQbGFjZVN0ZXAxJywgZm9ybVZhbHVlcywgdHJ1ZSkpO1xuICAgICAgICAgIC8vIERpc3BhdGNoIGEgc3VjY2VzcyBhY3Rpb25cbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NVQ0NFU1MsXG4gICAgICAgICAgICBzdGVwMURhdGFJc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlzRXhpc3RpbmdMaXN0OiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHtcbiAgR0VUX0xJU1RJTkdfU1RFUFNfREFUQV9TVEFSVCxcbiAgR0VUX0xJU1RJTkdfU1RFUFNfREFUQV9TVUNDRVNTLFxuICBHRVRfTElTVElOR19TVEVQU19EQVRBX0VSUk9SLFxuICBSRVNFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1RBUlQsXG4gIFJFU0VUX0xJU1RJTkdfU1RFUFNfREFUQV9TVUNDRVNTLFxuICBSRVNFVF9MSVNUSU5HX1NURVBTX0RBVEFfRVJST1Jcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbi8vIEFjdGlvblxuLy8gRm9yIFN0ZXAjMVxuaW1wb3J0IHsgZ2V0TGlzdGluZ0RhdGEgfSBmcm9tICcuL2dldExpc3RpbmcnO1xuLy8gRm9yIFN0ZXAjMlxuaW1wb3J0IHsgZ2V0TGlzdGluZ0RhdGFTdGVwMiB9IGZyb20gJy4vZ2V0TGlzdGluZ0RhdGFTdGVwMic7XG5pbXBvcnQgeyBnZXRMaXN0UGhvdG9zIH0gZnJvbSAnLi9nZXRMaXN0UGhvdG9zJztcbmltcG9ydCB7IGdldExpc3RpbmdEYXRhU3RlcDMgfSBmcm9tICcuL2dldExpc3RpbmdEYXRhU3RlcDMnO1xuaW1wb3J0IHsgZ2V0TGlzdGluZ0ZpZWxkc1ZhbHVlcyB9IGZyb20gJy4vZ2V0TGlzdGluZ0ZpZWxkc1ZhbHVlcyc7XG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgKCRsaXN0SWQ6U3RyaW5nISkge1xuICAgIHNob3dMaXN0aW5nU3RlcHMgKGxpc3RJZDokbGlzdElkKSB7XG4gICAgICBpZFxuICAgICAgbGlzdElkXG4gICAgICBzdGVwMVxuICAgICAgc3RlcDJcbiAgICAgIHN0ZXAzXG4gICAgICBzdGVwNFxuICAgICAgbGlzdGluZyB7XG4gICAgICAgIGlkXG4gICAgICAgIGlzUmVhZHlcbiAgICAgICAgaXNQdWJsaXNoZWRcbiAgICAgICAgbGlzdEFwcHJvdmFsU3RhdHVzXG4gICAgICAgIHVzZXIge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgICB1c2VyQmFuU3RhdHVzXG4gICAgICAgICAgdXNlckRlbGV0ZWRBdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RpbmdTdGVwcyhsaXN0SWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHRVRfTElTVElOR19TVEVQU19EQVRBX1NUQVJULFxuICAgICAgbGlzdGluZ1N0ZXBzOiB1bmRlZmluZWQsXG4gICAgICBpc0V4aXN0aW5nTGlzdDogdW5kZWZpbmVkLFxuICAgICAgaXNMb2NhdGlvbkNob3NlbjogdW5kZWZpbmVkLFxuICAgICAgc3RlcDFEYXRhSXNMb2FkZWQ6IHVuZGVmaW5lZCxcbiAgICAgIHN0ZXAyRGF0YUlzTG9hZGVkOiB1bmRlZmluZWQsXG4gICAgICBzdGVwM0RhdGFJc0xvYWRlZDogdW5kZWZpbmVkLFxuICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAyOiB1bmRlZmluZWQsXG4gICAgICBpbml0aWFsVmFsdWVzTG9hZGVkU3RlcDM6IHVuZGVmaW5lZCxcbiAgICAgIHBob3Rvc0NvdW50OiB1bmRlZmluZWQsXG4gICAgICBsaXN0UGhvdG9zOiB1bmRlZmluZWQsXG4gICAgICBzdGVwc0xvYWRpbmc6IHRydWUsXG4gICAgfSk7XG4gICAgLy8gRm9yIEFkZGluZyBuZXcgbGlzdFxuICAgIGlmIChsaXN0SWQgPT09IHVuZGVmaW5lZCB8fCBsaXN0SWQgPT09IG51bGwpIHtcbiAgICAgIC8vIExvYWQgaW5pdGlhbCBkYXRhIGZvciBzdGVwIzFcbiAgICAgIGRpc3BhdGNoKGdldExpc3RpbmdGaWVsZHNWYWx1ZXMoXCIxXCIpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGdldCBsaXN0aW5nIGRhdGFcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknXG4gICAgICB9KTtcbiAgICAgIC8vIENoZWNrIGlmIGluaXRpYWwgdmFsdWVzIGFscmVhZHkgdXBkYXRlZCB0byB0aGUgc3RvcmVcbiAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZXNMb2FkZWQgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uLmluaXRpYWxWYWx1ZXNMb2FkZWQ7XG4gICAgICBjb25zdCBpbml0aWFsVmFsdWVzTG9hZGVkU3RlcDIgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uLmluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMjtcbiAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMyA9IGdldFN0YXRlKCkubG9jYXRpb24uaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAzO1xuICAgICAgLy8gQ2hlY2sgaWYgbGlzdCBkYXRhIGFscmVhZHkgdXBkYXRlZCB0byB0aGUgc3RvcmVcbiAgICAgIGNvbnN0IHN0ZXAxRGF0YUlzTG9hZGVkID0gZ2V0U3RhdGUoKS5sb2NhdGlvbi5zdGVwMURhdGFJc0xvYWRlZDtcbiAgICAgIGNvbnN0IHN0ZXAyRGF0YUlzTG9hZGVkID0gZ2V0U3RhdGUoKS5sb2NhdGlvbi5zdGVwMkRhdGFJc0xvYWRlZDtcbiAgICAgIGNvbnN0IHN0ZXAzRGF0YUlzTG9hZGVkID0gZ2V0U3RhdGUoKS5sb2NhdGlvbi5zdGVwM0RhdGFJc0xvYWRlZDtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuc2hvd0xpc3RpbmdTdGVwcykge1xuICAgICAgICAvLyBBc3NpZ24gc3RlcHMgZGF0YSB0byBhIGNvbnN0XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gZGF0YS5zaG93TGlzdGluZ1N0ZXBzO1xuICAgICAgICAvLyBDaGVjayBpZiBTdGVwMURhdGEgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgaWYgKHN0ZXAxRGF0YUlzTG9hZGVkICE9IHRydWUpIHtcbiAgICAgICAgICAvLyBMb2FkIGRhdGEgaWYgU3RlcCMxIGlzIGVpdGhlciBhY3RpdmUgb3IgY29tcGxldGVkIFxuICAgICAgICAgIGlmIChzdGVwcy5zdGVwMSA9PT0gXCJhY3RpdmVcIiB8fCBzdGVwcy5zdGVwMSA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0TGlzdGluZ0RhdGEobGlzdElkKSk7XG4gICAgICAgICAgICAvLyBMb2FkIHBob3RvcyBvZiB0aGUgbGlzdGluZyBmb3Igc3RlcCMyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0UGhvdG9zKGxpc3RJZCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5pdGlhbFZhbHVlc0xvYWRlZCAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgIC8vIExvYWQgaW5pdGlhbCBkYXRhIGZvciBzdGVwIzFcbiAgICAgICAgICAgICAgZGlzcGF0Y2goZ2V0TGlzdGluZ0ZpZWxkc1ZhbHVlcyhcIjFcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBTdGVwMkRhdGEgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgaWYgKHN0ZXAyRGF0YUlzTG9hZGVkICE9IHRydWUpIHtcbiAgICAgICAgICBpZiAoc3RlcHMuc3RlcDIgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldExpc3RpbmdEYXRhU3RlcDIobGlzdElkKSk7XG4gICAgICAgICAgICAvLyBMb2FkIHBob3RvcyBvZiB0aGUgbGlzdGluZyBmb3Igc3RlcCMyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0UGhvdG9zKGxpc3RJZCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAyICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgLy8gTG9hZCBpbml0aWFsIGRhdGEgZm9yIHN0ZXAjMlxuICAgICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0aW5nRmllbGRzVmFsdWVzKFwiMlwiLCBsaXN0SWQpKTtcbiAgICAgICAgICAgICAgLy8gTG9hZCBwaG90b3Mgb2YgdGhlIGxpc3RpbmcgZm9yIHN0ZXAjMlxuICAgICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0UGhvdG9zKGxpc3RJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBTdGVwM0RhdGEgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgaWYgKHN0ZXAzRGF0YUlzTG9hZGVkICE9IHRydWUpIHtcbiAgICAgICAgICBpZiAoc3RlcHMuc3RlcDMgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldExpc3RpbmdEYXRhU3RlcDMobGlzdElkKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbml0aWFsVmFsdWVzTG9hZGVkU3RlcDMgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvLyBMb2FkIGluaXRpYWwgZGF0YSBmb3Igc3RlcCMzXG4gICAgICAgICAgICAgIGRpc3BhdGNoKGdldExpc3RpbmdGaWVsZHNWYWx1ZXMoXCIzXCIsIGxpc3RJZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVcGRhdGUgTGlzdCBTdGVwcyBvbiB0aGUgc3RvcmUgJiBtYXJrIGl0IGFzIGV4aXN0aW5nIGxpc3RcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1VDQ0VTUyxcbiAgICAgICAgICBsaXN0aW5nU3RlcHM6IGRhdGEuc2hvd0xpc3RpbmdTdGVwcyxcbiAgICAgICAgICBpc0V4aXN0aW5nTGlzdDogdHJ1ZSxcbiAgICAgICAgICBzdGVwc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHRVRfTElTVElOR19TVEVQU19EQVRBX0VSUk9SLFxuICAgICAgICBzdGVwc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TGlzdGluZ1N0ZXBzKCkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFU0VUX0xJU1RJTkdfU1RFUFNfREFUQV9TVEFSVCxcbiAgICAgIHN0ZXBzTG9hZGluZzogZmFsc2UsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2goaW5pdGlhbGl6ZSgnTGlzdFBsYWNlU3RlcDEnLCB7fSkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goaW5pdGlhbGl6ZSgnTGlzdFBsYWNlU3RlcDInLCB7fSkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goaW5pdGlhbGl6ZSgnTGlzdFBsYWNlU3RlcDMnLCB7fSkpO1xuXG4gICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFU0VUX0xJU1RJTkdfU1RFUFNfREFUQV9TVUNDRVNTLFxuICAgICAgICBsaXN0aW5nU3RlcHM6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNFeGlzdGluZ0xpc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNMb2NhdGlvbkNob3NlbjogdW5kZWZpbmVkLFxuICAgICAgICBzdGVwMURhdGFJc0xvYWRlZDogdW5kZWZpbmVkLFxuICAgICAgICBzdGVwMkRhdGFJc0xvYWRlZDogdW5kZWZpbmVkLFxuICAgICAgICBzdGVwM0RhdGFJc0xvYWRlZDogdW5kZWZpbmVkLFxuICAgICAgICBpbml0aWFsVmFsdWVzTG9hZGVkU3RlcDI6IHVuZGVmaW5lZCxcbiAgICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAzOiB1bmRlZmluZWQsXG4gICAgICAgIHBob3Rvc0NvdW50OiB1bmRlZmluZWQsXG4gICAgICAgIGxpc3RQaG90b3M6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RlcHNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFU0VUX0xJU1RJTkdfU1RFUFNfREFUQV9FUlJPUixcbiAgICAgICAgc3RlcHNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB7XG4gIEdFVF9MSVNUSU5HX0RBVEFfU1RFUDJfU1RBUlQsXG4gIEdFVF9MSVNUSU5HX0RBVEFfU1RFUDJfU1VDQ0VTUyxcbiAgR0VUX0xJU1RJTkdfREFUQV9TVEVQMl9FUlJPUlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSAoJGxpc3RJZDpTdHJpbmchLCAkcHJldmlldzogQm9vbGVhbikge1xuICAgIFVzZXJMaXN0aW5nIChsaXN0SWQ6JGxpc3RJZCwgcHJldmlldzogJHByZXZpZXcpIHtcbiAgICAgIGlkXG4gICAgICB1c2VySWRcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY292ZXJQaG90b1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RpbmdEYXRhU3RlcDIobGlzdElkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0xJU1RJTkdfREFUQV9TVEVQMl9TVEFSVCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gZ2V0IGxpc3RpbmcgZGF0YVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7IGxpc3RJZCwgcHJldmlldzogdHJ1ZSB9LFxuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgICB9KTtcblxuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLlVzZXJMaXN0aW5nKSB7XG4gICAgICAgIC8vIFJlaW5pdGlhbGl6ZSB0aGUgZm9ybSB2YWx1ZXNcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goaW5pdGlhbGl6ZSgnTGlzdFBsYWNlU3RlcDInLCBkYXRhLlVzZXJMaXN0aW5nLCB0cnVlKSk7XG5cbiAgICAgICAgLy8gRGlzcGF0Y2ggYSBzdWNjZXNzIGFjdGlvblxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfREFUQV9TVEVQMl9TVUNDRVNTLFxuICAgICAgICAgIHN0ZXAyRGF0YUlzTG9hZGVkOiB0cnVlLFxuICAgICAgICAgIGlzRXhpc3RpbmdMaXN0OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAyX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB7XG4gIFNIT1dfTElTVF9QSE9UT1NfU1RBUlQsXG4gIFNIT1dfTElTVF9QSE9UT1NfU1VDQ0VTUyxcbiAgU0hPV19MSVNUX1BIT1RPU19FUlJPUlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgbGlzdFBob3RvcygkbGlzdElkOkludCEpIHtcbiAgICBTaG93TGlzdFBob3RvcyAobGlzdElkOiRsaXN0SWQpIHtcbiAgICAgIGlkXG4gICAgICBsaXN0SWRcbiAgICAgIG5hbWVcbiAgICAgIHR5cGVcbiAgICAgIGlzQ292ZXJcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0UGhvdG9zKGxpc3RJZCkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTSE9XX0xJU1RfUEhPVE9TX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBpZCA9IE51bWJlcihsaXN0SWQpO1xuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGdldCBsaXN0aW5nIGRhdGFcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQ6IGlkIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgfSk7XG5cblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5TaG93TGlzdFBob3Rvcykge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogU0hPV19MSVNUX1BIT1RPU19TVUNDRVNTLFxuICAgICAgICAgIGxpc3RQaG90b3M6IGRhdGEuU2hvd0xpc3RQaG90b3MsXG4gICAgICAgICAgcGhvdG9zQ291bnQ6IGRhdGEuU2hvd0xpc3RQaG90b3MubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNIT1dfTElTVF9QSE9UT1NfRVJST1IsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNIT1dfTElTVF9QSE9UT1NfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1xuICBHRVRfTElTVElOR19EQVRBX1NURVAzX1NUQVJULFxuICBHRVRfTElTVElOR19EQVRBX1NURVAzX1NVQ0NFU1MsXG4gIEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfRVJST1Jcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZSwgY2hhbmdlIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSAoJGxpc3RJZDpTdHJpbmchLCAkcHJldmlldzogQm9vbGVhbikge1xuICAgIFVzZXJMaXN0aW5nIChsaXN0SWQ6JGxpc3RJZCwgcHJldmlldzogJHByZXZpZXcpIHtcbiAgICAgIGlkXG4gICAgICB1c2VySWRcbiAgICAgIGJvb2tpbmdUeXBlXG4gICAgICBpc1B1Ymxpc2hlZFxuICAgICAgbGlzdEFwcHJvdmFsU3RhdHVzXG4gICAgICBob3VzZVJ1bGVzIHtcbiAgICAgICAgaG91c2VSdWxlc0lkXG4gICAgICB9XG4gICAgICBsaXN0aW5nRGF0YSB7XG4gICAgICAgIGJvb2tpbmdOb3RpY2VUaW1lLFxuICAgICAgICBjaGVja0luU3RhcnQsXG4gICAgICAgIGNoZWNrSW5FbmQsXG4gICAgICAgIG1heERheXNOb3RpY2UsXG4gICAgICAgIG1pbk5pZ2h0LFxuICAgICAgICBtYXhOaWdodCxcbiAgICAgICAgYmFzZVByaWNlLFxuICAgICAgICBjbGVhbmluZ1ByaWNlLFxuICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgd2Vla2x5RGlzY291bnQsXG4gICAgICAgIG1vbnRobHlEaXNjb3VudCxcbiAgICAgICAgY2FuY2VsbGF0aW9uUG9saWN5LFxuICAgICAgICB0YXhSYXRlXG4gICAgICB9XG4gICAgICBibG9ja2VkRGF0ZXMge1xuICAgICAgICBibG9ja2VkRGF0ZXNcbiAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICBjYWxlbmRhclN0YXR1c1xuICAgICAgICBpc1NwZWNpYWxQcmljZVxuICAgICAgfVxuICAgICAgY2FsZW5kYXJzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICB1cmxcbiAgICAgICAgbGlzdElkXG4gICAgICAgIHN0YXR1c1xuICAgICAgfVxuICAgICAgbGlzdEJsb2NrZWRQcmljZSB7XG4gICAgICAgICAgbGlzdElkXG4gICAgICAgICAgY2FsZW5kYXJTdGF0dXNcbiAgICAgICAgICBpc1NwZWNpYWxQcmljZVxuICAgICAgICAgIGJsb2NrZWREYXRlc1xuICAgICAgICAgIGNhbGVuZGFySWRcbiAgICAgICAgICByZXNlcnZhdGlvbklkXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdGluZ0RhdGFTdGVwMyhsaXN0SWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAzX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBmb3JtVmFsdWVzID0gbnVsbDtcbiAgICAgIGxldCBzZXR0aW5nRmllbGRzRGF0YSA9IHt9O1xuICAgICAgY29uc3QgaG91c2VSdWxlcyA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlZEJsb2NrZWREYXRlcyA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlZERpc2FibGVkRGF0ZXMgPSBbXTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRBdmFpbGFibGVEYXRlcyA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlZEF2YWlsYWJsZURhdGVzUHJpY2VzID0gW107XG5cbiAgICAgIGxldCBsaXN0RGF0YSA9IHt9O1xuICAgICAgbGV0IGNhbGVuZGFycyA9IHt9O1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gZ2V0IGxpc3RpbmcgZGF0YVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7IGxpc3RJZCwgcHJldmlldzogdHJ1ZSB9LFxuICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgICB9KTtcblxuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLlVzZXJMaXN0aW5nKSB7XG4gICAgICAgIC8vIFByZXBhcmluZyBMaXN0IGRhdGFcbiAgICAgICAgbGlzdERhdGEgPSBkYXRhLlVzZXJMaXN0aW5nLmxpc3RpbmdEYXRhO1xuICAgICAgICBjYWxlbmRhcnMgPSBkYXRhLlVzZXJMaXN0aW5nLmNhbGVuZGFycztcblxuICAgICAgICAvLyBQcmVwYXJpbmcgZm9yIGhvdXNlIHJ1bGVzXG4gICAgICAgIGlmIChkYXRhLlVzZXJMaXN0aW5nLmhvdXNlUnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGEuVXNlckxpc3RpbmcuaG91c2VSdWxlcy5tYXAoKGl0ZW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBob3VzZVJ1bGVzLnB1c2gocGFyc2VJbnQoaXRlbS5ob3VzZVJ1bGVzSWQpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXR0aW5nRmllbGRzRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGxpc3REYXRhLCB7IGhvdXNlUnVsZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmVwYXJpbmcgZm9yIGJsb2NrZWQgZGF0ZXNcbiAgICAgICAgaWYgKGRhdGEuVXNlckxpc3RpbmcuYmxvY2tlZERhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhLlVzZXJMaXN0aW5nLmJsb2NrZWREYXRlcy5tYXAoKGl0ZW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChpdGVtLmJsb2NrZWREYXRlcyk7XG4gICAgICAgICAgICBpZiAoaXRlbS5yZXNlcnZhdGlvbklkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdXBkYXRlZERpc2FibGVkRGF0ZXMucHVzaChuZXcgRGF0ZShkYXRlKSk7XG4gICAgICAgICAgICB9IGlmIChpdGVtLmNhbGVuZGFyU3RhdHVzICYmIGl0ZW0uY2FsZW5kYXJTdGF0dXMgPT09ICdhdmFpbGFibGUnKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtLmlzU3BlY2lhbFByaWNlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZEF2YWlsYWJsZURhdGVzLnB1c2gobmV3IERhdGUoZGF0ZSkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRBdmFpbGFibGVEYXRlc1ByaWNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUpLFxuICAgICAgICAgICAgICAgICAgaXNTcGVjaWFsUHJpY2U6IGl0ZW0uaXNTcGVjaWFsUHJpY2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXBkYXRlZEJsb2NrZWREYXRlcy5wdXNoKG5ldyBEYXRlKGRhdGUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldHRpbmdGaWVsZHNEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbGlzdERhdGEsIHNldHRpbmdGaWVsZHNEYXRhLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNhYmxlZERhdGVzOiB1cGRhdGVkRGlzYWJsZWREYXRlcyxcbiAgICAgICAgICAgICAgYmxvY2tlZERhdGVzOiB1cGRhdGVkQmxvY2tlZERhdGVzLFxuICAgICAgICAgICAgICBhdmFpbGFibGVEYXRlczogdXBkYXRlZEF2YWlsYWJsZURhdGVzLFxuICAgICAgICAgICAgICBhdmFpbGFibGVEYXRlc1ByaWNlczogdXBkYXRlZEF2YWlsYWJsZURhdGVzUHJpY2VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBkaXNwYXRjaChjaGFuZ2UoJ0xpc3RQbGFjZVN0ZXAzJywgJ2NhbGVuZGFycycsIGNhbGVuZGFycykpO1xuICAgICAgICBpZiAodXBkYXRlZEJsb2NrZWREYXRlcykge1xuICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKGNoYW5nZSgnTGlzdFBsYWNlU3RlcDMnLCAnYmxvY2tlZERhdGVzJywgdXBkYXRlZEJsb2NrZWREYXRlcykpO1xuICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZWRBdmFpbGFibGVEYXRlcykge1xuICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKGNoYW5nZSgnTGlzdFBsYWNlU3RlcDMnLCAnYmxvY2tlZERhdGVzJywgdXBkYXRlZEF2YWlsYWJsZURhdGVzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodXBkYXRlZEF2YWlsYWJsZURhdGVzUHJpY2VzKSB7XG4gICAgICAgICAgYXdhaXQgZGlzcGF0Y2goY2hhbmdlKCdMaXN0UGxhY2VTdGVwMycsICdibG9ja2VkRGF0ZXMnLCB1cGRhdGVkQXZhaWxhYmxlRGF0ZXNQcmljZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1WYWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLlVzZXJMaXN0aW5nLCBzZXR0aW5nRmllbGRzRGF0YSwgbGlzdERhdGEsIGNhbGVuZGFycyk7XG5cbiAgICAgICAgLy8gUmVpbml0aWFsaXplIHRoZSBmb3JtIHZhbHVlc1xuICAgICAgICBhd2FpdCBkaXNwYXRjaChpbml0aWFsaXplKCdMaXN0UGxhY2VTdGVwMycsIGZvcm1WYWx1ZXMpKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBhIHN1Y2Nlc3MgYWN0aW9uXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAzX1NVQ0NFU1MsXG4gICAgICAgICAgc3RlcDNEYXRhSXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgaXNFeGlzdGluZ0xpc3Q6IHRydWUsXG4gICAgICAgICAgY2FsZW5kYXJzOiBkYXRhLlVzZXJMaXN0aW5nLmNhbGVuZGFyc1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAzX0VSUk9SLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAzX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7O0FBRkE7QUFFQTtBQU1BO0FBRUE7QUEwQkE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWRBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFoQkE7QUFBQTtBQWVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE3RUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQTlFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBeUZBOzs7Ozs7O0FDL0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUE0RUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBUEE7QUFBQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQTlEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBL0RBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUF5RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBd0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBbEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQXhCQTtBQUFBO0FBdUJBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUF2RkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBd0ZBO0FBQ0E7QUFDQTtBQUZBO0FBeEZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFnR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFDQTtBQUZBO0FBQ0E7QUEzQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBa0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5S0E7QUFDQTs7Ozs7OztBQUZBO0FBRUE7QUFNQTtBQUVBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBUkE7QUFBQTtBQU9BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBMUJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUVBO0FBTUE7QUFZQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQVZBO0FBQUE7QUFTQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBM0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUE1QkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXVDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTs7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFtREE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaEJBO0FBQUE7QUFtQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQW5CQTtBQUFBO0FBa0JBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFqRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBMkVBO0FBQ0E7QUE1RUE7QUFBQTtBQUNBO0FBREE7QUFnRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFqRkE7QUFBQTtBQUNBO0FBREE7QUF3RkE7QUFDQTtBQURBO0FBQ0E7QUF6RkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE2RkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBN0ZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUF1R0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==