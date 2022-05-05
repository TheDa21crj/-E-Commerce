import React, { useEffect, useState } from "react";
import Nav from "./../Components/Nav";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import { useNavigate } from "react-router-dom";
import CartCss from "./Css/Cart.module.css";
import { Link, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { incWish } from "./../Actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showData, setData] = useState("");
  const [showNumberItems, setNumberItems] = useState(0);
  const [showID, setID] = useState("");

  const CartCheck = async () => {
    try {
      const res = await fetch("/api/Wishlist", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.errors) {
        return navigate("/login");
      }
      if (data) {
        setData(data.message);
        setNumberItems(data.message.length);
        return;
      }
    } catch (error) {
      console.log(error);
      return navigate("/login");
    }
  };

  useEffect(() => {
    document.title = "My Wishlist";
    CartCheck();
  }, []);

  useEffect(() => {
    var show = showID;
    deleteWish(show);
  }, [showID]);

  const deleteWish = async (deleteID) => {
    let _id = deleteID;
    if (_id === "") {
      console.log("_id-null");
    } else {
      try {
        const res = await fetch("/api/Wishlist/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id,
          }),
        });

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Nav />
      <NavMobo />
      <div className={CartCss.mDiv} onClick={() => dispatch(incWish(4))}>
        <p className={CartCss.MainPTag}>
          My Wishlist ({showNumberItems} items)
        </p>
        <div className={CartCss.CardDivM}>
          {showData ? (
            <div className={CartCss.CardDivMap}>
              {showData.map((value, key) => {
                return (
                  <div key={value._id} className={CartCss.CardGridDiv}>
                    <Link to={`/products/${value.id}`} className="LinkStyle">
                      <div className={CartCss.CardImgDiv}>
                        <img
                          src={value.imgSrc}
                          alt=""
                          className={CartCss.ImgTag}
                        />
                      </div>
                      <p className={CartCss.Name}>{value.name}</p>
                      <p className={CartCss.Price}>₹ {value.price}</p>
                    </Link>
                    <CloseIcon
                      className={CartCss.CloseIcon}
                      fontSize="small"
                      onClick={() => {
                        setID(value._id);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
