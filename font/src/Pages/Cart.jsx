import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartCss from "./Css/Cart.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { addWish } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showID, setID] = useState("");

  useEffect(() => {
    document.title = "My Wishlist";
  }, []);

  // useEffect(() => {
  //   var show = showID;
  //   deleteWish(show);
  // }, [showID]);

  const wish = useSelector((state) => state.wish.length);
  const data = useSelector((state) => state.wish.data);
  const _id = useSelector((state) => state.user._id);

  const deleteWish = async (deleteID) => {
    let _id = deleteID;

    console.log(_id);

    // if (_id === "") {
    //   return;
    // } else {
    //   try {
    //     const res = await fetch("/api/Wishlist/delete", {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         _id,
    //       }),
    //     });

    //     await res.json();

    //     dispatch(addWish({ length: -1 }));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <div>
      {_id !== "" ? (
        <div className={CartCss.mDiv}>
          <p className={CartCss.MainPTag}>My Wishlist({wish} items)</p>
          <div className={CartCss.CardDivM}>
            {data ? (
              <div className={CartCss.CardDivMap}>
                {data.map((value, key) => {
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
                          deleteWish(value._id);
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
      ) : (
        <div className={CartCss.mDiv}>
          <p className={CartCss.MainPTag}>My Wishlist(0 items)</p>
        </div>
      )}
    </div>
  );
}
