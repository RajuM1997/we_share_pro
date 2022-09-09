import React from "react";
import PropTypes from "prop-types";
// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ListingDetails.css";
import { Button, Row, Col, Collapse } from "react-bootstrap";
import cx from "classnames";
import * as FontAwesome from "react-icons/lib/fa";
// Translation
import { injectIntl, FormattedMessage } from "react-intl";
// Locale
import messages from "../../../locale/messages";
// Redux
import { connect } from "react-redux";
// Redux Action
import { getSpecificSettings } from "../../../actions/getSpecificSettings";
import { contactHostOpen } from "../../../actions/message/contactHostModal";
// Helper functions
import { checkIn, checkValue } from "./helper";
// Internal Component
import ListItem from "./ListItem";
import Link from "../../Link";

import ListBedTypes from "./ListBedTypes";

class ListingDetails extends React.Component {
  static defaultProps = {
    isHost: false,
    description: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    const { formatMessage } = this.props.intl;
    const { details } = this.props;
    return (
      <Row className={cx(s.pageContent)}>
        <div className={cx(s.horizontalLineThrough)}>
          <h2 className={cx(s.sectionTitleText)}>
            {" "}
            <FormattedMessage {...messages.aboutListing} />
          </h2>
          <div>
            <p className={cx(s.listingFontSize)}>
              <span className={cx(s.subText, s.lineBreak)}>
                {" "}
                {details?.itemDescription.slice(0, 150)}
              </span>
              {/* <span className={cx(s.subText, s.lineBreak)}> firstArray</span>) */}
              <span>
                <Collapse in={open}>
                  <div>
                    {" "}
                    <span className={cx(s.subText, s.lineBreak)}>
                      {details?.itemDescription.slice(150, 2000)}
                    </span>
                  </div>
                </Collapse>

                <div className={s.btnContainer}>
                  <div className={s.showHidePadding}>
                    <Button
                      bsStyle="link"
                      className={cx(
                        s.button,
                        s.noPadding,
                        s.btnLInk,
                        s.showHideBtn
                      )}
                      onClick={() => this.handleClick()}
                    >
                      {this.state.open ? (
                        <FormattedMessage {...messages.hideDescription} />
                      ) : (
                        <FormattedMessage {...messages.showDescription} />
                      )}

                      {this.state.open && (
                        <FontAwesome.FaAngleUp className={s.navigationIcon} />
                      )}

                      {!this.state.open && (
                        <FontAwesome.FaAngleDown className={s.navigationIcon} />
                      )}
                    </Button>
                  </div>
                </div>
              </span>
            </p>
          </div>

          <div className={cx(s.spaceTop3, s.space4)}>
            <p>
              <a
                href="javascript:void(0)"
                className={cx(s.sectionCaptionLink, s.sectionLink)}
                // onClick={() => contactHostOpen(data.id, urlParameters)}
              >
                <FormattedMessage {...messages.contactHost} />
              </a>
            </p>
          </div>

          <hr />
        </div>
        <div className={cx(s.horizontalLineThrough)}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space1)}>
              <p className={s.textMutedNew}>
                <FormattedMessage {...messages.theSpace} />
              </p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Row>
                <Col md={12} lg={12}>
                  <p className={s.splitList}>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.accommodates} />:{" "}
                      <strong>personCapacity</strong>
                    </span>
                  </p>
                  <p className={s.splitList}>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.bathrooms} />:{" "}
                      <strong>bathrooms</strong>
                    </span>
                  </p>
                  <p className={s.splitList}>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.bedrooms} />:{" "}
                      <strong>bedrooms</strong>
                    </span>
                  </p>
                  {/* <p>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.beds} />: <strong>{beds}</strong>
                    </span>
                  </p> */}

                  <p className={s.splitList}>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.checkIn} />:{" "}
                      <strong>checkInStart, checkInEnd</strong>
                    </span>
                  </p>
                  <p className={s.splitList}>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.propertyType} />:{" "}
                      <strong>propertyType</strong>
                    </span>
                  </p>
                  <p className={s.splitList}>
                    <span className={cx(s.text)}>
                      <FormattedMessage {...messages.roomType} />:{" "}
                      <strong>roomType</strong>
                    </span>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
        </div>

        <div>
          {" "}
          <ListBedTypes
          // itemList={listBedTypes}
          // label={formatMessage(messages.beds)}
          />
          <div xs={12} sm={12} md={12} lg={12}>
            <hr />
          </div>
        </div>
        <div>
          {" "}
          <ListItem
          // itemList={sharedSpaces}
          // label={formatMessage(messages.sharedSpaces)}
          // showLabel={formatMessage(messages.showAllSharedSpaces)}
          // hideLabel={formatMessage(messages.closeAllSharedSpaces)}
          // icon={false}
          />
          <div>
            <hr />
          </div>
        </div>

        <div>
          {" "}
          <ListItem
          // itemList={userAmenities}
          // label={formatMessage(messages.aminities)}
          // showLabel={formatMessage(messages.showAmenities)}
          // hideLabel={formatMessage(messages.closeAmenities)}
          // icon={true}
          />
          <div>
            <hr />
          </div>
        </div>
        <div>
          {" "}
          <ListItem
          // itemList={houseRules}
          // label={formatMessage(messages.houseRules)}
          // showLabel={formatMessage(messages.showAllHouseRules)}
          // hideLabel={formatMessage(messages.closeHouseRules)}
          // icon={false}
          />
          <div>
            <hr />
          </div>
        </div>

        <div className={cx(s.horizontalLineThrough)}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space1)}>
              <p className={s.textMutedNew}>
                <FormattedMessage {...messages.cancellations} />
              </p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className={cx(s.spaceTop1)}>
              <Row>
                <Col md={12} lg={12}>
                  <p className={s.listingFontSize}>
                    <span className={cx(s.text)}>
                      <strong>hello</strong>
                    </span>
                  </p>
                  <p className={s.listingFontSize}>
                    <span className={cx(s.text)}></span>
                  </p>
                  <div className={cx(s.listingFontSize, s.showHideMargin)}>
                    <Link
                      to="/cancellation-policies/"
                      // +data.listingData.cancellation.policyName

                      className={cx(s.sectionCaptionLink)}
                    >
                      <FormattedMessage {...messages.viewDetails} />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
        </div>

        <div>
          <ListItem />
          <div>
            <hr />
          </div>
        </div>
      </Row>
    );
  }
}
const mapState = (state) => ({
  settingsData: state.viewListing.settingsData,
});
const mapDispatch = {
  getSpecificSettings,
  contactHostOpen,
};
export default injectIntl(
  withStyles(s)(connect(mapState, mapDispatch)(ListingDetails))
);
