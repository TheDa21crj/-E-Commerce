import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import LoginCss from "./Css/Login.module.css";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// redux
import { toggleN } from "./../redux/toggleNav";
import { useDispatch } from "react-redux";

const Login = (props) => {
  useEffect(() => {
    document.title = "Login: The Da";
  });

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

    if (r.errors) {
      console.log("Error");
    } else if (!r.errors) {
      dispatch(toggleN({ toggle: "true" }));
      navigate("/my-account");
    } else {
      console.log("Unwanted Error");
    }
  };

  return (
    <div className={LoginCss.LoginMDiv}>
      <Nav />
      <div className={LoginCss.contentMDiv}>
        <div className={LoginCss.Div}>
          <div>
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
              <div className={LoginCss.passwordDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id={LoginCss.password}
                  placeholder="Password"
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
            <div className={LoginCss.LoginDivBTN}>
              <button onClick={PostData} className={LoginCss.LoginBtn}>
                Login
              </button>
            </div>
            <br />
            <p className={LoginCss.AlreadyPTag}>
              Already have a Account? <Link to="/register">Register</Link>
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
