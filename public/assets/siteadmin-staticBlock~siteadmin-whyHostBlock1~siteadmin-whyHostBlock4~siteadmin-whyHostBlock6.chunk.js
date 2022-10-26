(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["siteadmin-staticBlock~siteadmin-whyHostBlock1~siteadmin-whyHostBlock4~siteadmin-whyHostBlock6"],{

/***/ "86ze":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStaticImageLoader", function() { return startStaticImageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopStaticImageLoader", function() { return stopStaticImageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadStaticImage", function() { return doUploadStaticImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveStaticImage", function() { return doRemoveStaticImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadStaticImageLoader", function() { return uploadStaticImageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadStaticImageBlock", function() { return doUploadStaticImageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveStaticImageBlock", function() { return doRemoveStaticImageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveWhyHostImage", function() { return doRemoveWhyHostImage; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wQmL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var _getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("D4mp");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nlne");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nquery ($name: String) {\n  getStaticInfo(name: $name) {\n    name\n    image\n    content\n    title\n    isEnable\n  }\n}\n"])));
var whyHostQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n{\n  getWhyHostPage {\n      id\n      title\n      name\n      value\n  }\n}\n"])));
function startStaticImageLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_UPLOAD_START"],
      payload: {
        staticImageLoading: true
      }
    });
  };
}
function stopStaticImageLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_UPLOAD_START"],
      payload: {
        staticImageLoading: false
      }
    });
  };
}
function doUploadStaticImage(fileName, filePath, oldPicture, name) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            mutation uploadStaticBlock($fileName: String, $filePath: String, $name: String) {\n              uploadStaticBlock (fileName:$fileName, filePath: $filePath, name:$name) {\n                status\n              }\n            }\n          "]))); // Send Request to create a record for logo

              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  fileName: fileName,
                  filePath: filePath,
                  name: name
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    name: name
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!data) {
                _context.next = 15;
                break;
              }

              _context.next = 11;
              return dispatch(Object(_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());

            case 11:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_SUCCESS"],
                payload: {
                  staticImageLoading: false
                }
              });

              if (!(oldPicture != null)) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return removeLogoFile(oldPicture);

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_ERROR"],
                payload: {
                  error: _context.t0,
                  staticImageLoading: false
                }
              });
              return _context.abrupt("return", false);

            case 21:
              return _context.abrupt("return", true);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 17]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveStaticImage(fileName, name) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref5) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_STATIC_INFO_IMAGE_START"]
              });
              dispatch(startStaticImageLoader());
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('StaticBlockForm', 'blockImage1', null));
              _context2.prev = 4;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        mutation removeStaticImages($name: String){\n          removeStaticImages(name: $name){\n            status\n          }\n        }\n      "]))); // Send Request to create a record for logo

              _context2.next = 8;
              return client.mutate({
                mutation: mutation,
                variables: {
                  name: name
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    name: name
                  }
                }]
              });

            case 8:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!data) {
                _context2.next = 16;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_STATIC_INFO_IMAGE_SUCCESS"],
                payload: {
                  staticImageLoading: false
                }
              });
              _context2.next = 14;
              return dispatch(Object(_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());

            case 14:
              _context2.next = 16;
              return removeLogoFile(fileName);

            case 16:
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](4);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_STATIC_INFO_IMAGE_ERROR"],
                payload: {
                  error: _context2.t0,
                  staticImageLoading: false
                }
              });
              return _context2.abrupt("return", false);

            case 22:
              return _context2.abrupt("return", true);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 18]]);
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
  _removeLogoFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(fileName) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch('/deleteHomeBanner', {
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
            resp = _context6.sent;
            _context6.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json = _context6.sent;
            status = _yield$resp$json.status;

            if (status) {
              console.log('status from remove logo file', status);
            }

            _context6.next = 15;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](0);
            console.log('error from remove file', _context6.t0);
            return _context6.abrupt("return", false);

          case 15:
            return _context6.abrupt("return", true);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return _removeLogoFile.apply(this, arguments);
}

