import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const CategoryBanner = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [isScroll]);
  return (
    <div className="category_bg">
      <>
        {!isScroll && (
          <div className="category_search_init">
            <UserProfile />
          </div>
        )}
      </>
      <div className="container pt-5">
        <div className="category_banner_text pt-5">
          <div className="category_main_title">
            <h1>Electronics</h1>
          </div>
          <div className="category_sub_title">
            <h5>Drones, Projectors, Music Inst. DJ equip. etc.</h5>
          </div>
          <div className="category_color_title">
            <h5>Don’t Buy! We Share!</h5>
          </div>
          <div className="category_sub_title">
            <h5>Save money, do more, get more!</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
