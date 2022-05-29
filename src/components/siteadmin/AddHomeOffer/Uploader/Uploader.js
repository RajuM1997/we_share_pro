import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "react-apollo";
// Translation
import { FormattedMessage } from "react-intl";

// Redux
import { connect } from "react-redux";

// Redux Form
import { formValueSelector } from "redux-form";

import { Row, Col } from "react-bootstrap";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Uploader.css";
import bt from "../../../../components/commonStyle.css";

// Asset
import defaultPic from "../../../../../public/adminIcons/defaultAdmin.svg";
import messages from "../../../../locale/messages";

import { doRemoveOffer } from "../../../../actions/siteadmin/mangeOfferImage";

// Component
import DropZone from "./DropZone";
import Loader from "../../../Loader";

class Uploader extends React.Component {
  static propTypes = {
    image: PropTypes.any,
    offerUploaderLoading: PropTypes.bool,
    doRemoveOffer: PropTypes.any.isRequired,
  };

  static defaultProps = {
    offerUploaderLoading: false,
  };

  render() {
    const { loading, categoryUploaderLoading, image } = this.props;
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className={s.textAlignCenter}>
          <Loader show={categoryUploaderLoading} type={"page"}>
            <div className={bt.picContainerMain}>
              <div className={bt.picContainer}>
                {loading && (
                  <div>
                    {" "}
                    <FormattedMessage {...messages.loadingLabel} />
                  </div>
                )}
                {!loading && image != null && (
                  <div
                    style={{
                      backgroundImage: `url(/images/offer/${image})`,
                    }}
                    className={s.bannerImageBg}
                  />
                )}
                {!loading && image === undefined && (
                  <div
                    style={{ backgroundImage: `url(${defaultPic})` }}
                    className={bt.profileImageBg}
                  />
                )}
              </div>
            </div>
          </Loader>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={cx(s.space2, s.spaceTop2)}
        >
          <div
            className={cx(
              s.fullWidth,
              s.button,
              bt.btnPrimary,
              s.noPadding,
              "photoUploadBtn"
            )}
          >
            <DropZone data={image} />
          </div>
        </Col>
      </Row>
    );
  }
}

const selector = formValueSelector("AddOffer");

const mapState = (state) => ({
  offerUploaderLoading: state.popularLocation.offerUploaderLoading,
  image: selector(state, "image"),
});

const mapDispatch = {
  doRemoveOffer,
};

export default compose(
  withStyles(s, bt),
  connect(mapState, mapDispatch)
)(Uploader);
