import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import {
  DivStyled,
  ImgStyled,
  VoteAverageStyled,
  VoteCountStyled,
  VoteWraperStyled,
} from './MoviePreviewStyled';
import posterBg from 'utilities/images/poster.png';

export default MoviePreview = ({ title, poster, voteCount, voteAverage }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : posterBg;

  return (
    <DivStyled>
      <ImgStyled src={posterUrl} alt={title} title={title} />
      <VoteAverageStyled>{voteAverage}</VoteAverageStyled>

      <VoteWraperStyled>
        <FaHeart />
        <VoteCountStyled>{voteCount}</VoteCountStyled>
      </VoteWraperStyled>

      <VoteCountStyled>{title ? title : 'фільм без підпису'}</VoteCountStyled>
    </DivStyled>
  );
};

MoviePreview.defaultProps = {
  poster: '',
  vote: null,
};

MoviePreview.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  voteCount: PropTypes.number,
  voteAverage: PropTypes.number,
};
