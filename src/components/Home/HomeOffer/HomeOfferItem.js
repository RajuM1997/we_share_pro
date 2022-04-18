import React, { Component } from "react";
// import { Fade } from "react-reveal";
import s from "./HomeOffer.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import ss from "../NewListing/NewListing.css";
import offer1 from "../homeImg/offer_icon/offer1.png";
import offer2 from "../homeImg/offer_icon/offer2.png";
import offer3 from "../homeImg/offer_icon/offer3.png";
import headerBg from "../homeImg/header-bg.png";
import { Col, Row } from "react-bootstrap";
import HomeOfferBg from "./HomeOfferBg";
import Fade from "react-reveal/Fade";
import sss from "../ShareAndFindItem/ShareAndFind.css";

class HomeOfferItem extends Component {
  render() {
    return (
      <div>
        <HomeOfferBg />
        <div className={cx(s.whatOffer)}>
          <div className={s.container}>
            <div
              className={s.main_title}
              style={{ paddingTop: "0px", marginBottom: "0px" }}
            >
              <Fade left>
                <h1 className={cx(sss.sectionHeader111)}>
                  <span className={sss.text_yellow}>What</span>
                  <span className={sss.text_blue}>
                    {" "}
                    we offer{" "}
                    <span className={sss.headerPsudo22}>
                      <img src={headerBg} alt="" />
                    </span>
                  </span>
                </h1>
              </Fade>
            </div>
            {/* <div className="offer_title pb-2 pt-4">
          <h1>
            <span className="text-yellow">What</span> we offer
          </h1>
        </div> */}
            <Row>
              <Col md={4} lg={4} className={ss.text_center}>
                <div className={s.service}>
                  <div className={cx(s.service_icon, ss.paddingTop1)}>
                    <img src={offer3} alt="" />
                  </div>
                  <div className={cx(s.service_text, ss.paddingTop2)}>
                    <h4 className={s.offer_sub_title}>Guaranteed Payment</h4>
                    <p className={cx(s.offer_p, ss.paddingTop2)}>
                      Our platform gives you the peace of mind of a secure a
                      guaranteed payment, with insurance and cancelation
                      polices.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} lg={4} className={ss.text_center}>
                <div className={s.service}>
                  <div className={cx(s.service_icon, ss.paddingTop1)}>
                    <img src={offer2} alt="" />
                  </div>
                  <div className={cx(s.service_text, ss.paddingTop2)}>
                    <h4 className={s.offer_sub_title}>Verified customers</h4>
                    <p className={cx(s.offer_p, ss.paddingTop2)}>
                      All our users are verified customers. We Share, is a safe
                      place to rent your items. We take safety and the quality
                      of our service seriously.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4} lg={4} className={ss.text_center}>
                <div className={s.service}>
                  <div className={cx(s.service_icon, ss.paddingTop1)}>
                    <img src={offer1} alt="" />
                  </div>
                  <div className={cx(s.service_text, ss.paddingTop1)}>
                    <h4 className={s.offer_sub_title}>
                      Community and lots of choices
                    </h4>
                    <p className={cx(s.offer_p, ss.paddingTop1)}>
                      Community is our strength! We help you connect with people
                      nearby and from around the world. That’s how we do more
                      for less.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeOfferItem);
