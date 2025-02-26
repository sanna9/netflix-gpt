import React, { useEffect } from "react";

const MovieInfo = ({ movieDetailInfo }) => {
  const genre = () => {
    return movieDetailInfo?.genres?.map((genre) => genre?.name).join(" | ");
  };

  const spokenLanguages = () => {
    return movieDetailInfo?.spoken_languages
      ?.map((lang) => lang?.english_name)
      .join(" | ");
  };
  const productionCompanies = () => {
    return movieDetailInfo?.production_companies
      ?.map((company) => company?.name)
      .join(" | ");
  };

  useEffect(() => {
    genre();
    spokenLanguages();
    productionCompanies();
  });

  return (
    <div>
      <h1>{movieDetailInfo?.release_date?.split("-")[0]}</h1>
      <p>{movieDetailInfo?.vote_count}</p>
      <p>{movieDetailInfo?.vote_average}</p>
      <p>{movieDetailInfo?.original_language}</p>
      <p>Genre: {genre()}</p>
      <p>Spoken Language: {spokenLanguages()}</p>
      <p>Created By: {productionCompanies()}</p>
    </div>
  );
};

export default MovieInfo;
