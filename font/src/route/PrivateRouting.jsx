import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { adduser } from "./../redux/user";

const PrivateRoute = ({ email, children }) => {
  console.log(email);
  console.log(children);

  return email !== "" ? children : <Navigate to="/login" />;
};

// const PrivateRoute = ({ children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

export default PrivateRoute;
