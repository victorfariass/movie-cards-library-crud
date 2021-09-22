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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/movie-cards-library-crud" component={ MovieList } />
        <Route path="/movie-cards-library-crud/movies/new" component={ NewMovie } />
        <Route path="/movie-cards-library-crud/movies/:id/edit" component={ EditMovie } />
        <Route path="/movie-cards-library-crud/movies/:id" component={ MovieDetails } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
