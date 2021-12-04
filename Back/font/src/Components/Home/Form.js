import React, { useEffect } from "react";
import "./CSS/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Form() {
  useEffect(() => {
    Aos.init({ duration: 3000, offset: 120 });
  }, []);
  return (
    <div>
      <div id="f_sign" data-aos="flip-down">
        <h1>FILL THE SIGN UP FORM</h1>
        <form action="/" method="POST">
          <input type="text" name="full_name" id="" placeholder="Full Name" />
          <input
            type="date"
            name="date_of_birth"
            id=""
            placeholder="Date of Birth"
          />
          <input type="number" name="age" id="" placeholder="Age" />
          <input type="text" name="address" id="" placeholder="Address" />
          <input
            type="text"
            name="father_name"
            placeholder="Father's Name"
            id=""
          />
          <input
            type="text"
            name="mother_name"
            placeholder="Mother's Name"
            id=""
          />
          <input
            type="number"
            name="contact_number"
            placeholder="Contact Number"
            id=""
          />
          <input
            type="number"
            name="alt_contact_number"
            placeholder="Alternative Contact Number"
            id=""
          />
          <input type="email" name="e_mail" placeholder="e-mail id" id="" />
        </form>
        <button type="submit" id="btn">
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
}
