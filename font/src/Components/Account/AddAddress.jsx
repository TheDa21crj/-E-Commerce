import React from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function AddAddress(props) {
  return (
    <div>
      AddAddress
      <br />
      <CloseIcon onClick={() => props.state(false)} />
    </div>
  );
}
