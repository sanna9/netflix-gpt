import React, { useEffect } from "react";
import Header from "./Header";
import nowPlayingMoviesApi from "../services/nowPlayingMoviesApi";
import HeroContainer from "../components/HeroContainer";
import BodyContainer from "../components/BodyContainer";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "../components/GptSearch";
import { addNowPlayingMovies, addPopularMovies } from "../store/moviesSlice";
import popularMoviesApi from "../services/popularMoviesApi";

const Browse = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.popularMovies);
  const showGptSearchView = useSelector((store) => store?.gpt?.showGptSearch);

  useEffect(() => {
    !nowPlayingMovies &&
      nowPlayingMoviesApi()
        .then((movies) => dispatch(addNowPlayingMovies(movies)))
        .catch((error) =>
          console.error("Error fetching now playing movies in Browse:", error)
        );

    !popularMovies &&
      popularMoviesApi()
        .then((movies) => dispatch(addPopularMovies(movies)))
        .catch((error) =>
          console.error("Error fetching now playing movies in Browse:", error)
        );
  }, [nowPlayingMovies, popularMovies]);

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
