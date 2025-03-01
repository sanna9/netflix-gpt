import React, { useEffect } from "react";
import nowPlayingMoviesApi from "../services/nowPlayingMoviesApi";
import HeroContainer from "../components/HeroContainer";
import BodyContainer from "../components/BodyContainer";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "../components/GptSearch";
import { addNowPlayingMovies, addPopularMovies } from "../store/moviesSlice";
import popularMoviesApi from "../services/popularMoviesApi";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.popularMovies);

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
    <Layout>
      <HeroContainer />
      <BodyContainer />
    </Layout>
  );
};

export default Browse;
