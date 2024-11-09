import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Testinominal from "../components/Testinominal";
import Footer from "../components/Footer";
import AllProduct from "../components/AllProduct/AllProduct";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <AllProduct />
      <Banner />
      <Testinominal />
      {/* <Hero /> */}
      <Footer />
    </div>
  );
}
