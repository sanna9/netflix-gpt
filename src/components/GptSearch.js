import React, { useCallback, useState } from "react";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";
import { API_OPTIONS, LOGIN_BG } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "../hooks/useTranslation";
import openAi from "../utils/openAi";
import Error from "../pages/Error";
import { addGptMovieList } from "../store/gptSlice";
import { movieSearchApi } from "../services/movieSearchApi";
import { openAiSearch } from "../services/openAiSearch";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);
  const t = useTranslation(langKey, true);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGptSearch = useCallback(async () => {
    if (!searchText.trim()) {
      console.warn("Search text is empty. Please enter a query.");
      return;
    }

    setIsLoading(true);
    try {
      // Get movie suggestions from GPT
      const moviesList = await openAiSearch(searchText);

      // Search for each movie in TMDB
      const tmdbResults = await Promise.all(
        moviesList.map((movie) => movieSearchApi(movie.trim()))
      );

      dispatch(addGptMovieList(tmdbResults));
    } catch (error) {
      if (error.response?.status === 429) {
        console.error("Rate limit exceeded. Please try again later.");
      } else {
        console.error("Error during search:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [searchText, dispatch]);

  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_BG} alt="logo" className="h-screen w-screen" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <SearchBar
        placeholder={t("gptSearchPlaceholder")}
        btnLabel={t("search")}
        searchText={searchText} // Pass current search text
        onSearchTextChange={setSearchText} // Update state on text change
        onClick={handleGptSearch} // Trigger API call on click
      />
      <MovieSuggestions />
    </div>
  );
};

export default GptSearch;
