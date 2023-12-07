import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from 'components/MoviePreview/MoviePreview';
import { LiStyled, MoviesListStyled } from './MoviesListStyled';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies.map(
        (
          { id, original_title, poster_path, vote_average, vote_count },
          index
        ) => {
          return (
            <LiStyled key={index}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <MoviePreview
                  title={original_title}
                  poster={poster_path}
                  voteAverage={vote_average}
                  voteCount={vote_count}
                />
              </Link>
            </LiStyled>
          );
        }
      )}
    </MoviesListStyled>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string,
    })
  ).isRequired,
};
