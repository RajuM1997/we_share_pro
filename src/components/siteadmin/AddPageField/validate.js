import messages from "../../../locale/messages";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = messages.required;
  }

  if (!values.description) {
    errors.description = messages.required;
  }

  if (!values.colorText) {
    errors.buttonLabel = messages.required;
  }
  if (!values.bottomText) {
    errors.buttonLabel = messages.required;
  }
  if (!values.category) {
    errors.buttonLabel = messages.required;
  }

  return errors;
};

export default validate;
