import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Poster, PosterWrap, MovieWrapper, Title } from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === +movieId);
  if (!movie) return <Redirect to="/" />;

  return (
    <MovieWrapper>
      <Title>{movie.title}</Title>
      <Poster src={movie.poster} alt="poster name" />
      <p>{movie.released}</p>
      <p>{movie.runtime}</p>
      <p>{movie.genre}</p>
      <p>{movie.plot}</p>
    </MovieWrapper>
  );
};

export default MovieDetail;
