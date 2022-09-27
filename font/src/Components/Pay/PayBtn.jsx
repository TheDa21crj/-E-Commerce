import React from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import { addOrder } from "./../../redux/order";
import { useDispatch } from "react-redux";

export default function PayBtn(props) {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const dataItems = props.itemsData;

    const res = await fetch("/api/Stripe/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataItems,
      }),
    });

    const data = await res.json();

    console.table(dataItems);

    if (data) {
      dispatch(
        addOrder({
          orderList: dataItems,
        })
      );

      window.location.href = data.url;

      return;
    }
  };

  return (
    <div className={SCCss.ProceedBuyDiv} onClick={handleClick}>
      Proceed to Buy
    </div>
  );
}
