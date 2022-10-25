import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoryBanner from "./CategoryBanner";
import SubCategory from "./SubCategory";
import CategoryProfile from "./UserProfile";
import { data } from "./SubCategoryData";
import bt from "../../components/commonStyle.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Col, Row } from "react-bootstrap";
import s from "./ViewCategorys.css";
import Filter from "./Filter";
import { graphql, gql, compose } from "react-apollo";
import { connect } from "react-redux";
import getHomeBannerQuery from "./getBannerHome.graphql";
class ViewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storagesData: null,
    };
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    getHomeBannerData: PropTypes.shape({
      loading: PropTypes.bool,
      getHomeBannerData: PropTypes.array,
    }),
  };

  static defaultProps = {
    getHomeBannerData: {
      loading: true,
    },
  };
  componentWillMount() {
    const listingItem = JSON.parse(sessionStorage.getItem("filterData"));
    this.setState({ storagesData: listingItem });
  }
  render() {
    // const listingItem = JSON.parse(sessionStorage.getItem("filterData"));
    console.log(this.state.storagesData);
    const { storagesData } = this.state;
    const { listing = [], getHomeBannerData, singleCategoryData } = this.props;

    if (window.location.reload && storagesData) {
      sessionStorage.removeItem("filterData");
    }
    return (
      <>
        <div>
          <CategoryBanner
            singleCategoryData={singleCategoryData}
            data={getHomeBannerData?.getHomeAdmin}
          />

          <CategoryProfile />
          <div className="container">
            <Filter />
            <hr />
            <Row>
              <Col md={6} sm={12}>
                <h6 className={s.maptitle}>79 stays in map area</h6>
                <SubCategory listing={storagesData ? storagesData : listing} />
              </Col>
              <Col md={6} sm={12}>
                <div className={s.map}>
                  <iframe
                    title="This is a Dream Fly location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8990681563923!2d90.37139331434842!3d23.750978394672508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d6018f643%3A0x603d2d083289b4a3!2sDhanmondi%2032%20Road%20Bridge%2C%20Dhanmondi%20Bridge%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1644859032836!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: "1px solid #e6e6e6", marginTop: "5px" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

const mapState = (state) => ({});
export default compose(
  withStyles(s),
  graphql(getHomeBannerQuery, {
    name: "getHomeBannerData",
    options: {
      ssr: true,
    },
  })
)(ViewCategory);
