import React, { useState, useEffect } from "react";
import ProfileCss from "./CSS/Profile.module.css";

export default function Profile(props) {
  return (
    <div>
      <h1 className={ProfileCss.h1}>Profile</h1>
      <div className={ProfileCss.conMDiv}>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
