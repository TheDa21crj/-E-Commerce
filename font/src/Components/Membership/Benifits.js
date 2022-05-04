import React from "react";
import BenifitsCss from "./CSS/Benifits.module.css";

export default function Benifits(props) {
  return (
    <div>
      <div>
        <p className={BenifitsCss.titlePTag}>{props.title}</p>
      </div>
      <div className={BenifitsCss.LineDiv}>
        <div className={BenifitsCss.CircleDiv}></div>
      </div>
      <div className={BenifitsCss.contentDiv}>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
