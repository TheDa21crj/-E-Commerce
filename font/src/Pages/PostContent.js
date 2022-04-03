import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PostContent() {
  const navigate = useNavigate();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/admin/post", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        navigate("/");
      }
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    AuthMiddleware();
  }, []);
  return <div>PostContent</div>;
}
