import React, { useEffect } from "react";

export default function PostContent() {
  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const res = fetch();
    } catch (error) {
      console.log(error);
    }
  };

  return <div>PostContent</div>;
}
