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
  },
});

export const { toggleGptSearchView, addGptMovieList } = gptSlice.actions;
export default gptSlice.reducer;
