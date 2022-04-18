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
import s from "./PopularLocationGrid.css";
import cx from "classnames";

class PopularLoctionItem extends Component {
  render() {
    const { item } = this.props;
    const { image, index, location } = item;
    // console.log(item);
    const bgStyle = {
      backgroundImage: `url(${image})`,
    };
    return (
      <div
        className={`s.galleryItemBody ${
          index === 0
            ? " s.bigItem1"
            : index === 1
            ? "s.bigItem2"
            : `s.smallItem${index}`
        }`}
      >
        <div style={bgStyle} className={s.galleryImg}></div>
        <div className={s.galleryImageOverlay}>
          <h4>{location}</h4>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PopularLoctionItem);
