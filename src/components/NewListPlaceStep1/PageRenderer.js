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

// Component
import PlacesSuggest from "../PlacesSuggest/PlacesSuggest";
import ListPlaceTips from "../ListPlaceTips/ListPlaceTips";
import CountryList from "../CountryList/CountryList";
import Loader from "../Loader/Loader";
import PhotosUpload from "../PhotosUpload/PhotosUpload";
//Images
import DefaultIcon from "../../../public/SiteIcons/defaultIcon.png";
import Calendar from "../ListsPlaceStep1/Calendar";
import Uploader from "./Uploader/Uploader";
import Photos from "../ListPlaceStep1/Photos";
import * as FontAwesome from "react-icons/lib/fa";

class PageRenderer extends Component {
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
      listId,
      handleCompleteStep,
      baseCurrency,
      availableCurrencies,
      countryList,
    } = this.props;
    // console.log(countryList.getCountries);
    const { spaces } = this.state;
    const { formatMessage } = this.props.intl;
    console.log("Current Page Data", currentPageData);
    return (
      <Grid className={s.container}>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <h3 className={s.landingContentTitle}>
                {currentPageData?.title}
              </h3>
              {currentPageData?.subtitle && (
                <div className={cx(s.space4, s.spaceTop4)}>
                  <span className={s.bookingLandingStep}>
                    {currentPageData?.subtitle}
                  </span>
                </div>
              )}
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      {currentPageData?.fields?.map((item) => {
                        if (item.type === "select") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              key={item.id}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item?.title}
                              </ControlLabel>
                              <span className={s.subText}>
                                {item?.sublabel}
                              </span>
                              <select
                                name={item.name}
                                className={cx(
                                  s.backgroundPosition,
                                  s.formControlSelect,
                                  s.jumboSelect,
                                  s.noFontWeight
                                )}
                                onChange={(e) => {
                                  console.log(e);
                                  updateField(item.name, e.target.value);
                                }}
                              >
                                <option value="" disabled>
                                  Please Select
                                </option>
                                {item?.fields &&
                                  item.fields?.map((optionData) => {
                                    console.log(optionData);
                                    return (
                                      <>
                                        <option
                                          value={optionData.label}
                                          key={optionData.value}
                                        >
                                          {optionData?.label}
                                        </option>
                                      </>
                                    );
                                  })}
                              </select>
                            </Col>
                          );
                        } else if (item.type === "radio") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item.title}
                              </ControlLabel>

                              {item?.options &&
                                item.options?.map((optionData) => {
                                  console.log(optionData);
                                  return (
                                    <label
                                      className={cx(
                                        s.blockRadioButton,
                                        s.landingLabel
                                      )}
                                    >
                                      <div>
                                        {optionData.label}
                                        <input
                                          type="radio"
                                          name={item.name}
                                          value={optionData.value}
                                          className={s.pullRight}
                                          onChange={(e) => {
                                            console.log(e);
                                            updateField(
                                              item.name,
                                              e.target.value
                                            );
                                          }}
                                        />
                                      </div>
                                    </label>
                                  );
                                })}
                            </Col>
                          );
                        } else if (item.type === "checkbox") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item.title}
                              </ControlLabel>

                              {item?.fields &&
                                item.fields?.map((optionData) => {
                                  // console.log("optionData",optionData);
                                  // console.log("optionDataitem",item);
                                  return (
                                    <div className={s.checkInput}>
                                      <input
                                        type="checkbox"
                                        name={optionData.label}
                                        value={optionData.value}
                                        className={cx(
                                          s.pullRight,
                                          s.customBorder
                                        )}
                                        onChange={(e) => {
                                          const fieldValue = [
                                            ...(formData[item.name] || []),
                                          ];
                                          const itemIndex = fieldValue.findIndex(
                                            (ele) => ele === e.target.value
                                          );
                                          if (
                                            !e.target.checked &&
                                            itemIndex > -1
                                          ) {
                                            fieldValue.splice(itemIndex, 1);
                                          } else {
                                            fieldValue.push(e.target.value);
                                          }
                                          updateField(item.name, fieldValue);
                                        }}
                                      />
                                      <span> {optionData.label}</span>
                                    </div>
                                  );
                                })}
                            </Col>
                          );
                        } else if (item.type === "textarea") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item.title}
                              </ControlLabel>

                              <textarea
                                name={item.name}
                                className={s.textareaInput}
                                onChange={(e) => {
                                  console.log(e);
                                  updateField(item.name, e.target.value);
                                }}
                              ></textarea>
                            </Col>
                          );
                        } else if (item.type === "text") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item.title}
                              </ControlLabel>

                              <input
                                name={item?.name}
                                className={cx(
                                  s.formControlInput,
                                  s.jumboSelect,
                                  s.formControlInputMaxWidth
                                )}
                                onChange={(e) => {
                                  console.log(e);
                                  updateField(item.name, e.target.value);
                                }}
                                type={item?.type}
                                placeholder={item?.placeholder}
                              />
                            </Col>
                          );
                        } else if (item.type === "number") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item.title}
                              </ControlLabel>

                              <input
                                name={item?.name}
                                className={cx(
                                  s.formControlInput,
                                  s.jumboSelect,
                                  s.formControlInputMaxWidth
                                )}
                                onChange={(e) => {
                                  console.log(e);
                                  updateField(item.name, e.target.value);
                                }}
                                type={item?.type}
                                placeholder={item?.placeholder}
                              />
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  </FormGroup>
                  <FormGroup className={s.formGroup}>
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      className={s.noPadding}
                    >
                      <Button
                        className={cx(
                          s.button,
                          bt.btnPrimaryBorder,
                          bt.btnLarge,
                          s.pullLeft,
                          "floatRight"
                        )}
                        disabled={pageIndex === 0}
                        onClick={previousPage}
                      >
                        <FormattedMessage {...messages.back} />
                      </Button>
                      <Button
                        className={cx(
                          s.button,
                          bt.btnPrimary,
                          bt.btnLarge,
                          s.pullRight,
                          "floatLeft"
                        )}
                        onClick={() => {
                          if (totalPage - 1 === pageIndex) {
                            handleCompleteStep();
                          } else {
                            nextPage();
                          }
                        }}
                      >
                        <FormattedMessage {...messages.next} />
                      </Button>
                    </Col>
                  </FormGroup>
                </div>
              </form>
            </div>
          </Col>
          {currentPageData?.type === "calendar" && "coverImage" ? (
            ""
          ) : (
            <ListPlaceTips />
          )}
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
  withStyles(s, bt)(connect(mapState, mapDispatch)(PageRenderer))
);
