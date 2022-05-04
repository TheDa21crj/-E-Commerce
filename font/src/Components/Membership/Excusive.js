import React from "react";
import Ecss from "./CSS/Excusive.module.css";
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
    </div>
  );
}
