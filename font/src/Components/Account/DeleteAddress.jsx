import React, { useEffect } from "react";
import DeleteCss from "./CSS/Delete.module.css";

export default function DeleteAddress(props) {
  useEffect(() => {
    // setInterval(function () {
    console.log(props.DeleteID);
    // }, 5000);
  }, [props.DeleteID]);

  return (
    <div className={DeleteCss.mdiv}>
      Delete Address
      {/* {props.DeleteID} */}
    </div>
  );
}
