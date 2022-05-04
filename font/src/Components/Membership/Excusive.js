import React from "react";
import Ecss from "./CSS/Excusive.module.css";
import Benifits from "./Benifits";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Excusive() {
  return (
    <div>
      <div className={Ecss.titlemDiv}>
        <div className={Ecss.titlemDivChild}>
          <p className={Ecss.ExclusiveMemberBenefits}>
            Exclusive Member Benefits
          </p>
          <p>
            <EmojiEventsIcon
              fontSize="large"
              className={Ecss.EmojiEventsIcon}
            />
          </p>
        </div>
      </div>
      <div className={Ecss.BenifitsRowDiv}>
        <div className={Ecss.BenifitsDiv}>
          <div className={Ecss.BenifitsTopDiv}>
            <Benifits
              title="BIG DISCOUNTS"
              content="Save big on ALL products every day. Why wait for a sale?"
            />
            <Benifits
              title="EARLY ACCESS"
              content="Get your hands on select products and designs before others do."
            />
          </div>
          <div className={Ecss.BenifitsBottomDiv}>
            <Benifits
              title="FREE DELIVERY"
              content="Our shipping charges are on us."
            />
            <Benifits
              title="PRIORITISED SHIPPING"
              content="We ship your orders before everyone else’s."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
