import React, { useEffect, useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { useNavigate } from "react-router-dom";
import CartCss from "./Css/Cart.module.css";

export default function Cart() {
  const navigate = useNavigate();

  const [showData, setData] = useState("");
  const [showNumberItems, setNumberItems] = useState(0);

  const CartCheck = async () => {
    try {
      const res = await fetch("/api/Wishlist", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.errors) {
        return navigate("/login");
      }
      if (data) {
        setData(data.message);
        setNumberItems(data.message.length);
        return;
      }
    } catch (error) {
      console.log(error);
      return navigate("/login");
    }
  };

  useEffect(() => {
    CartCheck();
  }, []);
  return (
    <div>
      <Nav />
      <NavMobo />
      <div className={CartCss.mDiv}>
        <p className={CartCss.MainPTag}>
          My Wishlist ({showNumberItems} items)
        </p>
        <div className={CartCss.CardDivM}>
          {showData ? (
            <div className={CartCss.CardDivMap}>
              {showData.map((value, key) => {
                return (
                  <div key={value._id} className={CartCss.CardGridDiv}>
                    <div className={CartCss.CardImgDiv}>
                      <img
                        src={value.imgSrc}
                        alt=""
                        className={CartCss.ImgTag}
                      />
                    </div>
                    <p className={CartCss.Name}>{value.name}</p>
                    <p>₹ {value.price}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
