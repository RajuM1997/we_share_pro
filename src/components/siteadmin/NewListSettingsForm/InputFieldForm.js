// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { formValueSelector } from "redux-form";

// Translation
import { injectIntl } from "react-intl";

// Redux
import { connect } from "react-redux";

import AddInputFieldForm from "./AddInputFieldForm";

class InputFieldForm extends Component {
  static propTypes = {
    id: PropTypes.number,
  };

  render() {
    return (
      <div className="empty">
        <AddInputFieldForm />
      </div>
    );
  }
}

// Decorate with connect to read form values
const selector = formValueSelector("EditListSettingsForm"); // <-- same as form name

const mapState = (state) => ({
  id: selector(state, "id"),
});

const mapDispatch = {};

export default injectIntl(connect(mapState, mapDispatch)(InputFieldForm));
