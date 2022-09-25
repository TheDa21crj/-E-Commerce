import React from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import { Link } from "react-router-dom";

export default function PayBtn(props) {
  const handleClick = async () => {
    const dataItems = props.itemsData;

    const res = await fetch("/api/Stripe/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataItems,
        // password,
      }),
    });

    const data = await res.json();
    if (data) {
      window.location.href = data.url;
      //   console.log(data);
      return;
    }
  };

  return (
    <>
      <div className={SCCss.ProceedBuyDiv} onClick={handleClick}>
        Proceed to Buy
      </div>
    </>
  );
}
