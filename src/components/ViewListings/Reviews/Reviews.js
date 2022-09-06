import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FormattedMessage, injectIntl } from "react-intl";
// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Reviews.css";
import { Row, Col } from "react-bootstrap";
import cx from "classnames";
import bt from "../../../components/commonStyle.css";
// Components
import StarRating from "../../StarRating";
import Avatar from "../../Avatar";
import Loader from "../../Loader";

// Locale
import messages from "../../../locale/messages";

class Reviews extends React.Component {
  render() {
    // if (loading) {
    //   return <Loader type={"text"} />
    // }

    return (
      <div>
        <Row className={cx(s.pageContent)}>
          <div className={cx(s.spaceTop4)}>
            <h2 className={cx(s.sectionTitleText)}>
              <FormattedMessage {...messages.noReviewTitle} />
            </h2>
            <p className={s.textMuted}>
              <FormattedMessage {...messages.noReviewInfo} />
            </p>
          </div>
        </Row>
        <hr />
      </div>
    );

    // return (
    //   <div>
    //     <Row className={cx(s.pageContent)}>
    //       <div className={cx(s.space2, s.spaceTop4)}>
    //         <h2 className={cx(s.sectionTitleText)}>
    //           <span className={s.textLeft}>{reviewsCount} {reviewsCount > 1 ? formatMessage(messages.reviews) : formatMessage(messages.review)}</span>
    //           <span> <StarRating value={starRatingValue} className={cx(s.starReview, 'reviewSectionRTL')} /> </span>
    //         </h2>
    //         {
    //           !loading && moreListReviews && moreListReviews.map((item, index) => {
    //             let date = moment(item.createdAt).format('MMMM YYYY');
    //             return (
    //               <Row className={cx(s.spaceTop2, s.space3, s.horizontalLineThrough)} key={index}>
    //                 {
    //                   !item.isAdmin && item.authorData && <Col sm={12} className={s.reviewContainer}>
    //                     <div className={cx(s.alignMiddle)}>
    //                       <div className={cx(s.pullLeft, s.mediaContainer, s.textCenter)} >
    //                         <Avatar
    //                           source={item.authorData.picture}
    //                           height={48}
    //                           width={48}
    //                           title={item.authorData.firstName}
    //                           className={s.profileAvatar}
    //                           withLink
    //                           linkClassName={s.profileAvatarLink}
    //                           profileId={item.authorData.profileId}
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className={s.alignMiddle}>
    //                       <div className={s.infoAlign}>
    //                         <span className={s.textBold}>{item.authorData.firstName}</span><br />
    //                         <span>{date}</span>
    //                       </div>
    //                     </div>
    //                   </Col>
    //                 }
    //                 {
    //                   item.isAdmin && <Col sm={12} className={s.reviewContainer}>
    //                     <div className={cx(s.alignMiddle)}>
    //                       <div className={cx(s.pullLeft, s.mediaContainer, s.textCenter)} >
    //                         <Avatar
    //                           source={'../../../../adminAvatar.png'}
    //                           height={48}
    //                           width={48}
    //                           title={formatMessage(messages.verifiedBy) + ' ' + siteName}
    //                           className={cx(s.profileAvatar, s.noBackground)}
    //                           linkClassName={s.profileAvatarLink}
    //                           staticImage
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className={s.alignMiddle}>
    //                       <div className={s.infoAlign}>
    //                         <span className={s.textBold}>{formatMessage(messages.verifiedBy) + ' ' + siteName}</span><br />
    //                         <span>{date}</span>
    //                       </div>
    //                     </div>
    //                   </Col>
    //                 }
    //                 <Col sm={12} className={cx(s.space3, s.spaceTop2)}>
    //                   <div className={s.commentSection}>
    //                     {
    //                       item.reviewContent && (item.reviewContent.trim()).split("\n").map(function (content, index) {
    //                         return (
    //                           <span key={index}>
    //                             {content}
    //                             <br />
    //                           </span>
    //                         )
    //                       })
    //                     }
    //                   </div>
    //                 </Col>
    //               </Row>
    //             )
    //           })
    //         }
    //         {
    //           showLoadMore && <div className={cx(s.space2, s.textCenter)}>
    //             <a className={cx(bt.btnPrimary)} onClick={() => this.loadMore()}>
    //               <FormattedMessage {...messages.loadMore} /><span>...</span>
    //             </a>
    //           </div>
    //         }

    //       </div>
    //     </Row>
    //     <hr />
    //   </div>
    // );
  }
}

const mapState = (state) => ({
  siteName: state.siteSettings.data.siteName,
});

const mapDispatch = {};

export default injectIntl(
  withStyles(s, bt)(connect(mapState, mapDispatch)(Reviews))
);