require("source-map-support").install();
exports.ids = ["static-about"];
exports.modules = {

/***/ "./src/routes/static/about/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/fetch/fetch.server.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/static/about/index.js";

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
    __webpack_require__.e(/* require.ensure | about */ "about").then((require => {
      try {
        resolve(__webpack_require__("./src/routes/static/about sync recursive ^\\.\\/about\\..*\\.md$")(`./about.${locale}.md`));
      } catch (e) {
        resolve(__webpack_require__("./src/routes/static/about/about.md"));
      }
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
        id: 1
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
          lineNumber: 49,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        html: data.getEditStaticPage.content,
        title: data.getEditStaticPage.metaTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 55,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, dataResult, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 26
        }
      })))
    };
  }
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3N0YXRpYy1hYm91dC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zdGF0aWMvYWJvdXQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBmZXRjaCBmcm9tICcuLi8uLi8uLi9jb3JlL2ZldGNoJztcblxuXG5jb25zdCBxdWVyeSA9IGBxdWVyeSBnZXRFZGl0U3RhdGljUGFnZSAoJGlkOiBJbnQhKSB7XG4gIGdldEVkaXRTdGF0aWNQYWdlIChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgcGFnZU5hbWVcbiAgICAgIGNvbnRlbnRcbiAgICAgIG1ldGFUaXRsZVxuICAgICAgbWV0YURlc2NyaXB0aW9uXG4gICAgICBjcmVhdGVkQXRcbiAgfVxufWA7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IGxvY2FsZSB9KSB7XG4gIGNvbnN0IGRhdGFSZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCAocmVxdWlyZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZShyZXF1aXJlKGAuL2Fib3V0LiR7bG9jYWxlfS5tZGApKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2Fib3V0Lm1kJykpO1xuICAgICAgfVxuICAgIH0sICdhYm91dCcpO1xuICB9KTtcblxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogMSB9LFxuICAgIH0pLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgaWYgKGRhdGEgJiYgZGF0YS5nZXRFZGl0U3RhdGljUGFnZSkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFUaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFEZXNjcmlwdGlvbixcbiAgICAgIGNvbXBvbmVudDogPExheW91dD48UGFnZSBodG1sPXtkYXRhLmdldEVkaXRTdGF0aWNQYWdlLmNvbnRlbnR9IHRpdGxlPXtkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFUaXRsZX0gLz48L0xheW91dD4sXG4gICAgfTtcblxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogZGF0YVJlc3VsdC50aXRsZSxcbiAgICAgIGNvbXBvbmVudDogPExheW91dD48UGFnZSB7Li4uZGF0YVJlc3VsdH0gLz48L0xheW91dD4sXG4gICAgfTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBVkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=