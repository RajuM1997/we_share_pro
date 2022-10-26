(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["siteadmin-homeBanner~siteadmin-imageBanner"],{

/***/ "K4Ge":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBannerUploaderLoader", function() { return startBannerUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateImageBanner", function() { return doUpdateImageBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadImageBanner", function() { return doUploadImageBanner; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y0DV");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 // Toaster

 // To Refresh the verification status

var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  {\n    getImageBanner {\n      id\n      title\n      description\n      buttonLabel\n      image\n    }\n  }\n"])));
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
function doUpdateImageBanner(values) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref2) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref2.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_START"]
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      mutation updateImageBanner(\n        $title: String!\n        $description: String!\n        $buttonLabel: String!\n      ) {\n        updateImageBanner(\n          title: $title\n          description: $description\n          buttonLabel: $buttonLabel\n        ) {\n          status\n        }\n      }\n    "])));
              _context.prev = 3;
              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: values,
                refetchQueries: [{
                  query: query
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (data.updateImageBanner.status === "success") {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__["toastr"].success("Update Banner Settings", "Changes are updated successfully!");
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_SUCCESS"]
                });
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_ERROR"],
                  payload: {
                    status: data.updateImageBanner.status
                  }
                });
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_IMAGE_BANNER_ERROR"],
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
      return _ref3.apply(this, arguments);
    };
  }();
}
function doUploadImageBanner(image, oldImage) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref4) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref4.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_START"]
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      mutation uploadImageBanner($image: String!) {\n        uploadImageBanner(image: $image) {\n          status\n        }\n      }\n    "])));
              _context2.prev = 3;
              _context2.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image
                },
                refetchQueries: [{
                  query: query
                }]
              });

            case 6:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!(data.uploadImageBanner.status === "success")) {
                _context2.next = 15;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_SUCCESS"],
                payload: {
                  bannerUploaderLoading: false
                }
              });

              if (!(oldImage != null)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 13;
              return doRemoveImageBanner(oldImage);

            case 13:
              _context2.next = 16;
              break;

            case 15:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_ERROR"],
                payload: {
                  status: data.uploadImageBanner.status,
                  bannerUploaderLoading: false
                }
              });

            case 16:
              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGE_BANNER_ERROR"],
                payload: {
                  error: _context2.t0,
                  bannerUploaderLoading: false
                }
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 18]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();
}

function doRemoveImageBanner(_x7) {
  return _doRemoveImageBanner.apply(this, arguments);
}

function _doRemoveImageBanner() {
  _doRemoveImageBanner = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fileName) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/deleteBanner", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                fileName: fileName
              }),
              credentials: "include"
            });

          case 3:
            resp = _context3.sent;
            _context3.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json = _context3.sent;
            status = _yield$resp$json.status;

            if (!status) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", true);

          case 10:
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log("error", _context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return _doRemoveImageBanner.apply(this, arguments);
}

/***/ }),

/***/ "e8ND":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZWFkbWluLWhvbWVCYW5uZXJ+c2l0ZWFkbWluLWltYWdlQmFubmVyLmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlSW1hZ2VCYW5uZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9wdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiLi4vLi4vY29yZS9mZXRjaFwiO1xuXG5pbXBvcnQge1xuICBVUERBVEVfSU1BR0VfQkFOTkVSX1NUQVJULFxuICBVUERBVEVfSU1BR0VfQkFOTkVSX1NVQ0NFU1MsXG4gIFVQREFURV9JTUFHRV9CQU5ORVJfRVJST1IsXG4gIElNQUdFX0JBTk5FUl9VUExPQURfTE9BREVSX1NUQVJULFxuICBVUExPQURfSU1BR0VfQkFOTkVSX1NUQVJULFxuICBVUExPQURfSU1BR0VfQkFOTkVSX1NVQ0NFU1MsXG4gIFVQTE9BRF9JTUFHRV9CQU5ORVJfRVJST1IsXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSBcInJlYWN0LXJlZHV4LXRvYXN0clwiO1xuXG4vLyBUbyBSZWZyZXNoIHRoZSB2ZXJpZmljYXRpb24gc3RhdHVzXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAge1xuICAgIGdldEltYWdlQmFubmVyIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGJ1dHRvbkxhYmVsXG4gICAgICBpbWFnZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QmFubmVyVXBsb2FkZXJMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogSU1BR0VfQkFOTkVSX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGJhbm5lclVwbG9hZGVyTG9hZGluZzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1VwZGF0ZUltYWdlQmFubmVyKHZhbHVlcykge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX0lNQUdFX0JBTk5FUl9TVEFSVCB9KTtcblxuICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgIG11dGF0aW9uIHVwZGF0ZUltYWdlQmFubmVyKFxuICAgICAgICAkdGl0bGU6IFN0cmluZyFcbiAgICAgICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgICAgICRidXR0b25MYWJlbDogU3RyaW5nIVxuICAgICAgKSB7XG4gICAgICAgIHVwZGF0ZUltYWdlQmFubmVyKFxuICAgICAgICAgIHRpdGxlOiAkdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICAgICAgYnV0dG9uTGFiZWw6ICRidXR0b25MYWJlbFxuICAgICAgICApIHtcbiAgICAgICAgICBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogdmFsdWVzLFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV0sXG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRhLnVwZGF0ZUltYWdlQmFubmVyLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXG4gICAgICAgICAgXCJVcGRhdGUgQmFubmVyIFNldHRpbmdzXCIsXG4gICAgICAgICAgXCJDaGFuZ2VzIGFyZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICApO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9JTUFHRV9CQU5ORVJfU1VDQ0VTUyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBVUERBVEVfSU1BR0VfQkFOTkVSX0VSUk9SLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHN0YXR1czogZGF0YS51cGRhdGVJbWFnZUJhbm5lci5zdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVVBEQVRFX0lNQUdFX0JBTk5FUl9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRJbWFnZUJhbm5lcihpbWFnZSwgb2xkSW1hZ2UpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFVQTE9BRF9JTUFHRV9CQU5ORVJfU1RBUlQgfSk7XG5cbiAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICBtdXRhdGlvbiB1cGxvYWRJbWFnZUJhbm5lcigkaW1hZ2U6IFN0cmluZyEpIHtcbiAgICAgICAgdXBsb2FkSW1hZ2VCYW5uZXIoaW1hZ2U6ICRpbWFnZSkge1xuICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YS51cGxvYWRJbWFnZUJhbm5lci5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VfQkFOTkVSX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgYmFubmVyVXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9sZEltYWdlICE9IG51bGwpIHtcbiAgICAgICAgICBhd2FpdCBkb1JlbW92ZUltYWdlQmFubmVyKG9sZEltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRV9CQU5ORVJfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnVwbG9hZEltYWdlQmFubmVyLnN0YXR1cyxcbiAgICAgICAgICAgIGJhbm5lclVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFX0JBTk5FUl9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGJhbm5lclVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvUmVtb3ZlSW1hZ2VCYW5uZXIoZmlsZU5hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCIvZGVsZXRlQmFubmVyXCIsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZU5hbWUgfSksXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgfSk7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2Zz8wY2I2NWFkNlwiOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUhBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQXJCQTtBQUFBO0FBb0JBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBdkNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFnREE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBYkE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFoQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFpREE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQUhBO0FBRUE7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBV0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDL0lBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=