// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm, formValueSelector } from "redux-form";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../../locale/messages";

// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import { Grid, Button, Row, FormGroup, Col } from "react-bootstrap";
import s from "../ListPlaceStep1.css";
import bt from "../../../components/commonStyle.css";
import IncrementButton from "../../IncrementButton/IncrementButton";
import ListPlaceTips from "../../ListPlaceTips/ListPlaceTips";

// Component

class MinMaxNights extends Component {
  static propTypes = {
    initialValues: PropTypes.object,
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
  };

  static defaultProps = {
    minNightData: 0,
    maxNightData: 0,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderIncrementButton = (field) => <IncrementButton {...field} />;

  render() {
    const { handleSubmit, submitting, pristine, valid } = this.props;

    return (
      <Grid fluid>
        <Row className={s.landingContainer}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.tripLength} />
              </h3>
              <form onSubmit={handleSubmit}>
                <div className={s.landingMainContent}>
                  <FormGroup className={cx(s.formGroup, s.space4)}>
                    <Field
                      name="minNight"
                      type="text"
                      component={this.renderIncrementButton}
                      //   labelSingluar={minNight.itemName}
                      //   labelPlural={minNight.otherItemName}
                      //   maxValue={minNight.endValue}
                      //   minValue={minNight.startValue}
                      //   incrementBy={1}
                    />
                    {/* {isDisabled && (
                      <div className={s.errorMessage}>
                        {" "}
                        <FormattedMessage {...messages.tripLengthError1} />{" "}
                      </div>
                    )} */}
                  </FormGroup>

                  <FormGroup className={s.formGroup}>
                    <Field
                      name="maxNight"
                      type="text"
                      component={this.renderIncrementButton}
                      //   labelSingluar={maxNight.itemName}
                      //   labelPlural={maxNight.otherItemName}
                      //   maxValue={maxNight.endValue}
                      //   minValue={maxNight.startValue}
                      //   incrementBy={1}
                    />
                  </FormGroup>
                </div>
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

// Decorate with connect to read form values
const selector = formValueSelector("ListPlaceStep3"); // <-- same as form name

MinMaxNights = reduxForm({
  form: "ListPlaceStep3", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(MinMaxNights);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(MinMaxNights))
);
