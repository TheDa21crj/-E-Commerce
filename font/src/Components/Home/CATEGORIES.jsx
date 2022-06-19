import React from "react";
import TSCss from "./Css/TopSelling.module.css";
import CatCss from "./Css/CATEGORIES.css";
import data from "./data.json";

export default function CATEGORIES() {
  return (
    <div>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>CATEGORIES</h1>
      </div>
      <div className="datamapPDiv">
        {data.map((value, key) => {
          return (
            <div key={value.id} id={value.type}>
              <img src={value.src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
