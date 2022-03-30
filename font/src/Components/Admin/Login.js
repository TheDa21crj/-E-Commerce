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

  return (
    <div>
      <form action="">
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
      <button>Login</button>
    </div>
  );
}
