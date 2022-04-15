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

      const res1 = await fetch("/auth/accountGooge", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data0 = await res.json();
      const data1 = await res1.json();
      if (data0.errors || data1.errors) {
        navigate("/login");
      }
      if (data0) {
        setName(data0.message.email);
        seturl(data0.message.avatar);
        console.log("My Account");
        dispatch(toggleNav("true"));
        return;
      } else if (data1) {
        setName(data1.message.email);
        seturl(data1.message.avatar);
        console.log("My Account");
        dispatch(toggleNav("true"));
        return;
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
