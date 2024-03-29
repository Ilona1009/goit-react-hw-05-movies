import styled from 'styled-components';

export const CastListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -20px 0 20px -20px;
`;

export const ActorStyled = styled.li`
  flex-basis: calc(100% / 2 - 20px);
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    flex-basis: calc(100% / 4 - 20px);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 6 - 20px);
  }
`;
