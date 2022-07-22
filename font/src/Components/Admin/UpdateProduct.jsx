import React, { useState, useEffect } from "react";
import PCcss from "./Css/PostContent.module.css";
import UPCss from "./Css/Update.module.css";

export default function UpdateProduct() {
  const [showProduct, setProduct] = useState({
    _id: "",
    feild: "",
    value: "",
  });
  return (
    <div className={UPCss.mDiv}>
      <input
        type="text"
        name="_id"
        id=""
        className={PCcss.ImpTag}
        placeholder="_id"
        // value={showProduct.name}
        // onChange={DataInpProduct}
      />
      <input
        type="text"
        name="field"
        id=""
        className={PCcss.ImpTag}
        placeholder="field"
        // value={showProduct.name}
        // onChange={DataInpProduct}
      />
      <input
        type="text"
        name="value"
        id=""
        className={PCcss.ImpTag}
        placeholder="value"
        // value={showProduct.name}
        // onChange={DataInpProduct}
      />
    </div>
  );
}
