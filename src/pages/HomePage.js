import React, { Fragment } from "react";
import Banner from "../components/banner/Banner"
import MoviesList from "../components/movies/MoviesList"

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movies-layout page-container text-white mb-[60px]">
        <h2 className="capitalize text-[50px] font-bold mb-10">Now playing</h2>
        <MoviesList></MoviesList>
      </section>
      <section className="movies-layout page-container text-white">
        <h2 className="capitalize text-[50px] font-bold mb-10">
          Top rated movies
        </h2>
        <MoviesList title="top_rated"></MoviesList>
      </section>
    </Fragment>
  );
};

export default HomePage;
