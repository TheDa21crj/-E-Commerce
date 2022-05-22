import React, { useEffect, useState } from "react";
import Nav from "./../Components/Nav";
import Footer from "./../Components/Footer";
import { useNavigate } from "react-router-dom";
import CartCss from "./Css/Cart.module.css";
import { Link, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function Cart() {
  const navigate = useNavigate();

  const [showData, setData] = useState("");
  const [showNumberItems, setNumberItems] = useState(0);
  const [showID, setID] = useState("");
  // const [DelImg, setDelImg] = useState("");

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
        console.log(data.message);
        if (data.message == "zero") {
          setData();
          setNumberItems(0);
          return;
        } else {
          setData(data.message);
          setNumberItems(data.message.length);
          return;
        }
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
      return;
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
        // setDelImg(!DelImg);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Nav />
      {showNumberItems == 0 ? (
        <div className={CartCss.mDiv}>
          <p className={CartCss.MainPTag}>My Wishlist(0 items)</p>
        </div>
      ) : (
        <div className={CartCss.mDiv}>
          <p className={CartCss.MainPTag}>
            My Wishlist({showNumberItems} items)
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
                        <p className={CartCss.Name}> {value.name} </p>
                        <p className={CartCss.Price}> ₹{value.price} </p>
                      </Link>
                      <CloseIcon
                        className={CartCss.CloseIcon}
                        fontSize="small"
                        onClick={() => {
                          setID(value._id);
                          // setDelImg(value._id);
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
      )}

      <Footer />
    </div>
  );
}
