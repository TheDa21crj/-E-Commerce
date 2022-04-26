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
      Hello world
      <Footer />
    </div>
  );
}
