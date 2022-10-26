require("source-map-support").install();
exports.ids = ["reservation~trips"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Reservation/NoItem/NoItem.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.NoItem-space1-KBDRL {\n\tmargin-bottom: 6px !important;\n}\n.NoItem-space2-3uLkc {\n\tmargin-bottom: 12px !important;\n}\n.NoItem-space3-1yR16 {\n\tmargin-bottom: 18px !important;\n}\n.NoItem-space4-1YGTn {\n\tmargin-bottom: 24px !important;\n}\n.NoItem-space5-M2tGA {\n\tmargin-bottom: 30px !important;\n}\n.NoItem-space6-3kp_X {\n\tmargin-bottom: 36px !important;\n}\n.NoItem-space7-1X1XT {\n\tmargin-bottom: 42px !important;\n}\n.NoItem-spaceTop8-3rDsK {\n\tmargin-bottom: 48px !important;\n}\n.NoItem-spaceTop1-3Ub7J {\n\tmargin-top: 6px !important;\n}\n.NoItem-spaceTop2-1v686 {\n\tmargin-top: 12px !important;\n}\n.NoItem-spaceTop3-1-WXc {\n\tmargin-top: 18px !important;\n}\n.NoItem-spaceTop4-yvS-7 {\n\tmargin-top: 24px !important;\n}\n.NoItem-spaceTop5-hCnP5 {\n\tmargin-top: 30px !important;\n}\n.NoItem-spaceTop6-m9uYm {\n\tmargin-top: 36px !important;\n}\n.NoItem-spaceTop7-Ek6FN {\n\tmargin-top: 42px !important;\n}\n.NoItem-spaceTop8-3rDsK {\n\tmargin-top: 48px !important;\n}\n.NoItem-noMargin-3OMkY {\n\tmargin: 0px !important;\n}\n.NoItem-padding1-AuCKN {\n\tpadding-bottom: 6px !important;\n}\n.NoItem-padding2-3e_rO {\n\tpadding-bottom: 12px !important;\n}\n.NoItem-padding3-2jlj- {\n\tpadding-bottom: 18px !important;\n}\n.NoItem-padding4-3RBcs {\n\tpadding-bottom: 24px !important;\n}\n.NoItem-padding5-2keoN {\n\tpadding-bottom: 30px !important;\n}\n.NoItem-padding6-3Jlrc {\n\tpadding-bottom: 36px !important;\n}\n.NoItem-padding7-2R_I8 {\n\tpadding-bottom: 42px !important;\n}\n.NoItem-paddingTop1-13GVE {\n\tpadding-top: 6px !important;\n}\n.NoItem-paddingTop2-3Yy0h {\n\tpadding-top: 12px !important;\n}\n.NoItem-paddingTop3-3xMU0 {\n\tpadding-top: 18px !important;\n}\n.NoItem-paddingTop4-rfDXg {\n\tpadding-top: 24px !important;\n}\n.NoItem-paddingTop5-2QRUl {\n\tpadding-top: 30px !important;\n}\n.NoItem-paddingTop6-3RjG9 {\n\tpadding-top: 36px !important;\n}\n.NoItem-paddingTop7-1YQxP {\n\tpadding-top: 42px !important;\n}\n.NoItem-noPadding-20_zj {\n\tpadding: 0px !important;\n}\n.NoItem-textBold-1eBLu {\n\tfont-weight: 500 !important;\n}\n.NoItem-textBolder-3er3B {\n\tfont-weight: 700 !important;\n}\n.NoItem-textNormal-2UzAx {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.NoItem-textDarkBlue-30Kr- {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.NoItem-textLightBlue-3Ysg9 {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.NoItem-textLightSandleGreen-2tlnM {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.NoItem-textLightBrown-3sv5q {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.NoItem-textMediumMaroon-3lfms {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.NoItem-textBrown-ZGkNN {\n\tcolor: #B5DC4B !important;\n}\n.NoItem-textMaroon-2r_q0 {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.NoItem-textDarkBrown-H2KeG {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.NoItem-textMediumBrown-11jUz {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.NoItem-textSkyBlue-ibkvb {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.NoItem-textGray-2mrvx {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.NoItem-panelSpace-3-Rlp{\n  padding-right: 20px;\n}\n.NoItem-panelEmpty-3Y37Q{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tfont-size: 14px;\n\tline-height: 1.43;\n\tcolor: #484848;\n}\n.NoItem-nolistTitle-12EZO{\n    font-size: 16px;\n    font-weight: bold;\n    color: #484848;\n}\n.NoItem-noResults-2D1A2{\n  font-size: 14px;\n  font-weight: normal;\n  color: #484848;\n}\n.NoItem-textCenter-3fJn-{\n  text-align: center;\n}", "", {"version":3,"sources":["/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Reservation/NoItem/NoItem.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,6DAA6D;;EAE7D;;gFAE8E;;EAE9E,4BAA4B;EAC5B,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;EAC1B,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,mCAAmC;EACnC,sCAAsC;EACtC,4BAA4B;EAC5B,+BAA+B;EAC/B,kCAAkC;CACnC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,2BAA2B;CAC3B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,uBAAuB;CACvB;AACD;CACC,+BAA+B;CAC/B;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,gCAAgC;CAChC;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,6BAA6B;CAC7B;AACD;CACC,wBAAwB;CACxB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD,2BAA2B;AAC3B;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,0BAA0B;CAC1B;AACD;CACC,mCAAmC;CACnC;AACD;CACC,kCAAkC;CAClC;AACD;CACC,mCAAmC;CACnC;AACD;CACC,oCAAoC;CACpC;AACD;CACC,kCAAkC;CAClC;AACD;EACE,oBAAoB;CACrB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf;AACD;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;CAClB;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB","file":"NoItem.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: \"Circular\", Arial, Helvetica, sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1080px;\n  --max-container-width: 100%;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  --border-color: #dce0e0;\n  --background-color: #ffffff;\n  --btn-color: #484848;\n  --btn-primary-bg: #F7A31B;\n  --btn-primary-color: #ffffff;\n  --btn-primary-hover-bg: #E8A435;\n  --btn-primaryBorder-bg: #ffffff;\n  --btn-primaryBorder-color: #E8A435;\n  --btn-primaryBorder-hover-bg: #E8A435;\n  --btn-secondary-bg: #073687;\n  --btn-secondary-color: #ffffff;\n  --btn-secondary-hover-bg: #073687;\n}\n.space1 {\n\tmargin-bottom: 6px !important;\n}\n.space2 {\n\tmargin-bottom: 12px !important;\n}\n.space3 {\n\tmargin-bottom: 18px !important;\n}\n.space4 {\n\tmargin-bottom: 24px !important;\n}\n.space5 {\n\tmargin-bottom: 30px !important;\n}\n.space6 {\n\tmargin-bottom: 36px !important;\n}\n.space7 {\n\tmargin-bottom: 42px !important;\n}\n.spaceTop8 {\n\tmargin-bottom: 48px !important;\n}\n.spaceTop1 {\n\tmargin-top: 6px !important;\n}\n.spaceTop2 {\n\tmargin-top: 12px !important;\n}\n.spaceTop3 {\n\tmargin-top: 18px !important;\n}\n.spaceTop4 {\n\tmargin-top: 24px !important;\n}\n.spaceTop5 {\n\tmargin-top: 30px !important;\n}\n.spaceTop6 {\n\tmargin-top: 36px !important;\n}\n.spaceTop7 {\n\tmargin-top: 42px !important;\n}\n.spaceTop8 {\n\tmargin-top: 48px !important;\n}\n.noMargin {\n\tmargin: 0px !important;\n}\n.padding1 {\n\tpadding-bottom: 6px !important;\n}\n.padding2 {\n\tpadding-bottom: 12px !important;\n}\n.padding3 {\n\tpadding-bottom: 18px !important;\n}\n.padding4 {\n\tpadding-bottom: 24px !important;\n}\n.padding5 {\n\tpadding-bottom: 30px !important;\n}\n.padding6 {\n\tpadding-bottom: 36px !important;\n}\n.padding7 {\n\tpadding-bottom: 42px !important;\n}\n.paddingTop1 {\n\tpadding-top: 6px !important;\n}\n.paddingTop2 {\n\tpadding-top: 12px !important;\n}\n.paddingTop3 {\n\tpadding-top: 18px !important;\n}\n.paddingTop4 {\n\tpadding-top: 24px !important;\n}\n.paddingTop5 {\n\tpadding-top: 30px !important;\n}\n.paddingTop6 {\n\tpadding-top: 36px !important;\n}\n.paddingTop7 {\n\tpadding-top: 42px !important;\n}\n.noPadding {\n\tpadding: 0px !important;\n}\n.textBold {\n\tfont-weight: 500 !important;\n}\n.textBolder {\n\tfont-weight: 700 !important;\n}\n.textNormal {\n\tfont-weight: normal !important;\n}\n/*New Design Text Colors */\n.textDarkBlue {\n\tcolor: rgb(20, 39, 94) !important;\n}\n.textLightBlue {\n\tcolor: rgb(57, 87, 106) !important;\n}\n.textLightSandleGreen {\n\tcolor: rgb(76, 86, 41) !important;\n}\n.textLightBrown {\n\tcolor: rgb(115, 79, 33) !important;\n}\n.textMediumMaroon {\n\tcolor: rgb(87, 37, 51) !important;\n}\n.textBrown {\n\tcolor: #B5DC4B !important;\n}\n.textMaroon {\n\tcolor: rgb(155, 49, 67) !important;\n}\n.textDarkBrown {\n\tcolor: rgb(83, 18, 16) !important;\n}\n.textMediumBrown {\n\tcolor: rgb(142, 28, 10) !important;\n}\n.textSkyBlue {\n\tcolor: rgb(37, 117, 141) !important;\n}\n.textGray {\n\tcolor: rgb(77, 65, 51) !important;\n}\n.panelSpace{\n  padding-right: 20px;\n}\n.panelEmpty{\n\tborder-radius: 0;\n\twidth: 100%;\n\tdisplay: block;\n\tfont-size: 14px;\n\tline-height: 1.43;\n\tcolor: #484848;\n}\n.nolistTitle{\n    font-size: 16px;\n    font-weight: bold;\n    color: #484848;\n}\n.noResults{\n  font-size: 14px;\n  font-weight: normal;\n  color: #484848;\n}\n.textCenter{\n  text-align: center;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"space1": "NoItem-space1-KBDRL",
	"space2": "NoItem-space2-3uLkc",
	"space3": "NoItem-space3-1yR16",
	"space4": "NoItem-space4-1YGTn",
	"space5": "NoItem-space5-M2tGA",
	"space6": "NoItem-space6-3kp_X",
	"space7": "NoItem-space7-1X1XT",
	"spaceTop8": "NoItem-spaceTop8-3rDsK",
	"spaceTop1": "NoItem-spaceTop1-3Ub7J",
	"spaceTop2": "NoItem-spaceTop2-1v686",
	"spaceTop3": "NoItem-spaceTop3-1-WXc",
	"spaceTop4": "NoItem-spaceTop4-yvS-7",
	"spaceTop5": "NoItem-spaceTop5-hCnP5",
	"spaceTop6": "NoItem-spaceTop6-m9uYm",
	"spaceTop7": "NoItem-spaceTop7-Ek6FN",
	"noMargin": "NoItem-noMargin-3OMkY",
	"padding1": "NoItem-padding1-AuCKN",
	"padding2": "NoItem-padding2-3e_rO",
	"padding3": "NoItem-padding3-2jlj-",
	"padding4": "NoItem-padding4-3RBcs",
	"padding5": "NoItem-padding5-2keoN",
	"padding6": "NoItem-padding6-3Jlrc",
	"padding7": "NoItem-padding7-2R_I8",
	"paddingTop1": "NoItem-paddingTop1-13GVE",
	"paddingTop2": "NoItem-paddingTop2-3Yy0h",
	"paddingTop3": "NoItem-paddingTop3-3xMU0",
	"paddingTop4": "NoItem-paddingTop4-rfDXg",
	"paddingTop5": "NoItem-paddingTop5-2QRUl",
	"paddingTop6": "NoItem-paddingTop6-3RjG9",
	"paddingTop7": "NoItem-paddingTop7-1YQxP",
	"noPadding": "NoItem-noPadding-20_zj",
	"textBold": "NoItem-textBold-1eBLu",
	"textBolder": "NoItem-textBolder-3er3B",
	"textNormal": "NoItem-textNormal-2UzAx",
	"textDarkBlue": "NoItem-textDarkBlue-30Kr-",
	"textLightBlue": "NoItem-textLightBlue-3Ysg9",
	"textLightSandleGreen": "NoItem-textLightSandleGreen-2tlnM",
	"textLightBrown": "NoItem-textLightBrown-3sv5q",
	"textMediumMaroon": "NoItem-textMediumMaroon-3lfms",
	"textBrown": "NoItem-textBrown-ZGkNN",
	"textMaroon": "NoItem-textMaroon-2r_q0",
	"textDarkBrown": "NoItem-textDarkBrown-H2KeG",
	"textMediumBrown": "NoItem-textMediumBrown-11jUz",
	"textSkyBlue": "NoItem-textSkyBlue-ibkvb",
	"textGray": "NoItem-textGray-2mrvx",
	"panelSpace": "NoItem-panelSpace-3-Rlp",
	"panelEmpty": "NoItem-panelEmpty-3Y37Q",
	"nolistTitle": "NoItem-nolistTitle-12EZO",
	"noResults": "NoItem-noResults-2D1A2",
	"textCenter": "NoItem-textCenter-3fJn-"
};

/***/ }),

/***/ "./src/actions/Reservation/updateReservation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReservation", function() { return updateReservation; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");



const getAllReservationQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getAllReservation ($userType: String){
    getAllReservation(userType: $userType){
      reservationData {
        id
        reservationState
      }
    }
  }
`;
function updateReservation(reservationId, actionType, userType, threadId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          mutation updateReservation(
            $reservationId: Int!, 
            $actionType: String!,
            $threadId: Int
          ){
              updateReservation(
                reservationId: $reservationId,
                actionType: $actionType,
                threadId: $threadId
              ) {
                  status
              }
          }
      `;
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          reservationId,
          actionType,
          threadId
        },
        refetchQueries: [{
          query: getAllReservationQuery,
          variables: {
            userType
          }
        }]
      });

      if (data && data.updateReservation && data.updateReservation.status === '200') {
        if (userType == 'host') {
          _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/reservation/current');
        } else {
          _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push('/trips/current');
        }

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_SUCCESS"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_RESERVATION_STATE_ERROR"],
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

/***/ "./src/actions/message/sendMessageAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageAction", function() { return sendMessageAction; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _Reservation_updateReservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/actions/Reservation/updateReservation.js");



const ThreadItemsQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query getThread($threadType: String, $threadId: Int){
  getThread(threadType: $threadType, threadId: $threadId) {
    id
    listId
    guest
    host
    listData {
      title
      city
      state
      country
      listingData {
        basePrice
        cleaningPrice
        currency
        monthlyDiscount
        weeklyDiscount
      }
    }
    threadItemForType {
      id
      threadId
      reservationId
      content
      sentBy
      type
      startDate
      endDate
      personCapacity
      createdAt
      cancelData {
        id
        reservationId
        cancellationPolicy
        guestServiceFee
        hostServiceFee
        refundToGuest
        payoutToHost
        total 
        currency
      }
      reservation {
        id
        listId
        hostId
        guestId
        checkIn
        checkOut
        basePrice
        cleaningPrice
        total
        currency
        guests
        confirmationCode
        guestServiceFee
        discount
        discountType
        createdAt
        updatedAt
        hostServiceFee
        bookingSpecialPricing {
          id
          reservationId
          blockedDates
          isSpecialPrice
        }
      }
    }
    threadItems {
      id
      threadId
      reservationId
      content
      sentBy
      type
      startDate
      endDate
      createdAt
    }
    threadItemsCount
    guestProfile {
      profileId
      displayName
      firstName
      location
      reviewsCount
      userVerification {
        id
        isEmailConfirmed
        isFacebookConnected
        isGoogleConnected
        isIdVerification
      }
    }
    guestUserData {
      email
      userBanStatus
    }
    hostProfile {
      profileId
      displayName
      firstName
      picture
      location
      reviewsCount
      userVerification {
        id
        isEmailConfirmed
        isFacebookConnected
        isGoogleConnected
        isIdVerification
      }
    }
    hostUserData {
      email
    }
    status
  }
}
`;
function sendMessageAction(threadId, threadType, content, type, startDate, endDate, personCapacity, reservationId, receiverName, senderName, receiverType, receiverEmail) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_START"]
    });

    try {
      let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
          mutation sendMessage(
          $threadId: Int!, 
          $content: String, 
          $type: String,
          $startDate: String,
          $endDate: String,
          $personCapacity: Int,
          $reservationId: Int
          ) {
            sendMessage(
            threadId: $threadId, 
            content: $content, 
            type: $type,
            startDate: $startDate,
            endDate: $endDate,
            personCapacity: $personCapacity,
            reservationId: $reservationId
            ){
              id
              sentBy
              content
              type
              reservationId
              startDate
              endDate
              personCapacity
              createdAt
              status
            }
          }
      `; // Send Message

      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          threadId,
          content,
          type,
          startDate,
          endDate,
          personCapacity,
          reservationId
        },
        refetchQueries: [{
          query: ThreadItemsQuery,
          variables: {
            threadId,
            threadType
          }
        }]
      });

      if (data && data.sendMessage && data.sendMessage.status != 'userbanned') {
        if (reservationId != null && reservationId != undefined) {
          dispatch(Object(_Reservation_updateReservation__WEBPACK_IMPORTED_MODULE_2__["updateReservation"])(reservationId, type, threadType, threadId));
        }

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_SUCCESS"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE_ERROR"],
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

/***/ "./src/components/CurrencyConverter/CurrencyConverter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/helpers/currencyConvertion.js");
/* harmony import */ var _helpers_formatLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/helpers/formatLocale.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/CurrencyConverter/CurrencyConverter.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Translation

 // Helper




