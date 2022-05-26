import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ProfileCss from "./CSS/Profile.module.css";

export default function MyAddress(props) {
  return (
    <div className={ProfileCss.mdiv}>
      <h1>My Address</h1>
      <p>{props.id}</p>
    </div>
  );
}
