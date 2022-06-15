// import React from "react";
// // import Toronto from "../../../images/populerCities/Toronto.jpg";
// // import Paris from "../../../images/populerCities/Paris.jpg";
// // import NewYork from "../../../images/populerCities/New-York.jpg";
// // import TelAviv from "../../../images/populerCities/Tel-Aviv.jpg";
// // import London from "../../../images/populerCities/London.jpg";
// // import Dubai from "../../../images/populerCities/Dubai.jpg";
// // import Seychelles from "../../../images/populerCities/Seychelles.jpg";

// const LocationItems = ({ img, idx, place }) => {
//     const {item}
//   const bgStyle = {
//     backgroundImage: `url(${img})`,
//   };
//   return (
//     <div
//       className={`galleryItemBody ${
//         idx === 0 ? " bigItem1" : idx === 1 ? "bigItem2" : `smallItem${idx}`
//       }`}
//     >
//       <div style={bgStyle} className="galleryImg"></div>
//       <div className="galleryImageOverlay">
//         <h4>{place}</h4>
//       </div>
//     </div>
//   );
// };

// export default LocationItems;
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./PopularLoction.css";
import ss from "../ShareAndFindItem/ShareAndFind.css";
import cx from "classnames";
// import Toronto from "../homeImg/populerCities/Toronto.jpg";
// import Paris from "../homeImg/populerCities/Paris.jpg";
// import NewYork from "../homeImg/populerCities/New-York.jpg";
// import TelAviv from "../homeImg/populerCities/Tel-Aviv.jpg";
// import London from "../homeImg/populerCities/London.jpg";
// import Dubai from "../homeImg/populerCities/Dubai.jpg";
// import Seychelles from "../homeImg/populerCities/Seychelles.jpeg";
import headerBg from "../homeImg/header-bg.png";
import PopularLocationItem from "./PopularLocationItem";
import { Fade } from "react-reveal";
import PropTypes from "prop-types";
// Locale
import Loader from "../../Loader/Loader";
import { injectIntl } from "react-intl";

class PopularLoctionItems extends Component {
  static propTypes = {
    loading: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      load: true,
    };
  }

  componentDidUpdate(prevProps) {}

  render() {
    const { load } = this.state;
    const { loading, data } = this.props;
    // console.log(data);

    if (loading || !load) {
      return <Loader type={"text"} />;
    } else {
      return (
        <div className="container pt-3">
          {/* <h1 className="sectionHeader2">
          <span className="text-yellow2">Popular </span>
          <span className="text-blue2" style={{ position: "relative" }}>
            Cities
            <span className="headerPsudo2">
              <img src={headerBg} alt="" />
            </span>
            <span className="headerPsudoText2">
              <span className="p">a sustainable lifestyle</span>
            </span>
          </span>
        </h1> */}
          <div className={s.main_title}>
            <Fade left>
              <h1 className={cx(ss.sectionHeader111, ss.paddingY)}>
                <span className={s.text_yellow}>Popular </span>
                <span className={s.text_blue}>
                  Cities{" "}
                  <span className={ss.headerPsudo222}>
                    <img src={headerBg} alt="" />
                  </span>
                </span>
              </h1>
            </Fade>
          </div>
          <div className={cx(s.galleryBody, ss.paddingTop3)}>
            {data &&
              data.length > 0 &&
              data.slice(7, 12).map((item, index) => {
                if (item.isEnable == "true") {
                  let path = "/images/popularLocation/" + item.image;

                  return (
                    <PopularLocationItem
                      id={item.id}
                      location={item.location}
                      image={item.image}
                      locationAddress={item.locationAddress}
                      key={index}
                      path={path}
                      idx={index}
                    />
                  );
                }
              })}
          </div>
        </div>
      );
    }
  }
}

export default withStyles(s)(PopularLoctionItems);
