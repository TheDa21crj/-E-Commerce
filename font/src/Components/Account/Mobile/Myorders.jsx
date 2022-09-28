import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";
import OrderCss from "./../CSS/Orders.module.css";

export default function Myorders(props) {
  const [showData, setData] = useState([]);

  useEffect(() => {
    seeOrders();
  }, []);

  const seeOrders = async (e) => {
    try {
      const res = await fetch("/api/Order", {
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
        setData(data);
      }
    } catch (error) {
      return;
    }
  };
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => props.state("")}
        />
      </div>
      <p className={Common.MyPTag}>My Orders</p>
      {showData ? (
        <div className={OrderCss.showCheckDiv}>
          {showData.map((value, key) => {
            return (
              <div className={OrderCss.mapMDiv}>
                <img src={value.imageSrc} alt="" className={OrderCss.imgSrc} />
                <p>{value.name}</p>
                <p>{value.price}</p>
                <p>{value.size}</p>
                <p>{value.qunatity}</p>
                <br />
                <br />
                <br />
                <p>========END========</p>
                <br />
                <br />
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <p className={OrderCss.pTagMain}>No Orders</p>
      )}
    </div>
  );
}
