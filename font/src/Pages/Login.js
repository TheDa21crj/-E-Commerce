import React, { useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import LoginCss from "./Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { toggleNav } from "./../Actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const [showUser, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { email, password } = showUser;
    console.log(email, password);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const r = await res.json();
    console.log(r);

    if (r.errors) {
      console.log("Error");
    } else if (!r.errors) {
      dispatch(toggleNav("true"));
      console.log("Login Admin");
      navigate("/my-account");
    } else {
      console.log("Unwanted Error");
    }
  };
  return (
    <div>
      <Nav />
      <NavMobo />
      Login
      <form action="" method="POST">
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          value={showUser.email}
          onChange={DataInp}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          value={showUser.password}
          onChange={DataInp}
        />
      </form>
      <button onClick={PostData}>Login</button>
      <br />
      <Link to="/register">Register</Link>
      <Footer />
    </div>
  );
}
