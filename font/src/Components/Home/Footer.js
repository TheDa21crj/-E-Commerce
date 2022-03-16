import React from "react";
import FCss from "./CSS/Footer.module.css";
import LogoImg from "./../../Img/Logo/logo.png";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <div className={FCss.FmDiv}>
      <img src={LogoImg} alt="" />
      <div className={FCss.ulList}>
        <ul>
          <h4 className={FCss.textTi}>Get to Know Us</h4>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Gift a Smile</li>
        </ul>
        <ul>
          <h4 className={FCss.textTi}>NEED HELP</h4>
          <li>Track Order</li>
          <li>Returns & Refunds</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
        <ul className={FCss.socialul}>
          <h4 className={FCss.textTi}>Connect with Us:-</h4>
          <div className={FCss.socialIcons}>
            <li className={FCss.socialFace}>
              <FacebookIcon fontSize="large" />
            </li>
            <li className={FCss.socialTwi}>
              <TwitterIcon fontSize="large" />
            </li>
            <li className={FCss.socialIns}>
              <InstagramIcon fontSize="large" />
            </li>
          </div>
        </ul>
      </div>
      <p className={FCss.Copyright}>Copyright © 2021-2022</p>
    </div>
  );
}
