import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  SharedLayoutContainer,
  StyledFallback,
  StyledH3,
  StyledLink,
  StyledNav,
} from './Layout.styled';

export const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <StyledNav>
        <StyledLink to="/">
          <StyledH3>Home</StyledH3>
        </StyledLink>

        <StyledLink to="/movies">
          <StyledH3>Movies</StyledH3>
        </StyledLink>
      </StyledNav>

      <Suspense fallback={<StyledFallback>Loading page...</StyledFallback>}>
        <Outlet />
      </Suspense>
    </SharedLayoutContainer>
  );
};

