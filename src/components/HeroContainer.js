import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import TopTrailerListing from "./TopTrailerListing";

const HeroContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  if (movies === null) return;

  const trailerMoviesList =
    movies && movies.length > 0 ? movies.slice(0, 5) : [];

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <VideoTitle
        title={selectedMovie?.original_title || movies[0]?.original_title}
        overview={selectedMovie?.overview || movies[0]?.overview}
        releaseDate={selectedMovie?.release_date || movies[0]?.release_date}
        reviewStar={selectedMovie?.vote_average || movies[0]?.vote_average}
        originalLang={
          selectedMovie?.original_language || movies[0]?.original_language
        }
        voteCount={selectedMovie?.vote_count || movies[0]?.vote_count}
      />
      <VideoBackground movieId={selectedMovie?.id || movies[0]?.id} />
      <TopTrailerListing
        movieData={trailerMoviesList}
        onMovieClick={handleMovieClick}
      />
    </div>
  );
};

export default HeroContainer;
