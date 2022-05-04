import React from "react";
import TeCss from "./CSS/Testimonial.module.css";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settingT = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className={TeCss.mDiv}>
      <p className={TeCss.TestimonialtitlePTag}>Testimonial</p>
      <div>
        <Sliders {...settingT} className={NACss.Hslide}>
          <div></div>
          <div></div>
          <div></div>
        </Sliders>
      </div>
    </div>
  );
}
