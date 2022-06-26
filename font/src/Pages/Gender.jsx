import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Nav";

export default function Gender() {
  const { gender } = useParams();

  const DataGet = async () => {
    try {
      const res = await fetch("/api/admin/Products/Gender", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataGet();
  });

  return (
    <div>
      <Nav />
      Gender
    </div>
  );
}
