import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    trailerVideo: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo } =
  moviesSlice.actions;
export default moviesSlice.reducer;
