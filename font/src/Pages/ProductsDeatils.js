import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";

export default function ProductsDeatils(props) {
  useEffect(() => {
    const id = props.params.id;
    console.log(id);
  });
  return (
    <div>
      <Nav />
      <NavMobo />
      ProductsDeatils
      <Footer />
    </div>
  );
}
