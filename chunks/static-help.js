require("source-map-support").install();
exports.ids = ["static-help"];
exports.modules = {

/***/ "./src/routes/static/help/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/fetch/fetch.server.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/static/help/index.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const query = `query getEditStaticPage ($id: Int!) {
  getEditStaticPage (id: $id) {
      id
      pageName
      content
      metaTitle
      metaDescription
      createdAt
  }
}`;
async function action({
  locale
}) {
  const dataResult = await new Promise(resolve => {
    __webpack_require__.e(/* require.ensure | help */ "help").then((require => {
      resolve(__webpack_require__("./src/routes/static/help/help.md"));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  });
  const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: {
        id: 5
      }
    }),
    credentials: 'include'
  });
  const {
    data
  } = await resp.json();

  if (data && data.getEditStaticPage) {
    return {
      title: data.getEditStaticPage.metaTitle,
      description: data.getEditStaticPage.metaDescription,
      component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        html: data.getEditStaticPage.content,
        title: data.getEditStaticPage.metaTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 26
        }
      }))
    };
  } else {
    return {
      title: dataResult.title,
      component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, dataResult, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 26
        }
      })))
    };
  }
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3N0YXRpYy1oZWxwLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvcm91dGVzL3N0YXRpYy9oZWxwL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vLi4vLi4vY29yZS9mZXRjaCc7XG5cbmNvbnN0IHF1ZXJ5ID0gYHF1ZXJ5IGdldEVkaXRTdGF0aWNQYWdlICgkaWQ6IEludCEpIHtcbiAgZ2V0RWRpdFN0YXRpY1BhZ2UgKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBwYWdlTmFtZVxuICAgICAgY29udGVudFxuICAgICAgbWV0YVRpdGxlXG4gICAgICBtZXRhRGVzY3JpcHRpb25cbiAgICAgIGNyZWF0ZWRBdFxuICB9XG59YDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgbG9jYWxlIH0pIHtcbiAgY29uc3QgZGF0YVJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcXVpcmUoJy4vaGVscC5tZCcpKTtcbiAgICB9LCAnaGVscCcpO1xuICB9KTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogNSB9LFxuICAgIH0pLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgaWYgKGRhdGEgJiYgZGF0YS5nZXRFZGl0U3RhdGljUGFnZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFUaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFEZXNjcmlwdGlvbixcbiAgICAgIGNvbXBvbmVudDogPExheW91dD48UGFnZSBodG1sPXtkYXRhLmdldEVkaXRTdGF0aWNQYWdlLmNvbnRlbnR9IHRpdGxlPXtkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFUaXRsZX0gLz48L0xheW91dD4sXG4gICAgfTtcblxuICB9IGVsc2Uge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBkYXRhUmVzdWx0LnRpdGxlLFxuICAgICAgY29tcG9uZW50OiA8TGF5b3V0PjxQYWdlIHsuLi5kYXRhUmVzdWx0fSAvPjwvTGF5b3V0PixcbiAgICB9O1xuXG4gIH1cblxuXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBVkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=