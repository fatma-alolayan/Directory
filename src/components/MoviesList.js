import React from "react";
import movies from "../movies";
import MovieItem from "./MovieItem";
import { PosterWrap } from "../styles";

const MoviesList = () => {
  const movieList = movies.map((movie) => <MovieItem movie={movie} />);

  return <PosterWrap>{movieList}</PosterWrap>;
};

export default MoviesList;
