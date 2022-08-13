import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

const PrivateRoute = ({ children }) => {
  const email = useSelector((state) => state.user.email);
  return email !== "" ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
