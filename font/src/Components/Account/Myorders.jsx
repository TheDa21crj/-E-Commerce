import React from "react";
import ProfileCss from "./CSS/Profile.module.css";

export default function Myorders(props) {
  return (
    <div className={ProfileCss.mdiv}>
      <h1>My Orders</h1>
      <p>{props.id}</p>
    </div>
  );
}
