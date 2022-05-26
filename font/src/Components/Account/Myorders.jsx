import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Myorders(props) {
  return (
    <div>
      <h1>My Orders</h1>
      <p>{props.id}</p>
      <CloseIcon />
    </div>
  );
}
