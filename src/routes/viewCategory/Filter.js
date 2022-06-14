import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
// import hamburger from "../../images/hamburger.svg";
import s from "./ViewCategorys.css";
// import cx from "classnames";
class Filter extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <div className={s.allbtn}>
            <div className={s.all}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                }}
              >
                {/* <img src={hamburger} alt="" /> */}
                <h5>All</h5>
              </div>
            </div>
            <button className={s.common_btn}>
              <select name="" id="">
                <option value="">Drones</option>
              </select>
            </button>
            <button className={s.common_btn}>
              <select name="" id="">
                <option value="">Price</option>
              </select>
            </button>
            <button className={s.common_btn}>Free Cancellation</button>
            <button className={s.common_btn}>Wifi</button>
            <button className={s.common_btn}>Bluetooth</button>
            <button className={s.common_btn}>Power system</button>
            <button className={s.common_btn}>Load</button>
            <button className={s.common_btn}>4K</button>
            <button className={s.common_btn}>Motor</button>
            <button className={s.common_btn}>
              <i class="fa fa-filter" aria-hidden="true"></i> Filter
            </button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Filter;
