import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-white text-3xl py-6">{title}</h1>

      <div className="flex overflow-x-auto custom-scroll-none">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
