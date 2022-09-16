import React from "react";
import PropTypes from "prop-types";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ListingIntro.css";
import { Row, Col } from "react-bootstrap";
import cx from "classnames";

// Translation
import { injectIntl, FormattedMessage } from "react-intl";

// Locale
import messages from "../../../locale/messages";

// Component
import Avatar from "../../Avatar";
import StarRating from "../../StarRating";
import Link from "../../Link";

//Images
import HomeIcon from "../../../../public/SiteIcons/home.svg";
import bedRoom from "../../../../public/SiteIcons/Bedroom.svg";
import User from "../../../../public/SiteIcons/user.svg";
import Slumber from "../../../../public/SiteIcons/slumber.svg";
import personalHomeIcon from "../../../../public/SiteIcons/personalhome.svg";
class ListingIntro extends React.Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { details } = this.props;
    console.log(details);

    return (
      <div>
        <Row className={s.introPadding}>
          <Col xs={12} sm={9} md={9} lg={9}>
            <h1 className={cx(s.titleText, s.space1)}>
              {details.itemTitle != null
                ? details.itemTitle
                : " " + formatMessage(messages.in) + " " + details.city}
            </h1>
            <div className={cx(s.space3)}>
              <span className={s.textMuted}>
                {details?.city}, {details?.state}, {details?.country}
              </span>
              <div className={"visible-xs"}>
                <span>
                  <StarRating name={"review"} />
                </span>
              </div>
            </div>
            <div className={cx(s.space2, "visible-xs")}>
              <div className={s.displayTable}>
                {/* <div className={cx(s.displayTableCell, s.vrAlignBottom)}>
                  <a className={s.textMuted}>{data.city}, {data.state}, {data.country}</a>
                  <div className={'visible-xs'}>
                    <span><StarRating name={'review'} value={starRatingValue} /></span>
                  </div>
                </div> */}
                <div className={s.displayTableCell}>
                  <div className={cx(s.profileAvatarSection, s.mobileBg)}>
                    <Avatar />
                  </div>
                  <p className={cx("text-center", s.hostNameText)}>
                    {/* <Link to={"/users/show/" + data.user.profile.profileId}>
                      <span className={cx(s.textMuted)}>
                        {data.user.profile.firstName}
                      </span>
                    </Link> */}
                  </p>
                </div>
              </div>
            </div>
            <div className={cx(s.displayTable)}>
              <div className={s.displayTableRow}>
                <div
                  className={cx(
                    s.displayTableCell,
                    s.listingIntroWidth,
                    s.responsiveListIngIntro
                  )}
                >
                  <div className={cx(s.displayTable)}>
                    <div className={s.displayTableRow}>
                      <div
                        className={cx(
                          s.displayTableCellIcon,
                          "overviewIconRtl"
                        )}
                      >
                        <img
                          src={HomeIcon}
                          className={s.overviewIcon}
                          alt={"Room"}
                        />
                      </div>
                      <div
                        className={cx(s.displayTableCell, s.introTextPadding)}
                      >
                        <div className={cx(s.textMutedNew)}>
                          <FormattedMessage {...messages.roomType} />
                        </div>
                        <div>
                          {/* {data.settingsData &&
                            data.settingsData.length > 0 &&
                            data.settingsData[0].listsettings.itemName} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx(s.displayTableCell, s.responsiveListIngIntro)}
                >
                  <div className={cx(s.displayTable, s.tableMarginTop)}>
                    <div className={s.displayTableRow}>
                      <div
                        className={cx(
                          s.displayTableCellIcon,
                          "overviewIconRtl"
                        )}
                      >
                        <img
                          src={User}
                          className={s.overviewIcon}
                          alt={"Guest"}
                        />
                      </div>
                      <div
                        className={cx(s.displayTableCell, s.introTextPadding)}
                      >
                        <div className={cx(s.textMutedNew)}>
                          {/* Guest */}
                          <FormattedMessage {...messages.guest} />
                        </div>
                        <div>{formatMessage(messages.guests)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx(s.displayTable)}>
              <div className={s.displayTableRow}>
                <div
                  className={cx(
                    s.displayTableCell,
                    s.listingIntroWidth,
                    s.responsiveListIngIntro
                  )}
                >
                  <div className={cx(s.displayTable, s.tableMarginTop)}>
                    <div className={s.displayTableRow}>
                      <div
                        className={cx(
                          s.displayTableCellIcon,
                          "overviewIconRtl",
                          s.personalHomeIcon
                        )}
                      >
                        <img
                          src={bedRoom}
                          className={s.overviewIcon}
                          alt={"Bedroom"}
                        />
                      </div>
                      <div
                        className={cx(s.displayTableCell, s.introTextPadding)}
                      >
                        <div className={cx(s.textMutedNew)}>
                          <FormattedMessage {...messages.bedroom} />
                        </div>
                        <div>{formatMessage(messages.bedrooms)}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx(s.displayTableCell, s.responsiveListIngIntro)}
                >
                  <div className={cx(s.displayTable, s.tableMarginTop)}>
                    <div className={s.displayTableRow}>
                      <div
                        className={cx(
                          s.displayTableCellIcon,
                          "overviewIconRtl"
                        )}
                      >
                        <img
                          src={Slumber}
                          className={s.overviewIcon}
                          alt={"Bed"}
                        />
                      </div>
                      <div
                        className={cx(s.displayTableCell, s.introTextPadding)}
                      >
                        <div className={cx(s.textMutedNew)}>
                          <FormattedMessage {...messages.bed} />
                        </div>
                        <div>{formatMessage(messages.beds)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* {data.residenceType === "1" && (
              <div className={cx(s.displayTable)}>
                <div className={s.displayTableRow}>
                  <div
                    className={cx(s.displayTableCell, s.responsiveListIngIntro)}
                  >
                    <div className={cx(s.displayTable, s.tableMarginTop)}>
                      <div className={s.displayTableRow}>
                        <div
                          className={cx(
                            s.displayTableCellIcon,
                            "overviewIconRtl",
                            s.personalHomeIcon
                          )}
                        >
                          <img
                            src={personalHomeIcon}
                            className={s.overviewIcon}
                            alt={"Bed"}
                          />
                        </div>
                        <div
                          className={cx(s.displayTableCell, s.introTextPadding)}
                        >
                          <div className={cx(s.textMutedNew)}>
                            <FormattedMessage {...messages.personalHome} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            )} */}
          </Col>
          <Col xs={12} sm={3} md={3} lg={3} className={"hidden-xs"}>
            <div className={cx(s.profileAvatarSection, s.mobileBg)}>
              <Avatar />
            </div>
            <p className={cx("text-center", s.hostNameText)}>
              {/* <Link to={"/users/show/" + data.user.profile.profileId}>
                <span className={cx(s.textMuted)}>
                  {data.user.profile.firstName}
                </span>
              </Link> */}
            </p>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default injectIntl(withStyles(s)(ListingIntro));
