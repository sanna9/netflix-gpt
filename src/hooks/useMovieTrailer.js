import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";

export const fetchMovieTrailer = (movieId) => {
  
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.trailerVideo);

    const getMovieVideos = async () => {
      try {
        if (!movieId) return; // Prevent API call if movieId is not provided

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );

        if (!response.ok) throw new Error("Failed to fetch movie videos");

        const json = await response.json();

        if (!json?.results || json.results.length === 0) {
          console.warn("No trailers found for this movie.");
          dispatch(addTrailerVideo(null)); // Store null to indicate no trailer available
          return;
        }

        const filterTrailer = json.results.filter(
          (video) => video.type === "Trailer"
        );

        const trailer =
          filterTrailer.length > 0 ? filterTrailer[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    if (!trailerVideo) getMovieVideos();


  return trailerVideo;
};

