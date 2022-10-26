require("source-map-support").install();
exports.ids = ["home~search~viewListing"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/WishListIcon/WishListIcon.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".WishListIcon-iconContainer-365H5 {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tz-index: 2;\n}\n.WishListIcon-buttonContainer-HVmFC {\n\tpadding: 10px 16px;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tborder-radius: 4px;\n\twidth: auto;\n\tfont-size: 15px;\n\tline-height: 18px;\n\tcolor: #484848;\n\tfont-weight: normal;\n\tborder: 1px solid transparent;\n\tmin-width: 52px;\n\tbackground: #ffffff;\n}\n.WishListIcon-wishListIcon-HTtpo {\n\tline-height: 1;\n\tcursor: pointer;\n\twidth: 100%;\n\tmax-width: 30px;\n}\n.WishListIcon-buttonContainer-HVmFC .WishListIcon-wishListIcon-HTtpo {\n\tmax-width: 20px !important;\n}\n.WishListIcon-buttonText-1jIWs {\n\tpadding-left: 6px;\n}\n.WishListIcon-vtrBottom-25Cet {\n\tvertical-align: bottom;\n}\n.WishListIcon-vtrMiddle-5sLjK {\n\tvertical-align: middle;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/WishListIcon/WishListIcon.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,WAAW;CACX,SAAS;CACT,WAAW;CACX;AACD;CACC,mBAAmB;CACnB,sBAAsB;CACtB,mBAAmB;CACnB,mBAAmB;CACnB,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,oBAAoB;CACpB,8BAA8B;CAC9B,gBAAgB;CAChB,oBAAoB;CACpB;AACD;CACC,eAAe;CACf,gBAAgB;CAChB,YAAY;CACZ,gBAAgB;CAChB;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,kBAAkB;CAClB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,uBAAuB;CACvB","file":"WishListIcon.css","sourcesContent":[".iconContainer {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tz-index: 2;\n}\n.buttonContainer {\n\tpadding: 10px 16px;\n\tdisplay: inline-block;\n\ttext-align: center;\n\tborder-radius: 4px;\n\twidth: auto;\n\tfont-size: 15px;\n\tline-height: 18px;\n\tcolor: #484848;\n\tfont-weight: normal;\n\tborder: 1px solid transparent;\n\tmin-width: 52px;\n\tbackground: #ffffff;\n}\n.wishListIcon {\n\tline-height: 1;\n\tcursor: pointer;\n\twidth: 100%;\n\tmax-width: 30px;\n}\n.buttonContainer .wishListIcon {\n\tmax-width: 20px !important;\n}\n.buttonText {\n\tpadding-left: 6px;\n}\n.vtrBottom {\n\tvertical-align: bottom;\n}\n.vtrMiddle {\n\tvertical-align: middle;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"iconContainer": "WishListIcon-iconContainer-365H5",
	"buttonContainer": "WishListIcon-buttonContainer-HVmFC",
	"wishListIcon": "WishListIcon-wishListIcon-HTtpo",
	"buttonText": "WishListIcon-buttonText-1jIWs",
	"vtrBottom": "WishListIcon-vtrBottom-25Cet",
	"vtrMiddle": "WishListIcon-vtrMiddle-5sLjK"
};

/***/ }),

/***/ "./src/components/WishListIcon/WishListIcon.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/WishListIcon/WishListIcon.css");
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

/***/ "./src/components/WishListIcon/WishListIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/WishListIcon/WishListIcon.css");
/* harmony import */ var _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_wishListStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/helpers/wishListStatus.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_SiteIcons_heart_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/SiteIcons/heart.png");
/* harmony import */ var _public_SiteIcons_heart_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_SiteIcons_heart_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_SiteIcons_heartFil_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/SiteIcons/heartFil.png");
/* harmony import */ var _public_SiteIcons_heartFil_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_SiteIcons_heartFil_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_WishList_modalActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/actions/WishList/modalActions.js");
/* harmony import */ var _actions_modalActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/actions/modalActions.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/WishListIcon/WishListIcon.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Helper


 //Images


 // Redux Actions



 // Locale



class WishListIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      iconSelected: false,
      clicked: false
    };
    this.iconAction = this.iconAction.bind(this);
  }

  componentWillMount() {
    const {
      isChecked,
      listId
    } = this.props;
    this.setState({
      iconSelected: isChecked
    });
  }

  async componentWillReceiveProps(nextProps) {
    const {
      wishListModalStatus,
      wishListRoomId,
      isChecked,
      listId
    } = nextProps;
    const {
      iconSelected,
      clicked
    } = this.state;
    let currentwishListStatus = false; // Trigger request on Modal action done/close

    if (wishListRoomId && wishListModalStatus === false) {
      // Get Current List's Wish List Status( True/False )
      currentwishListStatus = await Object(_helpers_wishListStatus__WEBPACK_IMPORTED_MODULE_6__["getwishListStatus"])(listId);
      this.setState({
        iconSelected: currentwishListStatus
      });
    } else {
      // On the flow process
      if (!clicked && !wishListModalStatus) {
        this.setState({
          iconSelected: isChecked
        });
      }
    }
  }

  iconAction() {
    const {
      isChecked,
      listId,
      isAuthenticated
    } = this.props;
    const {
      openLoginModal,
      openWishListModal
    } = this.props;

    if (isAuthenticated) {
      this.setState({
        clicked: true
      });
      openWishListModal(listId);
    } else {
      openLoginModal();
    }
  }

  render() {
    const {
      isChecked,
      listId,
      type,
      heartIcon
    } = this.props;
    const {
      iconSelected
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, type == 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.iconContainer, heartIcon, 'heartIconRtl'),
      onClick: this.iconAction,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 39
      }
    }, iconSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_SiteIcons_heartFil_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      className: _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.wishListIcon,
      alt: 'Wishlist',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 45
      }
    }), !iconSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_SiteIcons_heart_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.wishListIcon),
      alt: 'Wishlist',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 46
      }
    })), type == 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,
      onClick: this.iconAction,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 41
      }
    }, iconSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_SiteIcons_heartFil_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.wishListIcon, _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.vtrMiddle),
      alt: 'Wishlist',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 45
      }
    }), !iconSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _public_SiteIcons_heart_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.wishListIcon, _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.vtrMiddle),
      alt: 'Wishlist',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 46
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonText, _WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a.vtrBottom),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }, iconSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].saved, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 48
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].wishListSave, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 91
      }
    })))));
  }

}

_defineProperty(WishListIcon, "propTypes", {
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(WishListIcon, "defaultProps", {
  isChecked: false,
  type: 'icon'
});

const mapState = state => ({
  isAuthenticated: state.runtime.isAuthenticated,
  wishListModalStatus: state.modalStatus.wishListModalOpen,
  wishListRoomId: state.modalStatus.listId
});

const mapDispatch = {
  openLoginModal: _actions_modalActions__WEBPACK_IMPORTED_MODULE_11__["openLoginModal"],
  openWishListModal: _actions_WishList_modalActions__WEBPACK_IMPORTED_MODULE_10__["openWishListModal"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_WishListIcon_css__WEBPACK_IMPORTED_MODULE_4___default.a), Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapState, mapDispatch), Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["gql"]`
        query getListingData($listId: String!, $preview: Boolean) {
          UserListing (listId: $listId, preview: $preview) {
            wishListStatus
          }
        }     
    `))(WishListIcon));

/***/ }),

/***/ "./src/helpers/wishListStatus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getwishListStatus", function() { return getwishListStatus; });
/* harmony import */ var _core_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/fetch/fetch.server.js");
// Fetch request

