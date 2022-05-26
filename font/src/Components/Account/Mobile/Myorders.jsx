import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";

export default function Myorders(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => props.state("")}
        />
      </div>
      <p className={Common.MyPTag}>My Orders</p>
      <p>{props.id}</p>
    </div>
  );
}
