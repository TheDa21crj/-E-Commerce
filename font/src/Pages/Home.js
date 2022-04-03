import React from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home <Link to="/admin/login"> Admin </Link>
    </div>
  );
}
