import messages from "../../../locale/messages";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.location = messages.required;
  }
  if (!values.subtitle) {
    errors.locationAddress = messages.required;
  }
  if (!values.isEnable) {
    errors.isEnable = messages.required;
  }

  return errors;
};

export default validate;
