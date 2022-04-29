import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";
import { Link, useParams } from "react-router-dom";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";

export default function ProductsDeatils({ props }) {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Nav />
      <NavMobo />
      ProductsDeatils
      <Footer />
    </div>
  );
}
