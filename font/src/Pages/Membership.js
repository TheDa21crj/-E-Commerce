import React, { useState, useEffect } from "react";
import MCSs from "./Css/Member.module.css";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";

export default function Membership() {
  useEffect(() => {
    document.title =
      "Join The Da Store Exclusive Membership & Shop At Discounted Prices";
  });
  return (
    <div>
      <Nav />
      <NavMobo />
      Membership
    </div>
  );
}
