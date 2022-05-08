import React, { useState } from "react";
import Nav from "./../Components/Nav";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import LoginCss from "./Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import img from "./../Img/sign.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const [showUser, setUser] = useState({ email: "", password: "" });
  const [showPassword, setPassword] = useState(false);

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { email, password } = showUser;
    console.log(email, password);

    const res = await fetch("/api/register", {
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
      console.log("Registered");
      navigate("/login");
    } else {
      console.log("Unwanted Error");
    }
  };

  return (
    <div>
      <Nav />
      <div className={LoginCss.contentMDiv}>
        <div className={LoginCss.Div}>
          <div className={LoginCss.LeftDiv}>
            <p className={LoginCss.LoginPTag}>Register</p>
            <form action="" method="POST" className={LoginCss.LoginFormTag}>
              <input
                type="email"
                name="email"
                id={LoginCss.email}
                placeholder="Email"
                value={showUser.email}
                onChange={DataInp}
              />
              <div className={LoginCss.passwordDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id={LoginCss.password}
                  placeholder="Enter Your Password"
                  value={showUser.password}
                  onChange={DataInp}
                />
                <div
                  id={LoginCss.ShowPasswordDiv}
                  onClick={() => {
                    setPassword(!showPassword);
                  }}
                >
                  {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </form>
            <button onClick={PostData}>Register</button>
            <br />
            <Link to="/login">Login</Link>
          </div>
          <div className={LoginCss.RightDiv}>
            <img src={img} alt="" className={LoginCss.ImgLogin} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
