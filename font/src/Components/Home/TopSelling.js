import React from "react";
import TSCss from "./Css/TopSelling.module.css";
import TopSellingJson from "./../../Data/TopSelling.json";

export default function TopSelling() {
  var settingTS = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
  };
  return (
    <div className={TSCss.mDiv}>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>Top Selling</h1>
      </div>
      <div>
        <Sliders {...settingTS} className={TSCss.Hslide}></Sliders>
      </div>
    </div>
  );
}
