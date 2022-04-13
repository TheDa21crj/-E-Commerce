import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Nav />
      <NavMobo />
      Login
      <Link to="/register">Register</Link>
    </div>
  );
}
