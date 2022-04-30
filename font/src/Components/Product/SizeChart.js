import React, { useEffect, useRef } from "react";
import SCCss from "./CSS/SizeChart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TableIn from "./TableIn";

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
              <div className={SCCss.LeftDiv}>
                <img src={props.src} alt="" className={SCCss.ImgTag} />
              </div>
              <div className={SCCss.RightDiv}>
                <div className={SCCss.InCmDiv}>
                  <p className={SCCss.InPTag}>In</p>
                  <p className={SCCss.CmPTag}>Cm</p>
                </div>
                <div className={SCCss.TableDiv}>
                  <TableIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
