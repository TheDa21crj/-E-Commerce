import React from "react";
import TSCss from "./Css/TopSelling.module.css";
import data from "./data.json";

export default function CATEGORIES() {
  console.table(data);
  return (
    <div>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>CATEGORIES</h1>
      </div>
      <div className="hello">
        {data.map((value, key) => {
          return <div key={value.id}>{value.name}</div>;
        })}
      </div>
    </div>
  );
}
