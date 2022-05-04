import React from "react";
import PriceCards from "./PriceCards";
import MemCss from "./CSS/Member.module.css";

export default function Member() {
  return (
    <div className={MemCss.mDiv}>
      <p className={MemCss.titlePtag}>Become An Exclusive Member</p>
      <div className={MemCss.CarsPricemDiv}>
        <PriceCards />
        <PriceCards />
        <PriceCards />
      </div>
    </div>
  );
}
