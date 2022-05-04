import React from "react";
import TeCss from "./CSS/Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={TeCss.mDiv}>
      <p className={TeCss.TestimonialtitlePTag}>Testimonial</p>

      <div>
        slider
        <br />
        t1
        <br />
        t2
        <br />
        t3
        <br />
        ...
      </div>
    </div>
  );
}
