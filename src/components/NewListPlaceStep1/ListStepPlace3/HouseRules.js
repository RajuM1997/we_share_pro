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
import { Grid, Button, Row, FormGroup, Col } from "react-bootstrap";
import s from "../ListPlaceStep1.css";
import bt from "../../../components/commonStyle.css";
import CustomCheckbox from "../../CustomCheckbox/CustomCheckbox";
import ListPlaceTips from "../../ListPlaceTips/ListPlaceTips";

// Internal Components

class HouseRules extends Component {
  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  checkboxGroup = ({ label, name, options, input }) => (
    <ul className={s.listContainer}>
      {options?.map((option, index) => {
        if (option.isEnable === "1") {
          return (
            <li className={s.listContent} key={index}>
              <span className={s.checkBoxSection}>
                <CustomCheckbox
                  name={`${input.name}[${index}]`}
                  value={option.id}
                  checked={input.value.indexOf(option.id) !== -1}
                  className={"icheckbox_square-green"}
                  onChange={(event) => {
                    const newValue = [...input.value];
                    if (event === true) {
                      newValue.push(option.id);
                    } else {
                      newValue.splice(newValue.indexOf(option.id), 1);
                    }
                    return input.onChange(newValue);
                  }}
                />
              </span>
              <span className={cx(s.checkBoxSection, s.checkBoxLabel)}>
                <label className={cx(s.checkboxLabel, s.noPadding)}>
                  {option.itemName}
                </label>
              </span>
            </li>
          );
        }
      })}
    </ul>
  );

  render() {
    const { error, handleSubmit, submitting, dispatch } = this.props;

    return (
      <Grid fluid>
        <Row className={s.landingContainer}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.setHouseRules} />
              </h3>
              <form onSubmit={handleSubmit}>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <Field
                      name="houseRules"
                      component={this.checkboxGroup}
                      //   options={houseRules}
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

HouseRules = reduxForm({
  form: "ListPlaceStep3", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(HouseRules);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(HouseRules))
);
