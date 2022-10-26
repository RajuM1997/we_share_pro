require("source-map-support").install();
exports.ids = ["siteadmin-addPopularLocation~siteadmin-editPopularLocation"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js!./node_modules/react-geosuggest/module/geosuggest.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * The geosuggest module\n * NOTE: duplicated font-sizes' are for browsers which don't support rem (only IE 8)\n */\n.geosuggest {\n  font-size: 18px;\n  font-size: 1rem;\n  position: relative;\n  width: 50%;\n  margin: 1em auto;\n  text-align: left;\n}\n.geosuggest__input {\n  width: 100%;\n  border: 2px solid transparent;\n  box-shadow: 0 0 1px #3d464d;\n  padding: .5em 1em;\n  -webkit-transition: border 0.2s, box-shadow 0.2s;\n          transition: border 0.2s, box-shadow 0.2s;\n}\n.geosuggest__input:focus {\n  border-color: #267dc0;\n  box-shadow: 0 0 0 transparent;\n}\n.geosuggest__suggests {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  max-height: 25em;\n  padding: 0;\n  margin-top: -1px;\n  background: #fff;\n  border: 2px solid #267dc0;\n  border-top-width: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  list-style: none;\n  z-index: 5;\n  -webkit-transition: max-height 0.2s, border 0.2s;\n          transition: max-height 0.2s, border 0.2s;\n}\n.geosuggest__suggests--hidden {\n  max-height: 0;\n  overflow: hidden;\n  border-width: 0;\n}\n\n/**\n * A geosuggest item\n */\n.geosuggest__item {\n  font-size: 18px;\n  font-size: 1rem;\n  padding: .5em .65em;\n  cursor: pointer;\n}\n.geosuggest__item:hover,\n.geosuggest__item:focus {\n  background: #f5f5f5;\n}\n.geosuggest__item--active {\n  background: #267dc0;\n  color: #fff;\n}\n.geosuggest__item--active:hover,\n.geosuggest__item--active:focus {\n  background: #ccc;\n}\n.geosuggest__item__matched-text {\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/index.js!./node_modules/css-loader/index.js!./node_modules/react-geosuggest/module/geosuggest.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/react-geosuggest/module/geosuggest.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

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

/***/ "./public/adminIcons/defaultAdmin.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ }),

/***/ "./public/adminIcons/dlt.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/dlt.png?b362cae0";

/***/ }),

/***/ "./src/actions/personalized.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPersonalizedValues", function() { return setPersonalizedValues; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants/index.js");

function setPersonalizedValues({
  name,
  value
}) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SET_PERSONALIZED_VALUES"],
    payload: {
      name,
      value
    }
  };
}

/***/ }),

