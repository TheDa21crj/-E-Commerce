import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showUser, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  let username, password;
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
    if (r.status === 200) {
      console.log("Login Admin");
    }
  };

  return (
    <div>
      <form action="" method="POST">
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          value={showUser.username}
          onChange={DataInp}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          value={showUser.password}
          onChange={DataInp}
        />
      </form>
      <button onClick={PostData}>Login</button>
    </div>
  );
}
