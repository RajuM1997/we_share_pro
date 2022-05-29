import {
  OFFER_UPLOAD_LOADER_START,
  OFFER_UPLOAD_SUCCESS,
  OFFER_UPLOAD_ERROR,
  REMOVE_OFFER_SUCCESS,
  REMOVE_OFFER_ERROR,
} from "../../constants";

export default function offer(state = {}, action) {
  switch (action.type) {
    case OFFER_UPLOAD_LOADER_START:
      return {
        ...state,
        offerUploaderLoading: action.payload.offerUploaderLoading,
      };

    case OFFER_UPLOAD_SUCCESS:
      return {
        ...state,
        offerUploaderLoading: action.payload.offerUploaderLoading,
      };

    case OFFER_UPLOAD_ERROR:
      return {
        ...state,
        offerUploaderLoading: action.payload.offerUploaderLoading,
      };

    case REMOVE_OFFER_SUCCESS:
      return {
        ...state,
        offerUploaderLoading: action.payload.categoryUploaderLoading,
        logodata: null,
      };

    case REMOVE_OFFER_ERROR:
      return {
        ...state,
        offerUploaderLoading: action.payload.offerUploaderLoading,
      };

    default:
      return state;
  }
}
