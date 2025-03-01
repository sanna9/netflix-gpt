import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";

const MovieInfo = ({ movieDetailInfo = {} }) => {
  const {
    title,
    genres = [],
    spoken_languages = [],
    production_companies = [],
    release_date,
    vote_count,
    vote_average,
    original_language,
  } = movieDetailInfo || {};

  const genreMovie = useMemo(
    () => genres.map((genre) => genre?.name).join(" | ") || "N/A",
    [genres]
  );

  const spokenLanguages = useMemo(
    () =>
      spoken_languages.map((lang) => lang?.english_name).join(" | ") || "N/A",
    [spoken_languages]
  );

  const productionCompanies = useMemo(
    () =>
      production_companies
        .slice(0, 2)
        .map((company) => company?.name)
        .join(" | ") || "N/A",
    [production_companies]
  );

  return (
    <section className="text-white space-y-4" aria-labelledby="movie-title">
      <h1 id="movie-title" className="text-4xl font-bold pb-3 text-left">
        {title || "Unknown Title"}
      </h1>

      <div className="flex justify-between text-sm pb-8">
        <div className="flex gap-4" aria-label="Movie metadata">
          <p>{release_date?.split("-")[0] || "N/A"}</p>
          <span aria-hidden="true">|</span>
          <p>{vote_count ?? "N/A"} Votes</p>
          <span aria-hidden="true">|</span>
          <p className="capitalize">
            <abbr title="Original Language">{original_language || "N/A"}</abbr>
          </p>
        </div>
        <div>
          <span
            className="flex gap-4 items-center text-yellow-500"
            aria-label={`Average rating ${vote_average ?? "N/A"}`}
          >
            <FaStar /> {vote_average ?? "N/A"}
          </span>
        </div>
      </div>

      <dl className="space-y-2">
        {genres.length > 0 && (
          <div className="flex justify-between">
            <dt className="font-semibold pr-2">Genre:</dt>
            <dd>{genreMovie}</dd>
          </div>
        )}

        {spoken_languages.length > 0 && (
          <div className="flex justify-between">
            <dt className="font-semibold pr-2">Spoken Language:</dt>
            <dd>{spokenLanguages}</dd>
          </div>
        )}

        {production_companies.length > 0 && (
          <div className="flex justify-between">
            <dt className="font-semibold pr-2">Created By: </dt>
            <dd> {productionCompanies}</dd>
          </div>
        )}
      </dl>
    </section>
  );
};

export default MovieInfo;
