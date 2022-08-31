import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { graphql, gql, compose } from "react-apollo";

// Redux
import { connect } from "react-redux";

// Redux Action
import { doRecordListViews } from "../../../actions/recordListViews";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ViewCount.css";
import cx from "classnames";

// Locale
import messages from "../../../locale/messages";

class ViewCount extends Component {
  render() {
    return (
      <div>
        <div className={cx(s.bookItMessage, s.spaceTop3)}>
          <p className={s.text}>
            <strong>
              <FormattedMessage {...messages.viewCountInfo} />
            </strong>
          </p>
          <p className={s.noMargin}>
            <FormattedMessage {...messages.viewCountTotal1} />{" "}
            <FormattedMessage {...messages.viewCountTotal2} />
          </p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  isAuthenticated: state.runtime.isAuthenticated,
});

const mapDispatch = {
  doRecordListViews,
};

export default compose(
  withStyles(s),
  connect(mapState, mapDispatch)
)(ViewCount);
