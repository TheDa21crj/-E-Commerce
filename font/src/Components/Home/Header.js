import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SlideText from "./SlideText";
import HeaderCss from "./Css/Header.module.css";

import img1 from "./../../Img/Header/christmas.jpg";
import img2 from "./../../Img/Header/girl-lying-on-the-grass.jpg";
import img3 from "./../../Img/Header/woman.jpg";

export default function Header() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="SlideShow">
      <div className="slides">
        <Sliders {...settings} className="Hslide">
          <div className="slide s1">
            <img src={img1} />
          </div>
          <div className="slide ">
            <img src={img2} />
          </div>
          <div className="slide">
            <img src={img3} />
          </div>
        </Sliders>
      </div>
    </div>
  );
}
