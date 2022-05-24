import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";
import { Link, useParams } from "react-router-dom";
import Footer from "./../Components/Footer";
import PDCss from "./Css/ProductDetails.module.css";
import SizeChart from "./../Components/Product/SizeChart";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { addWish } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export default function ProductsDeatils() {
  const wish = useSelector((state) => state.wish.start);

  const [showid, setid] = useState("");
  const [showname, setname] = useState("");
  const [showimageSrc, setimageSrc] = useState("");
  const [showdes, setdes] = useState("");
  const [showprice, setprice] = useState("");
  const [showrating, setrating] = useState("");
  const [showChat, setChart] = useState(false);
  const [check, setcheck] = useState();

  const [showS, setS] = useState(false);
  const [showM, setM] = useState(false);
  const [showL, setL] = useState(false);
  const [showXL, setXL] = useState(false);
  const [showXXL, setXXL] = useState(false);

  const [showSelect, setSelect] = useState(1);
  const [showDetails, setDetails] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    CheckWish();
  }, []);

  useEffect(() => {
    document.title = showname;
  });

  const handleClick = (e) => {
    setSelect(e.target.value);
  };

  const CartCheck = async () => {
    if (check !== "true") {
      try {
        let imgSrc = showimageSrc;
        let name = showname;
        let price = showprice;
        const res = await fetch("/api/Wishlist/add", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            name,
            imgSrc,
            price,
          }),
        });
        const data = await res.json();
        if (data === null) {
          return console.error("errors");
        }
        if (data.errors) {
          return navigate("/login");
        }
        if (data) {
          setcheck("true");
          dispatch(addWish({ length: +1 }));
          return;
        }
      } catch (error) {
        console.log(error);
        return navigate("/login");
      }
    }
  };

  const deleteWish = async (deleteID) => {
    let id = deleteID;
    if (id === "") {
      return;
    } else {
      try {
        const res = await fetch("/api/Wishlist/delete/product", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });

        await res.json();

        dispatch(addWish({ length: -1 }));
        setcheck("false");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const CheckWish = async () => {
    try {
      const res = await fetch("/api/Wishlist/check", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
        }),
      });
      const data = await res.json();
      if (data) {
        setcheck(data.message);
        return;
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <Nav />
      <div className={PDCss.MDiv}>
        <div className={PDCss.leftDiv}>
          <img src={showimageSrc} alt="" className={PDCss.ImageSrc} />
        </div>
        <div className={PDCss.rightDiv}>
          <h1 className={PDCss.PName}>{showname}</h1>
          <div className={PDCss.RowDiv}>
            <div>
              <p className={PDCss.Price}>₹ {showprice}</p>
              <p className={PDCss.PriceSub}>Price inclusive of all taxes</p>
            </div>
            <div className={PDCss.RatingDiv}>
              <p className={PDCss.Rating}>
                <StarIcon className={PDCss.StarIcon} />
                {showrating}
              </p>
            </div>
          </div>
          <div></div>
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
              onClick={() => setChart(true)}
              className={PDCss.SizeChartSpan}
            >
              Size Chart
            </span>
          </p>
          {showChat ? (
            <SizeChart name={showname} state={setChart} src={showimageSrc} />
          ) : (
            ""
          )}

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
            {check === "true" ? (
              <div
                className={PDCss.AddWISHLIST}
                onClick={() => deleteWish(showid)}
              >
                <FavoriteIcon />
              </div>
            ) : (
              <div className={PDCss.AddWISHLIST} onClick={CartCheck}>
                ADD TO WISHLIST
              </div>
            )}
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
                <p className={PDCss.desPTagTrue}>
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
