import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieTrailer } from "../services/fetchMovieTrailer";
import { addTrailerVideo } from "../store/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useEffect(() => {
    const getTrailer = async () => {
      const trailer = await fetchMovieTrailer(movieId);
      dispatch(addTrailerVideo(trailer));
    };

    getTrailer();
  }, [movieId, dispatch]);

  return (
    <div>
      {trailerVideo?.key ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?modestbranding=1&rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
          modestbranding="1"
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;
