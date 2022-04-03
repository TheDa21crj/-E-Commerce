import React, { useState } from "react";
import NCss from "./Css/NavMobo.module.css";
import PersonIcon from "@mui/icons-material/Person";
import DropDownMobo from "./DropDownMobo";
import CloseIcon from "@mui/icons-material/Close";

export default function NavMobo() {
  const [show, setShow] = useState(false);
  return (
    <div className={NCss.mDiv}>
      <div className={NCss.ChilDiv}>
        <div className={NCss.HamBurger} onClick={() => setShow(!show)}>
          {show ? (
            <CloseIcon fontSize="large" />
          ) : (
            <div>
              <div className={NCss.burger1}></div>
              <div className={NCss.burger2}></div>
              <div className={NCss.burger3}></div>
            </div>
          )}
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
      {show ? <DropDownMobo /> : ""}
    </div>
  );
}
