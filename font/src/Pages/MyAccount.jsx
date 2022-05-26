import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import Profile from "../Components/Account/Profile";
import MyAddress from "../Components/Account/MyAddress";
import Myorders from "../Components/Account/Myorders";
import Footer from "../Components/Footer";
import MACss from "./Css/MyAccount.module.css";
import "./Css/Product.css";
// redux
import { toggleN } from "../redux/toggleNav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MyAccount() {
  useEffect(() => {
    document.title = "My Account";
  }, []);

  const [showProfileState, setProfileState] = useState("");

  const ShowProfileState = async (e) => {
    setProfileState(e.target.innerHTML);
  };

  const _id = useSelector((state) => state.user._id);
  const email = useSelector((state) => state.user.email);
  const imgSrc = useSelector((state) => state.user.imgSrc);
  const firstName = useSelector((state) => state.user.firstName);
  const LastName = useSelector((state) => state.user.LastName);
  const gender = useSelector((state) => state.user.gender);
  const PhoneNumber = useSelector((state) => state.user.PhoneNumber);

  useEffect(() => {
    if (showProfileState === "") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [showProfileState]);

  return (
    <div>
      <Nav />
      <div className={MACss.mdiv}>
        <div className={MACss.leftDiv}>
          <img src={imgSrc} alt="" className={MACss.ImgTag} />
          <p className={MACss.PTagEmail}>
            <span> {email}</span>
          </p>
          <p className={MACss.pTags} onClick={ShowProfileState}>
            Profile
          </p>
          <p className={MACss.pTags} onClick={ShowProfileState}>
            My Orders
          </p>
          <p className={MACss.pTags} onClick={ShowProfileState}>
            My Addresses
          </p>
          <div className={MACss.LinkTagDiv}>
            <Link to="/logout" className="LinkStyle" id={MACss.LogoutLinkTag}>
              Logout
            </Link>
          </div>
        </div>
        <div
          className={MACss.rightDiv}
          id={showProfileState == "" ? "" : "showshowProfileState"}
        >
          {showProfileState === "Profile" && (
            <Profile
              email={email}
              id={_id}
              firstName={firstName}
              lastName={LastName}
              gender={gender}
              phone={PhoneNumber}
              state={setProfileState}
            />
          )}
          {showProfileState === "My Orders" && (
            <Myorders id={_id} state={setProfileState} />
          )}
          {showProfileState === "My Addresses" && (
            <MyAddress id={_id} state={setProfileState} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
