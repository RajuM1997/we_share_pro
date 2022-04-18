import React, { Component, useRef } from "react";
import Slider from "react-slick/lib/slider";
import img1 from "../homeImg/Testimonial/img1.jpg";
import img2 from "../homeImg/Testimonial/img2.jpg";
import img3 from "../homeImg/Testimonial/img3.jpg";
import img4 from "../homeImg/Testimonial/img4.jpg";
import s from "./OurClientSay.css";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Container } from "react-bootstrap/lib/Tab";
import { Row } from "react-bootstrap";
import * as FontAwesome from "react-icons/lib/fa";
import OurClientSayItems from "./OurClientSayItems";

class OurClientSay extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    // const sliderRef = useRef(null);
    const settings = {
      className: "center",
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
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
            dots: true,
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
      <div
        className={cx(
          s.marginTop2,
          s.marginBottom2,
          s.any,
          s.testimonial_bg_weShare
        )}
      >
        <Container>
          <div className={s.testimonal}>
            <Row>
              <div
                className={cx(
                  s.testimonial_title,
                  s.marginBottom4,
                  s.marginTop3
                )}
              >
                <h1 style={{ padding: "15px 0" }}>
                  <span>What</span>{" "}
                  <span className={s.text_blue}> our Clients say</span>
                </h1>
              </div>
              {/* ref={sliderRef} */}
              <Slider {...settings} ref={this.myRef}>
                <OurClientSayItems
                  name="Jane,"
                  location="New York"
                  comment="Excellent communication, absolutely lovely people, amazing House!!! and an incredibly smooth process!"
                  img={img1}
                />
                <OurClientSayItems
                  name="Rafi,"
                  location="Berlin"
                  comment="This is my second rental with Mike - great equipment, great price and brilliant service!"
                  img={img2}
                />
                <OurClientSayItems
                  name="Lui,"
                  location="Tokyo"
                  comment="Paul is a very nice guy and very easy to deal with. Great car, good price and really easy to collect and return."
                  img={img3}
                />
                <OurClientSayItems
                  name="Ainat,"
                  location="Tel Aviv"
                  comment="Betty was a super nice, her gear was perfect for my project. Highly recommend."
                  img={img4}
                />
              </Slider>
              <div
                className={s.testimonial_main}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className={s.testimonial_left}
                  onClick={() => this.myRef.current.slickPrev()}
                >
                  <FontAwesome.FaChevronLeft />
                  {/* <i className="fas fa-arrow-left"></i> */}
                </div>
                <div
                  className={s.testimonial_right}
                  onClick={() => this.myRef.current.slickNext()}
                >
                  <FontAwesome.FaChevronRight />
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(OurClientSay);
