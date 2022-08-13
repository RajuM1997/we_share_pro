import { gql } from "react-apollo";

import {
  ADMIN_DELETE_FIELDS_START,
  ADMIN_DELETE_FIELDS_SUCCESS,
  ADMIN_DELETE_FIELDS_ERROR,
} from "../../constants";

// Redirection
import history from "../../core/history";

// Toaster
import { toastr } from "react-redux-toastr";

const query = gql`
  query getFields {
    getFields {
      id
      name
      title
      type
      fields
      subCategoryId
      pageId
      isEnable
    }
  }
`;
const mutation = gql`
  mutation deleteFields($id: Int!) {
    deleteFields(id: $id) {
      status
    }
  }
`;

export function deleteFields(id) {
  return async (dispatch, getState, { client }) => {
    dispatch({
      type: ADMIN_DELETE_FIELDS_START,
      data: id,
    });
    try {
      const { data } = await client.mutate({
        mutation,
        variables: { id },
        refetchQueries: [{ query }],
      });

      if (data.Fields.status == "200") {
        dispatch({
          type: ADMIN_DELETE_FIELDS_SUCCESS,
        });
        toastr.success("Delete Fields", "Deleted successfully!");
        history.push("/siteadmin");
      } else {
        toastr.error("Delete Fields", "Deletion failed!");
      }
    } catch (error) {
      dispatch({
        type: ADMIN_DELETE_FIELDS_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}

export function updateFieldsStatus(id, isEnable) {
  return async (dispatch, getState, { client }) => {
    try {
      let mutation = gql`
        mutation updateFieldsStatus($id: Int, $isEnable: String) {
          updateFieldsStatus(id: $id, isEnable: $isEnable) {
            status
          }
        }
      `;

      const { data } = await client.mutate({
        mutation,
        variables: { id, isEnable },
        refetchQueries: [{ query }],
      });

      if (data.updateFieldsStatus.status === "success") {
        toastr.success("Success!", "fields status has changed");
      }
    } catch (error) {
      toastr.error("Failed!", "Failed to change fields status");
      return false;
    }
    return true;
  };
}
