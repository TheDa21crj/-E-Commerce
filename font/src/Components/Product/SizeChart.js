import React, { useState } from "react";
import SCCss from "./CSS/SizeChart.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function SizeChart(props) {
  // const [showPOP, hidePOP] = useState(props.state);

  return (
    <div className={SCCss.mDiv}>
      <div className={SCCss.mDivInner} onClick={() => console.log("Close")}>
        <div className={SCCss.ConDiv}>
          {props.name}
          <CloseIcon fontSize="large" onClick={() => props.state(false)} />
        </div>
      </div>
    </div>
  );
}
