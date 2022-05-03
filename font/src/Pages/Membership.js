import React, { useState, useEffect } from "react";
import "./Css/Member.css";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import HeaderM from "./../Components/Membership/HeaderM";

export default function Membership() {
  useEffect(() => {
    document.title =
      "Join The Da Store Exclusive Membership & Shop At Discounted Prices";
  });

  return (
    <div>
      <Nav />
      <NavMobo />
      <HeaderM />
      <div>
        Exclusive Member Benefits
        <br />
        BECOME AN EXCLUSIVE MEMBER (price)
        <br />
        TESTIMONIALS
      </div>
      <Footer />
    </div>
  );
}
