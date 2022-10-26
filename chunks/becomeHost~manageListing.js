require("source-map-support").install();
exports.ids = ["becomeHost~manageListing"];
exports.modules = {

/***/ "./src/actions/getListPhotos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListPhotos", function() { return getListPhotos; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");


const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query listPhotos($listId:Int!) {
    ShowListPhotos (listId:$listId) {
      id
      listId
      name
      type
      isCover
    }
  }
`;
function getListPhotos(listId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_START"]
    });

    try {
      let id = Number(listId); // Send Request to get listing data

      const {
        data
      } = await client.query({
        query,
        variables: {
          listId: id
        },
        fetchPolicy: 'network-only'
      });

      if (data && data.ShowListPhotos) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_SUCCESS"],
          listPhotos: data.ShowListPhotos,
          photosCount: data.ShowListPhotos.length
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_ERROR"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["SHOW_LIST_PHOTOS_ERROR"],
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

/***/ "./src/actions/getListing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingData", function() { return getListingData; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query ($listId:String!, $preview: Boolean) {
    UserListing (listId:$listId, preview: $preview) {
      id
      userId
      country
      street
      buildingName
      city
      state
      zipcode
      lat
      lng
      isMapTouched
      bedrooms
      residenceType
      beds
      personCapacity
      bathrooms
      user {
        id
        email
        userBanStatus
        profile{
          firstName
          lastName
          dateOfBirth
        }
      }
      userAmenities {
        amenitiesId
        listsettings{
          itemName
          settingsType {
            typeName
          }
        }
      }
      userSafetyAmenities {
        safetyAmenitiesId
        listsettings{
          itemName
          settingsType {
            typeName
          }
        }
      }
      userSpaces {
        spacesId
        listsettings{
          itemName
          settingsType {
            typeName
          }
        }
      }
      settingsData {
        id
        settingsId
        listsettings {
          id
          itemName
          settingsType {
            typeName
          }
        }
      }
      userBedsTypes{
        id
        listId
        bedCount
        bedType
      }
    }
  }
`;
function getListingData(listId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_START"]
    });

    try {
      // Send Request to get listing data
      const {
        data
      } = await client.query({
        query,
        variables: {
          listId,
          preview: true
        },
        fetchPolicy: 'network-only'
      });
      let formValues = null;
      let settingFieldsData = {};
      const amenities = [];
      const safetyAmenities = [];
      const spaces = [];
      let bedTypes = [];

      if (data && data.UserListing) {
        // Preparing for list settings data
        data.UserListing.settingsData.map((item, value) => {
          settingFieldsData[item.listsettings.settingsType.typeName] = item.settingsId;
        }); // Preparing for user amenities

        if (data.UserListing.userAmenities.length > 0) {
          data.UserListing.userAmenities.map((item, value) => {
            amenities.push(parseInt(item.amenitiesId));
          });
          settingFieldsData = Object.assign({}, settingFieldsData, {
            amenities
          });
        } // Preparing for user safety amenities


        if (data.UserListing.userSafetyAmenities.length > 0) {
          data.UserListing.userSafetyAmenities.map((item, value) => {
            safetyAmenities.push(parseInt(item.safetyAmenitiesId));
          });
          settingFieldsData = Object.assign({}, settingFieldsData, {
            safetyAmenities
          });
        } // Preparing for User Spaces


        if (data.UserListing.userSpaces.length > 0) {
          data.UserListing.userSpaces.map((item, value) => {
            spaces.push(parseInt(item.spacesId));
          });
          settingFieldsData = Object.assign({}, settingFieldsData, {
            spaces
          });
        }

        bedTypes = data.UserListing.userBedsTypes;
        settingFieldsData = Object.assign({}, settingFieldsData, {
          bedTypes
        }); // Combining values for initializing the edit form

        formValues = Object.assign({}, data.UserListing, settingFieldsData);

        if (formValues != null) {
          // Reinitialize the form values
          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])('ListPlaceStep1', formValues, true)); // Dispatch a success action

          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_SUCCESS"],
            step1DataIsLoaded: true,
            isExistingList: true,
            initialValuesLoaded: false
          });
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_ERROR"],
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

/***/ "./src/actions/getListingDataStep2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingDataStep2", function() { return getListingDataStep2; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query ($listId:String!, $preview: Boolean) {
    UserListing (listId:$listId, preview: $preview) {
      id
      userId
      title
      description
      coverPhoto
    }
  }
`;
function getListingDataStep2(listId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_STEP2_START"]
    });

    try {
      // Send Request to get listing data
      const {
        data
      } = await client.query({
        query,
        variables: {
          listId,
          preview: true
        },
        fetchPolicy: 'network-only'
      });

      if (data && data.UserListing) {
        // Reinitialize the form values
        await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])('ListPlaceStep2', data.UserListing, true)); // Dispatch a success action

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_STEP2_SUCCESS"],
          step2DataIsLoaded: true,
          isExistingList: true
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_DATA_STEP2_ERROR"],
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

/***/ "./src/actions/getListingDataStep3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingDataStep3", function() { return getListingDataStep3; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);




const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query ($listId:String!, $preview: Boolean) {
    UserListing (listId:$listId, preview: $preview) {
      id
      userId
      bookingType
      isPublished
      listApprovalStatus
      houseRules {
        houseRulesId
      }
      listingData {
        bookingNoticeTime,
        checkInStart,
        checkInEnd,
        maxDaysNotice,
        minNight,
        maxNight,
        basePrice,
        cleaningPrice,
        currency,
        weeklyDiscount,
        monthlyDiscount,
        cancellationPolicy,
        taxRate
      }
      blockedDates {
        blockedDates
        reservationId
        calendarStatus
        isSpecialPrice
      }
      calendars {
        id
        name
        url
        listId
        status
      }
      listBlockedPrice {
          listId
          calendarStatus
          isSpecialPrice
          blockedDates
          calendarId
          reservationId
      }
    }
  }
`;
function getListingDataStep3(listId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_START"]
    });

    try {
      let formValues = null;
      let settingFieldsData = {};
      const houseRules = [];
      const updatedBlockedDates = [];
      const updatedDisabledDates = [];
      const updatedAvailableDates = [];
      const updatedAvailableDatesPrices = [];
      let listData = {};
      let calendars = {}; // Send Request to get listing data

      const {
        data
      } = await client.query({
        query,
        variables: {
          listId,
          preview: true
        },
        fetchPolicy: 'network-only'
      });

      if (data && data.UserListing) {
        // Preparing List data
        listData = data.UserListing.listingData;
        calendars = data.UserListing.calendars; // Preparing for house rules

        if (data.UserListing.houseRules.length > 0) {
          data.UserListing.houseRules.map((item, value) => {
            houseRules.push(parseInt(item.houseRulesId));
          });
          settingFieldsData = Object.assign({}, listData, {
            houseRules
          });
        } // Preparing for blocked dates


        if (data.UserListing.blockedDates.length > 0) {
          data.UserListing.blockedDates.map((item, value) => {
            let date = moment__WEBPACK_IMPORTED_MODULE_1___default()(item.blockedDates);

            if (item.reservationId != null) {
              updatedDisabledDates.push(new Date(date));
            }

            if (item.calendarStatus && item.calendarStatus === 'available') {
              if (item.isSpecialPrice) {
                updatedAvailableDates.push(new Date(date));
                updatedAvailableDatesPrices.push({
                  date: new Date(date),
                  isSpecialPrice: item.isSpecialPrice
                });
              }
            } else {
              updatedBlockedDates.push(new Date(date));
            }
          });
          settingFieldsData = Object.assign({}, listData, settingFieldsData, {
            disabledDates: updatedDisabledDates,
            blockedDates: updatedBlockedDates,
            availableDates: updatedAvailableDates,
            availableDatesPrices: updatedAvailableDatesPrices
          });
        }

        await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'calendars', calendars));

        if (updatedBlockedDates) {
          await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'blockedDates', updatedBlockedDates));
        } else if (updatedAvailableDates) {
          await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'blockedDates', updatedAvailableDates));
        } else if (updatedAvailableDatesPrices) {
          await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["change"])('ListPlaceStep3', 'blockedDates', updatedAvailableDatesPrices));
        }

        formValues = Object.assign({}, data.UserListing, settingFieldsData, listData, calendars); // Reinitialize the form values

        await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["initialize"])('ListPlaceStep3', formValues)); // Dispatch a success action

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_SUCCESS"],
          step3DataIsLoaded: true,
          isExistingList: true,
          calendars: data.UserListing.calendars
        });
      } else {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_ERROR"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_DATA_STEP3_ERROR"],
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

