import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import SCCss from "./Css/ShopCart.module.css";

export default function ShopCart() {
  useEffect(() => {
    document.title = "The Da: Shopping Cart";
    seeList();
  }, []);

  const seeList = async () => {
    try {
      const res = await fetch("/api/Shoping", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.errors) {
        return;
      }
      if (data) {
        if (data.message == "zero") {
          return dispatch(addWish({ length: 0 }));
        } else {
          dispatch(
            addWish({ length: data.message.length, data: data.message })
          );
          return;
        }
      }
    } catch (error) {
      return;
    }
  };

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
