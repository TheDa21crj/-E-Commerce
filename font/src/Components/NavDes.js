import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import NavCss from "./Css/Nav.module.css";
import Wish from "./Wish.js";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// redux
import { useSelector } from "react-redux";
import { addWish } from "../redux/userSlice";
import { toggleN } from "./../redux/toggleNav";
import { useDispatch } from "react-redux";

import ImgNav1 from "./../Img/men.jpg";
import ImgNav2 from "./../Img/women.jpg";
import ImgNav3 from "./../Img/kids.jpg";

const Nav = (props) => {
  const dispatch = useDispatch();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/account", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        dispatch(toggleN({ toggle: "false" }));
        return;
      }
      if (data) {
        dispatch(toggleN({ toggle: "true" }));
      }
    } catch (error) {
      dispatch(toggleN({ toggle: "false" }));

      return;
    }
  };

  const CartCheck = async () => {
    try {
      const res = await fetch("/api/Wishlist", {
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
        dispatch(addWish({ start: data.message.length }));
        return;
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    AuthMiddleware();
    CartCheck();
  });

  const wish = useSelector((state) => state.wish.start);
  const toggle = useSelector((state) => state.toggle.toggle);

  return (
    <div className={NavCss.NavmDiv}>
      <div className={NavCss.TitleandSubtileDiv}>
        <Link to="/" className={NavCss.LinkTag}>
          <h1 className={NavCss.TitleH1}>The Da</h1>
        </Link>
        <div className={NavCss.ulDiv}>
          <ul id={NavCss.Dd}>
            <li>
              <p className={NavCss.NavListPTag}>Men</p>
              <div className={NavCss.dropDownDiv}>
                <DropDown
                  H21="TOPWEAR"
                  H22="BOTTOMWEAR"
                  H23="Accessories"
                  imgNav={ImgNav1}
                  li1="T-Shirts"
                  li2="Co-ord Sets New"
                  li3="Drop-Cut T-Shirts"
                  li4="Full Sleeve T-Shirts"
                  li5="Oversized T-Shirts New"
                  li6="Polos"
                  li7="Shirts"
                  li8="Tank Tops & Vests"
                  li9="Hoodies & Sweatshirts"
                  li10="Jackets"
                  li11="Sweaters"
                  li12="Cotton Pants New"
                  li22="Joggers"
                  li32="Shorts"
                  li42="Pajamas"
                  li52="Boxers"
                  li13="Cotton Masks"
                  li23="Socks"
                  li33="Backpacks"
                />
              </div>
            </li>
            <li>
              <p className={NavCss.NavListPTag}>Women</p>
              <div className={NavCss.dropDownDiv}>
                <DropDown
                  H21="TOPWEAR"
                  H22="BOTTOMWEAR"
                  H23="Accessories"
                  imgNav={ImgNav2}
                  li1="Women's T-Shirts"
                  li2="Dresses"
                  li3="Unisex T-Shirts"
                  li4="Shirts"
                  li5="Tank Tops"
                  li6="Shirts"
                  li7="Hoodies & Sweatshirts"
                  li8="Jackets"
                  li9="Winterwear"
                  li12="Joggers"
                  li22="Pajamas"
                  li32="All Day Pants"
                  li42="Shorts"
                  li52="Urban Leggings"
                  li13="Cotton Masks"
                  li23="Socks"
                  li33="Backpacks"
                />
              </div>
            </li>
            <li>
              <p className={NavCss.NavListPTag}>Kids</p>
              <div className={NavCss.dropDownDiv}>
                <DropDown
                  H21="TOPWEAR"
                  H22="BOTTOMWEAR"
                  H23="Accessories"
                  imgNav={ImgNav3}
                  li1="T-Shirts"
                  li2="Shirts"
                  li3="Dresses"
                  li4="Clothing Sets"
                  li5="Ethnic Wear"
                  li6="Shirts"
                  li7="Hoodies & Sweatshirts"
                  li8="Jackets"
                  li9="Winterwear"
                  li10="Jumpsuits"
                  li11="Tops"
                  li12m="Frok"
                  li12="Shorts"
                  li22="Jeans"
                  li32="Trousers"
                  li42="Skirts"
                  li52="Tights & Leggings"
                  li62="Capris"
                  li13="Bags & Backpacks"
                  li23="Watches"
                  li33="Jewellery & Hair accessory"
                  li43="Sunglasses"
                  li53="Masks & Protective Gears"
                  li63="Caps & Hats"
                  li73="Cotton Masks"
                  li83="Socks"
                  li93="Backpacks"
                />
              </div>
            </li>
            <li>
              <p className={NavCss.NavListPTag}>New</p>
            </li>
            <li>
              <p className={NavCss.NavListPTag}>Beauty</p>
            </li>
            <li>
              <Link to="/Membership" className="LinkStyle">
                <p className={NavCss.NavListPTag}>Membership</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={NavCss.IconsDiv}>
        <div className={NavCss.UserDiv}>
          <Link to="/my-account" className="LinkStyle">
            <PersonIcon fontSize="large" className={NavCss.IconsClass0} />
          </Link>
          <div className={NavCss.HoverDiv}>
            <div className={NavCss.UserHoverDiv}>
              {toggle == "true" ? (
                <Link to="/logout" className="LinkStyle">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="LinkStyle">
                  Login/Register
                </Link>
              )}
            </div>
            <div className={NavCss.arrow}></div>
          </div>
        </div>
        <ShoppingCartIcon fontSize="large" className={NavCss.IconsClass1} />
        <Link to="/wishlist" className="LinkStyle">
          <div className={NavCss.wishDiv}>
            <FavoriteBorderIcon
              fontSize="large"
              className={NavCss.IconsClass2}
            />
            <Wish value={wish} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
