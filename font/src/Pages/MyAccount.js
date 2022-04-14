import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";
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
        dispatch(toggleNav("true"));
        setName(data.message.email);
        seturl(data.message.avatar);
        console.log("My Account");
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
      MyAccount
      <br />
      <p>
        email: <span> {showName}</span>
      </p>
      <img src={showUrl} alt="" />
      <Footer />
    </div>
  );
}
