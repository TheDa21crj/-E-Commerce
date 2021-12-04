import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Home/Nav";
import ErrorCss from "./CSS/Error.module.css";
import imgSad from "../../Req img/2136ef30014ba5ceffae3f4656f8f078.jpg";

export default function Error() {
  return (
    <div>
      <Nav />
      <div className={ErrorCss.mDiv}>
        <div>
          <img src={imgSad} alt="" className={ErrorCss.sadImg} />
        </div>
        <div className={ErrorCss.h1}>
          <h1>Error</h1>
          <p>404</p>
          <Link to="/" className={ErrorCss.Link}>
            Back To Home Page
          </Link>
        </div>
      </div>
      <div className={ErrorCss.message}>
        <p>The Request page is not found. </p>
        <p>Sorry</p>
      </div>
    </div>
  );
}
