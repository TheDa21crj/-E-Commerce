import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideText from "./SlideText";
import "./CSS/Slider.css";

import img1 from "../../Img/Slider/bswim-slide.jpg";
import img2 from "../../Img/Slider/pool-water_1950x.jpg";
// import img3 from "../../Img/CATEGORIES/246574706_208163444636416_6926999715643500605_n.jpg";
import img5 from "../../Img/Slider/swim-balc_1950x.jpg";

export default function Slider() {
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
            <SlideText
              H2="California dreaming"
              p2="Retro florals, classic polka dots & sunny shades"
            />
          </div>
          <div className="slide ">
            <img src={img2} />
            <SlideText
              H2="Rise & Shine"
              p2="Bikinis, bodysuits and loungewear sustainably made in California"
            />
          </div>
          {/* <div className="slide">
            <img src={img3} />
          </div> */}
          {/* <div className="slide">
            <img src={img4} />
          </div> */}
          <div className="slide">
            <img src={img5} />
            <SlideText
              H2="Summer style"
              p2="Sustainable ✔︎ Bra-sized ✔︎ Contemporary ✔︎"
            />
          </div>
        </Sliders>
      </div>
    </div>
  );
}
