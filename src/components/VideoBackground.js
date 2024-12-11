import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=1&rel=0&controls=0&autoplay=1&mute=1&fs=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        modestbranding="1"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
