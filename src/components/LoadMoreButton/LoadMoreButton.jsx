import PropTypes from 'prop-types';
import { LoadMore } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Button
    </LoadMore>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
