import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

// const PrivateRoute = () => {
//   const email = useSelector((state) => state.user.email);
//   return email !== "" ? <Outlet /> : <Navigate to="/login" />;
// };

function PrivateRoute({ children, ...rest }) {
  const email = useSelector((state) => state.user.email);
  return (
    <Route
      {...rest}
      render={() => (email !== "" ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
