import React, { useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import LoginCss from "./Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import { toggleNav } from "./../Actions/index";
import { useSelector, useDispatch } from "react-redux";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showUser, setUser] = useState({ email: "", password: "" });
  const [showPassword, setPassword] = useState(false);

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
      <p className={LoginCss.LoginPTag}>Login</p>
      <form action="" method="POST" className={LoginCss.LoginFormTag}>
        <input
          type="email"
          name="email"
          id={LoginCss.email}
          placeholder="Email"
          value={showUser.email}
          onChange={DataInp}
        />
        <input
          // type="password"
          type={showPassword ? "text" : "password"}
          name="password"
          id={LoginCss.password}
          placeholder="Password"
          value={showUser.password}
          onChange={DataInp}
        />
        <RemoveRedEyeIcon
          onClick={() => {
            setPassword(!showPassword);
          }}
        />
      </form>
      <button onClick={PostData}>Login</button>
      <br />
      <Link to="/register">Register</Link>
      <Footer />
    </div>
  );
}
