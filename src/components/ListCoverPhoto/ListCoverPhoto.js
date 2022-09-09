import React from "react";
import PropTypes from "prop-types";

// Assets
import mediumNoImage from "../../../public/SiteImages/medium_no_image.png";
import largeNoImage from "../../../public/SiteImages/large_no_image.jpeg";

// components
import LazyLoadImage from "../LazyLoadImage";

class ListCoverPhoto extends React.Component {
  static propTypes = {
    coverPhoto: PropTypes.number,
    listPhoto: PropTypes.array,
    className: PropTypes.string,
    bgImage: PropTypes.bool,
  };

  static defaultProps = {
    bgImage: false,
    lazyLoad: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
  }

  componentWillMount() {
    const { coverPhoto, listPhoto } = this.props;
    console.log("hello2", coverPhoto, listPhoto);
    let activePhoto;
    if (listPhoto != undefined && listPhoto.length > 0) {
      activePhoto = listPhoto[0].name;
      if (listPhoto != undefined) {
        listPhoto.map((item) => {
          console.log("itemdata", item);
          //   if (item.id === coverPhoto) {
          activePhoto = item.filename;
          //   }
        });
      }
      this.setState({ photo: activePhoto });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { coverPhoto, listPhoto } = nextProps;
    let activePhoto;
    if (listPhoto != undefined && listPhoto.length > 0) {
      activePhoto = listPhoto[0].name;
      if (listPhoto != undefined) {
        listPhoto.map((item) => {
          console.log("itemdata", item);
          //   if (item.id === coverPhoto) {
          activePhoto = item.filename;
          //   }
        });
      }
      this.setState({ photo: activePhoto });
    }
  }

  render() {
    const { className, photoType, bgImage, lazyLoad } = this.props;
    const { photo } = this.state;
    console.log("hello", photo);
    let path = "",
      source;
    if (photo != null) {
      source = photo;
      if (photoType != undefined) {
        path = "/images/upload/" + photoType + "_";
      }
    } else {
      if (photoType != undefined) {
        if (photoType === "x_medium") {
          source = largeNoImage;
        } else if (photoType === "x_small") {
          source = mediumNoImage;
        }
      } else {
        source = mediumNoImage;
      }
    }
    if (lazyLoad && bgImage) {
      return (
        <LazyLoadImage
          src={`${path}${source}`}
          placeholderSrc={"/images/upload/placeholder_" + source}
          className={className}
        />
      );
    } else if (bgImage) {
      return (
        <div
          className={className}
          style={{ backgroundImage: `url(${path}${source})` }}
        >
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div
          className={className}
          style={{ backgroundImage: `url(${path + source})` }}
        />
      );
    }
  }
}

export default ListCoverPhoto;