function uploadStaticImageLoader() {
  return function (dispatch, getState, _ref7) {
    var client = _ref7.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_INFO_BLOCK_UPLOAD_LOADER_START"],
      payload: {
        staticBlockImageLoading: true
      }
    });
  };
} // export function stopuploadStaticImageLoader() {
//   return (dispatch, getState, { client }) => {
//     dispatch({
//       type: STATIC_INFO_BLOCK_UPLOAD_LOADER_START,
//       // payload: {
//       //   staticBlockImageLoading: false
//       // }
//     });
//   };
// }

function doUploadStaticImageBlock(fileName, filePath, oldPicture, name) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch, getState, _ref8) {
      var client, mutation, _yield$client$mutate3, data;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              client = _ref8.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_STATIC_INFO_BLOCK_IMAGE_START"]
              });
              _context3.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            mutation uploadStaticBlock($fileName: String, $filePath: String, $name: String) {\n              uploadStaticBlock (fileName:$fileName, filePath: $filePath, name:$name) {\n                status\n              }\n            }\n          "]))); // Send Request to create a record for logo

              _context3.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  fileName: fileName,
                  filePath: filePath,
                  name: name
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    name: name
                  }
                }]
              });

            case 6:
              _yield$client$mutate3 = _context3.sent;
              data = _yield$client$mutate3.data;

              if (!data) {
                _context3.next = 13;
                break;
              }

              // await dispatch(getStaticBlockInfo());
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_STATIC_INFO_BLOCK_IMAGE_SUCCESS"],
                payload: {
                  staticBlockImageLoading: false
                }
              });

              if (!(oldPicture != null)) {
                _context3.next = 13;
                break;
              }

              _context3.next = 13;
              return removeLogoFile(oldPicture);

            case 13:
              _context3.next = 19;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_STATIC_INFO_BLOCK_IMAGE_ERROR"],
                payload: {
                  error: _context3.t0,
                  staticBlockImageLoading: false
                }
              });
              return _context3.abrupt("return", false);

            case 19:
              return _context3.abrupt("return", true);

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 15]]);
    }));

    return function (_x8, _x9, _x10) {
      return _ref9.apply(this, arguments);
    };
  }();
}
function doRemoveStaticImageBlock(fileName, name) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dispatch, getState, _ref10) {
      var client, mutation, _yield$client$mutate4, data;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              client = _ref10.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_STATIC_INFO_IMAGE_START"]
              });
              dispatch(uploadStaticImageLoader());
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('StaticBlockForm', 'blockImage2', null));
              _context4.prev = 4;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        mutation removeStaticImages($name: String){\n          removeStaticImages(name: $name){\n            status\n          }\n        }\n      "]))); // Send Request to create a record for logo

              _context4.next = 8;
              return client.mutate({
                mutation: mutation,
                variables: {
                  name: name
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    name: name
                  }
                }]
              });

            case 8:
              _yield$client$mutate4 = _context4.sent;
              data = _yield$client$mutate4.data;

              if (!data) {
                _context4.next = 16;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_STATIC_INFO_IMAGE_SUCCESS"],
                payload: {
                  staticBlockImageLoading: false
                }
              });
              _context4.next = 14;
              return dispatch(Object(_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());

            case 14:
              _context4.next = 16;
              return removeLogoFile(fileName);

            case 16:
              _context4.next = 22;
              break;

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](4);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_STATIC_INFO_IMAGE_ERROR"],
                payload: {
                  error: _context4.t0,
                  staticBlockImageLoading: false
                }
              });
              return _context4.abrupt("return", false);

            case 22:
              return _context4.abrupt("return", true);

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 18]]);
    }));

    return function (_x11, _x12, _x13) {
      return _ref11.apply(this, arguments);
    };
  }();
}
function doRemoveWhyHostImage(name) {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dispatch, getState, _ref12) {
      var client, mutation, _yield$client$mutate5, data;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              client = _ref12.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DELETE_BlOGDETAILS_START"],
                data: name
              });
              _context5.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            mutation removeWhyHostImages ($name: String!) {\n              removeWhyHostImages (name: $name) {\n                    status\n                }\n                }\n            "])));
              _context5.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  name: name
                },
                refetchQueries: [{
                  query: whyHostQuery
                }]
              });

            case 6:
              _yield$client$mutate5 = _context5.sent;
              data = _yield$client$mutate5.data;

              if (data.removeWhyHostImages.status == "success") {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DELETE_BlOGDETAILS_SUCCESS"]
                });
                dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('WhyHostForm', name, null));
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Success", "Deleted successfully!");
              } else {
                react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error("Oops!", "Deletion failed!");
              }

              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DELETE_BlOGDETAILS_ERROR"],
                payload: {
                  error: _context5.t0
                }
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 11]]);
    }));

    return function (_x14, _x15, _x16) {
      return _ref13.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "TXYE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/dlt.png?b362cae0";

/***/ }),

