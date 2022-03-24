import React, { useState } from "react";
import DbmCss from "./Css/DropDownMobo.module.css";

export default function DropDownMobo(props) {
  const [show, showHide] = useState(props.close);
  return (
    <div className={DbmCss.mDiv}>
      <button onClick={() => showHide(false)}>Close</button>
      <p>DropDownMobo</p>
    </div>
  );
}