/***/ "./src/actions/siteadmin/manageCategoryImage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCategoryUploaderLoader", function() { return startCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endCategoryUploaderLoader", function() { return endCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadCategory", function() { return doUploadCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveCategory", function() { return doRemoveCategory; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query editCategory($id: Int!) {
    editCategory(id: $id) {
      id
      title
      subTitle
      isEnable
      image
    }
  }
`;
function startCategoryUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        categoryUploaderLoading: true
      }
    });
  };
}
function endCategoryUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        categoryUploaderLoading: false
      }
    });
  };
}
function doUploadCategory(image, filePath, oldPicture, id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation uploadCategory($id: Int, $image: String) {
          uploadCategory(id: $id, image: $image) {
            status
          }
        }
      `; // Send Request to create a record for location

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image,
          id
        },
        refetchQueries: [{
          query,
          variables: {
            id
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_SUCCESS"],
          payload: {
            categoryUploaderLoading: false
          }
        });

        if (oldPicture != null) {
          await removeCategoryFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORY_UPLOAD_ERROR"],
        payload: {
          error,
          categoryUploaderLoading: false
        }
      });
      return false;
    }

    return true;
  };
}
function doRemoveCategory(image, id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CATEGORY_START"]
    });
    dispatch(startCategoryUploaderLoader());

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation removeCategory($id: Int!, $image: String) {
          removeCategory(id: $id, image: $image) {
            status
          }
        }
      `; // Send Request to create a record for location

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image,
          id
        },
        refetchQueries: [{
          query,
          variables: {
            id
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CATEGORY_SUCCESS"],
          payload: {
            categoryUploaderLoading: false
          }
        });
        await removeCategoryFile(image);
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_CATEGORY_ERROR"],
        payload: {
          error,
          categoryUploaderLoading: false
        }
      });
      return false;
    }

    return true;
  };
}

async function removeCategoryFile(image) {
  try {
    const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/removeCategoryFile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image
      }),
      credentials: "include"
    });
    const {
      status
    } = await resp.json();

    if (status) {
      console.log("status from remove category file", status);
    }
  } catch (error) {
    console.log("error from remove file", error);
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/actions/siteadmin/manageLocationImage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUploaderLoader", function() { return startLocationUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endLocationUploaderLoader", function() { return endLocationUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadLocation", function() { return doUploadLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveLocation", function() { return doRemoveLocation; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query editPopularLocation ($id: Int!) {
  editPopularLocation (id: $id) {
      id
      location
      locationAddress
      isEnable
      image
  }
}
`;
function startLocationUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_LOADER_START"],
      payload: {
        locationUploaderLoading: true
      }
    });
  };
}
function endLocationUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_LOADER_START"],
      payload: {
        locationUploaderLoading: false
      }
    });
  };
}
function doUploadLocation(image, filePath, oldPicture, id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation uploadLocation(
          $id: Int,
          $image: String,
        ) {
          uploadLocation(
            id: $id,
            image: $image,
          ) {
              status
          }
        }
        `; // Send Request to create a record for location

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image,
          id
        },
        refetchQueries: [{
          query,
          variables: {
            id
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_SUCCESS"],
          payload: {
            locationUploaderLoading: false
          }
        });

        if (oldPicture != null) {
          await removeLocationFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["LOCATION_UPLOAD_ERROR"],
        payload: {
          error,
          locationUploaderLoading: false
        }
      });
      return false;
    }

    return true;
  };
}
function doRemoveLocation(image, id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOCATION_START"]
    });
    dispatch(startLocationUploaderLoader());

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      mutation removeLocation(
        $id: Int!,
        $image: String,
      ) {
        removeLocation(
          id: $id,
          image: $image,
        ) {
            status
        }
      }
      `; // Send Request to create a record for location

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image,
          id
        },
        refetchQueries: [{
          query,
          variables: {
            id
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOCATION_SUCCESS"],
          payload: {
            locationUploaderLoading: false
          }
        });
        await removeLocationFile(image);
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_LOCATION_ERROR"],
        payload: {
          error,
          locationUploaderLoading: false
        }
      });
      return false;
    }

    return true;
  };
}