/***/ "./src/actions/getListingFieldsValues.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingFieldsValues", function() { return getListingFieldsValues; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);



const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query($step: String){
    getListingSettings(step: $step) {
      id
      typeName
      fieldType
      typeLabel
      step
      isEnable
      isMultiValue
      listSettings {
        id
        typeId
        itemName
        otherItemName
        maximum
        minimum
        startValue
        endValue
        isEnable
        image
      }
    }
  }
`;
function getListingFieldsValues(step, listId, isOtherPage) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_START"]
    });

    try {
      const step1DataIsLoaded = getState().location.step1DataIsLoaded;
      const step2DataIsLoaded = getState().location.step2DataIsLoaded;
      const step3DataIsLoaded = getState().location.step3DataIsLoaded; // Get Base Currency from Redux Store

      const baseCurrency = getState().currency.base; // Send Request to get listing data

      const {
        data
      } = await client.query({
        query,
        variables: {
          step
        },
        fetchPolicy: 'network-only'
      });
      let listingFieldsValues = {};
      let bedType = getState().listingFields.data.bedType;
      let bedTypeValue;

      if (!data && !data.getListingSettings) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_ERROR"]
        });
      } else {
        data.getListingSettings.map((item, key) => {
          if (item.fieldType === "numberType") {
            listingFieldsValues[item.typeName] = item.listSettings.length > 0 ? item.listSettings[0].startValue : null;
          } else {
            if (item.isMultiValue === true) {
              listingFieldsValues[item.typeName] = [];
            } else {
              let unSelectIndex = item.listSettings.length > 0 ? item.listSettings.findIndex(o => o.isEnable == 1) : null;
              listingFieldsValues[item.typeName] = item.listSettings[unSelectIndex].id;
            }
          }
        });

        if (bedType && bedType.length > 0) {
          bedType.map((item, key) => {
            bedTypeValue = bedType.length > 0 ? bedType[0].id : null;
          });
        } // Reinitialize the form values


        if (step === "2" && !step2DataIsLoaded) {
          let updatedValuesStep2 = Object.assign({}, listingFieldsValues, {
            id: listId
          });
          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])("ListPlaceStep2", updatedValuesStep2, true));
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_SUCCESS"],
            initialValuesLoadedStep2: true
          });
        } else if (step === "3" && !step3DataIsLoaded) {
          let updatedValuesStep3 = Object.assign({}, listingFieldsValues, {
            id: listId
          }, {
            currency: baseCurrency
          }, {
            bookingType: 'instant'
          }, {
            maxDaysNotice: 'available'
          });
          dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])("ListPlaceStep3", updatedValuesStep3, true));
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_SUCCESS"],
            initialValuesLoadedStep3: true
          });
        } else {
          if (!step1DataIsLoaded || isOtherPage) {
            let updatedValuesStep1 = Object.assign({}, listingFieldsValues, {
              bedTypes: [{
                bedCount: 1,
                bedType: bedTypeValue
              }]
            }, {
              residenceType: "1"
            });
            dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["initialize"])("ListPlaceStep1", updatedValuesStep1, true));
            dispatch({
              type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_SUCCESS"],
              initialValuesLoaded: true
            });
          }
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_LISTING_FIELDS_INTIAL_VALUES_ERROR"],
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

/***/ "./src/actions/getListingSteps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListingSteps", function() { return getListingSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetListingSteps", function() { return resetListingSteps; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _getListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/actions/getListing.js");
/* harmony import */ var _getListingDataStep2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/actions/getListingDataStep2.js");
/* harmony import */ var _getListPhotos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/actions/getListPhotos.js");
/* harmony import */ var _getListingDataStep3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/actions/getListingDataStep3.js");
/* harmony import */ var _getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/actions/getListingFieldsValues.js");


 // Action
// For Step#1

 // For Step#2





const query = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query ($listId:String!) {
    showListingSteps (listId:$listId) {
      id
      listId
      step1
      step2
      step3
      step4
      listing {
        id
        isReady
        isPublished
        listApprovalStatus
        user {
          id
          email
          userBanStatus
          userDeletedAt
        }
      }
    }
  }
`;
function getListingSteps(listId) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_STEPS_DATA_START"],
      listingSteps: undefined,
      isExistingList: undefined,
      isLocationChosen: undefined,
      step1DataIsLoaded: undefined,
      step2DataIsLoaded: undefined,
      step3DataIsLoaded: undefined,
      initialValuesLoadedStep2: undefined,
      initialValuesLoadedStep3: undefined,
      photosCount: undefined,
      listPhotos: undefined,
      stepsLoading: true
    }); // For Adding new list

    if (listId === undefined || listId === null) {
      // Load initial data for step#1
      dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("1"));
      return true;
    }

    try {
      // Send Request to get listing data
      const {
        data
      } = await client.query({
        query,
        variables: {
          listId
        },
        fetchPolicy: 'network-only'
      }); // Check if initial values already updated to the store

      const initialValuesLoaded = getState().location.initialValuesLoaded;
      const initialValuesLoadedStep2 = getState().location.initialValuesLoadedStep2;
      const initialValuesLoadedStep3 = getState().location.initialValuesLoadedStep3; // Check if list data already updated to the store

      const step1DataIsLoaded = getState().location.step1DataIsLoaded;
      const step2DataIsLoaded = getState().location.step2DataIsLoaded;
      const step3DataIsLoaded = getState().location.step3DataIsLoaded;

      if (data && data.showListingSteps) {
        // Assign steps data to a const
        const steps = data.showListingSteps; // Check if Step1Data is already loaded

        if (step1DataIsLoaded != true) {
          // Load data if Step#1 is either active or completed 
          if (steps.step1 === "active" || steps.step1 === "completed") {
            dispatch(Object(_getListing__WEBPACK_IMPORTED_MODULE_3__["getListingData"])(listId)); // Load photos of the listing for step#2

            dispatch(Object(_getListPhotos__WEBPACK_IMPORTED_MODULE_5__["getListPhotos"])(listId));
          } else {
            if (initialValuesLoaded != true) {
              // Load initial data for step#1
              dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("1"));
            }
          }
        } // Check if Step2Data is already loaded


        if (step2DataIsLoaded != true) {
          if (steps.step2 === "completed") {
            dispatch(Object(_getListingDataStep2__WEBPACK_IMPORTED_MODULE_4__["getListingDataStep2"])(listId)); // Load photos of the listing for step#2

            dispatch(Object(_getListPhotos__WEBPACK_IMPORTED_MODULE_5__["getListPhotos"])(listId));
          } else {
            if (initialValuesLoadedStep2 != true) {
              // Load initial data for step#2
              dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("2", listId)); // Load photos of the listing for step#2

              dispatch(Object(_getListPhotos__WEBPACK_IMPORTED_MODULE_5__["getListPhotos"])(listId));
            }
          }
        } // Check if Step3Data is already loaded


        if (step3DataIsLoaded != true) {
          if (steps.step3 === "completed") {
            dispatch(Object(_getListingDataStep3__WEBPACK_IMPORTED_MODULE_6__["getListingDataStep3"])(listId));
          } else {
            if (initialValuesLoadedStep3 != true) {
              // Load initial data for step#3
              dispatch(Object(_getListingFieldsValues__WEBPACK_IMPORTED_MODULE_7__["getListingFieldsValues"])("3", listId));
            }
          }
        } // Update List Steps on the store & mark it as existing list


        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_STEPS_DATA_SUCCESS"],
          listingSteps: data.showListingSteps,
          isExistingList: true,
          stepsLoading: false
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["GET_LISTING_STEPS_DATA_ERROR"],
        stepsLoading: false
      });
      return false;
    }

    return true;
  };
}
function resetListingSteps() {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["RESET_LISTING_STEPS_DATA_START"],
      stepsLoading: false
    });

    try {
      await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["initialize"])('ListPlaceStep1', {}));
      await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["initialize"])('ListPlaceStep2', {}));
      await dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["initialize"])('ListPlaceStep3', {}));
      await dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["RESET_LISTING_STEPS_DATA_SUCCESS"],
        listingSteps: undefined,
        isExistingList: undefined,
        isLocationChosen: undefined,
        step1DataIsLoaded: undefined,
        step2DataIsLoaded: undefined,
        step3DataIsLoaded: undefined,
        initialValuesLoadedStep2: undefined,
        initialValuesLoadedStep3: undefined,
        photosCount: undefined,
        listPhotos: undefined,
        stepsLoading: false
      });
    } catch (error) {
      await dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["RESET_LISTING_STEPS_DATA_ERROR"],
        stepsLoading: false
      });
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Layout/Layout.css");
/* harmony import */ var _Layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Header/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/Footer/Footer.js");
/* harmony import */ var _CookiesDisclaimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/CookiesDisclaimer/CookiesDisclaimer.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/raju/projects/rentall-startuppro-v3.2-master/src/components/Layout/Layout.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Layout_css__WEBPACK_IMPORTED_MODULE_3___default.a.paddingTop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CookiesDisclaimer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }));
  }

}

