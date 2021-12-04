import React from "react";
import "./CSS/Home.css";

export default function TypeDiv(props) {
  return (
    <div id="scroll_div" className="behind_img">
      <img src={props.img} alt="" className="behind_main_img" />
      <p className="behind_img_name">{props.text}</p>
    </div>
  );
}
