import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import SCCss from "./Css/ShopCart.module.css";

export default function ShopCart() {
  useEffect(() => {
    document.title = "The Da: Shopping Cart";
  });
  return (
    <div>
      <Nav />
      <p className={SCCss.MainPTag}>Shop Cart</p>
    </div>
  );
}
