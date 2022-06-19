import React from "react";
import TSCss from "./Css/TopSelling.module.css";
import CatCss from "./Css/CATEGORIES.module.css";
import data from "./data.json";

export default function CATEGORIES() {
  console.table(data);
  return (
    <div>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>CATEGORIES</h1>
      </div>
      <div className={CatCss.datamapPDiv}>
        {data.map((value, key) => {
          return (
            <div key={value.id}>
              <img src={value.src} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
