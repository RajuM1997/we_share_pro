import { gql } from "react-apollo";

import {
  ADMIN_DELETE_BANNER_START,
  ADMIN_DELETE_BANNER_SUCCESS,
  ADMIN_DELETE_BANNER_ERROR,
} from "../../constants";

// Redirection
import history from "../../core/history";

// Toaster
import { toastr } from "react-redux-toastr";

const query = gql`
  query getBanner {
    getBanner {
      id
      title
      description
      image
      colorText
      bottomText
      category
      isEnable
      createdAt
      updatedAt
    }
  }
`;

const mutation = gql`
  mutation deleteHomeBanner($id: Int!) {
    deleteHomeBanner(id: $id) {
      status
    }
  }
`;

export function deleteHomeBanner(id) {
  console.log(id);
  return async (dispatch, getState, { client }) => {
    dispatch({
      type: ADMIN_DELETE_BANNER_START,
      data: id,
    });
    try {
      const { data } = await client.mutate({
        mutation,
        variables: { id },
        refetchQueries: [{ query }],
      });

      if (data.deleteHomeBanner.status == "200") {
        dispatch({
          type: ADMIN_DELETE_BANNER_SUCCESS,
        });
        toastr.success("Delete Banner", "Deleted successfully!");
        // history.push("/siteadmin/popularlocation");
      } else {
        toastr.error("Delete Banner", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_BANNER_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export function updateHomeBannerStatus(id, isEnable) {
  return async (dispatch, getState, { client }) => {
    try {
      let mutation = gql`
        mutation updateHomeBannerStatus($id: Int, $isEnable: String) {
          updateHomeBannerStatus(id: $id, isEnable: $isEnable) {
            status
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { id, isEnable },
        refetchQueries: [{ query }],
      });

      if (data.updateHomeBannerStatus.status === "success") {
        toastr.success("Success!", "Banner status has changed");
      }
    } catch (error) {
      toastr.error("Failed!", "Failed to change Banner status");
      return false;
    }
    return true;
  };
}
