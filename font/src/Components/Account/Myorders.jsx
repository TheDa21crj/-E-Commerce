import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ProfileCss from "./CSS/Profile.module.css";

export default function Myorders(props) {
  return (
    <div
      className={ProfileCss.mdiv}
      style={{ height: "100vh", padding: "20px" }}
    >
      <h1>My Orders</h1>
      <p>{props.id}</p>
      <KeyboardBackspaceIcon onClick={() => props.state("")} />
    </div>
  );
}
