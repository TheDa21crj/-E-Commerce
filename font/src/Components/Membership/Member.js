import React, { useState } from "react";
import PriceCards from "./PriceCards";
import MemCss from "./CSS/Member.module.css";

export default function Member() {
  const [showSelect1, setSelect1] = useState(true);
  return (
    <div className={MemCss.mDiv}>
      <p className={MemCss.titlePtag}>Become An Exclusive Member</p>
      <div className={MemCss.CarsPricemDiv}>
        <PriceCards
          monthNum="12"
          monthPrice="25"
          popular="Most Popular"
          price="299"
          percentage="87.50"
          selected={showSelect1}
        />
        <PriceCards monthNum="3" monthPrice="83" price="249" percentage="58" />
        <PriceCards monthNum="1" monthPrice="199" price="199" />
      </div>
      <button className={MemCss.AddMembership}>Add Membership to Cart</button>
    </div>
  );
}
