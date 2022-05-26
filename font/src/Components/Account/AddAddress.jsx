import React, { useState, useEffect } from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function AddAddress(props) {
  const [showUser, setUser] = useState({
    name: "",
    address: "",
    pinCode: "",
    town: "",
    state: "",
    country: "",
    phoneNumber: "",
  });
  // useEffect(() => {
  //   address();
  // }, []);

  const PostData = async () => {
    const { name, address, pinCode, town, state, country, phoneNumber } =
      showUser;

    const res = await fetch("/api/Address/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        pinCode,
        town,
        state,
        country,
        phoneNumber,
      }),
    });

    const r = await res.json();
    console.log(r);
  };

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
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
            onChange={DataInp}
            placeholder="Name"
          />
          <input
            type="number"
            name="pinCode"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Pin Code"
          />
          <input
            type="text"
            name="address"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Address"
          />
          <input
            type="text"
            name="town"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Town"
          />
          <input
            type="text"
            name="state"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="State"
          />
          <input
            type="text"
            name="country"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Country"
          />
          <input
            type="text"
            name="phoneNumber"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Phone Number"
          />
          <button onClick={PostData} className={AddCss.LoginBtn}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
