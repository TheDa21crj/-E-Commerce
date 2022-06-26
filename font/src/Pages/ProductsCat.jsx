import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductsCat() {
  const { tag } = useParams();

  return (
    <div>
      ProductsCat
      <br />
      {tag}
    </div>
  );
}
