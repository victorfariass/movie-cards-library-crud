import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({
      movie: result,
    }));
  }

  async handleClick(deleteMovie) {
    await movieAPI.deleteMovie(deleteMovie);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!movie) return <Loading />;

    return (
      <div data-testid="movie-details" className="movie-details-container">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="movie-details-details">
          <p>{ `Title: ${title}`}</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="movie-details-buttons">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/movie-cards-library-crud">VOLTAR</Link>
          <Link
            to="/movie-cards-library-crud"
            onClick={ () => this.handleClick(id) }
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
