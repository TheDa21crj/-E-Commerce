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
        return console.log(data.message);
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
      <p>My Wishlist ({showNumberItems} items)</p>
      <div>
        {showData ? (
          <div>
            {showData.map((value, key) => {
              return (
                <div key={value._id}>
                  <div>
                    <img src={value.imgSrc} alt="" className={CartCss.ImgTag} />
                  </div>
                  <p>{value.name}</p>
                  <p>₹ {value.price}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}
