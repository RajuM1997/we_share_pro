import { gql } from "react-apollo";

import {
  ADMIN_DELETE_OFFER_START,
  ADMIN_DELETE_OFFER_SUCCESS,
  ADMIN_DELETE_OFFER_ERROR,
} from "../../constants";

// Redirection
import history from "../../core/history";

// Toaster
import { toastr } from "react-redux-toastr";

const query = gql`
  query getOffer {
    getOffer {
      id
      title
      dec
      image
      isEnable
      createdAt
      updatedAt
    }
  }
`;

const mutation = gql`
  mutation deleteOffer($id: Int!) {
    deleteOffer(id: $id) {
      status
    }
  }
`;

export function deleteOffer(id) {
  return async (dispatch, getState, { client }) => {
    dispatch({
      type: ADMIN_DELETE_OFFER_START,
      data: id,
    });
    try {
      const { data } = await client.mutate({
        mutation,
        variables: { id },
        refetchQueries: [{ query }],
      });

      if (data.deleteOffer.status == "200") {
        dispatch({
          type: ADMIN_DELETE_OFFER_SUCCESS,
        });
        toastr.success("Delete Offer", "Deleted successfully!");
        history.push("/siteadmin/popularlocation");
      } else {
        toastr.error("Delete Offer", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_OFFER_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export function updateOfferStatus(id, isEnable) {
  return async (dispatch, getState, { client }) => {
    try {
      let mutation = gql`
        mutation updateOfferStatus($id: Int, $isEnable: String) {
          updateOfferStatus(id: $id, isEnable: $isEnable) {
            status
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { id, isEnable },
        refetchQueries: [{ query }],
      });

      if (data.updateOfferStatus.status === "success") {
        toastr.success("Success!", "Offer status has changed");
      }
    } catch (error) {
      toastr.error("Failed!", "Failed to change Offer status");
      return false;
    }
    return true;
  };
}
