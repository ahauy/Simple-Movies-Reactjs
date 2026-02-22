import React, { use, useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "../../config";

const MoviesList = ({ title = "now_playing" }) => {
  const API_KEY = "7897ba5182c9dda4ca14e49bc2c46c4e";
  const URL = `https://api.themoviedb.org/3/movie/${title}?api_key=${API_KEY}&language=vi-VN&page=1`;
  const { data } = useSWR(URL, fetcher);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <div className="movies-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MoviesCard item={item}></MoviesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MoviesList;
