import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";

export default function Profile(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon onClick={() => props.state("")} />
      </div>
      Profile
    </div>
  );
}
