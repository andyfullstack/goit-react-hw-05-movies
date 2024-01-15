import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FilmListItem,
  FilmTitle,
  FilmTitleLink,
  FilmListContainer,
} from './FilmList.styled';

const FilmList = ({ movies }) => {
  const location = useLocation();

  const sortedFilms = movies
    .filter(({ title }) => title)
    .sort((a, b) => a.title.localeCompare(b.title));
  const numberOfFilmsToShow = 25;

  return (
    <FilmListContainer>
      {sortedFilms.slice(0, numberOfFilmsToShow).map(({ id, title }) => (
        <FilmListItem key={id}>
          <FilmTitleLink to={`/movies/${id}`} state={{ from: location }}>
            <FilmTitle>{title}</FilmTitle>
          </FilmTitleLink>
        </FilmListItem>
      ))}
    </FilmListContainer>
  );
};

export default FilmList;
