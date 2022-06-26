import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Gender() {
  const { gender } = useParams();

  return <div>Gender</div>;
}
