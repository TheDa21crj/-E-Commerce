import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

export default function PrivateRouting({ component: Component, ...rest }) {
  const email = useSelector((state) => state.user.email);

  return (
    <Route
      {...rest}
      render={email !== "" ? <Component /> : <Redirect to="/login" />}
    />
  );
}
