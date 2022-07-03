import React, { Component } from "react";
import SubCategoryManagement from "../../../components/siteadmin/SubCategory/SubCategoryManagement";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";
import getSubCategory from "./getSubCategory.graphql";

class SubCategory extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategory: PropTypes.array,
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
      data: { getSubCategory },
    } = this.props;
    console.log(getSubCategory);
    return <SubCategoryManagement data={getSubCategory} />;
  }
}

export default compose(
  graphql(getSubCategory, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(SubCategory);
