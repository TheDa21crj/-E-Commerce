import React from "react";
import PriceCards from "./PriceCards";
import MemCss from "./CSS/Member.module.css";

export default function Member() {
  return (
    <div className={MemCss.mDiv}>
      <p className={MemCss.titlePtag}>Become An Exclusive Member</p>
      <div className={MemCss.CarsPricemDiv}>
        <PriceCards monthNum="12" monthPrice="25" popular="Most Popular" />
        <PriceCards monthNum="3" monthPrice="83" />
        <PriceCards monthNum="1" monthPrice="199" />
      </div>
    </div>
  );
}
