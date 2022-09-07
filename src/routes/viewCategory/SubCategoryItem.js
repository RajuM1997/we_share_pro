import React, { Component } from "react";
import reviewStar from "../../components/Home/homeImg/star_review.png";
import heart from "../../components/Home/homeImg/heart-image-13.png";
import { formatURL } from "../../helpers/formatURL";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { graphql, gql, compose } from "react-apollo";
import s from "./ViewCategorys.css";
import bt from "../../components/commonStyle.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";

class SubCategoryItem extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        address: PropTypes.string,
        title: PropTypes.string,
        subCategory: PropTypes.string,
        primaryCategory: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        guests: PropTypes.string,
        bedrooms: PropTypes.string,
        beds: PropTypes.string,
        baths: PropTypes.string,
        isEnable: PropTypes.string,
      })
    ),
  };

  static defaultProps = {
    data: [],
  };
  render() {
    const { data, listing } = this.props;
    console.log(listing);
    // console.log("hello", listing);
    return (
      <>
        {listing &&
          listing.map((data, key) => {
            console.log(data);
            let photo = JSON.parse(data?.coverPhoto);
            return (
              <Row key={data.id}>
                <a
                  href={"/rooms/" + formatURL(data.title) + "-" + data?.id}
                  // href={`/host_listing/${data?.id}`}
                  target={"_blank"}
                >
                  <div className={s.category_main}>
                    <Col md={4} sm={12} className={s.padding_e}>
                      <div className={s.category_img}>
                        {photo?.map(
                          (item, i) =>
                            i == 0 && (
                              <img
                                src={"/images/upload/x_medium_" + item.filename}
                                alt=""
                              />
                            )
                        )}
                      </div>
                    </Col>
                    <Col md={8} sm={12} className={s.padding_s}>
                      <div className={s.subtitle}>
                        <h6>{data?.address}</h6>
                        <span className={s.heart}>
                          <img src={heart} alt="heart" />
                        </span>
                      </div>
                      <div className={s.title}>
                        <h3 className={s.margin_none}>{data?.title}</h3>
                      </div>
                      <div className={s.subtitle}>
                        <h6 className="pb-0">
                          {data?.guests} guests {data?.bedrooms} bedrooms{" "}
                          {data?.beds} beds {data?.baths} baths
                        </h6>
                      </div>
                      <div className={s.subtitle}>
                        <h6>{data?.description}</h6>
                      </div>
                      <div className={s.mony_review}>
                        <div className={s.review}>
                          <p>
                            <span className={s.category_star}>
                              <img src={reviewStar} alt="reviewStar" />
                            </span>
                            <span className={s.review_number}> 4.88</span>
                            <span className={s.review_total}>
                              {" "}
                              (16 reviews)
                            </span>
                          </p>
                        </div>
                        <div className={s.review}>
                          <p>
                            <span className={s.category_price}>
                              1,121 / night
                            </span>
                            <br />
                            <span className={s.totalPrice}>10,088 total</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </div>
                </a>
              </Row>
            );
          })}
      </>
    );
  }
}

export default compose(withStyles(s, bt))(SubCategoryItem);
