import React from "react";
import { Link } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <NavMobo />
      <Header />
      Hello world
      <Footer />
    </div>
  );
}
