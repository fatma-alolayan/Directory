import React from "react";
import { Link } from "react-router-dom";
import { Title, Poster, PosterWrap, MovieWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper>
      <Title>{movie.title}</Title>
      <Link to={`/${movie.id}`}>
        <Poster src={movie.poster} alt="poster name" />
      </Link>
    </MovieWrapper>
  );
};

export default MovieItem;
