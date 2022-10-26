(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["siteadmin-homeBanner~siteadmin-popularLocation"],{

/***/ "8Aos":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBannerUploaderLoader", function() { return startBannerUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endBannerUploaderLoader", function() { return endBannerUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadHomeBanner", function() { return doUploadHomeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveHomeBanner", function() { return doRemoveHomeBanner; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y0DV");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var _getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oLiR");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // Toaster

 // To Refresh the verification status

var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    {\n        getHomeBanner {\n            id\n            name\n        }\n    }\n"])));
function startBannerUploaderLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_BANNER_UPLOAD_LOADER_START"],
      payload: {
        bannerUploaderLoading: true
      }
    });
  };
}
function endBannerUploaderLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["IMAGE_BANNER_UPLOAD_LOADER_END"],
      payload: {
        bannerUploaderLoading: false
      }
    });
  };
}
function doUploadHomeBanner(name, oldImage) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_START"]
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            mutation addHomeBanner($name: String!){\n                addHomeBanner(name: $name) {\n                    status\n                }\n            }\n        "])));
              _context.prev = 3;
              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  name: name
                },
                refetchQueries: [{
                  query: query
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!(data.addHomeBanner.status === "success")) {
                _context.next = 15;
                break;
              }

              react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Upload Home Banner", "Image Upload successfully!");
              _context.next = 12;
              return dispatch(Object(_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__["getHomeBannerImages"])());

            case 12:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_SUCCESS"],
                payload: {
                  bannerUploaderLoading: false
                }
              });
              _context.next = 16;
              break;

            case 15:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_ERROR"],
                payload: {
                  status: data.addHomeBanner.status,
                  bannerUploaderLoading: false
                }
              });

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_HOME_BANNER_ERROR"],
                payload: {
                  error: _context.t0,
                  bannerUploaderLoading: false
                }
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 18]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveHomeBanner(_x4) {
  return _doRemoveHomeBanner.apply(this, arguments);
}

function _doRemoveHomeBanner() {
  _doRemoveHomeBanner = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fileName) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/deleteHomeBanner', {
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
            resp = _context2.sent;
            _context2.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json = _context2.sent;
            status = _yield$resp$json.status;

            if (!status) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", true);

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log('error', _context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _doRemoveHomeBanner.apply(this, arguments);
}

/***/ }),

/***/ "l8VG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHomeBanner", function() { return deleteHomeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBannerStatus", function() { return updateBannerStatus; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WlAH");
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nlne");
/* harmony import */ var _getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oLiR");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manageHomeBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8Aos");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Redirection


 // Toaster



