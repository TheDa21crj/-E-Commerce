import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Profile from "./../Components/Account/Profile";
import MyAddress from "./../Components/Account/MyAddress";
import Myorders from "./../Components/Account/Myorders";
import Footer from "./../Components/Footer";
import MACss from "./Css/MyAccount.module.css";
import { toggleNav } from "./../Actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function MyAccount() {
  const [showName, setName] = useState("");
  const [showUrl, seturl] = useState("");
  const [showProfileState, setProfileState] = useState("My Orders");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/account", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        navigate("/login");
      }
      if (data) {
        setName(data.message.email);
        seturl(data.message.avatar);
        console.log("My Account");
        dispatch(toggleNav("true"));
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    AuthMiddleware();
  }, []);

  const ShowProfileState = async (e) => {
    console.log(e.target.innerHTML);
    setProfileState(e.target.innerHTML);
  };
  return (
    <div>
      <Nav />
      <NavMobo />
      <div className={MACss.mdiv}>
        <div className={MACss.leftDiv}>
          <img src={showUrl} alt="" className={MACss.ImgTag} />
          <p className={MACss.PTagEmail}>
            <span> {showName}</span>
          </p>
          <p className={MACss.pTags} onClick={ShowProfileState}>
            Profile
          </p>
          <p className={MACss.pTags} onClick={ShowProfileState}>
            My Orders
          </p>
          <p className={MACss.pTags} onClick={ShowProfileState}>
            My Addresses
          </p>
          <div className={MACss.LinkTagDiv}>
            <Link to="/logout" className="LinkStyle" id={MACss.LogoutLinkTag}>
              Logout
            </Link>
          </div>
        </div>
        <div className={MACss.rightDiv}>
          {showProfileState === "Profile" && <Profile />}
          {showProfileState === "My Orders" && <Myorders />}
          {showProfileState === "My Addresses" && <MyAddress />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
