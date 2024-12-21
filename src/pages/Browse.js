import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroContainer from "../components/HeroContainer";
import BodyContainer from "../components/BodyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "../components/GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearchView = useSelector((store) => store?.gpt?.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <div className="">
          <GptSearch />
        </div>
      ) : (
        <>
          <HeroContainer />
          <BodyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
