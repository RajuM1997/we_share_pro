// General
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
import ListPlaceTips from "../ListPlaceTips/ListPlaceTips";

class Page2 extends Component {
  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
    initialValues: PropTypes.object,
    nextPage: PropTypes.any,
    userData: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    }).isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getSubCategory: PropTypes.any,
    }),
  };
  static defaultProps = {
    userData: {
      firstName: "",
    },
    data: {
      loading: true,
    },
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
  }) => {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <select {...input}>{children}</select>
        {touched && error && <span>{formatMessage(error)}</span>}
      </div>
    );
  };

  renderFormControlSelect = ({
    input,
    label,
    meta: { touched, error },
    children,
    className,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl componentClass="select" {...input} className={className}>
          {children}
        </FormControl>
      </div>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    const { userData } = this.props;
    return (
      <div>
        <Grid fluid>
          <Row className={cx(s.landingContainer, "arrowPosition")}>
            <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
              <div>
                <h2 className={s.landingTitle}>
                  <FormattedMessage {...messages.hi} />, {userData.firstName}!{" "}
                  <FormattedMessage {...messages.letYouGetReady} />.
                </h2>
                <strong className={s.landingStep}>
                  <span>
                    {" "}
                    <FormattedMessage {...messages.step1HeadingNew} />
                  </span>
                </strong>
                <h3 className={s.landingContentTitle}>
                  {" "}
                  <FormattedMessage {...messages.whatKindOfPlace} />{" "}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className={s.landingMainContent}>
                    <FormGroup className={s.formGroup}>
                      <Row>
                        <Col
                          componentClass={ControlLabel}
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                        >
                          <Field
                            name="roomType"
                            component={this.renderFormControlSelect}
                            className={cx(
                              s.backgroundPosition,
                              s.formControlSelect,
                              s.jumboSelect,
                              s.noFontWeight
                            )}
                          >
                            {/* {this.state.filterSubCateory &&
                              this.state.filterSubCateory.length > 0 &&
                              this.state.filterSubCateory.map((value, key) => {
                                return (
                                  <option value={value.id} key={key}>
                                    {value.subCategory}
                                  </option>
                                );
                              })} */}
                          </Field>
                        </Col>

                        <Col
                          componentClass={ControlLabel}
                          xs={12}
                          sm={12}
                          md={6}
                          lg={6}
                        >
                          <Field
                            name="personCapacity"
                            component={this.renderFormControlSelect}
                            className={cx(
                              s.backgroundPosition,
                              s.formControlSelect,
                              s.jumboSelect,
                              s.noFontWeight
                            )}
                          >
                            {/* {personCapacity.map((value, key) => {
                              let rows = [];
                              for (
                                let i = value.startValue;
                                i <= value.endValue;
                                i++
                              ) {
                                rows.push(
                                  <option value={i} key={key}>
                                    for {i}{" "}
                                    {i > 1
                                      ? value.otherItemName
                                      : value.itemName}
                                  </option>
                                );
                              }
                              return rows;
                            })} */}
                          </Field>
                        </Col>
                      </Row>
                    </FormGroup>
                    <div className={s.nextPosition}>
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
                              //   onClick={() => previousPage(path)}
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
                              //   onClick={() => nextPage("room")}
                            >
                              <FormattedMessage {...messages.next} />
                            </Button>
                          </Col>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <ListPlaceTips />
          </Row>
        </Grid>
      </div>
    );
  }
}

Page2 = reduxForm({
  form: "ListPlaceStep1", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Page2);

// Decorate with connect to read form values
const selector = formValueSelector("ListPlaceStep1"); // <-- same as form name

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Page2))
);
