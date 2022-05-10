import React, { useEffect } from "react";
import Nav from "./../Components/Nav";
import Header from "./../Components/Home/Header";
import Footer from "./../Components/Footer";
import NewArrival from "./../Components/Home/NewArrival";
import TopSelling from "./../Components/Home/TopSelling";
import Loading from "./Loading";
// redux
import { useSelector } from "react-redux";
import { seeload } from "./../redux/loading";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Online Shopping for Men & Women: The Da";
    // dispatch(seeload({ start: "false" }));
  });

  const load = useSelector((state) => state.load.start);
  return (
    <div className="homeBodymDiv">
      {load == "true" ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <Header />
          <NewArrival />
          <TopSelling />
          <br />
          CATEGORIES
          <br />
          Customer reviews
          <br />
          OFFICIAL MERCHANDISE/Brands
          <br />
          <br />
          Hello world
          <Footer />
        </div>
      )}
    </div>
  );
}
