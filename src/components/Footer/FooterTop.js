import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";
import googleStore from "../../components/Home/homeImg/phone/google_play_store.png";
import appleStore from "../../components/Home/homeImg/phone/apple_play_store.png";
import s from "./Footer.css";
import ss from "../../components/Home/NewListing/NewListing.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

class FooterTop extends Component {
  render() {
    return (
      //   <Container className={ss.paddingY}>
      <>
        <Col sm={6} md={3} lg={3} xs={12}>
          <div className={s.footer_top_title}>
            <p>
              <span>New</span> Categories
            </p>
          </div>
          <div className={cx(s.footer_top_sub, s.text_secondary)}>
            <p className={cx(s.text_secondary, ss.margin0)}>Film Equipment</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Drones</p>
            <p className={ss.margin0}>Warehouse</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Parking</p>
            <p className={ss.margin0}>Boats</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Yatchs</p>
            <p className={cx(s.text_secondary, ss.margin0)}>
              Sporting Equuipment
            </p>
          </div>
        </Col>
        <Col sm={6} md={3} lg={3} xs={12}>
          <div className={s.footer_top_title}>
            <p>
              <span>Popular</span> Stays
            </p>
          </div>
          <div className={s.footer_top_sub}>
            <p className={cx(s.text_secondary, ss.margin0)}>Apartment</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Villa</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Holet</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Resort</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Loft</p>
            <p className={cx(s.text_secondary, ss.margin0)}>LightHouse</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Cottage</p>
          </div>
        </Col>
        <Col sm={6} md={3} lg={3} xs={12}>
          <div className={s.footer_top_title}>
            <p>
              <span>Popular</span> Location
            </p>
          </div>
          <div className={s.footer_top_sub}>
            <p className={cx(s.text_secondary, ss.margin0)}>Dubai</p>
            <p className={cx(s.text_secondary, ss.margin0)}>New York</p>
            <p className={cx(s.text_secondary, ss.margin0)}>London</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Paris</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Tel Aviv</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Cairo</p>
            <p className={cx(s.text_secondary, ss.margin0)}>California</p>
          </div>
        </Col>
        <Col
          sm={6}
          md={3}
          lg={3}
          xs={12}
          className="col-5 col-md-3 padding-top px-0"
        >
          <div className={s.footer_top_title}>
            <p>
              <span>Join</span> WeShare
            </p>
          </div>
          <div className={s.footer_top_sub}>
            <p className={cx(s.text_secondary, ss.margin0, ss.padding0)}>
              List an Item
            </p>
            <p className={cx(s.text_secondary, ss.margin0)}>How it works</p>
            <p className={cx(s.text_secondary, ss.margin0)}>Login/SignUp</p>
            <div className={ss.paddingTop1}>
              <img
                src={googleStore}
                alt=""
                className={cx(ss.margin2, s.play_store_footer)}
              />
              <br />
              <img
                src={appleStore}
                alt=""
                className={cx(ss.marginTop1, s.footer_apple)}
              />
            </div>
          </div>
        </Col>
      </>
    );
  }
}

export default withStyles(s)(FooterTop);
