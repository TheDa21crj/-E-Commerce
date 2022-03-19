import React from "react";
import NavCss from "./Css/Nav.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIconE from "@mui/icons-material/FavoriteBorder";
import FavoriteBorderIconF from "@mui/icons-material/FavoriteBorder";

export default function Nav() {
  return (
    <div className={NavCss.NavmDiv}>
      <div className={NavCss.TitleandSubtileDiv}>
        <h1>The Da</h1>
        <div className={NavCss.ulDiv}>
          <ul id={NavCss.Dd}>
            <li>
              Men
              {/* <div className="dropDownDiv">
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
            </div> */}
            </li>
            <li>
              Women
              {/* <div className="dropDownDiv">
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
            </div> */}
            </li>
            <li>
              Kids
              {/* <div className="dropDownDiv">
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
            </div> */}
            </li>
            <li>New</li>
            <li>Beauty</li>
            <li>Membership</li>
          </ul>
        </div>
      </div>
      <div>
        <PersonIcon fontSize="large" />
        <ShoppingCartIcon fontSize="large" />
        <FavoriteBorderIconE fontSize="large" />
      </div>
    </div>
  );
}
