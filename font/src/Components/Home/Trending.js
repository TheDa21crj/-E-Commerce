import React from "react";
import "./CSS/Categories.css";
import NADiv from "./NADiv";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../Img/CATEGORIES/1626583268_8092427.webp";

export default function Trending() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    className: "Cscrollmenu",
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="CmDiv" data-aos="fade-right">
      <h1>TRENDING</h1>
      <Slider {...settings}>
        <NADiv img={img1} Cp1="Shirts" />
        <NADiv img={img1} Cp1="T-Shirts" />
        <NADiv img={img1} Cp1="pants" />
        <NADiv img={img1} Cp1="Boxers" />
        <NADiv img={img1} Cp1="dresses" />
        <NADiv img={img1} Cp1="swim tops" />
        <NADiv img={img1} Cp1="swim bottoms" />
        <NADiv img={img1} Cp1="one pieces" />
        <NADiv img={img1} Cp1="tank tops" />
        <NADiv img={img1} Cp1="jackets" />
        <NADiv img={img1} Cp1="Backpacks" />
        <NADiv img={img1} Cp1="shoes" />
      </Slider>
    </div>
  );
}
