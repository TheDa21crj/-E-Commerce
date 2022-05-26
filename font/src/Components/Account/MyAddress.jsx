import React, { useEffect } from "react";
import ProfileCss from "./CSS/Profile.module.css";
import AddCss from "./CSS/Address.module.css";
import AddIcon from "@mui/icons-material/Add";
import imgplus from "./../../Img/plus.png";

export default function MyAddress(props) {
  // useEffect(() => {
  //   address();
  // }, []);

  // const address = async () => {
  // const { name, address, pinCode, town, state, country, phoneNumber } =
  //   showUser;
  // const res = await fetch("/api/Address/add", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "rishav",
  //     address: "st-70,qt-2a",
  //     pinCode: "815354",
  //     town: "crj",
  //     state: "wb",
  //     country: "india",
  //     phoneNumber: "9939197376",
  //   }),
  // });

  //   const r = await res.json();
  //   console.log(r);
  // };

  return (
    <div className={ProfileCss.mdiv}>
      <h1 className={ProfileCss.h1}>My Address</h1>

      <div className={AddCss.AddressmDiv}>
        <div className={AddCss.AddAddressmDiv}>
          <img src={imgplus} alt="" />
          <p>ADD ADDRESS</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
