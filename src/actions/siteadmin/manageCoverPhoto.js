import { gql } from "react-apollo";
import fetch from "../../core/fetch";

import {
  COVER_PHOTO_UPLOAD_LOADER_START,
  COVER_PHOTO_UPLOAD_START,
  COVER_PHOTO_UPLOAD_SUCCESS,
  COVER_PHOTO_UPLOAD_ERROR,
  REMOVE_COVER_PHOTO_START,
  REMOVE_COVER_PHOTO_SUCCESS,
  REMOVE_COVER_PHOTO_ERROR,
} from "../../constants";

// const query = gql`
//   query editCategory($id: Int!) {
//     editCategory(id: $id) {
//       id
//       title
//       subTitle
//       isEnable
//       image
//     }
//   }
// `;

export function startCoverPhotoUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: COVER_PHOTO_UPLOAD_LOADER_START,
      payload: {
        coverPhotoUploaderLoading: true,
      },
    });
  };
}

export function endCoverPhotoUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: COVER_PHOTO_UPLOAD_LOADER_START,
      payload: {
        coverPhotoUploaderLoading: false,
      },
    });
  };
}

export function doUploadCoverPhoto(image, filePath, oldPicture, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: COVER_PHOTO_UPLOAD_START });

    try {
      let mutation = gql`
        mutation uploadCoverPhoto($id: Int, $image: String) {
          uploadCoverPhoto(id: $id, image: $image) {
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
          type: COVER_PHOTO_UPLOAD_SUCCESS,
          payload: {
            coverPhotoUploaderLoading: false,
          },
        });
        if (oldPicture != null) {
          await removeCoverPhotoFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: COVER_PHOTO_UPLOAD_ERROR,
        payload: {
          error,
          coverPhotoUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

export function doRemoveCoverPhoto(image, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: REMOVE_COVER_PHOTO_START });
    dispatch(startCoverPhotoUploaderLoader());

    try {
      let mutation = gql`
        mutation removeCoverPhoto($id: Int!, $image: String) {
          removeCoverPhoto(id: $id, image: $image) {
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
          type: REMOVE_COVER_PHOTO_SUCCESS,
          payload: {
            coverPhotoUploaderLoading: false,
          },
        });
        await removeCoverPhotoFile(image);
      }
    } catch (error) {
      dispatch({
        type: REMOVE_COVER_PHOTO_ERROR,
        payload: {
          error,
          coverPhotoUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

async function removeCoverPhotoFile(image) {
  try {
    const resp = await fetch("/removeCoverPhotoFile", {
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
      console.log("status from remove cover photo file", status);
    }
  } catch (error) {
    console.log("error from remove file", error);

    return false;
  }

  return true;
}
