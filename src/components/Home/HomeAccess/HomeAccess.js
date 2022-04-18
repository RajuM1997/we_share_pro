import React, { Component } from "react";
import googleStore from "../homeImg/phone/google_play_store.png";
import appleStore from "../homeImg/phone/apple_play_store.png";
import phoneX from "../homeImg/phone/phone_X.png";
import s from "./HomeAccess.css";
import ss from "../NewListing/NewListing.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Container } from "react-bootstrap/lib/Tab";
import { Col, Row } from "react-bootstrap";
class HomeAccess extends Component {
  render() {
    return (
      <div className={ss.marginTop4}>
        <Container className={cx(s.access)}>
          <Row>
            <Col md={5} lg={3} sm={4}>
              <div className={s.phone_img}>
                <img src={phoneX} alt="" />
              </div>
            </Col>
            <Col md={7} lg={7} sm={8}>
              <div className={s.access_left}>
                <div className={s.access_text}>
                  <h1>
                    <span className={ss.text_yellow}>Access</span>
                    <span className={ss.text_blue}> from any where</span>
                  </h1>
                  <p className={cx(ss.margin0, ss.padding0)}>
                    We Share app is convenient and easy to use.
                  </p>
                  <p className={(ss.margin0, ss.padding0)}>
                    Find what you need, manage your rentals and purchases, and
                    get instant updates.
                  </p>
                  <p className={s.margin0}>Get it now on iOS and Android.</p>
                  <div className={s.paddingTop1}>
                    <img className={s.google} src={googleStore} alt="" />
                    <br />
                    <img
                      className={cx(s.apple, ss.marginTop1)}
                      src={appleStore}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(HomeAccess);
