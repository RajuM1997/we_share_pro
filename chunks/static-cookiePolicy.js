require("source-map-support").install();
exports.ids = ["static-cookiePolicy"];
exports.modules = {

/***/ "./src/routes/static/cookiePolicy/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return action; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/core/fetch/fetch.server.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/routes/static/cookiePolicy/index.js";

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
    __webpack_require__.e(/* require.ensure | cookiePolicy */ "cookiePolicy").then((require => {
      resolve(__webpack_require__("./src/routes/static/cookiePolicy/cookiePolicy.md"));
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
        id: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3N0YXRpYy1jb29raWVQb2xpY3kuanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9yb3V0ZXMvc3RhdGljL2Nvb2tpZVBvbGljeS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uLy4uL2NvcmUvZmV0Y2gnO1xuXG5jb25zdCBxdWVyeSA9IGBxdWVyeSBnZXRFZGl0U3RhdGljUGFnZSAoJGlkOiBJbnQhKSB7XG4gIGdldEVkaXRTdGF0aWNQYWdlIChpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgcGFnZU5hbWVcbiAgICAgIGNvbnRlbnRcbiAgICAgIG1ldGFUaXRsZVxuICAgICAgbWV0YURlc2NyaXB0aW9uXG4gICAgICBjcmVhdGVkQXRcbiAgfVxufWA7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgbG9jYWxlIH0pIHtcbiAgY29uc3QgZGF0YVJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcXVpcmUoJy4vY29va2llUG9saWN5Lm1kJykpO1xuICAgIH0sICdjb29raWVQb2xpY3knKTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgICB2YXJpYWJsZXM6IHsgaWQ6IDYgfSxcbiAgICB9KSxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLmdldEVkaXRTdGF0aWNQYWdlKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGRhdGEuZ2V0RWRpdFN0YXRpY1BhZ2UubWV0YVRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRhdGEuZ2V0RWRpdFN0YXRpY1BhZ2UubWV0YURlc2NyaXB0aW9uLFxuICAgICAgY29tcG9uZW50OiA8TGF5b3V0PjxQYWdlIGh0bWw9e2RhdGEuZ2V0RWRpdFN0YXRpY1BhZ2UuY29udGVudH0gdGl0bGU9e2RhdGEuZ2V0RWRpdFN0YXRpY1BhZ2UubWV0YVRpdGxlfSAvPjwvTGF5b3V0PixcbiAgICB9O1xuXG4gIH0gZWxzZSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGRhdGFSZXN1bHQudGl0bGUsXG4gICAgICBjb21wb25lbnQ6IDxMYXlvdXQ+PFBhZ2Ugey4uLmRhdGFSZXN1bHR9IC8+PC9MYXlvdXQ+LFxuICAgIH07XG5cbiAgfVxuXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBVkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=