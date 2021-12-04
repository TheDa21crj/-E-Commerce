import React, { useEffect } from "react";
import "./CSS/Home.css";
import img2 from "../../Req img/landing-background-img-1.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function BgWhiteText() {
  useEffect(() => {
    Aos.init({ duration: 5000, offset: 350 });
  }, []);
  return (
    <div>
      <p id="bg_whiteP"> hello </p>
      <p id="beauty_set"> Beautiful Set </p>
      <p id="enlighten">Enlighten your Future</p>
      <img src={img2} alt="" id="right_side_img" data-aos="fade-right" />
    </div>
  );
}
