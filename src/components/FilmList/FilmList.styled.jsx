import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmListContainer = styled.ul`
  list-style: none;
`;

export const FilmListItem = styled.li`
  &:hover,
  &:focus {
    h3 {
      color: #6c2ffc;
      transition: color 0.3s ease-in-out;
    }
  }
`;

export const FilmTitleLink = styled(Link)`
  text-decoration: none;
`;

export const FilmTitle = styled.h3`
  color: black;
  margin: 15px 140px;
`;
