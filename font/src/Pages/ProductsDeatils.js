import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";
import { Link, useParams } from "react-router-dom";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import PDCss from "./Css/ProductDetails.module.css";
import SizeChart from "./../Components/Product/SizeChart";

export default function ProductsDeatils() {
  const [showid, setid] = useState("");
  const [showname, setname] = useState("");
  const [showimageSrc, setimageSrc] = useState("");
  const [showdes, setdes] = useState("");
  const [showprice, setprice] = useState("");
  const [showrating, setrating] = useState("");
  const [showChat, setChart] = useState(false);

  const [showS, setS] = useState(false);
  const [showM, setM] = useState(false);
  const [showL, setL] = useState(false);
  const [showXL, setXL] = useState(false);
  const [showXXl, setXXl] = useState(false);

  const { id } = useParams();

  const ProductData = async () => {
    try {
      const res = await fetch(`/api/admin/Products/${id}`, {
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
        setid(data[0]._id);
        setname(data[0].name);
        setimageSrc(data[0].imageSrc);
        setdes(data[0].des);
        setprice(data[0].price);
        setrating(data[0].rating);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ProductData();
  }, []);

  return (
    <div>
      <Nav />
      <NavMobo />
      <div className={PDCss.MDiv}>
        <div>
          <img src={showimageSrc} alt="" className={PDCss.ImageSrc} />
        </div>
        <div>
          <h1 className={PDCss.PName}>{showname}</h1>
          <p className={PDCss.Price}>₹ {showprice}</p>
          <p className={PDCss.PriceSub}>Price inclusive of all taxes</p>
          <div className={PDCss.SizeMDiv}>
            <div className={PDCss.SizeRoundDivP} onClick={() => setS(!showS)}>
              {showS ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>S</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>S</p>
                </div>
              )}
            </div>

            <div className={PDCss.SizeRoundDivP} onClick={() => setS(!showS)}>
              {showS ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>M</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>M</p>
                </div>
              )}
            </div>

            <div className={PDCss.SizeRoundDivP} onClick={() => setS(!showS)}>
              {showS ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>L</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>L</p>
                </div>
              )}
            </div>

            <div className={PDCss.SizeRoundDivP} onClick={() => setS(!showS)}>
              {showS ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>XL</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>XL</p>
                </div>
              )}
            </div>

            <div className={PDCss.SizeRoundDivP} onClick={() => setS(!showS)}>
              {showS ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>XXL</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>XXL</p>
                </div>
              )}
            </div>
          </div>
          <p className={PDCss.SizeChart}>
            Need Some Guide for selecting the size?{" "}
            <span
              onClick={() => setChart(!showChat)}
              className={PDCss.SizeChartSpan}
            >
              Size Chart
            </span>
          </p>
          {showChat ? <SizeChart /> : ""}
        </div>
      </div>
      {/* <p>ID:{showid}</p> */}
      {/* <p>Name:{showname}</p> */}
      {/* <img src={showimageSrc} alt="" /> */}
      {/* <p>Description:{showdes}</p> */}
      {/* <p>Price:{showprice}</p> */}
      {/* <p>Rating:{showrating}</p> */}
      <Footer />
    </div>
  );
}
