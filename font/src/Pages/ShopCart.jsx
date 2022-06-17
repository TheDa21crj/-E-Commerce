import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import SCCss from "./Css/ShopCart.module.css";

export default function ShopCart() {
  useEffect(() => {
    document.title = "The Da: Shopping Cart";
  }, []);

  return (
    <div>
      <Nav />
      <p className={SCCss.MainPTag}>Shop Cart</p>
      <div className={SCCss.RoWDiv}>
        <div className={SCCss.LeftDiv}>
          <p>hello e</p>
        </div>
        <div className={SCCss.RightDiv}>
          <p>
            Your order qualifies for FREE Delivery. Select this option at
            checkout.
            <br />
            Details
          </p>
          <p className={SCCss.SubtotalPTag}>Subtotal (1 item): 269.00</p>
        </div>
      </div>
    </div>
  );
}
