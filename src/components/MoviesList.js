import React from "react";
import movies from "../movies";
import MovieItem from "./MovieItem";
import { Grid, Header } from "../styles";

const MoviesList = ({ movies }) => {
  const movieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  return (
    <>
      <Header>Movie List</Header>
      <Grid>{movieList}</Grid>;
    </>
  );
};

export default MoviesList;
