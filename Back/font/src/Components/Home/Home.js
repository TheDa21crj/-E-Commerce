import React from "react";
import "./CSS/Home.css";
import Nav from "./Nav";
import Header from "./Header";
import BgWhite from "./BgWhite";
import BgWhiteText from "./BgWhiteText";
import TypeDiv from "./TypeDiv";
import Marquee from "./Marquee";
import Form from "./Form";

import img1 from "../../Req img/landing-1-img-1-768x432.jpg";
import img2 from "../../Req img/landing-1-img-2-768x432.jpg";
import img3 from "../../Req img/landing-1-img-3.jpg";
import img4 from "../../Req img/landing-1-img-4-768x432.jpg";
import img5 from "../../Req img/landing-1-img-5-768x432.jpg";
import img6 from "../../Req img/landing-1-img-6-300x169.jpg";

export default function Home() {
  return (
    <div className="overFlow">
      <Nav />
      <Header />
      <BgWhite />
      <div className="hello">
        <TypeDiv img={img1} text="Nobody is Watching" />
        <TypeDiv img={img2} text="Ballet Home" />
      </div>
      <div className="hello">
        <TypeDiv img={img3} text="Latin dance" />
        <TypeDiv img={img4} text="Pole dance" />
      </div>
      <div className="hello">
        <TypeDiv img={img5} text="Modern dance" />
        <TypeDiv img={img6} text="Dream School" />
      </div>
      <div className="bg_whiteParent">
        <BgWhiteText />
      </div>
      <Marquee />
      <Form />
    </div>
  );
}
