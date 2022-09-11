import React, { useState } from "react";
import AddCss from "./CSS/Add.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "./Alert";

export default function Update(props) {
  const [showUser, setUser] = useState({
    firstName: "",
    LastName: "",
    gender: "",
    PhoneNumber: "",
    dob: "",
  });

  const [showMsg, setMsg] = useState("");

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { firstName, LastName, gender, PhoneNumber, dob } = showUser;

    if (PhoneNumber.length >= 10 && PhoneNumber.length <= 12) {
      console.log(showUser);
      setMsg("");
    } else {
      setMsg("Enter a valid Phone Number");
    }
  };

  const changeSort = async () => {
    console.log(e.target.value);
  };

  return (
    <div className={AddCss.mDiv}>
      <div className={AddCss.ConDiv}>
        <p className={AddCss.AddAddress}>Update</p>
        <br />
        <CloseIcon
          onClick={() => props.state(false)}
          fontSize="large"
          className={AddCss.CloseIcon}
        />
        <div className={AddCss.inpDiv}>
          <input
            type="text"
            name="firstName"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="First Name"
          />
          <input
            type="text"
            name="LastName"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Last Name"
          />
          <select name="gender" className={AddCss.impTag} onChange={changeSort}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="number"
            name="PhoneNumber"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Phone Number"
          />
          <input
            type="date"
            name="dob"
            className={AddCss.impTag}
            onChange={DataInp}
            placeholder="Date of Birth"
          />
          <button onClick={PostData} className={AddCss.LoginBtn}>
            ADD
          </button>
        </div>
      </div>
      {showMsg !== "" ? <Alert msg={showMsg} /> : ""}
    </div>
  );
}
