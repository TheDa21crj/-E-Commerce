import React, { useState } from "react";
import MoBoDrop from "./MoBoDrop";
import DbmCss from "./Css/DropDownMobo.module.css";

export default function DropDownMobo(props) {
  const [showMen, setMen] = useState(false);
  const [showWoMen, setWoMen] = useState(false);
  return (
    <div className={DbmCss.mDiv}>
      <ul>
        <li>
          <p onClick={() => setMen(!showMen)}>Men</p>
          {showMen ? (
            <MoBoDrop
              h21="TOPWEAR"
              h22="BOTTOMWEAR"
              h23="Accessories"
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
          ) : (
            ""
          )}
        </li>
        <li>
          <p onClick={() => setMen(!setWoMen)}>Women</p>
          {showWoMen ? (
            <MoBoDrop
              h21="TOPWEAR"
              h22="BOTTOMWEAR"
              h23="Accessories"
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
          ) : (
            ""
          )}
        </li>
        <li>Kids</li>
        <li>New</li>
        <li>Beauty</li>
        <li>Membership</li>
      </ul>
    </div>
  );
}
