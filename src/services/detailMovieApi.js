import { API_OPTIONS } from "../constants/constants";

export const detailMovieApi = async (movieId) => {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  } catch (error) {
    console.error("Movie detail error", error);
  }
};
