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

class PageRenderer extends Component {
  static propTypes = {
    currentPageData: [],
  };

  constructor(props) {
    super(props);
    this.state = {};
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
    } = this.props;
    console.log(currentPageData);
    return (
      <Grid className={s.container}>
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
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
                                      <option value={optionData.label}>
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
                                {item.label}
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
                                {item.label}
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
                                          console.log(e);
                                          updateField(
                                            item.name,
                                            e.target.value
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
                                {item.label}
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
                                {item.label}
                              </ControlLabel>

                              {item.options &&
                                item.options.map((inputData) => {
                                  return (
                                    <input
                                      name={inputData.name}
                                      className={cx(
                                        s.formControlInput,
                                        s.jumboSelect,
                                        s.formControlInputMaxWidth
                                      )}
                                      onChange={(e) => {
                                        console.log(e);
                                        updateField(item.name, e.target.value);
                                      }}
                                      type={inputData?.type}
                                      placeholder={inputData?.placeholder}
                                    />
                                  );
                                })}
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
                                {item.label}
                              </ControlLabel>

                              {/* <Calendar /> */}
                            </Col>
                          );
                        } else if (item.type === "image") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <PhotosUpload
                                listId={listId}
                                placeholder={item.label}
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  updateField(item.name, e.target.value);
                                }}
                              />
                            </Col>
                          );
                        } else if (item.type === "image") {
                          return (
                            <Col
                              componentClass={ControlLabel}
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                            >
                              <PhotosUpload
                                listId={listId}
                                placeholder={item.label}
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
                        disabled={totalPage -1 === pageIndex}
                        onClick={nextPage}
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
const mapState = (state) => ({});

const mapDispatch = {};
export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(PageRenderer))
);
