import { gql } from "react-apollo";

import {
  ADMIN_DELETE_PAGE_FIELD_START,
  ADMIN_DELETE_PAGE_FIELD_SUCCESS,
  ADMIN_DELETE_PAGE_FIELD_ERROR,
} from "../../constants";

// Redirection
import history from "../../core/history";

// Toaster
import { toastr } from "react-redux-toastr";

const query = gql`
  query getPageField {
    getPageField {
      id
      title
      step
      subCategoryId
      PageId
      isEnable
      createdAt
      updatedAt
    }
  }
`;

const mutation = gql`
  mutation deletePageField($id: Int!) {
    deletePageField(id: $id) {
      status
    }
  }
`;

export function deletePageField(id) {
  return async (dispatch, getState, { client }) => {
    dispatch({
      type: ADMIN_DELETE_PAGE_FIELD_START,
      data: id,
    });
    try {
      const { data } = await client.mutate({
        mutation,
        variables: { id },
        refetchQueries: [{ query }],
      });

      if (data.deletePageField.status == "200") {
        dispatch({
          type: ADMIN_DELETE_PAGE_FIELD_SUCCESS,
        });
        toastr.success("Delete Page Field", "Deleted successfully!");
        // history.push("/siteadmin/fieldSetting");
        window.location.reload();
      } else {
        toastr.error("Delete Page Field", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_PAGE_FIELD_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export function updatePageFieldStatus(id, isEnable) {
  return async (dispatch, getState, { client }) => {
    try {
      let mutation = gql`
        mutation updatePageFieldStatus($id: Int, $isEnable: String) {
          updatePageFieldStatus(id: $id, isEnable: $isEnable) {
            status
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { id, isEnable },
        refetchQueries: [{ query }],
      });

      if (data.updatePageFieldStatus.status === "success") {
        toastr.success("Success!", "Page Field status has changed");
      }
    } catch (error) {
      toastr.error("Failed!", "Failed to change Page Field status");
      return false;
    }
    return true;
  };
}
