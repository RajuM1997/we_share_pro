// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm } from "redux-form";

// Redux
import { connect } from "react-redux";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../../locale/messages";

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
  InputGroup,
} from "react-bootstrap";
import s from "../ListPlaceStep1.css";
import bt from "../../../components/commonStyle.css";
import ListPlaceTips from "../../ListPlaceTips/ListPlaceTips";

// Component

class Discount extends Component {
  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderFormControl = ({
    input,
    label,
    type,
    meta: { touched, error },
    className,
    prefixLabel,
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <InputGroup>
          <InputGroup.Addon className={s.prefixIcon}>
            {prefixLabel}
          </InputGroup.Addon>
          <FormControl
            {...input}
            placeholder={label}
            type={type}
            className={className}
            maxLength={6}
          />
        </InputGroup>

        {touched && error && (
          <span className={s.errorMessage}>{formatMessage(error)}</span>
        )}
      </div>
    );
  };

  render() {
    const { error, handleSubmit, submitting, dispatch } = this.props;
    const { formatMessage } = this.props.intl;
    return (
      <Grid fluid>
        <Row className={s.landingContainer}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.discount} />
              </h3>
              <p className={cx(s.landingStep3, s.space4)}>
                <span>
                  <strong>
                    <FormattedMessage {...messages.discountStays} />
                  </strong>
                </span>
              </p>
              <form onSubmit={handleSubmit}>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <ControlLabel className={s.landingStep3}>
                      <FormattedMessage {...messages.discountWeekly} />
                    </ControlLabel>
                    <Field
                      name="weeklyDiscount"
                      type="text"
                      component={this.renderFormControl}
                      label={formatMessage(messages.discountLabel)}
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
                      <FormattedMessage {...messages.discountMonthly} />
                    </ControlLabel>
                    <Field
                      name="monthlyDiscount"
                      type="text"
                      component={this.renderFormControl}
                      label={formatMessage(messages.discountLabel)}
                      className={cx(
                        s.formControlInput,
                        s.jumboSelect,
                        s.formControlInputMaxWidth
                      )}
                      prefixLabel={"%"}
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

Discount = reduxForm({
  form: "ListPlaceStep3", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Discount);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Discount))
);
