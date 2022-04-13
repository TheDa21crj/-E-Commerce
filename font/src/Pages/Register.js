import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import RegCss from "./Css/Register.module.css";

export default function Register() {
  return (
    <div>
      <Nav />
      <NavMobo />
      Register
      <form action="" method="POST">
        <input type="email" name="email" id="" placeholder="Email" />
        <input type="password" name="password" id="" placeholder="Password" />
      </form>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}
