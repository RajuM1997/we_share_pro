// General
import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { formValueSelector } from "redux-form";

// Translation
import { FormattedMessage } from "react-intl";
// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ViewListing.css";
import bt from "../../components/commonStyle.css";
import { Button, Grid, Row, Col } from "react-bootstrap";
import cx from "classnames";
import * as FontAwesome from "react-icons/lib/fa";
// Components
import Photos from "../../components/ViewListings/Photos/Photos";
import ListingIntro from "../../components/ViewListings/ListingIntro/ListingIntro";
import Calendar from "../../components/ViewListings/Calendar/Calendar";
import ListingDetails from "../../components/ViewListings/ListingDetails/ListingDetails";
import Reviews from "../../components/ViewListings/Reviews/Reviews";
import HostDetail from "../../components/ViewListings/HostDetail/HostDetail";
import LocationMap from "../../components/ViewListings/LocationMap/LocationMap";
import Loader from "../../components/Loader/Loader";
import NotFound from "../notFound/NotFound";
import AvailabilityCalendar from "../../components/ViewListings/AvailabilityCalendar/AvailabilityCalendar";
import StarRating from "../../components/StarRating/StarRating";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import BookingModal from "../../components/ViewListings/BookingModal/BookingModal";
import SimilarListings from "../../components/ViewListings/SimilarListings/SimilarListings";

// Graphql
// import BlockedDatesQuery from "./BlockedDates.graphql";
// import ListingDataQuery from "./getListingData.graphql";
// import MoreReviewsQuery from "./MoreReviews.graphql";
// import SimilarListsQuery from "./getSimilarListing.graphql";
import AutoAffix from "react-overlays/lib/AutoAffix";

// ES6 Imports
import Scroll from "react-scroll"; // Imports all Mixins

// Locale
import messages from "../../locale/messages";

import { openBookingModal } from "../../actions/BookingModal/modalActions";

