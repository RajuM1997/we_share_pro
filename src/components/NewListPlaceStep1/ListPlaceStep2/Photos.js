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
import { Grid, Button, Row, FormGroup, Col } from "react-bootstrap";
import s from "../ListPlaceStep1.css";
import bt from "../../../components/commonStyle.css";

// Internal Component
import PhotosUpload from "../../PhotosUpload/PhotosUpload";

class Photos extends Component {
  static propTypes = {
    previousPage: PropTypes.any,
    nextPage: PropTypes.any,
    listId: PropTypes.number.isRequired,
    photosCount: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      isAvailable: false,
    };
  }

  render() {
    const { error, handleSubmit, submitting, dispatch, listId } = this.props;
    const { isAvailable } = this.state;
    return (
      <Grid fluid>
        <Row className={s.landingContainer}>
          <Col xs={12} sm={12} md={12} lg={12} className={s.landingContent}>
            <div>
              <h3 className={s.landingContentTitle}>
                <FormattedMessage {...messages.photos} />
              </h3>
              <form>
                <div className={s.landingMainContent}>
                  <FormGroup className={s.formGroup}>
                    <PhotosUpload
                    //   placeholder={formatMessage(messages.photosPlaceholder)}
                    />
                  </FormGroup>
                </div>
                <div className={cx(s.nextPosition, s.nextPositionMap)}>
                  <div className={s.nextBackButtonMap}>
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
                        {!isAvailable && (
                          <Button
                            className={cx(
                              s.button,
                              bt.btnPrimary,
                              bt.btnLarge,
                              s.pullRight,
                              "floatLeft"
                            )}
                          >
                            <FormattedMessage {...messages.skip} />
                          </Button>
                        )}
                        {isAvailable && (
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
                        )}
                      </Col>
                    </FormGroup>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Photos = reduxForm({
  form: "ListPlaceStep2", // a unique name for this form
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Photos);

const mapState = (state) => ({});
const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Photos))
);
