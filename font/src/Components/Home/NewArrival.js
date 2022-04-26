import React from "react";
import NACss from "./Css/NewArrival.module.css";
import { Link } from "react-router-dom";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewArrivalJson from "./../../Data/NewArrival.json";

export default function NewArrival() {
  var setting = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };
  return (
    <div className={NACss.mDiv}>
      <h1>New Arrival</h1>
      <div className={NACss.slideDiv}>
        <Sliders {...setting} className={NACss.Hslide}>
          {NewArrivalJson.map((value, key) => {
            return (
              <div key={key} className={NACss.SlidDiv}>
                <img
                  src={value.src}
                  alt={value.name}
                  className={NACss.ImgHeader}
                />
                <div className={NACss.ImgDivBtnDiv}>
                  <p className={NACss.ImgPTag}>{value.name}</p>

                  <Link to="/" className={NACss.ShowNowATag}>
                    Show Now
                  </Link>
                </div>
              </div>
            );
          })}
        </Sliders>
      </div>
    </div>
  );
}
