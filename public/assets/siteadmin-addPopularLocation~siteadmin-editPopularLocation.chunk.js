(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["siteadmin-addPopularLocation~siteadmin-editPopularLocation"],{

/***/ "/lz5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUploaderLoader", function() { return startLocationUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endLocationUploaderLoader", function() { return endLocationUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadLocation", function() { return doUploadLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveLocation", function() { return doRemoveLocation; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y0DV");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nquery editPopularLocation ($id: Int!) {\n  editPopularLocation (id: $id) {\n      id\n      location\n      locationAddress\n      isEnable\n      image\n  }\n}\n"])));
function startLocationUploaderLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_LOADER_START"],
      payload: {
        locationUploaderLoading: true
      }
    });
  };
}
function endLocationUploaderLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_LOADER_START"],
      payload: {
        locationUploaderLoading: false
      }
    });
  };
}
function doUploadLocation(image, filePath, oldPicture, id) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        mutation uploadLocation(\n          $id: Int,\n          $image: String,\n        ) {\n          uploadLocation(\n            id: $id,\n            image: $image,\n          ) {\n              status\n          }\n        }\n        "]))); // Send Request to create a record for location

              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image,
                  id: id
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    id: id
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!data) {
                _context.next = 13;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_SUCCESS"],
                payload: {
                  locationUploaderLoading: false
                }
              });

              if (!(oldPicture != null)) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return removeLocationFile(oldPicture);

            case 13:
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_ERROR"],
                payload: {
                  error: _context.t0,
                  locationUploaderLoading: false
                }
              });
              return _context.abrupt("return", false);

            case 19:
              return _context.abrupt("return", true);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveLocation(image, id) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref5) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOCATION_START"]
              });
              dispatch(startLocationUploaderLoader());
              _context2.prev = 3;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      mutation removeLocation(\n        $id: Int!,\n        $image: String,\n      ) {\n        removeLocation(\n          id: $id,\n          image: $image,\n        ) {\n            status\n        }\n      }\n      "]))); // Send Request to create a record for location

              _context2.next = 7;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image,
                  id: id
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    id: id
                  }
                }]
              });

            case 7:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!data) {
                _context2.next = 13;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOCATION_SUCCESS"],
                payload: {
                  locationUploaderLoading: false
                }
              });
              _context2.next = 13;
              return removeLocationFile(image);

            case 13:
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOCATION_ERROR"],
                payload: {
                  error: _context2.t0,
                  locationUploaderLoading: false
                }
              });
              return _context2.abrupt("return", false);

            case 19:
              return _context2.abrupt("return", true);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 15]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}

function removeLocationFile(_x7) {
  return _removeLocationFile.apply(this, arguments);
}

function _removeLocationFile() {
  _removeLocationFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(image) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/removeLocationFile', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                image: image
              }),
              credentials: 'include'
            });

          case 3:
            resp = _context3.sent;
            _context3.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json = _context3.sent;
            status = _yield$resp$json.status;

            if (status) {
              console.log('status from remove location file', status);
            }

            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log('error from remove file', _context3.t0);
            return _context3.abrupt("return", false);

          case 15:
            return _context3.abrupt("return", true);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _removeLocationFile.apply(this, arguments);
}

/***/ }),

