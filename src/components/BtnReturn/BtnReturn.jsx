import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { StyledButton } from './BtnReturn.styled';

export const BtnReturn = ({ path }) => {
  return (
    <Link to={path}>
      <StyledButton type="button">
        <BsArrowLeft style={{ marginRight: '5px' }} />
        Back
      </StyledButton>
    </Link>
  );
};
