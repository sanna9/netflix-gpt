import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
