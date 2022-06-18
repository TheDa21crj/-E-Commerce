import React from "react";
import "./Css/MERCHANDISE.css";

// img
import img1 from "./../../Img/MERCHANDISE/DC.webp";
import img2 from "./../../Img/MERCHANDISE/Disney.webp";
import img3 from "./../../Img/MERCHANDISE/friends.webp";
import img4 from "./../../Img/MERCHANDISE/HarryPotter.webp";
import img5 from "./../../Img/MERCHANDISE/himym.jpeg";
import img6 from "./../../Img/MERCHANDISE/LooneyTunes.webp";
import img7 from "./../../Img/MERCHANDISE/lucifer.jpg";
import img8 from "./../../Img/MERCHANDISE/Marvel_Logo.webp";
import img9 from "./../../Img/MERCHANDISE/StarWars.webp";
import img10 from "./../../Img/MERCHANDISE/web-icon.webp";

export default function MERCHANDISE() {
  return (
    <div>
      <div className="slideParentDiv">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img className="img-fluid" src={img1} alt="Second slide" />
            </div>
            <div className="slide">
              <img alt="Image" src={img2} className="img-fluid" />
            </div>
            <div className="slide">
              <img alt="Image" src={img3} className="img-fluid" />
            </div>
            <div className="slide">
              <img alt="Image" src={img4} className="img-fluid" />
            </div>
            <div className="slide">
              <img alt="Image" src={img5} className="img-fluid" />
            </div>
            <div className="slide">
              <img alt="Image" src={img6} className="img-fluid" />
            </div>
            <div className="slide">
              <img alt="Image " src={img7} className="img-fluid " />
            </div>
            <div className="slide">
              <img alt="Image " src={img8} className="img-fluid " />
            </div>
            <div className="slide">
              <img alt="Image " src={img9} className="img-fluid " />
            </div>
            <div className="slide">
              <img alt="Image " src={img10} className="img-fluid " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
