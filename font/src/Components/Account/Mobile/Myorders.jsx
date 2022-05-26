import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";

export default function Myorders(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon onClick={() => props.state("")} />
      </div>
      <p>My Orders</p>
    </div>
  );
}
