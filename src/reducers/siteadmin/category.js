import {
  CATEGORY_UPLOAD_LOADER_START,
  CATEGORY_UPLOAD_SUCCESS,
  CATEGORY_UPLOAD_ERROR,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_ERROR,
} from "../../constants";

export default function category(state = {}, action) {
  switch (action.type) {
    case CATEGORY_UPLOAD_LOADER_START:
      return {
        ...state,
        categoryUploaderLoading: action.payload.categoryUploaderLoading,
      };

    case CATEGORY_UPLOAD_SUCCESS:
      return {
        ...state,
        categoryUploaderLoading: action.payload.categoryUploaderLoading,
      };

    case CATEGORY_UPLOAD_ERROR:
      return {
        ...state,
        categoryUploaderLoading: action.payload.categoryUploaderLoading,
      };

    case REMOVE_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryUploaderLoading: action.payload.categoryUploaderLoading,
        logodata: null,
      };

    case REMOVE_CATEGORY_ERROR:
      return {
        ...state,
        categoryUploaderLoading: action.payload.categoryUploaderLoading,
      };

    default:
      return state;
  }
}
