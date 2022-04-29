import React, { useEffect, useState } from "react";
import TSCss from "./Css/TopSelling.module.css";
import TopSellingJson from "./../../Data/TopSelling.json";
import { Link } from "react-router-dom";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";

export default function TopSelling() {
  const [showTS, setTS] = useState([]);

  var settingTS = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
  };

  const DataGet = async () => {
    try {
      const res = await fetch("/api/admin/Products/TopSelling", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (data.errors) {
        return console.log("error");
      }
      if (data) {
        setTS(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataGet();
  }, []);

  return (
    <div className={TSCss.mDiv}>
      <div className={TSCss.H1Div}>
        <h1 className={TSCss.h1}>Top Selling</h1>
      </div>
      <div className={TSCss.slideDiv}>
        <Sliders {...settingTS} className={TSCss.Hslide}>
          {showTS.map((value, key) => {
            return (
              <Link to={`/products/${value._id}`}>
                <div key={value._id} className={TSCss.MapMDiv}>
                  <div>
                    <img
                      src={value.imageSrc}
                      alt={value.name}
                      className={TSCss.ImgSrc}
                    />
                  </div>
                  <div className={TSCss.DetailsDiv}>
                    <p className={TSCss.Name}>{value.name}</p>
                    <p className={TSCss.Rating}>
                      <StarIcon fontSize="small" className={TSCss.StarIcon} />
                      <span>{value.rating}</span>
                    </p>
                    <p className={TSCss.price}>₹ {value.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Sliders>
      </div>
    </div>
  );
}
