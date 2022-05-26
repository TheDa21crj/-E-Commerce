import React, { useState, useEffect } from "react";
import ProfileCss from "./CSS/Profile.module.css";
import AddCss from "./CSS/Address.module.css";
import AddIcon from "@mui/icons-material/Add";
import imgplus from "./../../Img/plus.png";

export default function MyAddress(props) {
  const [show, set] = useState();

  useEffect(() => {
    address();
    seeAddress();
  }, []);

  const seeAddress = async () => {
    try {
      const res = await fetch("/api/Address", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.errors) {
        return;
      }
      if (data) {
        if (data.message == "zero") {
          return;
        } else {
          set(data.message);
          console.table(data.message);
        }
      }
    } catch (error) {
      return;
    }
  };

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
        pinCode: "815354",
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
    <div className={ProfileCss.mdiv} id={AddCss.mDiv}>
      <h1 className={ProfileCss.h1}>My Address</h1>

      <div className={AddCss.AddressRowDiv}>
        <div className={AddCss.AddressmDiv}>
          <div className={AddCss.AddAddressmDiv}>
            <img src={imgplus} alt="" />
            <p>ADD ADDRESS</p>
          </div>
        </div>
        <div className={AddCss.AmDiv}>
          {show ? (
            <div>
              {show.map((value, key) => {
                return (
                  <div key={value._id}>
                    <p>
                      <b>name:</b> {value.name}
                    </p>
                    <p>
                      <b>address:</b> {value.address}
                    </p>
                    <p>
                      <b>pin Code:</b> {value.pinCode}
                    </p>
                    <p>
                      <b>Town:</b> {value.town}
                    </p>
                    <p>
                      <b>State:</b> {value.state}
                    </p>
                    <p>
                      <b>Country:</b> {value.country}
                    </p>
                    <p>
                      <b>Phone Number:</b> {value.phoneNumber}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
