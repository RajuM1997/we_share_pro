import messages from "../../../locale/messages";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.location = messages.required;
  }
  if (!values.name) {
    errors.locationAddress = messages.required;
  }
  if (!values.type) {
    errors.locationAddress = messages.required;
  }
  if (!values.pageId) {
    errors.locationAddress = messages.required;
  }
  if (!values.fields) {
    errors.locationAddress = messages.required;
  }
  if (!values.isEnable) {
    errors.isEnable = messages.required;
  }

  return errors;
};

export default validate;
