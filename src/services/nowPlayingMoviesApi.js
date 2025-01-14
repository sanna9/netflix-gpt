import { API_OPTIONS } from "../constants/constants";

const nowPlayingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch now playing movies:", error);
  }
};

export default nowPlayingMovies;
