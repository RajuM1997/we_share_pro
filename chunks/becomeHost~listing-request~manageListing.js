require("source-map-support").install();
exports.ids = ["becomeHost~listing-request~manageListing"];
exports.modules = {

/***/ "./src/actions/Listing/ManagePublishStatus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePublishStatus", function() { return ManagePublishStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitForVerification", function() { return submitForVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveListing", function() { return approveListing; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/config.js");
/* harmony import */ var _core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/core/email/sendEmail.js");
/* harmony import */ var _helpers_sendNotifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/helpers/sendNotifications.js");
 // Toaster





 // To Refresh the Manage Listing Status

const ManageListingQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]` 
    query ManageListings{
        ManageListings {
            id
            title
            city
            updatedAt
            coverPhoto
            isPublished
            listApprovalStatus
            isReady
            listPhotos{  
                id
                name
            }
            settingsData {
                listsettings {
                    id
                    itemName
                }
            }
            listingSteps {
                id
                step1
                step2
                step3
                step4
            }
        }
  }`; // To Refresh Listing Steps Query

const ListingStepsQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
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
            }
        }
    }`;
const getUpcomingBookingQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query getUpcomingBookings ($listId: Int!){
    getUpcomingBookings(listId: $listId){
      count
    }
  }`;
const ListingQuery = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]` 
  query UserListing($listId:String!,$preview: Boolean) {
    UserListing(listId:$listId, preview: $preview) {
      id
      userId
      title
      coverPhoto
      country
      city
      state
      personCapacity
      zipcode
      user {
        id
        email
        profile{
          profileId
          displayName
          firstName
        }
      }
    }
  }`;
