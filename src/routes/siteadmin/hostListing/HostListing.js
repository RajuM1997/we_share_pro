import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Listings.css";

// Query
import listingsQuery from "./listingsQuery.graphql";

// Component
import Loader from "../../../components/Loader/Loader";
import HostListingManagement from "../../../components/siteadmin/HostListingManagement/HostListingManagement";

class HostListing extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    getAllListings: PropTypes.shape({
      loading: PropTypes.bool,
      getAllListings: PropTypes.array,
    }),
  };

  static defaultProps = {
    getAllListings: {
      loading: true,
    },
  };

  render() {
    return <HostListingManagement />;
  }
}

export default compose(
  withStyles(s),
  // graphql(listingsQuery),
  graphql(listingsQuery, {
    name: "getAllListings",
    options: {
      variables: {
        currentPage: 1,
        searchList: "",
      },
      fetchPolicy: "network-only",
    },
  })
)(HostListing);