class CurrencyConverter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      base: null,
      rates: null
    };
  }

  componentWillMount() {
    const {
      base,
      rates
    } = this.props;

    if (base != undefined && rates != undefined) {
      this.setState({
        base: base,
        rates: rates
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      base,
      rates
    } = nextProps;

    if (base != undefined && rates != undefined) {
      this.setState({
        base: base,
        rates: rates
      });
    }
  }

  render() {
    const {
      from,
      amount,
      superSymbol,
      className,
      toCurrency,
      locale,
      isCurrency
    } = this.props;
    const {
      base,
      rates
    } = this.state;
    let targetCurrency;
    let convertedAmount = amount;
    let fromCurrency = from || base;

    if (rates != null) {
      convertedAmount = Object(_helpers_currencyConvertion__WEBPACK_IMPORTED_MODULE_4__["convert"])(base, rates, amount, fromCurrency, toCurrency);
    }

    if (toCurrency) {
      targetCurrency = toCurrency;
    } else {
      targetCurrency = base;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, Object(_helpers_formatLocale__WEBPACK_IMPORTED_MODULE_5__["isRTL"])(locale) ? new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      currencyDisplay: "symbol"
    }).format(convertedAmount) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedNumber"], {
      value: convertedAmount,
      style: "currency",
      currency: targetCurrency,
      minimumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: convertedAmount % 1 === 0 ? 0 : 2,
      currencyDisplay: "symbol",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }), superSymbol && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, targetCurrency));
  }

}

_defineProperty(CurrencyConverter, "propTypes", {
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  superSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toCurrency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(CurrencyConverter, "defaultProps", {
  amount: 0,
  superSymbol: false
});

const mapState = state => ({
  base: state.currency.base,
  toCurrency: state.currency.to,
  rates: state.currency.rates,
  locale: state.intl.locale
});

const mapDispatch = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatch)(CurrencyConverter)));

/***/ }),

/***/ "./src/components/Reservation/NoItem/NoItem.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Reservation/NoItem/NoItem.css");
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

/***/ "./src/components/Reservation/NoItem/NoItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NoItem_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/Reservation/NoItem/NoItem.css");
/* harmony import */ var _NoItem_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NoItem_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/commonStyle.css");
/* harmony import */ var _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/core/history.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/locale/messages.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Reservation/NoItem/NoItem.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Style





 // Internal Helpers

 // Locale



class NoItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  handleClick() {
    _core_history__WEBPACK_IMPORTED_MODULE_8__["default"].push('/s');
  }

  render() {
    const {
      userType,
      type
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, userType === 'host' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 34
      }
    }, type == 'current' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.noResults,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 35
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noUpcomingReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }))), type != 'current' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.noResults,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 35
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noPreviousReservation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    })))), userType === 'guest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.textCenter, _NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop4),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 35
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.nolistTitle, _NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.space1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, type == 'current' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noUpcomingTrips, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 43
      }
    }))), type != 'current' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noPreviousTrips, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 43
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.noResults),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noTripTitle2, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.spaceTop2, _NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a.space1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnPrimary, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a.btnLarge),
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_9__["default"].noTripsButton, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }))))));
  }

}

_defineProperty(NoItem, "propTypes", {
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_NoItem_css__WEBPACK_IMPORTED_MODULE_6___default.a, _components_commonStyle_css__WEBPACK_IMPORTED_MODULE_7___default.a)(NoItem));

/***/ }),

/***/ "./src/components/Reservation/Reservation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Reservation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Reservation/Reservation.css");
/* harmony import */ var _Reservation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Reservation_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/helpers/queryEncryption.js");
/* harmony import */ var _ReservationItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Reservation/ReservationItem.js");
/* harmony import */ var _NoItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/Reservation/NoItem/NoItem.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Reservation/Reservation.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // Components




class Reservation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      data,
      userType
    } = this.props;

    if (data.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        userType: userType,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 14
        }
      });
    }

    let title;

    if (userType === 'host') {
      title = "Your Reservation";
    } else {
      title = "Your Trips";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }, data && data.map((item, index) => {
      if (item.guestData && item.hostData && item.listData && item.messageData) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReservationItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: index,
          userType: userType,
          threadId: item.messageData.id,
          profileId: userType === 'host' ? item.guestData.profileId : item.hostData.profileId,
          displayName: userType === 'host' ? item.guestData.displayName : item.hostData.displayName,
          picture: userType === 'host' ? item.guestData.picture : item.hostData.picture,
          reservationId: item.id,
          reservationState: item.reservationState,
          checkIn: item.checkIn,
          checkOut: item.checkOut,
          guests: item.guests,
          guestServiceFee: item.guestServiceFee,
          hostServiceFee: item.hostServiceFee,
          total: item.total,
          currency: item.currency,
          listId: item.listId,
          title: item.listData.title,
          street: item.listData.street,
          city: item.listData.city,
          state: item.listData.state,
          country: item.listData.country,
          zipcode: item.listData.zipcode,
          phoneNumber: userType === 'host' ? Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_6__["decode"])(item.guestData.phoneNumber) : Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_6__["decode"])(item.hostData.phoneNumber),
          email: userType === 'host' ? Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_6__["decode"])(item.guestData.userData.email) : Object(_helpers_queryEncryption__WEBPACK_IMPORTED_MODULE_6__["decode"])(item.hostData.userData.email),
          createdAt: item.createdAt,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 26
          }
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReservationItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          noList: true,
          key: index,
          userType: userType,
          threadId: null,
          profileId: null,
          displayName: null,
          picture: null,
          reservationId: item.id,
          reservationState: item.reservationState,
          checkIn: item.checkIn,
          checkOut: item.checkOut,
          guests: item.guests,
          guestServiceFee: item.guestServiceFee,
          hostServiceFee: item.hostServiceFee,
          total: item.total,
          currency: item.currency,
          listId: item.listId,
          title: null,
          street: null,
          city: null,
          state: null,
          country: null,
          zipcode: null,
          phoneNumber: null,
          email: null,
          createdAt: item.createdAt,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 26
          }
        });
      }
    }))));
  }

}

