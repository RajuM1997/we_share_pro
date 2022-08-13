import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { graphql, gql, compose } from "react-apollo";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./FieldManagement.css";
// Query
import getFieldsQuery from "./getFields.graphql";
import getSubCategoryQuery from "./getSubCategory.graphql";
// component
import FieldManagement from "../../../components/siteadmin/Field/FieldManagement";
class SubField extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    getFieldsData: PropTypes.shape({
      loading: PropTypes.bool,
      getFieldsData: PropTypes.array,
    }),
    getSubCategoryData: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategoryData: PropTypes.array,
    }),
  };

  static defaultProps = {
    getFieldsData: {
      loading: true,
    },
    getSubCategoryData: {
      loading: true,
    },
  };

  render() {
    const { subCategoryId, getFieldsData, getSubCategoryData } = this.props;
    // console.log(data);
    return (
      <FieldManagement
        data={getFieldsData.getFieldsAdmin}
        subCategoryId={subCategoryId}
        // subCategoryData={getSubCategory}
      />
    );
  }
}
const mapState = (state) => ({});

const mapDispatch = {};
export default compose(
  withStyles(s),
  graphql(getFieldsQuery, {
    name: "getFieldsData",
    options: {
      ssr: true,
    },
  }),
  graphql(getSubCategoryQuery, {
    name: "getSubCategoryData",
    options: {
      ssr: true,
    },
  }),
  connect(mapState, mapDispatch)
)(SubField);
