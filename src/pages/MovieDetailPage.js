import React, { Fragment } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import { useParams } from "react-router-dom";
import CastList from "../components/casts/CastList";
import Trailer from "../components/trailer/Trailer";
import SimilarList from "../components/movies/SimilarList";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const { data } = useSWR(URL, fetcher);

  const movie = data ? data : {};

  return (
    <Fragment>
      <div className="w-full h-[800px] relative mt-10 rounded-2xl overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-[full] h-[400px] max-w-[720px] mx-auto z-40 -mt-[200px] relative mb-20">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </div>

      <h1 className="font-bold text-[45px] text-center mb-10">{data?.title}</h1>
      <div className="flex justify-center items-center gap-x-10 mb-10">
        {movie?.genres?.length > 0 &&
          movie.genres.map((item) => (
            <span
              key={item.id}
              className="relative cursor-pointer ease-linear px-6 py-4 border border-primary text-primary rounded-2xl transition-all duration-500 bg-gradient-to-r from-primary to-primary bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-white"
            >
              {item.name}
            </span>
          ))}
      </div>
      <div className="w-[600px] text-center leading-relaxed mx-auto text-2xl mb-20">
        {movie?.overview}
      </div>
      <CastList type={"credits"} movieId={`${movieId}`}></CastList>
      <Trailer type={"videos"} movieId={`${movieId}`}></Trailer>
      <section className="">
        <h1 className="font-bold text-[45px] text-center mb-10">Similar</h1>
        <SimilarList movieId={movieId}></SimilarList>
      </section>
    </Fragment>
  );
};


export default MovieDetailPage;
