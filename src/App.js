import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import { Header } from "./styles";
import MovieDetail from "./components/MovieDetail";
import { Route, Switch } from "react-router";
import movies from "./movies";

function App() {
  const [_movie, setMovie] = useState(movies);

  return (
    <div>
      <Header>Movie List</Header>;
      <Switch>
        <Route path="/:movieId">
          <MovieDetail movies={_movie} />
        </Route>
        <Route path="/">
          <MoviesList movies={_movie} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
