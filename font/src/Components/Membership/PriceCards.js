import React, { useState } from "react";
import PCss from "./CSS/PriceCards.module.css";

export default function PriceCards(props) {
  const [show, set] = useState(props.popular);

  return (
    <div className={PCss.mDiv}>
      {show ? (
        <div className={PCss.popularDiv}>
          <p className={PCss.Mostpopular}>{props.popular}</p>
        </div>
      ) : (
        <div className={PCss.popularDiv}></div>
      )}

      <p>{props.monthNum} Months</p>
      <p>₹ {props.monthPrice}/Month</p>
    </div>
  );
}
