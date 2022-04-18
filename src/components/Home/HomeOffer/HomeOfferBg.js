import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import s from "./HomeOfferBg.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import ss from "../NewListing/NewListing.css";
import { Container } from "react-bootstrap/lib/Tab";
import sss from "./HomeOffer.css";

class HomeOfferBg extends Component {
  render() {
    return (
      <div className={cx(ss.paddingTop4, sss.container)}>
        <Container className={s.container}>
          <div className={ss.offer_bg}>
            <div className={s.offer_main}>
              <div>
                <div className={cx(s.offer_bg_text, ss.text_center)}>
                  <Fade left duration={1000}>
                    <h1 className={ss.margin0}>
                      Buy Less, Access More, Live Lighter
                    </h1>
                  </Fade>
                  <Fade left duration={1300}>
                    <h1 className={cx(s.offer_bg_text, ss.margin0)}>
                      <span className={ss.margin0}>
                        We Share a{" "}
                        <span
                          className={ss.margin0}
                          style={{ fontWeight: 900 }}
                        >
                          Green and Sustainable Lifestyle!
                        </span>
                      </span>
                    </h1>
                  </Fade>
                  <Fade left duration={1500}>
                    <div className={s.charity}>
                      <p
                        className={cx(s.text_canter, ss.margin0)}
                        style={{ fontWeight: 600, paddingTop: "10px" }}
                      >
                        10% of our profit goes to charity Your business will
                        make a difference!
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(HomeOfferBg);
