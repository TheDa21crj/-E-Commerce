import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

const PrivateRoute = ({ children, ...rest }) => {
  const email = useSelector((state) => state.user.email);
  return (
    <Route {...rest}>
      {email !== "" ? <Redirect to="/login"></Redirect> : children}
    </Route>
  );
};

// email !== "" ? <Outlet /> : <Navigate to="/login" />

export default PrivateRoute;
