import React from "react";
import ProfileCss from "./CSS/Profile.module.css";

export default function Myorders(props) {
  return (
    <div className={ProfileCss.mdiv}>
      <h1 className={ProfileCss.h1}>My Orders</h1>
      <div className={ProfileCss.EmailDiv}>
        <p>Email ID:</p>
      </div>
    </div>
  );
}
