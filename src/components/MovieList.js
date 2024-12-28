import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const flattenedMovies = movies?.flat?.(Infinity) || movies || []; // Handle linear and nested arrays
  console.log("flattenedMovies", flattenedMovies);
  return (
    <div className="">
      <h1 className="text-white text-3xl py-6">{title}</h1>

      <div className="flex overflow-x-auto custom-scroll-none">
        <div className="flex">
          {flattenedMovies.length > 0 ? (
            <>
              {flattenedMovies?.map((movie) => (
                <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
              ))}
            </>
          ) : (
            "No movies Found"
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
