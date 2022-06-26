import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Nav";
// import TSCss from "./Css/TopSelling.module.css";
import TSCss from "./../Components/Home/Css/TopSelling.module.css";
import StarIcon from "@mui/icons-material/Star";

export default function Gender() {
  const [showGender, setGender] = useState();

  const { gender } = useParams();

  const DataGet = async () => {
    try {
      const res = await fetch("/api/admin/Products/Gender", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
        }),
      });

      const data = await res.json();
      setGender(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataGet();
  });

  return (
    <div>
      <Nav />
      {showGender ? (
        <div>
          {showGender.map((value, key) => {
            return (
              <Link
                to={`/products/${value._id}`}
                className="LinkStyle"
                key={value._id}
              >
                <div className={TSCss.MapMDiv}>
                  <div>
                    <img
                      src={value.imageSrc}
                      alt={value.name}
                      className={TSCss.ImgSrc}
                    />
                  </div>
                  <div className={TSCss.DetailsDiv}>
                    <p className={TSCss.Name}> {value.name} </p>
                    <p className={TSCss.Rating}>
                      <StarIcon fontSize="small" className={TSCss.StarIcon} />
                      <span> {value.rating} </span>
                    </p>
                    <p className={TSCss.price}> ₹{value.price} </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
