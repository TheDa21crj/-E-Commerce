import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toggleNav } from "./../Actions/index";
// import { useSelector, useDispatch } from "react-redux";

export default function Logout() {
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/");
        // dispatch(toggleNav("false"));

        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div> Logout </div>;
}
