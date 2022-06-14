import {
  CATEGORY_UPLOAD_LOADER_START,
  BANNER_UPLOAD_START,
  BANNER_UPLOAD_SUCCESS,
  BANNER_UPLOAD_ERROR,
  REMOVE_BANNER_ERROR,
} from "../../constants";

export default function banner(state = {}, action) {
  switch (action.type) {
    case CATEGORY_UPLOAD_LOADER_START:
      return {
        ...state,
        homeBannerUploaderLoading: action.payload.homeBannerUploaderLoading,
      };

    case BANNER_UPLOAD_START:
      return {
        ...state,
        homeBannerUploaderLoading: action.payload.homeBannerUploaderLoading,
      };

    case BANNER_UPLOAD_SUCCESS:
      return {
        ...state,
        homeBannerUploaderLoading: action.payload.homeBannerUploaderLoading,
      };

    case BANNER_UPLOAD_ERROR:
      return {
        ...state,
        homeBannerUploaderLoading: action.payload.homeBannerUploaderLoading,
        logodata: null,
      };

    case REMOVE_BANNER_ERROR:
      return {
        ...state,
        homeBannerUploaderLoading: action.payload.homeBannerUploaderLoading,
      };

    default:
      return state;
  }
}
