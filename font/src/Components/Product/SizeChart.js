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
          <div className={SCCss.rowDIvP}>
            <div className={SCCss.rowDIv}>
              <div className={SCCss.LeftDiv}>img</div>
              <div className={SCCss.RightDiv}>
                <div className={SCCss.InCmDiv}>
                  <p className={SCCss.InP}>In</p>
                  <p className={SCCss.CmP}>Cm</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
