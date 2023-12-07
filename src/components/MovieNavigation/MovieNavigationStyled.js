import styled from 'styled-components';

export const AdditionalTitleStyled = styled.p`
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 24, 121, 0.9) 43%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  padding: 15px;
  margin-bottom: 30px;
  text-shadow: 1px 0 1px #8c1b21, 0 1px 1px #8c1b21, -1px 0 1px #8c1b21,
    0 -1px 1px #8c1b21;
`;

export const NavigationItemStyled = styled.li`
  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }
`;
