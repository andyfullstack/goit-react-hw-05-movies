import React from 'react';

import {
  AdditionalInfoHeading,
  GenresHeading,
  GenresList,
  FilmDetails,
  FilmImage,
  FilmInfoContainer,
  FilmTitle,
  OverviewHeading,
  OverviewText,
  ReleaseDate,
  UserScore,
} from './FilmInfo.styled';

const FilmInfo = ({
  movie: { title, poster_path, release_date, overview, genres, vote_average },
}) => {
  const defaultImg =
    'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg';

  const genreList = genres
    ? genres.map(elem => elem.name).join(',')
    : 'There is no information yet';

  return (
    <>
      <FilmInfoContainer>
        <FilmImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          width={280}
        />
        <FilmDetails>
          {title ? (
            <>
              <FilmTitle>{title}</FilmTitle>
              <ReleaseDate>{release_date}</ReleaseDate>
            </>
          ) : (
            <>
              <FilmTitle>Title:</FilmTitle>
              <p>No info</p>
            </>
          )}
          <UserScore>User Score: {vote_average || 'No info'}</UserScore>
          <OverviewHeading>Overview:</OverviewHeading>
          <OverviewText>{overview ? overview : 'No info'}</OverviewText>
          <GenresHeading>Genres:</GenresHeading>
          <GenresList>{genreList}</GenresList>
        </FilmDetails>
      </FilmInfoContainer>
      <AdditionalInfoHeading>Additional information</AdditionalInfoHeading>
    </>
  );
};

export default FilmInfo;
