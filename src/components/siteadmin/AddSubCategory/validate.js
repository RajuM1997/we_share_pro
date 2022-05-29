import messages from "../../../locale/messages";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.location = messages.required;
  } else if (values.title.trim() == "") {
    errors.location = messages.blankSpace;
  }

  if (!values.subCategory) {
    errors.locationAddress = messages.required;
  } else if (values.subCategory.trim() == "") {
    errors.locationAddress = messages.blankSpace;
  }

  return errors;
};

export default validate;