async function getwishListStatus(listId) {
  let query = `query getListingData($listId: String!, $preview: Boolean) {
                    UserListing (listId: $listId, preview: $preview) {
                    wishListStatus
                    }
                }`;
  const resp = await Object(_core_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query,
      variables: {
        listId
      }
    }),
    credentials: 'include'
  });
  const {
    data
  } = await resp.json();

  if (data.UserListing && data.UserListing.wishListStatus === true) {
    return true;
  } else {
    return false;
  }
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hvbWV+c2VhcmNofnZpZXdMaXN0aW5nLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9XaXNoTGlzdEljb24vV2lzaExpc3RJY29uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaXNoTGlzdEljb24vV2lzaExpc3RJY29uLmNzcz82YWU0IiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvV2lzaExpc3RJY29uL1dpc2hMaXN0SWNvbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9oZWxwZXJzL3dpc2hMaXN0U3RhdHVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuV2lzaExpc3RJY29uLWljb25Db250YWluZXItMzY1SDUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogNXB4O1xcblxcdHRvcDogNXB4O1xcblxcdHotaW5kZXg6IDI7XFxufVxcbi5XaXNoTGlzdEljb24tYnV0dG9uQ29udGFpbmVyLUhWbUZDIHtcXG5cXHRwYWRkaW5nOiAxMHB4IDE2cHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcblxcdGNvbG9yOiAjNDg0ODQ4O1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0bWluLXdpZHRoOiA1MnB4O1xcblxcdGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbi5XaXNoTGlzdEljb24td2lzaExpc3RJY29uLUhUdHBvIHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAzMHB4O1xcbn1cXG4uV2lzaExpc3RJY29uLWJ1dHRvbkNvbnRhaW5lci1IVm1GQyAuV2lzaExpc3RJY29uLXdpc2hMaXN0SWNvbi1IVHRwbyB7XFxuXFx0bWF4LXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5XaXNoTGlzdEljb24tYnV0dG9uVGV4dC0xaklXcyB7XFxuXFx0cGFkZGluZy1sZWZ0OiA2cHg7XFxufVxcbi5XaXNoTGlzdEljb24tdnRyQm90dG9tLTI1Q2V0IHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG4uV2lzaExpc3RJY29uLXZ0ck1pZGRsZS01c0xqSyB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL1dpc2hMaXN0SWNvbi9XaXNoTGlzdEljb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsV0FBVztDQUNYO0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQiw4QkFBOEI7Q0FDOUIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQjtBQUNEO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCO0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0I7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkJcIixcImZpbGVcIjpcIldpc2hMaXN0SWNvbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb25Db250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogNXB4O1xcblxcdHRvcDogNXB4O1xcblxcdHotaW5kZXg6IDI7XFxufVxcbi5idXR0b25Db250YWluZXIge1xcblxcdHBhZGRpbmc6IDEwcHggMTZweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDE4cHg7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRtaW4td2lkdGg6IDUycHg7XFxuXFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcXG59XFxuLndpc2hMaXN0SWNvbiB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1heC13aWR0aDogMzBweDtcXG59XFxuLmJ1dHRvbkNvbnRhaW5lciAud2lzaExpc3RJY29uIHtcXG5cXHRtYXgtd2lkdGg6IDIwcHggIWltcG9ydGFudDtcXG59XFxuLmJ1dHRvblRleHQge1xcblxcdHBhZGRpbmctbGVmdDogNnB4O1xcbn1cXG4udnRyQm90dG9tIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG4udnRyTWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcIldpc2hMaXN0SWNvbi1pY29uQ29udGFpbmVyLTM2NUg1XCIsXG5cdFwiYnV0dG9uQ29udGFpbmVyXCI6IFwiV2lzaExpc3RJY29uLWJ1dHRvbkNvbnRhaW5lci1IVm1GQ1wiLFxuXHRcIndpc2hMaXN0SWNvblwiOiBcIldpc2hMaXN0SWNvbi13aXNoTGlzdEljb24tSFR0cG9cIixcblx0XCJidXR0b25UZXh0XCI6IFwiV2lzaExpc3RJY29uLWJ1dHRvblRleHQtMWpJV3NcIixcblx0XCJ2dHJCb3R0b21cIjogXCJXaXNoTGlzdEljb24tdnRyQm90dG9tLTI1Q2V0XCIsXG5cdFwidnRyTWlkZGxlXCI6IFwiV2lzaExpc3RJY29uLXZ0ck1pZGRsZS01c0xqS1wiXG59OyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vV2lzaExpc3RJY29uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9XaXNoTGlzdEljb24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vV2lzaExpc3RJY29uLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgZ3JhcGhxbCwgZ3FsLCBjb21wb3NlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1dpc2hMaXN0SWNvbi5jc3MnO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyBIZWxwZXJcbmltcG9ydCB7IGdldHdpc2hMaXN0U3RhdHVzIH0gZnJvbSAnLi4vLi4vaGVscGVycy93aXNoTGlzdFN0YXR1cyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vSW1hZ2VzXG5pbXBvcnQgaGVhcnRJbWFnZSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvU2l0ZUljb25zL2hlYXJ0LnBuZyc7XG5pbXBvcnQgaGVhcnRJY29uRmlsbCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvU2l0ZUljb25zL2hlYXJ0RmlsLnBuZydcblxuLy8gUmVkdXggQWN0aW9uc1xuaW1wb3J0IHsgb3Blbldpc2hMaXN0TW9kYWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1dpc2hMaXN0L21vZGFsQWN0aW9ucyc7XG5pbXBvcnQgeyBvcGVuTG9naW5Nb2RhbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbW9kYWxBY3Rpb25zJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgV2lzaExpc3RJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGlzQ2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgICAgIGxpc3RJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnaWNvbidcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaWNvblNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaWNvbkFjdGlvbiA9IHRoaXMuaWNvbkFjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBpc0NoZWNrZWQsIGxpc3RJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGljb25TZWxlY3RlZDogaXNDaGVja2VkIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgd2lzaExpc3RNb2RhbFN0YXR1cywgd2lzaExpc3RSb29tSWQsIGlzQ2hlY2tlZCwgbGlzdElkIH0gPSBuZXh0UHJvcHM7XG4gICAgICAgIGNvbnN0IHsgaWNvblNlbGVjdGVkLCBjbGlja2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgY3VycmVudHdpc2hMaXN0U3RhdHVzID0gZmFsc2U7XG4gICAgICAgIC8vIFRyaWdnZXIgcmVxdWVzdCBvbiBNb2RhbCBhY3Rpb24gZG9uZS9jbG9zZVxuICAgICAgICBpZiAod2lzaExpc3RSb29tSWQgJiYgd2lzaExpc3RNb2RhbFN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIEdldCBDdXJyZW50IExpc3QncyBXaXNoIExpc3QgU3RhdHVzKCBUcnVlL0ZhbHNlIClcbiAgICAgICAgICAgIGN1cnJlbnR3aXNoTGlzdFN0YXR1cyA9IGF3YWl0IGdldHdpc2hMaXN0U3RhdHVzKGxpc3RJZCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGljb25TZWxlY3RlZDogY3VycmVudHdpc2hMaXN0U3RhdHVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE9uIHRoZSBmbG93IHByb2Nlc3NcbiAgICAgICAgICAgIGlmICghY2xpY2tlZCAmJiAhd2lzaExpc3RNb2RhbFN0YXR1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpY29uU2VsZWN0ZWQ6IGlzQ2hlY2tlZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGljb25BY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgaXNDaGVja2VkLCBsaXN0SWQsIGlzQXV0aGVudGljYXRlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBvcGVuTG9naW5Nb2RhbCwgb3Blbldpc2hMaXN0TW9kYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGlja2VkOiB0cnVlIH0pO1xuICAgICAgICAgICAgb3Blbldpc2hMaXN0TW9kYWwobGlzdElkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wZW5Mb2dpbk1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNDaGVja2VkLCBsaXN0SWQsIHR5cGUsIGhlYXJ0SWNvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBpY29uU2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlID09ICdpY29uJyAmJiA8ZGl2IGNsYXNzTmFtZT17Y3gocy5pY29uQ29udGFpbmVyLCBoZWFydEljb24sICAnaGVhcnRJY29uUnRsJyl9IG9uQ2xpY2s9e3RoaXMuaWNvbkFjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25TZWxlY3RlZCAmJiA8Rm9udEF3ZXNvbWUuRmFIZWFydCBjbGFzc05hbWU9e3Mud2lzaExpc3RJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNlbGVjdGVkICYmIDxpbWcgc3JjPXtoZWFydEljb25GaWxsfSBjbGFzc05hbWU9e3Mud2lzaExpc3RJY29ufSAgIGFsdD17J1dpc2hsaXN0J30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaWNvblNlbGVjdGVkICYmIDxGb250QXdlc29tZS5GYUhlYXJ0TyBjbGFzc05hbWU9e3Mud2lzaExpc3RJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpY29uU2VsZWN0ZWQgJiYgPGltZyBzcmM9e2hlYXJ0SW1hZ2V9IGNsYXNzTmFtZT17Y3gocy53aXNoTGlzdEljb24pfSAgYWx0PXsnV2lzaGxpc3QnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT0gJ2J1dHRvbicgJiYgPGRpdiBjbGFzc05hbWU9e3MuYnV0dG9uQ29udGFpbmVyfSBvbkNsaWNrPXt0aGlzLmljb25BY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2VsZWN0ZWQgJiYgPEZvbnRBd2Vzb21lLkZhSGVhcnQgY2xhc3NOYW1lPXtzLndpc2hMaXN0SWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaWNvblNlbGVjdGVkICYmIDxGb250QXdlc29tZS5GYUhlYXJ0TyBjbGFzc05hbWU9e3Mud2lzaExpc3RJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU2VsZWN0ZWQgJiYgPGltZyBzcmM9e2hlYXJ0SWNvbkZpbGx9IGNsYXNzTmFtZT17Y3gocy53aXNoTGlzdEljb24sIHMudnRyTWlkZGxlKX0gIGFsdD17J1dpc2hsaXN0J30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaWNvblNlbGVjdGVkICYmIDxpbWcgc3JjPXtoZWFydEltYWdlfSBjbGFzc05hbWU9e2N4KHMud2lzaExpc3RJY29uLCBzLnZ0ck1pZGRsZSl9IGFsdD17J1dpc2hsaXN0J30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3gocy5idXR0b25UZXh0LCBzLnZ0ckJvdHRvbSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblNlbGVjdGVkID8gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnNhdmVkfSAvPiA6IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy53aXNoTGlzdFNhdmV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIGlzQXV0aGVudGljYXRlZDogc3RhdGUucnVudGltZS5pc0F1dGhlbnRpY2F0ZWQsXG4gICAgd2lzaExpc3RNb2RhbFN0YXR1czogc3RhdGUubW9kYWxTdGF0dXMud2lzaExpc3RNb2RhbE9wZW4sXG4gICAgd2lzaExpc3RSb29tSWQ6IHN0YXRlLm1vZGFsU3RhdHVzLmxpc3RJZFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoID0ge1xuICAgIG9wZW5Mb2dpbk1vZGFsLFxuICAgIG9wZW5XaXNoTGlzdE1vZGFsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIHdpdGhTdHlsZXMocyksXG4gICAgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpLFxuICAgIGdyYXBocWwoZ3FsYFxuICAgICAgICBxdWVyeSBnZXRMaXN0aW5nRGF0YSgkbGlzdElkOiBTdHJpbmchLCAkcHJldmlldzogQm9vbGVhbikge1xuICAgICAgICAgIFVzZXJMaXN0aW5nIChsaXN0SWQ6ICRsaXN0SWQsIHByZXZpZXc6ICRwcmV2aWV3KSB7XG4gICAgICAgICAgICB3aXNoTGlzdFN0YXR1c1xuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgXG4gICAgYClcbikoV2lzaExpc3RJY29uKTtcblxuIiwiLy8gRmV0Y2ggcmVxdWVzdFxuaW1wb3J0IGZldGNoIGZyb20gJy4uL2NvcmUvZmV0Y2gnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0d2lzaExpc3RTdGF0dXMobGlzdElkKSB7XG4gICAgbGV0IHF1ZXJ5ID0gYHF1ZXJ5IGdldExpc3RpbmdEYXRhKCRsaXN0SWQ6IFN0cmluZyEsICRwcmV2aWV3OiBCb29sZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXJMaXN0aW5nIChsaXN0SWQ6ICRsaXN0SWQsIHByZXZpZXc6ICRwcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpc2hMaXN0U3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YDtcblxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgbGlzdElkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIGlmIChkYXRhLlVzZXJMaXN0aW5nICYmIGRhdGEuVXNlckxpc3Rpbmcud2lzaExpc3RTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBekdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUhBO0FBVUE7QUFDQTtBQUZBO0FBQ0E7QUFpR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBWkE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9