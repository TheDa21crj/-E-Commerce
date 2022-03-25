import React, { useState } from "react";
import MoBoDrop from "./MoBoDrop";
import DbmCss from "./Css/DropDownMobo.module.css";

export default function DropDownMobo(props) {
  return (
    <div className={DbmCss.mDiv}>
      <ul>
        <li>
          <p>Men</p>
          <MoBoDrop />
        </li>
        <li>Women</li>
        <li>Kids</li>
        <li>New</li>
        <li>Beauty</li>
        <li>Membership</li>
      </ul>
    </div>
  );
}
