import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function MyAddress(props) {
  return (
    <div>
      <h1>My Address</h1>
      <p>{props.id}</p>
      <KeyboardBackspaceIcon onClick={() => props.state()} />
    </div>
  );
}
