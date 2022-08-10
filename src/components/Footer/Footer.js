import React, { Component } from "react";
import fab from "../../components/Home/homeImg/Social/facebook.png";
import inst from "../../components/Home/homeImg/Social/inst.png";
import youtube from "../../components/Home/homeImg/Social/youtube.png";
import tiktok from "../../components/Home/homeImg/Social/tiktok.png";
import { Container } from "react-bootstrap/lib/Tab";
import { Col, Row } from "react-bootstrap";
import s from "./Footer.css";
import ss from "../../components/Home/NewListing/NewListing.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import FooterTop from "./FooterTop";
import googleStore from "../../components/Home/homeImg/phone/google_play_store.png";
import appleStore from "../../components/Home/homeImg/phone/apple_play_store.png";

class Footer extends Component {
  render() {
    return (
      <div className={cx(s.footer_bg, ss.paddingBottom2, s.footerPaddingTop)}>
        {/* <Container className={s.caontainer}>
          <FooterTop />
        </Container> */}
        <Container className={s.container}>
          <div className={s.footer_row}>
            <div className={s.footer_col}>
              <div className={s.footer_top_title}>
                <p>
                  <span>New</span> Categories
                </p>
              </div>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Film Equipment
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>Drones</p>
                <p className={ss.margin0}>Warehouse</p>
                <p className={cx(s.text_secondary, ss.margin0)}>Parking</p>
                <p className={ss.margin0}>Boats</p>
                <p className={cx(s.text_secondary, ss.margin0)}>Yatchs</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Sporting Equuipment
                </p>
              </div>
            </div>
            <div className={s.footer_col}>
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
            </div>
            <div className={s.footer_col}>
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
            </div>
            <div className={s.footer_col}>
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
            </div>
            <div className={cx(ss.paddingTop3, s.footer_col)}>
              <p className={s.footer_title}>Support</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>FAQs</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Cancellation Options
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Report concern
                </p>
              </div>
            </div>
            <div className={cx(ss.paddingTop3, s.footer_col)}>
              <p className={s.footer_title}>Community</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Tel Aviv
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Ramla
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Safed
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Dubai
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Tel Aviv
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share - Abu Dhabi
                </p>
              </div>
            </div>
            <div className={cx(ss.paddingTop3, s.footer_col)}>
              <p className={s.footer_title}>Hosting</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>Try hosting</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  We Share Insurance: <br /> Protection for Hosts
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Explore hosting resources
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  How to host responsibly
                </p>
              </div>
            </div>
            <div className={cx(ss.paddingTop3, s.footer_col)}>
              <p className={s.footer_title}>About</p>
              <div className={cx(s.footer_top_sub, s.text_secondary)}>
                <p className={cx(s.text_secondary, ss.margin0)}>Privacy</p>
                <p className={cx(s.text_secondary, ss.margin0)}>
                  Terms of Service
                </p>
                <p className={cx(s.text_secondary, ss.margin0)}>Investors</p>
              </div>
              <div className={s.footer_icon}>
                <img src={fab} alt="" />
                <img src={inst} alt="" />
                <img src={youtube} alt="" />
                <img src={tiktok} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
