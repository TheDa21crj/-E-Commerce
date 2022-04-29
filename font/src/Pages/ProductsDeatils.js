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
  const [showXXL, setXXL] = useState(false);

  const [showSelect, setSelect] = useState(1);
  const [showDetails, setDetails] = useState(false);

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

  const handleClick = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <Nav />
      <NavMobo />
      <div className={PDCss.MDiv}>
        <div className={PDCss.leftDiv}>
          <img src={showimageSrc} alt="" className={PDCss.ImageSrc} />
        </div>
        <div className={PDCss.rightDiv}>
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

            <div className={PDCss.SizeRoundDivP} onClick={() => setM(!showM)}>
              {showM ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>M</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>M</p>
                </div>
              )}
            </div>

            <div className={PDCss.SizeRoundDivP} onClick={() => setL(!showL)}>
              {showL ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>L</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>L</p>
                </div>
              )}
            </div>

            <div className={PDCss.SizeRoundDivP} onClick={() => setXL(!showXL)}>
              {showXL ? (
                <div className={PDCss.SizeRoundDivTrue}>
                  <p>XL</p>
                </div>
              ) : (
                <div className={PDCss.SizeRoundDiv}>
                  <p>XL</p>
                </div>
              )}
            </div>

            <div
              className={PDCss.SizeRoundDivP}
              onClick={() => setXXL(!showXXL)}
            >
              {showXXL ? (
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

          <div className={PDCss.QuantityDiv}>
            <p>Quantity</p>
            <select
              name=""
              id=""
              className={PDCss.QuantityINP}
              onChange={handleClick}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className={PDCss.BuyDiv}>
            <div className={PDCss.AddCART}>ADD TO CART</div>
            <div className={PDCss.AddWISHLIST}>ADD TO WISHLIST</div>
          </div>

          <div className={PDCss.DesDiv}>
            <div className={PDCss.DesHeadDiv}>
              <div
                className={PDCss.Description}
                onClick={() => setDetails(false)}
              >
                Product Description
                {showDetails ? "" : <div className={PDCss.Des}></div>}
              </div>
              <div className={PDCss.Details} onClick={() => setDetails(true)}>
                Product Details
                {showDetails ? <div className={PDCss.Des}></div> : ""}
              </div>
            </div>
            <div className={PDCss.ContentDiv}>
              {showDetails ? (
                <p>
                  <b>Est. Order Processing Time: </b>12-24 hours
                  <br />
                  <br />
                  <b>Estimated Delivery Time:</b>
                  <br />
                  Metros: 1-4 days
                  <br />
                  Rest of India: 4-7 days
                  <br />
                  <br />
                  <b>Country of Origin: </b>India (and proud)
                  <br />
                  <br />
                  <b>Manufactured & Sold By:</b>
                  <br />
                  <i>The Da's Associations</i>
                </p>
              ) : (
                <p>{showdes}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
