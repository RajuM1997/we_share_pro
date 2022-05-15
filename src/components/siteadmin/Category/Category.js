import React, { Component } from "react";
import PropTypes from "prop-types";

import { Table, Tr, Td, Thead, Th } from "reactable";
import { connect } from "react-redux";
import moment from "moment";
import Link from "../../../components/Link";
import Confirm from "react-confirm-bootstrap";
import { Button } from "react-bootstrap";
// Style
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./PopularLocationManagement.css";
import bt from "../../../components/commonStyle.css";
import {
  deletePopularLocation,
  updateLocationStatus,
} from "../../../actions/siteadmin/deletePopularLocation";
import history from "../../../core/history";

// Translation
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import messages from "../../../locale/messages";

class Category extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        location: PropTypes.string,
        locationAddress: PropTypes.string,
        isEnable: PropTypes.string,
        images: PropTypes.string,
      })
    ),
    deletePopularLocation: PropTypes.any,
    updateLocationStatus: PropTypes.any,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    history.push("/siteadmin/popularlocation/add");
  }

  render() {
    const { data, deletePopularLocation, updateLocationStatus } = this.props;
    const { formatMessage } = this.props.intl;
    return <div>hello</div>;
  }
}

const mapState = (state) => ({});

const mapDispatch = {
  deletePopularLocation,
  updateLocationStatus,
};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Category))
);
