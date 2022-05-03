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

  var settingM = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
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
            <div className={MCSs.slideDiv}>
              <Sliders {...settingM} className={MCSs.Hslide}>
                <div>
                  <p>
                    Add the membership to your cart
                    <br />
                    and get the discount on this order itself.
                  </p>
                </div>
                <div>
                  <p>
                    Most people save the membership fee on their first order.
                  </p>
                </div>
                <div>
                  <p>The average exclusive member SAVES Rs. 2600/year.</p>
                </div>
                <div>
                  <p>Most people become members and don’t pay full price.</p>
                </div>
              </Sliders>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
