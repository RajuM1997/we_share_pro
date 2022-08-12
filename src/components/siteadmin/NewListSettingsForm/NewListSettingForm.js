// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { formValueSelector } from "redux-form";
// graphql;
import { graphql, compose } from "react-apollo";
// query
import getPageField from "./getPageField.graphql";

// Translation
import { injectIntl } from "react-intl";

// Redux
import { connect } from "react-redux";

import AddNewListSettingsForm from "./AddNewListSettingsForm";

class NewListSettingsForm extends Component {
  static propTypes = {
    id: PropTypes.number,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getPageField: PropTypes.array,
    }),
  };
  static defaultProps = {
    data: {
      loading: true,
    },
  };

  render() {
    const {
      data: { loading },
    } = this.props;

    const {
      data: { getPageField },
    } = this.props;
    return (
      <div className="empty">
        <AddNewListSettingsForm data={getPageField} />
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

export default compose(
  injectIntl,
  graphql(getPageField, {
    options: {
      ssr: true,
    },
  }),
  connect(mapState, mapDispatch)
)(NewListSettingsForm);
