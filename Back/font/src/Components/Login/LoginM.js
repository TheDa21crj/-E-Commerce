import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginMCss from "./CSS/LoginM.module.css";

export default function LoginM() {
  const history = useHistory();
  let data = {
    email: "",
    password: "",
  };

  function userData(e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email, password);
  }

  const PostData = async (e) => {
    e.preventDefault();
    console.log("object");
  };
  return (
    <div className={LoginMCss.LMdiv}>
      <div className={LoginMCss.FormDiv}>
        <form action="POST">
          <div className={LoginMCss.InpDiv}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              className={LoginMCss.inpEmail}
            />
          </div>
          <div className={LoginMCss.InpDiv}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={LoginMCss.inpPassword}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
