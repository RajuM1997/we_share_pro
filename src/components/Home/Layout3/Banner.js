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
    this.state = {
      setActiveAnimation: true,
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
    if (window.scrollY >= 10) {
      this.setState({ change: true });
    } else {
      this.setState({ change: false });
    }
  };

  render() {
    const { loading, data, shareAndFindData } = this.props;
    let bannerData;

    // {
    //   shareAndFindData &&
    //     shareAndFindData.length > 0 &&
    //     shareAndFindData.find((image) => {
    //       return (bannerData = image);
    //     });
    // }
    // let small_images = "/images/category/" + bannerData?.image;
    console.log(bannerData);
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
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                if (item.isEnable == "true") {
                  let path = "/images/homeBanner/" + item.image;
                  let smallImage = "/images/homeBanner/medium_" + item.image;
                  return (
                    <BannerItem
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      colorText={item.colorText}
                      bottomText={item.bottomText}
                      category={item.category}
                      path={path}
                      small_images={smallImage}
                      key={item.id}
                      myRef={this.myRef}
                    />
                  );
                }
              })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Banner);
