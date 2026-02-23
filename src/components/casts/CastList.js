import React, { Fragment } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import CastCard from "./CastCard";

const CastList = (props) => {
  const { type, movieId } = props
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/${type}?api_key=${API_KEY}`;
  const { data } = useSWR(URL, fetcher);

  const casts = data?.cast || [];

  return (
    <Fragment>
      <h1 className="font-bold text-[45px] text-center mb-10">Casts</h1>
      <div className="casts-list mb-20">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {casts?.length > 0 &&
            casts.slice(0, 8).map((item) => (
              <SwiperSlide key={item.id}>
                <CastCard item={item}></CastCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default CastList;