import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/Slider.css";
import { Link } from "react-router-dom";

export default function SlideText(props) {
  return (
    <div className="slideText" data-aos="fade-up">
      <h1 className="H1"> {props.sale} </h1>
      <p className="p1"> {props.p1} </p>
      <h2 className="H2"> {props.H2} </h2>
      <p className="p2"> {props.p2} </p>
      <Link to="/" className="Link1">
        SHOP NOW
      </Link>
    </div>
  );
}
