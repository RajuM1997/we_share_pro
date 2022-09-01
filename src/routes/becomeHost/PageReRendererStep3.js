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
import Calendar from "../../components/ListsPlaceStep1/Calendar";
import PhotosUpload from "../../components/PhotosUpload/PhotosUpload";
import * as FontAwesome from "react-icons/lib/fa";

class PageReRendererStep3 extends Component {
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
    const {
      bookingNoticeTime,
      reviewGuestBook,
      guestRequirements,
    } = this.state;
    const { formatMessage } = this.props.intl;
    return (
      <Grid className={s.container}>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Col
                          xs={12}
                          sm={7}
                          md={7}
                          lg={12}
                          className={s.landingContent}
                        >
                          <h3 className={cx(s.landingContentTitle, s.space5)}>
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
                                      className={cx(s.landingStep3, s.space3)}
                                    >
                                      {item.itemName}
                                    </span>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </Col>
                      </>
                    </Row>
                  </FormGroup>
                  {/* <FormGroup className={s.formGroup}>
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
                  </FormGroup> */}
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Col
                          xs={12}
                          sm={7}
                          md={7}
                          lg={12}
                          className={s.landingContent}
                        >
                          <h3 className={cx(s.landingContentTitle, s.space5)}>
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
                                          <span className={s.displayTableRow}>
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
                      </>
                    </Row>
                  </FormGroup>
                  {/* <FormGroup className={s.formGroup}>
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
                  </FormGroup> */}
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.advanceNoticeTitle} />
              </h3>
              <form>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <select
                      name="bookingNoticeTime"
                      component={this.renderFormControlSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
                    >
                      {bookingNoticeTime.map((value, key) => {
                        return (
                          value.isEnable == 1 && (
                            <option value={value.id} key={key}>
                              {value.itemName}
                            </option>
                          )
                        );
                      })}
                    </select>
                  </FormGroup>

                  <ControlLabel className={s.landingLabel}>
                    <FormattedMessage {...messages.advanceNoticeCheckInTitle} />
                  </ControlLabel>

                  <FormGroup className={s.formGroup}>
                    <ControlLabel className={s.landingLabel}>
                      <FormattedMessage {...messages.advanceNoticeFrom} />
                    </ControlLabel>
                    <select
                      name="checkInStart"
                      component={this.renderTimeSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
                    >
                      <option value="">8</option>{" "}
                    </select>
                  </FormGroup>
                  <FormGroup className={s.formGroup}>
                    <ControlLabel className={s.landingLabel}>
                      <FormattedMessage {...messages.advanceNoticeTo} />
                    </ControlLabel>
                    <select
                      name="checkInEnd"
                      component={this.renderTimeSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
                    >
                      {" "}
                      <option value="">8</option>
                    </select>
                  </FormGroup>
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.maxDaysTitle} />
              </h3>
              <form>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <select
                      name="maxDaysNotice"
                      component={this.renderFormControlSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
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
                  </FormGroup>

                  <FormGroup className={cx(s.formGroup, s.spaceTop4)}>
                    <ControlLabel className={s.landingStep3}>
                      <FormattedMessage
                        {...messages.chooseCancellationPolicy}
                      />
                    </ControlLabel>
                    <br />
                    <select
                      name="cancellationPolicy"
                      component={this.renderFormControlSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
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
                  </FormGroup>
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Col
                          xs={12}
                          sm={7}
                          md={7}
                          lg={7}
                          className={s.landingContent}
                        >
                          <div>
                            <h3 className={s.landingContentTitle}>
                              <FormattedMessage {...messages.tripLength} />
                            </h3>
                            <form>
                              <div className={s.landingMainContent}>
                                <FormGroup
                                  className={cx(s.formGroup, s.space4)}
                                >
                                  <select
                                    name="minNight"
                                    component={this.renderFormControlSelect}
                                    className={cx(
                                      s.formControlSelect,
                                      s.jumboSelect
                                    )}
                                  >
                                    <option value="">3Night Max</option>
                                  </select>
                                </FormGroup>

                                <FormGroup className={s.formGroup}>
                                  <select
                                    name="maxNight"
                                    component={this.renderFormControlSelect}
                                    className={cx(
                                      s.formControlSelect,
                                      s.jumboSelect
                                    )}
                                  >
                                    <option value="">3Night Max</option>
                                  </select>
                                </FormGroup>
                              </div>
                              {/* <div className={s.nextPosition}>
                                <div className={s.nextBackButton}>
                                  <hr className={s.horizontalLineThrough} />

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
                                        
                                      >
                                        <FormattedMessage {...messages.next} />
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </div>
                              </div> */}
                            </form>
                          </div>
                        </Col>
                      </>
                    </Row>
                  </FormGroup>
                  {/* <FormGroup className={s.formGroup}>
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
                  </FormGroup> */}
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.pricing} />
              </h3>
              <p className={cx(s.landingStep3, s.space4)}>
                <span>
                  <FormattedMessage {...messages.pricingDescription} />
                </span>
              </p>
              <form>
                <div className={s.landingMainContent}>
                  <FormGroup className={cx(s.formGroup, s.space4)}>
                    <ControlLabel className={s.landingStep3}>
                      <FormattedMessage {...messages.basePrice} />
                    </ControlLabel>
                    <br />
                    <input
                      name="basePrice"
                      type="text"
                      component={this.renderFormControl}
                      label={formatMessage(messages.basePriceLabel)}
                      className={cx(s.formControlInput, s.jumboSelect)}
                    />
                  </FormGroup>

                  <FormGroup className={cx(s.formGroup, s.space4)}>
                    <ControlLabel className={s.landingStep3}>
                      <FormattedMessage {...messages.cleaningPrice} />
                    </ControlLabel>
                    <br />
                    <input
                      name="cleaningPrice"
                      type="text"
                      component={this.renderFormControl}
                      label={formatMessage(messages.cleaningPrice)}
                      className={cx(s.formControlInput, s.jumboSelect)}
                    />
                  </FormGroup>
                  <FormGroup className={s.formGroup}>
                    <ControlLabel className={s.landingStep3}>
                      <FormattedMessage {...messages.currency} />
                    </ControlLabel>
                    <br />
                    <select
                      name="currency"
                      component={this.renderFormControlSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
                    >
                      {availableCurrencies.map((currency, key) => {
                        if (currency.isEnable === true) {
                          return (
                            <option key={key} value={currency.symbol}>
                              {currency.symbol}
                            </option>
                          );
                        }
                      })}
                    </select>
                  </FormGroup>
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Calendar />
                      </>
                    </Row>
                  </FormGroup>
                  {/* <FormGroup className={s.formGroup}>
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
                  </FormGroup> */}
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Col
                          xs={12}
                          sm={7}
                          md={7}
                          lg={12}
                          className={s.landingContent}
                        >
                          <div>
                            <h3 className={s.landingContentTitle}>
                              <FormattedMessage {...messages.discount} />
                            </h3>
                            <p className={cx(s.landingStep3, s.space4)}>
                              <span>
                                <strong>
                                  <FormattedMessage
                                    {...messages.discountStays}
                                  />
                                </strong>
                              </span>
                            </p>
                            <form>
                              <div className={s.landingMainContent}>
                                <FormGroup className={s.formGroup}>
                                  <ControlLabel className={s.landingStep3}>
                                    <FormattedMessage
                                      {...messages.discountWeekly}
                                    />
                                  </ControlLabel>
                                  <br />
                                  <input
                                    name="weeklyDiscount"
                                    type="text"
                                    component={this.renderFormControl}
                                    label={formatMessage(
                                      messages.discountLabel
                                    )}
                                    className={cx(
                                      s.formControlInput,
                                      s.jumboSelect,
                                      s.formControlInputMaxWidth
                                    )}
                                    prefixLabel={"%"}
                                  />
                                </FormGroup>

                                <FormGroup className={s.formGroup}>
                                  <ControlLabel className={s.landingStep3}>
                                    <FormattedMessage
                                      {...messages.discountMonthly}
                                    />
                                  </ControlLabel>
                                  <br />
                                  <input
                                    name="monthlyDiscount"
                                    type="text"
                                    component={this.renderFormControl}
                                    label={formatMessage(
                                      messages.discountLabel
                                    )}
                                    className={cx(
                                      s.formControlInput,
                                      s.jumboSelect,
                                      s.formControlInputMaxWidth
                                    )}
                                    prefixLabel={"%"}
                                  />
                                </FormGroup>
                              </div>
                              {/* <div className={s.nextPosition}>
                                <div className={s.nextBackButton}>
                                  <hr className={s.horizontalLineThrough} />

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
                                        
                                      >
                                        <FormattedMessage {...messages.next} />
                                      </Button>
                                    </Col>
                                  </FormGroup>
                                </div>
                              </div> */}
                            </form>
                          </div>
                        </Col>
                      </>
                    </Row>
                  </FormGroup>
                  {/* <FormGroup className={s.formGroup}>
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
                  </FormGroup> */}
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Col
                          xs={12}
                          sm={7}
                          md={7}
                          lg={12}
                          className={s.landingContent}
                        >
                          <h3 className={s.landingContentTitle}>
                            <FormattedMessage
                              {...messages.instantBookingTitle}
                            />
                          </h3>
                          <form>
                            <div className={cx(s.space4, s.spaceTop4)}>
                              <span className={s.bookingLandingStep}>
                                <FormattedMessage
                                  {...messages.instantBookingInfo}
                                />
                              </span>
                            </div>

                            <div className={s.spaceTop3}>
                              <h3 className={s.landingContentTitle}>
                                <FormattedMessage {...messages.whoCanBook} />
                              </h3>
                              <span className={s.landingStep}>
                                <FormattedMessage
                                  {...messages.whoCanBookInfo}
                                />
                              </span>
                            </div>

                            <div className={s.spaceTop3}>
                              <label className={s.displayTable}>
                                <span className={s.displayTableRow}>
                                  <span className={s.displayTableCellTop}>
                                    <input
                                      name="bookingType"
                                      component="input"
                                      type="radio"
                                      value="instant"
                                      className={s.BookingradioInput}
                                    />
                                  </span>
                                  <span className={s.displayTableCell}>
                                    <span
                                      className={cx(s.bookText, "rtlBookText")}
                                    >
                                      <FormattedMessage
                                        {...messages.whoCanBookInfo1}
                                      />
                                    </span>
                                    <span className={s.subText}>
                                      <FormattedMessage
                                        {...messages.whoCanBookInfo2}
                                      />
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className={cx(s.space6, s.spaceTop3)}>
                              <label className={s.displayTable}>
                                <span className={s.displayTableRow}>
                                  <span className={s.displayTableCellTop}>
                                    <input
                                      name="bookingType"
                                      component="input"
                                      type="radio"
                                      value="request"
                                      className={s.BookingradioInput}
                                    />
                                  </span>
                                  <span className={s.displayTableCell}>
                                    <span
                                      className={cx(s.bookText, "rtlBookText")}
                                    >
                                      <FormattedMessage
                                        {...messages.whoCanBookInfo3}
                                      />
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            {/* <div className={s.nextPosition}>
                              <div className={s.nextBackButton}>
                                <hr className={s.horizontalLineThrough} />

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
                                      
                                    >
                                      <FormattedMessage {...messages.next} />
                                    </Button>
                                  </Col>
                                </FormGroup>
                              </div>
                            </div> */}
                          </form>
                        </Col>
                      </>
                    </Row>
                  </FormGroup>
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
        </Row>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7}>
            <div>
              <form onSubmit="">
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Row>
                      <>
                        <Col
                          xs={12}
                          sm={7}
                          md={7}
                          lg={12}
                          className={s.landingContent}
                        >
                          <h3 className={cx(s.landingContentTitle, s.space5)}>
                            <FormattedMessage {...messages.localLaws} />
                          </h3>
                          <div className={s.landingMainContent}>
                            <p className={cx(s.textHigh, s.space3)}>
                              <span>
                                <FormattedMessage {...messages.localLawsOne} />
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
                        </Col>
                      </>
                    </Row>
                  </FormGroup>
                </div>
              </form>
            </div>
          </Col>
          <ListPlaceTips />
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
  withStyles(s, bt)(connect(mapState, mapDispatch)(PageReRendererStep3))
);
