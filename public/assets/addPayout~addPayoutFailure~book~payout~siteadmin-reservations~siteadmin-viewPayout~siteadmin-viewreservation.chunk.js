(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addPayout~addPayoutFailure~book~payout~siteadmin-reservations~siteadmin-viewPayout~siteadmin-viewreservation"],{

/***/ "6a4u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processStripePayment", function() { return processStripePayment; });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("y0DV");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function processStripePayment(_x, _x2, _x3, _x4, _x5) {
  return _processStripePayment.apply(this, arguments);
}

function _processStripePayment() {
  _processStripePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type, cardDetails, reservationDetails, paymentMethodId, confirmPaymentIntentId) {
    var URL, variables, resp, _yield$resp$json, status, errorMessage, redirect, accountId, paymentIntentSecret;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = {
              cardDetails: cardDetails,
              reservationDetails: reservationDetails,
              paymentMethodId: paymentMethodId
            };

            if (type === 'reservation') {
              URL = '/stripe-reservation';
            } else if (type === 'remainingPayment') {
              URL = '/remaining-payment';
            } else if (type === 'refund') {
              URL = '/stripe-refund';
            } else if (type === 'payout') {
              URL = '/stripe-payout';
            } else if (type === 'addPayout') {
              URL = '/stripe-add-payout';
              variables = {
                userDetails: cardDetails,
                bankDetails: reservationDetails
              };
            } else if (type === 'verifyPayout') {
              URL = '/stripe-verify-payout';
              variables = {
                userDetails: cardDetails
              };
            } else if (type === 'getCustomer') {
              URL = '/stripe-get-customer';
            } else if (type === 'account') {
              URL = '/stripe-create-account';
            } else if (type === 'source') {
              URL = '/stripe-create-source';
            } else if (type === 'confirmReservation') {
              URL = '/stripe-reservation-confirm';
              variables = {
                confirmPaymentIntentId: confirmPaymentIntentId,
                reservationDetails: reservationDetails
              };
            }

            _context.next = 4;
            return Object(_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(URL, {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(variables),
              credentials: 'include'
            });

          case 4:
            resp = _context.sent;
            _context.next = 7;
            return resp.json();

          case 7:
            _yield$resp$json = _context.sent;
            status = _yield$resp$json.status;
            errorMessage = _yield$resp$json.errorMessage;
            redirect = _yield$resp$json.redirect;
            accountId = _yield$resp$json.accountId;
            paymentIntentSecret = _yield$resp$json.paymentIntentSecret;

            if (status === 200 && redirect) {
              window.location = redirect;
            }

            return _context.abrupt("return", {
              status: status,
              errorMessage: errorMessage,
              accountId: accountId,
              paymentIntentSecret: paymentIntentSecret
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _processStripePayment.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUGF5b3V0fmFkZFBheW91dEZhaWx1cmV+Ym9va35wYXlvdXR+c2l0ZWFkbWluLXJlc2VydmF0aW9uc35zaXRlYWRtaW4tdmlld1BheW91dH5zaXRlYWRtaW4tdmlld3Jlc2VydmF0aW9uLmNodW5rLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29yZS9wYXltZW50L3N0cmlwZS9wcm9jZXNzU3RyaXBlUGF5bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnLi4vLi4vZmV0Y2gnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1N0cmlwZVBheW1lbnQodHlwZSwgY2FyZERldGFpbHMsIHJlc2VydmF0aW9uRGV0YWlscywgcGF5bWVudE1ldGhvZElkLCBjb25maXJtUGF5bWVudEludGVudElkKSB7XG5cbiAgICBsZXQgVVJMO1xuICAgIGxldCB2YXJpYWJsZXMgPSB7XG4gICAgICAgIGNhcmREZXRhaWxzLFxuICAgICAgICByZXNlcnZhdGlvbkRldGFpbHMsXG4gICAgICAgIHBheW1lbnRNZXRob2RJZFxuICAgIH07XG4gICAgaWYgKHR5cGUgPT09ICdyZXNlcnZhdGlvbicpIHtcbiAgICAgICAgVVJMID0gJy9zdHJpcGUtcmVzZXJ2YXRpb24nO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JlbWFpbmluZ1BheW1lbnQnKSB7XG4gICAgICAgIFVSTCA9ICcvcmVtYWluaW5nLXBheW1lbnQnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JlZnVuZCcpIHtcbiAgICAgICAgVVJMID0gJy9zdHJpcGUtcmVmdW5kJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwYXlvdXQnKSB7XG4gICAgICAgIFVSTCA9ICcvc3RyaXBlLXBheW91dCc7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWRkUGF5b3V0Jykge1xuICAgICAgICBVUkwgPSAnL3N0cmlwZS1hZGQtcGF5b3V0JztcbiAgICAgICAgdmFyaWFibGVzID0ge1xuICAgICAgICAgICAgdXNlckRldGFpbHM6IGNhcmREZXRhaWxzLFxuICAgICAgICAgICAgYmFua0RldGFpbHM6IHJlc2VydmF0aW9uRGV0YWlsc1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZlcmlmeVBheW91dCcpIHtcbiAgICAgICAgVVJMID0gJy9zdHJpcGUtdmVyaWZ5LXBheW91dCc7XG4gICAgICAgIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgICAgIHVzZXJEZXRhaWxzOiBjYXJkRGV0YWlsc1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2dldEN1c3RvbWVyJykge1xuICAgICAgICBVUkwgPSAnL3N0cmlwZS1nZXQtY3VzdG9tZXInO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FjY291bnQnKSB7XG4gICAgICAgIFVSTCA9ICcvc3RyaXBlLWNyZWF0ZS1hY2NvdW50JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzb3VyY2UnKSB7XG4gICAgICAgIFVSTCA9ICcvc3RyaXBlLWNyZWF0ZS1zb3VyY2UnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NvbmZpcm1SZXNlcnZhdGlvbicpIHtcbiAgICAgICAgVVJMID0gJy9zdHJpcGUtcmVzZXJ2YXRpb24tY29uZmlybSc7XG4gICAgICAgIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgICAgIGNvbmZpcm1QYXltZW50SW50ZW50SWQsXG4gICAgICAgICAgICByZXNlcnZhdGlvbkRldGFpbHNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChVUkwsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpLFxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSk7XG4gICAgLy9yZXR1cm4gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgY29uc3QgeyBzdGF0dXMsIGVycm9yTWVzc2FnZSwgcmVkaXJlY3QsIGFjY291bnRJZCwgcGF5bWVudEludGVudFNlY3JldCB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwICYmIHJlZGlyZWN0KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJlZGlyZWN0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgYWNjb3VudElkLFxuICAgICAgICBwYXltZW50SW50ZW50U2VjcmV0XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7OztBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUF4Q0E7QUFBQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBQ0E7QUExQ0E7QUF5Q0E7QUF6Q0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW1EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXZEQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUF4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9