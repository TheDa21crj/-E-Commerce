import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <Nav />
      <NavMobo />
      Register
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}
