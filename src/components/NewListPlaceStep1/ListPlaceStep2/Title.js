// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import { Field, reduxForm, formValueSelector } from "redux-form";

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
  FormControl,
} from "react-bootstrap";
import s from "../ListPlaceStep1.css";
import bt from "../../../components/commonStyle.css";

// Component
import ListPlaceTips from "../../ListPlaceTips/ListPlaceTips";

class Title extends Component {
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
  }) => {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <FormControl
          {...input}
          placeholder={label}
          type={type}
          className={className}
          maxLength={50}
        />
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
                <FormattedMessage {...messages.placeTitle} />
              </h3>
              <form onSubmit={handleSubmit}>
                <div className={s.landingMainContent}>
                  <h3 className={cx(s.noMarginMaximum, s.maximumSpace2)}>
                    <span className={s.maximumCharcter}>
                      <FormattedMessage {...messages.maximumCharcter} />
                    </span>
                  </h3>
                  <p className={s.maximumCharColor}>
                    <FormattedMessage {...messages.maximumCharcterLeft} />
                  </p>
                  <FormGroup className={s.formGroup}>
                    <Field
                      name="title"
                      type="text"
                      component={this.renderFormControl}
                      label={formatMessage(messages.titleLabel)}
                      className={cx(s.formControlInput, s.jumboInput)}
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
                          type="submit"
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

Title = reduxForm({
  form: "ListPlaceStep2", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Title);

const selector = formValueSelector("ListPlaceStep2");

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Title))
);
