import React from "react";
import Navbar from "../Components/Navbar";
import CardMovie from "../Components/CardMovie";
import Beranda from "../Components/Beranda";
import Footer from "../Components/Footer";
import SearchMovie from "../Components/SearchMovie";

const Home = () => {
  return (
    <>
      <Navbar />
      <Beranda />
<SearchMovie/>
      <CardMovie />
      <Footer />
    </>
  );
};

export default Home;
