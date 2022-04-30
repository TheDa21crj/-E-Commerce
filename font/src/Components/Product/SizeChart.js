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
              <div className={SCCss.LeftDiv}>
                <img src={props.src} alt="" className={SCCss.ImgTag} />
              </div>
              <div className={SCCss.RightDiv}>
                <div className={SCCss.InCmDiv}>
                  <p className={SCCss.InPTag}>In</p>
                  <p className={SCCss.CmPTag}>Cm</p>
                </div>
                <div className={SCCss.TableDiv}>
                  <table border={1}>
                    <tr>
                      <th>SIZE</th>
                      <th>
                        <p>A. TO FIT SHOULDER</p>
                      </th>
                      <th>
                        <p>B. TO FIT CHEST</p>
                      </th>
                      <th>
                        <p>C. TO FIT WAIST</p>
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
