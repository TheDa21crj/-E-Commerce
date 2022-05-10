import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";

export default function ShopCart() {
  useEffect(() => {
    document.title = "The Da: Shopping Cart";
  });
  return (
    <div>
      <Nav />
      Shop Cart
    </div>
  );
}
