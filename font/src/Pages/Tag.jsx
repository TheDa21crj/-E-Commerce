import React from "react";
import Nav from "../Components/Nav";
import { Link, useParams } from "react-router-dom";

export default function Tag() {
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
      Tag
      <br />
      {tag}
      <br />
      {gender}
    </div>
  );
}