var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  {\n    getHomeBanner {\n      id\n      name\n    }\n  }\n"])));
var mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  mutation deleteHomeBanner($id: Int!) {\n    deleteHomeBanner(id: $id) {\n      status\n    }\n  }\n"])));
function deleteHomeBanner(id, name) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_START"],
                data: id
              });
              _context.prev = 2;
              _context.next = 5;
              return client.mutate({
                mutation: mutation,
                variables: {
                  id: id
                },
                refetchQueries: [{
                  query: query
                }]
              });

            case 5:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!(data.deleteHomeBanner.status == "200")) {
                _context.next = 17;
                break;
              }

              _context.next = 10;
              return dispatch(Object(_getHomeBannerImages__WEBPACK_IMPORTED_MODULE_3__["getHomeBannerImages"])());

            case 10:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_SUCCESS"]
              });
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Delete Home Banner ", "Deleted successfully!");

              if (!(name != null)) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return Object(_manageHomeBanner__WEBPACK_IMPORTED_MODULE_5__["doRemoveHomeBanner"])(name);

            case 15:
              _context.next = 18;
              break;

            case 17:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_ERROR"]
              });

            case 18:
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_HOME_BANNER_ERROR"],
                payload: {
                  error: _context.t0
                }
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 20]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function updateBannerStatus(id, isEnable) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref3) {
      var client, _mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref3.client;
              _context2.prev = 1;
              _mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        mutation updateBannerStatus($id: Int, $isEnable: String) {\n          updateBannerStatus(id: $id, isEnable: $isEnable) {\n            status\n          }\n        }\n      "])));
              _context2.next = 5;
              return client.mutate({
                mutation: _mutation,
                variables: {
                  id: id,
                  isEnable: isEnable
                },
                refetchQueries: [{
                  query: query
                }]
              });

            case 5:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (data.updateBannerStatus.status === "success") {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Success!", "Category status has changed");
              }

              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error("Failed!", "Failed to change Category status");
              return _context2.abrupt("return", false);

            case 14:
              return _context2.abrupt("return", true);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 10]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZWFkbWluLWhvbWVCYW5uZXJ+c2l0ZWFkbWluLXBvcHVsYXJMb2NhdGlvbi5jaHVuay5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUhvbWVCYW5uZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vZGVsZXRlSG9tZUJhbm5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uL2NvcmUvZmV0Y2gnO1xuXG5pbXBvcnQge1xuICAgIFVQTE9BRF9IT01FX0JBTk5FUl9TVEFSVCxcbiAgICBVUExPQURfSE9NRV9CQU5ORVJfU1VDQ0VTUyxcbiAgICBVUExPQURfSE9NRV9CQU5ORVJfRVJST1IsXG4gICAgSU1BR0VfQkFOTkVSX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgSU1BR0VfQkFOTkVSX1VQTE9BRF9MT0FERVJfRU5EXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRIb21lQmFubmVySW1hZ2VzIH0gZnJvbSAnLi4vZ2V0SG9tZUJhbm5lckltYWdlcyc7XG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG4vLyBUbyBSZWZyZXNoIHRoZSB2ZXJpZmljYXRpb24gc3RhdHVzXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgICB7XG4gICAgICAgIGdldEhvbWVCYW5uZXIge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJhbm5lclVwbG9hZGVyTG9hZGVyKCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IElNQUdFX0JBTk5FUl9VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGJhbm5lclVwbG9hZGVyTG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kQmFubmVyVXBsb2FkZXJMb2FkZXIoKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogSU1BR0VfQkFOTkVSX1VQTE9BRF9MT0FERVJfRU5ELFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGJhbm5lclVwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkSG9tZUJhbm5lcihuYW1lLCBvbGRJbWFnZSkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVQTE9BRF9IT01FX0JBTk5FUl9TVEFSVCB9KTtcblxuICAgICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiBhZGRIb21lQmFubmVyKCRuYW1lOiBTdHJpbmchKXtcbiAgICAgICAgICAgICAgICBhZGRIb21lQmFubmVyKG5hbWU6ICRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRhdGEuYWRkSG9tZUJhbm5lci5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJVcGxvYWQgSG9tZSBCYW5uZXJcIiwgXCJJbWFnZSBVcGxvYWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChnZXRIb21lQmFubmVySW1hZ2VzKCkpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUExPQURfSE9NRV9CQU5ORVJfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBMT0FEX0hPTUVfQkFOTkVSX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGRhdGEuYWRkSG9tZUJhbm5lci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJVcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBVUExPQURfSE9NRV9CQU5ORVJfRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9SZW1vdmVIb21lQmFubmVyKGZpbGVOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZGVsZXRlSG9tZUJhbm5lcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbGVOYW1lIH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcblxuaW1wb3J0IHtcbiAgREVMRVRFX0hPTUVfQkFOTkVSX1NUQVJULFxuICBERUxFVEVfSE9NRV9CQU5ORVJfU1VDQ0VTUyxcbiAgREVMRVRFX0hPTUVfQkFOTkVSX0VSUk9SLFxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbi8vIFJlZGlyZWN0aW9uXG5pbXBvcnQgaGlzdG9yeSBmcm9tIFwiLi4vLi4vY29yZS9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRIb21lQmFubmVySW1hZ2VzIH0gZnJvbSBcIi4uL2dldEhvbWVCYW5uZXJJbWFnZXNcIjtcblxuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSBcInJlYWN0LXJlZHV4LXRvYXN0clwiO1xuaW1wb3J0IHsgZG9SZW1vdmVIb21lQmFubmVyIH0gZnJvbSBcIi4vbWFuYWdlSG9tZUJhbm5lclwiO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAge1xuICAgIGdldEhvbWVCYW5uZXIge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVIb21lQmFubmVyKCRpZDogSW50ISkge1xuICAgIGRlbGV0ZUhvbWVCYW5uZXIoaWQ6ICRpZCkge1xuICAgICAgc3RhdHVzXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSG9tZUJhbm5lcihpZCwgbmFtZSkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IERFTEVURV9IT01FX0JBTk5FUl9TVEFSVCxcbiAgICAgIGRhdGE6IGlkLFxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YS5kZWxldGVIb21lQmFubmVyLnN0YXR1cyA9PSBcIjIwMFwiKSB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldEhvbWVCYW5uZXJJbWFnZXMoKSk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBERUxFVEVfSE9NRV9CQU5ORVJfU1VDQ0VTUyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiRGVsZXRlIEhvbWUgQmFubmVyIFwiLCBcIkRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IGRvUmVtb3ZlSG9tZUJhbm5lcihuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IERFTEVURV9IT01FX0JBTk5FUl9FUlJPUixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogREVMRVRFX0hPTUVfQkFOTkVSX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmFubmVyU3RhdHVzKGlkLCBpc0VuYWJsZSkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHVwZGF0ZUJhbm5lclN0YXR1cygkaWQ6IEludCwgJGlzRW5hYmxlOiBTdHJpbmcpIHtcbiAgICAgICAgICB1cGRhdGVCYW5uZXJTdGF0dXMoaWQ6ICRpZCwgaXNFbmFibGU6ICRpc0VuYWJsZSkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGlkLCBpc0VuYWJsZSB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEudXBkYXRlQmFubmVyU3RhdHVzLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzIVwiLCBcIkNhdGVnb3J5IHN0YXR1cyBoYXMgY2hhbmdlZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIVwiLCBcIkZhaWxlZCB0byBjaGFuZ2UgQ2F0ZWdvcnkgc3RhdHVzXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBZkE7QUFBQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUJBO0FBdEJBO0FBQUE7QUFDQTtBQURBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQXhCQTtBQUFBO0FBQ0E7QUFEQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBaENBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUF6Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQUNBO0FBSEE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFXQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFQQTtBQUFBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQWNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFzQkE7QUFDQTtBQURBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBWEE7QUFBQTtBQVVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFvQkE7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXlCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9