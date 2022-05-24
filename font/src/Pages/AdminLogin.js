import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCss from "./Css/AdminLogin.module.css";

export default function AdminLogin() {
  const [showUser, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { username, password } = showUser;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const r = await res.json();
    console.log(r);

    if (r.errors) {
      console.log("Error");
    } else if (!r.errors) {
      console.log("Login Admin");
      navigate("/admin/post-content");
    } else {
      console.log("Unwanted Error");
    }
  };

  return (
    <div>
      <form action="" method="POST">
        <div>
          <label htmlFor="username"> username </label>
          <input
            type="text"
            name="username"
            id=""
            placeholder="username"
            value={showUser.username}
            onChange={DataInp}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password"> password </label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            value={showUser.password}
            onChange={DataInp}
            autoComplete="off"
          />
        </div>
      </form>
      <button onClick={PostData}> Login </button>
    </div>
  );
}
