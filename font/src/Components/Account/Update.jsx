import React from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Update(props) {
  return (
    <div className={AddCss.mDiv}>
      <div className={AddCss.ConDiv}>
        Update
        <br />
        <CloseIcon
          onClick={() => props.state(false)}
          fontSize="large"
          className={AddCss.CloseIcon}
        />
      </div>
    </div>
  );
}
