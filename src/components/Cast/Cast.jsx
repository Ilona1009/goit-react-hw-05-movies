import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actor from 'components/Actor/Actor';
import { LoaderSpinner } from 'components/Loader/Loader';
import Message from 'components/Message/Message';

import api from 'services/api';
import { ActorStyled, CastListStyled } from './CastStyled';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { cast } = await api.fetchCast(movieId);
        setActors(cast);
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
    <>
      {actors.length > 0 ? (
        <CastListStyled>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <ActorStyled key={id}>
                <Actor photo={profile_path} name={name} character={character} />
              </ActorStyled>
            );
          })}
        </CastListStyled>
      ) : (
        <p> Інформації про цього актора, нажаль, немає в базі даних</p>
      )}
      {isLoading && <LoaderSpinner />}

      {error && (
        <Message>
          <h2>Сервіс тимчасово недоступний, спробуйте, будьласка, пізніше</h2>
        </Message>
      )}
    </>
  );
}
