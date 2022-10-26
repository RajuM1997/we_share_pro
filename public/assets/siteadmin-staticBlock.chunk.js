(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["siteadmin-staticBlock"],{

/***/ "3Cc/":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "7Gk+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("y0DV");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Fetch Request
 // Toaster



function submit(_x, _x2) {
  return _submit.apply(this, arguments);
}

function _submit() {
  _submit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values, dispatch) {
    var mutation, resp, _yield$resp$json, data;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!values.blockImage2 || !values.blockImage1)) {
              _context.next = 3;
              break;
            }

            react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update Static Block Settings", "Updating Static Block Settings failed");
            return _context.abrupt("return");

          case 3:
            mutation = "\n    mutation (\n      $headerTitle: String,\n      $headerContent: String,\n      $blockTitle1: String,\n      $blockContent1: String,\n      $blockTitle2: String,\n      $blockContent2: String,\n      $blockImage1: String,\n      $blockImage2: String,\n      $isEnable: String\n    ) {\n      updateStaticBlockSettings (\n        headerTitle: $headerTitle,\n        headerContent: $headerContent,\n        blockTitle1: $blockTitle1,\n        blockContent1: $blockContent1,\n        blockTitle2: $blockTitle2,\n        blockContent2: $blockContent2,\n        blockImage1: $blockImage1,\n        blockImage2: $blockImage2,\n        isEnable: $isEnable\n      ) {\n          status\n      }\n    }\n  ";
            _context.next = 6;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/graphql', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: mutation,
                variables: values
              }),
              credentials: 'include'
            });

          case 6:
            resp = _context.sent;
            _context.next = 9;
            return resp.json();

          case 9:
            _yield$resp$json = _context.sent;
            data = _yield$resp$json.data;

            if (data.updateStaticBlockSettings.status === "success") {
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Update Static Block Settings", "Changes are updated!");
            } else {
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Update Static Block Settings", "Updating Static Block Settings failed");
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _submit.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (submit);

/***/ }),

/***/ "8iQF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BlockUploader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hlsy");
/* harmony import */ var _BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_BlockUploader_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("86ze");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Y0O6");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3dzz");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Q7QM");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("e8ND");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("TXYE");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/BlockUploader/BlockUploader.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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









 // Redux


 // Component


 // Translation


 // Asset




var BlockUploader = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockUploader, _React$Component);

  var _super = _createSuper(BlockUploader);

  function BlockUploader() {
    _classCallCheck(this, BlockUploader);

    return _super.apply(this, arguments);
  }

  _createClass(BlockUploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$getLogoDa = _this$props.getLogoData,
          loading = _this$props$getLogoDa.loading,
          getStaticInfo = _this$props$getLogoDa.getStaticInfo,
          image = _this$props.image,
          doRemoveStaticImage = _this$props.doRemoveStaticImage,
          staticImageLoading = _this$props.staticImageLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.textAlignCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        show: staticImageLoading,
        type: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainerMain,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 30
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].loadingLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 35
        }
      }))), !loading && getStaticInfo && getStaticInfo[0].image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(/images/home/".concat(getStaticInfo[0].image, ")")
        },
        className: _BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.bannerImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 74
        }
      }), !loading && getStaticInfo && !getStaticInfo[0].image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }
      }), !loading && getStaticInfo[0].image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return doRemoveStaticImage(getStaticInfo[0].image, 'block1');
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.trashIconNew, 'trashIconNewRTL'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 57
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.space2, _BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.fullWidth, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPadding, 'photoUploadBtn'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: getStaticInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return BlockUploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BlockUploader, "propTypes", {
  staticImageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doRemoveStaticImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  getLogoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  })
});

_defineProperty(BlockUploader, "defaultProps", {
  profilePictureData: {
    loading: true
  },
  staticImageLoading: false
});

var selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_8__["formValueSelector"])('StaticBlockForm');

var mapState = function mapState(state) {
  return {
    staticImageLoading: state.homeBannerImages.staticImageLoading // image: selector(state, 'blockImage1')

  };
};

var mapDispatch = {
  doRemoveStaticImage: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_10__["doRemoveStaticImage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_BlockUploader_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($name: String) {\n    getStaticInfo(name: $name) {\n      name\n      image\n      content\n      title\n    }\n  }\n    "]))), {
  name: 'getLogoData',
  options: {
    ssr: false,
    variables: {
      name: 'block1'
    }
  }
}))(BlockUploader));

/***/ }),

/***/ "D0ny":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRPe");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wQmL");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ipP0");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("houE");
/* harmony import */ var _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BlockUploader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8iQF");
/* harmony import */ var _Uploader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tDSx");
/* harmony import */ var _submit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("7Gk+");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("TvQI");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Q7QM");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/StaticBlockForm.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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


 // Translation


 // Style












var StaticBlockForm = /*#__PURE__*/function (_Component) {
  _inherits(StaticBlockForm, _Component);

  var _super = _createSuper(StaticBlockForm);

  function StaticBlockForm() {
    var _this;

    _classCallCheck(this, StaticBlockForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderFormControlTextArea", function (_ref) {
      var input = _ref.input,
          label = _ref.label,
          _ref$meta = _ref.meta,
          touched = _ref$meta.touched,
          error = _ref$meta.error,
          children = _ref.children,
          className = _ref.className;
      var formatMessage = _this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.space3,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        className: className,
        componentClass: "textarea",
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.errorMessage,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFormControl", function (_ref2) {
      var input = _ref2.input,
          label = _ref2.label,
          type = _ref2.type,
          _ref2$meta = _ref2.meta,
          touched = _ref2$meta.touched,
          error = _ref2$meta.error,
          className = _ref2.className;
      var formatMessage = _this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.space3,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({}, input, {
        type: type,
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.commonControlInput,
        maxLength: 80,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      })), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.errorMessage,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 30
        }
      }, formatMessage(error)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFormControlSelect", function (_ref3) {
      var input = _ref3.input,
          _ref3$meta = _ref3.meta,
          touched = _ref3$meta.touched,
          error = _ref3$meta.error,
          children = _ref3.children,
          className = _ref3.className,
          disabled = _ref3.disabled;
      var formatMessage = _this.props.intl.formatMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.space3,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["FormControl"], _extends({
        disabled: disabled,
        componentClass: "select"
      }, input, {
        className: className,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }), children), touched && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.errorMessage,
        __self: _assertThisInitialized(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 32
        }
      }, formatMessage(error))));
    });

    return _this;
  }

  _createClass(StaticBlockForm, [{
    key: "render",
    value: function render() {
      var formatMessage = this.props.intl.formatMessage;
      var _this$props = this.props,
          error = _this$props.error,
          handleSubmit = _this$props.handleSubmit,
          submitting = _this$props.submitting,
          dispatch = _this$props.dispatch,
          initialValues = _this$props.initialValues;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.pagecontentWrapper, 'pagecontentAR'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].staticInfoBlock, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 45
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(_submit__WEBPACK_IMPORTED_MODULE_11__["default"]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 29
        }
      }, formatMessage(error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 6,
        sm: 12,
        md: 6,
        xs: 12,
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].headerTitle, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 58
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "headerTitle",
        type: "text",
        component: this.renderFormControl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].isActive, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 58
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "isEnable",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.commonControlSelect, 'commonAdminSelect'),
        component: this.renderFormControlSelect,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].enableLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }
      }, formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].disableLabel))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].headerTitleContent, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 56
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "headerContent",
        component: this.renderFormControlTextArea,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 27
        }
      })), " #1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockImageLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 58
        }
      })), " 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlockUploader__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockTitleLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 58
        }
      })), " 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "blockTitle1",
        type: "text",
        component: this.renderFormControl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockContentLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 58
        }
      })), " 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "blockContent1",
        component: this.renderFormControlTextArea,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 6,
        md: 6,
        sm: 12,
        xs: 12,
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.noPadding,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        lg: 12,
        md: 12,
        sm: 12,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 27
        }
      })), " #2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockImageLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 58
        }
      })), " 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Uploader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockTitleLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 58
        }
      })), " 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "blockTitle2",
        type: "text",
        component: this.renderFormControl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 23
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelTextNew,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].blockContentLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 58
        }
      })), " 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "blockContent2",
        component: this.renderFormControlTextArea,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 23
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.textAlignRight, _StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop3),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a.btnLarge),
        type: "submit",
        disabled: submitting,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].save, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 23
        }
      }))))))))));
    }
  }]);

  return StaticBlockForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(StaticBlockForm, "propTypes", {
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

StaticBlockForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({
  form: 'StaticBlockForm',
  // a unique name for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_12__["default"]
})(StaticBlockForm);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_StaticBlockForm_css__WEBPACK_IMPORTED_MODULE_7___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_8___default.a)(StaticBlockForm)));

/***/ }),

