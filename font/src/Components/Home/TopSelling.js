import React from "react";
import TSCss from "./Css/TopSelling.module.css";
import TopSellingJson from "./../../Data/TopSelling.json";

export default function TopSelling() {
  return (
    <div className={TSCss.mDiv}>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>Top Selling</h1>
      </div>
    </div>
  );
}
