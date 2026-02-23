import React from "react";
import BannerItem from "./BannerItem.js";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Banner = () => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const { data } = useSWR(URL, fetcher);
  const movies = data?.results || [];
  return (
    <section className="banner page-container h-[750px] mb-[60px] overflow-hidden">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.key}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
