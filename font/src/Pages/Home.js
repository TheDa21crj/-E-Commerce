import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";

export default function Home() {
  return (
    <div className="BodyDiv">
      <Nav />
      <NavMobo />
      <Header />
      Hello world
      <Footer />
    </div>
  );
}
