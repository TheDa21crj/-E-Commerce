import React, { useState } from "react";
import PostContentCom from "../Components/Admin/PostContent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PCcs from "./Css/PostContent.module.css";

export default function PostContent() {
  const [change, setchange] = useState("1");
  return (
    <div>
      <div className={PCcs.headdiv}>
        <Link to="/" className={PCcs.titleNav}>
          <h1>The Da</h1>
        </Link>
        Logout
      </div>
      <h1 className={PCcs.h1WelAdmin}>Welcome Admin</h1>
      <div className={PCcs.postPDiv}>
        <p className={PCcs.postPTag}>Post New Product</p>
        <p className={PCcs.postPTag}>Update a Product</p>
        <p></p>
      </div>
      <PostContentCom />
    </div>
  );
}
