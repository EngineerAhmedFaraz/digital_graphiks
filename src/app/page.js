import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero1 from "./section/hero1/Hero1";
import SellerCard from "./section/seller_card/SellerCard";
import Banner from "./section/banner/Banner";
import Footer from "./components/footer/Footer";
import StepCard from "./section/step_card/StepCard";
import SpringCard from "./section/spring_sale/SpringCard";
import Blog from "./section/blog/Blog";
import Contact from "./section/contact/Contact";
import Slider1 from "./section/slider1/Slider1";
import Slider2 from "./section/slider2/Slider2";
import Result from "./section/result/Result";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero1 />
      <SellerCard />
      <Banner />
      <Slider2 />
      <Result />
      <Contact />
      <Slider1 />
      <SpringCard />
      <Blog />
      <StepCard />
      <Footer />
    </>
  );
};

export default Home;
