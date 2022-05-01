import React, { useEffect } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";

export default function Cart() {
  // useEffect(() => {
  //   CartCheck();
  // }, []);
  return (
    <div>
      <Nav />
      <NavMobo />
      Cart <Footer />
    </div>
  );
}
