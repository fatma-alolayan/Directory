import React from "react";
import { useParams, Redirect } from "react-router-dom";
//import RecomendedMovie from "./RecomendedMovie";
import {
  Poster,
  MovieWrapper,
  MovieDetaileStyle,
  RecomendedMovie,
  RecoTitle,
} from "../styles";

const MovieDetail = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === +movieId);
  if (!movie) return <Redirect to="/" />;

  return (
    <>
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
        <img src={movies[0].poster} alt="poster name" />
        <h4>{movies[0].title}</h4>

        <img src={movies[3].poster} alt="poster name" />
        <h4>{movies[3].title}</h4>
      </RecomendedMovie>
    </>
  );
};

export default MovieDetail;
