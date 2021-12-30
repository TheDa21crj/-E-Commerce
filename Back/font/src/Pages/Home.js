import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "../Components/Home/Slider";
import Categories from "../Components/Home/Categories";
import NewArrival from "../Components/Home/NewArrival";
import Trending from "../Components/Home/Trending";
import Footer from "../Components/Home/Footer";

export default function Home() {
  useEffect(() => {
    Aos.init({ offset: 180, duration: 1000 });
  }, []);
  return (
    <div>
      <Slider />
      <NewArrival />
      <Categories />
      <Trending />
      <Footer />
    </div>
  );
}
