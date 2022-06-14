import React from "react";
import DeleteCss from "./CSS/Delete.module.css";

export default function DeleteAddress(props) {
  return (
    <div className={DeleteCss.mdiv}>
      Delete Address
      {/* {props.DeleteID} */}
    </div>
  );
}
