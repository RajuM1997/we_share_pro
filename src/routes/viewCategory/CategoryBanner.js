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
    console.log("add event");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    console.log("remove event");
  }
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  handleScroll = (e) => {
    if (window.scrollY >= 1) {
      this.setState({ change: true });
    } else {
      this.setState({ change: false });
    }
  };
  render() {
    const { data, singleCategory } = this.props;
    console.log(data);
    console.log(singleCategory);
    // data &&
    //   data.map((element) => {
    //     if (singleCategory.getSingleCategory.category === element.category) {
    //       this.setState({ bannerData: element });
    //     }
    //   });
    // let path = "/images/category/" + this.state.bannerData.image;
    const style = {
      background: `url(
      ../../components/Home/homeImg/Banner/Electronics desktop.jpg
    )`,
      backgroundRepeat: "no-repeat",
      backgroundSize: " cover",
      width: "100%",
      height: " 55vh",
    };
    return (
      <div className={s.category_bg} style={style}>
        <>
          {!this.state.change && (
            <div className={s.category_search_init}>
              <SearchOption />
            </div>
          )}
        </>
        <div className={s.category_banner_text}>
          <div className={s.category_main_title}>
            <h1>Electronics</h1>
          </div>
          <div className={s.category_sub_title}>
            <h5>Drones, Projectors, Music Inst. DJ equip. etc.</h5>
          </div>
          <div className={s.category_color_title}>
            <h5>Don’t Buy! We Share!</h5>
          </div>
          <div className={s.category_sub_title}>
            <h5>Save money, do more, get more!</h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({});
export default compose(withStyles(s))(CategoryBanner);
