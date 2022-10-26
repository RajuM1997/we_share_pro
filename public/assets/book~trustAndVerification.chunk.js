(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book~trustAndVerification"],{

/***/ "D+Zc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectVerification", function() { return disconnectVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailVerification", function() { return emailVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendEmailVerification", function() { return resendEmailVerification; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iwgK");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WlAH");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lqrD");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // Toaster



 // Load account data to update email verification

 // To Refresh the verification status

var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n    query ($userId: String!) {\n        getUserVerifiedInfo (userId: $userId) {\n            id\n            isEmailConfirmed\n            isFacebookConnected\n            isGoogleConnected\n            isIdVerification\n            status\n        }\n    }"])));
function disconnectVerification(item, userId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["UPDATE_VERIFICATION_START"]
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            mutation updateUserVerifiedInfo($item: String!){\n                updateUserVerifiedInfo(item: $item) {\n                    status\n                }\n            }\n        "])));
              _context.prev = 3;
              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  item: item
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    userId: userId
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (data.updateUserVerifiedInfo.status === "success") {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["UPDATE_VERIFICATION_SUCCESS"]
                });
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["UPDATE_VERIFICATION_ERROR"],
                  payload: {
                    status: data.updateUserVerifiedInfo.status
                  }
                });
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["UPDATE_VERIFICATION_ERROR"],
                payload: {
                  error: _context.t0
                }
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function emailVerification(token, email, userId) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref3) {
      var client, emailQuery, _yield$client$query, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["EMAIL_VERIFICATION_START"]
              });
              emailQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            query EmailVerification($token: String!, $email: String!){\n                EmailVerification(token: $token, email: $email) {\n                    userId\n                    status \n                }\n            }\n        "])));
              _context2.prev = 3;
              _context2.next = 6;
              return client.query({
                query: emailQuery,
                variables: {
                  token: token,
                  email: email
                }
              });

            case 6:
              _yield$client$query = _context2.sent;
              data = _yield$client$query.data;

              if (data.EmailVerification.status === "confirmed") {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["EMAIL_VERIFICATION_SUCCESS"]
                });
                dispatch(disconnectVerification('email', userId));
                dispatch(Object(_account__WEBPACK_IMPORTED_MODULE_4__["loadAccount"])());
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["EMAIL_VERIFICATION_ERROR"],
                payload: {
                  error: _context2.t0
                }
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 11]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function resendEmailVerification() {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch, getState, _ref5) {
      var client, resendQuery, _yield$client$query2, data;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["RESEND_EMAIL_VERIFICATION_START"]
              });
              dispatch(Object(_loader_loader__WEBPACK_IMPORTED_MODULE_2__["setLoaderStart"])('resendEmailLoading'));
              resendQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            query ResendConfirmEmail{\n                ResendConfirmEmail {\n                    status\n                    errorMessage\n                }\n            }\n        "])));
              _context3.prev = 4;
              _context3.next = 7;
              return client.query({
                query: resendQuery,
                fetchPolicy: 'network-only'
              });

            case 7:
              _yield$client$query2 = _context3.sent;
              data = _yield$client$query2.data;

              if (data.ResendConfirmEmail && data.ResendConfirmEmail.status == 200) {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Email is sent", "Confirmation link is sent to your email.");
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["RESEND_EMAIL_VERIFICATION_SUCCESS"]
                });
                dispatch(Object(_loader_loader__WEBPACK_IMPORTED_MODULE_2__["setLoaderComplete"])('resendEmailLoading'));
              } else {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed to sent email", "Sorry, something went wrong. Please try again!");
                dispatch(Object(_loader_loader__WEBPACK_IMPORTED_MODULE_2__["setLoaderComplete"])('resendEmailLoading'));
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["RESEND_EMAIL_VERIFICATION_ERROR"],
                  payload: {
                    error: data.ResendConfirmEmail && data.ResendConfirmEmail.errorMessage || 'Something went wrong!'
                  }
                });
              }

              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](4);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["RESEND_EMAIL_VERIFICATION_ERROR"],
                payload: {
                  error: _context3.t0
                }
              });
              dispatch(Object(_loader_loader__WEBPACK_IMPORTED_MODULE_2__["setLoaderComplete"])('resendEmailLoading'));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[4, 12]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }();
}

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va350cnVzdEFuZFZlcmlmaWNhdGlvbi5jaHVuay5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvbWFuYWdlVXNlclZlcmlmaWNhdGlvbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2xvYWRlci9sb2FkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbi8vIFRvYXN0ZXJcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5pbXBvcnQgeyBzZXRMb2FkZXJTdGFydCwgc2V0TG9hZGVyQ29tcGxldGUgfSBmcm9tICcuL2xvYWRlci9sb2FkZXInO1xuXG5pbXBvcnQge1xuICAgIFVQREFURV9WRVJJRklDQVRJT05fU1RBUlQsXG4gICAgVVBEQVRFX1ZFUklGSUNBVElPTl9TVUNDRVNTLFxuICAgIFVQREFURV9WRVJJRklDQVRJT05fRVJST1IsXG4gICAgRU1BSUxfVkVSSUZJQ0FUSU9OX1NUQVJULFxuICAgIEVNQUlMX1ZFUklGSUNBVElPTl9TVUNDRVNTLFxuICAgIEVNQUlMX1ZFUklGSUNBVElPTl9FUlJPUixcbiAgICBSRVNFTkRfRU1BSUxfVkVSSUZJQ0FUSU9OX1NUQVJULFxuICAgIFJFU0VORF9FTUFJTF9WRVJJRklDQVRJT05fU1VDQ0VTUyxcbiAgICBSRVNFTkRfRU1BSUxfVkVSSUZJQ0FUSU9OX0VSUk9SXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8vIExvYWQgYWNjb3VudCBkYXRhIHRvIHVwZGF0ZSBlbWFpbCB2ZXJpZmljYXRpb25cbmltcG9ydCB7IGxvYWRBY2NvdW50IH0gZnJvbSAnLi9hY2NvdW50JztcblxuLy8gVG8gUmVmcmVzaCB0aGUgdmVyaWZpY2F0aW9uIHN0YXR1c1xuY29uc3QgcXVlcnkgPSBncWxgIFxuICAgIHF1ZXJ5ICgkdXNlcklkOiBTdHJpbmchKSB7XG4gICAgICAgIGdldFVzZXJWZXJpZmllZEluZm8gKHVzZXJJZDogJHVzZXJJZCkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGlzRW1haWxDb25maXJtZWRcbiAgICAgICAgICAgIGlzRmFjZWJvb2tDb25uZWN0ZWRcbiAgICAgICAgICAgIGlzR29vZ2xlQ29ubmVjdGVkXG4gICAgICAgICAgICBpc0lkVmVyaWZpY2F0aW9uXG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgfVxuICAgIH1gO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNjb25uZWN0VmVyaWZpY2F0aW9uKGl0ZW0sIHVzZXJJZCkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9WRVJJRklDQVRJT05fU1RBUlQgfSk7XG5cbiAgICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gdXBkYXRlVXNlclZlcmlmaWVkSW5mbygkaXRlbTogU3RyaW5nISl7XG4gICAgICAgICAgICAgICAgdXBkYXRlVXNlclZlcmlmaWVkSW5mbyhpdGVtOiAkaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgdXNlcklkIH0gfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS51cGRhdGVVc2VyVmVyaWZpZWRJbmZvLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9WRVJJRklDQVRJT05fU1VDQ0VTUyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfVkVSSUZJQ0FUSU9OX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGRhdGEudXBkYXRlVXNlclZlcmlmaWVkSW5mby5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURV9WRVJJRklDQVRJT05fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZW1haWxWZXJpZmljYXRpb24odG9rZW4sIGVtYWlsLCB1c2VySWQpIHtcblxuICAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBFTUFJTF9WRVJJRklDQVRJT05fU1RBUlQgfSk7XG5cbiAgICAgICAgbGV0IGVtYWlsUXVlcnkgPSBncWxgXG4gICAgICAgICAgICBxdWVyeSBFbWFpbFZlcmlmaWNhdGlvbigkdG9rZW46IFN0cmluZyEsICRlbWFpbDogU3RyaW5nISl7XG4gICAgICAgICAgICAgICAgRW1haWxWZXJpZmljYXRpb24odG9rZW46ICR0b2tlbiwgZW1haWw6ICRlbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWRcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGVtYWlsUXVlcnksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuRW1haWxWZXJpZmljYXRpb24uc3RhdHVzID09PSBcImNvbmZpcm1lZFwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBFTUFJTF9WRVJJRklDQVRJT05fU1VDQ0VTUyB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChkaXNjb25uZWN0VmVyaWZpY2F0aW9uKCdlbWFpbCcsIHVzZXJJZCkpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBY2NvdW50KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogRU1BSUxfVkVSSUZJQ0FUSU9OX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2VuZEVtYWlsVmVyaWZpY2F0aW9uKCkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRVNFTkRfRU1BSUxfVkVSSUZJQ0FUSU9OX1NUQVJUIH0pO1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkZXJTdGFydCgncmVzZW5kRW1haWxMb2FkaW5nJykpO1xuXG4gICAgICAgIGxldCByZXNlbmRRdWVyeSA9IGdxbGBcbiAgICAgICAgICAgIHF1ZXJ5IFJlc2VuZENvbmZpcm1FbWFpbHtcbiAgICAgICAgICAgICAgICBSZXNlbmRDb25maXJtRW1haWwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogcmVzZW5kUXVlcnksXG4gICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuUmVzZW5kQ29uZmlybUVtYWlsICYmIGRhdGEuUmVzZW5kQ29uZmlybUVtYWlsLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIkVtYWlsIGlzIHNlbnRcIiwgXCJDb25maXJtYXRpb24gbGluayBpcyBzZW50IHRvIHlvdXIgZW1haWwuXCIpO1xuXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRVNFTkRfRU1BSUxfVkVSSUZJQ0FUSU9OX1NVQ0NFU1MgfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGVyQ29tcGxldGUoJ3Jlc2VuZEVtYWlsTG9hZGluZycpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNlbnQgZW1haWxcIiwgXCJTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRlckNvbXBsZXRlKCdyZXNlbmRFbWFpbExvYWRpbmcnKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSRVNFTkRfRU1BSUxfVkVSSUZJQ0FUSU9OX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZGF0YS5SZXNlbmRDb25maXJtRW1haWwgJiYgZGF0YS5SZXNlbmRDb25maXJtRW1haWwuZXJyb3JNZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFJFU0VORF9FTUFJTF9WRVJJRklDQVRJT05fRVJST1IsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGVyQ29tcGxldGUoJ3Jlc2VuZEVtYWlsTG9hZGluZycpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQge1xuICBTRVRfTE9BREVSX1NUQVJULFxuICBTRVRfTE9BREVSX0NPTVBMRVRFXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2FkZXJTdGFydChuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xPQURFUl9TVEFSVCxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBuYW1lLFxuICAgICAgc3RhdHVzOiB0cnVlXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9hZGVyQ29tcGxldGUobmFtZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MT0FERVJfQ09NUExFVEUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHN0YXR1czogZmFsc2VcbiAgICB9XG4gIH07XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBYUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUpBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQWZBO0FBQUE7QUFjQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFoQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFKQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFoQkE7QUFBQTtBQWVBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFzQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFKQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUZBO0FBQ0E7QUFoQkE7QUFBQTtBQWVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBbkNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQThDQTs7Ozs7Ozs7QUMzS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9