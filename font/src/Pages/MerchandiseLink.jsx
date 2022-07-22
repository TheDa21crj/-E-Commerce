import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import GenCss from "./Css/Gender.module.css";
import TSCss from "./../Components/Home/Css/TopSelling.module.css";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../Components/Footer";

export default function MerchandiseLink() {
  const [showGender, setGender] = useState();

  const { link } = useParams();

  const AuthMiddleware = async () => {
    try {
      const res = await fetch("/api/admin/Products/MERCHANDISE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag: link,
        }),
      });

      const data = await res.json();
      if (data.errors) {
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AuthMiddleware();
  }, []);
  return (
    <div>
      <Nav />
      <p>{link}</p>
      <Footer />
    </div>
  );
}
