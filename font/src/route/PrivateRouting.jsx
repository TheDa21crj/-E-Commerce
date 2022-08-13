import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

const PrivateRoute = () => {
  const email = useSelector((state) => state.user.email);
  return email !== "" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={() => auth
//         ? children
//         : <Redirect to="/login" />
//       }
//     />
//   );
// }
