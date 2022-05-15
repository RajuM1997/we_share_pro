import React, { Component } from "react";
import s from "./OurClientSay.css";
import cx from "classnames";
import ss from "../NewListing/NewListing.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import * as FontAwesome from "react-icons/lib/fa";

class OurClientSayItems extends Component {
  render() {
    const { img, name, location, comment } = this.props;
    return (
      <div className={cx(ss.paddingBottom4, s.testimonial)}>
        <div className={s.card}>
          <img src={img} className={s.review_Img} alt="..." />
          <div className={s.card_body}>
            <h5 className={s.card_title}>
              <span className={s.review_blue}>{name}</span>{" "}
              <span className={s.review_yellow}>{location}</span>
            </h5>
            <p className={s.comment}>
              <i>"{comment.slice(0, 150)}"</i>
            </p>
            {/* display the ratting */}
            <div className={s.testimonial_icon}>
              <div className={s.reviews}>
                <span>{/* <FontAwesome.AiFillStar /> */}</span>
                {/* <FontAwesome.AiFillStar />
                <FontAwesome.AiFillStar />
                <FontAwesome.AiFillStar />
                <FontAwesome.AiFillStar /> */}
                {/* <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(OurClientSayItems);
