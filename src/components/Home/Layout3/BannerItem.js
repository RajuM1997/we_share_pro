import React, { Component } from "react";
import left from "../homeImg/Banner/left.png";
import right from "../homeImg//Banner/right.png";
import s from "./Banner.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import AOS from "aos";

class BannerItem extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    const {
      title,
      description,
      image,
      colorText,
      bottomText,
      category,
      myRef,
      path,
      smallImage,
      banner,
      small_images,
    } = this.props;
    // const style = {
    //   backgroundImage: `url(${path})`,
    // };

    // const {
    //   // imgDesktop,
    //   // DesktopTitle,
    //   // colorText,
    //   // DesktopSubTitle,
    //   // DesktopSubTitle3,
    //   // DesktopSubTitle22,
    //   // Desktopdta,
    //   // dataHome,
    // } = item;
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
            {title}
          </h1>
          {/* {DesktopSubTitle22 && (
            // <p data-aos-duration="1000" data-aos="fade-right">
            <p>{DesktopSubTitle22}</p>
          )} */}
          <>
            <p
              className="py-0"
              // data-aos-duration="1000"
              // data-aos="fade-right"
            >
              <span>{colorText}</span>
              <>
                {colorText == "Don’t Buy! We Share," ? (
                  <>
                    <br />
                    {description}
                  </>
                ) : (
                  <>{description}</>
                )}
              </>
              {/* {description} <br /> */}
              <>{bottomText === "null" ? "" : <p>{bottomText}</p>}</>
            </p>
          </>
          <button
            className={s.slider_btn}
            style={{ marginBottom: "10px" }}
            // data-aos-duration="1400"
            // data-aos="fade-right"
          >
            Browse Category
          </button>
          {/* {Desktopdta && (
            <p
              className="pt-2"
              // data-aos-duration="1000"
              // data-aos="fade-right"
            >
              <span>{colorText}</span> {DesktopSubTitle} <br />
              {DesktopSubTitle3}
            </p>
          )} */}
        </div>
        <img src={path} className={s.slider_img_desktop} alt="" />
        <img src={small_images} alt="" className={s.slider_img_mobile} />
      </div>
    );
  }
}

export default withStyles(s)(BannerItem);
