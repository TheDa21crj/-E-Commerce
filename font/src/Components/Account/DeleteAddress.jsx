import React, { useEffect } from "react";
import DeleteCss from "./CSS/Delete.module.css";

export default function DeleteAddress(props) {
  useEffect(() => {
    console.log(props.DeleteID);
    deleteAddressFun();
  }, [props.DeleteID]);

  const deleteAddressFun = async () => {};

  return (
    <div className={DeleteCss.mdiv}>
      Delete Address
      {/* {props.DeleteID} */}
    </div>
  );
}
