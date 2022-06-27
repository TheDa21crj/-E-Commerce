import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { Link, useParams } from "react-router-dom";

export default function Tag() {
  const [showGender, setGender] = useState();

  const { tag, gender } = useParams();

  const DataGet = async () => {
    try {
      const res = await fetch("/api/admin/Products/Tag", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
          tag,
        }),
      });

      const data = await res.json();
      console.log(data);
      setGender(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataGet();
  }, [gender, tag]);

  return (
    <div>
      <Nav />
    </div>
  );
}
