import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";
import MACss from "./Css/MyAccount.module.css";
import { toggleNav } from "./../Actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function MyAccount() {
  const [showName, setName] = useState("");
  const [showUrl, seturl] = useState("");
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
  return (
    <div>
      <Nav />
      <NavMobo />
      <div className={MACss.mdiv}>
        <div className={MACss.leftDiv}>
          <img src={showUrl} alt="" className={MACss.ImgTag} />
          <p>
            <span> {showName}</span>
          </p>
        </div>
        <div className={MACss.rightDiv}>
          <p>Your Orders</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
