import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./CSS/Home.css";

export default function Nav() {
  return (
    <div>
      <nav>
        <p id="p_t1">The</p>
        <p id="p_t2">Da</p>
        <button id="btnJoinBtn">
          <Link smooth to="#f_sign" className="Link">
            Join Now
          </Link>
        </button>
        <button id="btn_sign_in">Sign In</button>
      </nav>
    </div>
  );
}
