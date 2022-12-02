import React from "react";
import BannerPromo from "../Children/BannerPromo";
import Footer from "../Children/Footer";
import Header from "../Children/Header";
import MoviePromo from "../Children/MoviePromo";
import ShowPromo from "../Children/ShowPromo";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerPromo />
      <ShowPromo />
      <MoviePromo />
      <Footer/>
    </div>
  );
};

export default Home;
