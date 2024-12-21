// import { API_OPTIONS } from "../constants/constants";

// export const useMovieSearch = async (movie) => {
//   try {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
//         movie
//       )}&include_adult=false&language=en-US&page=1`,
//       API_OPTIONS
//     );
//     const json = await data.json();
//     return json.results;
//   } catch (error) {
//     console.error("Movie Search Error:", error);
//     return [];
//   }
// };
