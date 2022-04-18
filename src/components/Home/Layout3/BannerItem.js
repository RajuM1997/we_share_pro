import React, { Component } from "react";
import left from "../homeImg/Banner/left.png";
import right from "../homeImg//Banner/right.png";
import s from "./Banner.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";

class BannerItem extends Component {
  render() {
    const { items, myRef } = this.props;
    const {
      imgDesktop,
      DesktopTitle,
      DesktopColorText,
      DesktopSubTitle,
      DesktopSubTitle3,
      DesktopSubTitle22,
      Desktopdta,
      dataHome,
    } = items;
    return (
      <div className={s.slider_img}>
        <div className="d-flex align-items-center justify-content-around">
          <div
            className={s.left_arrows}
            onClick={() => myRef.current.slickPrev()}
          >
            <img src={right} alt="right_arrow" />
          </div>
          <div
            className={s.right_arrows}
            onClick={() => myRef.current.slickNext()}
          >
            <img src={left} alt="left_arrow" />
          </div>
        </div>
        <div className={s.silder_text}>
          <h1
            // data-aos-duration="500"
            // data-aos="fade-right"
            style={{ marginBottom: "15px", marginTop: 0 }}
          >
            {DesktopTitle}
          </h1>
          {DesktopSubTitle22 && (
            // <p data-aos-duration="1000" data-aos="fade-right">
            <p>{DesktopSubTitle22}</p>
          )}
          {!Desktopdta && (
            <>
              <p
                className="py-0"
                // data-aos-duration="1000"
                // data-aos="fade-right"
              >
                <span>{DesktopColorText}</span>
                {DesktopSubTitle} <br />
                {dataHome && <p>{DesktopSubTitle3}</p>}
              </p>
            </>
          )}
          <button
            className={s.slider_btn}
            style={{ marginBottom: "10px" }}
            // data-aos-duration="1400"
            // data-aos="fade-right"
          >
            Browse Category
          </button>
          {Desktopdta && (
            <p
              className="pt-2"
              // data-aos-duration="1000"
              // data-aos="fade-right"
            >
              <span>{DesktopColorText}</span> {DesktopSubTitle} <br />
              {DesktopSubTitle3}
            </p>
          )}
        </div>
        <img src={imgDesktop} className={s.slider_img_desktop} alt="" />
      </div>
    );
  }
}

export default withStyles(s)(BannerItem);
