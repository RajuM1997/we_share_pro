import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm, formValueSelector } from "redux-form";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../locale/messages";

// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import {
  Grid,
  Button,
  Row,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import s from "./ListPlaceStep1.css";
import bt from "../../components/commonStyle.css";
import ListPlaceTips from "../../components/ListPlaceTips/ListPlaceTips";
import PhotosUpload from "../../components/PhotosUpload/PhotosUpload";
import * as FontAwesome from "react-icons/lib/fa";

class PageReRendererStep1 extends Component {
  static propTypes = {
    currentPageData: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      selectedCategoryValue: "",
      houseType: [],
      roomType: [],
      buildingSize: [],
      bedrooms: [],
      bathroomType: [],
      bookingNoticeTime: [],
      reviewGuestBook: [],
      guestRequirements: [],
      houseRules: [],
      spaces: [],
    };
    this.continuePage = this.continuePage.bind(this);
    this.prePage = this.prePage.bind(this);
  }

  componentWillMount() {
    const { listingFields } = this.props;

    if (listingFields != undefined) {
      this.setState({
        houseType: listingFields.houseType,
        roomType: listingFields.roomType,
        buildingSize: listingFields.buildingSize,
        bedrooms: listingFields.bedrooms,
        bathroomType: listingFields.bathroomType,
        bookingNoticeTime: listingFields.bookingNoticeTime,
        reviewGuestBook: listingFields.reviewGuestBook,
        guestRequirements: listingFields.guestRequirements,
        houseRules: listingFields.houseRules,
        spaces: listingFields.spaces,
      });
    }
  }

  componentDidMount() {
    const { valid } = this.props;

    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { valid, listingFields } = nextProps;
    if (valid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }

    if (listingFields != undefined) {
      this.setState({
        houseType: listingFields.houseType,
        roomType: listingFields.roomType,
        buildingSize: listingFields.buildingSize,
        bedrooms: listingFields.bedrooms,
        bathroomType: listingFields.bathroomType,
        bookingNoticeTime: listingFields.bookingNoticeTime,
        reviewGuestBook: listingFields.reviewGuestBook,
        guestRequirements: listingFields.guestRequirements,
        houseRules: listingFields.houseRules,
        spaces: listingFields.spaces,
      });
    }
  }

  continuePage(selectedCategory) {
    this.setState((thisState) => ({
      ...thisState,
      currentPage: thisState.currentPage + 1,
    }));

    this.setState({
      selectedCategoryValue: selectedCategory,
    });
    // console.log(selectedCategory);
  }
  prePage() {
    this.setState((thisState) => ({
      ...thisState,
      currentPage: thisState.currentPage - 1,
    }));
  }

  render() {
    // console.log(this.state.selectedCategory);
    const {
      totalPage,
      pageIndex,
      currentPageData,
      nextPage,
      previousPage,
      formData,
      updateField,
      countryList,
    } = this.props;
    console.log(countryList.getCountries);
    const {} = this.state;
    const { formatMessage } = this.props.intl;
    return (
      <Grid className={s.container}>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.placeTitle} />
              </h3>
              <form>
                <div className={s.landingMainContent}>
                  <h3 className={cx(s.noMarginMaximum, s.maximumSpace2)}>
                    <span className={s.maximumCharcter}>
                      <FormattedMessage {...messages.maximumCharcter} />
                    </span>
                  </h3>
                  <p className={s.maximumCharColor}>
                    {" "}
                    <FormattedMessage {...messages.maximumCharcterLeft} />
                  </p>
                  <FormGroup className={s.formGroup}>
                    <input
                      name="title"
                      type="text"
                      component={this.renderFormControl}
                      label={formatMessage(messages.titleLabel)}
                      className={cx(s.formControlInput, s.jumboInput)}
                    />
                  </FormGroup>
                </div>
                {/* <div className={s.nextPosition}>
                  <div className={s.nextBackButton}>
                    <hr className={s.horizontalLineThrough} />
                  </div>
                </div> */}
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.description} />
              </h3>
              <strong className={s.landingStep2}>
                <span>
                  <FormattedMessage {...messages.descriptionSubheading} />
                </span>
              </strong>
              <form>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <textarea
                      name="description"
                      component={this.renderFormControlTextArea}
                      className={s.textareaInput}
                      label={formatMessage(messages.descriptionLabel)}
                    />
                  </FormGroup>
                </div>
                {/* <div className={s.nextPosition}>
                  <div className={s.nextBackButton}>
                    <hr className={s.horizontalLineThrough} />
                  </div>
                </div> */}
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <form>
              <div className={s.landingMainContent}>
                <h3 className={s.landingContentTitle}>
                  <FormattedMessage {...messages.whereLocated} />
                </h3>
                <FormGroup className={s.formGroup}>
                  <input
                    name="location"
                    component={this.renderPlacesSuggest}
                    label={formatMessage(messages.yourFullAddress)}
                    className={cx(s.formControlInput, s.jumboInput)}
                  />
                </FormGroup>
              </div>
            </form>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <>
            <Col componentClass={ControlLabel} xs={12} sm={12} md={12} lg={7}>
              <FormGroup className={s.formGroup}>
                <ControlLabel className={s.landingLabel}>
                  <FormattedMessage {...messages.country} />
                </ControlLabel>
                <select
                  name="country"
                  component={this.renderCountryList}
                  className={cx(
                    s.formControlSelect,
                    s.jumboSelect,
                    s.formControlSelectLarge
                  )}
                >
                  {countryList.getCountries?.map((item) => {
                    console.log("country", item);
                    return (
                      <option value={item.countryCode} key={item.id}>
                        {item.countryName}
                      </option>
                    );
                  })}
                </select>
                <ControlLabel className={s.landingLabel}>
                  <FormattedMessage {...messages.street} />
                </ControlLabel>
                <input
                  name="street"
                  component={this.renderFormControl}
                  className={cx(s.formControlInput, s.jumboInput)}
                  label={formatMessage(messages.street)}
                />
                <ControlLabel className={s.landingLabel}>
                  <FormattedMessage {...messages.buildingName} />
                </ControlLabel>
                <input
                  name="buildingName"
                  component={this.renderFormControl}
                  className={cx(s.formControlInput, s.jumboInput)}
                  label={formatMessage(messages.buildingName)}
                />
              </FormGroup>

              <Col xs={12} sm={6} md={6} lg={6}>
                <FormGroup className={s.formGroup}>
                  <ControlLabel className={s.landingLabel}>
                    <FormattedMessage {...messages.city} />
                  </ControlLabel>
                  <input
                    name="city"
                    component={this.renderFormControl}
                    className={cx(s.formControlInput, s.jumboInput)}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <FormGroup className={s.formGroup}>
                  <ControlLabel className={s.landingLabel}>
                    <FormattedMessage {...messages.state} />
                  </ControlLabel>
                  <input
                    name="state"
                    component={this.renderFormControl}
                    className={cx(s.formControlInput, s.jumboInput)}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <ControlLabel className={s.landingLabel}>
                  <FormattedMessage {...messages.zipcode} />
                </ControlLabel>
                <input
                  name="zipcode"
                  component={this.renderFormControl}
                  className={cx(s.formControlInput, s.jumboInput)}
                />
              </Col>
            </Col>
          </>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col componentClass={ControlLabel} xs={12} sm={12} md={12} lg={12}>
            <PhotosUpload
              placeholder="Cover Photo"
              photos={formData["coverImage"] || []}
              updatePhotos={updateField}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
const selector = formValueSelector("ListPlaceStep1");
const mapState = (state) => ({
  listingFields: state.listingFields.data,
  availableCurrencies: state.currency.availableCurrencies,
  base: state.currency.base,
  mapUpdateLoading: state.location.mapUpdateLoading,
  isLocationChosen: state.location.isLocationChosen,
  isExistingList: state.location.isExistingList,
  loading: state.loader.location,
  mapUpdateLoading: state.location.mapUpdateLoading,
  existingList: state.location.isExistingList,
  beds: selector(state, "beds"),
  bedCount: selector(state, "beds"),
  bedTypes: selector(state, "bedTypes"),
});
const mapDispatch = {};
export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(PageReRendererStep1))
);
