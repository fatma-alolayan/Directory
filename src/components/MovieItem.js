import React from "react";
import movies from "../movies";
import { Title, Poster, PosterWrap, MovieWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper>
      <Title>{movie.title}</Title>
      <Poster onClick={MovieDetail} src={movie.poster} alt="poster name" />
    </MovieWrapper>
  );
};

export default MovieItem;
