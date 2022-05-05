import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";
import NewArrival from "./../Components/Home/NewArrival";
import TopSelling from "./../Components/Home/TopSelling";

export default function Home() {
  useEffect(() => {
    document.title = "Online Shopping for Men & Women: The Da";
  });
  return (
    <div>
      <Nav />
      <NavMobo />
      <Header />
      <NewArrival />
      <TopSelling />
      <br />
      CATEGORIES
      <br />
      Customer reviews
      <br />
      OFFICIAL MERCHANDISE/Brands
      <br />
      <br />
      Hello world
      <Footer />
    </div>
  );
}
