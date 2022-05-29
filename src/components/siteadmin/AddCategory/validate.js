import messages from "../../../locale/messages";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.categoryE = messages.required;
  } else if (values.title.trim() == "") {
    errors.categoryE = messages.blankSpace;
  }

  if (!values.subTitle) {
    errors.locationAddress = messages.required;
  } else if (values.subTitle.trim() == "") {
    errors.locationAddress = messages.blankSpace;
  }
  if (!values.category) {
    errors.locationAddress = messages.required;
  } else if (values.category.trim() == "") {
    errors.locationAddress = messages.blankSpace;
  }

  return errors;
};

export default validate;
