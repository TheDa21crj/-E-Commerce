import React, { useEffect, useRef } from "react";
import SCCss from "./CSS/SizeChart.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function SizeChart(props) {
  const close = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, []);

  const handleClose = (e) => {
    console.log("close");
  };

  return (
    <div className={SCCss.mDiv}>
      <div className={SCCss.mDivInner} ref={close}>
        <div className={SCCss.ConDiv}>
          {props.name}
          <CloseIcon fontSize="large" onClick={() => props.state(false)} />
        </div>
      </div>
    </div>
  );
}
