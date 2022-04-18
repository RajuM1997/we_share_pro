import React, { Component } from "react";
import s from "./HomeHost.css";
import ss from "../NewListing/NewListing.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Container } from "react-bootstrap/lib/Tab";
import { Col, Row } from "react-bootstrap";

class HomeHosting extends Component {
  render() {
    return (
      <div className={cx(ss.paddingTop4, ss.paddingBottom4)}>
        <Container className={s.host}>
          {/* <h1 className="sectionHeader">
            <span className="text-blue " style={{ position: "relative" }}>
              {" "}
              Discover We Share Experience
              <span className="headerPsudo ">
                <img src={headerBg} alt="" />
              </span>
              <span className="headerPsudoText">
                <span className="p">a sustainable life style</span>{" "}
              </span>
            </span>
          </h1> */}
          <Row>
            <Col
              md={12}
              lg={12}
              className={cx(ss.paddingTop2, ss.paddingBottom2)}
            >
              <div className={s.host_content}>
                <div className={s.experience_titile}>
                  <h1
                    className={cx(ss.margin0, ss.paddingY4)}
                    style={{ margin: "0px", padding: "15px 0px" }}
                  >
                    <span> Become</span> a host!
                  </h1>
                </div>
                <div className={s.experience_p}>
                  <p className={cx(ss.margin0, ss.padding0)}>
                    Anything you own can now earn you income.
                  </p>
                  <p className={cx(ss.margin0, ss.padding0)}>
                    Start earning today! We own so much that often don't get
                    used.
                  </p>
                  <p className={cx(s.blue_text, ss.margin0)}>Let's Share it!</p>
                </div>
                <div>
                  <div className={s.work}>
                    <h3 style={{ margin: 0, padding: "8px 0" }}>
                      How it works, <span>Simple!</span>
                    </h3>
                  </div>
                  <div>
                    <div className={cx(s.img_text, ss.padding0)}>
                      <h4 className={ss.margin0}>Sign up</h4>
                    </div>
                    <div className={cx(s.img_text, ss.padding0)}>
                      <h4 className={ss.margin0}>
                        Describe what you’re sharing
                      </h4>
                    </div>
                    <div className={cx(s.img_text)}>
                      <h4 className={ss.margin0}>Upload great pictures</h4>
                    </div>
                    <div className={cx(s.img_text)}>
                      <h4 className={ss.margin0}>Start earning income! </h4>
                    </div>
                    <div className={cx(ss.paddingTop2)}>
                      <button className={s.experience_btn}>
                        List an items
                      </button>
                    </div>
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

export default withStyles(s)(HomeHosting);
