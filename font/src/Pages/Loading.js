import React from "react";
import LoadCss from "./Css/Loading.module.css";

export default function Loading() {
  return (
    <div className={LoadCss.mDiv}>
      <div className={LoadCss.loader}>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <span style={{ "--i": 4 }}></span>
        <span style={{ "--i": 5 }}></span>
        <span style={{ "--i": 6 }}></span>
        <span style={{ "--i": 7 }}></span>
        <span style={{ "--i": 8 }}></span>
        <span style={{ "--i": 9 }}></span>
        <span style={{ "--i": 10 }}></span>a
      </div>
    </div>
  );
}
