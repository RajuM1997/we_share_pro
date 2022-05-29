import { gql } from "react-apollo";
import fetch from "../../core/fetch";

import {
  OFFER_UPLOAD_LOADER_START,
  OFFER_UPLOAD_START,
  OFFER_UPLOAD_SUCCESS,
  OFFER_UPLOAD_ERROR,
  REMOVE_OFFER_START,
  REMOVE_OFFER_SUCCESS,
  REMOVE_OFFER_ERROR,
} from "../../constants";

const query = gql`
  query editOffer($id: Int!) {
    editOffer(id: $id) {
      id
      title
      subTitle
      isEnable
      image
    }
  }
`;

export function startOfferUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: OFFER_UPLOAD_LOADER_START,
      payload: {
        offerUploaderLoading: true,
      },
    });
  };
}

export function endOfferUploaderLoader() {
  return (dispatch, getState, { client }) => {
    dispatch({
      type: OFFER_UPLOAD_LOADER_START,
      payload: {
        offerUploaderLoading: false,
      },
    });
  };
}

export function doUploadOffer(image, filePath, oldPicture, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: OFFER_UPLOAD_START });

    try {
      let mutation = gql`
        mutation uploadOffer($id: Int, $image: String) {
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
          type: OFFER_UPLOAD_SUCCESS,
          payload: {
            offerUploaderLoading: false,
          },
        });
        if (oldPicture != null) {
          await removeOfferFile(oldPicture);
        }
      }
    } catch (error) {
      dispatch({
        type: OFFER_UPLOAD_ERROR,
        payload: {
          error,
          offerUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

export function doRemoveOffer(image, id) {
  return async (dispatch, getState, { client }) => {
    dispatch({ type: REMOVE_OFFER_START });
    dispatch(startOfferUploaderLoader());

    try {
      let mutation = gql`
        mutation removeOffer($id: Int!, $image: String) {
          removeOffer(id: $id, image: $image) {
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
          type: REMOVE_OFFER_SUCCESS,
          payload: {
            offerUploaderLoading: false,
          },
        });
        await removeOfferFile(image);
      }
    } catch (error) {
      dispatch({
        type: REMOVE_OFFER_ERROR,
        payload: {
          error,
          offerUploaderLoading: false,
        },
      });

      return false;
    }

    return true;
  };
}

async function removeOfferFile(image) {
  try {
    const resp = await fetch("/removeOfferFile", {
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
      console.log("status from remove offer file", status);
    }
  } catch (error) {
    console.log("error from remove file", error);

    return false;
  }

  return true;
}
