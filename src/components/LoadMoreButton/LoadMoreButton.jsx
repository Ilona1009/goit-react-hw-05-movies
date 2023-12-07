import PropTypes from 'prop-types';


export default LoadMoreButton = ({ onClick }) => {
  <div>
    <button type="button" onClick={onClick}></button>
  </div>;
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};


