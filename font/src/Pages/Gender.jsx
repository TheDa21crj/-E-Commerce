import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import TSCss from "./../Components/Home/Css/TopSelling.module.css";
import StarIcon from "@mui/icons-material/Star";
import GenCss from "./Css/Gender.module.css";
import Footer from "../Components/Footer";

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DataGet();
  }, [gender]);

  const changeSort = async (e) => {
    if (e.target.value === "low") {
      const sort = [...showGender].sort((a, b) => (a.price > b.price ? 1 : -1));
      setGender(sort);
    } else if (e.target.value === "high") {
      const sort = [...showGender].sort((a, b) => (a.price < b.price ? 1 : -1));
      setGender(sort);
    } else if (e.target.value === "feature") {
      const sort = [...showGender].sort((a, b) => (a.date > b.date ? 1 : -1));
      setGender(sort);
    }
  };

  return (
    <div>
      <Nav />
      <div className={GenCss.mDiv}>
        <div className={GenCss.SelectDiv}>
          <select
            name="sort"
            id=""
            className={GenCss.selectTag}
            onChange={changeSort}
          >
            <option value="feature">Featured</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
        {showGender ? (
          <div className={GenCss.MapPDiv}>
            {showGender.map((value, key) => {
              return (
                <div key={value._id} className={GenCss.MapMDiv}>
                  <Link to={`/products/${value._id}`} className="LinkStyle">
                    <div>
                      <img
                        src={value.imageSrc}
                        alt={value.name}
                        className={GenCss.ImgSrc}
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
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}