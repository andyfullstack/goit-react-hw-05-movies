import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MovieListItem,
  MovieTitle,
  MovieTitleLink,
  MoviesListContainer,
} from './FilmList.styled';

const FilmList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      {movies.map(
        ({ id, title }) =>
          title && (
            <MovieListItem key={id}>
              <MovieTitleLink to={`/movies/${id}`} state={{ from: location }}>
                <MovieTitle>{title}</MovieTitle>
              </MovieTitleLink>
            </MovieListItem>
          )
      )}
    </MoviesListContainer>
  );
};

export default FilmList;
