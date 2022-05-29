import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ShareAndFind.css";
import { Col } from "react-bootstrap";

class SingleShareAndFindItem extends Component {
  render() {
    const { img, title, example } = this.props;
    const style = {
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "200px",
    };
    // console.log(id, mainTitle);
    return (
      <Col lg={3} md={3} sm={3} xs={12} className="col-md-3">
        <a href="/category" target="_blank">
          <div className={s.shareFindContainer} style={style}>
            <div className={s.shareFindContainerChild}>
              <h5 className={s.shareFind_title}>{title}</h5>
              <p className={s.shareFindP}>{example}</p>
              <button className={s.shareFindBtn}>Explore More</button>
            </div>
          </div>
        </a>
      </Col>
    );
  }
}

export default withStyles(s)(SingleShareAndFindItem);
