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
    <div className={AddCss.mDiv}>
      <div className={AddCss.ConDiv}>
        <p className={AddCss.AddAddress}>Add Address</p>
        <br />
        <CloseIcon
          onClick={() => props.state(false)}
          fontSize="large"
          className={AddCss.CloseIcon}
        />
        <div className={AddCss.inpDiv}>
          <input
            type="text"
            name="name"
            className={AddCss.impTag}
            placeholder="Name"
          />
          <input
            type="number"
            name="pinCode"
            className={AddCss.impTag}
            placeholder="Pin Code"
          />
          <input
            type="text"
            name="address"
            className={AddCss.impTag}
            placeholder="Address"
          />
          <input
            type="text"
            name="town"
            className={AddCss.impTag}
            placeholder="Town"
          />
          <input
            type="text"
            name="state"
            className={AddCss.impTag}
            placeholder="State"
          />
          <input
            type="text"
            name="country"
            className={AddCss.impTag}
            placeholder="Country"
          />
          <input
            type="text"
            name="phoneNumber"
            className={AddCss.impTag}
            placeholder="Phone Number"
          />
          <button className={AddCss.LoginBtn}>ADD</button>
        </div>
      </div>
    </div>
  );
}
