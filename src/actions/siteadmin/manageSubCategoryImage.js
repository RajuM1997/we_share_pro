import { gql } from "react-apollo";
import fetch from "../../core/fetch";

import {
  SUB_CATEGORY_UPLOAD_LOADER_START,
  SUB_CATEGORY_UPLOAD_START,
  SUB_CATEGORY_UPLOAD_SUCCESS,
  SUB_CATEGORY_UPLOAD_ERROR,
  REMOVE_SUB_CATEGORY_START,
  REMOVE_SUB_CATEGORY_SUCCESS,
  REMOVE_SUB_CATEGORY_ERROR,
} from "../../constants";

const query = gql`
  query editSubCategory($id: Int!) {
    editSubCategory(id: $id) {
      id
      title
      description
      address
      subCategory
      guests
      bedrooms
      beds
      baths
      image
      primaryCategory
    }
  }
`;

export function startSubCategoryUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: SUB_CATEGORY_UPLOAD_LOADER_START,
      payload: {
        subCategoryUploaderLoading: true,
      },
    });
  };
}

export function endSubCategoryUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: SUB_CATEGORY_UPLOAD_LOADER_START,
      payload: {
        subCategoryUploaderLoading: false,
      },
    });
  };
}

export function doUploadSubCategory(image, filePath, oldPicture, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: SUB_CATEGORY_UPLOAD_START });

    try {
      let mutation = gql`
        mutation uploadSubCategory($id: Int, $image: String) {
          uploadSubCategory(id: $id, image: $image) {
            status
          }
        }
      `;

      // Send Request to create a record for location
      const { data } = await client.mutate({
        mutation,
        variables: { image, id },
        refetchQueries: [{ query, variables: { id } }],
      });

      if (data) {
        dispatch({
          type: SUB_CATEGORY_UPLOAD_SUCCESS,
          payload: {
            subCategoryUploaderLoading: false,
          },
        });
        if (oldPicture != null) {
          await removeSubCategoryFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: SUB_CATEGORY_UPLOAD_ERROR,
        payload: {
          error,
          subCategoryUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

export function doRemoveSubCategory(image, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: REMOVE_SUB_CATEGORY_START });
    dispatch(startSubCategoryUploaderLoader());

    try {
      let mutation = gql`
        mutation removeSubCategory($id: Int!, $image: String) {
          removeSubCategory(id: $id, image: $image) {
            status
          }
        }
      `;

      // Send Request to create a record for location
      const { data } = await client.mutate({
        mutation,
        variables: { image, id },
        refetchQueries: [{ query, variables: { id } }],
      });

      if (data) {
        dispatch({
          type: REMOVE_SUB_CATEGORY_SUCCESS,
          payload: {
            subCategoryUploaderLoading: false,
          },
        });
        await removeSubCategoryFile(image);
      }
    } catch (error) {
      dispatch({
        type: REMOVE_SUB_CATEGORY_ERROR,
        payload: {
          error,
          subCategoryUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

async function removeSubCategoryFile(image) {
  try {
    const resp = await fetch("/removeSubCategoryFile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
      }),
      credentials: "include",
    });

    const { status } = await resp.json();

    if (status) {
      console.log("status from remove sub category file", status);
    }
  } catch (error) {
    console.log("error from remove file", error);

    return false;
  }

  return true;
}
