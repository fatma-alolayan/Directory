import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";

import {
  Poster,
  MovieWrapper,
  MovieDetaileStyle,
  RecomendedMovie,
  RecoTitle,
  BackList,
} from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === +movieId);
  if (!movie) return <Redirect to="/" />;

  return (
    <>
      <Link to="/">
        <BackList>Movie List</BackList>
      </Link>
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

      <RecomendedMovie>
        <RecoTitle>Recommended Movies</RecoTitle>
        <Link to={`/${movies[0].id}`}>
          <img src={movies[0].poster} alt="poster name" />
        </Link>
        <Link to={`/${movies[3].id}`}>
          <img src={movies[3].poster} alt="poster name" />
        </Link>
      </RecomendedMovie>
    </>
  );
};

export default MovieDetail;
