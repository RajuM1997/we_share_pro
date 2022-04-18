import React, { Component } from "react";
import BannerItem from "./BannerItem";
import Slider from "react-slick";
import s from "./Banner.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cx from "classnames";
import { BannerData } from "./BannerData";
import SearchOption from "../SearchOption/SearchOption";
import { change } from "redux-form";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      change: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log("add event");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("remove event");
  }

  handleScroll = (e) => {
    if (window.scrollY >= 1) {
      this.setState({ change: true });
    } else {
      this.setState({ change: false });
    }
  };

  render() {
    console.log(this.state.change);
    const settings = {
      // beforeChange: function() {
      //   // setActiveAnimation(false);
      // },
      // afterChange: function() {
      //   setActiveAnimation(true);
      // },
      fade: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      dots: false,
      speed: 1500,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <div className={s.banner}>
        <div className={s.search_init}>
          {!this.state.change && <SearchOption />}
        </div>
        <div>
          <Slider {...settings} ref={this.myRef}>
            {BannerData.map((items, index) => (
              <BannerItem items={items} index={index} myRef={this.myRef} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Banner);
