import React from "react";
import ProfileCss from "./CSS/Profile.module.css";
import OrderCss from "./CSS/Orders.module.css";

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
    <div className={ProfileCss.mdiv}>
      <h1 className={ProfileCss.h1}>My Orders</h1>
      <p className={OrderCss.pTagMain}>No Orders</p>
    </div>
  );
}
