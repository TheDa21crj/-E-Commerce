import React, { useEffect } from "react";
import "./CSS/NewArrival.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NADiv from "./NADiv";

import img1 from "../../Img/New arrival/02f7e3d610a3334112b1532353a69053.jpg";
import img2 from "../../Img/New arrival/1629297803_2523484.webp";
import img3 from "../../Img/New arrival/product-20.jpg";
import img4 from "../../Img/New arrival/product-25.jpg";
import img5 from "../../Img/New arrival/162040110_126591512690235_2650967926924190660_n.jpg";
import img6 from "../../Img/New arrival/1628225659_6376272.webp";
import img7 from "../../Img/New arrival/Red_and_Black_Georgette_Long_Designer_Jacket_Style_Indian_Dress_1200x1200.jpg";
import img8 from "../../Img/New arrival/1ab6d9e3-e5c3-46e6-adc0-6066105b01a81616060924389-1.webp";
import img9 from "../../Img/New arrival/08cae537-875f-48c9-b17b-c0e31ff7f6f51606294937039-Roadster-Women-Jackets-4541606294934437-1.webp";
import img10 from "../../Img/New arrival/243125393_3114817938746796_6603650162079970533_n.jpg";
import img11 from "../../Img/New arrival/245639899_303340657921314_7837903507374434512_n.jpg";
import img12 from "../../Img/New arrival/246646687_560649828371112_2718908410331942964_n.jpg";

export default function NewArrival() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    className: "scrollmenu",
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
    <div className="NamDiv" data-aos="fade">
      <h1> New Arrival </h1>
      <Slider {...settings}>
        <NADiv img={img1} />
        <NADiv img={img2} />
        <NADiv img={img3} />
        <NADiv img={img4} />
        <NADiv img={img5} />
        <NADiv img={img6} />
        <NADiv img={img7} />
        <NADiv img={img8} />
        <NADiv img={img9} />
        <NADiv img={img10} />
        <NADiv img={img11} />
        <NADiv img={img12} />
      </Slider>{" "}
    </div>
  );
}
