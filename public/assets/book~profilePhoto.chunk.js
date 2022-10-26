(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book~profilePhoto"],{

/***/ "m8/w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startProfilePhotoLoader", function() { return startProfilePhotoLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopProfilePhotoLoader", function() { return stopProfilePhotoLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadProfilePicture", function() { return doUploadProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveProfilePicture", function() { return doRemoveProfilePicture; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("y0DV");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lqrD");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // To Refresh the verification status

var query = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    query {\n        userAccount {\n            picture\n        }\n    }\n"])));
function startProfilePhotoLoader() {
  return function (dispatch, getState, _ref) {
    var client = _ref.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["PROFILE_PICTURE_LOADER_START"],
      payload: {
        profilePhotoLoading: true
      }
    });
  };
}
function stopProfilePhotoLoader() {
  return function (dispatch, getState, _ref2) {
    var client = _ref2.client;
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PROFILE_PICTURE_SUCCESS"],
      payload: {
        profilePhotoLoading: false
      }
    });
  };
}
function doUploadProfilePicture(picture, oldPicture) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref3) {
      var client, mutation, _yield$client$mutate, data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_PICTURE_START"]
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            mutation UploadProfilePicture($picture: String!){\n                UploadProfilePicture(picture: $picture) {\n                    status\n                }\n            }\n        "])));
              _context.prev = 3;

              if (!(oldPicture != null)) {
                _context.next = 7;
                break;
              }

              _context.next = 7;
              return removeProfilePhoto(oldPicture);

            case 7:
              _context.next = 9;
              return client.mutate({
                mutation: mutation,
                variables: {
                  picture: picture
                },
                refetchQueries: [{
                  query: query
                }]
              });

            case 9:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (data.UploadProfilePicture.status === "success") {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_PICTURE_SUCCESS"],
                  payload: {
                    profilePhotoLoading: false
                  }
                });
                dispatch(Object(_account__WEBPACK_IMPORTED_MODULE_3__["loadAccount"])());
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_PICTURE_ERROR"],
                  payload: {
                    status: status,
                    profilePhotoLoading: false
                  }
                });
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_PROFILE_PICTURE_ERROR"],
                payload: {
                  error: _context.t0,
                  profilePhotoLoading: false
                }
              });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 14]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function doRemoveProfilePicture(fileName) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref5) {
      var client, mutation, _yield$client$mutate2, data;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PROFILE_PICTURE_START"]
              });
              dispatch(startProfilePhotoLoader());
              _context2.prev = 3;
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                mutation RemoveProfilePicture{\n                    RemoveProfilePicture {\n                        status\n                    }\n                }\n            "])));
              _context2.next = 7;
              return client.mutate({
                mutation: mutation,
                refetchQueries: [{
                  query: query
                }]
              });

            case 7:
              _yield$client$mutate2 = _context2.sent;
              data = _yield$client$mutate2.data;

              if (!(data.RemoveProfilePicture.status === "success")) {
                _context2.next = 16;
                break;
              }

              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PROFILE_PICTURE_SUCCESS"],
                payload: {
                  profilePhotoLoading: false
                }
              });
              dispatch(Object(_account__WEBPACK_IMPORTED_MODULE_3__["loadAccount"])());
              _context2.next = 14;
              return removeProfilePhoto(fileName);

            case 14:
              _context2.next = 17;
              break;

            case 16:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PROFILE_PICTURE_ERROR"],
                payload: {
                  status: data.RemoveProfilePicture.status,
                  profilePhotoLoading: false
                }
              });

            case 17:
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PROFILE_PICTURE_ERROR"],
                payload: {
                  error: _context2.t0,
                  profilePhotoLoading: false
                }
              });

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 19]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}

function removeProfilePhoto(_x7) {
  return _removeProfilePhoto.apply(this, arguments);
}

