import React, { useEffect, useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";

export default function Cart() {
  const CartCheck = async () => {
    try {
      let quantity = showSelect;
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
        return;
      }
      if (data) {
        return console.log(data);
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
      Cart <Footer />
    </div>
  );
}
