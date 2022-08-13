import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./FieldPage.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// Query
import getPageField from "./getPageField.graphql";
import { graphql, gql, compose } from "react-apollo";
import PageFieldManagement from "../../../components/siteadmin/PageField/PageFieldManagement";

class FieldPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
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
      subCategoryId,
    } = this.props;
    console.log("page", subCategoryId);
    const {
      data: { getPageField },
    } = this.props;
    return (
      <PageFieldManagement data={getPageField} subCategoryId={subCategoryId} />
    );
  }
}

export default compose(
  withStyles(s),
  graphql(getPageField, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(FieldPage);
