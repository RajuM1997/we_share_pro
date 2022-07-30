// General
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux Form
import {
  Field,
  reduxForm,
  formValueSelector,
  FieldArray,
  change,
} from "redux-form";

// Redux
import { connect } from "react-redux";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../locale/messages";

// Internal Component
import IncrementButton from "../ListPlaceStep1/IncrementBtn/IncrementBtn";

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

import update from "./update";

// Internal Component
import IncrementBtn from "../ListPlaceStep1/IncrementBtn/IncrementBtn";
import ListPlaceTips from "../ListPlaceTips/ListPlaceTips";

class Page4 extends Component {
  static propTypes = {
    initialValues: PropTypes.object,
    previousPage: PropTypes.any,
    beds: PropTypes.number,
    nextPage: PropTypes.any,
    bedTypes: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  renderIncrementButton = (field) => <IncrementButton {...field} />;

  renderIncrementBtn = (input, dispatch) => (
    <IncrementBtn {...input} onChange={this.handleClick} />
  );

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

  renderBedTypes = ({ fields, meta: { error, submitFailed } }) => {
    const { formatMessage } = this.props.intl;
    const { bedType } = this.state;
    return (
      <div className={s.spaceTop2}>
        {fields?.map((beds, index) => (
          <div key={index}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <FormGroup className={s.formGroup}>
                  <Field
                    name={`${beds}.bedType`}
                    type="text"
                    component={this.renderFormControlSelect}
                    className={cx(s.formControlSelect, s.jumboSelect)}
                  >
                    {/* {bedType?.map((value, key) => {
                      return (
                        value.isEnable == 1 && (
                          <option value={value.id} key={key}>
                            {value.itemName}
                          </option>
                        )
                      );
                    })} */}
                  </Field>
                </FormGroup>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const {
      handleSubmit,
      submitting,
      pristine,
      previousPage,
      nextPage,
      bedTypes,
    } = this.props;

    return (
      <Grid fluid>
        <Row className={cx(s.landingContainer, "arrowPosition")}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.howManyGuests} />
              </h3>
              <form onSubmit={handleSubmit}>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Field
                      name="personCapacity"
                      type="text"
                      component={this.renderIncrementButton}
                      labelSingluar=""
                      labelPlural=""
                      maxValue=""
                      minValue=""
                      incrementBy={1}
                    />
                  </FormGroup>

                  <FormGroup className={s.formGroup}>
                    <ControlLabel className={s.landingLabel}>
                      <FormattedMessage {...messages.howManyBedrooms} />
                    </ControlLabel>
                    <Field
                      name="bedrooms"
                      component={this.renderFormControlSelect}
                      className={cx(s.formControlSelect, s.jumboSelect)}
                    >
                      {/* {bedrooms.map((value, key) => {
                        let rows = [];
                        for (
                          let i = value.startValue;
                          i <= value.endValue;
                          i++
                        ) {
                          rows.push(
                            <option value={i}>
                              {i} {i > 1 ? value.otherItemName : value.itemName}
                            </option>
                          );
                        }
                        return rows;
                      })} */}
                    </Field>
                  </FormGroup>

                  <FormGroup className={s.formGroup}>
                    <ControlLabel className={s.landingLabel}>
                      <FormattedMessage {...messages.howManyBeds} />
                    </ControlLabel>
                    <Field
                      name="beds"
                      type="text"
                      component={this.renderIncrementBtn}
                      labelSingluar=""
                      labelPlural=""
                      minValue=""
                      incrementBy={1}
                      maxValue=""
                    />
                  </FormGroup>

                  <FieldArray
                    name="bedTypes"
                    component={this.renderBedTypes}
                    className={s.spaceTop2}
                  />
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
                          // onClick={() => previousPage("room")}
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
                          // onClick={() => nextPage("bathrooms")}
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

Page4 = reduxForm({
  form: "ListPlaceStep1", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Page4);

// Decorate with connect to read form values
const selector = formValueSelector("ListPlaceStep1"); // <-- same as form name

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Page4))
);
