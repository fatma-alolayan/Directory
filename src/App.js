import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import { Header } from "./styles";
import MovieDetail from "./components/MovieDetail";
import { Route, Switch } from "react-router";
import movies from "./movies";
//styles
import { GlobalStyle } from "./styles";

function App() {
  const [_movie, setMovie] = useState(movies);

  return (
    <div>
      <GlobalStyle />

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