/***/ "e8ND":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZWFkbWluLXN0YXRpY0Jsb2NrfnNpdGVhZG1pbi13aHlIb3N0QmxvY2sxfnNpdGVhZG1pbi13aHlIb3N0QmxvY2s0fnNpdGVhZG1pbi13aHlIb3N0QmxvY2s2LmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlU3RhdGljQmxvY2suanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9wdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2ZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY2hhbmdlIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmltcG9ydCB7XG4gIFNUQVRJQ19CTE9DS19JTUFHRV9VUExPQURfU1RBUlQsXG4gIFNUQVRJQ19CTE9DS19JTUFHRV9TVEFSVCxcbiAgU1RBVElDX0JMT0NLX0lNQUdFX1NVQ0NFU1MsXG4gIFNUQVRJQ19CTE9DS19JTUFHRV9FUlJPUixcbiAgUkVNT1ZFX1NUQVRJQ19JTkZPX0lNQUdFX1NUQVJULFxuICBSRU1PVkVfU1RBVElDX0lORk9fSU1BR0VfU1VDQ0VTUyxcbiAgUkVNT1ZFX1NUQVRJQ19JTkZPX0lNQUdFX0VSUk9SLFxuICBTVEFUSUNfSU5GT19CTE9DS19VUExPQURfTE9BREVSX1NUQVJULFxuICBVUExPQURfU1RBVElDX0lORk9fQkxPQ0tfSU1BR0VfU1RBUlQsXG4gIFVQTE9BRF9TVEFUSUNfSU5GT19CTE9DS19JTUFHRV9TVUNDRVNTLFxuICBVUExPQURfU1RBVElDX0lORk9fQkxPQ0tfSU1BR0VfRVJST1IsXG4gIERFTEVURV9TVEFUSUNfSU5GT19JTUFHRV9TVEFSVCxcbiAgREVMRVRFX1NUQVRJQ19JTkZPX0lNQUdFX1NVQ0NFU1MsXG4gIERFTEVURV9TVEFUSUNfSU5GT19JTUFHRV9FUlJPUixcbiAgQURNSU5fREVMRVRFX0JsT0dERVRBSUxTX1NUQVJULFxuICBBRE1JTl9ERUxFVEVfQmxPR0RFVEFJTFNfU1VDQ0VTUyxcbiAgQURNSU5fREVMRVRFX0JsT0dERVRBSUxTX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IGdldFN0YXRpY0Jsb2NrSW5mbyB9IGZyb20gJy4vZ2V0U3RhdGljQmxvY2tJbmZvJztcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9jb3JlL2hpc3RvcnknO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbnF1ZXJ5ICgkbmFtZTogU3RyaW5nKSB7XG4gIGdldFN0YXRpY0luZm8obmFtZTogJG5hbWUpIHtcbiAgICBuYW1lXG4gICAgaW1hZ2VcbiAgICBjb250ZW50XG4gICAgdGl0bGVcbiAgICBpc0VuYWJsZVxuICB9XG59XG5gO1xuXG5jb25zdCB3aHlIb3N0UXVlcnkgPSBncWxgXG57XG4gIGdldFdoeUhvc3RQYWdlIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgbmFtZVxuICAgICAgdmFsdWVcbiAgfVxufVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RhdGljSW1hZ2VMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU1RBVElDX0JMT0NLX0lNQUdFX1VQTE9BRF9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3RhdGljSW1hZ2VMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wU3RhdGljSW1hZ2VMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU1RBVElDX0JMT0NLX0lNQUdFX1VQTE9BRF9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3RhdGljSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkb1VwbG9hZFN0YXRpY0ltYWdlKGZpbGVOYW1lLCBmaWxlUGF0aCwgb2xkUGljdHVyZSwgbmFtZSkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNUQVRJQ19CTE9DS19JTUFHRV9TVEFSVCB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIHVwbG9hZFN0YXRpY0Jsb2NrKCRmaWxlTmFtZTogU3RyaW5nLCAkZmlsZVBhdGg6IFN0cmluZywgJG5hbWU6IFN0cmluZykge1xuICAgICAgICAgICAgICB1cGxvYWRTdGF0aWNCbG9jayAoZmlsZU5hbWU6JGZpbGVOYW1lLCBmaWxlUGF0aDogJGZpbGVQYXRoLCBuYW1lOiRuYW1lKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2dvXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGZpbGVOYW1lLCBmaWxlUGF0aCwgbmFtZSB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBuYW1lIH0gfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaChnZXRTdGF0aWNCbG9ja0luZm8oKSk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTVEFUSUNfQkxPQ0tfSU1BR0VfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9sZFBpY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHJlbW92ZUxvZ29GaWxlKG9sZFBpY3R1cmUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTVEFUSUNfQkxPQ0tfSU1BR0VfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlU3RhdGljSW1hZ2UoZmlsZU5hbWUsIG5hbWUpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfU1RBVElDX0lORk9fSU1BR0VfU1RBUlQgfSk7XG4gICAgZGlzcGF0Y2goc3RhcnRTdGF0aWNJbWFnZUxvYWRlcigpKTtcbiAgICBkaXNwYXRjaChjaGFuZ2UoJ1N0YXRpY0Jsb2NrRm9ybScsICdibG9ja0ltYWdlMScsIG51bGwpKTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgbXV0YXRpb24gcmVtb3ZlU3RhdGljSW1hZ2VzKCRuYW1lOiBTdHJpbmcpe1xuICAgICAgICAgIHJlbW92ZVN0YXRpY0ltYWdlcyhuYW1lOiAkbmFtZSl7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvZ29cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgbmFtZSB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBuYW1lIH0gfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogUkVNT1ZFX1NUQVRJQ19JTkZPX0lNQUdFX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3RhdGljSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldFN0YXRpY0Jsb2NrSW5mbygpKTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUoZmlsZU5hbWUpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX1NUQVRJQ19JTkZPX0lNQUdFX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgc3RhdGljSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUxvZ29GaWxlKGZpbGVOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZGVsZXRlSG9tZUJhbm5lcicsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGZpbGVOYW1lXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3RhdHVzIGZyb20gcmVtb3ZlIGxvZ28gZmlsZScsIHN0YXR1cyk7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gcmVtb3ZlIGZpbGUnLCBlcnJvcik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZFN0YXRpY0ltYWdlTG9hZGVyKCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNUQVRJQ19JTkZPX0JMT0NLX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHN0YXRpY0Jsb2NrSW1hZ2VMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9wdXBsb2FkU3RhdGljSW1hZ2VMb2FkZXIoKSB7XG4vLyAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4vLyAgICAgZGlzcGF0Y2goe1xuLy8gICAgICAgdHlwZTogU1RBVElDX0lORk9fQkxPQ0tfVVBMT0FEX0xPQURFUl9TVEFSVCxcbi8vICAgICAgIC8vIHBheWxvYWQ6IHtcbi8vICAgICAgIC8vICAgc3RhdGljQmxvY2tJbWFnZUxvYWRpbmc6IGZhbHNlXG4vLyAgICAgICAvLyB9XG4vLyAgICAgfSk7XG4vLyAgIH07XG4vLyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkU3RhdGljSW1hZ2VCbG9jayhmaWxlTmFtZSwgZmlsZVBhdGgsIG9sZFBpY3R1cmUsIG5hbWUpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBVUExPQURfU1RBVElDX0lORk9fQkxPQ0tfSU1BR0VfU1RBUlQgfSk7XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiB1cGxvYWRTdGF0aWNCbG9jaygkZmlsZU5hbWU6IFN0cmluZywgJGZpbGVQYXRoOiBTdHJpbmcsICRuYW1lOiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgdXBsb2FkU3RhdGljQmxvY2sgKGZpbGVOYW1lOiRmaWxlTmFtZSwgZmlsZVBhdGg6ICRmaWxlUGF0aCwgbmFtZTokbmFtZSkge1xuICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9nb1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBmaWxlTmFtZSwgZmlsZVBhdGgsIG5hbWUgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgbmFtZSB9IH1dXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gYXdhaXQgZGlzcGF0Y2goZ2V0U3RhdGljQmxvY2tJbmZvKCkpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVVBMT0FEX1NUQVRJQ19JTkZPX0JMT0NLX0lNQUdFX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3RhdGljQmxvY2tJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9sZFBpY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHJlbW92ZUxvZ29GaWxlKG9sZFBpY3R1cmUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBVUExPQURfU1RBVElDX0lORk9fQkxPQ0tfSU1BR0VfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBzdGF0aWNCbG9ja0ltYWdlTG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVTdGF0aWNJbWFnZUJsb2NrKGZpbGVOYW1lLCBuYW1lKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVMRVRFX1NUQVRJQ19JTkZPX0lNQUdFX1NUQVJUIH0pO1xuICAgIGRpc3BhdGNoKHVwbG9hZFN0YXRpY0ltYWdlTG9hZGVyKCkpO1xuICAgIGRpc3BhdGNoKGNoYW5nZSgnU3RhdGljQmxvY2tGb3JtJywgJ2Jsb2NrSW1hZ2UyJywgbnVsbCkpO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiByZW1vdmVTdGF0aWNJbWFnZXMoJG5hbWU6IFN0cmluZyl7XG4gICAgICAgICAgcmVtb3ZlU3RhdGljSW1hZ2VzKG5hbWU6ICRuYW1lKXtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9nb1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBuYW1lIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IG5hbWUgfSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBERUxFVEVfU1RBVElDX0lORk9fSU1BR0VfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdGF0aWNCbG9ja0ltYWdlTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaChnZXRTdGF0aWNCbG9ja0luZm8oKSk7XG4gICAgICAgIGF3YWl0IHJlbW92ZUxvZ29GaWxlKGZpbGVOYW1lKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IERFTEVURV9TVEFUSUNfSU5GT19JTUFHRV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHN0YXRpY0Jsb2NrSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1JlbW92ZVdoeUhvc3RJbWFnZShuYW1lKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFETUlOX0RFTEVURV9CbE9HREVUQUlMU19TVEFSVCxcbiAgICAgICAgZGF0YTogbmFtZVxuICAgIH0pO1xuICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIHJlbW92ZVdoeUhvc3RJbWFnZXMgKCRuYW1lOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgIHJlbW92ZVdoeUhvc3RJbWFnZXMgKG5hbWU6ICRuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBuYW1lIH0sXG4gICAgICAgICAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiB3aHlIb3N0UXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChkYXRhLnJlbW92ZVdoeUhvc3RJbWFnZXMuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBBRE1JTl9ERUxFVEVfQmxPR0RFVEFJTFNfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjaGFuZ2UoJ1doeUhvc3RGb3JtJywgbmFtZSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2Vzc1wiLCBcIkRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiT29wcyFcIiwgXCJEZWxldGlvbiBmYWlsZWQhXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQURNSU5fREVMRVRFX0JsT0dERVRBSUxTX0VSUk9SLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59O1xuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FkbWluSWNvbnMvZGx0LnBuZz9iMzYyY2FlMFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmc/MGNiNjVhZDZcIjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUNBO0FBRUE7QUFvQkE7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFQQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFoQkE7QUFBQTtBQWVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQW5DQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaURBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQWtCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFsQkE7QUFBQTtBQWlCQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBeEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFuQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWlEQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFUQTtBQUNBO0FBSEE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBcUJBO0FBckJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTZCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQVBBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQWhCQTtBQUFBO0FBZUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBbkNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFpREE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQWxCQTtBQUFBO0FBaUJBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUF4QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQW5DQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaURBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFQQTtBQUFBO0FBZ0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQWhCQTtBQUFBO0FBZUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7Ozs7Ozs7QUMvWEE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9