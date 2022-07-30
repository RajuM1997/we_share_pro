import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Field.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import CategoryManagement from "../../../components/siteadmin/Category/CategoryManagement";
// Query
import getCategory from "../categorys/getCategory.graphql";
import { graphql, gql, compose } from "react-apollo";
import FieldManagement from "../../../components/siteadmin/Field/FieldManagement";

class SubField extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getCategory: PropTypes.array,
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
      data: { getCategory },
    } = this.props;
    return <FieldManagement />;
  }
}

export default compose(
  withStyles(s),
  graphql(getCategory, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(SubField);