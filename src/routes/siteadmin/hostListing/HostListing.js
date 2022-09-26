import React from "react";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./HostListing.css";

// Query
import getHostListing from "./getHostListing.graphql";

// Component
import Loader from "../../../components/Loader/Loader";
import HostListingManagement from "../../../components/siteadmin/HostListingManagement/HostListingManagement";

class HostListing extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    getHostListing: PropTypes.shape({
      loading: PropTypes.bool,
      getHostListing: PropTypes.array,
    }),
  };

  static defaultProps = {
    getHostListing: {
      loading: true,
    },
  };

  render() {
    const {
      data: { loading, getHostListing },
    } = this.props;
    const userData = getHostListing?.reduce((acc, cur, i) => {
      acc[i] = cur;
      return acc;
    }, {});
    if (loading) {
      return <Loader type={"text"} />;
    } else {
      return (
        <HostListingManagement data={getHostListing} itialValues={userData} />
      );
    }
  }
}

export default compose(
  withStyles(s),
  graphql(gql`
    {
      getHostListing {
        id
        userId
        categoryId
        subCategoryId
        personCapacity
        itemTitle
        itemDescription
        fullAddress
        buildingName
        country
        street
        zipcode
        lat
        lng
        state
        city
        serviceUnit
        bookingNoticeTime
        bookingNoticeCheckInStart
        bookingNoticeCheckInEnd
        maxDaysNotice
        cancellationPolicy
        minUnit
        basePrice
        currency
        coverPhoto
        weeklyDiscount
        monthlyDiscount
        bookingType
        dynamicFields
      }
    }
  `)
)(HostListing);
