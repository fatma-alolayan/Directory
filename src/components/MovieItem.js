import React from "react";
import movies from "../movies";

const MovieItem = ({ movie }) => {
  return <p>{movie.title}</p>;
};

export default MovieItem;
