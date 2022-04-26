import React from "react";
import NACss from "./Css/NewArrival.module.css";
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
                <p className={NACss.ImgPTag}>{value.name}</p>
                <img
                  src={value.src}
                  alt={value.name}
                  className={NACss.ImgHeader}
                />
                <a href="#" className={NACss.ShowNowATag}>
                  Show Now
                </a>
              </div>
            );
          })}
        </Sliders>
      </div>
    </div>
  );
}
