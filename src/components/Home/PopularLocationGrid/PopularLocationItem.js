import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./PopularLoction.css";
import ss from "../ShareAndFindItem/ShareAndFind.css";
import cx from "classnames";

class PopularLocationItem extends Component {
  render() {
    const { img, idx, place } = this.props;
    const small = "smallItem" + `${idx}`;
    const bgStyle = {
      backgroundImage: `url(${img})`,
    };
    return (
      <div
        style={{ position: "relative" }}
        className={
          idx === 0
            ? cx(s.galleryItemBody, s.bigItem1)
            : idx === 1
            ? cx(s.galleryItemBody, s.bigItem2)
            : `smallItem${idx}`
        }
        // className={`galleryItemBody ${
        //   idx === 0
        //     ? " bigItem1"
        //     : idx === 1
        //     ? "bigItem2"
        //     : `smallItem${idx}`
        // }`}
      >
        <div style={bgStyle} className={s.galleryImg}></div>
        <div className={s.galleryImageOverlay}>
          <h4>{place}</h4>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PopularLocationItem);