import { gql } from "react-apollo";

import {
  ADMIN_DELETE_SUB_CATEGORY_START,
  ADMIN_DELETE_SUB_CATEGORY_SUCCESS,
  ADMIN_DELETE_SUB_CATEGORY_ERROR,
} from "../../constants";

// Redirection
import history from "../../core/history";

// Toaster
import { toastr } from "react-redux-toastr";

const query = gql`
  query getSubCategory {
    getSubCategory {
      id
      title
      subCategory
      primaryCategory
      image
      isEnable
      createdAt
      updatedAt
    }
  }
`;

const mutation = gql`
  mutation deleteSubCategory($id: Int!) {
    deleteSubCategory(id: $id) {
      status
    }
  }
`;

export function deleteSubCategory(id) {
  console.log(id);
  return async (dispatch, getState, { client }) => {
    dispatch({
      type: ADMIN_DELETE_SUB_CATEGORY_START,
      data: id,
    });
    try {
      const { data } = await client.mutate({
        mutation,
        variables: { id },
        refetchQueries: [{ query }],
      });

      if (data.deleteSubCategory.status == "200") {
        dispatch({
          type: ADMIN_DELETE_SUB_CATEGORY_SUCCESS,
        });
        toastr.success("Delete sub Category", "Deleted successfully!");
        history.push("/siteadmin/popularlocation");
      } else {
        toastr.error("Delete Sub Category", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_SUB_CATEGORY_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export function updateSubCategoryStatus(id, isEnable) {
  return async (dispatch, getState, { client }) => {
    try {
      let mutation = gql`
        mutation updateSubCategoryStatus($id: Int, $isEnable: String) {
          updateSubCategoryStatus(id: $id, isEnable: $isEnable) {
            status
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { id, isEnable },
        refetchQueries: [{ query }],
      });

      if (data.updateSubCategoryStatus.status === "success") {
        toastr.success("Success!", "Sub Category status has changed");
      }
    } catch (error) {
      toastr.error("Failed!", "Failed to change Sub Category status");
      return false;
    }
    return true;
  };
}
