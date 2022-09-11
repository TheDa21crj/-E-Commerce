import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import Loading from "./../../../Img/loading.gif";
import ProfileCss from "./../CSS/Profile.module.css";
import AddCss from "./../CSS/Address.module.css";
// redux
import { useSelector } from "react-redux";
import { adduser } from "./../../../redux/user";

export default function MyAddress(props) {
  const [showload, setload] = useState(true);

  const toggle = useSelector((state) => state.toggle.toggle);

  const address = useSelector((state) => state.user.address);

  console.log(address);
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
        <div className={AddCss.AddressRowDiv}>
          <div className={AddCss.mapPArent}>{}</div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
