import React from "react";
import PropTypes from "prop-types";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ListingDetails.css";
import { Row, Col, Collapse, Button } from "react-bootstrap";
import cx from "classnames";

//Images
import IconDefault from "../../../../public/SiteIcons/defaultIcon.png";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";
import * as FontAwesome from "react-icons/lib/fa";

import { url } from "../../../config";

class ListItem extends React.Component {
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

    return (
      <div className={cx(s.horizontalLineThrough)}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className={cx(s.space1)}>
            <p className={cx(s.textMutedNew)}> List </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className={cx(s.spaceTop1)}>
            <Row>
              <Col md={12} lg={12} xs={12} sm={12}>
                <div className={cx(s.splitList, s.vtrTop, s.space2)}>
                  {/* { icon && <span className={cx(s.listIcon, 'listIconRtl')}>
                            {
                              item.listsettings.image ?
                              <img src={url + '/images/amenities/' + item.listsettings.image} className={cx(s.imgSection, 'imgSectionRtl')} /> :
                              <img src={IconDefault} className={cx(s.imgSection, 'imgSectionRtl')} />
                            }
                          </span>} */}
                  <span
                    className={cx(s.text, s.overflowText, s.listContent)}
                  ></span>
                </div>

                <Collapse className={s.collapseContainer} in={open}>
                  <div>
                    <p className={cx(s.splitList, s.vtrTop)}>
                      {/* { icon && <span className={cx(s.listIcon, 'listIconRtl')}>
                                {
                                  item.listsettings.image ?
                                  <img src={url + '/images/amenities/' + item.listsettings.image} className={cx(s.imgSection, 'imgSectionRtl')} /> :
                                  <img src={IconDefault} className={cx(s.imgSection, 'imgSectionRtl')} />
                                }
                              </span>} */}
                      <span className={cx(s.text, s.overflowText)}>
                        hello listitems
                      </span>
                    </p>
                  </div>
                </Collapse>

                <div className={s.showHideMargin}>
                  <Button
                    bsStyle="link"
                    type="button"
                    className={cx(
                      s.btn,
                      s.btnLink,
                      s.btnLinkSecondary,
                      s.toggleLink,
                      s.showHideBtn,
                      s.noPadding
                    )}
                    onClick={() => this.handleClick()}
                  >
                    {/* {this.state.open ? hideLabel : showLabel} */}
                    {this.state.open && (
                      <FontAwesome.FaAngleUp className={s.toggleIcon} />
                    )}
                    {!this.state.open && (
                      <FontAwesome.FaAngleDown className={s.toggleIcon} />
                    )}
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(withStyles(s)(ListItem));
