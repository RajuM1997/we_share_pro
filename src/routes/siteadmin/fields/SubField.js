import React, { Component } from "react";
import { graphql, gql, compose } from "react-apollo";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./FieldManagement.css";
// Query
import getFields from "./getFields.graphql";
import getSubCategory from "./getSubCategory.graphql";
// component
import FieldManagement from "../../../components/siteadmin/Field/FieldManagement";
class SubField extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getFields: PropTypes.array,
    }),
    subCategoryData: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategory: PropTypes.array,
    }),
  };

  static defaultProps = {
    data: {
      loading: true,
    },
    subCategoryData: {
      loading: true,
    },
  };

  render() {
    const {
      data: { loading },
      subCategoryId,
    } = this.props;

    const {
      data: { getFields },
      // subCategoryData: { getSubCategory },
    } = this.props;
    // console.log(getSubCategory);
    return (
      <>
        <FieldManagement
          data={getFields}
          subCategoryId={subCategoryId}
          // subCategoryData={getSubCategory}
        />
      </>
    );
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
  // graphql(getSubCategory, {
  //   options: {
  //     fetchPolicy: "network-only",
  //     ssr: false,
  //   },
  // })
)(SubField);
