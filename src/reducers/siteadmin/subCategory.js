import {
  SUB_CATEGORY_UPLOAD_LOADER_START,
  SUB_CATEGORY_UPLOAD_SUCCESS,
  SUB_CATEGORY_UPLOAD_ERROR,
  REMOVE_SUB_CATEGORY_SUCCESS,
  REMOVE_SUB_CATEGORY_ERROR,
} from "../../constants";

export default function subCategory(state = {}, action) {
  switch (action.type) {
    case SUB_CATEGORY_UPLOAD_LOADER_START:
      return {
        ...state,
        subCategoryUploaderLoading: action.payload.subCategoryUploaderLoading,
      };

    case SUB_CATEGORY_UPLOAD_SUCCESS:
      return {
        ...state,
        subCategoryUploaderLoading: action.payload.subCategoryUploaderLoading,
      };

    case SUB_CATEGORY_UPLOAD_ERROR:
      return {
        ...state,
        subCategoryUploaderLoading: action.payload.subCategoryUploaderLoading,
      };

    case REMOVE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategoryUploaderLoading: action.payload.subCategoryUploaderLoading,
        logodata: null,
      };

    case REMOVE_SUB_CATEGORY_ERROR:
      return {
        ...state,
        subCategoryUploaderLoading: action.payload.subCategoryUploaderLoading,
      };

    default:
      return state;
  }
}
