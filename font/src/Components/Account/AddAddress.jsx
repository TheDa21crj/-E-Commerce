import React, { useState, useEffect } from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function AddAddress(props) {
  useEffect(() => {
    address();
  }, []);

  const address = async () => {
    // const { name, address, pinCode, town, state, country, phoneNumber } =
    // showUser;
    const res = await fetch("/api/Address/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "rishav",
        address: "st-70,qt-2a",
        pinCode: "703330",
        town: "crj",
        state: "wb",
        country: "india",
        phoneNumber: "9939197376",
      }),
    });

    const r = await res.json();
    console.log(r);
  };

  return (
    <div>
      AddAddress
      <br />
      <CloseIcon onClick={() => props.state(false)} />
    </div>
  );
}
