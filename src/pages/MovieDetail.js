import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieBanner from "../components/MovieBanner";
import MovieInfo from "../components/MovieInfo";
import { detailMovieApi } from "../services/detailMovieApi";
import { addDetailMovie } from "../store/moviesSlice";
import Layout from "../components/Layout";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailInfo = useSelector((store) => store?.movies?.detailMovie);

  const getDetailMovie = async (id) => {
    try {
      const movieDetails = await detailMovieApi(id);

      dispatch(addDetailMovie(movieDetails));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDetailMovie(id);
  }, [id]);

  return (
    <Layout bodyClassName="bg-black h-screen">
      <div className="grid grid-cols-3 gap-4 pt-24 w-3/4 mx-auto">
        <div className="col-span-1 bg-lightblue text-center p-4">
          <MovieBanner posterImg={movieDetailInfo?.poster_path} />
        </div>
        <div className="col-span-2 bg-lightcoral bg-lightcoral text-center p-4 flex items-center justify-center">
          <MovieInfo movieDetailInfo={movieDetailInfo} />
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
