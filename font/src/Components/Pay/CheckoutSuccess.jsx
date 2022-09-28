import React, { useEffect, useState } from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import successful_purchase from "./../../Img/successful_purchase.svg";

export default function CheckoutSuccess() {
  const [sendID, setID] = useState([]);

  useEffect(() => {
    deleteWish();
  }, []);

  useEffect(() => {
    addOrder();
  }, [sendID]);

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

        setID(r[0].List);
        console.table(r[0].List);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addOrder = async () => {
    // const res = await fetch("/api/Order/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id,
    //   }),
    // });

    // let r = await res.json();

    console.log(sendID);
  };

  return (
    <div className={SCCss.FalseDiv}>
      <img src={successful_purchase} alt="" className={SCCss.empty_cart} />
      <p className={SCCss.MainPTag}>Order was Placed</p>
    </div>
  );
}
