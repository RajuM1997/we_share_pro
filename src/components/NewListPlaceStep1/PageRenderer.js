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
    console.log(countryList.getCountries);
    const {
      isDisabled,
      houseType,
      roomType,
      buildingSize,
      bedrooms,
      bedType,
      beds,
      personCapacity,
      bathroomType,
      bookingNoticeTime,
      reviewGuestBook,
      guestRequirements,
      houseRules,
      spaces,
    } = this.state;
    const { formatMessage } = this.props.intl;
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
                                {item?.label}
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
                                {item?.options &&
                                  item.options?.map((optionData) => {
                                    console.log(optionData);
                                    return (
                                      <option
                                        value={optionData.label}
                                        key={optionData.value}
                                      >
                                        {optionData?.label}
                                      </option>
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
                        } else if (item.type === "checkboxImage") {
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

                              {item?.options &&
                                item.options?.map((optionData) => {
                                  console.log(optionData);
                                  return (
                                    <div className={s.checkInput}>
                                      <input
                                        type="checkbox"
                                        name={item.name}
                                        value={optionData.value}
                                        className={cx(
                                          s.pullRight,
                                          s.customBorder
                                        )}
                                        onChange={(e) => {
                                          updateField(
                                            item.name,
                                            e.target.value
                                          );
                                        }}
                                      />
                                      <img
                                        onChange={(e) => {
                                          console.log(e);
                                          updateField(
                                            item.name,
                                            e.target.value
                                          );
                                        }}
                                        src={DefaultIcon}
                                        className={cx(
                                          s.imgSection,
                                          "imgSectionRtl"
                                        )}
                                      />
                                      <span> {optionData.label}</span>
                                    </div>
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
                              <pre>{JSON.stringify(item, null, 4)}</pre>
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
                                          const fieldValue = [...(formData[item.name] || [])];
                                          const itemIndex = fieldValue.findIndex(ele => ele === e.target.value);
                                          if (!e.target.checked && itemIndex > -1) {
                                            fieldValue.splice(itemIndex, 1);
                                          } else {
                                            fieldValue.push(e.target.value);
                                          }
                                          updateField(
                                            item.name,
                                            fieldValue
                                          );
                                        }}
                                      />
                                      <span> {optionData.label}</span>
                                    </div>
                                  );
                                })}
                            </Col>
                          );
                        } else if (item.type === "map") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={6}
                              lg={6}
                            >
                              <ControlLabel className={s.landingLabel}>
                                {item?.label}
                              </ControlLabel>

                              <h2>map</h2>
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
                        } else if (item.type === "calendar") {
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

                              {/* <Calendar /> */}
                            </Col>
                          );
                        } else if (item.type === "coverImage") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <PhotosUpload placeholder={item?.title} />
                            </Col>
                          );
                        } else if (item.type === "price") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <ControlLabel className={s.landingStep3}>
                                <FormattedMessage {...messages.basePrice} />
                              </ControlLabel>
                              <br />
                              <input
                                name="basePrice"
                                type="text"
                                component={this.renderFormControl}
                                label={formatMessage(messages.basePriceLabel)}
                                className={cx(
                                  s.formControlInput,
                                  s.jumboSelect
                                )}
                              />
                              <br />
                              <ControlLabel className={s.landingStep3}>
                                <FormattedMessage {...messages.cleaningPrice} />
                              </ControlLabel>
                              <br />
                              <input
                                name="cleaningPrice"
                                type="text"
                                component={this.renderFormControl}
                                label={formatMessage(messages.cleaningPrice)}
                                className={cx(
                                  s.formControlInput,
                                  s.jumboSelect
                                )}
                              />
                              <br />
                              <ControlLabel className={s.landingStep3}>
                                <FormattedMessage {...messages.currency} />
                              </ControlLabel>
                              <br />
                              <select
                                name="currency"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                {availableCurrencies?.map((currency, key) => {
                                  if (currency.isEnable === true) {
                                    return (
                                      <option key={key} value={currency.symbol}>
                                        {currency.symbol}
                                      </option>
                                    );
                                  }
                                })}
                              </select>
                            </Col>
                          );
                        } else if (item.type === "address") {
                          return (
                            <>
                              {" "}
                              <Col
                                componentClass={ControlLabel}
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                              >
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
                                    {countryList.getCountries.map((item) => {
                                      console.log("country", item);
                                      return (
                                        <option
                                          value={item.countryCode}
                                          key={item.id}
                                        >
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
                                    className={cx(
                                      s.formControlInput,
                                      s.jumboInput
                                    )}
                                    label={formatMessage(messages.street)}
                                  />
                                  <ControlLabel className={s.landingLabel}>
                                    <FormattedMessage
                                      {...messages.buildingName}
                                    />
                                  </ControlLabel>
                                  <input
                                    name="buildingName"
                                    component={this.renderFormControl}
                                    className={cx(
                                      s.formControlInput,
                                      s.jumboInput
                                    )}
                                    label={formatMessage(messages.buildingName)}
                                  />
                                </FormGroup>
                              </Col>
                              <Col xs={12} sm={6} md={6} lg={6}>
                                <FormGroup className={s.formGroup}>
                                  <ControlLabel className={s.landingLabel}>
                                    <FormattedMessage {...messages.city} />
                                  </ControlLabel>
                                  <input
                                    name="city"
                                    component={this.renderFormControl}
                                    className={cx(
                                      s.formControlInput,
                                      s.jumboInput
                                    )}
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
                                    className={cx(
                                      s.formControlInput,
                                      s.jumboInput
                                    )}
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
                                  className={cx(
                                    s.formControlInput,
                                    s.jumboInput
                                  )}
                                />
                              </Col>
                            </>
                          );
                        } else if (item.type === "houseType") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <ControlLabel className={s.landingLabel}>
                                <FormattedMessage
                                  {...messages.whatTypeOfProperty}
                                />
                              </ControlLabel>
                              <select
                                name="houseType"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                {houseType?.map((value, key) => {
                                  return (
                                    value.isEnable == 1 && (
                                      <option value={value.id} key={key}>
                                        {value.itemName}
                                      </option>
                                    )
                                  );
                                })}
                              </select>
                            </Col>
                          );
                        } else if (item.type === "roomType") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <ControlLabel className={s.landingLabel}>
                                <FormattedMessage {...messages.whatGuestHave} />
                              </ControlLabel>
                              <select
                                name="roomType"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                {roomType?.map((value, key) => {
                                  return (
                                    value.isEnable == 1 && (
                                      <option value={value.id} key={key}>
                                        {value.itemName}
                                      </option>
                                    )
                                  );
                                })}
                              </select>
                            </Col>
                          );
                        } else if (item.type === "buildingSize") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <ControlLabel className={s.landingLabel}>
                                <FormattedMessage {...messages.howManyRooms} />
                              </ControlLabel>
                              <select
                                name="buildingSize"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                {buildingSize?.map((value, key) => {
                                  return (
                                    value.isEnable == 1 && (
                                      <option value={value.id} key={key}>
                                        {value.itemName}
                                      </option>
                                    )
                                  );
                                })}
                              </select>
                            </Col>
                          );
                        } else if (item.type === "bedroom") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <ControlLabel className={s.landingLabel}>
                                <FormattedMessage
                                  {...messages.howManyBedrooms}
                                />
                              </ControlLabel>
                              <select
                                name="bedrooms"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                {bedrooms?.map((value, key) => {
                                  let rows = [];
                                  for (
                                    let i = value.startValue;
                                    i <= value.endValue;
                                    i++
                                  ) {
                                    rows.push(
                                      <option value={i}>
                                        {i}{" "}
                                        {i > 1
                                          ? value.otherItemName
                                          : value.itemName}
                                      </option>
                                    );
                                  }
                                  return rows;
                                })}
                              </select>
                            </Col>
                          );
                        } else if (item.type === "bathroomType") {
                          return (
                            <select
                              name="bathroomType"
                              component={this.renderFormControlSelect}
                              className={cx(
                                s.formControlSelect,
                                s.jumboSelect,
                                s.jumboSelectPadding
                              )}
                            >
                              {bathroomType?.map((value, key) => {
                                return (
                                  value.isEnable == 1 && (
                                    <option value={value.id} key={key}>
                                      {value.itemName}
                                    </option>
                                  )
                                );
                              })}
                            </select>
                          );
                        } else if (item.type === "bookingNoticeTime") {
                          return (
                            <select
                              name="bookingNoticeTime"
                              component={this.renderFormControlSelect}
                              className={cx(s.formControlSelect, s.jumboSelect)}
                            >
                              {bookingNoticeTime?.map((value, key) => {
                                return (
                                  value.isEnable == 1 && (
                                    <option value={value.id} key={key}>
                                      {value.itemName}
                                    </option>
                                  )
                                );
                              })}
                            </select>
                          );
                        } else if (item.type === "maxDaysNotice") {
                          return (
                            <>
                              <select
                                name="maxDaysNotice"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                <option value={"available"}>
                                  {formatMessage(messages.datesOption5)}
                                </option>
                                <option value={"3months"}>
                                  {formatMessage(messages.datesOption1)}
                                </option>
                                <option value={"6months"}>
                                  {formatMessage(messages.datesOption2)}
                                </option>
                                <option value={"9months"}>
                                  {formatMessage(messages.datesOption3)}
                                </option>
                                <option value={"12months"}>
                                  {formatMessage(messages.datesOption4)}
                                </option>
                                <option value={"unavailable"}>
                                  {formatMessage(messages.datesDropDown)}
                                </option>
                              </select>
                              <ControlLabel className={s.landingStep3}>
                                <FormattedMessage
                                  {...messages.chooseCancellationPolicy}
                                />
                              </ControlLabel>
                              <select
                                name="cancellationPolicy"
                                component={this.renderFormControlSelect}
                                className={cx(
                                  s.formControlSelect,
                                  s.jumboSelect
                                )}
                              >
                                <option value={"1"}>
                                  {formatMessage(messages.flexible)}
                                </option>
                                <option value={"2"}>
                                  {formatMessage(messages.moderate)}
                                </option>
                                <option value={"3"}>
                                  {formatMessage(messages.strict)}
                                </option>
                              </select>
                            </>
                          );
                        } else if (item.type === "localLaws") {
                          return (
                            <>
                              <h3
                                className={cx(s.landingContentTitle, s.space5)}
                              >
                                <FormattedMessage {...messages.localLaws} />
                              </h3>
                              <div className={s.landingMainContent}>
                                <p className={cx(s.textHigh, s.space3)}>
                                  <span>
                                    <FormattedMessage
                                      {...messages.localLawsOne}
                                    />
                                  </span>
                                </p>
                                <div className={cx(s.textLow, s.space5)}>
                                  <p>
                                    <span>
                                      <FormattedMessage
                                        {...messages.localLawsTwo}
                                      />
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <FormattedMessage
                                        {...messages.localLawsThree}
                                      />
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <FormattedMessage
                                        {...messages.localLawsFive}
                                      />
                                      <FormattedMessage
                                        {...messages.localLawsSix}
                                      />
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <FormattedMessage
                                        {...messages.localLawsSeven}
                                      />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </>
                          );
                        } else if (item.type === "reviewGuestBook") {
                          return (
                            <Col
                              xs={12}
                              sm={7}
                              md={7}
                              lg={7}
                              className={s.landingContent}
                            >
                              <h3
                                className={cx(s.landingContentTitle, s.space5)}
                              >
                                <FormattedMessage
                                  {...messages.reviewGuestBookTitle}
                                />
                              </h3>
                              <p className={cx(s.landingStep3, s.space3)}>
                                <span>
                                  <FormattedMessage
                                    {...messages.reviewGuestBookDescription}
                                  />
                                </span>
                              </p>

                              <div className={s.landingMainContent}>
                                <FormGroup className={s.formGroup}>
                                  <ul
                                    className={cx(
                                      "list-unstyled",
                                      s.noPadding,
                                      s.noMargin,
                                      s.unorderedList
                                    )}
                                  >
                                    {reviewGuestBook?.map((item, key) => {
                                      if (item.isEnable === "1") {
                                        return (
                                          <li key={key}>
                                            <span className={s.displayTable}>
                                              <span
                                                className={s.displayTableRow}
                                              >
                                                <span
                                                  className={cx(
                                                    s.displayTableCell,
                                                    s.tableWidth
                                                  )}
                                                >
                                                  <FontAwesome.FaCheck
                                                    className={cx(s.checkIcon)}
                                                  />
                                                </span>
                                                <span
                                                  className={cx(
                                                    s.landingStep3,
                                                    s.space3,
                                                    s.displayTableCell,
                                                    s.tableWidthTwo
                                                  )}
                                                >
                                                  {" "}
                                                  {item.itemName}{" "}
                                                </span>
                                              </span>
                                            </span>
                                          </li>
                                        );
                                      }
                                    })}
                                  </ul>
                                  <ControlLabel className={s.landingLabel}>
                                    <FormattedMessage
                                      {...messages.reviewGuestBookNote}
                                    />
                                  </ControlLabel>
                                </FormGroup>
                              </div>
                            </Col>
                          );
                        } else if (item.type === "guestRequirements") {
                          return (
                            <Col
                              xs={12}
                              sm={7}
                              md={7}
                              lg={7}
                              className={s.landingContent}
                            >
                              <h3
                                className={cx(s.landingContentTitle, s.space5)}
                              >
                                <FormattedMessage
                                  {...messages.guestRequirementsTitle}
                                />
                              </h3>
                              <p className={cx(s.landingStep3, s.space3)}>
                                <span>
                                  <FormattedMessage
                                    {...messages.guestRequirementsDescription}
                                  />
                                </span>
                              </p>
                              <ul
                                className={cx(
                                  "list-unstyled",
                                  s.noPadding,
                                  s.noMargin,
                                  s.unorderedList
                                )}
                              >
                                {guestRequirements.map((item, key) => {
                                  if (item.isEnable === "1") {
                                    return (
                                      <li key={key}>
                                        <FontAwesome.FaCheck
                                          className={cx(
                                            s.checkIcon,
                                            "guestReuireCheckRtl"
                                          )}
                                        />
                                        <span
                                          className={cx(
                                            s.landingStep3,
                                            s.space3
                                          )}
                                        >
                                          {item.itemName}
                                        </span>
                                      </li>
                                    );
                                  }
                                })}
                              </ul>
                            </Col>
                          );
                        } else if (item.type === "houseRules") {
                          return (
                            <Col
                              xs={12}
                              sm={7}
                              md={7}
                              lg={7}
                              className={s.landingContent}
                            >
                              <h3 className={s.landingContentTitle}>
                                <FormattedMessage {...messages.setHouseRules} />
                              </h3>
                              {houseRules.map((item) => {
                                return (
                                  <div className={s.checkBox}>
                                    <input
                                      type="checkbox"
                                      className={s.checkBoxInput}
                                    />
                                    <label className={s.checkBoxLabel}>
                                      {item.itemName}
                                    </label>
                                  </div>
                                );
                              })}
                            </Col>
                          );
                        } else if (item.type === "spaces") {
                          return (
                            <Col
                              xs={12}
                              sm={7}
                              md={7}
                              lg={7}
                              className={s.landingContent}
                            >
                              <h3 className={s.landingContentTitle}>
                                <FormattedMessage {...messages.whatSpace} />
                              </h3>
                              {spaces.map((item) => {
                                return (
                                  <div className={s.checkBox}>
                                    <input
                                      type="checkbox"
                                      className={s.checkBoxInput}
                                    />
                                    <label className={s.checkBoxLabel}>
                                      {item.itemName}
                                    </label>
                                  </div>
                                );
                              })}
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
          {currentPageData?.type === "calendar" && "image" ? (
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
  withStyles(s, bt)(connect(mapState, mapDispatch)(PageRenderer))
);
