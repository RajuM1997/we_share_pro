import React, { Component } from "react";
import s from "./NewListing.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Slider from "react-slick/lib/slider";
import NewListingItems from "./NewListingItems";
import listing1 from "../homeImg/newListing/Listing1.jpg";
import listing2 from "../homeImg/newListing/Listing2.jpg";
import listing3 from "../homeImg/newListing/Listing3.jpg";
import listing4 from "../homeImg/newListing/Listing4.jpg";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";
import * as FontAwesome from "react-icons/lib/fa";

class NewListingItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      handleColor: "Newly Listed",
    };
  }

  render() {
    // console.log(this.myRef);
    //   const [activeColor, setActiveColor] = useState("Newly Listed");
    //   const sliderRef = useRef(null);
    const settings = {
      className: "center",
      infinite: true,
      arrows: false,
      dots: false,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={cx(s.common_bg_weShare, s.marginTop4)}>
        <Container
          className={cx(s.paddingBottom2, s.paddingBottom1, s.container)}
        >
          {/* <div className="main_title">
          <Fade left>
            <h1 className="sectionHeader111 pb-3 pt-1">
              <span className="text-yellow">New</span>
              <span className="text-blue">
                {" "}
                Listing{" "}
                <span className="headerPsudo22">
                  <img src={headerBg} alt="" />
                </span>
              </span>
            </h1>
          </Fade>
        </div> */}
          <Row>
            {/* <h1 className="sectionHeader3">
              <span className="text-yellow3">We </span>
              <span className="text-blue3" style={{ position: "relative" }}>
                Share
                <span className="headerPsudo3">
                  <img src={headerBg} alt="" />
                </span>
                <span className="headerPsudoText3">
                  <span className="p">a sustainable lifestyle</span>
                </span>
              </span>
            </h1> */}
            <div className={cx(s.paddingTop2, s.new_list_main)}>
              <button
                onClick={() => this.setState({ handleColor: "Newly Listed" })}
                className={
                  this.state.handleColor === "Newly Listed"
                    ? cx(s.new_list_btn, s.activeList)
                    : s.new_list_btn
                }
              >
                Newly Listed
              </button>
              <button
                onClick={() => this.setState({ handleColor: "Popular" })}
                className={
                  this.state.handleColor === "Popular"
                    ? cx(s.new_list_btn, s.activeList)
                    : s.new_list_btn
                }
              >
                Popular
              </button>
              <button
                onClick={() => this.setState({ handleColor: "Featured" })}
                className={
                  this.state.handleColor === "Featured"
                    ? cx(s.new_list_btn, s.activeList)
                    : s.new_list_btn
                }
              >
                Featured
              </button>
            </div>
            <div>
              <Slider {...settings} ref={this.myRef}>
                <NewListingItems
                  img={listing1}
                  name={"Property"}
                  title={"Magical Deserts"}
                  city={"United States"}
                  price={"$600 per week"}
                />
                <NewListingItems
                  img={listing2}
                  name={"Vehicles"}
                  title={"Honda C"}
                  city={"Toronto"}
                  price={"$100 per week"}
                />
                <NewListingItems
                  img={listing3}
                  name={"Film Equipment"}
                  title={"Pro Camera"}
                  city={"Tel Aviv"}
                  price={"$100 per day"}
                />
                <NewListingItems
                  img={listing4}
                  name={"Boat"}
                  title={"Magical Boats"}
                  city={"Dubai"}
                  price={"$30 per hour"}
                />
                <NewListingItems
                  img={listing4}
                  name={"Boat"}
                  title={"Magical Boats"}
                  city={"Dubai"}
                  price={"$30 per hour"}
                />
              </Slider>
              <div className={cx(s.slider_icon, s.arrow_main)}>
                <div
                  className={s.left}
                  onClick={() => this.myRef.current.slickPrev()}
                >
                  <FontAwesome.FaChevronLeft />
                  {/* FaChevronLeft */}
                  {/* <FontAwesomeIcon icon="fa-solid fa-angle-left" /> */}
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div
                  className={s.right}
                  onClick={() => this.myRef.current.slickNext()}
                >
                  <FontAwesome.FaChevronRight />
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(NewListingItem);
