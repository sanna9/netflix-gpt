import React from "react";
import { IMG_CDN_URL } from "../constants/constants";

const MovieBanner = ({ posterImg }) => {
  return (
    <div>
      <img src={IMG_CDN_URL + posterImg} alt="movie poster" />
    </div>
  );
};

export default MovieBanner;
