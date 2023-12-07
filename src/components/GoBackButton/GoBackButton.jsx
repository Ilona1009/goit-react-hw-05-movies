import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export default GoBackButton = ({ to }) => {
  return (
    <Link to={to}>
      <FaChevronLeft />
      <span>повернення назад</span>
      <FaChevronLeft />
    </Link>
  );
};

GoBackButton.propTypes = {
  to: PropTypes.object,
};
