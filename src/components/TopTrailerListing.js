import React from "react";
import { IMG_CDN_URL } from "../constants/constants";

const TopTrailerListing = ({ movieData, onMovieClick }) => {
  console.log("movieData", movieData);
  return (
    <ul className="px-20 w-30 absolute  flex z-index-9 bottom-44 right-0 cursor-pointer">
      {movieData?.map((movie, index) => (
        <div key={movie?.id} className="relative group mx-1">
          {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center p-2 opacity-0 group-hover:opacity-100 text-xs">
            {movie?.title}
          </div> */}
          <li key={movie?.id} onClick={() => onMovieClick(movie)}>
            <img
              alt="movie-card"
              className="w-20 h-14 rounded"
              src={IMG_CDN_URL + movie?.poster_path}
            />
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TopTrailerListing;