function _removeProfilePhoto() {
  _removeProfilePhoto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fileName) {
    var resp, _yield$resp$json, _status;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/deleteProfilePicture', {
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
            resp = _context3.sent;
            _context3.next = 6;
            return resp.json();

          case 6:
            _yield$resp$json = _context3.sent;
            _status = _yield$resp$json.status;

            if (_status) {
              console.log('status from remove logo file', _status);
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
  return _removeProfilePhoto.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va35wcm9maWxlUGhvdG8uY2h1bmsuanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL21hbmFnZVVzZXJQcm9maWxlUGljdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uL2NvcmUvZmV0Y2gnO1xuXG5pbXBvcnQge1xuICAgIFBST0ZJTEVfUElDVFVSRV9MT0FERVJfU1RBUlQsXG4gICAgVVBMT0FEX1BST0ZJTEVfUElDVFVSRV9TVEFSVCxcbiAgICBVUExPQURfUFJPRklMRV9QSUNUVVJFX1NVQ0NFU1MsXG4gICAgVVBMT0FEX1BST0ZJTEVfUElDVFVSRV9FUlJPUixcbiAgICBSRU1PVkVfUFJPRklMRV9QSUNUVVJFX1NUQVJULFxuICAgIFJFTU9WRV9QUk9GSUxFX1BJQ1RVUkVfU1VDQ0VTUyxcbiAgICBSRU1PVkVfUFJPRklMRV9QSUNUVVJFX0VSUk9SXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IGxvYWRBY2NvdW50IH0gZnJvbSAnLi9hY2NvdW50JztcblxuLy8gVG8gUmVmcmVzaCB0aGUgdmVyaWZpY2F0aW9uIHN0YXR1c1xuY29uc3QgcXVlcnkgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgICB1c2VyQWNjb3VudCB7XG4gICAgICAgICAgICBwaWN0dXJlXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQcm9maWxlUGhvdG9Mb2FkZXIoKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogUFJPRklMRV9QSUNUVVJFX0xPQURFUl9TVEFSVCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBwcm9maWxlUGhvdG9Mb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wUHJvZmlsZVBob3RvTG9hZGVyKCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QUk9GSUxFX1BJQ1RVUkVfU1VDQ0VTUyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBwcm9maWxlUGhvdG9Mb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRQcm9maWxlUGljdHVyZShwaWN0dXJlLCBvbGRQaWN0dXJlKSB7XG5cbiAgICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9QUk9GSUxFX1BJQ1RVUkVfU1RBUlRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gVXBsb2FkUHJvZmlsZVBpY3R1cmUoJHBpY3R1cmU6IFN0cmluZyEpe1xuICAgICAgICAgICAgICAgIFVwbG9hZFByb2ZpbGVQaWN0dXJlKHBpY3R1cmU6ICRwaWN0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBpZiAob2xkUGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlUHJvZmlsZVBob3RvKG9sZFBpY3R1cmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgICAgIG11dGF0aW9uLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5VcGxvYWRQcm9maWxlUGljdHVyZS5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUExPQURfUFJPRklMRV9QSUNUVVJFX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVQaG90b0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2FkQWNjb3VudCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVUExPQURfUFJPRklMRV9QSUNUVVJFX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlUGhvdG9Mb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogVVBMT0FEX1BST0ZJTEVfUElDVFVSRV9FUlJPUixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlUGhvdG9Mb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVQcm9maWxlUGljdHVyZShmaWxlTmFtZSkge1xuXG4gICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9QUk9GSUxFX1BJQ1RVUkVfU1RBUlQgfSk7XG4gICAgICAgIGRpc3BhdGNoKHN0YXJ0UHJvZmlsZVBob3RvTG9hZGVyKCkpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgICAgICBtdXRhdGlvbiBSZW1vdmVQcm9maWxlUGljdHVyZXtcbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlUHJvZmlsZVBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnkgfV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5SZW1vdmVQcm9maWxlUGljdHVyZS5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUFJPRklMRV9QSUNUVVJFX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVQaG90b0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2FkQWNjb3VudCgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVQcm9maWxlUGhvdG8oZmlsZU5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QUk9GSUxFX1BJQ1RVUkVfRVJST1IsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5SZW1vdmVQcm9maWxlUGljdHVyZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlUGhvdG9Mb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUFJPRklMRV9QSUNUVVJFX0VSUk9SLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVQaG90b0xvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZVByb2ZpbGVQaG90byhmaWxlTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2RlbGV0ZVByb2ZpbGVQaWN0dXJlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZU5hbWUgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzIGZyb20gcmVtb3ZlIGxvZ28gZmlsZScsIHN0YXR1cyk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBmcm9tIHJlbW92ZSBmaWxlJywgZXJyb3IpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7O0FBRkE7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBTkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBckJBO0FBQUE7QUFvQkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQTdDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUF1REE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFPQTtBQVBBO0FBQUE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFmQTtBQUFBO0FBY0E7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUExQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBOUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUF4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFFQTs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBQ0E7QUFIQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFuQkE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==