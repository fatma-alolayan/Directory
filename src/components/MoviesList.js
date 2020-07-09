import React from "react";
import movies from "../movies";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const movieList = movies.map((movie) => <MovieItem movie={movie} />);

  return { movieList };
};

export default MoviesList;
