import React, { useState } from "react";
import NCss from "./Css/NavMobo.module.css";
import PersonIcon from "@mui/icons-material/Person";
import DropDownMobo from "./DropDownMobo";

export default function NavMobo() {
  const [show, setShow] = useState(false);
  return (
    <div className={NCss.mDiv}>
      <div className={NCss.ChilDiv}>
        <div className={NCss.HamBurger} onClick={() => setShow(!show)}>
          <div className={NCss.burger1}></div>
          <div className={NCss.burger2}></div>
          <div className={NCss.burger3}></div>
        </div>
        <div>
          <h1 className={NCss.h1}>The Da</h1>
        </div>
        <div>
          <div>
            <PersonIcon fontSize="large" />
          </div>
        </div>
      </div>
      {show ? <div>Hello</div> : ""}
    </div>
  );
}
