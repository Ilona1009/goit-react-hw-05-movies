import PropTypes from 'prop-types';
import posterBg from 'utilities/images/poster.png';
import {
  DescriptionStyled,
  GenresItemStyled,
  GenresListStyled,
  ImgPosterStyled,
  InfoWrapperStyled,
  MainWrapperStyled,
  ReleseDataStyled,
  TitleStyled,
  TitleWrapperStyled,
  ValueStyled,
  VoteAverageStyled,
  VoteCountStyled,
  VoteWrapperStyled,
} from './MovieDetailsStyled';

export default function MovieDetails({ movieInfo }) {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movieInfo;

  return (
    <>
      <MainWrapperStyled>
        <ImgPosterStyled
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : posterBg
          }
          alt={original_title}
        />
        <InfoWrapperStyled>
          <TitleWrapperStyled>
            <TitleStyled>{original_title}</TitleStyled>
            <ReleseDataStyled>{release_date}</ReleseDataStyled>
          </TitleWrapperStyled>
          <GenresListStyled>
            {genres &&
              genres.map(({ name, id }) => (
                <GenresItemStyled key={id}>{name}</GenresItemStyled>
              ))}
          </GenresListStyled>
          <DescriptionStyled>{overview}</DescriptionStyled>
          <VoteWrapperStyled>
            <VoteAverageStyled>
              {' '}
              Vote average
              <ValueStyled>{vote_average}</ValueStyled>
            </VoteAverageStyled>
            <VoteCountStyled>
              {' '}
              Vote count
              <ValueStyled>{vote_count}</ValueStyled>
            </VoteCountStyled>
          </VoteWrapperStyled>
        </InfoWrapperStyled>
      </MainWrapperStyled>
    </>
  );
}

MovieDetails.propTypes = {
  movieInfo: PropTypes.shape({
    original_title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};
