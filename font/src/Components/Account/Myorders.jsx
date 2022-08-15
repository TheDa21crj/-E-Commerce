import React from "react";
import ProfileCss from "./CSS/Profile.module.css";
import OrderCss from "./CSS/Orders.module.css";

export default function Myorders(props) {
  return (
    <div className={ProfileCss.mdiv}>
      <h1 className={ProfileCss.h1}>My Orders</h1>
      {/* <div className={OrderCss.pTagMain}> */}
      <p className={OrderCss.pTagMain}>No Orders</p>
      {/* </div> */}
    </div>
  );
}
