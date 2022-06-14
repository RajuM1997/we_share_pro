import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import s from "./ViewCategorys.css";
import bt from "../../components/commonStyle.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { compose } from "redux";
import * as FontAwesome from "react-icons/lib/fa";
import { connect } from "react-redux";
import reviewStar from "../../components/Home/homeImg/star_review.png";
import heart from "../../components/Home/homeImg/heart-image-13.png";

class SubCategory extends Component {
  render() {
    const {
      img,
      subTitle,
      title,
      details,
      subDetails,
      review,
      totalReview,
      price,
      totalPrice,
    } = this.props.items;
    console.log(subTitle);
    return (
      <Row>
        <div className={s.category_main}>
          <Col md={4} sm={12} className={s.padding_e}>
            <div className={s.category_img}>
              <img src={img} alt="" />
            </div>
          </Col>
          <Col md={8} sm={12} className={s.padding_s}>
            <div className={s.subtitle}>
              <h6>{subTitle}</h6>
              <span className={s.heart}>
                <img src={heart} alt="heart" />
              </span>
            </div>
            <div className={s.title}>
              <h3 className={s.margin_none}>{title}</h3>
            </div>
            <div className={s.subtitle}>
              <h6 className="pb-0">{details}</h6>
            </div>
            <div className={s.subtitle}>
              <h6>{subDetails}</h6>
            </div>
            <div className={s.mony_review}>
              <div className={s.review}>
                <p>
                  <span className={s.category_star}>
                    <img src={reviewStar} alt="reviewStar" />
                  </span>
                  <span className={s.review_number}> {review}</span>
                  <span className={s.review_total}> {totalReview}</span>
                </p>
              </div>
              <div className={s.review}>
                <p>
                  <span className={s.category_price}>{price}</span>
                  <br />
                  <span className={s.totalPrice}>{totalPrice}</span>
                </p>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    );
  }
}

const mapState = (state) => ({});
export default compose(withStyles(s, bt), connect(mapState, null))(SubCategory);
