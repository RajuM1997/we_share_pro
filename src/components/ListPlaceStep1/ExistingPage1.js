// General
import React, { Component } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Translation
import { injectIntl, FormattedMessage } from "react-intl";
// Locale
import messages from "../../locale/messages";
// Style
import { Button, Grid, Row, Col } from "react-bootstrap";
import cx from "classnames";
import * as FontAwesome from "react-icons/lib/fa";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ExistingPage.css";
import bt from "../../components/commonStyle.css";
import defaultPic from "../../../public/SiteImages/vector.png";

// Component
import Loader from "../Loader";

// Redux action
import {
  ManagePublishStatus,
  submitForVerification,
  approveListing,
} from "../../actions/Listing/ManagePublishStatus";

import {
  openCommentModal,
  closeCommentModal,
} from "../../actions/modalActions";
import CommentModal from "../siteadmin/ListingApprovalManagement/CommentModal/CommentModal";
class ExistingPage1 extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    handleOnNextStep: PropTypes.func.isRequired,
  };
  static defaultProps = {
    currentStep: 1,
    handleOnNextStep: () => {},
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentStep,
      handleOnNextStep,
      handleCompleteHostListing,
      listingId,
    } = this.props;
    const { formatMessage } = this.props.intl;
    let stepOneCircle = false,
      stepTwoCircle = false,
      stepThreeCircle = false;

    if (currentStep === 1) {
      stepOneCircle = true;
    }
    if (currentStep === 2) {
      stepTwoCircle = true;
      stepOneCircle = true;
    }
    if (currentStep === 3) {
      stepTwoCircle = true;
      stepOneCircle = true;
      stepThreeCircle = true;
    }
    return (
      <div className={cx(s.mainSectionPadding, "noPaddingBottom")}>
        <Grid>
          <CommentModal handleDecline={this.handleDecline} />
          <Row className={s.landingContainer}>
            <Col xs={12} sm={7} md={7} lg={7}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h3 className={s.landingTitle}>
                  <FormattedMessage {...messages.step1Heading} />
                </h3>
              </Col>
              <div>
                <div className={cx(s.displayTable, s.positionRelative)}>
                  <div className={s.displayTableRow}>
                    {
                      <div
                        className={cx(
                          s.displayTableCell,
                          s.vtrTop,
                          s.iconWidth,
                          s.borderLine,
                          "exitingBorderLine",
                          { [s.borderLineActive]: stepOneCircle }
                        )}
                      ></div>
                    }
                    <div
                      className={cx(s.circle, "exittingCircle", {
                        [s.circleSuccess]: stepOneCircle,
                      })}
                    ></div>
                    <div className={cx(s.positionRelative)}>
                      <div
                        className={cx(
                          s.displayTableCell,
                          s.vtrTop,
                          s.contentWidth,
                          s.paddingBottom,
                          s.paddingLeft,
                          s.mainSection
                        )}
                      >
                        <div className={s.contentSection}>
                          <strong className={cx(s.step)}>
                            <span>
                              <FormattedMessage {...messages.step1HeadingNew} />
                            </span>
                          </strong>
                          <h3 className={s.landingContentTitle}>
                            <FormattedMessage {...messages.Sayyourspace} />
                          </h3>
                          <p className={cx(s.landingTitleStep)}>
                            <span>
                              <FormattedMessage
                                {...messages.step1HeadingContent}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={cx(s.displayTable, s.positionRelative)}>
                  <div className={s.displayTableRow}>
                    {
                      <div
                        className={cx(
                          s.displayTableCell,
                          s.vtrTop,
                          s.iconWidth,
                          s.borderLine,
                          "exitingBorderLine",
                          { [s.borderLineActive]: stepTwoCircle }
                        )}
                      ></div>
                    }
                    <div
                      className={cx(s.circle, "exittingCircle", {
                        [s.circleSuccess]: stepTwoCircle,
                      })}
                    ></div>
                    <div className={cx(s.positionRelative)}>
                      <div
                        className={cx(
                          s.displayTableCell,
                          s.vtrTop,
                          s.contentWidth,
                          s.paddingBottom,
                          s.paddingLeft,
                          s.mainSection
                        )}
                      >
                        <div className={s.contentSection}>
                          <strong className={s.step}>
                            <span>
                              <FormattedMessage {...messages.step2Heading} />
                            </span>
                          </strong>
                          <h3 className={s.landingContentTitle}>
                            <FormattedMessage {...messages.step2SubHeading} />
                          </h3>
                          <p className={cx(s.landingTitleStep)}>
                            <span>
                              <FormattedMessage
                                {...messages.step2HeadingContent}
                              />
                            </span>
                          </p>
                          {currentStep === 1 && (
                            <Button
                              className={cx(s.button, bt.btnPrimary)}
                              onClick={handleOnNextStep}
                            >
                              <FormattedMessage {...messages.continue} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className={cx(s.displayTable, s.positionRelative)}>
                  <div className={s.displayTableRow}>
                    {
                      <div
                        className={cx(
                          s.displayTableCell,
                          s.vtrTop,
                          s.iconWidth,
                          s.borderLine,
                          "exitingBorderLine",
                          { [s.borderLineActive]: stepThreeCircle }
                        )}
                      ></div>
                    }
                    <div
                      className={cx(s.circle, "exittingCircle", {
                        [s.circleSuccess]: stepThreeCircle,
                      })}
                    ></div>
                    <div className={cx(s.positionRelative)}>
                      <div
                        className={cx(
                          s.displayTableCell,
                          s.vtrTop,
                          s.contentWidth,
                          s.paddingLeft,
                          s.mainSection
                        )}
                      >
                        <div className={s.contentSection}>
                          <strong className={s.step}>
                            <span>
                              <FormattedMessage {...messages.step3Heading} />
                            </span>
                          </strong>
                          <h3 className={s.landingContentTitle}>
                            <FormattedMessage {...messages.step3SubHeading} />
                          </h3>
                          <p className={cx(s.landingTitleStep)}>
                            <span>
                              <FormattedMessage
                                {...messages.step3HeadingContent}
                              />
                            </span>
                          </p>
                          {currentStep === 2 && (
                            <Button
                              className={cx(s.button, bt.btnPrimary)}
                              onClick={handleOnNextStep}
                            >
                              <FormattedMessage {...messages.continue} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Col xs={12} sm={12} md={12} lg={12}>
                <hr className={s.horizontalLineThrough} />
              </Col>

              {currentStep === 3 && (
                <Col xs={12} sm={12} md={12} lg={12}>
                    <>
                      <h3 className={s.spaceTop1}>
                        <FormattedMessage {...messages.readyToPublish} />
                      </h3>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className={cx(s.spaceTop3, s.noPadding)}
                      >
                        <div className={s.displayInline}>
                          <Loader
                            type={"button"}
                            className={cx(s.button, bt.btnPrimary)}
                            handleClick={handleCompleteHostListing}
                            show={false}
                            label={formatMessage(messages.publishNow)}
                          />
                        </div>
                      </Col>
                    </>
                </Col>
              )}
              {
                listingId && (
                  <>
                    <h3 className={s.spaceTop1}>
                      <FormattedMessage
                          {...messages.listingSubmitVerification}
                      />
                    </h3>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        className={cx(s.spaceTop3, s.noPadding)}
                    >
                      <div className={s.publishAfter}>
                        <Loader
                            type={"button"}
                            className={cx(s.button, bt.btnPrimary, s.btnCrisom)}
                            label={formatMessage(messages.adminApproval)}
                            style={{
                              marginButtom: "10px",
                              background: "crimson",
                            }}
                        />
                        <a
                            target="_blank"
                            href={`/host/listing/${listingId}`}
                            className={cx(s.previewLink, "prviewLinkAR")}
                        >
                          <FormattedMessage {...messages.previewListing} />
                        </a>
                      </div>
                    </Col>
                  </>
                  )
              }
            </Col>

            <Col xs={12} sm={5} md={5} lg={5} className={"hidden-xs"}>
              <div>
                <div>
                  <img src={defaultPic} className={s.imageSection} />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapState = (state) => ({});
const mapDispatch = {};

export default injectIntl(withStyles(s, bt)(ExistingPage1));
