import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useFetchFilmsDetails } from 'components/helpers/useFetchFilmsDetails';
import { BtnReturn } from 'components/BtnReturn/BtnReturn';
import Loader from 'components/Loader/Loader';
import FilmInfo from 'components/FilmInfo/FilmInfo';
import {
  StyledLinkItem,
  StyledLinkText,
  StyledLinksList,
  StyledMovieDetails,
} from './FilmDetails.styled';

const FilmDetails = () => {
  const { movie, error, loading } = useFetchFilmsDetails();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  return (
    <StyledMovieDetails>
      {loading && <Loader />}
      {error && <h3>Try to reload the page</h3>}
      <BtnReturn path={goBack.current} />
      {movie && <FilmInfo movie={movie} />}
      <StyledLinksList>
        <StyledLinkItem>
          <Link to="cast">
            <StyledLinkText>Cast</StyledLinkText>
          </Link>
        </StyledLinkItem>
        <StyledLinkItem>
          <Link to="reviews">
            <StyledLinkText>Reviews</StyledLinkText>
          </Link>
        </StyledLinkItem>
      </StyledLinksList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledMovieDetails>
  );
};

export default FilmDetails;
