import React from "react";
import TSCss from "./Css/TopSelling.module.css";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollCss from "./Css/COLLECTIONS.module.css";

export default function COLLECTIONS() {
  var settingTS = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    mobileFirst: true,
  };
  return (
    <div className="MERCHANDISEmDiv">
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>COLLECTIONS</h1>
      </div>
      <Sliders {...settingTS} className={TSCss.Hslide}></Sliders>
    </div>
  );
}
