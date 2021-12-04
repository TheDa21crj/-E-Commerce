import React from "react";
import "./CSS/Home.css";
import img1 from "../../Req img/landing-2-img-1.png";

export default function Marquee() {
  return (
    <marquee behavior="" direction="" id="marquee_move">
      <img src={img1} alt="" />
    </marquee>
  );
}
