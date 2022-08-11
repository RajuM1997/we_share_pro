import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./FieldPage.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// Query
// import getCategory from "./getCategory.graphql";
import { graphql, gql, compose } from "react-apollo";
import PageFieldManagement from "../../../../components/siteadmin/PageField/PageFieldManagement";

class FieldPage extends Component {
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
    return <PageFieldManagement />;
  }
}

export default compose(
  withStyles(s)
  // graphql(getCategory, {
  //   options: {
  //     fetchPolicy: "network-only",
  //     ssr: false,
  //   },
  // })
)(FieldPage);
