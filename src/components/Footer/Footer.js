// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";
// import { graphql, compose } from "react-apollo";

// import withStyles from "isomorphic-style-loader/lib/withStyles";
// import s from "./Footer.css";

// import { Row, Col, Grid } from "react-bootstrap";
// import cx from "classnames";
// import * as FontAwesome from "react-icons/lib/fa";

// // Component
// import LanguageSwitcher from "../LanguageSwitcher";
// import CurrencySwitcher from "../CurrencySwitcher";
// import Link from "../Link";
// import BannerImage from "../../../public/SiteImages/FooterBanner.jpg";

// import PlayStoreImage from "../../../public/SiteImages/playStore.png";
// import AppStoreImage from "../../../public/SiteImages/appStore.png";

// // Locale
// import messages from "../../locale/messages";

// import getEnabledBlog from "./getEnabledBlog.graphql";

// class Footer extends React.Component {
//   static propTypes = {
//     siteName: PropTypes.string.isRequired,
//     facebook: PropTypes.string,
//     twitter: PropTypes.string,
//     instagram: PropTypes.string,
//     appAvailableStatus: PropTypes.string,
//     playStoreUrl: PropTypes.string,
//     appStoreUrl: PropTypes.string,
//     formatMessage: PropTypes.any,
//     data: PropTypes.shape({
//       loading: PropTypes.bool,
//       getEnabledBlog: PropTypes.array,
//     }),
//   };

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const {
//       siteName,
//       facebook,
//       twitter,
//       instagram,
//       appAvailableStatus,
//       playStoreUrl,
//       appStoreUrl,
//     } = this.props;
//     const {
//       data: { getEnabledBlog },
//     } = this.props;

//     return (
//       <div className={s.positionRelative}>
//         <div
//           className={cx(s.topImageBanner, s.root)}
//           style={{ backgroundImage: `url(${BannerImage})` }}
//         >
//           <div className={s.container}>
//             <div className={cx(s.footerSectionContainer, "hidden-print")}>
//               <Grid fluid>
//                 <Row>
//                   <div className={s.responsivePadding}>
//                     <Col
//                       sm={3}
//                       md={3}
//                       lg={3}
//                       xs={12}
//                       className={cx(s.responsiveMargin, s.noPaddingMobile)}
//                     >
//                       <label className={s.landingLabel}>{siteName}</label>
//                       <ul className={s.listContainer}>
//                         <li>
//                           <Link to={"/about"} className={s.textLink}>
//                             <FormattedMessage {...messages.about} />
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to={"/contact"} className={s.textLink}>
//                             <FormattedMessage {...messages.contactForm} />
//                           </Link>
//                         </li>
//                         {getEnabledBlog &&
//                           getEnabledBlog.length > 0 &&
//                           getEnabledBlog
//                             .filter(
//                               (item) =>
//                                 item.footerCategory != "discover" &&
//                                 item.footerCategory != "hosting"
//                             )
//                             .map((item) => {
//                               return (
//                                 <li>
//                                   <Link
//                                     to={"/page/" + item.pageUrl}
//                                     className={s.textLink}
//                                   >
//                                     {item.pageTitle}
//                                   </Link>
//                                 </li>
//                               );
//                             })}
//                       </ul>
//                     </Col>
//                     <Col
//                       sm={3}
//                       md={3}
//                       lg={3}
//                       xs={12}
//                       className={cx(s.responsiveMargin, s.noPaddingMobile)}
//                     >
//                       <label className={s.landingLabel}>
//                         <FormattedMessage {...messages.discover} />
//                       </label>
//                       <ul className={s.listContainer}>
//                         <li>
//                           <Link to={"/safety"} className={s.textLink}>
//                             <FormattedMessage {...messages.trustSafety} />
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to={"/travel"} className={s.textLink}>
//                             <FormattedMessage {...messages.travelCredit} />
//                           </Link>
//                         </li>
//                         {getEnabledBlog &&
//                           getEnabledBlog.length > 0 &&
//                           getEnabledBlog
//                             .filter((item) => item.footerCategory == "discover")
//                             .map((item) => {
//                               return (
//                                 <li>
//                                   <Link
//                                     to={"/page/" + item.pageUrl}
//                                     className={s.textLink}
//                                   >
//                                     {item.pageTitle}
//                                   </Link>
//                                 </li>
//                               );
//                             })}
//                       </ul>
//                     </Col>
//                     <Col
//                       sm={3}
//                       md={3}
//                       lg={3}
//                       xs={12}
//                       className={cx(s.responsiveMargin, s.noPaddingMobile)}
//                     >
//                       <label className={s.landingLabel}>
//                         <FormattedMessage {...messages.hosting} />
//                       </label>
//                       <ul className={s.listContainer}>
//                         <li>
//                           <Link to={"/whyhost"} className={s.textLink}>
//                             <FormattedMessage {...messages.becomeAHost} />
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to={"/privacy"} className={s.textLink}>
//                             <FormattedMessage {...messages.termsPrivacy} />
//                           </Link>
//                         </li>
//                         {getEnabledBlog &&
//                           getEnabledBlog.length > 0 &&
//                           getEnabledBlog
//                             .filter((item) => item.footerCategory == "hosting")
//                             .map((item) => {
//                               return (
//                                 <li>
//                                   <Link
//                                     to={"/page/" + item.pageUrl}
//                                     className={s.textLink}
//                                   >
//                                     {item.pageTitle}
//                                   </Link>
//                                 </li>
//                               );
//                             })}
//                       </ul>
//                     </Col>
//                     <Col
//                       sm={3}
//                       md={3}
//                       lg={3}
//                       xs={12}
//                       className={cx(s.responsiveMargin, s.noPaddingMobile)}
//                     >
//                       {appAvailableStatus == 1 &&
//                         (playStoreUrl || appStoreUrl) && (
//                           <div>
//                             <label className={cx(s.landingLabel, s.space3)}>
//                               <FormattedMessage {...messages.appsAvailableOn} />
//                             </label>
//                             <div>
//                               {playStoreUrl && (
//                                 <a
//                                   href={playStoreUrl}
//                                   target="_blank"
//                                   className={s.displayInlineBlock}
//                                 >
//                                   <img
//                                     alt="Image"
//                                     src={PlayStoreImage}
//                                     className={s.anroidImg}
//                                   />
//                                 </a>
//                               )}
//                               {appStoreUrl && (
//                                 <a
//                                   href={appStoreUrl}
//                                   target="_blank"
//                                   className={s.displayInlineBlock}
//                                 >
//                                   <img
//                                     alt="Image"
//                                     src={AppStoreImage}
//                                     className={s.iosImg}
//                                   />
//                                 </a>
//                               )}
//                             </div>
//                           </div>
//                         )}
//                     </Col>
//                   </div>
//                 </Row>

//                 <Row
//                   className={cx(
//                     s.copyrightSection,
//                     s.spaceTop4,
//                     s.copyRightTabNoMargin
//                   )}
//                 >
//                   <Col
//                     xs={6}
//                     sm={4}
//                     md={4}
//                     lg={4}
//                     className={s.noPaddingMobile}
//                   >
//                     <span className={s.text}>© {siteName}.</span>
//                   </Col>
//                   <Col
//                     xs={6}
//                     sm={8}
//                     md={8}
//                     lg={8}
//                     className={s.noPaddingMobile}
//                   >
//                     {instagram && (
//                       <a
//                         href={instagram}
//                         target="_blank"
//                         className={cx(s.shareIcon, "shareIconRtl")}
//                       >
//                         <FontAwesome.FaInstagram />
//                       </a>
//                     )}
//                     {twitter && (
//                       <a
//                         href={twitter}
//                         target="_blank"
//                         className={cx(s.shareIcon, "shareIconRtl")}
//                       >
//                         <FontAwesome.FaTwitter />
//                       </a>
//                     )}
//                     {facebook && (
//                       <a
//                         href={facebook}
//                         target="_blank"
//                         className={cx(s.shareIcon, "shareIconRtl")}
//                       >
//                         <FontAwesome.FaFacebook />
//                       </a>
//                     )}
//                   </Col>
//                 </Row>
//               </Grid>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapState = (state) => ({
//   siteName: state.siteSettings.data.siteName,
//   facebook: state.siteSettings.data.facebookLink,
//   twitter: state.siteSettings.data.twitterLink,
//   instagram: state.siteSettings.data.instagramLink,
//   appAvailableStatus: state.siteSettings.data.appAvailableStatus,
//   playStoreUrl: state.siteSettings.data.playStoreUrl,
//   appStoreUrl: state.siteSettings.data.appStoreUrl,
// });

// const mapDispatch = {};

// export default compose(
//   withStyles(s),
//   connect(mapState, mapDispatch),
//   graphql(getEnabledBlog, {
//     options: {
//       fetchPolicy: "network-only",
//       ssr: false,
//     },
//   })
// )(Footer);
import React, { Component } from "react";

import fab from "../../components/Home/homeImg/Social/facebook.png";
import inst from "../../components/Home/homeImg/Social/inst.png";
import youtube from "../../components/Home/homeImg/Social/youtube.png";
import tiktok from "../../components/Home/homeImg/Social/tiktok.png";
import { Container } from "react-bootstrap/lib/Tab";
import { Col, Row } from "react-bootstrap";
import s from "./Footer.css";
import ss from "../../components/Home/NewListing/NewListing.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import FooterTop from "./FooterTop";

class Footer extends Component {
  render() {
    return (
      <div className={cx(s.footer_bg, ss.paddingBottom2, ss.paddingTop5)}>
        <Container className={s.container}>
          <Row w-100>
            <FooterTop />
            <Col sm={7} md={3} lg={3} xs={12} className={ss.paddingTop3}>
              <p className={s.footer_title}>Support</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>FAQs</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Cancellation Options
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Report concern
                </p>
              </div>
            </Col>
            <Col sm={5} md={3} lg={3} xs={12} className={ss.paddingTop3}>
              {" "}
              <p className={s.footer_title}>Community</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Tel Aviv
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Ramla
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Safed
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Dubai
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Tel Aviv
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Abu Dhabi
                </p>
              </div>
            </Col>
            <Col sm={7} md={3} lg={3} xs={12} className={ss.paddingTop3}>
              <p className={s.footer_title}>Hosting</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>Try hosting</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share Insurance: <br /> Protection for Hosts
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Explore hosting resources
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  How to host responsibly
                </p>
              </div>
            </Col>
            <Col sm={5} md={3} lg={3} xs={12} className={ss.paddingTop3}>
              <p className={s.footer_title}>About</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>Privacy</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Terms of Service
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>Investors</p>
              </div>
              <div className={s.footer_icon}>
                <img src={fab} alt="" />
                <img src={inst} alt="" />
                <img src={youtube} alt="" />
                <img src={tiktok} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
