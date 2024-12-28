import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieSuggestions = () => {
  const searchedmovies = useSelector((store) => store?.gpt?.gptMoviesList);

  return (
    searchedmovies && (
      <div className="bg-black bg-opacity-70 pb-6">
        <MovieList title="Recommended Movies" movies={searchedmovies} />
      </div>
    )
  );
};

export default MovieSuggestions;