async function removeLocationFile(image) {
  try {
    const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('/removeLocationFile', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image
      }),
      credentials: 'include'
    });
    const {
      status
    } = await resp.json();

    if (status) {
      console.log('status from remove location file', status);
    }
  } catch (error) {
    console.log('error from remove file', error);
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/actions/siteadmin/manageSubCategoryImage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSubCategoryUploaderLoader", function() { return startSubCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endSubCategoryUploaderLoader", function() { return endSubCategoryUploaderLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadSubCategory", function() { return doUploadSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveSubCategory", function() { return doRemoveSubCategory; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/fetch/fetch.server.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query editSubCategory($id: Int!) {
    editSubCategory(id: $id) {
      id
      title
      description
      address
      subCategory
      guests
      bedrooms
      beds
      baths
      image
      primaryCategory
    }
  }
`;
function startSubCategoryUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        subCategoryUploaderLoading: true
      }
    });
  };
}
function endSubCategoryUploaderLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_LOADER_START"],
      payload: {
        subCategoryUploaderLoading: false
      }
    });
  };
}
function doUploadSubCategory(image, filePath, oldPicture, id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation uploadSubCategory($id: Int, $image: String) {
          uploadSubCategory(id: $id, image: $image) {
            status
          }
        }
      `; // Send Request to create a record for location

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image,
          id
        },
        refetchQueries: [{
          query,
          variables: {
            id
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_SUCCESS"],
          payload: {
            subCategoryUploaderLoading: false
          }
        });

        if (oldPicture != null) {
          await removeSubCategoryFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["SUB_CATEGORY_UPLOAD_ERROR"],
        payload: {
          error,
          subCategoryUploaderLoading: false
        }
      });
      return false;
    }

    return true;
  };
}
function doRemoveSubCategory(image, id) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_CATEGORY_START"]
    });
    dispatch(startSubCategoryUploaderLoader());

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation removeSubCategory($id: Int!, $image: String) {
          removeSubCategory(id: $id, image: $image) {
            status
          }
        }
      `; // Send Request to create a record for location

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          image,
          id
        },
        refetchQueries: [{
          query,
          variables: {
            id
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_CATEGORY_SUCCESS"],
          payload: {
            subCategoryUploaderLoading: false
          }
        });
        await removeSubCategoryFile(image);
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_SUB_CATEGORY_ERROR"],
        payload: {
          error,
          subCategoryUploaderLoading: false
        }
      });
      return false;
    }

    return true;
  };
}

async function removeSubCategoryFile(image) {
  try {
    const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/removeSubCategoryFile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image
      }),
      credentials: "include"
    });
    const {
      status
    } = await resp.json();

    if (status) {
      console.log("status from remove sub category file", status);
    }
  } catch (error) {
    console.log("error from remove file", error);
    return false;
  }

  return true;
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1hZGRQb3B1bGFyTG9jYXRpb25+c2l0ZWFkbWluLWVkaXRQb3B1bGFyTG9jYXRpb24uanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL25vZGVfbW9kdWxlcy9yZWFjdC1nZW9zdWdnZXN0L21vZHVsZS9nZW9zdWdnZXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2Vvc3VnZ2VzdC9tb2R1bGUvZ2Vvc3VnZ2VzdC5jc3M/YTMyZSIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9wdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvcGVyc29uYWxpemVkLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZUNhdGVnb3J5SW1hZ2UuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlTG9jYXRpb25JbWFnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VTdWJDYXRlZ29yeUltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBUaGUgZ2Vvc3VnZ2VzdCBtb2R1bGVcXG4gKiBOT1RFOiBkdXBsaWNhdGVkIGZvbnQtc2l6ZXMnIGFyZSBmb3IgYnJvd3NlcnMgd2hpY2ggZG9uJ3Qgc3VwcG9ydCByZW0gKG9ubHkgSUUgOClcXG4gKi9cXG4uZ2Vvc3VnZ2VzdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5nZW9zdWdnZXN0X19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjM2Q0NjRkO1xcbiAgcGFkZGluZzogLjVlbSAxZW07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XFxufVxcbi5nZW9zdWdnZXN0X19pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMyNjdkYzA7XFxuICBib3gtc2hhZG93OiAwIDAgMCB0cmFuc3BhcmVudDtcXG59XFxuLmdlb3N1Z2dlc3RfX3N1Z2dlc3RzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1heC1oZWlnaHQ6IDI1ZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjY3ZGMwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgei1pbmRleDogNTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzLCBib3JkZXIgMC4ycztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzLCBib3JkZXIgMC4ycztcXG59XFxuLmdlb3N1Z2dlc3RfX3N1Z2dlc3RzLS1oaWRkZW4ge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi8qKlxcbiAqIEEgZ2Vvc3VnZ2VzdCBpdGVtXFxuICovXFxuLmdlb3N1Z2dlc3RfX2l0ZW0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogLjVlbSAuNjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdlb3N1Z2dlc3RfX2l0ZW06aG92ZXIsXFxuLmdlb3N1Z2dlc3RfX2l0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG59XFxuLmdlb3N1Z2dlc3RfX2l0ZW0tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjMjY3ZGMwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5nZW9zdWdnZXN0X19pdGVtLS1hY3RpdmU6aG92ZXIsXFxuLmdlb3N1Z2dlc3RfX2l0ZW0tLWFjdGl2ZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbn1cXG4uZ2Vvc3VnZ2VzdF9faXRlbV9fbWF0Y2hlZC10ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW9zdWdnZXN0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW9zdWdnZXN0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nZW9zdWdnZXN0LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYWRtaW5JY29ucy9kZWZhdWx0QWRtaW4uc3ZnPzBjYjY1YWQ2XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FkbWluSWNvbnMvZGx0LnBuZz9iMzYyY2FlMFwiOyIsImltcG9ydCB7IFNFVF9QRVJTT05BTElaRURfVkFMVUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBlcnNvbmFsaXplZFZhbHVlcyh7IG5hbWUsIHZhbHVlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfUEVSU09OQUxJWkVEX1ZBTFVFUyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiLi4vLi4vY29yZS9mZXRjaFwiO1xuXG5pbXBvcnQge1xuICBDQVRFR09SWV9VUExPQURfTE9BREVSX1NUQVJULFxuICBDQVRFR09SWV9VUExPQURfU1RBUlQsXG4gIENBVEVHT1JZX1VQTE9BRF9TVUNDRVNTLFxuICBDQVRFR09SWV9VUExPQURfRVJST1IsXG4gIFJFTU9WRV9DQVRFR09SWV9TVEFSVCxcbiAgUkVNT1ZFX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIFJFTU9WRV9DQVRFR09SWV9FUlJPUixcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgZWRpdENhdGVnb3J5KCRpZDogSW50ISkge1xuICAgIGVkaXRDYXRlZ29yeShpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHN1YlRpdGxlXG4gICAgICBpc0VuYWJsZVxuICAgICAgaW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydENhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDQVRFR09SWV9VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRDYXRlZ29yeShpbWFnZSwgZmlsZVBhdGgsIG9sZFBpY3R1cmUsIGlkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDQVRFR09SWV9VUExPQURfU1RBUlQgfSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiB1cGxvYWRDYXRlZ29yeSgkaWQ6IEludCwgJGltYWdlOiBTdHJpbmcpIHtcbiAgICAgICAgICB1cGxvYWRDYXRlZ29yeShpZDogJGlkLCBpbWFnZTogJGltYWdlKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvY2F0aW9uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGltYWdlLCBpZCB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZCB9IH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBDQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRQaWN0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICBhd2FpdCByZW1vdmVDYXRlZ29yeUZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBDQVRFR09SWV9VUExPQURfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVDYXRlZ29yeShpbWFnZSwgaWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9DQVRFR09SWV9TVEFSVCB9KTtcbiAgICBkaXNwYXRjaChzdGFydENhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiByZW1vdmVDYXRlZ29yeSgkaWQ6IEludCEsICRpbWFnZTogU3RyaW5nKSB7XG4gICAgICAgICAgcmVtb3ZlQ2F0ZWdvcnkoaWQ6ICRpZCwgaW1hZ2U6ICRpbWFnZSkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2NhdGlvblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBpbWFnZSwgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgaWQgfSB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogUkVNT1ZFX0NBVEVHT1JZX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByZW1vdmVDYXRlZ29yeUZpbGUoaW1hZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9DQVRFR09SWV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNhdGVnb3J5RmlsZShpbWFnZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChcIi9yZW1vdmVDYXRlZ29yeUZpbGVcIiwge1xuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpbWFnZSxcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgY29uc29sZS5sb2coXCJzdGF0dXMgZnJvbSByZW1vdmUgY2F0ZWdvcnkgZmlsZVwiLCBzdGF0dXMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yIGZyb20gcmVtb3ZlIGZpbGVcIiwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGZldGNoIGZyb20gJy4uLy4uL2NvcmUvZmV0Y2gnO1xuXG5pbXBvcnQge1xuICBMT0NBVElPTl9VUExPQURfTE9BREVSX1NUQVJULFxuICBMT0NBVElPTl9VUExPQURfU1RBUlQsXG4gIExPQ0FUSU9OX1VQTE9BRF9TVUNDRVNTLFxuICBMT0NBVElPTl9VUExPQURfRVJST1IsXG4gIFJFTU9WRV9MT0NBVElPTl9TVEFSVCxcbiAgUkVNT1ZFX0xPQ0FUSU9OX1NVQ0NFU1MsXG4gIFJFTU9WRV9MT0NBVElPTl9FUlJPUixcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG5xdWVyeSBlZGl0UG9wdWxhckxvY2F0aW9uICgkaWQ6IEludCEpIHtcbiAgZWRpdFBvcHVsYXJMb2NhdGlvbiAoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIGxvY2F0aW9uXG4gICAgICBsb2NhdGlvbkFkZHJlc3NcbiAgICAgIGlzRW5hYmxlXG4gICAgICBpbWFnZVxuICB9XG59XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRMb2NhdGlvblVwbG9hZGVyTG9hZGVyKCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRMb2NhdGlvblVwbG9hZGVyTG9hZGVyKCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRMb2NhdGlvbihpbWFnZSwgZmlsZVBhdGgsIG9sZFBpY3R1cmUsIGlkKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9DQVRJT05fVVBMT0FEX1NUQVJUIH0pO1xuXG4gICAgdHJ5IHtcblxuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHVwbG9hZExvY2F0aW9uKFxuICAgICAgICAgICRpZDogSW50LFxuICAgICAgICAgICRpbWFnZTogU3RyaW5nLFxuICAgICAgICApIHtcbiAgICAgICAgICB1cGxvYWRMb2NhdGlvbihcbiAgICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgICBpbWFnZTogJGltYWdlLFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9jYXRpb25cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaW1hZ2UsIGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IGlkIH0gfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTE9DQVRJT05fVVBMT0FEX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9sZFBpY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHJlbW92ZUxvY2F0aW9uRmlsZShvbGRQaWN0dXJlKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogTE9DQVRJT05fVVBMT0FEX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVMb2NhdGlvbihpbWFnZSwgaWQpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfTE9DQVRJT05fU1RBUlQgfSk7XG4gICAgZGlzcGF0Y2goc3RhcnRMb2NhdGlvblVwbG9hZGVyTG9hZGVyKCkpO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgbXV0YXRpb24gcmVtb3ZlTG9jYXRpb24oXG4gICAgICAgICRpZDogSW50ISxcbiAgICAgICAgJGltYWdlOiBTdHJpbmcsXG4gICAgICApIHtcbiAgICAgICAgcmVtb3ZlTG9jYXRpb24oXG4gICAgICAgICAgaWQ6ICRpZCxcbiAgICAgICAgICBpbWFnZTogJGltYWdlLFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2NhdGlvblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBpbWFnZSwgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgaWQgfSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBSRU1PVkVfTE9DQVRJT05fU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsb2NhdGlvblVwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByZW1vdmVMb2NhdGlvbkZpbGUoaW1hZ2UpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX0xPQ0FUSU9OX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlTG9jYXRpb25GaWxlKGltYWdlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvcmVtb3ZlTG9jYXRpb25GaWxlJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaW1hZ2VcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgZnJvbSByZW1vdmUgbG9jYXRpb24gZmlsZScsIHN0YXR1cyk7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gcmVtb3ZlIGZpbGUnLCBlcnJvcik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIi4uLy4uL2NvcmUvZmV0Y2hcIjtcblxuaW1wb3J0IHtcbiAgU1VCX0NBVEVHT1JZX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gIFNVQl9DQVRFR09SWV9VUExPQURfU1RBUlQsXG4gIFNVQl9DQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgU1VCX0NBVEVHT1JZX1VQTE9BRF9FUlJPUixcbiAgUkVNT1ZFX1NVQl9DQVRFR09SWV9TVEFSVCxcbiAgUkVNT1ZFX1NVQl9DQVRFR09SWV9TVUNDRVNTLFxuICBSRU1PVkVfU1VCX0NBVEVHT1JZX0VSUk9SLFxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSBlZGl0U3ViQ2F0ZWdvcnkoJGlkOiBJbnQhKSB7XG4gICAgZWRpdFN1YkNhdGVnb3J5KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGFkZHJlc3NcbiAgICAgIHN1YkNhdGVnb3J5XG4gICAgICBndWVzdHNcbiAgICAgIGJlZHJvb21zXG4gICAgICBiZWRzXG4gICAgICBiYXRoc1xuICAgICAgaW1hZ2VcbiAgICAgIHByaW1hcnlDYXRlZ29yeVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kU3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkU3ViQ2F0ZWdvcnkoaW1hZ2UsIGZpbGVQYXRoLCBvbGRQaWN0dXJlLCBpZCkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogU1VCX0NBVEVHT1JZX1VQTE9BRF9TVEFSVCB9KTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHVwbG9hZFN1YkNhdGVnb3J5KCRpZDogSW50LCAkaW1hZ2U6IFN0cmluZykge1xuICAgICAgICAgIHVwbG9hZFN1YkNhdGVnb3J5KGlkOiAkaWQsIGltYWdlOiAkaW1hZ2UpIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9jYXRpb25cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaW1hZ2UsIGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IGlkIH0gfV0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNVQl9DQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdWJDYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRQaWN0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICBhd2FpdCByZW1vdmVTdWJDYXRlZ29yeUZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlU3ViQ2F0ZWdvcnkoaW1hZ2UsIGlkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfU1VCX0NBVEVHT1JZX1NUQVJUIH0pO1xuICAgIGRpc3BhdGNoKHN0YXJ0U3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRlcigpKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHJlbW92ZVN1YkNhdGVnb3J5KCRpZDogSW50ISwgJGltYWdlOiBTdHJpbmcpIHtcbiAgICAgICAgICByZW1vdmVTdWJDYXRlZ29yeShpZDogJGlkLCBpbWFnZTogJGltYWdlKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvY2F0aW9uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGltYWdlLCBpZCB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZCB9IH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBSRU1PVkVfU1VCX0NBVEVHT1JZX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCByZW1vdmVTdWJDYXRlZ29yeUZpbGUoaW1hZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9TVUJfQ0FURUdPUllfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBzdWJDYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVTdWJDYXRlZ29yeUZpbGUoaW1hZ2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCIvcmVtb3ZlU3ViQ2F0ZWdvcnlGaWxlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIGZyb20gcmVtb3ZlIHN1YiBjYXRlZ29yeSBmaWxlXCIsIHN0YXR1cyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZnJvbSByZW1vdmUgZmlsZVwiLCBlcnJvcik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7O0FDN0JBOzs7Ozs7O0FDQUE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9