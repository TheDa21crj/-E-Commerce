import React, { useEffect } from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import successful_purchase from "./../../Img/successful_purchase.svg";

export default function CheckoutSuccess() {
  useEffect(() => {
    deleteWish();
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
  return (
    <div>
      <img src={successful_purchase} alt="" className={SCCss.empty_cart} />
    </div>
  );
}
