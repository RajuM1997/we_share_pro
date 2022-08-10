import { gql } from "react-apollo";
import fetch from "../../core/fetch";

import {
  BANNER_UPLOAD_LOADER_START,
  BANNER_UPLOAD_START,
  BANNER_UPLOAD_SUCCESS,
  BANNER_UPLOAD_ERROR,
  REMOVE_BANNER_START,
  REMOVE_BANNER_SUCCESS,
  REMOVE_BANNER_ERROR,
} from "../../constants";

const query = gql`
  query editBanner($id: Int!) {
    editBanner(id: $id) {
      id
      title
      description
      image
      small_image
      colorText
      bottomText
      isEnable
    }
  }
`;

export function startSmallHomeBannerUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: BANNER_UPLOAD_LOADER_START,
      payload: {
        homeBannerUploaderLoading: true,
      },
    });
  };
}

export function endSmallHomeBannerUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: BANNER_UPLOAD_LOADER_START,
      payload: {
        homeBannerUploaderLoading: false,
      },
    });
  };
}

export function doUploadSmallHomeBanner(image, filePath, oldPicture, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: BANNER_UPLOAD_START });

    try {
      let mutation = gql`
        mutation uploadSmallHomeBanner($id: Int, $image: String) {
          uploadHomeBanner(id: $id, image: $image) {
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
          type: BANNER_UPLOAD_SUCCESS,
          payload: {
            homeBannerUploaderLoading: false,
          },
        });
        if (oldPicture != null) {
          await removeSmallHomeBannerFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: BANNER_UPLOAD_ERROR,
        payload: {
          error,
          homeBannerUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

export function doRemoveSmallHomeBanner(image, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: REMOVE_BANNER_START });
    dispatch(startSmallHomeBannerUploaderLoader());

    try {
      let mutation = gql`
        mutation removeSmallHomeBanner($id: Int!, $image: String) {
          removeHomeBanner(id: $id, image: $image) {
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
          type: REMOVE_BANNER_SUCCESS,
          payload: {
            homeBannerUploaderLoading: false,
          },
        });
        await removeSmallHomeBannerFile(image);
      }
    } catch (error) {
      dispatch({
        type: REMOVE_BANNER_ERROR,
        payload: {
          error,
          homeBannerUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

async function removeSmallHomeBannerFile(image) {
  try {
    const resp = await fetch("/removeSmallHomeBannerFile", {
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
