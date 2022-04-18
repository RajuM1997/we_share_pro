import React, { Component } from "react";
import s from "./NewListing.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";

class NewListingItems extends Component {
  render() {
    const { img, name, title, city, price } = this.props;
    return (
      <div className={s.marginTop4}>
        <div className={s.new_listing}>
          <div className={s.card} style={{ padding: "0px 8px" }}>
            <div className={s.list_img}>
              <img src={img} alt="" />
              <h6 className={s.name}>{name}</h6>
            </div>
            <div className="card-body p-0">
              <p className="">{title}</p>
              <small className={s.new_list_city}>{city}</small>
              <h6 className={cx(s.price, s.marginTop1)}>{price}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NewListingItems);
