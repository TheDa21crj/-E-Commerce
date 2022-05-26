import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function MyAddress(props) {
  return (
    <div>
      <h1>My Address</h1>
      <p>{props.id}</p>
      <CloseIcon onClick={() => props.state()} />
    </div>
  );
}
