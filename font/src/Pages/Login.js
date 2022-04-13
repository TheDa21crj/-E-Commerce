import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import LoginCss from "./Css/Login.module.css";

export default function Login() {
  return (
    <div>
      <Nav />
      <NavMobo />
      Login
      <form action="" method="POST">
        <input type="email" name="email" id="" placeholder="Email" />
        <input type="password" name="password" id="" placeholder="Password" />
      </form>
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
}
