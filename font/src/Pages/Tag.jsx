import React from "react";
import Nav from "../Components/Nav";
import { Link, useParams } from "react-router-dom";

export default function Tag() {
  const { tag, gender } = useParams();

  return (
    <div>
      <Nav />
      Tag
      <br />
      {tag}
      <br />
      {gender}
    </div>
  );
}
