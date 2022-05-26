import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";

export default function MyAddress(props) {
  return (
    <div>
      MyAddress
      <div>
        <KeyboardBackspaceIcon onClick={() => props.state("")} />
      </div>
    </div>
  );
}
