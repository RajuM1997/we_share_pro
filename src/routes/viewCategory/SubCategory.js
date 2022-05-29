import React from "react";
import { Col, Row } from "react-bootstrap";
import s from "./ViewCategorys.css";

const SubCategory = ({ items }) => {
  return (
    <Row>
      <div className={s.category_main}>
        <Col md={4} sm={12}>
          <div>
            <img src={items?.img} alt="" className={s.category_img} />
          </div>
        </Col>
        <Col md={8} sm={12} className={s.padding_s}>
          <div className={s.subtitle}>
            <h6>{items?.subTitle}</h6>
            <span className={s.heart}>
              <i class="fas fa-heart"></i>
            </span>
          </div>
          <div className={s.title}>
            <h3>{items?.title}</h3>
          </div>
          <div className={s.subtitle}>
            <h6 className="pb-0">{items?.details}</h6>
          </div>
          <div className={s.subtitle}>
            <h6>{items?.subDetails}</h6>
          </div>
          <div className={s.review}>
            <div className="review">
              <p>
                <span className={s.category_star}>
                  <i class="fas fa-star"></i>
                </span>
                <span className={s.review_number}> {items?.review}</span>
                <span className={s.review_total}> {items?.totalReview}</span>
              </p>
            </div>
            <div className={s.review}>
              <p>
                <span className={s.category_price}>{items?.price}</span>
                <br />
                <span className={s.totalPrice}>{items?.totalPrice}</span>
              </p>
            </div>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default SubCategory;
