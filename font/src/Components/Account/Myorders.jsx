import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Myorders(props) {
  return (
    <div>
      <h1>My Orders</h1>
      <p>{props.id}</p>
      <KeyboardBackspaceIcon onClick={() => props.state("")} />
    </div>
  );
}
