import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import Loading from "./../../../Img/loading.gif";
import ProfileCss from "./../CSS/Profile.module.css";
import AddCss from "./../CSS/Address.module.css";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function MyAddress(props) {
  const [showload, setload] = useState(true);
  const [show, set] = useState();
  const [showAdd, setAdd] = useState(false);
  const [showDelete, setDelete] = useState(false);
  const [showDeleteID, setDeleteID] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    seeAddress();
  }, []);

  useEffect(() => {
    seeAddress();
  }, [showAdd]);

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
        if (data.message === "zero") {
          setload(false);
          return;
        } else {
          setload(false);
          set(data.message);
          dispatch({ address: data.message });
        }
      }
    } catch (error) {
      return;
    }
  };

  return (
    <>
      {showload ? (
        <div className={ProfileCss.LadingDiv}>
          <img src={Loading} alt="" />
        </div>
      ) : (
        <div className={Common.mdiv}>
          <div>
            <KeyboardBackspaceIcon
              fontSize="large"
              onClick={() => props.state("")}
            />
          </div>
          <p className={Common.MyPTag}>My Address</p>
          <div className={AddCss.AddressRowDiv}>
            <div className={AddCss.mapPArent}>{}</div>
          </div>
        </div>
      )}
    </>
  );
}
