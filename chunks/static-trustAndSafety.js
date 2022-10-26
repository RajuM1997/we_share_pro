require("source-map-support").install();
exports.ids = ["static-trustAndSafety"];
exports.modules = {

/***/ "./src/routes/static/trustAndSafety/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/fetch/fetch.server.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/static/trustAndSafety/index.js";

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
    __webpack_require__.e(/* require.ensure | trustAndSafety */ "trustAndSafety").then((require => {
      resolve(__webpack_require__("./src/routes/static/trustAndSafety/trustAndSafety.md"));
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
        id: 2
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
          lineNumber: 42,
          columnNumber: 18
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        html: data.getEditStaticPage.content,
        title: data.getEditStaticPage.metaTitle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3N0YXRpYy10cnVzdEFuZFNhZmV0eS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL3JvdXRlcy9zdGF0aWMvdHJ1c3RBbmRTYWZldHkvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBmZXRjaCBmcm9tICcuLi8uLi8uLi9jb3JlL2ZldGNoJztcblxuY29uc3QgcXVlcnkgPSBgcXVlcnkgZ2V0RWRpdFN0YXRpY1BhZ2UgKCRpZDogSW50ISkge1xuICBnZXRFZGl0U3RhdGljUGFnZSAoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIHBhZ2VOYW1lXG4gICAgICBjb250ZW50XG4gICAgICBtZXRhVGl0bGVcbiAgICAgIG1ldGFEZXNjcmlwdGlvblxuICAgICAgY3JlYXRlZEF0XG4gIH1cbn1gO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBsb2NhbGUgfSkge1xuICBjb25zdCBkYXRhUmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgIHJlc29sdmUocmVxdWlyZSgnLi90cnVzdEFuZFNhZmV0eS5tZCcpKTtcbiAgICB9LCAndHJ1c3RBbmRTYWZldHknKTtcbiAgfSk7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgdmFyaWFibGVzOiB7IGlkOiAyIH0sXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgfSk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFUaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFEZXNjcmlwdGlvbixcbiAgICAgIGNvbXBvbmVudDogPExheW91dD48UGFnZVxuICAgICAgICBodG1sPXtkYXRhLmdldEVkaXRTdGF0aWNQYWdlLmNvbnRlbnR9XG4gICAgICAgIHRpdGxlPXtkYXRhLmdldEVkaXRTdGF0aWNQYWdlLm1ldGFUaXRsZX1cbiAgICAgIC8+PC9MYXlvdXQ+LFxuICAgIH07XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGRhdGFSZXN1bHQudGl0bGUsXG4gICAgICBjb21wb25lbnQ6IDxMYXlvdXQ+PFBhZ2Ugey4uLmRhdGFSZXN1bHR9IC8+PC9MYXlvdXQ+LFxuICAgIH07XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==