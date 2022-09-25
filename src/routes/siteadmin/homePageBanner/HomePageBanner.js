import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./HomePageBanner.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// Query

import { graphql, gql, compose } from "react-apollo";
import BannerManagement from "../../../components/siteadmin/HomePageBanner/BannerManagement";
import getHomeBanner from "./getHomeBanner.graphql";

class HomePageBanner extends Component {
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
      data: { getHomeBanner },
    } = this.props;
    return <BannerManagement data={getHomeBanner} />;
  }
}

export default compose(
  withStyles(s),
  graphql(getHomeBanner, {
    options: {
      fetchPolicy: "network-only",
      ssr: false,
    },
  })
)(HomePageBanner);
