import React, { useEffect } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";

export default function Cart() {
  const CartCheck = async () => {
    try {
      // let id = "626a7ccb9b6f78c478ec8271";
      // let quantity = 20;
      const res = await fetch("/api/Wishlist/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          quantity,
        }),
      });

      const data = await res.json();
      if (data === null) {
        return console.error("errors");
      }
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CartCheck();
  }, []);
  return (
    <div>
      <Nav />
      <NavMobo />
      Cart <Footer />
    </div>
  );
}
