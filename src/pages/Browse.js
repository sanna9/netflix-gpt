import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "../components/HeroContainer";
import BodyContainer from "../components/BodyContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <HeroContainer />
      <BodyContainer />
    </div>
  );
};

export default Browse;
