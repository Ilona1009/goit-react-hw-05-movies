import PropTypes from 'prop-types';
import actorBg from 'utilities/images/actor.png';
import {
  ActorCharacterStyled,
  ActorNameStyled,
  ActorPhotoStyled,
} from './ActorStyled';

export default Actor = ({ photo, name, character }) => {
  const photoUrl = photo ? `https://image.tmdb.org/t/p/w300${photo}` : actorBg;

  return (
    <div>
      <div>
        <ActorPhotoStyled src={photoUrl} alt={name} />
      </div>
      <ActorNameStyled>{name}</ActorNameStyled>
      <ActorCharacterStyled>
        <span>Character : </span>
        <b>{character}</b>
      </ActorCharacterStyled>
    </div>
  );
};

Actor.defaultProps = {
  photo: actorBg,
};

Actor.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
