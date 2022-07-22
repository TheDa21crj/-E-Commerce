import React from "react";
import "./Css/MERCHANDISE.css";
import TSCss from "./Css/TopSelling.module.css";
import { Link } from "react-router-dom";

export default function MERCHANDISE() {
  return (
    <div className="MERCHANDISEmDiv">
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>OFFICIAL MERCHANDISE</h1>
      </div>

      <div className="slideParentDiv">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <Link to="/MERCHANDISE/dc">
                <img className="img-fluid" src={img1} alt="Second slide" />
              </Link>
            </div>
            <div className="slide">
              <Link to="/MERCHANDISE/Disney">
                <img alt="Image" src={img2} className="img-fluid" />
              </Link>
            </div>
            <div className="slide">
              <Link to="/MERCHANDISE/friends">
                <img alt="Image" src={img3} className="img-fluid" />
              </Link>
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