_defineProperty(Layout, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Layout_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Layout));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2JlY29tZUhvc3R+bWFuYWdlTGlzdGluZy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvZ2V0TGlzdFBob3Rvcy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2dldExpc3RpbmcuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9nZXRMaXN0aW5nRGF0YVN0ZXAyLmpzIiwiL2hvbWUvcmFqdS9wcm9qZWN0cy9yZW50YWxsLXN0YXJ0dXBwcm8tdjMuMi1tYXN0ZXIvc3JjL2FjdGlvbnMvZ2V0TGlzdGluZ0RhdGFTdGVwMy5qcyIsIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL2dldExpc3RpbmdGaWVsZHNWYWx1ZXMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvYWN0aW9ucy9nZXRMaXN0aW5nU3RlcHMuanMiLCIvaG9tZS9yYWp1L3Byb2plY3RzL3JlbnRhbGwtc3RhcnR1cHByby12My4yLW1hc3Rlci9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB7XG4gIFNIT1dfTElTVF9QSE9UT1NfU1RBUlQsXG4gIFNIT1dfTElTVF9QSE9UT1NfU1VDQ0VTUyxcbiAgU0hPV19MSVNUX1BIT1RPU19FUlJPUlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgbGlzdFBob3RvcygkbGlzdElkOkludCEpIHtcbiAgICBTaG93TGlzdFBob3RvcyAobGlzdElkOiRsaXN0SWQpIHtcbiAgICAgIGlkXG4gICAgICBsaXN0SWRcbiAgICAgIG5hbWVcbiAgICAgIHR5cGVcbiAgICAgIGlzQ292ZXJcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0UGhvdG9zKGxpc3RJZCkge1xuXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTSE9XX0xJU1RfUEhPVE9TX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBpZCA9IE51bWJlcihsaXN0SWQpO1xuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGdldCBsaXN0aW5nIGRhdGFcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQ6IGlkIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgfSk7XG5cblxuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5TaG93TGlzdFBob3Rvcykge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogU0hPV19MSVNUX1BIT1RPU19TVUNDRVNTLFxuICAgICAgICAgIGxpc3RQaG90b3M6IGRhdGEuU2hvd0xpc3RQaG90b3MsXG4gICAgICAgICAgcGhvdG9zQ291bnQ6IGRhdGEuU2hvd0xpc3RQaG90b3MubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFNIT1dfTElTVF9QSE9UT1NfRVJST1IsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNIT1dfTElTVF9QSE9UT1NfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQge1xuICBHRVRfTElTVElOR19EQVRBX1NUQVJULFxuICBHRVRfTElTVElOR19EQVRBX1NVQ0NFU1MsXG4gIEdFVF9MSVNUSU5HX0RBVEFfRVJST1Jcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdyZWR1eC1mb3JtJztcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSAoJGxpc3RJZDpTdHJpbmchLCAkcHJldmlldzogQm9vbGVhbikge1xuICAgIFVzZXJMaXN0aW5nIChsaXN0SWQ6JGxpc3RJZCwgcHJldmlldzogJHByZXZpZXcpIHtcbiAgICAgIGlkXG4gICAgICB1c2VySWRcbiAgICAgIGNvdW50cnlcbiAgICAgIHN0cmVldFxuICAgICAgYnVpbGRpbmdOYW1lXG4gICAgICBjaXR5XG4gICAgICBzdGF0ZVxuICAgICAgemlwY29kZVxuICAgICAgbGF0XG4gICAgICBsbmdcbiAgICAgIGlzTWFwVG91Y2hlZFxuICAgICAgYmVkcm9vbXNcbiAgICAgIHJlc2lkZW5jZVR5cGVcbiAgICAgIGJlZHNcbiAgICAgIHBlcnNvbkNhcGFjaXR5XG4gICAgICBiYXRocm9vbXNcbiAgICAgIHVzZXIge1xuICAgICAgICBpZFxuICAgICAgICBlbWFpbFxuICAgICAgICB1c2VyQmFuU3RhdHVzXG4gICAgICAgIHByb2ZpbGV7XG4gICAgICAgICAgZmlyc3ROYW1lXG4gICAgICAgICAgbGFzdE5hbWVcbiAgICAgICAgICBkYXRlT2ZCaXJ0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1c2VyQW1lbml0aWVzIHtcbiAgICAgICAgYW1lbml0aWVzSWRcbiAgICAgICAgbGlzdHNldHRpbmdze1xuICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgc2V0dGluZ3NUeXBlIHtcbiAgICAgICAgICAgIHR5cGVOYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1c2VyU2FmZXR5QW1lbml0aWVzIHtcbiAgICAgICAgc2FmZXR5QW1lbml0aWVzSWRcbiAgICAgICAgbGlzdHNldHRpbmdze1xuICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgc2V0dGluZ3NUeXBlIHtcbiAgICAgICAgICAgIHR5cGVOYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1c2VyU3BhY2VzIHtcbiAgICAgICAgc3BhY2VzSWRcbiAgICAgICAgbGlzdHNldHRpbmdze1xuICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgc2V0dGluZ3NUeXBlIHtcbiAgICAgICAgICAgIHR5cGVOYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXR0aW5nc0RhdGEge1xuICAgICAgICBpZFxuICAgICAgICBzZXR0aW5nc0lkXG4gICAgICAgIGxpc3RzZXR0aW5ncyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBpdGVtTmFtZVxuICAgICAgICAgIHNldHRpbmdzVHlwZSB7XG4gICAgICAgICAgICB0eXBlTmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXNlckJlZHNUeXBlc3tcbiAgICAgICAgaWRcbiAgICAgICAgbGlzdElkXG4gICAgICAgIGJlZENvdW50XG4gICAgICAgIGJlZFR5cGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdGluZ0RhdGEobGlzdElkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0xJU1RJTkdfREFUQV9TVEFSVCxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgLy8gU2VuZCBSZXF1ZXN0IHRvIGdldCBsaXN0aW5nIGRhdGFcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnksXG4gICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQsIHByZXZpZXc6IHRydWUgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgfSk7XG4gICAgICBsZXQgZm9ybVZhbHVlcyA9IG51bGw7XG4gICAgICBsZXQgc2V0dGluZ0ZpZWxkc0RhdGEgPSB7fTtcbiAgICAgIGNvbnN0IGFtZW5pdGllcyA9IFtdO1xuICAgICAgY29uc3Qgc2FmZXR5QW1lbml0aWVzID0gW107XG4gICAgICBjb25zdCBzcGFjZXMgPSBbXTtcblxuICAgICAgbGV0IGJlZFR5cGVzID0gW107XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLlVzZXJMaXN0aW5nKSB7XG4gICAgICAgIC8vIFByZXBhcmluZyBmb3IgbGlzdCBzZXR0aW5ncyBkYXRhXG4gICAgICAgIGRhdGEuVXNlckxpc3Rpbmcuc2V0dGluZ3NEYXRhLm1hcCgoaXRlbSwgdmFsdWUpID0+IHtcbiAgICAgICAgICBzZXR0aW5nRmllbGRzRGF0YVtpdGVtLmxpc3RzZXR0aW5ncy5zZXR0aW5nc1R5cGUudHlwZU5hbWVdID0gaXRlbS5zZXR0aW5nc0lkO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUHJlcGFyaW5nIGZvciB1c2VyIGFtZW5pdGllc1xuICAgICAgICBpZiAoZGF0YS5Vc2VyTGlzdGluZy51c2VyQW1lbml0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhLlVzZXJMaXN0aW5nLnVzZXJBbWVuaXRpZXMubWFwKChpdGVtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgYW1lbml0aWVzLnB1c2gocGFyc2VJbnQoaXRlbS5hbWVuaXRpZXNJZCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldHRpbmdGaWVsZHNEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ0ZpZWxkc0RhdGEsIHsgYW1lbml0aWVzIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXBhcmluZyBmb3IgdXNlciBzYWZldHkgYW1lbml0aWVzXG4gICAgICAgIGlmIChkYXRhLlVzZXJMaXN0aW5nLnVzZXJTYWZldHlBbWVuaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGEuVXNlckxpc3RpbmcudXNlclNhZmV0eUFtZW5pdGllcy5tYXAoKGl0ZW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzYWZldHlBbWVuaXRpZXMucHVzaChwYXJzZUludChpdGVtLnNhZmV0eUFtZW5pdGllc0lkKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0dGluZ0ZpZWxkc0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5nRmllbGRzRGF0YSwgeyBzYWZldHlBbWVuaXRpZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJlcGFyaW5nIGZvciBVc2VyIFNwYWNlc1xuICAgICAgICBpZiAoZGF0YS5Vc2VyTGlzdGluZy51c2VyU3BhY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBkYXRhLlVzZXJMaXN0aW5nLnVzZXJTcGFjZXMubWFwKChpdGVtLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgc3BhY2VzLnB1c2gocGFyc2VJbnQoaXRlbS5zcGFjZXNJZCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldHRpbmdGaWVsZHNEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ0ZpZWxkc0RhdGEsIHsgc3BhY2VzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYmVkVHlwZXMgPSBkYXRhLlVzZXJMaXN0aW5nLnVzZXJCZWRzVHlwZXM7XG4gICAgICAgIHNldHRpbmdGaWVsZHNEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ0ZpZWxkc0RhdGEsIHsgYmVkVHlwZXMgfSk7XG5cbiAgICAgICAgLy8gQ29tYmluaW5nIHZhbHVlcyBmb3IgaW5pdGlhbGl6aW5nIHRoZSBlZGl0IGZvcm1cbiAgICAgICAgZm9ybVZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEuVXNlckxpc3RpbmcsIHNldHRpbmdGaWVsZHNEYXRhKTtcbiAgICAgICAgaWYgKGZvcm1WYWx1ZXMgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIFJlaW5pdGlhbGl6ZSB0aGUgZm9ybSB2YWx1ZXNcbiAgICAgICAgICBkaXNwYXRjaChpbml0aWFsaXplKCdMaXN0UGxhY2VTdGVwMScsIGZvcm1WYWx1ZXMsIHRydWUpKTtcbiAgICAgICAgICAvLyBEaXNwYXRjaCBhIHN1Y2Nlc3MgYWN0aW9uXG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfREFUQV9TVUNDRVNTLFxuICAgICAgICAgICAgc3RlcDFEYXRhSXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICBpc0V4aXN0aW5nTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfREFUQV9FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuaW1wb3J0IHtcbiAgR0VUX0xJU1RJTkdfREFUQV9TVEVQMl9TVEFSVCxcbiAgR0VUX0xJU1RJTkdfREFUQV9TVEVQMl9TVUNDRVNTLFxuICBHRVRfTElTVElOR19EQVRBX1NURVAyX0VSUk9SXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5ICgkbGlzdElkOlN0cmluZyEsICRwcmV2aWV3OiBCb29sZWFuKSB7XG4gICAgVXNlckxpc3RpbmcgKGxpc3RJZDokbGlzdElkLCBwcmV2aWV3OiAkcHJldmlldykge1xuICAgICAgaWRcbiAgICAgIHVzZXJJZFxuICAgICAgdGl0bGVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBjb3ZlclBob3RvXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdGluZ0RhdGFTdGVwMihsaXN0SWQpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAyX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBnZXQgbGlzdGluZyBkYXRhXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICB2YXJpYWJsZXM6IHsgbGlzdElkLCBwcmV2aWV3OiB0cnVlIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICAgIH0pO1xuXG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEuVXNlckxpc3RpbmcpIHtcbiAgICAgICAgLy8gUmVpbml0aWFsaXplIHRoZSBmb3JtIHZhbHVlc1xuICAgICAgICBhd2FpdCBkaXNwYXRjaChpbml0aWFsaXplKCdMaXN0UGxhY2VTdGVwMicsIGRhdGEuVXNlckxpc3RpbmcsIHRydWUpKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBhIHN1Y2Nlc3MgYWN0aW9uXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19EQVRBX1NURVAyX1NVQ0NFU1MsXG4gICAgICAgICAgc3RlcDJEYXRhSXNMb2FkZWQ6IHRydWUsXG4gICAgICAgICAgaXNFeGlzdGluZ0xpc3Q6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0RBVEFfU1RFUDJfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7XG4gIEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfU1RBUlQsXG4gIEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfU1VDQ0VTUyxcbiAgR0VUX0xJU1RJTkdfREFUQV9TVEVQM19FUlJPUlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplLCBjaGFuZ2UgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5ICgkbGlzdElkOlN0cmluZyEsICRwcmV2aWV3OiBCb29sZWFuKSB7XG4gICAgVXNlckxpc3RpbmcgKGxpc3RJZDokbGlzdElkLCBwcmV2aWV3OiAkcHJldmlldykge1xuICAgICAgaWRcbiAgICAgIHVzZXJJZFxuICAgICAgYm9va2luZ1R5cGVcbiAgICAgIGlzUHVibGlzaGVkXG4gICAgICBsaXN0QXBwcm92YWxTdGF0dXNcbiAgICAgIGhvdXNlUnVsZXMge1xuICAgICAgICBob3VzZVJ1bGVzSWRcbiAgICAgIH1cbiAgICAgIGxpc3RpbmdEYXRhIHtcbiAgICAgICAgYm9va2luZ05vdGljZVRpbWUsXG4gICAgICAgIGNoZWNrSW5TdGFydCxcbiAgICAgICAgY2hlY2tJbkVuZCxcbiAgICAgICAgbWF4RGF5c05vdGljZSxcbiAgICAgICAgbWluTmlnaHQsXG4gICAgICAgIG1heE5pZ2h0LFxuICAgICAgICBiYXNlUHJpY2UsXG4gICAgICAgIGNsZWFuaW5nUHJpY2UsXG4gICAgICAgIGN1cnJlbmN5LFxuICAgICAgICB3ZWVrbHlEaXNjb3VudCxcbiAgICAgICAgbW9udGhseURpc2NvdW50LFxuICAgICAgICBjYW5jZWxsYXRpb25Qb2xpY3ksXG4gICAgICAgIHRheFJhdGVcbiAgICAgIH1cbiAgICAgIGJsb2NrZWREYXRlcyB7XG4gICAgICAgIGJsb2NrZWREYXRlc1xuICAgICAgICByZXNlcnZhdGlvbklkXG4gICAgICAgIGNhbGVuZGFyU3RhdHVzXG4gICAgICAgIGlzU3BlY2lhbFByaWNlXG4gICAgICB9XG4gICAgICBjYWxlbmRhcnMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHVybFxuICAgICAgICBsaXN0SWRcbiAgICAgICAgc3RhdHVzXG4gICAgICB9XG4gICAgICBsaXN0QmxvY2tlZFByaWNlIHtcbiAgICAgICAgICBsaXN0SWRcbiAgICAgICAgICBjYWxlbmRhclN0YXR1c1xuICAgICAgICAgIGlzU3BlY2lhbFByaWNlXG4gICAgICAgICAgYmxvY2tlZERhdGVzXG4gICAgICAgICAgY2FsZW5kYXJJZFxuICAgICAgICAgIHJlc2VydmF0aW9uSWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0aW5nRGF0YVN0ZXAzKGxpc3RJZCkge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfU1RBUlQsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBudWxsO1xuICAgICAgbGV0IHNldHRpbmdGaWVsZHNEYXRhID0ge307XG4gICAgICBjb25zdCBob3VzZVJ1bGVzID0gW107XG4gICAgICBjb25zdCB1cGRhdGVkQmxvY2tlZERhdGVzID0gW107XG4gICAgICBjb25zdCB1cGRhdGVkRGlzYWJsZWREYXRlcyA9IFtdO1xuICAgICAgY29uc3QgdXBkYXRlZEF2YWlsYWJsZURhdGVzID0gW107XG4gICAgICBjb25zdCB1cGRhdGVkQXZhaWxhYmxlRGF0ZXNQcmljZXMgPSBbXTtcblxuICAgICAgbGV0IGxpc3REYXRhID0ge307XG4gICAgICBsZXQgY2FsZW5kYXJzID0ge307XG5cbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBnZXQgbGlzdGluZyBkYXRhXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICB2YXJpYWJsZXM6IHsgbGlzdElkLCBwcmV2aWV3OiB0cnVlIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICAgIH0pO1xuXG5cbiAgICAgIGlmIChkYXRhICYmIGRhdGEuVXNlckxpc3RpbmcpIHtcbiAgICAgICAgLy8gUHJlcGFyaW5nIExpc3QgZGF0YVxuICAgICAgICBsaXN0RGF0YSA9IGRhdGEuVXNlckxpc3RpbmcubGlzdGluZ0RhdGE7XG4gICAgICAgIGNhbGVuZGFycyA9IGRhdGEuVXNlckxpc3RpbmcuY2FsZW5kYXJzO1xuXG4gICAgICAgIC8vIFByZXBhcmluZyBmb3IgaG91c2UgcnVsZXNcbiAgICAgICAgaWYgKGRhdGEuVXNlckxpc3RpbmcuaG91c2VSdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZGF0YS5Vc2VyTGlzdGluZy5ob3VzZVJ1bGVzLm1hcCgoaXRlbSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGhvdXNlUnVsZXMucHVzaChwYXJzZUludChpdGVtLmhvdXNlUnVsZXNJZCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldHRpbmdGaWVsZHNEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbGlzdERhdGEsIHsgaG91c2VSdWxlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXBhcmluZyBmb3IgYmxvY2tlZCBkYXRlc1xuICAgICAgICBpZiAoZGF0YS5Vc2VyTGlzdGluZy5ibG9ja2VkRGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGRhdGEuVXNlckxpc3RpbmcuYmxvY2tlZERhdGVzLm1hcCgoaXRlbSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbW9tZW50KGl0ZW0uYmxvY2tlZERhdGVzKTtcbiAgICAgICAgICAgIGlmIChpdGVtLnJlc2VydmF0aW9uSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICB1cGRhdGVkRGlzYWJsZWREYXRlcy5wdXNoKG5ldyBEYXRlKGRhdGUpKTtcbiAgICAgICAgICAgIH0gaWYgKGl0ZW0uY2FsZW5kYXJTdGF0dXMgJiYgaXRlbS5jYWxlbmRhclN0YXR1cyA9PT0gJ2F2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNTcGVjaWFsUHJpY2UpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXZhaWxhYmxlRGF0ZXMucHVzaChuZXcgRGF0ZShkYXRlKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlZEF2YWlsYWJsZURhdGVzUHJpY2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZSksXG4gICAgICAgICAgICAgICAgICBpc1NwZWNpYWxQcmljZTogaXRlbS5pc1NwZWNpYWxQcmljZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1cGRhdGVkQmxvY2tlZERhdGVzLnB1c2gobmV3IERhdGUoZGF0ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0dGluZ0ZpZWxkc0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBsaXN0RGF0YSwgc2V0dGluZ0ZpZWxkc0RhdGEsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF0ZXM6IHVwZGF0ZWREaXNhYmxlZERhdGVzLFxuICAgICAgICAgICAgICBibG9ja2VkRGF0ZXM6IHVwZGF0ZWRCbG9ja2VkRGF0ZXMsXG4gICAgICAgICAgICAgIGF2YWlsYWJsZURhdGVzOiB1cGRhdGVkQXZhaWxhYmxlRGF0ZXMsXG4gICAgICAgICAgICAgIGF2YWlsYWJsZURhdGVzUHJpY2VzOiB1cGRhdGVkQXZhaWxhYmxlRGF0ZXNQcmljZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGNoYW5nZSgnTGlzdFBsYWNlU3RlcDMnLCAnY2FsZW5kYXJzJywgY2FsZW5kYXJzKSk7XG4gICAgICAgIGlmICh1cGRhdGVkQmxvY2tlZERhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgZGlzcGF0Y2goY2hhbmdlKCdMaXN0UGxhY2VTdGVwMycsICdibG9ja2VkRGF0ZXMnLCB1cGRhdGVkQmxvY2tlZERhdGVzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodXBkYXRlZEF2YWlsYWJsZURhdGVzKSB7XG4gICAgICAgICAgYXdhaXQgZGlzcGF0Y2goY2hhbmdlKCdMaXN0UGxhY2VTdGVwMycsICdibG9ja2VkRGF0ZXMnLCB1cGRhdGVkQXZhaWxhYmxlRGF0ZXMpKTtcbiAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVkQXZhaWxhYmxlRGF0ZXNQcmljZXMpIHtcbiAgICAgICAgICBhd2FpdCBkaXNwYXRjaChjaGFuZ2UoJ0xpc3RQbGFjZVN0ZXAzJywgJ2Jsb2NrZWREYXRlcycsIHVwZGF0ZWRBdmFpbGFibGVEYXRlc1ByaWNlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybVZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEuVXNlckxpc3RpbmcsIHNldHRpbmdGaWVsZHNEYXRhLCBsaXN0RGF0YSwgY2FsZW5kYXJzKTtcblxuICAgICAgICAvLyBSZWluaXRpYWxpemUgdGhlIGZvcm0gdmFsdWVzXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGluaXRpYWxpemUoJ0xpc3RQbGFjZVN0ZXAzJywgZm9ybVZhbHVlcykpO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIGEgc3VjY2VzcyBhY3Rpb25cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfU1VDQ0VTUyxcbiAgICAgICAgICBzdGVwM0RhdGFJc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICBpc0V4aXN0aW5nTGlzdDogdHJ1ZSxcbiAgICAgICAgICBjYWxlbmRhcnM6IGRhdGEuVXNlckxpc3RpbmcuY2FsZW5kYXJzXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfRVJST1IsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0RBVEFfU1RFUDNfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmltcG9ydCB7XG4gIEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX1NUQVJULFxuICBHRVRfTElTVElOR19GSUVMRFNfSU5USUFMX1ZBTFVFU19TVUNDRVNTLFxuICBHRVRfTElTVElOR19GSUVMRFNfSU5USUFMX1ZBTFVFU19FUlJPUlxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBxdWVyeSgkc3RlcDogU3RyaW5nKXtcbiAgICBnZXRMaXN0aW5nU2V0dGluZ3Moc3RlcDogJHN0ZXApIHtcbiAgICAgIGlkXG4gICAgICB0eXBlTmFtZVxuICAgICAgZmllbGRUeXBlXG4gICAgICB0eXBlTGFiZWxcbiAgICAgIHN0ZXBcbiAgICAgIGlzRW5hYmxlXG4gICAgICBpc011bHRpVmFsdWVcbiAgICAgIGxpc3RTZXR0aW5ncyB7XG4gICAgICAgIGlkXG4gICAgICAgIHR5cGVJZFxuICAgICAgICBpdGVtTmFtZVxuICAgICAgICBvdGhlckl0ZW1OYW1lXG4gICAgICAgIG1heGltdW1cbiAgICAgICAgbWluaW11bVxuICAgICAgICBzdGFydFZhbHVlXG4gICAgICAgIGVuZFZhbHVlXG4gICAgICAgIGlzRW5hYmxlXG4gICAgICAgIGltYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdGluZ0ZpZWxkc1ZhbHVlcyhzdGVwLCBsaXN0SWQsIGlzT3RoZXJQYWdlKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX1NUQVJULFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcblxuICAgICAgY29uc3Qgc3RlcDFEYXRhSXNMb2FkZWQgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uLnN0ZXAxRGF0YUlzTG9hZGVkO1xuICAgICAgY29uc3Qgc3RlcDJEYXRhSXNMb2FkZWQgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uLnN0ZXAyRGF0YUlzTG9hZGVkO1xuICAgICAgY29uc3Qgc3RlcDNEYXRhSXNMb2FkZWQgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uLnN0ZXAzRGF0YUlzTG9hZGVkO1xuXG4gICAgICAvLyBHZXQgQmFzZSBDdXJyZW5jeSBmcm9tIFJlZHV4IFN0b3JlXG4gICAgICBjb25zdCBiYXNlQ3VycmVuY3kgPSBnZXRTdGF0ZSgpLmN1cnJlbmN5LmJhc2U7XG4gICAgICAvLyBTZW5kIFJlcXVlc3QgdG8gZ2V0IGxpc3RpbmcgZGF0YVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7IHN0ZXAgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknXG4gICAgICB9KTtcblxuICAgICAgbGV0IGxpc3RpbmdGaWVsZHNWYWx1ZXMgPSB7fTtcbiAgICAgIGxldCBiZWRUeXBlID0gZ2V0U3RhdGUoKS5saXN0aW5nRmllbGRzLmRhdGEuYmVkVHlwZTtcbiAgICAgIGxldCBiZWRUeXBlVmFsdWU7XG5cbiAgICAgIGlmICghZGF0YSAmJiAhZGF0YS5nZXRMaXN0aW5nU2V0dGluZ3MpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9MSVNUSU5HX0ZJRUxEU19JTlRJQUxfVkFMVUVTX0VSUk9SLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgZGF0YS5nZXRMaXN0aW5nU2V0dGluZ3MubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5maWVsZFR5cGUgPT09IFwibnVtYmVyVHlwZVwiKSB7XG4gICAgICAgICAgICBsaXN0aW5nRmllbGRzVmFsdWVzW2l0ZW0udHlwZU5hbWVdID0gaXRlbS5saXN0U2V0dGluZ3MubGVuZ3RoID4gMCA/IGl0ZW0ubGlzdFNldHRpbmdzWzBdLnN0YXJ0VmFsdWUgOiBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pc011bHRpVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgbGlzdGluZ0ZpZWxkc1ZhbHVlc1tpdGVtLnR5cGVOYW1lXSA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IHVuU2VsZWN0SW5kZXggPSBpdGVtLmxpc3RTZXR0aW5ncy5sZW5ndGggPiAwID8gaXRlbS5saXN0U2V0dGluZ3MuZmluZEluZGV4KG8gPT4gKG8uaXNFbmFibGUgPT0gMSkpIDogbnVsbDtcbiAgICAgICAgICAgICAgbGlzdGluZ0ZpZWxkc1ZhbHVlc1tpdGVtLnR5cGVOYW1lXSA9IGl0ZW0ubGlzdFNldHRpbmdzW3VuU2VsZWN0SW5kZXhdLmlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChiZWRUeXBlICYmIGJlZFR5cGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGJlZFR5cGUubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGJlZFR5cGVWYWx1ZSA9IGJlZFR5cGUubGVuZ3RoID4gMCA/IGJlZFR5cGVbMF0uaWQgOiBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVpbml0aWFsaXplIHRoZSBmb3JtIHZhbHVlc1xuICAgICAgICBpZiAoc3RlcCA9PT0gXCIyXCIgJiYgIXN0ZXAyRGF0YUlzTG9hZGVkKSB7XG4gICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZXNTdGVwMiA9IE9iamVjdC5hc3NpZ24oe30sIGxpc3RpbmdGaWVsZHNWYWx1ZXMsIHsgaWQ6IGxpc3RJZCB9KTtcbiAgICAgICAgICBkaXNwYXRjaChpbml0aWFsaXplKFwiTGlzdFBsYWNlU3RlcDJcIiwgdXBkYXRlZFZhbHVlc1N0ZXAyLCB0cnVlKSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfRklFTERTX0lOVElBTF9WQUxVRVNfU1VDQ0VTUyxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSBcIjNcIiAmJiAhc3RlcDNEYXRhSXNMb2FkZWQpIHtcbiAgICAgICAgICBsZXQgdXBkYXRlZFZhbHVlc1N0ZXAzID0gT2JqZWN0LmFzc2lnbih7fSwgbGlzdGluZ0ZpZWxkc1ZhbHVlcywgeyBpZDogbGlzdElkIH0sIHsgY3VycmVuY3k6IGJhc2VDdXJyZW5jeSB9LCB7IGJvb2tpbmdUeXBlOiAnaW5zdGFudCcgfSwgeyBtYXhEYXlzTm90aWNlOiAnYXZhaWxhYmxlJyB9KTtcbiAgICAgICAgICBkaXNwYXRjaChpbml0aWFsaXplKFwiTGlzdFBsYWNlU3RlcDNcIiwgdXBkYXRlZFZhbHVlc1N0ZXAzLCB0cnVlKSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfRklFTERTX0lOVElBTF9WQUxVRVNfU1VDQ0VTUyxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMzogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXN0ZXAxRGF0YUlzTG9hZGVkIHx8IGlzT3RoZXJQYWdlKSB7XG4gICAgICAgICAgICBsZXQgdXBkYXRlZFZhbHVlc1N0ZXAxID0gT2JqZWN0LmFzc2lnbih7fSwgbGlzdGluZ0ZpZWxkc1ZhbHVlcywgeyBiZWRUeXBlczogW3sgYmVkQ291bnQ6IDEsIGJlZFR5cGU6IGJlZFR5cGVWYWx1ZSB9XSB9LCB7IHJlc2lkZW5jZVR5cGU6IFwiMVwiIH0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goaW5pdGlhbGl6ZShcIkxpc3RQbGFjZVN0ZXAxXCIsIHVwZGF0ZWRWYWx1ZXNTdGVwMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19GSUVMRFNfSU5USUFMX1ZBTFVFU19TVUNDRVNTLFxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzTG9hZGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBHRVRfTElTVElOR19GSUVMRFNfSU5USUFMX1ZBTFVFU19FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7XG4gIEdFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1RBUlQsXG4gIEdFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1VDQ0VTUyxcbiAgR0VUX0xJU1RJTkdfU1RFUFNfREFUQV9FUlJPUixcbiAgUkVTRVRfTElTVElOR19TVEVQU19EQVRBX1NUQVJULFxuICBSRVNFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1VDQ0VTUyxcbiAgUkVTRVRfTElTVElOR19TVEVQU19EQVRBX0VSUk9SXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG4vLyBBY3Rpb25cbi8vIEZvciBTdGVwIzFcbmltcG9ydCB7IGdldExpc3RpbmdEYXRhIH0gZnJvbSAnLi9nZXRMaXN0aW5nJztcbi8vIEZvciBTdGVwIzJcbmltcG9ydCB7IGdldExpc3RpbmdEYXRhU3RlcDIgfSBmcm9tICcuL2dldExpc3RpbmdEYXRhU3RlcDInO1xuaW1wb3J0IHsgZ2V0TGlzdFBob3RvcyB9IGZyb20gJy4vZ2V0TGlzdFBob3Rvcyc7XG5pbXBvcnQgeyBnZXRMaXN0aW5nRGF0YVN0ZXAzIH0gZnJvbSAnLi9nZXRMaXN0aW5nRGF0YVN0ZXAzJztcbmltcG9ydCB7IGdldExpc3RpbmdGaWVsZHNWYWx1ZXMgfSBmcm9tICcuL2dldExpc3RpbmdGaWVsZHNWYWx1ZXMnO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHF1ZXJ5ICgkbGlzdElkOlN0cmluZyEpIHtcbiAgICBzaG93TGlzdGluZ1N0ZXBzIChsaXN0SWQ6JGxpc3RJZCkge1xuICAgICAgaWRcbiAgICAgIGxpc3RJZFxuICAgICAgc3RlcDFcbiAgICAgIHN0ZXAyXG4gICAgICBzdGVwM1xuICAgICAgc3RlcDRcbiAgICAgIGxpc3Rpbmcge1xuICAgICAgICBpZFxuICAgICAgICBpc1JlYWR5XG4gICAgICAgIGlzUHVibGlzaGVkXG4gICAgICAgIGxpc3RBcHByb3ZhbFN0YXR1c1xuICAgICAgICB1c2VyIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgdXNlckJhblN0YXR1c1xuICAgICAgICAgIHVzZXJEZWxldGVkQXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0aW5nU3RlcHMobGlzdElkKSB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCB7IGNsaWVudCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX0xJU1RJTkdfU1RFUFNfREFUQV9TVEFSVCxcbiAgICAgIGxpc3RpbmdTdGVwczogdW5kZWZpbmVkLFxuICAgICAgaXNFeGlzdGluZ0xpc3Q6IHVuZGVmaW5lZCxcbiAgICAgIGlzTG9jYXRpb25DaG9zZW46IHVuZGVmaW5lZCxcbiAgICAgIHN0ZXAxRGF0YUlzTG9hZGVkOiB1bmRlZmluZWQsXG4gICAgICBzdGVwMkRhdGFJc0xvYWRlZDogdW5kZWZpbmVkLFxuICAgICAgc3RlcDNEYXRhSXNMb2FkZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMjogdW5kZWZpbmVkLFxuICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAzOiB1bmRlZmluZWQsXG4gICAgICBwaG90b3NDb3VudDogdW5kZWZpbmVkLFxuICAgICAgbGlzdFBob3RvczogdW5kZWZpbmVkLFxuICAgICAgc3RlcHNMb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIC8vIEZvciBBZGRpbmcgbmV3IGxpc3RcbiAgICBpZiAobGlzdElkID09PSB1bmRlZmluZWQgfHwgbGlzdElkID09PSBudWxsKSB7XG4gICAgICAvLyBMb2FkIGluaXRpYWwgZGF0YSBmb3Igc3RlcCMxXG4gICAgICBkaXNwYXRjaChnZXRMaXN0aW5nRmllbGRzVmFsdWVzKFwiMVwiKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIFNlbmQgUmVxdWVzdCB0byBnZXQgbGlzdGluZyBkYXRhXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICB2YXJpYWJsZXM6IHsgbGlzdElkIH0sXG4gICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgfSk7XG4gICAgICAvLyBDaGVjayBpZiBpbml0aWFsIHZhbHVlcyBhbHJlYWR5IHVwZGF0ZWQgdG8gdGhlIHN0b3JlXG4gICAgICBjb25zdCBpbml0aWFsVmFsdWVzTG9hZGVkID0gZ2V0U3RhdGUoKS5sb2NhdGlvbi5pbml0aWFsVmFsdWVzTG9hZGVkO1xuICAgICAgY29uc3QgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAyID0gZ2V0U3RhdGUoKS5sb2NhdGlvbi5pbml0aWFsVmFsdWVzTG9hZGVkU3RlcDI7XG4gICAgICBjb25zdCBpbml0aWFsVmFsdWVzTG9hZGVkU3RlcDMgPSBnZXRTdGF0ZSgpLmxvY2F0aW9uLmluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMztcbiAgICAgIC8vIENoZWNrIGlmIGxpc3QgZGF0YSBhbHJlYWR5IHVwZGF0ZWQgdG8gdGhlIHN0b3JlXG4gICAgICBjb25zdCBzdGVwMURhdGFJc0xvYWRlZCA9IGdldFN0YXRlKCkubG9jYXRpb24uc3RlcDFEYXRhSXNMb2FkZWQ7XG4gICAgICBjb25zdCBzdGVwMkRhdGFJc0xvYWRlZCA9IGdldFN0YXRlKCkubG9jYXRpb24uc3RlcDJEYXRhSXNMb2FkZWQ7XG4gICAgICBjb25zdCBzdGVwM0RhdGFJc0xvYWRlZCA9IGdldFN0YXRlKCkubG9jYXRpb24uc3RlcDNEYXRhSXNMb2FkZWQ7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnNob3dMaXN0aW5nU3RlcHMpIHtcbiAgICAgICAgLy8gQXNzaWduIHN0ZXBzIGRhdGEgdG8gYSBjb25zdFxuICAgICAgICBjb25zdCBzdGVwcyA9IGRhdGEuc2hvd0xpc3RpbmdTdGVwcztcbiAgICAgICAgLy8gQ2hlY2sgaWYgU3RlcDFEYXRhIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGlmIChzdGVwMURhdGFJc0xvYWRlZCAhPSB0cnVlKSB7XG4gICAgICAgICAgLy8gTG9hZCBkYXRhIGlmIFN0ZXAjMSBpcyBlaXRoZXIgYWN0aXZlIG9yIGNvbXBsZXRlZCBcbiAgICAgICAgICBpZiAoc3RlcHMuc3RlcDEgPT09IFwiYWN0aXZlXCIgfHwgc3RlcHMuc3RlcDEgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldExpc3RpbmdEYXRhKGxpc3RJZCkpO1xuICAgICAgICAgICAgLy8gTG9hZCBwaG90b3Mgb2YgdGhlIGxpc3RpbmcgZm9yIHN0ZXAjMlxuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0TGlzdFBob3RvcyhsaXN0SWQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGluaXRpYWxWYWx1ZXNMb2FkZWQgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvLyBMb2FkIGluaXRpYWwgZGF0YSBmb3Igc3RlcCMxXG4gICAgICAgICAgICAgIGRpc3BhdGNoKGdldExpc3RpbmdGaWVsZHNWYWx1ZXMoXCIxXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgU3RlcDJEYXRhIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGlmIChzdGVwMkRhdGFJc0xvYWRlZCAhPSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHN0ZXBzLnN0ZXAyID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0aW5nRGF0YVN0ZXAyKGxpc3RJZCkpO1xuICAgICAgICAgICAgLy8gTG9hZCBwaG90b3Mgb2YgdGhlIGxpc3RpbmcgZm9yIHN0ZXAjMlxuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0TGlzdFBob3RvcyhsaXN0SWQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMiAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgIC8vIExvYWQgaW5pdGlhbCBkYXRhIGZvciBzdGVwIzJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goZ2V0TGlzdGluZ0ZpZWxkc1ZhbHVlcyhcIjJcIiwgbGlzdElkKSk7XG4gICAgICAgICAgICAgIC8vIExvYWQgcGhvdG9zIG9mIHRoZSBsaXN0aW5nIGZvciBzdGVwIzJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goZ2V0TGlzdFBob3RvcyhsaXN0SWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgU3RlcDNEYXRhIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIGlmIChzdGVwM0RhdGFJc0xvYWRlZCAhPSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHN0ZXBzLnN0ZXAzID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0aW5nRGF0YVN0ZXAzKGxpc3RJZCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAzICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgLy8gTG9hZCBpbml0aWFsIGRhdGEgZm9yIHN0ZXAjM1xuICAgICAgICAgICAgICBkaXNwYXRjaChnZXRMaXN0aW5nRmllbGRzVmFsdWVzKFwiM1wiLCBsaXN0SWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIExpc3QgU3RlcHMgb24gdGhlIHN0b3JlICYgbWFyayBpdCBhcyBleGlzdGluZyBsaXN0XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfTElTVElOR19TVEVQU19EQVRBX1NVQ0NFU1MsXG4gICAgICAgICAgbGlzdGluZ1N0ZXBzOiBkYXRhLnNob3dMaXN0aW5nU3RlcHMsXG4gICAgICAgICAgaXNFeGlzdGluZ0xpc3Q6IHRydWUsXG4gICAgICAgICAgc3RlcHNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogR0VUX0xJU1RJTkdfU1RFUFNfREFUQV9FUlJPUixcbiAgICAgICAgc3RlcHNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNldExpc3RpbmdTdGVwcygpIHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBSRVNFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1RBUlQsXG4gICAgICBzdGVwc0xvYWRpbmc6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGluaXRpYWxpemUoJ0xpc3RQbGFjZVN0ZXAxJywge30pKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGluaXRpYWxpemUoJ0xpc3RQbGFjZVN0ZXAyJywge30pKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGluaXRpYWxpemUoJ0xpc3RQbGFjZVN0ZXAzJywge30pKTtcblxuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBSRVNFVF9MSVNUSU5HX1NURVBTX0RBVEFfU1VDQ0VTUyxcbiAgICAgICAgbGlzdGluZ1N0ZXBzOiB1bmRlZmluZWQsXG4gICAgICAgIGlzRXhpc3RpbmdMaXN0OiB1bmRlZmluZWQsXG4gICAgICAgIGlzTG9jYXRpb25DaG9zZW46IHVuZGVmaW5lZCxcbiAgICAgICAgc3RlcDFEYXRhSXNMb2FkZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RlcDJEYXRhSXNMb2FkZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RlcDNEYXRhSXNMb2FkZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaW5pdGlhbFZhbHVlc0xvYWRlZFN0ZXAyOiB1bmRlZmluZWQsXG4gICAgICAgIGluaXRpYWxWYWx1ZXNMb2FkZWRTdGVwMzogdW5kZWZpbmVkLFxuICAgICAgICBwaG90b3NDb3VudDogdW5kZWZpbmVkLFxuICAgICAgICBsaXN0UGhvdG9zOiB1bmRlZmluZWQsXG4gICAgICAgIHN0ZXBzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYXdhaXQgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBSRVNFVF9MSVNUSU5HX1NURVBTX0RBVEFfRVJST1IsXG4gICAgICAgIHN0ZXBzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBzIGZyb20gXCIuL0xheW91dC5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgQ29va2llc0Rpc2NsYWltZXIgZnJvbSBcIi4uL0Nvb2tpZXNEaXNjbGFpbWVyXCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBhZGRpbmdUb3B9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb29raWVzRGlzY2xhaW1lciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExheW91dCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQWpCQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFpQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==