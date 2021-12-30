import React from "react";
import { Link } from "react-router-dom";
import "./CSS/NADiv.css";

export default function NADiv(props) {
  return (
    <div className="NaDivmDiv">
      <img src={props.img} alt="" className="Img" />
      <div className="LPDiv">
        <p>{props.Cp1}</p>
        <Link className="CLink">SHOP NOW</Link>
      </div>
    </div>
  );
}
