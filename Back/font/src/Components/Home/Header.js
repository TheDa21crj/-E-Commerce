import React, { useEffect } from "react";
import img1 from "../../Req img/landing-rev-img-1.jpg";
import "./CSS/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="t_bale">
      <img src={img1} alt="" srcset="" id="landing_img" data-aos="fade-up" />
      <h1 id="make_the"> make the </h1>{" "}
      <p id="perfect_dance_move"> PERFECT DANCE MOVE </p>
      <div id="hr_line">
        <p id="h"> hello </p>
      </div>
      <div id="PURCHASE_div"> PURCHASE </div>
    </div>
  );
}
