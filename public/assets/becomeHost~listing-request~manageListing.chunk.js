(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["becomeHost~listing-request~manageListing"],{

/***/ "9z2N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePublishStatus", function() { return ManagePublishStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitForVerification", function() { return submitForVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveListing", function() { return approveListing; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJmH");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HqwZ");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WlAH");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("20nU");
/* harmony import */ var _core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xEyI");
/* harmony import */ var _helpers_sendNotifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("k7TW");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // Toaster





 // To Refresh the Manage Listing Status

var ManageListingQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n    query ManageListings{\n        ManageListings {\n            id\n            title\n            city\n            updatedAt\n            coverPhoto\n            isPublished\n            listApprovalStatus\n            isReady\n            listPhotos{  \n                id\n                name\n            }\n            settingsData {\n                listsettings {\n                    id\n                    itemName\n                }\n            }\n            listingSteps {\n                id\n                step1\n                step2\n                step3\n                step4\n            }\n        }\n  }"]))); // To Refresh Listing Steps Query

var ListingStepsQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    query ($listId:String!) {\n        showListingSteps (listId:$listId) {\n            id\n            listId\n            step1\n            step2\n            step3\n            step4\n            listing {\n                id\n                isReady\n                isPublished\n                listApprovalStatus\n            }\n        }\n    }"])));
var getUpcomingBookingQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\nquery getUpcomingBookings ($listId: Int!){\n    getUpcomingBookings(listId: $listId){\n      count\n    }\n  }"])));
var ListingQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([" \n  query UserListing($listId:String!,$preview: Boolean) {\n    UserListing(listId:$listId, preview: $preview) {\n      id\n      userId\n      title\n      coverPhoto\n      country\n      city\n      state\n      personCapacity\n      zipcode\n      user {\n        id\n        email\n        profile{\n          profileId\n          displayName\n          firstName\n        }\n      }\n    }\n  }"])));
function ManagePublishStatus(listId, action) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch, getState, _ref) {
      var client, mutation, wishListStatus, upcomingBookingCount, bookedData, type, _yield$client$mutate, data, _yield$client$mutate2, dataList, _yield$client$query, _data;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = _ref.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_START"],
                payload: {
                  publishListLoading: true
                }
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            mutation ManagePublish($listId: Int!, $action: String!) {\n                managePublish(listId: $listId, action: $action) {\n                    status\n                }\n            }\n        "]))); // Update List Status

              wishListStatus = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            mutation updateListStatus($listId:Int!, $action: String!) {\n                 updateListStatus (listId:$listId, action: $action) {\n                    status\n                 }\n             }\n        "])));
              _context.next = 6;
              return client.query({
                query: getUpcomingBookingQuery,
                variables: {
                  listId: listId
                },
                fetchPolicy: 'network-only'
              });

            case 6:
              bookedData = _context.sent;

              if (bookedData && bookedData.data && bookedData.data.getUpcomingBookings) {
                upcomingBookingCount = bookedData.data.getUpcomingBookings.count;
              }

              _context.prev = 8;
              type = 'Publish Listing';

              if (action === 'unPublish') {
                type = 'UnPublish Listing';
              }

              if (!(upcomingBookingCount > 0 && action === 'unPublish')) {
                _context.next = 16;
                break;
              }

              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error(type, 'You cannot unpublish as you have upcoming bookings or enquiries for this listing.');
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  publishListLoading: false
                }
              });
              _context.next = 35;
              break;

            case 16:
              _context.next = 18;
              return client.mutate({
                mutation: mutation,
                variables: {
                  listId: listId,
                  action: action
                },
                refetchQueries: [{
                  query: ManageListingQuery
                }]
              });

            case 18:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;

              if (!(data.managePublish.status === '200')) {
                _context.next = 33;
                break;
              }

              _context.next = 23;
              return client.mutate({
                mutation: wishListStatus,
                variables: {
                  listId: listId,
                  action: action
                }
              });

            case 23:
              _yield$client$mutate2 = _context.sent;
              dataList = _yield$client$mutate2.dataList;
              _context.next = 27;
              return client.query({
                query: ListingStepsQuery,
                variables: {
                  listId: listId
                },
                fetchPolicy: 'network-only'
              });

            case 27:
              _yield$client$query = _context.sent;
              _data = _yield$client$query.data;
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success(type, type + " is success!");
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_SUCCESS"],
                payload: {
                  listingSteps: _data.showListingSteps,
                  publishListLoading: false
                }
              });
              _context.next = 35;
              break;

            case 33:
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error(type, type + " is failed!");
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  status: data.managePublish.status,
                  publishListLoading: false
                }
              });

            case 35:
              _context.next = 40;
              break;

            case 37:
              _context.prev = 37;
              _context.t0 = _context["catch"](8);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  error: _context.t0,
                  publishListLoading: false
                }
              });

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 37]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function submitForVerification(listId, listApprovalStatus) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dispatch, getState, _ref3) {
      var client, mutation, dataListingQuery, _yield$client$mutate3, data, _yield$client$query2, _data2, listDetails, content, createHistory, _yield$client$mutate4, _data3;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              client = _ref3.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_START"],
                payload: {
                  publishListLoading: true
                }
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        mutation submitForVerification($id: Int,$listApprovalStatus: String){\n          submitForVerification(id:$id, listApprovalStatus: $listApprovalStatus){\n              id\n              status\n            }\n          }\n        "])));
              _context2.prev = 3;
              _context2.next = 6;
              return client.query({
                query: ListingQuery,
                variables: {
                  listId: listId,
                  preview: true
                },
                fetchPolicy: 'network-only'
              });

            case 6:
              dataListingQuery = _context2.sent;
              _context2.next = 9;
              return client.mutate({
                mutation: mutation,
                variables: {
                  id: listId,
                  listApprovalStatus: listApprovalStatus
                }
              });

            case 9:
              _yield$client$mutate3 = _context2.sent;
              data = _yield$client$mutate3.data;

              if (!(data.submitForVerification.status == "200")) {
                _context2.next = 30;
                break;
              }

              _context2.next = 14;
              return client.query({
                query: ListingStepsQuery,
                variables: {
                  listId: listId
                },
                fetchPolicy: 'network-only'
              });

            case 14:
              _yield$client$query2 = _context2.sent;
              _data2 = _yield$client$query2.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_SUCCESS"],
                payload: {
                  listingSteps: _data2.showListingSteps,
                  publishListLoading: false
                }
              });

              if (!(dataListingQuery && dataListingQuery.data.UserListing)) {
                _context2.next = 28;
                break;
              }

              listDetails = dataListingQuery.data.UserListing;
              content = {
                listId: listDetails.id,
                listTitle: listDetails.title,
                hostName: listDetails.user.profile.firstName
              };
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Success!, Your Listing has been submitted for Approval");
              createHistory = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            mutation createListingHistory($listId:Int!, $userId: String, $status: String, $reason: String) {\n              createListingHistory (listId:$listId, userId: $userId, status:$status, reason:$reason) {\n                    status\n                 }\n             }\n        "])));
              _context2.next = 24;
              return client.mutate({
                mutation: createHistory,
                variables: {
                  listId: listId,
                  userId: listDetails.userId,
                  status: "submitForverification"
                }
              });

            case 24:
              _yield$client$mutate4 = _context2.sent;
              _data3 = _yield$client$mutate4.data;
              _context2.next = 28;
              return Object(_core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__["sendEmail"])(_config__WEBPACK_IMPORTED_MODULE_3__["adminEmail"], 'listPublishRequest', content);

            case 28:
              _context2.next = 32;
              break;

            case 30:
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed Action!");
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  status: data.managePublish.status,
                  publishListLoading: false
                }
              });

            case 32:
              _context2.next = 37;
              break;

            case 34:
              _context2.prev = 34;
              _context2.t0 = _context2["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  error: _context2.t0,
                  publishListLoading: false
                }
              });

            case 37:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 34]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function approveListing(listId, listApprovalStatus, reason) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dispatch, getState, _ref5) {
      var client, mutation, dataListingQuery, _yield$client$mutate5, data, _yield$client$query3, _data4, listDetails, content, createHistory, _yield$client$mutate6, _data5, notifyContent, _yield$client$mutate7, _data6, _notifyContent;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              client = _ref5.client;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_START"],
                payload: {
                  publishListLoading: true
                }
              });
              mutation = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n\t\t\tmutation approveListing($id: Int, $listApprovalStatus: String){\n\t\t\t\tapproveListing(id:$id, listApprovalStatus:$listApprovalStatus){\n\t\t\t\t\tid\n\t\t\t\t\tstatus\n\t\t\t\t}\n\t\t\t}\n        "])));
              _context3.prev = 3;
              _context3.next = 6;
              return client.query({
                query: ListingQuery,
                variables: {
                  listId: listId,
                  preview: true
                },
                fetchPolicy: 'network-only'
              });

            case 6:
              dataListingQuery = _context3.sent;
              _context3.next = 9;
              return client.mutate({
                mutation: mutation,
                variables: {
                  id: listId,
                  listApprovalStatus: listApprovalStatus
                }
              });

            case 9:
              _yield$client$mutate5 = _context3.sent;
              data = _yield$client$mutate5.data;

              if (!(data.approveListing.status === "200")) {
                _context3.next = 42;
                break;
              }

              _context3.next = 14;
              return client.query({
                query: ListingStepsQuery,
                variables: {
                  listId: listId
                },
                fetchPolicy: 'network-only'
              });

            case 14:
              _yield$client$query3 = _context3.sent;
              _data4 = _yield$client$query3.data;

              if (!(dataListingQuery && dataListingQuery.data.UserListing)) {
                _context3.next = 39;
                break;
              }

              listDetails = dataListingQuery.data.UserListing;
              content = {
                listId: listDetails.id,
                listTitle: listDetails.title,
                hostName: listDetails.user.profile.firstName,
                reason: listApprovalStatus === 'declined' ? reason : null
              };
              createHistory = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n            mutation createListingHistory($listId:Int!, $userId: String, $status: String!, $reason: String) {\n              createListingHistory (listId:$listId, userId: $userId, status:$status, reason:$reason) {\n                    status\n                 }\n             }\n        "])));

              if (!(listApprovalStatus === 'declined')) {
                _context3.next = 31;
                break;
              }

              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success('Success!', 'The Listing review request has been declined successfully.');
              _context3.next = 24;
              return client.mutate({
                mutation: createHistory,
                variables: {
                  listId: listId,
                  userId: listDetails.userId,
                  status: "declined",
                  reason: reason
                }
              });

            case 24:
              _yield$client$mutate6 = _context3.sent;
              _data5 = _yield$client$mutate6.data;
              notifyContent = {
                "screenType": "becomeahost",
                "userType": 'host',
                "listId": listId,
                "userName": listDetails.user.profile.firstName,
                "listTitle": listDetails.title,
                "reason": reason
              };
              Object(_helpers_sendNotifications__WEBPACK_IMPORTED_MODULE_5__["sendNotifications"])('listDeclined', notifyContent, listDetails.userId);
              Object(_core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__["sendEmail"])(listDetails.user.email, 'adminListReject', content);
              _context3.next = 39;
              break;

            case 31:
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success('Success!', 'Listing is approved successfully!');
              _context3.next = 34;
              return client.mutate({
                mutation: createHistory,
                variables: {
                  listId: listId,
                  userId: listDetails.userId,
                  status: "approved"
                }
              });

            case 34:
              _yield$client$mutate7 = _context3.sent;
              _data6 = _yield$client$mutate7.data;
              _notifyContent = {
                "screenType": "becomeahost",
                "userType": 'host',
                "listId": listId,
                "userName": listDetails.user.profile.firstName,
                "listTitle": listDetails.title
              };
              Object(_helpers_sendNotifications__WEBPACK_IMPORTED_MODULE_5__["sendNotifications"])('listApproved', _notifyContent, listDetails.userId);
              Object(_core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__["sendEmail"])(listDetails.user.email, 'adminListApprove', content);

            case 39:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_SUCCESS"],
                payload: {
                  listingSteps: _data4.showListingSteps,
                  publishListLoading: false
                }
              });
              _context3.next = 44;
              break;

            case 42:
              react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed Action!");
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  publishListLoading: false
                }
              });

            case 44:
              _context3.next = 49;
              break;

            case 46:
              _context3.prev = 46;
              _context3.t0 = _context3["catch"](3);
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
                payload: {
                  error: _context3.t0,
                  publishListLoading: false
                }
              });

            case 49:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 46]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref6.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "g5CZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushNotificationMessage", function() { return pushNotificationMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAmount", function() { return formatAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatText", function() { return formatText; });
