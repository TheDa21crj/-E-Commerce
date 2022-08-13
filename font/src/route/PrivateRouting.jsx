import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser } from "./../redux/user";

// const PrivateRoute = () => {
// const email = useSelector((state) => state.user.email);
//   return email !== "" ? <Outlet /> : <Navigate to="/login" />;
// };

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // const auth = null; // determine if authorized, from context or however you're doing it
  const email = useSelector((state) => state.user.email);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return email ? <p>Hello</p> : <p>email = {email}</p>;
};

// function PrivateRoute({ children, ...rest }) {
//   const email = useSelector((state) => state.user.email);
//   return (
//     <Route
//       {...rest}
//       render={() =>
//         email !== "" ? console.log(children) : <Navigate to="/login" />
//       }
//     />
//   );
// }

export default PrivateRoute;
