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
import * as FontAwesome from "react-icons/lib/fa";
import ListPlaceTips from "../../ListPlaceTips/ListPlaceTips";

// Component

class GuestRequirements extends Component {
  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { error, handleSubmit, submitting, dispatch } = this.props;

    return (
      <Grid fluid>
        <Row className={s.landingContainer}>
          <Col xs={12} sm={7} md={7} lg={7} className={s.landingContent}>
            <h3 className={cx(s.landingContentTitle, s.space5)}>
              <FormattedMessage {...messages.guestRequirementsTitle} />
            </h3>
            <p className={cx(s.landingStep3, s.space3)}>
              <span>
                <FormattedMessage {...messages.guestRequirementsDescription} />
              </span>
            </p>
            <form onSubmit={handleSubmit}>
              <ul
                className={cx(
                  "list-unstyled",
                  s.noPadding,
                  s.noMargin,
                  s.unorderedList
                )}
              >
                {/* {guestRequirements.map((item, key) => {
                  if (item.isEnable === "1") {
                    return (
                      <li key={key}>
                        <FontAwesome.FaCheck
                          className={cx(s.checkIcon, "guestReuireCheckRtl")}
                        />
                        <span className={cx(s.landingStep3, s.space3)}>
                          {item.itemName}
                        </span>
                      </li>
                    );
                  }
                })} */}
              </ul>
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
          </Col>
          <ListPlaceTips />
        </Row>
      </Grid>
    );
  }
}

GuestRequirements = reduxForm({
  form: "ListPlaceStep3", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(GuestRequirements);

const mapState = (state) => ({});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(GuestRequirements))
);
