import React, { Component } from "react";
import headerBg from "../homeImg/header-bg.png";
import SingleShareAndFindItem from "./SingleShareAndFindItem";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ShareAndFind.css";
import cx from "classnames";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import PopularLoctionItems from "../PopularLocationGrid/PopularLoctionItems";
import PopularLocationItem from "../PopularLocationGrid/PopularLocationItem";

class ShareAndFindItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      getCategory: PropTypes.array,
    }),
  };

  static defaultProps = {
    data: {
      loading: true,
    },
  };

  render() {
    const { loading, data } = this.props;
    return (
      <div className={s.shareandfind}>
        <div className={cx(s.container)} style={{ paddingTop: "20px" }}>
          <div className={s.main_title}>
            <Fade left>
              <h1 className={cx(s.sectionHeader111)}>
                <span className={s.text_yellow}>Don't Buy We share </span>
                <span className={s.text_blue}>
                  {" "}
                  Anything Anywhere{" "}
                  <span className={s.headerPsudo22}>
                    <img src={headerBg} alt="" />
                  </span>
                </span>
              </h1>
            </Fade>
          </div>
          <Row className={cx(s.shareandfind_row)}>
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                if (item.isEnable == "true") {
                  let path = "/images/category/" + item.image;
                  return (
                    <SingleShareAndFindItem
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      subTitle={item.subTitle}
                      path={path}
                      key={index}
                    />
                  );
                }
              })}
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ShareAndFindItem);
