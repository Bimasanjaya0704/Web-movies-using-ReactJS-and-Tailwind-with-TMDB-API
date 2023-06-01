import React from "react";
import Navbar from "../Components/Navbar";
import CardMovie from "../Components/CardMovie";
import Beranda from "../Components/Beranda";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Beranda />
      <CardMovie />
      <Footer />
    </>
  );
};

export default Home;