function ManagePublishStatus(listId, action) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_START"],
      payload: {
        publishListLoading: true
      }
    });
    let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation ManagePublish($listId: Int!, $action: String!) {
                managePublish(listId: $listId, action: $action) {
                    status
                }
            }
        `; // Update List Status

    let wishListStatus = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation updateListStatus($listId:Int!, $action: String!) {
                 updateListStatus (listId:$listId, action: $action) {
                    status
                 }
             }
        `;
    let upcomingBookingCount;
    const bookedData = await client.query({
      query: getUpcomingBookingQuery,
      variables: {
        listId
      },
      fetchPolicy: 'network-only'
    });

    if (bookedData && bookedData.data && bookedData.data.getUpcomingBookings) {
      upcomingBookingCount = bookedData.data.getUpcomingBookings.count;
    }

    try {
      let type = 'Publish Listing';

      if (action === 'unPublish') {
        type = 'UnPublish Listing';
      }

      if (upcomingBookingCount > 0 && action === 'unPublish') {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error(type, 'You cannot unpublish as you have upcoming bookings or enquiries for this listing.');
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
          payload: {
            publishListLoading: false
          }
        });
      } else {
        const {
          data
        } = await client.mutate({
          mutation,
          variables: {
            listId,
            action
          },
          refetchQueries: [{
            query: ManageListingQuery
          }]
        });

        if (data.managePublish.status === '200') {
          const {
            dataList
          } = await client.mutate({
            mutation: wishListStatus,
            variables: {
              listId,
              action
            }
          }); // Reload Existing Steps Page

          const {
            data
          } = await client.query({
            query: ListingStepsQuery,
            variables: {
              listId
            },
            fetchPolicy: 'network-only'
          });
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success(type, type + " is success!");
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_SUCCESS"],
            payload: {
              listingSteps: data.showListingSteps,
              publishListLoading: false
            }
          });
        } else {
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error(type, type + " is failed!");
          dispatch({
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
            payload: {
              status: data.managePublish.status,
              publishListLoading: false
            }
          });
        }
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
        payload: {
          error,
          publishListLoading: false
        }
      });
    }
  };
}
function submitForVerification(listId, listApprovalStatus) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_START"],
      payload: {
        publishListLoading: true
      }
    });
    let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
        mutation submitForVerification($id: Int,$listApprovalStatus: String){
          submitForVerification(id:$id, listApprovalStatus: $listApprovalStatus){
              id
              status
            }
          }
        `;

    try {
      const dataListingQuery = await client.query({
        query: ListingQuery,
        variables: {
          listId,
          preview: true
        },
        fetchPolicy: 'network-only'
      });
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          id: listId,
          listApprovalStatus
        }
      });

      if (data.submitForVerification.status == "200") {
        // Reload Existing Steps Page
        const {
          data
        } = await client.query({
          query: ListingStepsQuery,
          variables: {
            listId
          },
          fetchPolicy: 'network-only'
        });
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_SUCCESS"],
          payload: {
            listingSteps: data.showListingSteps,
            publishListLoading: false
          }
        });

        if (dataListingQuery && dataListingQuery.data.UserListing) {
          let listDetails = dataListingQuery.data.UserListing;
          let content = {
            listId: listDetails.id,
            listTitle: listDetails.title,
            hostName: listDetails.user.profile.firstName
          };
          react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success("Success!, Your Listing has been submitted for Approval");
          let createHistory = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation createListingHistory($listId:Int!, $userId: String, $status: String, $reason: String) {
              createListingHistory (listId:$listId, userId: $userId, status:$status, reason:$reason) {
                    status
                 }
             }
        `;
          const {
            data
          } = await client.mutate({
            mutation: createHistory,
            variables: {
              listId,
              userId: listDetails.userId,
              status: "submitForverification"
            }
          });
          await Object(_core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__["sendEmail"])(_config__WEBPACK_IMPORTED_MODULE_3__["adminEmail"], 'listPublishRequest', content);
        }
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed Action!");
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
          payload: {
            status: data.managePublish.status,
            publishListLoading: false
          }
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
        payload: {
          error,
          publishListLoading: false
        }
      });
    }
  };
}
function approveListing(listId, listApprovalStatus, reason) {
  return async (dispatch, getState, {
    client
  }) => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_START"],
      payload: {
        publishListLoading: true
      }
    });
    let mutation = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
			mutation approveListing($id: Int, $listApprovalStatus: String){
				approveListing(id:$id, listApprovalStatus:$listApprovalStatus){
					id
					status
				}
			}
        `;

    try {
      const dataListingQuery = await client.query({
        query: ListingQuery,
        variables: {
          listId,
          preview: true
        },
        fetchPolicy: 'network-only'
      });
      const {
        data
      } = await client.mutate({
        mutation,
        variables: {
          id: listId,
          listApprovalStatus
        }
      });

      if (data.approveListing.status === "200") {
        const {
          data
        } = await client.query({
          query: ListingStepsQuery,
          variables: {
            listId
          },
          fetchPolicy: 'network-only'
        });

        if (dataListingQuery && dataListingQuery.data.UserListing) {
          let listDetails = dataListingQuery.data.UserListing;
          let content = {
            listId: listDetails.id,
            listTitle: listDetails.title,
            hostName: listDetails.user.profile.firstName,
            reason: listApprovalStatus === 'declined' ? reason : null
          };
          let createHistory = react_apollo__WEBPACK_IMPORTED_MODULE_0__["gql"]`
            mutation createListingHistory($listId:Int!, $userId: String, $status: String!, $reason: String) {
              createListingHistory (listId:$listId, userId: $userId, status:$status, reason:$reason) {
                    status
                 }
             }
        `;

          if (listApprovalStatus === 'declined') {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success('Success!', 'The Listing review request has been declined successfully.');
            const {
              data
            } = await client.mutate({
              mutation: createHistory,
              variables: {
                listId,
                userId: listDetails.userId,
                status: "declined",
                reason: reason
              }
            });
            let notifyContent = {
              "screenType": "becomeahost",
              "userType": 'host',
              "listId": listId,
              "userName": listDetails.user.profile.firstName,
              "listTitle": listDetails.title,
              "reason": reason
            };
            Object(_helpers_sendNotifications__WEBPACK_IMPORTED_MODULE_5__["sendNotifications"])('listDeclined', notifyContent, listDetails.userId);
            Object(_core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__["sendEmail"])(listDetails.user.email, 'adminListReject', content);
          } else {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].success('Success!', 'Listing is approved successfully!');
            const {
              data
            } = await client.mutate({
              mutation: createHistory,
              variables: {
                listId,
                userId: listDetails.userId,
                status: "approved"
              }
            });
            let notifyContent = {
              "screenType": "becomeahost",
              "userType": 'host',
              "listId": listId,
              "userName": listDetails.user.profile.firstName,
              "listTitle": listDetails.title
            };
            Object(_helpers_sendNotifications__WEBPACK_IMPORTED_MODULE_5__["sendNotifications"])('listApproved', notifyContent, listDetails.userId);
            Object(_core_email_sendEmail__WEBPACK_IMPORTED_MODULE_4__["sendEmail"])(listDetails.user.email, 'adminListApprove', content);
          }
        }

        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_SUCCESS"],
          payload: {
            listingSteps: data.showListingSteps,
            publishListLoading: false
          }
        });
      } else {
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error("Failed Action!");
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
          payload: {
            publishListLoading: false
          }
        });
      }
    } catch (error) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["MANANGE_LISTING_PUBLISH_STATUS_ERROR"],
        payload: {
          error,
          publishListLoading: false
        }
      });
    }
  };
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2JlY29tZUhvc3R+bGlzdGluZy1yZXF1ZXN0fm1hbmFnZUxpc3RpbmcuanMiLCJzb3VyY2VzIjpbIi9ob21lL3JhanUvcHJvamVjdHMvcmVudGFsbC1zdGFydHVwcHJvLXYzLjItbWFzdGVyL3NyYy9hY3Rpb25zL0xpc3RpbmcvTWFuYWdlUHVibGlzaFN0YXR1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuLy8gVG9hc3RlclxuaW1wb3J0IHsgdG9hc3RyIH0gZnJvbSAncmVhY3QtcmVkdXgtdG9hc3RyJztcblxuaW1wb3J0IHtcbiAgTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NUQVJULFxuICBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfU1VDQ0VTUyxcbiAgTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX0VSUk9SLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYWRtaW5FbWFpbCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICcuLi8uLi9jb3JlL2VtYWlsL3NlbmRFbWFpbCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc2VuZE5vdGlmaWNhdGlvbnMnO1xuXG4vLyBUbyBSZWZyZXNoIHRoZSBNYW5hZ2UgTGlzdGluZyBTdGF0dXNcbmNvbnN0IE1hbmFnZUxpc3RpbmdRdWVyeSA9IGdxbGAgXG4gICAgcXVlcnkgTWFuYWdlTGlzdGluZ3N7XG4gICAgICAgIE1hbmFnZUxpc3RpbmdzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgY2l0eVxuICAgICAgICAgICAgdXBkYXRlZEF0XG4gICAgICAgICAgICBjb3ZlclBob3RvXG4gICAgICAgICAgICBpc1B1Ymxpc2hlZFxuICAgICAgICAgICAgbGlzdEFwcHJvdmFsU3RhdHVzXG4gICAgICAgICAgICBpc1JlYWR5XG4gICAgICAgICAgICBsaXN0UGhvdG9zeyAgXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXR0aW5nc0RhdGEge1xuICAgICAgICAgICAgICAgIGxpc3RzZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdGluZ1N0ZXBzIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHN0ZXAxXG4gICAgICAgICAgICAgICAgc3RlcDJcbiAgICAgICAgICAgICAgICBzdGVwM1xuICAgICAgICAgICAgICAgIHN0ZXA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgfWA7XG5cbi8vIFRvIFJlZnJlc2ggTGlzdGluZyBTdGVwcyBRdWVyeVxuY29uc3QgTGlzdGluZ1N0ZXBzUXVlcnkgPSBncWxgXG4gICAgcXVlcnkgKCRsaXN0SWQ6U3RyaW5nISkge1xuICAgICAgICBzaG93TGlzdGluZ1N0ZXBzIChsaXN0SWQ6JGxpc3RJZCkge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGxpc3RJZFxuICAgICAgICAgICAgc3RlcDFcbiAgICAgICAgICAgIHN0ZXAyXG4gICAgICAgICAgICBzdGVwM1xuICAgICAgICAgICAgc3RlcDRcbiAgICAgICAgICAgIGxpc3Rpbmcge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaXNSZWFkeVxuICAgICAgICAgICAgICAgIGlzUHVibGlzaGVkXG4gICAgICAgICAgICAgICAgbGlzdEFwcHJvdmFsU3RhdHVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9YDtcblxuY29uc3QgZ2V0VXBjb21pbmdCb29raW5nUXVlcnkgPSBncWxgXG5xdWVyeSBnZXRVcGNvbWluZ0Jvb2tpbmdzICgkbGlzdElkOiBJbnQhKXtcbiAgICBnZXRVcGNvbWluZ0Jvb2tpbmdzKGxpc3RJZDogJGxpc3RJZCl7XG4gICAgICBjb3VudFxuICAgIH1cbiAgfWA7XG5cbmNvbnN0IExpc3RpbmdRdWVyeSA9IGdxbGAgXG4gIHF1ZXJ5IFVzZXJMaXN0aW5nKCRsaXN0SWQ6U3RyaW5nISwkcHJldmlldzogQm9vbGVhbikge1xuICAgIFVzZXJMaXN0aW5nKGxpc3RJZDokbGlzdElkLCBwcmV2aWV3OiAkcHJldmlldykge1xuICAgICAgaWRcbiAgICAgIHVzZXJJZFxuICAgICAgdGl0bGVcbiAgICAgIGNvdmVyUGhvdG9cbiAgICAgIGNvdW50cnlcbiAgICAgIGNpdHlcbiAgICAgIHN0YXRlXG4gICAgICBwZXJzb25DYXBhY2l0eVxuICAgICAgemlwY29kZVxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICAgIGVtYWlsXG4gICAgICAgIHByb2ZpbGV7XG4gICAgICAgICAgcHJvZmlsZUlkXG4gICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfWA7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZVB1Ymxpc2hTdGF0dXMobGlzdElkLCBhY3Rpb24pIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcbiAgICAgICAgICAgIG11dGF0aW9uIE1hbmFnZVB1Ymxpc2goJGxpc3RJZDogSW50ISwgJGFjdGlvbjogU3RyaW5nISkge1xuICAgICAgICAgICAgICAgIG1hbmFnZVB1Ymxpc2gobGlzdElkOiAkbGlzdElkLCBhY3Rpb246ICRhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgLy8gVXBkYXRlIExpc3QgU3RhdHVzXG4gICAgbGV0IHdpc2hMaXN0U3RhdHVzID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gdXBkYXRlTGlzdFN0YXR1cygkbGlzdElkOkludCEsICRhY3Rpb246IFN0cmluZyEpIHtcbiAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdFN0YXR1cyAobGlzdElkOiRsaXN0SWQsIGFjdGlvbjogJGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgIGxldCB1cGNvbWluZ0Jvb2tpbmdDb3VudDtcbiAgICBjb25zdCBib29rZWREYXRhID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBnZXRVcGNvbWluZ0Jvb2tpbmdRdWVyeSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsaXN0SWRcbiAgICAgIH0sXG4gICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICB9KTtcblxuICAgIGlmIChib29rZWREYXRhICYmIGJvb2tlZERhdGEuZGF0YSAmJiBib29rZWREYXRhLmRhdGEuZ2V0VXBjb21pbmdCb29raW5ncykge1xuICAgICAgdXBjb21pbmdCb29raW5nQ291bnQgPSBib29rZWREYXRhLmRhdGEuZ2V0VXBjb21pbmdCb29raW5ncy5jb3VudDtcbiAgICB9XG5cbiAgICB0cnkge1xuXG4gICAgICBsZXQgdHlwZSA9ICdQdWJsaXNoIExpc3RpbmcnO1xuICAgICAgaWYgKGFjdGlvbiA9PT0gJ3VuUHVibGlzaCcpIHtcbiAgICAgICAgdHlwZSA9ICdVblB1Ymxpc2ggTGlzdGluZydcbiAgICAgIH1cblxuICAgICAgaWYgKHVwY29taW5nQm9va2luZ0NvdW50ID4gMCAmJiBhY3Rpb24gPT09ICd1blB1Ymxpc2gnKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvcih0eXBlLCAnWW91IGNhbm5vdCB1bnB1Ymxpc2ggYXMgeW91IGhhdmUgdXBjb21pbmcgYm9va2luZ3Mgb3IgZW5xdWlyaWVzIGZvciB0aGlzIGxpc3RpbmcuJyk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBsaXN0SWQsXG4gICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbXG4gICAgICAgICAgICB7IHF1ZXJ5OiBNYW5hZ2VMaXN0aW5nUXVlcnkgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhLm1hbmFnZVB1Ymxpc2guc3RhdHVzID09PSAnMjAwJykge1xuXG4gICAgICAgICAgY29uc3QgeyBkYXRhTGlzdCB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICBtdXRhdGlvbjogd2lzaExpc3RTdGF0dXMsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgbGlzdElkLFxuICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBSZWxvYWQgRXhpc3RpbmcgU3RlcHMgUGFnZVxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBMaXN0aW5nU3RlcHNRdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQgfSxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0b2FzdHIuc3VjY2Vzcyh0eXBlLCB0eXBlICsgXCIgaXMgc3VjY2VzcyFcIik7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NVQ0NFU1MsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIGxpc3RpbmdTdGVwczogZGF0YS5zaG93TGlzdGluZ1N0ZXBzLFxuICAgICAgICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICB0b2FzdHIuZXJyb3IodHlwZSwgdHlwZSArIFwiIGlzIGZhaWxlZCFcIik7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX0VSUk9SLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBzdGF0dXM6IGRhdGEubWFuYWdlUHVibGlzaC5zdGF0dXMsXG4gICAgICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IE1BTkFOR0VfTElTVElOR19QVUJMSVNIX1NUQVRVU19FUlJPUixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0Rm9yVmVyaWZpY2F0aW9uKGxpc3RJZCwgbGlzdEFwcHJvdmFsU3RhdHVzKSB7XG5cbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgY2xpZW50IH0pID0+IHtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IE1BTkFOR0VfTElTVElOR19QVUJMSVNIX1NUQVRVU19TVEFSVCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbXV0YXRpb24gPSBncWxgXG4gICAgICAgIG11dGF0aW9uIHN1Ym1pdEZvclZlcmlmaWNhdGlvbigkaWQ6IEludCwkbGlzdEFwcHJvdmFsU3RhdHVzOiBTdHJpbmcpe1xuICAgICAgICAgIHN1Ym1pdEZvclZlcmlmaWNhdGlvbihpZDokaWQsIGxpc3RBcHByb3ZhbFN0YXR1czogJGxpc3RBcHByb3ZhbFN0YXR1cyl7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhTGlzdGluZ1F1ZXJ5ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IExpc3RpbmdRdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbGlzdElkLFxuICAgICAgICAgIHByZXZpZXc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogbGlzdElkLFxuICAgICAgICAgIGxpc3RBcHByb3ZhbFN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRhLnN1Ym1pdEZvclZlcmlmaWNhdGlvbi5zdGF0dXMgPT0gXCIyMDBcIikge1xuICAgICAgICAvLyBSZWxvYWQgRXhpc3RpbmcgU3RlcHMgUGFnZVxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IExpc3RpbmdTdGVwc1F1ZXJ5LFxuICAgICAgICAgIHZhcmlhYmxlczogeyBsaXN0SWQgfSxcbiAgICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsaXN0aW5nU3RlcHM6IGRhdGEuc2hvd0xpc3RpbmdTdGVwcyxcbiAgICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkYXRhTGlzdGluZ1F1ZXJ5ICYmIGRhdGFMaXN0aW5nUXVlcnkuZGF0YS5Vc2VyTGlzdGluZykge1xuICAgICAgICAgIGxldCBsaXN0RGV0YWlscyA9IGRhdGFMaXN0aW5nUXVlcnkuZGF0YS5Vc2VyTGlzdGluZztcbiAgICAgICAgICBsZXQgY29udGVudCA9IHtcbiAgICAgICAgICAgIGxpc3RJZDogbGlzdERldGFpbHMuaWQsXG4gICAgICAgICAgICBsaXN0VGl0bGU6IGxpc3REZXRhaWxzLnRpdGxlLFxuICAgICAgICAgICAgaG9zdE5hbWU6IGxpc3REZXRhaWxzLnVzZXIucHJvZmlsZS5maXJzdE5hbWUsXG4gICAgICAgICAgfVxuICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKFwiU3VjY2VzcyEsIFlvdXIgTGlzdGluZyBoYXMgYmVlbiBzdWJtaXR0ZWQgZm9yIEFwcHJvdmFsXCIpO1xuXG4gICAgICAgICAgbGV0IGNyZWF0ZUhpc3RvcnkgPSBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiBjcmVhdGVMaXN0aW5nSGlzdG9yeSgkbGlzdElkOkludCEsICR1c2VySWQ6IFN0cmluZywgJHN0YXR1czogU3RyaW5nLCAkcmVhc29uOiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgY3JlYXRlTGlzdGluZ0hpc3RvcnkgKGxpc3RJZDokbGlzdElkLCB1c2VySWQ6ICR1c2VySWQsIHN0YXR1czokc3RhdHVzLCByZWFzb246JHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb246IGNyZWF0ZUhpc3RvcnksXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgbGlzdElkLFxuICAgICAgICAgICAgICB1c2VySWQ6IGxpc3REZXRhaWxzLnVzZXJJZCxcbiAgICAgICAgICAgICAgc3RhdHVzOiBcInN1Ym1pdEZvcnZlcmlmaWNhdGlvblwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGF3YWl0IHNlbmRFbWFpbChhZG1pbkVtYWlsLCAnbGlzdFB1Ymxpc2hSZXF1ZXN0JywgY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIEFjdGlvbiFcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3RhdHVzOiBkYXRhLm1hbmFnZVB1Ymxpc2guc3RhdHVzLFxuICAgICAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJvdmVMaXN0aW5nKGxpc3RJZCwgbGlzdEFwcHJvdmFsU3RhdHVzLCByZWFzb24pIHtcblxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgeyBjbGllbnQgfSkgPT4ge1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTUFOQU5HRV9MSVNUSU5HX1BVQkxJU0hfU1RBVFVTX1NUQVJULFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBtdXRhdGlvbiA9IGdxbGBcblx0XHRcdG11dGF0aW9uIGFwcHJvdmVMaXN0aW5nKCRpZDogSW50LCAkbGlzdEFwcHJvdmFsU3RhdHVzOiBTdHJpbmcpe1xuXHRcdFx0XHRhcHByb3ZlTGlzdGluZyhpZDokaWQsIGxpc3RBcHByb3ZhbFN0YXR1czokbGlzdEFwcHJvdmFsU3RhdHVzKXtcblx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdHN0YXR1c1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgICAgIGA7XG5cbiAgICB0cnkge1xuXG4gICAgICBjb25zdCBkYXRhTGlzdGluZ1F1ZXJ5ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IExpc3RpbmdRdWVyeSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgbGlzdElkLFxuICAgICAgICAgIHByZXZpZXc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgIG11dGF0aW9uLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogbGlzdElkLFxuICAgICAgICAgIGxpc3RBcHByb3ZhbFN0YXR1c1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0YS5hcHByb3ZlTGlzdGluZy5zdGF0dXMgPT09IFwiMjAwXCIpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgIHF1ZXJ5OiBMaXN0aW5nU3RlcHNRdWVyeSxcbiAgICAgICAgICB2YXJpYWJsZXM6IHsgbGlzdElkIH0sXG4gICAgICAgICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZGF0YUxpc3RpbmdRdWVyeSAmJiBkYXRhTGlzdGluZ1F1ZXJ5LmRhdGEuVXNlckxpc3RpbmcpIHtcbiAgICAgICAgICBsZXQgbGlzdERldGFpbHMgPSBkYXRhTGlzdGluZ1F1ZXJ5LmRhdGEuVXNlckxpc3Rpbmc7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSB7XG4gICAgICAgICAgICBsaXN0SWQ6IGxpc3REZXRhaWxzLmlkLFxuICAgICAgICAgICAgbGlzdFRpdGxlOiBsaXN0RGV0YWlscy50aXRsZSxcbiAgICAgICAgICAgIGhvc3ROYW1lOiBsaXN0RGV0YWlscy51c2VyLnByb2ZpbGUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgcmVhc29uOiBsaXN0QXBwcm92YWxTdGF0dXMgPT09ICdkZWNsaW5lZCcgPyByZWFzb24gOiBudWxsLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjcmVhdGVIaXN0b3J5ID0gZ3FsYFxuICAgICAgICAgICAgbXV0YXRpb24gY3JlYXRlTGlzdGluZ0hpc3RvcnkoJGxpc3RJZDpJbnQhLCAkdXNlcklkOiBTdHJpbmcsICRzdGF0dXM6IFN0cmluZyEsICRyZWFzb246IFN0cmluZykge1xuICAgICAgICAgICAgICBjcmVhdGVMaXN0aW5nSGlzdG9yeSAobGlzdElkOiRsaXN0SWQsIHVzZXJJZDogJHVzZXJJZCwgc3RhdHVzOiRzdGF0dXMsIHJlYXNvbjokcmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgICAgICAgaWYgKGxpc3RBcHByb3ZhbFN0YXR1cyA9PT0gJ2RlY2xpbmVkJykge1xuICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ1N1Y2Nlc3MhJywgJ1RoZSBMaXN0aW5nIHJldmlldyByZXF1ZXN0IGhhcyBiZWVuIGRlY2xpbmVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgIG11dGF0aW9uOiBjcmVhdGVIaXN0b3J5LFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBsaXN0SWQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBsaXN0RGV0YWlscy51c2VySWQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcImRlY2xpbmVkXCIsXG4gICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgbm90aWZ5Q29udGVudCA9IHtcbiAgICAgICAgICAgICAgXCJzY3JlZW5UeXBlXCI6IFwiYmVjb21lYWhvc3RcIixcbiAgICAgICAgICAgICAgXCJ1c2VyVHlwZVwiOiAnaG9zdCcsXG4gICAgICAgICAgICAgIFwibGlzdElkXCI6IGxpc3RJZCxcbiAgICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiBsaXN0RGV0YWlscy51c2VyLnByb2ZpbGUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICBcImxpc3RUaXRsZVwiOiBsaXN0RGV0YWlscy50aXRsZSxcbiAgICAgICAgICAgICAgXCJyZWFzb25cIjogcmVhc29uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZE5vdGlmaWNhdGlvbnMoJ2xpc3REZWNsaW5lZCcsIG5vdGlmeUNvbnRlbnQsIGxpc3REZXRhaWxzLnVzZXJJZCk7XG4gICAgICAgICAgICBzZW5kRW1haWwobGlzdERldGFpbHMudXNlci5lbWFpbCwgJ2FkbWluTGlzdFJlamVjdCcsIGNvbnRlbnQpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdTdWNjZXNzIScsICdMaXN0aW5nIGlzIGFwcHJvdmVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgICAgICAgICAgIG11dGF0aW9uOiBjcmVhdGVIaXN0b3J5LFxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBsaXN0SWQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBsaXN0RGV0YWlscy51c2VySWQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcImFwcHJvdmVkXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBub3RpZnlDb250ZW50ID0ge1xuICAgICAgICAgICAgICBcInNjcmVlblR5cGVcIjogXCJiZWNvbWVhaG9zdFwiLFxuICAgICAgICAgICAgICBcInVzZXJUeXBlXCI6ICdob3N0JyxcbiAgICAgICAgICAgICAgXCJsaXN0SWRcIjogbGlzdElkLFxuICAgICAgICAgICAgICBcInVzZXJOYW1lXCI6IGxpc3REZXRhaWxzLnVzZXIucHJvZmlsZS5maXJzdE5hbWUsXG4gICAgICAgICAgICAgIFwibGlzdFRpdGxlXCI6IGxpc3REZXRhaWxzLnRpdGxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmROb3RpZmljYXRpb25zKCdsaXN0QXBwcm92ZWQnLCBub3RpZnlDb250ZW50LCBsaXN0RGV0YWlscy51c2VySWQpO1xuICAgICAgICAgICAgc2VuZEVtYWlsKGxpc3REZXRhaWxzLnVzZXIuZW1haWwsICdhZG1pbkxpc3RBcHByb3ZlJywgY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfU1VDQ0VTUyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsaXN0aW5nU3RlcHM6IGRhdGEuc2hvd0xpc3RpbmdTdGVwcyxcbiAgICAgICAgICAgIHB1Ymxpc2hMaXN0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIEFjdGlvbiFcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcHVibGlzaExpc3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBNQU5BTkdFX0xJU1RJTkdfUFVCTElTSF9TVEFUVVNfRVJST1IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBwdWJsaXNoTGlzdExvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFQQTtBQUNBO0FBVUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=