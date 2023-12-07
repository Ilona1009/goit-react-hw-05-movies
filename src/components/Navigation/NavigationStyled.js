import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoWraperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleStyled = styled.h1`
  font-size: 25px;
  color: #50c878;

  @media (min-width: 768px) {
    font-size: 35px;
  }

  @media (min-width: 1440px) {
    font-size: 50px;
  }
`;
export const ListStyled = styled.ul`
  display: flex;
  text-shadow: 1px 0 1px #50c878, 0 1px 1px #50c878, -1px 0 1px #50c878;
`;
export const ItemStyled = styled.li`
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }
`;
