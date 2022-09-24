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
import { Button, Col, Grid, Row } from "react-bootstrap";
import cx from "classnames";
import * as FontAwesome from "react-icons/lib/fa";
// Components
import Photos from "../../components/ViewListings/Photos/Photos";
import ListingIntro from "../../components/ViewListings/ListingIntro/ListingIntro";
import ListingDetails from "../../components/ViewListings/ListingDetails/ListingDetails";
import Reviews from "../../components/ViewListings/Reviews/Reviews";
import LocationMap from "../../components/ViewListings/LocationMap/LocationMap";
import AvailabilityCalendar from "../../components/ViewListings/AvailabilityCalendar/AvailabilityCalendar";
import StarRating from "../../components/StarRating/StarRating";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import BookingModal from "../../components/ViewListings/BookingModal/BookingModal";
import AutoAffix from "react-overlays/lib/AutoAffix";
import Calendar from "../../components/ViewListing/Calendar/Calendar";
import HostDetail from "../../components/ViewListing/HostDetail/HostDetail";

// ES6 Imports
import Scroll from "react-scroll"; // Imports all Mixins
// Locale
import messages from "../../locale/messages";

import { openBookingModal } from "../../actions/BookingModal/modalActions";

// graphql
import getUserProfileQuery from "./getUserProfile.graphql";
import getPageFieldsQuery from "./getPageField.graphql";

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
  static propTypes = {
    getUserProfileData: PropTypes.shape({
      loading: PropTypes.bool,
      getUserProfileData: PropTypes.array,
    }),
    account: PropTypes.shape({
      userId: PropTypes.string,
      userBanStatus: PropTypes.number,
    }),
    getFieldsData: PropTypes.shape({
      loading: PropTypes.bool,
      getFieldsData: PropTypes.array,
    }),
  };

  static defaultProps = {
    getUserProfileData: {
      loading: true,
      getUserProfileData: [],
    },
    account: {
      userId: null,
      userBanStatus: 0,
    },
    isAdmin: false,
  };

  getPhotosData() {
    const data = {};

    const { details = {} } = this.props;
    try {
      if (details?.coverPhoto) {
        const photos = JSON.parse(details?.coverPhoto);
        data.listPhotos = photos?.map((ele, index) => ({
          name: ele?.filename,
          id: index + 1,
        }));
      }
      return {
        ...data,
        id: details?.id,
        title: "",
        description: "",
        coverPhoto: 1,
        country: "GB",
        street: "Oristano Stazione F.s., Oristano, ",
        buildingName: "",
        city: "Province of Oristano",
        state: "Italy",
        zipcode: "09170",
        lat: 39.90105570554223,
        lng: 8.60587392065429,
        isListOwner: false,
        wishListStatus: false,
      };
    } catch (e) {
      return data;
    }
  }
  render() {
    const {
      account: { userId, userBanStatus },
      getUserProfileData: { getUserProfile },
      isAdmin,
      details,
      guests,
    } = this.props;
    const isBrowser = typeof window !== "undefined";
    const smallDevice = isBrowser
      ? window.matchMedia("(max-width: 640px)").matches
      : undefined;
    let basePriceValue = details?.basePrice ? details?.basePrice : 0;
    let currencyValue = details?.currency ? details?.currency : "USD";
    const ListingBlockedDates = [];
    // if (UserListing) {
    //   if (userId && userId === UserListing.userId) {
    //     isHost = true;
    //   } else if (isAdmin) {
    //     isHost = true;
    //   }
    // }
    let isHost = false;
    if (details) {
      if (userId && userId === details?.userId) {
        isHost = true;
      } else if (isAdmin) {
        isHost = true;
      }
    }
    console.log("host", isHost);
    // if (preview && !isHost) {
    //   return <NotFound title={title} />;
    // }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.pageContainer}>
            <Photos data={this.getPhotosData()} />
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
                            <ListingIntro
                              details={details}
                              getUserProfile={getUserProfile || {}}
                            />
                          </Col>
                        </Row>
                      </Grid>
                      <Grid
                        fluid
                        className={cx(s.horizontalLineThrough, s.noBorder)}
                      >
                        <ListingDetails
                          details={details}
                        />
                      </Grid>
                      <Grid fluid className={"availabilityMobile"}>
                        <AvailabilityCalendar
                          listId={details.listId}
                          smallDevice={smallDevice}
                          loading={ListingBlockedDates.loading}
                          blockedDates={
                            ListingBlockedDates.UserListing != null
                              ? ListingBlockedDates.UserListing.blockedDates
                              : undefined
                          }
                          listingData={details || undefined}
                          country={details.country}
                        />
                      </Grid>
                      <Element name="test2" className="element">
                        <Grid fluid>
                          <Reviews />
                        </Grid>
                      </Element>
                      <Element name="test3" className="element">
                        <Grid fluid>
                          <HostDetail
                            id={details.listId}
                            userId={getUserProfile?.userId}
                            hostEmail={getUserProfile?.email}
                            personCapacity={details.personCapacity}
                            city={details.city}
                            listingData={details || undefined}
                            profile={getUserProfile || undefined}
                            blockedDates={
                              ListingBlockedDates.UserListing != null
                                ? ListingBlockedDates.UserListing.blockedDates
                                : undefined
                            }
                            isHost={isHost}
                            userBanStatus={userBanStatus}
                            country={details.country}
                            urlParameters={{
                              listTitle: details.itemTitle,
                              // startDate,
                              // endDate,
                              guests,
                            }}
                          />
                        </Grid>
                      </Element>
                      <Element name="test4" className="element">
                        <Grid fluid className={cx(s.paddingTop2)}>
                          <LocationMap details={details} />
                        </Grid>
                      </Element>
                    </Row>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    className={s.positionSticky}
                  >
                    {!smallDevice && (
                      <div
                        className={cx(
                          s.responsiveNopadding,
                          "hidden-xs hidden-sm"
                        )}
                      >
                        <Calendar
                          id={details.id}
                          loading={ListingBlockedDates.loading}
                          blockedDates={
                            ListingBlockedDates.UserListing != null
                              ? ListingBlockedDates.UserListing.blockedDates
                              : undefined
                          }
                          personCapacity={details?.personCapacity || []}
                          listingData={details || undefined}
                          isHost={isHost}
                          bookingType={details?.bookingType}
                          // userBanStatus={userBanStatus}
                          startDate={10}
                          endDate={10}
                          // reviewsCount={UserListing.reviewsCount}
                          // reviewsStarRating={UserListing.reviewsStarRating}
                          guests={guests}
                          country={details?.country}
                        />
                      </div>
                    )}
                    {/*  {!smallDevice && (
                      <div
                        className={cx(
                          s.webDevice,
                          s.responsiveNopadding,
                          "hidden-xs hidden-sm"
                        )}
                      >
                        <Calendar
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
                        // userBanStatus={userBanStatus}
                        // startDate={startDate}
                        // endDate={endDate}
                        // reviewsCount={UserListing.reviewsCount}
                        // reviewsStarRating={UserListing.reviewsStarRating}
                        // guests={guests}
                        // country={UserListing.country}
                        />
                      </div>
                    )} */}
                  </Col>
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
                            from={currencyValue || baseCurrency}
                            amount={basePriceValue}
                            className={s.bookItPrice}
                          />
                        </div>
                        <span className={s.bookItNight}>
                          {" "}
                          {/* <FormattedMessage {...messages.perNight} /> */}
                          {details?.serviceUnit}
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
                        id={details.id}
                        loading={ListingBlockedDates.loading}
                        blockedDates={
                          ListingBlockedDates.UserListing != null
                            ? ListingBlockedDates.UserListing.blockedDates
                            : undefined
                        }
                        personCapacity={details?.personCapacity}
                        listingData={details || undefined}
                        isHost={isHost}
                        bookingType={details?.bookingType}
                        reviewsCount={details?.reviewsCount}
                        reviewsStarRating={details?.reviewsStarRating}
                        country={details?.country}
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
  connect(mapState, mapDispatch),
  graphql(getUserProfileQuery, {
    name: "getUserProfileData",
    options: (props) =>
      // console.log("grapgh", props?.account?.userId),
      ({
        variables: {
          userId: props?.account?.userId,
        },
        fetchPolicy: "network-only",
        ssr: false,
      }),
  })
)(ViewListings);