/* harmony import */ var _capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gu+P");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function pushNotificationMessage(_x, _x2) {
  return _pushNotificationMessage.apply(this, arguments);
}

function _pushNotificationMessage() {
  _pushNotificationMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(actionType, notifyContent) {
    var title, message;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = '', message = '';

            if (actionType === 'newEnquiry') {
              title = "New Enquiry";
              message = "".concat(formatText(notifyContent['userName']), ": ").concat(notifyContent['content']);
            }

            if (actionType === 'declined') {
              title = "Declined";
              message = "".concat(formatText(notifyContent['userName']), ": Booking is Declined");
            }

            if (actionType === 'approved') {
              title = "Approved";
              message = "".concat(formatText(notifyContent['userName']), ": Booking is Approved");
            }

            if (actionType === 'newMessage') {
              title = "New Message";
              message = "".concat(formatText(notifyContent['userName']), ": ").concat(notifyContent['content']);
            }

            if (actionType === 'cancelReservation') {
              title = "Booking is Cancelled";
              message = "".concat(formatText(notifyContent['userName']), ": ").concat(notifyContent['content']);
            }

            if (actionType === 'newBooking') {
              title = "New Booking";
              message = "".concat(formatText(notifyContent['userName']), ": ").concat(notifyContent['content']);
            }

            if (actionType === 'listApproved') {
              title = "The Admin has verified your listing";
              message = "".concat(formatText(notifyContent['userName']), " : The Admin has verified your listing ").concat(notifyContent['listTitle'], " . Please publish your listing to get reservations.");
            }

            if (actionType === 'listDeclined') {
              title = "Admin has declined your listing";
              message = "".concat(formatText(notifyContent['userName']), " : Admin has declined your listing request for the ").concat(notifyContent['listTitle'], " due to the reason of ").concat(notifyContent['reason'], ". Kindly update the listing information and submit for the list approval.");
            }

            return _context.abrupt("return", {
              title: title,
              message: message
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _pushNotificationMessage.apply(this, arguments);
}

function formatAmount(amount, currency, locale) {
  var convertCurrency = 'USD';

  if (amount) {
    convertCurrency = currency ? currency : convertCurrency;
    return amount.toLocaleString(locale, {
      style: 'currency',
      currency: convertCurrency
    });
  } else {
    return null;
  }
}
function formatText(text) {
  var capitalizedText = Object(_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_0__["capitalizeFirstLetter"])(text);
  return capitalizedText ? capitalizedText.trim() : '';
}

/***/ }),

/***/ "gu+P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "k7TW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendNotifications", function() { return sendNotifications; });
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("y0DV");
/* harmony import */ var _pushNotificationMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("g5CZ");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Fetch request


function sendNotifications(_x, _x2, _x3) {
  return _sendNotifications.apply(this, arguments);
}

function _sendNotifications() {
  _sendNotifications = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(actionType, notifyContent, userId) {
    var _yield$pushNotificati, title, message, content, resp, _resp$json, status, errorMessge;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_pushNotificationMessage__WEBPACK_IMPORTED_MODULE_1__["pushNotificationMessage"])(actionType, notifyContent);

          case 2:
            _yield$pushNotificati = _context.sent;
            title = _yield$pushNotificati.title;
            message = _yield$pushNotificati.message;
            content = notifyContent;
            content['title'] = title;
            content['message'] = message;
            _context.next = 10;
            return Object(_core_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/push-notification', {
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                content: content,
                userId: userId
              }),
              credentials: 'include'
            });

          case 10:
            resp = _context.sent;
            _resp$json = resp.json, status = _resp$json.status, errorMessge = _resp$json.errorMessge;
            _context.next = 14;
            return {
              status: status,
              errorMessge: errorMessge
            };

          case 14:
            return _context.abrupt("return", _context.sent);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendNotifications.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  sendNotifications: sendNotifications
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVjb21lSG9zdH5saXN0aW5nLXJlcXVlc3R+bWFuYWdlTGlzdGluZy5jaHVuay5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvTGlzdGluZy9NYW5hZ2VQdWJsaXNoU3RhdHVzLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2hlbHBlcnMvcHVzaE5vdGlmaWNhdGlvbk1lc3NhZ2UuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvaGVscGVycy9jYXBpdGFsaXplRmlyc3RMZXR0ZXIuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvaGVscGVycy9zZW5kTm90aWZpY2F0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcblxuaW1wb3J0IHtcbiAgTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NUQVJULFxuICBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfU1VDQ0VTUyxcbiAgTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX0VSUk9SLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYWRtaW5FbWFpbCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICcuLi8uLi9jb3JlL2VtYWlsL3NlbmRFbWFpbCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2VuZE5vdGlmaWNhdGlvbnMnO1xuXG4vLyBUbyBSZWZyZXNoIHRoZSBNYW5hZ2UgTGlzdGluZyBTdGF0dXNcbmNvbnN0IE1hbmFnZUxpc3RpbmdRdWVyeSA9IGdxbGAgXG4gICAgcXVlcnkgTWFuYWdlTGlzdGluZ3N7XG4gICAgICAgIE1hbmFnZUxpc3RpbmdzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgY2l0eVxuICAgICAgICAgICAgdXBkYXRlZEF0XG4gICAgICAgICAgICBjb3ZlclBob3RvXG4gICAgICAgICAgICBpc1B1Ymxpc2hlZFxuICAgICAgICAgICAgbGlzdEFwcHJvdmFsU3RhdHVzXG4gICAgICAgICAgICBpc1JlYWR5XG4gICAgICAgICAgICBsaXN0UGhvdG9zeyAgXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5nc0RhdGEge1xuICAgICAgICAgICAgICAgIGxpc3RzZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdGluZ1N0ZXBzIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHN0ZXAxXG4gICAgICAgICAgICAgICAgc3RlcDJcbiAgICAgICAgICAgICAgICBzdGVwM1xuICAgICAgICAgICAgICAgIHN0ZXA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgfWA7XG5cbi8vIFRvIFJlZnJlc2ggTGlzdGluZyBTdGVwcyBRdWVyeVxuY29uc3QgTGlzdGluZ1N0ZXBzUXVlcnkgPSBncWxgXG4gICAgcXVlcnkgKCRsaXN0SWQ6U3RyaW5nISkge1xuICAgICAgICBzaG93TGlzdGluZ1N0ZXBzIChsaXN0SWQ6JGxpc3RJZCkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxpc3RJZFxuICAgICAgICAgICAgc3RlcDFcbiAgICAgICAgICAgIHN0ZXAyXG4gICAgICAgICAgICBzdGVwM1xuICAgICAgICAgICAgc3RlcDRcbiAgICAgICAgICAgIGxpc3Rpbmcge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaXNSZWFkeVxuICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkXG4gICAgICAgICAgICAgICAgbGlzdEFwcHJvdmFsU3RhdHVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9YDtcblxuY29uc3QgZ2V0VXBjb21pbmdCb29raW5nUXVlcnkgPSBncWxgXG5xdWVyeSBnZXRVcGNvbWluZ0Jvb2tpbmdzICgkbGlzdElkOiBJbnQhKXtcbiAgICBnZXRVcGNvbWluZ0Jvb2tpbmdzKGxpc3RJZDogJGxpc3RJZCl7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfWA7XG5cbmNvbnN0IExpc3RpbmdRdWVyeSA9IGdxbGAgXG4gIHF1ZXJ5IFVzZXJMaXN0aW5nKCRsaXN0SWQ6U3RyaW5nISwkcHJldmlldzogQm9vbGVhbikge1xuICAgIFVzZXJMaXN0aW5nKGxpc3RJZDokbGlzdElkLCBwcmV2aWV3OiAkcHJldmlldykge1xuICAgICAgaWRcbiAgICAgIHVzZXJJZFxuICAgICAgdGl0bGVcbiAgICAgIGNvdmVyUGhvdG9cbiAgICAgIGNvdW50cnlcbiAgICAgIGNpdHlcbiAgICAgIHN0YXRlXG4gICAgICBwZXJzb25DYXBhY2l0eVxuICAgICAgemlwY29kZVxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICAgIGVtYWlsXG4gICAgICAgIHByb2ZpbGV7XG4gICAgICAgICAgcHJvZmlsZUlkXG4gICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWA7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZVB1Ymxpc2hTdGF0dXMobGlzdElkLCBhY3Rpb24pIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIE1hbmFnZVB1Ymxpc2goJGxpc3RJZDogSW50ISwgJGFjdGlvbjogU3RyaW5nISkge1xuICAgICAgICAgICAgICAgIG1hbmFnZVB1Ymxpc2gobGlzdElkOiAkbGlzdElkLCBhY3Rpb246ICRhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgLy8gVXBkYXRlIExpc3QgU3RhdHVzXG4gICAgbGV0IHdpc2hMaXN0U3RhdHVzID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gdXBkYXRlTGlzdFN0YXR1cygkbGlzdElkOkludCEsICRhY3Rpb246IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdFN0YXR1cyAobGlzdElkOiRsaXN0SWQsIGFjdGlvbjogJGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgIGxldCB1cGNvbWluZ0Jvb2tpbmdDb3VudDtcbiAgICBjb25zdCBib29rZWREYXRhID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBnZXRVcGNvbWluZ0Jvb2tpbmdRdWVyeSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsaXN0SWRcbiAgICAgIH0sXG4gICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICB9KTtcblxuICAgIGlmIChib29rZWREYXRhICYmIGJvb2tlZERhdGEuZGF0YSAmJiBib29rZWREYXRhLmRhdGEuZ2V0VXBjb21pbmdCb29raW5ncykge1xuICAgICAgdXBjb21pbmdCb29raW5nQ291bnQgPSBib29rZWREYXRhLmRhdGEuZ2V0VXBjb21pbmdCb29raW5ncy5jb3VudDtcbiAgICB9XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgdHlwZSA9ICdQdWJsaXNoIExpc3RpbmcnO1xuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3VuUHVibGlzaCcpIHtcbiAgICAgICAgdHlwZSA9ICdVblB1Ymxpc2ggTGlzdGluZydcbiAgICAgIH1cblxuICAgICAgaWYgKHVwY29taW5nQm9va2luZ0NvdW50ID4gMCAmJiBhY3Rpb24gPT09ICd1blB1Ymxpc2gnKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvcih0eXBlLCAnWW91IGNhbm5vdCB1bnB1Ymxpc2ggYXMgeW91IGhhdmUgdXBjb21pbmcgYm9va2luZ3Mgb3IgZW5xdWlyaWVzIGZvciB0aGlzIGxpc3RpbmcuJyk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBsaXN0SWQsXG4gICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgICAgICB7IHF1ZXJ5OiBNYW5hZ2VMaXN0aW5nUXVlcnkgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLm1hbmFnZVB1Ymxpc2guc3RhdHVzID09PSAnMjAwJykge1xuXG4gICAgICAgICAgY29uc3QgeyBkYXRhTGlzdCB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbjogd2lzaExpc3RTdGF0dXMsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgbGlzdElkLFxuICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBSZWxvYWQgRXhpc3RpbmcgU3RlcHMgUGFnZVxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBMaXN0aW5nU3RlcHNRdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQgfSxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0b2FzdHIuc3VjY2Vzcyh0eXBlLCB0eXBlICsgXCIgaXMgc3VjY2VzcyFcIik7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NVQ0NFU1MsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIGxpc3RpbmdTdGVwczogZGF0YS5zaG93TGlzdGluZ1N0ZXBzLFxuICAgICAgICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICB0b2FzdHIuZXJyb3IodHlwZSwgdHlwZSArIFwiIGlzIGZhaWxlZCFcIik7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX0VSUk9SLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBzdGF0dXM6IGRhdGEubWFuYWdlUHVibGlzaC5zdGF0dXMsXG4gICAgICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IE1BTkFOR0VfTElTVElOR19QVUJMSVNIX1NUQVRVU19FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0Rm9yVmVyaWZpY2F0aW9uKGxpc3RJZCwgbGlzdEFwcHJvdmFsU3RhdHVzKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IE1BTkFOR0VfTElTVElOR19QVUJMSVNIX1NUQVRVU19TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHN1Ym1pdEZvclZlcmlmaWNhdGlvbigkaWQ6IEludCwkbGlzdEFwcHJvdmFsU3RhdHVzOiBTdHJpbmcpe1xuICAgICAgICAgIHN1Ym1pdEZvclZlcmlmaWNhdGlvbihpZDokaWQsIGxpc3RBcHByb3ZhbFN0YXR1czogJGxpc3RBcHByb3ZhbFN0YXR1cyl7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhTGlzdGluZ1F1ZXJ5ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IExpc3RpbmdRdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbGlzdElkLFxuICAgICAgICAgIHByZXZpZXc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogbGlzdElkLFxuICAgICAgICAgIGxpc3RBcHByb3ZhbFN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRhLnN1Ym1pdEZvclZlcmlmaWNhdGlvbi5zdGF0dXMgPT0gXCIyMDBcIikge1xuICAgICAgICAvLyBSZWxvYWQgRXhpc3RpbmcgU3RlcHMgUGFnZVxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IExpc3RpbmdTdGVwc1F1ZXJ5LFxuICAgICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQgfSxcbiAgICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsaXN0aW5nU3RlcHM6IGRhdGEuc2hvd0xpc3RpbmdTdGVwcyxcbiAgICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhTGlzdGluZ1F1ZXJ5ICYmIGRhdGFMaXN0aW5nUXVlcnkuZGF0YS5Vc2VyTGlzdGluZykge1xuICAgICAgICAgIGxldCBsaXN0RGV0YWlscyA9IGRhdGFMaXN0aW5nUXVlcnkuZGF0YS5Vc2VyTGlzdGluZztcbiAgICAgICAgICBsZXQgY29udGVudCA9IHtcbiAgICAgICAgICAgIGxpc3RJZDogbGlzdERldGFpbHMuaWQsXG4gICAgICAgICAgICBsaXN0VGl0bGU6IGxpc3REZXRhaWxzLnRpdGxlLFxuICAgICAgICAgICAgaG9zdE5hbWU6IGxpc3REZXRhaWxzLnVzZXIucHJvZmlsZS5maXJzdE5hbWUsXG4gICAgICAgICAgfVxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2VzcyEsIFlvdXIgTGlzdGluZyBoYXMgYmVlbiBzdWJtaXR0ZWQgZm9yIEFwcHJvdmFsXCIpO1xuXG4gICAgICAgICAgbGV0IGNyZWF0ZUhpc3RvcnkgPSBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiBjcmVhdGVMaXN0aW5nSGlzdG9yeSgkbGlzdElkOkludCEsICR1c2VySWQ6IFN0cmluZywgJHN0YXR1czogU3RyaW5nLCAkcmVhc29uOiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgY3JlYXRlTGlzdGluZ0hpc3RvcnkgKGxpc3RJZDokbGlzdElkLCB1c2VySWQ6ICR1c2VySWQsIHN0YXR1czokc3RhdHVzLCByZWFzb246JHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb246IGNyZWF0ZUhpc3RvcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgbGlzdElkLFxuICAgICAgICAgICAgICB1c2VySWQ6IGxpc3REZXRhaWxzLnVzZXJJZCxcbiAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Ym1pdEZvcnZlcmlmaWNhdGlvblwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF3YWl0IHNlbmRFbWFpbChhZG1pbkVtYWlsLCAnbGlzdFB1Ymxpc2hSZXF1ZXN0JywgY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIEFjdGlvbiFcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3RhdHVzOiBkYXRhLm1hbmFnZVB1Ymxpc2guc3RhdHVzLFxuICAgICAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJvdmVMaXN0aW5nKGxpc3RJZCwgbGlzdEFwcHJvdmFsU3RhdHVzLCByZWFzb24pIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcblx0XHRcdG11dGF0aW9uIGFwcHJvdmVMaXN0aW5nKCRpZDogSW50LCAkbGlzdEFwcHJvdmFsU3RhdHVzOiBTdHJpbmcpe1xuXHRcdFx0XHRhcHByb3ZlTGlzdGluZyhpZDokaWQsIGxpc3RBcHByb3ZhbFN0YXR1czokbGlzdEFwcHJvdmFsU3RhdHVzKXtcblx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdHN0YXR1c1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgICAgIGA7XG5cbiAgICB0cnkge1xuXG4gICAgICBjb25zdCBkYXRhTGlzdGluZ1F1ZXJ5ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IExpc3RpbmdRdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbGlzdElkLFxuICAgICAgICAgIHByZXZpZXc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogbGlzdElkLFxuICAgICAgICAgIGxpc3RBcHByb3ZhbFN0YXR1c1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YS5hcHByb3ZlTGlzdGluZy5zdGF0dXMgPT09IFwiMjAwXCIpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiBMaXN0aW5nU3RlcHNRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgbGlzdElkIH0sXG4gICAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGF0YUxpc3RpbmdRdWVyeSAmJiBkYXRhTGlzdGluZ1F1ZXJ5LmRhdGEuVXNlckxpc3RpbmcpIHtcbiAgICAgICAgICBsZXQgbGlzdERldGFpbHMgPSBkYXRhTGlzdGluZ1F1ZXJ5LmRhdGEuVXNlckxpc3Rpbmc7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSB7XG4gICAgICAgICAgICBsaXN0SWQ6IGxpc3REZXRhaWxzLmlkLFxuICAgICAgICAgICAgbGlzdFRpdGxlOiBsaXN0RGV0YWlscy50aXRsZSxcbiAgICAgICAgICAgIGhvc3ROYW1lOiBsaXN0RGV0YWlscy51c2VyLnByb2ZpbGUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgcmVhc29uOiBsaXN0QXBwcm92YWxTdGF0dXMgPT09ICdkZWNsaW5lZCcgPyByZWFzb24gOiBudWxsLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjcmVhdGVIaXN0b3J5ID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gY3JlYXRlTGlzdGluZ0hpc3RvcnkoJGxpc3RJZDpJbnQhLCAkdXNlcklkOiBTdHJpbmcsICRzdGF0dXM6IFN0cmluZyEsICRyZWFzb246IFN0cmluZykge1xuICAgICAgICAgICAgICBjcmVhdGVMaXN0aW5nSGlzdG9yeSAobGlzdElkOiRsaXN0SWQsIHVzZXJJZDogJHVzZXJJZCwgc3RhdHVzOiRzdGF0dXMsIHJlYXNvbjokcmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgICAgaWYgKGxpc3RBcHByb3ZhbFN0YXR1cyA9PT0gJ2RlY2xpbmVkJykge1xuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1N1Y2Nlc3MhJywgJ1RoZSBMaXN0aW5nIHJldmlldyByZXF1ZXN0IGhhcyBiZWVuIGRlY2xpbmVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgIG11dGF0aW9uOiBjcmVhdGVIaXN0b3J5LFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBsaXN0SWQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBsaXN0RGV0YWlscy51c2VySWQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcImRlY2xpbmVkXCIsXG4gICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgbm90aWZ5Q29udGVudCA9IHtcbiAgICAgICAgICAgICAgXCJzY3JlZW5UeXBlXCI6IFwiYmVjb21lYWhvc3RcIixcbiAgICAgICAgICAgICAgXCJ1c2VyVHlwZVwiOiAnaG9zdCcsXG4gICAgICAgICAgICAgIFwibGlzdElkXCI6IGxpc3RJZCxcbiAgICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiBsaXN0RGV0YWlscy51c2VyLnByb2ZpbGUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICBcImxpc3RUaXRsZVwiOiBsaXN0RGV0YWlscy50aXRsZSxcbiAgICAgICAgICAgICAgXCJyZWFzb25cIjogcmVhc29uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZE5vdGlmaWNhdGlvbnMoJ2xpc3REZWNsaW5lZCcsIG5vdGlmeUNvbnRlbnQsIGxpc3REZXRhaWxzLnVzZXJJZCk7XG4gICAgICAgICAgICBzZW5kRW1haWwobGlzdERldGFpbHMudXNlci5lbWFpbCwgJ2FkbWluTGlzdFJlamVjdCcsIGNvbnRlbnQpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdTdWNjZXNzIScsICdMaXN0aW5nIGlzIGFwcHJvdmVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgIG11dGF0aW9uOiBjcmVhdGVIaXN0b3J5LFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBsaXN0SWQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBsaXN0RGV0YWlscy51c2VySWQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcImFwcHJvdmVkXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBub3RpZnlDb250ZW50ID0ge1xuICAgICAgICAgICAgICBcInNjcmVlblR5cGVcIjogXCJiZWNvbWVhaG9zdFwiLFxuICAgICAgICAgICAgICBcInVzZXJUeXBlXCI6ICdob3N0JyxcbiAgICAgICAgICAgICAgXCJsaXN0SWRcIjogbGlzdElkLFxuICAgICAgICAgICAgICBcInVzZXJOYW1lXCI6IGxpc3REZXRhaWxzLnVzZXIucHJvZmlsZS5maXJzdE5hbWUsXG4gICAgICAgICAgICAgIFwibGlzdFRpdGxlXCI6IGxpc3REZXRhaWxzLnRpdGxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmROb3RpZmljYXRpb25zKCdsaXN0QXBwcm92ZWQnLCBub3RpZnlDb250ZW50LCBsaXN0RGV0YWlscy51c2VySWQpO1xuICAgICAgICAgICAgc2VuZEVtYWlsKGxpc3REZXRhaWxzLnVzZXIuZW1haWwsICdhZG1pbkxpc3RBcHByb3ZlJywgY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsaXN0aW5nU3RlcHM6IGRhdGEuc2hvd0xpc3RpbmdTdGVwcyxcbiAgICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIEFjdGlvbiFcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4vY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1c2hOb3RpZmljYXRpb25NZXNzYWdlKGFjdGlvblR5cGUsIG5vdGlmeUNvbnRlbnQpIHtcbiAgICBsZXQgdGl0bGUgPSAnJywgbWVzc2FnZSA9ICcnO1xuXG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICduZXdFbnF1aXJ5Jykge1xuICAgICAgICB0aXRsZSA9IGBOZXcgRW5xdWlyeWA7XG4gICAgICAgIG1lc3NhZ2UgPSBgJHtmb3JtYXRUZXh0KG5vdGlmeUNvbnRlbnRbJ3VzZXJOYW1lJ10pfTogJHtub3RpZnlDb250ZW50Wydjb250ZW50J119YDtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uVHlwZSA9PT0gJ2RlY2xpbmVkJykge1xuICAgICAgICB0aXRsZSA9IGBEZWNsaW5lZGA7XG4gICAgICAgIG1lc3NhZ2UgPSBgJHtmb3JtYXRUZXh0KG5vdGlmeUNvbnRlbnRbJ3VzZXJOYW1lJ10pfTogQm9va2luZyBpcyBEZWNsaW5lZGA7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICdhcHByb3ZlZCcpIHtcbiAgICAgICAgdGl0bGUgPSBgQXBwcm92ZWRgO1xuICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0VGV4dChub3RpZnlDb250ZW50Wyd1c2VyTmFtZSddKX06IEJvb2tpbmcgaXMgQXBwcm92ZWRgO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb25UeXBlID09PSAnbmV3TWVzc2FnZScpIHtcbiAgICAgICAgdGl0bGUgPSBgTmV3IE1lc3NhZ2VgO1xuICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0VGV4dChub3RpZnlDb250ZW50Wyd1c2VyTmFtZSddKX06ICR7bm90aWZ5Q29udGVudFsnY29udGVudCddfWA7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICdjYW5jZWxSZXNlcnZhdGlvbicpIHtcbiAgICAgICAgdGl0bGUgPSBgQm9va2luZyBpcyBDYW5jZWxsZWRgO1xuICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0VGV4dChub3RpZnlDb250ZW50Wyd1c2VyTmFtZSddKX06ICR7bm90aWZ5Q29udGVudFsnY29udGVudCddfWA7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICduZXdCb29raW5nJykge1xuICAgICAgICB0aXRsZSA9IGBOZXcgQm9va2luZ2A7XG4gICAgICAgIG1lc3NhZ2UgPSBgJHtmb3JtYXRUZXh0KG5vdGlmeUNvbnRlbnRbJ3VzZXJOYW1lJ10pfTogJHtub3RpZnlDb250ZW50Wydjb250ZW50J119YDtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uVHlwZSA9PT0gJ2xpc3RBcHByb3ZlZCcpIHtcbiAgICAgICAgdGl0bGUgPSBgVGhlIEFkbWluIGhhcyB2ZXJpZmllZCB5b3VyIGxpc3RpbmdgO1xuICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0VGV4dChub3RpZnlDb250ZW50Wyd1c2VyTmFtZSddKX0gOiBUaGUgQWRtaW4gaGFzIHZlcmlmaWVkIHlvdXIgbGlzdGluZyAke25vdGlmeUNvbnRlbnRbJ2xpc3RUaXRsZSddfSAuIFBsZWFzZSBwdWJsaXNoIHlvdXIgbGlzdGluZyB0byBnZXQgcmVzZXJ2YXRpb25zLmA7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvblR5cGUgPT09ICdsaXN0RGVjbGluZWQnKSB7XG4gICAgICAgIHRpdGxlID0gYEFkbWluIGhhcyBkZWNsaW5lZCB5b3VyIGxpc3RpbmdgO1xuICAgICAgICBtZXNzYWdlID0gYCR7Zm9ybWF0VGV4dChub3RpZnlDb250ZW50Wyd1c2VyTmFtZSddKX0gOiBBZG1pbiBoYXMgZGVjbGluZWQgeW91ciBsaXN0aW5nIHJlcXVlc3QgZm9yIHRoZSAke25vdGlmeUNvbnRlbnRbJ2xpc3RUaXRsZSddfSBkdWUgdG8gdGhlIHJlYXNvbiBvZiAke25vdGlmeUNvbnRlbnRbJ3JlYXNvbiddfS4gS2luZGx5IHVwZGF0ZSB0aGUgbGlzdGluZyBpbmZvcm1hdGlvbiBhbmQgc3VibWl0IGZvciB0aGUgbGlzdCBhcHByb3ZhbC5gO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBtZXNzYWdlXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFtb3VudChhbW91bnQsIGN1cnJlbmN5LCBsb2NhbGUpIHtcbiAgICBsZXQgY29udmVydEN1cnJlbmN5ID0gJ1VTRCc7XG4gICAgaWYgKGFtb3VudCkge1xuICAgICAgICBjb252ZXJ0Q3VycmVuY3kgPSBjdXJyZW5jeSA/IGN1cnJlbmN5IDogY29udmVydEN1cnJlbmN5O1xuICAgICAgICByZXR1cm4gYW1vdW50LnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6IGNvbnZlcnRDdXJyZW5jeSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUZXh0KHRleHQpIHtcbiAgICBsZXQgY2FwaXRhbGl6ZWRUZXh0ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHQpO1xuICAgIHJldHVybiBjYXBpdGFsaXplZFRleHQgPyBjYXBpdGFsaXplZFRleHQudHJpbSgpIDogJyc7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufSIsIlxuLy8gRmV0Y2ggcmVxdWVzdFxuaW1wb3J0IGZldGNoIGZyb20gJy4uL2NvcmUvZmV0Y2gnO1xuaW1wb3J0IHsgcHVzaE5vdGlmaWNhdGlvbk1lc3NhZ2UgfSBmcm9tICcuL3B1c2hOb3RpZmljYXRpb25NZXNzYWdlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmROb3RpZmljYXRpb25zKGFjdGlvblR5cGUsIG5vdGlmeUNvbnRlbnQsIHVzZXJJZCkge1xuXG4gICAgY29uc3QgeyB0aXRsZSwgbWVzc2FnZSB9ID0gYXdhaXQgcHVzaE5vdGlmaWNhdGlvbk1lc3NhZ2UoYWN0aW9uVHlwZSwgbm90aWZ5Q29udGVudCk7XG4gICAgbGV0IGNvbnRlbnQgPSBub3RpZnlDb250ZW50O1xuICAgIGNvbnRlbnRbJ3RpdGxlJ10gPSB0aXRsZTtcbiAgICBjb250ZW50WydtZXNzYWdlJ10gPSBtZXNzYWdlO1xuXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvcHVzaC1ub3RpZmljYXRpb24nLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIHVzZXJJZFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdGF0dXMsIGVycm9yTWVzc2dlIH0gPSByZXNwLmpzb247XG5cbiAgICByZXR1cm4gYXdhaXQge1xuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGVycm9yTWVzc2dlXG4gICAgfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2VuZE5vdGlmaWNhdGlvbnNcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQStCQTtBQWtCQTtBQU9BO0FBeUJBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQVFBO0FBbEJBO0FBQUE7QUE0QkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQ0E7QUE1QkE7QUEyQkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBeUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBaERBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBUEE7QUFDQTtBQXpEQTtBQUFBO0FBd0RBO0FBQ0E7QUF6REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUF0RUE7QUFBQTtBQXFFQTtBQXJFQTtBQUFBO0FBK0VBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBL0VBO0FBQUE7QUE4RUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBcEZBO0FBQUE7QUFDQTtBQURBO0FBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQS9GQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBekdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQWlIQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFUQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFDQTtBQXBCQTtBQW1CQTtBQW5CQTtBQUFBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBN0JBO0FBQUE7QUE0QkE7QUFDQTtBQTdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXNDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQXRDQTtBQUFBO0FBcUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQTVDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUE1REE7QUFBQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUNBO0FBcEVBO0FBQUE7QUFtRUE7QUFuRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFqRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUEwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQTNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFtR0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBVEE7QUFBQTtBQUFBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBQ0E7QUFyQkE7QUFvQkE7QUFwQkE7QUFBQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQTlCQTtBQUFBO0FBNkJBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFzQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUF0Q0E7QUFBQTtBQXFDQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBckRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0REE7QUE3REE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7QUEvREE7QUFBQTtBQThEQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBakZBO0FBQUE7QUFDQTtBQURBO0FBb0ZBO0FBcEZBO0FBQUE7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFDQTtBQXRGQTtBQUFBO0FBcUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUF4R0E7QUEwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUExR0E7QUFBQTtBQUNBO0FBREE7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQXBIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBN0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbGNBO0FBQ0E7Ozs7O0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQ0E7QUE0Q0E7QUFDQTtBQUZBO0FBQ0E7QUE1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFpREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFWQTtBQUNBO0FBUkE7QUFPQTtBQVBBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBRkE7QUFDQTtBQXZCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTZCQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==