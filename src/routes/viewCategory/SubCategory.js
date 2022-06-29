import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import s from "./ViewCategorys.css";
import bt from "../../components/commonStyle.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { graphql, gql, compose } from "react-apollo";
import * as FontAwesome from "react-icons/lib/fa";

import getSubCategory from "./getSubCategory.graphql";
import PropTypes from "prop-types";
import SubCategoryItem from "./SubCategoryItem";
// Helpers
// import { formatURL } from "../../../helpers/formatURL";
// import {formatURL} from "../"

class SubCategory extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategory: PropTypes.array,
    }),
  };

  static defaultProps = {
    data: [],
  };
  render() {
    const {
      data: { loading },
    } = this.props;

    const {
      data: { getSubCategory },
    } = this.props;
    return (
      <>
        <SubCategoryItem data={getSubCategory} />;
      </>
    );
  }
}

const mapState = (state) => ({});
export default compose(
  withStyles(s, bt),
  graphql(getSubCategory, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(SubCategory);
