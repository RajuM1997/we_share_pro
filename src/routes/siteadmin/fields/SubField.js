import React, { Component } from "react";
import { graphql, gql, compose } from "react-apollo";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./FieldManagement.css";
// Query
import getFields from "./getFields.graphql";
import FieldManagement from "../../../components/siteadmin/Field/FieldManagement";
class SubField extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getFields: PropTypes.array,
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
      data: { getFields },
    } = this.props;
    return <FieldManagement data={getFields} />;
  }
}

export default compose(
  withStyles(s),
  graphql(getFields, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(SubField);
