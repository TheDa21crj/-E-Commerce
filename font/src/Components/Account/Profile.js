import React, { useState, useEffect } from "react";
import ProfileCss from "./CSS/Profile.module.css";

export default function Profile(props) {
  return (
    <div>
      <h1 className={ProfileCss.h1}>Profile</h1>
      <div className={ProfileCss.conMDiv}>
        <div className={ProfileCss.EmailDiv}>
          <p>Email ID:</p>
          <input
            type="email"
            className={ProfileCss.impEmail}
            name=""
            id=""
            readonly="readonly"
            disabled="disabled"
            value={props.email}
          />
        </div>
        {/* id:{props.id} */}
        <div className={ProfileCss.FormDiv}>
          <p>General Information</p>
          <form action="" method="POST" className={ProfileCss.FormTag}>
            <div>
              <div className={ProfileCss.LabelDivTag1}>
                <label htmlFor="firstName" className={ProfileCss.LabelTag1}>
                  First Name:{" "}
                </label>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  value={props.firstName}
                  className={ProfileCss.NameInp}
                />
              </div>
              <div className={ProfileCss.LabelDivTag2}>
                <label htmlFor="lastName">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  id=""
                  value={props.lastName}
                  className={ProfileCss.NameInp}
                />
              </div>
            </div>
            <div>
              <div>
                <p>Gender</p>
                <div>
                  {props.gender == "Male" ? (
                    <input type="radio" name="" id="" checked />
                  ) : (
                    <input type="radio" name="" id="" />
                  )}
                  <label htmlFor="Male">Male</label>
                </div>
                <div>
                  {props.gender == "Female" ? (
                    <input type="radio" name="" id="" checked />
                  ) : (
                    <input type="radio" name="" id="" />
                  )}
                  <label htmlFor="Female">Female</label>
                </div>
                <div>
                  {props.gender == "Other" ? (
                    <input type="radio" name="" id="" checked />
                  ) : (
                    <input type="radio" name="" id="" />
                  )}
                  <label htmlFor="Other">Other</label>
                </div>
              </div>
              <div>
                <label htmlFor="PhoneNumber">Mobile Number: </label>
                <input type="number" name="" id="" value={props.phone} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
