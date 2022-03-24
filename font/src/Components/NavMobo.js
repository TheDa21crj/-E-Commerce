import React from "react";
import NCss from "./Css/NavMobo.module.css";

export default function NavMobo() {
  return (
    <div>
      <div className={NCss.HamBurger}>
        <div className={NCss.burger1}></div>
        <div className={NCss.burger2}></div>
        <div className={NCss.burger3}></div>
      </div>
      <div>The Da</div>
      <div>
        <div>Account</div>
      </div>
    </div>
  );
}
