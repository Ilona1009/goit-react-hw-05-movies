import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoaderSpinner } from 'components/Loader/Loader';
import Message from 'components/Message/Message';

import api from 'services/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { results } = await api.fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.error(
          'Щось відбулося не так із запитом до відеотеки. подробиці помилки тут :',
          error
        );
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <div>
                  <p>{author}</p>
                  <b>{content}</b>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p> У нас немає рецензій на цей фільм, тож, довіртеся інтуіції</p>
      )}

      {isLoading && <LoaderSpinner />}

      {error && (
        <Message>
          <h2>Сервіс пішов попоїсти. Можливо скоро повернеться.</h2>
        </Message>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.object,
  author: PropTypes.string,
  content: PropTypes.string,
};
