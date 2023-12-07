import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import {
  ItemStyled,
  ListStyled,
  LogoWraperStyled,
  NavStyled,
  TitleStyled,
} from './NavigationStyled';

export default Navigation = () => (
  <NavStyled>
    <LogoWraperStyled>
      <FaFilm></FaFilm>
      <TitleStyled>Kinoposhuk</TitleStyled>
    </LogoWraperStyled>

    <ListStyled>
      <ItemStyled>
        <NavLink to="/">Home</NavLink>
      </ItemStyled>
      <ItemStyled>
        <NavLink to="/movies">Movies</NavLink>
      </ItemStyled>
    </ListStyled>
  </NavStyled>
);
