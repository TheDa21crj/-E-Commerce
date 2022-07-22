import React from "react";
import PostContentCom from "../Components/Admin/PostContent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PostContent() {
  return (
    <div>
      <div className={PCcss.headdiv}>
        <Link to="/" className={PCcss.titleNav}>
          <h1>The Da</h1>
        </Link>
        Logout
      </div>
    </div>
  );
}
