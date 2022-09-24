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
import {getFieldsBySubCategory, getPageFieldBySubCategory} from "../../../helpers/graphQLHelper";

class ListingDetails extends React.Component {
  static defaultProps = {
    isHost: false,
    description: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      listingData: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  fetchPageData(subCategoryId) {
    try {
      const dynamicFields = JSON.parse(this.props.details?.dynamicFields);
      const data = [];
      if (dynamicFields && typeof dynamicFields === "object") {
        getPageFieldBySubCategory(subCategoryId).then(pageData => {
          getFieldsBySubCategory(subCategoryId).then(fieldsData => {
            // this.setState({ fieldsData: data })
            for (const [key, value] of Object.entries(dynamicFields)) {
              const fields = [];
              const page = pageData.find(page => page.id === Number(key));
              const pageTitle = page?.title;
              if(value && typeof value === 'object') {
                for (const [childKey, childValue] of Object.entries(value)) {
                  const field = fieldsData.find(field => field.name === childKey);
                  const fieldTitle = field?.title;
                  if(typeof childValue === 'object' && childValue?.length){
                    fields.push({
                      fieldTitle: fieldTitle,
                      values: childValue.join(','),
                    })
                  } else {
                    fields.push({
                      fieldTitle: fieldTitle,
                      values: childValue,
                    })
                  }

                }
              }
              data.push({
                pageTitle: pageTitle,
                fields,
              })
            }
            if (data?.length > 0) {
              this.setState({listingData: data});
            }
          }).catch(e => {
          })
        }).catch(e => {
        })
      }
    } catch (e) {

    }
  }

  componentDidMount() {
    this.fetchPageData(this.props.details.subCategoryId)
  }

  render() {
    const { open } = this.state;
    const { details} = this.props;
    const data = {};
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
        {
          this.state.listingData?.map(ele => (
              <div className={cx(s.horizontalLineThrough)}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space1)}>
                    <p className={s.textMutedNew}>
                      {ele?.pageTitle}
                    </p>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Row>
                      <Col md={12} lg={12}>
                    {
                      ele?.fields?.map(field => (
                          <p className={s.splitList}>
                            <span className={cx(s.text)}>
                              {field?.fieldTitle} :{" "}
                              <strong>{field?.values}</strong>
                            </span>
                          </p>
                      ))
                    }
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <hr />
              </div>
          ))
        }
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
                      className={cx(s.sectionCaptionLink)}
                    >
                      <FormattedMessage {...messages.viewDetails} />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
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
