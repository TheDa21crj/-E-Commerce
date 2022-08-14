import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

const PrivateRoute = () => {
  const email = useSelector((state) => state.user.email);

  return email ? <p>Hello</p> : <p>email = {email}</p>;
};

export default PrivateRoute;
