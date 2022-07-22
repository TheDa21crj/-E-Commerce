import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function MerchandiseLink() {
  const { link } = useParams();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/admin/Products/MERCHANDISE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag: link,
        }),
      });

      const data = await res.json();
      if (data.errors) {
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AuthMiddleware();
  }, []);
  return (
    <div>
      MerchandiseLink
      <p>{link}</p>
    </div>
  );
}