// Or Access Link,Element,etc as follows
let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;
var durationFn = function(deltaTop) {
  return deltaTop;
};
class ViewListings extends React.Component {
  // static PropTypes = {
  //   getListingData: PropTypes.shape({
  //     loading: PropTypes.bool,
  //     UserListing: PropTypes.object,
  //   }),
  // };
  // static defaultProps = {
  //   getListingData: {
  //     loading: false,
  //     UserListing: {
  //       userId: null,
  //     },
  //   },
  // };
  render() {
    // const {
    //   listId,
    //   title,
    //   getListingData: { loading, UserListing },
    //   preview,
    //   averageBasePrice,
    // } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.pageContainer}>
            <Photos />
            <Element name="test1" className="element">
              <Grid fluid className={cx(s.horizontalLineThrough)}>
                <Row className={cx(s.pageContent)}>
                  <Col xs={12} sm={12} md={8} lg={8}>
                    <Row>
                      <div className={s.stickyContainer}>
                        <AutoAffix
                          viewportOffsetTop={0}
                          container={this}
                          affixClassName={s.showAffix}
                        >
                          <div className={cx(s.zPanel, s.panelDefault)}>
                            <div className={cx("stickHeader", s.viewHeader)}>
                              <div className={s.headerNav}>
                                <div className={s.textColor}>
                                  <ul
                                    className={cx("list-inline", s.stickyMenu)}
                                  >
                                    <li>
                                      <Link
                                        className={cx(s.textList)}
                                        activeClass={s.active}
                                        to="test1"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={800}
                                        onSetActive={this.handleSetActive}
                                      >
                                        <FormattedMessage
                                          {...messages.overview}
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={cx(s.textList)}
                                        activeClass={s.active}
                                        to="test2"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={800}
                                        onSetActive={this.handleSetActive}
                                      >
                                        <FormattedMessage
                                          {...messages.reviews}
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={cx(s.textList)}
                                        activeClass={s.active}
                                        to="test3"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                        onSetActive={this.handleSetActive}
                                      >
                                        <FormattedMessage
                                          {...messages.theHost}
                                        />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className={cx(s.textList)}
                                        activeClass={s.active}
                                        to="test4"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                        onSetActive={this.handleSetActive}
                                      >
                                        <FormattedMessage
                                          {...messages.location}
                                        />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AutoAffix>
                      </div>
                      <Grid fluid>
                        <Row>
                          <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className={cx(
                              s.paddingIntro,
                              s.listingIntroSection
                            )}
                          >
                            <ListingIntro />
                          </Col>
                        </Row>
                      </Grid>
                      <Grid
                        fluid
                        className={cx(s.horizontalLineThrough, s.noBorder)}
                      >
                        <ListingDetails />
                      </Grid>
                      <Grid fluid className={"availabilityMobile"}>
                        <AvailabilityCalendar />
                      </Grid>
                      <Element name="test2" className="element">
                        <Grid fluid>
                          <Reviews />
                        </Grid>
                      </Element>
                      {/* <Element name="test3" className="element">
                          <Grid fluid>
                            <HostDetail
                              id={UserListing.id}
                              userId={UserListing.userId}
                              hostEmail={UserListing.user.email}
                              personCapacity={UserListing.personCapacity}
                              city={UserListing.city}
                              listingData={UserListing.listingData || undefined}
                              profile={UserListing.user.profile || undefined}
                              blockedDates={
                                ListingBlockedDates.UserListing != null
                                  ? ListingBlockedDates.UserListing.blockedDates
                                  : undefined
                              }
                              isHost={isHost}
                              userBanStatus={userBanStatus}
                              country={UserListing.country}
                              urlParameters={{
                                listTitle: UserListing.title,
                                startDate,
                                endDate,
                                guests,
                              }}
                            />
                          </Grid>
                        </Element> */}
                      <Element name="test4" className="element">
                        <Grid fluid className={cx(s.paddingTop2)}>
                          <LocationMap />
                        </Grid>
                      </Element>
                    </Row>
                  </Col>
                  {/*  <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      className={s.positionSticky}
                    >
                      {!smallDevice && !loading && (
                        <div
                          className={cx(
                            s.responsiveNopadding,
                            "hidden-xs hidden-sm"
                          )}
                        >
                          <Calendar
                            id={UserListing.id}
                            loading={ListingBlockedDates.loading}
                            blockedDates={
                              ListingBlockedDates.UserListing != null
                                ? ListingBlockedDates.UserListing.blockedDates
                                : undefined
                            }
                            personCapacity={UserListing.personCapacity}
                            listingData={UserListing.listingData || undefined}
                            isHost={isHost}
                            bookingType={UserListing.bookingType}
                            userBanStatus={userBanStatus}
                            startDate={startDate}
                            endDate={endDate}
                            reviewsCount={UserListing.reviewsCount}
                            reviewsStarRating={UserListing.reviewsStarRating}
                            guests={guests}
                            country={UserListing.country}
                          />
                        </div>
                      )}
                      {!smallDevice && loading && (
                        <div
                          className={cx(
                            s.webDevice,
                            s.responsiveNopadding,
                            "hidden-xs hidden-sm"
                          )}
                        >
                          <Calendar
                            id={UserListing.id}
                            loading={ListingBlockedDates.loading}
                            blockedDates={
                              ListingBlockedDates.UserListing != null
                                ? ListingBlockedDates.UserListing.blockedDates
                                : undefined
                            }
                            personCapacity={UserListing.personCapacity}
                            listingData={UserListing.listingData || undefined}
                            isHost={isHost}
                            bookingType={UserListing.bookingType}
                            userBanStatus={userBanStatus}
                            startDate={startDate}
                            endDate={endDate}
                            reviewsCount={UserListing.reviewsCount}
                            reviewsStarRating={UserListing.reviewsStarRating}
                            guests={guests}
                            country={UserListing.country}
                          />
                        </div>
                      )}
                    </Col> */}
                </Row>
                {/*  {similarListsData &&
                    similarListsData.getSimilarListing &&
                    similarListsData.getSimilarListing.length > 0 && (
                      <Grid
                        fluid
                        className={cx(
                          s.space2,
                          s.noPaddingMobile,
                          s.pageContent,
                          s.similarPadding
                        )}
                      >
                        <Row
                          className={cx(
                            s.space3,
                            s.sliderMargin,
                            "similarListing",
                            s.similarPadding
                          )}
                        >
                          <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className={cx(
                              s.spaceTop2,
                              s.space2,
                              s.similarPaddingText
                            )}
                          >
                            <h2 className={cx(s.sectionTitleText, s.space2)}>
                              <FormattedMessage {...messages.similarListings} />
                            </h2>
                          </Col>
                          <SimilarListings
                            data={similarListsData.getSimilarListing}
                          />
                        </Row>
                      </Grid>
                    )} */}
              </Grid>
            </Element>
          </div>

          <div className={cx(s.stickyBookButton, "visible-sm visible-xs")}>
            <div className={cx(s.filtersFooter)}>
              <div className={s.filtersContainer}>
                <Row className={s.footerContainer}>
                  <div className={cx(s.displayTable, s.displayTableMobile)}>
                    <div
                      className={cx(
                        s.smSpace,
                        s.displayTableCell,
                        s.displayBlockMobile
                      )}
                    >
                      <div className={s.bookItPriceAmount}>
                        {/* {UserListing && UserListing.bookingType === "instant" && ( */}
                        <span>
                          <FontAwesome.FaBolt className={s.instantIcon} />
                        </span>
                        {/* )} */}
                        <div className={s.bookItPrice}>
                          <CurrencyConverter
                            // from={currencyValue || baseCurrency}
                            // amount={
                            //   averageBasePrice
                            //     ? averageBasePrice
                            //     : basePriceValue || 0
                            // }
                            className={s.bookItPrice}
                          />
                        </div>
                        <span className={s.bookItNight}>
                          {" "}
                          <FormattedMessage {...messages.perNight} />
                        </span>
                      </div>
                      <div>
                        <div className={s.reviewSection}>
                          <StarRating
                            name={"review"}
                            // value={starRatingValue}
                          />
                        </div>
                        <div>
                          <span>
                            {/* {reviewsCount > 0 && ( */}
                            <span>
                              {/* {reviewsCount}{" "}
                                {reviewsCount > 1 ? (
                                  <FormattedMessage {...messages.reviews} />
                                ) : ( */}
                              <FormattedMessage {...messages.review} />
                              {/* )} */}
                            </span>
                            {/* )} */}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={cx(s.displayTableCell, s.displayBlockMobile)}
                    >
                      <BookingModal
                      // id={UserListing.id}
                      // loading={ListingBlockedDates.loading}
                      // blockedDates={
                      //   ListingBlockedDates.UserListing != null
                      //     ? ListingBlockedDates.UserListing.blockedDates
                      //     : undefined
                      // }
                      // personCapacity={UserListing.personCapacity}
                      // listingData={UserListing.listingData || undefined}
                      // isHost={isHost}
                      // bookingType={UserListing.bookingType}
                      // reviewsCount={UserListing.reviewsCount}
                      // reviewsStarRating={UserListing.reviewsStarRating}
                      // country={UserListing.country}
                      />
                      <Button
                        className={cx(s.btn, bt.btnPrimary, s.fullWidth)}
                        onClick={openBookingModal}
                      >
                        <FormattedMessage {...messages.bookNow} />
                      </Button>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const selector = formValueSelector("BookingForm");

const mapState = (state) => ({
  account: state.account.data,
  isAdmin: state.runtime.isAdminAuthenticated,
  averageBasePrice: selector(state, "averageBasePrice"),
});
const mapDispatch = {
  openBookingModal,
};
export default compose(
  withStyles(s, bt),
  connect(mapState, mapDispatch)
)(ViewListings);
