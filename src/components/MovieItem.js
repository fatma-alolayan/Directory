import React from "react";
import { Link } from "react-router-dom";
import { Poster, MovieWrapper, MovieTitle } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <Link to={`/${movie.id}`}>
        <Poster src={movie.poster} alt="poster name" />
      </Link>
    </MovieWrapper>
  );
};

export default MovieItem;
