import React, { Component } from "react";
import PropTypes from "prop-types";
import bt from "../../components/commonStyle.css";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./ViewCategorys.css";
import SearchOption from "../../components/Home/SearchOption/SearchOption";
import { graphql, gql, compose } from "react-apollo";

class CategoryBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
      bannerData: {},
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (
      nextProps?.data &&
      nextProps?.singleCategory?.getSingleCategory?.category
    ) {
      nextProps?.data.map((element) => {
        if (
          nextProps?.singleCategory.getSingleCategory.category ===
          element?.category
        ) {
          this.setState({ bannerData: element });
        }
      });
    }
  }

  handleScroll = (e) => {
    if (window.scrollY >= 1) {
      this.setState({ change: true });
    } else {
      this.setState({ change: false });
    }
  };
  render() {
    const { data, singleCategory } = this.props;
    console.log("categoryDate", data);
    // console.log(this.state.bannerData);

    let path = "/images/homeBanner/" + this.state.bannerData.image;
    const style = {
      background: `url(
      ${path}
    )`,
      backgroundSize: "cover",
      width: "100%",
      height: "60vh",
    };
    return (
      <div style={style} className={s.category_bg}>
        {/* <img className={si} src={this.state.bannerData.image} alt="" /> */}
        <>
          {!this.state.change && (
            <div className={s.category_search_init}>
              <SearchOption />
            </div>
          )}
        </>
        <div className={s.category_banner_text}>
          <div className={s.category_main_title}>
            <h1>{this.state.bannerData.title}</h1>
          </div>
          <>
            <p
              className="py-0"
              style={{ marginBottom: "0px", paddingTop: "10px" }}
              // data-aos-duration="1000"
              // data-aos="fade-right"
            >
              <span className={s.category_color_title}>
                {this.state.bannerData.colorText}
              </span>
              <>
                {this.state.bannerData.colorText == "Don’t Buy! We Share," ? (
                  <>
                    <br />
                    <span className={s.category_sub_title}>
                      {this.state.bannerData.description}
                    </span>
                  </>
                ) : (
                  <>
                    <span className={s.category_sub_title}>
                      {this.state.bannerData.description}
                    </span>
                  </>
                )}
              </>
              {/* {description} <br /> */}
              <>
                {this.state.bannerData.bottomText === "null" ? (
                  ""
                ) : (
                  <p className={s.category_sub_title}>
                    {this.state.bannerData.bottomText}
                  </p>
                )}
              </>
            </p>
          </>
          {/* <div className={s.category_sub_title}>
            <h5>{this.state.bannerData.description}</h5>
          </div>
          <div >
            <h5>{this.state.bannerData.colorText}</h5>
          </div>
          <div className={s.category_sub_title}>
            <h5>{this.state.bannerData.bottomText}</h5>
          </div> */}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});
export default compose(withStyles(s))(CategoryBanner);
