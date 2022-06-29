import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "react-apollo";
import { Row, Col } from "react-bootstrap";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Uploader.css";
import bt from "../../../../components/commonStyle.css";
import * as FontAwesome from "react-icons/lib/fa";

// Redux
import { connect } from "react-redux";
import { doRemoveSubCategory } from "../../../../actions/siteadmin/manageSubCategoryImage";

// Component
import DropZone from "./DropZone";
import Loader from "../../../Loader";

// Translation
import { FormattedMessage } from "react-intl";
import messages from "../../../../locale/messages";

// Asset
import defaultPic from "../../../../../public/adminIcons/defaultAdmin.svg";
import DeleteIcon from "../../../../../public/adminIcons/dlt.png";

class Uploader extends React.Component {
  static propTypes = {
    values: PropTypes.any,
    subCategoryUploaderLoading: PropTypes.bool,
    loading: PropTypes.bool,
    doRemoveSubCategory: PropTypes.any.isRequired,
  };

  static defaultProps = {
    subCategoryUploaderLoading: false,
  };

  render() {
    const {
      doRemoveSubCategory,
      subCategoryUploaderLoading,
      values,
    } = this.props;
    let loading = true;
    if (values) {
      loading = false;
    }
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className={s.textAlignCenter}>
          <Loader show={subCategoryUploaderLoading} type={"page"}>
            <div className={bt.picContainerMain}>
              <div className={bt.picContainer}>
                {loading && (
                  <div>
                    <FormattedMessage {...messages.loadingLabel} />
                  </div>
                )}
                {!loading && values.image != null && (
                  <div
                    style={{
                      backgroundImage: `url(/images/subCategory/medium_${values.image})`,
                    }}
                    className={s.bannerImageBg}
                  />
                )}
                {!loading && values.image === null && (
                  <div
                    style={{ backgroundImage: `url(${defaultPic})` }}
                    className={bt.profileImageBg}
                  />
                )}
                {!loading && values.image != null && (
                  <a
                    href="javascript:void(0);"
                    onClick={() => doRemoveSubCategory(values.image, values.id)}
                    className={cx(bt.trashIconNew, "trashIconNewRTL")}
                  >
                    <img src={DeleteIcon} />
                  </a>
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
            <DropZone data={values} />
          </div>
        </Col>
      </Row>
    );
  }
}

const mapState = (state) => ({
  subCategoryUploaderLoading: state.popularLocation.subCategoryUploaderLoading,
});

const mapDispatch = {
  doRemoveSubCategory,
};

export default compose(
  withStyles(s, bt),
  connect(mapState, mapDispatch)
)(Uploader);
