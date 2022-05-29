import { gql } from "react-apollo";

import {
  ADMIN_DELETE_CATEGORY_START,
  ADMIN_DELETE_CATEGORY_SUCCESS,
  ADMIN_DELETE_CATEGORY_ERROR,
} from "../../constants";

// Redirection
import history from "../../core/history";

// Toaster
import { toastr } from "react-redux-toastr";

const query = gql`
  query getCategory {
    getCategory {
      id
      title
      subTitle
      category
      image
      isEnable
      createdAt
      updatedAt
    }
  }
`;

const mutation = gql`
  mutation deleteCategory($id: Int!) {
    deleteCategory(id: $id) {
      status
    }
  }
`;

export function deleteCategory(id) {
  console.log(id);
  return async (dispatch, getState, { client }) => {
    dispatch({
      type: ADMIN_DELETE_CATEGORY_START,
      data: id,
    });
    try {
      const { data } = await client.mutate({
        mutation,
        variables: { id },
        refetchQueries: [{ query }],
      });

      if (data.deleteCategory.status == "200") {
        dispatch({
          type: ADMIN_DELETE_CATEGORY_SUCCESS,
        });
        toastr.success("Delete Category", "Deleted successfully!");
        history.push("/siteadmin/popularlocation");
      } else {
        toastr.error("Delete Category", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_CATEGORY_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export function updateCategoryStatus(id, isEnable) {
  return async (dispatch, getState, { client }) => {
    try {
      let mutation = gql`
        mutation updateCategoryStatus($id: Int, $isEnable: String) {
          updateCategoryStatus(id: $id, isEnable: $isEnable) {
            status
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { id, isEnable },
        refetchQueries: [{ query }],
      });

      if (data.updateCategoryStatus.status === "success") {
        toastr.success("Success!", "Category status has changed");
      }
    } catch (error) {
      toastr.error("Failed!", "Failed to change Category status");
      return false;
    }
    return true;
  };
}
