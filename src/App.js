import React from "react";
import MoviesList from "./components/MoviesList";
import { Header } from "./styles";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <div>
      <Header>Movie List</Header>;
      <MoviesList />;
      <MovieDetail />;
    </div>
  );
}

export default App;
