import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";

export default function Home() {
  return (
    <div className="BodyDiv">
      <Nav />
      <NavMobo />
      <Header />
      Hello world
    </div>
  );
}
