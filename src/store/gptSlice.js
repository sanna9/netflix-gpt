import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesList: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieList: (state, action) => {
      state.gptMoviesList = action.payload;
    },
    clearGptMovieList: (state, action) => {
      state.gptMoviesList = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovieList, clearGptMovieList } =
  gptSlice.actions;
export default gptSlice.reducer;
