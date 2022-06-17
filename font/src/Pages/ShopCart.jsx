import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import SCCss from "./Css/ShopCart.module.css";

export default function ShopCart() {
  const [showTPrice, setTPrice] = useState();
  const [showTProducts, setTProducts] = useState();
  const [show, set] = useState();

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
          console.log("Zero = Data");
        } else {
          let TotalPrice = 0;
          data.message.forEach((e) => {
            TotalPrice += e.price;
          });
          setTPrice(TotalPrice);
          setTProducts(data.message.length);
          set(data.message);
          console.table(data.message);
          return;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div>
      <Nav />
      <p className={SCCss.MainPTag}>Shop Cart</p>
      <div className={SCCss.RoWDiv}>
        <div className={SCCss.LeftDiv}>
          {show ? (
            <div id={SCCss.checkShowDiv}>
              {show.map((value, key) => {
                return (
                  <div key={value.id} className={SCCss.MapMDiv}>
                    <div className={SCCss.MapLeftDiv}>
                      <img src={value.imageSrc} alt="" />
                    </div>
                    <div className={SCCss.MapRightDiv}>
                      <p className={SCCss.name}>{value.name}</p>
                      <p className={SCCss.Qunatity}>
                        Qunatity: {value.qunatity}
                      </p>
                      <div className={SCCss.MapRowDivBottom}>
                        <p>{value.size}</p>
                        <p>{value.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={SCCss.RightDiv}>
          <p>
            Your order qualifies for FREE Delivery. Select this option at
            checkout.
            <br />
            Details
          </p>
          <p className={SCCss.SubtotalPTag}>
            Subtotal ({showTProducts} item): {showTPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