/***/ "ARI4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSubCategoryUploaderLoader", function() { return startSubCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endSubCategoryUploaderLoader", function() { return endSubCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadSubCategory", function() { return doUploadSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveSubCategory", function() { return doRemoveSubCategory; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y0DV");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query editSubCategory($id: Int!) {\n    editSubCategory(id: $id) {\n      id\n      title\n      description\n      address\n      subCategory\n      guests\n      bedrooms\n      beds\n      baths\n      image\n      primaryCategory\n    }\n  }\n"])));
function startSubCategoryUploaderLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        subCategoryUploaderLoading: true
      }
    });
  };
}
function endSubCategoryUploaderLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        subCategoryUploaderLoading: false
      }
    });
  };
}
function doUploadSubCategory(image, filePath, oldPicture, id) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        mutation uploadSubCategory($id: Int, $image: String) {\n          uploadSubCategory(id: $id, image: $image) {\n            status\n          }\n        }\n      "]))); // Send Request to create a record for location

              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image,
                  id: id
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    id: id
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!data) {
                _context.next = 13;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_SUCCESS"],
                payload: {
                  subCategoryUploaderLoading: false
                }
              });

              if (!(oldPicture != null)) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return removeSubCategoryFile(oldPicture);

            case 13:
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_ERROR"],
                payload: {
                  error: _context.t0,
                  subCategoryUploaderLoading: false
                }
              });
              return _context.abrupt("return", false);

            case 19:
              return _context.abrupt("return", true);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveSubCategory(image, id) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref5) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_CATEGORY_START"]
              });
              dispatch(startSubCategoryUploaderLoader());
              _context2.prev = 3;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        mutation removeSubCategory($id: Int!, $image: String) {\n          removeSubCategory(id: $id, image: $image) {\n            status\n          }\n        }\n      "]))); // Send Request to create a record for location

              _context2.next = 7;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image,
                  id: id
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    id: id
                  }
                }]
              });

            case 7:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!data) {
                _context2.next = 13;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_CATEGORY_SUCCESS"],
                payload: {
                  subCategoryUploaderLoading: false
                }
              });
              _context2.next = 13;
              return removeSubCategoryFile(image);

            case 13:
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_CATEGORY_ERROR"],
                payload: {
                  error: _context2.t0,
                  subCategoryUploaderLoading: false
                }
              });
              return _context2.abrupt("return", false);

            case 19:
              return _context2.abrupt("return", true);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 15]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}

function removeSubCategoryFile(_x7) {
  return _removeSubCategoryFile.apply(this, arguments);
}

function _removeSubCategoryFile() {
  _removeSubCategoryFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(image) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/removeSubCategoryFile", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                image: image
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

            if (status) {
              console.log("status from remove sub category file", status);
            }

            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log("error from remove file", _context3.t0);
            return _context3.abrupt("return", false);

          case 15:
            return _context3.abrupt("return", true);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _removeSubCategoryFile.apply(this, arguments);
}

/***/ }),

/***/ "JLhz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCategoryUploaderLoader", function() { return startCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endCategoryUploaderLoader", function() { return endCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadCategory", function() { return doUploadCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveCategory", function() { return doRemoveCategory; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y0DV");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query editCategory($id: Int!) {\n    editCategory(id: $id) {\n      id\n      title\n      subTitle\n      isEnable\n      image\n    }\n  }\n"])));
function startCategoryUploaderLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        categoryUploaderLoading: true
      }
    });
  };
}
function endCategoryUploaderLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        categoryUploaderLoading: false
      }
    });
  };
}
function doUploadCategory(image, filePath, oldPicture, id) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_START"]
              });
              _context.prev = 2;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        mutation uploadCategory($id: Int, $image: String) {\n          uploadCategory(id: $id, image: $image) {\n            status\n          }\n        }\n      "]))); // Send Request to create a record for location

              _context.next = 6;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image,
                  id: id
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    id: id
                  }
                }]
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!data) {
                _context.next = 13;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_SUCCESS"],
                payload: {
                  categoryUploaderLoading: false
                }
              });

              if (!(oldPicture != null)) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return removeCategoryFile(oldPicture);

            case 13:
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_ERROR"],
                payload: {
                  error: _context.t0,
                  categoryUploaderLoading: false
                }
              });
              return _context.abrupt("return", false);

            case 19:
              return _context.abrupt("return", true);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveCategory(image, id) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref5) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CATEGORY_START"]
              });
              dispatch(startCategoryUploaderLoader());
              _context2.prev = 3;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        mutation removeCategory($id: Int!, $image: String) {\n          removeCategory(id: $id, image: $image) {\n            status\n          }\n        }\n      "]))); // Send Request to create a record for location

              _context2.next = 7;
              return client.mutate({
                mutation: mutation,
                variables: {
                  image: image,
                  id: id
                },
                refetchQueries: [{
                  query: query,
                  variables: {
                    id: id
                  }
                }]
              });

            case 7:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!data) {
                _context2.next = 13;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CATEGORY_SUCCESS"],
                payload: {
                  categoryUploaderLoading: false
                }
              });
              _context2.next = 13;
              return removeCategoryFile(image);

            case 13:
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CATEGORY_ERROR"],
                payload: {
                  error: _context2.t0,
                  categoryUploaderLoading: false
                }
              });
              return _context2.abrupt("return", false);

            case 19:
              return _context2.abrupt("return", true);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 15]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}

