import React from "react";
import { Link } from "react-router-dom";
import TSCss from "./Css/TopSelling.module.css";
import CatCss from "./Css/CATEGORIES.css";
import data from "./JSON/data.json";

export default function CATEGORIES() {
  return (
    <div>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>CATEGORIES</h1>
      </div>

      <div className="datamapPDiv">
        {data.map((value, key) => {
          return (
            <Link
              to={`categories/${value.gender}/${value.link}`}
              key={value.id}
              // className={value.type}
            >
              {/* <img src={value.src} alt="" className="categoryImgTag" /> */}
              <div className="col-md-4">
                <div className="dcard">
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>

                  <div className="paracard">
                    <div className="frame"></div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
