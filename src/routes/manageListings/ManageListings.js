import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

// Style
import { Grid, Row, Col } from "react-bootstrap";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ManageListing.css";

// Redux
import { connect } from "react-redux";

// Component
import SideMenu from "../../components/ManageListing/SideMenu/SideMenu";
import PanelWrapper from "../../components/ManageListing/PanelWrapper/PanelWrapper";
import Loader from "../../components/Loader/Loader";
// Graphql
import ManageListingsQuery from "./manageListing.graphql";
import getHostListingByUserIdQuery from "./getHostListingByUserId.graphql";

class ManageListing extends React.Component {
  static propTypes = {
    ManageListingsData: PropTypes.shape({
      loading: PropTypes.bool,
      ManageListings: PropTypes.array,
    }),
    GetHostListingByUserIdData: PropTypes.shape({
      loading: PropTypes.bool,
      ManageHostListings: PropTypes.array,
    }),
    account: PropTypes.shape({
      userId: PropTypes.string,
      userBanStatus: PropTypes.number,
    }),
  };

  static defaultProps = {
    GetHostListingByUserIdData: {
      loading: true,
      ManageHostListings: [],
    },
    ManageListingsData: {
      loading: true,
      ManageListings: [],
    },
    account: {
      userId: null,
      userBanStatus: 0,
    },
    isAdmin: false,
  };

  render() {
    const {
      account: { userId, userBanStatus },
      isAdmin,
      ManageListingsData: { loading, ManageListings },
      GetHostListingByUserIdData: { getHostListingByUserId },
    } = this.props;
    console.log("UserId", userId);
    console.log(getHostListingByUserId);
    return (
      <div style={{ marginTop: "30px" }}>
        <Grid fluid className={s.container}>
          <Row className={s.landingContainer}>
            <SideMenu />
            <Col xs={12} sm={9} md={9} lg={9}>
              {loading && <Loader type={"text"} />}
              {!loading && ManageListings != null && (
                <PanelWrapper data={ManageListings} />
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapState = (state) => ({
  account: state.account.data,
});

export default compose(
  withStyles(s),
  connect(mapState),
  graphql(getHostListingByUserIdQuery, {
    name: "GetHostListingByUserIdData",
    options: (props) => (
      console.log("grapgh", props.account.userId),
      {
        variables: {
          userId: props.account.userId,
        },
        fetchPolicy: "network-only",
        ssr: false,
      }
    ),
  }),
  graphql(ManageListingsQuery, {
    name: "ManageListingsData",
    options: {
      ssr: false,
      fetchPolicy: "network-only",
    },
  })
)(ManageListing);
