import React, { useEffect } from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import successful_purchase from "./../../Img/successful_purchase.svg";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function CheckoutSuccess() {
  useEffect(() => {
    deleteWish();
    addOrder();
  }, []);

  const deleteWish = async (deleteID) => {
    let id = deleteID;
    if (id === "") {
      return;
    } else {
      try {
        const res = await fetch("/api/Shoping/delete/product/all", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        let r = await res.json();

        console.log(r);
        // seeList();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addOrder = async () => {
    console.log("Hello World");
  };

  return (
    <div className={SCCss.FalseDiv}>
      <img src={successful_purchase} alt="" className={SCCss.empty_cart} />
      <p className={SCCss.MainPTag}>Order was Placed</p>
    </div>
  );
}
