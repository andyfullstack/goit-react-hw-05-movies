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

  const sortedMovies = movies
    .filter(({ title }) => title)
    .sort((a, b) => a.title.localeCompare(b.title));
  const numberOfMoviesToShow = 15; 

  return (
    <MoviesListContainer>
      {sortedMovies.slice(0, numberOfMoviesToShow).map(({ id, title }) => (
        <MovieListItem key={id}>
          <MovieTitleLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieTitle>{title}</MovieTitle>
          </MovieTitleLink>
        </MovieListItem>
      ))}
    </MoviesListContainer>
  );
};

export default FilmList;
