import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addPopularMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovie();
  }, []);

  return;
};

export default usePopularMovies;
