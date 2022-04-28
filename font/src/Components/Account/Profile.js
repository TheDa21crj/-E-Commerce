import React, { useState, useEffect } from "react";
import ProfileCss from "./CSS/Profile.module.css";

export default function Profile(props) {
  return (
    <div>
      <h1 className={ProfileCss.h1}>Profile</h1>
      <div className={ProfileCss.conMDiv}>
        <div className={ProfileCss.EmailDiv}>
          <p>Email ID:</p>
          <input
            type="email"
            className={ProfileCss.impEmail}
            name=""
            id=""
            readonly="readonly"
            disabled="disabled"
            value={props.email}
          />
        </div>
      </div>
    </div>
  );
}
