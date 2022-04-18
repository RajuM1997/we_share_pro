import React, { Component } from "react";
import s from "./SaveMoreMsg.css";
import heart from "../homeImg/green heart.png";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import ss from "../ShareAndFindItem/ShareAndFind.css";
import Fade from "react-reveal/Fade";
import cx from "classnames";

class SaveMoreMsg extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //
  //   };
  // }

  render() {
    return (
      <div className={cx(s.container, s.paddingY)}>
        <div
          className={cx(
            ss.text_center,
            s.saveMoreContainer,
            ss.marginBottom2,
            ss.marginTop2
          )}
        >
          <Fade left duration={1200}>
            <h1
              className={cx(ss.text_center, ss.margin0)}
              style={{ marginBottom: "0px" }}
            >
              <span className={s.text_yellow}>Don’t Buy!</span>{" "}
              <span className={s.text_blue}>We Share!</span>{" "}
              <span style={{ color: "#03397E", fontWeight: 400 }}>
                Save Money, Do more, Get more!
              </span>
            </h1>
          </Fade>

          <Fade left duration={1400}>
            <h1
              className={cx(ss.text_center, ss.margin0)}
              style={{ margin: "0px" }}
            >
              <span style={{ color: "#03397E" }} className="fw-light">
                Let's save the Planet!
              </span>
              <img className={s.greenheart} src={heart} alt="" />
            </h1>
          </Fade>
          <div>
            <div className={cx(s.messageCharity, ss.text_center)}>
              <Fade left duration={1600}>
                <p
                  style={{ display: "inline-block" }}
                  className={ss.text_center}
                >
                  10% of our profit goes to charity Your business will make a
                  difference!
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SaveMoreMsg);
