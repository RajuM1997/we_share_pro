import React, { Component } from "react";
// import { disconnectVerification } from "../../../actions/manageUserVerification";
import headerBg from "../homeImg/header-bg.png";
import SingleShareAndFindItem from "./SingleShareAndFindItem";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ShareAndFind.css";
import ss from "../ShareAndFindItem/ShareAndFind.css";
import cx from "classnames";
import { Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
// import SingleShareAndFindItem from "./SingleShareAndFindItem";

class ShareAndFindItem extends Component {
  render() {
    // const { load } = this.state;
    // const { loading, data } = this.props;
    // console.log(data);
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
            {/* <span className={s.headerPsudoText22}>
              <span className="p">
                Save money, do more, get more! a sustainable lifestyle!
              </span>
            </span> */}
          </div>
          <Row className={cx(s.shareandfind_row)}>
            {/* <h1 className={cx(s.ectionHeader, s.paddingTop2, s.paddingBottom2)}>
              <span className={s.text_yellow}>Don't Buy We share </span>
              <span className={s.text_blue} style={{ position: "relative" }}>
                {" "}
                Anything Anywhere
                <span className={s.headerPsudo}>
                  <img src={headerBg} alt="" />
                </span>
                <span className={s.headerPsudoText}>
                  <span className="p">
                    Save money, do more, get more! a sustainable lifestyle!
                  </span>
                </span>
              </span>
            </h1> */}
            <SingleShareAndFindItem
              title="Vacation Home"
              example="Short & Long Term Rental"
              img="https://i.ibb.co/61MRHSW/homes-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Events Space"
              example="We SHare, Wedding Halls, Receptions & Equipment"
              img="https://i.ibb.co/b1jMf00/event-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Workspace"
              example="Offices & Conference Rooms"
              img="https://i.ibb.co/Z8cWQWC/office-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Vehicles"
              example="Cars, Vans Work Vehicles"
              img="https://i.ibb.co/mBZDTjF/Cars-Square.jpg"
            />
            <SingleShareAndFindItem
              title="RVs"
              example="Sport and Champing equipment"
              img="https://i.ibb.co/Jz55QqQ/RVSSquare.jpg"
            />
            <SingleShareAndFindItem
              title="Boats"
              example="Yachts, Sailboats, speedboats"
              img="https://i.ibb.co/Bjkzkkq/Boats-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Bikes"
              example="Scooters, mountain bikes & road bikes"
              img="https://i.ibb.co/qsD5xVc/Bikes-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Electronics"
              example="Drones, Projectors, Music Inst. DJ equip. etc."
              img="https://i.ibb.co/Sx7HLdV/Electronincs-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Power Tools"
              example="Carpentry, Construction, Landscaping, etc"
              img="https://i.ibb.co/p1jKt6K/power-Tools-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Film Equipment"
              example="Still and Video Cameras, equipment and accessories"
              img="https://i.ibb.co/fnB77jv/filming-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Event Equipment"
              example="Sound, Lighting and Video"
              img=" https://i.ibb.co/qmgn0Ys/event-Equipment-Square.jpg"
            />
            <SingleShareAndFindItem
              title="Parking"
              example="in-door & out-door Garages, Storge, Warehouses"
              img="https://i.ibb.co/smHn9yC/Parking-Square.jpg"
            />
          </Row>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ShareAndFindItem);
