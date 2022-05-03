import React, { useState, useEffect } from "react";
import MCSs from "./Css/Member.module.css";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import img from "./../Img/clothes.jpg";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Membership() {
  useEffect(() => {
    document.title =
      "Join The Da Store Exclusive Membership & Shop At Discounted Prices";
  });
  return (
    <div>
      <Nav />
      <NavMobo />
      <div>
        <div className={MCSs.HeaderDiv}>
          <img src={img} alt="" className={MCSs.imgTag} />
          <div className={MCSs.headerOverlayDiv}>
            <div>
              <p className={MCSs.SAVEBIG}>SAVE BIG</p>
              <div className={MCSs.onAllDiv}>
                <p className={MCSs.ONALLPRODUCTS}>
                  ON ALL PRODUCTS. EVERY DAY.
                </p>
              </div>
            </div>
            <div className={MCSs.FunFactsDiv}>
              <p className={MCSs.FunFactsPTag}>Fun Facts</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
