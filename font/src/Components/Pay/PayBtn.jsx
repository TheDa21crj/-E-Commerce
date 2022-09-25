import React from "react";
import SCCss from "./../../Pages/Css/ShopCart.module.css";
import { Link } from "react-router-dom";

export default function PayBtn(props) {
  const handleClick = async () => {
    console.log("1");
  };

  return (
    <>
      {/* <Link to="/Buy" className="LinkStyle"> */}
      <div className={SCCss.ProceedBuyDiv} onClick={handleClick}>
        Proceed to Buy
      </div>
      {/* </Link> */}
    </>
  );
}
