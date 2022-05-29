import { gql } from "react-apollo";
import fetch from "../../core/fetch";

import {
  CATEGORY_UPLOAD_LOADER_START,
  CATEGORY_UPLOAD_START,
  CATEGORY_UPLOAD_SUCCESS,
  CATEGORY_UPLOAD_ERROR,
  REMOVE_CATEGORY_START,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_ERROR,
} from "../../constants";

const query = gql`
  query editCategory($id: Int!) {
    editCategory(id: $id) {
      id
      title
      subTitle
      isEnable
      image
    }
  }
`;

export function startCategoryUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: CATEGORY_UPLOAD_LOADER_START,
      payload: {
        categoryUploaderLoading: true,
      },
    });
  };
}

export function endCategoryUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: CATEGORY_UPLOAD_LOADER_START,
      payload: {
        categoryUploaderLoading: false,
      },
    });
  };
}

export function doUploadCategory(image, filePath, oldPicture, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: CATEGORY_UPLOAD_START });

    try {
      let mutation = gql`
        mutation uploadCategory($id: Int, $image: String) {
          uploadCategory(id: $id, image: $image) {
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
          type: CATEGORY_UPLOAD_SUCCESS,
          payload: {
            categoryUploaderLoading: false,
          },
        });
        if (oldPicture != null) {
          await removeCategoryFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: CATEGORY_UPLOAD_ERROR,
        payload: {
          error,
          categoryUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

export function doRemoveCategory(image, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: REMOVE_CATEGORY_START });
    dispatch(startCategoryUploaderLoader());

    try {
      let mutation = gql`
        mutation removeCategory($id: Int!, $image: String) {
          removeCategory(id: $id, image: $image) {
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
          type: REMOVE_CATEGORY_SUCCESS,
          payload: {
            categoryUploaderLoading: false,
          },
        });
        await removeCategoryFile(image);
      }
    } catch (error) {
      dispatch({
        type: REMOVE_CATEGORY_ERROR,
        payload: {
          error,
          categoryUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

async function removeCategoryFile(image) {
  try {
    const resp = await fetch("/removeCategoryFile", {
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
      console.log("status from remove category file", status);
    }
  } catch (error) {
    console.log("error from remove file", error);

    return false;
  }

  return true;
}
