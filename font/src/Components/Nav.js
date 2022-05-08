import React from "react";
import NavDes from "./NavDes";
import NavMobo from "./NavMobo";
import NavCss from "./Css/Nav.module.css";

export default function Nav() {
  return (
    <div>
      <NavDes />
      <div className={NavCss.underNav}></div>
      <NavMobo />
    </div>
  );
}
