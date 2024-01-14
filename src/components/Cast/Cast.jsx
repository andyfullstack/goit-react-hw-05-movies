import React from 'react';

import { useFetchFilmCast } from 'components/helpers/useFetchFilmCast';
import {
  CastCharacter,
  CastContainer,
  CastHeading,
  CastImage,
  CastItem,
  CastList,
  CastName,
} from './Cast.styled';

const Cast = () => {
  const defaultImg =
    'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg';

  const movieCast = useFetchFilmCast();
  if (!movieCast.credits || movieCast.credits.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>
        There isn't any information about the movie cast
      </p>
    );
  }

  return (
    <CastContainer>
      <CastHeading>Movie cast</CastHeading>
      <CastList>
        {movieCast.credits.map(
          ({ movie_id, profile_path, original_name, character }) => (
            <CastItem key={movie_id}>
              <CastImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt={original_name}
                width={280}
                height={400}
              />
              <CastName>{original_name}</CastName>
              <CastCharacter>Character: {character}</CastCharacter>
            </CastItem>
          )
        )}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
