import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";

const SimilarList = ({movieId}) => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`;
  const { data } = useSWR(URL, fetcher);

  const movieSimilars = data?.results || []

  console.log(data)

  return (
    <div className="movies-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movieSimilars.length > 0 &&
          movieSimilars.map((item) => (
            <SwiperSlide key={item.id}>
              <MoviesCard item={item}></MoviesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SimilarList;
