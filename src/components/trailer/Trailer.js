import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

const Trailer = (props) => {
  const { type, movieId } = props;
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/${type}?api_key=${API_KEY}`;
  const { data } = useSWR(URL, fetcher);
  const trailer = data?.results[0] || {};
  return (
    <section className="mb-20">
      <h1 className="font-bold text-[45px] text-center mb-10">Trailer</h1>
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${trailer.key}?si=hziTcs64OACRnzLb`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Trailer;
