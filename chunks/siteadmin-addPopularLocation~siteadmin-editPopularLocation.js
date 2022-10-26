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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1hZGRQb3B1bGFyTG9jYXRpb25+c2l0ZWFkbWluLWVkaXRQb3B1bGFyTG9jYXRpb24uanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL25vZGVfbW9kdWxlcy9yZWFjdC1nZW9zdWdnZXN0L21vZHVsZS9nZW9zdWdnZXN0LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2Vvc3VnZ2VzdC9tb2R1bGUvZ2Vvc3VnZ2VzdC5jc3M/YTMyZSIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9wZXJzb25hbGl6ZWQuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vbWFuYWdlQ2F0ZWdvcnlJbWFnZS5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL3NpdGVhZG1pbi9tYW5hZ2VMb2NhdGlvbkltYWdlLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZVN1YkNhdGVnb3J5SW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFRoZSBnZW9zdWdnZXN0IG1vZHVsZVxcbiAqIE5PVEU6IGR1cGxpY2F0ZWQgZm9udC1zaXplcycgYXJlIGZvciBicm93c2VycyB3aGljaCBkb24ndCBzdXBwb3J0IHJlbSAob25seSBJRSA4KVxcbiAqL1xcbi5nZW9zdWdnZXN0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmdlb3N1Z2dlc3RfX2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMzZDQ2NGQ7XFxuICBwYWRkaW5nOiAuNWVtIDFlbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcXG59XFxuLmdlb3N1Z2dlc3RfX2lucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzI2N2RjMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIHRyYW5zcGFyZW50O1xcbn1cXG4uZ2Vvc3VnZ2VzdF9fc3VnZ2VzdHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWF4LWhlaWdodDogMjVlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjdkYzA7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB6LWluZGV4OiA1O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMsIGJvcmRlciAwLjJzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMsIGJvcmRlciAwLjJzO1xcbn1cXG4uZ2Vvc3VnZ2VzdF9fc3VnZ2VzdHMtLWhpZGRlbiB7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuXFxuLyoqXFxuICogQSBnZW9zdWdnZXN0IGl0ZW1cXG4gKi9cXG4uZ2Vvc3VnZ2VzdF9faXRlbSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAuNWVtIC42NWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZ2Vvc3VnZ2VzdF9faXRlbTpob3ZlcixcXG4uZ2Vvc3VnZ2VzdF9faXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbn1cXG4uZ2Vvc3VnZ2VzdF9faXRlbS0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICMyNjdkYzA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmdlb3N1Z2dlc3RfX2l0ZW0tLWFjdGl2ZTpob3ZlcixcXG4uZ2Vvc3VnZ2VzdF9faXRlbS0tYWN0aXZlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcbi5nZW9zdWdnZXN0X19pdGVtX19tYXRjaGVkLXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlb3N1Z2dlc3QuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlb3N1Z2dlc3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2dlb3N1Z2dlc3QuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmc/MGNiNjVhZDZcIjsiLCJpbXBvcnQgeyBTRVRfUEVSU09OQUxJWkVEX1ZBTFVFUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQZXJzb25hbGl6ZWRWYWx1ZXMoeyBuYW1lLCB2YWx1ZSB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1BFUlNPTkFMSVpFRF9WQUxVRVMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcIi4uLy4uL2NvcmUvZmV0Y2hcIjtcblxuaW1wb3J0IHtcbiAgQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgQ0FURUdPUllfVVBMT0FEX1NUQVJULFxuICBDQVRFR09SWV9VUExPQURfU1VDQ0VTUyxcbiAgQ0FURUdPUllfVVBMT0FEX0VSUk9SLFxuICBSRU1PVkVfQ0FURUdPUllfU1RBUlQsXG4gIFJFTU9WRV9DQVRFR09SWV9TVUNDRVNTLFxuICBSRU1PVkVfQ0FURUdPUllfRVJST1IsXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5IGVkaXRDYXRlZ29yeSgkaWQ6IEludCEpIHtcbiAgICBlZGl0Q2F0ZWdvcnkoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBzdWJUaXRsZVxuICAgICAgaXNFbmFibGVcbiAgICAgIGltYWdlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRDYXRlZ29yeVVwbG9hZGVyTG9hZGVyKCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IENBVEVHT1JZX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZENhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0FURUdPUllfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkQ2F0ZWdvcnkoaW1hZ2UsIGZpbGVQYXRoLCBvbGRQaWN0dXJlLCBpZCkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ0FURUdPUllfVVBMT0FEX1NUQVJUIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgbXV0YXRpb24gdXBsb2FkQ2F0ZWdvcnkoJGlkOiBJbnQsICRpbWFnZTogU3RyaW5nKSB7XG4gICAgICAgICAgdXBsb2FkQ2F0ZWdvcnkoaWQ6ICRpZCwgaW1hZ2U6ICRpbWFnZSkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2NhdGlvblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBpbWFnZSwgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgaWQgfSB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQ0FURUdPUllfVVBMT0FEX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2xkUGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXdhaXQgcmVtb3ZlQ2F0ZWdvcnlGaWxlKG9sZFBpY3R1cmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQ0FURUdPUllfVVBMT0FEX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgY2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlQ2F0ZWdvcnkoaW1hZ2UsIGlkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBSRU1PVkVfQ0FURUdPUllfU1RBUlQgfSk7XG4gICAgZGlzcGF0Y2goc3RhcnRDYXRlZ29yeVVwbG9hZGVyTG9hZGVyKCkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgbXV0YXRpb24gcmVtb3ZlQ2F0ZWdvcnkoJGlkOiBJbnQhLCAkaW1hZ2U6IFN0cmluZykge1xuICAgICAgICAgIHJlbW92ZUNhdGVnb3J5KGlkOiAkaWQsIGltYWdlOiAkaW1hZ2UpIHtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9jYXRpb25cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaW1hZ2UsIGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IGlkIH0gfV0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFJFTU9WRV9DQVRFR09SWV9TVUNDRVNTLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlQ2F0ZWdvcnlGaWxlKGltYWdlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBSRU1PVkVfQ0FURUdPUllfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBjYXRlZ29yeVVwbG9hZGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVDYXRlZ29yeUZpbGUoaW1hZ2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCIvcmVtb3ZlQ2F0ZWdvcnlGaWxlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzIGZyb20gcmVtb3ZlIGNhdGVnb3J5IGZpbGVcIiwgc3RhdHVzKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvciBmcm9tIHJlbW92ZSBmaWxlXCIsIGVycm9yKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBmZXRjaCBmcm9tICcuLi8uLi9jb3JlL2ZldGNoJztcblxuaW1wb3J0IHtcbiAgTE9DQVRJT05fVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgTE9DQVRJT05fVVBMT0FEX1NUQVJULFxuICBMT0NBVElPTl9VUExPQURfU1VDQ0VTUyxcbiAgTE9DQVRJT05fVVBMT0FEX0VSUk9SLFxuICBSRU1PVkVfTE9DQVRJT05fU1RBUlQsXG4gIFJFTU9WRV9MT0NBVElPTl9TVUNDRVNTLFxuICBSRU1PVkVfTE9DQVRJT05fRVJST1IsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxucXVlcnkgZWRpdFBvcHVsYXJMb2NhdGlvbiAoJGlkOiBJbnQhKSB7XG4gIGVkaXRQb3B1bGFyTG9jYXRpb24gKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBsb2NhdGlvblxuICAgICAgbG9jYXRpb25BZGRyZXNzXG4gICAgICBpc0VuYWJsZVxuICAgICAgaW1hZ2VcbiAgfVxufVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0TG9jYXRpb25VcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0NBVElPTl9VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb2NhdGlvblVwbG9hZGVyTG9hZGluZzogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kTG9jYXRpb25VcGxvYWRlckxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBMT0NBVElPTl9VUExPQURfTE9BREVSX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsb2NhdGlvblVwbG9hZGVyTG9hZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkTG9jYXRpb24oaW1hZ2UsIGZpbGVQYXRoLCBvbGRQaWN0dXJlLCBpZCkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9TVEFSVCB9KTtcblxuICAgIHRyeSB7XG5cblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiB1cGxvYWRMb2NhdGlvbihcbiAgICAgICAgICAkaWQ6IEludCxcbiAgICAgICAgICAkaW1hZ2U6IFN0cmluZyxcbiAgICAgICAgKSB7XG4gICAgICAgICAgdXBsb2FkTG9jYXRpb24oXG4gICAgICAgICAgICBpZDogJGlkLFxuICAgICAgICAgICAgaW1hZ2U6ICRpbWFnZSxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvY2F0aW9uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGltYWdlLCBpZCB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZCB9IH1dXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9TVUNDRVNTLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRQaWN0dXJlICE9IG51bGwpIHtcbiAgICAgICAgICBhd2FpdCByZW1vdmVMb2NhdGlvbkZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IExPQ0FUSU9OX1VQTE9BRF9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlTG9jYXRpb24oaW1hZ2UsIGlkKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogUkVNT1ZFX0xPQ0FUSU9OX1NUQVJUIH0pO1xuICAgIGRpc3BhdGNoKHN0YXJ0TG9jYXRpb25VcGxvYWRlckxvYWRlcigpKTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgIG11dGF0aW9uIHJlbW92ZUxvY2F0aW9uKFxuICAgICAgICAkaWQ6IEludCEsXG4gICAgICAgICRpbWFnZTogU3RyaW5nLFxuICAgICAgKSB7XG4gICAgICAgIHJlbW92ZUxvY2F0aW9uKFxuICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgaW1hZ2U6ICRpbWFnZSxcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9jYXRpb25cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgaW1hZ2UsIGlkIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IGlkIH0gfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogUkVNT1ZFX0xPQ0FUSU9OX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgbG9jYXRpb25VcGxvYWRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlTG9jYXRpb25GaWxlKGltYWdlKTtcbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9MT0NBVElPTl9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGxvY2F0aW9uVXBsb2FkZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUxvY2F0aW9uRmlsZShpbWFnZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL3JlbW92ZUxvY2F0aW9uRmlsZScsIHtcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGltYWdlXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnc3RhdHVzIGZyb20gcmVtb3ZlIGxvY2F0aW9uIGZpbGUnLCBzdGF0dXMpO1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvciBmcm9tIHJlbW92ZSBmaWxlJywgZXJyb3IpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCIuLi8uLi9jb3JlL2ZldGNoXCI7XG5cbmltcG9ydCB7XG4gIFNVQl9DQVRFR09SWV9VUExPQURfTE9BREVSX1NUQVJULFxuICBTVUJfQ0FURUdPUllfVVBMT0FEX1NUQVJULFxuICBTVUJfQ0FURUdPUllfVVBMT0FEX1NVQ0NFU1MsXG4gIFNVQl9DQVRFR09SWV9VUExPQURfRVJST1IsXG4gIFJFTU9WRV9TVUJfQ0FURUdPUllfU1RBUlQsXG4gIFJFTU9WRV9TVUJfQ0FURUdPUllfU1VDQ0VTUyxcbiAgUkVNT1ZFX1NVQl9DQVRFR09SWV9FUlJPUixcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgZWRpdFN1YkNhdGVnb3J5KCRpZDogSW50ISkge1xuICAgIGVkaXRTdWJDYXRlZ29yeShpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBhZGRyZXNzXG4gICAgICBzdWJDYXRlZ29yeVxuICAgICAgZ3Vlc3RzXG4gICAgICBiZWRyb29tc1xuICAgICAgYmVkc1xuICAgICAgYmF0aHNcbiAgICAgIGltYWdlXG4gICAgICBwcmltYXJ5Q2F0ZWdvcnlcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU1VCX0NBVEVHT1JZX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZFN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU1VCX0NBVEVHT1JZX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIHN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1VwbG9hZFN1YkNhdGVnb3J5KGltYWdlLCBmaWxlUGF0aCwgb2xkUGljdHVyZSwgaWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFNVQl9DQVRFR09SWV9VUExPQURfU1RBUlQgfSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiB1cGxvYWRTdWJDYXRlZ29yeSgkaWQ6IEludCwgJGltYWdlOiBTdHJpbmcpIHtcbiAgICAgICAgICB1cGxvYWRTdWJDYXRlZ29yeShpZDogJGlkLCBpbWFnZTogJGltYWdlKSB7XG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvY2F0aW9uXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGltYWdlLCBpZCB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBpZCB9IH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTVUJfQ0FURUdPUllfVVBMT0FEX1NVQ0NFU1MsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2xkUGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXdhaXQgcmVtb3ZlU3ViQ2F0ZWdvcnlGaWxlKG9sZFBpY3R1cmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU1VCX0NBVEVHT1JZX1VQTE9BRF9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1JlbW92ZVN1YkNhdGVnb3J5KGltYWdlLCBpZCkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogUkVNT1ZFX1NVQl9DQVRFR09SWV9TVEFSVCB9KTtcbiAgICBkaXNwYXRjaChzdGFydFN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkZXIoKSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiByZW1vdmVTdWJDYXRlZ29yeSgkaWQ6IEludCEsICRpbWFnZTogU3RyaW5nKSB7XG4gICAgICAgICAgcmVtb3ZlU3ViQ2F0ZWdvcnkoaWQ6ICRpZCwgaW1hZ2U6ICRpbWFnZSkge1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2NhdGlvblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBpbWFnZSwgaWQgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgaWQgfSB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogUkVNT1ZFX1NVQl9DQVRFR09SWV9TVUNDRVNTLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5VXBsb2FkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlU3ViQ2F0ZWdvcnlGaWxlKGltYWdlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBSRU1PVkVfU1VCX0NBVEVHT1JZX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgc3ViQ2F0ZWdvcnlVcGxvYWRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlU3ViQ2F0ZWdvcnlGaWxlKGltYWdlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKFwiL3JlbW92ZVN1YkNhdGVnb3J5RmlsZVwiLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGltYWdlLFxuICAgICAgfSksXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG5cbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXR1cyBmcm9tIHJlbW92ZSBzdWIgY2F0ZWdvcnkgZmlsZVwiLCBzdGF0dXMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yIGZyb20gcmVtb3ZlIGZpbGVcIiwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7OztBQzdCQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9MQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=