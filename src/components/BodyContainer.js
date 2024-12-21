import React from "react";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const BodyContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-60 z-10 relative">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default BodyContainer;
