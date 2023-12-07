import styled from 'styled-components';

export const ActorPhotoStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(107, 46, 6, 0.7);
  object-fit: cover;
  object-position: top;

  @media screen and (min-width: 768px) {
    object-fit: cover;
    object-position: top;
  }
`;

export const ActorNameStyled = styled.p`
  margin: 5px 0px;
  color: rgba (0, 0, 0, 0.75);
`;

export const ActorCharacterStyled = styled.p`
  color: wheat;
`;
