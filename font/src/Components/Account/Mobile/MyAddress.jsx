import React, { useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";

export default function MyAddress(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon onClick={() => props.state("")} />
      </div>
      MyAddress
    </div>
  );
}
