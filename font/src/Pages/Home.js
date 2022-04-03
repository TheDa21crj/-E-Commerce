import React from "react";
import Nav from "./../Components/Nav";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Nav />
      Home <Link to="/admin/login"> Admin </Link>
    </div>
  );
}
