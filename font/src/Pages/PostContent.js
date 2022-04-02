import React, { useEffect } from "react";

export default function PostContent() {
  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const res = await fetch("/api/admin/login/post-content", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      // if(res.status === 200) {}
    } catch (error) {
      console.log(error);
    }
  };

  return <div> PostContent </div>;
}
