import React from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import { Link } from "react-router-dom";

export default function PayBtn(props) {
  const handleClick = async () => {
    console.table(props.itemsData);

    const dataItems = props.itemsData;

    const res = await fetch("/api/Stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataItems,
        password,
      }),
    });

    const data = await res.json();
    if (data) {
      console.log(data);
      //   setload(false);
      return;
    }
  };

  return (
    <>
      {/* <Link to="/Buy" className="LinkStyle"> */}
      <div className={SCCss.ProceedBuyDiv} onClick={handleClick}>
        Proceed to Buy
      </div>
      {/* </Link> */}
    </>
  );
}