_defineProperty(Reservation, "propTypes", {
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guestId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    messageData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }),
    listData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      street: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      country: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      zipcode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    hostData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      phoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }),
    guestData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      phoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }))
});

_defineProperty(Reservation, "defaultProps", {
  data: []
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_5___default.a)(Reservation)));

/***/ }),

/***/ "./src/components/Reservation/ReservationItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Reservation_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/Reservation/Reservation.css");
/* harmony import */ var _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Reservation_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/Link/Link.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/Avatar/Avatar.js");
/* harmony import */ var _CurrencyConverter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/CurrencyConverter/CurrencyConverter.js");
/* harmony import */ var _actions_message_sendMessageAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/actions/message/sendMessageAction.js");
/* harmony import */ var _locale_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/locale/messages.js");
/* harmony import */ var _helpers_dateRange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/helpers/dateRange.js");
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Reservation/ReservationItem.js";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Redux





 // Component



 // Redux action

 // Locale

 //Helper



class ReservationItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  sendMessage(type) {
    const {
      sendMessageAction,
      threadId,
      userType,
      checkIn,
      checkOut,
      guests,
      reservationId
    } = this.props;
    sendMessageAction(threadId, userType, null, type, checkIn, checkOut, guests, reservationId);
  }

  reservationStyle() {
    const {
      reservationState
    } = this.props;
    let style, label;

    switch (reservationState) {
      case 'pending':
        label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].messageStatus5, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }
        }));
        style = 'primary';
        break;

      case 'expired':
        label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].messageStatus9, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 17
          }
        }));
        style = 'warning';
        break;

      case 'approved':
        label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].messageStatus4, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }
        }));
        style = 'success';
        break;

      case 'declined':
        label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].messageStatus3, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }
        }));
        style = 'danger';
        break;

      case 'completed':
        label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].panelHeader2, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 17
          }
        }));
        style = 'success';
        break;

      case 'cancelled':
        label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].messageStatus11, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }
        }));
        style = 'danger';
        break;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.labelText,
      bsStyle: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 12
      }
    }, label);
  }

  render() {
    const {
      threadId,
      userType,
      reservationId,
      reservationState,
      checkIn,
      checkOut,
      createdAt
    } = this.props;
    const {
      listId,
      title,
      street,
      city,
      state,
      country,
      zipcode
    } = this.props;
    const {
      profileId,
      displayName,
      picture,
      phoneNumber,
      email
    } = this.props;
    const {
      guestServiceFee,
      hostServiceFee,
      total,
      currency
    } = this.props;
    const {
      noList
    } = this.props;
    let isValue;

    if (reservationState == 'completed' || reservationState == 'approved') {
      isValue = '#5cb85c';
    } else if (reservationState == 'expired') {
      isValue = '#f0ad4e';
    } else if (reservationState == 'pending') {
      isValue = '#007bff';
    } else if (reservationState == 'declined' || reservationState == ' cancelled') {
      isValue = '#d9534f';
    }

    let checkInDate = checkIn ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkIn).format('Do MMM - ') : '';
    let checkOutDate = checkOut ? moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut).format('Do MMM, YYYY') : '';
    let createdDate = createdAt ? moment__WEBPACK_IMPORTED_MODULE_2___default()(createdAt).format('Do MMM, YYYY') : '';
    let subTotal = 0;
    let formattedCheckout = moment__WEBPACK_IMPORTED_MODULE_2___default()(checkOut);
    const {
      nights,
      interval,
      today
    } = Object(_helpers_dateRange__WEBPACK_IMPORTED_MODULE_14__["getDateRanges"])({
      checkIn,
      checkOut,
      country
    });
    let enableCancel = false,
        enableIternary = false;

    if (reservationState === 'approved') {
      enableIternary = true;
    } //(-interval) < (nights - 1) Hide if the (current date) is equal or greater than the (one day before checkout date)


    if (reservationState === 'approved' && formattedCheckout > today && -interval < nights - 1) {
      enableCancel = true;
    }

    if (userType === 'host') {
      subTotal = total - hostServiceFee;
    } else {
      subTotal = total + guestServiceFee;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.positionRelative,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCell, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.borderLine, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.dateSectionWidth, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.dateSection, 'reservationLine'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('hidden-xs hidden-sm'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.noMargin, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.dateFontNew, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.dateFontMargin, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.fontWeight),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, createdDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.circle, 'reservartioARCircle'),
      style: {
        borderColor: isValue
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.positionRelative, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop3),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCell, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.mainSection, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.space2, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.afterSection, 'reservationAfterSection'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.sectionTitleLight, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCell, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.addressWidth, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.responsiveDisplay, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabScreenresolution),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, !noList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 36
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/rooms/" + listId,
      target: '_blank',
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.linkTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 27
      }
    }, " ", title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 111
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 23
      }
    }, checkInDate, checkOutDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 63
      }
    }), noList && userType === 'guest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 59
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].noList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 93
      }
    })), " "), noList && userType === 'host' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 58
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].notexist, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 92
      }
    })), " "), !noList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 36
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 27
      }
    }, street), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 49
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 27
      }
    }, city + (city ? ', ' : ''), state + (state ? ', ' : ''), country + (country ? ', ' : ''), zipcode, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.sectionTitleLight, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.spaceTop1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 23
      }
    }, this.reservationStyle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCell, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.logoWidth, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.alignCenter, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.responsiveDisplay, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.responsiveAvatarSection, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabAvatarSection, 'responsiveAvatarSectionAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.mediaContainer, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.mediaWidth, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.responsiveAvatarImg, 'responsiveAvatarImgAR'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      source: picture,
      height: 50,
      width: 50,
      title: displayName,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileAvatar, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.profileAvatarLink),
      withLink: noList ? false : true,
      profileId: profileId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/users/show/" + profileId,
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.sectionTitleLight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 23
      }
    }, displayName), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 114
      }
    }), reservationState && (reservationState === 'approved' || reservationState === 'completed') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.listLayout, 'listLayoutArbic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 118
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 27
      }
    }, phoneNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.textWordBreak,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 27
      }
    }, email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.displayTableCell, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.responsiveDisplay, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabPriceSection),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.space1, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.fontWeight, _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.dateFont),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyConverter__WEBPACK_IMPORTED_MODULE_11__["default"], {
      amount: subTotal,
      className: _Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.bookItPrice,
      from: currency,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a.listLayout, 'listLayoutArbic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 23
      }
    }, !noList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 38
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/message/" + threadId + "/" + userType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 42
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].messageHistroy, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 94
      }
    })))), noList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].contactSupport, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 63
      }
    })))), !noList && userType === 'guest' && enableIternary && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 80
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/users/trips/itinerary/" + reservationId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 84
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].viewItinerary, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 138
      }
    })))), !noList && userType === 'guest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 62
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/users/trips/receipt/" + reservationId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 66
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].viewReceipt, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 117
      }
    })))), !noList && userType === 'host' && (reservationState === 'approved' || reservationState === 'completed') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 134
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/users/trips/receipt/" + reservationId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 138
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].viewReceipt, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 189
      }
    })))), !noList && userType === 'host' && reservationState === 'pending' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 95
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: () => this.sendMessage('approved'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].approve, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 31
      }
    })))), !noList && userType === 'host' && reservationState === 'pending' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 95
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: () => this.sendMessage('declined'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].decline, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 31
      }
    })))), !noList && enableCancel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 54
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      to: "/cancel/" + reservationId + "/" + userType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 59
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, _locale_messages__WEBPACK_IMPORTED_MODULE_13__["default"].cancel, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 114
      }
    })))))))))))));
  }

}

