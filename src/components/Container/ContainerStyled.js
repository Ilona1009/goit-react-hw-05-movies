import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 48px 15px;

  @media screen and (min-width: 768px) {
    width: 748px;
  }

  @media screen and (min-width: 1440px) {
    width: 1420px;
  }
`;
