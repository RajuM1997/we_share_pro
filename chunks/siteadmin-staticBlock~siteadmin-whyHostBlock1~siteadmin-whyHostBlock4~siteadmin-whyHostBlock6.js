require("source-map-support").install();
exports.ids = ["siteadmin-staticBlock~siteadmin-whyHostBlock1~siteadmin-whyHostBlock4~siteadmin-whyHostBlock6"];
exports.modules = {

/***/ "./public/adminIcons/defaultAdmin.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/defaultAdmin.svg?0cb65ad6";

/***/ }),

/***/ "./public/adminIcons/dlt.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/adminIcons/dlt.png?b362cae0";

/***/ }),

/***/ "./src/actions/siteadmin/getStaticBlockInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticBlockInfo", function() { return getStaticBlockInfo; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");


const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query {
    getStaticInfo {
          title
          content
          name
          image
          isEnable
    }
  }
`;
function getStaticBlockInfo() {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["STATIC_BLOCK_INFO_START"]
    });

    try {
      let settingsData = {};
      const {
        data
      } = await client.query({
        query,
        fetchPolicy: 'network-only'
      });

      if (data && data.getStaticInfo) {
        data.getStaticInfo.map((item, key) => {
          if (item.name == 'header') {
            settingsData['headerTitle'] = item.title;
            settingsData['headerContent'] = item.content;
            settingsData['isEnable'] = item.isEnable;
          } else if (item.name == 'block1') {
            settingsData['blockTitle1'] = item.title;
            settingsData['blockContent1'] = item.content;
            settingsData['blockImage1'] = item.image;
          } else {
            settingsData['blockTitle2'] = item.title;
            settingsData['blockContent2'] = item.content;
            settingsData['blockImage2'] = item.image;
          }
        }); // Successully logged out

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["STATIC_BLOCK_INFO_SUCCESS"],
          // data: settingsData,
          payload: {
            data: settingsData
          }
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["STATIC_BLOCK_INFO_ERROR"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["STATIC_BLOCK_INFO_ERROR"],
        payload: {
          error
        }
      });
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/actions/siteadmin/manageStaticBlock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStaticImageLoader", function() { return startStaticImageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopStaticImageLoader", function() { return stopStaticImageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadStaticImage", function() { return doUploadStaticImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveStaticImage", function() { return doRemoveStaticImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadStaticImageLoader", function() { return uploadStaticImageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUploadStaticImageBlock", function() { return doUploadStaticImageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveStaticImageBlock", function() { return doRemoveStaticImageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveWhyHostImage", function() { return doRemoveWhyHostImage; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/siteadmin/getStaticBlockInfo.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/core/history.js");






const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query ($name: String) {
  getStaticInfo(name: $name) {
    name
    image
    content
    title
    isEnable
  }
}
`;
const whyHostQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
{
  getWhyHostPage {
      id
      title
      name
      value
  }
}
`;
function startStaticImageLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_UPLOAD_START"],
      payload: {
        staticImageLoading: true
      }
    });
  };
}
function stopStaticImageLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_UPLOAD_START"],
      payload: {
        staticImageLoading: false
      }
    });
  };
}
function doUploadStaticImage(fileName, filePath, oldPicture, name) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation uploadStaticBlock($fileName: String, $filePath: String, $name: String) {
              uploadStaticBlock (fileName:$fileName, filePath: $filePath, name:$name) {
                status
              }
            }
          `; // Send Request to create a record for logo

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          fileName,
          filePath,
          name
        },
        refetchQueries: [{
          query,
          variables: {
            name
          }
        }]
      });

      if (data) {
        await dispatch(Object(_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_SUCCESS"],
          payload: {
            staticImageLoading: false
          }
        });

        if (oldPicture != null) {
          await removeLogoFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_BLOCK_IMAGE_ERROR"],
        payload: {
          error,
          staticImageLoading: false
        }
      });
      return false;
    }

    return true;
  };
}
function doRemoveStaticImage(fileName, name) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_STATIC_INFO_IMAGE_START"]
    });
    dispatch(startStaticImageLoader());
    dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('StaticBlockForm', 'blockImage1', null));

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation removeStaticImages($name: String){
          removeStaticImages(name: $name){
            status
          }
        }
      `; // Send Request to create a record for logo

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          name
        },
        refetchQueries: [{
          query,
          variables: {
            name
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_STATIC_INFO_IMAGE_SUCCESS"],
          payload: {
            staticImageLoading: false
          }
        });
        await dispatch(Object(_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());
        await removeLogoFile(fileName);
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["REMOVE_STATIC_INFO_IMAGE_ERROR"],
        payload: {
          error,
          staticImageLoading: false
        }
      });
      return false;
    }

    return true;
  };
}

async function removeLogoFile(fileName) {
  try {
    const resp = await fetch('/deleteHomeBanner', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fileName
      }),
      credentials: 'include'
    });
    const {
      status
    } = await resp.json();

    if (status) {
      console.log('status from remove logo file', status);
    }
  } catch (error) {
    console.log('error from remove file', error);
    return false;
  }

  return true;
}

function uploadStaticImageLoader() {
  return (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["STATIC_INFO_BLOCK_UPLOAD_LOADER_START"],
      payload: {
        staticBlockImageLoading: true
      }
    });
  };
} // export function stopuploadStaticImageLoader() {
//   return (dispatch, getState, { client }) => {
//     dispatch({
//       type: STATIC_INFO_BLOCK_UPLOAD_LOADER_START,
//       // payload: {
//       //   staticBlockImageLoading: false
//       // }
//     });
//   };
// }

function doUploadStaticImageBlock(fileName, filePath, oldPicture, name) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_STATIC_INFO_BLOCK_IMAGE_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation uploadStaticBlock($fileName: String, $filePath: String, $name: String) {
              uploadStaticBlock (fileName:$fileName, filePath: $filePath, name:$name) {
                status
              }
            }
          `; // Send Request to create a record for logo

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          fileName,
          filePath,
          name
        },
        refetchQueries: [{
          query,
          variables: {
            name
          }
        }]
      });

      if (data) {
        // await dispatch(getStaticBlockInfo());
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_STATIC_INFO_BLOCK_IMAGE_SUCCESS"],
          payload: {
            staticBlockImageLoading: false
          }
        });

        if (oldPicture != null) {
          await removeLogoFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_STATIC_INFO_BLOCK_IMAGE_ERROR"],
        payload: {
          error,
          staticBlockImageLoading: false
        }
      });
      return false;
    }

    return true;
  };
}
function doRemoveStaticImageBlock(fileName, name) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_STATIC_INFO_IMAGE_START"]
    });
    dispatch(uploadStaticImageLoader());
    dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('StaticBlockForm', 'blockImage2', null));

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation removeStaticImages($name: String){
          removeStaticImages(name: $name){
            status
          }
        }
      `; // Send Request to create a record for logo

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          name
        },
        refetchQueries: [{
          query,
          variables: {
            name
          }
        }]
      });

      if (data) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_STATIC_INFO_IMAGE_SUCCESS"],
          payload: {
            staticBlockImageLoading: false
          }
        });
        await dispatch(Object(_getStaticBlockInfo__WEBPACK_IMPORTED_MODULE_3__["getStaticBlockInfo"])());
        await removeLogoFile(fileName);
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["DELETE_STATIC_INFO_IMAGE_ERROR"],
        payload: {
          error,
          staticBlockImageLoading: false
        }
      });
      return false;
    }

    return true;
  };
}
function doRemoveWhyHostImage(name) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DELETE_BlOGDETAILS_START"],
      data: name
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation removeWhyHostImages ($name: String!) {
              removeWhyHostImages (name: $name) {
                    status
                }
                }
            `;
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          name
        },
        refetchQueries: [{
          query: whyHostQuery
        }]
      });

      if (data.removeWhyHostImages.status == "success") {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DELETE_BlOGDETAILS_SUCCESS"]
        });
        dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["change"])('WhyHostForm', name, null));
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].success("Success", "Deleted successfully!");
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__["toastr"].error("Oops!", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DELETE_BlOGDETAILS_ERROR"],
        payload: {
          error
        }
      });
    }
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3NpdGVhZG1pbi1zdGF0aWNCbG9ja35zaXRlYWRtaW4td2h5SG9zdEJsb2NrMX5zaXRlYWRtaW4td2h5SG9zdEJsb2NrNH5zaXRlYWRtaW4td2h5SG9zdEJsb2NrNi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvcHVibGljL2FkbWluSWNvbnMvZGVmYXVsdEFkbWluLnN2ZyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3B1YmxpYy9hZG1pbkljb25zL2RsdC5wbmciLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9zaXRlYWRtaW4vZ2V0U3RhdGljQmxvY2tJbmZvLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvc2l0ZWFkbWluL21hbmFnZVN0YXRpY0Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hZG1pbkljb25zL2RlZmF1bHRBZG1pbi5zdmc/MGNiNjVhZDZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYWRtaW5JY29ucy9kbHQucG5nP2IzNjJjYWUwXCI7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuaW1wb3J0IHtcbiAgU1RBVElDX0JMT0NLX0lORk9fU1RBUlQsXG4gIFNUQVRJQ19CTE9DS19JTkZPX1NVQ0NFU1MsXG4gIFNUQVRJQ19CTE9DS19JTkZPX0VSUk9SXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZ2V0U3RhdGljSW5mbyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGltYWdlXG4gICAgICAgICAgaXNFbmFibGVcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNCbG9ja0luZm8oKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNUQVRJQ19CTE9DS19JTkZPX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBzZXR0aW5nc0RhdGEgPSB7fTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmdldFN0YXRpY0luZm8pIHtcbiAgICAgICAgZGF0YS5nZXRTdGF0aWNJbmZvLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PSAnaGVhZGVyJykge1xuICAgICAgICAgICAgc2V0dGluZ3NEYXRhWydoZWFkZXJUaXRsZSddID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIHNldHRpbmdzRGF0YVsnaGVhZGVyQ29udGVudCddID0gaXRlbS5jb250ZW50O1xuICAgICAgICAgICAgc2V0dGluZ3NEYXRhWydpc0VuYWJsZSddID0gaXRlbS5pc0VuYWJsZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubmFtZSA9PSAnYmxvY2sxJykge1xuICAgICAgICAgICAgc2V0dGluZ3NEYXRhWydibG9ja1RpdGxlMSddID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIHNldHRpbmdzRGF0YVsnYmxvY2tDb250ZW50MSddID0gaXRlbS5jb250ZW50O1xuICAgICAgICAgICAgc2V0dGluZ3NEYXRhWydibG9ja0ltYWdlMSddID0gaXRlbS5pbWFnZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dGluZ3NEYXRhWydibG9ja1RpdGxlMiddID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIHNldHRpbmdzRGF0YVsnYmxvY2tDb250ZW50MiddID0gaXRlbS5jb250ZW50O1xuICAgICAgICAgICAgc2V0dGluZ3NEYXRhWydibG9ja0ltYWdlMiddID0gaXRlbS5pbWFnZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1Y2Nlc3N1bGx5IGxvZ2dlZCBvdXRcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNUQVRJQ19CTE9DS19JTkZPX1NVQ0NFU1MsXG4gICAgICAgICAgLy8gZGF0YTogc2V0dGluZ3NEYXRhLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGRhdGE6IHNldHRpbmdzRGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBTVEFUSUNfQkxPQ0tfSU5GT19FUlJPUixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU1RBVElDX0JMT0NLX0lORk9fRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjaGFuZ2UgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuaW1wb3J0IHtcbiAgU1RBVElDX0JMT0NLX0lNQUdFX1VQTE9BRF9TVEFSVCxcbiAgU1RBVElDX0JMT0NLX0lNQUdFX1NUQVJULFxuICBTVEFUSUNfQkxPQ0tfSU1BR0VfU1VDQ0VTUyxcbiAgU1RBVElDX0JMT0NLX0lNQUdFX0VSUk9SLFxuICBSRU1PVkVfU1RBVElDX0lORk9fSU1BR0VfU1RBUlQsXG4gIFJFTU9WRV9TVEFUSUNfSU5GT19JTUFHRV9TVUNDRVNTLFxuICBSRU1PVkVfU1RBVElDX0lORk9fSU1BR0VfRVJST1IsXG4gIFNUQVRJQ19JTkZPX0JMT0NLX1VQTE9BRF9MT0FERVJfU1RBUlQsXG4gIFVQTE9BRF9TVEFUSUNfSU5GT19CTE9DS19JTUFHRV9TVEFSVCxcbiAgVVBMT0FEX1NUQVRJQ19JTkZPX0JMT0NLX0lNQUdFX1NVQ0NFU1MsXG4gIFVQTE9BRF9TVEFUSUNfSU5GT19CTE9DS19JTUFHRV9FUlJPUixcbiAgREVMRVRFX1NUQVRJQ19JTkZPX0lNQUdFX1NUQVJULFxuICBERUxFVEVfU1RBVElDX0lORk9fSU1BR0VfU1VDQ0VTUyxcbiAgREVMRVRFX1NUQVRJQ19JTkZPX0lNQUdFX0VSUk9SLFxuICBBRE1JTl9ERUxFVEVfQmxPR0RFVEFJTFNfU1RBUlQsXG4gIEFETUlOX0RFTEVURV9CbE9HREVUQUlMU19TVUNDRVNTLFxuICBBRE1JTl9ERUxFVEVfQmxPR0RFVEFJTFNfRVJST1Jcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgZ2V0U3RhdGljQmxvY2tJbmZvIH0gZnJvbSAnLi9nZXRTdGF0aWNCbG9ja0luZm8nO1xuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2NvcmUvaGlzdG9yeSc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxucXVlcnkgKCRuYW1lOiBTdHJpbmcpIHtcbiAgZ2V0U3RhdGljSW5mbyhuYW1lOiAkbmFtZSkge1xuICAgIG5hbWVcbiAgICBpbWFnZVxuICAgIGNvbnRlbnRcbiAgICB0aXRsZVxuICAgIGlzRW5hYmxlXG4gIH1cbn1cbmA7XG5cbmNvbnN0IHdoeUhvc3RRdWVyeSA9IGdxbGBcbntcbiAgZ2V0V2h5SG9zdFBhZ2Uge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBuYW1lXG4gICAgICB2YWx1ZVxuICB9XG59XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGF0aWNJbWFnZUxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTVEFUSUNfQkxPQ0tfSU1BR0VfVVBMT0FEX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BTdGF0aWNJbWFnZUxvYWRlcigpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTVEFUSUNfQkxPQ0tfSU1BR0VfVVBMT0FEX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvVXBsb2FkU3RhdGljSW1hZ2UoZmlsZU5hbWUsIGZpbGVQYXRoLCBvbGRQaWN0dXJlLCBuYW1lKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogU1RBVElDX0JMT0NLX0lNQUdFX1NUQVJUIH0pO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gdXBsb2FkU3RhdGljQmxvY2soJGZpbGVOYW1lOiBTdHJpbmcsICRmaWxlUGF0aDogU3RyaW5nLCAkbmFtZTogU3RyaW5nKSB7XG4gICAgICAgICAgICAgIHVwbG9hZFN0YXRpY0Jsb2NrIChmaWxlTmFtZTokZmlsZU5hbWUsIGZpbGVQYXRoOiAkZmlsZVBhdGgsIG5hbWU6JG5hbWUpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGA7XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBjcmVhdGUgYSByZWNvcmQgZm9yIGxvZ29cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHsgZmlsZU5hbWUsIGZpbGVQYXRoLCBuYW1lIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IG5hbWUgfSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldFN0YXRpY0Jsb2NrSW5mbygpKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNUQVRJQ19CTE9DS19JTUFHRV9TVUNDRVNTLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHN0YXRpY0ltYWdlTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2xkUGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNUQVRJQ19CTE9DS19JTUFHRV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHN0YXRpY0ltYWdlTG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9SZW1vdmVTdGF0aWNJbWFnZShmaWxlTmFtZSwgbmFtZSkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9TVEFUSUNfSU5GT19JTUFHRV9TVEFSVCB9KTtcbiAgICBkaXNwYXRjaChzdGFydFN0YXRpY0ltYWdlTG9hZGVyKCkpO1xuICAgIGRpc3BhdGNoKGNoYW5nZSgnU3RhdGljQmxvY2tGb3JtJywgJ2Jsb2NrSW1hZ2UxJywgbnVsbCkpO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICBtdXRhdGlvbiByZW1vdmVTdGF0aWNJbWFnZXMoJG5hbWU6IFN0cmluZyl7XG4gICAgICAgICAgcmVtb3ZlU3RhdGljSW1hZ2VzKG5hbWU6ICRuYW1lKXtcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGNyZWF0ZSBhIHJlY29yZCBmb3IgbG9nb1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcbiAgICAgICAgbXV0YXRpb24sXG4gICAgICAgIHZhcmlhYmxlczogeyBuYW1lIH0sXG4gICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeSwgdmFyaWFibGVzOiB7IG5hbWUgfSB9XVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBSRU1PVkVfU1RBVElDX0lORk9fSU1BR0VfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goZ2V0U3RhdGljQmxvY2tJbmZvKCkpO1xuICAgICAgICBhd2FpdCByZW1vdmVMb2dvRmlsZShmaWxlTmFtZSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBSRU1PVkVfU1RBVElDX0lORk9fSU1BR0VfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBzdGF0aWNJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlTG9nb0ZpbGUoZmlsZU5hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy9kZWxldGVIb21lQmFubmVyJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZmlsZU5hbWVcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcblxuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXMgZnJvbSByZW1vdmUgbG9nbyBmaWxlJywgc3RhdHVzKTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3IgZnJvbSByZW1vdmUgZmlsZScsIGVycm9yKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkU3RhdGljSW1hZ2VMb2FkZXIoKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU1RBVElDX0lORk9fQkxPQ0tfVVBMT0FEX0xPQURFUl9TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc3RhdGljQmxvY2tJbWFnZUxvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3B1cGxvYWRTdGF0aWNJbWFnZUxvYWRlcigpIHtcbi8vICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbi8vICAgICBkaXNwYXRjaCh7XG4vLyAgICAgICB0eXBlOiBTVEFUSUNfSU5GT19CTE9DS19VUExPQURfTE9BREVSX1NUQVJULFxuLy8gICAgICAgLy8gcGF5bG9hZDoge1xuLy8gICAgICAgLy8gICBzdGF0aWNCbG9ja0ltYWdlTG9hZGluZzogZmFsc2Vcbi8vICAgICAgIC8vIH1cbi8vICAgICB9KTtcbi8vICAgfTtcbi8vIH1cblxuXG5leHBvcnQgZnVuY3Rpb24gZG9VcGxvYWRTdGF0aWNJbWFnZUJsb2NrKGZpbGVOYW1lLCBmaWxlUGF0aCwgb2xkUGljdHVyZSwgbmFtZSkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IFVQTE9BRF9TVEFUSUNfSU5GT19CTE9DS19JTUFHRV9TVEFSVCB9KTtcblxuICAgIHRyeSB7XG5cbiAgICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIHVwbG9hZFN0YXRpY0Jsb2NrKCRmaWxlTmFtZTogU3RyaW5nLCAkZmlsZVBhdGg6IFN0cmluZywgJG5hbWU6IFN0cmluZykge1xuICAgICAgICAgICAgICB1cGxvYWRTdGF0aWNCbG9jayAoZmlsZU5hbWU6JGZpbGVOYW1lLCBmaWxlUGF0aDogJGZpbGVQYXRoLCBuYW1lOiRuYW1lKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2dvXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IGZpbGVOYW1lLCBmaWxlUGF0aCwgbmFtZSB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnksIHZhcmlhYmxlczogeyBuYW1lIH0gfV1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICAvLyBhd2FpdCBkaXNwYXRjaChnZXRTdGF0aWNCbG9ja0luZm8oKSk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBVUExPQURfU1RBVElDX0lORk9fQkxPQ0tfSU1BR0VfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdGF0aWNCbG9ja0ltYWdlTG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2xkUGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUob2xkUGljdHVyZSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFVQTE9BRF9TVEFUSUNfSU5GT19CTE9DS19JTUFHRV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHN0YXRpY0Jsb2NrSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1JlbW92ZVN0YXRpY0ltYWdlQmxvY2soZmlsZU5hbWUsIG5hbWUpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERUxFVEVfU1RBVElDX0lORk9fSU1BR0VfU1RBUlQgfSk7XG4gICAgZGlzcGF0Y2godXBsb2FkU3RhdGljSW1hZ2VMb2FkZXIoKSk7XG4gICAgZGlzcGF0Y2goY2hhbmdlKCdTdGF0aWNCbG9ja0Zvcm0nLCAnYmxvY2tJbWFnZTInLCBudWxsKSk7XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHJlbW92ZVN0YXRpY0ltYWdlcygkbmFtZTogU3RyaW5nKXtcbiAgICAgICAgICByZW1vdmVTdGF0aWNJbWFnZXMobmFtZTogJG5hbWUpe1xuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gY3JlYXRlIGEgcmVjb3JkIGZvciBsb2dvXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICBtdXRhdGlvbixcbiAgICAgICAgdmFyaWFibGVzOiB7IG5hbWUgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5LCB2YXJpYWJsZXM6IHsgbmFtZSB9IH1dXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IERFTEVURV9TVEFUSUNfSU5GT19JTUFHRV9TVUNDRVNTLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHN0YXRpY0Jsb2NrSW1hZ2VMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldFN0YXRpY0Jsb2NrSW5mbygpKTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlTG9nb0ZpbGUoZmlsZU5hbWUpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogREVMRVRFX1NUQVRJQ19JTkZPX0lNQUdFX0VSUk9SLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgc3RhdGljQmxvY2tJbWFnZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvUmVtb3ZlV2h5SG9zdEltYWdlKG5hbWUpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQURNSU5fREVMRVRFX0JsT0dERVRBSUxTX1NUQVJULFxuICAgICAgICBkYXRhOiBuYW1lXG4gICAgfSk7XG4gICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gcmVtb3ZlV2h5SG9zdEltYWdlcyAoJG5hbWU6IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlV2h5SG9zdEltYWdlcyAobmFtZTogJG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IG5hbWUgfSxcbiAgICAgICAgICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IHdoeUhvc3RRdWVyeSB9XVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKGRhdGEucmVtb3ZlV2h5SG9zdEltYWdlcy5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEFETUlOX0RFTEVURV9CbE9HREVUQUlMU19TVUNDRVNTLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZSgnV2h5SG9zdEZvcm0nLCBuYW1lLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJTdWNjZXNzXCIsIFwiRGVsZXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJPb3BzIVwiLCBcIkRlbGV0aW9uIGZhaWxlZCFcIik7XG4gICAgICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBRE1JTl9ERUxFVEVfQmxPR0RFVEFJTFNfRVJST1IsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn07XG5cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQW9CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBRUE7QUFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9