import React, { useState, useEffect } from "react";
import Nav from "./../Components/Nav";
import { Link, useParams } from "react-router-dom";
import NavMobo from "./../Components/NavMobo";
import Footer from "./../Components/Footer";
import PDCss from "ProductDetails.module.css"

export default function ProductsDeatils({ props }) {
  const [showid, setid] = useState("");
  const [showname, setname] = useState("");
  const [showimageSrc, setimageSrc] = useState("");
  const [showdes, setdes] = useState("");
  const [showprice, setprice] = useState("");
  const [showrating, setrating] = useState("");

  //   id: "",
  //   name: "",
  //   imageSrc: "",
  //   des: "",
  //   price: "",
  //   rating: "",

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
      <div className={}>
        <div>
          <img src={showimageSrc} alt="" />
        </div>
        <div></div>
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
