import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./FieldPage.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// Query
import getPageFieldQuery from "./getPageField.graphql";
import { graphql, gql, compose } from "react-apollo";
import PageFieldManagement from "../../../components/siteadmin/PageField/PageFieldManagement";

class FieldPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    getPageFieldData: PropTypes.shape({
      loading: PropTypes.bool,
      getFieldsData: PropTypes.array,
    }),
  };

  static defaultProps = {
    getPageFieldData: {
      loading: true,
    },
  };

  render() {
    const { getPageFieldData, subCategoryId } = this.props;
    // console.log("page", subCategoryId);
    return (
      <PageFieldManagement
        data={getPageFieldData.getPageFieldAdmin}
        subCategoryId={subCategoryId}
      />
    );
  }
}

export default compose(
  withStyles(s),
  graphql(getPageFieldQuery, {
    name: "getPageFieldData",
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(FieldPage);
