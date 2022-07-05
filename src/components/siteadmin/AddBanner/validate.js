import messages from "../../../locale/messages";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.locationAddress = messages.required;
  } else if (values.title && values.title.trim() === "") {
    errors.locationAddress = messages.blankSpace;
  }

  if (!values.description) {
    errors.locationAddress = messages.required;
  } else if (values.subTitle && values.subTitle.trim() === "") {
    errors.locationAddress = messages.blankSpace;
  }
  if (!values.category) {
    errors.locationAddress = messages.required;
  } else if (values.category && values.category.trim() === "") {
    errors.locationAddress = messages.blankSpace;
  }

  return errors;
};

export default validate;
