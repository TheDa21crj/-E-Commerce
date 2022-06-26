import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Nav";

export default function Gender() {
  const [showGender, setGender] = useState();

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
      setGender(data);
      //   console.log(data);
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
      {showGender ? (
        <div>
          {showGender.map((value, key) => {
            return (
              <Link
                to={`/products/${value._id}`}
                className="LinkStyle"
                key={value._id}
              >
                <div>{value.name}</div>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
