import React, { useState } from "react";
import MoBoDrop from "./MoBoDrop";
import DbmCss from "./Css/DropDownMobo.module.css";

export default function DropDownMobo(props) {
  const [showMen, setMen] = useState(false);
  return (
    <div className={DbmCss.mDiv}>
      <ul>
        <li>
          <p onClick={() => setMen(!showMen)}>Men</p>
          {showMen ? (
            <MoBoDrop
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
              li13="Joggers"
              li14="Shorts"
              li15="Pajamas"
              li16="Boxers"
              li17="Cotton Masks"
              li18="Socks"
              li19="Backpacks"
            />
          ) : (
            ""
          )}
        </li>
        <li>Women</li>
        <li>Kids</li>
        <li>New</li>
        <li>Beauty</li>
        <li>Membership</li>
      </ul>
    </div>
  );
}
