import React, { useEffect, useState } from "react";
import NACss from "./Css/NewArrival.module.css";
import { Link } from "react-router-dom";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { addselling } from "./../../redux/selling";
import { useDispatch } from "react-redux";

export default function NewArrival() {
  const dispatch = useDispatch();

  // const [showNA, setNA] = useState([]);

  var setting = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };

  const DataGet = async () => {
    try {
      const res = await fetch("/api/admin/Products/NewArival", {
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
        dispatch(addselling({ newArrival: data }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataGet();
  }, []);

  const selling = useSelector((state) => state.selling.newArrival);

  return (
    <div className={NACss.mDiv}>
      <div className={NACss.H1Div}>
        <h1 className={NACss.h1}>New Arrival</h1>
      </div>
      <div className={NACss.slideDiv}>
        <Sliders {...setting} className={NACss.Hslide}>
          {selling.map((value, key) => {
            return (
              <div key={value._id} className={NACss.SlidDiv}>
                <img
                  src={value.imageSrc}
                  alt={value.name}
                  className={NACss.ImgHeader}
                />
                <div className={NACss.ImgDivBtnDiv}>
                  <p className={NACss.ImgPTag}>{value.name}</p>

                  <Link
                    to={`/products/${value._id}`}
                    className={NACss.ShowNowATag}
                  >
                    Show Now
                  </Link>
                </div>
              </div>
            );
          })}
        </Sliders>
      </div>
    </div>
  );
}
