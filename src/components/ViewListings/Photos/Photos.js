import React from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";

// Style
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Photos.css";
import { Button } from "react-bootstrap";
import cx from "classnames";

// Component
import ListCoverPhoto from "../../ListCoverPhoto";
import ListGridCoverPhoto from "../../ListGridCoverPhoto";
import ImageSlider from "../ImageSlider";
import WishListIcon from "../../WishListIcon";

// Redux Action
import {
  openImageLightBox,
  closeImageLightBox,
} from "../../../actions/ImageLightBox";
import { setStickyTop } from "../../../actions/Sticky/StrickyActions";
import { openSocialShareModal } from "../../../actions/modalActions";

// Translation
import { FormattedMessage } from "react-intl";

// Locale
import messages from "../../../locale/messages";

import ListDefaultPhoto from "../../ListDefaultPhoto";
import SocialShareModal from "../SocialShareModal";
import * as FontAwesome from "react-icons/lib/fa";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
  }

  componentDidMount() {
    const { listPhotos, setStickyTop } = this.props;
    console.log("didM", listPhotos);
    //let listPhotos = data.listPhotos;
    let sources = [];
    let sourceObject = {};
    let coverPhoto;
    let sticky = document.querySelector("[data-sticky-top]"),
      stickyHeight = 412;

    //if (listPhotos != null && listPhotos.length > 0) {
    if (listPhotos != null && listPhotos.length > 0) {
      coverPhoto = listPhotos[0]?.filename;

      if (coverPhoto != undefined && coverPhoto != null) {
        listPhotos?.map((item, key) => {
          // if (item?.id === coverPhoto) {
          sourceObject = {};
          sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
          sources.push(sourceObject);
          // }
        });

        listPhotos.map((item, key) => {
          // if (item?.id != coverPhoto) {
          sourceObject = {};
          sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
          sources.push(sourceObject);
          // }
        });
      } else {
        listPhotos.map((item, key) => {
          sourceObject = {};
          sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
          sources.push(sourceObject);
        });
      }
      this.setState({ sources });
    }
    stickyHeight = sticky.getBoundingClientRect().height + 10;
    setStickyTop(stickyHeight);
  }

  componentWillReceiveProps(nextProps) {
    const { data, listPhotos } = nextProps;
    // console.log("listP", nextProps);
    //let listPhotos = data.listPhotos;
    let sources = [];
    let sourceObject = {};
    let coverPhoto;

    let sticky = document.querySelector("[data-sticky-top]"),
      stickyHeight = 412;

    // if (listPhotos != null && listPhotos.length > 0) {
    if (listPhotos != null && listPhotos.length > 0) {
      coverPhoto = listPhotos[0]?.filename;

      if (coverPhoto != undefined && coverPhoto != null) {
        listPhotos.map((item, key) => {
          if (item?.id === coverPhoto) {
            sourceObject = {};
            sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
            sources.push(sourceObject);
          }
        });

        listPhotos.map((item, key) => {
          if (item.id != coverPhoto) {
            sourceObject = {};
            sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
            sources.push(sourceObject);
          }
        });
      } else {
        listPhotos.map((item, key) => {
          sourceObject = {};
          sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
          sourceObject["src"] = "/images/upload/x_medium_" + item.filename;
          sources.push(sourceObject);
        });
      }
      // listPhotos.map((item, key) => {
      //   let sourceObject = {};
      //   sourceObject["src"] = '/images/upload/x_large_' + item.name;
      //   //sourceObject["caption"] = 'Sydney, Australia - Photo by Jill Smith'
      //   sources.push(sourceObject);
      // });
      this.setState({ sources });
    }
    stickyHeight = sticky.getBoundingClientRect().height + 10;
    setStickyTop(stickyHeight);
  }

  render() {
    const { sources } = this.state;
    // console.log("image url", sources);
    const {
      listPhotos,
      data,
      openImageLightBox,
      closeImageLightBox,
      imageLightBox,
      openSocialShareModal,
      loading,
    } = this.props;

    // let coverPhoto = coverPhoto;
    let listPhoto = listPhotos;
    let wishListStatus = data?.wishListStatus;
    let isListOwner = data?.isListOwner;
    // console.log(coverPhoto);

    return (
      <div className={s.bannerContainer} data-sticky-top>
        <SocialShareModal
          listId={data?.id}
          title={data?.title}
          city={data?.city}
          state={data?.state}
          country={data?.country}
        />
        <ImageSlider
          imageLightBox={imageLightBox}
          closeImageLightBox={closeImageLightBox}
          sources={sources}
        />

        {listPhoto && listPhoto?.length == 0 && (
          <ListDefaultPhoto
            className={s.bannerImage}
            // coverPhoto={coverPhoto}
            listPhoto={listPhoto}
            photoType={"x_medium_"}
            bgImage
            openImageLightBox={openImageLightBox}
          ></ListDefaultPhoto>
        )}

        {listPhoto && listPhoto?.length > 0 && listPhoto?.length <= 3 && (
          <ListCoverPhoto
            className={s.bannerImage}
            // coverPhoto={coverPhoto}
            listPhoto={listPhoto}
            photoType={"x_medium_"}
            bgImage
            openImageLightBox={openImageLightBox}
          >
            {listPhoto && listPhoto?.length > 0 && (
              <Button
                className={cx(s.btn, s.viewPhotosBtn, "viewPhotosBtnRtl")}
                onClick={openImageLightBox}
              >
                <FormattedMessage {...messages.viewPhotos} />
              </Button>
            )}
          </ListCoverPhoto>
        )}

        {sources && sources.length > 0 && sources.length > 3 && (
          <ListGridCoverPhoto
            className={s.bannerImage}
            // coverPhoto={coverPhoto}
            listPhoto={sources}
            photoType={"x_medium_"}
            bgImage
            openImageLightBox={openImageLightBox}
          ></ListGridCoverPhoto>
        )}

        {sources && sources?.length > 0 && (
          <div>
            <Button
              className={cx(s.btn, s.viewPhotosBtn, "viewPhotosBtnRtl")}
              onClick={openImageLightBox}
            >
              <FormattedMessage {...messages.viewPhotos} />
            </Button>
          </div>
        )}
        <div className={cx(s.saveButtonPosition, "saveButtonPositionRtl")}>
          {
            <div className={s.buttonContainer} onClick={openSocialShareModal}>
              <span className={s.vtrMiddle}>
                <FontAwesome.FaSignOut className={s.wishListIcon} />
              </span>
              <span className={cx(s.paddingleft10, s.vtrBottom)}>
                <FormattedMessage {...messages.shareLabel} />
              </span>
            </div>
          }
          {!isListOwner && !loading && (
            <div className={cx(s.displayInline, "shareBtnRtl")}>
              {" "}
              <WishListIcon
                type="button"
                listId={1}
                key={data?.id}
                isChecked={wishListStatus}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  imageLightBox: state.viewListing.imageLightBox,
});

const mapDispatch = {
  openImageLightBox,
  closeImageLightBox,
  setStickyTop,
  openSocialShareModal,
};

export default withStyles(s)(connect(mapState, mapDispatch)(Photos));
