import React, { useEffect, useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const [showData, setData] = useState();

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
        setData(data.message.Product);
        return console.log(data.message.Product);
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
      Cart
      <div>
        {/* {showData.map((value, key) => {
          return (
            <div key={value.id}>
              <p>value.id</p>
            </div>
          );
        })} */}
      </div>
      <Footer />
    </div>
  );
}
