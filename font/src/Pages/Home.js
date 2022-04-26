import React from "react";
import { Link } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";
import NewArrival from "./../Components/Home/NewArrival";

export default function Home() {
  return (
    <div>
      <Nav />
      <NavMobo />
      <Header />
      <NewArrival />
      Tending/TOP SELLING
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
