import React from "react";
import Nav from "../Components/Nav";
import { Link, useParams } from "react-router-dom";

export default function ProductsCat() {
  const { tag } = useParams();

  return (
    <div>
      <Nav />
      ProductsCat
      <br />
      {tag}
    </div>
  );
}
