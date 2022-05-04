import React from "react";
import TeCss from "./CSS/Testimonial.module.css";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  return (
    <div className={TeCss.mDiv}>
      <p className={TeCss.TestimonialtitlePTag}>Testimonial</p>

      <div>
        slider
        <br />
        t1
        <br />
        t2
        <br />
        t3
        <br />
        ...
      </div>
    </div>
  );
}