/***/ "GgPq":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.Uploader-space1-FCRrz {\n\tmargin-bottom: 6px !important;\n}\n.Uploader-space2-3cRQE {\n\tmargin-bottom: 12px !important;\n}\n.Uploader-space3-1VIGZ {\n\tmargin-bottom: 18px !important;\n}\n.Uploader-space4-1m_cG {\n\tmargin-bottom: 24px !important;\n}\n.Uploader-space5-eXEfW {\n\tmargin-bottom: 30px !important;\n}\n.Uploader-space6-2Vq58 {\n\tmargin-bottom: 36px !important;\n}\n.Uploader-space7-1Plc4 {\n\tmargin-bottom: 42px !important;\n}\n.Uploader-spaceTop8-vUdwX {\n\tmargin-bottom: 48px !important;\n}\n.Uploader-spaceTop1-2NFAI {\n\tmargin-top: 6px !important;\n}\n.Uploader-spaceTop2-2JwNL {\n\tmargin-top: 12px !important;\n}\n.Uploader-spaceTop3-EK-mi {\n\tmargin-top: 18px !important;\n}\n.Uploader-spaceTop4-1DOuT {\n\tmargin-top: 24px !important;\n}\n.Uploader-spaceTop5-1kGRe {\n\tmargin-top: 30px !important;\n}\n.Uploader-spaceTop6-SbdJV {\n\tmargin-top: 36px !important;\n}\n.Uploader-spaceTop7-3zac1 {\n\tmargin-top: 42px !important;\n}\n.Uploader-spaceTop8-vUdwX {\n\tmargin-top: 48px !important;\n}\n.Uploader-noMargin-YBJ4C {\n\tmargin: 0px !important;\n}\n.Uploader-padding1-AHFok {\n\tpadding-bottom: 6px !important;\n}\n.Uploader-padding2-Rh9gc {\n\tpadding-bottom: 12px !important;\n}\n.Uploader-padding3-3cvIq {\n\tpadding-bottom: 18px !important;\n}\n.Uploader-padding4-1YnyB {\n\tpadding-bottom: 24px !important;\n}\n.Uploader-padding5-XrnU8 {\n\tpadding-bottom: 30px !important;\n}\n.Uploader-padding6-8TB7r {\n\tpadding-bottom: 36px !important;\n}\n.Uploader-padding7-m7_eE {\n\tpadding-bottom: 42px !important;\n}\n.Uploader-paddingTop1-1Apz6 {\n\tpadding-top: 6px !important;\n}\n.Uploader-paddingTop2-2Pepy {\n\tpadding-top: 12px !important;\n}\n.Uploader-paddingTop3-CUUGN {\n\tpadding-top: 18px !important;\n}\n.Uploader-paddingTop4-1CKyG {\n\tpadding-top: 24px !important;\n}\n.Uploader-paddingTop5-2GT0K {\n\tpadding-top: 30px !important;\n}\n.Uploader-paddingTop6-19Q-X {\n\tpadding-top: 36px !important;\n}\n.Uploader-paddingTop7-67-7m {\n\tpadding-top: 42px !important;\n}\n.Uploader-noPadding-2UuY0 {\n\tpadding: 0px !important;\n}\n.Uploader-textBold-1r_VS {\n\tfont-weight: 500 !important;\n}\n.Uploader-textBolder-3HA_w {\n\tfont-weight: 700 !important;\n}\n.Uploader-textNormal-303j8 {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.Uploader-textDarkBlue-11YdM {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.Uploader-textLightBlue-kqePi {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.Uploader-textLightSandleGreen-2ktUd {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.Uploader-textLightBrown-26UPF {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.Uploader-textMediumMaroon-lLYLu {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.Uploader-textBrown-38kt6 {\n\tcolor: #B5DC4B !important;\n}\n.Uploader-textMaroon-1SVE6 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.Uploader-textDarkBrown-Jk8h4 {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.Uploader-textMediumBrown-26zEU {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.Uploader-textSkyBlue-2CjwS {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.Uploader-textGray-28Trr {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.Uploader-rentAllHeaderAdmin-2LHTx {\n  position: fixed !important;\n}\n.Uploader-adminLayout-2LvP2 {\n  padding-top: 64px !important;\n}\n.Uploader-box-256_n h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.Uploader-exportLink-1y151 {\n  margin-bottom: -29px;\n}\n.Uploader-blockcenter-2fLXs {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.Uploader-panelHeader-1Z2m2 {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.Uploader-currencyselect-10NPD {\n  width: 100%;\n  margin-right: 0px;\n}\n.Uploader-panelHeader-1Z2m2 {\n  overflow: hidden;\n  position: relative;\n}\n.Uploader-mar0-63xcj {\n  margin-left: 0;\n  margin-right: 0;\n}\n.Uploader-navbar-3fAfF > .Uploader-container-255Rj .Uploader-navbar-brand-1jJgm,\n.Uploader-navbar-3fAfF > .Uploader-container-fluid-3ADkt .Uploader-navbar-brand-1jJgm {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .Uploader-blockcenter-2fLXs {\n    padding: 0px;\n  }\n  .Uploader-panelHeader-1Z2m2 {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.Uploader-pagecontentWrapper-1KuTV {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.Uploader-headerTitle-2fDKy {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.Uploader-panelHeader-1Z2m2 {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.Uploader-table-lIsf1 {\n\tdisplay: table;\n}\n.Uploader-tableRow-38mkA {\n\tdisplay: table-row;\n}\n.Uploader-tableCell-2PHnr {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.Uploader-formGroup-2Eulm {\n\tmargin-bottom: 6px;\n}\n.Uploader-select-1jj4u {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.Uploader-noMargin-YBJ4C {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.Uploader-exportLink-1y151 {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.Uploader-labelTextNew-3U_Hn {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.Uploader-displayInline-2-X28 {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.Uploader-btnUPdate-2llQR {\n\tdisplay: inline-block;\n}\n.Uploader-btnModalDelete-1Gnv9 {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.Uploader-radioBtn-1YWJ_ {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.Uploader-btnUPdate-2llQR {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.Uploader-btnModalDelete-1Gnv9 {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.Uploader-btnWidth-3xc78 {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.Uploader-bannerImageBg-2P875 {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.Uploader-bannerDelete-2WHmj {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.Uploader-modalRoot-3BWse {\n\tpadding: 32px;\n}\n.Uploader-modalBorderBottom-3VD0L {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.Uploader-logInModalBody-2B1-U {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.Uploader-exportSection-pfrwX {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.Uploader-exportSectionGridSub-38zAV {\n\tgrid-template-columns: 50% 49% !important;\n}\n.Uploader-exportText-19DTg {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.Uploader-exportLinkImg-2lF9J {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.Uploader-vtrMiddle-E39BU {\n\tvertical-align: middle;\n}\n.Uploader-exportImg-38h4j {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.Uploader-profileViewlabel-3BDpW {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.Uploader-profileViewMainContent-2oMNh {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.Uploader-profileViewMain-18MHF {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.Uploader-profileViewInner-3mNQG {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.Uploader-profileImageSection-25cg_ {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.Uploader-lastviewInner-2VhJo {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.Uploader-pagecontentWrapper-1KuTV {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.Uploader-exportSection-pfrwX {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.Uploader-exportText-19DTg {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.Uploader-exportSectionGridSub-38zAV {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.Uploader-profileViewlabel-3BDpW {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.Uploader-profileViewMainContent-2oMNh {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.Uploader-pagecontentWrapper-1KuTV {\n\t\tmargin-left: 0;\n\t}\n}\n.Uploader-ChangeToUpperCase-36chE{\n    text-transform: uppercase\n}\n.Uploader-noBorder-34Ng1 {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/Uploader/Uploader.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"Uploader.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "Uploader-space1-FCRrz",
	"space2": "Uploader-space2-3cRQE",
	"space3": "Uploader-space3-1VIGZ",
	"space4": "Uploader-space4-1m_cG",
	"space5": "Uploader-space5-eXEfW",
	"space6": "Uploader-space6-2Vq58",
	"space7": "Uploader-space7-1Plc4",
	"spaceTop8": "Uploader-spaceTop8-vUdwX",
	"spaceTop1": "Uploader-spaceTop1-2NFAI",
	"spaceTop2": "Uploader-spaceTop2-2JwNL",
	"spaceTop3": "Uploader-spaceTop3-EK-mi",
	"spaceTop4": "Uploader-spaceTop4-1DOuT",
	"spaceTop5": "Uploader-spaceTop5-1kGRe",
	"spaceTop6": "Uploader-spaceTop6-SbdJV",
	"spaceTop7": "Uploader-spaceTop7-3zac1",
	"noMargin": "Uploader-noMargin-YBJ4C",
	"padding1": "Uploader-padding1-AHFok",
	"padding2": "Uploader-padding2-Rh9gc",
	"padding3": "Uploader-padding3-3cvIq",
	"padding4": "Uploader-padding4-1YnyB",
	"padding5": "Uploader-padding5-XrnU8",
	"padding6": "Uploader-padding6-8TB7r",
	"padding7": "Uploader-padding7-m7_eE",
	"paddingTop1": "Uploader-paddingTop1-1Apz6",
	"paddingTop2": "Uploader-paddingTop2-2Pepy",
	"paddingTop3": "Uploader-paddingTop3-CUUGN",
	"paddingTop4": "Uploader-paddingTop4-1CKyG",
	"paddingTop5": "Uploader-paddingTop5-2GT0K",
	"paddingTop6": "Uploader-paddingTop6-19Q-X",
	"paddingTop7": "Uploader-paddingTop7-67-7m",
	"noPadding": "Uploader-noPadding-2UuY0",
	"textBold": "Uploader-textBold-1r_VS",
	"textBolder": "Uploader-textBolder-3HA_w",
	"textNormal": "Uploader-textNormal-303j8",
	"textDarkBlue": "Uploader-textDarkBlue-11YdM",
	"textLightBlue": "Uploader-textLightBlue-kqePi",
	"textLightSandleGreen": "Uploader-textLightSandleGreen-2ktUd",
	"textLightBrown": "Uploader-textLightBrown-26UPF",
	"textMediumMaroon": "Uploader-textMediumMaroon-lLYLu",
	"textBrown": "Uploader-textBrown-38kt6",
	"textMaroon": "Uploader-textMaroon-1SVE6",
	"textDarkBrown": "Uploader-textDarkBrown-Jk8h4",
	"textMediumBrown": "Uploader-textMediumBrown-26zEU",
	"textSkyBlue": "Uploader-textSkyBlue-2CjwS",
	"textGray": "Uploader-textGray-28Trr",
	"rentAllHeaderAdmin": "Uploader-rentAllHeaderAdmin-2LHTx",
	"adminLayout": "Uploader-adminLayout-2LvP2",
	"box": "Uploader-box-256_n",
	"exportLink": "Uploader-exportLink-1y151",
	"blockcenter": "Uploader-blockcenter-2fLXs",
	"panelHeader": "Uploader-panelHeader-1Z2m2",
	"currencyselect": "Uploader-currencyselect-10NPD",
	"mar0": "Uploader-mar0-63xcj",
	"navbar": "Uploader-navbar-3fAfF",
	"container": "Uploader-container-255Rj",
	"navbar-brand": "Uploader-navbar-brand-1jJgm",
	"container-fluid": "Uploader-container-fluid-3ADkt",
	"pagecontentWrapper": "Uploader-pagecontentWrapper-1KuTV",
	"headerTitle": "Uploader-headerTitle-2fDKy",
	"table": "Uploader-table-lIsf1",
	"tableRow": "Uploader-tableRow-38mkA",
	"tableCell": "Uploader-tableCell-2PHnr",
	"formGroup": "Uploader-formGroup-2Eulm",
	"select": "Uploader-select-1jj4u",
	"labelTextNew": "Uploader-labelTextNew-3U_Hn",
	"displayInline": "Uploader-displayInline-2-X28",
	"btnUPdate": "Uploader-btnUPdate-2llQR",
	"btnModalDelete": "Uploader-btnModalDelete-1Gnv9",
	"radioBtn": "Uploader-radioBtn-1YWJ_",
	"btnWidth": "Uploader-btnWidth-3xc78",
	"bannerImageBg": "Uploader-bannerImageBg-2P875",
	"bannerDelete": "Uploader-bannerDelete-2WHmj",
	"modalRoot": "Uploader-modalRoot-3BWse",
	"modalBorderBottom": "Uploader-modalBorderBottom-3VD0L",
	"logInModalBody": "Uploader-logInModalBody-2B1-U",
	"exportSection": "Uploader-exportSection-pfrwX",
	"exportSectionGridSub": "Uploader-exportSectionGridSub-38zAV",
	"exportText": "Uploader-exportText-19DTg",
	"exportLinkImg": "Uploader-exportLinkImg-2lF9J",
	"vtrMiddle": "Uploader-vtrMiddle-E39BU",
	"exportImg": "Uploader-exportImg-38h4j",
	"profileViewlabel": "Uploader-profileViewlabel-3BDpW",
	"profileViewMainContent": "Uploader-profileViewMainContent-2oMNh",
	"profileViewMain": "Uploader-profileViewMain-18MHF",
	"profileViewInner": "Uploader-profileViewInner-3mNQG",
	"profileImageSection": "Uploader-profileImageSection-25cg_",
	"lastviewInner": "Uploader-lastviewInner-2VhJo",
	"ChangeToUpperCase": "Uploader-ChangeToUpperCase-36chE",
	"noBorder": "Uploader-noBorder-34Ng1"
};

/***/ }),

/***/ "QX2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WQjx");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("86ze");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Q7QM");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/Uploader/DropZone.js";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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









 //Message





var Dropzone = /*#__PURE__*/function (_Component) {
  _inherits(Dropzone, _Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props);
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.addedfile = _this.addedfile.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(Dropzone, [{
    key: "success",
    value: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fromServer) {
        var _this$props, doUploadStaticImageBlock, data, change, fileName, oldPicture, filePath;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, doUploadStaticImageBlock = _this$props.doUploadStaticImageBlock, data = _this$props.data, change = _this$props.change;
                fileName = fromServer.file.filename;
                oldPicture = data != null ? data[0].image : null;
                filePath = fromServer.file.path;
                doUploadStaticImageBlock(fileName, filePath, oldPicture, 'block2');
                _context.next = 7;
                return change('StaticBlockForm', 'blockImage2', fileName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x, _x2) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }, {
    key: "addedfile",
    value: function addedfile(file, fromServer) {
      var _this2 = this;

      var uploadStaticImageLoader = this.props.uploadStaticImageLoader;
      var fileFormates = ['image/svg+xml', 'application/sql', 'application/pdf', 'application/vnd.oasis.opendocument.presentation', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/epub+zip', 'application/zip', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.oasis.opendocument.spreadsheet', 'text/tab-separated-values', 'text/calendar', 'application/json'];

      if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_11__["maxUploadSize"]) {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
        this.dropzone.removeFile(file);
      } else if (fileFormates.indexOf(file && file.type) > 0) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
      } else if (file && file.accepted === false) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
      } else {
        uploadStaticImageLoader();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var formatMessage = this.props.intl.formatMessage;
      var djsConfig = {
        dictDefaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_10__["default"].clickHeretoUploadImage),
        addRemoveLinks: false,
        uploadMultiple: false,
        maxFilesize: 10,
        acceptedFiles: 'image/jpeg,image/png',
        dictMaxFilesExceeded: 'Remove the existing image and try upload again',
        previewsContainer: false // maxFiles: 1

      };
      var componentConfig = {
        iconFiletypes: ['.jpg', '.png'],
        postUrl: '/uploadHomeBanner'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this3.dropzone = dz;
        },
        success: this.success,
        addedfile: this.addedfile
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Dropzone, "propTypes", {
  doUploadStaticImageBlock: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  uploadStaticImageLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(Dropzone, "defaultProps", {
  image: null
});

var mapState = function mapState(state) {
  return {};
};

var mapDispatch = {
  uploadStaticImageLoader: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__["uploadStaticImageLoader"],
  doUploadStaticImageBlock: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__["doUploadStaticImageBlock"],
  change: redux_form__WEBPACK_IMPORTED_MODULE_5__["change"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "TvQI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Q7QM");


var validate = function validate(values) {
  var errors = {};

  if (!values.headerTitle) {
    errors.headerTitle = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.headerTitle.trim() == "") {
    errors.headerTitle = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  if (!values.headerContent) {
    errors.headerContent = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.headerContent.trim() == "") {
    errors.headerContent = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  if (!values.blockTitle1) {
    errors.blockTitle1 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.blockTitle1.trim() == "") {
    errors.blockTitle1 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  if (!values.blockContent1) {
    errors.blockContent1 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.blockContent1.trim() == "") {
    errors.blockContent1 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  if (!values.blockTitle2) {
    errors.blockTitle2 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.blockTitle2.trim() == "") {
    errors.blockTitle2 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  if (!values.blockContent2) {
    errors.blockContent2 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].required;
  } else if (values.blockContent2.trim() == "") {
    errors.blockContent2 = _locale_messages__WEBPACK_IMPORTED_MODULE_0__["default"].blankSpace;
  }

  return errors;
};

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "Vo0k":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.BlockUploader-space1-1KpV_ {\n\tmargin-bottom: 6px !important;\n}\n.BlockUploader-space2-3hZ87 {\n\tmargin-bottom: 12px !important;\n}\n.BlockUploader-space3-3zJZ8 {\n\tmargin-bottom: 18px !important;\n}\n.BlockUploader-space4-gitBM {\n\tmargin-bottom: 24px !important;\n}\n.BlockUploader-space5-3AZAO {\n\tmargin-bottom: 30px !important;\n}\n.BlockUploader-space6-3MMlu {\n\tmargin-bottom: 36px !important;\n}\n.BlockUploader-space7-2bN6Q {\n\tmargin-bottom: 42px !important;\n}\n.BlockUploader-spaceTop8-1-xR4 {\n\tmargin-bottom: 48px !important;\n}\n.BlockUploader-spaceTop1-3xSpU {\n\tmargin-top: 6px !important;\n}\n.BlockUploader-spaceTop2-2_-hU {\n\tmargin-top: 12px !important;\n}\n.BlockUploader-spaceTop3-1TcDm {\n\tmargin-top: 18px !important;\n}\n.BlockUploader-spaceTop4-2iKzy {\n\tmargin-top: 24px !important;\n}\n.BlockUploader-spaceTop5-yKoQm {\n\tmargin-top: 30px !important;\n}\n.BlockUploader-spaceTop6-4Ii6D {\n\tmargin-top: 36px !important;\n}\n.BlockUploader-spaceTop7-3kwC_ {\n\tmargin-top: 42px !important;\n}\n.BlockUploader-spaceTop8-1-xR4 {\n\tmargin-top: 48px !important;\n}\n.BlockUploader-noMargin-i4oIG {\n\tmargin: 0px !important;\n}\n.BlockUploader-padding1-1a1zq {\n\tpadding-bottom: 6px !important;\n}\n.BlockUploader-padding2-38lH_ {\n\tpadding-bottom: 12px !important;\n}\n.BlockUploader-padding3-BBTJ2 {\n\tpadding-bottom: 18px !important;\n}\n.BlockUploader-padding4-ne7lr {\n\tpadding-bottom: 24px !important;\n}\n.BlockUploader-padding5-2Shl2 {\n\tpadding-bottom: 30px !important;\n}\n.BlockUploader-padding6-3IJXG {\n\tpadding-bottom: 36px !important;\n}\n.BlockUploader-padding7-3vUOY {\n\tpadding-bottom: 42px !important;\n}\n.BlockUploader-paddingTop1-3gPlh {\n\tpadding-top: 6px !important;\n}\n.BlockUploader-paddingTop2-nNV04 {\n\tpadding-top: 12px !important;\n}\n.BlockUploader-paddingTop3-1J8CI {\n\tpadding-top: 18px !important;\n}\n.BlockUploader-paddingTop4-2-hXZ {\n\tpadding-top: 24px !important;\n}\n.BlockUploader-paddingTop5-h1HRK {\n\tpadding-top: 30px !important;\n}\n.BlockUploader-paddingTop6-gl9mP {\n\tpadding-top: 36px !important;\n}\n.BlockUploader-paddingTop7-TejGe {\n\tpadding-top: 42px !important;\n}\n.BlockUploader-noPadding-1AWej {\n\tpadding: 0px !important;\n}\n.BlockUploader-textBold-2w0c5 {\n\tfont-weight: 500 !important;\n}\n.BlockUploader-textBolder-2Dxah {\n\tfont-weight: 700 !important;\n}\n.BlockUploader-textNormal-32M8c {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.BlockUploader-textDarkBlue-oFpe2 {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.BlockUploader-textLightBlue-2u9Ju {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.BlockUploader-textLightSandleGreen-2h0fC {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.BlockUploader-textLightBrown-2ILjd {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.BlockUploader-textMediumMaroon-1U7ou {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.BlockUploader-textBrown-1Gl3A {\n\tcolor: #B5DC4B !important;\n}\n.BlockUploader-textMaroon-3yffE {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.BlockUploader-textDarkBrown-GrSyg {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.BlockUploader-textMediumBrown-1igss {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.BlockUploader-textSkyBlue-aMU27 {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.BlockUploader-textGray-1e0ot {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.BlockUploader-rentAllHeaderAdmin-Dodp4 {\n  position: fixed !important;\n}\n.BlockUploader-adminLayout-3a_Z3 {\n  padding-top: 64px !important;\n}\n.BlockUploader-box-cg5pe h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.BlockUploader-exportLink-2PVUz {\n  margin-bottom: -29px;\n}\n.BlockUploader-blockcenter-2HEk8 {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.BlockUploader-panelHeader-FI5AP {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.BlockUploader-currencyselect-zJ5HI {\n  width: 100%;\n  margin-right: 0px;\n}\n.BlockUploader-panelHeader-FI5AP {\n  overflow: hidden;\n  position: relative;\n}\n.BlockUploader-mar0-3rPWz {\n  margin-left: 0;\n  margin-right: 0;\n}\n.BlockUploader-navbar-wLlnR > .BlockUploader-container-MwwgJ .BlockUploader-navbar-brand-30Ait,\n.BlockUploader-navbar-wLlnR > .BlockUploader-container-fluid-3rQQZ .BlockUploader-navbar-brand-30Ait {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .BlockUploader-blockcenter-2HEk8 {\n    padding: 0px;\n  }\n  .BlockUploader-panelHeader-FI5AP {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.BlockUploader-pagecontentWrapper-2gEt7 {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.BlockUploader-headerTitle-2oi3V {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.BlockUploader-panelHeader-FI5AP {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.BlockUploader-table-97a9T {\n\tdisplay: table;\n}\n.BlockUploader-tableRow-1oUnE {\n\tdisplay: table-row;\n}\n.BlockUploader-tableCell-2iuML {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.BlockUploader-formGroup-1A7PB {\n\tmargin-bottom: 6px;\n}\n.BlockUploader-select-3KqCh {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.BlockUploader-noMargin-i4oIG {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.BlockUploader-exportLink-2PVUz {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.BlockUploader-labelTextNew-28Yr6 {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.BlockUploader-displayInline-6ibRc {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.BlockUploader-btnUPdate-3Yapm {\n\tdisplay: inline-block;\n}\n.BlockUploader-btnModalDelete-1Xeqs {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.BlockUploader-radioBtn-x7z71 {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.BlockUploader-btnUPdate-3Yapm {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.BlockUploader-btnModalDelete-1Xeqs {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.BlockUploader-btnWidth-YURwF {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.BlockUploader-bannerImageBg-1e0tg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.BlockUploader-bannerDelete-3hrZR {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.BlockUploader-modalRoot-kJVGW {\n\tpadding: 32px;\n}\n.BlockUploader-modalBorderBottom-304Rn {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.BlockUploader-logInModalBody-3jmPx {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.BlockUploader-exportSection-3hd2A {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.BlockUploader-exportSectionGridSub-2HiXr {\n\tgrid-template-columns: 50% 49% !important;\n}\n.BlockUploader-exportText-37d0G {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.BlockUploader-exportLinkImg-1OvaZ {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.BlockUploader-vtrMiddle-VBn31 {\n\tvertical-align: middle;\n}\n.BlockUploader-exportImg-2nPmj {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.BlockUploader-profileViewlabel-2ZOUS {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.BlockUploader-profileViewMainContent-3JrNM {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.BlockUploader-profileViewMain-27I1K {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.BlockUploader-profileViewInner-3vouK {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.BlockUploader-profileImageSection-jwD_m {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.BlockUploader-lastviewInner-3sWd7 {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.BlockUploader-pagecontentWrapper-2gEt7 {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.BlockUploader-exportSection-3hd2A {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.BlockUploader-exportText-37d0G {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.BlockUploader-exportSectionGridSub-2HiXr {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.BlockUploader-profileViewlabel-2ZOUS {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.BlockUploader-profileViewMainContent-3JrNM {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.BlockUploader-pagecontentWrapper-2gEt7 {\n\t\tmargin-left: 0;\n\t}\n}\n.BlockUploader-ChangeToUpperCase-HV6FB{\n    text-transform: uppercase\n}\n.BlockUploader-noBorder-3ODMa {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/BlockUploader/BlockUploader.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B","file":"BlockUploader.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "BlockUploader-space1-1KpV_",
	"space2": "BlockUploader-space2-3hZ87",
	"space3": "BlockUploader-space3-3zJZ8",
	"space4": "BlockUploader-space4-gitBM",
	"space5": "BlockUploader-space5-3AZAO",
	"space6": "BlockUploader-space6-3MMlu",
	"space7": "BlockUploader-space7-2bN6Q",
	"spaceTop8": "BlockUploader-spaceTop8-1-xR4",
	"spaceTop1": "BlockUploader-spaceTop1-3xSpU",
	"spaceTop2": "BlockUploader-spaceTop2-2_-hU",
	"spaceTop3": "BlockUploader-spaceTop3-1TcDm",
	"spaceTop4": "BlockUploader-spaceTop4-2iKzy",
	"spaceTop5": "BlockUploader-spaceTop5-yKoQm",
	"spaceTop6": "BlockUploader-spaceTop6-4Ii6D",
	"spaceTop7": "BlockUploader-spaceTop7-3kwC_",
	"noMargin": "BlockUploader-noMargin-i4oIG",
	"padding1": "BlockUploader-padding1-1a1zq",
	"padding2": "BlockUploader-padding2-38lH_",
	"padding3": "BlockUploader-padding3-BBTJ2",
	"padding4": "BlockUploader-padding4-ne7lr",
	"padding5": "BlockUploader-padding5-2Shl2",
	"padding6": "BlockUploader-padding6-3IJXG",
	"padding7": "BlockUploader-padding7-3vUOY",
	"paddingTop1": "BlockUploader-paddingTop1-3gPlh",
	"paddingTop2": "BlockUploader-paddingTop2-nNV04",
	"paddingTop3": "BlockUploader-paddingTop3-1J8CI",
	"paddingTop4": "BlockUploader-paddingTop4-2-hXZ",
	"paddingTop5": "BlockUploader-paddingTop5-h1HRK",
	"paddingTop6": "BlockUploader-paddingTop6-gl9mP",
	"paddingTop7": "BlockUploader-paddingTop7-TejGe",
	"noPadding": "BlockUploader-noPadding-1AWej",
	"textBold": "BlockUploader-textBold-2w0c5",
	"textBolder": "BlockUploader-textBolder-2Dxah",
	"textNormal": "BlockUploader-textNormal-32M8c",
	"textDarkBlue": "BlockUploader-textDarkBlue-oFpe2",
	"textLightBlue": "BlockUploader-textLightBlue-2u9Ju",
	"textLightSandleGreen": "BlockUploader-textLightSandleGreen-2h0fC",
	"textLightBrown": "BlockUploader-textLightBrown-2ILjd",
	"textMediumMaroon": "BlockUploader-textMediumMaroon-1U7ou",
	"textBrown": "BlockUploader-textBrown-1Gl3A",
	"textMaroon": "BlockUploader-textMaroon-3yffE",
	"textDarkBrown": "BlockUploader-textDarkBrown-GrSyg",
	"textMediumBrown": "BlockUploader-textMediumBrown-1igss",
	"textSkyBlue": "BlockUploader-textSkyBlue-aMU27",
	"textGray": "BlockUploader-textGray-1e0ot",
	"rentAllHeaderAdmin": "BlockUploader-rentAllHeaderAdmin-Dodp4",
	"adminLayout": "BlockUploader-adminLayout-3a_Z3",
	"box": "BlockUploader-box-cg5pe",
	"exportLink": "BlockUploader-exportLink-2PVUz",
	"blockcenter": "BlockUploader-blockcenter-2HEk8",
	"panelHeader": "BlockUploader-panelHeader-FI5AP",
	"currencyselect": "BlockUploader-currencyselect-zJ5HI",
	"mar0": "BlockUploader-mar0-3rPWz",
	"navbar": "BlockUploader-navbar-wLlnR",
	"container": "BlockUploader-container-MwwgJ",
	"navbar-brand": "BlockUploader-navbar-brand-30Ait",
	"container-fluid": "BlockUploader-container-fluid-3rQQZ",
	"pagecontentWrapper": "BlockUploader-pagecontentWrapper-2gEt7",
	"headerTitle": "BlockUploader-headerTitle-2oi3V",
	"table": "BlockUploader-table-97a9T",
	"tableRow": "BlockUploader-tableRow-1oUnE",
	"tableCell": "BlockUploader-tableCell-2iuML",
	"formGroup": "BlockUploader-formGroup-1A7PB",
	"select": "BlockUploader-select-3KqCh",
	"labelTextNew": "BlockUploader-labelTextNew-28Yr6",
	"displayInline": "BlockUploader-displayInline-6ibRc",
	"btnUPdate": "BlockUploader-btnUPdate-3Yapm",
	"btnModalDelete": "BlockUploader-btnModalDelete-1Xeqs",
	"radioBtn": "BlockUploader-radioBtn-x7z71",
	"btnWidth": "BlockUploader-btnWidth-YURwF",
	"bannerImageBg": "BlockUploader-bannerImageBg-1e0tg",
	"bannerDelete": "BlockUploader-bannerDelete-3hrZR",
	"modalRoot": "BlockUploader-modalRoot-kJVGW",
	"modalBorderBottom": "BlockUploader-modalBorderBottom-304Rn",
	"logInModalBody": "BlockUploader-logInModalBody-3jmPx",
	"exportSection": "BlockUploader-exportSection-3hd2A",
	"exportSectionGridSub": "BlockUploader-exportSectionGridSub-2HiXr",
	"exportText": "BlockUploader-exportText-37d0G",
	"exportLinkImg": "BlockUploader-exportLinkImg-1OvaZ",
	"vtrMiddle": "BlockUploader-vtrMiddle-VBn31",
	"exportImg": "BlockUploader-exportImg-2nPmj",
	"profileViewlabel": "BlockUploader-profileViewlabel-2ZOUS",
	"profileViewMainContent": "BlockUploader-profileViewMainContent-3JrNM",
	"profileViewMain": "BlockUploader-profileViewMain-27I1K",
	"profileViewInner": "BlockUploader-profileViewInner-3vouK",
	"profileImageSection": "BlockUploader-profileImageSection-jwD_m",
	"lastviewInner": "BlockUploader-lastviewInner-3sWd7",
	"ChangeToUpperCase": "BlockUploader-ChangeToUpperCase-HV6FB",
	"noBorder": "BlockUploader-noBorder-3ODMa"
};

/***/ }),

/***/ "WQjx":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("ulmq");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "Xog7":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("3Cc/");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "Y0O6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VRIH");
/* harmony import */ var react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Xog7");
/* harmony import */ var _isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("86ze");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Q7QM");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("20nU");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/BlockUploader/DropZone.js";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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









 //Message





var Dropzone = /*#__PURE__*/function (_Component) {
  _inherits(Dropzone, _Component);

  var _super = _createSuper(Dropzone);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this, props);
    _this.success = _this.success.bind(_assertThisInitialized(_this));
    _this.addedfile = _this.addedfile.bind(_assertThisInitialized(_this));
    _this.dropzone = null;
    return _this;
  }

  _createClass(Dropzone, [{
    key: "success",
    value: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, fromServer) {
        var _this$props, doUploadStaticImage, data, change, fileName, oldPicture, filePath;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, doUploadStaticImage = _this$props.doUploadStaticImage, data = _this$props.data, change = _this$props.change;
                fileName = fromServer.file.filename;
                oldPicture = data != null ? data[0].image : null;
                filePath = fromServer.file.path;
                doUploadStaticImage(fileName, filePath, oldPicture, 'block1');
                _context.next = 7;
                return change('StaticBlockForm', 'blockImage1', fileName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function success(_x, _x2) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }, {
    key: "addedfile",
    value: function addedfile(file, fromServer) {
      var _this2 = this;

      var _this$props2 = this.props,
          startStaticImageLoader = _this$props2.startStaticImageLoader,
          stopStaticImageLoader = _this$props2.stopStaticImageLoader;
      var fileFormates = ['image/svg+xml', 'application/sql', 'application/pdf', 'application/vnd.oasis.opendocument.presentation', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/epub+zip', 'application/zip', 'text/plain', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.oasis.opendocument.spreadsheet', 'text/tab-separated-values', 'text/calendar', 'application/json'];

      if (file && file.size > 1024 * 1024 * _config__WEBPACK_IMPORTED_MODULE_11__["maxUploadSize"]) {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Maximum upload size Exceeded! ', 'Try again with a smaller sized image');
        this.dropzone.removeFile(file);
      } else if (fileFormates.indexOf(file && file.type) > 0) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
      } else if (file && file.accepted === false) {
        setTimeout(function () {
          if (file && file.accepted === false) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__["toastr"].error('Error!', 'You are trying to upload invalid image file. Please upload PNG, JPG & JPEG format image file.');

            _this2.dropzone.removeFile(file.name);
          }
        }, 1000);
      } else {
        startStaticImageLoader();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var formatMessage = this.props.intl.formatMessage;
      var djsConfig = {
        dictDefaultMessage: formatMessage(_locale_messages__WEBPACK_IMPORTED_MODULE_10__["default"].clickHeretoUploadImage),
        addRemoveLinks: false,
        uploadMultiple: false,
        maxFilesize: 10,
        acceptedFiles: 'image/jpeg, image/png',
        dictMaxFilesExceeded: 'Remove the existing image and try upload again',
        previewsContainer: false // maxFiles: 1

      };
      var componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.jpeg'],
        postUrl: '/uploadHomeBanner'
      };
      var eventHandlers = {
        init: function init(dz) {
          return _this3.dropzone = dz;
        },
        success: this.success,
        addedfile: this.addedfile
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
        config: componentConfig,
        eventHandlers: eventHandlers,
        djsConfig: djsConfig,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Dropzone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Dropzone, "propTypes", {
  doUploadStaticImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  startStaticImageLoader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
});

_defineProperty(Dropzone, "defaultProps", {
  image: null
});

var mapState = function mapState(state) {
  return {};
};

var mapDispatch = {
  // doRemoveLogo,
  startStaticImageLoader: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__["startStaticImageLoader"],
  stopStaticImageLoader: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__["stopStaticImageLoader"],
  doUploadStaticImage: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_8__["doUploadStaticImage"],
  change: redux_form__WEBPACK_IMPORTED_MODULE_5__["change"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_isomorphic_style_loader_css_loader_filepicker_css__WEBPACK_IMPORTED_MODULE_4___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatch)(Dropzone))));

/***/ }),

/***/ "ZadH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/staticBlock/StaticBlock.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC","file":"StaticBlock.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "aH3z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StaticBlock_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hmB1");
/* harmony import */ var _StaticBlock_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_StaticBlock_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_siteadmin_StaticBlockForm_StaticBlockForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("D0ny");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3dzz");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/staticBlock/StaticBlock.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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



 // Style


 // Component




var StaticBlock = /*#__PURE__*/function (_React$Component) {
  _inherits(StaticBlock, _React$Component);

  var _super = _createSuper(StaticBlock);

  function StaticBlock() {
    _classCallCheck(this, StaticBlock);

    return _super.apply(this, arguments);
  }

  _createClass(StaticBlock, [{
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          loading = _this$props$data.loading,
          getStaticInfo = _this$props$data.getStaticInfo;
      var settingsCollection = {};

      if (loading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 14
          }
        });
      } else {
        getStaticInfo.map(function (item, key) {
          if (item.name == 'header') {
            settingsCollection['headerTitle'] = item.title;
            settingsCollection['headerContent'] = item.content;
            settingsCollection['isEnable'] = item.isEnable;
          } else if (item.name == 'block1') {
            settingsCollection['blockTitle1'] = item.title;
            settingsCollection['blockContent1'] = item.content;
            settingsCollection['blockImage1'] = item.image;
          } else {
            settingsCollection['blockTitle2'] = item.title;
            settingsCollection['blockContent2'] = item.content;
            settingsCollection['blockImage2'] = item.image;
          }
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_siteadmin_StaticBlockForm_StaticBlockForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
          initialValues: settingsCollection,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 14
          }
        });
      }
    }
  }]);

  return StaticBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(StaticBlock, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getStaticInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
});

_defineProperty(StaticBlock, "defaultProps", {
  data: {
    loading: true,
    image: null
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_StaticBlock_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      {\n        getStaticInfo {\n            title\n            content\n            name\n            image\n            isEnable\n          }\n      }\n      "])))))(StaticBlock));

/***/ }),

/***/ "gV23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uxpw");
/* harmony import */ var _StaticBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aH3z");
/* harmony import */ var _actions_siteadmin_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("D4mp");
/* harmony import */ var _helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WdaF");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/siteadmin/staticBlock/index.js";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var title = 'Static Info Block';
function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var store, dispatch, isAdminAuthenticated, adminPrivileges;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, dispatch = _ref.dispatch;
            // From Redux Store
            isAdminAuthenticated = store.getState().runtime.isAdminAuthenticated;
            adminPrivileges = store.getState().adminPrevileges.privileges && store.getState().adminPrevileges.privileges.privileges;
            _context.next = 5;
            return store.dispatch(Object(_actions_siteadmin_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());

          case 5:
            if (isAdminAuthenticated) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              redirect: '/siteadmin/login'
            });

          case 7:
            if (Object(_helpers_adminPrivileges__WEBPACK_IMPORTED_MODULE_4__["restrictUrls"])('/siteadmin/home/static-info-block', adminPrivileges)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              redirect: '/siteadmin'
            });

          case 9:
            return _context.abrupt("return", {
              title: title,
              component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_AdminLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 16
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StaticBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
                title: title,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 29
                }
              }))
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/***/ }),

/***/ "hPAY":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.StaticBlockForm-rentAllHeaderAdmin-3cqM5 {\n  position: fixed !important;\n}\n.StaticBlockForm-adminLayout-stFBl {\n  padding-top: 64px !important;\n}\n.StaticBlockForm-box-2yaEU h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.StaticBlockForm-exportLink-3NuO4 {\n  margin-bottom: -29px;\n}\n.StaticBlockForm-blockcenter-1d07I {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.StaticBlockForm-panelHeader-1CZU4 {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.StaticBlockForm-currencyselect-IEBLN {\n  width: 100%;\n  margin-right: 0px;\n}\n.StaticBlockForm-panelHeader-1CZU4 {\n  overflow: hidden;\n  position: relative;\n}\n.StaticBlockForm-mar0-19Q3D {\n  margin-left: 0;\n  margin-right: 0;\n}\n.StaticBlockForm-navbar-3Iq_e > .StaticBlockForm-container-1Q-co .StaticBlockForm-navbar-brand-7PA4z,\n.StaticBlockForm-navbar-3Iq_e > .StaticBlockForm-container-fluid-2nXxg .StaticBlockForm-navbar-brand-7PA4z {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .StaticBlockForm-blockcenter-1d07I {\n    padding: 0px;\n  }\n  .StaticBlockForm-panelHeader-1CZU4 {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.StaticBlockForm-pagecontentWrapper-1goNm {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.StaticBlockForm-headerTitle-dSndB {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.StaticBlockForm-panelHeader-1CZU4 {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.StaticBlockForm-table-YCOcB {\n\tdisplay: table;\n}\n.StaticBlockForm-tableRow-3Ct_I {\n\tdisplay: table-row;\n}\n.StaticBlockForm-tableCell-1Dbxa {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.StaticBlockForm-formGroup-3tWn9 {\n\tmargin-bottom: 6px;\n}\n.StaticBlockForm-select-30sLC {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.StaticBlockForm-noMargin-22bX2 {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.StaticBlockForm-exportLink-3NuO4 {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.StaticBlockForm-labelTextNew-97mOf {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.StaticBlockForm-displayInline-3Futa {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.StaticBlockForm-btnUPdate-2OZIQ {\n\tdisplay: inline-block;\n}\n.StaticBlockForm-btnModalDelete-XAhvR {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.StaticBlockForm-radioBtn-2H8oO {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.StaticBlockForm-btnUPdate-2OZIQ {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.StaticBlockForm-btnModalDelete-XAhvR {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.StaticBlockForm-btnWidth-3fCa1 {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.StaticBlockForm-bannerImageBg-14-4i {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.StaticBlockForm-bannerDelete-1d2UC {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.StaticBlockForm-modalRoot-3OqWM {\n\tpadding: 32px;\n}\n.StaticBlockForm-modalBorderBottom-3bmSu {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.StaticBlockForm-logInModalBody-3waMB {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.StaticBlockForm-exportSection-23WLi {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.StaticBlockForm-exportSectionGridSub-3BaPc {\n\tgrid-template-columns: 50% 49% !important;\n}\n.StaticBlockForm-exportText-16C9l {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.StaticBlockForm-exportLinkImg-1DB5N {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.StaticBlockForm-vtrMiddle-28ooX {\n\tvertical-align: middle;\n}\n.StaticBlockForm-exportImg-1acP4 {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.StaticBlockForm-profileViewlabel-1Eo0B {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.StaticBlockForm-profileViewMainContent-1pMHd {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.StaticBlockForm-profileViewMain-11-Wh {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.StaticBlockForm-profileViewInner-1Zbpx {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.StaticBlockForm-profileImageSection-3bPPQ {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.StaticBlockForm-lastviewInner-ouvjn {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.StaticBlockForm-pagecontentWrapper-1goNm {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.StaticBlockForm-exportSection-23WLi {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.StaticBlockForm-exportText-16C9l {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.StaticBlockForm-exportSectionGridSub-3BaPc {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.StaticBlockForm-profileViewlabel-1Eo0B {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.StaticBlockForm-profileViewMainContent-1pMHd {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.StaticBlockForm-pagecontentWrapper-1goNm {\n\t\tmargin-left: 0;\n\t}\n}\n.StaticBlockForm-ChangeToUpperCase-2yY-f{\n    text-transform: uppercase\n}\n.StaticBlockForm-noBorder-3Rdgy {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.StaticBlockForm-errorMessage-1wsIp {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.StaticBlockForm-panelHeader-1CZU4{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.StaticBlockForm-formGroup-3tWn9 {\n  margin-bottom: 6px;\n}\n.StaticBlockForm-select-30sLC {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.StaticBlockForm-labelText-1Ya42{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.StaticBlockForm-space1-2PGZ5 {\n\tmargin-bottom: 6px !important;\n}\n.StaticBlockForm-space2-FBLAi {\n\tmargin-bottom: 12px !important;\n}\n.StaticBlockForm-space3-IF4Ql {\n\tmargin-bottom: 18px !important;\n}\n.StaticBlockForm-space4-2dA1b {\n\tmargin-bottom: 24px !important;\n}\n.StaticBlockForm-space5-SSVFh {\n\tmargin-bottom: 30px !important;\n}\n.StaticBlockForm-space6-iMtcU {\n\tmargin-bottom: 36px !important;\n}\n.StaticBlockForm-space7-3Zlq3 {\n\tmargin-bottom: 42px !important;\n}\n.StaticBlockForm-spaceTop8-3d4NH {\n\tmargin-bottom: 48px !important;\n}\n.StaticBlockForm-spaceTop1-24QR9 {\n\tmargin-top: 6px !important;\n}\n.StaticBlockForm-spaceTop2-3bs2o {\n\tmargin-top: 12px !important;\n}\n.StaticBlockForm-spaceTop3-3stR3 {\n\tmargin-top: 18px !important;\n}\n.StaticBlockForm-spaceTop4-2wINV {\n\tmargin-top: 24px !important;\n}\n.StaticBlockForm-spaceTop5-3aoFl {\n\tmargin-top: 30px !important;\n}\n.StaticBlockForm-spaceTop6-3Xvav {\n\tmargin-top: 36px !important;\n}\n.StaticBlockForm-spaceTop7-2oDjX {\n\tmargin-top: 42px !important;\n}\n.StaticBlockForm-spaceTop8-3d4NH {\n\tmargin-top: 48px !important;\n}\n.StaticBlockForm-noMargin-22bX2 {\n\tmargin: 0px !important;\n}\n.StaticBlockForm-padding1-2-C_c {\n\tpadding-bottom: 6px !important;\n}\n.StaticBlockForm-padding2-2XPka {\n\tpadding-bottom: 12px !important;\n}\n.StaticBlockForm-padding3-2qkqQ {\n\tpadding-bottom: 18px !important;\n}\n.StaticBlockForm-padding4-396Z4 {\n\tpadding-bottom: 24px !important;\n}\n.StaticBlockForm-padding5-xJpnO {\n\tpadding-bottom: 30px !important;\n}\n.StaticBlockForm-padding6-1J-gF {\n\tpadding-bottom: 36px !important;\n}\n.StaticBlockForm-padding7-1RJL0 {\n\tpadding-bottom: 42px !important;\n}\n.StaticBlockForm-paddingTop1-IAAWb {\n\tpadding-top: 6px !important;\n}\n.StaticBlockForm-paddingTop2-2uY0W {\n\tpadding-top: 12px !important;\n}\n.StaticBlockForm-paddingTop3-1g6gM {\n\tpadding-top: 18px !important;\n}\n.StaticBlockForm-paddingTop4-rYJr6 {\n\tpadding-top: 24px !important;\n}\n.StaticBlockForm-paddingTop5-1N7rc {\n\tpadding-top: 30px !important;\n}\n.StaticBlockForm-paddingTop6-20JIq {\n\tpadding-top: 36px !important;\n}\n.StaticBlockForm-paddingTop7-3pCpU {\n\tpadding-top: 42px !important;\n}\n.StaticBlockForm-noPadding-3xkfL {\n\tpadding: 0px !important;\n}\n.StaticBlockForm-textBold-1yaog {\n\tfont-weight: 500 !important;\n}\n.StaticBlockForm-textBolder-BDLNe {\n\tfont-weight: 700 !important;\n}\n.StaticBlockForm-textNormal-20qw3 {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.StaticBlockForm-textDarkBlue-h4PgT {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.StaticBlockForm-textLightBlue-2Wrlg {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.StaticBlockForm-textLightSandleGreen-39gCq {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.StaticBlockForm-textLightBrown-1YAIO {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.StaticBlockForm-textMediumMaroon-1WR7x {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.StaticBlockForm-textBrown-1Ia9j {\n\tcolor: #B5DC4B !important;\n}\n.StaticBlockForm-textMaroon-3LXSH {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.StaticBlockForm-textDarkBrown-2d_9v {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.StaticBlockForm-textMediumBrown-2PXnV {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.StaticBlockForm-textSkyBlue-2a2e0 {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.StaticBlockForm-textGray-rQhZf {\n\tcolor: rgb(77, 65, 51) !important;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/StaticBlockForm.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,gCAAgC;EAChC,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE;IACE,aAAa;GACd;EACD;IACE,kBAAkB;GACnB;CACF;AACD,8BAA8B;AAC9B;CACC,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,qBAAqB;CACrB,qBAAqB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;CACC,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB,YAAY;CACZ;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,uBAAuB;CACvB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ;AACD;;CAEC,gBAAgB;CAChB;AACD;CACC,kBAAkB;CAClB,oBAAoB;CACpB;AACD;CACC,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB;AACD;CACC,sBAAsB;CACtB;AACD,uEAAuE;AACvE;CACC,sBAAsB;CACtB;AACD;CACC,sBAAsB;CACtB,kBAAkB;CAClB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB;AACD;CACC;EACC,eAAe;EACf,oBAAoB;EACpB;CACD;EACC,eAAe;EACf,iBAAiB;EACjB;CACD;EACC,YAAY;EACZ;CACD;AACD,uEAAuE;AACvE,uEAAuE;AACvE;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,6BAA6B;CAC7B,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,SAAS;CACT,YAAY;CACZ;AACD,6DAA6D;AAC7D;CACC,cAAc;CACd;AACD;CACC,iCAAiC;CACjC,+CAA+C;CAC/C,+BAA+B;CAC/B,gCAAgC;CAChC;AACD;CACC,aAAa;CACb;AACD,uEAAuE;AACvE;CACC,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;CACd,mCAAmC;CACnC,0BAA0B;KACtB,uBAAuB;SACnB,oBAAoB;CAC5B,eAAe;CACf,4BAA4B;CAC5B,6BAA6B;CAC7B,0BAA0B;CAC1B,iBAAiB;CACjB;AACD;CACC,0CAA0C;CAC1C;AACD;CACC,0BAA0B;CAC1B,iCAAiC;CACjC,sBAAsB;CACtB,aAAa;CACb;AACD;CACC,iBAAiB;CACjB,cAAc;CACd,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB,uBAAuB;CACvB;AACD;CACC,sBAAsB;CACtB,UAAU;CACV;AACD;CACC,sBAAsB;CACtB,WAAW;CACX;AACD;CACC,0BAA0B;CAC1B,mBAAmB;CACnB;AACD;CACC,cAAc;CACd,iCAAiC;CACjC;AACD;CACC,YAAY;CACZ,aAAa;CACb,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,cAAc;CACd;AACD;CACC;EACC,oBAAoB;QACd,cAAc;QACd,eAAe;EACrB;CACD;AACD;CACC;EACC,4BAA4B;EAC5B;CACD;EACC,YAAY;EACZ,iBAAiB;EACjB;CACD;EACC,uCAAuC;EACvC;CACD;AACD;CACC;EACC,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB;CACD;EACC,YAAY;EACZ,mBAAmB;EACnB;CACD;AACD,qEAAqE;AACrE;CACC;EACC,eAAe;EACf;CACD;AACD;IACI,yBAAyB;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,qBAAqB;CACrB,iCAAiC;CACjC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;CACnB;AACD;CACC,gBAAgB;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;CACxB;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC","file":"StaticBlockForm.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.rentAllHeaderAdmin {\n  position: fixed !important;\n}\n.adminLayout {\n  padding-top: 64px !important;\n}\n.box h2 {\n  font-size: 21px;\n  font-weight: 600;\n}\n.exportLink {\n  margin-bottom: -29px;\n}\n.blockcenter {\n  float: none;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n.panelHeader {\n  padding-bottom: 18px !important;\n  padding: 24px 15px;\n  border-radius: 6px !important;\n  border: 1px solid #dce0e0;\n}\n.currencyselect {\n  width: 100%;\n  margin-right: 0px;\n}\n.panelHeader {\n  overflow: hidden;\n  position: relative;\n}\n.mar0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.navbar > .container .navbar-brand,\n.navbar > .container-fluid .navbar-brand {\n  margin-left: -50px !important;\n}\n@media screen and (max-width: 767px) {\n  .blockcenter {\n    padding: 0px;\n  }\n  .panelHeader {\n    padding: 24px 5px;\n  }\n}\n/** Admin - Common - Start **/\n.pagecontentWrapper {\n\tmargin-left: 270px;\n\tposition: relative;\n\tbackground: #fff;\n\tpadding: 80px 25px;\n}\n.headerTitle {\n\tfont-size: 24px;\n\tmargin: 0px 0px 15px;\n\tpadding-bottom: 10px;\n}\n.panelHeader {\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.table {\n\tdisplay: table;\n}\n.tableRow {\n\tdisplay: table-row;\n}\n.tableCell {\n\tdisplay: table-cell;\n\tfloat: none;\n}\n.formGroup {\n\tmargin-bottom: 6px;\n}\n.select {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tmargin-right: 5px;\n}\n.noMargin {\n\tmargin: 0px;\n}\na,\na:hover {\n\tcursor: pointer;\n}\n.exportLink {\n\tpadding-top: 10px;\n\tpadding-right: 10px;\n}\n.labelTextNew {\n\tfont-weight: 700;\n\tcolor: #484848;\n\tfont-size: 14px;\n\tmargin: 6px 0px;\n\tline-height: 1.43;\n}\n.displayInline {\n\tdisplay: inline-block;\n}\n/******************* Admin Modal ListSetting Start *******************/\n.btnUPdate {\n\tdisplay: inline-block;\n}\n.btnModalDelete {\n\tdisplay: inline-block;\n\tmargin-left: 15px;\n}\n.radioBtn {\n\tposition: relative;\n\ttop: 1px;\n\tvertical-align: middle;\n}\n@media screen and (max-width: 767px) {\n\t.btnUPdate {\n\t\tdisplay: block;\n\t\tmargin-bottom: 12px;\n\t}\n\t.btnModalDelete {\n\t\tdisplay: block;\n\t\tmargin-left: 0px;\n\t}\n\t.btnWidth {\n\t\twidth: 100%;\n\t}\n}\n/******************* Admin Modal ListSetting Start *******************/\n/******************* Admin Banner Image Section Start ****************/\n.bannerImageBg {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 70%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\tposition: relative;\n\tborder-radius: 4px;\n}\n.bannerDelete {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 20px;\n}\n/*******************Admin Modal Start **********************/\n.modalRoot {\n\tpadding: 32px;\n}\n.modalBorderBottom {\n\tborder-bottom: 5px solid #F7A31B;\n\tborder-bottom: 5px solid var(--btn-primary-bg);\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.logInModalBody {\n\tpadding: 0px;\n}\n/*************** Admin TableNew Design Start**************************/\n.exportSection {\n\tbackground: #f5f5f5;\n\tpadding: 24px 15px;\n\tdisplay: grid;\n\tgrid-template-columns: 28% 15% 55%;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tgrid-gap: 11px;\n\tborder-top-left-radius: 6px;\n\tborder-top-right-radius: 6px;\n\tborder: 1px solid #dce0e0;\n\tborder-bottom: 0;\n}\n.exportSectionGridSub {\n\tgrid-template-columns: 50% 49% !important;\n}\n.exportText {\n\tcolor: #484848 !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-block;\n\tfloat: right;\n}\n.exportLinkImg {\n\tbackground: #fff;\n\tpadding: 10px;\n\tmargin-left: 12px;\n\tborder-radius: 4px;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}\n.exportImg {\n\twidth: 100%;\n\tmax-width: 16px;\n\tvertical-align: middle;\n}\n.profileViewlabel {\n\tdisplay: inline-block;\n\twidth: 38%\n}\n.profileViewMainContent {\n\tdisplay: inline-block;\n\twidth: 62%;\n}\n.profileViewMain {\n\tborder: 1px solid #dedede;\n\tborder-radius: 6px;\n}\n.profileViewInner {\n\tpadding: 10px;\n\tborder-bottom: 1px solid #dedede;\n}\n.profileImageSection {\n\twidth: 100%;\n\theight: auto;\n\tmax-width: 100px;\n\tmax-height: 100px;\n\tborder-radius: 50%;\n}\n.lastviewInner {\n\tpadding: 10px;\n}\n@media (max-width: 1200px) and (min-width: 768px) {\n\t.pagecontentWrapper {\n\t\tpadding: 100px 25px;\n        height: 100vh;\n        overflow: auto;\n\t}\n}\n@media screen and (max-width: 991px) {\n\t.exportSection {\n\t\tgrid-template-columns: 100%;\n\t}\n\t.exportText {\n\t\tfloat: none;\n\t\tmargin-top: 12px;\n\t}\n\t.exportSectionGridSub {\n\t\tgrid-template-columns: 100% !important;\n\t}\n}\n@media screen and (max-width: 767px) {\n\t.profileViewlabel {\n\t\twidth: 100%;\n\t\tmargin-bottom: 6px;\n\t\ttext-align: center;\n\t}\n\t.profileViewMainContent {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n/*************** Admin TableNew Design End**************************/\n@media (max-width: 767px) {\n\t.pagecontentWrapper {\n\t\tmargin-left: 0;\n\t}\n}\n.ChangeToUpperCase{\n    text-transform: uppercase\n}\n.noBorder {\n\tborder: 0px !important;\n}\n/** Admin - Common - End **/\n.errorMessage {\n  margin-bottom: 5px;\n  display: block;\n  color: #ff0000;\n  font-size: 14px;\n  font-weight: normal;\n}\n.panelHeader{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tcolor: #484848;\n\tfont-size: 16px;\n\tpadding-bottom: 12px;\n\tborder-bottom: 1px solid #dce0e0;\n}\n.formGroup {\n  margin-bottom: 6px;\n}\n.select {\n  position: relative;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.labelText{\n\tfont-size: 14px;\n  color: #767676;\n  margin: 6px 0px;\n  line-height: 1.43;\n  font-weight: normal;\n  vertical-align: middle;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"rentAllHeaderAdmin": "StaticBlockForm-rentAllHeaderAdmin-3cqM5",
	"adminLayout": "StaticBlockForm-adminLayout-stFBl",
	"box": "StaticBlockForm-box-2yaEU",
	"exportLink": "StaticBlockForm-exportLink-3NuO4",
	"blockcenter": "StaticBlockForm-blockcenter-1d07I",
	"panelHeader": "StaticBlockForm-panelHeader-1CZU4",
	"currencyselect": "StaticBlockForm-currencyselect-IEBLN",
	"mar0": "StaticBlockForm-mar0-19Q3D",
	"navbar": "StaticBlockForm-navbar-3Iq_e",
	"container": "StaticBlockForm-container-1Q-co",
	"navbar-brand": "StaticBlockForm-navbar-brand-7PA4z",
	"container-fluid": "StaticBlockForm-container-fluid-2nXxg",
	"pagecontentWrapper": "StaticBlockForm-pagecontentWrapper-1goNm",
	"headerTitle": "StaticBlockForm-headerTitle-dSndB",
	"table": "StaticBlockForm-table-YCOcB",
	"tableRow": "StaticBlockForm-tableRow-3Ct_I",
	"tableCell": "StaticBlockForm-tableCell-1Dbxa",
	"formGroup": "StaticBlockForm-formGroup-3tWn9",
	"select": "StaticBlockForm-select-30sLC",
	"noMargin": "StaticBlockForm-noMargin-22bX2",
	"labelTextNew": "StaticBlockForm-labelTextNew-97mOf",
	"displayInline": "StaticBlockForm-displayInline-3Futa",
	"btnUPdate": "StaticBlockForm-btnUPdate-2OZIQ",
	"btnModalDelete": "StaticBlockForm-btnModalDelete-XAhvR",
	"radioBtn": "StaticBlockForm-radioBtn-2H8oO",
	"btnWidth": "StaticBlockForm-btnWidth-3fCa1",
	"bannerImageBg": "StaticBlockForm-bannerImageBg-14-4i",
	"bannerDelete": "StaticBlockForm-bannerDelete-1d2UC",
	"modalRoot": "StaticBlockForm-modalRoot-3OqWM",
	"modalBorderBottom": "StaticBlockForm-modalBorderBottom-3bmSu",
	"logInModalBody": "StaticBlockForm-logInModalBody-3waMB",
	"exportSection": "StaticBlockForm-exportSection-23WLi",
	"exportSectionGridSub": "StaticBlockForm-exportSectionGridSub-3BaPc",
	"exportText": "StaticBlockForm-exportText-16C9l",
	"exportLinkImg": "StaticBlockForm-exportLinkImg-1DB5N",
	"vtrMiddle": "StaticBlockForm-vtrMiddle-28ooX",
	"exportImg": "StaticBlockForm-exportImg-1acP4",
	"profileViewlabel": "StaticBlockForm-profileViewlabel-1Eo0B",
	"profileViewMainContent": "StaticBlockForm-profileViewMainContent-1pMHd",
	"profileViewMain": "StaticBlockForm-profileViewMain-11-Wh",
	"profileViewInner": "StaticBlockForm-profileViewInner-1Zbpx",
	"profileImageSection": "StaticBlockForm-profileImageSection-3bPPQ",
	"lastviewInner": "StaticBlockForm-lastviewInner-ouvjn",
	"ChangeToUpperCase": "StaticBlockForm-ChangeToUpperCase-2yY-f",
	"noBorder": "StaticBlockForm-noBorder-3Rdgy",
	"errorMessage": "StaticBlockForm-errorMessage-1wsIp",
	"labelText": "StaticBlockForm-labelText-1Ya42",
	"space1": "StaticBlockForm-space1-2PGZ5",
	"space2": "StaticBlockForm-space2-FBLAi",
	"space3": "StaticBlockForm-space3-IF4Ql",
	"space4": "StaticBlockForm-space4-2dA1b",
	"space5": "StaticBlockForm-space5-SSVFh",
	"space6": "StaticBlockForm-space6-iMtcU",
	"space7": "StaticBlockForm-space7-3Zlq3",
	"spaceTop8": "StaticBlockForm-spaceTop8-3d4NH",
	"spaceTop1": "StaticBlockForm-spaceTop1-24QR9",
	"spaceTop2": "StaticBlockForm-spaceTop2-3bs2o",
	"spaceTop3": "StaticBlockForm-spaceTop3-3stR3",
	"spaceTop4": "StaticBlockForm-spaceTop4-2wINV",
	"spaceTop5": "StaticBlockForm-spaceTop5-3aoFl",
	"spaceTop6": "StaticBlockForm-spaceTop6-3Xvav",
	"spaceTop7": "StaticBlockForm-spaceTop7-2oDjX",
	"padding1": "StaticBlockForm-padding1-2-C_c",
	"padding2": "StaticBlockForm-padding2-2XPka",
	"padding3": "StaticBlockForm-padding3-2qkqQ",
	"padding4": "StaticBlockForm-padding4-396Z4",
	"padding5": "StaticBlockForm-padding5-xJpnO",
	"padding6": "StaticBlockForm-padding6-1J-gF",
	"padding7": "StaticBlockForm-padding7-1RJL0",
	"paddingTop1": "StaticBlockForm-paddingTop1-IAAWb",
	"paddingTop2": "StaticBlockForm-paddingTop2-2uY0W",
	"paddingTop3": "StaticBlockForm-paddingTop3-1g6gM",
	"paddingTop4": "StaticBlockForm-paddingTop4-rYJr6",
	"paddingTop5": "StaticBlockForm-paddingTop5-1N7rc",
	"paddingTop6": "StaticBlockForm-paddingTop6-20JIq",
	"paddingTop7": "StaticBlockForm-paddingTop7-3pCpU",
	"noPadding": "StaticBlockForm-noPadding-3xkfL",
	"textBold": "StaticBlockForm-textBold-1yaog",
	"textBolder": "StaticBlockForm-textBolder-BDLNe",
	"textNormal": "StaticBlockForm-textNormal-20qw3",
	"textDarkBlue": "StaticBlockForm-textDarkBlue-h4PgT",
	"textLightBlue": "StaticBlockForm-textLightBlue-2Wrlg",
	"textLightSandleGreen": "StaticBlockForm-textLightSandleGreen-39gCq",
	"textLightBrown": "StaticBlockForm-textLightBrown-1YAIO",
	"textMediumMaroon": "StaticBlockForm-textMediumMaroon-1WR7x",
	"textBrown": "StaticBlockForm-textBrown-1Ia9j",
	"textMaroon": "StaticBlockForm-textMaroon-3LXSH",
	"textDarkBrown": "StaticBlockForm-textDarkBrown-2d_9v",
	"textMediumBrown": "StaticBlockForm-textMediumBrown-2PXnV",
	"textSkyBlue": "StaticBlockForm-textSkyBlue-2a2e0",
	"textGray": "StaticBlockForm-textGray-rQhZf"
};

/***/ }),

/***/ "hlsy":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("Vo0k");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "hmB1":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("ZadH");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "houE":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("hPAY");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "tDSx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ipP0");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3sWb");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Uploader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tvDY");
/* harmony import */ var _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Uploader_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zy27");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wQmL");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/MKj");
/* harmony import */ var _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("86ze");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("QX2b");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("3dzz");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JRPe");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Q7QM");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("e8ND");
/* harmony import */ var _public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("TXYE");
/* harmony import */ var _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/siteadmin/StaticBlockForm/Uploader/Uploader.js",
    _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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









 // Redux


 // Component


 // Translation


 // Asset




var Uploader = /*#__PURE__*/function (_React$Component) {
  _inherits(Uploader, _React$Component);

  var _super = _createSuper(Uploader);

  function Uploader() {
    _classCallCheck(this, Uploader);

    return _super.apply(this, arguments);
  }

  _createClass(Uploader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$getLogoDa = _this$props.getLogoData,
          loading = _this$props$getLogoDa.loading,
          getStaticInfo = _this$props$getLogoDa.getStaticInfo,
          image = _this$props.image,
          doRemoveStaticImageBlock = _this$props.doRemoveStaticImageBlock,
          staticBlockImageLoading = _this$props.staticBlockImageLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.textAlignCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        show: staticBlockImageLoading,
        type: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainerMain,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.picContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 30
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_14__["default"].loadingLabel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 35
        }
      }))), !loading && getStaticInfo && getStaticInfo[0].image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(/images/home/".concat(getStaticInfo[0].image, ")")
        },
        className: _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.bannerImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 74
        }
      }), !loading && getStaticInfo && !getStaticInfo[0].image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(_public_adminIcons_defaultAdmin_svg__WEBPACK_IMPORTED_MODULE_15___default.a, ")")
        },
        className: _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileImageBg,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 75
        }
      }), !loading && getStaticInfo[0].image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0);",
        onClick: function onClick() {
          return doRemoveStaticImageBlock(getStaticInfo[0].image, 'block2');
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.trashIconNew, 'trashIconNewRTL'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 57
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _public_adminIcons_dlt_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.space2, _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.fullWidth, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a.noPadding, 'photoUploadBtn'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropZone__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: getStaticInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return Uploader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Uploader, "propTypes", {
  staticBlockImageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  doRemoveStaticImageBlock: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  getLogoData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    getStaticInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  })
});

_defineProperty(Uploader, "defaultProps", {
  profilePictureData: {
    loading: true
  },
  staticBlockImageLoading: false
});

var selector = Object(redux_form__WEBPACK_IMPORTED_MODULE_8__["formValueSelector"])('StaticBlockForm');

var mapState = function mapState(state) {
  return {
    staticBlockImageLoading: state.homeBannerImages.staticBlockImageLoading,
    image: selector(state, 'blockImage1')
  };
};

var mapDispatch = {
  doRemoveStaticImageBlock: _actions_siteadmin_manageStaticBlock__WEBPACK_IMPORTED_MODULE_10__["doRemoveStaticImageBlock"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_Uploader_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($name: String) {\n    getStaticInfo(name: $name) {\n      name\n      image\n      content\n      title\n    }\n  }\n    "]))), {
  name: 'getLogoData',
  options: {
    ssr: false,
    variables: {
      name: 'block2'
    }
  }
}))(Uploader));

/***/ }),

/***/ "tvDY":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("GgPq");
    var insertCss = __webpack_require__("BrNG");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "ulmq":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZWFkbWluLXN0YXRpY0Jsb2NrLmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL0Jsb2NrVXBsb2FkZXIvZmlsZXBpY2tlci5jc3MiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL3N1Ym1pdC5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TdGF0aWNCbG9ja0Zvcm0vQmxvY2tVcGxvYWRlci9CbG9ja1VwbG9hZGVyLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1N0YXRpY0Jsb2NrRm9ybS9TdGF0aWNCbG9ja0Zvcm0uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL1VwbG9hZGVyL1VwbG9hZGVyLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TdGF0aWNCbG9ja0Zvcm0vVXBsb2FkZXIvRHJvcFpvbmUuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL3ZhbGlkYXRlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1N0YXRpY0Jsb2NrRm9ybS9CbG9ja1VwbG9hZGVyL0Jsb2NrVXBsb2FkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TdGF0aWNCbG9ja0Zvcm0vVXBsb2FkZXIvZmlsZXBpY2tlci5jc3M/MGY2OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL0Jsb2NrVXBsb2FkZXIvZmlsZXBpY2tlci5jc3M/YmJkYyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TdGF0aWNCbG9ja0Zvcm0vQmxvY2tVcGxvYWRlci9Ecm9wWm9uZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3N0YXRpY0Jsb2NrL1N0YXRpY0Jsb2NrLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc2l0ZWFkbWluL3N0YXRpY0Jsb2NrL1N0YXRpY0Jsb2NrLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zaXRlYWRtaW4vc3RhdGljQmxvY2svaW5kZXguanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL1N0YXRpY0Jsb2NrRm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1N0YXRpY0Jsb2NrRm9ybS9CbG9ja1VwbG9hZGVyL0Jsb2NrVXBsb2FkZXIuY3NzPzFkYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaXRlYWRtaW4vc3RhdGljQmxvY2svU3RhdGljQmxvY2suY3NzP2RiYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1N0YXRpY0Jsb2NrRm9ybS9TdGF0aWNCbG9ja0Zvcm0uY3NzPzQ5NDYiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL1VwbG9hZGVyL1VwbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TdGF0aWNCbG9ja0Zvcm0vVXBsb2FkZXIvVXBsb2FkZXIuY3NzPzNiMDMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL1VwbG9hZGVyL2ZpbGVwaWNrZXIuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gRmV0Y2ggUmVxdWVzdFxuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uLy4uL2NvcmUvZmV0Y2gnO1xuXG4vLyBUb2FzdGVyXG5pbXBvcnQgeyB0b2FzdHIgfSBmcm9tICdyZWFjdC1yZWR1eC10b2FzdHInO1xuXG5hc3luYyBmdW5jdGlvbiBzdWJtaXQodmFsdWVzLCBkaXNwYXRjaCkge1xuXG4gIGlmICghdmFsdWVzLmJsb2NrSW1hZ2UyIHx8ICF2YWx1ZXMuYmxvY2tJbWFnZTEpIHtcbiAgICB0b2FzdHIuZXJyb3IoXCJVcGRhdGUgU3RhdGljIEJsb2NrIFNldHRpbmdzXCIsIFwiVXBkYXRpbmcgU3RhdGljIEJsb2NrIFNldHRpbmdzIGZhaWxlZFwiKTtcbiAgICByZXR1cm47XG4gIH0gXG5cbiAgY29uc3QgbXV0YXRpb24gPSBgXG4gICAgbXV0YXRpb24gKFxuICAgICAgJGhlYWRlclRpdGxlOiBTdHJpbmcsXG4gICAgICAkaGVhZGVyQ29udGVudDogU3RyaW5nLFxuICAgICAgJGJsb2NrVGl0bGUxOiBTdHJpbmcsXG4gICAgICAkYmxvY2tDb250ZW50MTogU3RyaW5nLFxuICAgICAgJGJsb2NrVGl0bGUyOiBTdHJpbmcsXG4gICAgICAkYmxvY2tDb250ZW50MjogU3RyaW5nLFxuICAgICAgJGJsb2NrSW1hZ2UxOiBTdHJpbmcsXG4gICAgICAkYmxvY2tJbWFnZTI6IFN0cmluZyxcbiAgICAgICRpc0VuYWJsZTogU3RyaW5nXG4gICAgKSB7XG4gICAgICB1cGRhdGVTdGF0aWNCbG9ja1NldHRpbmdzIChcbiAgICAgICAgaGVhZGVyVGl0bGU6ICRoZWFkZXJUaXRsZSxcbiAgICAgICAgaGVhZGVyQ29udGVudDogJGhlYWRlckNvbnRlbnQsXG4gICAgICAgIGJsb2NrVGl0bGUxOiAkYmxvY2tUaXRsZTEsXG4gICAgICAgIGJsb2NrQ29udGVudDE6ICRibG9ja0NvbnRlbnQxLFxuICAgICAgICBibG9ja1RpdGxlMjogJGJsb2NrVGl0bGUyLFxuICAgICAgICBibG9ja0NvbnRlbnQyOiAkYmxvY2tDb250ZW50MixcbiAgICAgICAgYmxvY2tJbWFnZTE6ICRibG9ja0ltYWdlMSxcbiAgICAgICAgYmxvY2tJbWFnZTI6ICRibG9ja0ltYWdlMixcbiAgICAgICAgaXNFbmFibGU6ICRpc0VuYWJsZVxuICAgICAgKSB7XG4gICAgICAgICAgc3RhdHVzXG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogbXV0YXRpb24sXG4gICAgICB2YXJpYWJsZXM6IHZhbHVlc1xuICAgIH0pLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgaWYgKGRhdGEudXBkYXRlU3RhdGljQmxvY2tTZXR0aW5ncy5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgdG9hc3RyLnN1Y2Nlc3MoXCJVcGRhdGUgU3RhdGljIEJsb2NrIFNldHRpbmdzXCIsIFwiQ2hhbmdlcyBhcmUgdXBkYXRlZCFcIik7XG4gIH0gZWxzZSB7XG4gICAgdG9hc3RyLmVycm9yKFwiVXBkYXRlIFN0YXRpYyBCbG9jayBTZXR0aW5nc1wiLCBcIlVwZGF0aW5nIFN0YXRpYyBCbG9jayBTZXR0aW5ncyBmYWlsZWRcIik7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJtaXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdyYXBocWwsIGdxbCwgY29tcG9zZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBSb3csXG4gIENvbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9CbG9ja1VwbG9hZGVyLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0IHsgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb1JlbW92ZVN0YXRpY0ltYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlU3RhdGljQmxvY2snO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBEcm9wWm9uZSBmcm9tICcuL0Ryb3Bab25lJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vTG9hZGVyJztcblxuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuXG4vLyBBc3NldFxuaW1wb3J0IGRlZmF1bHRQaWMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9wdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nJztcblxuY2xhc3MgQmxvY2tVcGxvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGRvUmVtb3ZlU3RhdGljSW1hZ2U6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBnZXRMb2dvRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZ2V0TG9nbzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KVxuICAgIH0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcm9maWxlUGljdHVyZURhdGE6IHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9LFxuICAgIHN0YXRpY0ltYWdlTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBnZXRMb2dvRGF0YTogeyBsb2FkaW5nLCBnZXRTdGF0aWNJbmZvIH0sIGltYWdlLCBkb1JlbW92ZVN0YXRpY0ltYWdlLCBzdGF0aWNJbWFnZUxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17YnQudGV4dEFsaWduQ2VudGVyfT5cbiAgICAgICAgICA8TG9hZGVyXG4gICAgICAgICAgICBzaG93PXtzdGF0aWNJbWFnZUxvYWRpbmd9XG4gICAgICAgICAgICB0eXBlPXtcInBhZ2VcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnQucGljQ29udGFpbmVyTWFpbn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgPGRpdj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubG9hZGluZ0xhYmVsfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAhbG9hZGluZyAmJiBnZXRTdGF0aWNJbmZvICYmIGdldFN0YXRpY0luZm9bMF0uaW1hZ2UgJiYgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9ob21lLyR7Z2V0U3RhdGljSW5mb1swXS5pbWFnZX0pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuYmFubmVySW1hZ2VCZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldFN0YXRpY0luZm8gJiYgIWdldFN0YXRpY0luZm9bMF0uaW1hZ2UgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGVmYXVsdFBpY30pYCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J0LnByb2ZpbGVJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgZ2V0U3RhdGljSW5mb1swXS5pbWFnZSAmJiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IGRvUmVtb3ZlU3RhdGljSW1hZ2UoZ2V0U3RhdGljSW5mb1swXS5pbWFnZSwgJ2Jsb2NrMScpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LnRyYXNoSWNvbk5ldywgJ3RyYXNoSWNvbk5ld1JUTCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0RlbGV0ZUljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTG9hZGVyPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZTIsIHMuc3BhY2VUb3AyKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZnVsbFdpZHRoLCBidC5idG5QcmltYXJ5LCBzLm5vUGFkZGluZywgJ3Bob3RvVXBsb2FkQnRuJyl9PlxuICAgICAgICAgICAgPERyb3Bab25lIGRhdGE9e2dldFN0YXRpY0luZm99IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcignU3RhdGljQmxvY2tGb3JtJyk7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBzdGF0aWNJbWFnZUxvYWRpbmc6IHN0YXRlLmhvbWVCYW5uZXJJbWFnZXMuc3RhdGljSW1hZ2VMb2FkaW5nLFxuICAvLyBpbWFnZTogc2VsZWN0b3Ioc3RhdGUsICdibG9ja0ltYWdlMScpXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIGRvUmVtb3ZlU3RhdGljSW1hZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdHlsZXMocywgYnQpLFxuICBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCksXG4gIGdyYXBocWwoZ3FsYFxuICBxdWVyeSAoJG5hbWU6IFN0cmluZykge1xuICAgIGdldFN0YXRpY0luZm8obmFtZTogJG5hbWUpIHtcbiAgICAgIG5hbWVcbiAgICAgIGltYWdlXG4gICAgICBjb250ZW50XG4gICAgICB0aXRsZVxuICAgIH1cbiAgfVxuICAgIGAsIHtcbiAgICAgIG5hbWU6ICdnZXRMb2dvRGF0YScsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNzcjogZmFsc2UsXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIG5hbWU6ICdibG9jazEnXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSksXG4pKEJsb2NrVXBsb2FkZXIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gVHJhbnNsYXRpb25cbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcblxuLy8gU3R5bGVcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgUm93LFxuICBGb3JtR3JvdXAsXG4gIENvbCxcbiAgRm9ybUNvbnRyb2wsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1N0YXRpY0Jsb2NrRm9ybS5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcblxuaW1wb3J0IEJsb2NrVXBsb2FkZXIgZnJvbSAnLi9CbG9ja1VwbG9hZGVyJztcbmltcG9ydCBVcGxvYWRlciBmcm9tICcuL1VwbG9hZGVyJztcbmltcG9ydCBzdWJtaXQgZnJvbSAnLi9zdWJtaXQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgU3RhdGljQmxvY2tGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhID0gKHsgaW5wdXQsIGxhYmVsLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcy5pbnRsO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17cy5zcGFjZTN9PlxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICB7Li4uaW5wdXR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2wgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e3Muc3BhY2UzfT5cbiAgICAgICAgPEZvcm1Db250cm9sIHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXtidC5jb21tb25Db250cm9sSW5wdXR9IG1heExlbmd0aD17ODB9IC8+XG4gICAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9Pntmb3JtYXRNZXNzYWdlKGVycm9yKX08L3NwYW4+fVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRm9ybUNvbnRyb2xTZWxlY3QgPSAoeyBpbnB1dCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCB9KSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtzLnNwYWNlM30+XG4gICAgICAgICAgPEZvcm1Db250cm9sIGRpc2FibGVkPXtkaXNhYmxlZH0gY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB7Li4uaW5wdXR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e3MuZXJyb3JNZXNzYWdlfT57Zm9ybWF0TWVzc2FnZShlcnJvcil9PC9zcGFuPn1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgY29uc3QgeyBlcnJvciwgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nLCBkaXNwYXRjaCwgaW5pdGlhbFZhbHVlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5wYWdlY29udGVudFdyYXBwZXIsICdwYWdlY29udGVudEFSJyl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3MuaGVhZGVyVGl0bGV9PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5zdGF0aWNJbmZvQmxvY2t9IC8+PC9oMT5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxzdHJvbmc+e2Zvcm1hdE1lc3NhZ2UoZXJyb3IpfTwvc3Ryb25nPn1cbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezZ9IHNtPXsxMn0gbWQ9ezZ9IHhzPXsxMn0gY2xhc3NOYW1lPXtzLm5vUGFkZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5oZWFkZXJUaXRsZX0gLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhlYWRlclRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs2fSBjbGFzc05hbWU9e3Mubm9QYWRkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fSA+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmlzQWN0aXZlfSAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXNFbmFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChidC5jb21tb25Db250cm9sU2VsZWN0LCAnY29tbW9uQWRtaW5TZWxlY3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbFNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPntmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmVuYWJsZUxhYmVsKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+e2Zvcm1hdE1lc3NhZ2UobWVzc2FnZXMuZGlzYWJsZUxhYmVsKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5oZWFkZXJUaXRsZUNvbnRlbnR9IC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGVhZGVyQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sVGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezZ9IG1kPXs2fSBzbT17MTJ9IHhzPXsxMn0gY2xhc3NOYW1lPXtzLm5vUGFkZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJsb2NrTGFiZWx9IC8+ICMxPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ibG9ja0ltYWdlTGFiZWx9IC8+IDE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja1VwbG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbFRleHROZXd9ID48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYmxvY2tUaXRsZUxhYmVsfSAvPiAxPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJibG9ja1RpdGxlMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ibG9ja0NvbnRlbnRMYWJlbH0gLz4gMTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmxvY2tDb250ZW50MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3RoaXMucmVuZGVyRm9ybUNvbnRyb2xUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBsZz17Nn0gbWQ9ezZ9IHNtPXsxMn0geHM9ezEyfSBjbGFzc05hbWU9e3Mubm9QYWRkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuYmxvY2tMYWJlbH0gLz4gIzI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9ID5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsVGV4dE5ld30gPjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5ibG9ja0ltYWdlTGFiZWx9IC8+IDI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fSA+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJsb2NrVGl0bGVMYWJlbH0gLz4gMjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmxvY2tUaXRsZTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnJlbmRlckZvcm1Db250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0TmV3fSA+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLmJsb2NrQ29udGVudExhYmVsfSAvPiAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJibG9ja0NvbnRlbnQyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5yZW5kZXJGb3JtQ29udHJvbFRleHRBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0gY2xhc3NOYW1lPXtjeChidC50ZXh0QWxpZ25SaWdodCwgcy5zcGFjZVRvcDMpfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2N4KGJ0LmJ0blByaW1hcnksIGJ0LmJ0bkxhcmdlKX0gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuc2F2ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblN0YXRpY0Jsb2NrRm9ybSA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdTdGF0aWNCbG9ja0Zvcm0nLCAvLyBhIHVuaXF1ZSBuYW1lIGZvciB0aGlzIGZvcm1cbiAgdmFsaWRhdGVcbn0pKFN0YXRpY0Jsb2NrRm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoKHdpdGhTdHlsZXMocywgYnQpKFN0YXRpY0Jsb2NrRm9ybSkpKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLlVwbG9hZGVyLXNwYWNlMS1GQ1JyeiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZTItM2NSUUUge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlMy0xVklHWiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2U0LTFtX2NHIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZTUtZVhFZlcge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlNi0yVnE1OCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2U3LTFQbGM0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZVRvcDgtdlVkd1gge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wMS0yTkZBSSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZVRvcDItMkp3Tkwge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wMy1FSy1taSB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2VUb3A0LTFET3VUIHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZVRvcDUtMWtHUmUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXNwYWNlVG9wNi1TYmRKViB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItc3BhY2VUb3A3LTN6YWMxIHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1zcGFjZVRvcDgtdlVkd1gge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLW5vTWFyZ2luLVlCSjRDIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZzEtQUhGb2sge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmcyLVJoOWdjIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZzMtM2N2SXEge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nNC0xWW55QiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmc1LVhyblU4IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZzYtOFRCN3Ige1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nNy1tN19lRSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmdUb3AxLTFBcHo2IHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nVG9wMi0yUGVweSB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmdUb3AzLUNVVUdOIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZ1RvcDQtMUNLeUcge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1wYWRkaW5nVG9wNS0yR1QwSyB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXBhZGRpbmdUb3A2LTE5US1YIHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcGFkZGluZ1RvcDctNjctN20ge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1ub1BhZGRpbmctMlV1WTAge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dEJvbGQtMXJfVlMge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRCb2xkZXItM0hBX3cge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHROb3JtYWwtMzAzajgge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLlVwbG9hZGVyLXRleHREYXJrQmx1ZS0xMVlkTSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS1rcWVQaSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRMaWdodFNhbmRsZUdyZWVuLTJrdFVkIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0TGlnaHRCcm93bi0yNlVQRiB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tbExZTHUge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRCcm93bi0zOGt0NiB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLXRleHRNYXJvb24tMVNWRTYge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0RGFya0Jyb3duLUprOGg0IHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0TWVkaXVtQnJvd24tMjZ6RVUge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0U2t5Qmx1ZS0yQ2p3UyB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci10ZXh0R3JheS0yOFRyciB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItcmVudEFsbEhlYWRlckFkbWluLTJMSFR4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uVXBsb2FkZXItYWRtaW5MYXlvdXQtMkx2UDIge1xcbiAgcGFkZGluZy10b3A6IDY0cHggIWltcG9ydGFudDtcXG59XFxuLlVwbG9hZGVyLWJveC0yNTZfbiBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uVXBsb2FkZXItZXhwb3J0TGluay0xeTE1MSB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLlVwbG9hZGVyLWJsb2NrY2VudGVyLTJmTFhzIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5VcGxvYWRlci1wYW5lbEhlYWRlci0xWjJtMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uVXBsb2FkZXItY3VycmVuY3lzZWxlY3QtMTBOUEQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLlVwbG9hZGVyLXBhbmVsSGVhZGVyLTFaMm0yIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5VcGxvYWRlci1tYXIwLTYzeGNqIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uVXBsb2FkZXItbmF2YmFyLTNmQWZGID4gLlVwbG9hZGVyLWNvbnRhaW5lci0yNTVSaiAuVXBsb2FkZXItbmF2YmFyLWJyYW5kLTFqSmdtLFxcbi5VcGxvYWRlci1uYXZiYXItM2ZBZkYgPiAuVXBsb2FkZXItY29udGFpbmVyLWZsdWlkLTNBRGt0IC5VcGxvYWRlci1uYXZiYXItYnJhbmQtMWpKZ20ge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuVXBsb2FkZXItYmxvY2tjZW50ZXItMmZMWHMge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAuVXBsb2FkZXItcGFuZWxIZWFkZXItMVoybTIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDVweDtcXG4gIH1cXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gU3RhcnQgKiovXFxuLlVwbG9hZGVyLXBhZ2Vjb250ZW50V3JhcHBlci0xS3VUViB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLlVwbG9hZGVyLWhlYWRlclRpdGxlLTJmREt5IHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5VcGxvYWRlci1wYW5lbEhlYWRlci0xWjJtMiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5VcGxvYWRlci10YWJsZS1sSXNmMSB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5VcGxvYWRlci10YWJsZVJvdy0zOG1rQSB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4uVXBsb2FkZXItdGFibGVDZWxsLTJQSG5yIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xcblxcdGZsb2F0OiBub25lO1xcbn1cXG4uVXBsb2FkZXItZm9ybUdyb3VwLTJFdWxtIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5VcGxvYWRlci1zZWxlY3QtMWpqNHUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLlVwbG9hZGVyLW5vTWFyZ2luLVlCSjRDIHtcXG5cXHRtYXJnaW46IDBweDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5VcGxvYWRlci1leHBvcnRMaW5rLTF5MTUxIHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uVXBsb2FkZXItbGFiZWxUZXh0TmV3LTNVX0huIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5VcGxvYWRlci1kaXNwbGF5SW5saW5lLTItWDI4IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLlVwbG9hZGVyLWJ0blVQZGF0ZS0ybGxRUiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uVXBsb2FkZXItYnRuTW9kYWxEZWxldGUtMUdudjkge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLlVwbG9hZGVyLXJhZGlvQnRuLTFZV0pfIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAxcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuVXBsb2FkZXItYnRuVVBkYXRlLTJsbFFSIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuVXBsb2FkZXItYnRuTW9kYWxEZWxldGUtMUdudjkge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5VcGxvYWRlci1idG5XaWR0aC0zeGM3OCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIEJhbm5lciBJbWFnZSBTZWN0aW9uIFN0YXJ0ICoqKioqKioqKioqKioqKiovXFxuLlVwbG9hZGVyLWJhbm5lckltYWdlQmctMlA4NzUge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5VcGxvYWRlci1iYW5uZXJEZWxldGUtMldIbWoge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5VcGxvYWRlci1tb2RhbFJvb3QtM0JXc2Uge1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcbi5VcGxvYWRlci1tb2RhbEJvcmRlckJvdHRvbS0zVkQwTCB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLlVwbG9hZGVyLWxvZ0luTW9kYWxCb2R5LTJCMS1VIHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLlVwbG9hZGVyLWV4cG9ydFNlY3Rpb24tcGZyd1gge1xcblxcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuXFx0cGFkZGluZzogMjRweCAxNXB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOCUgMTUlIDU1JTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdCAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLWdhcDogMTFweDtcXG5cXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcblxcdGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5VcGxvYWRlci1leHBvcnRTZWN0aW9uR3JpZFN1Yi0zOHpBViB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5VcGxvYWRlci1leHBvcnRUZXh0LTE5RFRnIHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5VcGxvYWRlci1leHBvcnRMaW5rSW1nLTJsRjlKIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEycHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uVXBsb2FkZXItdnRyTWlkZGxlLUUzOUJVIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uVXBsb2FkZXItZXhwb3J0SW1nLTM4aDRqIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlVwbG9hZGVyLXByb2ZpbGVWaWV3bGFiZWwtM0JEcFcge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogMzglXFxufVxcbi5VcGxvYWRlci1wcm9maWxlVmlld01haW5Db250ZW50LTJvTU5oIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLlVwbG9hZGVyLXByb2ZpbGVWaWV3TWFpbi0xOE1IRiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5VcGxvYWRlci1wcm9maWxlVmlld0lubmVyLTNtTlFHIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xcbn1cXG4uVXBsb2FkZXItcHJvZmlsZUltYWdlU2VjdGlvbi0yNWNnXyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uVXBsb2FkZXItbGFzdHZpZXdJbm5lci0yVmhKbyB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LlVwbG9hZGVyLXBhZ2Vjb250ZW50V3JhcHBlci0xS3VUViB7XFxuXFx0XFx0cGFkZGluZzogMTAwcHggMjVweDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuXFx0LlVwbG9hZGVyLWV4cG9ydFNlY3Rpb24tcGZyd1gge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LlVwbG9hZGVyLWV4cG9ydFRleHQtMTlEVGcge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5VcGxvYWRlci1leHBvcnRTZWN0aW9uR3JpZFN1Yi0zOHpBViB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlICFpbXBvcnRhbnQ7XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5VcGxvYWRlci1wcm9maWxlVmlld2xhYmVsLTNCRHBXIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuVXBsb2FkZXItcHJvZmlsZVZpZXdNYWluQ29udGVudC0yb01OaCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LlVwbG9hZGVyLXBhZ2Vjb250ZW50V3JhcHBlci0xS3VUViB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0fVxcbn1cXG4uVXBsb2FkZXItQ2hhbmdlVG9VcHBlckNhc2UtMzZjaEV7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLlVwbG9hZGVyLW5vQm9yZGVyLTM0TmcxIHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL3NpdGVhZG1pbi9TdGF0aWNCbG9ja0Zvcm0vVXBsb2FkZXIvVXBsb2FkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNELDJCQUEyQjtBQUMzQjtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsOEJBQThCO0FBQzlCO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEOztDQUVDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0M7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtBQUNELHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWjtBQUNELDZEQUE2RDtBQUM3RDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsaUNBQWlDO0NBQ2pDLCtDQUErQztDQUMvQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0tBQ3RCLHVCQUF1QjtTQUNuQixvQkFBb0I7Q0FDNUIsZUFBZTtDQUNmLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQztFQUNDLG9CQUFvQjtRQUNkLGNBQWM7UUFDZCxlQUFlO0VBQ3JCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyx1Q0FBdUM7RUFDdkM7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtDQUNEO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0M7RUFDQyxlQUFlO0VBQ2Y7Q0FDRDtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRCw0QkFBNEJcIixcImZpbGVcIjpcIlVwbG9hZGVyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uc3BhY2UxIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTQge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U2IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTcge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AxIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMiB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AzIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDQge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A2IHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDcge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzIge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzUge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc3IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDEge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AyIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDMge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNCB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A1IHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDYge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNyB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLm5vUGFkZGluZyB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGRlciB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE5vcm1hbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4udGV4dERhcmtCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0U2FuZGxlR3JlZW4ge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bU1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJyb3duIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLnRleHREYXJrQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1Ccm93biB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRTa3lCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRHcmF5IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5yZW50QWxsSGVhZGVyQWRtaW4ge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5hZG1pbkxheW91dCB7XFxuICBwYWRkaW5nLXRvcDogNjRweCAhaW1wb3J0YW50O1xcbn1cXG4uYm94IGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5leHBvcnRMaW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uYmxvY2tjZW50ZXIge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5jdXJyZW5jeXNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1hcjAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5uYXZiYXIgPiAuY29udGFpbmVyIC5uYXZiYXItYnJhbmQsXFxuLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5ibG9ja2NlbnRlciB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5wYW5lbEhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDI0cHggNXB4O1xcbiAgfVxcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBTdGFydCAqKi9cXG4ucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLnBhbmVsSGVhZGVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLnRhYmxlIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLnRhYmxlUm93IHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi50YWJsZUNlbGwge1xcblxcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuXFx0ZmxvYXQ6IG5vbmU7XFxufVxcbi5mb3JtR3JvdXAge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnNlbGVjdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cG9ydExpbmsge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5sYWJlbFRleHROZXcge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLmRpc3BsYXlJbmxpbmUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4uYnRuVVBkYXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4ucmFkaW9CdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDFweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5idG5VUGRhdGUge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5idG5Nb2RhbERlbGV0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LmJ0bldpZHRoIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKioqKioqIEFkbWluIE1vZGFsIExpc3RTZXR0aW5nIFN0YXJ0ICoqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gQmFubmVyIEltYWdlIFNlY3Rpb24gU3RhcnQgKioqKioqKioqKioqKioqKi9cXG4uYmFubmVySW1hZ2VCZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmJhbm5lckRlbGV0ZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLm1vZGFsUm9vdCB7XFxuXFx0cGFkZGluZzogMzJweDtcXG59XFxuLm1vZGFsQm9yZGVyQm90dG9tIHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4ubG9nSW5Nb2RhbEJvZHkge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZXhwb3J0U2VjdGlvbiB7XFxuXFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcXG5cXHRwYWRkaW5nOiAyNHB4IDE1cHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4JSAxNSUgNTUlO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0ICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtZ2FwOiAxMXB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLmV4cG9ydFRleHQge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLmV4cG9ydExpbmtJbWcge1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTJweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi52dHJNaWRkbGUge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5leHBvcnRJbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiAzOCVcXG59XFxuLnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4ucHJvZmlsZVZpZXdNYWluIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnByb2ZpbGVWaWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XFxufVxcbi5wcm9maWxlSW1hZ2VTZWN0aW9uIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5sYXN0dmlld0lubmVyIHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweCAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG5cXHQuZXhwb3J0U2VjdGlvbiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuZXhwb3J0VGV4dCB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LmV4cG9ydFNlY3Rpb25HcmlkU3ViIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgIWltcG9ydGFudDtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LnByb2ZpbGVWaWV3bGFiZWwge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5wcm9maWxlVmlld01haW5Db250ZW50IHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucGFnZWNvbnRlbnRXcmFwcGVyIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHR9XFxufVxcbi5DaGFuZ2VUb1VwcGVyQ2FzZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4ubm9Cb3JkZXIge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3BhY2UxXCI6IFwiVXBsb2FkZXItc3BhY2UxLUZDUnJ6XCIsXG5cdFwic3BhY2UyXCI6IFwiVXBsb2FkZXItc3BhY2UyLTNjUlFFXCIsXG5cdFwic3BhY2UzXCI6IFwiVXBsb2FkZXItc3BhY2UzLTFWSUdaXCIsXG5cdFwic3BhY2U0XCI6IFwiVXBsb2FkZXItc3BhY2U0LTFtX2NHXCIsXG5cdFwic3BhY2U1XCI6IFwiVXBsb2FkZXItc3BhY2U1LWVYRWZXXCIsXG5cdFwic3BhY2U2XCI6IFwiVXBsb2FkZXItc3BhY2U2LTJWcTU4XCIsXG5cdFwic3BhY2U3XCI6IFwiVXBsb2FkZXItc3BhY2U3LTFQbGM0XCIsXG5cdFwic3BhY2VUb3A4XCI6IFwiVXBsb2FkZXItc3BhY2VUb3A4LXZVZHdYXCIsXG5cdFwic3BhY2VUb3AxXCI6IFwiVXBsb2FkZXItc3BhY2VUb3AxLTJORkFJXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiVXBsb2FkZXItc3BhY2VUb3AyLTJKd05MXCIsXG5cdFwic3BhY2VUb3AzXCI6IFwiVXBsb2FkZXItc3BhY2VUb3AzLUVLLW1pXCIsXG5cdFwic3BhY2VUb3A0XCI6IFwiVXBsb2FkZXItc3BhY2VUb3A0LTFET3VUXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiVXBsb2FkZXItc3BhY2VUb3A1LTFrR1JlXCIsXG5cdFwic3BhY2VUb3A2XCI6IFwiVXBsb2FkZXItc3BhY2VUb3A2LVNiZEpWXCIsXG5cdFwic3BhY2VUb3A3XCI6IFwiVXBsb2FkZXItc3BhY2VUb3A3LTN6YWMxXCIsXG5cdFwibm9NYXJnaW5cIjogXCJVcGxvYWRlci1ub01hcmdpbi1ZQko0Q1wiLFxuXHRcInBhZGRpbmcxXCI6IFwiVXBsb2FkZXItcGFkZGluZzEtQUhGb2tcIixcblx0XCJwYWRkaW5nMlwiOiBcIlVwbG9hZGVyLXBhZGRpbmcyLVJoOWdjXCIsXG5cdFwicGFkZGluZzNcIjogXCJVcGxvYWRlci1wYWRkaW5nMy0zY3ZJcVwiLFxuXHRcInBhZGRpbmc0XCI6IFwiVXBsb2FkZXItcGFkZGluZzQtMVlueUJcIixcblx0XCJwYWRkaW5nNVwiOiBcIlVwbG9hZGVyLXBhZGRpbmc1LVhyblU4XCIsXG5cdFwicGFkZGluZzZcIjogXCJVcGxvYWRlci1wYWRkaW5nNi04VEI3clwiLFxuXHRcInBhZGRpbmc3XCI6IFwiVXBsb2FkZXItcGFkZGluZzctbTdfZUVcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIlVwbG9hZGVyLXBhZGRpbmdUb3AxLTFBcHo2XCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJVcGxvYWRlci1wYWRkaW5nVG9wMi0yUGVweVwiLFxuXHRcInBhZGRpbmdUb3AzXCI6IFwiVXBsb2FkZXItcGFkZGluZ1RvcDMtQ1VVR05cIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIlVwbG9hZGVyLXBhZGRpbmdUb3A0LTFDS3lHXCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJVcGxvYWRlci1wYWRkaW5nVG9wNS0yR1QwS1wiLFxuXHRcInBhZGRpbmdUb3A2XCI6IFwiVXBsb2FkZXItcGFkZGluZ1RvcDYtMTlRLVhcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIlVwbG9hZGVyLXBhZGRpbmdUb3A3LTY3LTdtXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiVXBsb2FkZXItbm9QYWRkaW5nLTJVdVkwXCIsXG5cdFwidGV4dEJvbGRcIjogXCJVcGxvYWRlci10ZXh0Qm9sZC0xcl9WU1wiLFxuXHRcInRleHRCb2xkZXJcIjogXCJVcGxvYWRlci10ZXh0Qm9sZGVyLTNIQV93XCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIlVwbG9hZGVyLXRleHROb3JtYWwtMzAzajhcIixcblx0XCJ0ZXh0RGFya0JsdWVcIjogXCJVcGxvYWRlci10ZXh0RGFya0JsdWUtMTFZZE1cIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS1rcWVQaVwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiVXBsb2FkZXItdGV4dExpZ2h0U2FuZGxlR3JlZW4tMmt0VWRcIixcblx0XCJ0ZXh0TGlnaHRCcm93blwiOiBcIlVwbG9hZGVyLXRleHRMaWdodEJyb3duLTI2VVBGXCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIlVwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tbExZTHVcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJVcGxvYWRlci10ZXh0QnJvd24tMzhrdDZcIixcblx0XCJ0ZXh0TWFyb29uXCI6IFwiVXBsb2FkZXItdGV4dE1hcm9vbi0xU1ZFNlwiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJVcGxvYWRlci10ZXh0RGFya0Jyb3duLUprOGg0XCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiVXBsb2FkZXItdGV4dE1lZGl1bUJyb3duLTI2ekVVXCIsXG5cdFwidGV4dFNreUJsdWVcIjogXCJVcGxvYWRlci10ZXh0U2t5Qmx1ZS0yQ2p3U1wiLFxuXHRcInRleHRHcmF5XCI6IFwiVXBsb2FkZXItdGV4dEdyYXktMjhUcnJcIixcblx0XCJyZW50QWxsSGVhZGVyQWRtaW5cIjogXCJVcGxvYWRlci1yZW50QWxsSGVhZGVyQWRtaW4tMkxIVHhcIixcblx0XCJhZG1pbkxheW91dFwiOiBcIlVwbG9hZGVyLWFkbWluTGF5b3V0LTJMdlAyXCIsXG5cdFwiYm94XCI6IFwiVXBsb2FkZXItYm94LTI1Nl9uXCIsXG5cdFwiZXhwb3J0TGlua1wiOiBcIlVwbG9hZGVyLWV4cG9ydExpbmstMXkxNTFcIixcblx0XCJibG9ja2NlbnRlclwiOiBcIlVwbG9hZGVyLWJsb2NrY2VudGVyLTJmTFhzXCIsXG5cdFwicGFuZWxIZWFkZXJcIjogXCJVcGxvYWRlci1wYW5lbEhlYWRlci0xWjJtMlwiLFxuXHRcImN1cnJlbmN5c2VsZWN0XCI6IFwiVXBsb2FkZXItY3VycmVuY3lzZWxlY3QtMTBOUERcIixcblx0XCJtYXIwXCI6IFwiVXBsb2FkZXItbWFyMC02M3hjalwiLFxuXHRcIm5hdmJhclwiOiBcIlVwbG9hZGVyLW5hdmJhci0zZkFmRlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlVwbG9hZGVyLWNvbnRhaW5lci0yNTVSalwiLFxuXHRcIm5hdmJhci1icmFuZFwiOiBcIlVwbG9hZGVyLW5hdmJhci1icmFuZC0xakpnbVwiLFxuXHRcImNvbnRhaW5lci1mbHVpZFwiOiBcIlVwbG9hZGVyLWNvbnRhaW5lci1mbHVpZC0zQURrdFwiLFxuXHRcInBhZ2Vjb250ZW50V3JhcHBlclwiOiBcIlVwbG9hZGVyLXBhZ2Vjb250ZW50V3JhcHBlci0xS3VUVlwiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiVXBsb2FkZXItaGVhZGVyVGl0bGUtMmZES3lcIixcblx0XCJ0YWJsZVwiOiBcIlVwbG9hZGVyLXRhYmxlLWxJc2YxXCIsXG5cdFwidGFibGVSb3dcIjogXCJVcGxvYWRlci10YWJsZVJvdy0zOG1rQVwiLFxuXHRcInRhYmxlQ2VsbFwiOiBcIlVwbG9hZGVyLXRhYmxlQ2VsbC0yUEhuclwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIlVwbG9hZGVyLWZvcm1Hcm91cC0yRXVsbVwiLFxuXHRcInNlbGVjdFwiOiBcIlVwbG9hZGVyLXNlbGVjdC0xamo0dVwiLFxuXHRcImxhYmVsVGV4dE5ld1wiOiBcIlVwbG9hZGVyLWxhYmVsVGV4dE5ldy0zVV9IblwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJVcGxvYWRlci1kaXNwbGF5SW5saW5lLTItWDI4XCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiVXBsb2FkZXItYnRuVVBkYXRlLTJsbFFSXCIsXG5cdFwiYnRuTW9kYWxEZWxldGVcIjogXCJVcGxvYWRlci1idG5Nb2RhbERlbGV0ZS0xR252OVwiLFxuXHRcInJhZGlvQnRuXCI6IFwiVXBsb2FkZXItcmFkaW9CdG4tMVlXSl9cIixcblx0XCJidG5XaWR0aFwiOiBcIlVwbG9hZGVyLWJ0bldpZHRoLTN4Yzc4XCIsXG5cdFwiYmFubmVySW1hZ2VCZ1wiOiBcIlVwbG9hZGVyLWJhbm5lckltYWdlQmctMlA4NzVcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJVcGxvYWRlci1iYW5uZXJEZWxldGUtMldIbWpcIixcblx0XCJtb2RhbFJvb3RcIjogXCJVcGxvYWRlci1tb2RhbFJvb3QtM0JXc2VcIixcblx0XCJtb2RhbEJvcmRlckJvdHRvbVwiOiBcIlVwbG9hZGVyLW1vZGFsQm9yZGVyQm90dG9tLTNWRDBMXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJVcGxvYWRlci1sb2dJbk1vZGFsQm9keS0yQjEtVVwiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJVcGxvYWRlci1leHBvcnRTZWN0aW9uLXBmcndYXCIsXG5cdFwiZXhwb3J0U2VjdGlvbkdyaWRTdWJcIjogXCJVcGxvYWRlci1leHBvcnRTZWN0aW9uR3JpZFN1Yi0zOHpBVlwiLFxuXHRcImV4cG9ydFRleHRcIjogXCJVcGxvYWRlci1leHBvcnRUZXh0LTE5RFRnXCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIlVwbG9hZGVyLWV4cG9ydExpbmtJbWctMmxGOUpcIixcblx0XCJ2dHJNaWRkbGVcIjogXCJVcGxvYWRlci12dHJNaWRkbGUtRTM5QlVcIixcblx0XCJleHBvcnRJbWdcIjogXCJVcGxvYWRlci1leHBvcnRJbWctMzhoNGpcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiVXBsb2FkZXItcHJvZmlsZVZpZXdsYWJlbC0zQkRwV1wiLFxuXHRcInByb2ZpbGVWaWV3TWFpbkNvbnRlbnRcIjogXCJVcGxvYWRlci1wcm9maWxlVmlld01haW5Db250ZW50LTJvTU5oXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiVXBsb2FkZXItcHJvZmlsZVZpZXdNYWluLTE4TUhGXCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIlVwbG9hZGVyLXByb2ZpbGVWaWV3SW5uZXItM21OUUdcIixcblx0XCJwcm9maWxlSW1hZ2VTZWN0aW9uXCI6IFwiVXBsb2FkZXItcHJvZmlsZUltYWdlU2VjdGlvbi0yNWNnX1wiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJVcGxvYWRlci1sYXN0dmlld0lubmVyLTJWaEpvXCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJVcGxvYWRlci1DaGFuZ2VUb1VwcGVyQ2FzZS0zNmNoRVwiLFxuXHRcIm5vQm9yZGVyXCI6IFwiVXBsb2FkZXItbm9Cb3JkZXItMzROZzFcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEcm9wem9uZUNvbXBvbmVudCBmcm9tICdyZWFjdC1kcm9wem9uZS1jb21wb25lbnQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnIWlzb21vcnBoaWMtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi9maWxlcGlja2VyLmNzcyc7XG5pbXBvcnQgeyBjaGFuZ2UgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IHRvYXN0ciB9IGZyb20gJ3JlYWN0LXJlZHV4LXRvYXN0cic7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBcbiAgICB1cGxvYWRTdGF0aWNJbWFnZUxvYWRlciwgXG4gICAgZG9VcGxvYWRTdGF0aWNJbWFnZUJsb2NrXG4gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VTdGF0aWNCbG9jayc7XG5cbiAvL01lc3NhZ2VcbmltcG9ydCB7IGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUvbWVzc2FnZXMnO1xuaW1wb3J0IHsgbWF4VXBsb2FkU2l6ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZyc7XG5cbmNsYXNzIERyb3B6b25lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRvVXBsb2FkU3RhdGljSW1hZ2VCbG9jazogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgICB1cGxvYWRTdGF0aWNJbWFnZUxvYWRlcjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpbWFnZTogbnVsbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IHRoaXMuc3VjY2Vzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZGVkZmlsZSA9IHRoaXMuYWRkZWRmaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcHpvbmUgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHN1Y2Nlc3MoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgICAgICBjb25zdCB7IGRvVXBsb2FkU3RhdGljSW1hZ2VCbG9jaywgZGF0YSwgY2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgZmlsZU5hbWUgPSBmcm9tU2VydmVyLmZpbGUuZmlsZW5hbWU7XG4gICAgICAgIGxldCBvbGRQaWN0dXJlID0gZGF0YSAhPSBudWxsID8gZGF0YVswXS5pbWFnZSA6IG51bGw7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IGZyb21TZXJ2ZXIuZmlsZS5wYXRoO1xuICAgICAgICBkb1VwbG9hZFN0YXRpY0ltYWdlQmxvY2soZmlsZU5hbWUsIGZpbGVQYXRoLCBvbGRQaWN0dXJlLCAnYmxvY2syJyk7XG4gICAgICAgIGF3YWl0IGNoYW5nZSgnU3RhdGljQmxvY2tGb3JtJywgJ2Jsb2NrSW1hZ2UyJywgZmlsZU5hbWUpO1xuICAgIH1cblxuICAgIGFkZGVkZmlsZShmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgdXBsb2FkU3RhdGljSW1hZ2VMb2FkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBmaWxlRm9ybWF0ZXMgPSBbXG5cdFx0XHQnaW1hZ2Uvc3ZnK3htbCcsXG5cdFx0XHQnYXBwbGljYXRpb24vc3FsJyxcblx0XHRcdCdhcHBsaWNhdGlvbi9wZGYnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcblx0XHRcdCd0ZXh0L2NzdicsXG5cdFx0XHQnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL2VwdWIremlwJyxcblx0XHRcdCdhcHBsaWNhdGlvbi96aXAnLFxuXHRcdFx0J3RleHQvcGxhaW4nLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3J0ZicsXG5cdFx0XHQnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0Jyxcblx0XHRcdCdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG5cdFx0XHQnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCcsXG5cdFx0XHQndGV4dC90YWItc2VwYXJhdGVkLXZhbHVlcycsXG5cdFx0XHQndGV4dC9jYWxlbmRhcicsXG5cdFx0XHQnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XTtcblxuXHRcdGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+ICgxMDI0ICogMTAyNCAqIG1heFVwbG9hZFNpemUpKSB7XG5cdFx0XHR0b2FzdHIuZXJyb3IoJ01heGltdW0gdXBsb2FkIHNpemUgRXhjZWVkZWQhICcsICdUcnkgYWdhaW4gd2l0aCBhIHNtYWxsZXIgc2l6ZWQgaW1hZ2UnKTtcblx0XHRcdHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcblx0XHR9IGVsc2UgaWYgKGZpbGVGb3JtYXRlcy5pbmRleE9mKGZpbGUgJiYgZmlsZS50eXBlKSA+IDApIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcignRXJyb3IhJywgJ1lvdSBhcmUgdHJ5aW5nIHRvIHVwbG9hZCBpbnZhbGlkIGltYWdlIGZpbGUuIFBsZWFzZSB1cGxvYWQgUE5HLCBKUEcgJiBKUEVHIGZvcm1hdCBpbWFnZSBmaWxlLicpO1xuXHRcdFx0XHRcdHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGVsc2UgaWYgKGZpbGUgJiYgZmlsZS5hY2NlcHRlZCA9PT0gZmFsc2UpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcignRXJyb3IhJywgJ1lvdSBhcmUgdHJ5aW5nIHRvIHVwbG9hZCBpbnZhbGlkIGltYWdlIGZpbGUuIFBsZWFzZSB1cGxvYWQgUE5HLCBKUEcgJiBKUEVHIGZvcm1hdCBpbWFnZSBmaWxlLicpO1xuXHRcdFx0XHRcdHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGVsc2Uge1xuICAgICAgICAgICAgdXBsb2FkU3RhdGljSW1hZ2VMb2FkZXIoKTtcblx0XHR9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHMuaW50bDtcbiAgICAgICAgY29uc3QgZGpzQ29uZmlnID0ge1xuICAgICAgICAgICAgZGljdERlZmF1bHRNZXNzYWdlOiBmb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmNsaWNrSGVyZXRvVXBsb2FkSW1hZ2UpLFxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IGZhbHNlLFxuICAgICAgICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIGRpY3RNYXhGaWxlc0V4Y2VlZGVkOiAnUmVtb3ZlIHRoZSBleGlzdGluZyBpbWFnZSBhbmQgdHJ5IHVwbG9hZCBhZ2FpbicsXG4gICAgICAgICAgICBwcmV2aWV3c0NvbnRhaW5lcjogZmFsc2UsXG4gICAgICAgICAgICAvLyBtYXhGaWxlczogMVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB7XG4gICAgICAgICAgICBpY29uRmlsZXR5cGVzOiBbJy5qcGcnLCAnLnBuZyddLFxuICAgICAgICAgICAgcG9zdFVybDogJy91cGxvYWRIb21lQmFubmVyJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBldmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgICAgaW5pdDogZHogPT4gdGhpcy5kcm9wem9uZSA9IGR6LFxuICAgICAgICAgICAgc3VjY2VzczogdGhpcy5zdWNjZXNzLFxuICAgICAgICAgICAgYWRkZWRmaWxlOiB0aGlzLmFkZGVkZmlsZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxEcm9wem9uZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e2NvbXBvbmVudENvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAgICAgICAgICAgICAgICAgZGpzQ29uZmlnPXtkanNDb25maWd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGUpID0+ICh7XG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gICAgdXBsb2FkU3RhdGljSW1hZ2VMb2FkZXIsXG4gICAgZG9VcGxvYWRTdGF0aWNJbWFnZUJsb2NrLFxuICAgIGNoYW5nZSAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwgKHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKERyb3B6b25lKSkpO1xuIiwiaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcblxuICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmhlYWRlclRpdGxlKSB7XG4gICAgZXJyb3JzLmhlYWRlclRpdGxlID0gbWVzc2FnZXMucmVxdWlyZWQ7XG4gIH0gZWxzZSBpZiAodmFsdWVzLmhlYWRlclRpdGxlLnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgZXJyb3JzLmhlYWRlclRpdGxlID0gbWVzc2FnZXMuYmxhbmtTcGFjZTtcbiAgfVxuXG4gIGlmICghdmFsdWVzLmhlYWRlckNvbnRlbnQpIHtcbiAgICBlcnJvcnMuaGVhZGVyQ29udGVudCA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5oZWFkZXJDb250ZW50LnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgZXJyb3JzLmhlYWRlckNvbnRlbnQgPSBtZXNzYWdlcy5ibGFua1NwYWNlO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuYmxvY2tUaXRsZTEpIHtcbiAgICBlcnJvcnMuYmxvY2tUaXRsZTEgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfSBlbHNlIGlmICh2YWx1ZXMuYmxvY2tUaXRsZTEudHJpbSgpID09IFwiXCIpIHtcbiAgICBlcnJvcnMuYmxvY2tUaXRsZTEgPSBtZXNzYWdlcy5ibGFua1NwYWNlO1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuYmxvY2tDb250ZW50MSkge1xuICAgIGVycm9ycy5ibG9ja0NvbnRlbnQxID0gbWVzc2FnZXMucmVxdWlyZWQ7XG4gIH0gZWxzZSBpZiAodmFsdWVzLmJsb2NrQ29udGVudDEudHJpbSgpID09IFwiXCIpIHtcbiAgICBlcnJvcnMuYmxvY2tDb250ZW50MSA9IG1lc3NhZ2VzLmJsYW5rU3BhY2U7XG4gIH1cblxuICBpZiAoIXZhbHVlcy5ibG9ja1RpdGxlMikge1xuICAgIGVycm9ycy5ibG9ja1RpdGxlMiA9IG1lc3NhZ2VzLnJlcXVpcmVkO1xuICB9IGVsc2UgaWYgKHZhbHVlcy5ibG9ja1RpdGxlMi50cmltKCkgPT0gXCJcIikge1xuICAgIGVycm9ycy5ibG9ja1RpdGxlMiA9IG1lc3NhZ2VzLmJsYW5rU3BhY2U7XG4gIH1cblxuICBpZiAoIXZhbHVlcy5ibG9ja0NvbnRlbnQyKSB7XG4gICAgZXJyb3JzLmJsb2NrQ29udGVudDIgPSBtZXNzYWdlcy5yZXF1aXJlZDtcbiAgfSBlbHNlIGlmICh2YWx1ZXMuYmxvY2tDb250ZW50Mi50cmltKCkgPT0gXCJcIikge1xuICAgIGVycm9ycy5ibG9ja0NvbnRlbnQyID0gbWVzc2FnZXMuYmxhbmtTcGFjZTtcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNwYWNlMS0xS3BWXyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNwYWNlMi0zaFo4NyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1zcGFjZTMtM3pKWjgge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItc3BhY2U0LWdpdEJNIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNwYWNlNS0zQVpBTyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1zcGFjZTYtM01NbHUge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItc3BhY2U3LTJiTjZRIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNwYWNlVG9wOC0xLXhSNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1zcGFjZVRvcDEtM3hTcFUge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1zcGFjZVRvcDItMl8taFUge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItc3BhY2VUb3AzLTFUY0RtIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNwYWNlVG9wNC0yaUt6eSB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1zcGFjZVRvcDUteUtvUW0ge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItc3BhY2VUb3A2LTRJaTZEIHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNwYWNlVG9wNy0za3dDXyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1zcGFjZVRvcDgtMS14UjQge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItbm9NYXJnaW4taTRvSUcge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXBhZGRpbmcxLTFhMXpxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXBhZGRpbmcyLTM4bEhfIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wYWRkaW5nMy1CQlRKMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItcGFkZGluZzQtbmU3bHIge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXBhZGRpbmc1LTJTaGwyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wYWRkaW5nNi0zSUpYRyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItcGFkZGluZzctM3ZVT1kge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXBhZGRpbmdUb3AxLTNnUGxoIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXBhZGRpbmdUb3AyLW5OVjA0IHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wYWRkaW5nVG9wMy0xSjhDSSB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDQtMi1oWFoge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXBhZGRpbmdUb3A1LWgxSFJLIHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wYWRkaW5nVG9wNi1nbDltUCB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDctVGVqR2Uge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLW5vUGFkZGluZy0xQVdlaiB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXRleHRCb2xkLTJ3MGM1IHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXRleHRCb2xkZXItMkR4YWgge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdGV4dE5vcm1hbC0zMk04YyB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4uQmxvY2tVcGxvYWRlci10ZXh0RGFya0JsdWUtb0ZwZTIge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdGV4dExpZ2h0Qmx1ZS0ydTlKdSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdGV4dExpZ2h0U2FuZGxlR3JlZW4tMmgwZkMge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdGV4dExpZ2h0QnJvd24tMklMamQge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXRleHRNZWRpdW1NYXJvb24tMVU3b3Uge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdGV4dEJyb3duLTFHbDNBIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci10ZXh0TWFyb29uLTN5ZmZFIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci10ZXh0RGFya0Jyb3duLUdyU3lnIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXRleHRNZWRpdW1Ccm93bi0xaWdzcyB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdGV4dFNreUJsdWUtYU1VMjcge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci10ZXh0R3JheS0xZTBvdCB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1yZW50QWxsSGVhZGVyQWRtaW4tRG9kcDQge1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLWFkbWluTGF5b3V0LTNhX1ozIHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLWJveC1jZzVwZSBoMiB7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1leHBvcnRMaW5rLTJQVlV6IHtcXG4gIG1hcmdpbi1ib3R0b206IC0yOXB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1ibG9ja2NlbnRlci0ySEVrOCB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wYW5lbEhlYWRlci1GSTVBUCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMjRweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1jdXJyZW5jeXNlbGVjdC16SjVISSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wYW5lbEhlYWRlci1GSTVBUCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1tYXIwLTNyUFd6IHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1uYXZiYXItd0xsblIgPiAuQmxvY2tVcGxvYWRlci1jb250YWluZXItTXd3Z0ogLkJsb2NrVXBsb2FkZXItbmF2YmFyLWJyYW5kLTMwQWl0LFxcbi5CbG9ja1VwbG9hZGVyLW5hdmJhci13TGxuUiA+IC5CbG9ja1VwbG9hZGVyLWNvbnRhaW5lci1mbHVpZC0zclFRWiAuQmxvY2tVcGxvYWRlci1uYXZiYXItYnJhbmQtMzBBaXQge1xcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuQmxvY2tVcGxvYWRlci1ibG9ja2NlbnRlci0ySEVrOCB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG4gIC5CbG9ja1VwbG9hZGVyLXBhbmVsSGVhZGVyLUZJNUFQIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5CbG9ja1VwbG9hZGVyLXBhZ2Vjb250ZW50V3JhcHBlci0yZ0V0NyB7XFxuXFx0bWFyZ2luLWxlZnQ6IDI3MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDgwcHggMjVweDtcXG59XFxuLkJsb2NrVXBsb2FkZXItaGVhZGVyVGl0bGUtMm9pM1Yge1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRtYXJnaW46IDBweCAwcHggMTVweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLkJsb2NrVXBsb2FkZXItcGFuZWxIZWFkZXItRkk1QVAge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uQmxvY2tVcGxvYWRlci10YWJsZS05N2E5VCB7XFxuXFx0ZGlzcGxheTogdGFibGU7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXRhYmxlUm93LTFvVW5FIHtcXG5cXHRkaXNwbGF5OiB0YWJsZS1yb3c7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXRhYmxlQ2VsbC0yaXVNTCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLkJsb2NrVXBsb2FkZXItZm9ybUdyb3VwLTFBN1BCIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5CbG9ja1VwbG9hZGVyLXNlbGVjdC0zS3FDaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1ub01hcmdpbi1pNG9JRyB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1leHBvcnRMaW5rLTJQVlV6IHtcXG5cXHRwYWRkaW5nLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1sYWJlbFRleHROZXctMjhZcjYge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdG1hcmdpbjogNnB4IDBweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG59XFxuLkJsb2NrVXBsb2FkZXItZGlzcGxheUlubGluZS02aWJSYyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5CbG9ja1VwbG9hZGVyLWJ0blVQZGF0ZS0zWWFwbSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1idG5Nb2RhbERlbGV0ZS0xWGVxcyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1yYWRpb0J0bi14N3o3MSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LkJsb2NrVXBsb2FkZXItYnRuVVBkYXRlLTNZYXBtIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcblxcdH1cXG5cXHQuQmxvY2tVcGxvYWRlci1idG5Nb2RhbERlbGV0ZS0xWGVxcyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDBweDtcXG5cXHR9XFxuXFx0LkJsb2NrVXBsb2FkZXItYnRuV2lkdGgtWVVSd0Yge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5CbG9ja1VwbG9hZGVyLWJhbm5lckltYWdlQmctMWUwdGcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRwYWRkaW5nLXRvcDogNzAlO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5CbG9ja1VwbG9hZGVyLWJhbm5lckRlbGV0ZS0zaHJaUiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXB4O1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKkFkbWluIE1vZGFsIFN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKiovXFxuLkJsb2NrVXBsb2FkZXItbW9kYWxSb290LWtKVkdXIHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4uQmxvY2tVcGxvYWRlci1tb2RhbEJvcmRlckJvdHRvbS0zMDRSbiB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGN0EzMUI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWJ0bi1wcmltYXJ5LWJnKTtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuLkJsb2NrVXBsb2FkZXItbG9nSW5Nb2RhbEJvZHktM2ptUHgge1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gU3RhcnQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uQmxvY2tVcGxvYWRlci1leHBvcnRTZWN0aW9uLTNoZDJBIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1leHBvcnRTZWN0aW9uR3JpZFN1Yi0ySGlYciB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNDklICFpbXBvcnRhbnQ7XFxufVxcbi5CbG9ja1VwbG9hZGVyLWV4cG9ydFRleHQtMzdkMEcge1xcblxcdGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZsb2F0OiByaWdodDtcXG59XFxuLkJsb2NrVXBsb2FkZXItZXhwb3J0TGlua0ltZy0xT3ZhWiB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLkJsb2NrVXBsb2FkZXItdnRyTWlkZGxlLVZCbjMxIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1leHBvcnRJbWctMm5QbWoge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMTZweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld2xhYmVsLTJaT1VTIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4uQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld01haW5Db250ZW50LTNKck5NIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYyJTtcXG59XFxuLkJsb2NrVXBsb2FkZXItcHJvZmlsZVZpZXdNYWluLTI3STFLIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLkJsb2NrVXBsb2FkZXItcHJvZmlsZVZpZXdJbm5lci0zdm91SyB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLkJsb2NrVXBsb2FkZXItcHJvZmlsZUltYWdlU2VjdGlvbi1qd0RfbSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdG1heC13aWR0aDogMTAwcHg7XFxuXFx0bWF4LWhlaWdodDogMTAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uQmxvY2tVcGxvYWRlci1sYXN0dmlld0lubmVyLTNzV2Q3IHtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQuQmxvY2tVcGxvYWRlci1wYWdlY29udGVudFdyYXBwZXItMmdFdDcge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5CbG9ja1VwbG9hZGVyLWV4cG9ydFNlY3Rpb24tM2hkMkEge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG5cXHR9XFxuXFx0LkJsb2NrVXBsb2FkZXItZXhwb3J0VGV4dC0zN2QwRyB7XFxuXFx0XFx0ZmxvYXQ6IG5vbmU7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHR9XFxuXFx0LkJsb2NrVXBsb2FkZXItZXhwb3J0U2VjdGlvbkdyaWRTdWItMkhpWHIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld2xhYmVsLTJaT1VTIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQuQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld01haW5Db250ZW50LTNKck5NIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBFbmQqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuQmxvY2tVcGxvYWRlci1wYWdlY29udGVudFdyYXBwZXItMmdFdDcge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkJsb2NrVXBsb2FkZXItQ2hhbmdlVG9VcHBlckNhc2UtSFY2RkJ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXG59XFxuLkJsb2NrVXBsb2FkZXItbm9Cb3JkZXItM09ETWEge1xcblxcdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIEVuZCAqKi9cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc2l0ZWFkbWluL1N0YXRpY0Jsb2NrRm9ybS9CbG9ja1VwbG9hZGVyL0Jsb2NrVXBsb2FkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7O2dGQUU4RTs7RUFFOUUsNkRBQTZEOztFQUU3RDs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7RUFDNUIsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0NBQWtDO0NBQ25DO0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLHdCQUF3QjtDQUN4QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNELDJCQUEyQjtBQUMzQjtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUI7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztFQUVFLDhCQUE4QjtDQUMvQjtBQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0QsOEJBQThCO0FBQzlCO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0Msb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUNEOztDQUVDLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0QsdUVBQXVFO0FBQ3ZFO0NBQ0Msc0JBQXNCO0NBQ3RCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0M7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCO0NBQ0Q7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1o7Q0FDRDtBQUNELHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsNkJBQTZCO0NBQzdCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFlBQVk7Q0FDWjtBQUNELDZEQUE2RDtBQUM3RDtDQUNDLGNBQWM7Q0FDZDtBQUNEO0NBQ0MsaUNBQWlDO0NBQ2pDLCtDQUErQztDQUMvQywrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxhQUFhO0NBQ2I7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxtQ0FBbUM7Q0FDbkMsMEJBQTBCO0tBQ3RCLHVCQUF1QjtTQUNuQixvQkFBb0I7Q0FDNUIsZUFBZTtDQUNmLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQjtBQUNEO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVjtBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWDtBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQjtBQUNEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQztFQUNDLG9CQUFvQjtRQUNkLGNBQWM7UUFDZCxlQUFlO0VBQ3JCO0NBQ0Q7QUFDRDtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO0NBQ0Q7RUFDQyx1Q0FBdUM7RUFDdkM7Q0FDRDtBQUNEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQjtDQUNEO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjtDQUNEO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0M7RUFDQyxlQUFlO0VBQ2Y7Q0FDRDtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRCw0QkFBNEJcIixcImZpbGVcIjpcIkJsb2NrVXBsb2FkZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5zcGFjZTEge1xcblxcdG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UyIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTMge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTYge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDEge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AyIHtcXG5cXHRtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDMge1xcblxcdG1hcmdpbi10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNCB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A1IHtcXG5cXHRtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDYge1xcblxcdG1hcmdpbi10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNyB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A4IHtcXG5cXHRtYXJnaW4tdG9wOiA0OHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcxIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmczIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc2IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzcge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMSB7XFxuXFx0cGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDIge1xcblxcdHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMyB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A0IHtcXG5cXHRwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDUge1xcblxcdHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNiB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A3IHtcXG5cXHRwYWRkaW5nLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9QYWRkaW5nIHtcXG5cXHRwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZGVyIHtcXG5cXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Tm9ybWFsIHtcXG5cXHRmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcbi8qTmV3IERlc2lnbiBUZXh0IENvbG9ycyAqL1xcbi50ZXh0RGFya0JsdWUge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJsdWUge1xcblxcdGNvbG9yOiByZ2IoNTcsIDg3LCAxMDYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRTYW5kbGVHcmVlbiB7XFxuXFx0Y29sb3I6IHJnYig3NiwgODYsIDQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0QnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtTWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDg3LCAzNywgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0QnJvd24ge1xcblxcdGNvbG9yOiAjQjVEQzRCICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWFyb29uIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dERhcmtCcm93biB7XFxuXFx0Y29sb3I6IHJnYig4MywgMTgsIDE2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bUJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDE0MiwgMjgsIDEwKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dFNreUJsdWUge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEdyYXkge1xcblxcdGNvbG9yOiByZ2IoNzcsIDY1LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnJlbnRBbGxIZWFkZXJBZG1pbiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLmFkbWluTGF5b3V0IHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmV4cG9ydExpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5ibG9ja2NlbnRlciB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmN1cnJlbmN5c2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFyMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcXG4ubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmJsb2NrY2VudGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLnBhbmVsSGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGFibGUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udGFibGVSb3cge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLnRhYmxlQ2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLmxhYmVsVGV4dE5ldyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uZGlzcGxheUlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5idG5VUGRhdGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5yYWRpb0J0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmJ0blVQZGF0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuYnRuV2lkdGgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5iYW5uZXJJbWFnZUJnIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYmFubmVyRGVsZXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubW9kYWxSb290IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4ubW9kYWxCb3JkZXJCb3R0b20ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5sb2dJbk1vZGFsQm9keSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5leHBvcnRTZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uZXhwb3J0VGV4dCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhwb3J0TGlua0ltZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnZ0ck1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmV4cG9ydEltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4ucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5wcm9maWxlVmlld01haW4ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucHJvZmlsZVZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLnByb2ZpbGVJbWFnZVNlY3Rpb24ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxhc3R2aWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5leHBvcnRTZWN0aW9uIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5leHBvcnRUZXh0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkNoYW5nZVRvVXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5ub0JvcmRlciB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzcGFjZTFcIjogXCJCbG9ja1VwbG9hZGVyLXNwYWNlMS0xS3BWX1wiLFxuXHRcInNwYWNlMlwiOiBcIkJsb2NrVXBsb2FkZXItc3BhY2UyLTNoWjg3XCIsXG5cdFwic3BhY2UzXCI6IFwiQmxvY2tVcGxvYWRlci1zcGFjZTMtM3pKWjhcIixcblx0XCJzcGFjZTRcIjogXCJCbG9ja1VwbG9hZGVyLXNwYWNlNC1naXRCTVwiLFxuXHRcInNwYWNlNVwiOiBcIkJsb2NrVXBsb2FkZXItc3BhY2U1LTNBWkFPXCIsXG5cdFwic3BhY2U2XCI6IFwiQmxvY2tVcGxvYWRlci1zcGFjZTYtM01NbHVcIixcblx0XCJzcGFjZTdcIjogXCJCbG9ja1VwbG9hZGVyLXNwYWNlNy0yYk42UVwiLFxuXHRcInNwYWNlVG9wOFwiOiBcIkJsb2NrVXBsb2FkZXItc3BhY2VUb3A4LTEteFI0XCIsXG5cdFwic3BhY2VUb3AxXCI6IFwiQmxvY2tVcGxvYWRlci1zcGFjZVRvcDEtM3hTcFVcIixcblx0XCJzcGFjZVRvcDJcIjogXCJCbG9ja1VwbG9hZGVyLXNwYWNlVG9wMi0yXy1oVVwiLFxuXHRcInNwYWNlVG9wM1wiOiBcIkJsb2NrVXBsb2FkZXItc3BhY2VUb3AzLTFUY0RtXCIsXG5cdFwic3BhY2VUb3A0XCI6IFwiQmxvY2tVcGxvYWRlci1zcGFjZVRvcDQtMmlLenlcIixcblx0XCJzcGFjZVRvcDVcIjogXCJCbG9ja1VwbG9hZGVyLXNwYWNlVG9wNS15S29RbVwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIkJsb2NrVXBsb2FkZXItc3BhY2VUb3A2LTRJaTZEXCIsXG5cdFwic3BhY2VUb3A3XCI6IFwiQmxvY2tVcGxvYWRlci1zcGFjZVRvcDctM2t3Q19cIixcblx0XCJub01hcmdpblwiOiBcIkJsb2NrVXBsb2FkZXItbm9NYXJnaW4taTRvSUdcIixcblx0XCJwYWRkaW5nMVwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzEtMWExenFcIixcblx0XCJwYWRkaW5nMlwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzItMzhsSF9cIixcblx0XCJwYWRkaW5nM1wiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzMtQkJUSjJcIixcblx0XCJwYWRkaW5nNFwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzQtbmU3bHJcIixcblx0XCJwYWRkaW5nNVwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzUtMlNobDJcIixcblx0XCJwYWRkaW5nNlwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzYtM0lKWEdcIixcblx0XCJwYWRkaW5nN1wiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZzctM3ZVT1lcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDEtM2dQbGhcIixcblx0XCJwYWRkaW5nVG9wMlwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDItbk5WMDRcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDMtMUo4Q0lcIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDQtMi1oWFpcIixcblx0XCJwYWRkaW5nVG9wNVwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDUtaDFIUktcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDYtZ2w5bVBcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIkJsb2NrVXBsb2FkZXItcGFkZGluZ1RvcDctVGVqR2VcIixcblx0XCJub1BhZGRpbmdcIjogXCJCbG9ja1VwbG9hZGVyLW5vUGFkZGluZy0xQVdlalwiLFxuXHRcInRleHRCb2xkXCI6IFwiQmxvY2tVcGxvYWRlci10ZXh0Qm9sZC0ydzBjNVwiLFxuXHRcInRleHRCb2xkZXJcIjogXCJCbG9ja1VwbG9hZGVyLXRleHRCb2xkZXItMkR4YWhcIixcblx0XCJ0ZXh0Tm9ybWFsXCI6IFwiQmxvY2tVcGxvYWRlci10ZXh0Tm9ybWFsLTMyTThjXCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiQmxvY2tVcGxvYWRlci10ZXh0RGFya0JsdWUtb0ZwZTJcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiQmxvY2tVcGxvYWRlci10ZXh0TGlnaHRCbHVlLTJ1OUp1XCIsXG5cdFwidGV4dExpZ2h0U2FuZGxlR3JlZW5cIjogXCJCbG9ja1VwbG9hZGVyLXRleHRMaWdodFNhbmRsZUdyZWVuLTJoMGZDXCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJCbG9ja1VwbG9hZGVyLXRleHRMaWdodEJyb3duLTJJTGpkXCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIkJsb2NrVXBsb2FkZXItdGV4dE1lZGl1bU1hcm9vbi0xVTdvdVwiLFxuXHRcInRleHRCcm93blwiOiBcIkJsb2NrVXBsb2FkZXItdGV4dEJyb3duLTFHbDNBXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIkJsb2NrVXBsb2FkZXItdGV4dE1hcm9vbi0zeWZmRVwiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJCbG9ja1VwbG9hZGVyLXRleHREYXJrQnJvd24tR3JTeWdcIixcblx0XCJ0ZXh0TWVkaXVtQnJvd25cIjogXCJCbG9ja1VwbG9hZGVyLXRleHRNZWRpdW1Ccm93bi0xaWdzc1wiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiQmxvY2tVcGxvYWRlci10ZXh0U2t5Qmx1ZS1hTVUyN1wiLFxuXHRcInRleHRHcmF5XCI6IFwiQmxvY2tVcGxvYWRlci10ZXh0R3JheS0xZTBvdFwiLFxuXHRcInJlbnRBbGxIZWFkZXJBZG1pblwiOiBcIkJsb2NrVXBsb2FkZXItcmVudEFsbEhlYWRlckFkbWluLURvZHA0XCIsXG5cdFwiYWRtaW5MYXlvdXRcIjogXCJCbG9ja1VwbG9hZGVyLWFkbWluTGF5b3V0LTNhX1ozXCIsXG5cdFwiYm94XCI6IFwiQmxvY2tVcGxvYWRlci1ib3gtY2c1cGVcIixcblx0XCJleHBvcnRMaW5rXCI6IFwiQmxvY2tVcGxvYWRlci1leHBvcnRMaW5rLTJQVlV6XCIsXG5cdFwiYmxvY2tjZW50ZXJcIjogXCJCbG9ja1VwbG9hZGVyLWJsb2NrY2VudGVyLTJIRWs4XCIsXG5cdFwicGFuZWxIZWFkZXJcIjogXCJCbG9ja1VwbG9hZGVyLXBhbmVsSGVhZGVyLUZJNUFQXCIsXG5cdFwiY3VycmVuY3lzZWxlY3RcIjogXCJCbG9ja1VwbG9hZGVyLWN1cnJlbmN5c2VsZWN0LXpKNUhJXCIsXG5cdFwibWFyMFwiOiBcIkJsb2NrVXBsb2FkZXItbWFyMC0zclBXelwiLFxuXHRcIm5hdmJhclwiOiBcIkJsb2NrVXBsb2FkZXItbmF2YmFyLXdMbG5SXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiQmxvY2tVcGxvYWRlci1jb250YWluZXItTXd3Z0pcIixcblx0XCJuYXZiYXItYnJhbmRcIjogXCJCbG9ja1VwbG9hZGVyLW5hdmJhci1icmFuZC0zMEFpdFwiLFxuXHRcImNvbnRhaW5lci1mbHVpZFwiOiBcIkJsb2NrVXBsb2FkZXItY29udGFpbmVyLWZsdWlkLTNyUVFaXCIsXG5cdFwicGFnZWNvbnRlbnRXcmFwcGVyXCI6IFwiQmxvY2tVcGxvYWRlci1wYWdlY29udGVudFdyYXBwZXItMmdFdDdcIixcblx0XCJoZWFkZXJUaXRsZVwiOiBcIkJsb2NrVXBsb2FkZXItaGVhZGVyVGl0bGUtMm9pM1ZcIixcblx0XCJ0YWJsZVwiOiBcIkJsb2NrVXBsb2FkZXItdGFibGUtOTdhOVRcIixcblx0XCJ0YWJsZVJvd1wiOiBcIkJsb2NrVXBsb2FkZXItdGFibGVSb3ctMW9VbkVcIixcblx0XCJ0YWJsZUNlbGxcIjogXCJCbG9ja1VwbG9hZGVyLXRhYmxlQ2VsbC0yaXVNTFwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIkJsb2NrVXBsb2FkZXItZm9ybUdyb3VwLTFBN1BCXCIsXG5cdFwic2VsZWN0XCI6IFwiQmxvY2tVcGxvYWRlci1zZWxlY3QtM0txQ2hcIixcblx0XCJsYWJlbFRleHROZXdcIjogXCJCbG9ja1VwbG9hZGVyLWxhYmVsVGV4dE5ldy0yOFlyNlwiLFxuXHRcImRpc3BsYXlJbmxpbmVcIjogXCJCbG9ja1VwbG9hZGVyLWRpc3BsYXlJbmxpbmUtNmliUmNcIixcblx0XCJidG5VUGRhdGVcIjogXCJCbG9ja1VwbG9hZGVyLWJ0blVQZGF0ZS0zWWFwbVwiLFxuXHRcImJ0bk1vZGFsRGVsZXRlXCI6IFwiQmxvY2tVcGxvYWRlci1idG5Nb2RhbERlbGV0ZS0xWGVxc1wiLFxuXHRcInJhZGlvQnRuXCI6IFwiQmxvY2tVcGxvYWRlci1yYWRpb0J0bi14N3o3MVwiLFxuXHRcImJ0bldpZHRoXCI6IFwiQmxvY2tVcGxvYWRlci1idG5XaWR0aC1ZVVJ3RlwiLFxuXHRcImJhbm5lckltYWdlQmdcIjogXCJCbG9ja1VwbG9hZGVyLWJhbm5lckltYWdlQmctMWUwdGdcIixcblx0XCJiYW5uZXJEZWxldGVcIjogXCJCbG9ja1VwbG9hZGVyLWJhbm5lckRlbGV0ZS0zaHJaUlwiLFxuXHRcIm1vZGFsUm9vdFwiOiBcIkJsb2NrVXBsb2FkZXItbW9kYWxSb290LWtKVkdXXCIsXG5cdFwibW9kYWxCb3JkZXJCb3R0b21cIjogXCJCbG9ja1VwbG9hZGVyLW1vZGFsQm9yZGVyQm90dG9tLTMwNFJuXCIsXG5cdFwibG9nSW5Nb2RhbEJvZHlcIjogXCJCbG9ja1VwbG9hZGVyLWxvZ0luTW9kYWxCb2R5LTNqbVB4XCIsXG5cdFwiZXhwb3J0U2VjdGlvblwiOiBcIkJsb2NrVXBsb2FkZXItZXhwb3J0U2VjdGlvbi0zaGQyQVwiLFxuXHRcImV4cG9ydFNlY3Rpb25HcmlkU3ViXCI6IFwiQmxvY2tVcGxvYWRlci1leHBvcnRTZWN0aW9uR3JpZFN1Yi0ySGlYclwiLFxuXHRcImV4cG9ydFRleHRcIjogXCJCbG9ja1VwbG9hZGVyLWV4cG9ydFRleHQtMzdkMEdcIixcblx0XCJleHBvcnRMaW5rSW1nXCI6IFwiQmxvY2tVcGxvYWRlci1leHBvcnRMaW5rSW1nLTFPdmFaXCIsXG5cdFwidnRyTWlkZGxlXCI6IFwiQmxvY2tVcGxvYWRlci12dHJNaWRkbGUtVkJuMzFcIixcblx0XCJleHBvcnRJbWdcIjogXCJCbG9ja1VwbG9hZGVyLWV4cG9ydEltZy0yblBtalwiLFxuXHRcInByb2ZpbGVWaWV3bGFiZWxcIjogXCJCbG9ja1VwbG9hZGVyLXByb2ZpbGVWaWV3bGFiZWwtMlpPVVNcIixcblx0XCJwcm9maWxlVmlld01haW5Db250ZW50XCI6IFwiQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld01haW5Db250ZW50LTNKck5NXCIsXG5cdFwicHJvZmlsZVZpZXdNYWluXCI6IFwiQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld01haW4tMjdJMUtcIixcblx0XCJwcm9maWxlVmlld0lubmVyXCI6IFwiQmxvY2tVcGxvYWRlci1wcm9maWxlVmlld0lubmVyLTN2b3VLXCIsXG5cdFwicHJvZmlsZUltYWdlU2VjdGlvblwiOiBcIkJsb2NrVXBsb2FkZXItcHJvZmlsZUltYWdlU2VjdGlvbi1qd0RfbVwiLFxuXHRcImxhc3R2aWV3SW5uZXJcIjogXCJCbG9ja1VwbG9hZGVyLWxhc3R2aWV3SW5uZXItM3NXZDdcIixcblx0XCJDaGFuZ2VUb1VwcGVyQ2FzZVwiOiBcIkJsb2NrVXBsb2FkZXItQ2hhbmdlVG9VcHBlckNhc2UtSFY2RkJcIixcblx0XCJub0JvcmRlclwiOiBcIkJsb2NrVXBsb2FkZXItbm9Cb3JkZXItM09ETWFcIlxufTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maWxlcGlja2VyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmlsZXBpY2tlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpbGVwaWNrZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERyb3B6b25lQ29tcG9uZW50IGZyb20gJ3JlYWN0LWRyb3B6b25lLWNvbXBvbmVudCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICchaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuL2ZpbGVwaWNrZXIuY3NzJztcbmltcG9ydCB7IGNoYW5nZSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdGFydFN0YXRpY0ltYWdlTG9hZGVyLCBkb1VwbG9hZFN0YXRpY0ltYWdlLCBzdG9wU3RhdGljSW1hZ2VMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VTdGF0aWNCbG9jayc7XG5cbi8vTWVzc2FnZVxuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5pbXBvcnQgeyBtYXhVcGxvYWRTaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnJztcblxuY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZG9VcGxvYWRTdGF0aWNJbWFnZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgICAgICBzdGFydFN0YXRpY0ltYWdlTG9hZGVyOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGltYWdlOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gdGhpcy5zdWNjZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkZWRmaWxlID0gdGhpcy5hZGRlZGZpbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc3VjY2VzcyhmaWxlLCBmcm9tU2VydmVyKSB7XG4gICAgICAgIGNvbnN0IHsgZG9VcGxvYWRTdGF0aWNJbWFnZSwgZGF0YSwgY2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgZmlsZU5hbWUgPSBmcm9tU2VydmVyLmZpbGUuZmlsZW5hbWU7XG4gICAgICAgIGxldCBvbGRQaWN0dXJlID0gZGF0YSAhPSBudWxsID8gZGF0YVswXS5pbWFnZSA6IG51bGw7XG4gICAgICAgIGxldCBmaWxlUGF0aCA9IGZyb21TZXJ2ZXIuZmlsZS5wYXRoO1xuICAgICAgICBkb1VwbG9hZFN0YXRpY0ltYWdlKGZpbGVOYW1lLCBmaWxlUGF0aCwgb2xkUGljdHVyZSwgJ2Jsb2NrMScpO1xuICAgICAgICBhd2FpdCBjaGFuZ2UoJ1N0YXRpY0Jsb2NrRm9ybScsICdibG9ja0ltYWdlMScsIGZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICBhZGRlZGZpbGUoZmlsZSwgZnJvbVNlcnZlcikge1xuICAgICAgICBjb25zdCB7IHN0YXJ0U3RhdGljSW1hZ2VMb2FkZXIsIHN0b3BTdGF0aWNJbWFnZUxvYWRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZpbGVGb3JtYXRlcyA9IFtcblx0XHRcdCdpbWFnZS9zdmcreG1sJyxcblx0XHRcdCdhcHBsaWNhdGlvbi9zcWwnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3BkZicsXG5cdFx0XHQnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuXHRcdFx0J3RleHQvY3N2Jyxcblx0XHRcdCdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG5cdFx0XHQnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ppcCcsXG5cdFx0XHQndGV4dC9wbGFpbicsXG5cdFx0XHQnYXBwbGljYXRpb24vcnRmJyxcblx0XHRcdCdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50Jyxcblx0XHRcdCdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0Jyxcblx0XHRcdCd0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzJyxcblx0XHRcdCd0ZXh0L2NhbGVuZGFyJyxcblx0XHRcdCdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRdO1xuXG5cdFx0aWYgKGZpbGUgJiYgZmlsZS5zaXplID4gKDEwMjQgKiAxMDI0ICogbWF4VXBsb2FkU2l6ZSkpIHtcblx0XHRcdHRvYXN0ci5lcnJvcignTWF4aW11bSB1cGxvYWQgc2l6ZSBFeGNlZWRlZCEgJywgJ1RyeSBhZ2FpbiB3aXRoIGEgc21hbGxlciBzaXplZCBpbWFnZScpO1xuXHRcdFx0dGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUpO1xuXHRcdH0gZWxzZSBpZiAoZmlsZUZvcm1hdGVzLmluZGV4T2YoZmlsZSAmJiBmaWxlLnR5cGUpID4gMCkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dG9hc3RyLmVycm9yKCdFcnJvciEnLCAnWW91IGFyZSB0cnlpbmcgdG8gdXBsb2FkIGludmFsaWQgaW1hZ2UgZmlsZS4gUGxlYXNlIHVwbG9hZCBQTkcsIEpQRyAmIEpQRUcgZm9ybWF0IGltYWdlIGZpbGUuJyk7XG5cdFx0XHRcdFx0dGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApO1xuXHRcdH0gZWxzZSBpZiAoZmlsZSAmJiBmaWxlLmFjY2VwdGVkID09PSBmYWxzZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmIChmaWxlICYmIGZpbGUuYWNjZXB0ZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dG9hc3RyLmVycm9yKCdFcnJvciEnLCAnWW91IGFyZSB0cnlpbmcgdG8gdXBsb2FkIGludmFsaWQgaW1hZ2UgZmlsZS4gUGxlYXNlIHVwbG9hZCBQTkcsIEpQRyAmIEpQRUcgZm9ybWF0IGltYWdlIGZpbGUuJyk7XG5cdFx0XHRcdFx0dGhpcy5kcm9wem9uZS5yZW1vdmVGaWxlKGZpbGUubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDEwMDApO1xuXHRcdH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydFN0YXRpY0ltYWdlTG9hZGVyKCk7XG5cdFx0fVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB0aGlzLnByb3BzLmludGw7XG4gICAgICAgIGNvbnN0IGRqc0NvbmZpZyA9IHtcbiAgICAgICAgICAgIGRpY3REZWZhdWx0TWVzc2FnZTogZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5jbGlja0hlcmV0b1VwbG9hZEltYWdlKSxcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiBmYWxzZSxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIG1heEZpbGVzaXplOiAxMCxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6ICdpbWFnZS9qcGVnLCBpbWFnZS9wbmcnLFxuICAgICAgICAgICAgZGljdE1heEZpbGVzRXhjZWVkZWQ6ICdSZW1vdmUgdGhlIGV4aXN0aW5nIGltYWdlIGFuZCB0cnkgdXBsb2FkIGFnYWluJyxcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIG1heEZpbGVzOiAxXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb25GaWxldHlwZXM6IFsnLmpwZycsICcucG5nJywgJy5qcGVnJ10sXG4gICAgICAgICAgICBwb3N0VXJsOiAnL3VwbG9hZEhvbWVCYW5uZXInXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBpbml0OiBkeiA9PiB0aGlzLmRyb3B6b25lID0gZHosXG4gICAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN1Y2Nlc3MsXG4gICAgICAgICAgICBhZGRlZGZpbGU6IHRoaXMuYWRkZWRmaWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERyb3B6b25lQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29tcG9uZW50Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJzPXtldmVudEhhbmRsZXJzfVxuICAgICAgICAgICAgICAgICAgICBkanNDb25maWc9e2Rqc0NvbmZpZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHtcbiAgICAvLyBkb1JlbW92ZUxvZ28sXG4gICAgc3RhcnRTdGF0aWNJbWFnZUxvYWRlcixcbiAgICBzdG9wU3RhdGljSW1hZ2VMb2FkZXIsXG4gICAgZG9VcGxvYWRTdGF0aWNJbWFnZSxcbiAgICBjaGFuZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwgKHdpdGhTdHlsZXMocykoY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKERyb3B6b25lKSkpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3NpdGVhZG1pbi9zdGF0aWNCbG9jay9TdGF0aWNCbG9jay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkNcIixcImZpbGVcIjpcIlN0YXRpY0Jsb2NrLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG4vLyBTdHlsZVxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9TdGF0aWNCbG9jay5jc3MnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBTdGF0aWNCbG9ja0Zvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL1N0YXRpY0Jsb2NrRm9ybSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5cbmNsYXNzIFN0YXRpY0Jsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZ2V0U3RhdGljSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB9KVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGltYWdlOiBudWxsXG4gICAgfVxuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YTogeyBsb2FkaW5nLCBnZXRTdGF0aWNJbmZvIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHNldHRpbmdzQ29sbGVjdGlvbiA9IHt9O1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGVyIHR5cGU9e1widGV4dFwifSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0U3RhdGljSW5mby5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5uYW1lID09ICdoZWFkZXInKSB7XG4gICAgICAgICAgc2V0dGluZ3NDb2xsZWN0aW9uWydoZWFkZXJUaXRsZSddID0gaXRlbS50aXRsZTtcbiAgICAgICAgICBzZXR0aW5nc0NvbGxlY3Rpb25bJ2hlYWRlckNvbnRlbnQnXSA9IGl0ZW0uY29udGVudDtcbiAgICAgICAgICBzZXR0aW5nc0NvbGxlY3Rpb25bJ2lzRW5hYmxlJ10gPSBpdGVtLmlzRW5hYmxlO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubmFtZSA9PSAnYmxvY2sxJykge1xuICAgICAgICAgIHNldHRpbmdzQ29sbGVjdGlvblsnYmxvY2tUaXRsZTEnXSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgc2V0dGluZ3NDb2xsZWN0aW9uWydibG9ja0NvbnRlbnQxJ10gPSBpdGVtLmNvbnRlbnQ7XG4gICAgICAgICAgc2V0dGluZ3NDb2xsZWN0aW9uWydibG9ja0ltYWdlMSddID0gaXRlbS5pbWFnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0aW5nc0NvbGxlY3Rpb25bJ2Jsb2NrVGl0bGUyJ10gPSBpdGVtLnRpdGxlO1xuICAgICAgICAgIHNldHRpbmdzQ29sbGVjdGlvblsnYmxvY2tDb250ZW50MiddID0gaXRlbS5jb250ZW50O1xuICAgICAgICAgIHNldHRpbmdzQ29sbGVjdGlvblsnYmxvY2tJbWFnZTInXSA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIDxTdGF0aWNCbG9ja0Zvcm0gaW5pdGlhbFZhbHVlcz17c2V0dGluZ3NDb2xsZWN0aW9ufSAgLz5cbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3R5bGVzKHMpLFxuICBncmFwaHFsKGdxbGBcbiAgICAgIHtcbiAgICAgICAgZ2V0U3RhdGljSW5mbyB7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgIGlzRW5hYmxlXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgYCksXG4pKFN0YXRpY0Jsb2NrKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQWRtaW5MYXlvdXQnO1xuaW1wb3J0IFN0YXRpY0Jsb2NrIGZyb20gJy4vU3RhdGljQmxvY2snO1xuaW1wb3J0IHsgZ2V0U3RhdGljQmxvY2tJbmZvIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9zaXRlYWRtaW4vZ2V0U3RhdGljQmxvY2tJbmZvJztcbmltcG9ydCB7IHJlc3RyaWN0VXJscyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvYWRtaW5Qcml2aWxlZ2VzJztcblxuY29uc3QgdGl0bGUgPSAnU3RhdGljIEluZm8gQmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBzdG9yZSwgZGlzcGF0Y2ggfSkge1xuXG4gIC8vIEZyb20gUmVkdXggU3RvcmVcbiAgbGV0IGlzQWRtaW5BdXRoZW50aWNhdGVkID0gc3RvcmUuZ2V0U3RhdGUoKS5ydW50aW1lLmlzQWRtaW5BdXRoZW50aWNhdGVkO1xuICBsZXQgYWRtaW5Qcml2aWxlZ2VzID0gc3RvcmUuZ2V0U3RhdGUoKS5hZG1pblByZXZpbGVnZXMucHJpdmlsZWdlcyAmJiBzdG9yZS5nZXRTdGF0ZSgpLmFkbWluUHJldmlsZWdlcy5wcml2aWxlZ2VzLnByaXZpbGVnZXM7XG5cbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goZ2V0U3RhdGljQmxvY2tJbmZvKCkpXG5cbiAgaWYgKCFpc0FkbWluQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiB7IHJlZGlyZWN0OiAnL3NpdGVhZG1pbi9sb2dpbicgfTtcbiAgfVxuXG4gIC8vIEFkbWluIHJlc3RyaWN0aW9uXG4gIGlmICghcmVzdHJpY3RVcmxzKCcvc2l0ZWFkbWluL2hvbWUvc3RhdGljLWluZm8tYmxvY2snLCBhZG1pblByaXZpbGVnZXMpKSB7XG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6ICcvc2l0ZWFkbWluJyB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IDxBZG1pbkxheW91dD48U3RhdGljQmxvY2sgdGl0bGU9e3RpdGxlfSAvPjwvQWRtaW5MYXlvdXQ+LFxuICB9O1xufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcmVudEFsbEhlYWRlckFkbWluLTNjcU01IHtcXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLWFkbWluTGF5b3V0LXN0RkJsIHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tYm94LTJ5YUVVIGgyIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tZXhwb3J0TGluay0zTnVPNCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMjlweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1ibG9ja2NlbnRlci0xZDA3SSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXBhbmVsSGVhZGVyLTFDWlU0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAyNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tY3VycmVuY3lzZWxlY3QtSUVCTE4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYW5lbEhlYWRlci0xQ1pVNCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLW1hcjAtMTlRM0Qge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tbmF2YmFyLTNJcV9lID4gLlN0YXRpY0Jsb2NrRm9ybS1jb250YWluZXItMVEtY28gLlN0YXRpY0Jsb2NrRm9ybS1uYXZiYXItYnJhbmQtN1BBNHosXFxuLlN0YXRpY0Jsb2NrRm9ybS1uYXZiYXItM0lxX2UgPiAuU3RhdGljQmxvY2tGb3JtLWNvbnRhaW5lci1mbHVpZC0yblh4ZyAuU3RhdGljQmxvY2tGb3JtLW5hdmJhci1icmFuZC03UEE0eiB7XFxuICBtYXJnaW4tbGVmdDogLTUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5TdGF0aWNCbG9ja0Zvcm0tYmxvY2tjZW50ZXItMWQwN0kge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuICAuU3RhdGljQmxvY2tGb3JtLXBhbmVsSGVhZGVyLTFDWlU0IHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5TdGF0aWNCbG9ja0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTFnb05tIHtcXG5cXHRtYXJnaW4tbGVmdDogMjcwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogODBweCAyNXB4O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLWhlYWRlclRpdGxlLWRTbmRCIHtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0bWFyZ2luOiAwcHggMHB4IDE1cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFuZWxIZWFkZXItMUNaVTQge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRhYmxlLVlDT2NCIHtcXG5cXHRkaXNwbGF5OiB0YWJsZTtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS10YWJsZVJvdy0zQ3RfSSB7XFxuXFx0ZGlzcGxheTogdGFibGUtcm93O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRhYmxlQ2VsbC0xRGJ4YSB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1mb3JtR3JvdXAtM3RXbjkge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zZWxlY3QtMzBzTEMge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1ub01hcmdpbi0yMmJYMiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLWV4cG9ydExpbmstM051TzQge1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tbGFiZWxUZXh0TmV3LTk3bU9mIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRtYXJnaW46IDZweCAwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tZGlzcGxheUlubGluZS0zRnV0YSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5TdGF0aWNCbG9ja0Zvcm0tYnRuVVBkYXRlLTJPWklRIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tYnRuTW9kYWxEZWxldGUtWEFodlIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1yYWRpb0J0bi0ySDhvTyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LlN0YXRpY0Jsb2NrRm9ybS1idG5VUGRhdGUtMk9aSVEge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxuXFx0fVxcblxcdC5TdGF0aWNCbG9ja0Zvcm0tYnRuTW9kYWxEZWxldGUtWEFodlIge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxuXFx0fVxcblxcdC5TdGF0aWNCbG9ja0Zvcm0tYnRuV2lkdGgtM2ZDYTEge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5TdGF0aWNCbG9ja0Zvcm0tYmFubmVySW1hZ2VCZy0xNC00aSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHBhZGRpbmctdG9wOiA3MCU7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1iYW5uZXJEZWxldGUtMWQyVUMge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVweDtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKipBZG1pbiBNb2RhbCBTdGFydCAqKioqKioqKioqKioqKioqKioqKioqL1xcbi5TdGF0aWNCbG9ja0Zvcm0tbW9kYWxSb290LTNPcVdNIHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLW1vZGFsQm9yZGVyQm90dG9tLTNibVN1IHtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgI0Y3QTMxQjtcXG5cXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYnRuLXByaW1hcnktYmcpO1xcblxcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLWxvZ0luTW9kYWxCb2R5LTN3YU1CIHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIFN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLlN0YXRpY0Jsb2NrRm9ybS1leHBvcnRTZWN0aW9uLTIzV0xpIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTNCYVBjIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA0OSUgIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1leHBvcnRUZXh0LTE2QzlsIHtcXG5cXHRjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmbG9hdDogcmlnaHQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tZXhwb3J0TGlua0ltZy0xREI1TiB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS12dHJNaWRkbGUtMjhvb1gge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tZXhwb3J0SW1nLTFhY1A0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDE2cHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wcm9maWxlVmlld2xhYmVsLTFFbzBCIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMXBNSGQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjIlO1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXByb2ZpbGVWaWV3TWFpbi0xMS1XaCB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcHJvZmlsZVZpZXdJbm5lci0xWmJweCB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wcm9maWxlSW1hZ2VTZWN0aW9uLTNiUFBRIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0bWF4LXdpZHRoOiAxMDBweDtcXG5cXHRtYXgtaGVpZ2h0OiAxMDBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tbGFzdHZpZXdJbm5lci1vdXZqbiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LlN0YXRpY0Jsb2NrRm9ybS1wYWdlY29udGVudFdyYXBwZXItMWdvTm0ge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5TdGF0aWNCbG9ja0Zvcm0tZXhwb3J0U2VjdGlvbi0yM1dMaSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcblxcdH1cXG5cXHQuU3RhdGljQmxvY2tGb3JtLWV4cG9ydFRleHQtMTZDOWwge1xcblxcdFxcdGZsb2F0OiBub25lO1xcblxcdFxcdG1hcmdpbi10b3A6IDEycHg7XFxuXFx0fVxcblxcdC5TdGF0aWNCbG9ja0Zvcm0tZXhwb3J0U2VjdGlvbkdyaWRTdWItM0JhUGMge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQuU3RhdGljQmxvY2tGb3JtLXByb2ZpbGVWaWV3bGFiZWwtMUVvMEIge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDZweDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5TdGF0aWNCbG9ja0Zvcm0tcHJvZmlsZVZpZXdNYWluQ29udGVudC0xcE1IZCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKiBBZG1pbiBUYWJsZU5ldyBEZXNpZ24gRW5kKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LlN0YXRpY0Jsb2NrRm9ybS1wYWdlY29udGVudFdyYXBwZXItMWdvTm0ge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1DaGFuZ2VUb1VwcGVyQ2FzZS0yeVktZntcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbn1cXG4uU3RhdGljQmxvY2tGb3JtLW5vQm9yZGVyLTNSZGd5IHtcXG5cXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4vKiogQWRtaW4gLSBDb21tb24gLSBFbmQgKiovXFxuLlN0YXRpY0Jsb2NrRm9ybS1lcnJvck1lc3NhZ2UtMXdzSXAge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFuZWxIZWFkZXItMUNaVTR7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2UwZTA7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tZm9ybUdyb3VwLTN0V245IHtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zZWxlY3QtMzBzTEMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLWxhYmVsVGV4dC0xWWE0MntcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzc2NzY3NjtcXG4gIG1hcmdpbjogNnB4IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tc3BhY2UxLTJQR1o1IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTItRkJMQWkge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTMtSUY0UWwge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTQtMmRBMWIge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTUtU1NWRmgge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTYtaU10Y1Uge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTctM1pscTMge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZVRvcDgtM2Q0Tkgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1zcGFjZVRvcDEtMjRRUjkge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wMi0zYnMybyB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wMy0zc3RSMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wNC0yd0lOViB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wNS0zYW9GbCB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wNi0zWHZhdiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wNy0yb0RqWCB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wOC0zZDROSCB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLW5vTWFyZ2luLTIyYlgyIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXBhZGRpbmcxLTItQ19jIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzItMlhQa2Ege1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzMtMnFrcVEge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzQtMzk2WjQge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzUteEpwbk8ge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzYtMUotZ0Yge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzctMVJKTDAge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tcGFkZGluZ1RvcDEtSUFBV2Ige1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wMi0ydVkwVyB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wMy0xZzZnTSB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wNC1yWUpyNiB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wNS0xTjdyYyB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wNi0yMEpJcSB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wNy0zcENwVSB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS1ub1BhZGRpbmctM3hrZkwge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRleHRCb2xkLTF5YW9nIHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tdGV4dEJvbGRlci1CRExOZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRleHROb3JtYWwtMjBxdzMge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLlN0YXRpY0Jsb2NrRm9ybS10ZXh0RGFya0JsdWUtaDRQZ1Qge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS10ZXh0TGlnaHRCbHVlLTJXcmxnIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRleHRMaWdodFNhbmRsZUdyZWVuLTM5Z0NxIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tdGV4dExpZ2h0QnJvd24tMVlBSU8ge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tdGV4dE1lZGl1bU1hcm9vbi0xV1I3eCB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRleHRCcm93bi0xSWE5aiB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS10ZXh0TWFyb29uLTNMWFNIIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRleHREYXJrQnJvd24tMmRfOXYge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLlN0YXRpY0Jsb2NrRm9ybS10ZXh0TWVkaXVtQnJvd24tMlBYblYge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5TdGF0aWNCbG9ja0Zvcm0tdGV4dFNreUJsdWUtMmEyZTAge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uU3RhdGljQmxvY2tGb3JtLXRleHRHcmF5LXJRaFpmIHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9zaXRlYWRtaW4vU3RhdGljQmxvY2tGb3JtL1N0YXRpY0Jsb2NrRm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSw2REFBNkQ7O0VBRTdEOztnRkFFOEU7O0VBRTlFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixrQ0FBa0M7Q0FDbkM7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0VBRUUsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRTtJQUNFLGFBQWE7R0FDZDtFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0NBQ0Y7QUFDRCw4QkFBOEI7QUFDOUI7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakM7QUFDRDtDQUNDLGVBQWU7Q0FDZjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsWUFBWTtDQUNaO0FBQ0Q7O0NBRUMsZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRCx1RUFBdUU7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQztFQUNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEI7Q0FDRDtFQUNDLGVBQWU7RUFDZixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLFlBQVk7RUFDWjtDQUNEO0FBQ0QsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsWUFBWTtDQUNaO0FBQ0QsNkRBQTZEO0FBQzdEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxpQ0FBaUM7Q0FDakMsK0NBQStDO0NBQy9DLCtCQUErQjtDQUMvQixnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGFBQWE7Q0FDYjtBQUNELHVFQUF1RTtBQUN2RTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLG1DQUFtQztDQUNuQywwQkFBMEI7S0FDdEIsdUJBQXVCO1NBQ25CLG9CQUFvQjtDQUM1QixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCO0FBQ0Q7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixpQ0FBaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWO0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYO0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsaUNBQWlDO0NBQ2pDO0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDtDQUNDO0VBQ0Msb0JBQW9CO1FBQ2QsY0FBYztRQUNkLGVBQWU7RUFDckI7Q0FDRDtBQUNEO0NBQ0M7RUFDQyw0QkFBNEI7RUFDNUI7Q0FDRDtFQUNDLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7Q0FDRDtFQUNDLHVDQUF1QztFQUN2QztDQUNEO0FBQ0Q7Q0FDQztFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CO0NBQ0Q7RUFDQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CO0NBQ0Q7QUFDRCxxRUFBcUU7QUFDckU7Q0FDQztFQUNDLGVBQWU7RUFDZjtDQUNEO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QjtBQUNELDRCQUE0QjtBQUM1QjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGlDQUFpQztDQUNqQztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkI7QUFDRDtDQUNDLGdCQUFnQjtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0Msd0JBQXdCO0NBQ3hCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0QsMkJBQTJCO0FBQzNCO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjtBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxrQ0FBa0M7Q0FDbENcIixcImZpbGVcIjpcIlN0YXRpY0Jsb2NrRm9ybS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiBcXFwiQ2lyY3VsYXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDgwcHg7XFxuICAtLW1heC1jb250YWluZXItd2lkdGg6IDEwMCU7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLS1ib3JkZXItY29sb3I6ICNkY2UwZTA7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1jb2xvcjogIzQ4NDg0ODtcXG4gIC0tYnRuLXByaW1hcnktYmc6ICNGN0EzMUI7XFxuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeS1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItYmc6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWNvbG9yOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1ob3Zlci1iZzogI0U4QTQzNTtcXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogIzA3MzY4NztcXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXNlY29uZGFyeS1ob3Zlci1iZzogIzA3MzY4NztcXG59XFxuLnJlbnRBbGxIZWFkZXJBZG1pbiB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG59XFxuLmFkbWluTGF5b3V0IHtcXG4gIHBhZGRpbmctdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ib3ggaDIge1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmV4cG9ydExpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XFxufVxcbi5ibG9ja2NlbnRlciB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDI0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmN1cnJlbmN5c2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcbi5wYW5lbEhlYWRlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFyMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcXG4ubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmJsb2NrY2VudGVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgfVxcbiAgLnBhbmVsSGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1cHg7XFxuICB9XFxufVxcbi8qKiBBZG1pbiAtIENvbW1vbiAtIFN0YXJ0ICoqL1xcbi5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdG1hcmdpbi1sZWZ0OiAyNzBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiA4MHB4IDI1cHg7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdG1hcmdpbjogMHB4IDBweCAxNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ucGFuZWxIZWFkZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNlMGUwO1xcbn1cXG4udGFibGUge1xcblxcdGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udGFibGVSb3cge1xcblxcdGRpc3BsYXk6IHRhYmxlLXJvdztcXG59XFxuLnRhYmxlQ2VsbCB7XFxuXFx0ZGlzcGxheTogdGFibGUtY2VsbDtcXG5cXHRmbG9hdDogbm9uZTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcbn1cXG4uc2VsZWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5ub01hcmdpbiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwb3J0TGluayB7XFxuXFx0cGFkZGluZy10b3A6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLmxhYmVsVGV4dE5ldyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bWFyZ2luOiA2cHggMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxLjQzO1xcbn1cXG4uZGlzcGxheUlubGluZSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBNb2RhbCBMaXN0U2V0dGluZyBTdGFydCAqKioqKioqKioqKioqKioqKioqL1xcbi5idG5VUGRhdGUge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5yYWRpb0J0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuXFx0LmJ0blVQZGF0ZSB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTJweDtcXG5cXHR9XFxuXFx0LmJ0bk1vZGFsRGVsZXRlIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcblxcdH1cXG5cXHQuYnRuV2lkdGgge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuLyoqKioqKioqKioqKioqKioqKiogQWRtaW4gTW9kYWwgTGlzdFNldHRpbmcgU3RhcnQgKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKiBBZG1pbiBCYW5uZXIgSW1hZ2UgU2VjdGlvbiBTdGFydCAqKioqKioqKioqKioqKioqL1xcbi5iYW5uZXJJbWFnZUJnIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0cGFkZGluZy10b3A6IDcwJTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYmFubmVyRGVsZXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cHg7XFxuXFx0cmlnaHQ6IDIwcHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqQWRtaW4gTW9kYWwgU3RhcnQgKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubW9kYWxSb290IHtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG4ubW9kYWxCb3JkZXJCb3R0b20ge1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRjdBMzFCO1xcblxcdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1idG4tcHJpbWFyeS1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcbi5sb2dJbk1vZGFsQm9keSB7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqIEFkbWluIFRhYmxlTmV3IERlc2lnbiBTdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5leHBvcnRTZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcblxcdHBhZGRpbmc6IDI0cHggMTVweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDE1JSA1NSU7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC1nYXA6IDExcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RjZTBlMDtcXG5cXHRib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDQ5JSAhaW1wb3J0YW50O1xcbn1cXG4uZXhwb3J0VGV4dCB7XFxuXFx0Y29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhwb3J0TGlua0ltZyB7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMnB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnZ0ck1pZGRsZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmV4cG9ydEltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxNnB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5wcm9maWxlVmlld2xhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDM4JVxcbn1cXG4ucHJvZmlsZVZpZXdNYWluQ29udGVudCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MiU7XFxufVxcbi5wcm9maWxlVmlld01haW4ge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4ucHJvZmlsZVZpZXdJbm5lciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcXG59XFxuLnByb2ZpbGVJbWFnZVNlY3Rpb24ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRtYXgtd2lkdGg6IDEwMHB4O1xcblxcdG1heC1oZWlnaHQ6IDEwMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmxhc3R2aWV3SW5uZXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdHBhZGRpbmc6IDEwMHB4IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcblxcdC5leHBvcnRTZWN0aW9uIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuXFx0fVxcblxcdC5leHBvcnRUZXh0IHtcXG5cXHRcXHRmbG9hdDogbm9uZTtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdH1cXG5cXHQuZXhwb3J0U2VjdGlvbkdyaWRTdWIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAhaW1wb3J0YW50O1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXHQucHJvZmlsZVZpZXdsYWJlbCB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0LnByb2ZpbGVWaWV3TWFpbkNvbnRlbnQge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcbi8qKioqKioqKioqKioqKiogQWRtaW4gVGFibGVOZXcgRGVzaWduIEVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcdC5wYWdlY29udGVudFdyYXBwZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdH1cXG59XFxuLkNoYW5nZVRvVXBwZXJDYXNle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxufVxcbi5ub0JvcmRlciB7XFxuXFx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcXG59XFxuLyoqIEFkbWluIC0gQ29tbW9uIC0gRW5kICoqL1xcbi5lcnJvck1lc3NhZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5wYW5lbEhlYWRlcntcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZTBlMDtcXG59XFxuLmZvcm1Hcm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5zZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubGFiZWxUZXh0e1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNzY3Njc2O1xcbiAgbWFyZ2luOiA2cHggMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnNwYWNlMSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTIge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMyB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTUge1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U3IHtcXG5cXHRtYXJnaW4tYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMSB7XFxuXFx0bWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDIge1xcblxcdG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A0IHtcXG5cXHRtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDUge1xcblxcdG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNiB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A3IHtcXG5cXHRtYXJnaW4tdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDgge1xcblxcdG1hcmdpbi10b3A6IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLm5vTWFyZ2luIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzEge1xcblxcdHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmcyIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzMge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNCB7XFxuXFx0cGFkZGluZy1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc1IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzYge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AxIHtcXG5cXHRwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wMiB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AzIHtcXG5cXHRwYWRkaW5nLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDQge1xcblxcdHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNSB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A2IHtcXG5cXHRwYWRkaW5nLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDcge1xcblxcdHBhZGRpbmctdG9wOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5ub1BhZGRpbmcge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGQge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHRCb2xkZXIge1xcblxcdGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuLnRleHROb3JtYWwge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLnRleHREYXJrQmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigyMCwgMzksIDk0KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYig1NywgODcsIDEwNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodFNhbmRsZUdyZWVuIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCcm93biB7XFxuXFx0Y29sb3I6IHJnYigxMTUsIDc5LCAzMykgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1NYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoODcsIDM3LCA1MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRCcm93biB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLnRleHRNYXJvb24ge1xcblxcdGNvbG9yOiByZ2IoMTU1LCA0OSwgNjcpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0RGFya0Jyb3duIHtcXG5cXHRjb2xvcjogcmdiKDgzLCAxOCwgMTYpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TWVkaXVtQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0U2t5Qmx1ZSB7XFxuXFx0Y29sb3I6IHJnYigzNywgMTE3LCAxNDEpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0R3JheSB7XFxuXFx0Y29sb3I6IHJnYig3NywgNjUsIDUxKSAhaW1wb3J0YW50O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicmVudEFsbEhlYWRlckFkbWluXCI6IFwiU3RhdGljQmxvY2tGb3JtLXJlbnRBbGxIZWFkZXJBZG1pbi0zY3FNNVwiLFxuXHRcImFkbWluTGF5b3V0XCI6IFwiU3RhdGljQmxvY2tGb3JtLWFkbWluTGF5b3V0LXN0RkJsXCIsXG5cdFwiYm94XCI6IFwiU3RhdGljQmxvY2tGb3JtLWJveC0yeWFFVVwiLFxuXHRcImV4cG9ydExpbmtcIjogXCJTdGF0aWNCbG9ja0Zvcm0tZXhwb3J0TGluay0zTnVPNFwiLFxuXHRcImJsb2NrY2VudGVyXCI6IFwiU3RhdGljQmxvY2tGb3JtLWJsb2NrY2VudGVyLTFkMDdJXCIsXG5cdFwicGFuZWxIZWFkZXJcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFuZWxIZWFkZXItMUNaVTRcIixcblx0XCJjdXJyZW5jeXNlbGVjdFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1jdXJyZW5jeXNlbGVjdC1JRUJMTlwiLFxuXHRcIm1hcjBcIjogXCJTdGF0aWNCbG9ja0Zvcm0tbWFyMC0xOVEzRFwiLFxuXHRcIm5hdmJhclwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1uYXZiYXItM0lxX2VcIixcblx0XCJjb250YWluZXJcIjogXCJTdGF0aWNCbG9ja0Zvcm0tY29udGFpbmVyLTFRLWNvXCIsXG5cdFwibmF2YmFyLWJyYW5kXCI6IFwiU3RhdGljQmxvY2tGb3JtLW5hdmJhci1icmFuZC03UEE0elwiLFxuXHRcImNvbnRhaW5lci1mbHVpZFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1jb250YWluZXItZmx1aWQtMm5YeGdcIixcblx0XCJwYWdlY29udGVudFdyYXBwZXJcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFnZWNvbnRlbnRXcmFwcGVyLTFnb05tXCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJTdGF0aWNCbG9ja0Zvcm0taGVhZGVyVGl0bGUtZFNuZEJcIixcblx0XCJ0YWJsZVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10YWJsZS1ZQ09jQlwiLFxuXHRcInRhYmxlUm93XCI6IFwiU3RhdGljQmxvY2tGb3JtLXRhYmxlUm93LTNDdF9JXCIsXG5cdFwidGFibGVDZWxsXCI6IFwiU3RhdGljQmxvY2tGb3JtLXRhYmxlQ2VsbC0xRGJ4YVwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1mb3JtR3JvdXAtM3RXbjlcIixcblx0XCJzZWxlY3RcIjogXCJTdGF0aWNCbG9ja0Zvcm0tc2VsZWN0LTMwc0xDXCIsXG5cdFwibm9NYXJnaW5cIjogXCJTdGF0aWNCbG9ja0Zvcm0tbm9NYXJnaW4tMjJiWDJcIixcblx0XCJsYWJlbFRleHROZXdcIjogXCJTdGF0aWNCbG9ja0Zvcm0tbGFiZWxUZXh0TmV3LTk3bU9mXCIsXG5cdFwiZGlzcGxheUlubGluZVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1kaXNwbGF5SW5saW5lLTNGdXRhXCIsXG5cdFwiYnRuVVBkYXRlXCI6IFwiU3RhdGljQmxvY2tGb3JtLWJ0blVQZGF0ZS0yT1pJUVwiLFxuXHRcImJ0bk1vZGFsRGVsZXRlXCI6IFwiU3RhdGljQmxvY2tGb3JtLWJ0bk1vZGFsRGVsZXRlLVhBaHZSXCIsXG5cdFwicmFkaW9CdG5cIjogXCJTdGF0aWNCbG9ja0Zvcm0tcmFkaW9CdG4tMkg4b09cIixcblx0XCJidG5XaWR0aFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1idG5XaWR0aC0zZkNhMVwiLFxuXHRcImJhbm5lckltYWdlQmdcIjogXCJTdGF0aWNCbG9ja0Zvcm0tYmFubmVySW1hZ2VCZy0xNC00aVwiLFxuXHRcImJhbm5lckRlbGV0ZVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1iYW5uZXJEZWxldGUtMWQyVUNcIixcblx0XCJtb2RhbFJvb3RcIjogXCJTdGF0aWNCbG9ja0Zvcm0tbW9kYWxSb290LTNPcVdNXCIsXG5cdFwibW9kYWxCb3JkZXJCb3R0b21cIjogXCJTdGF0aWNCbG9ja0Zvcm0tbW9kYWxCb3JkZXJCb3R0b20tM2JtU3VcIixcblx0XCJsb2dJbk1vZGFsQm9keVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1sb2dJbk1vZGFsQm9keS0zd2FNQlwiLFxuXHRcImV4cG9ydFNlY3Rpb25cIjogXCJTdGF0aWNCbG9ja0Zvcm0tZXhwb3J0U2VjdGlvbi0yM1dMaVwiLFxuXHRcImV4cG9ydFNlY3Rpb25HcmlkU3ViXCI6IFwiU3RhdGljQmxvY2tGb3JtLWV4cG9ydFNlY3Rpb25HcmlkU3ViLTNCYVBjXCIsXG5cdFwiZXhwb3J0VGV4dFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1leHBvcnRUZXh0LTE2QzlsXCIsXG5cdFwiZXhwb3J0TGlua0ltZ1wiOiBcIlN0YXRpY0Jsb2NrRm9ybS1leHBvcnRMaW5rSW1nLTFEQjVOXCIsXG5cdFwidnRyTWlkZGxlXCI6IFwiU3RhdGljQmxvY2tGb3JtLXZ0ck1pZGRsZS0yOG9vWFwiLFxuXHRcImV4cG9ydEltZ1wiOiBcIlN0YXRpY0Jsb2NrRm9ybS1leHBvcnRJbWctMWFjUDRcIixcblx0XCJwcm9maWxlVmlld2xhYmVsXCI6IFwiU3RhdGljQmxvY2tGb3JtLXByb2ZpbGVWaWV3bGFiZWwtMUVvMEJcIixcblx0XCJwcm9maWxlVmlld01haW5Db250ZW50XCI6IFwiU3RhdGljQmxvY2tGb3JtLXByb2ZpbGVWaWV3TWFpbkNvbnRlbnQtMXBNSGRcIixcblx0XCJwcm9maWxlVmlld01haW5cIjogXCJTdGF0aWNCbG9ja0Zvcm0tcHJvZmlsZVZpZXdNYWluLTExLVdoXCIsXG5cdFwicHJvZmlsZVZpZXdJbm5lclwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wcm9maWxlVmlld0lubmVyLTFaYnB4XCIsXG5cdFwicHJvZmlsZUltYWdlU2VjdGlvblwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wcm9maWxlSW1hZ2VTZWN0aW9uLTNiUFBRXCIsXG5cdFwibGFzdHZpZXdJbm5lclwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1sYXN0dmlld0lubmVyLW91dmpuXCIsXG5cdFwiQ2hhbmdlVG9VcHBlckNhc2VcIjogXCJTdGF0aWNCbG9ja0Zvcm0tQ2hhbmdlVG9VcHBlckNhc2UtMnlZLWZcIixcblx0XCJub0JvcmRlclwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1ub0JvcmRlci0zUmRneVwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1lcnJvck1lc3NhZ2UtMXdzSXBcIixcblx0XCJsYWJlbFRleHRcIjogXCJTdGF0aWNCbG9ja0Zvcm0tbGFiZWxUZXh0LTFZYTQyXCIsXG5cdFwic3BhY2UxXCI6IFwiU3RhdGljQmxvY2tGb3JtLXNwYWNlMS0yUEdaNVwiLFxuXHRcInNwYWNlMlwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTItRkJMQWlcIixcblx0XCJzcGFjZTNcIjogXCJTdGF0aWNCbG9ja0Zvcm0tc3BhY2UzLUlGNFFsXCIsXG5cdFwic3BhY2U0XCI6IFwiU3RhdGljQmxvY2tGb3JtLXNwYWNlNC0yZEExYlwiLFxuXHRcInNwYWNlNVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1zcGFjZTUtU1NWRmhcIixcblx0XCJzcGFjZTZcIjogXCJTdGF0aWNCbG9ja0Zvcm0tc3BhY2U2LWlNdGNVXCIsXG5cdFwic3BhY2U3XCI6IFwiU3RhdGljQmxvY2tGb3JtLXNwYWNlNy0zWmxxM1wiLFxuXHRcInNwYWNlVG9wOFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1zcGFjZVRvcDgtM2Q0TkhcIixcblx0XCJzcGFjZVRvcDFcIjogXCJTdGF0aWNCbG9ja0Zvcm0tc3BhY2VUb3AxLTI0UVI5XCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wMi0zYnMyb1wiLFxuXHRcInNwYWNlVG9wM1wiOiBcIlN0YXRpY0Jsb2NrRm9ybS1zcGFjZVRvcDMtM3N0UjNcIixcblx0XCJzcGFjZVRvcDRcIjogXCJTdGF0aWNCbG9ja0Zvcm0tc3BhY2VUb3A0LTJ3SU5WXCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiU3RhdGljQmxvY2tGb3JtLXNwYWNlVG9wNS0zYW9GbFwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1zcGFjZVRvcDYtM1h2YXZcIixcblx0XCJzcGFjZVRvcDdcIjogXCJTdGF0aWNCbG9ja0Zvcm0tc3BhY2VUb3A3LTJvRGpYXCIsXG5cdFwicGFkZGluZzFcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzEtMi1DX2NcIixcblx0XCJwYWRkaW5nMlwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nMi0yWFBrYVwiLFxuXHRcInBhZGRpbmczXCI6IFwiU3RhdGljQmxvY2tGb3JtLXBhZGRpbmczLTJxa3FRXCIsXG5cdFwicGFkZGluZzRcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzQtMzk2WjRcIixcblx0XCJwYWRkaW5nNVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nNS14SnBuT1wiLFxuXHRcInBhZGRpbmc2XCI6IFwiU3RhdGljQmxvY2tGb3JtLXBhZGRpbmc2LTFKLWdGXCIsXG5cdFwicGFkZGluZzdcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFkZGluZzctMVJKTDBcIixcblx0XCJwYWRkaW5nVG9wMVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wMS1JQUFXYlwiLFxuXHRcInBhZGRpbmdUb3AyXCI6IFwiU3RhdGljQmxvY2tGb3JtLXBhZGRpbmdUb3AyLTJ1WTBXXCIsXG5cdFwicGFkZGluZ1RvcDNcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFkZGluZ1RvcDMtMWc2Z01cIixcblx0XCJwYWRkaW5nVG9wNFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wNC1yWUpyNlwiLFxuXHRcInBhZGRpbmdUb3A1XCI6IFwiU3RhdGljQmxvY2tGb3JtLXBhZGRpbmdUb3A1LTFON3JjXCIsXG5cdFwicGFkZGluZ1RvcDZcIjogXCJTdGF0aWNCbG9ja0Zvcm0tcGFkZGluZ1RvcDYtMjBKSXFcIixcblx0XCJwYWRkaW5nVG9wN1wiOiBcIlN0YXRpY0Jsb2NrRm9ybS1wYWRkaW5nVG9wNy0zcENwVVwiLFxuXHRcIm5vUGFkZGluZ1wiOiBcIlN0YXRpY0Jsb2NrRm9ybS1ub1BhZGRpbmctM3hrZkxcIixcblx0XCJ0ZXh0Qm9sZFwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10ZXh0Qm9sZC0xeWFvZ1wiLFxuXHRcInRleHRCb2xkZXJcIjogXCJTdGF0aWNCbG9ja0Zvcm0tdGV4dEJvbGRlci1CRExOZVwiLFxuXHRcInRleHROb3JtYWxcIjogXCJTdGF0aWNCbG9ja0Zvcm0tdGV4dE5vcm1hbC0yMHF3M1wiLFxuXHRcInRleHREYXJrQmx1ZVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10ZXh0RGFya0JsdWUtaDRQZ1RcIixcblx0XCJ0ZXh0TGlnaHRCbHVlXCI6IFwiU3RhdGljQmxvY2tGb3JtLXRleHRMaWdodEJsdWUtMldybGdcIixcblx0XCJ0ZXh0TGlnaHRTYW5kbGVHcmVlblwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10ZXh0TGlnaHRTYW5kbGVHcmVlbi0zOWdDcVwiLFxuXHRcInRleHRMaWdodEJyb3duXCI6IFwiU3RhdGljQmxvY2tGb3JtLXRleHRMaWdodEJyb3duLTFZQUlPXCIsXG5cdFwidGV4dE1lZGl1bU1hcm9vblwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10ZXh0TWVkaXVtTWFyb29uLTFXUjd4XCIsXG5cdFwidGV4dEJyb3duXCI6IFwiU3RhdGljQmxvY2tGb3JtLXRleHRCcm93bi0xSWE5alwiLFxuXHRcInRleHRNYXJvb25cIjogXCJTdGF0aWNCbG9ja0Zvcm0tdGV4dE1hcm9vbi0zTFhTSFwiLFxuXHRcInRleHREYXJrQnJvd25cIjogXCJTdGF0aWNCbG9ja0Zvcm0tdGV4dERhcmtCcm93bi0yZF85dlwiLFxuXHRcInRleHRNZWRpdW1Ccm93blwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10ZXh0TWVkaXVtQnJvd24tMlBYblZcIixcblx0XCJ0ZXh0U2t5Qmx1ZVwiOiBcIlN0YXRpY0Jsb2NrRm9ybS10ZXh0U2t5Qmx1ZS0yYTJlMFwiLFxuXHRcInRleHRHcmF5XCI6IFwiU3RhdGljQmxvY2tGb3JtLXRleHRHcmF5LXJRaFpmXCJcbn07IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9CbG9ja1VwbG9hZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9CbG9ja1VwbG9hZGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0Jsb2NrVXBsb2FkZXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vU3RhdGljQmxvY2suY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1N0YXRpY0Jsb2NrLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1N0YXRpY0Jsb2NrLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1N0YXRpY0Jsb2NrRm9ybS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vU3RhdGljQmxvY2tGb3JtLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1N0YXRpY0Jsb2NrRm9ybS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwsIGNvbXBvc2UgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHtcbiAgUm93LFxuICBDb2wsXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1VwbG9hZGVyLmNzcyc7XG5pbXBvcnQgYnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb25TdHlsZS5jc3MnO1xuaW1wb3J0IHsgZm9ybVZhbHVlU2VsZWN0b3IgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkb1JlbW92ZVN0YXRpY0ltYWdlQmxvY2sgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VTdGF0aWNCbG9jayc7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IERyb3Bab25lIGZyb20gJy4vRHJvcFpvbmUnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9Mb2FkZXInO1xuXG4vLyBUcmFuc2xhdGlvblxuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uLy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vIEFzc2V0XG5pbXBvcnQgZGVmYXVsdFBpYyBmcm9tICcuLi8uLi8uLi8uLi8uLi9wdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmcnO1xuXG5cbmNsYXNzIFVwbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0YXRpY0Jsb2NrSW1hZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkb1JlbW92ZVN0YXRpY0ltYWdlQmxvY2s6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBnZXRMb2dvRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZ2V0U3RhdGljSW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KVxuICAgIH0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcm9maWxlUGljdHVyZURhdGE6IHtcbiAgICAgIGxvYWRpbmc6IHRydWVcbiAgICB9LFxuICAgIHN0YXRpY0Jsb2NrSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdldExvZ29EYXRhOiB7IGxvYWRpbmcsIGdldFN0YXRpY0luZm8gfSwgaW1hZ2UsIGRvUmVtb3ZlU3RhdGljSW1hZ2VCbG9jaywgc3RhdGljQmxvY2tJbWFnZUxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17YnQudGV4dEFsaWduQ2VudGVyfT5cbiAgICAgICAgICA8TG9hZGVyXG4gICAgICAgICAgICBzaG93PXtzdGF0aWNCbG9ja0ltYWdlTG9hZGluZ31cbiAgICAgICAgICAgIHR5cGU9e1wicGFnZVwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidC5waWNDb250YWluZXJNYWlufT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0LnBpY0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbG9hZGluZyAmJiA8ZGl2PjxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5sb2FkaW5nTGFiZWx9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldFN0YXRpY0luZm8gJiYgZ2V0U3RhdGljSW5mb1swXS5pbWFnZSAmJiA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1hZ2VzL2hvbWUvJHtnZXRTdGF0aWNJbmZvWzBdLmltYWdlfSlgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5iYW5uZXJJbWFnZUJnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIWxvYWRpbmcgJiYgZ2V0U3RhdGljSW5mbyAmJiAhZ2V0U3RhdGljSW5mb1swXS5pbWFnZSAmJiA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2RlZmF1bHRQaWN9KWAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidC5wcm9maWxlSW1hZ2VCZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFsb2FkaW5nICYmIGdldFN0YXRpY0luZm9bMF0uaW1hZ2UgJiYgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBvbkNsaWNrPXsoKSA9PiBkb1JlbW92ZVN0YXRpY0ltYWdlQmxvY2soZ2V0U3RhdGljSW5mb1swXS5pbWFnZSwgJ2Jsb2NrMicpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KGJ0LnRyYXNoSWNvbk5ldywgJ3RyYXNoSWNvbk5ld1JUTCcpfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0RlbGV0ZUljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTG9hZGVyPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IGNsYXNzTmFtZT17Y3gocy5zcGFjZTIsIHMuc3BhY2VUb3AyKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZnVsbFdpZHRoLCBidC5idG5QcmltYXJ5LCBzLm5vUGFkZGluZywgJ3Bob3RvVXBsb2FkQnRuJyl9PlxuICAgICAgICAgICAgPERyb3Bab25lIGRhdGE9e2dldFN0YXRpY0luZm99IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcignU3RhdGljQmxvY2tGb3JtJyk7XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICBzdGF0aWNCbG9ja0ltYWdlTG9hZGluZzogc3RhdGUuaG9tZUJhbm5lckltYWdlcy5zdGF0aWNCbG9ja0ltYWdlTG9hZGluZyxcbiAgaW1hZ2U6IHNlbGVjdG9yKHN0YXRlLCAnYmxvY2tJbWFnZTEnKVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICBkb1JlbW92ZVN0YXRpY0ltYWdlQmxvY2tcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdHlsZXMocywgYnQpLFxuICBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCksXG4gIGdyYXBocWwoZ3FsYFxuICBxdWVyeSAoJG5hbWU6IFN0cmluZykge1xuICAgIGdldFN0YXRpY0luZm8obmFtZTogJG5hbWUpIHtcbiAgICAgIG5hbWVcbiAgICAgIGltYWdlXG4gICAgICBjb250ZW50XG4gICAgICB0aXRsZVxuICAgIH1cbiAgfVxuICAgIGAsIHtcbiAgICAgIG5hbWU6ICdnZXRMb2dvRGF0YScsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNzcjogZmFsc2UsXG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIG5hbWU6ICdibG9jazInXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSksXG4pKFVwbG9hZGVyKTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1VwbG9hZGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9VcGxvYWRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9VcGxvYWRlci5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUNBO0FBREE7QUFPQTtBQVBBO0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQUNBO0FBcENBO0FBbUNBO0FBbkNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTBEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7O0FBbEVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUhBO0FBQ0E7QUFIQTtBQWVBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFDQTtBQXFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFJQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7QUF4S0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUF5S0E7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBOzs7Ozs7O0FDM01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7QUFyR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUFIQTtBQVFBO0FBREE7QUFDQTtBQWdHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTs7Ozs7Ozs7QUNwSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBckdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFGQTtBQUNBO0FBSEE7QUFRQTtBQURBO0FBQ0E7QUFnR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUExQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQW1DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFjQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUFqRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBSEE7QUFDQTtBQUhBO0FBZUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUNBO0FBb0RBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFGQTs7Ozs7OztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==