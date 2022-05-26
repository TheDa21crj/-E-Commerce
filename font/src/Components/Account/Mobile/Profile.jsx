import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import ProfileCssMobo from "./Css/Profile.module.css";
import ProfileCss from "./../CSS/Profile.module.css";

export default function Profile(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => props.state("")}
        />
      </div>
      <p className={Common.MyPTag}>Profile</p>
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
  );
}