function removeCategoryFile(_x7) {
  return _removeCategoryFile.apply(this, arguments);
}

function _removeCategoryFile() {
  _removeCategoryFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(image) {
    var resp, _yield$resp$json, status;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/removeCategoryFile", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                image: image
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

            if (status) {
              console.log("status from remove category file", status);
            }

            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log("error from remove file", _context3.t0);
            return _context3.abrupt("return", false);

          case 15:
            return _context3.abrupt("return", true);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _removeCategoryFile.apply(this, arguments);
}

/***/ }),

/***/ "Lgxa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPersonalizedValues", function() { return setPersonalizedValues; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WlAH");

function setPersonalizedValues(_ref) {
  var name = _ref.name,
      value = _ref.value;
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_PERSONALIZED_VALUES"],
    payload: {
      name: name,
      value: value
    }
  };
}

/***/ }),

/***/ "e8ND":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZWFkbWluLWFkZFBvcHVsYXJMb2NhdGlvbn5zaXRlYWRtaW4tZWRpdFBvcHVsYXJMb2NhdGlvbi5jaHVuay5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUxvY2F0aW9uSW1hZ2UuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlU3ViQ2F0ZWdvcnlJbWFnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VDYXRlZ29yeUltYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvcGVyc29uYWxpemVkLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2ZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uL2NvcmUvZmV0Y2gnO1xuXG5pbXBvcnQge1xuICBMT0NBVElPTl9VUExPQURfTE9BREVSX1NUQVJULFxuICBMT0NBVElPTl9VUExPQURfU1RBUlQsXG4gIExPQ0FUSU9OX1VQTE9BRF9TVUNDRVNTLFxuICBMT0NBVElPTl9VUExPQURfRVJST1IsXG4gIFJFTU9WRV9MT0NBVElPTl9TVEFSVCxcbiAgUkVNT1ZFX0xPQ0FUSU9OX1NVQ0NFU1MsXG4gIFJFTU9WRV9MT0NBVElPTl9FUlJPUixcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG5xdWVyeSBlZGl0UG9wdWxhckxvY2F0aW9uICgkaWQ6IEludCEpIHtcbiAgZWRpdFBvcHVsYXJMb2NhdGlvbiAoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIGxvY2F0aW9uXG4gICAgICBsb2NhdGlvbkFkZHJlc3NcbiAgICAgIGlzRW5hYmxlXG4gICAgICBpbWFnZVxuICB9XG59XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRMb2NhdGlvblVwbG9hZGVyTG9hZGVyKCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRMb2NhdGlvblVwbG9hZGVyTG9hZGVyKCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRMb2NhdGlvbihpbWFnZSwgZmlsZVBhdGgsIG9sZFBpY3R1cmUsIGlkKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9DQVRJT05fVVBMT0FEX1NUQVJUIH0pO1xuXG4gICAgdHJ5IHtcblxuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHVwbG9hZExvY2F0aW9uKFxuICAgICAgICAgICRpZDogSW50LFxuICAgICAgICAgICRpbWFnZTogU3RyaW5nLFxuICAgICAgICApIHtcbiAgICAgICAgICB1cGxvYWRMb2NhdGlvbihcbiAgICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgICBpbWFnZTogJGltYWdlLFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9jYXRpb25cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaW1hZ2UsIGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IGlkIH0gfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTE9DQVRJT05fVVBMT0FEX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9sZFBpY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHJlbW92ZUxvY2F0aW9uRmlsZShvbGRQaWN0dXJlKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogTE9DQVRJT05fVVBMT0FEX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVMb2NhdGlvbihpbWFnZSwgaWQpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfTE9DQVRJT05fU1RBUlQgfSk7XG4gICAgZGlzcGF0Y2goc3RhcnRMb2NhdGlvblVwbG9hZGVyTG9hZGVyKCkpO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgbXV0YXRpb24gcmVtb3ZlTG9jYXRpb24oXG4gICAgICAgICRpZDogSW50ISxcbiAgICAgICAgJGltYWdlOiBTdHJpbmcsXG4gICAgICApIHtcbiAgICAgICAgcmVtb3ZlTG9jYXRpb24oXG4gICAgICAgICAgaWQ6ICRpZCxcbiAgICAgICAgICBpbWFnZTogJGltYWdlLFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2NhdGlvblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBpbWFnZSwgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgaWQgfSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBSRU1PVkVfTE9DQVRJT05fU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsb2NhdGlvblVwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByZW1vdmVMb2NhdGlvbkZpbGUoaW1hZ2UpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX0xPQ0FUSU9OX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlTG9jYXRpb25GaWxlKGltYWdlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvcmVtb3ZlTG9jYXRpb25GaWxlJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaW1hZ2VcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgZnJvbSByZW1vdmUgbG9jYXRpb24gZmlsZScsIHN0YXR1cyk7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gcmVtb3ZlIGZpbGUnLCBlcnJvcik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIi4uLy4uL2NvcmUvZmV0Y2hcIjtcblxuaW1wb3J0IHtcbiAgU1VCX0NBVEVHT1JZX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gIFNVQl9DQVRFR09SWV9VUExPQURfU1RBUlQsXG4gIFNVQl9DQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgU1VCX0NBVEVHT1JZX1VQTE9BRF9FUlJPUixcbiAgUkVNT1ZFX1NVQl9DQVRFR09SWV9TVEFSVCxcbiAgUkVNT1ZFX1NVQl9DQVRFR09SWV9TVUNDRVNTLFxuICBSRU1PVkVfU1VCX0NBVEVHT1JZX0VSUk9SLFxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBlZGl0U3ViQ2F0ZWdvcnkoJGlkOiBJbnQhKSB7XG4gICAgZWRpdFN1YkNhdGVnb3J5KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGFkZHJlc3NcbiAgICAgIHN1YkNhdGVnb3J5XG4gICAgICBndWVzdHNcbiAgICAgIGJlZHJvb21zXG4gICAgICBiZWRzXG4gICAgICBiYXRoc1xuICAgICAgaW1hZ2VcbiAgICAgIHByaW1hcnlDYXRlZ29yeVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kU3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkU3ViQ2F0ZWdvcnkoaW1hZ2UsIGZpbGVQYXRoLCBvbGRQaWN0dXJlLCBpZCkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogU1VCX0NBVEVHT1JZX1VQTE9BRF9TVEFSVCB9KTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHVwbG9hZFN1YkNhdGVnb3J5KCRpZDogSW50LCAkaW1hZ2U6IFN0cmluZykge1xuICAgICAgICAgIHVwbG9hZFN1YkNhdGVnb3J5KGlkOiAkaWQsIGltYWdlOiAkaW1hZ2UpIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9jYXRpb25cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaW1hZ2UsIGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IGlkIH0gfV0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNVQl9DQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdWJDYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRQaWN0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICBhd2FpdCByZW1vdmVTdWJDYXRlZ29yeUZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlU3ViQ2F0ZWdvcnkoaW1hZ2UsIGlkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfU1VCX0NBVEVHT1JZX1NUQVJUIH0pO1xuICAgIGRpc3BhdGNoKHN0YXJ0U3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHJlbW92ZVN1YkNhdGVnb3J5KCRpZDogSW50ISwgJGltYWdlOiBTdHJpbmcpIHtcbiAgICAgICAgICByZW1vdmVTdWJDYXRlZ29yeShpZDogJGlkLCBpbWFnZTogJGltYWdlKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvY2F0aW9uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGltYWdlLCBpZCB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZCB9IH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBSRU1PVkVfU1VCX0NBVEVHT1JZX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByZW1vdmVTdWJDYXRlZ29yeUZpbGUoaW1hZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9TVUJfQ0FURUdPUllfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBzdWJDYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVTdWJDYXRlZ29yeUZpbGUoaW1hZ2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCIvcmVtb3ZlU3ViQ2F0ZWdvcnlGaWxlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIGZyb20gcmVtb3ZlIHN1YiBjYXRlZ29yeSBmaWxlXCIsIHN0YXR1cyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZnJvbSByZW1vdmUgZmlsZVwiLCBlcnJvcik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiLi4vLi4vY29yZS9mZXRjaFwiO1xuXG5pbXBvcnQge1xuICBDQVRFR09SWV9VUExPQURfTE9BREVSX1NUQVJULFxuICBDQVRFR09SWV9VUExPQURfU1RBUlQsXG4gIENBVEVHT1JZX1VQTE9BRF9TVUNDRVNTLFxuICBDQVRFR09SWV9VUExPQURfRVJST1IsXG4gIFJFTU9WRV9DQVRFR09SWV9TVEFSVCxcbiAgUkVNT1ZFX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIFJFTU9WRV9DQVRFR09SWV9FUlJPUixcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgZWRpdENhdGVnb3J5KCRpZDogSW50ISkge1xuICAgIGVkaXRDYXRlZ29yeShpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHN1YlRpdGxlXG4gICAgICBpc0VuYWJsZVxuICAgICAgaW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDQVRFR09SWV9VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRDYXRlZ29yeShpbWFnZSwgZmlsZVBhdGgsIG9sZFBpY3R1cmUsIGlkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDQVRFR09SWV9VUExPQURfU1RBUlQgfSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiB1cGxvYWRDYXRlZ29yeSgkaWQ6IEludCwgJGltYWdlOiBTdHJpbmcpIHtcbiAgICAgICAgICB1cGxvYWRDYXRlZ29yeShpZDogJGlkLCBpbWFnZTogJGltYWdlKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvY2F0aW9uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGltYWdlLCBpZCB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZCB9IH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBDQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRQaWN0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICBhd2FpdCByZW1vdmVDYXRlZ29yeUZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBDQVRFR09SWV9VUExPQURfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVDYXRlZ29yeShpbWFnZSwgaWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9DQVRFR09SWV9TVEFSVCB9KTtcbiAgICBkaXNwYXRjaChzdGFydENhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiByZW1vdmVDYXRlZ29yeSgkaWQ6IEludCEsICRpbWFnZTogU3RyaW5nKSB7XG4gICAgICAgICAgcmVtb3ZlQ2F0ZWdvcnkoaWQ6ICRpZCwgaW1hZ2U6ICRpbWFnZSkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2NhdGlvblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBpbWFnZSwgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgaWQgfSB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogUkVNT1ZFX0NBVEVHT1JZX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByZW1vdmVDYXRlZ29yeUZpbGUoaW1hZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9DQVRFR09SWV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhdGVnb3J5RmlsZShpbWFnZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcIi9yZW1vdmVDYXRlZ29yeUZpbGVcIiwge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpbWFnZSxcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgZnJvbSByZW1vdmUgY2F0ZWdvcnkgZmlsZVwiLCBzdGF0dXMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yIGZyb20gcmVtb3ZlIGZpbGVcIiwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBTRVRfUEVSU09OQUxJWkVEX1ZBTFVFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQZXJzb25hbGl6ZWRWYWx1ZXMoeyBuYW1lLCB2YWx1ZSB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1BFUlNPTkFMSVpFRF9WQUxVRVMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnPzBjYjY1YWQ2XCI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7OztBQUZBO0FBQ0E7QUFFQTtBQVVBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUF1QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUF2QkE7QUFBQTtBQXNCQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBekNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUF1REE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQXVCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQXZCQTtBQUFBO0FBc0JBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUE3QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUF2Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFUQTtBQUNBO0FBSEE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBcUJBO0FBckJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFDQTs7Ozs7OztBQUZBO0FBQ0E7QUFFQTtBQVVBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFMQTtBQUFBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFkQTtBQUFBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBL0JBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBTkE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBZkE7QUFBQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQXJCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQTlCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBMkNBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBQ0E7QUFIQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFvQkE7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUVBO0FBVUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBZEE7QUFBQTtBQWFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQS9CQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBNENBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQWZBO0FBQUE7QUFjQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFyQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUE5QkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTJDQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFUQTtBQUNBO0FBSEE7QUFFQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBb0JBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7Ozs7Ozs7QUNWQTs7OztBIiwic291cmNlUm9vdCI6IiJ9