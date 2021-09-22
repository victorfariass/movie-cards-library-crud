import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from './pages';
import './App.css';

// eslint-disable-next-line max-lines-per-function
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/movies/new">
          <NewMovie />
        </Route>
        <Route path="/movies/:id/edit">
          <EditMovie />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
