import React, { useCallback, useEffect, useState } from "react";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";
import { LOGIN_BG } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "../hooks/useTranslation";
import { addGptMovieList, clearGptMovieList } from "../store/gptSlice";
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
      alert("Search text is empty. Please enter value.");
      return;
    }

    setIsLoading(true);
    try {
      // Get movie suggestions from GPT
      const moviesList = await openAiSearch(searchText);
      // Search for each movie in TMDB
      const tmdbResults = await Promise.all(
        moviesList.map((movie) => movieSearchApi(movie))
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

  useEffect(() => {
    dispatch(clearGptMovieList());
  }, []);

  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGIN_BG} alt="logo" className="h-screen w-screen" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative">
        <SearchBar
          placeholder={t("gptSearchPlaceholder")}
          btnLabel={t("search")}
          searchText={searchText}
          onSearchTextChange={setSearchText}
          onClick={handleGptSearch}
        />
        <MovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
