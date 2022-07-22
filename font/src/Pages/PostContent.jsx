import React from "react";
import PostContentCom from "../Components/Admin/PostContent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PCcss from "./Css/PostContent.module.css";

export default function PostContent() {
  return (
    <div>
      <div className={PCcss.headdiv}>
        <Link to="/" className={PCcss.titleNav}>
          <h1>The Da</h1>
        </Link>
        Logout
      </div>
      <h1 className={PCcss.h1WelAdmin}>Welcome Admin</h1>
      <PostContentCom />
    </div>
  );
}
