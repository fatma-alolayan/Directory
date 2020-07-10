import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Poster, MovieWrapper, MovieDetaileStyle } from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === +movieId);
  if (!movie) return <Redirect to="/" />;

  return (
    <MovieDetaileStyle>
      <MovieWrapper>
        <h1>{movie.title}</h1>
        <Poster src={movie.poster} alt="poster name" />
        <p>{movie.released}</p>
        <p>{movie.runtime}</p>
        <p>{movie.genre}</p>
        <p>{movie.plot}</p>
      </MovieWrapper>
    </MovieDetaileStyle>
  );
};

export default MovieDetail;