_defineProperty(ReservationItem, "propTypes", {
  noList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  userType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  threadId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reservationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reservationState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  guests: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  street: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  country: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  zipcode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  profileId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  picture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  guestServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  hostServiceFee: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  sendMessageAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  phoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  formatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

_defineProperty(ReservationItem, "defaultProps", {
  noList: false,
  checkIn: null,
  checkOut: null
});

const mapState = state => ({});

const mapDispatch = {
  sendMessageAction: _actions_message_sendMessageAction__WEBPACK_IMPORTED_MODULE_12__["sendMessageAction"]
};
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_Reservation_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapState, mapDispatch)(ReservationItem)));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3Jlc2VydmF0aW9ufnRyaXBzLmpzIiwic291cmNlcyI6WyIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9SZXNlcnZhdGlvbi9Ob0l0ZW0vTm9JdGVtLmNzcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL1Jlc2VydmF0aW9uL3VwZGF0ZVJlc2VydmF0aW9uLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvbWVzc2FnZS9zZW5kTWVzc2FnZUFjdGlvbi5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5Q29udmVydGVyL0N1cnJlbmN5Q29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Jlc2VydmF0aW9uL05vSXRlbS9Ob0l0ZW0uY3NzP2MzODAiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9SZXNlcnZhdGlvbi9Ob0l0ZW0vTm9JdGVtLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvUmVzZXJ2YXRpb24vUmVzZXJ2YXRpb24uanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9SZXNlcnZhdGlvbi9SZXNlcnZhdGlvbkl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogXFxcIkNpcmN1bGFyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTA4MHB4O1xcbiAgLS1tYXgtY29udGFpbmVyLXdpZHRoOiAxMDAlO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC0tYm9yZGVyLWNvbG9yOiAjZGNlMGUwO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tY29sb3I6ICM0ODQ4NDg7XFxuICAtLWJ0bi1wcmltYXJ5LWJnOiAjRjdBMzFCO1xcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnktaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWJnOiAjZmZmZmZmO1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1jb2xvcjogI0U4QTQzNTtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItaG92ZXItYmc6ICNFOEE0MzU7XFxuICAtLWJ0bi1zZWNvbmRhcnktYmc6ICMwNzM2ODc7XFxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1zZWNvbmRhcnktaG92ZXItYmc6ICMwNzM2ODc7XFxufVxcbi5Ob0l0ZW0tc3BhY2UxLUtCRFJMIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZTItM3VMa2Mge1xcblxcdG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZTMtMXlSMTYge1xcblxcdG1hcmdpbi1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZTQtMVlHVG4ge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZTUtTTJ0R0Ege1xcblxcdG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZTYtM2twX1gge1xcblxcdG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZTctMVgxWFQge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZVRvcDgtM3JEc0sge1xcblxcdG1hcmdpbi1ib3R0b206IDQ4cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1zcGFjZVRvcDEtM1ViN0oge1xcblxcdG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wMi0xdjY4NiB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wMy0xLVdYYyB7XFxuXFx0bWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wNC15dlMtNyB7XFxuXFx0bWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wNS1oQ25QNSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wNi1tOXVZbSB7XFxuXFx0bWFyZ2luLXRvcDogMzZweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wNy1FazZGTiB7XFxuXFx0bWFyZ2luLXRvcDogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXNwYWNlVG9wOC0zckRzSyB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLW5vTWFyZ2luLTNPTWtZIHtcXG5cXHRtYXJnaW46IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXBhZGRpbmcxLUF1Q0tOIHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZzItM2Vfck8ge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZzMtMmpsai0ge1xcblxcdHBhZGRpbmctYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZzQtM1JCY3Mge1xcblxcdHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZzUtMmtlb04ge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZzYtM0pscmMge1xcblxcdHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZzctMlJfSTgge1xcblxcdHBhZGRpbmctYm90dG9tOiA0MnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFkZGluZ1RvcDEtMTNHVkUge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1wYWRkaW5nVG9wMi0zWXkwaCB7XFxuXFx0cGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1wYWRkaW5nVG9wMy0zeE1VMCB7XFxuXFx0cGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1wYWRkaW5nVG9wNC1yZkRYZyB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1wYWRkaW5nVG9wNS0yUVJVbCB7XFxuXFx0cGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1wYWRkaW5nVG9wNi0zUmpHOSB7XFxuXFx0cGFkZGluZy10b3A6IDM2cHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1wYWRkaW5nVG9wNy0xWVF4UCB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS1ub1BhZGRpbmctMjBfemoge1xcblxcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXRleHRCb2xkLTFlQkx1IHtcXG5cXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tdGV4dEJvbGRlci0zZXIzQiB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXRleHROb3JtYWwtMlV6QXgge1xcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuLypOZXcgRGVzaWduIFRleHQgQ29sb3JzICovXFxuLk5vSXRlbS10ZXh0RGFya0JsdWUtMzBLci0ge1xcblxcdGNvbG9yOiByZ2IoMjAsIDM5LCA5NCkgIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS10ZXh0TGlnaHRCbHVlLTNZc2c5IHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXRleHRMaWdodFNhbmRsZUdyZWVuLTJ0bG5NIHtcXG5cXHRjb2xvcjogcmdiKDc2LCA4NiwgNDEpICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tdGV4dExpZ2h0QnJvd24tM3N2NXEge1xcblxcdGNvbG9yOiByZ2IoMTE1LCA3OSwgMzMpICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tdGV4dE1lZGl1bU1hcm9vbi0zbGZtcyB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXRleHRCcm93bi1aR2tOTiB7XFxuXFx0Y29sb3I6ICNCNURDNEIgIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS10ZXh0TWFyb29uLTJyX3EwIHtcXG5cXHRjb2xvcjogcmdiKDE1NSwgNDksIDY3KSAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXRleHREYXJrQnJvd24tSDJLZUcge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLk5vSXRlbS10ZXh0TWVkaXVtQnJvd24tMTFqVXoge1xcblxcdGNvbG9yOiByZ2IoMTQyLCAyOCwgMTApICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tdGV4dFNreUJsdWUtaWJrdmIge1xcblxcdGNvbG9yOiByZ2IoMzcsIDExNywgMTQxKSAhaW1wb3J0YW50O1xcbn1cXG4uTm9JdGVtLXRleHRHcmF5LTJtcnZ4IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5Ob0l0ZW0tcGFuZWxTcGFjZS0zLVJscHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbi5Ob0l0ZW0tcGFuZWxFbXB0eS0zWTM3UXtcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRsaW5lLWhlaWdodDogMS40MztcXG5cXHRjb2xvcjogIzQ4NDg0ODtcXG59XFxuLk5vSXRlbS1ub2xpc3RUaXRsZS0xMkVaT3tcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5Ob0l0ZW0tbm9SZXN1bHRzLTJEMUEye1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uTm9JdGVtLXRleHRDZW50ZXItM2ZKbi17XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9SZXNlcnZhdGlvbi9Ob0l0ZW0vTm9JdGVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLDZEQUE2RDs7RUFFN0Q7O2dGQUU4RTs7RUFFOUUsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtDQUFrQztDQUNuQztBQUNEO0NBQ0MsOEJBQThCO0NBQzlCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsK0JBQStCO0NBQy9CO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw0QkFBNEI7Q0FDNUI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyx1QkFBdUI7Q0FDdkI7QUFDRDtDQUNDLCtCQUErQjtDQUMvQjtBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsZ0NBQWdDO0NBQ2hDO0FBQ0Q7Q0FDQyxnQ0FBZ0M7Q0FDaEM7QUFDRDtDQUNDLGdDQUFnQztDQUNoQztBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyw2QkFBNkI7Q0FDN0I7QUFDRDtDQUNDLDZCQUE2QjtDQUM3QjtBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCO0FBQ0Q7Q0FDQyx3QkFBd0I7Q0FDeEI7QUFDRDtDQUNDLDRCQUE0QjtDQUM1QjtBQUNEO0NBQ0MsNEJBQTRCO0NBQzVCO0FBQ0Q7Q0FDQywrQkFBK0I7Q0FDL0I7QUFDRCwyQkFBMkI7QUFDM0I7Q0FDQyxrQ0FBa0M7Q0FDbEM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUNEO0NBQ0Msa0NBQWtDO0NBQ2xDO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCO0FBQ0Q7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBQ0Q7Q0FDQyxvQ0FBb0M7Q0FDcEM7QUFDRDtDQUNDLGtDQUFrQztDQUNsQztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiTm9JdGVtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6IFxcXCJDaXJjdWxhclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwODBweDtcXG4gIC0tbWF4LWNvbnRhaW5lci13aWR0aDogMTAwJTtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuICAtLWJvcmRlci1jb2xvcjogI2RjZTBlMDtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tYnRuLWNvbG9yOiAjNDg0ODQ4O1xcbiAgLS1idG4tcHJpbWFyeS1iZzogI0Y3QTMxQjtcXG4gIC0tYnRuLXByaW1hcnktY29sb3I6ICNmZmZmZmY7XFxuICAtLWJ0bi1wcmltYXJ5LWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tcHJpbWFyeUJvcmRlci1iZzogI2ZmZmZmZjtcXG4gIC0tYnRuLXByaW1hcnlCb3JkZXItY29sb3I6ICNFOEE0MzU7XFxuICAtLWJ0bi1wcmltYXJ5Qm9yZGVyLWhvdmVyLWJnOiAjRThBNDM1O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiAjMDczNjg3O1xcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1idG4tc2Vjb25kYXJ5LWhvdmVyLWJnOiAjMDczNjg3O1xcbn1cXG4uc3BhY2UxIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2UzIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTQge1xcblxcdG1hcmdpbi1ib3R0b206IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlNSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2U2IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZTcge1xcblxcdG1hcmdpbi1ib3R0b206IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AxIHtcXG5cXHRtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wMiB7XFxuXFx0bWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3AzIHtcXG5cXHRtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDQge1xcblxcdG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wNSB7XFxuXFx0bWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4uc3BhY2VUb3A2IHtcXG5cXHRtYXJnaW4tdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5zcGFjZVRvcDcge1xcblxcdG1hcmdpbi10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLnNwYWNlVG9wOCB7XFxuXFx0bWFyZ2luLXRvcDogNDhweCAhaW1wb3J0YW50O1xcbn1cXG4ubm9NYXJnaW4ge1xcblxcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMSB7XFxuXFx0cGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzIge1xcblxcdHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nMyB7XFxuXFx0cGFkZGluZy1ib3R0b206IDE4cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc0IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZzUge1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDM2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmc3IHtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNDJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDEge1xcblxcdHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3AyIHtcXG5cXHRwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDMge1xcblxcdHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNCB7XFxuXFx0cGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcXG59XFxuLnBhZGRpbmdUb3A1IHtcXG5cXHRwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG4ucGFkZGluZ1RvcDYge1xcblxcdHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XFxufVxcbi5wYWRkaW5nVG9wNyB7XFxuXFx0cGFkZGluZy10b3A6IDQycHggIWltcG9ydGFudDtcXG59XFxuLm5vUGFkZGluZyB7XFxuXFx0cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0Qm9sZCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJvbGRlciB7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE5vcm1hbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG4vKk5ldyBEZXNpZ24gVGV4dCBDb2xvcnMgKi9cXG4udGV4dERhcmtCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDIwLCAzOSwgOTQpICFpbXBvcnRhbnQ7XFxufVxcbi50ZXh0TGlnaHRCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDU3LCA4NywgMTA2KSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dExpZ2h0U2FuZGxlR3JlZW4ge1xcblxcdGNvbG9yOiByZ2IoNzYsIDg2LCA0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRMaWdodEJyb3duIHtcXG5cXHRjb2xvcjogcmdiKDExNSwgNzksIDMzKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1lZGl1bU1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYig4NywgMzcsIDUxKSAhaW1wb3J0YW50O1xcbn1cXG4udGV4dEJyb3duIHtcXG5cXHRjb2xvcjogI0I1REM0QiAhaW1wb3J0YW50O1xcbn1cXG4udGV4dE1hcm9vbiB7XFxuXFx0Y29sb3I6IHJnYigxNTUsIDQ5LCA2NykgIWltcG9ydGFudDtcXG59XFxuLnRleHREYXJrQnJvd24ge1xcblxcdGNvbG9yOiByZ2IoODMsIDE4LCAxNikgIWltcG9ydGFudDtcXG59XFxuLnRleHRNZWRpdW1Ccm93biB7XFxuXFx0Y29sb3I6IHJnYigxNDIsIDI4LCAxMCkgIWltcG9ydGFudDtcXG59XFxuLnRleHRTa3lCbHVlIHtcXG5cXHRjb2xvcjogcmdiKDM3LCAxMTcsIDE0MSkgIWltcG9ydGFudDtcXG59XFxuLnRleHRHcmF5IHtcXG5cXHRjb2xvcjogcmdiKDc3LCA2NSwgNTEpICFpbXBvcnRhbnQ7XFxufVxcbi5wYW5lbFNwYWNle1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuLnBhbmVsRW1wdHl7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDM7XFxuXFx0Y29sb3I6ICM0ODQ4NDg7XFxufVxcbi5ub2xpc3RUaXRsZXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5ub1Jlc3VsdHN7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxufVxcbi50ZXh0Q2VudGVye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3BhY2UxXCI6IFwiTm9JdGVtLXNwYWNlMS1LQkRSTFwiLFxuXHRcInNwYWNlMlwiOiBcIk5vSXRlbS1zcGFjZTItM3VMa2NcIixcblx0XCJzcGFjZTNcIjogXCJOb0l0ZW0tc3BhY2UzLTF5UjE2XCIsXG5cdFwic3BhY2U0XCI6IFwiTm9JdGVtLXNwYWNlNC0xWUdUblwiLFxuXHRcInNwYWNlNVwiOiBcIk5vSXRlbS1zcGFjZTUtTTJ0R0FcIixcblx0XCJzcGFjZTZcIjogXCJOb0l0ZW0tc3BhY2U2LTNrcF9YXCIsXG5cdFwic3BhY2U3XCI6IFwiTm9JdGVtLXNwYWNlNy0xWDFYVFwiLFxuXHRcInNwYWNlVG9wOFwiOiBcIk5vSXRlbS1zcGFjZVRvcDgtM3JEc0tcIixcblx0XCJzcGFjZVRvcDFcIjogXCJOb0l0ZW0tc3BhY2VUb3AxLTNVYjdKXCIsXG5cdFwic3BhY2VUb3AyXCI6IFwiTm9JdGVtLXNwYWNlVG9wMi0xdjY4NlwiLFxuXHRcInNwYWNlVG9wM1wiOiBcIk5vSXRlbS1zcGFjZVRvcDMtMS1XWGNcIixcblx0XCJzcGFjZVRvcDRcIjogXCJOb0l0ZW0tc3BhY2VUb3A0LXl2Uy03XCIsXG5cdFwic3BhY2VUb3A1XCI6IFwiTm9JdGVtLXNwYWNlVG9wNS1oQ25QNVwiLFxuXHRcInNwYWNlVG9wNlwiOiBcIk5vSXRlbS1zcGFjZVRvcDYtbTl1WW1cIixcblx0XCJzcGFjZVRvcDdcIjogXCJOb0l0ZW0tc3BhY2VUb3A3LUVrNkZOXCIsXG5cdFwibm9NYXJnaW5cIjogXCJOb0l0ZW0tbm9NYXJnaW4tM09Na1lcIixcblx0XCJwYWRkaW5nMVwiOiBcIk5vSXRlbS1wYWRkaW5nMS1BdUNLTlwiLFxuXHRcInBhZGRpbmcyXCI6IFwiTm9JdGVtLXBhZGRpbmcyLTNlX3JPXCIsXG5cdFwicGFkZGluZzNcIjogXCJOb0l0ZW0tcGFkZGluZzMtMmpsai1cIixcblx0XCJwYWRkaW5nNFwiOiBcIk5vSXRlbS1wYWRkaW5nNC0zUkJjc1wiLFxuXHRcInBhZGRpbmc1XCI6IFwiTm9JdGVtLXBhZGRpbmc1LTJrZW9OXCIsXG5cdFwicGFkZGluZzZcIjogXCJOb0l0ZW0tcGFkZGluZzYtM0pscmNcIixcblx0XCJwYWRkaW5nN1wiOiBcIk5vSXRlbS1wYWRkaW5nNy0yUl9JOFwiLFxuXHRcInBhZGRpbmdUb3AxXCI6IFwiTm9JdGVtLXBhZGRpbmdUb3AxLTEzR1ZFXCIsXG5cdFwicGFkZGluZ1RvcDJcIjogXCJOb0l0ZW0tcGFkZGluZ1RvcDItM1l5MGhcIixcblx0XCJwYWRkaW5nVG9wM1wiOiBcIk5vSXRlbS1wYWRkaW5nVG9wMy0zeE1VMFwiLFxuXHRcInBhZGRpbmdUb3A0XCI6IFwiTm9JdGVtLXBhZGRpbmdUb3A0LXJmRFhnXCIsXG5cdFwicGFkZGluZ1RvcDVcIjogXCJOb0l0ZW0tcGFkZGluZ1RvcDUtMlFSVWxcIixcblx0XCJwYWRkaW5nVG9wNlwiOiBcIk5vSXRlbS1wYWRkaW5nVG9wNi0zUmpHOVwiLFxuXHRcInBhZGRpbmdUb3A3XCI6IFwiTm9JdGVtLXBhZGRpbmdUb3A3LTFZUXhQXCIsXG5cdFwibm9QYWRkaW5nXCI6IFwiTm9JdGVtLW5vUGFkZGluZy0yMF96alwiLFxuXHRcInRleHRCb2xkXCI6IFwiTm9JdGVtLXRleHRCb2xkLTFlQkx1XCIsXG5cdFwidGV4dEJvbGRlclwiOiBcIk5vSXRlbS10ZXh0Qm9sZGVyLTNlcjNCXCIsXG5cdFwidGV4dE5vcm1hbFwiOiBcIk5vSXRlbS10ZXh0Tm9ybWFsLTJVekF4XCIsXG5cdFwidGV4dERhcmtCbHVlXCI6IFwiTm9JdGVtLXRleHREYXJrQmx1ZS0zMEtyLVwiLFxuXHRcInRleHRMaWdodEJsdWVcIjogXCJOb0l0ZW0tdGV4dExpZ2h0Qmx1ZS0zWXNnOVwiLFxuXHRcInRleHRMaWdodFNhbmRsZUdyZWVuXCI6IFwiTm9JdGVtLXRleHRMaWdodFNhbmRsZUdyZWVuLTJ0bG5NXCIsXG5cdFwidGV4dExpZ2h0QnJvd25cIjogXCJOb0l0ZW0tdGV4dExpZ2h0QnJvd24tM3N2NXFcIixcblx0XCJ0ZXh0TWVkaXVtTWFyb29uXCI6IFwiTm9JdGVtLXRleHRNZWRpdW1NYXJvb24tM2xmbXNcIixcblx0XCJ0ZXh0QnJvd25cIjogXCJOb0l0ZW0tdGV4dEJyb3duLVpHa05OXCIsXG5cdFwidGV4dE1hcm9vblwiOiBcIk5vSXRlbS10ZXh0TWFyb29uLTJyX3EwXCIsXG5cdFwidGV4dERhcmtCcm93blwiOiBcIk5vSXRlbS10ZXh0RGFya0Jyb3duLUgyS2VHXCIsXG5cdFwidGV4dE1lZGl1bUJyb3duXCI6IFwiTm9JdGVtLXRleHRNZWRpdW1Ccm93bi0xMWpVelwiLFxuXHRcInRleHRTa3lCbHVlXCI6IFwiTm9JdGVtLXRleHRTa3lCbHVlLWlia3ZiXCIsXG5cdFwidGV4dEdyYXlcIjogXCJOb0l0ZW0tdGV4dEdyYXktMm1ydnhcIixcblx0XCJwYW5lbFNwYWNlXCI6IFwiTm9JdGVtLXBhbmVsU3BhY2UtMy1SbHBcIixcblx0XCJwYW5lbEVtcHR5XCI6IFwiTm9JdGVtLXBhbmVsRW1wdHktM1kzN1FcIixcblx0XCJub2xpc3RUaXRsZVwiOiBcIk5vSXRlbS1ub2xpc3RUaXRsZS0xMkVaT1wiLFxuXHRcIm5vUmVzdWx0c1wiOiBcIk5vSXRlbS1ub1Jlc3VsdHMtMkQxQTJcIixcblx0XCJ0ZXh0Q2VudGVyXCI6IFwiTm9JdGVtLXRleHRDZW50ZXItM2ZKbi1cIlxufTsiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vY29yZS9oaXN0b3J5JztcblxuXG5pbXBvcnQge1xuICBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfU1RBUlQsXG4gIFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9TVUNDRVNTLFxuICBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfRVJST1Jcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0QWxsUmVzZXJ2YXRpb25RdWVyeSA9IGdxbGBcbiAgcXVlcnkgZ2V0QWxsUmVzZXJ2YXRpb24gKCR1c2VyVHlwZTogU3RyaW5nKXtcbiAgICBnZXRBbGxSZXNlcnZhdGlvbih1c2VyVHlwZTogJHVzZXJUeXBlKXtcbiAgICAgIHJlc2VydmF0aW9uRGF0YSB7XG4gICAgICAgIGlkXG4gICAgICAgIHJlc2VydmF0aW9uU3RhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZXNlcnZhdGlvbihyZXNlcnZhdGlvbklkLCBhY3Rpb25UeXBlLCB1c2VyVHlwZSwgdGhyZWFkSWQpIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogVVBEQVRFX1JFU0VSVkFUSU9OX1NUQVRFX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IG11dGF0aW9uID0gZ3FsYFxuICAgICAgICAgIG11dGF0aW9uIHVwZGF0ZVJlc2VydmF0aW9uKFxuICAgICAgICAgICAgJHJlc2VydmF0aW9uSWQ6IEludCEsIFxuICAgICAgICAgICAgJGFjdGlvblR5cGU6IFN0cmluZyEsXG4gICAgICAgICAgICAkdGhyZWFkSWQ6IEludFxuICAgICAgICAgICl7XG4gICAgICAgICAgICAgIHVwZGF0ZVJlc2VydmF0aW9uKFxuICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uSWQ6ICRyZXNlcnZhdGlvbklkLFxuICAgICAgICAgICAgICAgIGFjdGlvblR5cGU6ICRhY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgIHRocmVhZElkOiAkdGhyZWFkSWRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIGA7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICByZXNlcnZhdGlvbklkLFxuICAgICAgICAgIGFjdGlvblR5cGUsXG4gICAgICAgICAgdGhyZWFkSWRcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBxdWVyeTogZ2V0QWxsUmVzZXJ2YXRpb25RdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICB1c2VyVHlwZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnVwZGF0ZVJlc2VydmF0aW9uICYmIGRhdGEudXBkYXRlUmVzZXJ2YXRpb24uc3RhdHVzID09PSAnMjAwJykge1xuXG4gICAgICAgIGlmKHVzZXJUeXBlID09ICdob3N0Jykge1xuICAgICAgICAgIGhpc3RvcnkucHVzaCgnL3Jlc2VydmF0aW9uL2N1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2goJy90cmlwcy9jdXJyZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBVUERBVEVfUkVTRVJWQVRJT05fU1RBVEVfU1VDQ0VTUyxcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFVQREFURV9SRVNFUlZBVElPTl9TVEFURV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBTRU5EX01FU1NBR0VfU1RBUlQsXG4gIFNFTkRfTUVTU0FHRV9TVUNDRVNTLFxuICBTRU5EX01FU1NBR0VfRVJST1IsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVSZXNlcnZhdGlvbiB9IGZyb20gJy4uL1Jlc2VydmF0aW9uL3VwZGF0ZVJlc2VydmF0aW9uJztcblxuY29uc3QgVGhyZWFkSXRlbXNRdWVyeSA9IGdxbGBcbnF1ZXJ5IGdldFRocmVhZCgkdGhyZWFkVHlwZTogU3RyaW5nLCAkdGhyZWFkSWQ6IEludCl7XG4gIGdldFRocmVhZCh0aHJlYWRUeXBlOiAkdGhyZWFkVHlwZSwgdGhyZWFkSWQ6ICR0aHJlYWRJZCkge1xuICAgIGlkXG4gICAgbGlzdElkXG4gICAgZ3Vlc3RcbiAgICBob3N0XG4gICAgbGlzdERhdGEge1xuICAgICAgdGl0bGVcbiAgICAgIGNpdHlcbiAgICAgIHN0YXRlXG4gICAgICBjb3VudHJ5XG4gICAgICBsaXN0aW5nRGF0YSB7XG4gICAgICAgIGJhc2VQcmljZVxuICAgICAgICBjbGVhbmluZ1ByaWNlXG4gICAgICAgIGN1cnJlbmN5XG4gICAgICAgIG1vbnRobHlEaXNjb3VudFxuICAgICAgICB3ZWVrbHlEaXNjb3VudFxuICAgICAgfVxuICAgIH1cbiAgICB0aHJlYWRJdGVtRm9yVHlwZSB7XG4gICAgICBpZFxuICAgICAgdGhyZWFkSWRcbiAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgIGNvbnRlbnRcbiAgICAgIHNlbnRCeVxuICAgICAgdHlwZVxuICAgICAgc3RhcnREYXRlXG4gICAgICBlbmREYXRlXG4gICAgICBwZXJzb25DYXBhY2l0eVxuICAgICAgY3JlYXRlZEF0XG4gICAgICBjYW5jZWxEYXRhIHtcbiAgICAgICAgaWRcbiAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICBjYW5jZWxsYXRpb25Qb2xpY3lcbiAgICAgICAgZ3Vlc3RTZXJ2aWNlRmVlXG4gICAgICAgIGhvc3RTZXJ2aWNlRmVlXG4gICAgICAgIHJlZnVuZFRvR3Vlc3RcbiAgICAgICAgcGF5b3V0VG9Ib3N0XG4gICAgICAgIHRvdGFsIFxuICAgICAgICBjdXJyZW5jeVxuICAgICAgfVxuICAgICAgcmVzZXJ2YXRpb24ge1xuICAgICAgICBpZFxuICAgICAgICBsaXN0SWRcbiAgICAgICAgaG9zdElkXG4gICAgICAgIGd1ZXN0SWRcbiAgICAgICAgY2hlY2tJblxuICAgICAgICBjaGVja091dFxuICAgICAgICBiYXNlUHJpY2VcbiAgICAgICAgY2xlYW5pbmdQcmljZVxuICAgICAgICB0b3RhbFxuICAgICAgICBjdXJyZW5jeVxuICAgICAgICBndWVzdHNcbiAgICAgICAgY29uZmlybWF0aW9uQ29kZVxuICAgICAgICBndWVzdFNlcnZpY2VGZWVcbiAgICAgICAgZGlzY291bnRcbiAgICAgICAgZGlzY291bnRUeXBlXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgaG9zdFNlcnZpY2VGZWVcbiAgICAgICAgYm9va2luZ1NwZWNpYWxQcmljaW5nIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICAgICBibG9ja2VkRGF0ZXNcbiAgICAgICAgICBpc1NwZWNpYWxQcmljZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocmVhZEl0ZW1zIHtcbiAgICAgIGlkXG4gICAgICB0aHJlYWRJZFxuICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgY29udGVudFxuICAgICAgc2VudEJ5XG4gICAgICB0eXBlXG4gICAgICBzdGFydERhdGVcbiAgICAgIGVuZERhdGVcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgICB0aHJlYWRJdGVtc0NvdW50XG4gICAgZ3Vlc3RQcm9maWxlIHtcbiAgICAgIHByb2ZpbGVJZFxuICAgICAgZGlzcGxheU5hbWVcbiAgICAgIGZpcnN0TmFtZVxuICAgICAgbG9jYXRpb25cbiAgICAgIHJldmlld3NDb3VudFxuICAgICAgdXNlclZlcmlmaWNhdGlvbiB7XG4gICAgICAgIGlkXG4gICAgICAgIGlzRW1haWxDb25maXJtZWRcbiAgICAgICAgaXNGYWNlYm9va0Nvbm5lY3RlZFxuICAgICAgICBpc0dvb2dsZUNvbm5lY3RlZFxuICAgICAgICBpc0lkVmVyaWZpY2F0aW9uXG4gICAgICB9XG4gICAgfVxuICAgIGd1ZXN0VXNlckRhdGEge1xuICAgICAgZW1haWxcbiAgICAgIHVzZXJCYW5TdGF0dXNcbiAgICB9XG4gICAgaG9zdFByb2ZpbGUge1xuICAgICAgcHJvZmlsZUlkXG4gICAgICBkaXNwbGF5TmFtZVxuICAgICAgZmlyc3ROYW1lXG4gICAgICBwaWN0dXJlXG4gICAgICBsb2NhdGlvblxuICAgICAgcmV2aWV3c0NvdW50XG4gICAgICB1c2VyVmVyaWZpY2F0aW9uIHtcbiAgICAgICAgaWRcbiAgICAgICAgaXNFbWFpbENvbmZpcm1lZFxuICAgICAgICBpc0ZhY2Vib29rQ29ubmVjdGVkXG4gICAgICAgIGlzR29vZ2xlQ29ubmVjdGVkXG4gICAgICAgIGlzSWRWZXJpZmljYXRpb25cbiAgICAgIH1cbiAgICB9XG4gICAgaG9zdFVzZXJEYXRhIHtcbiAgICAgIGVtYWlsXG4gICAgfVxuICAgIHN0YXR1c1xuICB9XG59XG5gO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlQWN0aW9uKFxuICB0aHJlYWRJZCxcbiAgdGhyZWFkVHlwZSxcbiAgY29udGVudCxcbiAgdHlwZSxcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxuICBwZXJzb25DYXBhY2l0eSxcbiAgcmVzZXJ2YXRpb25JZCxcbiAgcmVjZWl2ZXJOYW1lLFxuICBzZW5kZXJOYW1lLFxuICByZWNlaXZlclR5cGUsXG4gIHJlY2VpdmVyRW1haWxcbikge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFTkRfTUVTU0FHRV9TVEFSVCxcbiAgICB9KTtcbiAgICB0cnkge1xuXG4gICAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgICAgbXV0YXRpb24gc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgJHRocmVhZElkOiBJbnQhLCBcbiAgICAgICAgICAkY29udGVudDogU3RyaW5nLCBcbiAgICAgICAgICAkdHlwZTogU3RyaW5nLFxuICAgICAgICAgICRzdGFydERhdGU6IFN0cmluZyxcbiAgICAgICAgICAkZW5kRGF0ZTogU3RyaW5nLFxuICAgICAgICAgICRwZXJzb25DYXBhY2l0eTogSW50LFxuICAgICAgICAgICRyZXNlcnZhdGlvbklkOiBJbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgdGhyZWFkSWQ6ICR0aHJlYWRJZCwgXG4gICAgICAgICAgICBjb250ZW50OiAkY29udGVudCwgXG4gICAgICAgICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6ICRlbmREYXRlLFxuICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHk6ICRwZXJzb25DYXBhY2l0eSxcbiAgICAgICAgICAgIHJlc2VydmF0aW9uSWQ6ICRyZXNlcnZhdGlvbklkXG4gICAgICAgICAgICApe1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBzZW50QnlcbiAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgICAgICAgICAgc3RhcnREYXRlXG4gICAgICAgICAgICAgIGVuZERhdGVcbiAgICAgICAgICAgICAgcGVyc29uQ2FwYWNpdHlcbiAgICAgICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIGA7XG4gICAgICAvLyBTZW5kIE1lc3NhZ2VcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICB0aHJlYWRJZCxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgcGVyc29uQ2FwYWNpdHksXG4gICAgICAgICAgcmVzZXJ2YXRpb25JZFxuICAgICAgICB9LFxuICAgICAgICByZWZldGNoUXVlcmllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBUaHJlYWRJdGVtc1F1ZXJ5LFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIHRocmVhZElkLFxuICAgICAgICAgICAgICB0aHJlYWRUeXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnNlbmRNZXNzYWdlICYmIGRhdGEuc2VuZE1lc3NhZ2Uuc3RhdHVzICE9ICd1c2VyYmFubmVkJykge1xuICAgICAgICBpZiAocmVzZXJ2YXRpb25JZCAhPSBudWxsICYmIHJlc2VydmF0aW9uSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2godXBkYXRlUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb25JZCwgdHlwZSwgdGhyZWFkVHlwZSwgdGhyZWFkSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogU0VORF9NRVNTQUdFX1NVQ0NFU1MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFTkRfTUVTU0FHRV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbi8vIFRyYW5zbGF0aW9uXG5pbXBvcnQgeyBpbmplY3RJbnRsLCBGb3JtYXR0ZWROdW1iZXIgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuXG4vLyBIZWxwZXJcbmltcG9ydCB7IGNvbnZlcnQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9jdXJyZW5jeUNvbnZlcnRpb25cIjtcbmltcG9ydCB7IGlzUlRMIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZm9ybWF0TG9jYWxlXCI7XG5jbGFzcyBDdXJyZW5jeUNvbnZlcnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYmFzZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByYXRlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdXBlclN5bWJvbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvQ3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbW91bnQ6IDAsXG4gICAgc3VwZXJTeW1ib2w6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBiYXNlOiBudWxsLFxuICAgICAgcmF0ZXM6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGJhc2UsIHJhdGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChiYXNlICE9IHVuZGVmaW5lZCAmJiByYXRlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYXNlOiBiYXNlLCByYXRlczogcmF0ZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGJhc2UsIHJhdGVzIH0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGJhc2UgIT0gdW5kZWZpbmVkICYmIHJhdGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhc2U6IGJhc2UsIHJhdGVzOiByYXRlcyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZnJvbSxcbiAgICAgIGFtb3VudCxcbiAgICAgIHN1cGVyU3ltYm9sLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdG9DdXJyZW5jeSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGlzQ3VycmVuY3ksXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBiYXNlLCByYXRlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCB0YXJnZXRDdXJyZW5jeTtcbiAgICBsZXQgY29udmVydGVkQW1vdW50ID0gYW1vdW50O1xuICAgIGxldCBmcm9tQ3VycmVuY3kgPSBmcm9tIHx8IGJhc2U7XG5cbiAgICBpZiAocmF0ZXMgIT0gbnVsbCkge1xuICAgICAgY29udmVydGVkQW1vdW50ID0gY29udmVydChiYXNlLCByYXRlcywgYW1vdW50LCBmcm9tQ3VycmVuY3ksIHRvQ3VycmVuY3kpO1xuICAgIH1cblxuICAgIGlmICh0b0N1cnJlbmN5KSB7XG4gICAgICB0YXJnZXRDdXJyZW5jeSA9IHRvQ3VycmVuY3k7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEN1cnJlbmN5ID0gYmFzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge2lzUlRMKGxvY2FsZSkgPyAoXG4gICAgICAgICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0YXJnZXRDdXJyZW5jeSxcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogY29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBjb252ZXJ0ZWRBbW91bnQgJSAxID09PSAwID8gMCA6IDIsXG4gICAgICAgICAgICBjdXJyZW5jeURpc3BsYXk6IFwic3ltYm9sXCIsXG4gICAgICAgICAgfSkuZm9ybWF0KGNvbnZlcnRlZEFtb3VudClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Rm9ybWF0dGVkTnVtYmVyXG4gICAgICAgICAgICB2YWx1ZT17Y29udmVydGVkQW1vdW50fVxuICAgICAgICAgICAgc3R5bGU9XCJjdXJyZW5jeVwiXG4gICAgICAgICAgICBjdXJyZW5jeT17dGFyZ2V0Q3VycmVuY3l9XG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM9e2NvbnZlcnRlZEFtb3VudCAlIDEgPT09IDAgPyAwIDogMn1cbiAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0cz17Y29udmVydGVkQW1vdW50ICUgMSA9PT0gMCA/IDAgOiAyfVxuICAgICAgICAgICAgY3VycmVuY3lEaXNwbGF5PXtcInN5bWJvbFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzdXBlclN5bWJvbCAmJiA8c3VwPnt0YXJnZXRDdXJyZW5jeX08L3N1cD59XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHtcbiAgYmFzZTogc3RhdGUuY3VycmVuY3kuYmFzZSxcbiAgdG9DdXJyZW5jeTogc3RhdGUuY3VycmVuY3kudG8sXG4gIHJhdGVzOiBzdGF0ZS5jdXJyZW5jeS5yYXRlcyxcbiAgbG9jYWxlOiBzdGF0ZS5pbnRsLmxvY2FsZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaCA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDdXJyZW5jeUNvbnZlcnRlcikpO1xuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Ob0l0ZW0uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL05vSXRlbS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Ob0l0ZW0uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG4vLyBTdHlsZVxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBSb3csXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgcyBmcm9tICcuL05vSXRlbS5jc3MnO1xuaW1wb3J0IGJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uU3R5bGUuY3NzJztcblxuLy8gSW50ZXJuYWwgSGVscGVyc1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vLi4vY29yZS9oaXN0b3J5JztcblxuLy8gTG9jYWxlXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vLi4vLi4vbG9jYWxlL21lc3NhZ2VzJztcblxuY2xhc3MgTm9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgaGlzdG9yeS5wdXNoKCcvcycpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlclR5cGUsIHR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHVzZXJUeXBlID09PSAnaG9zdCcgJiYgPGRpdj5cbiAgICAgICAgICAgIHt0eXBlID09ICdjdXJyZW50JyAmJiA8cCBjbGFzc05hbWU9e3Mubm9SZXN1bHRzfT5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm5vVXBjb21pbmdSZXNlcnZhdGlvbn0gLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHt0eXBlICE9ICdjdXJyZW50JyAmJiA8cCBjbGFzc05hbWU9e3Mubm9SZXN1bHRzfT5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm5vUHJldmlvdXNSZXNlcnZhdGlvbn0gLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyVHlwZSA9PT0gJ2d1ZXN0JyAmJiA8ZGl2IGNsYXNzTmFtZT17Y3gocy50ZXh0Q2VudGVyLCBzLnNwYWNlVG9wNCl9PlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e2N4KHMubm9saXN0VGl0bGUsIHMuc3BhY2UxKX0+XG4gICAgICAgICAgICAgIHt0eXBlID09ICdjdXJyZW50JyAmJiA8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9VcGNvbWluZ1RyaXBzfSAvPjwvc3Bhbj59XG4gICAgICAgICAgICAgIHt0eXBlICE9ICdjdXJyZW50JyAmJiA8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9QcmV2aW91c1RyaXBzfSAvPjwvc3Bhbj59XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtjeChzLm5vUmVzdWx0cyl9PlxuICAgICAgICAgICAgICA8c3Bhbj48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9UcmlwVGl0bGUyfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e2N4KHMuc3BhY2VUb3AyLCBzLnNwYWNlMSl9PlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y3goYnQuYnRuUHJpbWFyeSwgYnQuYnRuTGFyZ2UpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9ID5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9Ucmlwc0J1dHRvbn0gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMsIGJ0KShOb0l0ZW0pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7XG4gIFJvdyxcbiAgQ29sXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1Jlc2VydmF0aW9uLmNzcyc7XG5pbXBvcnQgeyBkZWNvZGUgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3F1ZXJ5RW5jcnlwdGlvbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBSZXNlcnZhdGlvbkl0ZW0gZnJvbSAnLi9SZXNlcnZhdGlvbkl0ZW0nO1xuaW1wb3J0IE5vSXRlbSBmcm9tICcuL05vSXRlbSc7XG5jbGFzcyBSZXNlcnZhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB1c2VyVHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZvcm1hdE1lc3NhZ2U6IFByb3BUeXBlcy5hbnksXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsaXN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGhvc3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tJbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgY2hlY2tPdXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGd1ZXN0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgZ3Vlc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBob3N0U2VydmljZUZlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICByZXNlcnZhdGlvblN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlRGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgICAgfSksXG4gICAgICBsaXN0RGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgc3RyZWV0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGNpdHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgc3RhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgY291bnRyeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB6aXBjb2RlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB9KSxcbiAgICAgIGhvc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgICAgZ3Vlc3REYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgcGljdHVyZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFByb3BUeXBlcy5zdHJpbmdcbiAgICAgIH0pLFxuICAgIH0pKVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGF0YTogW11cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCB1c2VyVHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8Tm9JdGVtIHVzZXJUeXBlPXt1c2VyVHlwZX0gLz5cbiAgICB9XG5cbiAgICBsZXQgdGl0bGU7XG4gICAgaWYgKHVzZXJUeXBlID09PSAnaG9zdCcpIHtcbiAgICAgIHRpdGxlID0gXCJZb3VyIFJlc2VydmF0aW9uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlID0gXCJZb3VyIFRyaXBzXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkYXRhICYmIGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmd1ZXN0RGF0YSAmJiBpdGVtLmhvc3REYXRhICYmIGl0ZW0ubGlzdERhdGEgJiYgaXRlbS5tZXNzYWdlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZXNlcnZhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgdXNlclR5cGU9e3VzZXJUeXBlfVxuICAgICAgICAgICAgICAgICAgICB0aHJlYWRJZD17aXRlbS5tZXNzYWdlRGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gaXRlbS5ndWVzdERhdGEucHJvZmlsZUlkIDogaXRlbS5ob3N0RGF0YS5wcm9maWxlSWR9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gaXRlbS5ndWVzdERhdGEuZGlzcGxheU5hbWUgOiBpdGVtLmhvc3REYXRhLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gaXRlbS5ndWVzdERhdGEucGljdHVyZSA6IGl0ZW0uaG9zdERhdGEucGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25JZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25TdGF0ZT17aXRlbS5yZXNlcnZhdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBjaGVja0luPXtpdGVtLmNoZWNrSW59XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrT3V0PXtpdGVtLmNoZWNrT3V0fVxuICAgICAgICAgICAgICAgICAgICBndWVzdHM9e2l0ZW0uZ3Vlc3RzfVxuICAgICAgICAgICAgICAgICAgICBndWVzdFNlcnZpY2VGZWU9e2l0ZW0uZ3Vlc3RTZXJ2aWNlRmVlfVxuICAgICAgICAgICAgICAgICAgICBob3N0U2VydmljZUZlZT17aXRlbS5ob3N0U2VydmljZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgdG90YWw9e2l0ZW0udG90YWx9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtpdGVtLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICBsaXN0SWQ9e2l0ZW0ubGlzdElkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5saXN0RGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0PXtpdGVtLmxpc3REYXRhLnN0cmVldH1cbiAgICAgICAgICAgICAgICAgICAgY2l0eT17aXRlbS5saXN0RGF0YS5jaXR5fVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZT17aXRlbS5saXN0RGF0YS5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgY291bnRyeT17aXRlbS5saXN0RGF0YS5jb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICB6aXBjb2RlPXtpdGVtLmxpc3REYXRhLnppcGNvZGV9XG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyPXt1c2VyVHlwZSA9PT0gJ2hvc3QnID8gZGVjb2RlKGl0ZW0uZ3Vlc3REYXRhLnBob25lTnVtYmVyKSA6IGRlY29kZShpdGVtLmhvc3REYXRhLnBob25lTnVtYmVyKX1cbiAgICAgICAgICAgICAgICAgICAgZW1haWw9e3VzZXJUeXBlID09PSAnaG9zdCcgPyBkZWNvZGUoaXRlbS5ndWVzdERhdGEudXNlckRhdGEuZW1haWwpIDogZGVjb2RlKGl0ZW0uaG9zdERhdGEudXNlckRhdGEuZW1haWwpfVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e2l0ZW0uY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZXNlcnZhdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgbm9MaXN0XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUeXBlPXt1c2VyVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkSWQ9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uSWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uU3RhdGU9e2l0ZW0ucmVzZXJ2YXRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJbj17aXRlbS5jaGVja0lufVxuICAgICAgICAgICAgICAgICAgICBjaGVja091dD17aXRlbS5jaGVja091dH1cbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3RzPXtpdGVtLmd1ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3RTZXJ2aWNlRmVlPXtpdGVtLmd1ZXN0U2VydmljZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgaG9zdFNlcnZpY2VGZWU9e2l0ZW0uaG9zdFNlcnZpY2VGZWV9XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsPXtpdGVtLnRvdGFsfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeT17aXRlbS5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdElkPXtpdGVtLmxpc3RJZH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIHN0cmVldD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgY2l0eT17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGU9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIHppcGNvZGU9e251bGx9XG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICBlbWFpbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0PXtpdGVtLmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwod2l0aFN0eWxlcyhzKShSZXNlcnZhdGlvbikpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbi8vIFJlZHV4XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1Jlc2VydmF0aW9uLmNzcyc7XG5pbXBvcnQge1xuICBMYWJlbFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG4vLyBDb21wb25lbnRcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi9BdmF0YXInO1xuaW1wb3J0IEN1cnJlbmN5Q29udmVydGVyIGZyb20gJy4uL0N1cnJlbmN5Q29udmVydGVyJztcblxuLy8gUmVkdXggYWN0aW9uXG5pbXBvcnQgeyBzZW5kTWVzc2FnZUFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbWVzc2FnZS9zZW5kTWVzc2FnZUFjdGlvbic7XG5cbi8vIExvY2FsZVxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uLy4uL2xvY2FsZS9tZXNzYWdlcyc7XG5cbi8vSGVscGVyXG5pbXBvcnQgeyBnZXREYXRlUmFuZ2VzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9kYXRlUmFuZ2UnO1xuY2xhc3MgUmVzZXJ2YXRpb25JdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub0xpc3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIHVzZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGhyZWFkSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByZXNlcnZhdGlvbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcmVzZXJ2YXRpb25TdGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrSW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGVja091dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGd1ZXN0czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxpc3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3RyZWV0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2l0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0YXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY291bnRyeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHppcGNvZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwcm9maWxlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBpY3R1cmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ3Vlc3RTZXJ2aWNlRmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaG9zdFNlcnZpY2VGZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2VuZE1lc3NhZ2VBY3Rpb246IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICBwaG9uZU51bWJlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXRNZXNzYWdlOiBQcm9wVHlwZXMuYW55LFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbm9MaXN0OiBmYWxzZSxcbiAgICBjaGVja0luOiBudWxsLFxuICAgIGNoZWNrT3V0OiBudWxsXG4gIH07XG5cbiAgc2VuZE1lc3NhZ2UodHlwZSkge1xuICAgIGNvbnN0IHsgc2VuZE1lc3NhZ2VBY3Rpb24sIHRocmVhZElkLCB1c2VyVHlwZSwgY2hlY2tJbiwgY2hlY2tPdXQsIGd1ZXN0cywgcmVzZXJ2YXRpb25JZCB9ID0gdGhpcy5wcm9wcztcbiAgICBzZW5kTWVzc2FnZUFjdGlvbih0aHJlYWRJZCwgdXNlclR5cGUsIG51bGwsIHR5cGUsIGNoZWNrSW4sIGNoZWNrT3V0LCBndWVzdHMsIHJlc2VydmF0aW9uSWQpO1xuICB9XG5cbiAgcmVzZXJ2YXRpb25TdHlsZSgpIHtcbiAgICBjb25zdCB7IHJlc2VydmF0aW9uU3RhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHN0eWxlLCBsYWJlbDtcbiAgICBzd2l0Y2ggKHJlc2VydmF0aW9uU3RhdGUpIHtcbiAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICBsYWJlbCA9IDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5tZXNzYWdlU3RhdHVzNX0gLz5cbiAgICAgICAgc3R5bGUgPSAncHJpbWFyeSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXhwaXJlZCc6XG4gICAgICAgIGxhYmVsID0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXM5fSAvPlxuICAgICAgICBzdHlsZSA9ICd3YXJuaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcHByb3ZlZCc6XG4gICAgICAgIGxhYmVsID0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXM0fSAvPlxuICAgICAgICBzdHlsZSA9ICdzdWNjZXNzJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWNsaW5lZCc6XG4gICAgICAgIGxhYmVsID0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLm1lc3NhZ2VTdGF0dXMzfSAvPlxuICAgICAgICBzdHlsZSA9ICdkYW5nZXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbXBsZXRlZCc6XG4gICAgICAgIGxhYmVsID0gPEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnBhbmVsSGVhZGVyMn0gLz5cbiAgICAgICAgc3R5bGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2FuY2VsbGVkJzpcbiAgICAgICAgbGFiZWwgPSA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZVN0YXR1czExfSAvPlxuICAgICAgICBzdHlsZSA9ICdkYW5nZXInO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIDxMYWJlbCBjbGFzc05hbWU9e3MubGFiZWxUZXh0fSBic1N0eWxlPXtzdHlsZX0+e2xhYmVsfTwvTGFiZWw+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhyZWFkSWQsIHVzZXJUeXBlLCByZXNlcnZhdGlvbklkLCByZXNlcnZhdGlvblN0YXRlLCBjaGVja0luLCBjaGVja091dCwgY3JlYXRlZEF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGlzdElkLCB0aXRsZSwgc3RyZWV0LCBjaXR5LCBzdGF0ZSwgY291bnRyeSwgemlwY29kZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHByb2ZpbGVJZCwgZGlzcGxheU5hbWUsIHBpY3R1cmUsIHBob25lTnVtYmVyLCBlbWFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGd1ZXN0U2VydmljZUZlZSwgaG9zdFNlcnZpY2VGZWUsIHRvdGFsLCBjdXJyZW5jeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG5vTGlzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBpc1ZhbHVlO1xuXG4gICAgaWYgKHJlc2VydmF0aW9uU3RhdGUgPT0gJ2NvbXBsZXRlZCcgfHwgcmVzZXJ2YXRpb25TdGF0ZSA9PSAnYXBwcm92ZWQnKSB7XG4gICAgICBpc1ZhbHVlID0gJyM1Y2I4NWMnXG4gICAgfSBlbHNlIGlmIChyZXNlcnZhdGlvblN0YXRlID09ICdleHBpcmVkJykge1xuICAgICAgaXNWYWx1ZSA9ICcjZjBhZDRlJ1xuICAgIH0gZWxzZSBpZiAocmVzZXJ2YXRpb25TdGF0ZSA9PSAncGVuZGluZycpIHtcbiAgICAgIGlzVmFsdWUgPSAnIzAwN2JmZidcbiAgICB9IGVsc2UgaWYgKHJlc2VydmF0aW9uU3RhdGUgPT0gJ2RlY2xpbmVkJyB8fCByZXNlcnZhdGlvblN0YXRlID09ICcgY2FuY2VsbGVkJykge1xuICAgICAgaXNWYWx1ZSA9ICcjZDk1MzRmJ1xuICAgIH1cblxuICAgIGxldCBjaGVja0luRGF0ZSA9IGNoZWNrSW4gPyBtb21lbnQoY2hlY2tJbikuZm9ybWF0KCdEbyBNTU0gLSAnKSA6ICcnO1xuICAgIGxldCBjaGVja091dERhdGUgPSBjaGVja091dCA/IG1vbWVudChjaGVja091dCkuZm9ybWF0KCdEbyBNTU0sIFlZWVknKSA6ICcnO1xuICAgIGxldCBjcmVhdGVkRGF0ZSA9IGNyZWF0ZWRBdCA/IG1vbWVudChjcmVhdGVkQXQpLmZvcm1hdCgnRG8gTU1NLCBZWVlZJykgOiAnJztcbiAgICBsZXQgc3ViVG90YWwgPSAwO1xuICAgIGxldCBmb3JtYXR0ZWRDaGVja291dCA9IG1vbWVudChjaGVja091dCk7XG5cbiAgICBjb25zdCB7IG5pZ2h0cywgaW50ZXJ2YWwsIHRvZGF5IH0gPSBnZXREYXRlUmFuZ2VzKHsgY2hlY2tJbiwgY2hlY2tPdXQsIGNvdW50cnkgfSlcblxuICAgIGxldCBlbmFibGVDYW5jZWwgPSBmYWxzZSwgZW5hYmxlSXRlcm5hcnkgPSBmYWxzZTtcbiAgICBpZiAocmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2FwcHJvdmVkJykge1xuICAgICAgZW5hYmxlSXRlcm5hcnkgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vKC1pbnRlcnZhbCkgPCAobmlnaHRzIC0gMSkgSGlkZSBpZiB0aGUgKGN1cnJlbnQgZGF0ZSkgaXMgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIHRoZSAob25lIGRheSBiZWZvcmUgY2hlY2tvdXQgZGF0ZSlcblxuICAgIGlmIChyZXNlcnZhdGlvblN0YXRlID09PSAnYXBwcm92ZWQnICYmIGZvcm1hdHRlZENoZWNrb3V0ID4gdG9kYXkgJiYgKC1pbnRlcnZhbCkgPCAobmlnaHRzIC0gMSkpIHtcbiAgICAgIGVuYWJsZUNhbmNlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVzZXJUeXBlID09PSAnaG9zdCcpIHtcbiAgICAgIHN1YlRvdGFsID0gdG90YWwgLSBob3N0U2VydmljZUZlZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVG90YWwgPSB0b3RhbCArIGd1ZXN0U2VydmljZUZlZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wb3NpdGlvblJlbGF0aXZlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGlzcGxheVRhYmxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5VGFibGVSb3d9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5ib3JkZXJMaW5lLCBzLmRhdGVTZWN0aW9uV2lkdGgsIHMuZGF0ZVNlY3Rpb24sICdyZXNlcnZhdGlvbkxpbmUnKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaGlkZGVuLXhzIGhpZGRlbi1zbScpfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2N4KHMubm9NYXJnaW4sIHMuZGF0ZUZvbnROZXcsIHMuZGF0ZUZvbnRNYXJnaW4sIHMuZm9udFdlaWdodCl9PntjcmVhdGVkRGF0ZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5jaXJjbGUsICdyZXNlcnZhcnRpb0FSQ2lyY2xlJyl9IHN0eWxlPXt7IGJvcmRlckNvbG9yOiBpc1ZhbHVlIH19PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5wb3NpdGlvblJlbGF0aXZlLCBzLnNwYWNlVG9wMyl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3gocy5kaXNwbGF5VGFibGVDZWxsLCBzLm1haW5TZWN0aW9uLCBzLnNwYWNlMiwgcy5hZnRlclNlY3Rpb24sICdyZXNlcnZhdGlvbkFmdGVyU2VjdGlvbicpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5kaXNwbGF5VGFibGV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZGlzcGxheVRhYmxlUm93fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuc2VjdGlvblRpdGxlTGlnaHQsIHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5hZGRyZXNzV2lkdGgsIHMucmVzcG9uc2l2ZURpc3BsYXksIHMudGFiU2NyZWVucmVzb2x1dGlvbil9PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFub0xpc3QgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvcm9vbXMvXCIgKyBsaXN0SWR9IHRhcmdldD17J19ibGFuayd9IGNsYXNzTmFtZT17cy5saW5rVGl0bGV9PiB7dGl0bGV9IDwvYT48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2hlY2tJbkRhdGV9e2NoZWNrT3V0RGF0ZX08L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9MaXN0ICYmIHVzZXJUeXBlID09PSAnZ3Vlc3QnICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm9MaXN0fSAvPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vTGlzdCAmJiB1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIDxzcGFuIGNsYXNzTmFtZT17cy5lcnJvck1lc3NhZ2V9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubm90ZXhpc3R9IC8+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIW5vTGlzdCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c3RyZWV0fTwvc3Bhbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjaXR5ICsgKGNpdHkgPyAnLCAnIDogJycpfXtzdGF0ZSArIChzdGF0ZSA/ICcsICcgOiAnJyl9e2NvdW50cnkgKyAoY291bnRyeSA/ICcsICcgOiAnJyl9e3ppcGNvZGV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2N4KHMuc2VjdGlvblRpdGxlTGlnaHQsIHMuc3BhY2VUb3AxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZXNlcnZhdGlvblN0eWxlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5sb2dvV2lkdGgsIHMuYWxpZ25DZW50ZXIsIHMucmVzcG9uc2l2ZURpc3BsYXksIHMucmVzcG9uc2l2ZUF2YXRhclNlY3Rpb24sIHMudGFiQXZhdGFyU2VjdGlvbiwgJ3Jlc3BvbnNpdmVBdmF0YXJTZWN0aW9uQVInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMubWVkaWFDb250YWluZXIsIHMubWVkaWFXaWR0aCwgcy5yZXNwb25zaXZlQXZhdGFySW1nLCAncmVzcG9uc2l2ZUF2YXRhckltZ0FSJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3BpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHMucHJvZmlsZUF2YXRhciwgcy5wcm9maWxlQXZhdGFyTGluayl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhMaW5rPXtub0xpc3QgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJZD17cHJvZmlsZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvdXNlcnMvc2hvdy9cIiArIHByb2ZpbGVJZH0gY2xhc3NOYW1lPXtzLnNlY3Rpb25UaXRsZUxpZ2h0fT57ZGlzcGxheU5hbWV9PC9MaW5rPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZhdGlvblN0YXRlICYmIChyZXNlcnZhdGlvblN0YXRlID09PSAnYXBwcm92ZWQnIHx8IHJlc2VydmF0aW9uU3RhdGUgPT09ICdjb21wbGV0ZWQnKSAmJiA8dWwgY2xhc3NOYW1lPXtjeChzLmxpc3RMYXlvdXQsICdsaXN0TGF5b3V0QXJiaWMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cGhvbmVOdW1iZXJ9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cy50ZXh0V29yZEJyZWFrfT57ZW1haWx9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMuZGlzcGxheVRhYmxlQ2VsbCwgcy5yZXNwb25zaXZlRGlzcGxheSwgcy50YWJQcmljZVNlY3Rpb24pfT5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2N4KHMuc3BhY2UxLCBzLmZvbnRXZWlnaHQsIHMuZGF0ZUZvbnQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeUNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3N1YlRvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuYm9va0l0UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb209e2N1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjeChzLmxpc3RMYXlvdXQsICdsaXN0TGF5b3V0QXJiaWMnKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW5vTGlzdCAmJiA8bGk+PExpbmsgdG89e1wiL21lc3NhZ2UvXCIgKyB0aHJlYWRJZCArIFwiL1wiICsgdXNlclR5cGV9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMubWVzc2FnZUhpc3Ryb3l9IC8+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MaXN0ICYmIDxsaT48TGluayB0bz17XCIvY29udGFjdFwifT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY29udGFjdFN1cHBvcnR9IC8+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW5vTGlzdCAmJiB1c2VyVHlwZSA9PT0gJ2d1ZXN0JyAmJiBlbmFibGVJdGVybmFyeSAmJiA8bGk+PExpbmsgdG89e1wiL3VzZXJzL3RyaXBzL2l0aW5lcmFyeS9cIiArIHJlc2VydmF0aW9uSWR9PiA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudmlld0l0aW5lcmFyeX0gLz48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW5vTGlzdCAmJiB1c2VyVHlwZSA9PT0gJ2d1ZXN0JyAmJiA8bGk+PExpbmsgdG89e1wiL3VzZXJzL3RyaXBzL3JlY2VpcHQvXCIgKyByZXNlcnZhdGlvbklkfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMudmlld1JlY2VpcHR9IC8+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICFub0xpc3QgJiYgdXNlclR5cGUgPT09ICdob3N0JyAmJiAocmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ2FwcHJvdmVkJyB8fCByZXNlcnZhdGlvblN0YXRlID09PSAnY29tcGxldGVkJykgJiYgPGxpPjxMaW5rIHRvPXtcIi91c2Vycy90cmlwcy9yZWNlaXB0L1wiICsgcmVzZXJ2YXRpb25JZH0+PEZvcm1hdHRlZE1lc3NhZ2Ugey4uLm1lc3NhZ2VzLnZpZXdSZWNlaXB0fSAvPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAhbm9MaXN0ICYmIHVzZXJUeXBlID09PSAnaG9zdCcgJiYgcmVzZXJ2YXRpb25TdGF0ZSA9PT0gJ3BlbmRpbmcnICYmIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRNZXNzYWdlKCdhcHByb3ZlZCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIHsuLi5tZXNzYWdlcy5hcHByb3ZlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIW5vTGlzdCAmJiB1c2VyVHlwZSA9PT0gJ2hvc3QnICYmIHJlc2VydmF0aW9uU3RhdGUgPT09ICdwZW5kaW5nJyAmJiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5zZW5kTWVzc2FnZSgnZGVjbGluZWQnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuZGVjbGluZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICFub0xpc3QgJiYgZW5hYmxlQ2FuY2VsICYmIDxsaT4gPExpbmsgdG89e1wiL2NhbmNlbC9cIiArIHJlc2VydmF0aW9uSWQgKyBcIi9cIiArIHVzZXJUeXBlfT48Rm9ybWF0dGVkTWVzc2FnZSB7Li4ubWVzc2FnZXMuY2FuY2VsfSAvPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZSkgPT4gKHt9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSB7XG4gIHNlbmRNZXNzYWdlQWN0aW9uLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoUmVzZXJ2YXRpb25JdGVtKSk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVJBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFaQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBdkZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUZBO0FBWUE7QUFDQTtBQUZBO0FBQ0E7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFoREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFnREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBaURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBRUE7QUFPQTtBQUNBO0FBdklBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQS9CQTtBQUhBO0FBQ0E7QUFIQTtBQThDQTtBQURBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQW9DQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBeUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQXZPQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUFGQTtBQStCQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBME1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9