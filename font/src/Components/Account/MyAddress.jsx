import React, { useState, useEffect } from "react";
import ProfileCss from "./CSS/Profile.module.css";
import AddCss from "./CSS/Address.module.css";
import AddIcon from "@mui/icons-material/Add";
import imgplus from "./../../Img/plus.png";
import AddAddress from "./AddAddress";
import DeleteAddress from "./DeleteAddress";

export default function MyAddress(props) {
  const [show, set] = useState();
  const [showAdd, setAdd] = useState(false);
  const [showDelete, setDelete] = useState(false);
  const [showDeleteID, setDeleteID] = useState("");

  useEffect(() => {
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

  useEffect(() => {
    if (showDelete) {
      setInterval(function () {
        setDelete(false);
      }, 5000);
    }
  }, [showDelete]);

  return (
    <div className={ProfileCss.mdiv} id={AddCss.mDiv}>
      <h1 className={ProfileCss.h1}>My Address</h1>

      <div className={AddCss.AddressRowDiv}>
        <div className={AddCss.mapPArent}>
          {show ? (
            <div className={AddCss.mapPArentDiv}>
              <div
                className={AddCss.AddAddressmDiv}
                onClick={() => setAdd(true)}
              >
                <img src={imgplus} alt="" />
                <p>ADD ADDRESS</p>
              </div>
              {show.map((value, key) => {
                return (
                  <div key={value._id} className={AddCss.AmDiv}>
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
                    <div className={AddCss.editHoverDiv}>
                      <p className={AddCss.editHoverEdit}>Edit</p>
                      <p
                        className={AddCss.editHoverDelete}
                        onClick={() => {
                          setDelete(true);
                          setDeleteID(value._id);
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {showAdd ? <AddAddress state={setAdd} /> : ""}
      {showDelete ? <DeleteAddress DeleteID={showDeleteID} /> : ""}
    </div>
  );
}
