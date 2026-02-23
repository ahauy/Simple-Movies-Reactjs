import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MoviesCard from "../components/movies/MoviesCard";
import { useDebounce } from "../hooks/useDebounce";
//https://api.themoviedb.org/3/search/movie?query=

const MoviesPage = () => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const [filter, setFilter] = useState("")
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)

  const filterDebounce = useDebounce(filter, 500)

  function handleChange(e) {
    setFilter(e.target.value)
  }

  useEffect(() => {
    if(filterDebounce)
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${filterDebounce}&api_key=${API_KEY}`)
    else 
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  }, [filterDebounce])

  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];
  return (
    <div className="py-8 page-container">
      <div className="flex mb-10">
        <input
          className="outline-none bg-slate-800 p-4 text-white flex-1"
          placeholder="Type here to search ..."
          onChange={handleChange}
        ></input>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 && movies.map(item => (
          <MoviesCard key={item.id} item={item}></MoviesCard>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
