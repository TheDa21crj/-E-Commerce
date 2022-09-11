import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import Loading from "./../../../Img/loading.gif";
import { useSelector } from "react-redux";
import ProfileCss from "./../CSS/Profile.module.css";
// redux
import { useSelector } from "react-redux";

export default function MyAddress(props) {
  const [showload, setload] = useState(true);

  const toggle = useSelector((state) => state.toggle.toggle);

  return (
    <>
      {/* {showload ? (
        <div className={ProfileCss.LadingDiv}>
          <img src={Loading} alt="" />
        </div>
      ) : ( */}
      <div className={Common.mdiv}>
        <div>
          <KeyboardBackspaceIcon
            fontSize="large"
            onClick={() => props.state("")}
          />
        </div>
        <p className={Common.MyPTag}>My Address</p>
      </div>
      {/* )} */}
    </>
  );
}
