import React, { useEffect, useRef } from "react";
import SCCss from "./CSS/SizeChart.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function SizeChart(props) {
  return (
    <div className={SCCss.mDiv}>
      <div className={SCCss.mDivInner}>
        <div className={SCCss.ConDiv}>
          <CloseIcon
            fontSize="large"
            className={SCCss.CloseIcon}
            onClick={() => props.state(false)}
          />
          <h1>{props.name}</h1>
        </div>
      </div>
    </div>
  );
}
