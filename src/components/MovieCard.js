import React from "react";
import { IMG_CDN_URL } from "../constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 m-1">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
